# Quality Gates Reference (සිංහල)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

මෙම ලේඛනය OmniRoute හි සියලුම CI තත්ත්ව ද්වාර සඳහා බලයලත් යොමුව වේ.
එය එක් එක් ද්වාරය, එය වලංගු කරන්නේ කුමක්ද, එය ක්රියාත්මක වන්නේ කුමන CI කාර්යයේද, එය
ratchet මූලික රේඛාවක් හෝ සමත්/අසමත් ප්රතිපත්තියක් භාවිත කරන්නේද, සහ එය build එක අවහිර කරන්නේද නැතහොත් උපදේශාත්මකද යන්න විස්තර කරයි.

කෙටි සාරාංශයක් සහ අවසර ලැයිස්තු ප්රතිපත්තිය සඳහා, `AGENTS.md` හි
"තත්ත්ව ද්වාර සහ Ratchets" කොටස බලන්න. එම පද්ධතියේ විවේචනාත්මක ඇගයීම, පරිණතභාව වර්ගීකරණය සහ මෙවලම්-ස්වාධීන
ප්රතිනිර්මාණ සැලැස්ම සඳහා,
[තත්ත්ව ද්වාර ක්රියාමාර්ග අත්පොත](../ops/QUALITY_GATE_PLAYBOOK.md) බලන්න.

---

## ද්වාර ඉන්වෙන්ටරිය (ස්ක්රිප්ට් ~90)

ස්ක්රිප්ට් `scripts/check/` (ප්රතිපත්ති ද්වාර) සහ `scripts/quality/` (ratchet එන්ජිම) යටතේ පවතී.
CI සඳහා සත්යයේ මූලාශ්රය `.github/workflows/ci.yml` වේ.

### Release PR වේගවත් මාර්ගය (`quality.yml`)

`.github/workflows/quality.yml` ක්රියාත්මක වන්නේ `release/**` ඉලක්ක කරන PR සඳහාය. එය මාර්ගය අනුව පෙරහන් කළ වේගවත් ද්වාර සමඟ දායකයන්ගේ
ශාඛා ඉදිරියට ගෙන යන අතර, කේත
වෙනස්කම් සඳහා එක් උපදේශාත්මක production-build සංඥාවක් ද සපයයි:

| කාර්යය                                           | විෂය පථය                                                                                                                                                                                                                 | අවහිර කිරීම                                                                                |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `Build (advisory)`                               | Draft නොවන කේත PR සහ Mergify පෝලිම් ශාඛා; Node 24, `npm-ci-retry`, `check:node-runtime`, `OMNIROUTE_USE_TURBOPACK=1` සමඟ `npm run build`; එය භාවිත කරන පහළ-ධාරා තත්ත්ව කාර්යයක් නොමැති බැවින් artifact උඩුගත කිරීමක් නැත | **උපදේශාත්මකයි** (`continue-on-error: true`; ස්ථාවර release-PR ධාවන සතියකට පසු ඉවත් කරන්න) |
| `Docs Gates (fast-path)`                         | Docs/code PR; API ලේඛන refs සහ docs-all                                                                                                                                                                                  | ඔව්                                                                                        |
| `Fast Quality Gates`                             | කේත PR; ස්ථිතික පරීක්ෂණ, typecheck, dashboard typecheck, බලපෑමට ලක් වූ unit tests                                                                                                                                        | ඔව්                                                                                        |
| `Forgotten sibling tests`                        | කේත PR; වෙනස් කළ මොඩියුල ස්ථිතික consumers සහ අපේක්ෂිත sibling tests වෙත ලුහුබැඳීම; barrel සහ dynamic-import මාර්ග, යොමු කළ අවසර ලැයිස්තු ව්යතිරේක සමඟ උපදේශාත්මක diagnostics ලෙස වාර්තා කෙරේ                            | **උපදේශාත්මකයි**                                                                           |
| `Vitest (fast-path)`                             | කේත PR; වේගවත් vitest කට්ටලය                                                                                                                                                                                             | ඔව්                                                                                        |
| `Unit Tests fast-path`                           | කේත PR; shard 4ක unit කට්ටලය                                                                                                                                                                                             | ඔව්                                                                                        |
| `No new ESLint warnings`                         | කේත PR; suppressions පිළිබඳ දැනුවත් lint ආරක්ෂකය                                                                                                                                                                         | තමන්ගේම-origin සඳහා ඔව්, forks සඳහා උපදේශාත්මකයි                                           |
| `Merge integrity (changelog + generated skills)` | Draft නොවන PR; changelog සහ ජනනය කළ skill සමමුහුර්තකරණය                                                                                                                                                                  | තමන්ගේම-origin සඳහා ඔව්, forks සඳහා උපදේශාත්මකයි                                           |

#### අමතක වූ sibling tests වාර්තාව

`npm run check:forgotten-sibling-tests` test-impact සිතියම පිටුපස ඇති import resolver එක නැවත භාවිත කරයි.
වෙනස් කරන ලද සෑම production මොඩියුලයක් සඳහාම, අපේක්ෂිත
test එක pull-request diff එකෙහි නොමැති විට එය නිර්ණායක
`වෙනස් කළ මොඩියුලය/සංකේතය -> ස්ථිතික consumer -> අපේක්ෂිත sibling test` දාම වාර්තා කරයි. කිසියම් අවහිර කිරීමේ rollout එකකට පෙර ක්රමාංකනය සඳහා Markdown සාරාංශය සහ JSON ප්රතිඵලය
`forgotten-sibling-tests` workflow artifact ලෙස රඳවා තබා ගනී.

Barrel re-exports සහ dynamic imports යනු resolution diagnostics පමණි; ඒවා කිසිවිටෙක
අවහිර කරන සොයාගැනීමක් නිර්මාණය නොකරයි. සමාලෝචනය කළ ව්යතිරේක
`config/quality/forgotten-sibling-allowlist.json` හි පවතී. සෑම ඇතුළත් කිරීමක්ම consumer සහ අපේක්ෂිත
test එක නම් කළ යුතු අතර, නිශ්චිත හේතුවක් ලබා දී GitHub issue එකකට හෝ pull request එකකට සබැඳියක් එක් කළ යුතුය. දෝෂ සහිත ඇතුළත් කිරීම්
fail closed වේ. ව්යතිරේකවලට මකා දැමූ අපේක්ෂිත test එකක් හෝ `.skip`/`.todo` එක් කරන diff එකක් යටපත් කළ නොහැක;
assertion දුර්වල කිරීම සහ අනෙකුත් masking, ස්වාධීනව අවහිර කරන
`check:test-masking` ද්වාරය යටතේම පවතී.

### කාර්යය: `lint`

`main` වෙත ඇති සෑම PR එකකම ක්රියාත්මක වේ. අසමත් වුවහොත් merge කිරීම අවහිර කරයි.

