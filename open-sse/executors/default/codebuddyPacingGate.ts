/**
 * codebuddyPacingGate — provider-wide minimum-interval pacing for the
 * CodeBuddy family (`codebuddy`, `codebuddy-cn`, `cbai`, `cbcn`).
 *
 * Tencent's 11128 "request illegal" is a shared (IP/fingerprint-level) burst
 * throttle: it fires on sustained upstream request rate, not per-account, so
 * account rotation cannot escape it — both accounts throttle simultaneously
 * while an identical payload replayed in isolation returns 200. Without
 * pacing, an agentic client (DSH tool loop, ~1 request per 5-10s sustained)
 * plus client retries form a self-sustaining storm: every request burns the
 * full internal attempt budget against an already-throttled upstream, so the
 * throttle never gets a quiet window to decay.
 *
 * The gate serializes upstream SEND STARTS across the whole family with a
 * minimum interval (default 12s → ≤5 upstream sends/min hard cap, regardless
 * of account count or client count). Excess requests WAIT (abort-aware)
 * instead of firing doomed sends; waits beyond the max budget reject with a
 * `CodeBuddyPacingBusyError` carrying `retryAfterSecs`, which the executor
 * turns into a synthetic 429 + `Retry-After` so the normal fallback/backoff
 * path handles it.
 *
 * No-op for every other provider — returns `null`, and callers skip handling
 * when the return value is `null` (same contract as nvidiaConcurrencyGate).
 */

const FAMILY = new Set(["codebuddy", "codebuddy-cn", "cbai", "cbcn"]);

const DEFAULT_MIN_INTERVAL_MS = 12_000;
const DEFAULT_MAX_WAIT_MS = 100_000;

function resolveMinIntervalMs(): number {
  const parsed = Number(process.env.OMNIROUTE_CODEBUDDY_MIN_INTERVAL_MS);
  if (Number.isFinite(parsed) && parsed >= 0) return Math.trunc(parsed);
  return DEFAULT_MIN_INTERVAL_MS;
}

function resolveMaxWaitMs(): number {
  const parsed = Number(process.env.OMNIROUTE_CODEBUDDY_MAX_WAIT_MS);
  if (Number.isFinite(parsed) && parsed > 0) return Math.trunc(parsed);
  return DEFAULT_MAX_WAIT_MS;
}

export function isCodeBuddyFamily(provider: string | null | undefined): boolean {
  return !!provider && FAMILY.has(provider.toLowerCase());
}

export class CodeBuddyPacingBusyError extends Error {
  readonly retryAfterSecs: number;
  constructor(retryAfterSecs: number) {
    super(`CodeBuddy pacing wait exceeded budget (retry after ${retryAfterSecs}s)`);
    this.name = "CodeBuddyPacingBusyError";
    this.retryAfterSecs = retryAfterSecs;
  }
}

// FIFO chain: each waiter resolves the next only after it has stamped its own
// send-start time, so send starts stay both ordered and spaced.
let tail: Promise<void> = Promise.resolve();
let lastStartMs = 0;

function abortError(signal: AbortSignal | null): Error {
  const reason = signal?.reason;
  if (reason instanceof Error) return reason;
  const err = new Error(typeof reason === "string" ? reason : "The operation was aborted");
  err.name = "AbortError";
  return err;
}

function sleepAbortable(ms: number, signal: AbortSignal | null): Promise<void> {
  if (ms <= 0) return Promise.resolve();
  if (signal?.aborted) return Promise.reject(abortError(signal));
  return new Promise<void>((resolve, reject) => {
    const timer = setTimeout(() => {
      signal?.removeEventListener("abort", onAbort);
      resolve();
    }, ms);
    const onAbort = () => {
      clearTimeout(timer);
      reject(abortError(signal));
    };
    signal?.addEventListener("abort", onAbort, { once: true });
  });
}

/**
 * Acquire the provider-wide pacing slot. Resolves to a no-op release function
 * (spacing is enforced at acquire time by the send-start stamp, so there is
 * nothing to hold during the upstream flight). Resolves `null` when the gate
 * does not apply. Rejects with `CodeBuddyPacingBusyError` when the required
 * wait exceeds the max budget, or with an `AbortError` when `signal` fires.
 */
export async function acquireCodeBuddyPacingSlot(
  provider: string,
  signal: AbortSignal | null = null
): Promise<(() => void) | null> {
  if (!isCodeBuddyFamily(provider)) return null;
  const minIntervalMs = resolveMinIntervalMs();
  const maxWaitMs = resolveMaxWaitMs();

  const prev = tail;
  let releaseNext: () => void = () => {};
  tail = new Promise<void>((resolve) => {
    releaseNext = resolve;
  });

  try {
    await prev;
    const waitMs = lastStartMs + minIntervalMs - Date.now();
    if (waitMs > maxWaitMs) {
      throw new CodeBuddyPacingBusyError(Math.max(1, Math.ceil(waitMs / 1000)));
    }
    await sleepAbortable(waitMs, signal);
    lastStartMs = Date.now();
    return () => {};
  } finally {
    // Never wedge the chain: the next waiter must proceed even when this
    // waiter aborted, timed out, or threw.
    releaseNext();
  }
}

/** Test hook: reset the FIFO chain and send-start stamp. */
export function __resetCodeBuddyPacingForTests(): void {
  tail = Promise.resolve();
  lastStartMs = 0;
}
