/**
 * Join a provider base URL with a chat/models endpoint that may be either a
 * relative path (`/v1/models`) or a full http(s) URL on a different host.
 *
 * Some compatible providers list models on a different host than chat.
 * Concatenating an absolute models URL onto the chat base URL produces a
 * garbage probe and an empty catalog.
 */

export function isAbsoluteHttpUrl(value: string | null | undefined): boolean {
  return typeof value === "string" && /^https?:\/\//i.test(value.trim());
}

export function sanitizeCompatibleEndpoint(path: string): boolean {
  if (typeof path !== "string") return false;
  if (path.includes("\0")) return false;
  if (path.includes("..")) return false;

  const trimmed = path.trim();
  if (!trimmed || trimmed.length > 2000) return false;

  if (isAbsoluteHttpUrl(trimmed)) {
    try {
      const url = new URL(trimmed);
      return url.protocol === "http:" || url.protocol === "https:";
    } catch {
      return false;
    }
  }

  return trimmed.startsWith("/") && trimmed.length <= 512;
}

export function joinBaseUrlAndEndpoint(
  baseUrl: string | null | undefined,
  endpoint: string | null | undefined,
  fallback = ""
): string {
  const path = typeof endpoint === "string" ? endpoint.trim() : "";
  const resolved = path || (typeof fallback === "string" ? fallback.trim() : "");
  if (isAbsoluteHttpUrl(resolved)) return resolved;

  const normalizedBase = String(baseUrl || "").replace(/\/$/, "");
  if (!resolved) return normalizedBase;

  const normalizedPath = resolved.startsWith("/") ? resolved : `/${resolved}`;
  return `${normalizedBase}${normalizedPath}`;
}
