import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { chromium } from 'playwright';
const base = process.argv[2] || 'http://127.0.0.1:8788';
const output = process.env.PORTFOLIO_CHECK_OUTPUT || 'output/playwright/j2';
await mkdir(output, {recursive:true});
const browser = await chromium.launch({channel:process.env.PLAYWRIGHT_CHANNEL || 'chrome',headless:true});
const results=[];
try {
  const source = await readFile('public/projects/sorting-guide/prototype-gjennomgang.mp4');
  const videoUrl = `${base}/projects/sorting-guide/prototype-gjennomgang.mp4`;
  for (const [range, start, end] of [['bytes=55-155',55,155],['bytes=-100',source.length-100,source.length-1]]) {
    // Fetch bruker samme URL som nettleseren, også ved kaldt cachetreff i en preview.
    const partial = await fetch(videoUrl, {headers:{Range:range}});
    assert.equal(partial.status,206);
    assert.equal(partial.headers.get('content-range'),`bytes ${start}-${end}/${source.length}`);
    assert.ok(Buffer.from(await partial.arrayBuffer()).equals(source.subarray(start,end+1)));
  }
  const outside = await fetch(videoUrl,{headers:{Range:'bytes=999999999-'}});
  assert.equal(outside.status,416);
  await outside.body?.cancel();
  results.push({check:'video: ekte byteområder, riktige bytes og 416 utenfor filen',status:'bestått'});
  for(const width of [1440,390]) {
    const context=await browser.newContext({viewport:{width,height:width===390?844:1000},reducedMotion:'reduce'});
    const page=await context.newPage();page.setDefaultTimeout(12000);
    for(const [path,name] of [['/','forside'],['/om-meg','om-meg']]) {
      await page.goto(base+path);
      await page.locator('main h1').waitFor();
      await page.evaluate(async()=>{ const images=[...document.querySelectorAll('main img')];images.forEach(i=>i.loading='eager');await Promise.all(images.map(i=>i.decode()));});
      assert.equal(await page.locator('main h1').count(),1);
      assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
      assert.equal(await page.locator('main img:not([alt]), main img[alt=""]').count(),0);
      if(path==='/') {
        const cards=page.locator('main a.project-card');assert.equal(await cards.count(),4);
        await cards.first().click();await page.waitForURL('**/prosjekter/bs-climbing');await page.goBack();
      } else {
        await page.getByRole('navigation',{name:width===390?'Mobilmeny':'Hovedmeny'}).count();
        await page.goto(base+'/om-meg#kontakt');await page.locator('#kontakt').waitFor();
        await page.reload();await page.locator('#kontakt').waitFor();
        await page.goto(base+path);
      }
      await page.evaluate(()=>scrollTo({top:0,behavior:'instant'}));
      await page.waitForFunction(()=>scrollY===0);
      await page.evaluate(()=>document.fonts.ready);
      await page.waitForFunction(()=>[...document.querySelectorAll('.project-card')].every(el=>getComputedStyle(el).opacity==='1'));
      await page.screenshot({path:`${output}/${name}-${width}.png`,fullPage:true});
      await page.evaluate(()=>document.documentElement.style.fontSize='200%');
      assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`${name}: forstørret tekst`);
    }
    results.push({width,check:'forside, Om meg, prosjektklikk, kontakt direkte/refresh og 200 % tekst',status:'bestått'});
    await page.goto(base+'/prosjekter/headset');
    const galleries=page.locator('[aria-roledescription="carousel"]');
    assert.equal(await galleries.count(),2);
    for(const gallery of await galleries.all()) {
      await gallery.scrollIntoViewIfNeeded();
      const next=gallery.getByRole('button',{name:'Neste element',exact:true});
      const previous=gallery.getByRole('button',{name:'Forrige element',exact:true});
      if(await next.isEnabled()) {await next.click();await expectEnabled(previous);await previous.press('Enter');}
      else {const bounds=await gallery.evaluate(el=>({right:el.getBoundingClientRect().right,last:el.querySelector('[aria-roledescription="slide"]:last-child').getBoundingClientRect().right}));assert.ok(bounds.last<=bounds.right+1,'Alle elementer er synlige når neste er deaktivert');}
    }
    results.push({width,check:'begge Headset-gallerier frem og tilbake med tastatur',status:'bestått'});
    await page.goto(base+'/prosjekter/kildesortering#prototype');
    const video=page.locator('video');await video.scrollIntoViewIfNeeded();
    await video.evaluate(v=>{v.muted=true;return v.play();});
    await page.waitForFunction(()=>document.querySelector('video').currentTime>0.1);
    await video.evaluate(v=>v.pause());
    const duration=await video.evaluate(v=>{v.currentTime=90;return v.duration;});
    await page.waitForFunction(()=>{const v=document.querySelector('video');return !v.seeking&&Math.abs(v.currentTime-90)<1;});
    assert.ok(duration>330&&duration<336);
    assert.equal(await video.evaluate(v=>v.paused),true);
    await page.screenshot({path:`${output}/video-${width}.png`});
    for(const file of ['/dokumenter/the-sorting-guide-rapport.pdf','/dokumenter/kildesortering-gigamap.pdf']) {
      const response=await context.request.get(base+file);assert.equal(response.status(),200);assert.ok(response.headers()['content-type'].includes('application/pdf'));assert.equal((await response.body()).subarray(0,4).toString(),'%PDF');
    }
    results.push({width,check:'video start/pause/søk og begge PDF-vedlegg',duration,status:'bestått'});
    await context.close();
  }
  console.log(JSON.stringify({base,results},null,2));
} finally {await writeFile(`${output}/medier-resultater.json`,JSON.stringify({base,results},null,2));await browser.close();}
async function expectEnabled(locator){await locator.waitFor();await locator.page().waitForFunction(el=>!el.disabled,await locator.elementHandle());}
