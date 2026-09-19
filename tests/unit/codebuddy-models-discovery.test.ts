import test from "node:test";
import assert from "node:assert/strict";

import { fetchCodeBuddyAvailableModels } from "../../open-sse/services/codebuddyModels.ts";

test("fetchCodeBuddyAvailableModels discovers models and active promotions", async () => {
  const result = await fetchCodeBuddyAvailableModels({ isCn: false });

  assert.ok(result.models.length >= 20, "Should discover at least 20 models");
  assert.equal(result.source, "local_app");

  const deepseek = result.models.find((m) => m.id === "deepseek-v4.1-flash");
  assert.ok(deepseek, "deepseek-v4.1-flash should be present");
  assert.equal(deepseek.owned_by, "codebuddy");
  assert.equal(deepseek.isFree, true, "deepseek-v4.1-flash should be marked free via active promo");
  assert.equal(deepseek.rateMultiplier, 0);
  assert.ok(deepseek.promo, "deepseek-v4.1-flash should have promo metadata");
  assert.equal(deepseek.promo?.badge, "Free now");

  const hy3 = result.models.find((m) => m.id === "hy3");
  assert.ok(hy3, "hy3 should be present");
  assert.equal(hy3.isFree, true, "hy3 should be marked free via active promo");
  assert.equal(hy3.rateMultiplier, 0);
  assert.ok(hy3.promo);

  const defaultModel = result.models.find((m) => m.id === "default-model");
  assert.ok(defaultModel, "default-model should be present");
  assert.equal(defaultModel.rateMultiplier, 2.2);

  const gpt55 = result.models.find((m) => m.id === "gpt-5.5");
  assert.ok(gpt55, "gpt-5.5 should be present");
  assert.equal(gpt55.rateMultiplier, 3.31);
  assert.equal(gpt55.contextLength, 1000000);

  // Check that registry-only models are also retained
  const gpt6Astra = result.models.find((m) => m.id === "gpt-6-astra");
  assert.ok(gpt6Astra, "gpt-6-astra should be retained from static registry");
});

test("fetchCodeBuddyAvailableModels supports codebuddy-cn provider", async () => {
  const result = await fetchCodeBuddyAvailableModels({ isCn: true });

  assert.ok(result.models.length > 0);
  const glm = result.models.find((m) => m.id === "glm-5.2");
  assert.ok(glm, "glm-5.2 should be present for codebuddy-cn");
  assert.equal(glm.owned_by, "codebuddy-cn");

  const deepseek = result.models.find((m) => m.id === "deepseek-v4-flash");
  assert.ok(deepseek, "deepseek-v4-flash should be present for codebuddy-cn");
  assert.equal(deepseek.owned_by, "codebuddy-cn");
});