| ස්ක්රිප්ට් (`npm run ...`)        | වලංගු කරන්නේ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | අවහිරකාරී                              |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| `check:node-runtime`              | Node.js අනුවාදය සහාය දක්වන පරාසය තුළ පවතී                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | ඔව්                                    |
| `check:cycles`                    | චක්රීය imports — සියලුම `src/` + `open-sse/` modules                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | ඔව්                                    |
| `check:route-validation:t06`      | සියලුම routes මත Zod schemas පවතී (Tier 6 ප්රතිපත්තිය)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | ඔව්                                    |
| `check:any-budget:t11`            | `@ts-expect-error // any` ගණන අයවැය නොඉක්මවයි (Tier 11 catraca)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | ඔව්                                    |
| `check:provider-consistency`      | `providers.ts` හි ඇති සෑම provider එකකටම `providerRegistry.ts` හි ගැළපෙන ප්රවේශයක් ඇත (සහ එහි ප්රතිවිරුද්ධයද, allowlist එක තුළ)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | ඔව්                                    |
| `check:model-lifecycle`           | අතින් නඩත්තු කරන routing වගු තුන, repository එකට commit කර ඇති lifecycle snapshot (#11503) සමඟ අනුකූලව පවතී: `FITNESS_TABLE` (`taskFitness.ts`) මඟින් `REGISTRY` හරහා route කළ හැකි retired id කිසිවකට score එකක් ලබා නොදේ; සෑම `BUILT_IN_ALIASES` target එකක්ම `REGISTRY` තුළ පවතින අතර retired-id snapshot එකෙහි නොපවතී; තවමත් `REGISTRY` තුළ ඇති සෑම retired id එකක්ම forward කර ඇත හෝ `allowedRetiredInCatalog` තුළ ලැයිස්තුගත කර ඇත; තවද කිසිදු `DEFAULT_DEGRADATION_MAP` source එකක් හෝ target එකක් එම snapshot එකෙහි retired ලෙස නොපෙන්වයි. මෙමඟින් model එකක් දැනට සජීවී upstream එකක් මඟින් සපයන බව තහවුරු නොවේ. Offline — `config/quality/model-lifecycle.json` සමඟ සසඳයි; එය `npm run quality:refresh-model-lifecycle` භාවිතයෙන් අතින් refresh කරනු ලැබේ (network; CI වෙත සම්බන්ධ කර නැත). `allowedRetiredInCatalog` යනු ක්රමයෙන් අඩු කිරීමට යොදාගන්නා ratchet එකකි: ප්රවේශයක් එක් කළ යුත්තේ tracking issue එකක් සමඟ පමණි. | ඔව්                                    |
| `check:fetch-targets`             | client-side `src/` තුළ ඇති සෑම `fetch("/api/...")` එකක්ම සැබෑ `route.ts` එකකට resolve වේ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | ඔව්                                    |
| `check:deps`                      | repo එකෙහි ඇති සෑම `package.json` එකක් පුරාම `npm install` කළ හැකි සියලු deps, `dependency-allowlist.json` තුළ ඇත; අලුතින් එක් කළ pin නොකළ හෝ slopsquat කළ packages සලකුණු කරයි                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | ඔව්                                    |
| `audit:deps`                      | `npm audit` (root + electron) — high/critical advisories නොමැත (osv `check:vuln-ratchet` සමඟ අතිච්ඡාදනය වේ; Rationalization Backlog බලන්න)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | ඔව්                                    |
| `check:lockfile`                  | `package-lock.json` integrity — https registry, integrity hashes, host overrides නොමැත                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | ඔව්                                    |
| `check:licenses`                  | නිෂ්පාදන පරායත්තතා සඳහා SPDX බලපත්ර අවසර ලැයිස්තුව                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | ඔව්                                    |
| `check:tracked-artifacts`         | build artifacts / commit කළ `node_modules` symlinks නොමැත (husky pre-commit තුළද ධාවනය වේ; pre-push හිතාමතාම සැහැල්ලුවෙන් තබා ඇත — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | ඔව්                                    |
| `check:vitest-exclusions`         | සෑම Vitest exclusion එකක්ම tracking issue එකක් නම් කරන අතර `config/quality/vitest-exclusions.json` තුළ දිස් වේ (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | ඔව්                                    |
| `check:file-size`                 | කිසිදු source file එකක් එක් එක් extension සඳහා වූ උපරිම සීමාව ඉක්මවා නොයයි (ratchet: `frozen` ලැයිස්තුවේ freeze කළ විශාල files)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | ඔව්                                    |
| `check:error-helper`              | executors/handlers තුළ error responses සඳහා `buildErrorBody()` / `sanitizeErrorMessage()` භාවිත කරයි (Hard Rule #12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | ඔව්                                    |
| `check:migration-numbering`       | Migration SQL files හි අංක අනුක්රමික වන අතර, හිඩැස් හෝ අනුපිටපත් නොමැත                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | ඔව්                                    |
| `check:public-creds`              | `publicCreds.ts`-ට පිටතින් සෘජුව සඳහන් කළ OAuth `client_id`/`client_secret` හෝ Firebase Web යතුරු නොමැත (දැඩි රීතිය #11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | ඔව්                                    |
| `check:db-rules`                  | `src/lib/db/` මොඩියුලවලට පිටතින් raw SQL නොමැත; `localDb.ts` වෙතින් barrel-imports නොමැත (දැඩි රීති #2/#5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | ඔව්                                    |
| `check:known-symbols`             | ඒවායේ dispatch tables තුළ ලියාපදිංචි කර ඇති provider executors, routing strategies සහ translators තැටියේ ඇති ගොනු සමඟ ගැළපේ — අනාථ හෝ ප්රකාශ නොකළ symbols නොමැත                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | ඔව්                                    |
| `check:route-guard-membership`    | child process එකක් ආරම්භ කරන සෑම route එකක්ම `isLocalOnlyPath()` මඟින් වර්ගීකරණය කර ඇත (දැඩි රීති #15/#17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | ඔව්                                    |
| `check:test-discovery`            | repo තුළ ඇති සෑම `*.test.ts` / `*.spec.ts` ගොනුවක්ම අවම වශයෙන් එක් test runner එකක් මඟින් එකතු කරනු ලැබේ (ratchet: `test-discovery-baseline.json` හි අනාථ ලැයිස්තුව හැකිලීමට පමණක් හැක)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | ඔව්                                    |
| `check:agent-skills-sync`         | ජනනය කරන ලද agent-skills artifacts ඒවායේ මූලාශ්ර catalog එක සමඟ ගැළපේ (විසංගතියක් නොමැත)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `check:provider-asset-provenance` | Provider logos/assets සඳහා වාර්තාගත provenance ඇතුළත් කිරීමක් ඇත                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `lint:json`                       | JSON වින්යාස ගොනු විග්රහ කළ හැකි අතර repo lint නීති සපුරාලයි                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `typecheck:core`                  | දෝෂ රහිත TypeScript සම්පාදනය (උපදේශන අනතුරු ඇඟවීම් පමණි)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | ඔව්                                    |
| `typecheck:noimplicit:core`       | දැඩි `noImplicitAny` — අනාගතය ඉලක්ක කරගත්; පෙර සිට පවතින බොහෝ ඇමතුම් ස්ථාන සඳහා තවමත් විවරණ අවශ්ය වේ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | **උපදේශන** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | `src/app/(dashboard)/**` වෙත සීමා කළ `tsc` (#7033) — `typecheck:core` හි තෝරාගත් ගොනු 27ක allowlist එකෙහි කිසිදු dashboard TSX ගොනුවක් ඇතුළත් නොවන අතර, `next build` එය කිසිවිටෙක type-check නොකරයි (`next.config.mjs` මඟින් `ignoreBuildErrors: true` සකසයි), එබැවින් එහි ඇති අනාථ-හඳුනාගැනීම් ප්රතිගමන (#6625/#6909) CI වෙත නොපෙනුණි. ස්ථාවර කළ, එක්-ගොනුවකට/එක්-TS-code එකකට අදාළ සංඛ්යා මූලික රේඛාවකට (`config/quality/dashboard-typecheck-baseline.json`, `check:known-symbols` හි ඇති පැරණි-දත්ත බලාත්මක කිරීමේ රටාවට සමාන) එරෙහිව වෙනස්කම් සසඳයි — මූලික රේඛාවේ සංඛ්යාව ඉක්මවන නව දෝෂ පමණක් gate එක අසමත් කරයි; පෙර සිට පැවති දෝෂයක් නිවැරදි කළ විට `--update` සමඟ ratchet එක පහළ දමන්න.                                                                                                                                                                                                                                       | ඔව්                                    |

### කාර්යය: `quality-gate`

`test-coverage` පසු ක්රියාත්මක වේ. අසමත් වුවහොත් merge කිරීම අවහිර කරයි.

| ස්ක්රිප්ට් එක                | වලංගු කරන්නේ                                                                                                                                                                              | අවහිර කිරීම           |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `quality:collect`            | `quality-metrics.json` නිකුත් කරයි (ESLint අනතුරු ඇඟවීම් සංඛ්යාව, ඒකාබද්ධ කළ shard වාර්තාවෙන් coverage)                                                                                   | ඔව් (ratchet එකට පෙර) |
| `quality:ratchet`            | `quality-baseline.json` හි එක් එක් metric එක ප්රතිගමනය වී නොමැත (ESLint අනතුරු ඇඟවීම් ≤ මූලික රේඛාව; coverage ≥ මූලික රේඛාව)                                                              | ඔව්                   |
| `check:duplication`          | කේත අනුපිටපත් වීම (jscpd@4) `quality-baseline.json` හි මූලික රේඛාව නොඉක්මවයි                                                                                                              | ඔව්                   |
| `check:complexity`           | ගොනු-මට්ටමේ චක්රීය සංකීර්ණතාව සීමාව නොඉක්මවයි (core ESLint `complexity` + `max-lines-per-function`)                                                                                       | ඔව්                   |
| `check:cognitive-complexity` | සංජානන සංකීර්ණතා ratchet එක (`eslint-plugin-sonarjs`) — වෙනම ESLint ධාවනයකි; CI එම දෙකම තනි `check:complexity-ratchets` පියවර ලෙස ඒකාබද්ධ කර ධාවනය කරයි                                   | ඔව්                   |
| `check:dead-code`            | භාවිත නොකළ exports / ගොනු ratchet එක (knip) මූලික රේඛාවට සාපේක්ෂව ප්රතිගමනය නොවේ                                                                                                          | ඔව්                   |
| `check:compression-budget`   | සම්පීඩන benchmark අයවැය — එක් එක් engine එක සඳහා වන අවම token ඉතිරිකිරීම් ප්රතිගමනය නොවිය යුතුය                                                                                           | ඔව්                   |
| `check:type-coverage`        | type කර ඇති ප්රතිශතයේ ratchet එක (`type-coverage`) ප්රතිගමනය නොවේ; බොහෝ දුරට `typecheck:noimplicit:core` ආවරණය කරයි                                                                       | ඔව්                   |
| `check:codeql-ratchet`       | විවෘත CodeQL ඇඟවීම් සංඛ්යාව ප්රතිගමනය නොවේ (`gh api` හරහා කියවයි; token එකක් නොමැති විට නිසි ලෙස මඟ හරියි) — යාවත්කාලීන කිරීමේ වාර ගණන සහ අතින් trigger කිරීම: පහත "CodeQL ratchet" බලන්න | ඔව්                   |

### කාර්යය: `quality-extended`

සම්පූර්ණ job එකම උපදේශනාත්මකයි (`continue-on-error: true`). npm මත පදනම් වූ ratchet සැබෑ ලෙසම ධාවනය වේ;
බාහිර scanner `gh release download` හරහා ස්ථාපනය වන අතර binary එකක් තවමත් නොමැති විට
ස්වයංක්රීයව මඟ හරියි (exit 0).

| Script                   | තහවුරු කරන්නේ                                                                                                                                                                                          | අවහිර කිරීම     |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| `check:circular-deps`    | චක්රීය පරායත්තතා නොමැති බව (dpdm)                                                                                                                                                                      | **උපදේශනාත්මක** |
| `check:bundle-size`      | Bundle ප්රමාණය සීමාව ඉක්මවා නොයන බව                                                                                                                                                                    | **උපදේශනාත්මක** |
| `check:secrets`          | රහස් පරිලෝකනය (gitleaks) — binary එක නොමැති නම් මඟ හරියි                                                                                                                                               | **උපදේශනාත්මක** |
| `check:vuln-ratchet`     | පරායත්තතා දුර්වලතා (osv-scanner) පසුබැසීමකට ලක් නොවන බව — binary එක නොමැති නම් මඟ හරියි                                                                                                                | **උපදේශනාත්මක** |
| `check:workflows`        | Workflow lint කිරීම (actionlint + zizmor) — binary නොමැති නම් මඟ හරියි                                                                                                                                 | **උපදේශනාත්මක** |
| `check:openapi-breaking` | මූලික branch එකට සාපේක්ෂව පොදු API ගිවිසුමෙහි (`openapi.yaml`) බිඳීම් ඇති කරන වෙනස්කම් (oasdiff) — `openapiBreaking=N` නිකුත් කරයි; oasdiff නොමැති නම් හෝ මූලික spec එක resolve කළ නොහැකි නම් මඟ හරියි | **උපදේශනාත්මක** |

### Job: `docs-sync-strict`

`main` වෙත යොමු කරන සෑම PR එකකදීම ධාවනය වේ. අසාර්ථක වුවහොත් merge කිරීම අවහිර කරයි.

| Script                         | තහවුරු කරන්නේ                                                                                                                                                | අවහිර කිරීම                  |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- |
| `check:docs-all`               | පහත sub-gate 6 අනුක්රමිකව ධාවනය කරන meta-gate එක                                                                                                             | ඔව්                          |
| ↳ `check:docs-sync`            | CHANGELOG / OpenAPI / llm.txt අනුවාද අනුකූලතාව                                                                                                               | ඔව්                          |
| ↳ `check:docs-counts`          | ගද්යයේ ඇති ගණන් (provider ගණන, migration ගණන ආදිය) සැබෑ ගණන්වල ratchet කවුළුව තුළ පවතින බව                                                                   | ඔව්                          |
| ↳ `check:env-doc-sync`         | `.env.example` තුළ ඇති සෑම env var එකක්ම docs වගුවක ලේඛනගත කර ඇති බවත්, එහි ප්රතිලෝමයත්                                                                      | ඔව්                          |
| ↳ `check:deprecated-versions`  | docs තුළ අත්හැර දැමූ අනුවාද string නොමැති බව                                                                                                                 | ඔව්                          |
| ↳ `check:doc-links`            | docs තුළ ඇති අභ්යන්තර markdown link සැබෑ file වෙත resolve වන බව (`[text]`/`(path)` ආකෘතිය)                                                                   | ඔව්                          |
| ↳ `check:fabricated-docs`      | docs තුළ සඳහන් route, env var, CLI command, hook නාම සහ file path codebase එක තුළ පවතින බව. `--strict` හරහා hard gate එකක්; flag එක නොමැති විට soft-fail වේ. | ඔව් (CI තුළ `--strict` හරහා) |
| `check:cli-i18n`               | CLI command string සියලු i18n locale file තුළ පවතින බව                                                                                                       | ඔව්                          |
| `check:openapi-coverage`       | OpenAPI spec එක සැබෑ route සඳහා අවම වශයෙන් ratchet කරන ලද පහළ සීමාවක් ආවරණය කරන බව                                                                           | ඔව්                          |
| `check:openapi-security-tiers` | `openapi.yaml` තුළ ඇති ආරක්ෂක මට්ටම් annotation, `routeGuard.ts` වර්ගීකරණ සමඟ අනුකූල බව                                                                      | **උපදේශනාත්මක**              |
| `check:openapi-routes`         | `openapi.yaml` තුළ ඇති සෑම path එකක්ම සැබෑ `route.ts` එකකට resolve වන බව (ව්යාජ නිර්මාණ වැළැක්වීම)                                                           | ඔව්                          |
| `check:docs-symbols`           | `docs/**/*.md` තුළ ඇති සෑම `/api/...` යොමුවක්ම සැබෑ `route.ts` එකකට resolve වන බව (ව්යාජ නිර්මාණ වැළැක්වීම)                                                  | ඔව්                          |
| `i18n translation drift`       | i18n locale file තුළ පරිවර්තනය නොකළ key — අනතුරු ඇඟවීමක් පමණි                                                                                                | **උපදේශනාත්මක**              |

### Job: `i18n-ui-coverage`

| ස්ක්රිප්ට්                        | තහවුරු කරන්නේ                                                                                                                                                                          | අවහිර කරනවාද     |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| `check-ui-keys-coverage` (inline) | UI i18n යතුරු ආවරණය ≥ 65% බව                                                                                                                                                           | ඔව්              |
| `check-ui-value-drift` (inline)   | නැවත ලියන ලද ඉංග්රීසි **අගයක්** හේතුවෙන් යල් පැන ගිය පරිවර්තනයක් ඉතිරි නොවන බව                                                                                                         | ඔව්              |
| `check-new-key-coverage` (inline) | **නව** ඉංග්රීසි යතුරක් සෑම locale එකකටම ළඟා වන බව                                                                                                                                      | ඔව්              |
| `check-translation-ratio`         | එක් එක් locale සඳහා සැබෑ-පරිවර්තන අනුපාතය (allowlist එකෙන් පිටත ඉංග්රීසියට සමාන / placeholder / අස්ථානගත පත්ර) `config/quality/i18n-translation-baseline.json` + slack නොඉක්මවිය යුතුය | **උපදේශාත්මකයි** |

`fetch-depth: 0` අවශ්යයි — value-drift gate එක merge base එකට සාපේක්ෂව `en.json` හි වෙනස්කම් සසඳයි.

#### `check-ui-value-drift` — යල් පැන ගිය පරිවර්තන gate එක

අනෙක් gate වලට ව්යුහාත්මකව හඳුනාගත නොහැකි එකම i18n regression එක මෙය හඳුනා ගනී: ඉංග්රීසි අගයක්
නැවත ලියූ විට _පෙර_ ඉංග්රීසියෙන් ව්යුත්පන්න කළ පරිවර්තන එලෙසම ඉතිරි වන නිසා,
ඉංග්රීසි නොවන පරිශීලකයන් නිශ්චිත ස්වරයකින් ලියා ඇති, නමුත් දැන් වැරදි පිටපතක් දිගටම කියවයි.

මෙය ඇත්ත වශයෙන්ම නිකුත් විය. Antigravity පිවිසුම් සහායකය එක් කළ විට (#5203)
`oauthModal.googleOAuthWarning` නැවත ලියන ලදී; **locale 43න් 39ක්** ක්රියාකරුවන්ට "සම්පූර්ණ
URL එක පිටපත් කර පහළින් අලවන්න" යැයි කියන පෙළ තබාගෙන තිබුණි — එම provider සඳහා සම්පූර්ණ
කළ නොහැකි ප්රවාහයකි. පහත හේතු නිසා #8463 දක්වා එය අවධානයට ලක් නොවීය:

- `sync-ui-keys` පසුපිරවීම කරන්නේ **නොපවතින** යතුරු පමණි, **යල් පැන ගිය** ඒවා කිසිවිටෙකත් නොවේ;
- `check-ui-keys-coverage` යතුරේ _පැවැත්ම_ ගණන් කරන බැවින්, යල් පැන ගිය පරිවර්තනයක් ආවරණය වූවක් ලෙස ලකුණු ලබයි;
- `check-translation-drift` `docs/i18n/<locale>/**.md` ප්රලේඛන ප්රතිබිම්බ නිරීක්ෂණය කරයි —
  එය කිසිවිටෙකත් `src/i18n/messages/*.json` කියවන්නේ නැත. 2026-09 නැවත සමමුහුර්ත කිරීමේ සිට
  `docs-sync-strict` job එකේ අවහිර කරයි: මූලික doc එකක් සංස්කරණය කරන්න → `npm run i18n:run -- --files=<doc>` (කොටස් මට්ටමේ, අඩු වියදම්).

**Baseline මත නොව, diff මත දැනුවත්ය.** එය merge base එකේ `en.json` working tree එක සමඟ
සසඳයි; ඉංග්රීසි අගය වෙනස් වූ සෑම යතුරක් සඳහාම, තවමත් වෙනස් නොකළ පරිවර්තනයක් දරන ඕනෑම
locale එකක් යල් පැන ගොස් ඇත. මෙය හිතාමතාම **පෙර පැවති ණය ස්ථිර කරයි** — දිගු කලක් පවතින
පරිවර්තනයක් කුමන පැරණි ඉංග්රීසියකින් පැමිණියේදැයි diff එකකට හෙළි කළ නොහැකි බැවින්, gate එක
විනිශ්චය කරන්නේ වත්මන් වෙනස ස්පර්ශ කරන දේ පමණි. විකල්පය (යතුරකට hash baseline එකක්) සඳහා
~600 KB ජනනය කළ ගොනුවක් අවශ්ය වනු ඇත; එය විශාලතම පවතින baseline එකට වඩා 3× විශාල වන අතර, සෑම i18n PR එකකදීම වෙනස් වේ.

එය සපුරාලීමට ක්රම දෙකක් ඇත:

1. බලපෑමට ලක් වූ පරිවර්තන යාවත්කාලීන කරන්න, හෝ
2. ඒවා `__MISSING__:<new english>` ලෙස සකසන්න — එවිට runtime එක නිවැරදි කළ ඉංග්රීසිය
   (`src/i18n/request.ts::deepMergeFallback`, #7258) සපයන අතර යතුර පරිවර්තනය සඳහා පෝලිම්ගත වේ.

වාක්ය ඛණ්ඩයේ **අර්ථය** වෙනස් වූයේ නම්, **යතුර නැවත නම් කිරීම** වඩා සුදුසුය: නව යතුරකට
යල් පැන ගිය පරිවර්තනයක් උරුම විය නොහැක. #8463 භාවිත කළ රටාව එයයි.

```bash
npm run i18n:check-value-drift          # දැඩි (CI ධාවනය කරන ආකාරය)
npm run i18n:check-value-drift:warn     # වාර්තා කිරීම පමණි
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

base catalog එක කියවිය නොහැකි විට (`base ref` එක නොමැති shallow
clone එකක්), `check-openapi-breaking` අනුකරණය කරමින් `SKIP reason=base-unresolved` සමඟ 0 අගයෙන් පිටවෙයි.

### Job: `i18n`

සම්පූර්ණ i18n තහවුරුකරණ matrix එක (locale එකකට එක් job එකක්). සම්පූර්ණ job එකම උපදේශාත්මකයි.

| ස්ක්රිප්ට්                      | තහවුරු කරන්නේ                             | අවහිර කරනවාද                                                  |
| ------------------------------- | ----------------------------------------- | ------------------------------------------------------------- |
| `validate_translation.py quick` | එක් එක් locale සඳහා පරිවර්තන සම්පූර්ණත්වය | **උපදේශාත්මකයි** (සම්පූර්ණ job එකේ `continue-on-error: true`) |

### Job: `pr-test-policy`

pull request මත පමණක් ධාවනය වේ.

| ස්ක්රිප්ට්             | තහවුරු කරන්නේ                                                                                                                                        | අවහිර කරනවාද |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `check:pr-test-policy` | `src/`, `open-sse/`, `electron/`, හෝ `bin/` තුළ production code වෙනස් කරන PR සඳහා tests ඇතුළත් කිරීම හෝ යාවත්කාලීන කිරීම අනිවාර්ය බව (දැඩි නීතිය #8) | ඔව්          |
| `check:test-masking`   | වෙනස් කළ test ගොනු ශුද්ධ assert ගණන අඩු නොකරන බව හෝ `assert.ok(true)` පුනරුක්ති එක් නොකරන බව                                                         | ඔව්          |
| `check:pr-evidence`    | PR body එක වෙනස සඳහා test/VPS සාක්ෂි උපුටා දක්වන බව (PR ගද්යය grep කිරීමෙන් දැඩි නීතිය #18 යාන්ත්රික කරයි — බිඳෙනසුලුය, Backlog බලන්න)               | ඔව්          |

### Job: `test-vitest`

`build` පසු ධාවනය වේ. අසාර්ථක වුවහොත් merge කිරීම අවහිර කරයි.

| පරීක්ෂණ කට්ටලය   | වලංගු කරන්නේ                                                    | අවහිර කිරීම                                                                                                                 |
| ---------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `test:vitest`    | MCP සේවාදායකය (මෙවලම් 110ක්), autoCombo, හැඹිලිය — vitest ධාවකය | ඔව්                                                                                                                         |
| `test:vitest:ui` | UI සංරචක පරීක්ෂණ — vitest ධාවකය                                 | **අවහිර කරයි** — පෙර සිට පවතින අසාර්ථකවීම් `vitest.config.ts` තුළ පැහැදිලිව බැහැර කර ඇත; නව අසාර්ථකවීම් කාර්යය අසාර්ථක කරයි |

### රාත්රී කාර්ය ප්රවාහ (කාලසටහන්ගත, උපදේශාත්මක)

මේවා cron කාලසටහනකට අනුව (සහ `workflow_dispatch` මඟින්) ධාවනය වන අතර, PR මත කිසිවිටෙකත් ධාවනය නොවේ. සියල්ල උපදේශාත්මක වේ.

| කාර්ය ප්රවාහය          | වලංගු කරන්නේ                                                                                                                                                                 | අවහිර කිරීම    |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `nightly-property`     | අහඹු seed එකක් සහ ඉහළ ධාවන සංඛ්යාවක් සහිත fast-check ගුණාංග පරීක්ෂණ                                                                                                          | **උපදේශාත්මක** |
| `nightly-resilience`   | heap වර්ධන ද්වාරය, chaos දෝෂ-ඇතුළත් කිරීම, k6 භාර/දිගුකාලීන පරීක්ෂණ                                                                                                          | **උපදේශාත්මක** |
| `nightly-llm-security` | promptfoo injection ආරක්ෂණය (අවහිර කිරීමේ ප්රකාරය) + garak පරීක්ෂණ (සපයන්නාගේ රහස් අගයක් නොමැති විට මඟ හරිනු ලැබේ)                                                           | **උපදේශාත්මක** |
| `nightly-schemathesis` | `docs/openapi.yaml` භාවිතයෙන් සජීවී OmniRoute එකකට එරෙහි OpenAPI ගිවිසුම් fuzz පරීක්ෂණ (schemathesis) — පිරිවිතර උල්ලංඝන / හසුරුවා නොමැති 500 දෝෂ අනාවරණය කරයි (අදියර 8 B.4) | **උපදේශාත්මක** |
| `nightly-mutation`     | වේගවත් ඒකක පරීක්ෂණ මංතීරුව මත Stryker mutation-testing ලකුණු — නොනැසී පවතින mutants දුර්වල assert හෙළි කරයි                                                                  | **උපදේශාත්මක** |
| `nightly-compat`       | සහාය දක්වන `engines.node` පරාස හරහා Node engine අනුකූලතා න්යාසය                                                                                                              | **උපදේශාත්මක** |

---

## Velocity අදියර (2026-08-30 → v4.0 LTS): සෑම මූලික සීමාවක්ම 20%කින් ලිහිල් කරන ලදී

හිමිකරුගේ තීරණය (2026-08-30): v4.0 මොඩියුලීකරණය දක්වා, තාක්ෂණික ණය සීමාව
පවත්වා ගැනීමට වඩා නිකුත් කිරීමේ වේගය වැදගත් වේ. සෑම **සංඛ්යාත්මක** ratchet මූලික සීමාවක්ම
විගණනය කළ හැකි එක් වරක ක්රියාවලියකින් 20%කින් ලිහිල් කළ අතර, අදියර
`config/quality/quality-baseline.json` තුළ ප්රකාශ කර ඇත:

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| වෙනස් කළ දේ                                                                                                                                                                                               | ස්ථානය                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `metrics.*.value` — අඩු අගයක් වඩා හොඳ වන ගණන් ×1.2, වැඩි අගයක් වඩා හොඳ වන ප්රතිශත ÷1.2 (coverage අවම සීමාව 60 ලෙස තබා ඇත, `eslintErrors` 0 ලෙසම පවතී, `eslintWarnings` 0 → ස්ථිර කළ suppression ගණනේ 20%) | `quality-baseline.json` (`_relax_velocity_2026_08_30` සටහනෙහි සෑම පෙර අගයක් → පසු අගයක්ම ලැයිස්තුගත කර ඇත) |
| `count` ×1.2 / `percentage` ×1.2                                                                                                                                                                          | `complexity-baseline.json`, `duplication-baseline.json`                                                    |
| `cap`, `testCap`, සෑම `frozen[*]` / `testFrozen[*]` පේළි සීමාවක්ම ×1.2                                                                                                                                    | `file-size-baseline.json`                                                                                  |
| එක් ගොනුවකට / එක් TS කේතයකට අදාළ ගණන් ×1.2                                                                                                                                                                | `api-typecheck-baseline.json`, `dashboard-typecheck-baseline.json`, `open-sse-typecheck-baseline.json`     |
| `THRESHOLD` 36 → 30                                                                                                                                                                                       | `scripts/check/check-openapi-coverage.mjs`                                                                 |
| `_policy.requireTighten === false` වන විට `--require-tighten` උපදේශාත්මක වේ                                                                                                                               | `scripts/quality/check-quality-ratchet.mjs`                                                                |
| රාත්රී `bank-ratchet-shrinks` ක්රියාවලිය විරාම ගනී (එය මනින ලද අඩු වීම තැන්පත් කර, අතිරේක ඉඩ අවලංගු කරනු ඇත)                                                                                              | `.github/workflows/nightly-release-green.yml`                                                              |

අවසර ලැයිස්තු (`eslint-suppressions.json`, `test-masking-allowlist.json`, `test-discovery-baseline.json`,
…) යනු අයවැය **නොවන** අතර ඒවා වෙනස් කර නැත. සමත්/අසමත් ප්රතිපත්ති දොරටු (රහස්, SQL නීති,
docs/env ගිවිසුම, i18n සමානතාව, ඒකක පරීක්ෂණ) වෙනස් කර නැත — අසමත් පරීක්ෂණයක් තවමත් අසමත් පරීක්ෂණයකි.

**මෙවලම්**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — එක් වරක් පමණක්
  සිදු කරන ලිහිල් කිරීම (`scripts/quality/relax-baselines.mjs`); එකම සටහන සමඟ දෙවරක් ධාවනය කිරීම ප්රතික්ෂේප කරයි.
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  CI විසින් කරන ආකාරයටම සෑම සංඛ්යාත්මක දොරටුවක්ම මනින අතර එක් එක් දොරටුවට ඉතිරිව ඇති අතිරේක ඉඩ පෙන්වයි
  (`scripts/quality/baseline-headroom.mjs`). රාත්රී `baseline-headroom` කාර්යය
  **📈 Baseline headroom (velocity phase)** යන සක්රිය issue එකට වගුව පළ කරන අතර,
  යම් දොරටුවක් එහි සීමාවෙන් 10%ක් ඇතුළත හෝ දැනටමත් එය ඉක්මවා ඇත්නම්
  `headroom-alert` ලේබලය එක් කරයි. එම issue එක පූර්ව අනතුරු ඇඟවීමයි: දින කිහිපයකින්
  පිරෙන අයවැයක් අදහස් කරන්නේ ලිහිල් කිරීම මුළු කණ්ඩායම විසින් නොව PR කිහිපයක් විසින්
  පරිභෝජනය කරන බවයි — අදාළ දොරටුවේ `_rebaseline_*` සටහන් බලන්න.

**නව-කේත ප්රකාරය (Clean-as-You-Code) — 2026-08-30 සිට, PR වේගවත් මාර්ගය සඳහා පමණි**

`pull_request` සිදුවීම්වලදී `quality.yml`, `check:file-size`,
`check:complexity-ratchets` සහ `check:dead-code` වෙත `--base-ref <PR base SHA>` ලබා දෙයි.
එම ප්රකාරයේදී දොරටුව, PR එක ස්පර්ශ කළ ගොනුවලට **සීමා කර**, HEAD merge-base එක සමඟ
සසඳයි (`scripts/check/newCodeMode.mjs`: merge-base එක තාවකාලික `git worktree` එකක
නිර්මාණය කර, ESLint/knip එහි සහ HEAD මත ධාවනය කර, එක් එක් ගොනුවේ ගණන්වල වෙනස ගණනය කරයි):

- **අවහිර කරන** — PR එක වෙනස් කළ ගොනුවලට cyclomatic/cognitive උල්ලංඝන හෝ dead exports එක් කර ඇත
  (ලොගය තුළ `complexityNewCode=`, `cognitiveComplexityNewCode=`, `deadExportsNewCode=`);
- **උපදේශාත්මක** — ස්ථිර කළ මූලික සීමාවට සාපේක්ෂ ගෝලීය එකතුව. උරුම වූ අපගමනයක්
  නිදොස් PR එකක් කිසිවිටෙක අසමත් නොකරයි; නිකුතු ප්රතිසන්ධානයේදී එම අපගමනය නැවත ස්ථිර කර,
  headroom කාර්යය මඟින් නිරීක්ෂණය කරයි.

`workflow_dispatch` ධාවන, release-green පූර්ණ පරීක්ෂාව සහ රාත්රී headroom කාර්යයට PR base එකක්
නොමැති බැවින් නිරපේක්ෂ (ගෝලීය) සැසඳීම දිගටම භාවිත කරයි. Coverage, duplication සහ type-coverage
දැනට ගෝලීයව පවතී (ඒවායේ මෙවලම් අඩු වියදමකින් එක් ගොනුවකට අදාළ වෙනසක් ලබා නොදේ) — එම
සැලකීමම යෙදීම සඳහා අපේක්ෂකයන් වේ.

**v4.0 දී අදියර අවසන් කිරීම (LTS = පෙරට වඩා දැඩි වීම, "නැවත සාමාන්ය තත්ත්වයට" නොවේ)**

1. පිරිසිදු `release/v4.0.0` ශීර්ෂයේදී: වාර්තාව සඳහා `npm run quality:headroom --json` ධාවනය කර, ඉන්පසු
   `npm run quality:ratchet -- --update`, `check:file-size --update`,
   `check:complexity-ratchets --update`, `check:dead-code --update`, සහ එක් එක් typecheck ද්වාරයේ
   `--update` ධාවනය කරන්න — සෑම baseline එකක්ම මනින ලද අගය දක්වා පහත වැටේ.
2. `quality-baseline.json` වෙතින් `_policy` මකා දමන්න (`--require-tighten` සහ රාත්රී
   banking නැවත සක්රිය කරයි), `check-openapi-coverage.mjs` තුළ `THRESHOLD = 36` (හෝ ඊට වැඩි අගයක්) ප්රතිසාධනය කරන්න.
3. මොඩියුලකරණයෙන් ප්රතිලාභ ලැබුණු තැන්වල මනින ලද අගයටත් වඩා සීමා දැඩි කරන්න: file-size `cap` නැවත 1000
   (හෝ 800) දක්වා, coverage floors +5 කින්, මොඩියුලකරණය කළ packages සඳහා dead exports 0 දක්වා.

## Ratchet මූලික රේඛාව (`quality-baseline.json`)

Ratchet එන්ජිම (`scripts/quality/check-quality-ratchet.mjs`) `quality-baseline.json` කියවා,
අලුතින් රැස් කළ `quality-metrics.json` සමඟ එය සසඳයි. එහි epsilon සීමාව ඉක්මවා
පසුබැසෙන ඕනෑම ප්රමිතිකයක් build එක අසාර්ථක කරයි.

දැනට නිරීක්ෂණය කරන ප්රමිතික:

| ප්රමිතිකය             | දිශාව  | අර්ථය                                     |
| --------------------- | ------ | ----------------------------------------- |
| `eslintWarnings`      | `down` | ESLint අනතුරු ඇඟවීම් ගණන වැඩි නොවිය යුතුය |
| `coverage.statements` | `up`   | Statement coverage අඩු නොවිය යුතුය        |
| `coverage.lines`      | `up`   | Line coverage අඩු නොවිය යුතුය             |
| `coverage.functions`  | `up`   | Function coverage අඩු නොවිය යුතුය         |
| `coverage.branches`   | `up`   | Branch coverage අඩු නොවිය යුතුය           |

සැබෑ වැඩිදියුණු කිරීමකින් පසු මූලික රේඛාව යාවත්කාලීන කිරීමට:

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

`--update` ධජය දැනට මනින ලද අගයන් `quality-baseline.json` වෙත ලියයි.
ප්රමිතිකය වැඩිදියුණු කළ වෙනස සමඟ මෙම ගොනුව commit කරන්න. මූලික රේඛාව යාවත්කාලීන
නොකර ප්රමිතිකයක් වැඩිදියුණු කරන PR එකක් `--require-tighten` මඟින් හඳුනාගනු ඇත
(අදියර 6A.5, ක්රියාත්මක කිරීම අපේක්ෂිතයි).

### CodeQL ratchet: නැවුම් කිරීමේ වාර ගණන සහ අතින් ක්රියාත්මක කිරීම

`check:codeql-ratchet` කියවන්නේ **කාලසටහනකට අනුව නැවුම් කරන repo තත්ත්වයයි — එක් එක් PR සඳහා නොවේ.**
`gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup` මඟින්
`state: configured`, `schedule: weekly` වාර්තා කරයි: මෙය එක් එක් push සඳහා කරන
විශ්ලේෂණයක් නොව, GitHub හි default-setup scan එකයි. ප්රතිවිපාකය: alerts නිවැරදි කරන
PR එකක් merge කිරීමෙන් පසුව, ඊළඟ කාලසටහන්ගත scan එක ක්රියාත්මක වන තුරු ratchet එක
පැරණි, වැඩි ගණන දිගටම කියවයි — එබැවින් scan එක යාවත්කාලීන වන තුරු, නිවැරදි කිරීමේ
PR එකටම අදාළ follow-up ඇතුළුව සෑම විවෘත PR එකකම එය පසුබැසීමක් වාර්තා කරයි.

**අතින් නැවුම් කිරීම**: `gh workflow run codeql.yml --ref release/vX.Y.Z` මඟින්
විශ්ලේෂණය නැවත ක්රියාත්මක කර මිනිත්තු කිහිපයක් ඇතුළත alerts නැවත ප්රකාශයට පත් කරයි.
පළමුව `.github/workflows/codeql.yml` කියවන්න — එය `workflow_dispatch` පමණක් වන්නේ
**එය GitHub හි "default setup" සමඟ ගැටෙන නිසා** බව එහි ශීර්ෂකය පැහැදිලි කරයි
(`CodeQL analyses from advanced configurations cannot be processed when the default setup is enabled`).
`push`/`pull_request`/`schedule` triggers නැවත ස්ථාපනය කිරීමට පෙර **owner ක්රියාවක්**
අවශ්ය වේ: Settings → Code security → CodeQL: Default → Advanced. එම මාරුව සිදු
නොකර `schedule:` trigger එකක් එක් නොකරන්න — එයින් සිදුවන්නේ අසාර්ථක runs පමණි.

**ගණන අඩු වූ පසු මූලික රේඛාව දැඩි කරන්න** — `node scripts/check/check-codeql-ratchet.mjs
--update` මඟින් අලුතින් මනින ලද ගණන `quality-baseline.json` →
`metrics.codeqlAlerts.value` වෙත ලියයි. එබැවින් පැරණි උපරිම සීමාව දක්වා නැවත සිදුවන
පසුබැසීමකට ratchet එක නිහඬව අවසර නොදෙයි. ක්රියාත්මක කළ උදාහරණය (2026-09-02/03):
PR #12502 මඟින් සැබෑ alerts 7ක් නිවැරදි කරන ලදී (මනින ලද විවෘත alerts 13 → 6);
PR #12530 මඟින් එයට ගැළපෙන ලෙස ස්ථාවර කළ මූලික රේඛාව 11 → 6 දක්වා දැඩි කරන ලදී;
ඉතිරි 6 පසුව එක් එක් alert සඳහා හේතු දැක්වීමක් සහිතව ඉවත් කර, විවෘත ගණන 0 දක්වා අඩු කරන ලදී.

**ඉවත් කිරීම් තීරණය කිරීම operator සතුය (දැඩි නීතිය #14)** — dismissal comment එකේ
තාක්ෂණික හේතුව සටහන් නොකර කිසිවිටෙක CodeQL alert එකක් ඉවත් නොකරන්න: upstream-protocol
අවශ්යතාවක් සඳහා `won't fix`, test fixture එකක් සඳහා `used in tests`, CodeQL හට
හඳුනාගත නොහැකි sanitizer එකක් සඳහා `false positive` (පූර්වාදර්ශය:
`docs/security/ERROR_SANITIZATION.md`).

---

## පරීක්ෂණ නැවත උත්සාහ කිරීමේ ප්රතිපත්තිය (WS5.4, v3.8.49)

නැවත උත්සාහ කිරීම එක් එක් runner එකට අදාළ වන අතර, කිසිවිටෙකත් සමස්ත පද්ධතියටම අදාළ පොදු ආවරණයක් නොවේ — පොදු නැවත උත්සාහ කිරීමක් සැබෑ ප්රතිගමන
නොපෙනෙන අස්ථාවරතා බවට පත් කරයි:

| Runner           | ප්රතිපත්තිය                                                                                                                                                        | හේතුව                                                                                                                                 |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| Playwright (e2e) | CI තුළ පමණක් `retries: 1`, `trace: on-first-retry` සමඟ                                                                                                             | බ්රවුසර/ජාල කාලගැන්වීම සැබැවින්ම අනියතය; trace එකක් සහිත එක් නැවත උත්සාහයක් අස්ථාවරතාවක් විශ්ලේෂණය කළ හැකි artifact එකක් බවට පත් කරයි |
| Vitest           | ගෝලීය නැවත උත්සාහ කිරීමක් නැත. අස්ථාවර බව තහවුරු වූ පරීක්ෂණයකට පැහැදිලි, එක්-පරීක්ෂණ නැවත උත්සාහ කිරීමක් ලබා දෙයි (diff එකේ දෘශ්යමාන වන අතර, PR තුළ සමාලෝචනය කෙරේ) | නිරෝධායන ලැයිස්තුව repo එක තුළ තබයි, කිසිවිටෙකත් අපැහැදිලි නොවේ                                                                       |
| node:test (unit) | කිසිවිටෙකත් නැවත උත්සාහ නොකරන්න                                                                                                                                    | අස්ථාවර unit පරීක්ෂණයක් යනු පරීක්ෂණයේ දෝෂයකි — එය නිවැරදි කරන්න, නැවත වාසනාව උරගා නොබලන්න                                             |

අස්ථාවරතා telemetry එක ක්රියාත්මක වූ පසු ඉලක්කගත SLO (WS5.2/5.3): එක් පරීක්ෂණයකට <1% අස්ථාවරතා අනුපාතයක්
("දැන් නිවැරදි කරන්න" සීමාව), එක් pipeline එකකට ≥95% සමත් අනුපාතයක්. කර්මාන්තයේ යොමු අගයන් —
අපගේම මිනුම්වලට අනුව නැවත ක්රමාංකනය කරන්න.

## නිකුතු-මට්ටමේ Ratchet විස්ථාපනය (WS5.5, v3.8.49)

ratchet එකක් (ගොනු ප්රමාණය, සංකීර්ණත්වය, eslint අවවාද) පිරිසිදු නිකුතු
tip එක මත ප්රතිගමනය වන විට — එනම් merges වල **සංයෝජනය** එය ප්රතිගමනය කර ඇති අතර, කිසිදු තනි PR එකක් තමන්ගේම branch එක මත
එම ප්රතිගමනය ප්රතිනිෂ්පාදනය නොකරන විට — නිවැරදි කිරීම **release captainට, එක් වරක්,
release branch එක මත** අයත් වේ: extraction/refactor කිරීම වඩාත් සුදුසුය; ලේඛනගත
සාධාරණීකරණ සටහනක් සමඟ පමණක් rebaseline කරන්න. සංයෝජන විස්ථාපනයක් කිසිවිටෙකත් contributor PR එකකට පවරන්න එපා, එසේම
එක් එක් PR සඳහා rebaseline කරන්නත් එපා (එය සැබෑ ප්රතිගමන සඟවයි). පළමුව වෙනස හඳුනාගන්න: ඔබගේ PR එක එයට හේතු වූ බව උපකල්පනය කිරීමට පෙර
probe worktree එකක පිරිසිදු tip එකට එරෙහිව අසමත් තත්ත්වය ප්රතිනිෂ්පාදනය කරන්න.

## Ratchet හැකිළීම් බැංකුගත කිරීම — පහළට යන දිශාව (#8584)

ratchet එක අර්ධ වශයෙන් පමණක් ස්වයංක්රීය වන අතර, ස්වයංක්රීයව ඇත්තේ වැරදි අර්ධයයි. සීමාවක් **ඉහළ දැමීම**
තත්පර දහයක් ගතවන අතින් සිදුකරන JSON සංස්කරණයක් වන අතර, අසමත් PR එකක අවහිරතාව ඉවත් කිරීමට ඇති වේගවත්ම ක්රමයයි.
සීමාවක් **පහළ දැමීමට** යමෙකු `--update` ධාවනය කර ප්රතිඵලය commit කළ යුතුය — තවද
`bank-ratchet-shrinks` job එක එක් කරන තෙක්, කිසිදු workflow එකක් එය ධාවනය කළේ නැත. මනින ලද ප්රතිවිපාකය
(2026-07-25): frozen ගොනු 18ක් දැනටමත් පේළි 800ක නව-ගොනු සීමාවට හෝ ඊට පහළින් තිබූ අතර, නරකම එක
132× විය (`src/shared/validation/schemas.ts`, පේළි 19ක් සඳහා 2,523ක සීමාවක්); සංකීර්ණත්ව උපරිමය
~37 rebaseline සටහන් හරහා `1794 → 2169` දක්වා ගමන් කළ අතර අඩුවීමක් තිබුණේ හරියටම එකක් පමණි
(−1); තවද "ඊළඟ චක්රයේ `--update` හරහා තද කරන්න" යන්න 31 වතාවක් ලියා, ක්රියාත්මක කර තිබුණේ
එක් වරක් පමණි. එය උපයා දුන් කේතයට වඩා දිගුකල් පවතින සීමාවක්, සම්පූර්ණ කළ සෑම
විභජනයක්ම ඊළඟට එම ගොනුව සංස්කරණය කරන අය සඳහා වර්ධන දීමනාවක් බවට නිහඬව පරිවර්තනය කරයි.

`nightly-release-green.yml` → **`bank-ratchet-shrinks`** job එක එම චක්රය වසයි:

|                 |                                                                                                                    |
| --------------- | ------------------------------------------------------------------------------------------------------------------ |
| ධාවනය වන්නේ     | `schedule` (දිනකට 3×) + `workflow_dispatch` මත — හිතාමතාම `push` මත **නොවේ**                                       |
| මනින්නේ         | ඉහළම `release/vX.Y.Z`, `release-green` හි ඇති resolution + injection guard එකම භාවිතයෙන්                           |
| ලියන්නේ         | `check:file-size --update` සහ `check:complexity-ratchets --update` (දෙකම සැලසුමෙන් හැකිළීමට පමණක් සීමා වේ)         |
| සත්යාපනය කරන්නේ | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                                           |
| යවන්නේ          | release branch එකට එරෙහිව සෑමවිටම වත්මන්ව පවතින එක් PR එකක් — බලයෙන් යාවත්කාලීන කෙරෙන අතර, කිසිවිටෙකත් spam නොකෙරේ |

බැංකුගත කිරීම එක් එක් push එකකට නොව batch වශයෙන් සිදු කරන්නේ එයට ප්රමාද අවශ්යතාවක් නොමැති බැවිනි (පැය 8ක් ඇතුළත
බැංකුගත කළ හැකිළීමක් ප්රමාණවත්ය), නමුත් එක් එක් merge එකකට ධාවනය කිරීමක් merge ව්යාපාර අතරතුර
PR branch එක නැවත නැවත ගොඩනඟා, සෑම වරකම සම්පූර්ණ ESLint පරීක්ෂාවකට ගෙවීමට සිදුවනු ඇත. හඳුනාගැනීම
push මත (`release-green`) පවතී; batch කරන්නේ බැංකුගත කිරීම පමණි.

### ආරක්ෂිත සත්යාපකය

job එක අධීක්ෂණයකින් තොරව baselines වෙත ලියන බැවින්, එය පිළිගත හැකි කරන්නේ `verify-ratchet-bank.mjs` ය.
එය `--update` පසු tree එක `HEAD` සමඟ diff කර, සෑම වෙනස්කමක්ම පහත දැක්වෙන ඒවායින් එකක් නොවේ නම්
**කිසිදු commit එකක් සෑදීමට පෙර job එක නවතයි** — කිසිදු PR එකක් විවෘත නොකරයි:

- `frozen` / `testFrozen` සංඛ්යාත්මක ඇතුළත් කිරීමක් **පහළ දැමීම** හෝ **ඉවත් කිරීම**
- `complexity-baseline.json` → `count` **පහළ දැමීම**
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` **පහළ දැමීම**

වෙනත් ඕනෑම දෙයක් අසමත් වේ: අංකයක් ඉහළ දැමීම, ඇතුළත් කිරීමක් එක් කිරීම, `cap`/`testCap` වෙනස් කිරීම, හෝ
`_rebaseline_*` සටහනක් මකා දැමීම/නැවත ලිවීම (එම සටහන් එක් එක්
උපරිමය පවතින්නේ ඇයිද යන්න පිළිබඳ විගණන වාර්තාව වන අතර, ගොනු ඇතුළත් කිරීම් තිබෙන `frozen` object එක තුළම ගබඩා කර ඇත).
සීමාවක් ඉහළ දැමිය හැකි bot එකක් පවතින තත්ත්වයට වඩා නිසැකවම නරක වනු ඇත. ප්රතිගමන
guard: `tests/unit/verify-ratchet-bank.test.ts`.

job එක කිසිවිටෙකත් `release/*` වෙත push නොකරයි — මනුෂ්යයෙකු PR එක merge කරන බැවින්, වැරදි මිනුමක්
සමාලෝචනයකින් තොරව ඇතුළත් විය නොහැක.

## අවසර ලැයිස්තු ප්රතිපත්තිය

පෙර සිට පවතින උල්ලංඝන හේතුවෙන් අසමත් විය නොහැකි සෑම gate එකක්ම ස්ථිර කළ අවසර ලැයිස්තුවක්
(උදා., `KNOWN_STALE_DOC_REFS`, `KNOWN_MISSING`, `KNOWN_RAW_SQL`) භාවිත කරයි. ප්රතිපත්තිය මෙයයි:

**මූලික හේතුව නිවැරදි කරන්න; උල්ලංඝනය පෙර සිට පවතින අතර එය එම PR එක තුළම
නිවැරදි කළ නොහැකි විට පමණක් අවසර ලැයිස්තුව භාවිත කරන්න.**

අවසර ලැයිස්තුවකට ඇතුළත් කිරීමක් එක් කරන විට:

1. සාධාරණීකරණය සහිත අදහස් දැක්වීමක් ඇතුළත් කරන්න.
2. හඹායෑමේ issue එක සඳහන් කරන්න (උදා., `// #3498 — අදියර 2 විශේෂාංගය, තවම ක්රියාත්මක කර නැත`).
3. උල්ලංඝනය නිවැරදි කරන PR එක තුළම ඇතුළත් කිරීම ඉවත් කරන්න — තවදුරටත් සක්රිය
   උල්ලංඝනයක් යටපත් නොකරන යල්පැනගිය ඇතුළත් කිරීමක් ද දෝෂයකි (6A.3 stale-enforcement
   ක්රියාත්මක කළ පසු, අනාථ අවසර ලැයිස්තු ඇතුළත් කිරීමක් හේතුවෙන් gate එක අසමත් වනු ඇත).

පරීක්ෂණ වේගයෙන් සමත් කරවා ගැනීමට අවසර ලැයිස්තු ඇතුළත් කිරීම් එක් **නොකරන්න**. වර්ධනය වන
අවසර ලැයිස්තුවක් සමඟ ඇති හරිත gate එකක් යනු ගුණාත්මකභාවය පිළිබඳ ව්යාජ විශ්වාසයකි.

### ඔබේ PR එක නිසා gate එකක් අසමත් වන විට

1. **gate ප්රතිදානය ප්රවේශමෙන් කියවන්න** — රීතිය උල්ලංඝනය කළ නිශ්චිත ගොනුව හෝ symbol එක එය ඔබට පෙන්වයි.
2. **උල්ලංඝනය නිවැරදි කරන්න** — බොහෝ gate යනු code එක නිවැරදි වූ සැණින් සමත් වන නියත filesystem පරීක්ෂණ වේ.
3. **උල්ලංඝනය පෙර සිට පවතී නම්** (එනම්, ඔබ එය හඳුන්වා නොදුන් නමුත් gate එක දැන්
   එය ආවරණය කරයි නම්): සාධාරණීකරණ අදහස් දැක්වීමක් සහ හඹායෑමේ issue එකක් සමඟ අවසර ලැයිස්තු ඇතුළත් කිරීමක් එක් කරන්න.
4. **gate එක ratchet එකක් නම්** (coverage, ESLint warnings, duplication, complexity):
   ඔබේ වෙනස metric එක වඩාත් නරක කර ඇත. යටින් පවතින ගැටලුව නිවැරදි කරන්න, නැතහොත් වෙනස
   හිතාමතා කළ එකක් සහ metric පිරිහීම පිළිගත හැකි එකක් නම් (කලාතුරකින්)
   `npm run quality:ratchet -- --update` ධාවනය කරන්න — නමුත් PR විස්තරයේ හේතුව ලේඛනගත කරන්න.
5. **උපදේශාත්මක gate** (`continue-on-error: true`) තොරතුරු සඳහා පමණි — ඒවා merge කිරීම
   අවහිර නොකරන නමුත් CI සාරාංශයේ දිස් වේ. එසේ වුවද ඒවා නිවැරදි කරන්න.

---

## නව Gate එකක් එක් කිරීම

1. `scripts/check/check-<name>.mjs` (හෝ `.ts`) සාදන්න. ප්රතිපත්ති gate 0/1 සමඟ පිටවෙයි.
   Ratchet-ආකාරයේ gate, `collect-metrics.mjs` හරහා `quality-metrics.json` වෙත metric එකක් නිකුත් කරයි.
2. `package.json` වෙත `"check:<name>": "node scripts/check/check-<name>.mjs"` එක් කරන්න.
3. සුදුසු job එක යටතේ `.github/workflows/ci.yml` තුළ එය සම්බන්ධ කරන්න
   (ප්රතිපත්තිය → `lint` හෝ `docs-sync-strict`; ratchet → `quality-gate`).
4. එයට අවසර ලැයිස්තුවක් තිබේ නම්, යල්පැනගිය ඇතුළත් කිරීම් ස්වයංක්රීයව හඳුනාගැනීමට
   `scripts/check/lib/allowlist.mjs` වෙතින් `reportStaleEntries()` යොදන්න.
5. gate එකේ හඳුනාගැනීමේ තර්කය ආවරණය කරමින් `tests/unit/build/` තුළ පරීක්ෂණයක් ලියන්න.
6. මෙම ලේඛනය යාවත්කාලීන කරන්න (අදාළ job වගුවට පේළියක් එක් කරන්න).

---

## Agent මෙවලම්කරණය: LSP-in-the-loop (තෝරාගත හැකි)

CI gate වලට අමතරව, OmniRoute විසින් **තෝරාගත හැකි** `agent-lsp` මූලික සැකිල්ලක්
(ව්යාපෘති මට්ටමේ `.mcp.json`, Fase 7 Task 15) සපයයි. coding agent වෙත TypeScript language server එකක්
නිරාවරණය කිරීමට `.mcp.json` සාදන්න, එවිට ඔවුන් code ලිවීමට **පෙර** symbol /
diagnostic විසඳයි — එය "invented symbol" දෝෂ මූලාශ්රයේදීම අඩු කරන
`typecheck:core` සඳහා compile-before-claim සහායකයකි. එය හිතාමතාම
ස්වයංක්රීයව load නොවේ (ඔබ MCP↔LSP bridge එක තෝරා සත්යාපනය කරයි); බිඳුණු ඇතුළත් කිරීමක්
connection error එකක් log කිරීම පමණක් කරන අතර session කිසිවිටෙක බිඳ නොදමයි.

---

## තාර්කිකකරණ පසුබැසීම් ලැයිස්තුව (ROI සමාලෝචනය — අදියර 9 රැල්ල 3)

මෙම ඉන්වෙන්ටරිය 2026-06-17 දින `ci.yml` සමඟ සැසඳීමෙන් සමාදාන කරන ලදී (පෙර අනුවාදයේ
`audit:deps`, `check:tracked-artifacts`, `check:lockfile`, `check:licenses`,
`check:dead-code`, `check:cognitive-complexity`, `check:type-coverage`,
`check:codeql-ratchet`, `check:pr-evidence` අත්හැරී තිබුණි). සමාදාන කළ කට්ටලය පිළිබඳ ROI සමාලෝචනයකින්
පහත තාර්කිකකරණ අපේක්ෂකයන් හඳුනා ගන්නා ලදී. **ඒකාබද්ධ කිරීම් යාන්ත්රික CI
වෙනස්කම් වේ; තත්ත්ව මාරු කිරීම්/ඉවත් කිරීම් යනු ක්රියාකරු සඳහා වෙන් කළ ප්රතිපත්තිමය තීරණ වේ.** පහත කිසිවක්
තවම යොදා නැත.

**ඉහත ලේඛනගත කර නොමැති තවත් දෑ** (උපදේශාත්මක, අඩු සංඥාවක් සහිත): `docs-lint` කාර්යය
(markdownlint + Vale, සම්පූර්ණ කාර්යයම `continue-on-error`) සහ ස්වාධීන ස්කෑනර් කාර්ය ප්රවාහ
`semgrep.yml` / `codeql.yml` / `scorecard.yml`. `semgrepFindings: 0` යන්න
`quality-baseline.json` තුළ ඇතත්, `ci.yml` හි අවහිර කරන රැචට්ටුවකට සම්බන්ධ කර නැත — මෙම ප්රමිතිකය
දැනට අනාථව ඇත.

### ඒකාබද්ධ කිරීම / අනුපිටපත් ඉවත් කිරීම (යාන්ත්රික, අඩු අවදානමක්)

සෑම අපේක්ෂකයෙකුම 2026-06-17 දින සජීවී ද්වාර තත්ත්වයට එරෙහිව වලංගු කරන ලදී (විශ්වාස කරන්න, නමුත් සත්යාපනය කරන්න);
“පැහැදිලි” ලෙස පෙනුණු ඒකාබද්ධ කිරීම් කිහිපයක් ණය සඟවා ඇති බව පෙනී ගිය අතර ඒවා **පිරිසිදු සෘජු ආදේශන නොවේ**.

- **`check:docs-sync` දෙවරක් ක්රියාත්මක වේ** — `lint` කාර්යය තුළ ස්වාධීනවද, නැවත `check:docs-all` (`docs-sync-strict`) තුළ සහ husky pre-commit hook එක තුළද ක්රියාත්මක වේ. ✅ **අවසන්** — ස්වාධීන `lint` ආමන්ත්රණය ඉවත් කරන ලදී.
- **CVE ස්කෑන් කිරීම** — ❌ **පිරිසිදු ඒකාබද්ධ කිරීමක් නොවේ.** `audit:deps` ඕනෑම ඉහළ/අතිශය තීරණාත්මක CVE එකක් මත දැඩි ලෙස අසාර්ථක වේ; `check:vuln-ratchet` (osv) අසාර්ථක වන්නේ මූලික මට්ටමට සාපේක්ෂව _පසුබෑමක්_ ඇති විට පමණි (දැනට MODERATE 1ක්). අර්ථවිද්යාව වෙනස්ය — `audit:deps` ඉවත් කිරීමෙන් නිරපේක්ෂ ඉහළ/අතිශය තීරණාත්මක ද්වාරය අහිමි වනු ඇත. දෙකම තබා ගන්න.
- **චක්ර හඳුනාගැනීම** — ❌ **පිරිසිදු ඒකාබද්ධ කිරීමක් නොවේ.** `check:circular-deps` (dpdm) මඟින් **චක්ර 91ක්** වාර්තා කරයි (එය උපදේශාත්මක වන්නේ ඒ නිසාය); ඒවා මුලින් විසඳීමකින් තොරව එය අවහිර කරන තත්ත්වයට උසස් කළ නොහැකි අතර, හරිත තත්ත්වයේ පවතින තෝරාගත් `check:cycles` ට වඩා පුළුල් විෂය පථයක් එයට ඇත. `check:cycles` අවහිර කරන ලෙස තබා ගන්න; dpdm චක්ර 91 විසඳීම වෙනම පසුබැසීම් කාර්යයකි.
- **සංකීර්ණත්වය** — ✅ **අවසන්** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`): එක් ESLint පරිලෝකනයක්, `ruleId` අනුව ගණනය කරන බැවින් cyclomatic+max-lines සහ cognitive මූලික මට්ටම් ස්වාධීනව පවතී; දේශීය `--update` සඳහා තනි `check:complexity` / `check:cognitive-complexity` තවදුරටත් පවතී.
- **`/api` ප්රති-භ්රාන්තිය** — ✅ **අවසන්** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`): `src/app/api` සඳහා එක් FS ඉන්වෙන්ටරියක්, openapi-routes + docs-symbols තවමත් ස්වාධීනව වාර්තා කරයි; දේශීය ක්රියාත්මක කිරීම් සඳහා තනි ඒවා තවදුරටත් පවතී.
- **`check:node-runtime` කාර්ය 11ක ක්රියාත්මක වේ** — ⚠️ **අඩු ROI.** සෑම එකක්ම වෙනම runner එකක් වන අතර පරීක්ෂාව තත්පර 1කට අඩුය; ලාභදායී එක්-කාර්ය ආරක්ෂකයක් අහිමි කිරීමට සාපේක්ෂව, සමස්ත ඉතිරිය තත්පර ~10කි. මෙම කැලඹීම වටින්නේ නැත.
- **CI lint මත `typecheck:noimplicit:core`** — ✅ **lint කාර්යයෙන් ඉවත් කරන ලදී** (එය උපදේශාත්මක `continue-on-error` එකක් විය); අවහිර කරන type පෘෂ්ඨය `typecheck:core` + `check:type-coverage` වේ. දේශීය ස්ක්රිප්ට් එක රඳවා ඇත.

### තත්ත්වය මාරු කිරීම / තීරණය කිරීම (ක්රියාකරු ප්රතිපත්තිය)

- `check:openapi-security-tiers` (උපදේශාත්මක) — ❌ **පිරිසිදුව තත්ත්වය මාරු කළ නොහැක.** එය 0 සමඟ පිටවන නමුත්, `LOCAL_ONLY_API_PREFIXES` යටතේ ඇති `traffic-inspector` මාර්ග කිහිපයක `x-loopback-only: true` අනුසටහන නොමැති බවට අනතුරු අඟවයි. එය බලාත්මක කිරීමට පළමුව එම අනුසටහන් `openapi.yaml` වෙත එක් කිරීම අවශ්ය වේ.
- `typecheck:noimplicit:core` (උපදේශාත්මක) — අවහිර කරන `check:type-coverage` රැචට්ටුව මඟින් බොහෝ දුරට ආවරණය කර ඇත. එය රැචට්ටුවකට මාරු කරන්න, නැතහොත් අතිරික්ත දෙවන `tsc` වාරය ඉවත් කරන්න.
- `test:vitest:ui` (දැන් **අවහිර කරන**) — පෙර සිට පැවති අසාර්ථකවීම් `vitest.config.ts` තුළ `// #8618` ලුහුබැඳීමේ අදහස් සමඟ පැහැදිලිව බැහැර කර ඇත; නව අසාර්ථකවීම් කාර්යය අසාර්ථක කරයි.
- `check:secrets` (gitleaks, ලේඛනගත ව්යාජ ධනාත්මක 3කදී ස්ථිර කළ අවහිර කරන රැචට්ටුව) — 0 දක්වා ළඟා වීමට එම 3 අවසර ලැයිස්තුවට එක් කරන්න, නැතහොත් උපදේශාත්මක තත්ත්වයට පහත හෙළන්න. GitHub හි ස්වදේශීය secret-scanning + `check:public-creds` සමඟ අතිච්ඡාදනය වේ.
- `check:pr-evidence` (අවහිර කරන, PR-body ගද්යය තුළ සොයයි) — ව්යාජ ධනාත්මක සඳහා ඉහළ අවදානමක් ඇත; ඉවත් කළහොත් Hard Rule #18 බලාත්මක කිරීම දුර්වල වේ, එබැවින් මෙය සැබෑ ප්රතිපත්තිමය තීරණයකි.
- `semgrep` (ස්වාධීන උපදේශාත්මක කාර්යයක්) — OWASP පවුල් සම්බන්ධයෙන් CodeQL සමඟ අතිච්ඡාදනය වේ; එහි මූලික මට්ටම රැචට්ටුවකට සම්බන්ධ කරන්න, නැතහොත් ඉවත් කරන්න.

---

## අදාළ ලේඛන

- සැපයුම් දාමය (ප්රභවය, SBOM, Trivy, Scorecard): [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — යතුරු කට්ටල සමානාත්මතා ද්වාරය

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`, කාර්යය `i18n-ui-coverage`).
සෑම `src/i18n/messages/<locale>.json` ගොනුවකම පත්ර යතුරු කට්ටලය `en.json` සමඟ සසඳන අතර,
යතුර එක් කළේ කවදාද යන්න නොසලකා, නොමැති හෝ අතිරේක පත්රයක් තිබේ නම් අසමත් වේ. `__MISSING__:`
ස්ථානධාරක පවතින ඒවා ලෙස ගණන් ගැනේ (ඒවායේ අන්තර්ගතය අනුපාත ද්වාරයට අදාළ කරුණකි). මෙය
වෙනස්කම්-පාදක/ප්රතිශත ද්වාර දෙකට පූර්ණ ප්රතිපූරකය වේ: `check-ui-keys-coverage` එක් එක්
locale සඳහා 80 % අවමයක් බලාත්මක කරයි (~13,000 න් යතුරු 43 ක් නොමැති වුවත් එය තවමත් 99.7 % ලෙස
පෙන්වයි), සහ `check-new-key-coverage` විනිශ්චය කරන්නේ PR එකක් `en.json` වෙත එක් කරන යතුරු
පමණි. locale කාණ්ඩයක් එහි branch එක වෙන් කරන දින පවතින `en.json` වෙතින් ජනනය කර, base එකට
තවදුරටත් යතුරු එක් වෙමින් තිබියදී දින ගණනාවක් පුරා පරිවර්තනය කරයි; කාණ්ඩ PR එක විසින්ම කිසිදු
යතුරක් එක් නොකරන බැවින්, කාණ්ඩය 1 (#13044) locale නවයක යතුරු 43 ක් අඩුවෙන් සහ කාණ්ඩය 2
(#13660) locale අටක යතුරු 10 ක් අඩුවෙන් (2026-09-15) එක් වූ විට සහෝදර ද්වාර දෙකම නිහඬව පැවතුණි.
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers` මඟින් රතු අසමත් වීමක්
නිවැරදි කරන්න; `extra` පත්රයක් යනු මූලාශ්රයෙන් එය ඉවත් කර ඇති බවයි — එය locale එකෙන් මකා
දමන්න. `--warn` අසමත් නොකර වාර්තා කරයි. `--catalog=cli` විසින් `bin/cli/locales` මත එම
සැසඳීමම ක්රියාත්මක කරයි (`npm run i18n:check-keys:cli`); පියවර දෙකම `i18n-ui-coverage`
කාර්යය තුළ පවතී.

#### `check-new-key-coverage` — නව-යතුරු i18n ද්වාරය

`check-ui-value-drift` හි සහෝදර ද්වාරයයි. එය ඉංග්රීසි අගයක් **නැවත ලියූ** නමුත් එහි
පරිවර්තන යාවත්කාලීන නොකළ අවස්ථාවක් හඳුනාගනී; මෙය ඉංග්රීසි යතුරක් **එක් කළ** නමුත් සමහර
locale වෙත එය කිසිදා නොලැබුණු අවස්ථාවක් හඳුනාගනී.

`check-ui-keys-coverage` හට මෙම වර්ගය දැකිය නොහැක: එය එක් එක් locale සඳහා ප්රතිශත අවමයක්
බලාත්මක කරන අතර, ~13,000 පත්රවලින් යතුරු එකොළහක් නොමැති වුවත් ආවරණය 99.9% ලෙස පවතී.
භාෂාවකට ප්රතිශතයක් මඟින් "මෙම විශේෂාංගය පරිවර්තනය නොකර නිකුත් විය" යන්න ප්රකාශ කළ නොහැක
— සම්පූර්ණ විශේෂාංගයක් කිසිදු පෙළක් නොමැතිව නව locale එකකට එක් විය හැකි අතර සංඛ්යාව කිසිදා
වෙනස් නොවේ.

එය සංකේතනය කරන සිදුවීම මෙයයි: Orchestration Canvas හි Phase 3, එවකට පැවති locale 42 පුරා
එහි යතුරු එකොළහ පරිවර්තනය කළේය. පැය කිහිපයකට පසුව EU-භාෂා කාණ්ඩය (#13044) repo එක locale
51 දක්වා ගෙන ගිය අතර, නවකයන් නවදෙනාට (`el`, `et`, `ga`, `hr`, `lt`, `lv`, `mt`, `sl`, `sr`)
ඒවා කිසිදා නොලැබුණි. නොමැති යතුරක් සඳහා `deepMergeFallback` විසින් ඉංග්රීසි ආදේශ කරන බැවින්,
අසමත් වීමේ ආකාරය හිස් UI එකක් වෙනුවට පරිවර්තනය නොකළ UI එකක් විය — එය සැබෑ ගැටලුවක් වූ
අතර සැලසුමෙන්ම නිහඬ විය.

එහි සහෝදර ද්වාරය මෙන්ම මෙයද **වෙනස්කම්-සංවේදී** වන අතර, merge base හි ඉංග්රීසි අන්තර්ගතය
working tree එක සමඟ සසඳයි; එබැවින් පෙර සිට පැවති හිඩැස් එලෙසම ස්ථාවර වන අතර ද්වාරය සක්රිය
කිරීමට migration එකක් අවශ්ය නොවීය. මඟහැරීමේ ක්රමය: `__MISSING__:<english>` runtime එක
නිවැරදිව තබාගෙන පරිවර්තනයක් කල් දමයි. `vi` විසින් ස්ථානධාරක තහනම් කරයි
(`tests/unit/i18n-vi-completeness.test.ts`) සහ සැබෑ පරිවර්තනයක් අවශ්ය වේ.

#### `check-vitest-exclusions` — කල් තැබූ පරීක්ෂණ ද්වාරය

`vitest.config.ts` හි `exclude` ලැයිස්තුව තුළ ඇති ගොනුවක් යනු ක්රියාත්මක නොවන පරීක්ෂණයක්
වන අතර, tree එක කියවන අයෙකුට එය ආවරණයක් ලෙස පෙනේ. ගොනු හැට දෙකක්
`// #8618 — පෙර සිට පැවති අසමත් වීමකි; නිවැරදි කළ පසු මෙම බැහැර කිරීම ඉවත් කරන්න` යන
අදහස් දැක්වීම පිටුපස එකතු විය. Issue #8618, 2026-08-11 දින වසා දැමූ නමුත් එය නිරීක්ෂණය කළ
ලැයිස්තුව ඇතුළත් කිරීම් 45 සිට 62 දක්වා වර්ධනය වූ අතර, සෑම නව එකක්ම අවසන් කළ issue එකක් වෙත
යොමු කරන අදහස් දැක්වීමක් උරුම කර ගත්තේය. අවසානයේ ලැයිස්තුව ගොනුවෙන් ගොනුව මැන බැලූ විට
(#13204), **62 න් 51 ක් කිසිදු මූලාශ්ර වෙනසක් නොමැතිව වත්මන් tree එකට එරෙහිව සමත් විය**.

සැබෑ ගොනුවකට resolve වන සෑම බැහැර කිරීමක්ම (a) tracking issue එකක් නම් කළ යුතු අතර
(b) එහි මනින ලද තත්ත්වය සමඟ `config/quality/vitest-exclusions.json` තුළ දිස් විය යුතු බව
ද්වාරය නියම කරයි; එමඟින් එකක් එක් කිරීම, ඇතුළත් කිරීම් 60 ක array එකකට තවත් එක් පේළියක්
වෙනුවට, වෙන් කළ ගොනුවක සමාලෝචනය කළ හැකි diff එකක් බවට පත් වේ. එය හිතාමතාම බැහැර කළ
පරීක්ෂණ නැවත ක්රියාත්මක නොකරයි — ඒ සඳහා මිනිත්තු ~10 ක් වැය වන අතර එය ආවර්තිතා කාර්යයකට
අයත් වේ; එක් එක් පරීක්ෂණය අවසන් වරට මනින ලද්දේ කවදාදැයි inventory එකේ සටහන් වේ.
