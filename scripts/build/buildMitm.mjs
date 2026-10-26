import { build } from "esbuild";
import { readdir, mkdir, copyFile } from "node:fs/promises";
import { join, dirname, relative } from "node:path";

/** Compile runtime entry points, preserving the CJS server's relative shims. */
export async function buildMitm(root, destination) {
  const source = join(root, "src", "mitm");
  const entries = [];
  const assets = [];
  async function visit(directory) {
    for (const item of await readdir(directory, { withFileTypes: true })) {
      const path = join(directory, item.name);
      if (item.isDirectory()) {
        if (!["node_modules", "__tests__", "build"].includes(item.name)) await visit(path);
      } else if (item.isFile()) {
        if (/\.ts$/.test(item.name) && !/\.(d|test|spec)\.ts$/.test(item.name)) entries.push(path);
        // Only reviewed runtime assets: never copy credentials or raw TS as a fallback.
        else if (/\.cjs$/.test(item.name)) assets.push(path);
      }
    }
  }
  await visit(source);
  if (!entries.length) throw new Error("No MITM TypeScript entry points found");
  await build({
    entryPoints: entries,
    outdir: destination,
    outbase: source,
    bundle: true,
    platform: "node",
    format: "esm",
    target: "node22",
    packages: "external",
    tsconfig: join(root, "tsconfig.json"),
    logLevel: "silent",
  });
  for (const asset of assets) {
    const target = join(destination, relative(source, asset));
    await mkdir(dirname(target), { recursive: true });
    await copyFile(asset, target);
  }
}
