# Nova Foundry — Overlook v5.1

A bird’s-eye foundry management game where land ownership, construction and facility upgrades physically grow the player's industrial complex.

## Play

Extract the ZIP and open `index.html` in a modern desktop browser with WebGL enabled. A ready-to-play bundle is included; no build step is required.

## Expansion loop

The core progression is now:

**Earn Energy → Buy land → Construct a department → Upgrade it → Unlock new expansion choices**

A new save owns only the starter district with the Energy Core and Machine Workshop. Other departments do not exist until their plots are purchased and, where required, construction is completed.

Nearby land appears as natural undeveloped property with lightweight boundaries and purchase signage. Only relevant frontier plots are surfaced at a time so late-game systems are not spoiled or shown as a wall of locked buildings.

Early expansion is guided through the Engineering Plot (Upgrade Lab) and Operations Plot (Mission Control). After onboarding, additional districts become strategic choices such as Logistics (Warehouse) and Personnel (Worker Office), followed by Research, Marketplace and later specialist/end-game districts.

## Facility upgrades

Each constructed department owns its own upgrade system. Hidden or unconstructed facilities have no active bonuses and no upgrade UI.

Examples include:

- Machine Workshop / Hall — Output, Speed and Reliability.
- Warehouse — storage racks, floor space, sorting and cargo handling.
- Worker Office — Staff, Training and Management.
- Research Centre — research Speed, Efficiency and Quality.
- Mission Control — contract Quality, Slots and Refresh.
- Marketplace — Negotiation, Bulk Trading and Market Intelligence.
- Archive, Arcade, Treasury and Quantum Facility — dedicated specialist upgrades.
- Upgrade Lab — global Production, Energy, Infrastructure and Expansion improvements.

Major facility levels visibly add building details using explicit model tiers. Old levels are not duplicated inside new models.

## Land and construction

Land ownership, construction status, building level, building upgrades and construction jobs are persisted. Purchase actions are guarded so the same plot or facility cannot be purchased repeatedly while a transaction is processing.

Buying land changes the world: undeveloped visuals are removed, maintained ground appears, access paths/power connections extend, and a construction site can replace the empty plot. Completed construction activates the department and its gameplay bonuses.

## Tutorial

The onboarding is a large seven-step panel that teaches one action at a time:

1. Select the Machine Workshop.
2. Start production.
3. Improve the first machine.
4. Earn enough Energy to expand.
5. Purchase the Engineering Plot.
6. Complete construction.
7. Open the new Upgrade Lab.

The tutorial highlights only the current target and can focus the camera with **Show Me**.

## HUD, pause and settings

The permanent HUD is intentionally minimal. Locked currencies remain hidden until relevant.

- The top-right gear opens the same Settings system used by the pause menu.
- `Esc` closes the highest-priority interface first: confirmation/dialog → building interface → pause/settings subpage → pause menu.
- Pressing `Esc` in the normal world opens Pause.
- Settings include General, Graphics, Audio, Camera and UI categories and persist between sessions.
- UI scale, label density, tutorial size, number formatting and reduced motion are supported.

## Controls

- **Left click** — select land/buildings and UI actions.
- **Drag empty ground** — pan.
- **WASD / Arrow keys** — move the camera.
- **Mouse wheel / pinch** — zoom.
- **Q / E** — rotate.
- **Esc** — close/back/pause.

## Saving

The existing game save remains compatible. v5 also stores the supplemental land/facility/settings state in browser storage so the shipped prebuilt runtime preserves the new progression data. Export/import continues to carry the main save, while the v5 layer restores supported expansion/settings fields during import when present.

## Project layout

- `index.html` — offline entry point and minimal HUD/pause shells.
- `assets/game.js` — prebuilt base runtime.
- `assets/redesign.js` — v5 land, facility, tutorial and settings runtime layer.
- `assets/style.css` — base and responsive v5 styling.
- `src/` — maintainable source modules with v5 state/redesign integration.
- `package.json` / `package-lock.json` — development dependencies.
- `THIRD-PARTY-LICENSES.txt` — dependency license notices.

## Development build

With Node.js available:

```bash
npm ci
npm run build
```

The source build bundles `src/main.js`, including the v5 redesign, into `assets/game.js`. The redesign uses a runtime guard so the standalone `assets/redesign.js` layer does not apply twice.

## v5.1 polish

- Energy is the sole visible primary currency.
- Expansion plots and departments are spaced farther apart.
- Land purchase dialogs no longer show horizontal scrollbars.
- Settings includes a confirmed **Reset All Progression** action that preserves settings.
