import { MACHINES, AREAS, SAVE_KEY } from './data.js';

/** Separate, independently interactive lots for every department and generator. */
export function applyPlots({ world, state, ui }, departments) {
  const Group = world.core.constructor;
  const lots = [];

  function lot(parent, id, name, accent, width = 7.2, depth = 6.6) {
    const ground = new Group();
    ground.userData.plotId = id;
    ground.userData.plotName = name;
    parent.add(ground);
    const surface = world.box(ground, 0, -.15, 0, width, .18, depth, '#35443d');
    world.box(ground, 0, -.035, 0, width - .3, .06, depth - .3, '#26332e');
    for (const x of [-width / 2, width / 2]) {
      world.box(ground, x, .015, 0, .09, .12, depth, '#829083');
    }
    // A break in the front boundary is the entrance to this particular lot.
    world.box(ground, 0, .015, -depth / 2, width, .12, .09, '#829083');
    for (const sign of [-1, 1]) {
      world.box(ground, sign * (width / 4 + .45), .015, depth / 2, width / 2 - .9, .12, .09, '#829083');
      world.box(ground, sign * .9, .13, depth / 2, .16, .3, .16, accent, true);
    }
    world.box(ground, 0, -.015, depth / 2 + .45, 1.65, .06, .9, '#667267');
    const label = world.label(ground, name.toUpperCase(), 0, .3, depth / 2 - .48, width - .6);
    label.material.opacity = .85;
    lots.push({ id, name, parent, ground, surface, width, depth });
    return ground;
  }

  // Remove the former shared sector slabs/fences, keeping gameplay objects alive.
  for (const area of AREAS) {
    const base = world.plotGroups[area.id];
    for (const child of base.children) {
      if (child !== world.areaGroups[area.id]) child.visible = false;
    }
  }
  // The old connecting path segments no longer lead to the relocated sectors.
  for (const object of world.scene.children) {
    if (object.isMesh && object.geometry === world.geometry.box && Math.abs(object.position.y + .03) < .001) object.visible = false;
  }

  for (const d of departments) {
    d.x = Math.abs(d.x) > 10 ? Math.sign(d.x) * 18 : Math.sign(d.x) * 6;
    d.z = d.z > 4 ? 10 : d.z < -4 ? -10 : 0;
    d.group.position.set(d.x, 0, d.z);
    const ground = lot(d.group, `department-${d.id}`, d.name, d.accent);
    ground.traverse(mesh => {
      if (mesh.isMesh) mesh.userData.interactable = d.record;
    });
    d.plot = ground;
  }

  // Each generator has its own lot, including generators not yet unlocked.
  // Positioning is independent of the old sector groups so nothing shares a slab.
  const generatorLots = world.machineGroups.map((machine, i) => {
    const definition = MACHINES[i];
    const x = (i % 5 - 2) * 12;
    const z = 22 + Math.floor(i / 5) * 14;
    world.scene.attach(machine);
    machine.position.set(x, 0, z);
    machine.children.filter(child => child.isSprite).forEach(child => child.visible = false);
    const plot = lot(machine, `generator-${i}`, definition.name, '#c7b777', 9.3, 9);
    let record;
    machine.traverse(mesh => { record ||= mesh.userData?.interactable; });
    plot.traverse(mesh => { if (mesh.isMesh) mesh.userData.interactable = record; });
    // Existing unlock requirements still apply when a locked lot is clicked.
    const lockedSign = world.label(plot, 'LOCKED PLOT', 0, 2.4, 0, 3.8);
    const entry = { machine, plot, record, i, area: definition.area, lockedSign };
    return entry;
  });

  const corePlot = lot(world.core, 'reactor', 'Central reactor', '#7dbbb1', 4.3, 5.8);
  let coreRecord;
  world.core.traverse(mesh => { coreRecord ||= mesh.userData?.interactable; });
  corePlot.traverse(mesh => { if (mesh.isMesh) mesh.userData.interactable = coreRecord; });

  // Shared roads stay outside the individual plot boundaries.
  const roads = new Group();
  world.scene.add(roads);
  for (const z of [-14.4, -5, 5, 14.4]) {
    world.box(roads, 0, -.16, z, 47, .06, 1.15, '#657365');
  }
  for (const x of [-24, -12, 12, 24]) world.box(roads, x, -.16, 0, 1.15, .06, 29, '#657365');
  for (const z of [16, 29, 42]) world.box(roads, 0, -.16, z, 60, .06, 1.4, '#657365');
  for (const x of [-30, -18, -6, 6, 18, 30]) {
    world.box(roads, x, -.16, 29, 1.15, .06, 26, '#657365');
  }
  world.box(roads, 0, -.16, 14.2, 2, .06, 3.7, '#657365');
  world.box(roads, 0, -.16, 43, 60, .06, 1, '#47584b');

  // Keep collectible shards and sector NPCs beside the generator they belong to.
  for (let i = 0; i < world.shards.length; i++) {
    const area = AREAS[Math.floor(i / 5)].id;
    const entry = generatorLots.find(g => g.area === area);
    if (entry) world.shards[i].position.set(entry.machine.position.x - 3.2 + (i % 5) * 1.6, .5, entry.machine.position.z - 3.5);
  }
  world.npcs.forEach((npc, i) => {
    world.scene.attach(npc);
    const entry = generatorLots[[0, 3, 2, 6][i] || 0];
    npc.position.set(entry.machine.position.x + 3, 0, entry.machine.position.z + 2.5);
  });

  function syncLots() {
    for (const area of AREAS) world.plotGroups[area.id].userData.sealed.visible = false;
    for (const entry of generatorLots) {
      const unlocked = state.s.areas.includes(entry.area);
      entry.machine.visible = true;
      entry.machine.userData.built.visible = unlocked && state.s.machines[entry.i] > 0;
      entry.machine.userData.scaffold.visible = !entry.machine.userData.built.visible;
      entry.machine.userData.scaffold.children.filter(child => child.isSprite).forEach(child => child.visible = unlocked);
      entry.lockedSign.visible = !unlocked;
      entry.record.action = unlocked ? 'machine' : 'locked';
      entry.record.data = unlocked ? entry.i : entry.area;
      entry.record.label = `${MACHINES[entry.i].name} · ${unlocked ? 'dedicated generator plot' : 'locked plot'}`;
      entry.plot.userData.unlocked = unlocked;
    }
    world.renderer.shadowMap.needsUpdate = true;
  }
  const originalSync = world.sync.bind(world);
  world.sync = () => { originalSync(); syncLots(); applyLayout(); };
  syncLots();

  const districtSize = () => Math.max(64, 61 / (innerWidth / innerHeight));
  const originalTeleport = world.teleport.bind(world);
  world.teleport = id => {
    originalTeleport(id);
    const generator = generatorLots.find(g => g.area === id);
    if (id === 'lab') {
      world.goal.set(0, 0, 12);
      world.goalSize = districtSize();
    } else if (generator) {
      world.goal.copy(generator.machine.position);
      world.goalSize = 22;
    }
  };
  world.goal.set(0, 0, 12);
  world.target.copy(world.goal);
  world.size = world.goalSize = districtSize();
  world.frame();
  world.resize();
  // The base camera previously stopped at the old campus boundary.
  const originalUpdate = world.update.bind(world);
  world.update = dt => {
    originalUpdate(dt);
    world.goal.z = Math.max(-45, Math.min(48, world.goal.z));
  };
  world.lots = lots;
  world.generatorLots = generatorLots;

  // Administration exposes a temporary arrangement toolbar. Lots move as units.
  const defaults = new Map(departments.map(d => [d.id, [d.x, d.z]]));
  function validatedLayout(value) {
    const result = {};
    for (const d of departments) {
      const p = value?.[d.id];
      if (Array.isArray(p) && p.length === 2 && p.every(Number.isFinite) && Math.abs(p[0]) <= 24 && p[1] >= -18 && p[1] <= 12) {
        result[d.id] = p;
      }
    }
    const rectangles = departments.map(d => ({
      x: result[d.id]?.[0] ?? defaults.get(d.id)[0],
      z: result[d.id]?.[1] ?? defaults.get(d.id)[1], width: 7.2, depth: 6.6
    }));
    rectangles.push({ x: 0, z: -2, width: 4.3, depth: 5.8 });
    for (let i = 0; i < rectangles.length; i++) for (let j = i + 1; j < rectangles.length; j++) {
      const a = rectangles[i], b = rectangles[j];
      if (Math.abs(a.x - b.x) < (a.width + b.width) / 2 && Math.abs(a.z - b.z) < (a.depth + b.depth) / 2) return {};
    }
    return result;
  }
  const originalValidate = state.validate.bind(state);
  state.validate = raw => {
    const parsed = originalValidate(raw);
    parsed.plotLayout = validatedLayout(raw.plotLayout);
    return parsed;
  };
  try {
    const stored = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null');
    state.s.plotLayout = validatedLayout(stored?.plotLayout);
  } catch { state.s.plotLayout = {}; }
  function applyLayout() {
    for (const d of departments) {
      const p = state.s.plotLayout?.[d.id] || defaults.get(d.id);
      [d.x, d.z] = p;
      d.group.position.set(d.x, 0, d.z);
    }
    world.renderer.shadowMap.needsUpdate = true;
  }
  applyLayout();
  let arranging = false;
  let selected = null;
  const originalAdmin = ui.adminView.bind(ui);
  ui.adminView = () => `<div class="plot-arrange-entry"><button data-action="plotedit">Arrange building plots</button><span>Each building and generator has its own dedicated lot.</span></div>${originalAdmin()}`;
  const originalAction = ui.action.bind(ui);
  function finishArrange() {
    arranging = false;
    selected = null;
    document.getElementById('plotToolbar')?.remove();
    state.save();
  }
  ui.action = async data => {
    if (data.action === 'plotedit') {
      ui.close();
      arranging = true;
      const bar = document.createElement('div');
      bar.id = 'plotToolbar';
      bar.innerHTML = '<span id="plotHint">Select a department, then click clear ground to move its plot.</span><button data-action="plotreset">Reset layout</button><button data-action="plotdone">Done</button>';
      document.body.append(bar);
      return;
    }
    if (data.action === 'plotdone') { finishArrange(); return; }
    if (data.action === 'plotreset') { state.s.plotLayout = {}; applyLayout(); selected = null; state.save(); return; }
    return originalAction(data);
  };
  const originalInteract = ui.interact.bind(ui);
  ui.interact = record => {
    if (arranging) {
      if (record.department) {
        selected = record.department;
        document.getElementById('plotHint').textContent = `Move ${selected.name}: click clear ground in the administration district.`;
      } else ui.notice('Generator plots stay in the production district. Select a department to move.');
      return;
    }
    return originalInteract(record);
  };
  state.on((type, point) => {
    if (type !== 'groundclick' || !arranging || !selected || !point) return;
    const x = Math.round(point.x), z = Math.round(point.z);
    if (Math.abs(x) > 24 || z < -18 || z > 12) { ui.notice('Keep departments inside the administration district.'); return; }
    const blocked = lots.some(other => {
      if (other.parent === selected.group) return false;
      const p = other.parent.position;
      return Math.abs(x - p.x) < (7.2 + other.width) / 2 + .6 && Math.abs(z - p.z) < (6.6 + other.depth) / 2 + .6;
    });
    if (blocked) { ui.notice('Leave room between this plot and its neighbours.'); return; }
    state.s.plotLayout ??= {};
    state.s.plotLayout[selected.id] = [x, z];
    applyLayout();
    selected = null;
    state.save();
    document.getElementById('plotHint').textContent = 'Plot moved. Select another department, or choose Done.';
  });
  document.addEventListener('keydown', event => { if (event.code === 'Escape' && arranging) finishArrange(); });

  const originalPaint = ui.paint.bind(ui);
  ui.paint = () => {
    originalPaint();
    if (state.fx.automation && !state.s.machines[0]) {
      document.getElementById('objectiveLabel').textContent = 'YOUR FIRST GENERATOR PLOT';
      document.getElementById('objectiveText').textContent = 'Click the Energy collector plot in the generator district, or manage it from the Machine Hall.';
    }
  };
}
