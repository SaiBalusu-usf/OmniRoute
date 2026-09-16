import { getDbInstance } from "../db/core";
import type { PendingRequestDetail } from "./usageHistory";
import { truncatePendingPreview } from "./usageHistory/helpers";

const COMPLETED_DETAIL_TTL_MS = 30_000;
const MAX_COMPLETED_DETAILS = 16;
const MAX_COMPLETED_DETAILS_BYTES = 8 * 1024 * 1024; // 8 MiB byte budget (#13621 / PR #13623)

const completedDetails = new Map<string, PendingRequestDetail>();
const completedDetailTimers = new Map<string, ReturnType<typeof setTimeout>>();
const detailBytes = new Map<string, number>();
let totalCompletedDetailsBytes = 0;

function detachValue<T>(val: T): T {
  if (typeof val === "string") {
    return Buffer.from(val).toString() as unknown as T;
  }
  if (Array.isArray(val)) {
    return val.map(detachValue) as unknown as T;
  }
  if (val && typeof val === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(val)) {
      out[k] = detachValue(v);
    }
    return out as unknown as T;
  }
  return val;
}

function estimateDetailBytes(detail: PendingRequestDetail): number {
  let bytes = 256;
  const measure = (val: unknown) => {
    if (typeof val === "string") return val.length * 2;
    if (val && typeof val === "object") {
      try {
        return JSON.stringify(val).length * 2;
      } catch {
        return 512;
      }
    }
    return 0;
  };
  bytes += measure(detail.clientRequest);
  bytes += measure(detail.providerRequest);
  bytes += measure(detail.clientResponse);
  bytes += measure(detail.providerResponse);
  return bytes;
}

function deleteCompletedDetail(id: string) {
  completedDetails.delete(id);
  const bytes = detailBytes.get(id);
  if (bytes) {
    totalCompletedDetailsBytes = Math.max(0, totalCompletedDetailsBytes - bytes);
    detailBytes.delete(id);
  }
  const existingTimer = completedDetailTimers.get(id);
  if (existingTimer) {
    clearTimeout(existingTimer);
    completedDetailTimers.delete(id);
  }
}

function trimCompletedDetails() {
  while (
    completedDetails.size > MAX_COMPLETED_DETAILS ||
    totalCompletedDetailsBytes > MAX_COMPLETED_DETAILS_BYTES
  ) {
    const oldestId = completedDetails.keys().next().value;
    if (!oldestId) break;
    deleteCompletedDetail(oldestId);
  }
}

export function getCompletedDetails(): Map<string, PendingRequestDetail> {
  return completedDetails;
}

export function storeCompletedDetail(detail: PendingRequestDetail) {
  if (completedDetails.has(detail.id)) {
    deleteCompletedDetail(detail.id);
  }
  const cleanDetail: PendingRequestDetail = {
    ...detail,
    clientRequest: truncatePendingPreview(detachValue(detail.clientRequest)),
    providerRequest: truncatePendingPreview(detachValue(detail.providerRequest)),
    clientResponse: truncatePendingPreview(detachValue(detail.clientResponse)),
    providerResponse: truncatePendingPreview(detachValue(detail.providerResponse)),
  };
  const bytes = estimateDetailBytes(cleanDetail);
  completedDetails.set(cleanDetail.id, cleanDetail);
  detailBytes.set(cleanDetail.id, bytes);
  totalCompletedDetailsBytes += bytes;
  trimCompletedDetails();
}

export function scheduleCompletedDetailCleanup(id: string) {
  const existingTimer = completedDetailTimers.get(id);
  if (existingTimer) clearTimeout(existingTimer);
  const timer = setTimeout(() => {
    deleteCompletedDetail(id);
  }, COMPLETED_DETAIL_TTL_MS);
  timer.unref?.();
  completedDetailTimers.set(id, timer);
}

export function clearCompletedDetails() {
  for (const timer of completedDetailTimers.values()) clearTimeout(timer);
  completedDetailTimers.clear();
  completedDetails.clear();
  detailBytes.clear();
  totalCompletedDetailsBytes = 0;
}

function isUnset(value: unknown): boolean {
  return value === undefined || value === null;
}

export function maybeEnrichCompletedDetail(updated: PendingRequestDetail, connectionId: string) {
  void (async () => {
    try {
      if (!isUnset(updated.providerResponse) && !isUnset(updated.clientResponse)) return;

      const db = getDbInstance();
      const sinceIso = new Date(Date.now() - 30_000).toISOString();
      const rows = db
        .prepare(
          `SELECT artifact_relpath FROM call_logs WHERE connection_id = ? AND model = ? AND timestamp >= ? ORDER BY timestamp DESC LIMIT 5`
        )
        .all(connectionId, updated.model, sinceIso) as Array<{ artifact_relpath: string | null }>;
      for (const row of rows) {
        if (!row.artifact_relpath) continue;
        const { readCallArtifact, isSizeLimitOmissionMarker } = await import("./callLogArtifacts");
        const art = readCallArtifact(row.artifact_relpath);
        if (art.state !== "ready" || !art.artifact) continue;
        const pipeline = art.artifact.pipeline as
          { providerResponse?: unknown; clientResponse?: unknown } | undefined;
        // pipeline.* first: it is the translated payload of one specific side.
        // `responseBody` is a single coarse value handed to both sides, so it
        // may only fill a side still empty AFTER the pipeline had its turn --
        // testing emptiness once before the loop let it overwrite the payload
        // just recovered, showing a provider payload as the client response.
        if (isUnset(updated.providerResponse) && pipeline?.providerResponse) {
          updated.providerResponse = truncatePendingPreview(pipeline.providerResponse);
        }
        if (isUnset(updated.clientResponse) && pipeline?.clientResponse) {
          updated.clientResponse = truncatePendingPreview(pipeline.clientResponse);
        }
        // A size-limited artifact stores an omission marker string in place of
        // the body. It is truthy, so recovering it here overwrites a real
        // payload with "[omitted: ...]".
        const responseBody = isSizeLimitOmissionMarker(art.artifact.responseBody)
          ? null
          : art.artifact.responseBody;
        if (responseBody) {
          const truncatedBody = truncatePendingPreview(responseBody);
          if (isUnset(updated.providerResponse)) updated.providerResponse = truncatedBody;
          if (isUnset(updated.clientResponse)) updated.clientResponse = truncatedBody;
        }
        if (updated.providerResponse || updated.clientResponse) {
          if (completedDetails.has(updated.id)) storeCompletedDetail(updated);
          break;
        }
      }
    } catch (e) {
      try {
        console.warn(
          "[usageHistory] failed to enrich completed detail from artifacts:",
          e && (e.message || e)
        );
      } catch {}
    }
  })();
}
