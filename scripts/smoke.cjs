const {chromium}=require(process.env.PLAYWRIGHT_PATH||'playwright');
const path=require('path');
const fs=require('fs');
const {pathToFileURL}=require('url');
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true,args:['--allow-file-access-from-files']});
 const page=await browser.newPage({viewport:{width:1440,height:960}}),errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 await page.goto(pathToFileURL(path.resolve('index.html')).href+'?qa');
 await page.waitForFunction(()=>window.__NOVA||document.querySelector('.error-panel'));
 if(!await page.evaluate(()=>!!window.__NOVA))throw Error(await page.locator('.error-panel').innerText());
 await page.locator('#enter').click();
 await page.waitForTimeout(600);
 fs.mkdirSync('test-results',{recursive:true});
 await page.screenshot({path:'test-results/world.png'});
 for(const name of ['admin','treasury','tree','workers','control','research','collection','arcade','warehouse','market','rebirth','settings']){
  await page.evaluate(name=>window.__NOVA.ui.open(name),name);
  await page.waitForTimeout(250);
  if(!await page.locator('#menuContent').innerText())throw Error('Empty '+name);
  await page.screenshot({path:'test-results/'+name+'.png'});
  await page.evaluate(()=>window.__NOVA.ui.close());
 }
 await page.setViewportSize({width:390,height:844});
 for(const name of ['admin','treasury','tree','workers','control','research','collection','arcade','warehouse','market','rebirth','settings']){
  await page.evaluate(name=>window.__NOVA.ui.open(name),name);
  await page.waitForTimeout(100);
  const overflow=await page.locator('#menuContent').evaluate(el=>el.scrollWidth-el.clientWidth);
  if(overflow>2)errors.push(`${name} mobile overflow: ${overflow}px`);
 }
 await page.screenshot({path:'test-results/clean-mobile-settings.png'});
 console.log(JSON.stringify({errors,ready:true}));
 await browser.close();if(errors.length)process.exitCode=1;
})().catch(e=>{console.error(e);process.exitCode=1;});
