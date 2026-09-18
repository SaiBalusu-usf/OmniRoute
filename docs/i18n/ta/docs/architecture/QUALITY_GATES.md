# Quality Gates Reference (தமிழ்)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

இந்த ஆவணம் OmniRoute-இல் உள்ள அனைத்து CI தர வாயில்களுக்குமான அதிகாரப்பூர்வ மேற்கோளாகும்.
ஒவ்வொரு வாயிலையும், அது எதைச் சரிபார்க்கிறது, எந்த CI job-இல் இயங்குகிறது, அது
ratchet baseline அல்லது pass/fail கொள்கையைப் பயன்படுத்துகிறதா, மேலும் அது build-ஐத் தடுக்கிறதா அல்லது ஆலோசனை சார்ந்ததா என்பதை விவரிக்கிறது.

சுருக்கமான தொகுப்புக்கும் allowlist கொள்கைக்கும், `AGENTS.md`-இல் உள்ள
"தர வாயில்கள் & Ratchet-கள்" பகுதியைப் பார்க்கவும். அதே அமைப்பின் முக்கியமான மதிப்பீடு,
முதிர்ச்சி வகைப்பாடு மற்றும் கருவி-சார்பற்ற மறுஉருவாக்கத் திட்டத்திற்கு,
[தர வாயில் செயல்திட்டம்](../ops/QUALITY_GATE_PLAYBOOK.md)-ஐப் பார்க்கவும்.

---

## வாயில் பட்டியல் (~90 scripts)

Scripts, `scripts/check/` (கொள்கை வாயில்கள்) மற்றும் `scripts/quality/` (ratchet engine) ஆகியவற்றின் கீழ் உள்ளன.
CI-க்கான அதிகாரப்பூர்வ ஆதாரம் `.github/workflows/ci.yml` ஆகும்.

### Release PR விரைவுப் பாதை (`quality.yml`)

`.github/workflows/quality.yml`, `release/**`-ஐ இலக்காகக் கொண்ட PR-களில் இயங்குகிறது. இது path-filter செய்யப்பட்ட விரைவு வாயில்கள் மூலம் contributor
branches தொடர்ந்து முன்னேற உதவுகிறது; கூடுதலாக, code மாற்றங்களுக்கு ஓர் ஆலோசனை சார்ந்த production-build signal-ஐ வழங்குகிறது:

| Job                                              | வரம்பு                                                                                                                                                                                                                                         | தடுக்கும் தன்மை                                                                                                   |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `Build (advisory)`                               | Draft அல்லாத code PR-கள் மற்றும் Mergify queue branches; Node 24, `npm-ci-retry`, `check:node-runtime`, `OMNIROUTE_USE_TURBOPACK=1` உடன் `npm run build`; எந்த downstream quality job-மும் அதைப் பயன்படுத்தாததால் artifact upload இல்லை        | **ஆலோசனை சார்ந்தது** (`continue-on-error: true`; நிலையான release-PR இயக்கங்கள் ஒரு வாரம் முடிந்த பிறகு அகற்றவும்) |
| `Docs Gates (fast-path)`                         | Docs/code PR-கள்; API docs refs மற்றும் docs-all                                                                                                                                                                                               | ஆம்                                                                                                               |
| `Fast Quality Gates`                             | Code PR-கள்; static checks, typecheck, dashboard typecheck, பாதிக்கப்பட்ட unit tests                                                                                                                                                           | ஆம்                                                                                                               |
| `Forgotten sibling tests`                        | Code PR-கள்; மாற்றப்பட்ட modules-இலிருந்து static consumers மற்றும் candidate sibling tests வரை தடமறிதல்; barrel மற்றும் dynamic-import paths, குறிப்பிடப்பட்ட allowlist விதிவிலக்குகளுடன் ஆலோசனை சார்ந்த diagnostics ஆக அறிக்கையிடப்படுகின்றன | **ஆலோசனை சார்ந்தது**                                                                                              |
| `Vitest (fast-path)`                             | Code PR-கள்; விரைவான vitest suite                                                                                                                                                                                                              | ஆம்                                                                                                               |
| `Unit Tests fast-path`                           | Code PR-கள்; 4-shard unit suite                                                                                                                                                                                                                | ஆம்                                                                                                               |
| `No new ESLint warnings`                         | Code PR-கள்; suppressions-aware lint guard                                                                                                                                                                                                     | சொந்த-origin-க்கு ஆம், forks-க்கு ஆலோசனை சார்ந்தது                                                                |
| `Merge integrity (changelog + generated skills)` | Draft அல்லாத PR-கள்; changelog மற்றும் உருவாக்கப்பட்ட skill sync                                                                                                                                                                               | சொந்த-origin-க்கு ஆம், forks-க்கு ஆலோசனை சார்ந்தது                                                                |

#### மறக்கப்பட்ட sibling tests அறிக்கை

`npm run check:forgotten-sibling-tests`, test-impact map-க்குப் பின்னால் உள்ள import resolver-ஐ மீண்டும் பயன்படுத்துகிறது.
மாற்றப்பட்ட ஒவ்வொரு production module-க்கும், candidate
test pull-request diff-இல் இல்லாதபோது, நிலையான
`changed module/symbol -> static consumer -> candidate sibling test` சங்கிலிகளை இது அறிக்கையிடுகிறது. எந்த blocking rollout-க்கும் முன் calibration செய்வதற்காக,
Markdown summary மற்றும் JSON result ஆகியவை `forgotten-sibling-tests` workflow artifact ஆகத் தக்கவைக்கப்படுகின்றன.

Barrel re-exports மற்றும் dynamic imports ஆகியவை resolution diagnostics மட்டுமே; அவை ஒருபோதும்
blocking finding-ஐ உருவாக்காது. மதிப்பாய்வு செய்யப்பட்ட விதிவிலக்குகள்
`config/quality/forgotten-sibling-allowlist.json`-இல் உள்ளன. ஒவ்வொரு entry-யும் consumer மற்றும் candidate
test-ஐக் குறிப்பிட வேண்டும், குறிப்பிட்ட காரணத்தை வழங்க வேண்டும், மேலும் GitHub issue அல்லது pull request-க்கான link-ஐக் கொண்டிருக்க வேண்டும். தவறான வடிவமைப்புடைய entries fail
closed ஆகும். நீக்கப்பட்ட candidate test-ஐயோ அல்லது `.skip`/`.todo`-ஐச் சேர்க்கும் diff-ஐயோ விதிவிலக்குகள் suppress செய்ய முடியாது;
assertion weakening மற்றும் பிற masking செயல்கள், தனித்துவமாக blocking செய்யும்
`check:test-masking` வாயிலின் பொறுப்பிலேயே தொடர்கின்றன.

### Job: `lint`

`main`-க்கான ஒவ்வொரு PR-இலும் இயங்குகிறது. தோல்வியடைந்தால் merge-ஐத் தடுக்கிறது.

