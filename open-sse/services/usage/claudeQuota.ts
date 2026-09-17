import { getProviderModels } from "../../config/providerModels.ts";
import { getRegisteredProviderEffortBaseModelId } from "../../utils/registeredEffortVariants.ts";
import { parseModel, stripContextWindowSuffix } from "../model.ts";
import { isSubscriptionQuotaText } from "../quotaTextCooldowns.ts";
import { safePercentage } from "@/shared/utils/formatting";
import { parseResetTime, type ClaudeQuotaMetadata, type UsageQuota } from "./quota.ts";
import { toRecord } from "./scalars.ts";

export type ClaudeQuotaKind = "session" | "weekly_all" | "weekly_scoped";

const LEGACY_MODEL_DISPLAY_NAMES: Readonly<Record<string, string>> = {
  // Legacy `seven_day_*` keys use Anthropic codenames, so preserve the public
  // model-family label operators already recognize in quota displays and routing.
  omelette: "designer",
};
const MINUTE_RATE_LIMIT_RE =
  /\b(?:tpm|rpm)\b|(?:tokens?|requests?)[\s_-]*(?:per|\/)[\s_-]*min(?:ute)?s?\b/i;

function nonEmptyString(value: unknown): string | null {
  return typeof value === "string" && value.trim() ? value.trim() : null;
}

function normalizedTokens(value: string): string[] {
  return value
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(Boolean);
}

function normalizedTokenKey(value: string): string {
  return normalizedTokens(value).join("-");
}

function quotaObject(
  usedValue: unknown,
  resetValue: unknown,
  claudeQuota: ClaudeQuotaMetadata
): UsageQuota {
  const reportedUsed = safePercentage(usedValue);
  const used = reportedUsed ?? 0;
  const remaining = Math.max(0, 100 - used);
  return {
    used,
    total: 100,
    remaining,
    resetAt: parseResetTime(resetValue),
    remainingPercentage: remaining,
    unlimited: false,
    fractionReported: reportedUsed === undefined ? false : undefined,
    claudeQuota,
  };
}

function currentLimitPercent(limit: Record<string, unknown>): number | undefined {
  return (
    safePercentage(limit.percent) ??
    safePercentage(limit.utilization) ??
    safePercentage(limit.percentage)
  );
}

function currentLimitReset(limit: Record<string, unknown>): unknown {
  return limit.resetsAt ?? limit.resets_at ?? limit.resetAt ?? limit.reset_at;
}

function currentLimitActive(limit: Record<string, unknown>): boolean {
  if (typeof limit.isActive === "boolean") return limit.isActive;
  if (typeof limit.is_active === "boolean") return limit.is_active;
  return false;
}

function currentLimitModel(limit: Record<string, unknown>): {
  modelId: string | null;
  modelDisplayName: string | null;
} {
  const scope = toRecord(limit.scope);
  const modelValue = scope.model;
  if (typeof modelValue === "string") {
    return { modelId: modelValue.trim() || null, modelDisplayName: null };
  }
  const model = toRecord(modelValue);
  return {
    modelId:
      nonEmptyString(model.id) ?? nonEmptyString(model.model_id) ?? nonEmptyString(model.modelId),
    modelDisplayName:
      nonEmptyString(model.displayName) ??
      nonEmptyString(model.display_name) ??
      nonEmptyString(model.name),
  };
}

function quotaKey(kind: ClaudeQuotaKind, displayName: string | null): string {
  if (kind === "session") return "session (5h)";
  if (kind === "weekly_all") return "weekly (7d)";
  return `weekly ${displayName || "scoped"} (7d)`;
}

function normalizeCurrentLimits(limits: unknown[]): Record<string, UsageQuota> {
  const quotas: Record<string, UsageQuota> = {};
  for (const value of limits) {
    const limit = toRecord(value);
    const kind = nonEmptyString(limit.kind);
    if (kind !== "session" && kind !== "weekly_all" && kind !== "weekly_scoped") continue;
    const percent = currentLimitPercent(limit);

    const { modelId, modelDisplayName } = currentLimitModel(limit);
    const scopeLabel = modelDisplayName ?? modelId;
    const scopeToken = scopeLabel ? normalizedTokenKey(scopeLabel) : "";
    const metadata: ClaudeQuotaMetadata = {
      kind,
      active: currentLimitActive(limit),
      severity: nonEmptyString(limit.severity),
      scopeKey: kind === "weekly_scoped" && scopeToken ? `model:${scopeToken}` : null,
      modelId,
      modelDisplayName,
    };
    // Current payload percentages are display metadata. Upstream `isActive`
    // and severity decide whether the window blocks routing.
    quotas[quotaKey(kind, modelDisplayName ?? modelId)] = quotaObject(
      percent,
      currentLimitReset(limit),
      metadata
    );
  }
  return quotas;
}

