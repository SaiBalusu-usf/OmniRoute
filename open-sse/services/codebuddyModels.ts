/**
 * CodeBuddy / WorkBuddy AI Model Discovery Service.
 *
 * Dynamically discovers models, context lengths, token limits, and promotional discounts
 * from:
 *   1. Local WorkBuddy AI desktop application bundle (`cli/product.json`)
 *   2. Cached runtime promotions from `~/.workbuddy-ai/local_storage/` (`modelPromotions`)
 *   3. Upstream `/v3/config` endpoint (when active session is available)
 *   4. Merged with OmniRoute's static registry models for complete coverage.
 */

import * as fs from "node:fs";
import * as path from "node:path";
import * as os from "node:os";

import { codebuddyProvider } from "../config/providers/registry/codebuddy/index.ts";
import { codebuddy_cnProvider } from "../config/providers/registry/codebuddy-cn/index.ts";
import { CODEBUDDY_USER_AGENT } from "../config/providerHeaderProfiles.ts";

export interface CodeBuddyPromotionInfo {
  badge: string;
  discount: string;
  factor: number;
  text: string;
  validUntil: string | null;
}

export interface CodeBuddyDiscoveredModel {
  id: string;
  name: string;
  owned_by: string;
  contextLength?: number;
  maxOutputTokens?: number;
  supportsReasoning?: boolean;
  supportsVision?: boolean;
  rateMultiplier?: number;
  isFree?: boolean;
  description?: string;
  promo?: CodeBuddyPromotionInfo | null;
}

export interface FetchCodeBuddyModelsOptions {
  accessToken?: string;
  endpointUrl?: string;
  fallbackModels?: Array<{
    id: string;
    name?: string;
    contextLength?: number;
    maxOutputTokens?: number;
    supportsReasoning?: boolean;
    supportsVision?: boolean;
  }>;
  isCn?: boolean;
}

export interface CodeBuddyModelsResult {
  models: CodeBuddyDiscoveredModel[];
  source: "local_app" | "remote_config" | "registry_fallback";
}

interface LocalStorageEntry {
  data?: {
    modelPromotions?: Array<{
      enabled?: boolean;
      modelIds?: string[];
      badge?: { label?: string };
      discount?: { discountedCredits?: string; factor?: number };
      hover?: { textZh?: string; textEn?: string };
      schedule?: { validUntil?: string };
    }>;
  };
}

interface LocalProductConfig {
  endpoint?: string;
  models?: Array<{
    id?: string;
    name?: string;
    credits?: string;
    maxInputTokens?: number;
    maxOutputTokens?: number;
    supportsReasoning?: boolean;
    supportsImages?: boolean;
    supportsVision?: boolean;
    descriptionEn?: string;
    descriptionZh?: string;
  }>;
}

function parsePromotionsFromLocalStorage(): Map<string, CodeBuddyPromotionInfo> {
  const promotionsMap = new Map<string, CodeBuddyPromotionInfo>();
  const home = os.homedir();

  const candidateConfigDirs = [
    process.env.WORKBUDDY_CONFIG_DIR,
    process.env.CODEBUDDY_CONFIG_DIR,
    path.join(home, ".workbuddy-ai"),
    path.join(home, ".codebuddy-ai"),
  ].filter((d): d is string => typeof d === "string" && d.length > 0);

  for (const configDir of candidateConfigDirs) {
    const localStorageDir = path.join(configDir, "local_storage");
    if (!fs.existsSync(localStorageDir)) continue;

    try {
      const files = fs.readdirSync(localStorageDir);
      for (const file of files) {
        if (!file.endsWith(".info")) continue;
        const fullPath = path.join(localStorageDir, file);
        try {
          const raw = fs.readFileSync(fullPath, "utf8");
          let parsed: unknown;
          try {
            parsed = JSON.parse(raw);
          } catch {
            continue;
          }

          const entries = (Array.isArray(parsed) ? parsed : [parsed]) as LocalStorageEntry[];
          for (const item of entries) {
            const promotions = item?.data?.modelPromotions;
            if (Array.isArray(promotions)) {
              for (const promo of promotions) {
                if (promo?.enabled && Array.isArray(promo.modelIds)) {
                  for (const mId of promo.modelIds) {
                    if (typeof mId === "string" && mId.length > 0) {
                      promotionsMap.set(mId, {
                        badge: promo.badge?.label || "Free now",
                        discount: promo.discount?.discountedCredits || "0x",
                        factor:
                          typeof promo.discount?.factor === "number" ? promo.discount.factor : 0,
                        text: promo.hover?.textZh || promo.hover?.textEn || "",
                        validUntil: promo.schedule?.validUntil || null,
                      });
                    }
                  }
                }
              }
            }
          }
        } catch {
          // ignore single file parse errors
        }
      }
    } catch {
      // ignore directory read errors
    }
  }

  return promotionsMap;
}

