import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { goldenSnapshot } from "../helpers/goldenSnapshot.ts";

test("golden snapshots accept checkout line endings but still reject data changes", () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), "omniroute-golden-lines-"));
  try {
    fs.writeFileSync(path.join(directory, "fixture.json"), '{\r\n  "value": 1\r\n}\r\n');
    assert.doesNotThrow(() => goldenSnapshot("fixture", { value: 1 }, directory));
    assert.throws(() => goldenSnapshot("fixture", { value: 2 }, directory), /golden mismatch/);
  } finally {
    fs.rmSync(directory, { recursive: true, force: true });
  }
});
