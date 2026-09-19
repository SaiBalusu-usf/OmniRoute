/**
 * Chat-history repair for strict OpenAI-compatible upstreams.
 *
 * Some gateways accept a single-turn request but reject the replayed history an
 * agent client sends on turn two and later. WorkBuddy (www.workbuddy.ai) is the
 * reference case and reports the three rejections this module prevents:
 *
 *   `11148 tool_call_sequence_broken` - an assistant message carrying
 *   `tool_calls` must be followed immediately by exactly one result per call,
 *   in call order. Agent clients interleave their own hook messages there, and
 *   the same call can arrive with both an empty placeholder result and the real
 *   one.
 *
 *   `11155 reasoning content from the previous turn must be passed back in
 *   thinking mode` - reported for any request that declares `tools` and ends on
 *   an assistant message. The reasoning is a red herring: attaching
 *   `reasoning_content` does not help and the identical payload is accepted
 *   once the trailing assistant message is folded away. Agent clients produce
 *   that shape whenever a turn carried commentary but no tool call.
 *
 *   `11128 Illegal API invocation from an unapproved channel` - the gateway
 *   rejects a body that names a competing client, so those strings are
 *   neutralized before forwarding.
 *
 * Everything here is opt-in per provider (`strictChatHistory` /
 * `bodyStringReplacements` on the registry entry) and every helper returns the
 * original array when it has nothing to change, so a provider that does not
 * declare the flags is untouched.
 *
 * Reasoning replay is deliberately absent: `requiresReasoningReplay()` in
 * `services/reasoningCache.ts` already covers it for any provider whose model
 * matches, which is what `interleavedField` on a registry model declares.
 */

type JsonRecord = Record<string, unknown>;

const MERGED_KEYS = new Set(["role", "content", "reasoning_content", "tool_calls"]);

/** Absent or empty content-ish value, so the other side of a merge wins. */
function isBlank(value: unknown): boolean {
  if (value === null || value === undefined) return true;
  if (typeof value === "string") return value === "";
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === "object") return Object.keys(value as object).length === 0;
  return false;
}

function isRecord(value: unknown): value is JsonRecord {
  return !!value && typeof value === "object" && !Array.isArray(value);
}

function hasToolCalls(message: unknown): boolean {
  if (!isRecord(message)) return false;
  const calls = message.tool_calls;
  if (Array.isArray(calls)) return calls.length > 0;
  return !isBlank(calls);
}

function asContentParts(value: unknown): unknown[] {
  if (Array.isArray(value)) return [...value];
  if (typeof value === "string") return [{ type: "text", text: value }];
  return [value];
}

/** Concatenate two `content` values, preserving parts when either is multimodal. */
export function combineContent(first: unknown, second: unknown): unknown {
  if (isBlank(first)) return second;
  if (isBlank(second)) return first;
  if (typeof first === "string" && typeof second === "string") return `${first}\n${second}`;
  return [...asContentParts(first), ...asContentParts(second)];
}

/** Keep real reasoning from either side. Never invents reasoning. */
function combineReasoning(first: unknown, second: unknown): unknown {
  if (isBlank(first)) return second;
  if (isBlank(second)) return first;
  if (first === second) return first;
  if (typeof first === "string" && typeof second === "string") return `${first}\n${second}`;
  if (Array.isArray(first) && Array.isArray(second)) return [...first, ...second];
  return first;
}

/** Fold `second` into `first`. `first` must carry no `tool_calls`. */
function mergeAssistantPair(first: JsonRecord, second: JsonRecord): JsonRecord {
  const merged: JsonRecord = { ...first };
  merged.content = combineContent(first.content, second.content);
  for (const [key, value] of Object.entries(second)) {
    if (MERGED_KEYS.has(key)) continue;
    if (!(key in merged) || isBlank(merged[key])) merged[key] = value;
  }
  const reasoning = combineReasoning(first.reasoning_content, second.reasoning_content);
  if (!isBlank(reasoning)) merged.reasoning_content = reasoning;
  if (hasToolCalls(second)) merged.tool_calls = second.tool_calls;
  return merged;
}

/**
 * Coalesce an assistant turn that the client split in two.
 *
 * Only an assistant message carrying `tool_calls` is merged, and only into an
 * immediately preceding assistant message that has none. Non-assistant messages
 * are never dropped, merged, or reordered.
 */
export function mergeAdjacentAssistantMessages(messages: unknown[]): unknown[] {
  if (messages.length < 2) return messages;
  const out: unknown[] = [];
  let changed = false;
  for (const message of messages) {
    const previous = out.length > 0 ? out[out.length - 1] : undefined;
    if (
      isRecord(message) &&
      isRecord(previous) &&
      message.role === "assistant" &&
      previous.role === "assistant" &&
      hasToolCalls(message) &&
      !hasToolCalls(previous)
    ) {
      out[out.length - 1] = mergeAssistantPair(previous, message);
      changed = true;
      continue;
    }
    out.push(message);
  }
  return changed ? out : messages;
}

