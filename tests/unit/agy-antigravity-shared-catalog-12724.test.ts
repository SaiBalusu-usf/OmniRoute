// #12724 — agy and antigravity catalogs must be derived from the shared base
// and stay identical until a per-surface delta is introduced.
//
// #14017 introduced the first such delta: Gemini 3.8 Flash / 3.6 Flash tiers are
// IDE-only (added via antigravityModelAliases.ts's `add` delta) until the agy CLI
// catalog is confirmed to serve them too, so agy still equals the bare shared base
// while antigravity now equals the shared base plus that delta.

import test from "node:test";
import assert from "node:assert/strict";

import {
  ANTIGRAVITY_SHARED_MODELS,
  buildSurfaceCatalog,
} from "../../open-sse/config/antigravitySharedModels.ts";
import { AGY_PUBLIC_MODELS } from "../../open-sse/config/agyModels.ts";
import { ANTIGRAVITY_PUBLIC_MODELS } from "../../open-sse/config/antigravityModelAliases.ts";

const serial = { concurrency: false };

const ANTIGRAVITY_IDE_ONLY_MODEL_IDS = [
  "gemini-3.8-flash",
  "gemini-3.8-flash-high",
  "gemini-3.8-flash-medium",
  "gemini-3.8-flash-low",
  "gemini-3.8-flash-tiered",
  "gemini-3.6-flash",
  "gemini-3.6-flash-high",
  "gemini-3.6-flash-medium",
  "gemini-3.6-flash-low",
] as const;

test("#12724 — shared base has exactly 10 models", serial, () => {
  assert.equal(ANTIGRAVITY_SHARED_MODELS.length, 10);
});

test("#12724 — agy catalog equals shared base (empty deltas)", serial, () => {
  assert.deepEqual([...AGY_PUBLIC_MODELS], [...ANTIGRAVITY_SHARED_MODELS]);
});

test("#14017 — antigravity catalog equals shared base plus its IDE-only delta", serial, () => {
  assert.deepEqual(
    ANTIGRAVITY_PUBLIC_MODELS.map((m) => m.id),
    [...ANTIGRAVITY_SHARED_MODELS.map((m) => m.id), ...ANTIGRAVITY_IDE_ONLY_MODEL_IDS]
  );
});

test(
  "#14017 — agy and antigravity catalogs share the base but diverge by the IDE-only delta",
  serial,
  () => {
    const agyIds = new Set(AGY_PUBLIC_MODELS.map((m) => m.id));
    for (const id of ANTIGRAVITY_IDE_ONLY_MODEL_IDS) {
      assert.equal(agyIds.has(id), false, `${id} must stay IDE-only, not exposed to agy`);
    }
    // Still identical over the part both surfaces actually share.
    assert.deepEqual([...AGY_PUBLIC_MODELS], [...ANTIGRAVITY_SHARED_MODELS]);
  }
);

test("#12724 — buildSurfaceCatalog remove delta works", serial, () => {
  const subset = buildSurfaceCatalog(ANTIGRAVITY_SHARED_MODELS, {
    remove: ["gemini-3.7-flash-high"],
  });
  assert.equal(subset.length, 9);
  assert.ok(!subset.some((m) => m.id === "gemini-3.7-flash-high"));
});

test("#12724 — buildSurfaceCatalog add delta works", serial, () => {
  const extended = buildSurfaceCatalog(ANTIGRAVITY_SHARED_MODELS, {
    add: [{ id: "custom-model-v1", name: "Custom Model" }],
  });
  assert.equal(extended.length, 11);
  assert.ok(extended.some((m) => m.id === "custom-model-v1"));
});

test("#12724 — buildSurfaceCatalog with both add and remove", serial, () => {
  const mixed = buildSurfaceCatalog(ANTIGRAVITY_SHARED_MODELS, {
    add: [{ id: "custom-model-v1", name: "Custom Model" }],
    remove: ["gemini-3.7-flash-high", "gemini-3.7-flash-medium"],
  });
  assert.equal(mixed.length, 9); // 10 - 2 + 1
  assert.ok(!mixed.some((m) => m.id === "gemini-3.7-flash-high"));
  assert.ok(mixed.some((m) => m.id === "custom-model-v1"));
});

test("#12724 — buildSurfaceCatalog returns frozen array", serial, () => {
  const result = buildSurfaceCatalog(ANTIGRAVITY_SHARED_MODELS);
  assert.ok(Object.isFrozen(result));
});