function loadLocalProductJson(): LocalProductConfig | null {
  const home = os.homedir();
  const candidateAppPaths = [
    process.env.WORKBUDDY_APP_PATH,
    path.join(home, ".local", "share", "workbuddy"),
    "/opt/WorkBuddy/resources/app",
    "/usr/share/workbuddy",
  ].filter((p): p is string => typeof p === "string" && p.length > 0);

  for (const appPath of candidateAppPaths) {
    const productPath = path.join(appPath, "cli", "product.json");
    if (fs.existsSync(productPath)) {
      try {
        const raw = fs.readFileSync(productPath, "utf8");
        const parsed = JSON.parse(raw) as LocalProductConfig;
        if (parsed?.models && Array.isArray(parsed.models)) {
          return parsed;
        }
      } catch {
        // continue search
      }
    }
  }

  return null;
}

interface RemoteConfigResponse {
  data?: {
    models?: Array<{
      id?: string;
      name?: string;
      maxInputTokens?: number;
      maxOutputTokens?: number;
      supportsReasoning?: boolean;
      supportsImages?: boolean;
      supportsVision?: boolean;
      descriptionEn?: string;
    }>;
  };
}

async function tryFetchRemoteModels(
  endpointUrl: string,
  accessToken: string
): Promise<Array<NonNullable<NonNullable<RemoteConfigResponse["data"]>["models"]>[number]> | null> {
  try {
    const base = endpointUrl.replace(/\/+$/, "");
    const res = await fetch(`${base}/v3/config`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": CODEBUDDY_USER_AGENT,
        "X-Product": "SaaS",
        "X-IDE-Type": "CLI",
        "X-IDE-Name": "CLI",
        "X-Domain": base.replace(/^https?:\/\//, ""),
        "x-requested-with": "XMLHttpRequest",
        "x-codebuddy-request": "1",
      },
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) return null;
    const json = (await res.json()) as RemoteConfigResponse;
    if (json?.data?.models && Array.isArray(json.data.models) && json.data.models.length > 0) {
      return json.data.models;
    }
    return null;
  } catch {
    return null;
  }
}

