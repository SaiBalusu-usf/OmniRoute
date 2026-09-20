import assert from "node:assert/strict";
import test from "node:test";

import { opencode_zenProvider } from "../../open-sse/config/providers/registry/opencode/zen/index.ts";
import { resolveOpencodeTargetFormat } from "../../open-sse/executors/opencode.ts";

const GPT56_MODELS = ["gpt-5.6-sol", "gpt-5.6-terra", "gpt-5.6-luna"];

test("opencode-zen GPT-5.6 models use the Responses API", () => {
  const models = new Map((opencode_zenProvider.models ?? []).map((model) => [model.id, model]));

  for (const modelId of GPT56_MODELS) {
    assert.equal(
      models.get(modelId)?.targetFormat,
      "openai-responses",
      `${modelId} must declare the Responses API wire format`
    );
    assert.equal(
      resolveOpencodeTargetFormat("opencode-zen", modelId),
      "openai-responses",
      `${modelId} must resolve to the Responses API through the public provider alias`
    );
  }
});
