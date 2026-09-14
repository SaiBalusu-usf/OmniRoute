import test from "node:test";
import assert from "node:assert/strict";

import { findDashboardArtifactProblems } from "../../scripts/build/pack-artifact-policy.ts";

const ROUTES = [
  "dist/.build/next/server/app/login/page.js",
  "dist/.build/next/server/app/(dashboard)/home/page.js",
  "dist/.build/next/server/app/(dashboard)/dashboard/logs/page.js",
  "dist/.build/next/server/app/(dashboard)/dashboard/conversations/page.js",
];
const MANIFESTS = ROUTES.map((routePath) =>
  routePath.replace(/page\.js$/, "page_client-reference-manifest.js")
);
const STATIC_ASSET = "dist/.build/next/static/chunks/2bb41rtx9w33n.js";
const FULL_ARTIFACT = [...ROUTES, ...MANIFESTS, STATIC_ASSET];

test("full dashboard artifact passes the release seam", () => {
  assert.deepEqual(findDashboardArtifactProblems(FULL_ARTIFACT, "full\n"), []);
});

test("backend-only build profile fails the release seam", () => {
  assert.deepEqual(findDashboardArtifactProblems(FULL_ARTIFACT, "backend\n"), [
    'dist/BUILD_PROFILE must be full, got "backend"',
  ]);
});

test("missing profile, route, manifests and client assets fail the release seam", () => {
  assert.deepEqual(findDashboardArtifactProblems(ROUTES.slice(0, -1), ""), [
    "missing dist/.build/next/server/app/(dashboard)/dashboard/conversations/page.js",
    ...MANIFESTS.map((manifestPath) => `missing ${manifestPath}`),
    "missing dashboard JavaScript assets under dist/.build/next/static/",
    'dist/BUILD_PROFILE must be full, got ""',
  ]);
});