export async function fetchCodeBuddyAvailableModels(
  options: FetchCodeBuddyModelsOptions = {}
): Promise<CodeBuddyModelsResult> {
  const isCn = !!options.isCn;
  const ownedBy = isCn ? "codebuddy-cn" : "codebuddy";
  const registryEntry = isCn ? codebuddy_cnProvider : codebuddyProvider;
  const modelsMap = new Map<string, CodeBuddyDiscoveredModel>();

  // 1. Gather live promotional overrides
  const promotionsMap = parsePromotionsFromLocalStorage();

  let discoveredFromLocal = false;

  // 2. Try loading local WorkBuddy app product.json (matching region)
  const productJson = loadLocalProductJson();
  const productIsOverseas =
    !productJson?.endpoint?.includes("copilot.tencent.com") &&
    !productJson?.endpoint?.includes("codebuddy.cn");

  if (
    productJson?.models &&
    Array.isArray(productJson.models) &&
    (isCn ? !productIsOverseas : productIsOverseas)
  ) {
    for (const m of productJson.models) {
      if (!m || typeof m.id !== "string" || !m.id) continue;
      const promo = promotionsMap.get(m.id);

      let defaultMultiplier = 1.0;
      if (m.credits) {
        const match = String(m.credits).match(/x?([\d.]+)/);
        if (match) {
          const val = parseFloat(match[1]);
          if (Number.isFinite(val)) defaultMultiplier = val;
        }
      }

      const rateMultiplier = promo ? promo.factor : defaultMultiplier;
      const isFree = promo ? promo.factor === 0 : rateMultiplier === 0;

      modelsMap.set(m.id, {
        id: m.id,
        name: m.name || m.id,
        owned_by: ownedBy,
        contextLength: m.maxInputTokens || 176000,
        maxOutputTokens: m.maxOutputTokens || 24000,
        supportsReasoning: !!m.supportsReasoning,
        supportsVision: !!(m.supportsImages || m.supportsVision),
        rateMultiplier,
        isFree,
        description: m.descriptionEn || m.descriptionZh || undefined,
        promo: promo || null,
      });
    }
    discoveredFromLocal = true;
  }

  // 3. Try fetching from remote /v3/config if accessToken is present
  if (options.accessToken) {
    const endpoint =
      options.endpointUrl || (isCn ? "https://copilot.tencent.com" : "https://www.codebuddy.ai");
    const remoteModels = await tryFetchRemoteModels(endpoint, options.accessToken);
    if (remoteModels && remoteModels.length > 0) {
      for (const m of remoteModels) {
        if (!m || typeof m.id !== "string" || !m.id) continue;
        const promo = promotionsMap.get(m.id);
        const existing = modelsMap.get(m.id);

        modelsMap.set(m.id, {
          id: m.id,
          name: m.name || existing?.name || m.id,
          owned_by: ownedBy,
          contextLength: m.maxInputTokens || existing?.contextLength || 1000000,
          maxOutputTokens: m.maxOutputTokens || existing?.maxOutputTokens || 64000,
          supportsReasoning: m.supportsReasoning ?? existing?.supportsReasoning ?? true,
          supportsVision:
            (m.supportsImages || m.supportsVision) ?? existing?.supportsVision ?? true,
          rateMultiplier: promo ? promo.factor : (existing?.rateMultiplier ?? 1.0),
          isFree: promo ? promo.factor === 0 : (existing?.isFree ?? false),
          description: m.descriptionEn || existing?.description || undefined,
          promo: promo || existing?.promo || null,
        });
      }
    }
  }

  // 4. Merge with OmniRoute static registry catalog to guarantee all flagship models
  // (e.g. gpt-6-astra, deepseek-v4.1-flash-sg, hy4-preview, etc.) are present
  const staticCatalog = registryEntry.models || [];
  for (const regModel of staticCatalog) {
    if (!regModel.id) continue;
    const promo = promotionsMap.get(regModel.id);
    const existing = modelsMap.get(regModel.id);

    if (existing) {
      // If static catalog advertises a larger context window (e.g. 1M for DeepSeek V4.1),
      // preserve the higher capacity
      if (regModel.contextLength && regModel.contextLength > (existing.contextLength || 0)) {
        existing.contextLength = regModel.contextLength;
      }
      if (regModel.maxOutputTokens && regModel.maxOutputTokens > (existing.maxOutputTokens || 0)) {
        existing.maxOutputTokens = regModel.maxOutputTokens;
      }
      if (promo) {
        existing.promo = promo;
        existing.rateMultiplier = promo.factor;
        existing.isFree = promo.factor === 0;
      }
    } else {
      const rateMultiplier = promo ? promo.factor : 1.0;
      const isFree = promo ? promo.factor === 0 : false;

      modelsMap.set(regModel.id, {
        id: regModel.id,
        name: regModel.name || regModel.id,
        owned_by: ownedBy,
        contextLength: regModel.contextLength || 1000000,
        maxOutputTokens: regModel.maxOutputTokens || 64000,
        supportsReasoning: !!regModel.supportsReasoning,
        supportsVision: !!regModel.supportsVision,
        rateMultiplier,
        isFree,
        promo: promo || null,
      });
    }
  }

  // 5. If fallback models were supplied and nothing was found, use them
  if (modelsMap.size === 0 && options.fallbackModels && options.fallbackModels.length > 0) {
    return {
      models: options.fallbackModels.map((m) => ({
        id: m.id,
        name: m.name || m.id,
        owned_by: ownedBy,
        contextLength: m.contextLength,
        maxOutputTokens: m.maxOutputTokens,
        supportsReasoning: m.supportsReasoning,
        supportsVision: m.supportsVision,
      })),
      source: "registry_fallback",
    };
  }

  return {
    models: Array.from(modelsMap.values()),
    source: discoveredFromLocal ? "local_app" : "registry_fallback",
  };
}
