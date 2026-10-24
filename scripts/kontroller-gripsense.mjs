import assert from 'node:assert/strict';
import {mkdir,writeFile} from 'node:fs/promises';
import {chromium} from 'playwright';
const base=process.argv[2] || 'http://127.0.0.1:8788';
const out=process.env.PORTFOLIO_CHECK_OUTPUT || 'output/playwright/j3';
await mkdir(out,{recursive:true});
const browser=await chromium.launch({channel:process.env.PLAYWRIGHT_CHANNEL || 'chrome',headless:true});
const results=[],errors=[];
const path='/prosjekter/gripsense';
try {
  const response=await fetch(base+path);const html=await response.text();
  assert.equal(response.status,200);
  assert.ok(html.includes('<title>GripSense – pågående produktutvikling</title>'));
  assert.ok(html.includes('content="noindex, follow"'));
  assert.ok(html.includes('rel="canonical" href="https://bragesteen.no/prosjekter/gripsense"'));
  assert.equal((await (await fetch(base+'/sitemap.xml')).text()).includes(path),false,'Utkast skal ikke inn i sitemap');
  results.push({check:'direkte HTML med metadata, noindex og utelatt fra sitemap',status:'bestått'});
  const drawing=await fetch(base+'/dokumenter/gripsense-rev-e-montering.pdf');
  assert.equal(drawing.status,200);assert.ok(drawing.headers.get('content-type').includes('application/pdf'));
  const reader=drawing.body.getReader();const first=await reader.read();assert.equal(Buffer.from(first.value).subarray(0,4).toString(),'%PDF');await reader.cancel();
  results.push({check:'oppkoblings- og monteringstegningen returnerer PDF',status:'bestått'});
  for(const width of [1440,390]) {
    const context=await browser.newContext({viewport:{width,height:width===390?844:1000},reducedMotion:'reduce'});
    const page=await context.newPage();
    page.on('pageerror',e=>errors.push({width,error:e.message}));
    await page.goto(base+path);
    await page.evaluate(async()=>{const images=[...document.querySelectorAll('main img')];images.forEach(i=>i.loading='eager');await Promise.all(images.map(i=>i.decode()));await document.fonts.ready;});
    assert.equal(await page.locator('main h1').count(),1);
    assert.equal(await page.locator('main img').count(),6);
    assert.equal(await page.locator('main img:not([alt]), main img[alt=""]').count(),0);
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
    assert.equal(await page.locator('main figure').first().evaluate(el=>el.getBoundingClientRect().bottom<=innerHeight+3),true,'Første bilde og CAD-merking skal være synlige i første skjerm');
    await page.screenshot({path:`${out}/gripsense-${width}.png`,fullPage:true});
    results.push({width,check:'visning, seks bilder med alt-tekst, én H1 og ingen sidescroll',status:'bestått'});
    await page.getByRole('navigation',{name:'Prosjektmeny'}).getByRole('link',{name:'Gripeflate',exact:true}).click();
    await aligned(page,'gripeflate');await page.reload();await aligned(page,'gripeflate');
    await page.goBack();await page.waitForFunction(()=>!location.hash&&scrollY<5);
    await page.goForward();await aligned(page,'gripeflate');
    await page.getByRole('navigation',{name:'Prosjektmeny'}).getByRole('link',{name:'Elektronikk',exact:true}).click();
    await aligned(page,'elektronikk');await page.reload();await aligned(page,'elektronikk');
    await page.goto(base+path+'#status');await aligned(page,'status');await page.reload();await aligned(page,'status');
    results.push({width,check:'ankerklikk, direkte, refresh og tilbake/frem',status:'bestått'});
    await page.evaluate(()=>document.documentElement.style.fontSize='200%');
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,'200 % tekst');
    await page.goto(base+path);
    for(const link of await page.locator('main a[target="_blank"]').all()) {
      const href=await link.getAttribute('href');
      if(!href.startsWith('/projects/gripsense/nett/')) continue;
      const image=await context.request.get(base+href);
      assert.equal(image.status(),200);assert.ok(image.headers()['content-type'].startsWith('image/'));
    }
    await page.getByRole('link',{name:'Se tilpassede klatreprodukter',exact:true}).click();
    await page.waitForURL('**/prosjekter/bs-climbing');await page.locator('main h1').waitFor();
    results.push({width,check:'200 % tekst, fullstørrelsesbilder og neste prosjekt',status:'bestått'});
    await context.close();
  }
  assert.deepEqual(errors,[]);console.log(JSON.stringify({base,results,errors},null,2));
}finally{await writeFile(out+'/resultater.json',JSON.stringify({base,results,errors},null,2));await browser.close();}
async function aligned(page,id){await page.waitForFunction(id=>{const y=document.getElementById(id)?.getBoundingClientRect().top;const bottom=document.querySelector('[data-project-bar]')?.getBoundingClientRect().bottom;const atBottom=document.documentElement.scrollHeight-innerHeight-scrollY<4;return Math.abs(y-bottom)<4||(atBottom&&y>=bottom-4&&y<innerHeight);},id,{timeout:8000});}
