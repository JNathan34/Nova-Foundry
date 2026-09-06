# Nova Foundry — Overlook v3

A bird’s-eye, point-and-click edition of Nova Foundry, with a tidy garden campus inspired by the supplied farm reference. Built with original procedural 3D scenery.

## Play

Extract the entire ZIP, then open `index.html` in a modern desktop browser with WebGL enabled. Keep `assets` alongside it. No installation, account, internet connection or build step is required. Touch layouts are included; a desktop browser is the easiest way to open the downloaded game.

## Controls

- Click or tap the reactor to earn energy, and buildings, machines, people or shards to interact.
- Drag empty ground to pan. Scroll or pinch to zoom; the on-screen +/− buttons also work.
- Origin returns to your starting plot. All plots shows the campus. Use the Map menu to focus an unlocked plot.
- Arrow keys pan, Home returns to Origin, T opens Skills, M opens Map, and Tab opens the menu.
- In Skills, choose one branch at a time, drag to explore it and select a node to read its requirements and buy upgrades.

## What changed

The walking camera has been replaced with a fixed overhead camera. The lighter interface uses larger text, clearer contrast and fewer simultaneous controls. Paths and buildings organize each plot. Minigames now use direct clicks or a pointer-controlled tray; Reactor Relay replaces the walking obstacle course. The progression systems, 134 skill nodes, machines, ten sectors, missions, achievements and prestige layers are retained.

## Saving and existing progress

Progress autosaves every five seconds in the browser. Use Settings → Export to keep a portable backup. To move progress from the previous 3D edition, export there and import here through Settings. The v2 save format is supported; camera settings use the new overhead view. Classic v1 imports retain transferable currency and XP. Browser storage availability depends on the browser and file location, so use an exported backup when moving the game.

## Project layout

- `index.html` — offline game entry point.
- `assets/style.css` — game styling.
- `assets/game.js` — prebuilt browser bundle used by `index.html`.
- `src/` — maintainable source modules used to produce the bundle.
- `package.json` / `package-lock.json` — reproducible development dependencies.
- `THIRD-PARTY-LICENSES.txt` — dependency license notices.

## Source and build

`src/` contains the seven source modules. `assets/game.js` is the ready-to-play bundled build. For development, install Node.js and run `npm ci`, then `npm run build` from this folder. Dependency licenses are in `THIRD-PARTY-LICENSES.txt`.
