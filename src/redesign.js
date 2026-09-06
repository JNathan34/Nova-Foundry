export function applyRedesign(nova) {
  if (!nova || window.__NOVA_PROGRESSIVE_REDESIGN_APPLIED__) return;
  window.__NOVA_PROGRESSIVE_REDESIGN_APPLIED__ = true;
  window.__NOVA_REDESIGN_APPLIED__ = true;

  const { state, world, ui, nodes = [], areas = [] } = nova;
  const $ = (id) => document.getElementById(id);
  const menu = $('menu');
  const menuContent = $('menuContent');
  const menuTitle = $('menuTitle');
  const worldLabels = $('worldLabels');
  const tutorialPanel = $('tutorialPanel');
  const tutorialStepEl = $('tutorialStep');
  const tutorialTitleEl = $('tutorialTitle');
  const tutorialTextEl = $('tutorialText');
  const tutorialShowEl = $('tutorialShow');
  const nodeMap = new Map(nodes.map((n) => [n.id, n]));

  document.body.classList.add('department-redesign', 'progressive-foundry');
  world.hoverRing.material.opacity = 0;

  function interactionRecord(object) {
    let found = null;
    object?.traverse?.((child) => {
      if (!found && child.userData?.interactable) found = child.userData.interactable;
    });
    return found;
  }

  // Remove the old "menu made of buildings" layer and legacy origin clutter.
  const retiredActions = new Set([
    'tree', 'arcade', 'research', 'rebirth', 'drones', 'challenges',
    'travel', 'daily', 'machine', 'npc'
  ]);
  for (const object of world.interactables) {
    const record = interactionRecord(object);
    if (record && retiredActions.has(record.action)) {
      object.visible = false;
      record.retiredNavigation = true;
    }
  }

  // Remove the giant crossroad and most fence noise from the starting plot.
  const labPlot = world.plotGroups?.lab;
  if (labPlot) {
    const direct = labPlot.children || [];
    if (direct[1]) direct[1].visible = false;
    if (direct[2]) direct[2].visible = false;
    for (const child of direct) {
      if (child?.isMesh && (Math.abs(child.position.x) > 10 || Math.abs(child.position.z) > 10) &&
          child.position.y > .2 && child.position.y < .8) {
        child.visible = false;
      }
      if (!child?.isMesh && Math.abs(child.position?.x || 0) > 8 && Math.abs(child.position?.z || 0) > 8 &&
          (child.position.x * child.position.z > 0)) {
        child.visible = false;
      }
    }
  }

  // Remove unused flower-bed meshes while keeping the core and collectibles intact.
  const labGroup = world.areaGroups?.lab;
  if (labGroup) {
    for (const child of labGroup.children || []) {
      if (child?.isMesh && !child.userData?.interactable) child.visible = false;
    }
  }

  // The core keeps its geometry but uses the new HTML hover system instead of the old sprite label.
  world.core?.traverse?.((child) => {
    if (child?.isSprite) child.visible = false;
  });

  // A small, intentional path network for the starting loop.
  const pathRoot = new world.core.constructor();
  world.scene.add(pathRoot);
  world.box(pathRoot, 0, -.035, 2.4, 2.15, .10, 10.8, '#d7bc86');
  world.box(pathRoot, 0, -.03, 1.0, 15.8, .10, 2.05, '#d7bc86');
  world.box(pathRoot, 0, -.02, 7.0, 5.4, .07, 2.0, '#cdb482');

  const departments = [
    { id:'upgrade', page:'tree', name:'UPGRADE LAB', subtitle:'Upgrades', tooltip:'Improve production', x:-6.8, z:1.1, accent:'#57b9b3', kind:'upgrade', unlockLevel:1 },
    { id:'factory', page:'control', name:'MACHINE HALL', subtitle:'Production', tooltip:'Manage production', x:6.9, z:1.0, accent:'#d79a53', kind:'factory', unlockLevel:1 },
    { id:'mission', page:'missions', name:'MISSION CONTROL', subtitle:'Objectives', tooltip:'Review objectives', x:0, z:7.6, accent:'#d8814f', kind:'mission', unlockLevel:1 },

    { id:'warehouse', page:'warehouse', name:'WAREHOUSE', subtitle:'Storage', tooltip:'Inspect reserves', x:-10.6, z:8.9, accent:'#89989c', kind:'warehouse', unlockLevel:3 },
    { id:'workers', page:'workers', name:'WORKER OFFICE', subtitle:'Crew', tooltip:'Manage workers', x:-11.6, z:-5.8, accent:'#d8b75d', kind:'workers', unlockLevel:5 },
    { id:'research', page:'research', name:'RESEARCH CENTRE', subtitle:'Technology', tooltip:'Run research projects', x:10.8, z:-7.7, accent:'#668fc8', kind:'research', unlockLevel:7 },
    { id:'market', page:'market', name:'MARKETPLACE', subtitle:'Trading', tooltip:'Open the specialist exchange', x:13.8, z:4.8, accent:'#69a990', kind:'market', unlockLevel:10 },
    { id:'archive', page:'collection', name:'FOUNDRY ARCHIVE', subtitle:'Collection', tooltip:'Browse discoveries', x:-5.7, z:-12.5, accent:'#6ea77c', kind:'archive', unlockLevel:12 },
    { id:'arcade', page:'arcade', name:'ARCADE', subtitle:'Minigames', tooltip:'Play foundry minigames', x:5.9, z:-13.4, accent:'#a071c5', kind:'arcade', unlockLevel:15 },
    { id:'treasury', page:'treasury', name:'TREASURY', subtitle:'Finances', tooltip:'Review foundry finances', x:14.2, z:-4.3, accent:'#caa45b', kind:'treasury', unlockLevel:18 },
    { id:'quantum', page:'rebirth', name:'QUANTUM FACILITY', subtitle:'Rebirth', tooltip:'Manage prestige progression', x:0, z:-17.2, accent:'#9b73d0', kind:'quantum', unlockLevel:20 }
  ];

  const departmentByPage = new Map(departments.map((d) => [d.page, d]));
  const departmentById = new Map(departments.map((d) => [d.id, d]));
  const Group = world.core.constructor;

  function isUnlocked(d) {
    if (d.id === 'quantum') {
      return state.level >= d.unlockLevel || state.s.rebirths > 0 ||
        state.s.run >= state.rebirthRequirement * .35;
    }
    return state.level >= d.unlockLevel;
  }

  function makeShell(g, d, width, depth, height = 2.25) {
    world.box(g, 0, .05, 0, width + .65, .10, depth + .65, '#536052');
    world.box(g, 0, 1.25, 0, width, height, depth, '#2a332c');
    world.box(g, 0, 2.43, 0, width + .14, .14, depth + .14, '#3a443c');

    const front = depth / 2 + .075;
    world.box(g, 0, .76, front, 1.05, 1.28, .08, '#5a625b');
    for (const x of [-width * .27, width * .27]) {
      world.box(g, x, 1.44, front + .005, .82, .62, .07, '#72958a', true);
    }
    world.box(g, 0, .39, front + .28, width * .72, .12, .5, d.accent);
  }

  function decorate(g, d) {
    const a = d.accent;
    if (d.kind === 'upgrade') {
      makeShell(g, d, 4.35, 3.45);
      world.cylinder(g, 0, 2.82, -.1, .36, .46, '#61706a');
      world.sphere(g, 0, 3.22, -.1, .38, a, true);
      world.ring(g, 0, 3.22, -.1, .70, a, .28);
      world.box(g, -1.45, 2.66, -.9, .48, .38, .48, '#48564f');
    } else if (d.kind === 'factory') {
      makeShell(g, d, 5.35, 3.75, 2.35);
      for (const x of [-1.45, 1.45]) {
        world.cylinder(g, x, 2.92, -.72, .23, .72, '#667068');
        world.box(g, x, 3.32, -.72, .56, .10, .56, a);
      }
      world.box(g, 0, .48, 2.25, 3.25, .34, .72, '#667067');
      for (let i = -3; i <= 3; i++) world.box(g, i * .42, .67, 2.25, .08, .08, .63, '#343a35');
      world.box(g, 2.2, 1.05, 1.94, .5, 1.2, .10, a);
    } else if (d.kind === 'mission') {
      makeShell(g, d, 4.0, 3.25, 2.1);
      world.cylinder(g, 0, 2.93, -.15, .09, 1.05, '#69736c');
      const dish = world.ring(g, 0, 3.42, -.15, .62, a, .78);
      dish.rotation.z = .36;
      world.sphere(g, 0, 3.42, -.15, .13, a, true);
      world.box(g, 0, .52, 1.92, 2.0, .32, .48, '#73513d');
    } else if (d.kind === 'warehouse') {
      makeShell(g, d, 5.7, 3.75, 2.25);
      const front = 3.75 / 2 + .08;
      world.box(g, 0, 1.03, front + .02, 2.9, 1.55, .09, '#66716c');
      for (let i = -2; i <= 2; i++) world.box(g, i * .58, 1.03, front + .075, .055, 1.42, .025, '#333a36');
      world.box(g, -2.0, 2.72, -.8, .78, .42, 1.15, '#525c57');
    } else if (d.kind === 'workers') {
      makeShell(g, d, 4.45, 3.25);
      world.box(g, 0, 2.82, .45, 2.25, .36, 1.15, '#404940');
      world.box(g, 0, 1.05, 1.92, 2.3, .14, .62, a);
      for (const x of [-1.6, 1.6]) world.cylinder(g, x, .62, 1.95, .09, 1.05, '#7b6a4d');
    } else if (d.kind === 'research') {
      makeShell(g, d, 4.6, 3.55);
      world.cylinder(g, 0, 2.86, 0, .56, .55, '#5f6d74');
      world.sphere(g, 0, 3.20, 0, .28, a, true);
      world.ring(g, 0, 3.20, 0, .72, a, .15);
      world.ring(g, 0, 3.20, 0, .91, a, 1.08);
    } else if (d.kind === 'market') {
      makeShell(g, d, 4.95, 3.4);
      world.box(g, 0, 2.73, 1.15, 4.55, .18, 1.0, '#4c695d');
      for (const x of [-1.5, 0, 1.5]) world.box(g, x, .55, 2.05, .82, .72, .48, '#57665e');
      world.ring(g, 0, 3.08, -.35, .5, a, 0);
    } else if (d.kind === 'archive') {
      makeShell(g, d, 4.7, 3.45);
      world.box(g, 0, 2.72, 0, 2.65, .42, 1.7, '#3c4841');
      world.box(g, 0, 2.96, 0, 1.55, .06, 1.0, '#76978a', true);
      world.box(g, -1.55, 1.08, 1.83, .22, 1.35, .08, a);
      world.box(g, 1.55, 1.08, 1.83, .22, 1.35, .08, a);
    } else if (d.kind === 'arcade') {
      makeShell(g, d, 4.35, 3.25);
      world.box(g, 0, 2.88, .25, 2.65, .48, .22, '#3c2a45');
      world.box(g, 0, 2.89, .39, 1.95, .12, .08, a, true);
      for (const x of [-1.25, 1.25]) world.ring(g, x, 1.10, 1.78, .31, a, 0);
    } else if (d.kind === 'treasury') {
      makeShell(g, d, 4.45, 3.55);
      world.box(g, 0, 2.79, 0, 2.85, .43, 1.8, '#41473f');
      world.cylinder(g, 0, 1.12, 1.90, .82, .16, '#6e695a');
      world.ring(g, 0, 1.12, 2.08, .62, a, 0);
    } else if (d.kind === 'quantum') {
      makeShell(g, d, 5.0, 4.1, 2.3);
      world.cylinder(g, 0, 2.85, 0, .72, .40, '#565561');
      world.sphere(g, 0, 3.22, 0, .52, a, true);
      world.ring(g, 0, 3.22, 0, .86, a, .30);
      world.ring(g, 0, 3.22, 0, 1.08, a, 1.20);
    }
  }

  function makePlot(d) {
    const g = new Group();
    g.position.set(d.x, 0, d.z);
    world.scene.add(g);
    world.box(g, 0, .02, 0, 5.2, .08, 4.15, '#a9ad91');
    world.box(g, 0, .08, 0, 4.4, .10, 3.35, '#b8b79c');
    for (const [x,z] of [[-2.2,-1.7],[2.2,-1.7],[-2.2,1.7],[2.2,1.7]]) {
      world.box(g, x, .42, z, .12, .82, .12, '#9b805b');
    }
    world.box(g, 0, .33, 1.83, 2.2, .58, .10, '#6c715f');
    return g;
  }

  for (const d of departments) {
    const g = new Group();
    g.position.set(d.x, 0, d.z);
    world.scene.add(g);
    decorate(g, d);

    const record = world.bind(g, d.page, null, d.name);
    record.department = d;
    d.group = g;
    d.record = record;
    d.halo = world.ring(g, 0, .15, 0, 2.85, d.accent);
    d.halo.visible = false;
    d.plot = makePlot(d);

    const label = document.createElement('div');
    label.className = 'world-label';
    label.dataset.department = d.id;
    label.innerHTML = `<span>${d.name}</span><small>${d.subtitle}</small><em></em>`;
    worldLabels.append(label);
    d.labelEl = label;

    const plotLabel = document.createElement('div');
    plotLabel.className = 'plot-label';
    plotLabel.dataset.department = d.id;
    plotLabel.innerHTML = `<span>FUTURE DEVELOPMENT</span><small>Foundry Level ${d.unlockLevel}</small>`;
    worldLabels.append(plotLabel);
    d.plotLabelEl = plotLabel;
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
      return { text: n ? `${n} affordable upgrade${n === 1 ? '' : 's'}` : `${s.points} skill points`, attention: n > 0 };
    }
    if (d.id === 'factory') {
      const levels = s.machines.reduce((a, b) => a + b, 0);
      return { text: `${state.fmt(state.cps)}/s · ${levels} machine levels`, attention: false };
    }
    if (d.id === 'mission') {
      const n = missionReady();
      return { text: n ? `${n} reward${n === 1 ? '' : 's'} ready` : 'Objectives available', attention: n > 0 };
    }
    if (d.id === 'warehouse') return { text: `${state.offlineHours}h reserve`, attention: false };
    if (d.id === 'workers') {
      const ready =
        (!s.npcClaims.includes('engineer') && s.lifetime >= 100000 ? 1 : 0) +
        (!s.npcClaims.includes('scientist') && Object.keys(s.skills).length >= 12 ? 1 : 0) +
        (!s.npcClaims.includes('technician') && s.machines.reduce((a,b)=>a+b,0) >= 25 ? 1 : 0) +
        (!s.npcClaims.includes('explorer') && s.discovered.length >= 6 ? 1 : 0);
      return { text: ready ? `${ready} assignment${ready === 1 ? '' : 's'} ready` : 'Crew assignments', attention: ready > 0 };
    }
    if (d.id === 'research') {
      if (s.researchJob) return { text: Date.now() >= s.researchJob.end ? 'Research complete' : 'Research in progress', attention: Date.now() >= s.researchJob.end };
      return { text: 'Research bay idle', attention: false };
    }
    if (d.id === 'market') return { text: `${s.dust} stardust`, attention: false };
    if (d.id === 'archive') return { text: `${s.collected.length}/50 shards`, attention: false };
    if (d.id === 'arcade') return { text: `${s.tokens} arcade tokens`, attention: false };
    if (d.id === 'treasury') return { text: `+${state.fmt(state.cps)}/s`, attention: false };
    if (d.id === 'quantum') {
      const ready = s.run >= state.rebirthRequirement;
      return { text: ready ? `Rebirth ready · +${state.fmt(state.rebirthGain)} cores` : 'Prestige systems', attention: ready };
    }
    return { text:'', attention:false };
  }

  function visiblePlots() {
    const locked = departments.filter((d) => !isUnlocked(d)).sort((a,b) => a.unlockLevel - b.unlockLevel);
    return new Set(locked.slice(0, 2).map((d) => d.id));
  }

  function projectElement(group, element, y, maxWorldSize = 70) {
    const p = group.position.clone();
    group.getWorldPosition(p);
    p.y += y;
    p.project(world.camera);
    const visible = p.z > -1 && p.z < 1 && p.x > -1.10 && p.x < 1.10 &&
      p.y > -1.10 && p.y < 1.10 && world.size < maxWorldSize;
    if (!visible) {
      element.style.setProperty('--distance-opacity', '0');
      return;
    }
    element.style.left = `${(p.x * .5 + .5) * innerWidth}px`;
    element.style.top = `${(-p.y * .5 + .5) * innerHeight}px`;
    element.style.setProperty('--distance-opacity',
      String(Math.max(.42, 1 - Math.max(0, world.size - 44) / 38)));
  }

  let statusClock = 1;
  function updateDepartmentVisuals(dt = .016) {
    statusClock += dt;
    const hovered = world.current?.department || null;
    const selected = ui.opened ? ui._activeDepartment || departmentByPage.get(ui.page) : null;
    const plots = visiblePlots();
    const tutorialTarget = currentTutorial()?.target || null;
    const now = performance.now();

    for (const d of departments) {
      const unlocked = isUnlocked(d);
      const plotVisible = !unlocked && plots.has(d.id);
      d.group.visible = unlocked;
      d.plot.visible = plotVisible;
      d.labelEl.style.display = unlocked ? '' : 'none';
      d.plotLabelEl.style.display = plotVisible ? '' : 'none';

      if (unlocked) {
        const isHover = hovered === d;
        const isSelected = selected === d;
        const isTutorial = tutorialTarget === d.id;
        const pulse = isTutorial && !state.s.settings.reduced ? Math.sin(now / 260) * .018 : 0;
        const targetScale = (isHover ? 1.045 : isSelected ? 1.025 : 1) + pulse;

        let constructionY = 1;
        if (d.constructStart) {
          const t = Math.min(1, (now - d.constructStart) / 2400);
          constructionY = .08 + .92 * (1 - Math.pow(1 - t, 3));
          if (t >= 1) d.constructStart = 0;
        }

        const next = state.s.settings.reduced
          ? targetScale
          : d.group.scale.x + (targetScale - d.group.scale.x) * .22;
        d.group.scale.set(next, next * constructionY, next);
        d.halo.visible = isHover || isSelected || isTutorial;

        d.labelEl.classList.toggle('hovered', isHover);
        d.labelEl.classList.toggle('selected', isSelected);
        d.labelEl.classList.toggle('tutorial-target', isTutorial);
        projectElement(d.group, d.labelEl, 4.25);
      } else if (plotVisible) {
        projectElement(d.plot, d.plotLabelEl, 1.45, 58);
      }
    }

    if (statusClock > .35) {
      statusClock = 0;
      for (const d of departments) {
        if (!isUnlocked(d)) continue;
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
    renderTutorial();
  };

  // No permanent system navigation.
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
  const originalTreeView = ui.treeView.bind(ui);
  const originalTreeGraph = ui.treeGraph.bind(ui);
  const originalInspector = ui.inspector.bind(ui);

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

  function areaNameForMachine(i) {
    const parent = world.machineGroups[i]?.parent;
    const areaEntry = Object.entries(world.areaGroups).find(([, g]) => g === parent);
    const areaId = areaEntry?.[0] || 'lab';
    return areas.find((a) => a.id === areaId)?.name || areaId;
  }

  ui.controlView = function factoryView() {
    const records = world.machineGroups
      .map((group) => interactionRecord(group))
      .filter((r) => r?.action === 'machine')
      .sort((a, b) => a.data - b.data);

    const opened = records.filter((r) => {
      const i = Number(r.data);
      const parent = world.machineGroups[i]?.parent;
      const areaEntry = Object.entries(world.areaGroups).find(([, g]) => g === parent);
      return state.s.areas.includes(areaEntry?.[0] || 'lab');
    });

    const visibleCount = Math.min(opened.length, Math.max(1, 1 + Math.floor((state.level - 1) / 4)));
    const machineCards = opened.slice(0, visibleCount).map((r, index) => {
      const i = Number(r.data);
      const level = state.s.machines[i];
      const running = level > 0;
      const q1 = state.quote(i, 1);
      const starter = i === 0 && level === 0;
      return `<article class="machine-summary ${index === 0 ? 'featured-machine' : ''}">
        <div>
          <span class="machine-sector">${areaNameForMachine(i)}</span>
          <h3>${r.label}</h3>
          <b class="machine-status state-${running ? 'running' : 'idle'}">${running ? 'RUNNING' : 'IDLE'}</b>
        </div>
        <div class="machine-primary-value">
          <span>PRODUCTION</span>
          <strong>${state.fmt(state.machineRate(i))}<small>/s</small></strong>
        </div>
        <div class="machine-simple-meta">
          <span>Level <b>${level}</b></span>
          <span>${running ? `${state.milestone(level)}× milestone` : 'Not commissioned'}</span>
        </div>
        <div class="machine-primary-action">
          ${starter
            ? `<button class="primary" data-action="startermachine" data-i="${i}">START MACHINE</button>`
            : `<button class="primary" data-action="factoryinspect" data-i="${i}">MANAGE</button>`}
          ${!starter && running ? `<button class="quiet-action" data-action="machinebuy" data-i="${i}" data-n="1" ${state.s.energy < q1.cost || q1.n < 1 ? 'disabled' : ''}>Upgrade · ${state.fmt(q1.cost)} ϟ</button>` : ''}
        </div>
      </article>`;
    }).join('');

    const hidden = Math.max(0, opened.length - visibleCount);
    return `<div class="factory-interface">
      ${intro('MACHINE HALL', 'Manage production.', 'Keep the production floor simple: see what is running, then open a machine only when you need its detailed controls.',
        metric('OUTPUT', `${state.fmt(state.cps)}/s`) +
        metric('RUNNING', state.s.machines.filter(Boolean).length))}
      <div class="machine-summary-grid">${machineCards}</div>
      ${hidden ? `<div class="future-upgrades-note">More production lines unlock as your foundry grows.</div>` : ''}
      <details class="advanced-disclosure">
        <summary>Facility infrastructure</summary>
        <p>Advanced systems are tucked away until you need them.</p>
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
      </details>
    </div>`;
  };

  ui.missionsView = function missionView() {
    const ready = missionReady();
    const early = state.level < 5;
    const machineGoal = 3;
    const machineProgress = Math.min(machineGoal, state.s.machines[0] || 0);
    const earlyObjective = `<article class="current-contract">
      <div>
        <span>CURRENT OBJECTIVE</span>
        <h3>Stabilise your first production line</h3>
        <p>Upgrade the Energy Collector to Level ${machineGoal}.</p>
      </div>
      <strong>${machineProgress} / ${machineGoal}</strong>
      <div class="thin-bar"><i style="width:${machineProgress / machineGoal * 100}%"></i></div>
    </article>`;
    const board = originalMissionsView();
    return `<div class="mission-interface">
      ${intro('MISSION CONTROL', 'What should I do next?', early
        ? 'One objective is enough while you learn the core loop.'
        : 'Focus on the next useful objective; open the full contract board only when you want more.',
        metric('REWARDS READY', ready) + metric('COMPLETED', state.s.stats.quests))}
      ${early ? earlyObjective : `<div class="contract-board">${board}</div>`}
      ${early ? `<details class="advanced-disclosure"><summary>View full contract board</summary><div class="contract-board">${board}</div></details>` : ''}
      <details class="advanced-disclosure services-disclosure">
        <summary>Foundry services</summary>
        <div class="service-links">
          <button data-action="daily">${state.s.daily.date === state.calendar() ? 'Daily supply collected' : 'Collect daily supply'}</button>
          <button data-action="open" data-page="travel">Facility map</button>
          <button data-action="open" data-page="settings">Settings</button>
          <button data-action="open" data-page="achievements">Achievements</button>
          <button data-action="open" data-page="stats">Statistics</button>
          <button data-action="open" data-page="challenges" ${state.s.rebirths ? '' : 'disabled'}>Challenges</button>
        </div>
      </details>
    </div>`;
  };

  ui.collectionView = function archiveView() {
    return `<div class="archive-interface">
      ${intro('FOUNDRY ARCHIVE', 'Collection.', 'Discovered items stay visual and calm; unknown discoveries remain out of the way.',
        metric('SHARDS', `${state.s.collected.length}/50`) + metric('SECTORS', `${state.s.discovered.length}/10`))}
      <div class="archive-gallery">${originalCollectionView()}</div>
    </div>`;
  };

  ui.arcadeView = function arcadeDepartmentView() {
    return `<div class="arcade-interface">
      ${intro('ARCADE', 'Optional side challenges.', 'A lighter break from production with scores, tokens and foundry rewards.',
        metric('TOKENS', state.s.tokens) + metric('BEST RUNS', state.s.stats.wins))}
      <div class="arcade-cabinets">${originalArcadeView()}</div>
    </div>`;
  };

  ui.researchView = function researchDepartmentView() {
    if (!state.s.areas.includes('research')) {
      return `<div class="research-interface">
        ${intro('RESEARCH CENTRE', 'New technology.', 'The building is ready, but its network still needs an Exploration unlock.')}
        <div class="department-lock"><span>NETWORK OFFLINE</span><h3>Open the Research Wing</h3><p>Continue progressing through Exploration in the Upgrade Lab.</p></div>
      </div>`;
    }
    return `<div class="research-interface">
      ${intro('RESEARCH CENTRE', 'New technology.', 'Research unlocks durable improvements and runs on its own timer.',
        metric('STATUS', state.s.researchJob ? 'RUNNING' : 'IDLE') + metric('PROJECT LEVELS', state.s.research.reduce((a,b)=>a+b,0)))}
      <div class="research-projects">${originalResearchView()}</div>
    </div>`;
  };

  ui.rebirthView = function quantumDepartmentView() {
    return `<div class="quantum-interface">
      ${intro('QUANTUM FACILITY', 'Rebirth & ascension.', 'Review what will reset and what will stay before committing.',
        metric('FOUNDRY VALUE', state.fmt(state.s.run)) + metric('RESTART REWARD', `+${state.fmt(state.rebirthGain)} cores`))}
      <div class="quantum-core-panel">${originalRebirthView()}</div>
    </div>`;
  };

  ui.workersView = function workersView() {
    const workers = [
      { id:'engineer', name:'Chief Engineer', role:'Foundry Operations', trait:'Precision Planner', assignment:'Origin', value:state.s.lifetime, goal:100000, objective:'Generate 100K lifetime energy' },
      { id:'scientist', name:'Dr. Lyra', role:'Research Scientist', trait:'Systems Thinker', assignment:'Research Centre', value:Object.keys(state.s.skills).length, goal:12, objective:'Unlock 12 skill nodes' },
      { id:'technician', name:'Technician Omi', role:'Machine Technician', trait:'Fast Hands', assignment:'Machine Hall', value:state.s.machines.reduce((a,b)=>a+b,0), goal:25, objective:'Own 25 machine levels' },
      { id:'explorer', name:'Explorer Vega', role:'Survey Specialist', trait:'Pathfinder', assignment:'Field Operations', value:state.s.discovered.length, goal:6, objective:'Discover 6 facility areas' }
    ];
    const rows = workers.map((w) => {
      const claimed = state.s.npcClaims.includes(w.id);
      const ready = w.value >= w.goal;
      return `<article class="worker-card ${ready && !claimed ? 'ready' : ''}">
        <div class="worker-avatar">${w.name.split(' ').map(n=>n[0]).join('').slice(0,2)}</div>
        <div class="worker-main"><span>${w.role}</span><h3>${w.name}</h3><p>${w.assignment} · ${w.trait}</p></div>
        <div class="worker-side">
          <strong>${state.fmt(Math.min(w.value,w.goal))} / ${state.fmt(w.goal)}</strong>
          <button data-action="npcclaim" data-id="${w.id}" ${claimed || !ready ? 'disabled' : ''}>${claimed ? 'Claimed' : ready ? 'Claim reward' : 'In progress'}</button>
        </div>
      </article>`;
    }).join('');
    return `<div class="workers-interface">
      ${intro('WORKER OFFICE', 'Crew & assignments.', 'See who is doing what, then act only when an assignment is ready.', metric('CREW', '4') + metric('READY', workers.filter(w => w.value >= w.goal && !state.s.npcClaims.includes(w.id)).length))}
      <div class="worker-roster">${rows}</div>
    </div>`;
  };

  ui.warehouseView = function warehouseView() {
    const s = state.s;
    const stocks = [
      ['ENERGY RESERVE', state.fmt(s.energy), 'Spendable energy'],
      ...(state.level >= 10 ? [['STARDUST', state.fmt(s.dust), 'Specialist currency']] : []),
      ...(s.tokens > 0 || state.level >= 15 ? [['ARCADE TOKENS', state.fmt(s.tokens), 'Arcade exchange']] : []),
      ...(isUnlocked(departmentById.get('quantum')) ? [['QUANTUM CORES', state.fmt(s.cores), 'Prestige resource']] : []),
      ['ENERGY SHARDS', `${s.collected.length} / 50`, 'Recovered discoveries']
    ];
    return `<div class="warehouse-interface">
      ${intro('WAREHOUSE', 'Storage & reserves.', 'A scan-friendly inventory. Advanced currencies appear only after you discover them.',
        metric('OFFLINE RESERVE', `${state.offlineHours}h`) + metric('STORAGE', `LV ${s.facility[3]}`))}
      <div class="warehouse-grid">${stocks.map(([name,value,sub])=>`<article class="stock-card"><span>${name}</span><strong>${value}</strong><small>${sub}</small></article>`).join('')}</div>
    </div>`;
  };

  ui.treasuryView = function treasuryView() {
    const s = state.s;
    return `<div class="treasury-interface">
      ${intro('TREASURY', 'Financial overview.', 'Only the numbers that matter for your next decision.',
        metric('NET PRODUCTION', `+${state.fmt(state.cps)}/s`) + metric('CURRENT ENERGY', state.fmt(s.energy)))}
      <div class="finance-focus">
        <span>NET PRODUCTION</span>
        <strong>+${state.fmt(state.cps)}<small>/s</small></strong>
        <p>Passive production after current upgrades and boosts.</p>
      </div>
      <div class="simple-ledger">
        <div><span>Run energy</span><strong>${state.fmt(s.run)}</strong></div>
        <div><span>Lifetime energy</span><strong>${state.fmt(s.lifetime)}</strong></div>
        ${s.dust ? `<div><span>Stardust</span><strong>${state.fmt(s.dust)}</strong></div>` : ''}
        ${s.cores ? `<div><span>Quantum cores</span><strong>${state.fmt(s.cores)}</strong></div>` : ''}
      </div>
    </div>`;
  };

  ui.marketView = function marketView() {
    const unlocked = state.s.lifetime >= 1000;
    return `<div class="market-interface">
      ${intro('MARKETPLACE', 'Specialist exchange.', 'Buy specialist equipment without turning the market into another dashboard.',
        metric('STARDUST', state.fmt(state.s.dust)) + metric('DRONES', state.s.droneCopies.reduce((a,b)=>a+b,0)))}
      ${unlocked
        ? `<div class="market-listings">${originalDronesView()}</div>`
        : `<div class="department-lock"><span>MARKET LICENSE PENDING</span><h3>Reach 1K lifetime energy</h3><p>The exchange opens once the foundry has produced 1,000 lifetime energy.</p></div>`}
    </div>`;
  };

  ui.settingsView = function settingsDepartmentView() {
    return originalSettingsView()
      .replace('Use Origin to return to the core and All plots for an overview.', 'Press Home to return to the Energy Core. Buildings are your navigation.')
      .replace('Keyboard shortcuts: T opens Skills, M opens the Map, Tab opens the menu. Arrow keys pan the map. Home focuses Origin.', 'Keyboard: Arrow keys pan, Home focuses Origin, Esc closes a department, and Alt reveals extra building status.');
  };

  // --- New, spacious main skill tree ---
  const categories = [
    { id:'auto', label:'PRODUCTION', description:'Produce more resources.', icon:'⚙' },
    { id:'power', label:'SPEED', description:'Increase active output and reactor throughput.', icon:'ϟ' },
    { id:'offline', label:'EFFICIENCY', description:'Improve storage, automation and away-time gains.', icon:'◫' },
    { id:'luck', label:'FORTUNE', description:'Rare signals and critical gains.', icon:'◇', level:12 },
    { id:'explore', label:'EXPANSION', description:'Open new sectors and advanced systems.', icon:'⌁', level:12 },
    { id:'rebirth', label:'REBIRTH', description:'Make future foundries stronger.', icon:'⟳', level:18 }
  ];

  function category() {
    return categories.find((c) => c.id === ui.branch) || categories[0];
  }

  function branchNodes(branch) {
    return nodes.filter((n) => n.tree === 'main' && n.branch === branch)
      .sort((a,b) => a.y - b.y || a.x - b.x);
  }

  function visibleBranchNodes(branch) {
    const all = branchNodes(branch);
    const count = Math.min(all.length, Math.max(4, 4 + Math.floor((state.level - 1) / 3)));
    return all.slice(0, count);
  }

  function treeDepths(list) {
    const inList = new Set(list.map((n) => n.id));
    const memo = new Map();
    const depth = (n) => {
      if (memo.has(n.id)) return memo.get(n.id);
      const req = n.requires.map((id) => nodeMap.get(id)).filter((r) => r && inList.has(r.id));
      const d = req.length ? 1 + Math.max(...req.map(depth)) : 0;
      memo.set(n.id, d);
      return d;
    };
    list.forEach(depth);
    return memo;
  }

  ui.treeView = function progressiveTreeView() {
    if (this.treeType !== 'main') return originalTreeView();

    if (!categories.some((c) => c.id === this.branch && (!c.level || state.level >= c.level))) {
      this.branch = 'auto';
    }
    const cat = category();
    const list = visibleBranchNodes(cat.id);
    if (!list.some((n) => n.id === this.selected)) this.selected = list[0]?.id || this.selected;
    const availableTabs = categories.filter((c) => !c.level || state.level >= c.level);

    return `<div class="simple-tree-layout">
      <div class="simple-tree-main">
        <div class="skill-category-tabs">
          ${availableTabs.map((c) => `<button data-action="branch" data-id="${c.id}" class="${this.branch===c.id?'selected':''}"><b>${c.label}</b><small>${c.description}</small></button>`).join('')}
        </div>
        <div class="simple-branch-header">
          <div><span>${cat.label} PATH</span><h2>${cat.description}</h2></div>
          <div class="skill-points-pill"><small>SKILL POINTS</small><strong>${state.s.points}</strong></div>
        </div>
        <div class="simple-tree-viewport" id="treeViewport">
          <div class="simple-tree-inner" id="treeInner">${this.treeGraph()}</div>
        </div>
        ${branchNodes(cat.id).length > list.length ? `<div class="future-upgrades-note">More ${cat.label.toLowerCase()} upgrades unlock as your Foundry Level increases.</div>` : ''}
      </div>
      <aside class="selected-upgrade-panel" id="inspector">${this.inspector()}</aside>
    </div>`;
  };

  ui.treeGraph = function simpleTreeGraph() {
    if (this.treeType !== 'main') return originalTreeGraph();
    const cat = category();
    const list = visibleBranchNodes(cat.id);
    const depths = treeDepths(list);
    const tiers = new Map();
    for (const n of list) {
      const d = depths.get(n.id) || 0;
      if (!tiers.has(d)) tiers.set(d, []);
      tiers.get(d).push(n);
    }

    const maxDepth = Math.max(0, ...tiers.keys());
    const width = 720;
    const nodeW = 190;
    const nodeH = 86;
    const tierGap = 142;
    const positions = new Map();

    for (let depth = 0; depth <= maxDepth; depth++) {
      const tier = tiers.get(depth) || [];
      const total = tier.length * nodeW + Math.max(0, tier.length - 1) * 70;
      const start = (width - total) / 2;
      tier.forEach((n, i) => positions.set(n.id, {
        x:start + i * (nodeW + 70),
        y:42 + depth * tierGap
      }));
    }

    const height = 42 + (maxDepth + 1) * tierGap + 45;
    this.treeBox = { width, height };
    const visibleIds = new Set(list.map((n) => n.id));
    let paths = '';
    for (const n of list) {
      const to = positions.get(n.id);
      for (const reqId of n.requires) {
        if (!visibleIds.has(reqId)) continue;
        const from = positions.get(reqId);
        if (!from || !to) continue;
        const x1 = from.x + nodeW / 2;
        const y1 = from.y + nodeH;
        const x2 = to.x + nodeW / 2;
        const y2 = to.y;
        const mid = (y1 + y2) / 2;
        paths += `<path class="simple-tree-path ${state.s.skills[reqId] ? 'on' : ''}" d="M${x1},${y1} L${x1},${mid} L${x2},${mid} L${x2},${y2}"/>`;
      }
    }

    return `<svg class="simple-tree-lines" width="${width}" height="${height}">${paths}</svg>
      ${list.map((n) => {
        const pos = positions.get(n.id);
        const level = state.s.skills[n.id] || 0;
        const affordable = state.available(n) && state.s.points >= state.nodeCost(n);
        const maxed = level >= n.max;
        const stateClass = maxed ? 'maxed' : level ? 'owned' : affordable ? 'affordable' : state.available(n) ? 'available' : 'locked';
        return `<button data-action="node" data-id="${n.id}" class="large-skill-node ${stateClass} ${n.id===this.selected?'chosen':''}" style="left:${pos.x}px;top:${pos.y}px">
          <span class="skill-node-icon">${cat.icon}</span>
          <span class="skill-node-copy"><b>${n.name}</b><small>LV ${level}/${n.max>=1e6?'∞':n.max}</small></span>
        </button>`;
      }).join('')}`;
  };

  ui.inspector = function simpleInspector() {
    if (this.treeType !== 'main') return originalInspector();
    let n = nodeMap.get(this.selected);
    const visible = visibleBranchNodes(category().id);
    if (!n || n.tree !== 'main' || n.branch !== category().id || !visible.includes(n)) {
      n = visible[0];
      if (n) this.selected = n.id;
    }
    if (!n) return '<div class="tree-empty"><h3>No upgrades available yet.</h3></div>';

    const s = state.s;
    const level = s.skills[n.id] || 0;
    const cost = state.nodeCost(n);
    const available = state.available(n);
    const maxed = level >= n.max;
    const nextText = n.desc || 'Improves your foundry.';
    const reqs = n.requires.map((id) => nodeMap.get(id)).filter(Boolean);

    return `<div class="selected-upgrade-kicker">${category().label} UPGRADE</div>
      <h2>${n.name}</h2>
      <p class="selected-upgrade-desc">${nextText}</p>
      <div class="upgrade-level-change"><span>CURRENT</span><strong>Level ${level}</strong><i>→</i><span>NEXT</span><strong>${maxed ? 'MAX' : `Level ${level + 1}`}</strong></div>
      ${reqs.length ? `<div class="simple-requirements"><span>PREREQUISITE</span>${reqs.map((r) => `<b class="${s.skills[r.id]?'met':''}">${s.skills[r.id]?'✓':'○'} ${r.name}</b>`).join('')}</div>` : ''}
      <div class="upgrade-cost"><span>COST</span><strong>${maxed ? '—' : `${cost} Skill Point${cost===1?'':'s'}`}</strong><small>${s.points} available</small></div>
      <button class="primary purchase-upgrade" data-action="skillbuy" data-id="${n.id}" ${maxed || !available || s.points < cost ? 'disabled' : ''}>${maxed ? 'MAXED' : !available ? 'PREREQUISITE NEEDED' : 'PURCHASE UPGRADE'}</button>`;
  };

  // Simple tree is designed to fit, so dragging/zoom are intentionally unnecessary.
  const originalBindTree = ui.bindTree.bind(ui);
  ui.bindTree = function redesignedBindTree() {
    if (this.treeType !== 'main') return originalBindTree();
  };

  const originalRender = ui.render.bind(ui);
  const titles = {
    tree:['UPGRADE LAB','Upgrades'],
    control:['MACHINE HALL','Production'],
    missions:['MISSION CONTROL','Objectives'],
    collection:['FOUNDRY ARCHIVE','Collection'],
    arcade:['ARCADE','Minigames'],
    research:['RESEARCH CENTRE','Technology'],
    workers:['WORKER OFFICE','Crew'],
    warehouse:['WAREHOUSE','Storage'],
    market:['MARKETPLACE','Trading'],
    treasury:['TREASURY','Finances'],
    rebirth:['QUANTUM FACILITY','Rebirth'],
    settings:['MISSION CONTROL','Settings'],
    achievements:['MISSION CONTROL','Achievements'],
    challenges:['MISSION CONTROL','Challenges'],
    stats:['MISSION CONTROL','Statistics'],
    drones:['MARKETPLACE','Companion drones'],
    travel:['MISSION CONTROL','Facility map']
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

  const secondaryDepartment = new Map([
    ['travel', departmentById.get('mission')],
    ['settings', departmentById.get('mission')],
    ['achievements', departmentById.get('mission')],
    ['challenges', departmentById.get('mission')],
    ['stats', departmentById.get('mission')],
    ['drones', departmentById.get('market')]
  ]);

  const originalOpen = ui.open.bind(ui);
  ui.open = function redesignedOpen(page = 'missions') {
    const d = departmentByPage.get(page) || secondaryDepartment.get(page);
    if (d && !isUnlocked(d)) return;

    const shouldFocus = d && !this._suppressDepartmentFocus;
    this._suppressDepartmentFocus = false;

    if (!this.opened && shouldFocus) {
      this._worldReturn = { x:world.goal.x, z:world.goal.z, size:world.goalSize };
    }
    if (shouldFocus) {
      this._activeDepartment = d;
      world.goal.set(d.x, 0, d.z);
      world.goalSize = Math.max(19, Math.min(24, 21 / Math.max(.8, innerWidth / innerHeight)));
    }

    if (page === 'tree' && this.treeType === 'main') {
      if (!categories.some((c) => c.id === this.branch)) this.branch = 'auto';
      if (this.branch === 'cross') this.branch = 'auto';
    }

    document.body.classList.add('building-ui-open');
    originalOpen(page);

    const tutorial = currentTutorial();
    if (page === 'missions' && tutorial?.step === 6) {
      state.s.settings.tutorial = false;
      state.save();
      renderTutorial();
    }
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
    if (record.department && isUnlocked(record.department)) {
      this._activeDepartment = record.department;
      state.emit('sound', record.department.id === 'quantum' ? 420 : 310);
      if (record.department.id === 'upgrade') {
        this.treeType = 'main';
        if (!categories.some((c) => c.id === this.branch && (!c.level || state.level >= c.level))) this.branch = 'auto';
      }
    }
    originalInteract(record);
  };

  const originalAction = ui.action.bind(ui);
  ui.action = async function redesignedAction(data) {
    if (data.action === 'node' && this.treeType === 'main') {
      this.selected = data.id;
      const inspector = $('inspector');
      if (inspector) inspector.innerHTML = this.inspector();
      document.querySelectorAll('.large-skill-node').forEach((button) => {
        button.classList.toggle('chosen', button.dataset.id === data.id);
      });
      return;
    }
    if (data.action === 'factoryinspect') {
      this.machineIndex = Number(data.i);
      this.showMachine();
      return;
    }
    if (data.action === 'startermachine') {
      const i = Number(data.i);
      if (i === 0 && !state.s.machines[0]) {
        state.s.machines[0] = 1;
        if (!state.s.skills['auto-0']) {
          state.s.skills['auto-0'] = 1;
          if (!state.s.firstSkills.includes('auto-0')) state.s.firstSkills.push('auto-0');
        }
        state.s.stats.purchases += 1;
        state.recompute();
        state.xp(8);
        state.emit('world');
        state.emit('machine', 0);
        state.notice('Energy collector online · production started');
        state.save();
        this.render();
      }
      return;
    }
    if (data.action === 'npcclaim' && this.page === 'workers') {
      state.npcClaim(data.id);
      this.render();
      return;
    }
    if (data.action === 'tutorialfocus') {
      const step = currentTutorial();
      const d = step?.target ? departmentById.get(step.target) : null;
      if (d) {
        world.goal.set(d.x, 0, d.z);
        world.goalSize = 24;
      }
      return;
    }
    if (data.action === 'qtree' || data.action === 'atree') this._suppressDepartmentFocus = true;
    return originalAction(data);
  };

  function currentTutorial() {
    const s = state.s;
    if (!s.settings.tutorial || s.rebirths > 0 || state.level > 4) return null;

    if (!s.machines[0]) {
      if (ui.opened && ui.page === 'control') {
        return { step:2, title:'START PRODUCTION', text:'Activate the Energy Collector. This is the only machine you need to learn right now.', target:null };
      }
      return { step:1, title:'GETTING STARTED', text:'Select the Machine Hall to begin production.', target:'factory' };
    }

    if (s.lifetime < 25) {
      return { step:3, title:'PRODUCTION ONLINE', text:'Your machine now produces energy automatically. Watch the counter rise.', target:null };
    }

    const learnedUpgrade = s.firstSkills.filter((id) => id !== 'auto-0').length > 0;
    if (!learnedUpgrade) {
      if (ui.opened && ui.page === 'tree') {
        return { step:5, title:'BUY AN UPGRADE', text:'Choose one clear production upgrade and purchase it.', target:null };
      }
      return { step:4, title:'IMPROVE PRODUCTION', text:'Visit the Upgrade Lab and spend a Skill Point.', target:'upgrade' };
    }

    if (ui.opened && ui.page === 'missions') return { step:6, title:'MISSION CONTROL', text:'Missions give you clear objectives and rewards.', target:null };
    return { step:6, title:'YOUR NEXT OBJECTIVE', text:'Select Mission Control to see what the foundry needs next.', target:'mission' };
  }

  let lastTutorialKey = '';
  function renderTutorial() {
    if (!tutorialPanel) return;
    const step = currentTutorial();
    const key = step ? `${step.step}:${step.title}:${step.target || ''}` : 'off';
    if (key === lastTutorialKey) return;
    lastTutorialKey = key;

    document.body.classList.toggle('tutorial-on', !!step);
    if (!step) {
      tutorialPanel.classList.add('hidden');
      return;
    }
    tutorialPanel.classList.remove('hidden');
    tutorialStepEl.textContent = `${step.step}/6`;
    tutorialTitleEl.textContent = step.title;
    tutorialTextEl.textContent = step.text;
    tutorialShowEl.classList.toggle('hidden', !step.target);
  }

  const originalPaint = ui.paint.bind(ui);
  ui.paint = function redesignedPaint() {
    originalPaint();

    const r = world.current;
    if (r?.department && isUnlocked(r.department)) $('interactSub').textContent = r.department.tooltip;

    const s = state.s;
    $('productionResource')?.classList.toggle('hidden', !s.machines[0]);
    $('dustResource')?.classList.toggle('hidden', state.level < 10);
    $('coresResource')?.classList.toggle('hidden', !isUnlocked(departmentById.get('quantum')));

    if (s.stats.clicks >= 5 && !state.fx.automation && !s.machines[0]) {
      $('objectiveLabel').textContent = 'BUILD YOUR FIRST LINE';
      $('objectiveText').textContent = 'Select the Machine Hall and start the Energy Collector.';
    } else if (state.fx.automation && !s.machines[0]) {
      $('objectiveLabel').textContent = 'START PRODUCTION';
      $('objectiveText').textContent = 'Select the Machine Hall and commission your first machine.';
    }

    renderTutorial();
    if (menu.dataset.page !== this.page) menu.dataset.page = this.page;
  };

  // Construction unlock events.
  const knownUnlocked = new Set(departments.filter(isUnlocked).map((d) => d.id));
  state.on((type) => {
    if (type !== 'level' && type !== 'world' && type !== 'area') return;
    for (const d of departments) {
      if (!knownUnlocked.has(d.id) && isUnlocked(d)) {
        knownUnlocked.add(d.id);
        d.constructStart = performance.now();
        ui.notice(`NEW FACILITY · ${d.name} is now available`);
        if (!ui.opened) {
          const old = { x:world.goal.x, z:world.goal.z, size:world.goalSize };
          world.goal.set(d.x, 0, d.z);
          world.goalSize = 25;
          setTimeout(() => {
            if (!ui.opened) {
              world.goal.set(old.x, 0, old.z);
              world.goalSize = old.size;
            }
          }, 2800);
        }
      }
    }
  });

  // Initial camera scale grows with the foundry instead of showing the late-game footprint.
  if (!ui.opened) {
    const levelZoom = state.level < 3 ? 27 : state.level < 7 ? 31 : state.level < 12 ? 37 : state.level < 18 ? 43 : 49;
    world.goalSize = levelZoom;
    world.size = Math.min(world.size, levelZoom);
  }

  // Disable legacy global menu shortcuts. Tab remains available for normal keyboard focus.
  document.addEventListener('keydown', (event) => {
    if (event.code === 'AltLeft' || event.code === 'AltRight') document.body.classList.add('info-mode');
    if (/INPUT|TEXTAREA|SELECT/.test(event.target.tagName)) return;
    if (event.code === 'Tab' || event.code === 'KeyT' || event.code === 'KeyM') {
      event.stopImmediatePropagation();
      if (event.code !== 'Tab') event.preventDefault();
    }
  }, true);
  document.addEventListener('keyup', (event) => {
    if (event.code === 'AltLeft' || event.code === 'AltRight') document.body.classList.remove('info-mode');
  }, true);
  window.addEventListener('blur', () => document.body.classList.remove('info-mode'));

  updateDepartmentVisuals(.4);
  renderTutorial();
  ui.nav();
  if (ui.opened) ui.render();
}
