export function applyRedesign(nova) {
  if (!nova || window.__NOVA_LAND_REDESIGN_APPLIED__) return;
  window.__NOVA_LAND_REDESIGN_APPLIED__ = true;
  window.__NOVA_PROGRESSIVE_REDESIGN_APPLIED__ = true;
  window.__NOVA_REDESIGN_APPLIED__ = true;

  const { state, world, ui, activities } = nova;
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
  const pauseOverlay = $('pauseOverlay');
  const pauseBody = $('pauseBody');
  const pauseTitle = $('pauseTitle');

  document.body.classList.add('department-redesign', 'progressive-foundry', 'land-foundry');
  world.hoverRing.material.opacity = 0;

  const V5_SAVE_KEY = 'nova-foundry-land-v5';
  const LAND_SETTING_DEFAULTS = {
    confirmPurchases:true, notifications:true, autosaveIndicator:true,
    effects:'high', buildingAnimations:'on', zoomSensitivity:1, rotationSpeed:1,
    edgeScroll:false, smoothCamera:true, uiScale:1, buildingLabels:'always',
    tutorialSize:'normal', numberFormat:'compact'
  };
  try {
    const extra = JSON.parse(localStorage.getItem(V5_SAVE_KEY) || 'null');
    if (extra?.expansion && typeof extra.expansion === 'object') state.s.expansion = extra.expansion;
    if (extra?.settings && typeof extra.settings === 'object') Object.assign(state.s.settings, extra.settings);
  } catch {}
  for (const [key,value] of Object.entries(LAND_SETTING_DEFAULTS)) {
    if (state.s.settings[key] === undefined) state.s.settings[key] = value;
  }

  // Defensive migration for saves created by earlier builds that reached this code
  // without the v5 State validator.
  if (!state.s.expansion) {
    const upgradeKeys = {
      factory:['output','speed','reliability'],
      upgrade:['production','energy','infrastructure','expansion'],
      mission:['quality','slots','refresh'],
      warehouse:['racks','floor','sorting','cargo'],
      workers:['staff','training','management'],
      research:['speed','efficiency','quality'],
      market:['negotiation','bulk','intelligence'],
      archive:['catalog','preservation','discovery'],
      arcade:['cabinets','rewards','bonus'],
      treasury:['forecasting','reserves','efficiency'],
      quantum:['stability','yield','memory']
    };
    const upgrades = {};
    Object.entries(upgradeKeys).forEach(([id, keys]) => upgrades[id] = Object.fromEntries(keys.map(k => [k,0])));
    const owned=['factory'], constructed=['factory'], buildingLevels={factory:1};
    // Preserve progressed pre-v5 saves without exposing late systems to genuine new saves.
    const legacyProgress = state.level > 1 || state.s.rebirths > 0 ||
      (state.s.machines || []).some((value,index) => index > 0 && value > 0);
    if (legacyProgress) {
      const grants=[['upgrade',2],['mission',3],['warehouse',5],['workers',7],['research',9],['market',12],['archive',14],['arcade',16],['treasury',18],['quantum',20]];
      for (const [id,level] of grants) if (state.level >= level || (id==='quantum' && state.s.rebirths > 0)) {
        owned.push(id); constructed.push(id); buildingLevels[id]=1;
      }
    }
    state.s.expansion = { owned, constructed, buildingLevels, upgrades, jobs:{}, history:[] };
  }

  let ex = state.s.expansion;
  ex.owned ||= ['factory'];
  ex.constructed ||= ['factory'];
  ex.buildingLevels ||= {factory:1};
  ex.upgrades ||= {};
  ex.jobs ||= {};
  ex.history ||= [];
  if (!ex.owned.includes('factory')) ex.owned.unshift('factory');
  if (!ex.constructed.includes('factory')) ex.constructed.unshift('factory');
  ex.buildingLevels.factory ||= 1;

  const UPGRADE_KEYS = {
    factory:['output','speed','reliability'],
    upgrade:['production','energy','infrastructure','expansion'],
    mission:['quality','slots','refresh'],
    warehouse:['racks','floor','sorting','cargo'],
    workers:['staff','training','management'],
    research:['speed','efficiency','quality'],
    market:['negotiation','bulk','intelligence'],
    archive:['catalog','preservation','discovery'],
    arcade:['cabinets','rewards','bonus'],
    treasury:['forecasting','reserves','efficiency'],
    quantum:['stability','yield','memory']
  };
  function normalizeExpansion() {
    ex = state.s.expansion ||= {
      owned:['factory'], constructed:['factory'], buildingLevels:{factory:1},
      upgrades:{}, jobs:{}, history:[]
    };
    const validIds=new Set(Object.keys(UPGRADE_KEYS));
    ex.owned = Array.isArray(ex.owned) ? [...new Set(ex.owned)].filter(id=>validIds.has(id)) : ['factory'];
    ex.constructed = Array.isArray(ex.constructed) ? [...new Set(ex.constructed)].filter(id=>validIds.has(id)&&ex.owned.includes(id)) : ['factory'];
    ex.buildingLevels = ex.buildingLevels && typeof ex.buildingLevels==='object' ? ex.buildingLevels : {factory:1};
    for (const id of Object.keys(ex.buildingLevels)) if (!validIds.has(id) || !ex.constructed.includes(id)) delete ex.buildingLevels[id];
    ex.upgrades = ex.upgrades && typeof ex.upgrades==='object' ? ex.upgrades : {};
    ex.jobs = ex.jobs && typeof ex.jobs==='object' ? ex.jobs : {};
    for (const id of Object.keys(ex.jobs)) if (!validIds.has(id) || !ex.owned.includes(id) || ex.constructed.includes(id)) delete ex.jobs[id];
    ex.history = Array.isArray(ex.history) ? ex.history.slice(-100) : [];
    if (!ex.owned.includes('factory')) ex.owned.unshift('factory');
    if (!ex.constructed.includes('factory')) ex.constructed.unshift('factory');
    ex.buildingLevels.factory ||= 1;
    for (const [id, keys] of Object.entries(UPGRADE_KEYS)) {
      ex.upgrades[id] ||= {};
      for (const key of keys) ex.upgrades[id][key] = Math.max(0, Number(ex.upgrades[id][key]) || 0);
    }
  }
  normalizeExpansion();

  function freshExpansion() {
    const upgrades={};
    for (const [id,keys] of Object.entries(UPGRADE_KEYS)) {
      upgrades[id]=Object.fromEntries(keys.map(key=>[key,0]));
    }
    return {owned:['factory'],constructed:['factory'],buildingLevels:{factory:1},upgrades,jobs:{},history:[]};
  }

  const PLOTS = [
    {
      id:'factory', page:'control', name:'MACHINE HALL', starterName:'MACHINE WORKSHOP',
      subtitle:'Production', tooltip:'Manage production', kind:'factory',
      x:0.0, z:6.6, accent:'#d79a53', ground:'#9fb67f', landCost:0, buildCost:0, level:1,
      starter:true, priority:0
    },
    {
      id:'upgrade', page:'tree', name:'UPGRADE LAB', subtitle:'Global engineering',
      tooltip:'Improve the whole foundry', kind:'upgrade', x:-13.4, z:0.2,
      accent:'#57b9b3', ground:'#95b398', landCost:75, buildCost:0, level:1,
      autoBuild:true, parent:'factory', priority:1
    },
    {
      id:'mission', page:'missions', name:'MISSION CONTROL', subtitle:'Objectives',
      tooltip:'Review contracts and objectives', kind:'mission', x:13.2, z:4.4,
      accent:'#d8814f', ground:'#a7b17d', landCost:350, buildCost:0, level:2,
      autoBuild:true, parent:'upgrade', requires:['upgrade'], priority:2
    },
    {
      id:'warehouse', page:'warehouse', name:'WAREHOUSE', subtitle:'Logistics',
      tooltip:'Manage storage and reserves', kind:'warehouse', x:-16.4, z:15.2,
      accent:'#89989c', ground:'#9fa58e', landCost:3500, buildCost:1400, level:4,
      parent:'mission', requires:['mission'], priority:3
    },
    {
      id:'workers', page:'workers', name:'WORKER OFFICE', subtitle:'Personnel',
      tooltip:'Manage staff and assignments', kind:'workers', x:16.0, z:15.0,
      accent:'#d8b75d', ground:'#aeb18b', landCost:3000, buildCost:1200, level:4,
      parent:'mission', requires:['mission'], priority:4
    },
    {
      id:'research', page:'research', name:'RESEARCH CENTRE', subtitle:'Technology',
      tooltip:'Run research projects', kind:'research', x:-17.2, z:-12.8,
      accent:'#668fc8', ground:'#8fab9c', landCost:10000, buildCost:4500, level:7,
      parent:'upgrade', anyOf:['warehouse','workers'], priority:5
    },
    {
      id:'market', page:'market', name:'MARKETPLACE', subtitle:'Trading',
      tooltip:'Trade resources and equipment', kind:'market', x:19.2, z:-11.8,
      accent:'#69a990', ground:'#99b08d', landCost:22000, buildCost:9000, level:9,
      parent:'factory', requires:['warehouse'], priority:6
    },
    {
      id:'archive', page:'collection', name:'FOUNDRY ARCHIVE', subtitle:'Discoveries',
      tooltip:'Browse recovered discoveries', kind:'archive', x:-24.0, z:3.0,
      accent:'#6ea77c', ground:'#9eae89', landCost:48000, buildCost:17000, level:12,
      parent:'warehouse', requires:['research'], priority:7
    },
    {
      id:'arcade', page:'arcade', name:'ARCADE', subtitle:'Side activities',
      tooltip:'Play foundry minigames', kind:'arcade', x:7.8, z:24.0,
      accent:'#a071c5', ground:'#a1a47f', landCost:55000, buildCost:18000, level:13,
      parent:'workers', requires:['workers'], priority:8
    },
    {
      id:'treasury', page:'treasury', name:'TREASURY', subtitle:'Advanced finances',
      tooltip:'Review foundry performance', kind:'treasury', x:25.0, z:4.0,
      accent:'#caa45b', ground:'#a8aa85', landCost:95000, buildCost:32000, level:16,
      parent:'market', requires:['market'], priority:9
    },
    {
      id:'quantum', page:'rebirth', name:'QUANTUM FACILITY', subtitle:'Prestige',
      tooltip:'Manage rebirth progression', kind:'quantum', x:0.0, z:-25.8,
      accent:'#9b73d0', ground:'#8f9a8d', landCost:250000, buildCost:125000, level:18,
      parent:'research', requires:['research'], hiddenName:true, quantum:true, priority:10
    }
  ];
  const plotById = new Map(PLOTS.map(d => [d.id,d]));
  const plotByPage = new Map(PLOTS.map(d => [d.page,d]));

  const isOwned = d => ex.owned.includes(d.id);
  const isConstructed = d => ex.constructed.includes(d.id);
  const buildingLevel = d => Math.max(1, Math.min(5, ex.buildingLevels[d.id] || 1));

  function displayName(d) {
    return d.id === 'factory' && buildingLevel(d) === 1 ? d.starterName : d.name;
  }

  function requirements(d) {
    const req = [];
    if (d.starter) return req;
    if (d.level) req.push({ text:`Foundry Level ${d.level}`, met:state.level >= d.level });
    for (const id of d.requires || []) {
      const other = plotById.get(id);
      req.push({ text:`Construct ${other?.name || id}`, met:ex.constructed.includes(id) });
    }
    if (d.anyOf?.length) {
      req.push({
        text:`Construct ${d.anyOf.map(id => plotById.get(id)?.name || id).join(' or ')}`,
        met:d.anyOf.some(id => ex.constructed.includes(id))
      });
    }
    if (d.quantum) {
      req.push({
        text:'Reach 200K run Energy or complete one rebirth',
        met:state.s.run >= 200000 || state.s.rebirths > 0
      });
    }
    return req;
  }

  function requirementsMet(d) {
    return requirements(d).every(r => r.met);
  }

  function revealEligible(d) {
    if (isOwned(d) || d.starter) return false;
    if (d.id === 'upgrade') return true;
    if (d.id === 'mission') return ex.constructed.includes('upgrade');
    if (d.id === 'warehouse' || d.id === 'workers') return ex.constructed.includes('mission');
    if (d.id === 'research') return d.anyOf.some(id => ex.constructed.includes(id));
    if (d.id === 'market') return ex.constructed.includes('warehouse');
    if (d.id === 'archive') return ex.constructed.includes('research');
    if (d.id === 'arcade') return ex.constructed.includes('workers');
    if (d.id === 'treasury') return ex.constructed.includes('market');
    if (d.id === 'quantum') return ex.constructed.includes('research') && (state.level >= 15 || state.s.rebirths > 0);
    return false;
  }

  function frontierPlots() {
    const candidates = PLOTS.filter(revealEligible).sort((a,b) => {
      const am = requirementsMet(a) ? 0 : 1;
      const bm = requirementsMet(b) ? 0 : 1;
      return am - bm || a.priority - b.priority;
    });
    return new Set(candidates.slice(0,3).map(d => d.id));
  }

  function upgradeValue(id,key) {
    return Math.max(0, Number(ex.upgrades[id]?.[key]) || 0);
  }

  function landDiscount() {
    if (!ex.constructed.includes('upgrade')) return 0;
    return Math.min(.4, upgradeValue('upgrade','expansion') * .06);
  }

  function constructionDiscount() {
    if (!ex.constructed.includes('upgrade')) return 0;
    return Math.min(.4, upgradeValue('upgrade','infrastructure') * .06);
  }

  function landCost(d) {
    return Math.max(0, Math.round(d.landCost * (1 - landDiscount())));
  }

  function constructionCost(d) {
    return Math.max(0, Math.round(d.buildCost * (1 - constructionDiscount())));
  }

  // Reapply facility-specific bonuses every time the core state recomputes.
  const originalRecompute = state.recompute.bind(state);
  state.recompute = function landAwareRecompute() {
    originalRecompute();
    const built = id => ex.constructed.includes(id);
    if (built('factory')) {
      this.fx.passive = (this.fx.passive || 0) + upgradeValue('factory','output') * .08 + upgradeValue('factory','speed') * .06;
      this.fx.global = (this.fx.global || 0) + upgradeValue('factory','reliability') * .03;
    }
    if (built('upgrade')) {
      this.fx.global = (this.fx.global || 0) + upgradeValue('upgrade','production') * .05;
      this.fx.click = (this.fx.click || 0) + upgradeValue('upgrade','energy') * .08;
      this.fx.passive = (this.fx.passive || 0) + upgradeValue('upgrade','energy') * .04;
    }
    if (built('warehouse')) {
      this.fx.hours = (this.fx.hours || 0) + upgradeValue('warehouse','racks') * 2 + upgradeValue('warehouse','floor') * 3;
      this.fx.offline = Math.min(1, (this.fx.offline || 0) + upgradeValue('warehouse','sorting') * .08);
      this.fx.passive = (this.fx.passive || 0) + upgradeValue('warehouse','cargo') * .02;
    }
    if (built('workers')) {
      this.fx.autoClicks = (this.fx.autoClicks || 0) + upgradeValue('workers','staff') * .5;
      this.fx.xp = (this.fx.xp || 0) + upgradeValue('workers','training') * .05;
      this.fx.passive = (this.fx.passive || 0) + upgradeValue('workers','management') * .04;
    }
    if (built('research')) this.fx.global = (this.fx.global || 0) + upgradeValue('research','quality') * .05;
    if (built('archive')) {
      this.fx.global = (this.fx.global || 0) + upgradeValue('archive','preservation') * .01;
      this.fx.xp = (this.fx.xp || 0) + upgradeValue('archive','catalog') * .02;
    }
    if (built('treasury')) {
      this.fx.global = (this.fx.global || 0) + upgradeValue('treasury','efficiency') * .025 + upgradeValue('treasury','forecasting') * .01;
      this.fx.hours = (this.fx.hours || 0) + upgradeValue('treasury','reserves');
    }
    if (built('quantum')) {
      this.fx.prestige = (this.fx.prestige || 0) + upgradeValue('quantum','yield') * .08 + upgradeValue('quantum','stability') * .03;
      this.fx.global = (this.fx.global || 0) + upgradeValue('quantum','memory') * .02;
    }
  };

  // Research upgrades affect actual project cost and duration.
  const originalStartResearch = state.startResearch.bind(state);
  state.startResearch = function landAwareResearch(i) {
    if (!ex.constructed.includes('research')) return;
    const before = this.s.energy;
    const previousJob = this.s.researchJob;
    originalStartResearch(i);
    if (!previousJob && this.s.researchJob) {
      const spent = Math.max(0, before - this.s.energy);
      const efficiency = upgradeValue('research','efficiency');
      this.s.energy += spent * Math.min(.35, efficiency * .06);
      const speed = 1 + upgradeValue('research','speed') * .12;
      this.s.researchJob.end = Date.now() + (this.s.researchJob.end - Date.now()) / speed;
      this.save();
    }
  };

  const originalClaimMission = state.claimMission.bind(state);
  state.claimMission = function landAwareMissionClaim(id) {
    if (!ex.constructed.includes('mission')) return;
    const before = this.s.quests.claims.length;
    const dustBefore = this.s.dust;
    originalClaimMission(id);
    if (this.s.quests.claims.length > before) {
      const quality = upgradeValue('mission','quality');
      const refresh = upgradeValue('mission','refresh');
      const earnedDust = Math.max(0, this.s.dust - dustBefore);
      if (quality) this.s.dust += Math.floor(earnedDust * quality * .12);
      if (refresh) this.xp(refresh * 8);
      this.save();
    }
  };

  const originalCollect = state.collect.bind(state);
  state.collect = function landAwareCollect(id) {
    const before = this.s.collected.length;
    originalCollect(id);
    if (this.s.collected.length > before && ex.constructed.includes('archive')) {
      const bonus = upgradeValue('archive','discovery') + Math.floor(upgradeValue('archive','catalog') / 2);
      this.s.dust += bonus;
      this.save();
    }
  };

  if (activities?.finish) {
    const originalFinish = activities.finish.bind(activities);
    activities.finish = function landAwareFinish(score, message) {
      const before = state.s.tokens;
      originalFinish(score, message);
      if (ex.constructed.includes('arcade')) {
        const earned = Math.max(0, state.s.tokens - before);
        const multiplier = upgradeValue('arcade','rewards') * .1 + upgradeValue('arcade','cabinets') * .03;
        const bonus = Math.floor(earned * multiplier);
        if (bonus > 0) {
          state.s.tokens += bonus;
          state.notice(`Arcade reward upgrade · +${bonus} tokens`);
        }
        const bonusXp = upgradeValue('arcade','bonus') * 4;
        if (bonusXp > 0) state.xp(bonusXp);
        if (bonus > 0 || bonusXp > 0) state.save();
      }
    };
  }

  // The quantum yield upgrade is applied to the actual prestige reward.
  const stateProto = Object.getPrototypeOf(state);
  const rebirthDescriptor = Object.getOwnPropertyDescriptor(stateProto,'rebirthGain');
  if (rebirthDescriptor?.get) {
    Object.defineProperty(state,'rebirthGain',{
      configurable:true,
      get() {
        const base = rebirthDescriptor.get.call(state);
        if (!ex.constructed.includes('quantum')) return base;
        return Math.floor(base * (1 + upgradeValue('quantum','yield') * .08));
      }
    });
  }

  const originalNotice = state.notice.bind(state);
  state.notice = function v5Notice(message) {
    if (typeof message === 'string') message = message.replace(/Skill Points?/g, match => match.endsWith('s') ? 'Engineering Points' : 'Engineering Point');
    return originalNotice(message);
  };

  const originalFmt = state.fmt.bind(state);
  state.fmt = function v5Format(n) {
    if (this.s.settings.numberFormat === 'full' && Number.isFinite(n) && n < 1e12) {
      if (n < 10) return Number(n.toFixed(1)).toLocaleString('en');
      return Math.floor(n).toLocaleString('en');
    }
    return originalFmt(n);
  };

  // Strip the old facility geometry. Preserve and relocate the Energy Core.
  try {
    world.scene.attach(world.core);
    world.core.position.set(0,0,-1.5);
  } catch {}
  world.core?.traverse?.(child => { if (child.isSprite) child.visible = false; });
  Object.values(world.plotGroups || {}).forEach(g => { g.visible = false; });
  (world.machineGroups || []).forEach(g => { g.visible = false; });
  (world.npcs || []).forEach(g => { g.visible = false; });
  (world.shards || []).forEach(s => { s.visible = false; });

  // Hide legacy between-sector roads while retaining the global ground and arenas.
  for (const child of world.scene.children || []) {
    if (!child?.isMesh || child === world.core) continue;
    if (Math.abs(child.position?.y + .03) < .03 &&
        (Math.abs(child.scale?.x - 6) < .05 || Math.abs(child.scale?.z - 6) < .05 ||
         Math.abs(child.scale?.x - 2.5) < .05 || Math.abs(child.scale?.z - 2.5) < .05) &&
        Math.hypot(child.position.x || 0, child.position.z || 0) > 9) {
      child.visible = false;
    }
  }

  const originalSync = world.sync.bind(world);
  world.sync = function redesignedSync() {
    originalSync();
    grantMachineAreas();
    Object.values(world.plotGroups || {}).forEach(g => { g.visible = false; });
    (world.machineGroups || []).forEach(g => { g.visible = false; });
    (world.npcs || []).forEach(g => { g.visible = false; });
    (world.shards || []).forEach(s => {
      s.visible = ex.constructed.includes('archive') && !state.s.collected.includes(s.userData.shard);
    });
  };

  const Group = world.core.constructor;
  const infrastructureRoot = new Group();
  world.scene.add(infrastructureRoot);

  function box(g,x,y,z,w,h,d,color,glow=false) {
    return world.box(g,x,y,z,w,h,d,color,glow);
  }
  function cyl(g,x,y,z,r,h,color) {
    return world.cylinder(g,x,y,z,r,h,color);
  }

  // Starter district and a clean pedestal around the Core.
  const coreDistrict = new Group();
  infrastructureRoot.add(coreDistrict);
  box(coreDistrict,0,-.10,1.6,11.4,.10,12.8,'#9db57f');
  box(coreDistrict,0,-.02,-1.5,5.4,.08,5.4,'#d9c995');
  for (const [x,z] of [[-5.1,-3.9],[5.2,-4.2]]) world.tree(coreDistrict,x,z,.9,'#5d8955');
  box(coreDistrict,0,-.01,2.1,1.65,.06,7.0,'#d5bb84');

  function pathBetween(d) {
    if (d.starter) return null;
    const parent = plotById.get(d.parent) || plotById.get('factory');
    const a = parent?.starter ? {x:0,z:1.9} : {x:parent.x,z:parent.z};
    const b = {x:d.x,z:d.z};
    const dx = b.x-a.x, dz=b.z-a.z, len=Math.hypot(dx,dz);
    const g = new Group();
    infrastructureRoot.add(g);
    const road = box(g,(a.x+b.x)/2,-.018,(a.z+b.z)/2,1.5,.07,len,'#d3b77e');
    road.rotation.y = Math.atan2(dx,dz);
    const conduit = box(g,(a.x+b.x)/2,.055,(a.z+b.z)/2,.12,.05,len,'#6f9a82',true);
    conduit.rotation.y = road.rotation.y;
    g.visible = false;
    return g;
  }

  function plotBoundary(g,w,d,color) {
    const y=.08, t=.07;
    box(g,0,y,-d/2,w,t,t,color);
    box(g,0,y,d/2,w,t,t,color);
    box(g,-w/2,y,0,t,t,d,color);
    box(g,w/2,y,0,t,t,d,color);
  }

  function makePlot(d) {
    const g = new Group();
    g.position.set(d.x,0,d.z);
    infrastructureRoot.add(g);

    const natural = new Group();
    const owned = new Group();
    const site = new Group();
    g.add(natural,owned,site);

    box(natural,0,-.10,0,6.7,.10,5.5,'#a9c385');
    plotBoundary(natural,6.35,5.15,'#8f9c72');
    for (const [x,z,s] of [[-2.55,-1.85,.65],[2.55,-1.6,.58],[-2.25,1.75,.48]]) {
      world.tree(natural,x,z,s,'#5f8b54');
    }
    for (const [x,z] of [[-3.05,-2.25],[3.05,-2.25],[-3.05,2.25],[3.05,2.25]]) {
      box(natural,x,.34,z,.10,.68,.10,'#a1845a');
    }
    box(natural,0,.30,2.42,2.15,.52,.12,'#77745f');

    box(owned,0,-.09,0,6.7,.12,5.5,d.ground);
    plotBoundary(owned,6.35,5.15,'#70806d');
    box(owned,0,-.01,2.2,1.45,.06,1.2,'#d4bb82');
    box(owned,0,.005,0,4.9,.04,3.9,'#9fa38c');

    box(site,0,.035,0,4.8,.08,3.8,'#b9b49d');
    for (const [x,z] of [[-2.05,-1.55],[2.05,-1.55],[-2.05,1.55],[2.05,1.55]]) {
      box(site,x,.55,z,.12,1.1,.12,'#987a55');
    }
    box(site,0,.24,1.75,2.1,.42,.12,'#696d60');

    const record = world.bind(g,'landplot',d.id,'Expansion plot');
    record.plot = d;
    d.plotGroup = g;
    d.plotNatural = natural;
    d.plotOwned = owned;
    d.plotSite = site;
    d.plotRecord = record;
    d.pathGroup = pathBetween(d);
    return g;
  }

  function shell(g,d,w,depth,h=2.25,color='#465149') {
    box(g,0,.09,0,w+.65,.16,depth+.65,'#657166');
    box(g,0,1.18,0,w,h,depth,color);
    box(g,0,2.34,0,w+.18,.16,depth+.18,'#59655c');
    const front = depth/2+.08;
    box(g,0,.72,front+.03,1.05,1.20,.10,'#59635d');
    for (const x of [-w*.28,w*.28]) box(g,x,1.38,front+.055,.74,.54,.06,'#7c9a8e',true);
    box(g,0,.32,front+.32,w*.72,.10,.48,d.accent);
  }

  function detailGroup(parent) {
    const g=new Group(); parent.add(g); return g;
  }

  function buildModel(d) {
    const g = new Group();
    g.position.set(d.x,0,d.z);
    infrastructureRoot.add(g);
    const tiers=[detailGroup(g),detailGroup(g),detailGroup(g),detailGroup(g)];

    if (d.kind==='factory') {
      shell(g,d,5.5,3.8,2.2,'#4a5148');
      box(g,0,.43,2.30,3.25,.30,.68,'#68726a');
      for(let i=-3;i<=3;i++) box(g,i*.42,.59,2.30,.08,.07,.58,'#343b36');
      cyl(g,-1.55,2.82,-.75,.24,.78,'#747b70');
      box(g,-1.55,3.23,-.75,.58,.10,.58,d.accent);
      box(tiers[0],1.6,2.66,-.72,.70,.46,.80,'#5f675e');
      cyl(tiers[1],1.55,2.92,-.75,.24,.88,'#70776d');
      box(tiers[1],1.55,3.39,-.75,.60,.10,.60,d.accent);
      box(tiers[2],-2.25,1.00,.15,.72,1.45,1.75,'#555e56');
      box(tiers[2],-2.25,1.78,.15,.78,.10,1.82,d.accent);
      box(tiers[3],2.75,.32,.95,1.15,.48,1.5,'#666e65');
    } else if (d.kind==='upgrade') {
      shell(g,d,4.3,3.3,2.15,'#43514d');
      cyl(g,-1.05,2.75,-.15,.54,.38,'#63706b');
      world.sphere(g,-1.05,3.10,-.15,.35,d.accent,true);
      world.ring(g,-1.05,3.10,-.15,.68,d.accent,.28);
      box(g,1.30,2.64,-.70,.62,.45,.78,'#54625c');
      box(tiers[0],1.3,3.03,-.70,.52,.16,.52,d.accent,true);
      world.ring(tiers[1],-1.05,3.10,-.15,.90,d.accent,1.08);
      box(tiers[2],1.8,.74,.6,.42,1.05,.42,'#5d6760');
      box(tiers[3],0,2.65,1.0,2.1,.20,.34,'#4b6660');
    } else if (d.kind==='mission') {
      shell(g,d,4.1,3.2,2.05,'#4d4e45');
      cyl(g,0,2.78,-.25,.09,1.0,'#70786f');
      const dish=world.ring(g,0,3.28,-.25,.62,d.accent,.78); dish.rotation.z=.35;
      world.sphere(g,0,3.27,-.25,.12,d.accent,true);
      box(g,0,.48,1.88,2.0,.30,.48,'#75533d');
      box(tiers[0],-1.35,2.66,-.7,.50,.34,.50,d.accent);
      box(tiers[1],1.4,2.70,-.6,.56,.40,.56,'#5e655c');
      world.ring(tiers[2],1.4,3.05,-.6,.38,d.accent,.45);
      box(tiers[3],0,2.72,.8,2.5,.18,.48,'#5f5041');
    } else if (d.kind==='warehouse') {
      shell(g,d,6.0,3.85,2.15,'#50554f');
      const front=2.0;
      for(const x of [-1.6,0,1.6]) {
        box(g,x,1.0,front,.98,1.48,.10,'#737b75');
        for(let j=-2;j<=2;j++) box(g,x+j*.19,1.0,front+.07,.03,1.36,.02,'#3d423f');
      }
      box(tiers[0],-2.1,2.63,-.75,.92,.36,1.15,'#69716b');
      box(tiers[1],2.15,.36,2.20,1.18,.42,1.4,'#686e66');
      box(tiers[2],2.1,2.65,-.8,1.0,.42,1.2,'#59645d');
      box(tiers[3],0,2.66,0,2.8,.26,1.4,'#5b6460');
    } else if (d.kind==='workers') {
      shell(g,d,4.4,3.25,2.15,'#55544a');
      box(g,0,2.62,.55,2.5,.34,1.10,'#656359');
      box(g,0,.95,1.95,2.4,.12,.62,d.accent);
      box(tiers[0],-1.65,.45,2.25,.85,.12,1.35,'#7d765f');
      box(tiers[1],1.65,.45,2.25,.85,.12,1.35,'#7d765f');
      box(tiers[2],0,2.95,.15,1.4,.16,.72,d.accent,true);
      box(tiers[3],0,.16,-2.1,3.2,.08,.55,'#6c6f61');
    } else if (d.kind==='research') {
      shell(g,d,4.7,3.55,2.2,'#45515a');
      cyl(g,0,2.72,0,.64,.48,'#647179');
      world.sphere(g,0,3.05,0,.28,d.accent,true);
      world.ring(g,0,3.05,0,.76,d.accent,.18);
      world.ring(tiers[0],0,3.05,0,.94,d.accent,1.04);
      box(tiers[1],-1.75,2.72,-.5,.58,.38,.68,'#566773');
      box(tiers[2],1.75,2.72,-.5,.58,.38,.68,'#566773');
      cyl(tiers[3],0,3.48,0,.06,.62,'#7a8586');
    } else if (d.kind==='market') {
      shell(g,d,5.0,3.4,2.0,'#46564d');
      box(g,0,2.50,1.18,4.65,.18,1.0,'#4f715f');
      for(const x of [-1.55,0,1.55]) box(g,x,.48,2.05,.82,.68,.52,'#69736b');
      box(tiers[0],-2.35,.34,1.35,.85,.42,1.0,'#656c64');
      box(tiers[1],2.35,.34,1.35,.85,.42,1.0,'#656c64');
      world.ring(tiers[2],0,2.94,-.35,.52,d.accent,0);
      box(tiers[3],0,.18,-2.08,3.2,.12,.72,'#5b6760');
    } else if (d.kind==='archive') {
      shell(g,d,4.8,3.45,2.05,'#465148');
      box(g,0,2.54,0,2.70,.40,1.65,'#526057');
      box(g,0,2.78,0,1.60,.07,1.00,'#84a393',true);
      box(tiers[0],-1.65,1.00,1.84,.22,1.28,.08,d.accent);
      box(tiers[1],1.65,1.00,1.84,.22,1.28,.08,d.accent);
      box(tiers[2],0,.28,-1.95,2.3,.18,.56,'#78816f');
      world.ring(tiers[3],0,3.08,0,.48,d.accent,.20);
    } else if (d.kind==='arcade') {
      shell(g,d,4.3,3.15,2.0,'#4b414f');
      box(g,0,2.53,.30,2.72,.43,.24,'#46344f');
      box(g,0,2.55,.45,2.0,.11,.08,d.accent,true);
      for(const x of [-1.25,1.25]) world.ring(g,x,1.04,1.73,.31,d.accent,0);
      box(tiers[0],0,.38,2.03,2.0,.24,.58,'#5f5067');
      box(tiers[1],-1.7,2.68,-.55,.40,.32,.40,d.accent,true);
      box(tiers[2],1.7,2.68,-.55,.40,.32,.40,d.accent,true);
      world.ring(tiers[3],0,3.0,-.35,.64,d.accent,.50);
    } else if (d.kind==='treasury') {
      shell(g,d,4.5,3.5,2.1,'#514f46');
      cyl(g,0,1.05,1.94,.82,.16,'#75705d');
      world.ring(g,0,1.05,2.10,.60,d.accent,0);
      box(g,0,2.55,0,2.9,.40,1.75,'#5b594e');
      box(tiers[0],-1.55,2.78,-.65,.42,.40,.42,d.accent);
      box(tiers[1],1.55,2.78,-.65,.42,.40,.42,d.accent);
      box(tiers[2],0,.30,-2.05,2.5,.14,.62,'#6a685a');
      world.ring(tiers[3],0,3.00,0,.55,d.accent,.30);
    } else if (d.kind==='quantum') {
      shell(g,d,5.2,4.0,2.2,'#4b4753');
      cyl(g,0,2.72,0,.82,.48,'#5f5c69');
      world.sphere(g,0,3.10,0,.52,d.accent,true);
      world.ring(g,0,3.10,0,.88,d.accent,.28);
      world.ring(g,0,3.10,0,1.10,d.accent,1.20);
      world.ring(tiers[0],0,3.10,0,1.32,d.accent,.62);
      for(const x of [-1.9,1.9]) cyl(tiers[1],x,2.76,-.55,.22,.86,'#6c6674');
      box(tiers[2],0,.30,2.34,3.2,.18,.72,d.accent);
      world.ring(tiers[3],0,3.10,0,1.54,d.accent,.96);
    }

    const halo = world.ring(g,0,.10,0,Math.max(2.7,d.kind==='warehouse'?3.2:2.8),d.accent);
    halo.visible = false;
    const record = world.bind(g,d.page,null,d.name);
    record.department = d;
    d.buildingGroup = g;
    d.levelTiers = tiers;
    d.halo = halo;
    d.buildingRecord = record;
    return g;
  }

  for (const d of PLOTS) {
    makePlot(d);
    buildModel(d);

    const label = document.createElement('div');
    label.className = 'world-label';
    label.dataset.department = d.id;
    label.innerHTML = `<span>${displayName(d)}</span><small>${d.subtitle}</small><em></em>`;
    worldLabels.append(label);
    d.labelEl = label;

    const plotLabel = document.createElement('div');
    plotLabel.className = 'plot-label land-label';
    plotLabel.dataset.plot = d.id;
    plotLabel.innerHTML = `<span>AVAILABLE LAND</span><small>Expansion plot</small><em></em>`;
    worldLabels.append(plotLabel);
    d.plotLabelEl = plotLabel;
  }

  function grantMachineAreas() {
    const lvl = buildingLevel(plotById.get('factory'));
    const ids=['lab'];
    if (lvl >= 2) ids.push('generator');
    if (lvl >= 3) ids.push('factory');
    if (lvl >= 4) ids.push('research');
    if (lvl >= 5) ids.push('deep');
    if (ex.constructed.includes('quantum')) ids.push('quantum');
    for (const id of ids) if (!state.s.areas.includes(id)) state.s.areas.push(id);
  }

  function syncBuildingStage(d) {
    const level = buildingLevel(d);
    d.levelTiers?.forEach((g,i) => g.visible = i < level - 1);
    if (d.labelEl) d.labelEl.querySelector('span').textContent = displayName(d);
  }

  PLOTS.forEach(syncBuildingStage);
  grantMachineAreas();

  function projectElement(group, element, y, maxWorldSize=70) {
    if (!group || !element) return;
    const p = group.position.clone();
    group.getWorldPosition(p);
    p.y += y;
    p.project(world.camera);
    const visible = p.z > -1 && p.z < 1 && p.x > -1.08 && p.x < 1.08 &&
      p.y > -1.08 && p.y < 1.08 && world.size < maxWorldSize;
    if (!visible) {
      element.style.setProperty('--distance-opacity','0');
      return;
    }
    element.style.left = `${(p.x*.5+.5)*innerWidth}px`;
    element.style.top = `${(-p.y*.5+.5)*innerHeight}px`;
    element.style.setProperty('--distance-opacity',
      String(Math.max(.45,1-Math.max(0,world.size-42)/36)));
  }

  function departmentStatus(d) {
    if (d.id==='factory') return `+${state.fmt(state.cps)}/s`;
    if (d.id==='upgrade') return `${state.s.points} engineering point${state.s.points===1?'':'s'}`;
    if (d.id==='mission') {
      const ready = state.missions().filter(m => !state.s.quests.claims.includes(m[0]) &&
        (state.s.quests[m[1]][m[2]]||0)>=m[3]).length;
      return ready ? `${ready} reward${ready===1?'':'s'} ready` : 'Contracts available';
    }
    if (d.id==='warehouse') return `${state.offlineHours}h reserve`;
    if (d.id==='workers') return `${upgradeValue('workers','staff')} staffing upgrades`;
    if (d.id==='research') return state.s.researchJob ? 'Research in progress' : 'Research bay idle';
    if (d.id==='market') return `${state.s.dust} Stardust`;
    if (d.id==='archive') return `${state.s.collected.length}/50 discoveries`;
    if (d.id==='arcade') return `${state.s.tokens} tokens`;
    if (d.id==='treasury') return `${state.fmt(state.s.lifetime)} lifetime`;
    if (d.id==='quantum') return state.s.run >= state.rebirthRequirement ? 'Rebirth ready' : 'Quantum systems';
    return '';
  }

  let statusClock=1;
  let lastFrontierKey='';
  function updateWorldVisuals(dt=.016) {
    const frontier = frontierPlots();
    const hoveredDepartment = world.current?.department || null;
    const hoveredPlot = world.current?.plot || null;
    const tutorial = currentTutorial();
    const now = performance.now();

    for (const d of PLOTS) {
      const owned = isOwned(d);
      const built = isConstructed(d);
      const jobEnd = ex.jobs[d.id];
      const frontierVisible = !owned && frontier.has(d.id);

      d.plotGroup.visible = owned || frontierVisible || d.starter;
      d.plotNatural.visible = !owned && frontierVisible;
      d.plotOwned.visible = owned || d.starter;
      d.plotSite.visible = owned && !built;
      if (d.pathGroup) d.pathGroup.visible = owned;

      d.buildingGroup.visible = built;
      d.labelEl.style.display = built ? '' : 'none';
      d.plotLabelEl.style.display = (!built && (owned || frontierVisible)) ? '' : 'none';

      if (built) {
        syncBuildingStage(d);
        const hover = hoveredDepartment===d;
        const selected = ui._activeDepartment===d && ui.opened;
        const tut = tutorial?.targetType==='building' && tutorial.target===d.id;
        const animated = state.s.settings.buildingAnimations!=='reduced' && !state.s.settings.reduced;
        const pulse = tut && animated ? Math.sin(now/240)*.018 : 0;
        const targetScale = 1 + (hover?.045:selected?.025:0) + pulse;
        let buildY=1;
        if (d.constructStart) {
          const t=Math.min(1,(now-d.constructStart)/2200);
          buildY=.10+.90*(1-Math.pow(1-t,3));
          if(t>=1)d.constructStart=0;
        }
        const next = animated ? d.buildingGroup.scale.x+(targetScale-d.buildingGroup.scale.x)*.22 : targetScale;
        d.buildingGroup.scale.set(next,next*buildY,next);
        d.halo.visible = hover || selected || tut;
        d.labelEl.classList.toggle('hovered',hover);
        d.labelEl.classList.toggle('selected',selected);
        d.labelEl.classList.toggle('tutorial-target',tut);
        projectElement(d.buildingGroup,d.labelEl,4.25);
      } else if (owned || frontierVisible) {
        const hover = hoveredPlot===d;
        const tut = tutorial?.targetType==='plot' && tutorial.target===d.id;
        d.plotLabelEl.classList.toggle('hovered',hover);
        d.plotLabelEl.classList.toggle('tutorial-target',tut);
        const span=d.plotLabelEl.querySelector('span');
        const small=d.plotLabelEl.querySelector('small');
        const em=d.plotLabelEl.querySelector('em');
        if (owned) {
          span.textContent = jobEnd ? 'CONSTRUCTION IN PROGRESS' : 'LAND OWNED';
          small.textContent = jobEnd ? `${Math.max(0,Math.ceil((jobEnd-Date.now())/1000))}s remaining` : 'Development site';
          em.textContent = '';
        } else {
          span.textContent = d.hiddenName && !requirementsMet(d) ? 'FUTURE DEVELOPMENT' : 'AVAILABLE LAND';
          small.textContent = requirementsMet(d) ? 'Expansion plot' : `Foundry Level ${d.level}`;
          em.textContent = hover ? `${state.fmt(landCost(d))} ENERGY` : '';
        }
        projectElement(d.plotGroup,d.plotLabelEl,1.45,58);
      }
    }

    statusClock += dt;
    if (statusClock>.35) {
      statusClock=0;
      for (const d of PLOTS) if (isConstructed(d)) {
        d.labelEl.querySelector('em').textContent=departmentStatus(d);
      }
    }

    const key=[...frontier].join(',');
    if(key!==lastFrontierKey){lastFrontierKey=key;world.renderer.shadowMap.needsUpdate=true;}
  }

  function completeJobs() {
    let changed=false;
    for (const [id,end] of Object.entries({...ex.jobs})) {
      if (Date.now() < end) continue;
      const d=plotById.get(id);
      if (!d) { delete ex.jobs[id]; continue; }
      delete ex.jobs[id];
      if (!ex.constructed.includes(id)) ex.constructed.push(id);
      ex.buildingLevels[id] ||= 1;
      d.constructStart = performance.now();
      grantMachineAreas();
      if (id==='research' && !state.s.areas.includes('research')) state.s.areas.push('research');
      if (id==='quantum' && !state.s.areas.includes('quantum')) state.s.areas.push('quantum');
      state.xp(id==='upgrade'?20:id==='mission'?30:60);
      if (state.s.settings.notifications) ui.notice(`FACILITY COMPLETE · ${d.name}`);
      changed=true;
    }
    if (changed) {
      state.recompute();
      state.save();
      world.sync();
      if (ui.opened) ui.render();
    }
  }

  // Camera rotation, WASD panning, edge scrolling, zoom sensitivity and smooth movement.
  let cameraYaw=0;
  const originalFrame=world.frame.bind(world);
  world.frame=function landFrame(){
    originalFrame();
    const radius=32;
    const shake=(state.s.settings.shake && !state.s.settings.reduced) ? (world.corePulse||0)*.22 : 0;
    const wobble=performance.now()*.045;
    world.camera.position.set(
      world.target.x + Math.sin(cameraYaw)*radius + Math.sin(wobble)*shake,
      42,
      world.target.z + Math.cos(cameraYaw)*radius + Math.cos(wobble*1.13)*shake
    );
    world.camera.lookAt(world.target);
    world.camera.updateMatrixWorld();
  };
  const originalZoom=world.zoom.bind(world);
  world.zoom=function landZoom(factor){
    const sens=Number(state.s.settings.zoomSensitivity)||1;
    const adjusted=1+(factor-1)*sens;
    originalZoom(adjusted);
  };

  const originalWorldUpdate=world.update.bind(world);
  world.update=function landWorldUpdate(dt){
    if (!world.paused && !world.arena) {
      const speed=dt*world.size*.55*(Number(state.s.settings.sensitivity)||1);
      if(world.keys.KeyA)world.goal.x-=speed;
      if(world.keys.KeyD)world.goal.x+=speed;
      if(world.keys.KeyW)world.goal.z-=speed;
      if(world.keys.KeyS)world.goal.z+=speed;
      const rotSpeed=.8*(Number(state.s.settings.rotationSpeed)||1);
      if(world.keys.KeyQ)cameraYaw-=dt*rotSpeed;
      if(world.keys.KeyE)cameraYaw+=dt*rotSpeed;
      if(state.s.settings.edgeScroll && world.pointer.inside) {
        const margin=14;
        if(world.pointer.x<margin)world.goal.x-=speed;
        if(world.pointer.x>innerWidth-margin)world.goal.x+=speed;
        if(world.pointer.y<margin)world.goal.z-=speed;
        if(world.pointer.y>innerHeight-margin)world.goal.z+=speed;
      }
    }
    originalWorldUpdate(dt);
    if (!state.s.settings.smoothCamera && !state.s.settings.reduced) {
      world.target.copy(world.goal);
      world.size=world.goalSize;
      world.frame();
    }
    completeJobs();
    updateWorldVisuals(dt);
    renderTutorial();
  };

  // No permanent system navigation.
  const originalNav=ui.nav.bind(ui);
  ui.nav=function noGlobalNav(){ $('menuNav').innerHTML=''; };
  originalNav();
  $('menuNav').innerHTML='';

  const originalControlView=ui.controlView.bind(ui);
  const originalMissionsView=ui.missionsView.bind(ui);
  const originalCollectionView=ui.collectionView.bind(ui);
  const originalArcadeView=ui.arcadeView.bind(ui);
  const originalResearchView=ui.researchView.bind(ui);
  const originalRebirthView=ui.rebirthView.bind(ui);
  const originalDronesView=ui.dronesView.bind(ui);
  const originalAchievementsView=ui.achievementsView?.bind(ui);
  const originalStatsView=ui.statsView?.bind(ui);
  const originalChallengesView=ui.challengesView?.bind(ui);

  function intro(kicker,title,copy,metrics=''){
    return `<div class="department-intro">
      <div><span class="department-kicker">${kicker}</span><h2>${title}</h2><p>${copy}</p></div>
      ${metrics?`<div class="dept-metrics">${metrics}</div>`:''}
    </div>`;
  }
  function metric(label,value,sub=''){
    return `<div class="dept-metric"><span>${label}</span><strong>${value}</strong>${sub?`<small>${sub}</small>`:''}</div>`;
  }

  const SPECIAL_UPGRADES = {
    factory:[
      ['output','HEAVY GEARS','+8% machine output per level'],
      ['speed','HIGH-SPEED MOTORS','+6% passive production per level'],
      ['reliability','RELIABILITY NETWORK','+3% total foundry output per level']
    ],
    warehouse:[
      ['racks','STORAGE RACKS','+2 hours offline reserve per level'],
      ['floor','EXPANDED FLOOR','+3 hours offline reserve per level'],
      ['sorting','AUTOMATED SORTING','+8% offline efficiency per level'],
      ['cargo','CARGO HANDLING','+2% passive production per logistics level']
    ],
    workers:[
      ['staff','ADDITIONAL STAFF','Adds automatic foundry assistance'],
      ['training','ADVANCED TRAINING','+5% XP gain per level'],
      ['management','SUPERVISOR NETWORK','+4% passive production per level']
    ],
    research:[
      ['speed','RESEARCH SPEED','Projects complete 12% faster per level'],
      ['efficiency','LAB EFFICIENCY','Research costs up to 35% less'],
      ['quality','TECHNOLOGY QUALITY','+5% total production per level']
    ],
    mission:[
      ['quality','CONTRACT QUALITY','Improves mission bonus rewards'],
      ['slots','CONTRACT SLOTS','Shows more contracts at once'],
      ['refresh','OPERATIONS INTEL','Adds bonus XP to completed contracts']
    ],
    market:[
      ['negotiation','NEGOTIATION','Improves resource exchange value'],
      ['bulk','BULK TRADING','Raises the size of market transactions'],
      ['intelligence','MARKET INTELLIGENCE','Improves Stardust exchange value by 4% per level']
    ],
    archive:[
      ['catalog','CATALOG SYSTEM','+2% XP gain per level and improved discovery grants'],
      ['preservation','PRESERVATION','+1% total foundry output per level'],
      ['discovery','DISCOVERY GRANTS','Recovered shards award bonus Stardust']
    ],
    arcade:[
      ['cabinets','ARCADE CABINETS','Minigames award +3% tokens per level'],
      ['rewards','REWARD CIRCUITS','Minigames award bonus tokens'],
      ['bonus','BONUS PROGRAM','Minigames award +4 bonus XP per level']
    ],
    treasury:[
      ['forecasting','FORECASTING','+1% total foundry output per level'],
      ['reserves','RESERVE POLICY','+1 hour offline reserve per level'],
      ['efficiency','OPERATING EFFICIENCY','+2.5% total production per level']
    ],
    quantum:[
      ['stability','CORE STABILITY','+3% rebirth reward per level'],
      ['yield','QUANTUM YIELD','+8% rebirth reward per level'],
      ['memory','MEMORY MATRIX','+2% total foundry output per level']
    ]
  };

  function specializedCost(id,key){
    const d=plotById.get(id);
    const level=upgradeValue(id,key);
    const base=Math.max(80,Math.round((d.landCost+d.buildCost+250)*.12));
    return Math.round(base*Math.pow(1.72,level));
  }

  function upgradeSection(id,heading='FACILITY UPGRADES'){
    const list=SPECIAL_UPGRADES[id]||[];
    if(!list.length)return '';
    return `<section class="special-upgrades ${id}-upgrade-layout">
      <div class="section-heading"><span>${heading}</span><small>Building Level ${buildingLevel(plotById.get(id))} / 5</small></div>
      <div class="special-upgrade-grid">
        ${list.map(([key,name,desc])=>{
          const level=upgradeValue(id,key),cost=specializedCost(id,key),cap=Math.min(5,buildingLevel(plotById.get(id))+1);
          return `<article class="special-upgrade-row">
            <div><span>LV ${level}/5</span><h3>${name}</h3><p>${desc}</p></div>
            <button data-action="facilityupgrade" data-id="${id}" data-key="${key}" ${level>=cap||state.s.energy<cost?'disabled':''}>${level>=5?'MAXED':level>=cap?'UPGRADE BUILDING FIRST':`${state.fmt(cost)} ENERGY · UPGRADE`}</button>
          </article>`;
        }).join('')}
      </div>
    </section>`;
  }

  function facilityImprove(id){
    const d=plotById.get(id),level=buildingLevel(d);
    if(level>=5)return `<div class="facility-level-card maxed"><span>FACILITY LEVEL</span><strong>5 / 5</strong><p>Fully developed.</p></div>`;
    const base=Math.max(180,d.buildCost||180,d.landCost*.45);
    const cost=Math.round(base*Math.pow(1.75,level-1)*(1-constructionDiscount()));
    return `<div class="facility-level-card">
      <div><span>FACILITY LEVEL</span><strong>${level} → ${level+1}</strong><p>Physically expands this department and unlocks stronger specialised upgrades.</p></div>
      <button class="primary" data-action="improvefacility" data-id="${id}" ${state.s.energy<cost?'disabled':''}>IMPROVE · ${state.fmt(cost)} ENERGY</button>
    </div>`;
  }

  function unlockedMachineIndexes(){
    const lvl=buildingLevel(plotById.get('factory'));
    const out=[0];
    if(lvl>=2)out.push(1);
    if(lvl>=3)out.push(2);
    if(lvl>=4 && ex.constructed.includes('research'))out.push(3);
    if(lvl>=5)out.push(4);
    if(ex.constructed.includes('quantum'))out.push(5);
    return out;
  }

  ui.controlView=function machineHallView(){
    const indexes=unlockedMachineIndexes();
    const cards=indexes.map((i,idx)=>{
      const level=state.s.machines[i]||0;
      const running=level>0;
      const q=state.quote(i,1);
      const name=['Energy Collector','Ion Generator','Fusion Engine','Photon Processor','Dark Matter Drill','Quantum Reactor'][i]||`Machine ${i+1}`;
      return `<article class="machine-summary ${idx===0?'featured-machine':''}">
        <div><span class="machine-sector">${idx===0?'STARTER LINE':'PRODUCTION LINE '+(idx+1)}</span><h3>${name}</h3><b class="machine-status state-${running?'running':'idle'}">${running?'RUNNING':'IDLE'}</b></div>
        <div class="machine-primary-value"><span>PRODUCTION</span><strong>${state.fmt(state.machineRate(i))}<small>/s</small></strong></div>
        <div class="machine-simple-meta"><span>Level <b>${level}</b></span><span>${running?`${state.milestone(level)}× milestone`:'Not commissioned'}</span></div>
        <div class="machine-primary-action">
          ${i===0&&!level?`<button class="primary" data-action="startermachine" data-i="0">START MACHINE</button>`:
            `<button class="primary" data-action="factoryinspect" data-i="${i}">MANAGE</button>`}
          ${running?`<button class="quiet-action" data-action="machinebuy" data-i="${i}" data-n="1" ${state.s.energy<q.cost||!q.n?'disabled':''}>Upgrade · ${state.fmt(q.cost)} ENERGY</button>`:''}
        </div>
      </article>`;
    }).join('');
    return `<div class="factory-interface">
      ${intro(displayName(plotById.get('factory')),'Manage production.','Start with one line. New machinery appears as the production district itself grows.',
        metric('OUTPUT',`${state.fmt(state.cps)}/s`)+metric('ACTIVE LINES',state.s.machines.filter(Boolean).length))}
      <div class="machine-summary-grid">${cards}</div>
      ${facilityImprove('factory')}
      ${upgradeSection('factory','PRODUCTION SYSTEMS')}
    </div>`;
  };

  let globalBranch='production';
  let globalSelected=0;
  const GLOBAL_BRANCHES={
    production:{
      label:'PRODUCTION',desc:'Increase all foundry output.',key:'production',icon:'⚙',
      nodes:[
        ['BASIC ENGINEERING','All foundry output +5%.'],
        ['INDUSTRIAL DESIGN','All foundry output +5%.'],
        ['PRODUCTION STANDARDS','All foundry output +5%.'],
        ['SYSTEM INTEGRATION','All foundry output +5%.'],
        ['MASTER FOUNDRY PLAN','All foundry output +5%.']
      ]
    },
    energy:{
      label:'ENERGY',desc:'Improve active and passive energy systems.',key:'energy',icon:'ϟ',
      nodes:[
        ['CORE TUNING','Manual energy +8%; passive +4%.'],
        ['POWER CONDITIONING','Manual energy +8%; passive +4%.'],
        ['GRID BALANCING','Manual energy +8%; passive +4%.'],
        ['HIGH-VOLTAGE BUS','Manual energy +8%; passive +4%.'],
        ['ENERGY MASTERY','Manual energy +8%; passive +4%.']
      ]
    },
    infrastructure:{
      label:'INFRASTRUCTURE',desc:'Reduce future construction costs.',key:'infrastructure',icon:'▦',
      nodes:[
        ['STANDARD FOUNDATIONS','Construction costs −6%.'],
        ['MODULAR FRAMES','Construction costs −6%.'],
        ['PREFAB SYSTEMS','Construction costs −6%.'],
        ['SMART PROCUREMENT','Construction costs −6%.'],
        ['MASTER CONTRACTING','Construction costs −6%.']
      ]
    },
    expansion:{
      label:'EXPANSION',desc:'Reduce future land prices.',key:'expansion',icon:'⌁',
      nodes:[
        ['SURVEY RIGHTS','Land prices −6%.'],
        ['SITE PLANNING','Land prices −6%.'],
        ['REGIONAL PERMITS','Land prices −6%.'],
        ['DISTRICT PLANNING','Land prices −6%.'],
        ['MASTER DEVELOPER','Land prices −6%.']
      ]
    }
  };

  function globalNodeCost(index){ return 1+Math.floor(index/2); }

  ui.treeView=function globalUpgradeLabView(){
    const branch=GLOBAL_BRANCHES[globalBranch]||GLOBAL_BRANCHES.production;
    const current=upgradeValue('upgrade',branch.key);
    globalSelected=Math.max(0,Math.min(4,globalSelected));
    const nodes=branch.nodes.map(([name,desc],i)=>{
      const purchased=i<current,available=i===current,locked=i>current;
      return `<button class="global-skill-node ${purchased?'owned':available?'available':'locked'} ${globalSelected===i?'chosen':''}" data-action="globalnode" data-index="${i}">
        <span>${branch.icon}</span><div><b>${name}</b><small>${purchased?'PURCHASED':available?'AVAILABLE':`REQUIRES LEVEL ${i}`}</small></div>
      </button>`;
    }).join('<i class="global-skill-line"></i>');
    return `<div class="global-tree-layout">
      <div class="global-tree-main">
        <div class="skill-category-tabs global-tabs">
          ${Object.entries(GLOBAL_BRANCHES).map(([id,b])=>`<button data-action="globalbranch" data-id="${id}" class="${globalBranch===id?'selected':''}"><b>${b.label}</b><small>${b.desc}</small></button>`).join('')}
        </div>
        <div class="simple-branch-header"><div><span>${branch.label} PATH</span><h2>${branch.desc}</h2></div><div class="skill-points-pill"><small>ENGINEERING POINTS</small><strong>${state.s.points}</strong></div></div>
        <div class="global-skill-path">${nodes}</div>
        ${facilityImprove('upgrade')}
      </div>
      <aside class="selected-upgrade-panel">${globalInspector()}</aside>
    </div>`;
  };

  function globalInspector(){
    const branch=GLOBAL_BRANCHES[globalBranch]||GLOBAL_BRANCHES.production;
    const current=upgradeValue('upgrade',branch.key);
    const i=globalSelected;
    const node=branch.nodes[i]||branch.nodes[0];
    const purchased=i<current,available=i===current,maxed=current>=5;
    const cost=globalNodeCost(i);
    return `<div class="selected-upgrade-kicker">${branch.label} ENGINEERING</div>
      <h2>${node[0]}</h2>
      <p class="selected-upgrade-desc">${node[1]}</p>
      <div class="upgrade-level-change"><span>BRANCH</span><strong>${current}/5</strong><i>→</i><span>NODE</span><strong>${i+1}/5</strong></div>
      <div class="upgrade-cost"><span>COST</span><strong>${purchased?'Purchased':`${cost} Engineering Point${cost===1?'':'s'}`}</strong><small>${state.s.points} available</small></div>
      <button class="primary purchase-upgrade" data-action="globalupgrade" data-id="${globalBranch}" data-index="${i}" ${purchased||!available||maxed||state.s.points<cost?'disabled':''}>${purchased?'PURCHASED':maxed?'BRANCH MAXED':!available?'PREVIOUS NODE REQUIRED':'PURCHASE UPGRADE'}</button>`;
  }

  ui.missionsView=function missionControlView(){
    const ready=state.missions().filter(m=>!state.s.quests.claims.includes(m[0])&&(state.s.quests[m[1]][m[2]]||0)>=m[3]).length;
    const slots=2+upgradeValue('mission','slots');
    const board=originalMissionsView();
    return `<div class="mission-interface">
      ${intro('MISSION CONTROL','What should I do next?','Contracts guide the foundry without turning the world into a checklist.',
        metric('REWARDS READY',ready)+metric('CONTRACT SLOTS',slots))}
      <div class="contract-board limited-contracts" style="--contract-limit:${slots}">${board}</div>
      ${facilityImprove('mission')}
      ${upgradeSection('mission','OPERATIONS UPGRADES')}
      <details class="advanced-disclosure services-disclosure"><summary>Foundry services</summary>
        <div class="service-links">
          <button data-action="daily">${state.s.daily.date===state.calendar()?'Daily supply collected':'Collect daily supply'}</button>
          ${originalAchievementsView?'<button data-action="open" data-page="achievements">Achievements</button>':''}
          ${originalStatsView?'<button data-action="open" data-page="stats">Statistics</button>':''}
          ${originalChallengesView?`<button data-action="open" data-page="challenges" ${state.s.rebirths?'':'disabled'}>Challenges</button>`:''}
        </div>
      </details>
    </div>`;
  };

  ui.warehouseView=function warehouseView(){
    const s=state.s;
    const stocks=[
      ['ENERGY',`${state.fmt(s.energy)} ENERGY`,'Spendable foundry balance'],
      ['OFFLINE RESERVE',`${state.offlineHours}h`,'Maximum away-time storage'],
      ...(s.dust>0?[['STARDUST',state.fmt(s.dust),'Specialist material']]:[]),
      ...(s.tokens>0?[['ARCADE TOKENS',state.fmt(s.tokens),'Entertainment rewards']]:[])
    ];
    return `<div class="warehouse-interface">
      ${intro('WAREHOUSE','Storage & logistics.','A clean operational view of what is being held and how long production can be preserved.',
        metric('RESERVE',`${state.offlineHours}h`)+metric('EFFICIENCY',`${Math.round(state.offlineEfficiency*100)}%`))}
      <div class="warehouse-grid">${stocks.map(([name,value,sub])=>`<article class="stock-card"><span>${name}</span><strong>${value}</strong><small>${sub}</small></article>`).join('')}</div>
      ${facilityImprove('warehouse')}
      ${upgradeSection('warehouse','LOGISTICS UPGRADES')}
    </div>`;
  };

  ui.workersView=function workersView(){
    const workers=[
      {id:'engineer',name:'Chief Engineer',role:'Foundry Operations',assignment:'Machine Hall',value:state.s.lifetime,goal:100000},
      {id:'scientist',name:'Dr. Lyra',role:'Research Scientist',assignment:ex.constructed.includes('research')?'Research Centre':'Unassigned',value:Object.keys(state.s.skills).length,goal:12},
      {id:'technician',name:'Technician Omi',role:'Machine Technician',assignment:'Production Floor',value:state.s.machines.reduce((a,b)=>a+b,0),goal:25},
      {id:'explorer',name:'Explorer Vega',role:'Survey Specialist',assignment:'Expansion Survey',value:ex.owned.length,goal:6}
    ];
    return `<div class="workers-interface">
      ${intro('WORKER OFFICE','People & assignments.','The roster shows only the decisions that matter: role, assignment and whether a reward is ready.',
        metric('CREW',workers.length)+metric('STAFFING',`LV ${upgradeValue('workers','staff')}`))}
      <div class="worker-roster">${workers.map(w=>{
        const claimed=state.s.npcClaims.includes(w.id),ready=w.value>=w.goal;
        return `<article class="worker-card ${ready&&!claimed?'ready':''}">
          <div class="worker-avatar">${w.name.split(' ').map(x=>x[0]).join('').slice(0,2)}</div>
          <div class="worker-main"><span>${w.role}</span><h3>${w.name}</h3><p>${w.assignment}</p></div>
          <div class="worker-side"><strong>${state.fmt(Math.min(w.value,w.goal))} / ${state.fmt(w.goal)}</strong><button data-action="npcclaim" data-id="${w.id}" ${claimed||!ready?'disabled':''}>${claimed?'Claimed':ready?'Claim reward':'In progress'}</button></div>
        </article>`;
      }).join('')}</div>
      ${facilityImprove('workers')}
      ${upgradeSection('workers','PERSONNEL UPGRADES')}
    </div>`;
  };

  ui.researchView=function researchView(){
    return `<div class="research-interface">
      ${intro('RESEARCH CENTRE','Develop new technology.','Research remains separate from ordinary production upgrades and continues on a real timer.',
        metric('STATUS',state.s.researchJob?'RUNNING':'IDLE')+metric('PROJECT LEVELS',state.s.research.reduce((a,b)=>a+b,0)))}
      <div class="research-projects">${originalResearchView()}</div>
      ${facilityImprove('research')}
      ${upgradeSection('research','LABORATORY UPGRADES')}
    </div>`;
  };

  ui.marketView=function marketView(){
    const negotiation=upgradeValue('market','negotiation'),bulk=1+upgradeValue('market','bulk');
    const intelligence=upgradeValue('market','intelligence');
    const sellAmount=1000*bulk;
    const dustGain=Math.max(1,Math.floor(5*bulk*(1+negotiation*.1+intelligence*.04)));
    return `<div class="market-interface">
      ${intro('MARKETPLACE','Trade & specialist equipment.','Use the exchange for deliberate transactions; specialist equipment remains below.',
        metric('STARDUST',state.fmt(state.s.dust))+metric('BULK',`${bulk}×`))}
      <div class="commodity-exchange">
        <div><span>FOUNDRY ENERGY PACK</span><h3>${state.fmt(sellAmount)}</h3><p>Exchange surplus Energy for ${dustGain} Stardust.</p></div>
        <button class="primary" data-action="markettrade" data-amount="${sellAmount}" data-reward="${dustGain}" ${state.s.energy<sellAmount?'disabled':''}>SELL FOR ${dustGain} STARDUST</button>
      </div>
      <details class="advanced-disclosure"><summary>Specialist equipment</summary><div class="market-listings">${originalDronesView()}</div></details>
      ${facilityImprove('market')}
      ${upgradeSection('market','TRADING UPGRADES')}
    </div>`;
  };

  ui.collectionView=function archiveView(){
    return `<div class="archive-interface">
      ${intro('FOUNDRY ARCHIVE','Collection & discoveries.','The archive appears only after you built it; undiscovered content stays out of the early game.',
        metric('DISCOVERED',`${state.s.collected.length}/50`)+metric('DISTRICTS',ex.constructed.length))}
      <div class="archive-gallery">${originalCollectionView()}</div>
      ${facilityImprove('archive')}
      ${upgradeSection('archive','ARCHIVE UPGRADES')}
    </div>`;
  };

  ui.arcadeView=function arcadeView(){
    return `<div class="arcade-interface">
      ${intro('ARCADE','Optional side activities.','A playful department that stays separate from the main production loop.',
        metric('TOKENS',state.s.tokens)+metric('WINS',state.s.stats.wins))}
      <div class="arcade-cabinets">${originalArcadeView()}</div>
      ${facilityImprove('arcade')}
      ${upgradeSection('arcade','ARCADE UPGRADES')}
    </div>`;
  };

  ui.treasuryView=function treasuryView(){
    return `<div class="treasury-interface">
      ${intro('TREASURY','Financial overview.','A late-game financial department for players who actually need deeper performance information.',
        metric('NET PRODUCTION',`+${state.fmt(state.cps)}/s`)+metric('CURRENT ENERGY',`${state.fmt(state.s.energy)} ENERGY`))}
      <div class="finance-focus"><span>NET PRODUCTION</span><strong>+${state.fmt(state.cps)}<small>/s</small></strong><p>Current passive production after all active facility bonuses.</p></div>
      <div class="simple-ledger"><div><span>Run Energy</span><strong>${state.fmt(state.s.run)}</strong></div><div><span>Lifetime Energy</span><strong>${state.fmt(state.s.lifetime)}</strong></div><div><span>Owned land</span><strong>${ex.owned.length}</strong></div><div><span>Built departments</span><strong>${ex.constructed.length}</strong></div></div>
      ${facilityImprove('treasury')}
      ${upgradeSection('treasury','TREASURY UPGRADES')}
    </div>`;
  };

  ui.rebirthView=function quantumView(){
    return `<div class="quantum-interface">
      ${intro('QUANTUM FACILITY','Rebirth & ascension.','Prestige stays hidden until you have physically developed the Quantum district.',
        metric('RUN VALUE',`${state.fmt(state.s.run)} ENERGY`)+metric('RESTART REWARD',`+${state.fmt(state.rebirthGain)} cores`))}
      <div class="rebirth-clarity">
        <div><span>YOU KEEP</span><strong>Land, departments & facility upgrades</strong></div>
        <div><span>YOU RESET</span><strong>Current run Energy & machine run progress</strong></div>
      </div>
      <div class="quantum-core-panel">${originalRebirthView()}</div>
      ${facilityImprove('quantum')}
      ${upgradeSection('quantum','QUANTUM UPGRADES')}
    </div>`;
  };

  const titles={
    tree:['UPGRADE LAB','Global engineering'],
    control:['MACHINE HALL','Production'],
    missions:['MISSION CONTROL','Objectives'],
    warehouse:['WAREHOUSE','Logistics'],
    workers:['WORKER OFFICE','Personnel'],
    research:['RESEARCH CENTRE','Technology'],
    market:['MARKETPLACE','Trading'],
    collection:['FOUNDRY ARCHIVE','Discoveries'],
    arcade:['ARCADE','Side activities'],
    treasury:['TREASURY','Finances'],
    rebirth:['QUANTUM FACILITY','Prestige'],
    achievements:['MISSION CONTROL','Achievements'],
    stats:['MISSION CONTROL','Statistics'],
    challenges:['MISSION CONTROL','Challenges']
  };
  const secondaryDepartment=new Map([
    ['achievements',plotById.get('mission')],
    ['stats',plotById.get('mission')],
    ['challenges',plotById.get('mission')],
    ['drones',plotById.get('market')]
  ]);

  const originalRender=ui.render.bind(ui);
  ui.render=function v5Render(){
    originalRender();
    menu.dataset.page=this.page;
    const t=titles[this.page];
    if(t){
      const eyebrow=menu.querySelector('.menu-header .eyebrow');
      if(eyebrow)eyebrow.textContent=t[0];
      menuTitle.textContent=t[1];
    }
    $('menuNav').innerHTML='';
  };

  const originalOpen=ui.open.bind(ui);
  ui.open=function v5Open(page='missions'){
    const d=plotByPage.get(page)||secondaryDepartment.get(page);
    if(d && !isConstructed(d))return;
    if(page==='tree' && !isConstructed(plotById.get('upgrade')))return;
    if(!this.opened && d){
      this._worldReturn={x:world.goal.x,z:world.goal.z,size:world.goalSize};
    }
    if(d){
      this._activeDepartment=d;
      world.goal.set(d.x,0,d.z);
      world.goalSize=Math.max(19,Math.min(24,22/Math.max(.8,innerWidth/innerHeight)));
    }
    document.body.classList.add('building-ui-open');
    originalOpen(page);
    const tut=currentTutorial();
    if(page==='tree' && tut?.step===7){
      state.s.settings.tutorial=false;
      state.save();
      renderTutorial(true);
    }
  };

  const originalClose=ui.close.bind(ui);
  ui.close=function v5Close(){
    const back=this._worldReturn;
    originalClose();
    document.body.classList.remove('building-ui-open');
    if(back){
      world.goal.set(back.x,0,back.z);
      world.goalSize=back.size;
    }
    this._worldReturn=null;
    this._activeDepartment=null;
  };

  function landPanel(d){
    const owned=isOwned(d),built=isConstructed(d),job=ex.jobs[d.id];
    if(built){
      ui.closeDialog();
      ui.open(d.page);
      return;
    }
    if(owned){
      const cost=constructionCost(d);
      ui.dialog(`<div class="land-purchase-panel"><div class="eyebrow">OWNED LAND</div><h2>${d.hiddenName?'Development Site':d.name}</h2>
        ${job?`<p>Construction is underway. The department will become available when the site is complete.</p><div class="construction-readout"><span>BUILDING</span><strong>${Math.max(0,Math.ceil((job-Date.now())/1000))}s</strong></div>`:
          `<p>This district is ready for development.</p><div class="land-facts"><div><span>PROJECT</span><strong>${d.name}</strong></div><div><span>CONSTRUCTION</span><strong>${state.fmt(cost)} ENERGY</strong></div></div>
           <button class="primary wide-action" data-action="beginconstruction" data-id="${d.id}" ${state.s.energy<cost?'disabled':''}>BEGIN CONSTRUCTION</button>`}
        <div class="actions"><button data-action="closedialog">Close</button></div></div>`);
      return;
    }
    const reqs=requirements(d),cost=landCost(d),met=requirementsMet(d);
    const revealName=!d.hiddenName||met;
    ui.dialog(`<div class="land-purchase-panel"><div class="eyebrow">${met?'EXPANSION PLOT':'FUTURE DEVELOPMENT'}</div>
      <h2>${revealName?d.name:'Undeveloped district'}</h2>
      <p>${met?'Purchase this land to expand your foundry.':'This area becomes available later in the foundry progression.'}</p>
      <div class="land-facts"><div><span>LAND SIZE</span><strong>Medium</strong></div><div><span>COST</span><strong>${met?`${state.fmt(cost)} ENERGY`:'—'}</strong></div></div>
      ${reqs.length?`<div class="land-requirements"><span>REQUIREMENTS</span>${reqs.map(r=>`<b class="${r.met?'met':''}">${r.met?'✓':'○'} ${r.text}</b>`).join('')}</div>`:''}
      ${met?`<div class="land-unlocks"><span>UNLOCKS</span><b>${d.name} construction</b><b>${d.subtitle} systems & upgrades</b></div>`:''}
      <div class="actions"><button data-action="closedialog">Cancel</button><button class="primary" data-action="landpurchase" data-id="${d.id}" ${!met||state.s.energy<cost?'disabled':''}>PURCHASE LAND · ${state.fmt(cost)} ENERGY</button></div>
    </div>`);
  }

  const purchaseBusy=new Set();
  function performLandPurchase(d){
    if(!d||isOwned(d)||purchaseBusy.has(d.id)||!requirementsMet(d))return false;
    const cost=landCost(d);
    if(state.s.energy<cost)return false;
    purchaseBusy.add(d.id);
    state.s.energy-=cost;
    ex.owned.push(d.id);
    ex.history.push({type:'land',id:d.id,time:Date.now(),cost});
    state.s.stats.purchases++;
    state.xp(d.id==='upgrade'?15:35);
    state.save();
    if(state.s.settings.notifications)ui.notice(`LAND PURCHASED · ${d.hiddenName?'Expansion district':d.name}`);
    setTimeout(()=>purchaseBusy.delete(d.id),350);
    if(d.autoBuild){
      beginConstruction(d,true);
    }else{
      landPanel(d);
    }
    return true;
  }

  function beginConstruction(d,automatic=false){
    if(!d||!isOwned(d)||isConstructed(d)||ex.jobs[d.id])return false;
    const cost=automatic?0:constructionCost(d);
    if(state.s.energy<cost)return false;
    state.s.energy-=cost;
    ex.jobs[d.id]=Date.now()+(state.s.settings.buildingAnimations==='reduced'||state.s.settings.reduced?650:2300);
    ex.history.push({type:'construction',id:d.id,time:Date.now(),cost});
    state.save();
    if($('dialog').open)ui.closeDialog();
    if(state.s.settings.notifications)ui.notice(`CONSTRUCTION STARTED · ${d.name}`);
    world.goal.set(d.x,0,d.z);
    world.goalSize=24;
    return true;
  }

  const originalInteract=ui.interact.bind(ui);
  ui.interact=function v5Interact(record){
    if(record.plot){
      landPanel(record.plot);
      return;
    }
    if(record.department){
      if(!isConstructed(record.department))return;
      this._activeDepartment=record.department;
      state.emit('sound',record.department.id==='quantum'?420:310);
    }
    originalInteract(record);
  };

  function showMachineInspector(i){
    const level=state.s.machines[i]||0,q=state.quote(i,1);
    const names=['Energy Collector','Ion Generator','Fusion Engine','Photon Processor','Dark Matter Drill','Quantum Reactor'];
    ui.dialog(`<div class="machine-inspector"><div class="eyebrow">MACHINE HALL</div><h2>${names[i]||`Machine ${i+1}`}</h2>
      <div class="machine-inspector-value"><span>OUTPUT</span><strong>${state.fmt(state.machineRate(i))}/s</strong></div>
      <div class="machine-inspector-meta"><div><span>LEVEL</span><b>${level}</b></div><div><span>MILESTONE</span><b>${state.milestone(level)}×</b></div><div><span>STATUS</span><b>${level?'RUNNING':'IDLE'}</b></div></div>
      <div class="actions"><button data-action="closedialog">Close</button><button class="primary" data-action="machinebuy" data-i="${i}" data-n="1" ${state.s.energy<q.cost||!q.n?'disabled':''}>UPGRADE · ${state.fmt(q.cost)} ENERGY</button></div>
    </div>`);
  }

  const originalAction=ui.action.bind(ui);
  ui.action=async function v5Action(data){
    const a=data.action;
    if(a==='quicksettings'){openPause('settings');return;}
    if(a==='pauseresume'){closePause();return;}
    if(a==='pausesettings'){openPause('settings');return;}
    if(a==='pausecontrols'){openPause('controls');return;}
    if(a==='pausehow'){openPause('how');return;}
    if(a==='pauseback'){openPause('menu');return;}
    if(a==='returntomenu'){returnToMenu();return;}
    if(a==='progressresetconfirm'){
      ui.dialog(`<h2>Reset all foundry progression?</h2><p>This will wipe owned land, constructed departments, upgrades, machines, missions, and resources. Your saved settings will be kept.</p><div class="actions"><button data-action="closedialog">Cancel</button><button class="danger" data-action="progressresetdo">RESET ALL PROGRESSION</button></div>`);
      return;
    }
    if(a==='progressresetdo'){resetProgression();ui.closeDialog();closePause();returnToMenu();return;}
    if(a==='settingsresetconfirm'){
      ui.dialog(`<h2>Reset settings to defaults?</h2><p>Your foundry progress will not be affected.</p><div class="actions"><button data-action="closedialog">Cancel</button><button class="danger" data-action="settingsresetdo">RESET SETTINGS</button></div>`);
      return;
    }
    if(a==='settingsresetdo'){resetSettings();ui.closeDialog();openPause('settings');return;}
    if(a==='landpurchase'){
      const d=plotById.get(data.id);
      if(!d)return;
      const cost=landCost(d);
      if(state.s.settings.confirmPurchases && cost>=10000){
        ui.dialog(`<div class="land-purchase-panel"><div class="eyebrow">CONFIRM PURCHASE</div><h2>Purchase this land?</h2><p>${d.hiddenName?'Expansion district':d.name} · ${state.fmt(cost)} ENERGY</p><div class="actions"><button data-action="closedialog">Cancel</button><button class="primary" data-action="landconfirm" data-id="${d.id}">PURCHASE</button></div></div>`);
      }else{
        if($('dialog').open)ui.closeDialog();
        performLandPurchase(d);
      }
      return;
    }
    if(a==='landconfirm'){
      const d=plotById.get(data.id);
      if($('dialog').open)ui.closeDialog();
      performLandPurchase(d);
      return;
    }
    if(a==='beginconstruction'){
      beginConstruction(plotById.get(data.id));
      return;
    }
    if(a==='improvefacility'){
      const d=plotById.get(data.id);
      if(!d||!isConstructed(d))return;
      const level=buildingLevel(d);
      if(level>=5)return;
      const base=Math.max(180,d.buildCost||180,d.landCost*.45);
      const cost=Math.round(base*Math.pow(1.75,level-1)*(1-constructionDiscount()));
      if(state.s.energy<cost)return;
      state.s.energy-=cost;
      ex.buildingLevels[d.id]=level+1;
      d.levelPulse=performance.now();
      syncBuildingStage(d);
      if(d.id==='factory')grantMachineAreas();
      state.xp(25*(level+1));
      state.recompute();
      state.save();
      world.sync();
      ui.notice(`${d.name} · Facility Level ${level+1}`);
      this.render();
      return;
    }
    if(a==='facilityupgrade'){
      const id=data.id,key=data.key,d=plotById.get(id);
      if(!d||!isConstructed(d)||!UPGRADE_KEYS[id]?.includes(key))return;
      const level=upgradeValue(id,key);
      const cap=Math.min(5,buildingLevel(d)+1);
      if(level>=cap)return;
      const cost=specializedCost(id,key);
      if(state.s.energy<cost)return;
      state.s.energy-=cost;
      ex.upgrades[id][key]=level+1;
      state.s.stats.purchases++;
      state.xp(12);
      state.recompute();
      state.save();
      ui.notice(`${d.name} · ${key.replace(/(^|_)(\w)/g,(_,a,b)=>' '+b.toUpperCase()).trim()} Lv ${level+1}`);
      this.render();
      return;
    }
    if(a==='globalbranch'){
      globalBranch=data.id in GLOBAL_BRANCHES?data.id:'production';
      globalSelected=Math.min(4,upgradeValue('upgrade',GLOBAL_BRANCHES[globalBranch].key));
      this.render();
      return;
    }
    if(a==='globalnode'){
      globalSelected=Math.max(0,Math.min(4,Number(data.index)||0));
      this.render();
      return;
    }
    if(a==='globalupgrade'){
      if(!isConstructed(plotById.get('upgrade')))return;
      const branch=GLOBAL_BRANCHES[data.id];
      if(!branch)return;
      const current=upgradeValue('upgrade',branch.key),index=Number(data.index);
      if(index!==current||current>=5)return;
      const cost=globalNodeCost(index);
      if(state.s.points<cost)return;
      state.s.points-=cost;
      ex.upgrades.upgrade[branch.key]=current+1;
      state.s.stats.purchases++;
      state.xp(10);
      state.recompute();
      state.save();
      globalSelected=Math.min(4,current+1);
      ui.notice(`${branch.label} engineering · ${current+1}/5`);
      this.render();
      return;
    }
    if(a==='startermachine'){
      if(!state.s.machines[0]){
        state.s.machines[0]=1;
        if(!state.s.skills['auto-0']){
          state.s.skills['auto-0']=1;
          if(!state.s.firstSkills.includes('auto-0'))state.s.firstSkills.push('auto-0');
        }
        state.s.stats.purchases++;
        state.recompute();
        state.xp(8);
        state.save();
        world.sync();
        ui.notice('Energy Collector online · production started');
        this.render();
      }
      return;
    }
    if(a==='factoryinspect'){showMachineInspector(Number(data.i));return;}
    if(a==='markettrade'){
      if(!isConstructed(plotById.get('market')))return;
      const amount=Math.max(0,Number(data.amount)||0),reward=Math.max(0,Number(data.reward)||0);
      if(state.s.energy<amount)return;
      state.s.energy-=amount;
      state.s.dust+=reward;
      state.save();
      ui.notice(`Market trade complete · +${reward} Stardust`);
      this.render();
      return;
    }
    if(a==='tutorialfocus'){
      const step=currentTutorial();
      if(!step)return;
      if(this.opened)this.close();
      if($('dialog').open)this.closeDialog();
      const d=plotById.get(step.target);
      if(d){
        world.goal.set(d.x,0,d.z);
        world.goalSize=23;
      }
      return;
    }
    if(a==='resetdo'){
      if($('resetText')?.value!=='RESET')return;
      try{localStorage.removeItem(V5_SAVE_KEY);}catch{}
      const result=await originalAction(data);
      state.s.expansion=freshExpansion();
      ex=state.s.expansion;
      normalizeExpansion();
      state.recompute();
      state.save();
      return result;
    }
    if(a==='importdo'){
      let raw=null;
      try{raw=JSON.parse($('saveText')?.value||'null');}catch{}
      const result=await originalAction(data);
      if(raw?.expansion&&typeof raw.expansion==='object'){
        state.s.expansion=raw.expansion;
        ex=state.s.expansion;
        normalizeExpansion();
      }
      if(raw?.settings&&typeof raw.settings==='object'){
        for(const key of Object.keys(LAND_SETTING_DEFAULTS)){
          if(raw.settings[key]!==undefined)state.s.settings[key]=raw.settings[key];
        }
      }
      state.recompute();
      state.save();
      world.sync();
      return result;
    }
    return originalAction(data);
  };

  // Tutorial teaches the land loop one action at a time.
  function currentTutorial(){
    const s=state.s;
    if(!s.settings.tutorial||s.rebirths>0)return null;
    const upgrade=plotById.get('upgrade');
    if(!s.machines[0]){
      if(ui.opened&&ui.page==='control')return {step:2,title:'START PRODUCTION',text:'Activate the Energy Collector. This is the only machine you need right now.'};
      return {step:1,title:'START YOUR FOUNDRY',text:'Select the Machine Workshop to begin production.',target:'factory',targetType:'building'};
    }
    if((s.machines[0]||0)<2){
      return {step:3,title:'IMPROVE PRODUCTION',text:'Upgrade your Energy Collector once. Production will continue automatically.'};
    }
    const firstCost=landCost(upgrade);
    if(!isOwned(upgrade)&&s.energy<firstCost){
      return {step:4,title:'EARN ENERGY',text:`Save ${state.fmt(firstCost)} Energy to purchase your first neighbouring land plot.`};
    }
    if(!isOwned(upgrade)){
      return {step:5,title:'EXPAND YOUR FOUNDRY',text:'You can now buy neighbouring land. Select the highlighted expansion plot.',target:'upgrade',targetType:'plot'};
    }
    if(ex.jobs.upgrade){
      return {step:6,title:'CONSTRUCTION UNDERWAY',text:'The Upgrade Lab is being built. New land physically changes the foundry.'};
    }
    if(!isConstructed(upgrade)){
      return {step:6,title:'BUILD THE UPGRADE LAB',text:'Your land is ready. Begin construction of the Upgrade Lab.',target:'upgrade',targetType:'plot'};
    }
    return {step:7,title:'FOUNDATION COMPLETE',text:'Every district adds a new system. Select the Upgrade Lab to see your global engineering upgrades.',target:'upgrade',targetType:'building'};
  }

  let lastTutorialKey='';
  function renderTutorial(force=false){
    if(!tutorialPanel)return;
    const step=currentTutorial();
    const key=step?`${step.step}:${step.title}:${step.target||''}:${step.targetType||''}`:'off';
    if(!force&&key===lastTutorialKey)return;
    lastTutorialKey=key;
    document.body.classList.toggle('tutorial-on',!!step);
    if(!step){tutorialPanel.classList.add('hidden');return;}
    tutorialPanel.classList.remove('hidden');
    tutorialStepEl.textContent=`${step.step}/7`;
    tutorialTitleEl.textContent=step.title;
    tutorialTextEl.textContent=step.text;
    tutorialShowEl.classList.toggle('hidden',!step.target);
  }

  function nextExpansionGoal(){
    const frontier=[...frontierPlots()].map(id=>plotById.get(id)).filter(Boolean);
    const ready=frontier.find(requirementsMet);
    if(ready){
      const cost=landCost(ready);
      return {
        label:'NEXT EXPANSION',
        text:`Save for ${ready.hiddenName?'new land':ready.name} · ${state.fmt(cost)} ENERGY`,
        percent:Math.min(100,state.s.energy/Math.max(1,cost)*100)
      };
    }
    const locked=frontier[0];
    if(locked){
      const unmet=requirements(locked).find(r=>!r.met);
      return {label:'NEXT MILESTONE',text:unmet?.text||'Continue developing your foundry.',percent:0};
    }
    return {label:'FOUNDRY DEVELOPMENT',text:`${ex.constructed.length} departments constructed · ${ex.owned.length} plots owned`,percent:100};
  }

  const originalPaint=ui.paint.bind(ui);
  ui.paint=function v5Paint(){
    originalPaint();
    $('energy').textContent=`${state.fmt(this.displayEnergy)}`;
    $('productionResource')?.classList.add('hidden');
    $('dustResource')?.classList.toggle('hidden',!(ex.constructed.includes('market')||ex.constructed.includes('archive')||ex.constructed.includes('arcade'))||state.s.dust<=0);
    $('coresResource')?.classList.toggle('hidden',!ex.constructed.includes('quantum'));
    const t=currentTutorial();
    if(!t&&!activities?.active){
      const goal=nextExpansionGoal();
      $('objectiveLabel').textContent=goal.label;
      $('objectiveText').textContent=goal.text;
      $('objectiveBar').style.width=`${goal.percent}%`;
    }
    const r=world.current;
    if(r?.plot){
      $('interactLabel').textContent=isOwned(r.plot)?(ex.jobs[r.plot.id]?'Construction site':'Owned land'):'Expansion plot';
      $('interactSub').textContent=isOwned(r.plot)?'Click for development options':requirementsMet(r.plot)?`${state.fmt(landCost(r.plot))} Energy · click to inspect`:'Click to view requirements';
    }else if(r?.department){
      $('interactLabel').textContent=displayName(r.department);
      $('interactSub').textContent=r.department.tooltip;
    }
    renderTutorial();
  };

  // Settings and pause system.
  let pausePage='menu';
  function applyUiSettings(){
    const s=state.s.settings;
    document.documentElement.style.setProperty('--ui-scale',String(Number(s.uiScale)||1));
    document.body.dataset.labelMode=s.buildingLabels||'always';
    document.body.classList.toggle('tutorial-large',s.tutorialSize==='large');
    document.body.classList.toggle('reduced',!!s.reduced);
    if(s.effects==='low'){s.particles=false;s.bloom=false;}
    else if(s.effects==='medium'){s.particles=true;s.bloom=false;}
    else {s.particles=true;s.bloom=true;}
    world.applySettings();
  }

  function selectSetting(label,key,options){
    const value=state.s.settings[key];
    return `<label class="pause-setting"><span>${label}</span><select data-v5-setting="${key}">${options.map(([v,n])=>`<option value="${v}" ${String(value)===String(v)?'selected':''}>${n}</option>`).join('')}</select></label>`;
  }
  function toggleSetting(label,key){
    return `<label class="pause-setting"><span>${label}</span><input type="checkbox" data-v5-setting="${key}" ${state.s.settings[key]?'checked':''}></label>`;
  }
  function rangeSetting(label,key,min,max,step){
    return `<label class="pause-setting range-setting"><span>${label}</span><input type="range" min="${min}" max="${max}" step="${step}" value="${state.s.settings[key]}" data-v5-setting="${key}" data-number="true"><b>${state.s.settings[key]}</b></label>`;
  }

  function settingsMarkup(){
    return `<div class="settings-sections">
      <section><h2>GENERAL</h2>${toggleSetting('Tutorial hints','tutorial')}${toggleSetting('Notifications','notifications')}${toggleSetting('Confirmation prompts','confirmPurchases')}${toggleSetting('Autosave indicator','autosaveIndicator')}</section>
      <section><h2>GRAPHICS</h2>${selectSetting('Graphics quality','quality',[['low','Low'],['medium','Medium'],['high','High'],['ultra','Ultra']])}${toggleSetting('Shadows','shadows')}${selectSetting('Effects','effects',[['low','Low'],['medium','Medium'],['high','High']])}${selectSetting('Building animations','buildingAnimations',[['on','On'],['reduced','Reduced']])}</section>
      <section><h2>AUDIO</h2>${rangeSetting('Master volume','master',0,1,.05)}${toggleSetting('Music playback','music')}${rangeSetting('Music volume','musicVolume',0,1,.05)}${rangeSetting('Sound effects','sfx',0,1,.05)}${toggleSetting('UI sounds','sound')}</section>
      <section><h2>CAMERA</h2>${rangeSetting('Pan sensitivity','sensitivity',.5,2,.1)}${rangeSetting('Zoom sensitivity','zoomSensitivity',.5,2,.1)}${rangeSetting('Rotation speed','rotationSpeed',.5,2,.1)}${toggleSetting('Edge scrolling','edgeScroll')}${toggleSetting('Camera shake','shake')}${toggleSetting('Smooth camera movement','smoothCamera')}</section>
      <section><h2>UI</h2>${selectSetting('UI scale','uiScale',[[.8,'80%'],[.9,'90%'],[1,'100%'],[1.1,'110%'],[1.2,'120%']])}${selectSetting('Building labels','buildingLabels',[['always','Always'],['hover','Hover'],['minimal','Minimal']])}${selectSetting('Tutorial size','tutorialSize',[['normal','Normal'],['large','Large']])}${selectSetting('Number formatting','numberFormat',[['compact','12.4K'],['full','12,400']])}${toggleSetting('Reduced motion','reduced')}</section>
    </div><div class="settings-footer"><button class="quiet-danger" data-action="progressresetconfirm">RESET ALL PROGRESSION</button><button class="danger quiet-danger" data-action="settingsresetconfirm">RESET TO DEFAULT</button></div>`;
  }

  function pauseMenuMarkup(){
    return `<div class="pause-menu-actions">
      <button class="primary" data-action="pauseresume">RESUME</button>
      <button data-action="pausesettings">SETTINGS</button>
      <button data-action="pausecontrols">CONTROLS</button>
      <button data-action="pausehow">HOW TO PLAY</button>
      <button class="quiet-danger" data-action="returntomenu">RETURN TO MENU</button>
    </div>`;
  }
  function controlsMarkup(){
    return `<div class="pause-page-copy"><h2>CONTROLS</h2><div class="control-list">
      <div><span>MOVE CAMERA</span><b>WASD / Arrow Keys</b></div>
      <div><span>PAN</span><b>Click & drag</b></div>
      <div><span>ZOOM</span><b>Mouse Wheel / Pinch</b></div>
      <div><span>ROTATE</span><b>Q / E</b></div>
      <div><span>SELECT</span><b>Left Click</b></div>
      <div><span>CLOSE / PAUSE</span><b>ESC</b></div>
    </div><button data-action="pauseback">← BACK</button></div>`;
  }
  function howMarkup(){
    const cards=[
      ['1','RUN YOUR MACHINES','Production creates Energy automatically.'],
      ['2','EARN ENERGY','Use income to improve production and save for land.'],
      ['3','UPGRADE FACILITIES','Each department has upgrades that match its purpose.'],
      ['4','BUY NEIGHBOURING LAND','Expansion plots unlock new development space.'],
      ['5','CONSTRUCT DEPARTMENTS','A system does not exist until its building is complete.'],
      ['6','EXPAND YOUR FOUNDRY','Choose what to build next and watch the world physically grow.']
    ];
    return `<div class="pause-page-copy"><h2>HOW TO PLAY</h2><div class="how-grid">${cards.map(c=>`<article><b>${c[0]}</b><h3>${c[1]}</h3><p>${c[2]}</p></article>`).join('')}</div><button data-action="pauseback">← BACK</button></div>`;
  }

  function openPause(page='menu'){
    if(!ui.started && $('welcome')&&!$('welcome').classList.contains('hidden'))return;
    pausePage=page;
    if(ui.opened)ui.close();
    if($('dialog').open)ui.closeDialog();
    pauseOverlay.classList.remove('hidden');
    document.body.classList.add('pause-open');
    world.paused=true;
    if(page==='settings'){pauseTitle.textContent='Settings';pauseBody.innerHTML=settingsMarkup();}
    else if(page==='controls'){pauseTitle.textContent='Controls';pauseBody.innerHTML=controlsMarkup();}
    else if(page==='how'){pauseTitle.textContent='How to Play';pauseBody.innerHTML=howMarkup();}
    else {pauseTitle.textContent='Paused';pauseBody.innerHTML=pauseMenuMarkup();}
  }

  function closePause(){
    pauseOverlay.classList.add('hidden');
    document.body.classList.remove('pause-open');
    world.paused=!ui.started||ui.opened||$('dialog').open;
  }

  function returnToMenu(){
    closePause();
    ui.started=false;
    world.paused=true;
    $('welcome').classList.remove('hidden');
  }

  const SETTING_DEFAULTS={
    tutorial:true,notifications:true,confirmPurchases:true,autosaveIndicator:true,
    quality:'high',shadows:true,effects:'high',buildingAnimations:'on',renderDistance:150,
    master:.4,musicVolume:.18,sfx:.5,sound:true,sensitivity:1,zoomSensitivity:1,rotationSpeed:1,
    edgeScroll:false,shake:true,smoothCamera:true,uiScale:1,buildingLabels:'always',
    tutorialSize:'normal',numberFormat:'compact',reduced:false
  };
  function resetSettings(){
    Object.assign(state.s.settings,SETTING_DEFAULTS);
    applyUiSettings();
    state.emit('audio-settings');
    state.save();
  }

  function resetProgression(){
    const keptSettings={...state.s.settings};
    const fresh=state.validate({settings:keptSettings});
    state.s=fresh;
    state.storageFailed=false;
    state.resetting=false;
    state.recompute();
    applyUiSettings();
    state.emit('audio-settings');
    state.emit('change');
    state.emit('world');
    state.save();
    world.paused=true;
    if(typeof world.sync==='function')world.sync();
    if(typeof ui.render==='function')ui.render();
    if(typeof ui.paint==='function')ui.paint();
  }

  document.addEventListener('change',event=>{
    const el=event.target.closest?.('[data-v5-setting]');
    if(!el)return;
    event.stopImmediatePropagation();
    const key=el.dataset.v5Setting;
    let value=el.type==='checkbox'?el.checked:el.value;
    if(el.dataset.number==='true'||['master','musicVolume','sfx','sensitivity','zoomSensitivity','rotationSpeed','uiScale','renderDistance'].includes(key))value=Number(value);
    state.s.settings[key]=value;
    if(key==='musicVolume' && value>0) state.s.settings.music=true;
    if(key==='effects'){
      state.s.settings.particles=value!=='low';
      state.s.settings.bloom=value==='high';
    }
    applyUiSettings();
    state.emit('audio-settings');
    state.save();
    if(pausePage==='settings')pauseBody.innerHTML=settingsMarkup();
  },true);

  // Universal ESC hierarchy. Capture prevents the legacy shortcut handler from
  // opening unrelated menus underneath the current layer.
  document.addEventListener('keydown',event=>{
    if(event.code!=='Escape')return;
    if(/INPUT|TEXTAREA|SELECT/.test(event.target.tagName))return;
    event.preventDefault();
    event.stopImmediatePropagation();
    if($('dialog').open){ui.closeDialog();return;}
    if(ui.opened){ui.close();return;}
    if(!pauseOverlay.classList.contains('hidden')){
      if(pausePage!=='menu'){openPause('menu');return;}
      closePause();return;
    }
    if(ui.started)openPause('menu');
  },true);

  // Suppress the old T/M/Tab global navigation shortcuts.
  document.addEventListener('keydown',event=>{
    if(/INPUT|TEXTAREA|SELECT/.test(event.target.tagName))return;
    if(event.code==='KeyT'||event.code==='KeyM'||event.code==='Tab'){
      if(event.code!=='Tab')event.preventDefault();
      event.stopImmediatePropagation();
    }
  },true);

  // Save indicator is informational and only flashes briefly.
  const originalSave=state.save.bind(state);
  let saveTimer=0;
  state.save=function v5Save(){
    originalSave();
    try {
      localStorage.setItem(V5_SAVE_KEY,JSON.stringify({version:5,expansion:ex,settings:state.s.settings}));
    } catch {}
    const el=$('saveStatus');
    if(!el||!state.s.settings.autosaveIndicator)return;
    el.classList.remove('hidden');
    clearTimeout(saveTimer);
    saveTimer=setTimeout(()=>el.classList.add('hidden'),900);
  };

  function applyLabelMode(){
    const mode=state.s.settings.buildingLabels||'always';
    document.body.dataset.labelMode=mode;
  }
  applyUiSettings();
  applyLabelMode();
  state.recompute();

  // Initial camera framing grows with the purchased world.
  const builtCount=ex.constructed.length;
  const startZoom=Math.min(52,25+Math.max(0,builtCount-1)*2.2);
  world.goal.set(0,0,2.0);
  world.target.copy(world.goal);
  world.goalSize=startZoom;
  world.size=Math.min(world.size,startZoom);
  world.frame();

  // Complete any construction that finished while the player was away.
  completeJobs();
  updateWorldVisuals(.4);
  renderTutorial(true);
  ui.nav();
  if(ui.opened)ui.render();
  world.sync();
}
