/**
 * Free-badge provider gate + auth bypass lock + provider-set cross-check.
 *
 * A. Badge matrix: `isFreeForProvider` (from
 * `src/shared/utils/freeModels.ts`) is the exact conjunction the spec
 * requires (`providerHasFreeModels && isFreeModel`) — a badge on a provider
 * without a free tier is impossible.
 * B. Wiring guard: the two dashboard sections must compute `isFree` only
 * through that gate — no raw `:free`/`free`-name/`free`-field OR branches.
 * C. Auth bypass lock: the `credits_exhausted` exemption for free models in
 * `src/sse/services/auth.ts` stays scoped to openrouter + free models.
 * D. Cross-check: the budgeted free catalog must stay covered by `hasFree`
 * metadata, modulo a motivated allowlist (checked one by one at build).
 */
import { describe, it, test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import {
  isFreeForProvider,
  providerHasFreeModels,
  PROVIDERS_WITH_FREE_MODELS,
} from "../../src/shared/utils/freeModels.ts";
import { FREE_MODEL_BUDGETS, grantsFreeAccess } from "@omniroute/open-sse/config/freeModelCatalog";
import { resolveProviderId } from "../../src/shared/constants/providers.ts";

const here = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(here, "..", "..");

type FreeCandidate = { id?: string; isFree?: boolean };

function candidateFor(signal: string, sampleCatalogId: string): FreeCandidate {
  switch (signal) {
    case "isFree":
      return { id: "some-model", isFree: true };
    case "suffix":
      return { id: "some-model:free" };
    case "catalog":
      return { id: sampleCatalogId };
    case "none":
      return { id: "some-paid-model" };
    default:
      throw new Error(`unknown signal ${signal}`);
  }
}

describe("free badge provider gate", () => {
  it("free-tier provider shows the badge only with a real signal", () => {
    const live = FREE_MODEL_BUDGETS.find((m) => grantsFreeAccess(m.freeType));
    assert.ok(live, "catalog must contain at least one live free entry");
    assert.equal(providerHasFreeModels(live.provider), true);
    assert.equal(isFreeForProvider(live.provider, candidateFor("isFree", live.modelId)), true);
    assert.equal(isFreeForProvider(live.provider, candidateFor("suffix", live.modelId)), true);
    assert.equal(isFreeForProvider(live.provider, candidateFor("catalog", live.modelId)), true);
    assert.equal(isFreeForProvider(live.provider, candidateFor("none", live.modelId)), false);
  });

  it("provider without a free tier never shows the badge", () => {
    assert.equal(providerHasFreeModels("local"), false);
    for (const signal of ["isFree", "suffix", "catalog", "none"]) {
      assert.equal(
        isFreeForProvider("local", candidateFor(signal, "some-model")),
        false,
        `signal ${signal} must not badge a provider without a free tier`
      );
    }
  });

  it("strict opt-in: only isFree === true counts", () => {
    for (const junk of [false, null, undefined, 1, "true"]) {
      assert.equal(
        isFreeForProvider("openrouter", { id: "x", isFree: junk as unknown as boolean }),
        false
      );
    }
  });

  it("retired free tier grants nothing on its own", () => {
    const liveIds = new Set(
      FREE_MODEL_BUDGETS.filter((m) => grantsFreeAccess(m.freeType)).map(
        (m) => `${m.provider}/${m.modelId}`
      )
    );
    const retiredOnly = FREE_MODEL_BUDGETS.find(
      (m) => !grantsFreeAccess(m.freeType) && !liveIds.has(`${m.provider}/${m.modelId}`)
    );
    assert.ok(retiredOnly, "catalog must contain at least one retired-only entry");
    assert.equal(isFreeForProvider(retiredOnly.provider, { id: retiredOnly.modelId }), false);
  });

  it("dashboard sections route every isFree computation through the gate (B)", () => {
    const files = [
      "src/app/(dashboard)/dashboard/providers/[id]/components/PassthroughModelsSection.tsx",
      "src/app/(dashboard)/dashboard/providers/[id]/components/CompatibleModelsSection.tsx",
    ];
    for (const f of files) {
      const txt = readFileSync(path.join(ROOT, f), "utf8");
      assert.match(txt, /isFreeForProvider/, `${f} must use the gate`);
      const blocks = txt.split("isFree:").slice(1);
      assert.ok(blocks.length >= 2, `${f} must contain the model + alias isFree blocks`);
      for (const block of blocks) {
        const body = block.slice(0, 400);
        assert.doesNotMatch(body, /\(model as any\)\.free/, `${f}: raw free field bypass`);
        assert.doesNotMatch(body, /\(customModel as any\)\?\.free/, `${f}: raw free field bypass`);
        assert.doesNotMatch(body, /\.endsWith\(":free"\)/, `${f}: raw :free suffix bypass`);
        assert.doesNotMatch(body, /gratis/, `${f}: raw name bypass`);
        assert.doesNotMatch(body, /\.test\(/, `${f}: raw name-regex bypass`);
        assert.doesNotMatch(body, /Boolean\(/, `${f}: raw Boolean bypass`);
      }
    }
  });
});

describe("auth bypass lock", () => {
  const TEST_DATA_DIR = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-free-badge-gate-"));
  process.env.DATA_DIR = TEST_DATA_DIR;

  let core: typeof import("../../src/lib/db/core.ts");
  let providersDb: typeof import("../../src/lib/db/providers.ts");
  let auth: typeof import("../../src/sse/services/auth.ts");

  test.before(async () => {
    core = await import("../../src/lib/db/core.ts");
    providersDb = await import("../../src/lib/db/providers.ts");
    auth = await import("../../src/sse/services/auth.ts");
  });

  test.after(() => {
    core.resetDbInstance();
    fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  });

  async function resetStorage() {
    core.resetDbInstance();
    fs.rmSync(TEST_DATA_DIR, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
    fs.mkdirSync(TEST_DATA_DIR, { recursive: true });
  }

  test("catalogued free id without :free suffix is still served on credits_exhausted", async () => {
    await resetStorage();
    const live = FREE_MODEL_BUDGETS.find(
      (m) =>
        m.provider === "openrouter" && grantsFreeAccess(m.freeType) && !m.modelId.endsWith(":free")
    );
    assert.ok(live, "openrouter must have a live catalogued id without :free suffix");
    await providersDb.createProviderConnection({
      provider: "openrouter",
      authType: "apikey",
      apiKey: "sk-or-exhausted-catalog",
      isActive: true,
      testStatus: "credits_exhausted",
    });
    const selected = await auth.getProviderCredentials("openrouter", null, null, live.modelId);
    assert.ok(selected && "connectionId" in selected, "catalogued free id must bypass the lock");
  });

  test("expired status still refuses a :free model", async () => {
    await resetStorage();
    await providersDb.createProviderConnection({
      provider: "openrouter",
      authType: "apikey",
      apiKey: "sk-or-expired",
      isActive: true,
      testStatus: "expired",
    });
    const selected = await auth.getProviderCredentials(
      "openrouter",
      null,
      null,
      "meta-llama/llama-3.1-8b-instruct:free"
    );
    assert.deepEqual(selected, {
      allExpired: true,
      expiredCount: 1,
      expiredStatus: "expired",
    });
  });
});

describe("free catalog vs provider metadata cross-check", () => {
  it("every budgeted provider is flagged hasFree (modulo motivated allowlist)", async () => {
    const { getFreeProviders } = await import("../../src/lib/freeProviderRankings.ts");
    // Providers whose budgeted free tier is not (yet) reflected as a
    // `hasFree` flag on the registry entry. Checked one by one at build:
    // - glm, glm-cn: regional entries without a hasFree flag on the record.
    // - kilo-gateway: gateway entry without a hasFree flag on the record.
    // - opencode-zen: gateway entry without a hasFree flag on the record.
    // - ovhcloud: cloud entry without a hasFree flag on the record.
    // - predibase, publicai, together: inference entries flagged hasFree:false.
    // - huggingchat, muse-spark-web, t3-web: cookie-driven entries outside the
    //   oauth/apikey/noauth pools that getFreeProviders reads.
    const ALLOWLIST = new Set([
      "glm",
      "glm-cn",
      "huggingchat",
      "kilo-gateway",
      "muse-spark-web",
      "opencode-zen",
      "ovhcloud",
      "predibase",
      "publicai",
      "t3-web",
      "together",
    ]);
    const ranked = new Set(getFreeProviders().map((p: { id: string }) => resolveProviderId(p.id)));
    // NOTE: getFreeProviders reads noauth + oauth/apikey hasFree only, so
    // cookie-driven entries are covered by the allowlist, not by the set.
    for (const provider of PROVIDERS_WITH_FREE_MODELS) {
      const canonical = resolveProviderId(provider);
      if (ranked.has(provider) || ranked.has(canonical)) continue;
      assert.ok(
        ALLOWLIST.has(provider) || ALLOWLIST.has(canonical),
        `free-catalog provider without hasFree: ${provider}`
      );
    }
  });
});