function contentIsEmpty(message: unknown): boolean {
  if (!isRecord(message)) return true;
  const content = message.content;
  if (content === null || content === undefined) return true;
  if (typeof content === "string") return content.trim() === "";
  if (Array.isArray(content)) return content.length === 0;
  if (typeof content === "object") return Object.keys(content as object).length === 0;
  return false;
}

/**
 * Pick between two results for one call id.
 *
 * The one carrying content wins; when both are empty the first is kept. An
 * empty placeholder carries no information, so dropping it loses nothing.
 */
function preferResult(existing: JsonRecord | undefined, candidate: JsonRecord): JsonRecord {
  if (existing === undefined) return candidate;
  if (contentIsEmpty(existing) && !contentIsEmpty(candidate)) return candidate;
  return existing;
}

function toolCallIds(message: unknown): string[] {
  if (!isRecord(message)) return [];
  const calls = message.tool_calls;
  if (!Array.isArray(calls)) return [];
  const ids: string[] = [];
  for (const call of calls) {
    if (isRecord(call) && typeof call.id === "string" && call.id) ids.push(call.id);
  }
  return ids;
}

/**
 * Make every call group satisfy "one result per call, in call order".
 *
 * Per group: hold back interleaved messages, keep one result per call id
 * (preferring the one with content), emit the results in call order, then
 * re-emit the held-back messages. Content and relative order are preserved and
 * nothing informative is dropped.
 *
 * A late duplicate for an already-emitted group upgrades that result in place
 * rather than appending a second one.
 */
export function normalizeToolSequence(messages: unknown[]): unknown[] {
  if (messages.length < 2) return messages;
  const out: unknown[] = [];
  const deferred: unknown[] = [];
  let order: string[] = [];
  let results = new Map<string, JsonRecord>();
  const closed = new Map<string, number>();

  const flushGroup = (): void => {
    for (const callId of order) {
      const result = results.get(callId);
      if (result !== undefined) {
        closed.set(callId, out.length);
        out.push(result);
      }
    }
    for (const [callId, result] of results) {
      if (!order.includes(callId)) {
        closed.set(callId, out.length);
        out.push(result);
      }
    }
    out.push(...deferred);
    order = [];
    results = new Map();
    deferred.length = 0;
  };

  for (const message of messages) {
    if (!isRecord(message)) {
      if (order.length > 0) deferred.push(message);
      else out.push(message);
      continue;
    }

    if (message.role === "tool") {
      const callId = typeof message.tool_call_id === "string" ? message.tool_call_id : undefined;
      if (order.length > 0) {
        if (callId !== undefined) {
          results.set(callId, preferResult(results.get(callId), message));
        }
        if (order.every((known) => results.has(known))) flushGroup();
        continue;
      }
      if (callId !== undefined && closed.has(callId)) {
        const index = closed.get(callId) as number;
        const chosen = preferResult(out[index] as JsonRecord, message);
        if (chosen === message) out[index] = message;
        continue;
      }
      out.push(message);
      continue;
    }

    const ids = toolCallIds(message);
    if (ids.length > 0) {
      // A new call group: whatever the previous one never answered is emitted
      // as-is rather than held forever.
      if (order.length > 0) flushGroup();
      closed.clear();
      out.push(message);
      order.push(...ids);
      continue;
    }

    if (order.length > 0) {
      deferred.push(message);
      continue;
    }

    out.push(message);
  }

  if (order.length > 0) flushGroup();

  const unchanged =
    out.length === messages.length && out.every((value, index) => value === messages[index]);
  return unchanged ? messages : out;
}

/**
 * Fold neighbouring user turns into one multimodal message.
 *
 * WorkBuddy's gateway collapses consecutive user messages and keeps only their
 * text when it does, so an image delivered in a user message of its own is
 * silently dropped. OmniRoute emits exactly that shape when it lifts a tool
 * result's image out of the `tool` message it cannot ride in, and an agent
 * client interleaves a hook message into the call group, which leaves the
 * lifted image sitting behind another user turn. Merging preserves every
 * content part and the original order; only the message boundary is lost.
 */
export function mergeAdjacentUserMessages(messages: unknown[]): unknown[] {
  if (messages.length < 2) return messages;
  const out: unknown[] = [];
  let mergedAny = false;
  for (const message of messages) {
    const previous = out.length > 0 ? out[out.length - 1] : undefined;
    if (isRecord(message) && isRecord(previous) && message.role === "user" && previous.role === "user") {
      const merged: JsonRecord = { ...previous };
      merged.content = combineContent(previous.content, message.content);
      for (const [key, value] of Object.entries(message)) {
        if (key === "role" || key === "content") continue;
        if (!(key in merged) || isBlank(merged[key])) merged[key] = value;
      }
      out[out.length - 1] = merged;
      mergedAny = true;
      continue;
    }
    out.push(message);
  }
  return mergedAny ? out : messages;
}

