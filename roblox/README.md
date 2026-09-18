# Brainrot Escape: Factory Frenzy

This folder is a self-contained Roblox Studio prototype for **Brainrot City Heist**.
It uses only generated Parts, primitive shapes, and original names; it does not depend
on third-party meshes, sounds, images, or copyrighted characters. A single script can
deliver a playable prototype, but it cannot replace authored meshes, animation,
audio, terrain sculpting, or production UI. Those are the next Studio art pass.

## Setup in Roblox Studio

1. Create a new **Baseplate** place and remove the default SpawnLocation if present.
2. In Explorer, open **ServerScriptService**, insert a **Script**, and paste the
   contents of `BrainrotEscape.server.lua` into it.
3. Press **Play** (not Run) to test with a normal Roblox avatar.
4. Optional: set `Workspace.StreamingEnabled` to `false` while editing so the whole
   generated map is visible.

The script regenerates a folder named `BrainrotCityHeist` on server start, so it is
safe to restart Play mode while iterating.

## Play loop

- Start at the gold spawn pad in the central blue hub. Roads point directly to
  **Neon Factory** (north), **Banana Canyon** (west), **Byte Bistro** (east), and
  the **Boss Arena** (south).
- Follow the wide roads and gates. Fences mark the playable boundary; the canyon
  stepping route is the only jump section and uses short 12-stud gaps.
- Touch gold loot spheres for `leaderstats.HeistPoints`, then touch each checkpoint.
- Use the Bistro and Factory console prompts for one bonus per round. After 35 seconds the
  city locks into the Boss Arena; strike the original **Overcooked Crown** to clear.
- The HUD is a small lower-left status card and a short bottom toast. There are no
  world-space BillboardGui labels and no large opening prompt.

The HUD is intentionally compact in the lower-left corner and only shows round,
points, checkpoint, sparks, and boss state. Short rewards and event notices appear
as temporary toasts along the bottom edge. World-space BillboardGui labels are not
used, so the play path stays clear.

Rewards are server-authoritative and round-scoped: each player can claim each
collectible once per round, checkpoint bonuses are once per checkpoint per round,
the Bistro and Factory bonuses are once per round, and the boss clear reward is once
per player per round. Touch spam, prompt spam, respawns, and another player touching
the same world item do not duplicate rewards.

## Validation

There is no Roblox Studio runtime in this repository, so validation is intentionally
manual: paste the script into a blank place, press Play, and exercise one complete
checkpoint → district exploration → restaurant/factory bonus → boss loop. The script
uses standard Luau APIs available in Roblox Studio and has no external dependencies.
