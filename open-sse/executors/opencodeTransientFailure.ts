/**
 * opencodeTransientFailure.ts — retriable-upstream predicate for the opencode
 * executor loop.
 *
 * Leaf module: one internal import only (isEmptyUpstreamRejection, same
 * executors layer — no registry, no DB). 5xx short-circuits on status alone;
 * the 400 arm delegates to the existing empty-rejection classifier.
 */

import { isEmptyUpstreamRejection } from "./accountRotation.ts";

export function isRetriableUpstreamFailure(status: number, bodyText?: string): boolean {
  if (status >= 500 && status < 600) return true;
  if (status !== 400) return false;
  if (typeof bodyText !== "string" || bodyText === "") return false;
  return isEmptyUpstreamRejection(status, bodyText);
}

// Fixed inter-slot pause after a transient upstream failure (#12975).
// Deliberately flat: rotation already spreads load across accounts (#9611).
export const TRANSIENT_RETRY_DELAY_MS = 1500; // = WAF_RETRY_CONFIG.delayMs, by value only

// Fixed delay before the next account after a transient failure.
// Parameterized by attempt so a future ramp needs no loop change.
export function transientRetryDelayMs(attempt: number): number {
  void attempt;
  return TRANSIENT_RETRY_DELAY_MS;
}

// Sleep resolving false early on abort (listener removed either way).
// Null/absent signal degrades to a plain sleep.
export function sleepAbortable(ms: number, signal?: AbortSignal | null): Promise<boolean> {
  if (signal?.aborted) return Promise.resolve(false);
  if (signal == null) return new Promise((resolve) => setTimeout(() => resolve(true), ms));
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      signal.removeEventListener("abort", onAbort);
      resolve(true);
    }, ms);
    const onAbort = () => {
      clearTimeout(timer);
      resolve(false);
    };
    signal.addEventListener("abort", onAbort, { once: true });
  });
}
