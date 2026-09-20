import test from "node:test";
import assert from "node:assert/strict";
import { parseDeepSeekToolCalls } from "../../open-sse/translator/deepseekWebTools.ts";

const TOOLS = [
  {
    type: "function",
    function: {
      name: "write",
      parameters: {
        type: "object",
        properties: {
          file_path: { type: "string" },
          content: { type: "string" },
        },
        required: ["file_path", "content"],
      },
    },
  },
];

test("parses DeepSeek DSML invoke commands with Windows paths and non-ASCII content", () => {
  const text =
    "Before.\n" +
    "<｜｜DSML｜｜ calls>\n" +
    '<｜｜DSML｜｜ invoke name="write">\n' +
    '<｜｜DSML｜｜ parameter name="file_path" string="true">' +
    "D:\\Projects\\maxnadeev.ru\\1.txt" +
    "<｜｜DSML｜｜ /parameter>\n" +
    '<｜｜DSML｜｜ parameter name="content" string="true">' +
    "Однажды в четверг, когда чайник уже второй раз закипал без причины." +
    "<｜｜DSML｜｜ /parameter>\n" +
    "<｜｜DSML｜｜ /invoke>\n" +
    "<｜｜DSML｜｜ /calls>\n" +
    "After.";

  const { content, toolCalls } = parseDeepSeekToolCalls(text, "call", TOOLS);

  assert.equal(toolCalls?.length, 1);
  assert.equal(toolCalls?.[0].function.name, "write");
  assert.deepEqual(JSON.parse(toolCalls![0].function.arguments), {
    file_path: "D:\\Projects\\maxnadeev.ru\\1.txt",
    content: "Однажды в четверг, когда чайник уже второй раз закипал без причины.",
  });
  assert.ok(content.includes("Before."));
  assert.ok(content.includes("After."));
  assert.ok(!content.includes("DSML"));
});