function legacyQuota(
  kind: ClaudeQuotaKind,
  window: Record<string, unknown>,
  modelDisplayName: string | null
): UsageQuota | null {
  const used = safePercentage(window.utilization);
  if (used === undefined) return null;
  const scopeToken = modelDisplayName ? normalizedTokenKey(modelDisplayName) : "";
  return quotaObject(used, window.resets_at, {
    kind,
    active: used >= 100,
    severity: used >= 100 ? "critical" : null,
    scopeKey: kind === "weekly_scoped" && scopeToken ? `model:${scopeToken}` : null,
    modelId: null,
    modelDisplayName,
  });
}

function normalizePreviousLimits(data: Record<string, unknown>): Record<string, UsageQuota> {
  const quotas: Record<string, UsageQuota> = {};
  const session = legacyQuota("session", toRecord(data.five_hour), null);
  if (session) quotas["session (5h)"] = session;

  const weekly = legacyQuota("weekly_all", toRecord(data.seven_day), null);
  if (weekly) quotas["weekly (7d)"] = weekly;

  for (const [key, value] of Object.entries(data)) {
    if (!key.startsWith("seven_day_") || key === "seven_day") continue;
    const codename = key.slice("seven_day_".length);
    const modelDisplayName = LEGACY_MODEL_DISPLAY_NAMES[codename] ?? codename;
    const scoped = legacyQuota("weekly_scoped", toRecord(value), modelDisplayName);
    if (scoped) quotas[`weekly ${modelDisplayName} (7d)`] = scoped;
  }
  return quotas;
}

export function normalizeClaudeUsageQuotas(
  payload: Record<string, unknown>
): Record<string, UsageQuota> {
  if (!Object.prototype.hasOwnProperty.call(payload, "limits")) {
    return normalizePreviousLimits(payload);
  }
  return Array.isArray(payload.limits) ? normalizeCurrentLimits(payload.limits) : {};
}

export function isClaudeQuotaMetadata(value: unknown): value is ClaudeQuotaMetadata {
  if (!value || typeof value !== "object") return false;
  const metadata = value as Partial<ClaudeQuotaMetadata>;
  return (
    (metadata.kind === "session" ||
      metadata.kind === "weekly_all" ||
      metadata.kind === "weekly_scoped") &&
    typeof metadata.active === "boolean" &&
    (metadata.severity === null || typeof metadata.severity === "string") &&
    (metadata.scopeKey === null || typeof metadata.scopeKey === "string") &&
    (metadata.modelId === null || typeof metadata.modelId === "string") &&
    (metadata.modelDisplayName === null || typeof metadata.modelDisplayName === "string")
  );
}

export function isExplicitClaudeQuota429Text(errorText: string): boolean {
  return (
    !isClaudeMinuteRateLimitText(errorText) &&
    isSubscriptionQuotaText(errorText.toLowerCase(), "claude")
  );
}

export function isClaudeMinuteRateLimitText(errorText: string): boolean {
  return MINUTE_RATE_LIMIT_RE.test(errorText);
}

function stripDeclaredEffort(modelId: string): string {
  const registeredBase = getRegisteredProviderEffortBaseModelId("claude", modelId);
  if (registeredBase) return registeredBase;

  for (const candidate of getProviderModels("claude")) {
    for (const effort of candidate.supportedThinkingEfforts ?? []) {
      if (
        modelId === `${candidate.id}-${effort}` ||
        modelId === `${candidate.id}-thinking-${effort}`
      ) {
        return candidate.id;
      }
    }
  }
  return modelId;
}

function normalizedRequestedModel(model: string): string {
  const parsed = parseModel(model);
  const routedModel = parsed.model ?? model;
  const withoutContext = stripContextWindowSuffix(routedModel) ?? routedModel;
  const withoutRouteDecoration = withoutContext.split("@", 1)[0].split(":", 1)[0];
  return normalizedTokenKey(stripDeclaredEffort(withoutRouteDecoration));
}

export function claudeQuotaMatchesModel(
  metadata: ClaudeQuotaMetadata,
  requestedModel: string
): boolean {
  if (metadata.kind !== "weekly_scoped") return false;
  const requestedKey = normalizedRequestedModel(requestedModel);
  if (!requestedKey) return false;

  if (metadata.modelId) {
    return requestedKey === normalizedRequestedModel(metadata.modelId);
  }

  if (!metadata.modelDisplayName) return false;
  const requestedTokens = new Set(normalizedTokens(requestedKey));
  const displayTokens = normalizedTokens(metadata.modelDisplayName);
  return displayTokens.length > 0 && displayTokens.every((token) => requestedTokens.has(token));
}
