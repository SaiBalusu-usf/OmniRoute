/**
 * Issue #7014 — registry support for the gpt-5.6 family (sol / terra / luna)
 * and gpt-realtime-2.1-mini.
 *
 * Live `GET https://api.openai.com/v1/models` (2026-07-11) returned three
 * 5.6 variants under separate ids (no bare `gpt-5.6`):
 *   - gpt-5.6-sol
 *   - gpt-5.6-terra
 *   - gpt-5.6-luna
 * plus gpt-realtime-2.1-mini.
 *
 * This test pins the registry entries (single source of truth) so that:
 *   - `openai` provider lists all three 5.6 ids + realtime-2.1-mini
 *   - `cx` (codex) provider lists the same three 5.6 ids
 *   - `gpt-5.3-codex*` and `gpt-5.2*` are GONE (full cleanup per #7014)
 *   - `passthroughModels: true` on openai accepts future unknown ids
 *   - pricing rows exist for both providers
 *   - MODEL_SPECS has 1.05M context + 128K output for the 5.6 family
 *   - CODEX_PREFERRED_UNPREFIXED_MODELS infers codex for the 5.6 ids
 *   - CODEX_NATIVE_RESPONSES_MODELS routes 5.6 through the native codex
 *     Responses API
 */
import test from "node:test";
import assert from "node:assert/strict";

const { getProviderModels } = await import("../../open-sse/config/providerModels.ts");
const { isValidModel } = await import("../../src/shared/constants/models.ts");
const { MODEL_SPECS } = await import("../../src/shared/constants/modelSpecs.ts");
const { DEFAULT_PRICING } = await import("../../src/shared/constants/pricing/default-pricing.ts");

// ── openai provider lists the 5.6 family + realtime-2.1-mini ─────────────────
test("#7014 openai lists gpt-5.6-sol/terra/luna and gpt-realtime-2.1-mini", () => {
  const openaiModels = new Set(getProviderModels("openai").map((m) => m.id));
  for (const id of ["gpt-5.6-sol", "gpt-5.6-terra", "gpt-5.6-luna"]) {
    assert.ok(
      openaiModels.has(id),
      `openai registry must contain ${id} (live /v1/models 2026-07-11)`
    );
  }
  assert.ok(
    openaiModels.has("gpt-realtime-2.1-mini"),
    "openai registry must contain gpt-realtime-2.1-mini"
  );
});

// ── No bare gpt-5.6 id (the live API doesn't ship one) ───────────────────────
test("#7014 openai has no bare gpt-5.6 (live /v1/models has only sol/terra/luna)", () => {
  const openaiModels = new Set(getProviderModels("openai").map((m) => m.id));
  assert.ok(
    !openaiModels.has("gpt-5.6"),
    "openai must NOT include a bare gpt-5.6 (OpenAI ships sol/terra/luna only)"
  );
});

// ── codex provider lists the 5.6 family ─────────────────────────────────────
test("#7014 cx (codex) lists gpt-5.6-sol/terra/luna", () => {
  const codexModels = new Set(getProviderModels("cx").map((m) => m.id));
  for (const id of ["gpt-5.6-sol", "gpt-5.6-terra", "gpt-5.6-luna"]) {
    assert.ok(codexModels.has(id), `cx registry must contain ${id}`);
  }
});

// ── Cleanup: gpt-5.3-codex* and gpt-5.2* are gone ────────────────────────────
test("#7014 cx dropped gpt-5.3-codex* and gpt-5.2* (full cleanup)", () => {
  const codexModels = new Set(getProviderModels("cx").map((m) => m.id));
  for (const removed of ["gpt-5.3-codex", "gpt-5.3-codex-spark", "gpt-5.2", "gpt-5.2-codex"]) {
    assert.ok(!codexModels.has(removed), `cx registry must NOT contain ${removed} (#7014 cleanup)`);
  }
});

// ── passthroughModels: true on openai lets future ids through ────────────────
test("#7014 openai isValidModel accepts a future 5.x id (passthroughModels)", () => {
  // passthroughModels lets us accept hypothetical future OpenAI releases
  // without a registry edit. The known ids are still validated.
  assert.equal(isValidModel("openai", "gpt-5.99-future"), true);
  assert.equal(isValidModel("openai", "gpt-5.6-sol"), true);
});

// ── MODEL_SPECS pin: 1.05M context, 128K output, full capability set ─────────
for (const id of ["gpt-5.6-sol", "gpt-5.6-terra", "gpt-5.6-luna"]) {
  test(`#7014 MODEL_SPECS["${id}"] pins 1.05M context + 128K output`, () => {
    const spec = MODEL_SPECS[id];
    assert.ok(spec, `MODEL_SPECS must have an entry for ${id}`);
    assert.equal(spec.contextWindow, 1050000, `${id} public-API context = 1.05M`);
    assert.equal(spec.maxOutputTokens, 128000, `${id} max output = 128K`);
    assert.equal(spec.supportsThinking, true);
    assert.equal(spec.supportsTools, true);
    assert.equal(spec.supportsVision, true);
  });
}

// ── Pricing rows exist for both providers (no $0 fallthrough) ───────────────
for (const id of ["gpt-5.6-sol", "gpt-5.6-terra", "gpt-5.6-luna"]) {
  test(`#7014 PRICING has nonzero entries for ${id} in both cx and openai`, () => {
    const cxRow = DEFAULT_PRICING.cx?.[id];
    const openaiRow = DEFAULT_PRICING.openai?.[id];
    assert.ok(cxRow, `PRICING.cx.${id} must exist`);
    assert.ok(openaiRow, `PRICING.openai.${id} must exist`);
    assert.ok(cxRow.input > 0, `PRICING.cx.${id}.input must be > 0`);
    assert.ok(openaiRow.input > 0, `PRICING.openai.${id}.input must be > 0`);
  });
}

// ── CODEX_PREFERRED_UNPREFIXED_MODELS infer-behavior is exercised in the
// routing test (codex-gpt56-sol-terra-luna-routing.test.ts). The set itself
// is not exported from open-sse/services/model.ts (intentionally private; the
// routing helpers expose its effect via getModelInfoCore).
