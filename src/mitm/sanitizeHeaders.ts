import type { IncomingHttpHeaders } from "node:http";
import { isForbiddenUpstreamHeaderName } from "@/shared/constants/upstreamHeaders";

/**
 * Header names whose values must be masked (case-insensitive).
 * These carry credentials/tokens that must not appear in logs or broadcasts.
 */
const SECRET_HEADER_NAMES = new Set([
  "authorization",
  "cookie",
  // `set-cookie` is the RESPONSE-side credential header — upstream session/CSRF
  // cookies must be masked too, else they leak verbatim into inspector JSON.
  "set-cookie",
  "x-api-key",
  "api-key",
  "bearer",
  "proxy-authorization",
]);

function isSecretHeader(name: string): boolean {
  return SECRET_HEADER_NAMES.has(name.toLowerCase());
}

/**
 * Sanitize HTTP headers for safe logging/broadcasting.
 *
 * - Removes headers in the upstream denylist (hop-by-hop, Host, etc.)
 * - Fully redacts authorization/cookie/key headers regardless of value syntax
 * - Coerces array values to comma-joined strings
 * - Returns a plain Record<string, string> (never undefined values)
 */
export function sanitizeHeaders(
  headers: IncomingHttpHeaders | Record<string, string | string[] | undefined>
): Record<string, string> {
  const result: Record<string, string> = {};

  for (const [key, value] of Object.entries(headers)) {
    if (value === undefined || value === null) continue;

    const lowerKey = key.toLowerCase();

    // Remove denylist headers (hop-by-hop, framing)
    if (isForbiddenUpstreamHeaderName(lowerKey)) continue;

    // Normalize array values
    const strValue = Array.isArray(value) ? value.join(", ") : String(value);

    // Mask secret header values
    if (isSecretHeader(lowerKey)) {
      // Header semantics establish sensitivity; short opaque credentials and
      // arbitrary cookie formats must not depend on token-format heuristics.
      result[lowerKey] = "[REDACTED]";
    } else {
      result[lowerKey] = strValue;
    }
  }

  return result;
}
