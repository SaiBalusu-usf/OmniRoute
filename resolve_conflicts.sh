#!/usr/bin/env bash
# Resolve the 8 merge conflicts from merging origin/release/v3.8.51 into
# release-v3.8.51-deploy on branch perf-upgrade-20260917.
#
# Policy per file:
#   resilience/settings.ts            -> keep OURS (120000)  [deliberate queue-budget change]
#   tests/.../ratelimit-...6593.test  -> keep OURS (asserts 120000) + upstream ADDITIONS
#   codebuddy-cn/index.ts             -> take UPSTREAM (registry no longer imports oauth graph)
#   oauth.ts                          -> take UPSTREAM (re-exports from providerHeaderProfiles)
#   combos/controlCenter.ts           -> take UPSTREAM (leaf providerAlias.ts is client-safe)
#   executors/base.ts                 -> UNION (keep applyProviderRequestDefaults import)
#   .env.example                      -> UNION (keep our two documented knobs)
#   providerModelsConfig.ts           -> UNION (keep opencode identity headers)
set -euo pipefail

cd "$(dirname "$0")"

report() { printf '\n=== %s ===\n' "$1"; }

report "1/8 resilience/settings.ts  -> KEEP OURS"
git checkout --ours src/lib/resilience/settings.ts
git add src/lib/resilience/settings.ts

report "2/8 tests/unit/ratelimit-admission-control-6593.test.ts -> KEEP OURS, then append upstream additions"
git checkout --ours tests/unit/ratelimit-admission-control-6593.test.ts
git add tests/unit/ratelimit-admission-control-6593.test.ts

report "3/8 codebuddy-cn/index.ts -> TAKE UPSTREAM"
git checkout --theirs open-sse/config/providers/registry/codebuddy-cn/index.ts
git add open-sse/config/providers/registry/codebuddy-cn/index.ts

report "4/8 src/lib/oauth/constants/oauth.ts -> TAKE UPSTREAM"
git checkout --theirs src/lib/oauth/constants/oauth.ts
git add src/lib/oauth/constants/oauth.ts

report "5/8 src/lib/combos/controlCenter.ts -> TAKE UPSTREAM"
git checkout --theirs src/lib/combos/controlCenter.ts
git add src/lib/combos/controlCenter.ts

report "6/8 open-sse/executors/base.ts -> UNION"
python3 - <<'PY'
import re, pathlib
p = pathlib.Path("open-sse/executors/base.ts")
s = p.read_text()

# Import 1: keep BOTH applyProviderRequestDefaults (ours) and requireCompatibleBaseUrl (upstream).
s = s.replace(
    '<<<<<<< HEAD\nimport { applyProviderRequestDefaults } from "../services/providerRequestDefaults.ts";\nimport { getRegistryEntry } from "../config/providerRegistry.ts";\n=======\nimport { getRegistryEntry, requireCompatibleBaseUrl } from "../config/providerRegistry.ts";\n>>>>>>> origin/release/v3.8.51\n',
    'import { applyProviderRequestDefaults } from "../services/providerRequestDefaults.ts";\nimport { getRegistryEntry, requireCompatibleBaseUrl } from "../config/providerRegistry.ts";\n',
)
# Import 2: same import, upstream just adds a prettier-ignore comment -> keep upstream form.
s = s.replace(
    '<<<<<<< HEAD\nimport {\n  applyFingerprint,\n  isCliCompatEnabled,\n  stripInternalBodyFields,\n} from "../config/cliFingerprints.ts";\n=======\nimport { applyFingerprint, isCliCompatEnabled, stripInternalBodyFields } from "../config/cliFingerprints.ts"; // prettier-ignore\n>>>>>>> origin/release/v3.8.51\n',
    'import { applyFingerprint, isCliCompatEnabled, stripInternalBodyFields } from "../config/cliFingerprints.ts"; // prettier-ignore\n',
)
p.write_text(s)
left = s.count("<<<<<<<") + s.count(">>>>>>>")
print(f"base.ts remaining conflict markers: {left}")
assert left == 0, "base.ts still conflicted"
PY
git add open-sse/executors/base.ts

report "7/8 .env.example -> UNION (keep ours, append upstream addition if new)"
python3 - <<'PY'
import pathlib
p = pathlib.Path(".env.example")
s = p.read_text()
m = s.find("<<<<<<< HEAD")
if m != -1:
    ours = s[m:].split("<<<<<<< HEAD\n",1)[1].split("=======\n",1)[0]
    theirs = s[m:].split("=======\n",1)[1].split(">>>>>>> origin/release/v3.8.51\n",1)[0]
    # Ours carries two documented knobs; upstream carries only the single older line.
    # Keep ours wholesale, and drop upstream's duplicate RATE_LIMIT_MAX_WAIT_MS line.
    resolved = ours
    if "RATE_LIMIT_EXECUTION_MAX_WAIT_MS" not in resolved:
        resolved += theirs
    s = s[:m] + resolved + s[m:].split(">>>>>>> origin/release/v3.8.51\n",1)[1]
p.write_text(s)
left = s.count("<<<<<<<") + s.count(">>>>>>>")
print(f".env.example remaining conflict markers: {left}")
assert left == 0
PY
git add .env.example

report "8/8 providerModelsConfig.ts -> UNION"
python3 - <<'PY'
import pathlib
p = pathlib.Path("src/app/api/providers/[id]/models/discovery/providerModelsConfig.ts")
s = p.read_text()
m = s.find("<<<<<<< HEAD")
if m != -1:
    ours = s[m:].split("<<<<<<< HEAD\n",1)[1].split("=======\n",1)[0]
    theirs = s[m:].split("=======\n",1)[1].split(">>>>>>> origin/release/v3.8.51\n",1)[0]
    resolved = ours + ("\n" if not ours.endswith("\n") else "") + theirs
    s = s[:m] + resolved + s[m:].split(">>>>>>> origin/release/v3.8.51\n",1)[1]
p.write_text(s)
left = s.count("<<<<<<<") + s.count(">>>>>>>")
print(f"providerModelsConfig remaining conflict markers: {left}")
assert left == 0
PY

report "FINAL: unresolvable-conflict check"
if grep -rn --include='*.ts' --include='*.tsx' --include='*.mjs' --include='*.json' --include='.env.example' -l -e '^<<<<<<< ' -e '^>>>>>>> ' . 2>/dev/null | grep -v node_modules | grep -v '^./.build' | head; then
  echo "WARNING: conflict markers remain (listed above)"
else
  echo "clean: no conflict markers in tracked sources"
fi
git status --short | head -20
