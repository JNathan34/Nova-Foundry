const {chromium}=require(process.env.PLAYWRIGHT_PATH||'playwright');
const {pathToFileURL}=require('url');
const path=require('path');
const assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true,args:['--allow-file-access-from-files']});
 try{
 const page=await browser.newPage({viewport:{width:1440,height:960}}),errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 await page.goto(pathToFileURL(path.resolve('index.html')).href+'?qa');await page.waitForFunction(()=>window.__NOVA);await page.locator('#enter').click();
 // Camera input must move the goal, interpolate the view, and support rotation.
 const start=await page.evaluate(()=>__NOVA.world.goal.x);await page.keyboard.down('d');await page.waitForTimeout(250);await page.keyboard.up('d');assert(await page.evaluate(()=>__NOVA.world.goal.x)>start);
 await page.mouse.move(800,500);await page.mouse.down({button:'right'});await page.mouse.move(950,500,{steps:6});await page.mouse.up({button:'right'});assert(await page.evaluate(()=>Math.abs(__NOVA.world.goalYaw))>.1);
 await page.keyboard.press('Home');await page.waitForTimeout(800);
 // Hit the actual world mesh, not a hidden menu shortcut.
 const pos=await page.evaluate(()=>{const w=__NOVA.world,g=w.facilities.bank,p=g.position.clone();g.getWorldPosition(p);p.y+=1;p.project(w.camera);return {x:(p.x*.5+.5)*innerWidth,y:(-.5*p.y+.5)*innerHeight};});
 await page.mouse.click(pos.x,pos.y);await page.waitForTimeout(250);assert.equal(await page.evaluate(()=>__NOVA.ui.page),'bank');await page.locator('[data-action=close]').click();
 await page.evaluate(()=>{const {state:s}=__NOVA;s.s.energy=100000;s.s.run=100000;s.s.points=20;s.skillBuy('auto-0');s.buyMachine(0,10);});
 await page.evaluate(()=>__NOVA.ui.open('workers'));await page.locator('[data-action=hire][data-id="0"]').click();await page.locator('[data-worker="0"]').selectOption('0');await page.locator('[data-action=train][data-id="0"]').click();
 assert.deepEqual(await page.evaluate(()=>__NOVA.state.s.management.workers[0]),{id:0,level:2,machine:0});
 const bonus=await page.evaluate(()=>{const s=__NOVA.state,n=s.cps;s.s.management.workers[0].machine=-1;const base=s.cps;s.s.management.workers[0].machine=0;return n-base;});assert(bonus>0);
 await page.evaluate(()=>{const s=__NOVA.state;s.s.challenge={id:'manual',earned:0,start:Date.now()};});assert.equal(await page.evaluate(()=>__NOVA.state.cps),0);await page.evaluate(()=>__NOVA.state.s.challenge=null);
 await page.evaluate(()=>{__NOVA.state.s.management.stock=[42,3,2,0];__NOVA.ui.open('market');});await page.locator('[data-action=sell][data-id="0"]').click();assert(await page.evaluate(()=>__NOVA.state.s.management.stock[0])<1);
 await page.evaluate(()=>__NOVA.ui.open('collection'));assert(await page.locator('[data-action=preview]').count()>0);const skin=await page.evaluate(()=>__NOVA.state.s.skin);await page.locator('[data-action=preview]').nth(1).click();assert(await page.locator('#previewBar').isVisible());await page.locator('[data-action=endpreview]').click();assert.equal(await page.evaluate(()=>__NOVA.state.s.skin),skin);
 await page.evaluate(()=>__NOVA.ui.open('research'));await page.locator('[data-action=researchbuy]').first().click();assert(await page.evaluate(()=>!!__NOVA.state.s.researchJob));await page.evaluate(()=>{__NOVA.state.s.researchJob.end=Date.now()-1;__NOVA.state.tick(.1);});assert.equal(await page.evaluate(()=>__NOVA.state.s.research[0]),1);
 // Keep the modal open when tabbing through its controls.
 await page.keyboard.press('Tab');assert.equal(await page.evaluate(()=>__NOVA.ui.page),'research');assert(await page.evaluate(()=>__NOVA.ui.opened));
 // Arrangement uses the same ground-placement path as pointer interactions.
 await page.evaluate(async()=>{const u=__NOVA.ui;await u.action({action:'buildmode'});await u.action({action:'buildtool',tool:'light'});u.place({x:17,z:17});await u.action({action:'endbuild'});});assert.equal(await page.evaluate(()=>__NOVA.state.s.management.decor.length),1);
 await page.evaluate(()=>__NOVA.state.save());await page.reload();await page.waitForFunction(()=>__NOVA);assert.equal(await page.evaluate(()=>__NOVA.state.s.management.workers[0].level),2);assert.equal(await page.evaluate(()=>__NOVA.state.s.management.decor.length),1);await page.locator('#enter').click();
 // Validate backwards compatibility and reject malformed extension fields.
 const compatibility=await page.evaluate(()=>{const s=__NOVA.state,raw=JSON.parse(JSON.stringify(s.s));delete raw.management;const old=s.validate(raw);raw.management={stock:[-1,Infinity,3,0],workers:[{id:9,level:20,machine:0}],layout:{bank:[1e9,1]},decor:[]};const cleaned=s.validate(raw);return {old:old.machines[0],workers:cleaned.management.workers.length,stock:cleaned.management.stock,layout:cleaned.management.layout};});assert(compatibility.old>0);assert.equal(compatibility.workers,0);assert.deepEqual(compatibility.stock,[0,0,3,0]);assert.deepEqual(compatibility.layout,{});
 await page.evaluate(()=>{const s=__NOVA.state;s.s.run=s.rebirthRequirement;__NOVA.ui.open('rebirth');});await page.locator('[data-action=rebirthconfirm]').click();assert(await page.locator('#dialog').isVisible());assert.equal(await page.evaluate(()=>__NOVA.state.s.rebirths),0);await page.locator('[data-action=closedialog]').click();
 await page.evaluate(()=>{__NOVA.state.performRebirth();});assert.equal(await page.evaluate(()=>__NOVA.state.s.management.workers.length),0);assert.equal(await page.evaluate(()=>__NOVA.state.s.management.stock.reduce((a,b)=>a+b,0)),0);
 await page.evaluate(()=>__NOVA.ui.close());
 for(const width of [390,768,2560]){await page.setViewportSize({width,height:width===2560?1080:844});for(const name of ['overview','tree','workers','research','collection','storage','market','settings']){await page.evaluate(n=>__NOVA.ui.open(n),name);await page.waitForTimeout(60);const overflow=await page.evaluate(()=>document.querySelector('#menuContent').scrollWidth-document.querySelector('#menuContent').clientWidth);assert(overflow<=2,`${name} overflows at ${width}: ${overflow}`);}await page.screenshot({path:`test-results/responsive-${width}.png`});await page.evaluate(()=>__NOVA.ui.close());}
 assert.deepEqual(errors,[]);console.log('PASS: world picking, camera, hiring/training/assignment, worker income, challenge rules, trading, previews, timed research, keyboard focus, build mode, saves, legacy validation, rebirth confirmation/reset, responsive layouts.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
