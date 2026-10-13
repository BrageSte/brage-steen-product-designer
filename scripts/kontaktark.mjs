// Lager et kontaktark (oversiktsbilde) av mange bilder, for å velge ut og beskrive dem.
// Bruk: node scripts/kontaktark.mjs <ut.jpg> <bilde...>
import sharp from "sharp";
import path from "node:path";

const [ut, ...filer] = process.argv.slice(2);
const W = 300, H = 230, C = 5;
const deler = [];
for (const [i, f] of filer.entries()) {
  const x = (i % C) * (W + 8), y = Math.floor(i / C) * (H + 8);
  let bilde;
  try {
    bilde = await sharp(f).rotate().resize(W, H - 20, { fit: "contain", background: "#ddd" }).toBuffer();
  } catch (feil) {
    console.error(`Hopper over ${f}: ${feil.message}`);
    continue;
  }
  const navn = path.basename(f).replace(/&/g, "&amp;").replace(/</g, "&lt;").slice(0, 40);
  deler.push({ input: bilde, left: x, top: y });
  deler.push({
    input: Buffer.from(`<svg width="${W}" height="20"><text x="2" y="15" font-size="13" font-family="Arial">${navn}</text></svg>`),
    left: x,
    top: y + H - 20,
  });
}
await sharp({
  create: { width: C * (W + 8), height: Math.ceil(filer.length / C) * (H + 8), channels: 3, background: "#fff" },
})
  .composite(deler)
  .jpeg()
  .toFile(ut);
console.log(ut);
