import { test } from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";

test("the native ONNX runtime and Transformers load in the same process", async () => {
  const require = createRequire(import.meta.url);
  const ort = require("onnxruntime-node");
  const transformers = await import("@huggingface/transformers");
  const tensor = new ort.Tensor("float32", new Float32Array([1, 2]), [2]);
  assert.equal(tensor.data[1], 2);
  assert.equal(typeof transformers.pipeline, "function");
  // Imports initialize the native addon. No model weights, GPU or provider
  // credentials are needed to catch an incompatible duplicate native runtime.
});
