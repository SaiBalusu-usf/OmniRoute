#!/usr/bin/env node
// scripts/check/check-routing-error-guard.mjs
// Gate: swallowed `catch` blocks and fire-and-forget `void (async ...)`
// on routing paths (open-sse/services/combo.ts + open-sse/services/combo/).
//
// Rule A: a `catch` block without a `throw` and without an inline
// `// no-effect: <motif>` marker for intentional no-op catches
// is a violation, unless suppressed by KNOWN_SWALLOWED_CATCH. Chained
// `.catch(...)` promise handlers are ignored by construction (accepted risk:
// promise-method rejections flagging them would forbid a legitimate idiom).
// Rule B: `void (async` is a violation unless matched by an allowlist entry
// (file + anchor substring, reason mandatory). Stale entries fail in both
// directions. Mirrors the skeleton, exit codes, and `file:line :: rule :: hint`
// format of scripts/check/check-error-helper.mjs.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { assertNoStale, reportStaleEntries } from "./lib/allowlist.mjs";

const cwd = process.cwd();

const SCOPE_FILES = [path.join(cwd, "open-sse/services/combo.ts")];
const SCOPE_DIRS = [path.join(cwd, "open-sse/services/combo")];
const ALLOWLIST_PATH = path.join(cwd, "scripts/check/allowlist-void-async.json");

