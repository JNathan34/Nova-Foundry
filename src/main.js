import {State} from './state.js';
import {World} from './world.js';
import {Activities} from './activities.js';
import {UI} from './ui.js';
import {AudioSystem} from './audio.js';
import {NODES,AREAS} from './data.js';
function fail(error){console.error(error);const panel=document.createElement('div');panel.className='error-panel';const title=document.createElement('h1');title.textContent='The 3D renderer could not start.';const p=document.createElement('p');p.textContent='Open index.html in a browser with WebGL 2 enabled, such as Chrome, Edge or Firefox. Enable browser graphics acceleration if it is disabled. The game runs locally after extracting the whole ZIP.';const detail=document.createElement('p');detail.textContent='Details: '+error.message;panel.append(title,p,detail);document.body.append(panel);}
try{
 const state=new State(),saved={...state.s.position};
 const world=new World(state,document.getElementById('world'));
 const activities=new Activities(state,world),ui=new UI(state,world,activities),audio=new AudioSystem(state,world);
 world.paused=true;
 document.documentElement.style.setProperty('--accent',state.s.settings.accent);document.body.classList.toggle('reduced',state.s.settings.reduced);
 if(new URLSearchParams(location.search).has('qa'))window.__NOVA={state,world,activities,ui,nodes:NODES,areas:AREAS};
 let last=performance.now(),acc=0,saveClock=0,calendarClock=0,hidden=false;
 function loop(now){requestAnimationFrame(loop);const delta=Math.max(0,(now-last)/1000);last=now;if(hidden)return;acc+=Math.min(delta,.5);if(acc<1/state.s.settings.fps)return;const elapsed=Math.min(acc,5),dt=Math.min(acc,.08);acc=0;if(ui.started){state.tick(elapsed);activities.update(Math.min(elapsed,.2));audio.update(dt);saveClock+=elapsed;calendarClock+=elapsed;if(saveClock>=5){saveClock=0;state.save();}if(calendarClock>=30){calendarClock=0;state.calendar();}}world.update(dt);ui.update(dt);}
 requestAnimationFrame(loop);
 document.addEventListener('visibilitychange',()=>{hidden=document.hidden;if(hidden){state.save();world.keys={};audio.ctx?.suspend();}else{state.offline();if(state.pendingOffline){ui.notice('Offline energy collected: +'+state.fmt(state.pendingOffline.amount));state.pendingOffline=null;}last=performance.now();acc=0;if(ui.started)audio.ctx?.resume();}});
 window.addEventListener('pagehide',()=>state.save());
 window.addEventListener('beforeunload',()=>state.save());
 document.getElementById('world').addEventListener('webglcontextlost',e=>{e.preventDefault();ui.notice('Graphics context lost. Save your progress and reload to restore the world.');});
 document.body.dataset.ready='true';
}catch(error){fail(error);}
