import { MUSE_CODE_CONFIG } from "../constants/oauth";

const DEVICE_GRANT = "urn:ietf:params:oauth:grant-type:device_code";
const AUTH_ORIGIN = "https://auth.meta.com";
// The device endpoint never issues codes valid longer than a day; refuse
// anything outside (0, 24h] instead of polling a bogus deadline.
const MAX_DEVICE_EXPIRY_SECONDS = 86400;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function requiredText(value: unknown, field: string): string {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`Muse Code device authorization response missing ${field}`);
  }
  return value;
}

function verifiedAuthorizationUrl(data: Record<string, unknown>): {
  url: string;
  complete: string;
} {
  const complete = requiredText(data.verification_uri_complete, "verification_uri_complete");
  const plain = typeof data.verification_uri === "string" ? data.verification_uri : "";
  let origin: string;
  try {
    origin = new URL(complete).origin;
  } catch {
    throw new Error("Muse Code returned an invalid authorization URL.");
  }
  if (origin !== AUTH_ORIGIN) {
    throw new Error("Muse Code returned an authorization URL for an unexpected origin.");
  }
  return { url: plain, complete };
}

export const museCode = {
  config: MUSE_CODE_CONFIG,
  flowType: "device_code",
  requestDeviceCode: async (config: typeof MUSE_CODE_CONFIG) => {
    let response: Response;
    try {
      response = await fetch(config.deviceCodeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: new URLSearchParams({ client_id: config.clientId }).toString(),
      });
    } catch {
      throw new Error("Muse Code device authorization request failed.");
    }
    if (!response.ok) {
      throw new Error("Muse Code device authorization request failed.");
    }
    let data: unknown;
    try {
      data = await response.json();
    } catch {
      throw new Error("Muse Code device authorization response was not JSON.");
    }
    if (!isRecord(data)) {
      throw new Error("Muse Code device authorization response was malformed.");
    }
    const deviceCode = requiredText(data.device_code, "device_code");
    const userCode = requiredText(data.user_code, "user_code");
    const { url, complete } = verifiedAuthorizationUrl(data);
    const expiresIn =
      typeof data.expires_in === "number" && Number.isFinite(data.expires_in)
        ? data.expires_in
        : NaN;
    if (!(expiresIn > 0) || expiresIn > MAX_DEVICE_EXPIRY_SECONDS) {
      throw new Error("Muse Code returned an invalid device code expiry.");
    }
    const interval =
      typeof data.interval === "number" && Number.isFinite(data.interval) && data.interval > 0
        ? data.interval
        : 5;
    return {
      device_code: deviceCode,
      user_code: userCode,
      verification_uri: url,
      verification_uri_complete: complete,
      expires_in: expiresIn,
      interval,
    };
  },
  pollToken: async (
    config: typeof MUSE_CODE_CONFIG,
    deviceCode: string
  ): Promise<{ ok: boolean; data: Record<string, unknown> }> => {
    let response: Response;
    try {
      response = await fetch(config.tokenUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: new URLSearchParams({
          client_id: config.clientId,
          device_code: deviceCode,
          grant_type: DEVICE_GRANT,
        }).toString(),
      });
    } catch {
      return { ok: false, data: { error: "network_error" } };
    }
    let data: Record<string, unknown>;
    try {
      const parsed: unknown = await response.json();
      data = isRecord(parsed) ? parsed : { error: "invalid_response" };
    } catch {
      data = { error: "invalid_response" };
    }
    return { ok: response.ok, data };
  },
  /**
   * Post-exchange hook: trade the granted device token for a subscription
   * inference key. The device (account) token never leaves this call as an
   * inference credential — it only authorizes the key exchange.
   *
   * Error bodies are deliberately NOT propagated: a successful body carries
   * the inference key itself, so it must never flow into logs or responses.
   */
  postExchange: async (tokens: Record<string, unknown>) => {
    const accountToken =
      typeof tokens.access_token === "string" && tokens.access_token.trim()
        ? tokens.access_token
        : null;
    if (!accountToken) {
      throw new Error("Muse Code device flow completed without an access token.");
    }
    let response: Response;
    try {
      response = await fetch(MUSE_CODE_CONFIG.keyUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-api-version": "1.0.0",
          Authorization: `Bearer ${accountToken}`,
        },
        body: JSON.stringify({ onboard: true }),
      });
    } catch {
      throw new Error("Muse Code subscription key request failed.");
    }
    let payload: unknown;
    try {
      payload = await response.json();
    } catch {
      throw new Error("Muse Code subscription key response was not JSON.");
    }
    if (!response.ok || !isRecord(payload)) {
      throw new Error("Muse Code subscription key request failed.");
    }
    if (payload.is_subs_active === false) {
      throw new Error("Muse Code subscription is inactive.");
    }
    if (
      payload.require_payment === true ||
      typeof payload.action_url === "string" ||
      typeof payload.require_payment_action_url === "string"
    ) {
      throw new Error("Muse Code requires a subscription or billing action.");
    }
    const apiKey =
      typeof payload.api_key === "string" && payload.api_key.trim() ? payload.api_key : null;
    const accountId =
      typeof payload.user_id === "string" && payload.user_id.trim()
        ? payload.user_id
        : typeof payload.user_email === "string" && payload.user_email.trim()
          ? payload.user_email
          : null;
    if (!apiKey || !accountId) {
      throw new Error("Muse Code subscription key response was incomplete.");
    }
    return {
      apiKey,
      accountId,
      email: typeof payload.user_email === "string" ? payload.user_email : null,
      isSubsActive: payload.is_subs_active === true,
    };
  },
  mapTokens: (
    tokens: Record<string, unknown>,
    extra?: {
      apiKey: string;
      accountId: string;
      email: string | null;
      isSubsActive: boolean;
    } | null
  ) => {
    // Total by framework convention: the registry test invokes mapTokens({})
    // for every provider. Incompleteness is rejected upstream in
    // postExchange; here a missing exchange degrades to a null bearer, which
    // fails closed at request time instead of persisting a wrong credential.
    const apiKey =
      extra && typeof extra.apiKey === "string" && extra.apiKey.trim() ? extra.apiKey : null;
    const accountId =
      extra && typeof extra.accountId === "string" && extra.accountId.trim()
        ? extra.accountId
        : null;
    return {
      // Inference authenticates with the exchanged subscription key. The
      // default executor prefers accessToken for OAuth connections, so the
      // key goes here — never the device (account) token.
      accessToken: apiKey,
      email: extra?.email ?? null,
      providerSpecificData: {
        accountToken: typeof tokens.access_token === "string" ? tokens.access_token : null,
        accountId,
        isSubsActive: extra?.isSubsActive === true,
      },
    };
  },
};