/**
 * End the payload on the tool results, not on a trailing assistant message.
 *
 * WorkBuddy rejects any request that declares `tools` and whose last message is
 * an assistant message, and the rejection text blames reasoning content. The
 * identical payload is accepted once the trailing assistant message is folded
 * away, which is why this is a shape fix and not a reasoning fix.
 *
 * Fold the commentary back into the assistant message that carried the turn's
 * tool calls - the mirror of `mergeAdjacentAssistantMessages`, which coalesces
 * the same split in the other direction. The text is preserved; only its
 * position moves to just before those results. With no tool-call turn to fold
 * into there is nothing to attach it to, so the message is dropped rather than
 * left in the one position the gateway refuses.
 */
export function foldTrailingCommentary(messages: unknown[], declaresTools: boolean): unknown[] {
  if (!declaresTools || messages.length < 2) return messages;
  const last = messages[messages.length - 1];
  if (!isRecord(last) || last.role !== "assistant" || hasToolCalls(last)) return messages;

  let index = messages.length - 2;
  let sawToolResult = false;
  while (index >= 0) {
    const candidate = messages[index];
    if (isRecord(candidate) && candidate.role === "tool") {
      sawToolResult = true;
      index -= 1;
      continue;
    }
    break;
  }

  const target = index >= 0 ? messages[index] : undefined;
  if (
    !sawToolResult ||
    !isRecord(target) ||
    target.role !== "assistant" ||
    !hasToolCalls(target)
  ) {
    return messages.slice(0, -1);
  }

  const folded: JsonRecord = { ...target };
  folded.content = combineContent(target.content, last.content);
  for (const [key, value] of Object.entries(last)) {
    if (MERGED_KEYS.has(key)) continue;
    if (!(key in folded) || isBlank(folded[key])) folded[key] = value;
  }
  const reasoning = combineReasoning(target.reasoning_content, last.reasoning_content);
  if (!isBlank(reasoning)) folded.reasoning_content = reasoning;

  const out = [...messages];
  out[index] = folded;
  out.pop();
  return out;
}

/**
 * Replace literal strings throughout a request body.
 *
 * Used for upstreams that reject a body naming a competing client. Applied to
 * string values only, so keys, numbers, and structure are never touched.
 */
export function replaceBodyStrings(value: unknown, replacements: ReadonlyArray<readonly [string, string]>): unknown {
  if (replacements.length === 0) return value;
  if (typeof value === "string") {
    let out = value;
    for (const [from, to] of replacements) out = out.split(from).join(to);
    return out;
  }
  if (Array.isArray(value)) {
    let changed = false;
    const next = value.map((item) => {
      const replaced = replaceBodyStrings(item, replacements);
      if (replaced !== item) changed = true;
      return replaced;
    });
    return changed ? next : value;
  }
  if (isRecord(value)) {
    let changed = false;
    const next: JsonRecord = {};
    for (const [key, item] of Object.entries(value)) {
      const replaced = replaceBodyStrings(item, replacements);
      if (replaced !== item) changed = true;
      next[key] = replaced;
    }
    return changed ? next : value;
  }
  return value;
}

export interface ChatHistoryRepairOptions {
  /** Literal replacements applied to every string in the body before repairing. */
  bodyStringReplacements?: ReadonlyArray<readonly [string, string]>;
  /** Merge adjacent same-role turns and re-order tool results into call order. */
  repairSequence?: boolean;
}

/**
 * Apply the full repair pipeline to a Chat Completions request body.
 *
 * Order matters and mirrors the reference proxy: sanitize strings first so the
 * shape passes below see neutral text, then coalesce the split assistant turn,
 * then make the call groups valid, then merge user turns (which the gateway
 * would otherwise collapse itself, losing images), and finally fold a trailing
 * assistant message away.
 */
export function repairChatHistory(body: unknown, options: ChatHistoryRepairOptions = {}): unknown {
  const { bodyStringReplacements = [], repairSequence = false } = options;
  if (bodyStringReplacements.length === 0 && !repairSequence) return body;

  const sanitized = replaceBodyStrings(body, bodyStringReplacements);
  if (!repairSequence || !isRecord(sanitized) || !Array.isArray(sanitized.messages)) {
    return sanitized;
  }

  let messages: unknown[] = sanitized.messages;
  messages = mergeAdjacentAssistantMessages(messages);
  messages = normalizeToolSequence(messages);
  messages = mergeAdjacentUserMessages(messages);
  messages = foldTrailingCommentary(messages, !isBlank(sanitized.tools));

  if (messages === sanitized.messages) return sanitized;
  return { ...sanitized, messages };
}
