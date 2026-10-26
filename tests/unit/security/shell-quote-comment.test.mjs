import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";

const { quote } = createRequire(import.meta.url)("shell-quote");

test("a newline following a shell comment cannot become a new command", () => {
  for (const separator of ["\n", "\r", "\u2028", "\u2029"]) {
    assert.throws(
      () => quote(["echo", "safe", { comment: "annotation" }, `untrusted${separator}unexpected;#`]),
      TypeError
    );
  }
});

test("ordinary arguments remain quoted without executing a shell", () => {
  assert.equal(quote(["echo", "two words"]), "echo 'two words'");
});