| ஸ்கிரிப்ட் (`npm run ...`)        | சரிபார்ப்பது                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | தடுப்பது                               |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| `check:node-runtime`              | Node.js பதிப்பு ஆதரிக்கப்படும் வரம்பிற்குள் உள்ளது                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | ஆம்                                    |
| `check:cycles`                    | சுழற்சி இறக்குமதிகள் — அனைத்து `src/` + `open-sse/` தொகுதிகளும்                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | ஆம்                                    |
| `check:route-validation:t06`      | அனைத்து வழித்தடங்களிலும் Zod ஸ்கீமாக்கள் உள்ளன (அடுக்கு 6 கொள்கை)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | ஆம்                                    |
| `check:any-budget:t11`            | `@ts-expect-error // any` எண்ணிக்கை வரம்பை மீறவில்லை (அடுக்கு 11 catraca)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | ஆம்                                    |
| `check:provider-consistency`      | `providers.ts`-இல் உள்ள ஒவ்வொரு provider-க்கும் `providerRegistry.ts`-இல் பொருந்தும் பதிவு உள்ளது (மேலும் இதன் மறுதிசையிலும், allowlist-க்குள்)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | ஆம்                                    |
| `check:model-lifecycle`           | கையால் பராமரிக்கப்படும் மூன்று routing table-களும் repository-இல் சேர்க்கப்பட்ட lifecycle snapshot (#11503) உடன் ஒருமித்ததாக உள்ளன: `FITNESS_TABLE` (`taskFitness.ts`), `REGISTRY` route செய்யக்கூடிய ஓய்வுபெற்ற எந்த id-க்கும் score வழங்காது; ஒவ்வொரு `BUILT_IN_ALIASES` target-உம் `REGISTRY`-இல் இருக்கும் மற்றும் ஓய்வுபெற்ற id-களின் snapshot-இல் இருக்காது; `REGISTRY`-இல் இன்னும் உள்ள ஒவ்வொரு ஓய்வுபெற்ற id-உம் forward செய்யப்படும் அல்லது `allowedRetiredInCatalog`-இல் பட்டியலிடப்படும்; மேலும் எந்த `DEFAULT_DEGRADATION_MAP` source அல்லது target-உம் அந்த snapshot-இல் ஓய்வுபெற்றதாகத் தோன்றாது. ஒரு model தற்போது செயலிலுள்ள upstream மூலம் வழங்கப்படுகிறது என்பதை இது நிரூபிக்காது. Offline — `config/quality/model-lifecycle.json` உடன் ஒப்பிடுகிறது; இது `npm run quality:refresh-model-lifecycle` மூலம் கையால் புதுப்பிக்கப்படுகிறது (network; CI-இல் இணைக்கப்படவில்லை). `allowedRetiredInCatalog` என்பது படிப்படியாகக் குறைக்கும் ratchet ஆகும்: tracking issue உடன் மட்டுமே ஒரு பதிவைச் சேர்க்கவும். | ஆம்                                    |
| `check:fetch-targets`             | client-side `src/`-இல் உள்ள ஒவ்வொரு `fetch("/api/...")`-உம் உண்மையான `route.ts`-க்கு resolve ஆகிறது                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | ஆம்                                    |
| `check:deps`                      | repo-வில் உள்ள ஒவ்வொரு `package.json` முழுவதிலுமான `npm install` செய்யக்கூடிய அனைத்து dependency-களும் `dependency-allowlist.json`-இல் உள்ளன; புதிதாக pin செய்யப்படாத அல்லது slopsquatting செய்யப்பட்ட package-கள் குறியிடப்படுகின்றன                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | ஆம்                                    |
| `audit:deps`                      | `npm audit` (root + electron) — high/critical advisory-கள் இல்லை (osv `check:vuln-ratchet` உடன் overlap ஆகிறது; Rationalization Backlog-ஐப் பார்க்கவும்)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | ஆம்                                    |
| `check:lockfile`                  | `package-lock.json` integrity — https registry, integrity hash-கள், host override-கள் இல்லை                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | ஆம்                                    |
| `check:licenses`                  | உற்பத்தி சார்புகளுக்கான SPDX உரிம அனுமதிப்பட்டியல்                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | ஆம்                                    |
| `check:tracked-artifacts`         | build artifacts / commit செய்யப்பட்ட `node_modules` symlinks எதுவும் இல்லை (husky pre-commit-இலும் இயங்கும்; pre-push வேண்டுமென்றே இலகுவாக வைக்கப்பட்டுள்ளது — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | ஆம்                                    |
| `check:vitest-exclusions`         | ஒவ்வொரு Vitest விலக்கலும் ஒரு tracking issue-ஐக் குறிப்பிடுகிறது மற்றும் `config/quality/vitest-exclusions.json`-இல் இடம்பெறுகிறது (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | ஆம்                                    |
| `check:file-size`                 | எந்த source file-உம் ஒவ்வொரு extension-க்குமான உச்சவரம்பை மீறவில்லை (ratchet: `frozen` பட்டியலில் மாற்றமின்றி வைக்கப்பட்ட பெரிய கோப்புகள்)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | ஆம்                                    |
| `check:error-helper`              | executors/handlers-இல் உள்ள பிழை மறுமொழிகள் `buildErrorBody()` / `sanitizeErrorMessage()`-ஐப் பயன்படுத்துகின்றன (கடுமையான விதி #12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | ஆம்                                    |
| `check:migration-numbering`       | Migration SQL கோப்புகள் இடைவெளிகளோ நகல்களோ இல்லாமல் தொடர்ச்சியாக எண்களிடப்பட்டுள்ளன                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | ஆம்                                    |
| `check:public-creds`              | `publicCreds.ts`-க்கு வெளியே நேரடி OAuth `client_id`/`client_secret` அல்லது Firebase Web விசைகள் இருக்கக்கூடாது (கடுமையான விதி #11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | ஆம்                                    |
| `check:db-rules`                  | `src/lib/db/` தொகுதிகளுக்கு வெளியே நேரடி SQL இருக்கக்கூடாது; `localDb.ts`-இலிருந்து barrel-imports இருக்கக்கூடாது (கடுமையான விதிகள் #2/#5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | ஆம்                                    |
| `check:known-symbols`             | அவற்றின் dispatch அட்டவணைகளில் பதிவுசெய்யப்பட்டுள்ள provider executors, routing strategies மற்றும் translators ஆகியவை வட்டில் உள்ள கோப்புகளுடன் பொருந்துகின்றன — தொடர்பற்ற அல்லது அறிவிக்கப்படாத symbols எதுவும் இல்லை                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | ஆம்                                    |
| `check:route-guard-membership`    | child process ஒன்றைத் தொடங்கும் ஒவ்வொரு route-உம் `isLocalOnlyPath()` மூலம் வகைப்படுத்தப்பட்டுள்ளது (கடுமையான விதிகள் #15/#17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | ஆம்                                    |
| `check:test-discovery`            | repo-இல் உள்ள ஒவ்வொரு `*.test.ts` / `*.spec.ts` கோப்பும் குறைந்தது ஒரு test runner மூலம் சேகரிக்கப்படுகிறது (ratchet: `test-discovery-baseline.json`-இல் உள்ள orphan பட்டியல் குறைய மட்டுமே முடியும்)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | ஆம்                                    |
| `check:agent-skills-sync`         | உருவாக்கப்பட்ட agent-skills artifacts அவற்றின் source catalog-உடன் பொருந்துகின்றன (drift இல்லை)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `check:provider-asset-provenance` | Provider logos/assets பதிவுசெய்யப்பட்ட provenance பதிவைக் கொண்டுள்ளன                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `lint:json`                       | JSON கட்டமைப்பு கோப்புகள் பாகுபடுத்தப்பட்டு, களஞ்சியத்தின் lint விதிகளைப் பூர்த்தி செய்கின்றன                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `typecheck:core`                  | பிழைகள் இல்லாத TypeScript தொகுப்பு (ஆலோசனை எச்சரிக்கைகள் மட்டும்)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | ஆம்                                    |
| `typecheck:noimplicit:core`       | கடுமையான `noImplicitAny` — எதிர்கால நோக்குடையது; முன்பே உள்ள பல அழைப்புத் தளங்களுக்கு இன்னும் வகைக் குறிப்புகள் தேவை                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | **ஆலோசனை** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | `src/app/(dashboard)/**`-க்கு வரையறுக்கப்பட்ட `tsc` (#7033) — `typecheck:core`-இன் கவனமாகத் தேர்ந்தெடுக்கப்பட்ட 27-கோப்பு அனுமதிப்பட்டியலில் எந்த dashboard TSX கோப்பும் இல்லை; மேலும் `next build` அதற்கு ஒருபோதும் வகைச் சரிபார்ப்பு செய்வதில்லை (`next.config.mjs`, `ignoreBuildErrors: true` என்பதை அமைக்கிறது). எனவே அங்கிருந்த தனிமைப்படுத்தப்பட்ட அடையாளங்காட்டி பின்னடைவுகள் (#6625/#6909) CI-க்குப் புலப்படவில்லை. உறையவைக்கப்பட்ட ஒவ்வொரு கோப்பிற்கும்/ஒவ்வொரு TS குறியீட்டிற்குமான எண்ணிக்கை அடிப்படையுடன் (`config/quality/dashboard-typecheck-baseline.json`, `check:known-symbols` போன்ற அதே காலாவதித் தடுப்பு முறை) வேறுபாடுகள் ஒப்பிடப்படுகின்றன — அடிப்படையாகப் பதிவுசெய்யப்பட்ட எண்ணிக்கையைத் தாண்டிய புதிய பிழைகள் மட்டுமே வாயிலைத் தோல்வியடையச் செய்யும்; முன்பே இருந்த பிழை சரிசெய்யப்படும்போது `--update` மூலம் வரம்பைக் குறைக்கவும்.                                                                                                                                                                | ஆம்                                    |

### பணி: `quality-gate`

`test-coverage`-க்குப் பிறகு இயங்கும். தோல்வியடைந்தால் ஒன்றிணைப்பைத் தடுக்கும்.

| ஸ்கிரிப்ட்                   | சரிபார்ப்பது                                                                                                                                                                                                                                  | தடுக்கும் தன்மை             |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| `quality:collect`            | `quality-metrics.json`-ஐ வெளியிடுகிறது (ESLint எச்சரிக்கை எண்ணிக்கை, ஒன்றிணைக்கப்பட்ட shard அறிக்கையிலிருந்து கவரேஜ்)                                                                                                                         | ஆம் (ratchet-க்கு மேல்நிலை) |
| `quality:ratchet`            | `quality-baseline.json`-இல் உள்ள ஒவ்வொரு அளவீடும் பின்னடையவில்லை (ESLint எச்சரிக்கைகள் ≤ அடிப்படை; கவரேஜ் ≥ அடிப்படை)                                                                                                                         | ஆம்                         |
| `check:duplication`          | குறியீட்டு நகலாக்கம் (jscpd@4), `quality-baseline.json`-இல் உள்ள அடிப்படையை மீறவில்லை                                                                                                                                                         | ஆம்                         |
| `check:complexity`           | கோப்பு-நிலை சுழற்சிசார் சிக்கல்தன்மை உச்சவரம்பை மீறவில்லை (மைய ESLint `complexity` + `max-lines-per-function`)                                                                                                                                | ஆம்                         |
| `check:cognitive-complexity` | அறிவாற்றல் சிக்கல்தன்மை ratchet (`eslint-plugin-sonarjs`) — தனி ESLint இயக்கம்; CI இரண்டையும் ஒன்றிணைத்து ஒற்றை `check:complexity-ratchets` படிநிலையாக இயக்குகிறது                                                                            | ஆம்                         |
| `check:dead-code`            | பயன்படுத்தப்படாத exports / கோப்புகளுக்கான ratchet (knip), அடிப்படையுடன் ஒப்பிடும்போது பின்னடையவில்லை                                                                                                                                          | ஆம்                         |
| `check:compression-budget`   | சுருக்க benchmark வரவு-செலவுத் திட்டம் — ஒவ்வொரு engine-க்குமான token சேமிப்பு குறைந்தபட்ச வரம்புகள் பின்னடையக் கூடாது                                                                                                                        | ஆம்                         |
| `check:type-coverage`        | வகையிடப்பட்ட சதவீத ratchet (`type-coverage`) பின்னடையவில்லை; பெருமளவில் `typecheck:noimplicit:core`-ஐ உள்ளடக்குகிறது                                                                                                                          | ஆம்                         |
| `check:codeql-ratchet`       | திறந்த CodeQL விழிப்பூட்டல்களின் எண்ணிக்கை பின்னடையவில்லை (`gh api` வழியாகப் படிக்கிறது; token இல்லாமல் இருந்தால் பாதுகாப்பாகத் தவிர்க்கிறது) — புதுப்பிப்பு இடைவெளி மற்றும் கைமுறைத் தூண்டலுக்கு: கீழே உள்ள "CodeQL ratchet"-ஐப் பார்க்கவும் | ஆம்                         |

### பணி: `quality-extended`

முழுப் பணியும் ஆலோசனை நோக்குடையது (`continue-on-error: true`). npm-அடிப்படையிலான ராட்செட்கள்
உண்மையாகவே இயங்குகின்றன; வெளிப்புற ஸ்கேனர்கள் `gh release download` வழியாக நிறுவப்பட்டு, பைனரி
இன்னும் இல்லாதபோது தாமாகவே தவிர்த்துக்கொள்கின்றன (வெளியேறும் குறியீடு 0).

| ஸ்கிரிப்ட்               | சரிபார்ப்பது                                                                                                                                                                                                                                   | தடுக்கும் தன்மை |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `check:circular-deps`    | சுழற்சி சார்புகள் இல்லை (dpdm)                                                                                                                                                                                                                 | **ஆலோசனை**      |
| `check:bundle-size`      | பண்டில் அளவு உச்ச வரம்பை மீறவில்லை                                                                                                                                                                                                             | **ஆலோசனை**      |
| `check:secrets`          | ரகசியத் தகவல் ஸ்கேனிங் (gitleaks) — பைனரி இல்லையெனில் தவிர்க்கும்                                                                                                                                                                              | **ஆலோசனை**      |
| `check:vuln-ratchet`     | சார்பு பாதிப்புகள் (osv-scanner) பின்னடையவில்லை — பைனரி இல்லையெனில் தவிர்க்கும்                                                                                                                                                                | **ஆலோசனை**      |
| `check:workflows`        | பணிப்பாய்வு லின்ட் (actionlint + zizmor) — பைனரிகள் இல்லையெனில் தவிர்க்கும்                                                                                                                                                                    | **ஆலோசனை**      |
| `check:openapi-breaking` | அடிப்படைக் கிளையுடன் ஒப்பிடும்போது பொது API ஒப்பந்தத்தில் (`openapi.yaml`) முறிவை ஏற்படுத்தும் மாற்றங்கள் — `openapiBreaking=N` என்பதை வெளியிடும்; oasdiff இல்லையெனில் அல்லது அடிப்படை விவரக்குறிப்பைத் தீர்மானிக்க முடியாவிட்டால் தவிர்க்கும் | **ஆலோசனை**      |

### பணி: `docs-sync-strict`

`main`-க்கான ஒவ்வொரு PR-இலும் இயங்கும். தோல்வியடைந்தால் ஒன்றிணைப்பைத் தடுக்கும்.

| ஸ்கிரிப்ட்                     | சரிபார்ப்பது                                                                                                                                                                                                   | தடுக்கும் தன்மை                |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| `check:docs-all`               | கீழேயுள்ள 6 துணை-வாயில்களையும் வரிசையாக இயக்கும் மெட்டா-வாயில்                                                                                                                                                 | ஆம்                            |
| ↳ `check:docs-sync`            | CHANGELOG / OpenAPI / llm.txt பதிப்பு ஒத்திசைவு                                                                                                                                                                | ஆம்                            |
| ↳ `check:docs-counts`          | உரைநடையில் உள்ள எண்ணிக்கைகள் (வழங்குநர் எண்ணிக்கை, இடம்பெயர்வு எண்ணிக்கை போன்றவை) உண்மையான எண்ணிக்கைகளின் ராட்செட் சாளரத்திற்குள் உள்ளன                                                                        | ஆம்                            |
| ↳ `check:env-doc-sync`         | `.env.example`-இல் உள்ள ஒவ்வொரு சூழல் மாறியும் ஆவண அட்டவணையில் ஆவணப்படுத்தப்பட்டுள்ளது; இதன் மறுதிசையும் பொருந்தும்                                                                                            | ஆம்                            |
| ↳ `check:deprecated-versions`  | ஆவணங்களில் வழக்கொழிந்த பதிப்புச் சரங்கள் இல்லை                                                                                                                                                                 | ஆம்                            |
| ↳ `check:doc-links`            | ஆவணங்களிலுள்ள உள் markdown இணைப்புகள் உண்மையான கோப்புகளுக்குத் தீர்மானிக்கப்படுகின்றன (`[text]`/`(path)` வடிவம்)                                                                                               | ஆம்                            |
| ↳ `check:fabricated-docs`      | ஆவணங்களில் குறிப்பிடப்பட்டுள்ள வழித்தடங்கள், சூழல் மாறிகள், CLI கட்டளைகள், hook பெயர்கள் மற்றும் கோப்புப் பாதைகள் குறியீட்டுத் தளத்தில் உள்ளன. `--strict` வழியாகக் கடுமையான வாயில்; கொடி இல்லாமல் மென்-தோல்வி. | ஆம் (CI-இல் `--strict` வழியாக) |
| `check:cli-i18n`               | CLI கட்டளைச் சரங்கள் அனைத்து i18n மொழிப்பிரதேசக் கோப்புகளிலும் உள்ளன                                                                                                                                           | ஆம்                            |
| `check:openapi-coverage`       | OpenAPI விவரக்குறிப்பு, உண்மையான வழித்தடங்களின் ராட்செட் செய்யப்பட்ட குறைந்தபட்ச வரம்பையாவது உள்ளடக்குகிறது                                                                                                    | ஆம்                            |
| `check:openapi-security-tiers` | `openapi.yaml`-இல் உள்ள பாதுகாப்பு அடுக்கு சிறுகுறிப்புகள் `routeGuard.ts` வகைப்பாடுகளுடன் ஒத்திசைகின்றன                                                                                                       | **ஆலோசனை**                     |
| `check:openapi-routes`         | `openapi.yaml`-இல் உள்ள ஒவ்வொரு பாதையும் உண்மையான `route.ts`-க்குத் தீர்மானிக்கப்படுகிறது (புனைவைத் தடுப்பது)                                                                                                  | ஆம்                            |
| `check:docs-symbols`           | `docs/**/*.md`-இல் உள்ள ஒவ்வொரு `/api/...` குறிப்பும் உண்மையான `route.ts`-க்குத் தீர்மானிக்கப்படுகிறது (புனைவைத் தடுப்பது)                                                                                     | ஆம்                            |
| `i18n translation drift`       | i18n மொழிப்பிரதேசக் கோப்புகளில் மொழிபெயர்க்கப்படாத விசைகள் — எச்சரிக்கை மட்டும்                                                                                                                                | **ஆலோசனை**                     |

### பணி: `i18n-ui-coverage`

| ஸ்கிரிப்ட்                         | சரிபார்ப்பது                                                                                                                                                                                                           | தடுப்பதா           |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `check-ui-keys-coverage` (இன்லைன்) | UI i18n விசைகளின் கவரேஜ் ≥ 65% ஆக உள்ளது                                                                                                                                                                               | ஆம்                |
| `check-ui-value-drift` (இன்லைன்)   | மீண்டும் எழுதப்பட்ட ஆங்கில **மதிப்பு**, காலாவதியான மொழிபெயர்ப்பு எதையும் விட்டுச் செல்லவில்லை                                                                                                                          | ஆம்                |
| `check-new-key-coverage` (இன்லைன்) | ஒரு **புதிய** ஆங்கில விசை ஒவ்வொரு மொழியமைவையும் சென்றடைகிறது                                                                                                                                                           | ஆம்                |
| `check-translation-ratio`          | ஒவ்வொரு மொழியமைவிற்குமான உண்மையான மொழிபெயர்ப்பு விகிதம் (அனுமதிப்புப் பட்டியலுக்கு வெளியே ஆங்கிலத்திற்கு ஒத்தவை / இடநிரப்பிகள் / விடுபட்ட இலைகள்) `config/quality/i18n-translation-baseline.json` + தளர்வை மீறக்கூடாது | **ஆலோசனை மட்டும்** |

`fetch-depth: 0` தேவை — மதிப்பு-மாற்றச் சரிபார்ப்புத் தடை, இணைப்பு அடிப்படையுடன் `en.json`-ஐ வேறுபடுத்திப் பார்க்கிறது.

#### `check-ui-value-drift` — காலாவதியான மொழிபெயர்ப்புத் தடை

மற்ற தடைகள் கட்டமைப்பு ரீதியாகக் கண்டறிய முடியாத ஒரேயொரு i18n பின்னடைவை இது கண்டறிகிறது: ஓர் ஆங்கில மதிப்பு
மீண்டும் எழுதப்பட்ட பின்னரும், _முந்தைய_ ஆங்கிலத்திலிருந்து உருவாக்கப்பட்ட மொழிபெயர்ப்புகள் அப்படியே விடப்படுகின்றன; இதனால்
ஆங்கிலமல்லாத பயனர்கள் நம்பிக்கையுடன் எழுதப்பட்ட, ஆனால் இப்போது தவறான உரையைத் தொடர்ந்து படிக்கின்றனர்.

இது உண்மையாகவே வெளியீட்டிற்குச் சென்றது. Antigravity உள்நுழைவு உதவி சேர்க்கப்பட்டபோது (#5203),
`oauthModal.googleOAuthWarning` மீண்டும் எழுதப்பட்டது; **43 மொழியமைவுகளில் 39**, இயக்குநர்களிடம் "முழு
URL-ஐ நகலெடுத்து கீழே ஒட்டவும்" என்று கூறும் உரையைத் தக்கவைத்திருந்தன — அந்த வழங்குநருக்காக நிறைவு செய்யவே
முடியாத ஒரு செயல்முறை அது. பின்வரும் காரணங்களால் #8463 வரை இது கவனிக்கப்படவில்லை:

- `sync-ui-keys`, **இல்லாத** விசைகளை மட்டுமே நிரப்புகிறது; **காலாவதியான** விசைகளை ஒருபோதும் நிரப்பாது;
- `check-ui-keys-coverage`, விசை _இருப்பதை_ எண்ணுகிறது; எனவே காலாவதியான மொழிபெயர்ப்பும் கவரேஜ் பெற்றதாகக் கணக்கிடப்படுகிறது;
- `check-translation-drift`, `docs/i18n/<locale>/**.md` ஆவணப் பிரதிகளைக் கண்காணிக்கிறது —
  அது `src/i18n/messages/*.json`-ஐ ஒருபோதும் படிப்பதில்லை. 2026-09 மறு-ஒத்திசைவு முதல் `docs-sync-strict`
  பணியில் தடுப்பதாக உள்ளது: ஒரு முக்கிய ஆவணத்தைத் திருத்தவும் → `npm run i18n:run -- --files=<doc>` (பிரிவு-நிலை, செலவு குறைவு).

**வேறுபாட்டை உணரக்கூடியது; அடிப்படையைச் சார்ந்ததல்ல.** இணைப்பு அடிப்படையிலுள்ள `en.json`-ஐ
நடப்புப் பணிமரத்துடன் இது ஒப்பிடுகிறது; ஆங்கில மதிப்பு மாறிய ஒவ்வொரு விசைக்கும், மாற்றப்படாத
மொழிபெயர்ப்பை இன்னும் வைத்திருக்கும் எந்த மொழியமைவும் காலாவதியானதாகும். இது வேண்டுமென்றே
**ஏற்கெனவே உள்ள நிலுவைக் கடனை உறையவைக்கிறது** — நீண்டகாலமாக இருக்கும் ஒரு மொழிபெயர்ப்பு எந்தப் பழைய ஆங்கிலத்திலிருந்து
வந்தது என்பதை ஒரு வேறுபாட்டால் வெளிப்படுத்த முடியாது; எனவே தற்போதைய மாற்றம் தொடுபவற்றை மட்டுமே இந்தத் தடை
மதிப்பிடுகிறது. மாற்று வழியான ஒவ்வொரு விசைக்குமான ஹாஷ் அடிப்படை, ஏறத்தாழ 600 KB உருவாக்கப்பட்ட கோப்பைச் செலவாகக்
கொண்டிருக்கும்; இது தற்போதுள்ள மிகப்பெரிய அடிப்படையைவிட 3× பெரியது மற்றும் ஒவ்வொரு i18n PR-இலும் மாறிக்கொண்டிருக்கும்.

இதை நிறைவேற்ற இரண்டு வழிகள் உள்ளன:

1. பாதிக்கப்பட்ட மொழிபெயர்ப்புகளைப் புதுப்பிக்கவும், அல்லது
2. அவற்றை `__MISSING__:<new english>` என அமைக்கவும் — பின்னர் இயக்கநேரம் திருத்தப்பட்ட ஆங்கிலத்தை
   வழங்கும் (`src/i18n/request.ts::deepMergeFallback`, #7258), மேலும் அந்த விசை மொழிபெயர்ப்புக்கான வரிசையில் சேர்க்கப்படும்.

சரத்தின் **பொருள்** மாறியிருந்தால், **விசையின் பெயரை மாற்றுவதை** விரும்பவும்: ஒரு புதிய விசை
காலாவதியான மொழிபெயர்ப்பைப் பெற முடியாது. #8463 பயன்படுத்திய முறை அதுவே.

```bash
npm run i18n:check-value-drift          # கடுமையானது (CI இயக்குவது)
npm run i18n:check-value-drift:warn     # அறிக்கை மட்டும்
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

அடிப்படை பட்டியலைப் படிக்க முடியாதபோது (அடிப்படைக் குறிப்பில்லாத ஆழமற்ற
குளோன்), `check-openapi-breaking`-ஐப் பிரதிபலிக்கும் விதமாக `SKIP reason=base-unresolved` உடன் 0-இல் வெளியேறுகிறது.

### பணி: `i18n`

முழுமையான i18n சரிபார்ப்பு அணி (ஒவ்வொரு மொழியமைவிற்கும் ஒரு பணி). முழுப் பணியும் ஆலோசனை மட்டுமே.

| ஸ்கிரிப்ட்                      | சரிபார்ப்பது                                  | தடுப்பதா                                                        |
| ------------------------------- | --------------------------------------------- | --------------------------------------------------------------- |
| `validate_translation.py quick` | ஒவ்வொரு மொழியமைவிற்குமான மொழிபெயர்ப்பு முழுமை | **ஆலோசனை மட்டும்** (முழுப் பணியிலும் `continue-on-error: true`) |

### பணி: `pr-test-policy`

இழுப்புக் கோரிக்கைகளில் மட்டும் இயங்குகிறது.

| ஸ்கிரிப்ட்             | சரிபார்ப்பது                                                                                                                                                                     | தடுப்பதா |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `check:pr-test-policy` | `src/`, `open-sse/`, `electron/`, அல்லது `bin/`-இல் உள்ள தயாரிப்புக் குறியீட்டை மாற்றும் PR-கள் சோதனைகளைச் சேர்க்கவோ புதுப்பிக்கவோ வேண்டும் (கடுமையான விதி #8)                   | ஆம்      |
| `check:test-masking`   | மாற்றப்பட்ட சோதனைக் கோப்புகள் மொத்த உறுதிப்படுத்தல் எண்ணிக்கையைக் குறைக்கவில்லை அல்லது `assert.ok(true)` போன்ற தானே உண்மையான கூற்றுகளைச் சேர்க்கவில்லை                           | ஆம்      |
| `check:pr-evidence`    | மாற்றத்திற்கான சோதனை/VPS ஆதாரத்தை PR உள்ளடக்கம் மேற்கோள் காட்டுகிறது (PR உரையில் தேடுவதன் மூலம் கடுமையான விதி #18-ஐ இயந்திரமயமாக்குகிறது — உறுதியற்றது, Backlog-ஐப் பார்க்கவும்) | ஆம்      |

### பணி: `test-vitest`

`build`-க்குப் பிறகு இயங்குகிறது. தோல்வியுற்றால் இணைப்பைத் தடுக்கிறது.

| தொகுப்பு         | சரிபார்ப்பவை                                                              | தடுக்கும் தன்மை                                                                                                                             |
| ---------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `test:vitest`    | MCP சேவையகம் (110 கருவிகள்), autoCombo, தற்காலிக சேமிப்பு — vitest இயக்கி | ஆம்                                                                                                                                         |
| `test:vitest:ui` | UI கூறுச் சோதனைகள் — vitest இயக்கி                                        | **தடுக்கும்** — ஏற்கனவே உள்ள தோல்விகள் `vitest.config.ts`-இல் வெளிப்படையாக விலக்கப்பட்டுள்ளன; புதிய தோல்விகள் பணியைத் தோல்வியடையச் செய்யும் |

### இரவுநேரப் பணிப்பாய்வுகள் (திட்டமிடப்பட்டவை, ஆலோசனை சார்ந்தவை)

இவை cron அட்டவணையின்படி (மேலும் `workflow_dispatch` மூலமாகவும்) இயங்குகின்றன; PR-களில் ஒருபோதும் இயங்காது. அனைத்தும் ஆலோசனை சார்ந்தவை.

| பணிப்பாய்வு            | சரிபார்ப்பவை                                                                                                                                                                                    | தடுக்கும் தன்மை |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `nightly-property`     | சீரற்ற விதை + அதிக இயக்க எண்ணிக்கையுடன் fast-check பண்புச் சோதனைகள்                                                                                                                             | **ஆலோசனை**      |
| `nightly-resilience`   | heap வளர்ச்சி நுழைவாயில், chaos பிழை-உட்செலுத்தல், k6 சுமை/தொடர்ச்சிச் சோதனை                                                                                                                    | **ஆலோசனை**      |
| `nightly-llm-security` | promptfoo உட்செலுத்தல் பாதுகாப்பு (தடுப்பு முறை) + garak ஆய்வுகள் (வழங்குநர் ரகசியம் இல்லையெனில் தவிர்க்கப்படும்)                                                                               | **ஆலோசனை**      |
| `nightly-schemathesis` | `docs/openapi.yaml`-ஐப் பயன்படுத்தி இயங்கும் OmniRoute-க்கு எதிரான OpenAPI ஒப்பந்த fuzzing (schemathesis) — விவரக்குறிப்பு மீறல்கள் / கையாளப்படாத 500 பிழைகளை வெளிப்படுத்துகிறது (கட்டம் 8 B.4) | **ஆலோசனை**      |
| `nightly-mutation`     | விரைவு unit பாதையில் Stryker mutation-testing மதிப்பெண் — தப்பிப்பிழைக்கும் mutants பலவீனமான assertions-ஐ வெளிப்படுத்துகின்றன                                                                   | **ஆலோசனை**      |
| `nightly-compat`       | ஆதரிக்கப்படும் `engines.node` வரம்புகள் முழுவதுமான Node engine இணக்கத்தன்மை அணி                                                                                                                 | **ஆலோசனை**      |

---

## வேகக் கட்டம் (2026-08-30 → v4.0 LTS): ஒவ்வொரு அடிப்படை வரம்பும் 20% தளர்த்தப்பட்டது

உரிமையாளர் முடிவு (2026-08-30): v4.0 கூறுமயமாக்கல் வரை, தொழில்நுட்பக் கடன் வரம்பைப் பராமரிப்பதைவிட
வெளியீட்டு வேகம் முக்கியமானது. ஒவ்வொரு **எண்ணியல்** ratchet அடிப்படை வரம்பும் தணிக்கை செய்யக்கூடிய ஒரே
செயல்பாட்டில் 20% தளர்த்தப்பட்டது; மேலும் அந்தக் கட்டம் `config/quality/quality-baseline.json`-இல் அறிவிக்கப்பட்டுள்ளது:

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| என்ன மாற்றப்பட்டது                                                                                                                                                                                                                                      | எங்கு                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `metrics.*.value` — குறைவாக இருந்தால் சிறந்த எண்ணிக்கைகள் ×1.2, அதிகமாக இருந்தால் சிறந்த சதவீதங்கள் ÷1.2 (கவரேஜின் குறைந்தபட்ச வரம்பு 60 ஆகவே வைக்கப்பட்டது, `eslintErrors` 0 ஆகவே உள்ளது, `eslintWarnings` 0 → முடக்கப்பட்ட நிலையான எண்ணிக்கையின் 20%) | `quality-baseline.json` (`_relax_velocity_2026_08_30` குறிப்பு ஒவ்வொரு முன் → பின் மதிப்பையும் பட்டியலிடுகிறது) |
| `count` ×1.2 / `percentage` ×1.2                                                                                                                                                                                                                        | `complexity-baseline.json`, `duplication-baseline.json`                                                         |
| `cap`, `testCap`, ஒவ்வொரு `frozen[*]` / `testFrozen[*]` வரி வரம்பும் ×1.2                                                                                                                                                                               | `file-size-baseline.json`                                                                                       |
| கோப்புக்கு / TS குறியீட்டுக்கு உரிய எண்ணிக்கைகள் ×1.2                                                                                                                                                                                                   | `api-typecheck-baseline.json`, `dashboard-typecheck-baseline.json`, `open-sse-typecheck-baseline.json`          |
| `THRESHOLD` 36 → 30                                                                                                                                                                                                                                     | `scripts/check/check-openapi-coverage.mjs`                                                                      |
| `_policy.requireTighten === false` ஆக இருக்கும்போது `--require-tighten` ஆலோசனையாக மாறுகிறது                                                                                                                                                             | `scripts/quality/check-quality-ratchet.mjs`                                                                     |
| இரவுநேர `bank-ratchet-shrinks` இடைநிறுத்தப்படுகிறது (அது அளவிடப்பட்ட சுருக்கத்தைச் சேமித்து, கூடுதல் இடவசதியை நீக்கிவிடும்)                                                                                                                             | `.github/workflows/nightly-release-green.yml`                                                                   |

அனுமதிப்பட்டியல்கள் (`eslint-suppressions.json`, `test-masking-allowlist.json`, `test-discovery-baseline.json`,
…) வரவுசெலவுத் திட்டங்கள் **அல்ல**, மேலும் அவை மாற்றப்படவில்லை. தேர்ச்சி/தோல்விக் கொள்கை நுழைவாயில்கள் (ரகசியங்கள், SQL விதிகள்,
ஆவணங்கள்/சூழல் ஒப்பந்தம், i18n சமநிலை, அலகுச் சோதனைகள்) மாறவில்லை — தோல்வியடைந்த சோதனை இன்னும் தோல்வியடைந்த சோதனையே.

**கருவிகள்**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — ஒருமுறை மட்டுமே செய்யப்படும்
  தளர்த்தல் (`scripts/quality/relax-baselines.mjs`); அதே குறிப்புடன் இரண்டாவது முறை இயங்க மறுக்கும்.
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  CI அளவிடும் அதே முறையில் ஒவ்வொரு எண்ணியல் நுழைவாயிலையும் அளவிட்டு, ஒவ்வொரு நுழைவாயிலிலும் மீதமுள்ள இடவசதியை
  அச்சிடுகிறது (`scripts/quality/baseline-headroom.mjs`). இரவுநேர `baseline-headroom` பணி, செயலில் உள்ள
  **📈 அடிப்படை இடவசதி (வேகக் கட்டம்)** சிக்கலில் அட்டவணையைப் பதிவிட்டு, ஏதேனும் நுழைவாயில் அதன் உச்ச வரம்பிலிருந்து
  10%-க்குள் இருந்தாலோ அல்லது ஏற்கெனவே அதைத் தாண்டியிருந்தாலோ `headroom-alert` லேபிளைச் சேர்க்கிறது. அந்தச் சிக்கலே
  முன்கூட்டிய எச்சரிக்கையாகும்: ஒரு வரவுசெலவுத் திட்டம் சில நாட்களிலேயே நிரம்பினால், அந்தத் தளர்வு முழுக் குழுவாலும்
  அல்லாமல் சில PR-களால் பயன்படுத்தப்படுகிறது என்பதே பொருள் — சிக்கலுக்குரிய நுழைவாயிலின் `_rebaseline_*` குறிப்புகளைப் பார்க்கவும்.

**புதிய-குறியீட்டு முறை (Clean-as-You-Code) — 2026-08-30 முதல், PR விரைவுப் பாதைக்கு மட்டும்**

`pull_request` நிகழ்வுகளில், `quality.yml` ஆனது `--base-ref <PR base SHA>` என்பதை `check:file-size`,
`check:complexity-ratchets` மற்றும் `check:dead-code` ஆகியவற்றுக்கு அனுப்புகிறது. அந்த முறையில், நுழைவாயில் HEAD-ஐ
merge-base உடன், **PR தொட்ட கோப்புகளுக்கு மட்டும் வரையறுத்து**, ஒப்பிடுகிறது (`scripts/check/newCodeMode.mjs`:
merge-base ஒரு தற்காலிக `git worktree`-இல் உருவாக்கப்படுகிறது; ESLint/knip அங்கும் HEAD-இலும் இயக்கப்பட்டு,
ஒவ்வொரு கோப்புக்குமான எண்ணிக்கை வேறுபாடுகள் கணக்கிடப்படுகின்றன):

- **தடுக்கும்** — PR மாற்றிய கோப்புகளில் cyclomatic/cognitive மீறல்கள் அல்லது dead exports-ஐச் சேர்த்தது
  (பதிவில் `complexityNewCode=`, `cognitiveComplexityNewCode=`, `deadExportsNewCode=`);
- **ஆலோசனை** — நிலையான அடிப்படை வரம்புடன் ஒப்பிடப்பட்ட உலகளாவிய மொத்தம். மரபாகப் பெறப்பட்ட விலகல், குற்றமற்ற
  PR ஒன்றை ஒருபோதும் தோல்வியடையச் செய்யாது; வெளியீட்டு ஒத்திசைவின்போது அந்த விலகல் மீண்டும் நிலைப்படுத்தப்பட்டு, இடவசதிப் பணியால் கண்காணிக்கப்படும்.

`workflow_dispatch` இயக்கங்கள், release-green முழுச் சோதனை மற்றும் இரவுநேர இடவசதிப் பணி ஆகியவற்றுக்கு PR அடிப்படை
இல்லாததால், அவை முழுமையான (உலகளாவிய) ஒப்பீட்டையே தொடர்கின்றன. கவரேஜ், நகலாக்கம் மற்றும் வகை-கவரேஜ் ஆகியவை
தற்போதைக்கு உலகளாவியதாகவே உள்ளன (அவற்றின் கருவிகள் ஒவ்வொரு கோப்புக்குமான வேறுபாட்டைக் குறைந்த செலவில் உருவாக்குவதில்லை) —
அதே அணுகுமுறைக்கான எதிர்காலத் தேர்வுகள்.

**v4.0-இல் கட்டத்தை முடித்தல் (LTS = முன்பைவிடக் கடுமையானது, "இயல்பு நிலைக்குத் திரும்புவது" அல்ல)**

1. தூய `release/v4.0.0` முனையில்: பதிவுக்காக `npm run quality:headroom --json`-ஐ இயக்கி, பின்னர்
   `npm run quality:ratchet -- --update`, `check:file-size --update`,
   `check:complexity-ratchets --update`, `check:dead-code --update` மற்றும் ஒவ்வொரு typecheck வாயிலின்
   `--update`-ஐ இயக்கவும் — ஒவ்வொரு அடிப்படையும் அளவிடப்பட்ட மதிப்புக்குக் குறையும்.
2. `quality-baseline.json`-இலிருந்து `_policy`-ஐ நீக்கவும் (`--require-tighten` மற்றும் இரவுநேரச்
   சேமிப்பை மீண்டும் செயல்படுத்துகிறது); `check-openapi-coverage.mjs`-இல் `THRESHOLD = 36`-ஐ (அல்லது அதற்கு மேல்) மீட்டமைக்கவும்.
3. தொகுதியாக்கம் பலனளித்த இடங்களில், அளவிடப்பட்ட மதிப்பைக் கடந்தும் இறுக்கமாக்கவும்: file-size `cap`-ஐ மீண்டும் 1000
   (அல்லது 800) ஆகவும், coverage குறைந்தபட்சங்களை +5 ஆகவும், தொகுதியாக்கப்பட்ட package-களுக்கான dead exports-ஐ 0 ஆகவும் அமைக்கவும்.

## ராட்செட் அடிப்படை (`quality-baseline.json`)

ராட்செட் இயந்திரம் (`scripts/quality/check-quality-ratchet.mjs`) `quality-baseline.json`-ஐப் படித்து,
புதிதாகச் சேகரிக்கப்பட்ட `quality-metrics.json` உடன் ஒப்பிடுகிறது. அதன் எப்சிலான் வரம்பைத் தாண்டிப்
பின்னடையும் எந்த அளவீடும் பில்டைத் தோல்வியடையச் செய்யும்.

தற்போது கண்காணிக்கப்படும் அளவீடுகள்:

| அளவீடு                | திசை   | பொருள்                                              |
| --------------------- | ------ | --------------------------------------------------- |
| `eslintWarnings`      | `down` | ESLint எச்சரிக்கைகளின் எண்ணிக்கை அதிகரிக்கக் கூடாது |
| `coverage.statements` | `up`   | ஸ்டேட்மென்ட் கவரேஜ் குறையக் கூடாது                  |
| `coverage.lines`      | `up`   | வரி கவரேஜ் குறையக் கூடாது                           |
| `coverage.functions`  | `up`   | செயல்பாடு கவரேஜ் குறையக் கூடாது                     |
| `coverage.branches`   | `up`   | கிளை கவரேஜ் குறையக் கூடாது                          |

உண்மையான மேம்பாட்டிற்குப் பிறகு அடிப்படையைப் புதுப்பிக்க:

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

`--update` கொடி தற்போது அளவிடப்பட்ட மதிப்புகளை `quality-baseline.json`-இல் எழுதுகிறது.
அளவீட்டை மேம்படுத்திய மாற்றத்துடன் இந்தக் கோப்பையும் கமிட் செய்யவும். அடிப்படையைப் புதுப்பிக்காமல்
ஒரு அளவீட்டை மேம்படுத்தும் PR, `--require-tighten` மூலம் கண்டறியப்படும் (கட்டம் 6A.5,
செயல்படுத்தல் நிலுவையில் உள்ளது).

### CodeQL ராட்செட்: புதுப்பிப்பு இடைவெளி மற்றும் கைமுறைத் தூண்டல்

`check:codeql-ratchet`, **ஒவ்வொரு PR-க்கும் அல்லாமல், அட்டவணைப்படி புதுப்பிக்கப்படும் ரெப்போ நிலையையே**
படிக்கிறது. `gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup`,
`state: configured`, `schedule: weekly` எனத் தெரிவிக்கிறது: இது GitHub-இன் இயல்புநிலை அமைப்பு ஸ்கேன்,
ஒவ்வொரு push-க்கும் செய்யப்படும் பகுப்பாய்வு அல்ல. விளைவு: விழிப்பூட்டல்களைச் சரிசெய்யும் PR மெர்ஜ் செய்யப்பட்ட பிறகு,
அடுத்த திட்டமிடப்பட்ட ஸ்கேன் இயங்கும் வரை ராட்செட் பழைய, அதிகமான எண்ணிக்கையையே தொடர்ந்து படிக்கும் — எனவே ஸ்கேன்
புதுப்பிக்கப்படும் வரை, சரிசெய்த PR-இன் சொந்த தொடர்ச்சிப் PR-கள் உட்பட, திறந்திருக்கும் ஒவ்வொரு PR-இலும் இது பின்னடைவைத் தெரிவிக்கும்.

**கைமுறைப் புதுப்பிப்பு**: `gh workflow run codeql.yml --ref release/vX.Y.Z` பகுப்பாய்வை மீண்டும்
இயக்கி, சில நிமிடங்களுக்குள் விழிப்பூட்டல்களை மீண்டும் வெளியிடுகிறது. முதலில் `.github/workflows/codeql.yml`-ஐப்
படிக்கவும் — GitHub-இன் "இயல்புநிலை அமைப்புடன்" முரண்படுவதன் காரணமாகவே அது `workflow_dispatch`-க்கு மட்டுமே
உரியது என்பதை அதன் தலைப்பு விளக்குகிறது (`CodeQL analyses from advanced configurations cannot be
processed when the default setup is enabled`). `push`/`pull_request`/
`schedule` தூண்டல்களை மீட்டமைப்பதற்கு முதலில் **உரிமையாளரின் நடவடிக்கை** தேவை: Settings → Code security →
CodeQL: Default → Advanced. அந்த மாற்றத்தைச் செய்யாமல் `schedule:` தூண்டலைச் சேர்க்க வேண்டாம் — அது
தோல்வியடையும் ரன்களை மட்டுமே உருவாக்கும்.

**எண்ணிக்கை குறைந்த பிறகு அடிப்படையை இறுக்கவும்** — `node scripts/check/check-codeql-ratchet.mjs
--update`, புதிதாக அளவிடப்பட்ட எண்ணிக்கையை `quality-baseline.json` →
`metrics.codeqlAlerts.value`-இல் எழுதுகிறது; எனவே பழைய உச்சவரம்பு வரை மீண்டும் ஏற்படும் பின்னடைவை ராட்செட்
மறைமுகமாக அனுமதிக்காது. செயல்முறை எடுத்துக்காட்டு (2026-09-02/03): PR #12502, 7 உண்மையான விழிப்பூட்டல்களைச்
சரிசெய்தது (அளவிடப்பட்ட திறந்த விழிப்பூட்டல்கள் 13 → 6); PR #12530, பொருந்தும் வகையில் உறையவைக்கப்பட்ட அடிப்படையை
11 → 6 என இறுக்கியது; பின்னர் மீதமிருந்த 6 விழிப்பூட்டல்களும் ஒவ்வொன்றிற்குமான நியாயவிளக்கத்துடன் நிராகரிக்கப்பட்டு,
திறந்த விழிப்பூட்டல்களின் எண்ணிக்கை 0 ஆகக் குறைக்கப்பட்டது.

**நிராகரிப்புகள் ஆபரேட்டரின் முடிவு (கடுமையான விதி #14)** — நிராகரிப்புக் கருத்தில் தொழில்நுட்ப
நியாயவிளக்கத்தைப் பதிவு செய்யாமல் ஒருபோதும் CodeQL விழிப்பூட்டலை நிராகரிக்க வேண்டாம்: அப்ஸ்ட்ரீம் நெறிமுறைத்
தேவைக்கு `won't fix`, சோதனை ஃபிக்சருக்கு `used in tests`, CodeQL-ஆல் கண்டறிய முடியாத சுத்திகரிப்பானுக்கு
`false positive` (முன்னுதாரணம்: `docs/security/ERROR_SANITIZATION.md`).

---

## சோதனை மறுமுயற்சிக் கொள்கை (WS5.4, v3.8.49)

மறுமுயற்சி ஒவ்வொரு runner-க்கும் தனிப்பட்டது; ஒருபோதும் ஒட்டுமொத்தமாகப் பயன்படுத்தப்படாது — ஒட்டுமொத்த மறுமுயற்சி உண்மையான பின்னடைவுகளைப் புலப்படாத நிலையற்ற தோல்விகளாக மாற்றிவிடும்:

| Runner           | கொள்கை                                                                                                                                                                               | காரணம்                                                                                                                                              |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Playwright (e2e) | CI-இல் மட்டும் `retries: 1`, மேலும் `trace: on-first-retry`                                                                                                                          | உலாவி/பிணைய நேர அமைவு உண்மையிலேயே நிர்ணயமற்றது; trace உடன் கூடிய ஒரு மறுமுயற்சி, நிலையற்ற தோல்வியை ஆராய்ந்து கண்டறியக்கூடிய artifact-ஆக மாற்றுகிறது |
| Vitest           | ஒட்டுமொத்த மறுமுயற்சி இல்லை. நிலையற்றது என நிரூபிக்கப்பட்ட சோதனைக்கு வெளிப்படையான, ஒவ்வொரு சோதனைக்குமான மறுமுயற்சி வழங்கப்படும் (diff-இல் தெரியும், PR-இல் மதிப்பாய்வு செய்யப்படும்) | தனிமைப்படுத்தப்பட்ட சோதனைகளின் பட்டியலை repo-இல் வெளிப்படையாக வைத்திருக்கிறது                                                                       |
| node:test (unit) | ஒருபோதும் மறுமுயற்சி இல்லை                                                                                                                                                           | நிலையற்ற unit test என்பது சோதனையிலுள்ள பிழை — அதைச் சரிசெய்யுங்கள்; மீண்டும் இயக்கி வெற்றியை எதிர்பார்க்காதீர்கள்                                   |

நிலையற்ற தோல்விகளுக்கான telemetry கிடைத்ததும் இலக்கு SLO-கள் (WS5.2/5.3): ஒவ்வொரு சோதனைக்கும் <1% நிலையற்ற தோல்வி விகிதம்
("உடனே சரிசெய்" வரம்பு), ஒவ்வொரு pipeline-க்கும் ≥95% வெற்றி விகிதம். இவை தொழில்துறை மேற்கோள் மதிப்புகள் —
நமது சொந்த அளவீடுகளுக்கு ஏற்ப மறுஅளவீடு செய்ய வேண்டும்.

## Release-நிலை Ratchet விலகல் (WS5.5, v3.8.49)

ஒரு ratchet (கோப்பு அளவு, சிக்கல்தன்மை, eslint எச்சரிக்கைகள்) தூய release
tip-இல் பின்னடைந்தால் — அதாவது merge-களின் சேர்க்கை அதைப் பின்னடையச் செய்திருந்தாலும், எந்த ஒரு PR-உம் அதன்
சொந்த branch-இல் தனியாக அந்தப் பின்னடைவை மறுஉருவாக்கவில்லை என்றால் — சரிசெய்வது **release captain-இன் பொறுப்பு; ஒருமுறை, release
branch-இல்**: extraction/refactor-ஐ விரும்புங்கள்; ஆவணப்படுத்தப்பட்ட நியாயப்படுத்தல் பதிவு இருந்தால் மட்டுமே baseline-ஐப் புதுப்பியுங்கள்.
சேர்க்கையால் ஏற்பட்ட விலகலை ஒருபோதும் contributor PR மீது திணிக்காதீர்கள்; ஒவ்வொரு PR-க்கும் தனித்தனியாக
baseline-ஐப் புதுப்பிக்காதீர்கள் (அது உண்மையான பின்னடைவுகளை மறைக்கும்). முதலில் வேறுபடுத்திக் கண்டறியுங்கள்: உங்கள் PR அதற்குக் காரணம் எனக் கருதுவதற்கு முன்,
probe worktree ஒன்றில் தூய tip-க்கு எதிராகத் தோல்வியை மறுஉருவாக்குங்கள்.

## Ratchet குறைப்புகளை வங்கிப்படுத்துதல் — கீழ்நோக்கிய திசை (#8584)

Ratchet பாதி மட்டுமே தானியங்கியாக உள்ளது; அதுவும் தவறான பாதி. ஒரு cap-ஐ **உயர்த்துவது** பத்து விநாடிகள் எடுக்கும்
கைமுறை JSON திருத்தம்; தோல்வியடைந்த PR ஒன்றைத் தடையிலிருந்து விடுவிப்பதற்கான மிக விரைவான வழியும் அதுதான்.
ஒரு cap-ஐ **குறைப்பதற்கு**, யாராவது `--update`-ஐ இயக்கி முடிவை commit செய்ய வேண்டும் — மேலும்
`bank-ratchet-shrinks` job அறிமுகமாகும் வரை, எந்த workflow-வும் அதை இயக்கவில்லை. அளவிடப்பட்ட விளைவு
(2026-07-25): 800 வரிகள் என்ற புதிய-கோப்பு cap-க்கு உட்பட்டோ அல்லது அதற்குச் சமமாகவோ ஏற்கனவே உள்ள 18 frozen கோப்புகள்; மிக மோசமானது
132× (`src/shared/validation/schemas.ts`, 2,523 cap-ஐத் தாங்கும் 19 வரிகள்); சிக்கல்தன்மை உச்சவரம்பு ஏறத்தாழ 37 rebaseline குறிப்புகளின் வழியாக
`1794 → 2169` என உயர்ந்தது, அதில் சரியாக ஒரே ஒரு குறைவு மட்டுமே இருந்தது (−1); மேலும் "அடுத்த சுழற்சியில் `--update` வழியாக இறுக்கு" என்று
31 முறை எழுதப்பட்டு, ஒரே ஒரு முறை மட்டுமே நிறைவேற்றப்பட்டது. அதைப் பெற்றுத்தந்த code-ஐ விட நீண்ட காலம் நீடிக்கும் ஒரு cap,
நிறைவடைந்த ஒவ்வொரு decomposition-ஐயும் அடுத்ததாக அந்தக் கோப்பைத் திருத்துபவருக்கான வளர்ச்சி அனுமதியாக அமைதியாக மாற்றுகிறது.

`nightly-release-green.yml` → job **`bank-ratchet-shrinks`** அந்தச் சுழற்சியை நிறைவு செய்கிறது:

|              |                                                                                                                                      |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| இயங்குவது    | `schedule` (ஒரு நாளுக்கு 3×) + `workflow_dispatch` — திட்டமிட்டே `push` அல்ல                                                         |
| அளவிடுவது    | மிக உயர்ந்த `release/vX.Y.Z`; `release-green` பயன்படுத்தும் அதே resolution + injection guard                                         |
| எழுதுவது     | `check:file-size --update` மற்றும் `check:complexity-ratchets --update` (இரண்டும் வடிவமைப்பிலேயே குறைக்க மட்டும் அனுமதிப்பவை)        |
| சரிபார்ப்பது | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                                                             |
| வழங்குவது    | release branch-க்கு எதிராக எப்போதும் தற்போதைய நிலையில் இருக்கும் ஒரே ஒரு PR — force-update செய்யப்படும்; ஒருபோதும் spam செய்யப்படாது |

ஒவ்வொரு push-க்கும் பதிலாக banking தொகுதியாகச் செய்யப்படுகிறது; ஏனெனில் அதற்கு latency தேவை இல்லை (8 மணிநேரத்திற்குள்
bank செய்யப்படும் குறைப்பு போதுமானது), ஆனால் ஒவ்வொரு merge-க்கும் இயக்குவது merge campaign-களின்போது PR branch-ஐ மீண்டும் மீண்டும்
உருவாக்குவதோடு, ஒவ்வொரு முறையும் முழுமையான ESLint ஆய்வுக்கான செலவையும் ஏற்படுத்தும். கண்டறிதல் தொடர்ந்து
push-இல் (`release-green`) நடைபெறும்; banking மட்டும் தொகுதியாகச் செய்யப்படுகிறது.

### பாதுகாப்புச் சரிபார்ப்பான்

இந்த job மனிதக் கண்காணிப்பின்றி baseline-களில் எழுதுகிறது; எனவே அதை ஏற்றுக்கொள்ளத்தக்கதாக ஆக்குவது `verify-ratchet-bank.mjs` ஆகும்.
இது `--update`-க்குப் பிந்தைய tree-ஐ `HEAD` உடன் diff செய்து, ஒவ்வொரு மாற்றமும் கீழ்க்கண்டவற்றில் ஒன்றாக இல்லாவிட்டால்,
**எந்த commit-உம் உருவாகும் முன்பே job-ஐ நிறுத்திவிடும்** — எந்த PR-உம் திறக்கப்படாது:

- ஒரு `frozen` / `testFrozen` எண் பதிவு **குறைக்கப்பட்டது** அல்லது **அகற்றப்பட்டது**
- `complexity-baseline.json` → `count` **குறைக்கப்பட்டது**
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` **குறைக்கப்பட்டது**

வேறு எதுவும் தோல்வியடையும்: எண்ணை உயர்த்துவது, பதிவைச் சேர்ப்பது, `cap`/`testCap`-ஐ மாற்றுவது, அல்லது
`_rebaseline_*` குறிப்பை நீக்குவது/மீண்டும் எழுதுவது (ஒவ்வொரு உச்சவரம்பும் ஏன் உள்ளது என்பதற்கான audit trail அந்தக் குறிப்புகளாகும்;
அவை கோப்புப் பதிவுகள் இருக்கும் அதே `frozen` object-இன் உள்ளே சேமிக்கப்படுகின்றன).
ஒரு cap-ஐ உயர்த்தக்கூடிய bot தற்போதைய நிலையைவிட முற்றிலும் மோசமானதாக இருக்கும். பின்னடைவு
guard: `tests/unit/verify-ratchet-bank.test.ts`.

இந்த job ஒருபோதும் `release/*`-க்கு push செய்யாது — ஒரு மனிதர் PR-ஐ merge செய்வார்; எனவே தவறான அளவீடு
மதிப்பாய்வு இல்லாமல் சேர்க்கப்பட முடியாது.

## அனுமதிப்பட்டியல் கொள்கை

ஏற்கனவே உள்ள மீறல்களால் தோல்வியடையக் கூடாத ஒவ்வொரு வாயிலும் உறையவைக்கப்பட்ட அனுமதிப்பட்டியலைப் பயன்படுத்துகிறது
(எ.கா., `KNOWN_STALE_DOC_REFS`, `KNOWN_MISSING`, `KNOWN_RAW_SQL`). கொள்கை:

**மூலக் காரணத்தைச் சரிசெய்யுங்கள்; மீறல் ஏற்கனவே இருந்து, அதே PR-இல் அதைச்
சரிசெய்ய முடியாதபோது மட்டுமே அனுமதிப்பட்டியலைப் பயன்படுத்துங்கள்.**

அனுமதிப்பட்டியலில் ஓர் உள்ளீட்டைச் சேர்க்கும்போது:

1. காரணத்தை விளக்கும் ஒரு குறிப்பைச் சேர்க்கவும்.
2. கண்காணிப்புச் சிக்கலைக் குறிப்பிடவும் (எ.கா., `// #3498 — கட்டம் 2 அம்சம், இன்னும் செயல்படுத்தப்படவில்லை`).
3. மீறலைச் சரிசெய்யும் அதே PR-இல் அந்த உள்ளீட்டை அகற்றவும் — செயலிலுள்ள ஒரு மீறலை இனி
   மறைக்காத காலாவதியான உள்ளீடு தானே ஒரு குறைபாடாகும் (6A.3 காலாவதி-அமலாக்கம்
   செயல்படுத்தப்பட்டவுடன், தொடர்பற்ற அனுமதிப்பட்டியல் உள்ளீட்டின் காரணமாக வாயில் தோல்வியடையும்).

சோதனைகளை விரைவாகத் தேர்ச்சி பெறச் செய்வதற்காக அனுமதிப்பட்டியல் உள்ளீடுகளைச் சேர்க்க **வேண்டாம்**. தொடர்ந்து வளர்கின்ற
அனுமதிப்பட்டியலுடன் கூடிய பச்சை வாயில், தரத்தைப் பற்றிய தவறான நம்பிக்கையைத் தருகிறது.

### உங்கள் PR-இல் ஒரு வாயில் தோல்வியடையும்போது

1. **வாயில் வெளியீட்டை கவனமாகப் படிக்கவும்** — எந்தக் கோப்பு அல்லது குறியீடு
   விதியை மீறியது என்பதை அது துல்லியமாகக் கூறும்.
2. **மீறலைச் சரிசெய்யவும்** — பெரும்பாலான வாயில்கள், குறியீடு சரியானவுடன் தேர்ச்சி பெறும்
   நிர்ணயிக்கப்பட்ட கோப்பு முறைமைச் சோதனைகளாகும்.
3. **மீறல் ஏற்கனவே இருந்தால்** (அதாவது, அதை நீங்கள் அறிமுகப்படுத்தவில்லை, ஆனால் வாயில் இப்போது
   அதை உள்ளடக்குகிறது): காரண விளக்கக் குறிப்பு மற்றும் கண்காணிப்புச் சிக்கலுடன் ஓர் அனுமதிப்பட்டியல் உள்ளீட்டைச் சேர்க்கவும்.
4. **வாயில் ஒரு ratchet ஆக இருந்தால்** (coverage, ESLint எச்சரிக்கைகள், நகலாக்கம், சிக்கல்தன்மை):
   உங்கள் மாற்றம் அளவீட்டை மோசமாக்கியுள்ளது. அடிப்படைச் சிக்கலைச் சரிசெய்யவும் அல்லது (அரிதாக) மாற்றம்
   நோக்கமுடையதாகவும் அளவீட்டின் சரிவு ஏற்கத்தக்கதாகவும் இருந்தால்
   `npm run quality:ratchet -- --update`-ஐ இயக்கவும் — ஆனால் PR விளக்கத்தில் அதற்கான காரணத்தை ஆவணப்படுத்தவும்.
5. **ஆலோசனை வாயில்கள்** (`continue-on-error: true`) தகவலுக்காக மட்டுமே — அவை இணைப்பைத்
   தடுக்காது, ஆனால் CI சுருக்கத்தில் தோன்றும். இருந்தாலும் அவற்றைச் சரிசெய்யவும்.

---

## புதிய வாயிலைச் சேர்த்தல்

1. `scripts/check/check-<name>.mjs` (அல்லது `.ts`) உருவாக்கவும். கொள்கை வாயில்கள் 0/1 வெளியேறும் குறியீட்டுடன் முடிவடையும்.
   Ratchet-பாணி வாயில்கள் `collect-metrics.mjs` வழியாக `quality-metrics.json`-க்கு ஓர் அளவீட்டை வெளியிடும்.
2. `package.json`-இல் `"check:<name>": "node scripts/check/check-<name>.mjs"`-ஐச் சேர்க்கவும்.
3. பொருத்தமான பணியின் கீழ் `.github/workflows/ci.yml`-இல் அதை இணைக்கவும்
   (கொள்கை → `lint` அல்லது `docs-sync-strict`; ratchet → `quality-gate`).
4. அதற்கு அனுமதிப்பட்டியல் இருந்தால், காலாவதியான உள்ளீடுகள் தானாகக் கண்டறியப்படுவதற்காக
   `scripts/check/lib/allowlist.mjs`-இலிருந்து `reportStaleEntries()`-ஐப் பயன்படுத்தவும்.
5. வாயிலின் கண்டறிதல் தர்க்கத்தை உள்ளடக்கும் சோதனையை `tests/unit/build/`-இல் எழுதவும்.
6. இந்த ஆவணத்தைப் புதுப்பிக்கவும் (தொடர்புடைய பணியின் அட்டவணையில் ஒரு வரியைச் சேர்க்கவும்).

---

## முகவர் கருவியமைப்பு: சுழற்சிக்குள் LSP (விருப்பத் தேர்வு)

CI வாயில்களுக்கு அப்பால், OmniRoute ஒரு **விருப்பத் தேர்வான** `agent-lsp` அடித்தளத்தை
(திட்ட-நிலை `.mcp.json`, Fase 7 Task 15) வழங்குகிறது. குறியீட்டு முகவர்களுக்கு ஒரு TypeScript மொழிச் சேவையகத்தை வெளிப்படுத்த
`.mcp.json`-ஐ உருவாக்கவும்; இதனால் அவர்கள் குறியீட்டை எழுதுவதற்கு **முன்பே** குறியீடுகள் /
கண்டறிதல்களைத் தீர்மானிப்பார்கள் — மூலத்திலேயே "கற்பனையான குறியீடு" பிழைகளைக் குறைக்கும்
`typecheck:core`-க்கான compile-before-claim துணை இது. இது வேண்டுமென்றே
தானாக ஏற்றப்படுவதில்லை (MCP↔LSP பாலத்தை நீங்கள் தேர்ந்தெடுத்துச் சரிபார்க்க வேண்டும்); பழுதான உள்ளீடு ஓர்
இணைப்புப் பிழையை மட்டுமே பதிவு செய்யும், அமர்வுகளை ஒருபோதும் பாதிக்காது.

---

## சீராக்கல் நிலுவைப் பட்டியல் (ROI மதிப்பாய்வு — கட்டம் 9 அலை 3)

இந்தப் பட்டியல் 2026-06-17 அன்று `ci.yml` உடன் ஒப்பிட்டு சரிசெய்யப்பட்டது (முந்தைய பதிப்பில்
`audit:deps`, `check:tracked-artifacts`, `check:lockfile`, `check:licenses`,
`check:dead-code`, `check:cognitive-complexity`, `check:type-coverage`,
`check:codeql-ratchet`, `check:pr-evidence` ஆகியவை விடுபட்டிருந்தன). சரிசெய்யப்பட்ட தொகுப்பின் ROI மதிப்பாய்வு
பின்வரும் சீராக்கல் வேட்பாளர்களை அடையாளம் கண்டது. **இணைப்புகள் இயந்திரரீதியான CI
மாற்றங்கள்; நிலைமாற்றங்கள்/நீக்கங்கள் இயக்குநருக்காக ஒதுக்கப்பட்ட கொள்கை முடிவுகள்.** கீழே உள்ள எதுவும்
இன்னும் செயல்படுத்தப்படவில்லை.

**மேலே ஆவணப்படுத்தப்படாதவை** (ஆலோசனை மட்டும், குறைந்த சமிக்ஞை): `docs-lint` பணி
(markdownlint + Vale, முழுப் பணிக்கும் `continue-on-error`) மற்றும் தனித்தியங்கும் ஸ்கேனர் பணிப்பாய்வுகளான
`semgrep.yml` / `codeql.yml` / `scorecard.yml`. `quality-baseline.json`-இல்
`semgrepFindings: 0` உள்ளது, ஆனால் `ci.yml`-இல் தடுக்கும் ratchet ஒன்றுடன் இணைக்கப்படவில்லை — இந்த அளவீடு
தற்போது தொடர்பற்ற நிலையில் உள்ளது.

### இணைத்தல் / நகல் நீக்கம் (இயந்திரரீதியானது, குறைந்த அபாயம்)

ஒவ்வொரு வேட்பாளரும் 2026-06-17 அன்று நேரடி gate நிலைக்கு எதிராகச் சரிபார்க்கப்பட்டது (நம்பினாலும் சரிபார்);
பல "வெளிப்படையான" இணைப்புகள் கடனை மறைத்திருப்பது தெரியவந்ததால் அவை **தடையின்றி மாற்றக்கூடியவை அல்ல**.

- **`check:docs-sync` இருமுறை இயங்குகிறது** — `lint` பணியில் தனியாகவும், `check:docs-all` (`docs-sync-strict`) மற்றும் husky pre-commit hook ஆகியவற்றுக்குள்ளும் மீண்டும் இயங்குகிறது. ✅ **முடிந்தது** — தனித்த `lint` இயக்கம் நீக்கப்பட்டது.
- **CVE ஸ்கேனிங்** — ❌ **தடையற்ற இணைப்பு அல்ல.** எந்தவொரு high/critical CVE இருந்தாலும் `audit:deps` கடுமையாகத் தோல்வியடைகிறது; `check:vuln-ratchet` (osv), baseline உடன் ஒப்பிடும்போது ஒரு _பின்னடைவு_ ஏற்பட்டால் மட்டுமே தோல்வியடைகிறது (தற்போது 1 MODERATE). பொருளியல் வேறுபட்டது — `audit:deps`-ஐ நீக்குவது முழுமையான high/critical gate-ஐ இழக்கச் செய்யும். இரண்டையும் வைத்திருக்கவும்.
- **சுழற்சி கண்டறிதல்** — ❌ **தடையற்ற இணைப்பு அல்ல.** `check:circular-deps` (dpdm) **91 சுழற்சிகளை** அறிக்கையிடுகிறது (அதனால்தான் அது ஆலோசனை நிலையிலுள்ளது); அவற்றை முதலில் தீர்க்காமல் அதைத் தடுக்கும் நிலைக்கு உயர்த்த முடியாது, மேலும் green நிலையில் உள்ள, தேர்ந்தெடுக்கப்பட்ட `check:cycles`-ஐ விட இதன் நோக்கெல்லை பரந்தது. `check:cycles`-ஐ தடுக்கும் நிலையில் வைத்திருக்கவும்; 91 dpdm சுழற்சிகளைத் தீர்ப்பது தனி நிலுவைப் பணியாகும்.
- **சிக்கல்தன்மை** — ✅ **முடிந்தது** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`): ஒரே ESLint நடை, ruleId வாரியாக எண்ணுவதால் cyclomatic+max-lines மற்றும் cognitive baseline-கள் தனித்தனியாகவே இருக்கின்றன; தனிப்பட்ட `check:complexity` / `check:cognitive-complexity` உள்ளூர் `--update` பயன்பாட்டிற்காகத் தொடர்ந்து உள்ளன.
- **`/api` தவறான உருவாக்கத் தடுப்பு** — ✅ **முடிந்தது** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`): `src/app/api`-க்கான ஒரே FS பட்டியல்; openapi-routes + docs-symbols இன்னும் தனித்தனியாக அறிக்கையிடுகின்றன; தனிப்பட்டவை உள்ளூர் இயக்கங்களுக்காகத் தொடர்ந்து உள்ளன.
- **`check:node-runtime` 11 பணிகளில் இயங்குகிறது** — ⚠️ **குறைந்த ROI.** ஒவ்வொன்றும் தனித்தனி runner ஆகும், மேலும் இந்தச் சோதனை <1s மட்டுமே எடுக்கும்; மலிவான ஒவ்வொரு பணிக்குமான பாதுகாப்பை இழப்பதற்கு எதிராக, மொத்தச் சேமிப்பு ~10s மட்டுமே. இந்த மாற்றக் குழப்பத்திற்குத் தகுதியானதல்ல.
- **CI lint-இல் `typecheck:noimplicit:core`** — ✅ **lint பணியிலிருந்து நீக்கப்பட்டது** (ஆலோசனை `continue-on-error` ஆக இருந்தது); தடுக்கும் type surface என்பது `typecheck:core` + `check:type-coverage`. உள்ளூர் script தக்கவைக்கப்பட்டது.

### நிலைமாற்றம் / முடிவு (இயக்குநர் கொள்கை)

- `check:openapi-security-tiers` (ஆலோசனை) — ❌ **தடையின்றி நிலைமாற்ற முடியாது.** இது 0-உடன் வெளியேறுகிறது, ஆனால் `LOCAL_ONLY_API_PREFIXES`-இன் கீழ் உள்ள பல `traffic-inspector` route-களில் `x-loopback-only: true` annotation இல்லை என எச்சரிக்கிறது. இதை அமல்படுத்துவதற்கு முதலில் அந்த annotation-களை `openapi.yaml`-இல் சேர்க்க வேண்டும்.
- `typecheck:noimplicit:core` (ஆலோசனை) — தடுக்கும் `check:type-coverage` ratchet பெரும்பாலும் இதை உள்ளடக்குகிறது. இதை ratchet ஆக மாற்றவும் அல்லது தேவையற்ற இரண்டாவது `tsc` pass-ஐ நீக்கவும்.
- `test:vitest:ui` (இப்போது **தடுக்கும் நிலையில்**) — ஏற்கெனவே இருந்த தோல்விகள் `vitest.config.ts`-இல் `// #8618` கண்காணிப்புக் குறிப்புகளுடன் வெளிப்படையாக விலக்கப்பட்டுள்ளன; புதிய தோல்விகள் பணியைத் தோல்வியடையச் செய்யும்.
- `check:secrets` (gitleaks, ஆவணப்படுத்தப்பட்ட 3 false-positive-களில் உறையவைக்கப்பட்ட தடுக்கும் ratchet) — 0-ஐ அடைய அந்த 3-ஐ allowlist செய்யவும் அல்லது ஆலோசனை நிலைக்குத் தாழ்த்தவும். GitHub-இன் சொந்த secret-scanning + `check:public-creds` உடன் ஒன்றிணைகிறது.
- `check:pr-evidence` (தடுக்கும் நிலையில், PR-body உரையை grep செய்கிறது) — அதிக false-positive அபாயம்; நீக்கப்பட்டால் Hard Rule #18 அமலாக்கம் பலவீனமடையும், எனவே இது உண்மையான கொள்கை முடிவாகும்.
- `semgrep` (தனித்தியங்கும் ஆலோசனை) — OWASP குடும்பங்களுக்கு CodeQL உடன் ஒன்றிணைகிறது; அதன் baseline-ஐ ஒரு ratchet உடன் இணைக்கவும் அல்லது நீக்கவும்.

---

## தொடர்புடைய ஆவணங்கள்

- மென்பொருள் விநியோகச் சங்கிலி (மூலம், SBOM, Trivy, Scorecard): [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — விசைத் தொகுப்புச் சமநிலைத் தடுப்பு

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`, பணி `i18n-ui-coverage`).
ஒவ்வொரு `src/i18n/messages/<locale>.json` கோப்பின் இலை விசைத் தொகுப்பையும் `en.json` உடன் ஒப்பிட்டு,
விசை எப்போது சேர்க்கப்பட்டது என்பதைப் பொருட்படுத்தாமல், ஏதேனும் இலை இல்லாவிட்டாலோ கூடுதலாக இருந்தாலோ
தோல்வியடைகிறது. `__MISSING__:` இடநிரப்பிகள் இருப்பதாகவே கணக்கிடப்படும் (அவற்றின் உள்ளடக்கம் விகிதத்
தடுப்பின் பொறுப்பு). இது வேறுபாடு-அடிப்படையிலான/சதவீத-அடிப்படையிலான மற்ற இரு தடுப்புகளின் முழுமையான
துணையாகும்: `check-ui-keys-coverage` ஒவ்வொரு மொழிக்கும் 80 % குறைந்தபட்சத்தை அமல்படுத்துகிறது
(~13,000 விசைகளில் 43 இல்லாவிட்டாலும் 99.7 % என்றே காட்டும்), மேலும் `check-new-key-coverage`
ஒரு PR, `en.json`-இல் சேர்க்கும் விசைகளை மட்டும் மதிப்பிடுகிறது. ஒரு மொழித் தொகுதி, அதன் கிளை
உருவாக்கப்படும் நாளின் `en.json`-இலிருந்து உருவாக்கப்பட்டு, அடிப்படை கிளை தொடர்ந்து விசைகளைச் சேர்த்துக்
கொண்டிருக்கும்போது பல நாட்களாக மொழிபெயர்க்கப்படுகிறது; தொகுதி PR தானாக எந்த விசையையும் சேர்ப்பதில்லை.
எனவே, தொகுதி 1 (#13044) ஒன்பது மொழிகளில் 43 விசைகள் குறைவாகவும், தொகுதி 2 (#13660) எட்டு மொழிகளில்
10 விசைகள் குறைவாகவும் இணைக்கப்பட்டபோது (2026-09-15), இணைத் தடுப்புகள் இரண்டும் எச்சரிக்கவில்லை.
சிவப்பு தோல்வியைச் சரிசெய்ய
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers` பயன்படுத்தவும்; `extra`
இலை என்பது மூலத்தில் அது நீக்கப்பட்டிருப்பதைக் குறிக்கும் — அந்த மொழியிலிருந்தும் அதை நீக்கவும்.
`--warn` தோல்வியடையச் செய்யாமல் அறிக்கையிடுகிறது. `--catalog=cli`, `bin/cli/locales` மீது அதே
ஒப்பீட்டை இயக்குகிறது (`npm run i18n:check-keys:cli`); இரண்டு படிகளும் `i18n-ui-coverage`
பணியில் உள்ளன.

#### `check-new-key-coverage` — புதிய விசைக்கான i18n தடுப்பு

`check-ui-value-drift`-இன் இணைத் தடுப்பு. மொழிபெயர்ப்புகள் புதுப்பிக்கப்படாமல் விடப்பட்ட நிலையில்,
ஆங்கில மதிப்பு **மீண்டும் எழுதப்பட்டதை** அது கண்டறியும்; சில மொழிகள் ஒருபோதும் பெறாத ஆங்கில விசை
**சேர்க்கப்பட்டதை** இது கண்டறியும்.

`check-ui-keys-coverage`-ஆல் இந்த வகையைக் கண்டறிய முடியாது: அது ஒவ்வொரு மொழிக்கும் ஒரு சதவீதக்
குறைந்தபட்சத்தை அமல்படுத்துகிறது; ~13,000 இலைகளில் பதினொன்று இல்லாவிட்டாலும் கவரேஜ் 99.9% ஆகவே
இருக்கும். மொழிவாரியான ஒரு சதவீதத்தால், "இந்த அம்சம் மொழிபெயர்க்கப்படாமல் வெளியிடப்பட்டது" என்பதை
வெளிப்படுத்த முடியாது — ஒரு புதிய மொழியில் முழு அம்சமே உரையின்றி சேர்க்கப்பட்டாலும் அந்த எண்
மாறாமலேயே இருக்கலாம்.

இது பதிவுசெய்யும் சம்பவம்: Orchestration Canvas-இன் Phase 3, அப்போது இருந்த 42 மொழிகள் முழுவதிலும்
அதன் பதினொரு விசைகளை மொழிபெயர்த்தது. சில மணிநேரங்களுக்குப் பிறகு, EU மொழித் தொகுதி (#13044)
களஞ்சியத்தை 51 மொழிகளுக்கு உயர்த்தியது; புதிதாக வந்த ஒன்பது மொழிகளும் (`el`, `et`, `ga`, `hr`,
`lt`, `lv`, `mt`, `sl`, `sr`) அவற்றைப் பெறவே இல்லை. இல்லாத விசைக்குப் பதிலாக
`deepMergeFallback` ஆங்கிலத்தைப் பயன்படுத்துவதால், தோல்வி நிலை வெற்று UI ஆக இல்லாமல்
மொழிபெயர்க்கப்படாத UI ஆக இருந்தது — அது உண்மையான பிரச்சினை, மேலும் வடிவமைப்பிலேயே
அமைதியாக இருந்தது.

அதன் இணைத் தடுப்பைப் போலவே இதுவும் **வேறுபாட்டை உணரக்கூடியது**; ஒன்றிணைப்பு அடிப்படையிலுள்ள
ஆங்கிலத்தையும் பணிக் கோப்பகத்தையும் ஒப்பிடுவதால், ஏற்கெனவே உள்ள இடைவெளிகள் உறையவைக்கப்படுகின்றன,
மேலும் தடுப்பை இயக்க எந்த இடம்பெயர்வும் தேவையில்லை. அவசர வழி:
`__MISSING__:<english>` என்பது இயக்கநேர நடத்தையைச் சரியாக வைத்துக்கொண்டே ஒரு மொழிபெயர்ப்பைத்
தள்ளிவைக்கிறது. `vi` இடநிரப்பிகளைத் தடைசெய்கிறது
(`tests/unit/i18n-vi-completeness.test.ts`), எனவே உண்மையான மொழிபெயர்ப்பு தேவைப்படுகிறது.

#### `check-vitest-exclusions` — ஒதுக்கிவைக்கப்பட்ட சோதனைத் தடுப்பு

`vitest.config.ts`-இன் `exclude` பட்டியலிலுள்ள ஒரு கோப்பு இயக்கப்படாத சோதனையாகும்; ஆனால்
கோப்பக மரத்தைப் பார்ப்பவர்களுக்கு அது கவரேஜ் இருப்பதுபோல் தோன்றும்.
`// #8618 — முன்பே இருந்த தோல்வி; சரிசெய்யப்பட்டதும் இந்த விலக்கை நீக்கவும்` என்ற குறிப்பின் பின்னால்
அறுபத்திரண்டு கோப்புகள் குவிந்தன. அது கண்காணித்த பட்டியல் 45 பதிவுகளிலிருந்து 62 ஆக வளர்ந்துகொண்டிருந்த
நிலையில், Issue #8618, 2026-08-11 அன்று மூடப்பட்டது; ஒவ்வொரு புதிய பதிவும் முடிக்கப்பட்ட சிக்கலைச்
சுட்டிக்காட்டும் குறிப்பை மரபாகப் பெற்றது. இறுதியாக அந்தப் பட்டியல் கோப்புவாரியாக அளவிடப்பட்டபோது
(#13204), **62 கோப்புகளில் 51, எந்த மூல மாற்றமும் இல்லாமல் தற்போதைய கோப்பக மரத்துக்கு எதிராகத்
தேர்ச்சி பெற்றன**.

உண்மையான கோப்பாகத் தீர்மானிக்கப்படும் ஒவ்வொரு விலக்கும் (a) ஒரு கண்காணிப்புச் சிக்கலைக் குறிப்பிடவும்,
(b) அதன் அளவிடப்பட்ட நிலையுடன் `config/quality/vitest-exclusions.json`-இல் இடம்பெறவும் இந்தத் தடுப்பு
கட்டாயப்படுத்துகிறது. இதனால், புதிய விலக்கைச் சேர்ப்பது 60 பதிவுகளைக் கொண்ட வரிசையில் இன்னொரு வரியாக
இல்லாமல், அதற்கென ஒதுக்கப்பட்ட கோப்பில் மதிப்பாய்வு செய்யக்கூடிய வேறுபாடாக அமைகிறது. இது விலக்கப்பட்ட
சோதனைகளைத் திட்டமிட்டே மீண்டும் இயக்குவதில்லை — அதற்கு ~10 நிமிடங்கள் செலவாகும், மேலும் அது ஒரு
காலமுறைப் பணிக்குச் சொந்தமானது; ஒவ்வொன்றும் கடைசியாக எப்போது அளவிடப்பட்டது என்பதைப் பட்டியல்
பதிவுசெய்கிறது.