// Pre-existing swallowed catches frozen so the gate is green now and blocks
// only NEW swallows. Each entry carries an anchor `path :: line-motif` plus an
// English one-line motif; remove the entry once the site is cleaned up.
// Do NOT add new entries without a justification — that defeats the gate.
export const KNOWN_SWALLOWED_CATCH = new Set([
  "open-sse/services/combo.ts :: 326 stats fallback to defaults, auto path uses runtime signals",
  "open-sse/services/combo.ts :: 355 pool counts fallback to empty lists",
  "open-sse/services/combo.ts :: 403 cost fallback to default pricing",
  "open-sse/services/combo.ts :: 623 logged at debug, undefined fallback",
  "open-sse/services/combo/applyStrategyOrdering.ts :: 118 logged, best-effort provider read fallback",
  "open-sse/services/combo/applyStrategyOrdering.ts :: 192 logged, manifest routing fallback",
  "open-sse/services/combo/autoStrategy.ts :: 270 logged, tag routing connections fallback",
  "open-sse/services/combo/autoStrategy.ts :: 534 expanded targets fallback, abort-safe",
  "open-sse/services/combo/autoStrategy.ts :: 561 null fallback, best-effort expansion",
  "open-sse/services/combo/comboAttemptLoop.ts :: 252 logged, speculative task error captured",
  "open-sse/services/combo/comboPredicates.ts :: 600 null fallback, DB read failure",
  "open-sse/services/combo/concurrencyCaps.ts :: 32 null fallback, fail-open routing",
  "open-sse/services/combo/connectionAwareExpansion.ts :: 148 logged, fail-open expansion",
  "open-sse/services/combo/dispatchPrelude.ts :: 187 false fallback, pinned dispatch check",
  "open-sse/services/combo/dispatchPrelude.ts :: 231 pinned clone fallback, release on failure",
  "open-sse/services/combo/dispatchPrelude.ts :: 344 logged, pinned model fallthrough",
  "open-sse/services/combo/executeTargetAttempt.ts :: 383 clone fallback to original response",
  "open-sse/services/combo/executeTargetAttempt.ts :: 711 nested clone-parse fallback, error text preserved",
  "open-sse/services/combo/executeTargetAttempt.ts :: 714 clone fallback, error parse skipped",
  "open-sse/services/combo/executeTargetAttempt.ts :: 730 stringify fallback to String()",
  "open-sse/services/combo/failureTracker.ts :: 117 counter kept, retry on next threshold",
  "open-sse/services/combo/failureTracker.ts :: 123 zeroed streak fallback",
  "open-sse/services/combo/failureTracker.ts :: 139 fail-open tracker state fallback",
  "open-sse/services/combo/failureTracker.ts :: 155 zero fallback, fail-open counter",
  "open-sse/services/combo/nativeCodexTurnPin.ts :: 41 undefined fallback, best-effort pin",
  "open-sse/services/combo/promptCacheAffinity.ts :: 42 empty-string fallback",
  "open-sse/services/combo/promptCacheAffinity.ts :: 207 connections fallback to empty list",
  "open-sse/services/combo/providerWildcard.ts :: 203 model list fallback",
  "open-sse/services/combo/quotaExhaustion.ts :: 38 status preserved, cloned text fallback",
  "open-sse/services/combo/quotaExhaustion.ts :: 41 status preserved, error read fallback",
  "open-sse/services/combo/quotaExhaustionCutoff.ts :: 114 undefined connection fallback",
  "open-sse/services/combo/quotaExhaustionCutoff.ts :: 140 fail-open, blocked false",
  "open-sse/services/combo/quotaShareConcurrency.ts :: 65 fail-open, proceed without a slot",
  "open-sse/services/combo/quotaStrategies.ts :: 108 logged, quota-aware connections fallback",
  "open-sse/services/combo/quotaStrategies.ts :: 387 logged, reset-aware quota fetch fallback",
  "open-sse/services/combo/quotaStrategies.ts :: 423 cached previous reset-aware value kept",
  "open-sse/services/combo/quotaStrategies.ts :: 708 logged, headroom ordering kept",
  "open-sse/services/combo/resolveAutoStrategy.ts :: 299 logged, provider read best-effort",
  "open-sse/services/combo/resolveAutoStrategy.ts :: 390 logged, auto strategy rules fallback",
  "open-sse/services/combo/roundRobinCombo.ts :: 128 undefined fallback, quota path unaffected",
  "open-sse/services/combo/roundRobinCombo.ts :: 670 best-effort quota reserve only",
  "open-sse/services/combo/roundRobinCombo.ts :: 680 clone fallback to original",
  "open-sse/services/combo/roundRobinCombo.ts :: 681 clone fallback to original",
  "open-sse/services/combo/roundRobinCombo.ts :: 829 clone-parse fallback, error text preserved",
  "open-sse/services/combo/roundRobinCombo.ts :: 830 clone-parse fallback, error text preserved",
  "open-sse/services/combo/roundRobinCombo.ts :: 832 clone fallback, error parse skipped",
  "open-sse/services/combo/roundRobinCombo.ts :: 833 clone fallback, error parse skipped",
  "open-sse/services/combo/roundRobinCombo.ts :: 862 stringify fallback to String()",
  "open-sse/services/combo/roundRobinCombo.ts :: 863 stringify fallback to String()",
  "open-sse/services/combo/roundRobinCombo.ts :: 1091 logged at error, 500 response surfaced",
  "open-sse/services/combo/roundRobinCombo.ts :: 1092 logged at error, 500 response surfaced",
  "open-sse/services/combo/sessionStickiness.ts :: 158 undefined fallback, sticky read best-effort",
  "open-sse/services/combo/sessionStickiness.ts :: 219 false fallback, sticky write best-effort",
  "open-sse/services/combo/sessionStickiness.ts :: 248 undefined fallback, cooldown read",
  "open-sse/services/combo/sessionStickiness.ts :: 544 no-op fallback, fail-open stickiness",
  "open-sse/services/combo/runtimeUnits.ts :: 313 clone fallback to original response",
  "open-sse/services/combo/targetSorters.ts :: 78 infinite-cost fallback",
  "open-sse/services/combo/targetSorters.ts :: 85 original order fallback",
  "open-sse/services/combo/shadowRouting.ts :: 78 best-effort shadow drain only",
  "open-sse/services/combo/shadowRouting.ts :: 122 logged, shadow body clone skipped",
  "open-sse/services/combo/shadowRouting.ts :: 169 combo shadow request recorded as failed",
  "open-sse/services/combo/targetResolution.ts :: 375 logged, pipeline fallthrough to null",
  "open-sse/services/combo/targetTimeoutRunner.ts :: 86 diagnostic logging failed",
  "open-sse/services/combo/validateQuality.ts :: 289 null fallback, quality check skipped",
  "open-sse/services/combo/validateQuality.ts :: 488 controller closed, stream cleanup",
  "open-sse/services/combo/validateQuality.ts :: 627 invalid fallback, unverifiable stream",
  "open-sse/services/combo/validateQuality.ts :: 656 valid fallback, probe stream",
  "open-sse/services/combo/validateQuality.ts :: 663 valid fallback, teardown race",
  "open-sse/services/combo/validateQuality.ts :: 674 comment-line SSE frame skipped",
]);

