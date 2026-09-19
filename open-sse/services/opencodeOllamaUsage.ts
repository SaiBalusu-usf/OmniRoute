import { sanitizeErrorMessage } from "../utils/error.ts";

const OLLAMA_CLOUD_API_USAGE_URL =
  process.env.OMNIROUTE_OLLAMA_API_USAGE_URL ?? "https://ollama.com/api/usage";

// Bearer-key quota source: ollama.com exposes usage for API-key-authenticated
// accounts at /api/usage.



type OllamaApiUsageResponse = {
  limits?: {
    monthly?: {
      usage?: unknown;
      models?: Array<{ name?: unknown; request_count?: unknown }>;
    };
  };
};

type OllamaApiUsage = {
  used: number;
  details: Array<{ name: string; used: number }>;
};

function toNumber(value: unknown, fallback = 0): number {
  const parsed =
    typeof value === "number"
      ? value
      : typeof value === "string" && value.trim().length > 0
        ? Number(value)
        : Number.NaN;
  return Number.isFinite(parsed) ? parsed : fallback;
}

function parseOllamaApiUsage(parsed: OllamaApiUsageResponse): OllamaApiUsage | null {
  const monthly = parsed?.limits?.monthly;
  if (!monthly || monthly.usage === undefined || monthly.usage === null) return null;
  const usedFraction = toNumber(monthly.usage, Number.NaN);
  if (!Number.isFinite(usedFraction) || usedFraction < 0) return null;
  // HTTP 200 with a JSON body is authoritative for the API-key path.
  const used = Math.min(usedFraction <= 1 ? usedFraction * 100 : usedFraction, 100);
  const details = (Array.isArray(monthly.models) ? monthly.models : [])
    .map((model) => ({
      name: typeof model?.name === "string" ? model.name : "",
      used: toNumber(model?.request_count, 0),
    }))
    .filter((model) => model.name);
  return { used, details };
}

async function fetchOllamaCloudUsageFromApi(apiKey: string) {
  const response = await fetch(OLLAMA_CLOUD_API_USAGE_URL, {
    redirect: "manual",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    signal: AbortSignal.timeout(10_000),
  });
  if (response.status === 401 || response.status === 403) {
    return { usage: null, message: `Ollama Cloud API key rejected (${response.status}).` as string | undefined };
  }
  if (response.status >= 300 && response.status < 400) {
    return { usage: null, message: "Ollama Cloud API key rejected (redirect to sign-in)." };
  }
  if (!response.ok) {
    return { usage: null, message: `Ollama Cloud usage API error (${response.status}).` };
  }
  let parsed: OllamaApiUsageResponse;
  try {
    parsed = (await response.json()) as OllamaApiUsageResponse;
  } catch {
    return { usage: null, message: "Ollama Cloud usage API returned non-JSON body." };
  }
  return { usage: parseOllamaApiUsage(parsed), message: undefined };
}

async function getOllamaCloudUsageFromApi(apiKey: string) {
  try {
    const result = await fetchOllamaCloudUsageFromApi(apiKey);
    if (!result.usage) return { message: result.message || "Ollama Cloud quota data unavailable." };
    const monthly: OllamaApiUsage = result.usage;
    return {
      plan: "Ollama Cloud",
      quotas: {
        monthly: {
          used: monthly.used,
          total: 100,
          remaining: Math.max(0, 100 - monthly.used),
          remainingPercentage: Math.max(0, 100 - monthly.used),
          resetAt: null,
          unlimited: false,
          displayName: "Monthly usage",
          ...(monthly.details.length > 0 ? { details: monthly.details } : {}),
        },
      },
    };
  } catch (error) {
    return { message: `Ollama Cloud quota error: ${sanitizeErrorMessage(error)}` };
  }
}

export async function getOllamaCloudUsage(apiKey?: string) {
  if (!apiKey?.trim()) {
    return {
      message:
        "Ollama Cloud quota requires an API key. Set the connection's API key to fetch monthly usage.",
    };
  }
  return await getOllamaCloudUsageFromApi(apiKey.trim());
}
