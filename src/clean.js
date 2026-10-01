/** Readable presentation shared by the world, HUD and department panels. */
export function applyCleanPresentation({world, ui, state}) {
  document.body.classList.add('clean-foundry');
  world.scene.background.set('#26363d');
  world.scene.children.filter(o => o.isHemisphereLight).forEach(light => {
    light.color.set('#dae6ef'); light.groundColor.set('#566967'); light.intensity = 2.3;
  });
  world.sun.color.set('#e5eef5');
  const finishes = {
    '#1a211d':'#71858d', '#303732':'#425962', '#35443d':'#556c70',
    '#26332e':'#40575e', '#829083':'#9cafa8', '#657365':'#728386',
    '#2c322e':'#4a616c', '#29312c':'#475d68', '#555d58':'#4d6672',
    '#d0c5a3':'#7e939b', '#a7a38a':'#5d737b', '#b3986c':'#819690'
  };
  for (const material of world.materials.values()) {
    const next=finishes['#'+material.color.getHexString()];
    if(next) material.color.set(next);
  }
  // Remove obsolete garden props from the central clearing, keeping interactables.
  world.areaGroups.lab.children.forEach(o=>{if(o.isMesh&&!o.userData.interactable)o.visible=false;});
  const oldSigns=[];
  world.scene.traverse(o=>{if(o.isSprite)oldSigns.push(o);});
  const overlay=document.createElement('div'); overlay.id='plotLabels'; document.body.append(overlay);
  const labels=world.lots.map(lot=>{
    const el=document.createElement('button');el.className='plot-label';
    const title=lot.name.toLowerCase().replace(/\b\w/g,c=>c.toUpperCase());
    el.innerHTML='<strong></strong><span></span>';el.querySelector('strong').textContent=title;
    el.setAttribute('aria-label','Manage '+title);overlay.append(el);
    let record;lot.parent.traverse(o=>{record ||= o.userData?.interactable;});
    el.addEventListener('click',()=>{if(!world.paused)ui.interact(record);});
    return {lot,el,record,p:world.core.position.clone()};
  });
  const controls=document.createElement('div');controls.id='cameraTools';
  controls.innerHTML='<button data-action="maphome" aria-label="Show all plots">Overview</button><button data-action="mapzoom" data-dir="-1" aria-label="Zoom out">−</button><button data-action="mapzoom" data-dir="1" aria-label="Zoom in">+</button>';
  document.getElementById('hud').append(controls);
  const originalUpdate=world.update.bind(world);let labelClock=0;
  world.update=dt=>{
    for(const [key,arrow]of [['KeyW','ArrowUp'],['KeyA','ArrowLeft'],['KeyS','ArrowDown'],['KeyD','ArrowRight']])if(world.keys[key])world.keys[arrow]=true;
    originalUpdate(dt);
    for(const [key,arrow]of [['KeyW','ArrowUp'],['KeyA','ArrowLeft'],['KeyS','ArrowDown'],['KeyD','ArrowRight']])if(world.keys[key])world.keys[arrow]=false;
    oldSigns.forEach(o=>o.visible=false);
    overlay.hidden=ui.opened||!ui.started||!!world.arena||document.getElementById('dialog').open;
    controls.hidden=ui.opened||!ui.started||!!world.arena;
    labelClock+=dt;if(labelClock<.05)return;labelClock=0;
    const occupied=[];
    for(const item of labels){
      const {lot,el,record,p}=item;lot.parent.getWorldPosition(p);p.z+=lot.depth/2+1;p.y=.15;p.project(world.camera);
      const x=(p.x*.5+.5)*innerWidth,y=(-p.y*.5+.5)*innerHeight;
      const focused=world.current===record||document.activeElement===el;
      const collision=occupied.some(r=>Math.abs(r.x-x)<150&&Math.abs(r.y-y)<48);
      const visible=p.z>-1&&p.z<1&&x>65&&x<innerWidth-65&&y>85&&y<innerHeight-70&&(!collision||focused);
      el.hidden=!visible;if(!visible)continue;occupied.push({x,y});
      el.style.transform=`translate(${x}px,${y}px) translate(-50%,-50%)`;
      const generator=world.generatorLots.find(g=>g.machine===lot.parent);
      el.querySelector('span').textContent=generator?(generator.plot.userData.unlocked?(state.s.machines[generator.i]?'Level '+state.s.machines[generator.i]+' · '+state.fmt(state.machineRate(generator.i))+' /s':'Ready to build'):'Locked · view requirements'):lot.id==='reactor'?'Click to generate energy':'Click to manage';
      el.classList.toggle('is-hovered',focused);
    }
  };
  const originalOpen=ui.open.bind(ui),originalClose=ui.close.bind(ui);
  ui.open=page=>{if(!ui.opened)ui.cleanReturnFocus=document.activeElement;originalOpen(page);const menu=document.getElementById('menu');menu.setAttribute('role','dialog');menu.setAttribute('aria-modal','true');menu.setAttribute('aria-labelledby','menuTitle');menu.querySelector('.close-button')?.focus();};
  ui.close=()=>{originalClose();ui.cleanReturnFocus?.focus?.();};
  window.addEventListener('keydown',e=>{
    if(e.key!=='Tab'||!ui.opened||document.getElementById('dialog').open)return;
    const items=[...document.querySelectorAll('#menu button:not(:disabled),#menu select,#menu input,#menu textarea')].filter(el=>el.offsetParent!==null);
    if(!items.length)return;e.preventDefault();e.stopImmediatePropagation();const i=items.indexOf(document.activeElement);items[(i+(e.shiftKey?-1:1)+items.length)%items.length].focus();
  },true);
  world.renderer.shadowMap.needsUpdate=true;
}
