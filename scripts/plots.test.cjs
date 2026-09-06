const { chromium } = require(process.env.PLAYWRIGHT_PATH || 'playwright');
const { pathToFileURL } = require('node:url');
const path = require('node:path');
const fs = require('node:fs');
const assert = require('node:assert/strict');

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 960 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(pathToFileURL(path.resolve('index.html')).href + '?qa');
    await page.waitForFunction(() => window.__NOVA?.world.lots);
    await page.locator('#enter').click();
    await page.waitForTimeout(700);
    const lots = await page.evaluate(() => __NOVA.world.lots.map(l => ({
      id: l.id, x: l.parent.position.x, z: l.parent.position.z, width: l.width, depth: l.depth
    })));
    assert.equal(lots.length, 23);
    assert.equal(new Set(lots.map(l => l.id)).size, 23);
    for (let i = 0; i < lots.length; i++) for (let j = i + 1; j < lots.length; j++) {
      const a = lots[i], b = lots[j];
      assert(Math.abs(a.x - b.x) >= (a.width + b.width) / 2 || Math.abs(a.z - b.z) >= (a.depth + b.depth) / 2, `Overlapping plots: ${a.id}, ${b.id}`);
    }
    fs.mkdirSync('test-results', { recursive: true });
    await page.screenshot({ path: 'test-results/plots-desktop.png' });
    const project = async id => page.evaluate(id => {
      const w = __NOVA.world, lot = w.lots.find(l => l.id === id), p = lot.parent.position.clone();
      p.y += 1;
      p.project(w.camera);
      return { x: (p.x * .5 + .5) * innerWidth, y: (-p.y * .5 + .5) * innerHeight };
    }, id);
    // Department and generator structures, and their grounds, retain their own actions.
    let p = await project('department-upgrade');
    await page.mouse.click(p.x, p.y);
    assert.equal(await page.evaluate(() => __NOVA.ui.page), 'tree');
    await page.evaluate(() => __NOVA.ui.close());
    await page.waitForTimeout(800);
    p = await project('generator-1');
    await page.mouse.click(p.x, p.y);
    assert(await page.locator('#dialog').isVisible());
    assert((await page.locator('#dialog').innerText()).includes('Generator Hall'));
    await page.evaluate(() => __NOVA.ui.closeDialog());
    await page.evaluate(() => {
      const { state, world } = __NOVA;
      state.s.energy = 10000;
      state.s.skills['auto-0'] = 1;
      state.s.areas.push('generator');
      state.recompute();
      world.sync();
      state.buyMachine(1, 1);
    });
    assert.equal(await page.evaluate(() => __NOVA.world.generatorLots[1].record.action), 'machine');
    assert(await page.evaluate(() => __NOVA.world.generatorLots[1].machine.userData.built.visible));
    await page.evaluate(() => __NOVA.world.teleport('generator'));
    assert.deepEqual(await page.evaluate(() => [__NOVA.world.goal.x, __NOVA.world.goal.z]), [-12, 22]);
    // Move the whole plot, save it, and verify export/import validation preserves it.
    await page.evaluate(async () => {
      const { ui, state, world } = __NOVA;
      await ui.action({ action: 'plotedit' });
      const d = world.lots.find(l => l.id === 'department-admin');
      let record;
      d.parent.traverse(o => { record ||= o.userData?.interactable; });
      ui.interact(record);
      state.emit('groundclick', { x: -24, z: -18 });
      await ui.action({ action: 'plotdone' });
    });
    assert.deepEqual(await page.evaluate(() => __NOVA.state.s.plotLayout.admin), [-24, -18]);
    await page.reload();
    await page.waitForFunction(() => window.__NOVA?.world.lots);
    assert.deepEqual(await page.evaluate(() => __NOVA.state.s.plotLayout.admin), [-24, -18]);
    assert.deepEqual(await page.evaluate(() => {
      const g = __NOVA.world.lots.find(l => l.id === 'department-admin').parent;
      return [g.position.x, g.position.z];
    }), [-24, -18]);
    await page.locator('#enter').click();
    await page.setViewportSize({ width: 390, height: 844 });
    await page.keyboard.press('Home');
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'test-results/plots-mobile.png' });
    assert.deepEqual(errors, []);
    console.log('PASS: 23 unique non-overlapping plots, real building clicks, locked generator access, construction, travel focus, plot movement, save reload, mobile rendering.');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
