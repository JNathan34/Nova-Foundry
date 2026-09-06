# Nova Foundry — Facility Command v3.1

A bird’s-eye management / tycoon redesign of Nova Foundry. The facility itself is now the primary navigation: select buildings in the world to manage their systems instead of using a permanent simulator-style sidebar.

## Play

Extract the entire ZIP, then open `index.html` in a modern desktop browser with WebGL enabled. Keep the `assets` folder beside `index.html`. The ready-to-play build runs locally with no account or server required.

## Management controls

- **WASD / Arrow keys** — pan around the facility with smoothed movement.
- **Mouse wheel / pinch** — smooth zoom.
- **Middle mouse drag** — pan the camera.
- **Right mouse drag** — rotate the facility view.
- **Q / E** — rotate in small increments.
- **Click a building** — focus it and open its purpose-built management interface.
- **Click empty terrain** — deselect the active building.
- **Escape** — close the current building interface.
- **Home / HQ button** — return to the starting facility.
- **Facility button** — zoom out to the campus overview.

## Buildings are navigation

The main facility systems are represented physically in the world:

- Headquarters — progression and facility overview.
- Bank — income, lifetime earnings and offline-capacity dashboard.
- Upgrade Lab — interactive branching skill tree.
- Factory — production chain, machine output and upgrades.
- Worker Office — specialist hiring, assignment and training.
- Research Centre — timed technology projects.
- Warehouse — resource inventory and storage infrastructure.
- Marketplace — resource exchange and market sentiment.
- Rebirth Chamber — run reset, permanent rewards and prestige progression.
- Arcade — minigame selection and token exchange.
- Skin Store — reactor cosmetic showroom.

Additional systems such as daily supplies and NPC assignments remain world interactions rather than permanent HUD buttons.

## Visual redesign

The game now uses a dark industrial facility presentation with compact top HUD pills, subtle building accents, restrained hover/selection feedback, camera focus on selection, responsive centred management panels, and significantly less permanent screen UI. The old left-side navigation dock is removed from normal gameplay.

## Saving and progress

Progress autosaves every five seconds in the browser. Settings still includes manual save, export and import tools. Existing v2 saves remain supported.

## Source and build

`src/` contains the editable source modules. `assets/game.js` is the retained ready-to-play bundle and `assets/redesign.js` applies the Facility Command runtime redesign so the downloaded build works without a local Node build step. For source development, install Node.js dependencies and run `npm run build`.

Dependency licenses are listed in `THIRD-PARTY-LICENSES.txt`.
