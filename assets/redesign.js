(() => {
  'use strict';
  const nova = window.__NOVA;
  if (!nova) return;
  const { state, world, ui, areas } = nova;
  const $ = id => document.getElementById(id);
  const btn = (text, action, attrs = '', disabled = false, cls = '') => `<button data-action="${action}" ${attrs} ${disabled ? 'disabled' : ''} class="${cls}">${text}</button>`;

  const MACHINES = [
    ['Energy collector','lab',20,1],['Ion generator','generator',150,9],['Fusion engine','factory',1800,110],['Photon processor','research',12000,800],['Dark matter drill','deep',65000,4500],['Quantum reactor','quantum',3e5,24000],['Stellar turbine','launch',2e6,170000],['Dyson relay','orbital',2e7,1.8e6],['Planetary engine','planet',3e8,3e7],['Dimensional engine','dimension',5e9,5e8]
  ];
  const RESEARCH = [
    ['Energy compression','+25% manual energy',1500,30],['Robot intelligence','+25% passive energy',7500,60],['Quantum physics','+25% quantum yield',50000,90],['Advanced materials','+25% all energy',250000,120],['Dimensional science','+25% XP gain',1e6,180]
  ];
  const WORKERS = [
    ['Mara Voss','COMMON','Maintenance specialist','+5% passive income',20],
    ['Jax Mercer','UNCOMMON','Probability analyst','+2% critical chance',25],
    ['Iris Vale','RARE','Resource specialist','Periodic energy deliveries',30],
    ['Noah Chen','EPIC','Quantum engineer','+10% quantum yield',40],
    ['Vega Rook','LEGENDARY','Systems director','+8% all energy',60]
  ];
  const SKINS = [
    ['azure','Origin blue','#72d8ee','Common',0],['inferno','Inferno','#ff8658','Rare',20],['frozen','Frozen star','#c0f1ff','Rare',20],['toxic','Toxic glow','#a1ff72','Uncommon',12],['gold','Golden core','#ffd16b','Epic',35],['void','Void heart','#ae78fb','Legendary',60],['galaxy','Galaxy','#ff9ee2','Epic',40],['blackhole','Black hole','#7363c5','Mythic',80],['developer','Developer signal','#ddfc8b','Secret',-1],['reality','Reality core','#ffffff','Mythic',-1]
  ];

  // -----------------------------------------------------------------------
  // World presentation: darker materials, facility-focused buildings.
  // -----------------------------------------------------------------------
  try {
    world.scene.background?.set?.('#090d13');
    world.renderer.toneMappingExposure = .78;
    const lights = world.scene.children.filter(x => x.isLight);
    if (lights[0]) { lights[0].color?.set?.('#9fb7d8'); lights[0].groundColor?.set?.('#111722'); lights[0].intensity = 1.1; }
    if (lights[1]) { lights[1].color?.set?.('#d7e5ff'); lights[1].intensity = 1.5; }
    world.floorMat?.color?.set?.('#263444');

    const recolor = {
      '8db471':'151d26','97ba77':'151d26','b9c59e':'111820','d7bc86':'252e39','b2bc91':'1b232d',
      'bd9462':'37414c','caab7c':'414d5b','ac9670':'1b232c','ead9b0':'28323d','d0c5a3':'2b3641',
      'a7a38a':'202a34','ece2c5':'d7e3f0','aaa98d':'556371','b8b28e':'596674'
    };
    world.scene.traverse(o => {
      if (!o.isMesh || !o.material?.color) return;
      const key = o.material.color.getHexString();
      if (recolor[key]) o.material = world.mat('#' + recolor[key], !!o.material.emissiveIntensity);
    });

    // Selection ring is distinct from hover feedback.
    if (!world.selectionRing && world.hoverRing) {
      world.selectionRing = world.hoverRing.clone();
      world.selectionRing.material = world.hoverRing.material.clone();
      world.selectionRing.material.color.set('#8bc6ff');
      world.selectionRing.material.opacity = .82;
      world.selectionRing.scale.setScalar(1.45);
      world.selectionRing.visible = false;
      world.scene.add(world.selectionRing);
    }
    if (world.hoverRing?.material?.color) {
      world.hoverRing.material.color.set('#70b7ff');
      world.hoverRing.material.opacity = .68;
    }

    // Angled, rotatable management camera while retaining the stable orthographic projection.
    world.goalYaw = world.yaw || 0;
    const oldResize = world.resize.bind(world);
    world.frame = function () {
      const aspect = innerWidth / innerHeight;
      this.camera.left = -this.size * aspect / 2;
      this.camera.right = this.size * aspect / 2;
      this.camera.top = this.size / 2;
      this.camera.bottom = -this.size / 2;
      this.camera.updateProjectionMatrix();
      this.yaw += (this.goalYaw - this.yaw) * (this.state.s.settings.reduced ? 1 : .16);
      const radius = 32;
      this.camera.position.set(this.target.x + Math.sin(this.yaw) * radius, this.target.y + 42, this.target.z + Math.cos(this.yaw) * radius);
      this.camera.lookAt(this.target.x, this.target.y, this.target.z);
      this.camera.updateMatrixWorld();
    };
    world.resize = function () { oldResize(); this.frame(); };
    world.zoom = function (factor) { this.goalSize = Math.max(17, Math.min(92, this.goalSize * factor)); };
    world.clampGoal = function () { this.goal.x = Math.max(-76, Math.min(76, this.goal.x)); this.goal.z = Math.max(-46, Math.min(22, this.goal.z)); };
    world.focusState = null;
    world.selected = null;
    world.clearSelection = function () { this.selected = null; if (this.selectionRing) this.selectionRing.visible = false; };
    world.focus = function (record) {
      if (!record?.obj || this.arena) return;
      if (!this.focusState) this.focusState = { x: this.goal.x, z: this.goal.z, size: this.goalSize, yaw: this.goalYaw };
      const pos = record.obj.getWorldPosition(this.player.clone());
      this.goal.set(pos.x, 0, pos.z); this.clampGoal();
      this.goalSize = Math.min(this.goalSize, 24);
      this.selected = record;
      if (this.selectionRing) {
        this.selectionRing.visible = true;
        this.selectionRing.position.set(pos.x, .12, pos.z);
        this.selectionRing.scale.setScalar(record.action === 'machine' ? 2 : record.action === 'core' ? 1.7 : 2.4);
      }
    };
    world.restoreFocus = function () {
      if (this.focusState) {
        this.goal.set(this.focusState.x, 0, this.focusState.z);
        this.goalSize = this.focusState.size;
        this.goalYaw = this.focusState.yaw;
        this.focusState = null;
      }
      this.clearSelection();
    };
    const oldOverview = world.overview.bind(world);
    world.overview = function () { this.focusState = null; this.clearSelection(); oldOverview(); this.goalSize = Math.max(this.goalSize, 64); };
    const oldTeleport = world.teleport.bind(world);
    world.teleport = function (id) { this.focusState = null; this.clearSelection(); oldTeleport(id); };

    // Replace generic plot houses with system-specific facility buildings.
    const facilityBuilding = (parent, x, z, title, action, accent, w = 5.2, d = 4.2) => {
      const Group = parent.constructor;
      const g = new Group(); g.position.set(x, 0, z); parent.add(g);
      world.box(g, 0, .14, 0, w + .7, .26, d + .7, '#171e27');
      world.box(g, 0, 1.2, 0, w, 2.15, d, '#252d38');
      world.box(g, 0, 2.38, 0, w * .86, .26, d * .86, '#151b23');
      world.box(g, -w * .34, 2.68, 0, w * .16, .38, d * .56, accent, true);
      world.box(g, w * .34, 2.68, 0, w * .16, .38, d * .56, accent, true);
      world.box(g, 0, .9, d / 2 + .04, w * .62, 1.12, .07, '#0e141b');
      world.box(g, 0, 1.28, d / 2 + .09, w * .46, .46, .05, accent, true);
      for (const sx of [-1, 1]) world.box(g, sx * w * .38, 1.1, d / 2 + .08, .08, 1.2, .05, accent, true);
      world.label(g, title.toUpperCase(), 0, 3.32, 0, w + 1, '#1c3047');
      world.bind(g, action, null, title);
      return g;
    };

    const lab = world.areaGroups?.lab;
    if (lab && !lab.userData.managementRedesign) {
      // Hide the three original navigation houses; retain core, production and scenery.
      for (let i = 0; i < Math.min(3, lab.children.length); i++) lab.children[i].visible = false;
      facilityBuilding(lab, -6, -5, 'Upgrade Lab', 'tree', '#5b9cf1', 4.9, 4);
      facilityBuilding(lab, 6, -5, 'Headquarters', 'overview', '#8aa7c8', 5.1, 4);
      facilityBuilding(lab, -6, 5, 'Bank', 'bank', '#d2a74c', 4.5, 3.6);
      facilityBuilding(lab, 6, 5, 'Arcade', 'arcade', '#51bcd3', 4.5, 3.6);
      const supply = world.box(lab, 0, .35, 7.25, 2.2, .65, 1.4, '#202933');
      world.bind(supply, 'daily', null, 'Daily supply terminal');
      world.label(lab, 'SUPPLY', 0, 1.15, 7.25, 2.7, '#1f3448');
      lab.userData.managementRedesign = true;
    }
    const buildingMap = {
      generator:['Factory','factory','#4f8fc8'],
      factory:['Worker Office','workers','#d38a55'],
      research:['Research Centre','research','#8d6ed8'],
      quantum:['Rebirth Chamber','rebirth','#a44f86'],
      deep:['Warehouse','warehouse','#c18b47'],
      launch:['Marketplace','market','#52a87d'],
      orbital:['Skin Store','skins','#cf6da5'],
      planet:['Bank Annex','bank','#d2a74c'],
      dimension:['Prestige HQ','overview','#6b8fbf']
    };
    for (const [id, cfg] of Object.entries(buildingMap)) {
      const group = world.areaGroups?.[id];
      if (!group || group.userData.managementRedesign) continue;
      if (group.children[0]) group.children[0].visible = false;
      facilityBuilding(group, -5, -4, cfg[0], cfg[1], cfg[2], 5.4, 4.3);
      group.userData.managementRedesign = true;
    }
    world.renderer.shadowMap.needsUpdate = true;
  } catch (err) {
    console.warn('Facility world redesign fallback:', err);
  }

  // -----------------------------------------------------------------------
  // Camera controls layered above the legacy input without breaking clicks.
  // -----------------------------------------------------------------------
  const cameraKeys = new Set();
  let cameraDrag = null;
  const canvas = world.canvas;
  document.addEventListener('keydown', e => {
    if (/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
    if (['KeyW','KeyA','KeyS','KeyD'].includes(e.code)) cameraKeys.add(e.code);
    if ((e.code === 'KeyQ' || e.code === 'KeyE') && !world.paused) world.goalYaw += e.code === 'KeyQ' ? .24 : -.24;
    if (['Tab','KeyT','KeyM'].includes(e.code)) { e.preventDefault(); e.stopImmediatePropagation(); }
  }, true);
  document.addEventListener('keyup', e => cameraKeys.delete(e.code), true);
  window.addEventListener('blur', () => cameraKeys.clear());
  canvas.addEventListener('pointerdown', e => {
    if (world.paused || world.arena || ![1,2].includes(e.button)) return;
    e.preventDefault(); e.stopImmediatePropagation();
    cameraDrag = { button:e.button, x:e.clientX, y:e.clientY, gx:world.goal.x, gz:world.goal.z, yaw:world.goalYaw };
    canvas.setPointerCapture?.(e.pointerId);
  }, true);
  canvas.addEventListener('pointermove', e => {
    if (!cameraDrag) return;
    e.preventDefault(); e.stopImmediatePropagation();
    const dx = e.clientX - cameraDrag.x, dy = e.clientY - cameraDrag.y;
    if (cameraDrag.button === 2) { world.goalYaw = cameraDrag.yaw - dx * .006; return; }
    const factor = world.size / innerHeight;
    const c = Math.cos(world.yaw), s = Math.sin(world.yaw);
    world.goal.x = cameraDrag.gx + (-dx * c + dy * s) * factor;
    world.goal.z = cameraDrag.gz + (-dx * s - dy * c) * factor;
    world.clampGoal?.();
  }, true);
  const endDrag = e => {
    if (!cameraDrag) return;
    e.preventDefault(); e.stopImmediatePropagation(); cameraDrag = null;
  };
  canvas.addEventListener('pointerup', endDrag, true);
  canvas.addEventListener('pointercancel', endDrag, true);
  canvas.addEventListener('wheel', e => {
    if (world.paused) return;
    e.preventDefault(); e.stopImmediatePropagation();
    world.zoom(Math.exp(e.deltaY * .00115));
  }, {capture:true, passive:false});

  let last = performance.now(), vx = 0, vz = 0;
  const managementCameraTick = now => {
    requestAnimationFrame(managementCameraTick);
    const dt = Math.min(.05, (now - last) / 1000); last = now;
    if (!world.paused && !world.arena) {
      let x = (cameraKeys.has('KeyD')?1:0) - (cameraKeys.has('KeyA')?1:0);
      let z = (cameraKeys.has('KeyS')?1:0) - (cameraKeys.has('KeyW')?1:0);
      const len = Math.hypot(x,z) || 1; x /= len; z /= len;
      const c = Math.cos(world.yaw), s = Math.sin(world.yaw), speed = world.size * .72;
      const tx = (x*c + z*s) * speed, tz = (z*c - x*s) * speed;
      const k = 1 - Math.exp(-dt * 8); vx += (tx-vx)*k; vz += (tz-vz)*k;
      if (!x && !z) { vx *= Math.exp(-dt*8); vz *= Math.exp(-dt*8); }
      world.goal.x += vx * dt; world.goal.z += vz * dt; world.clampGoal?.();
    } else { vx *= .8; vz *= .8; }
    if (world.selectionRing?.visible && !state.s.settings.reduced) world.selectionRing.material.opacity = .7 + Math.sin(now * .0023) * .1;
  };
  requestAnimationFrame(managementCameraTick);

  // -----------------------------------------------------------------------
  // Building-specific UI: the world is navigation, so global nav is removed.
  // -----------------------------------------------------------------------
  ui.nav = () => { if ($('menuNav')) $('menuNav').innerHTML = ''; };
  const originalClose = ui.close.bind(ui);
  ui.close = function () { originalClose(); world.restoreFocus?.(); };
  $('dialog')?.addEventListener('close', () => { if (!ui.opened) world.restoreFocus?.(); });

  ui.render = function () {
    this.nav();
    const names = {overview:'Headquarters',factory:'Factory management',tree:'Upgrade Lab',workers:'Worker Office',bank:'Bank',research:'Research Centre',warehouse:'Warehouse',market:'Marketplace',rebirth:'Rebirth Chamber',arcade:'Arcade',skins:'Skin Store',settings:'Settings',travel:'Facility map',missions:'Missions',achievements:'Achievements',stats:'Statistics',challenges:'Challenge chamber'};
    $('menuTitle').textContent = names[this.page] || 'Facility Management';
    const accents={overview:'#8aa7c8',factory:'#4f8fc8',tree:'#5b9cf1',workers:'#d38a55',bank:'#d2a74c',research:'#8d6ed8',warehouse:'#c18b47',market:'#52a87d',rebirth:'#a44f86',arcade:'#51bcd3',skins:'#cf6da5',settings:'#7d8795'};
    $('menu').style.setProperty('--building-accent',accents[this.page]||'#58a6ff');
    $('menuContent').style.overflow = this.page === 'tree' ? 'hidden' : 'auto';
    const view = this[this.page + 'View'];
    $('menuContent').innerHTML = typeof view === 'function' ? view.call(this) : this.overviewView();
    if (this.page === 'tree') this.bindTree();
    this.paint();
  };

  ui.interact = function (r) {
    if (r.action === 'locked') {
      const a = areas.find(a => a.id === r.data);
      const node = nova.nodes.find(n => n.effects?.[a.flag]);
      this.dialog(`<div class="eyebrow">FACILITY EXPANSION</div><h2>${a.name}</h2><p>Earn ${this.state.fmt(a.need)} energy this run and unlock <strong>${node?.name || 'the required exploration technology'}</strong>.</p><div class="actions">${btn('Close','closedialog')}${node?btn('View required skill','requiredskill',`data-id="${node.id}"`,false,'primary'):''}</div>`); return;
    }
    if (['target','memory','boss','shield','relay','event'].includes(r.action)) return;
    if (r.action === 'core') { this.state.pulse(); return; }
    if (r.action === 'shard') { this.state.collect(r.data); return; }
    if (r.action === 'secret') { this.state.secret(r.data); return; }
    if (r.action === 'return') { this.activities.leave(); return; }
    if (r.action === 'machine') { world.focus?.(r); this.machineIndex = r.data; this.showMachine(); return; }
    if (r.action === 'npc') { this.showNPC(r.data); return; }
    if (r.action === 'daily') { this.supplyDialog(); return; }
    if (r.action === 'travel') { this.open('travel'); return; }
    world.focus?.(r); this.open(r.action);
  };

  ui.overviewView = function () {
    const s = this.state.s, totalMachines=s.machines.reduce((a,b)=>a+b,0), research=s.research.reduce((a,b)=>a+b,0), facility=s.facility.reduce((a,b)=>a+b,0);
    return `<div class="hq-hero"><div class="metric-panel"><div class="metric-label">FACILITY LEVEL</div><div class="metric-value">${this.state.level}</div><p>Headquarters gives you a summary. Individual systems are managed by selecting their buildings in the world.</p><div class="status-strip"><span class="status-chip good">${s.areas.length}/10 districts online</span><span class="status-chip">${totalMachines} machine levels</span><span class="status-chip">${research} research levels</span></div></div><div class="metric-panel"><div class="metric-label">TOTAL PRODUCTION</div><div class="metric-value">${this.state.fmt(this.state.cps)}/s</div><p>${this.state.fmt(s.lifetime)} lifetime energy generated.</p></div></div><div class="metrics-row"><div class="mini-metric"><small>CURRENT ENERGY</small><strong>${this.state.fmt(s.energy)}</strong></div><div class="mini-metric"><small>REBIRTHS</small><strong>${s.rebirths}</strong></div><div class="mini-metric"><small>RESEARCH</small><strong>${research}</strong></div><div class="mini-metric"><small>INFRASTRUCTURE</small><strong>${facility}</strong></div></div><div class="section-title">FACILITY STATUS</div><div class="grid"><div class="card"><h3>Expansion</h3><p>${s.areas.length} districts operational. ${10-s.areas.length} remain locked behind progression.</p><div class="thin-bar"><i style="width:${s.areas.length*10}%"></i></div></div><div class="card"><h3>Workforce</h3><p>${s.equipped.length} / ${s.slots} automation specialists assigned.</p><div class="thin-bar"><i style="width:${Math.min(100,s.equipped.length/Math.max(1,s.slots)*100)}%"></i></div></div><div class="card"><h3>Collections</h3><p>${s.collected.length} / 50 energy shards recovered.</p><div class="thin-bar"><i style="width:${s.collected.length*2}%"></i></div></div></div>`;
  };

  ui.factoryView = function () {
    const s=this.state.s, active=MACHINES.filter((m,i)=>s.areas.includes(m[1])&&s.machines[i]>0);
    return `<div class="production-chain"><div class="chain-stage"><small>INPUT</small><strong>${active.length?active[0][0]:'Energy feed'}</strong><p>Raw energy enters the production network.</p></div><div class="chain-arrow">→</div><div class="chain-stage"><small>PROCESSING</small><strong>${active.length} active machines</strong><p>Automation converts energy through the machine chain.</p></div><div class="chain-arrow">→</div><div class="chain-stage"><small>EFFICIENCY</small><strong>${Math.min(100,72+s.facility[1]*2)}%</strong><p>Power-grid upgrades improve throughput.</p></div><div class="chain-arrow">→</div><div class="chain-stage"><small>OUTPUT</small><strong>${this.state.fmt(this.state.cps)}/s</strong><p>Current passive production.</p></div></div><div class="status-strip">${!this.state.fx.automation?'<span class="status-chip warn">Automation locked</span>':'<span class="status-chip good">Production online</span>'}<span class="status-chip">${s.machines.reduce((a,b)=>a+b,0)} machine levels</span><span class="status-chip">Power grid Lv ${s.facility[1]}</span></div><div class="toolbar">${[1,10,100,'max'].map(n=>btn('×'+String(n).toUpperCase(),'bulk',`data-n="${n}"`,false,this.buy===n?'selected':'')).join('')}</div><div class="grid">${MACHINES.map((d,i)=>{const q=this.state.quote(i,this.buy),open=s.areas.includes(d[1]),level=s.machines[i],rate=this.state.machineRate(i);return `<div class="card"><div class="row between"><div><div class="eyebrow">${d[1].toUpperCase()}</div><h3>${d[0]}</h3></div><span class="tag">LV ${level}</span></div><p>${open?`${this.state.fmt(rate)} base energy/sec · ${this.state.milestone(level)}× milestone`:'District not yet connected to the factory network.'}</p><div class="cardfooter"><span class="mint">${this.state.fmt(q.cost)} energy</span>${btn(open?(level?'Upgrade':'Build'):'Locked','machinebuy',`data-i="${i}" data-n="${this.buy}"`,!this.state.fx.automation||!open||s.energy<q.cost||!q.n,'small')}</div></div>`}).join('')}</div>`;
  };

  ui.bankView = function () {
    const s=this.state.s, offline=Math.floor(this.state.cps*this.state.offlineEfficiency*this.state.offlineHours*3600);
    const series=Array.from({length:16},(_,i)=>`${(i/15*100).toFixed(1)},${Math.max(8,Math.min(76,70-(42+Math.sin(i*.82)*8+i*1.25))).toFixed(1)}`).join(' ');
    return `<div class="bank-hero"><div class="metric-panel"><div class="metric-label">CURRENT ENERGY</div><div class="metric-value">${this.state.fmt(s.energy)}</div><div class="metrics-row" style="margin-top:14px"><div class="mini-metric"><small>INCOME / SECOND</small><strong>${this.state.fmt(this.state.cps)}</strong></div><div class="mini-metric"><small>INCOME / MINUTE</small><strong>${this.state.fmt(this.state.cps*60)}</strong></div><div class="mini-metric"><small>LIFETIME</small><strong>${this.state.fmt(s.lifetime)}</strong></div><div class="mini-metric"><small>OFFLINE CAPACITY</small><strong>${this.state.offlineHours}h</strong></div></div></div><div class="metric-panel"><div class="metric-label">PROJECTED PRODUCTION TREND</div><div class="bank-chart"><svg viewBox="0 0 100 80" preserveAspectRatio="none"><polyline class="chart-line" points="${series}"/></svg></div></div></div><div class="grid"><div class="card"><div class="eyebrow">OFFLINE EARNINGS</div><h3>${this.state.fmt(offline)} max stored energy</h3><p>${Math.round(this.state.offlineEfficiency*100)}% efficiency for up to ${this.state.offlineHours} hours.</p></div><div class="card"><div class="eyebrow">FINANCIAL MULTIPLIER</div><h3>${(1+(this.state.fx.global||0)).toFixed(2)}× global modifier</h3><p>Permanent skills, research and prestige bonuses contribute to total income.</p></div><div class="card"><div class="eyebrow">RUN EARNINGS</div><h3>${this.state.fmt(s.run)}</h3><p>Current-run earnings determine expansion and rebirth readiness.</p></div></div>`;
  };

  ui.workersView = function () {
    const s=this.state.s;
    return `<div class="notice-panel"><div class="row between"><div><div class="eyebrow">STAFF CAPACITY</div><h3>${s.equipped.length} / ${s.slots} assigned</h3><p>Assign automation specialists to the facility network. Training consumes three duplicate contracts and improves their permanent bonus.</p></div>${btn('Add slot · 50 tokens','droneslot','',s.slots>=3||s.tokens<50,'small')}</div></div><div class="worker-grid">${WORKERS.map((w,i)=>{const hired=s.droneCopies[i]>0,assigned=s.equipped.includes(i),eff=Math.min(99,68+i*5+s.droneLevels[i]*3);return `<div class="worker-card"><div class="worker-head"><div class="worker-avatar">${w[0].split(' ').map(x=>x[0]).join('')}</div><div><div class="eyebrow">${w[1]}</div><h3>${w[0]}</h3><span class="tag">LV ${1+s.droneLevels[i]}</span></div></div><p>${w[2]}</p><div class="worker-stats"><div class="worker-stat"><small>EFFICIENCY</small><strong>${eff}%</strong></div><div class="worker-stat"><small>PRODUCTION BONUS</small><strong>${w[3]}</strong></div><div class="worker-stat"><small>CONTRACTS</small><strong>${s.droneCopies[i]}</strong></div><div class="worker-stat"><small>ASSIGNMENT</small><strong>${assigned?'Facility':'Unassigned'}</strong></div></div><div class="cardfooter">${btn(hired?'Hire duplicate':`Hire · ${w[4]} dust`,'dronebuy',`data-i="${i}"`,s.dust<w[4],'small')}${btn(assigned?'Remove':'Assign','droneequip',`data-i="${i}"`,!hired,'small')}${btn('Train','dronefuse',`data-i="${i}"`,s.droneCopies[i]<3||s.droneLevels[i]>=10,'small')}</div></div>`}).join('')}</div>`;
  };

  ui.researchView = function () {
    const s=this.state.s;
    return `<div class="notice-panel"><div class="row between"><div><div class="eyebrow">ACTIVE RESEARCH</div><h3>${s.researchJob?RESEARCH[s.researchJob.i][0]:'No project running'}</h3><p>${s.researchJob?`Completion in <span class="mint" data-research-time>${this.state.constructor?.name ? '' : ''}${Math.max(0,Math.ceil((s.researchJob.end-Date.now())/1000))}s</span>. Research continues while offline.`:'Select one technology below. Only one project can run at a time.'}</p></div><span class="tag">${s.research.reduce((a,b)=>a+b,0)} TOTAL LEVELS</span></div></div><div class="research-lanes">${RESEARCH.map((d,i)=>{const cost=d[2]*2**s.research[i];return `<div class="research-node"><div class="eyebrow">TECHNOLOGY ${String(i+1).padStart(2,'0')}</div><h3>${d[0]}</h3><span class="tag">LEVEL ${s.research[i]} / 20</span><p>${d[1]} per level.</p><div class="progress-label"><span>${d[3]} sec research time</span><span>${this.state.fmt(cost)} energy</span></div>${btn(s.researchJob?'Research in progress':'Start research','researchbuy',`data-i="${i}"`,!!s.researchJob||s.energy<cost||s.research[i]>=20,'primary small')}</div>`}).join('')}</div>`;
  };

  ui.warehouseView = function () {
    const s=this.state.s, used=Math.min(10000,Math.floor(Math.log10(Math.max(1,s.energy))*720+s.dust*8+s.tokens*4+s.cores*12)), capacity=10000+s.facility[3]*1200, percent=Math.min(100,used/capacity*100);
    return `<div class="storage-capacity"><div><div class="eyebrow">STORAGE CAPACITY</div><h2>${this.state.fmt(used)} / ${this.state.fmt(capacity)}</h2><div class="thin-bar"><i style="width:${percent}%"></i></div></div><span class="tag">${percent>85?'CAPACITY WARNING':'OPERATING NORMALLY'}</span></div><div class="inventory-grid">${[['ENERGY RESERVE',s.energy,'Primary production currency'],['STARDUST',s.dust,'Cosmetics and specialist contracts'],['QUANTUM CORES',s.cores,'Permanent rebirth research'],['ARCADE TOKENS',s.tokens,'Arcade exchange currency'],['SINGULARITY SHARDS',s.shards,'Ascension technology'],['ENERGY SHARDS',s.collected.length,'Recovered world fragments']].map(([n,v,d])=>`<div class="inventory-slot"><small>${n}</small><strong>${this.state.fmt(v)}</strong><p>${d}</p></div>`).join('')}</div><div class="section-title">WAREHOUSE SYSTEMS</div><div class="grid"><div class="card"><h3>Storage System · Lv ${s.facility[3]}</h3><p>Infrastructure extends offline storage. Current maximum: ${this.state.offlineHours} hours.</p>${btn(`${this.state.fmt(1000*2**s.facility[3])} energy · Upgrade`,'facility','data-i="3"',s.energy<1000*2**s.facility[3]||s.facility[3]>=50,'small')}</div><div class="card"><h3>Logistics status</h3><p>${percent>85?'Storage is approaching practical capacity. Upgrade storage infrastructure to increase headroom.':'All tracked resources are within normal operating capacity.'}</p></div></div>`;
  };

  ui.marketView = function () {
    const s=this.state.s, phase=Math.floor(Date.now()/60000), rows=[['Stardust shipment',10000,'ENERGY','1 DUST',Math.sin(phase)*6,'dust'],['Arcade token crate',5,'DUST','10 TOKENS',Math.sin(phase+2)*9,'tokens'],['Energy futures',10,'TOKENS','50K ENERGY',Math.sin(phase+4)*7,'energy']];
    return `<div class="notice-panel"><h3>Facility marketplace</h3><p>Internal exchanges let you rebalance resources. Market-change indicators update over time while exchange values remain fixed for gameplay balance.</p></div><div class="market-table">${rows.map(([name,cost,cur,result,chg,id])=>{const own=cur==='ENERGY'?s.energy:cur==='DUST'?s.dust:s.tokens;return `<div class="market-row"><div><small>ITEM</small><strong>${name}</strong></div><div><small>COST</small><strong>${this.state.fmt(cost)} ${cur}</strong></div><div><small>MARKET</small><strong class="${chg>=0?'price-up':'price-down'}">${chg>=0?'+':''}${chg.toFixed(1)}%</strong></div><div><small>RETURN</small><strong>${result}</strong></div>${btn('Trade','markettrade',`data-id="${id}"`,own<cost,'small')}</div>`}).join('')}</div>`;
  };

  ui.skinsView = function () {
    const s=this.state.s;
    return `<div class="notice-panel"><div class="row between"><div><div class="eyebrow">COSMETICS SHOWROOM</div><h3>Reactor themes</h3><p>Select a visual signature for the core. Cosmetics persist through rebirth and ascension.</p></div><span class="tag">${s.dust} STARDUST</span></div></div><div class="showroom-grid">${SKINS.map(d=>`<div class="card showroom-card" style="--skin:${d[2]}"><div class="showroom-preview"></div><div class="row between"><span class="tag">${d[3]}</span><span class="muted">${d[4]<0?'DISCOVERY':d[4]+' DUST'}</span></div><h3>${s.skins.includes(d[0])?d[1]:d[4]<0?'Undiscovered theme':d[1]}</h3><p>${d[0]==='gold'?'+2% all energy while equipped.':'A cosmetic visual signature for your reactor.'}</p>${btn(s.skin===d[0]?'Equipped':s.skins.includes(d[0])?'Equip':d[4]<0?'Locked':'Purchase','skin',`data-id="${d[0]}"`,s.skin===d[0]||(!s.skins.includes(d[0])&&(d[4]<0||s.dust<d[4])),'small')}</div>`).join('')}</div>`;
  };

  ui.arcadeView = function () {
    const locked=this.state.s.lifetime<1000, games=[['target','TARGET RANGE','30 seconds of precision targeting.','Rapid aim'],['memory','REACTOR MEMORY','Repeat increasingly long control sequences.','Pattern'],['catch','ENERGY CATCH','Guide the tray beneath falling crystals.','Control'],['parkour','REACTOR RELAY','Activate twelve relays in sequence.','Speed'],['boss','BOSS CHAMBER','Attack the boss and shield during warnings.','Combat']];
    return `<div class="notice-panel"><div class="row between"><div><div class="eyebrow">ARCADE FLOOR</div><h3>${locked?'Arcade locked':'Choose a minigame'}</h3><p>${locked?'Reach 1K lifetime energy to power the arcade.':'Games award energy and tokens without replacing facility progression.'}</p></div><span class="tag">${this.state.s.tokens} TOKENS</span></div></div><div class="grid">${games.map(([id,name,desc,type])=>`<div class="card arcade-card"><div class="eyebrow">${type.toUpperCase()}</div><h3>${name}</h3><p>${desc}</p><div class="play-spacer"></div><div class="cardfooter"><span class="muted">Best results saved</span>${btn('Play','startgame',`data-id="${id}"`,locked||(id==='boss'&&!this.state.s.rebirths),'primary small')}</div></div>`).join('')}</div><div class="section-title">ARCADE EXCHANGE</div><div class="grid">${[['all','2× Energy','Five minutes of doubled energy.',10],['click','5× Manual energy','60 seconds of overcharged pulses.',8],['xp','2× XP','Five minutes of accelerated learning.',15]].map(([id,name,desc,cost])=>`<div class="card"><h3>${name}</h3><p>${desc}</p>${btn(cost+' tokens','tokenboost',`data-id="${id}"`,this.state.s.tokens<cost,'small')}</div>`).join('')}</div>`;
  };

  ui.rebirthView = function () {
    const s=this.state.s;
    return `<div class="rebirth-hero"><div class="metric-panel"><div class="eyebrow">CURRENT RUN</div><div class="metrics-row" style="margin-top:10px"><div class="mini-metric"><small>RUN ENERGY</small><strong>${this.state.fmt(s.run)}</strong></div><div class="mini-metric"><small>DISTRICTS</small><strong>${s.areas.length}</strong></div><div class="mini-metric"><small>MACHINE LEVELS</small><strong>${s.machines.reduce((a,b)=>a+b,0)}</strong></div><div class="mini-metric"><small>REBIRTHS</small><strong>${s.rebirths}</strong></div></div></div><div class="metric-panel"><div class="metric-label">REBIRTH REWARD</div><div class="metric-value gold" id="rebirthGain">+${this.state.fmt(this.state.rebirthGain)} cores</div><p>Permanent rebirth technology accelerates future facility runs.</p></div></div><div class="grid"><div class="card"><div class="eyebrow">WHAT WILL RESET</div><h3>Current facility run</h3><ul><li>Current energy and run earnings</li><li>Normal machine levels, except retained memory</li><li>Facility infrastructure and district access</li><li>Temporary boosts and challenges</li></ul></div><div class="card"><div class="eyebrow">WHAT YOU KEEP</div><h3>Permanent progress</h3><ul><li>Main skill tree and XP</li><li>Research, cosmetics and worker contracts</li><li>Quests, discoveries and lifetime records</li><li>Quantum cores and permanent upgrades</li></ul></div><div class="card"><div class="eyebrow">REBIRTH READY</div><h3 id="rebirthProgress">${this.state.fmt(s.run)} / ${this.state.fmt(this.state.rebirthRequirement)}</h3><div class="thin-bar"><i style="width:${Math.min(100,s.run/this.state.rebirthRequirement*100)}%"></i></div><p>Rebirth when the permanent reward is worth resetting the current run.</p>${btn('REBIRTH','rebirthconfirm','',s.run<this.state.rebirthRequirement,'primary')}</div></div><div class="section-title">ADVANCED PRESTIGE</div><div class="grid"><div class="card"><h3>Ascension · ${s.cycle}/10 cycle</h3><p>Complete ten rebirths to gain 3 Singularity Shards and a permanent +200% energy bonus.</p>${btn('Ascend','ascendconfirm','',s.cycle<10,'small')}</div><div class="card"><h3>New Reality · ${s.reality}</h3><p>Requires 3 ascensions, BREAK REALITY and Multiverse Access. Cosmetics and lifetime records remain.</p>${btn('Enter New Reality','realityconfirm','',s.ascensions<3||!this.state.fx.breakReality||!this.state.fx.multiverse,'small')}</div></div>`;
  };

  const oldAction = ui.action.bind(ui);
  ui.action = async function (d) {
    if (d.action === 'markettrade') {
      const s=this.state.s, id=d.id;
      if (id==='dust' && s.energy>=10000) { s.energy-=10000; s.dust+=1; this.notice('Trade complete · +1 stardust'); }
      else if (id==='tokens' && s.dust>=5) { s.dust-=5; s.tokens+=10; this.notice('Trade complete · +10 arcade tokens'); }
      else if (id==='energy' && s.tokens>=10) { s.tokens-=10; s.energy+=50000; this.notice('Trade complete · +50K energy'); }
      this.state.recompute(); this.state.save(); this.render(); return;
    }
    return oldAction(d);
  };

  const oldPaint = ui.paint.bind(ui);
  ui.paint = function () {
    oldPaint();
    const r=world.current;
    if (r && $('interactSub')) {
      $('interactSub').textContent = r.action==='core'
        ? `+${this.state.fmt(this.state.manual*(1+this.state.combo/100*(2+(this.state.fx.combo||0))))} energy · click to collect`
        : r.action==='machine'
          ? `Level ${this.state.s.machines[r.data]} · Click to manage`
          : r.action==='locked' ? 'Locked district · Click for requirements' : 'Click to manage';
    }
  };

  // Update settings copy to reflect the new controls when that page is opened.
  const oldSettings = ui.settingsView.bind(ui);
  ui.settingsView = function () {
    return oldSettings()
      .replace('Map controls','Camera controls')
      .replace('Click objects to interact. Drag empty ground to pan. Scroll or pinch to zoom. Use Origin to return to the core and All plots for an overview.','WASD pans the facility. Scroll or pinch to zoom. Middle-mouse drag pans and right-mouse drag rotates. Q / E also rotate. Select buildings to manage their systems.')
      .replace('Keyboard shortcuts: T opens Skills, M opens the Map, Tab opens the menu. Arrow keys pan the map. Home focuses Origin.','Arrow keys also pan. Home returns to Headquarters. Escape closes the current building interface.');
  };

  // A small control hint teaches itself, then gets out of the way.
  setTimeout(() => { const hint=document.querySelector('.camera-hint'); if(hint) hint.style.opacity='.25'; }, 18000);
  world.frame();
  ui.paint();
})();
