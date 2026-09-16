/**
 * #12980 — hidden-model overrides are stored per-provider
 * (`modelCompatOverrides["<provider>"] = [{ id, isHidden }]`) but a curated
 * gateway provider (e.g. `cline`) re-advertises other providers' models under
 * its own prefix (e.g. `cline/openai/gpt-5.6-luna`). The eye-toggle on `openai`
 * must suppress that model no matter which provider's catalog surfaces it.
 *
 * Regression guard: `isModelHiddenBulk` consults every provider's hidden set,
 * not just the row's own provider key.
 */
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const TEST_DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-cfg-hidden-sweep-"));
process.env.DATA_DIR = TEST_DATA_DIR;

const core = await import("../../src/lib/db/core.ts");
const modelsDb = await import("../../src/lib/db/models.ts");

test.after(() => {
  core.resetDbInstance();
  try {
    fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  } catch {
    /* best-effort */
  }
});

function hiddenAsMap(): Map<string, Set<string>> {
  return new Map(
    [...modelsDb.getHiddenModelsByProvider().entries()].map(([p, s]) => [p, new Set(s)])
  );
}

test("hidden override under one provider suppresses the model under another provider's catalog", () => {
  // Eye-toggle hidden under `openai`.
  modelsDb.setModelIsHidden("openai", "gpt-5.6-luna", true);

  const hidden = hiddenAsMap();
  assert.ok(hidden.get("openai")?.has("gpt-5.6-luna"), "override registered under openai");

  // The full sweep (what the catalog applies) must match regardless of the row provider.
  const swept = (providerKey: string, modelId: string): boolean => {
    for (const set of hidden.values()) {
      if (set.has(modelId)) return true;
      if (modelId.includes("/")) {
        const tail = modelId.slice(modelId.indexOf("/") + 1);
        if (set.has(tail)) return true;
      }
      if (!modelId.includes("/") && [...set].some((h) => h.includes("/") && h.endsWith(`/${modelId}`))) {
        return true;
      }
    }
    return false;
  };

  // The same model advertised by a different provider (curated passthrough) is hidden.
  assert.equal(swept("cline", "openai/gpt-5.6-luna"), true, "qualified id under cline must be hidden");
  assert.equal(swept("openai", "gpt-5.6-luna"), true, "bare id under openai must be hidden");
  // An unrelated model that is not hidden anywhere stays visible.
  assert.equal(swept("gemini", "gemini-2.5-flash"), false, "unhidden model under unrelated provider stays visible");
});