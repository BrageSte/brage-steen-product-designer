import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { chromium } from "playwright";

// Kjøres mot et ferdig bygg i Wrangler: node scripts/kontroller-portefolje.mjs [base-URL]
const base = process.argv[2] || "http://127.0.0.1:8787";
const output = "output/playwright/j1";
await mkdir(output, { recursive: true });
const browser = await chromium.launch({
  headless: true,
  ...(process.env.PLAYWRIGHT_CHANNEL ? { channel: process.env.PLAYWRIGHT_CHANNEL } : {}),
});
const results = [];
const errors = [];
const cases = ["bsclimbing", "sorting-guide", "headset", "seaweed", "avfallsportalen"];
const fragments = [
  { slug: "headset", id: "model" },
  { slug: "sorting-guide", id: "prototype" },
  { slug: "seaweed", id: "reflection" },
];

async function aligned(page, id) {
  await page.waitForFunction((targetId) => {
    const target = document.getElementById(targetId);
    if (!target) return false;
    const top = target.getBoundingClientRect().top;
    const stickyBottom = document.querySelector("[data-project-bar]")?.getBoundingClientRect().bottom
      ?? document.querySelector(".site-header")?.getBoundingClientRect().bottom ?? 0;
    const atBottom = document.documentElement.scrollHeight - innerHeight - scrollY <= 3;
    // En kort siste seksjon kan ikke justeres helt opp uten tomrom etter bunnteksten.
    return Math.abs(top - stickyBottom) <= 3
      || (atBottom && top >= stickyBottom - 3 && top < innerHeight);
  }, id, { timeout: 8000 });
}

