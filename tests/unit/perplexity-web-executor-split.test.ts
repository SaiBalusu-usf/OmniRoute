import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// Split-guard for the perplexity-web executor protocol extraction.
// The pure wire protocol (consts, types, SSE parsing, request/query building, content
// extraction) lives in perplexity-web/protocol.ts (no host state/fetch/auth). Host imports
// back the symbols it uses; everything is module-private (no re-export).
const HERE = dirname(fileURLToPath(import.meta.url));
const EXE = join(HERE, "../../open-sse/executors");
const HOST = join(EXE, "perplexity-web.ts");
const LEAF = join(EXE, "perplexity-web/protocol.ts");

test("leaf hosts the protocol helpers and does not import the host", () => {
  const src = readFileSync(LEAF, "utf8");
  for (const sym of ["cleanResponse", "buildPplxRequestBody", "extractContent", "sseChunk"]) {
    assert.match(src, new RegExp(`export (async function\\*?|function\\*?|const) ${sym}\\b`));
  }
  assert.doesNotMatch(src, /from "\.\.\/perplexity-web\.ts"/);
});

test("host imports the protocol helpers back from the leaf", () => {
  const host = readFileSync(HOST, "utf8");
  assert.match(host, /from "\.\/perplexity-web\/protocol\.ts"/);
});

test("cleanResponse strips citations and sseChunk formats a chunk", async () => {
  const { cleanResponse, sseChunk } =
    await import("../../open-sse/executors/perplexity-web/protocol.ts");
  assert.equal(typeof cleanResponse("hello", true), "string");
  assert.match(sseChunk({ a: 1 }), /^data: \{"a":1\}\n\n$/);
});

test("cleanResponse preserves array subscripts and code blocks while stripping prose citations (#14121)", async () => {
  const { cleanResponse } = await import("../../open-sse/executors/perplexity-web/protocol.ts");

  const input = [
    "Here is an explanation [99].",
    "```python",
    "arr = [10, 20, 30]",
    "val = arr[0]",
    "matrix = [[1, 2], [3, 4]]",
    "item = matrix[1][0]",
    "```",
    "And also in inline code `items[0]` and `grid[2][1]` [98].",
    "Another point [12][34] with ~~~javascript",
    "const x = data[0];",
    '~~~ and tool tags <tool name="calc">result[0]</tool>.',
  ].join("\n");

  const cleaned = cleanResponse(input, true);

  // Prose citations should be stripped
  assert.ok(!cleaned.includes("[99]"), "Prose citation [99] must be stripped");
  assert.ok(!cleaned.includes("[98]"), "Prose citation [98] must be stripped");
  assert.ok(!cleaned.includes("[12]"), "Prose citation [12] must be stripped");
  assert.ok(!cleaned.includes("[34]"), "Prose citation [34] must be stripped");
  assert.ok(cleaned.includes("Here is an explanation"), "Prose cleaned");

  // Code blocks and inline code should preserve brackets and indexing
  assert.ok(cleaned.includes("arr = [10, 20, 30]"), "Array literal in block preserved");
  assert.ok(cleaned.includes("val = arr[0]"), "Array indexing in block preserved");
  assert.ok(cleaned.includes("matrix = [[1, 2], [3, 4]]"), "Matrix literal in block preserved");
  assert.ok(cleaned.includes("item = matrix[1][0]"), "2D array indexing in block preserved");
  assert.ok(cleaned.includes("`items[0]`"), "Inline code preserved");
  assert.ok(cleaned.includes("`grid[2][1]`"), "2D inline code preserved");
  assert.ok(cleaned.includes("const x = data[0];"), "Tilde fenced block preserved");
  assert.ok(cleaned.includes('<tool name="calc">result[0]</tool>'), "Tool tag preserved");
});
