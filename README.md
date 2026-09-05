# Nova Foundry 3D — Origin Protocol v2.0

## Play

Extract the entire ZIP, then open **index.html** in Chrome, Edge or Firefox.
Keep the `assets` folder beside it. No install, server, account or internet connection is needed to play. The browser must support WebGL 2 with graphics acceleration enabled.

Click **Enter the facility**, then click the world to capture the mouse. If mouse capture is unavailable, hold the right mouse button to look around.

| Control | Action |
|---|---|
| WASD | Move |
| Mouse | Look |
| Shift | Sprint |
| Space | Jump |
| C | Crouch |
| E / left click | Interact with the object you are aiming at |
| T | Skill tree |
| Tab | Command menu |
| M | Facility map |
| V | First-person / third-person camera |
| Esc | Release mouse / close menu |

Touch controls are included. Desktop is the primary play experience.

## Your first few minutes

1. Walk toward the reactor and press E to generate energy.
2. Open the skill tree with T. Spend your starting Skill Point on **Basic automation**, or choose a manual-energy path and earn another point by levelling up.
3. Approach the Energy collector to the reactor's right. Press E and build it for 20 energy.
4. Buy **Facility expansion** in Exploration and earn 250 energy this run. The Generator Hall door opens automatically.
5. Unlock **Offline production** to earn energy while away. Explore for shards and talk to the Chief Engineer.

## Included systems

- A walkable 3D campus with ten progressively unlocked sectors, physical machines, opening doors, NPCs, world shards and secrets.
- 134 data-driven nodes: 102 main-tree nodes across six branches and cross-branch links, 12 Quantum nodes, eight Ascension nodes, and 12 repeatable Mastery nodes.
- Pan/zoom skill trees, prerequisites, multi-level research, keystones and respecs.
- Four physical minigame chambers: target range, stabilisation, energy catch and parkour. A separate boss chamber has seven named tiers and scaling beyond them.
- 79 achievements, NPC assignments, daily/weekly missions, daily rewards, drones with duplicate fusion, reactor and character appearances, timed research and facility infrastructure.
- Rebirth, Ascension, New Reality, random world events, challenges, offline earnings, save export/import and statistics.
- Procedural geometry and synthesized audio. All runtime assets are included locally.

The world uses compact connected sectors and arcade arenas, including orbital, alien and dimensional settings. It is a playable foundation, rather than a finished commercial game with expansive planets, handcrafted assets or a campaign. Long-term economy balance has not been tested over hundreds of hours. Motion blur is intentionally omitted; anti-aliasing is enabled.

## Saves and moving from v1

Progress automatically saves in this browser every five seconds. Use **Menu → Settings → Export** for a portable JSON backup. Moving the game folder or clearing browser data can make a browser-local save unavailable.

**Import** accepts v2 saves and Classic Nova Foundry v1 JSON exports. Classic currency, XP, rebirth/ascension counts and the first generator transfer; the 3D skill system and world begin fresh, with Skill Points awarded for transferred XP and rebirths. Other classic cosmetics and minigame history are not mapped.

Offline production requires its skill node, begins at 25%, and can reach 100% with up to 48 hours of storage. Temporary boosts do not increase offline payouts. Main skills survive rebirth and ascension; reset confirmations list what is lost. The first main-tree respec is free; later respecs cost 25 stardust.

## Source and rebuilding

Source systems live in `src/`: data, state/economy/saves, world/player/camera, activities, UI, audio, and the main loop. The ready-to-play bundle is `assets/game.js`.

Developers can install the pinned dependencies with `npm ci`, then run `npm run build`. Node/npm are only needed for rebuilding, never for playing.

Third-party code: Three.js, MIT licence; licence text included in `THIRD-PARTY-LICENSES.txt`. The build tool is esbuild, MIT licence.
