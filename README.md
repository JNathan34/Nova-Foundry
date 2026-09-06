# Nova Foundry — Overlook v3

A bird’s-eye, point-and-click edition of Nova Foundry, with a tidy garden campus inspired by the supplied farm reference. Built with original procedural 3D scenery.

## Play

Extract the entire ZIP, then open `index.html` in a modern desktop browser with WebGL enabled. Keep `assets` alongside it. No installation, account, internet connection or build step is required. Touch layouts are included; a desktop browser is the easiest way to open the downloaded game.

## Controls

- Click or tap the reactor to earn energy. Click a department building to open that system.
- Drag empty ground to pan. Scroll or pinch to zoom.
- Arrow keys pan and Home returns to the Origin core.
- Hold Alt to reveal extra status text above department buildings.
- Esc closes the active department.
- In the Upgrade Lab, drag the skill tree to explore it and select nodes to inspect or buy upgrades.
- Every department building, generator and the central reactor has its own bordered, labelled plot. Roads separate the lots; generators occupy two dedicated production rows.
- Open Administration → Arrange building plots to relocate a department together with its plot. Select the building, then click clear ground. Done or Esc exits arrangement mode; Reset layout restores the original arrangement. Arrangements autosave and are included in exports.
- Locked generator plots remain visible. Click one to inspect its unlock requirements; clicking an unlocked plot opens that generator’s controls. Sector-map travel focuses the corresponding generator plot.

## What changed

The permanent system sidebar has been removed. The foundry itself is now the navigation layer: Upgrade Lab, Machine Hall, Mission Control, Foundry Archive, Arcade, Research Centre, Worker Office, Warehouse, Marketplace, Treasury, Quantum Facility and Administration each open their own department interface. The persistent HUD is limited to foundry level and core resources, while department panels use a dark management-game visual language and keep the world visible behind them.

The fixed overhead camera, minigames, progression systems, 134 skill nodes, machines, ten sectors, missions, achievements, saving and prestige layers are retained.

## Saving and existing progress

Progress autosaves every five seconds in the browser. Use Administration → Settings → Export to keep a portable backup. To move progress from the previous 3D edition, export there and import here through Administration → Settings. The v2 save format is supported; camera settings use the new overhead view. Classic v1 imports retain transferable currency and XP. Browser storage availability depends on the browser and file location, so use an exported backup when moving the game.

## Project layout

- `index.html` — offline game entry point.
- `assets/style.css` — game styling.
- `assets/game.js` — prebuilt browser bundle used by `index.html`.
- `assets/redesign.js` — runtime department/building navigation layer for the prebuilt bundle.
- `src/` — maintainable source modules used to produce the bundle, including `redesign.js`.
- `package.json` / `package-lock.json` — reproducible development dependencies.
- `THIRD-PARTY-LICENSES.txt` — dependency license notices.

## Source and build

`src/` contains the source modules, including the building-navigation redesign layer. `assets/game.js` is the ready-to-play bundled build. For development, install Node.js and run `npm ci`, then `npm run build` from this folder. Dependency licenses are in `THIRD-PARTY-LICENSES.txt`.

`src/plots.js` manages the independent lots, generator placement and saved department arrangements. The plot regression check is `node scripts/plots.test.cjs`; it requires Playwright and Microsoft Edge. Set `PLAYWRIGHT_PATH` to an existing Playwright package directory if it is not installed locally. The check verifies non-overlap, real building clicks, generator unlocks/construction, camera travel, rearrangement, save reloads and mobile rendering.