const NO_EFFECT_MARKER = /\/\/\s*no-effect\s*:/;
const THROW_PATTERN = /\bthrow\b/;
const VOID_ASYNC_PATTERN = /\bvoid\s*\(\s*async\b/;

function stripStringsAndComments(source) {
  // Length-preserving mask: every string/comment char becomes a space (newlines
  // kept) so offsets and line numbers survive. Keyword scans use the masked
  // copy; marker reads use the raw slice at the same offsets.
  const chars = source.split("");
  const blank = (from, to) => {
    for (let i = from; i < to; i++) if (chars[i] !== "\n") chars[i] = " ";
  };
  let i = 0;
  while (i < chars.length) {
    const c = chars[i];
    const next = chars[i + 1];
    if (c === "/" && next === "/") {
      let j = i;
      while (j < chars.length && chars[j] !== "\n") j++;
      blank(i, j);
      i = j;
    } else if (c === "/" && next === "*") {
      const end = source.indexOf("*/", i + 2);
      const j = end === -1 ? chars.length : end + 2;
      blank(i, j);
      i = j;
    } else if (c === '"' || c === "'" || c === "`") {
      let j = i + 1;
      while (j < chars.length && (chars[j] !== c || chars[j - 1] === "\\") && chars[j] !== "\n")
        j++;
      blank(i, Math.min(j + 1, chars.length));
      i = Math.min(j + 1, chars.length);
    } else {
      i++;
    }
  }
  return chars.join("");
}

function findCatchBlocks(source) {
  const masked = stripStringsAndComments(source);
  const blocks = [];
  const catchKeyword = /\bcatch\b/g;
  let match;
  while ((match = catchKeyword.exec(masked)) !== null) {
    if (match.index > 0 && masked[match.index - 1] === ".") continue;
    let i = match.index + 5;
    while (i < masked.length && /\s/.test(masked[i])) i++;
    if (masked[i] === "(") {
      let depth = 0;
      while (i < masked.length) {
        if (masked[i] === "(") depth++;
        else if (masked[i] === ")") {
          depth--;
          if (depth === 0) {
            i++;
            break;
          }
        }
        i++;
      }
    }
    while (i < masked.length && /\s/.test(masked[i])) i++;
    if (masked[i] !== "{") continue;
    const start = i;
    let depth = 0;
    let j = start;
    while (j < masked.length) {
      if (masked[j] === "{") depth++;
      else if (masked[j] === "}") {
        depth--;
        if (depth === 0) break;
      }
      j++;
    }
    if (depth !== 0) continue;
    const line = source.slice(0, match.index).split("\n").length;
    blocks.push({
      line,
      body: source.slice(start + 1, j),
      maskedBody: masked.slice(start + 1, j),
    });
    catchKeyword.lastIndex = j + 1;
  }
  return blocks;
}

export function findSwallowedCatches(files, frozen = KNOWN_SWALLOWED_CATCH) {
  const violations = [];
  for (const { path: rel, source } of files) {
    for (const block of findCatchBlocks(source)) {
      if (THROW_PATTERN.test(block.maskedBody)) continue;
      if (NO_EFFECT_MARKER.test(block.body)) continue;
      const motif = block.body
        .trim()
        .split("\n")
        .map((line) => line.trim().replace(/\s+/g, " "))
        .filter(Boolean)
        .slice(0, 2)
        .join(" | ")
        .slice(0, 120);
      const anchor = `${rel} :: ${block.line}`;
      if (frozen.has(anchor) || [...frozen].some((entry) => entry.startsWith(`${anchor} `))) {
        continue;
      }
      violations.push(
        `${rel}:${block.line} :: swallowed-catch :: add 'throw' or '// no-effect: <motif>'` +
          (motif ? ` (body: ${motif})` : "")
      );
    }
  }
  return violations;
}

export function findVoidAsyncSites(files, allowlist) {
  const violations = [];
  for (const { path: rel, source } of files) {
    const lines = source.split("\n");
    for (let i = 0; i < lines.length; i++) {
      if (!VOID_ASYNC_PATTERN.test(lines[i])) continue;
      const entry = allowlist.find(
        (candidate) => candidate.file === rel && source.includes(candidate.anchor)
      );
      if (!entry) {
        violations.push(
          `${rel}:${i + 1} :: void-async :: await the async work or add an allowlist entry`
        );
        continue;
      }
      if (!entry.reason || !String(entry.reason).trim()) {
        violations.push(`${rel}:${i + 1} :: void-async :: allowlist entry needs a reason`);
      }
    }
  }
  return violations;
}

export function findStaleVoidAsyncEntries(allowlist, files) {
  return reportStaleEntries(
    allowlist.map((entry) => `${entry.file} :: ${entry.anchor}`),
    files.flatMap(({ path: rel, source }) =>
      allowlist
        .filter((entry) => entry.file === rel && source.includes(entry.anchor))
        .map((entry) => `${entry.file} :: ${entry.anchor}`)
    ),
    "check-routing-error-guard"
  );
}

export function loadVoidAsyncAllowlist(allowlistPath = ALLOWLIST_PATH) {
  const raw = JSON.parse(fs.readFileSync(allowlistPath, "utf8"));
  return raw.entries ?? raw;
}

function collectFiles() {
  const files = [];
  const push = (p) => {
    files.push({
      path: path.relative(cwd, p).replace(/\\/g, "/"),
      source: fs.readFileSync(p, "utf8"),
    });
  };
  for (const file of SCOPE_FILES) {
    if (fs.existsSync(file)) push(file);
  }
  const walk = (dir) => {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(p);
      else if (/\.tsx?$/.test(entry.name) && !/\.test\.tsx?$/.test(entry.name)) push(p);
    }
  };
  for (const dir of SCOPE_DIRS) walk(dir);
  return files;
}

