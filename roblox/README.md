# Brainrot Escape: Factory Frenzy

This folder is a self-contained Roblox Studio vertical slice. It uses only generated
Parts, neon materials, primitive shapes, and original names; it does not depend on
third-party meshes, sounds, images, or copyrighted characters.

## Setup in Roblox Studio

1. Create a new **Baseplate** place.
2. In Explorer, open **ServerScriptService**, insert a **Script**, and paste the
   contents of `BrainrotEscape.server.lua` into it.
3. Press **Play** (not Run) to test with a normal Roblox avatar.
4. Optional: set `Workspace.StreamingEnabled` to `false` while editing so the whole
   generated map is visible.

The script regenerates a folder named `BrainrotEscapeMap` on server start, so it is
safe to restart Play mode while iterating.

## Play loop

- Start at the factory hub and follow the neon platforms. Obby gaps are intentionally
  kept around **10–14 studs**, which is a forgiving range for the default Roblox
  avatar's walk speed and jump.
- Touch each cyan checkpoint. Falling into the red factory void respawns you at the
  latest checkpoint.
- Collect lime Brainrot Bytes for `leaderstats.BrainrotPoints`.
- Cross the low-friction **Banana Hall**, then collect three named sparks in the
  **Fusion Room** and use the Fusion Console.
- Visit the **Byte Bistro** and repeatedly serve the rotating order for points.
- Every round ends in the boss arena. Use the `Strike` prompt on the original
  **Overcooked Crown**; everyone online receives the clear reward.
- A random event starts about every 45 seconds: Banana Rain, Double Points,
  Laser Shuffle, or Tiny Gravity. The event name is shown in the HUD.

The HUD is intentionally compact in the lower-left corner and only shows round,
points, checkpoint, sparks, and boss state. Short rewards and event notices appear
as temporary toasts along the bottom edge. World-space BillboardGui labels are not
used, so the play path stays clear.

Rewards are server-authoritative and round-scoped: each player can claim each
collectible once per round, checkpoint bonuses are once per checkpoint per round,
the restaurant bonus is once per round, fusion is once per round, and the boss clear
reward is once per player per round. Touch spam, prompt spam, respawns, and another
player collecting the same world item do not duplicate rewards.

## Validation

There is no Roblox Studio runtime in this repository, so validation is intentionally
manual: paste the script into a blank place, press Play, and exercise one complete
checkpoint → fusion → restaurant → boss loop. The script uses standard Luau APIs
available in Roblox Studio and has no external dependencies.
