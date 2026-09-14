#!/usr/bin/env node

import { isBackendOnlyBuild } from "./backendOnlyPages.mjs";

if (isBackendOnlyBuild()) {
  console.error(
    "[release] Refusing full release: the selected build profile would stub the dashboard."
  );
  process.exit(1);
}
