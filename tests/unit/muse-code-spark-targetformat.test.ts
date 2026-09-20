/**
 * Muse Code subscription Spark models must resolve to the Responses wire
 * format even though they carry no per-request apiFormat flag: a Chat
 * Completions client calling a Spark model through the gateway must get a
 * translated Responses body at the /responses endpoint, not a Chat payload.
 * Mirrors the opencode-zen/go Spark precedent (#10874, #11046).
 */
import test from "node:test";
import assert from "node:assert/strict";

import { resolveChatCoreTargetFormat } from "../../open-sse/handlers/chatCore/targetFormat.ts";
import { muse_codeProvider } from "../../open-sse/config/providers/registry/muse-code/index.ts";
import { deriveConfigFromRegistryModelsUrl } from "../../src/app/api/providers/[id]/models/discoveryConfig.ts";

const SUBSCRIPTION_SPARK_IDS = [
  "muse-spark-1.1",
  "muse-spark-1.1-contributor",
  "muse-spark-1.2",
  "muse-spark-1.2-contributor",
  "muse-spark-1.3",
  "muse-spark-1.3-contributor",
];

test("subscription Spark models resolve to the Responses format on muse-code", () => {
  for (const id of SUBSCRIPTION_SPARK_IDS) {
    const r = resolveChatCoreTargetFormat({
      provider: "muse-code",
      resolvedModel: id,
      apiFormat: undefined,
      sourceFormat: "openai",
      customModelTargetFormat: undefined,
      providerSpecificData: null,
    });
    assert.equal(
      r.targetFormat,
      "openai-responses",
      `${id} must target the Responses API, not chat/completions`
    );
  }
});

test("subscription Spark models are statically tagged in the muse-code registry", () => {
  for (const id of SUBSCRIPTION_SPARK_IDS) {
    const model = muse_codeProvider.models.find((m) => m.id === id);
    assert.ok(model, `${id} should be registered in the muse-code provider`);
    assert.equal(model?.targetFormat, "openai-responses");
    assert.equal(model?.supportsReasoning, true);
    assert.ok(
      typeof model?.contextLength === "number" && (model?.contextLength ?? 0) > 0,
      `${id} must declare a context window`
    );
  }
});

test("muse-code registry derives a live discovery config for the Spark catalog", () => {
  const config = deriveConfigFromRegistryModelsUrl("muse-code");
  assert.ok(config, "muse-code must expose a discovery config from its registry entry");
  assert.equal(config?.url, "https://api.meta.ai/v1/models");
  assert.equal(config?.method, "GET");
});

test("muse-code keeps opaque reasoning transport for encrypted reasoning", () => {
  assert.equal(muse_codeProvider.reasoningTransport, "opaque");
});
