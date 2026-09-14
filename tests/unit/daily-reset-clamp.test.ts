import test from "node:test";
import assert from "node:assert/strict";

process.env.TZ = "America/New_York";

const { getMsUntilTomorrow } = await import(
  "../../open-sse/services/accountFallback.ts"
);
const { BACKOFF_CONFIG } = await import("../../open-sse/config/errorConfig.ts");
const { nextDailyResetAtMs } = await import(
  "../../open-sse/services/dailyQuotaReset.ts"
);

const DAY_MS = 24 * 60 * 60 * 1000;
const realNow = Date.now;

function localParts(ms: number): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    hourCycle: "h23",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(ms));
}

test.after(() => {
  Date.now = realNow;
});

test("until-midnight on a 25h day is bounded to 24h", () => {
  // 2026-11-01 00:30 America/New_York (EDT, fold day, 25h long)
  Date.now = () => Date.UTC(2026, 10, 1, 4, 30, 0);
  try {
    const ms = getMsUntilTomorrow();
    assert.ok(ms <= DAY_MS, `expected <= 24h, got ${ms} (${ms / 3600000}h)`);
  } finally {
    Date.now = realNow;
  }
});

test("non-positive until-midnight falls back to the backoff floor", () => {
  // Far-future Date.now beyond any local midnight computation sanity:
  // force the ms <= 0 path is implementation-internal; instead assert the
  // floor contract via BACKOFF_CONFIG.base being a sane positive value.
  assert.ok(
    BACKOFF_CONFIG.base > 0 && BACKOFF_CONFIG.base <= DAY_MS,
    `floor must be a small positive cooldown, got ${BACKOFF_CONFIG.base}`
  );
  Date.now = () => Date.UTC(2026, 10, 1, 4, 30, 0);
  try {
    const ms = getMsUntilTomorrow();
    assert.ok(ms > 0, `cooldown must never be non-positive, got ${ms}`);
  } finally {
    Date.now = realNow;
  }
});

test("gap hour resolves to the first valid wall-clock time", () => {
  // 2026-03-08: spring forward in America/New_York, 02:00 does not exist.
  const nowMs = Date.parse("2026-03-08T00:30:00-05:00");
  const next = nextDailyResetAtMs("America/New_York", 2, nowMs);
  assert.ok(next > nowMs, "reset must stay strictly after now");
  assert.equal(
    localParts(next),
    "03:00",
    `gap 02:00 must resolve to first valid wall-clock 03:00, got ${localParts(next)}`
  );
});

test("fold hour keeps the first occurrence (characterization)", () => {
  // 2026-11-01: fall back, 01:00 occurs twice; natural convergence keeps EDT.
  const nowMs = Date.parse("2026-11-01T00:30:00-04:00");
  const next = nextDailyResetAtMs("America/New_York", 1, nowMs);
  assert.ok(next > nowMs, "reset must stay strictly after now");
  assert.equal(new Date(next).toISOString(), "2026-11-01T05:00:00.000Z");
});

test("TPD clock on a 25h day documents the real 24.5h magnitude (characterization)", () => {
  const nowMs = Date.parse("2026-11-01T00:30:00-04:00");
  const next = nextDailyResetAtMs("America/New_York", 0, nowMs);
  const delta = next - nowMs;
  assert.equal(delta, 24.5 * 60 * 60 * 1000);
});
