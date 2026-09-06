# Nova Foundry — Overlook v4

A bird’s-eye foundry management game with world-based navigation and progressive facility expansion.

## Play

Extract the ZIP and open `index.html` in a modern desktop browser with WebGL enabled. The ready-to-play bundle is included; no build step is required.

## Core redesign

The foundry now starts small instead of presenting the entire game at once.

- Level 1: Machine Hall, Upgrade Lab and Mission Control.
- Level 3: Warehouse.
- Level 5: Worker Office.
- Level 7: Research Centre.
- Level 10: Marketplace.
- Level 12: Foundry Archive.
- Level 15: Arcade.
- Level 18: Treasury.
- Level 20 / late-game prestige progress: Quantum Facility.

Only the next two future construction plots are shown. Newly unlocked facilities rise into place and briefly receive camera focus, so expansion is visible in the world instead of appearing as a new menu button.

Administration is no longer a separate building. Settings, achievements, statistics, challenges, the facility map and daily supplies are secondary services inside Mission Control. Drones remain attached to the Marketplace.

## Tutorial

New players receive a six-step, large-format tutorial that teaches only the core loop:

1. Select Machine Hall.
2. Start the first Energy Collector.
3. Observe automatic production.
4. Visit Upgrade Lab.
5. Purchase an upgrade.
6. Visit Mission Control.

The tutorial highlights one target at a time and disappears once the player reaches Mission Control. Existing progressed saves are not forced through early onboarding.

## Upgrade Lab

The main skill tree has been rebuilt around large, spaced nodes and a separate detail panel. Early play shows three clear categories:

- Production
- Speed
- Efficiency

Advanced categories appear later. Only one category is visible at a time, and additional nodes reveal as Foundry Level increases. Quantum and Ascension trees retain their existing endgame behavior.

## Controls

- Click a building to open its department.
- Drag empty ground to pan.
- Scroll or pinch to zoom.
- Hold Alt to reveal extra building status.
- Home returns the camera to Origin.
- Esc closes the current department.

## Saving

Progress autosaves in browser storage. Exporting a save from Mission Control → Settings remains the safest way to move progress between browsers or machines. Existing v3 saves remain compatible because the redesign derives facility unlocks from existing progression rather than changing the save schema.

## Project layout

- `index.html` — offline entry point.
- `assets/game.js` — prebuilt base runtime.
- `assets/redesign.js` — progressive building/navigation layer.
- `assets/style.css` — responsive UI styling.
- `src/` — maintainable source modules.
- `package.json` / `package-lock.json` — development dependencies.
- `THIRD-PARTY-LICENSES.txt` — dependency license notices.

## Development build

With Node.js available, install dependencies and run:

```bash
npm ci
npm run build
```

The shipped `index.html` loads the prebuilt base runtime and then attaches the progressive redesign layer from `assets/redesign.js`. The redesign has a guard, so a future development build that bundles `src/redesign.js` will not apply it twice.
