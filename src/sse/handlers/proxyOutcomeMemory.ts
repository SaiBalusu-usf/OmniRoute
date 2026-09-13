import { isEgressBucketedLockScope } from "@omniroute/open-sse/config/providerErrorRules.ts";
import { isRelayType } from "@omniroute/open-sse/utils/proxyDispatcher.ts";
import {
  isProxySkipEnabled,
  noteProxyRecovered,
  noteProxyRefusal,
  noteProxyServed,
  proxyEgressKey,
} from "@omniroute/open-sse/utils/proxyRefusalMemory.ts";

/**
 * Feed the status the provider actually returned through a proxy (captured around the
 * patched fetch and carried on proxyInfo.upstreamStatus) back to proxy selection. A 429
 * from a provider whose quota is tied to the egress IP sets the proxy aside, and a 2xx from
 * such a provider clears it. A 2xx from any other provider proves the proxy is reachable
 * but says nothing about that quota (a global pool is shared across providers), so it only
 * ends an unreachable period. No status (local refusal, network error), an edge relay (the
 * status is the relay's) or a direct request writes nothing. Never reads result.status:
 * several 429s are local.
 */
export function noteProxyOutcome(
  provider: string | null,
  proxyInfo: { proxy?: unknown; upstreamStatus?: number | null } | null | undefined
): void {
  if (!isProxySkipEnabled()) return;
  const status = proxyInfo?.upstreamStatus;
  if (typeof status !== "number") return;
  const proxy = proxyInfo?.proxy;
  if (proxy && typeof proxy === "object" && isRelayType((proxy as { type?: string }).type)) return;
  const key = proxyEgressKey(proxy);
  if (key === null) return;
  const ipQuotaProvider = isEgressBucketedLockScope(provider);
  if (status === 429 && ipQuotaProvider) {
    noteProxyRefusal(key, "ip_quota_429");
  } else if (status >= 200 && status < 300) {
    if (ipQuotaProvider) noteProxyServed(key);
    else noteProxyRecovered(key, "proxy_unreachable");
  }
}