function main() {
  const files = collectFiles();
  const allowlist = loadVoidAsyncAllowlist();

  const liveSwallows = findSwallowedCatches(files, new Set());
  const liveSwallowKeys = liveSwallows.map((violation) => {
    const at = violation.indexOf(" :: swallowed-catch");
    return at === -1 ? violation : violation.slice(0, at);
  });
  const liveSwallowSet = new Set(liveSwallowKeys);
  const frozenHits = new Set(
    [...KNOWN_SWALLOWED_CATCH]
      .map((entry) => entry.slice(0, entry.lastIndexOf(" :: ")))
      .filter((key) => {
        if (liveSwallowSet.has(key)) return true;
        const cut = key.lastIndexOf(" :: ");
        const alt = `${key.slice(0, cut)} :: ${Number(key.slice(cut + 4)) + 1}`;
        return liveSwallowSet.has(alt);
      })
  );
  // Anti-rot: a seed entry is stale only when its pinned line no longer matches
  // a live swallow AND no live swallow exists for the same file at all — the
  // whole violation was fixed, not shifted. Line drift alone stays silent
  // (the line anchor is advisory; the motif plus completion enforcement — the
  // gate fails on any unknown swallow — carry the signal instead).
  const liveSwallowFiles = new Set(liveSwallowKeys.map((key) => key.split(":")[0]));
  const shiftedStale = [...KNOWN_SWALLOWED_CATCH].filter((entry) => {
    const key = entry.slice(0, entry.lastIndexOf(" :: "));
    if (frozenHits.has(key)) return false;
    const file = key.slice(0, key.lastIndexOf(" :: "));
    return !liveSwallowFiles.has(file);
  });
  assertNoStale(KNOWN_SWALLOWED_CATCH, new Set(shiftedStale), "check-routing-error-guard");
  const swallows = findSwallowedCatches(files, KNOWN_SWALLOWED_CATCH);

  const liveVoidSites = files.flatMap(({ path: rel, source }) =>
    source
      .split("\n")
      .map((line, i) => ({ rel, line, i }))
      .filter(({ line }) => VOID_ASYNC_PATTERN.test(line))
      .map(({ rel: r, i }) => `${r}:${i + 1}`)
  );
  void liveVoidSites;
  const voidAsync = findVoidAsyncSites(files, allowlist);
  const stale = findStaleVoidAsyncEntries(allowlist, files);
  if (stale.length > 0) process.exitCode = 1;

  const violations = [...swallows, ...voidAsync];
  if (violations.length) {
    console.error(
      `[check-routing-error-guard] ${violations.length} violation(s) on routing paths:\n` +
        violations.map((v) => `  ✗ ${v}`).join("\n")
    );
    process.exitCode = 1;
    return;
  }
  if (process.exitCode === 1) return;
  console.log(
    `[check-routing-error-guard] OK (${files.length} files scanned, ${KNOWN_SWALLOWED_CATCH.size} frozen catches, ${allowlist.length} void-async entries)`
  );
}

if (import.meta.url === pathToFileURL(process.argv[1] || "").href) main();
