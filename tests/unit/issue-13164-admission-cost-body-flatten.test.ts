import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { extractAdmissionCostFeatures } from "../../open-sse/services/admission/requestFeatures.ts";
import { DEFAULT_ADMISSION_COST_CONFIG } from "../../open-sse/services/admission/cost.ts";

const mk = (n: number, len: number) => ({
  messages: Array.from({ length: n }, () => ({ role: "user", content: "x".repeat(len) })),
});

describe("issue #13164 — admission cost body-size flattening above 256 KiB", () => {
  it("reports a larger bodyBytes/estimatedInputTokens for a 2MB body than for a 260KB body", () => {
    const small = mk(26, 10_000); // ~260 KB
    const big = mk(200, 10_000); // ~2 MB
    const fSmall = extractAdmissionCostFeatures(small);
    const fBig = extractAdmissionCostFeatures(big);
    const impliedRangeBytes =
      DEFAULT_ADMISSION_COST_CONFIG.bodyBytesPerUnit * DEFAULT_ADMISSION_COST_CONFIG.maxRequestCost;
    assert.ok(impliedRangeBytes > 2_000_000, "cost model range should exceed 2MB");
    assert.ok(fBig.bodyBytes > fSmall.bodyBytes);
    assert.ok(fBig.estimatedInputTokens > fSmall.estimatedInputTokens);
  });

  it("distinguishes a 2MB body from an 8MB body (both well inside the ~16MB implied range)", () => {
    const mid = mk(200, 10_000); // ~2 MB
    const big = mk(800, 10_000); // ~8 MB
    const fMid = extractAdmissionCostFeatures(mid);
    const fBig = extractAdmissionCostFeatures(big);
    assert.ok(
      fBig.bodyBytes > fMid.bodyBytes,
      `expected 8MB body (${fBig.bodyBytes}) to report a larger size than the 2MB body (${fMid.bodyBytes})`
    );
  });

  it("honors an explicit cost override, shrinking the effective byte-exit ceiling", () => {
    const big = mk(200, 10_000); // ~2 MB — above a tiny override's implied ceiling
    const withTinyCeiling = extractAdmissionCostFeatures(big, {
      cost: { bodyBytesPerUnit: 1_024, maxRequestCost: 10 }, // ~10 KB implied ceiling
    });
    const withDefaultCeiling = extractAdmissionCostFeatures(big);
    assert.ok(
      withTinyCeiling.bodyBytes < withDefaultCeiling.bodyBytes,
      "an explicit smaller cost override should early-exit sooner than the default ~16MB ceiling"
    );
  });
});
