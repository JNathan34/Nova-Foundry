import { applyPlots } from './plots.js';

export function applyRedesign(nova) {
  if (!nova || window.__NOVA_REDESIGN_APPLIED__) return;
  window.__NOVA_REDESIGN_APPLIED__ = true;

  const { state, world, ui, nodes = [], areas = [] } = nova;
  const $ = (id) => document.getElementById(id);
  const menu = $('menu');
  const menuContent = $('menuContent');
  const menuTitle = $('menuTitle');
  const worldLabels = $('worldLabels');

  document.body.classList.add('department-redesign');
  world.hoverRing.material.opacity = 0;

  function interactionRecord(object) {
    let found = null;
    object?.traverse?.((child) => {
      if (!found && child.userData?.interactable) found = child.userData.interactable;
    });
    return found;
  }

  // Retire the old menu-like buildings. Their systems are re-homed below.
  const retiredActions = new Set([
    'tree', 'arcade', 'research', 'rebirth', 'drones',
    'challenges', 'travel', 'daily'
  ]);
  for (const object of world.interactables) {
    const record = interactionRecord(object);
    if (record && retiredActions.has(record.action)) {
      object.visible = false;
      record.retiredNavigation = true;
    }
  }

  const departments = [
    { id:'workers', page:'workers', name:'WORKER OFFICE', subtitle:'People & assignments', tooltip:'Manage workers and assignments', x:-14, z:8.5, accent:'#d8b75d', kind:'workers' },
    { id:'mission', page:'missions', name:'MISSION CONTROL', subtitle:'Contracts & objectives', tooltip:'Review contracts and objectives', x:-5, z:8.5, accent:'#d8814f', kind:'mission' },
    { id:'archive', page:'collection', name:'FOUNDRY ARCHIVE', subtitle:'Collection & discoveries', tooltip:'Browse discoveries and collection', x:5, z:8.5, accent:'#6ea77c', kind:'archive' },
    { id:'arcade', page:'arcade', name:'ARCADE', subtitle:'Minigames & scores', tooltip:'Play foundry minigames', x:14, z:8.5, accent:'#a071c5', kind:'arcade' },

    { id:'treasury', page:'treasury', name:'TREASURY', subtitle:'Economy & performance', tooltip:'Review foundry finances', x:-14, z:0.5, accent:'#caa45b', kind:'treasury' },
    { id:'upgrade', page:'tree', name:'UPGRADE LAB', subtitle:'Improve your foundry', tooltip:'Manage the skill tree', x:-6, z:0.5, accent:'#57b9b3', kind:'upgrade' },
    { id:'factory', page:'control', name:'MACHINE HALL', subtitle:'Machines & production', tooltip:'Manage machines and production', x:6, z:0.5, accent:'#d79a53', kind:'factory' },
    { id:'market', page:'market', name:'MARKETPLACE', subtitle:'Drones & specialist goods', tooltip:'Trade for foundry equipment', x:14, z:0.5, accent:'#69a990', kind:'market' },

    { id:'admin', page:'admin', name:'ADMINISTRATION', subtitle:'Records & settings', tooltip:'Open administration systems', x:-14, z:-8.5, accent:'#9ba69c', kind:'admin' },
    { id:'warehouse', page:'warehouse', name:'WAREHOUSE', subtitle:'Inventory & reserves', tooltip:'Inspect stored resources', x:-5, z:-8.5, accent:'#89989c', kind:'warehouse' },
    { id:'quantum', page:'rebirth', name:'QUANTUM FACILITY', subtitle:'Rebirth & ascension', tooltip:'Manage prestige progression', x:5, z:-8.5, accent:'#9b73d0', kind:'quantum' },
    { id:'research', page:'research', name:'RESEARCH CENTRE', subtitle:'New technology', tooltip:'Run research projects', x:14, z:-8.5, accent:'#668fc8', kind:'research' }
  ];

  const departmentByPage = new Map(departments.map((d) => [d.page, d]));
  const Group = world.core.constructor;

  function trim(g, accent) {
    world.box(g, 0, 2.42, 0, 4.25, .13, 3.65, accent, true);
    world.box(g, 0, .46, 1.84, 3.65, .12, .08, accent, true);
    for (const x of [-1.15, 1.15]) {
      world.box(g, x, 1.35, 1.83, .75, .78, .06, '#668b8b', true);
    }
  }

  function decorate(g, d) {
    const a = d.accent;
    if (d.kind === 'upgrade') {
      world.cylinder(g, 0, 3.05, 0, .18, 1.25, '#5f6f69');
      world.sphere(g, 0, 3.68, 0, .42, a, true);
      world.ring(g, 0, 3.68, 0, .72, a, .35);
      world.ring(g, 0, 3.68, 0, .94, a, 1.25);
    } else if (d.kind === 'factory') {
      for (const x of [-1.25, 1.25]) {
        world.cylinder(g, x, 3.05, -.85, .28, 1.65, '#59605b');
        world.box(g, x, 3.92, -.85, .72, .12, .72, a, true);
      }
      world.box(g, 0, .9, 1.9, 2.35, 1.05, .12, '#555d58');
      for (let i = -2; i <= 2; i++) world.box(g, i * .45, .9, 1.98, .05, .95, .03, '#252b28');
    } else if (d.kind === 'mission') {
      world.cylinder(g, 0, 3.05, -.25, .1, 1.45, '#667069');
      const dish = world.ring(g, 0, 3.78, -.25, .82, a, .82);
      dish.rotation.z = .45;
      world.sphere(g, 0, 3.78, -.25, .16, a, true);
      world.box(g, 0, 1.1, 1.92, 2.15, .86, .08, '#704d38');
    } else if (d.kind === 'archive') {
      world.box(g, 0, 1.28, 1.91, 2.7, 1.18, .08, '#6b8f81', true);
      world.box(g, 0, 2.85, 0, 2.9, .24, 2.5, '#29312c');
      for (const x of [-1.55, 1.55]) world.box(g, x, 1.3, 1.88, .28, 1.5, .12, a, true);
    } else if (d.kind === 'arcade') {
      world.box(g, 0, 2.8, 1.72, 3.15, .52, .14, '#33233f');
      world.box(g, 0, 2.8, 1.81, 2.45, .18, .05, a, true);
      for (const x of [-1.4, 1.4]) world.ring(g, x, 1.35, 1.91, .42, a, 0);
    } else if (d.kind === 'research') {
      world.cylinder(g, 0, 2.9, 0, .58, .5, '#596c77');
      for (let i = 0; i < 3; i++) world.ring(g, 0, 3.15 + i * .25, 0, .72 + i * .14, a, i * .65);
      world.sphere(g, 0, 3.42, 0, .28, a, true);
    } else if (d.kind === 'workers') {
      world.box(g, 0, 3.05, 0, 2.9, .7, 2.65, '#2c332d');
      world.box(g, 0, 3.42, 1.35, 2.1, .18, .12, a, true);
      for (const x of [-1.35, 1.35]) world.box(g, x, 1.1, 1.91, .35, 1.6, .08, '#8a7452');
    } else if (d.kind === 'warehouse') {
      world.box(g, 0, 1.18, 1.92, 2.9, 1.45, .1, '#727d7a');
      for (let i = -2; i <= 2; i++) world.box(g, i * .55, 1.18, 1.99, .05, 1.35, .03, '#303733');
      for (const x of [-1.45, 1.45]) {
        world.box(g, x, .48, -1.35, .82, .82, .82, '#6e5c46');
        world.box(g, x, .91, -1.35, .72, .08, .72, a);
      }
    } else if (d.kind === 'market') {
      world.box(g, 0, 2.82, 0, 4.55, .18, 3.95, a, true);
      for (const x of [-1.45, 0, 1.45]) world.box(g, x, 1.05, 1.9, 1.0, .85, .12, '#52635b');
      world.ring(g, 0, 3.32, 0, .65, a, 0);
    } else if (d.kind === 'treasury') {
      world.cylinder(g, 0, 1.25, 1.9, 1.08, .18, '#7c7562');
      world.ring(g, 0, 1.25, 2.02, .82, a, 0);
      world.box(g, 0, 3.02, 0, 3.15, .5, 2.6, '#262c28');
      world.box(g, 0, 3.31, 1.38, 2.2, .13, .08, a, true);
    } else if (d.kind === 'quantum') {
      world.cylinder(g, 0, 2.95, 0, .72, .42, '#555461');
      world.sphere(g, 0, 3.35, 0, .58, a, true);
      for (let i = 0; i < 3; i++) world.ring(g, 0, 3.35, 0, .9 + i * .18, a, .4 + i * .65);
    } else if (d.kind === 'admin') {
      world.box(g, 0, 3.0, 0, 3.0, .68, 2.65, '#2c322e');
      world.cylinder(g, 0, 3.95, -.3, .08, 1.3, '#6e7770');
      world.box(g, .55, 4.35, -.3, 1.1, .5, .05, a, true);
    }
  }

  for (const d of departments) {
    const g = new Group();
    g.position.set(d.x, 0, d.z);
    world.scene.add(g);

    world.box(g, 0, .08, 0, 5.1, .18, 4.55, '#303732');
    world.box(g, 0, 1.35, 0, 4.25, 2.55, 3.65, '#1a211d');
    trim(g, d.accent);
    decorate(g, d);

    const halo = world.ring(g, 0, .18, 0, 2.8, d.accent);
    halo.visible = false;
    const record = world.bind(g, d.page, null, d.name);
    record.department = d;
    d.group = g;
    d.halo = halo;
    d.record = record;

    const label = document.createElement('div');
    label.className = 'world-label';
    label.dataset.department = d.id;
    label.innerHTML = `<span>${d.name}</span><small>${d.subtitle}</small><em></em>`;
    worldLabels.append(label);
    d.labelEl = label;
  }

  function missionReady() {
    return state.missions().filter((m) =>
      !state.s.quests.claims.includes(m[0]) &&
      (state.s.quests[m[1]][m[2]] || 0) >= m[3]
    ).length;
  }

  function affordableUpgrades() {
    let total = 0;
    for (const n of nodes) {
      if (n.tree !== 'main') continue;
      const level = state.s.skills[n.id] || 0;
      if (level >= n.max) continue;
      try {
        if (state.available(n) && state.s.points >= state.nodeCost(n)) total++;
      } catch {}
    }
    return total;
  }

  function departmentStatus(d) {
    const s = state.s;
    if (d.id === 'upgrade') {
      const n = affordableUpgrades();
      return { text: n ? `${n} upgrade${n === 1 ? '' : 's'} affordable` : `${s.points} skill points available`, attention: n > 0 };
    }
    if (d.id === 'factory') {
      const levels = s.machines.reduce((a, b) => a + b, 0);
      return { text: state.fx.automation ? `${levels} machine levels · ${state.fmt(state.cps)}/s` : 'Automation research required', attention: false };
    }
    if (d.id === 'mission') {
      const n = missionReady();
      return { text: n ? `${n} contract reward${n === 1 ? '' : 's'} ready` : 'Contracts tracked', attention: n > 0 };
    }
    if (d.id === 'archive') return { text: `${s.collected.length} / 50 energy shards`, attention: s.collected.length >= 45 && s.collected.length < 50 };
    if (d.id === 'arcade') return { text: `${s.tokens} arcade tokens`, attention: false };
    if (d.id === 'research') {
      if (s.researchJob) {
        const done = Date.now() >= s.researchJob.end;
        return { text: done ? 'Research complete!' : 'Research in progress', attention: done };
      }
      return { text: 'Research bay idle', attention: false };
    }
    if (d.id === 'workers') {
      const ready =
        (!s.npcClaims.includes('engineer') && s.lifetime >= 100000 ? 1 : 0) +
        (!s.npcClaims.includes('scientist') && Object.keys(s.skills).length >= 12 ? 1 : 0) +
        (!s.npcClaims.includes('technician') && s.machines.reduce((a,b)=>a+b,0) >= 25 ? 1 : 0) +
        (!s.npcClaims.includes('explorer') && s.discovered.length >= 6 ? 1 : 0);
      return { text: ready ? `${ready} assignment${ready === 1 ? '' : 's'} ready` : 'Crew assignments', attention: ready > 0 };
    }
    if (d.id === 'warehouse') return { text: `${state.offlineHours}h reserve · ${s.collected.length} shards`, attention: false };
    if (d.id === 'market') return { text: `${s.dust} stardust · ${s.droneCopies.reduce((a,b)=>a+b,0)} drones`, attention: false };
    if (d.id === 'treasury') return { text: `+${state.fmt(state.cps)}/s · ${state.fmt(s.energy)} energy`, attention: false };
    if (d.id === 'quantum') {
      const ready = s.run >= state.rebirthRequirement;
      return { text: ready ? `Rebirth ready · +${state.fmt(state.rebirthGain)} cores` : `${state.fmt(s.run)} / ${state.fmt(state.rebirthRequirement)}`, attention: ready };
    }
    return { text: `${s.achievements.length} achievements · settings`, attention: false };
  }

  let statusClock = 0;
  function updateDepartmentVisuals(dt = .016) {
    statusClock += dt;
    const hovered = world.current?.department || null;
    const selected = ui.opened ? ui._activeDepartment || departmentByPage.get(ui.page) : null;

    for (const d of departments) {
      const isHover = hovered === d;
      const isSelected = selected === d;
      const targetScale = isHover ? 1.045 : isSelected ? 1.025 : 1;
      const next = state.s.settings.reduced
        ? targetScale
        : d.group.scale.x + (targetScale - d.group.scale.x) * .22;
      d.group.scale.setScalar(next);
      d.halo.visible = isHover || isSelected;

      d.labelEl.classList.toggle('hovered', isHover);
      d.labelEl.classList.toggle('selected', isSelected);

      const p = d.group.position.clone();
      d.group.getWorldPosition(p);
      p.y += 4.45;
      p.project(world.camera);
      const visible = p.z > -1 && p.z < 1 && p.x > -1.12 && p.x < 1.12 && p.y > -1.12 && p.y < 1.12 && world.size < 78;
      if (visible) {
        d.labelEl.style.left = `${(p.x * .5 + .5) * innerWidth}px`;
        d.labelEl.style.top = `${(-p.y * .5 + .5) * innerHeight}px`;
        d.labelEl.style.setProperty('--distance-opacity', String(Math.max(.38, 1 - Math.max(0, world.size - 46) / 42)));
      } else {
        d.labelEl.style.setProperty('--distance-opacity', '0');
      }
    }

    if (statusClock > .3) {
      statusClock = 0;
      for (const d of departments) {
        const status = departmentStatus(d);
        const em = d.labelEl.querySelector('em');
        em.textContent = status.text;
        d.labelEl.classList.toggle('attention', status.attention);
      }
    }
  }

  const originalWorldUpdate = world.update.bind(world);
  world.update = function redesignedWorldUpdate(dt) {
    originalWorldUpdate(dt);
    updateDepartmentVisuals(dt);
  };

  const originalNav = ui.nav.bind(ui);
  ui.nav = function noPermanentSystemNav() {
    $('menuNav').innerHTML = '';
  };
  originalNav();
  $('menuNav').innerHTML = '';

  const originalControlView = ui.controlView.bind(ui);
  const originalMissionsView = ui.missionsView.bind(ui);
  const originalCollectionView = ui.collectionView.bind(ui);
  const originalArcadeView = ui.arcadeView.bind(ui);
  const originalResearchView = ui.researchView.bind(ui);
  const originalRebirthView = ui.rebirthView.bind(ui);
  const originalDronesView = ui.dronesView.bind(ui);
  const originalSettingsView = ui.settingsView.bind(ui);

  function intro(kicker, title, copy, metrics = '') {
    return `<div class="department-intro">
      <div>
        <span class="department-kicker">${kicker}</span>
        <h2>${title}</h2>
        <p>${copy}</p>
      </div>
      ${metrics ? `<div class="dept-metrics">${metrics}</div>` : ''}
    </div>`;
  }

  function metric(label, value, sub = '') {
    return `<div class="dept-metric"><span>${label}</span><strong>${value}</strong>${sub ? `<small>${sub}</small>` : ''}</div>`;
  }

  ui.controlView = function factoryView() {
    const machineRecords = world.machineGroups
      .map((group) => interactionRecord(group))
      .filter((r) => r?.action === 'machine')
      .sort((a, b) => a.data - b.data);

    const floor = machineRecords.map((r) => {
      const i = Number(r.data);
      const level = state.s.machines[i];
      const parent = world.machineGroups[i]?.parent;
      const areaEntry = Object.entries(world.areaGroups).find(([, g]) => g === parent);
      const areaId = areaEntry?.[0] || 'lab';
      const areaName = areas.find((a) => a.id === areaId)?.name || areaId;
      const open = state.s.areas.includes(areaId);
      const running = open && level > 0;
      const status = !open ? 'OFFLINE' : running ? 'RUNNING' : 'IDLE';
      const q1 = state.quote(i, 1);
      const q10 = state.quote(i, 10);
      const disabled1 = !state.fx.automation || !open || state.s.energy < q1.cost || q1.n < 1;
      const disabled10 = !state.fx.automation || !open || state.s.energy < q10.cost || q10.n < 1;
      return `<article class="machine-unit">
        <div class="machine-head">
          <div>
            <span class="machine-sector">${areaName}</span>
            <h3>${r.label}</h3>
          </div>
          <span class="machine-status state-${status.toLowerCase()}">${status}</span>
        </div>
        <div class="machine-output">
          <span>OUTPUT</span>
          <strong>${state.fmt(state.machineRate(i))}<small>/s</small></strong>
        </div>
        <div class="machine-specs">
          <span>Level <b>${level}</b></span>
          <span>Milestone <b>${state.milestone(level)}×</b></span>
        </div>
        <div class="machine-actions">
          <button data-action="factoryinspect" data-i="${i}">Inspect</button>
          <button data-action="machinebuy" data-i="${i}" data-n="1" ${disabled1 ? 'disabled' : ''}>Upgrade ×1 · ${state.fmt(q1.cost)} ϟ</button>
          <button data-action="machinebuy" data-i="${i}" data-n="10" ${disabled10 ? 'disabled' : ''}>×10 · ${state.fmt(q10.cost)} ϟ</button>
        </div>
      </article>`;
    }).join('');

    const metrics =
      metric('PRODUCTION', `${state.fmt(state.cps)}/s`) +
      metric('MACHINE LEVELS', state.s.machines.reduce((a,b)=>a+b,0)) +
      metric('RUN ENERGY', state.fmt(state.s.run));

    return `<div class="factory-interface">
      ${intro('MACHINE HALL', 'Production floor', 'Monitor every production unit from one industrial control surface. Individual machines can still be inspected directly in the world.', metrics)}
      ${!state.fx.automation ? '<div class="department-alert">Unlock Basic automation in the Upgrade Lab before machines can be built.</div>' : ''}
      <div class="machine-floor">${floor}</div>
      <div class="factory-subsystem-title">FACILITY INFRASTRUCTURE</div>
      <div class="infrastructure-grid">${[
        ['Cooling system','+10% manual energy'],
        ['Power grid','+10% passive energy'],
        ['Network system','+1 automatic pulse/sec'],
        ['Storage system','+1h offline reserve'],
        ['Research network','+10% XP gain']
      ].map(([name,effect],i)=>{
        const level=state.s.facility[i],cost=1000*2**level;
        return `<article class="infrastructure-card"><span>LV ${level}</span><h3>${name}</h3><p>${effect} per level.</p><button data-action="facility" data-i="${i}" ${state.s.energy<cost||level>=50?'disabled':''}>Upgrade · ${state.fmt(cost)} ϟ</button></article>`;
      }).join('')}</div>
    </div>`;
  };

  ui.missionsView = function missionView() {
    const ready = missionReady();
    const metrics =
      metric('REWARDS READY', ready) +
      metric('COMPLETED', state.s.stats.quests) +
      metric('STARDUST', state.fmt(state.s.dust));
    return `<div class="mission-interface">
      ${intro('MISSION CONTROL', 'Contracts & objectives', 'Track daily and weekly contracts from the control room. Completed work can be claimed here.', metrics)}
      <div class="mission-supply"><span>DAILY LOGISTICS DROP</span><button data-action="daily">${state.s.daily.date === state.calendar() ? 'Collected today' : 'Collect supply'}</button></div>
      <div class="contract-board">${originalMissionsView()}</div>
    </div>`;
  };

  ui.collectionView = function archiveView() {
    const metrics =
      metric('SHARDS', `${state.s.collected.length}/50`) +
      metric('DISCOVERED SECTORS', `${state.s.discovered.length}/10`) +
      metric('REACTOR SKINS', state.s.skins.length);
    return `<div class="archive-interface">
      ${intro('FOUNDRY ARCHIVE', 'Discovery catalogue', 'A quieter gallery for shards, reactor appearances, artefacts and discoveries recovered across the facility.', metrics)}
      <div class="archive-gallery">${originalCollectionView()}</div>
    </div>`;
  };

  ui.arcadeView = function arcadeDepartmentView() {
    const metrics =
      metric('TOKENS', state.s.tokens) +
      metric('GAMES PLAYED', state.s.stats.games) +
      metric('WINS', state.s.stats.wins);
    return `<div class="arcade-interface">
      ${intro('ARCADE', 'Reactor recreation deck', 'Short skill challenges with scores, tokens and foundry rewards.', metrics)}
      <div class="arcade-cabinets">${originalArcadeView()}</div>
    </div>`;
  };

  ui.researchView = function researchDepartmentView() {
    const job = state.s.researchJob;
    const metrics =
      metric('ACTIVE PROJECT', job ? 'RUNNING' : 'IDLE') +
      metric('PROJECT LEVELS', state.s.research.reduce((a,b)=>a+b,0)) +
      metric('RESEARCH RESERVE', state.fmt(state.s.energy));
    if (!state.s.areas.includes('research')) {
      return `<div class="research-interface">
        ${intro('RESEARCH CENTRE', 'Technology projects', 'The centre is physically present, but its laboratory network is still offline.', metrics)}
        <div class="department-lock"><span>RESEARCH NETWORK OFFLINE</span><h3>Open the Research Wing sector</h3><p>Progress through Exploration in the Upgrade Lab and earn enough run energy to bring the research network online.</p></div>
      </div>`;
    }
    return `<div class="research-interface">
      ${intro('RESEARCH CENTRE', 'Technology projects', 'Research unlocks durable technological improvements and runs on its own timer.', metrics)}
      <div class="research-projects">${originalResearchView()}</div>
    </div>`;
  };

  ui.rebirthView = function quantumDepartmentView() {
    const metrics =
      metric('FOUNDRY VALUE', state.fmt(state.s.run)) +
      metric('RESTART REWARD', `+${state.fmt(state.rebirthGain)} cores`) +
      metric('REBIRTHS', state.s.rebirths);
    return `<div class="quantum-interface">
      ${intro('QUANTUM FACILITY', 'Prestige reactor', 'Review exactly what a restart changes before committing to a quantum rebirth or later prestige layer.', metrics)}
      <div class="quantum-core-panel">${originalRebirthView()}</div>
    </div>`;
  };

  ui.workersView = function workersView() {
    const workers = [
      { id:'engineer', name:'Chief Engineer', role:'Foundry Operations', trait:'Precision Planner', assignment:'Origin Laboratory', value:state.s.lifetime, goal:100000, objective:'Generate 100K lifetime energy' },
      { id:'scientist', name:'Dr. Lyra', role:'Research Scientist', trait:'Systems Thinker', assignment:'Research Centre', value:Object.keys(state.s.skills).length, goal:12, objective:'Unlock 12 skill nodes' },
      { id:'technician', name:'Technician Omi', role:'Machine Technician', trait:'Fast Hands', assignment:'Machine Hall', value:state.s.machines.reduce((a,b)=>a+b,0), goal:25, objective:'Own 25 machine levels' },
      { id:'explorer', name:'Explorer Vega', role:'Survey Specialist', trait:'Pathfinder', assignment:'Field Operations', value:state.s.discovered.length, goal:6, objective:'Discover 6 facility areas' }
    ];
    const rows = workers.map((w) => {
      const claimed = state.s.npcClaims.includes(w.id);
      const ready = w.value >= w.goal;
      return `<article class="worker-card ${ready && !claimed ? 'ready' : ''}">
        <div class="worker-avatar">${w.name.split(' ').map(n=>n[0]).join('').slice(0,2)}</div>
        <div class="worker-main">
          <span>${w.role}</span><h3>${w.name}</h3>
          <div class="worker-tags"><b>${w.trait}</b><b>${w.assignment}</b></div>
          <p>${w.objective}</p>
          <div class="worker-progress"><i style="width:${Math.min(100, w.value / w.goal * 100)}%"></i></div>
        </div>
        <div class="worker-side">
          <strong>${state.fmt(Math.min(w.value,w.goal))} / ${state.fmt(w.goal)}</strong>
          <button data-action="npcclaim" data-id="${w.id}" ${claimed || !ready ? 'disabled' : ''}>${claimed ? 'Claimed' : ready ? 'Claim reward' : 'In progress'}</button>
        </div>
      </article>`;
    }).join('');
    return `<div class="workers-interface">
      ${intro('WORKER OFFICE', 'Crew roster', 'Review specialist roles, traits, assignments and progression rewards.', metric('CREW', '4') + metric('ASSIGNMENTS COMPLETE', state.s.npcClaims.length))}
      <div class="worker-roster">${rows}</div>
    </div>`;
  };

  ui.warehouseView = function warehouseView() {
    const s = state.s;
    const stocks = [
      ['ENERGY RESERVE', state.fmt(s.energy), 'Current spendable energy'],
      ['STARDUST', state.fmt(s.dust), 'Specialist currency'],
      ['QUANTUM CORES', state.fmt(s.cores), 'Prestige resource'],
      ['ARCADE TOKENS', state.fmt(s.tokens), 'Recreation exchange'],
      ['ENERGY SHARDS', `${s.collected.length} / 50`, 'Recovered discoveries'],
      ['SINGULARITY SHARDS', state.fmt(s.shards), 'Ascension resource'],
      ['DRONE COMPONENTS', state.fmt(s.droneCopies.reduce((a,b)=>a+b,0)), 'Companion inventory'],
      ['REACTOR FINISHES', state.s.skins.length, 'Unlocked visual signatures']
    ];
    return `<div class="warehouse-interface">
      ${intro('WAREHOUSE', 'Foundry reserves', 'A scan-friendly view of resources and stored progression items.', metric('OFFLINE RESERVE', `${state.offlineHours}h`) + metric('STORAGE SYSTEM', `LV ${s.facility[3]}`))}
      <div class="warehouse-capacity"><span>OFFLINE RESERVE CAPACITY</span><strong>${state.offlineHours} HOURS</strong><div><i style="width:${Math.min(100,state.offlineHours/48*100)}%"></i></div></div>
      <div class="warehouse-grid">${stocks.map(([name,value,sub])=>`<article class="stock-card"><span>${name}</span><strong>${value}</strong><small>${sub}</small></article>`).join('')}</div>
    </div>`;
  };

  ui.treasuryView = function treasuryView() {
    const s = state.s;
    const cps = state.cps;
    const lifetimeRate = s.lifetime ? Math.min(100, s.run / s.lifetime * 100) : 0;
    return `<div class="treasury-interface">
      ${intro('TREASURY', 'Financial dashboard', 'A compact operational view of current energy, production and long-term foundry value.', metric('NET PRODUCTION', `+${state.fmt(cps)}/s`) + metric('CURRENT ENERGY', state.fmt(s.energy)) + metric('LIFETIME VALUE', state.fmt(s.lifetime)))}
      <div class="finance-grid">
        <article class="finance-card featured"><span>NET PRODUCTION</span><strong>+${state.fmt(cps)}<small>/s</small></strong><p>Passive production after current upgrades and boosts.</p></article>
        <article class="finance-card"><span>CURRENT RUN</span><strong>${state.fmt(s.run)}</strong><div class="finance-bar"><i style="width:${lifetimeRate}%"></i></div><small>${lifetimeRate.toFixed(1)}% of lifetime energy</small></article>
        <article class="finance-card"><span>EXPENSES</span><strong>0<small>/s</small></strong><p>Nova Foundry has no recurring machine upkeep in the current ruleset.</p></article>
        <article class="finance-card"><span>ASSET DEPTH</span><strong>${s.machines.reduce((a,b)=>a+b,0)}</strong><p>Total machine levels across ${s.areas.length} active sectors.</p></article>
      </div>
      <div class="treasury-ledger">
        <div><span>Lifetime energy</span><strong>${state.fmt(s.lifetime)}</strong></div>
        <div><span>Run energy</span><strong>${state.fmt(s.run)}</strong></div>
        <div><span>Stardust reserve</span><strong>${state.fmt(s.dust)}</strong></div>
        <div><span>Quantum reserve</span><strong>${state.fmt(s.cores)}</strong></div>
      </div>
    </div>`;
  };

  ui.marketView = function marketView() {
    const unlocked = state.s.lifetime >= 1000;
    return `<div class="market-interface">
      ${intro('MARKETPLACE', 'Specialist exchange', 'Spend Stardust on companion drones and related specialist equipment. Core production resources are never sold automatically.', metric('STARDUST', state.fmt(state.s.dust)) + metric('DRONES OWNED', state.s.droneCopies.reduce((a,b)=>a+b,0)))}
      ${unlocked
        ? `<div class="market-ticker"><span>FOUNDRY EXCHANGE</span><b>DRONE COMPONENTS</b><em>AVAILABLE</em></div><div class="market-listings">${originalDronesView()}</div>`
        : `<div class="department-lock"><span>MARKET LICENSE PENDING</span><h3>Reach 1K lifetime energy</h3><p>The specialist drone exchange opens once the foundry has produced 1,000 lifetime energy.</p></div>`}
    </div>`;
  };

  ui.adminView = function adminView() {
    const items = [
      ['SETTINGS','Graphics, audio, controls and save management.','settings','⚙',false],
      ['ACHIEVEMENTS',`${state.s.achievements.length} completed achievements.`,'achievements','✦',false],
      ['CHALLENGES',state.s.rebirths ? 'Optional rule modifiers and challenge runs.' : 'Available after your first rebirth.','challenges','◇',!state.s.rebirths],
      ['STATISTICS','Lifetime production and progression records.','stats','▥',false]
    ];
    return `<div class="admin-interface">
      ${intro('ADMINISTRATION', 'Foundry administration', 'Secondary systems live here instead of in a permanent “More” menu.', metric('ACHIEVEMENTS', state.s.achievements.length) + metric('SECTORS', `${state.s.discovered.length}/10`))}
      <div class="admin-grid">${items.map(([name,copy,page,icon,disabled])=>`<article class="admin-card"><span>${icon}</span><h3>${name}</h3><p>${copy}</p><button data-action="open" data-page="${page}" ${disabled?'disabled':''}>${disabled?'Locked':'Open'}</button></article>`).join('')}</div>
    </div>`;
  };

  ui.settingsView = function settingsDepartmentView() {
    return originalSettingsView()
      .replace('Use Origin to return to the core and All plots for an overview.', 'Press Home to return to the Origin core. The world itself is the navigation map.')
      .replace('Keyboard shortcuts: T opens Skills, M opens the Map, Tab opens the menu. Arrow keys pan the map. Home focuses Origin.', 'Keyboard: Arrow keys pan the map, Home focuses Origin, Esc closes a department, and holding Alt reveals extra building status.');
  };

  const originalRender = ui.render.bind(ui);
  const titles = {
    tree:['UPGRADE LAB','Skill tree'],
    control:['MACHINE HALL','Production floor'],
    missions:['MISSION CONTROL','Contracts & objectives'],
    collection:['FOUNDRY ARCHIVE','Collection & discoveries'],
    arcade:['ARCADE','Minigames'],
    research:['RESEARCH CENTRE','Technology projects'],
    workers:['WORKER OFFICE','Crew roster'],
    warehouse:['WAREHOUSE','Inventory & reserves'],
    market:['MARKETPLACE','Specialist exchange'],
    treasury:['TREASURY','Economy & performance'],
    rebirth:['QUANTUM FACILITY','Rebirth & ascension'],
    admin:['ADMINISTRATION','Administration'],
    settings:['ADMINISTRATION','Settings'],
    achievements:['ADMINISTRATION','Achievements'],
    challenges:['ADMINISTRATION','Challenges'],
    stats:['ADMINISTRATION','Statistics'],
    drones:['MARKETPLACE','Companion drones']
  };

  ui.render = function redesignedRender() {
    originalRender();
    menu.dataset.page = this.page;
    const title = titles[this.page];
    if (title) {
      const eyebrow = menu.querySelector('.menu-header .eyebrow');
      eyebrow.textContent = title[0];
      menuTitle.textContent = title[1];
    }
    if (this.page === 'tree' && this.treeType !== 'main') {
      const eyebrow = menu.querySelector('.menu-header .eyebrow');
      if (this.treeType === 'quantum' || this.treeType === 'ascension') {
        eyebrow.textContent = 'QUANTUM FACILITY';
        menuTitle.textContent = this.treeType === 'quantum' ? 'Quantum research' : 'Ascension research';
      } else {
        menuTitle.textContent = 'Mastery research';
      }
    }
    $('menuNav').innerHTML = '';
    if (this.page === 'collection') {
      menuContent.querySelectorAll('[data-page="drones"]').forEach((button) => button.remove());
    }
  };

  const originalOpen = ui.open.bind(ui);
  ui.open = function redesignedOpen(page = 'admin') {
    const d = departmentByPage.get(page);
    const shouldFocus = d && !this._suppressDepartmentFocus;
    this._suppressDepartmentFocus = false;

    if (!this.opened && shouldFocus) {
      this._worldReturn = {
        x: world.goal.x,
        z: world.goal.z,
        size: world.goalSize
      };
    }

    if (shouldFocus) {
      this._activeDepartment = d;
      world.goal.set(d.x, 0, d.z);
      world.goalSize = Math.max(18, Math.min(23, 20 / Math.max(.8, innerWidth / innerHeight)));
    }

    document.body.classList.add('building-ui-open');
    originalOpen(page);
  };

  const originalClose = ui.close.bind(ui);
  ui.close = function redesignedClose() {
    const previous = this._worldReturn;
    originalClose();
    document.body.classList.remove('building-ui-open');
    if (previous) {
      world.goal.set(previous.x, 0, previous.z);
      world.goalSize = previous.size;
    }
    this._worldReturn = null;
    this._activeDepartment = null;
  };

  const originalInteract = ui.interact.bind(ui);
  ui.interact = function redesignedInteract(record) {
    if (record.department) {
      this._activeDepartment = record.department;
      state.emit('sound', record.department.id === 'quantum' ? 420 : 310);
      if (record.department.id === 'upgrade') {
        this.treeType = 'main';
        if (this.branch === 'cross') this.branch = 'power';
      }
    }
    originalInteract(record);
  };

  const originalAction = ui.action.bind(ui);
  ui.action = async function redesignedAction(data) {
    if (data.action === 'factoryinspect') {
      this.machineIndex = Number(data.i);
      this.showMachine();
      return;
    }
    if (data.action === 'npcclaim' && this.page === 'workers') {
      state.npcClaim(data.id);
      this.render();
      return;
    }
    if (data.action === 'qtree' || data.action === 'atree') {
      this._suppressDepartmentFocus = true;
    }
    return originalAction(data);
  };

  const originalPaint = ui.paint.bind(ui);
  ui.paint = function redesignedPaint() {
    originalPaint();

    const r = world.current;
    if (r?.department) $('interactSub').textContent = r.department.tooltip;

    const s = state.s;
    if (s.stats.clicks >= 5 && !state.fx.automation) {
      $('objectiveLabel').textContent = 'OPEN THE UPGRADE LAB';
      $('objectiveText').textContent = 'Select the Upgrade Lab and unlock Basic automation.';
    } else if (state.fx.automation && !s.machines[0]) {
      $('objectiveLabel').textContent = 'START THE MACHINE HALL';
      $('objectiveText').textContent = 'Select the Machine Hall and build your first Energy collector.';
    }

    if (menu.dataset.page !== this.page) menu.dataset.page = this.page;
  };

  // Disable the legacy T/M/Tab menu shortcuts. Tab remains usable for keyboard focus.
  document.addEventListener('keydown', (event) => {
    if (event.code === 'AltLeft' || event.code === 'AltRight') document.body.classList.add('info-mode');
    if (/INPUT|TEXTAREA|SELECT/.test(event.target.tagName)) return;
    if (event.code === 'Tab' || event.code === 'KeyT' || event.code === 'KeyM') {
      event.stopImmediatePropagation();
    }
  }, true);
  document.addEventListener('keyup', (event) => {
    if (event.code === 'AltLeft' || event.code === 'AltRight') document.body.classList.remove('info-mode');
  }, true);
  window.addEventListener('blur', () => document.body.classList.remove('info-mode'));

  applyPlots(nova, departments);

  // Initial label position and menu cleanup.
  updateDepartmentVisuals(.31);
  ui.nav();
  if (ui.opened) ui.render();
}