try {
  for (const width of [1440, 390]) {
    const context = await browser.newContext({
      viewport: { width, height: width === 390 ? 844 : 1000 },
      reducedMotion: "reduce",
    });
    const page = await context.newPage();
    page.on("pageerror", (error) => errors.push({ width, url: page.url(), error: error.message }));

    for (const slug of cases) {
      const response = await page.goto(`${base}/projects/${slug}`);
      assert.equal(response.status(), 200);
      await page.locator("main").waitFor();
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false,
        `${slug}: horisontal sidescroll ved ${width}px`);
    }
    results.push({ width, check: "fem prosjektruter", status: "bestått" });

    for (const { slug, id } of fragments) {
      await page.goto(`${base}/projects/${slug}#${id}`);
      await aligned(page, id);
      await page.reload();
      await aligned(page, id);
      results.push({ width, check: `${slug}#${id}: direkte og oppdatering`, status: "bestått" });
    }

    await page.goto(`${base}/projects/headset`);
    await page.getByRole("navigation", { name: "Prosjektmeny" })
      .getByRole("link", { name: "3D Model", exact: true }).click();
    assert.equal(new URL(page.url()).hash, "#model");
    await aligned(page, "model");
    await page.goBack();
    await page.waitForFunction(() => !location.hash && scrollY < 5);
    await page.goForward();
    await aligned(page, "model");
    results.push({ width, check: "ankerklikk og tilbake/frem", status: "bestått" });

    if (width === 390) {
      await page.goto(base);
      const open = page.getByRole("button", { name: "Åpne meny", exact: true });
      await open.waitFor();
      for (let n = 0; n < 7; n++) {
        await page.keyboard.press("Tab");
        const hiddenFocus = await page.evaluate(() => {
          const element = document.activeElement;
          if (!element || element === document.body) return false;
          const rect = element.getBoundingClientRect();
          return rect.x >= innerWidth || rect.right <= 0;
        });
        assert.equal(hiddenFocus, false, "Lukket meny inneholder skjulte tab-stopp");
      }
      await open.click();
      await page.getByRole("navigation", { name: "Mobilmeny" }).waitFor();
      await page.keyboard.press("Escape");
      assert.equal(await open.getAttribute("aria-expanded"), "false");
      assert.equal(await open.evaluate((element) => element === document.activeElement), true);
      await open.click();
      await page.getByRole("navigation", { name: "Mobilmeny" })
        .getByRole("link", { name: "Om meg", exact: true }).click();
      await page.waitForURL("**/about/");
      assert.equal(await open.getAttribute("aria-expanded"), "false");
      assert.equal(await page.evaluate(() => document.body.style.overflow), "");
      results.push({ width, check: "mobilmeny: Tab, Escape, fokusretur og navigasjon", status: "bestått" });

      await page.goto(`${base}/projects/headset`);
      await page.getByRole("navigation", { name: "Prosjektmeny" })
        .getByRole("link", { name: "3D Model", exact: true }).click();
      await aligned(page, "model");
      await open.click();
      await page.waitForFunction(() => document.getElementById("mobile-navigation")?.contains(document.activeElement));
      await page.goBack();
      await page.waitForFunction(() => {
        const trigger = document.querySelector('[aria-controls="mobile-navigation"]');
        return trigger?.getAttribute("aria-expanded") === "false" && trigger === document.activeElement;
      });
      results.push({ width, check: "tilbake med åpen meny: lukking og fokusretur", status: "bestått" });
    }

    await page.goto(`${base}/projects/avfallsportalen`);
    await page.locator("iframe").scrollIntoViewIfNeeded();
    const demo = page.frameLocator("iframe");
    await demo.getByRole("button", { name: "Avfallsreisen", exact: true }).waitFor();
    for (let step = 1; step < 8; step++) {
      await demo.getByRole("button", { name: "Neste →", exact: true }).click();
      await demo.getByText(`Steg ${step + 1} av 8`, { exact: true }).waitFor();
    }
    await demo.getByRole("button", { name: /Ta quizen/ }).click();
    for (let question = 1; question <= 10; question++) {
      await demo.getByText(`Spørsmål ${question} av 10`, { exact: true }).waitFor();
      const answer = question === 10
        ? demo.getByRole("button", { name: "19%", exact: true })
        : demo.locator("#quizQuestion").getByRole("button", { pressed: false }).first();
      if (question <= 2) {
        await answer.focus();
        await answer.press(question === 1 ? "Space" : "Enter");
      } else {
        await answer.click();
      }
      await demo.getByRole("button", { name: question === 10 ? "Se resultat" : "Neste →", exact: true }).click();
    }
    await demo.getByText("1/10", { exact: true }).waitFor();
    await page.screenshot({ path: `${output}/quiz-${width}.png` });
    await demo.getByRole("button", { name: /Prøv igjen/ }).click();
    await demo.getByText("Spørsmål 1 av 10", { exact: true }).waitFor();
    await demo.getByRole("button", { name: "Neste →", exact: true }).isDisabled()
      .then((disabled) => assert.equal(disabled, true));
    results.push({ width, check: "åtte steg, ti spørsmål, 1/10 og omstart", status: "bestått" });

    await demo.getByRole("button", { name: "Kommuner", exact: true }).click();
    await demo.getByLabel("Første kommune").selectOption("bergen");
    await demo.locator("#compareResults").getByRole("heading", { name: "Bergen", exact: true }).waitFor();
    await demo.getByLabel("Andre kommune").selectOption("bergen");
    await demo.getByRole("status").filter({ hasText: /Bergen på begge sider/ }).waitFor();
    assert.equal(await demo.locator("#compareResults").getByRole("heading").count(), 0);
    await page.screenshot({ path: `${output}/kommuner-${width}.png` });
    results.push({ width, check: "kommunevalg og samme kommune", status: "bestått" });

    await demo.getByRole("button", { name: "Dashboard", exact: true }).click();
    const graphLabel = demo.locator("#page-dashboard .bar-value").getByText("19%", { exact: true });
    await graphLabel.scrollIntoViewIfNeeded();
    assert.equal(await graphLabel.evaluate((element) => element.scrollWidth <= element.clientWidth), true,
      "19 %-etiketten er avkuttet");
    await page.screenshot({ path: `${output}/dashboard-${width}.png` });
    results.push({ width, check: "grafetikett uten avkutting", status: "bestått" });

    await demo.getByRole("button", { name: "Avfallsreisen", exact: true }).click();
    for (let step = 8; step > 1; step--) {
      await demo.getByRole("button", { name: "← Forrige", exact: true }).click();
      await demo.getByText(`Steg ${step - 1} av 8`, { exact: true }).waitFor();
    }
    assert.equal(await demo.getByRole("button", { name: "← Forrige", exact: true }).isDisabled(), true);
    const infoCard = demo.locator("#page-journey .stat-card[role='button']").first();
    await infoCard.focus();
    await infoCard.press("Enter");
    assert.equal(await infoCard.getAttribute("aria-expanded"), "true");
    await infoCard.press("Space");
    assert.equal(await infoCard.getAttribute("aria-expanded"), "false");
    results.push({ width, check: "åtte steg tilbake og infokort med tastatur", status: "bestått" });

    await page.goto(`${base}/projects/seaweed`);
    await page.screenshot({ path: `${output}/seaweed-${width}.png` });
    await context.close();
  }
  assert.deepEqual(errors, [], "JavaScript-feil i nettleseren");
  console.log(JSON.stringify({ results, errors }, null, 2));
} finally {
  await writeFile(`${output}/resultater.json`, JSON.stringify({ results, errors }, null, 2));
  await browser.close();
}
