# Quality Gates Reference (नेपाली)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

यो दस्तावेज OmniRoute का सबै CI गुणस्तर गेटहरूको आधिकारिक सन्दर्भ हो।
यसले प्रत्येक गेट, त्यसले के प्रमाणीकरण गर्छ, त्यो कुन CI job मा चल्छ, त्यसले
ratchet baseline वा pass/fail नीति प्रयोग गर्छ कि गर्दैन, र त्यसले build रोक्छ वा केवल सल्लाहकारी हो भन्ने वर्णन गर्छ।

छोटो सारांश र allowlist नीतिका लागि `AGENTS.md` को "Quality Gates & Ratchets" खण्ड
हेर्नुहोस्। यही प्रणालीको महत्त्वपूर्ण मूल्याङ्कन, परिपक्वता वर्गीकरण, र उपकरण-निरपेक्ष
पुनरावृत्ति योजनाका लागि
[गुणस्तर गेट प्लेबुक](../ops/QUALITY_GATE_PLAYBOOK.md) हेर्नुहोस्।

---

## गेट सूची (~90 scripts)

Scripts `scripts/check/` (नीति गेटहरू) र `scripts/quality/` (ratchet engine) अन्तर्गत छन्।
CI को आधिकारिक स्रोत `.github/workflows/ci.yml` हो।

### Release PR द्रुत-पथ (`quality.yml`)

`.github/workflows/quality.yml` `release/**` लक्षित गर्ने PR हरूमा चल्छ। यसले path-filtered द्रुत गेटहरूका साथै code
परिवर्तनहरूका लागि एउटा सल्लाहकारी production-build सङ्केत प्रयोग गरेर contributor
branches लाई अघि बढाइराख्छ:

| Job                                              | दायरा                                                                                                                                                                                                                       | अवरोधक                                                                                      |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `Build (advisory)`                               | Non-draft code PR हरू र Mergify queue branches; Node 24, `npm-ci-retry`, `check:node-runtime`, `OMNIROUTE_USE_TURBOPACK=1` सहित `npm run build`; कुनै downstream quality job ले प्रयोग नगर्ने भएकाले artifact upload हुँदैन | **सल्लाहकारी** (`continue-on-error: true`; स्थिर release-PR runs को एक हप्तापछि हटाउनुहोस्) |
| `Docs Gates (fast-path)`                         | Docs/code PR हरू; API docs refs र docs-all                                                                                                                                                                                  | हो                                                                                          |
| `Fast Quality Gates`                             | Code PR हरू; static checks, typecheck, dashboard typecheck, प्रभावित unit tests                                                                                                                                             | हो                                                                                          |
| `Forgotten sibling tests`                        | Code PR हरू; परिवर्तन गरिएका modules बाट static consumers र सम्भावित sibling tests सम्म trace गरिन्छ; barrel र dynamic-import paths लाई सन्दर्भित allowlist exceptions सहित सल्लाहकारी diagnostics का रूपमा रिपोर्ट गरिन्छ  | **सल्लाहकारी**                                                                              |
| `Vitest (fast-path)`                             | Code PR हरू; द्रुत vitest suite                                                                                                                                                                                             | हो                                                                                          |
| `Unit Tests fast-path`                           | Code PR हरू; 4-shard unit suite                                                                                                                                                                                             | हो                                                                                          |
| `No new ESLint warnings`                         | Code PR हरू; suppressions-aware lint guard                                                                                                                                                                                  | आफ्नै origin का लागि हो, forks का लागि सल्लाहकारी                                           |
| `Merge integrity (changelog + generated skills)` | Non-draft PR हरू; changelog र generated skill sync                                                                                                                                                                          | आफ्नै origin का लागि हो, forks का लागि सल्लाहकारी                                           |

#### बिर्सिएका sibling tests को रिपोर्ट

`npm run check:forgotten-sibling-tests` ले test-impact map पछाडिको import resolver पुनः प्रयोग गर्छ।
प्रत्येक परिवर्तन गरिएको production module का लागि, सम्भावित
test pull-request diff मा नभएको अवस्थामा यसले निश्चित
`changed module/symbol -> static consumer -> candidate sibling test` chains रिपोर्ट गर्छ। Markdown सारांश र JSON नतिजा कुनै पनि blocking rollout अघि calibration गर्नका लागि
`forgotten-sibling-tests` workflow artifact का रूपमा राखिन्छन्।

Barrel re-exports र dynamic imports केवल resolution diagnostics हुन्; तिनले कहिल्यै
blocking finding सिर्जना गर्दैनन्। समीक्षा गरिएका exceptions
`config/quality/forgotten-sibling-allowlist.json` मा हुन्छन्। प्रत्येक entry ले consumer र candidate
test उल्लेख गर्नुपर्छ, निश्चित rationale दिनुपर्छ, र GitHub issue वा pull request मा link गर्नुपर्छ। त्रुटिपूर्ण entries
बन्द हुने गरी असफल हुन्छन्। Exceptions ले मेटाइएको candidate test वा `.skip`/`.todo` थप्ने diff लाई suppress गर्न सक्दैनन्;
assertion कमजोर बनाउने र अन्य masking को जिम्मेवारी स्वतन्त्र रूपमा blocking रहेको
`check:test-masking` gate सँग रहन्छ।

### Job: `lint`

`main` लक्षित गर्ने प्रत्येक PR मा चल्छ। असफल भएमा merge रोक्छ।

| स्क्रिप्ट (`npm run ...`)         | प्रमाणीकरण गर्छ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | अवरोधक                                      |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| `check:node-runtime`              | Node.js संस्करण समर्थित दायराभित्र छ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | हो                                          |
| `check:cycles`                    | चक्रीय आयातहरू — सबै `src/` + `open-sse/` मोड्युलहरू                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | हो                                          |
| `check:route-validation:t06`      | सबै रुटहरूमा Zod स्किमाहरू उपस्थित छन् (Tier 6 नीति)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | हो                                          |
| `check:any-budget:t11`            | `@ts-expect-error // any` को सङ्ख्याले बजेट नाघ्दैन (Tier 11 catraca)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | हो                                          |
| `check:provider-consistency`      | `providers.ts` मा भएका प्रत्येक provider को `providerRegistry.ts` मा मिल्दो प्रविष्टि छ (र यसको उल्टो पनि, allowlist भित्र)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | हो                                          |
| `check:model-lifecycle`           | हातैले कायम गरिएका तीनवटा routing table हरू checked-in lifecycle snapshot (#11503) सँग सुसंगत रहन्छन्: `FITNESS_TABLE` (`taskFitness.ts`) ले `REGISTRY` ले route गर्न सक्ने कुनै पनि retired id लाई score गर्दैन; प्रत्येक `BUILT_IN_ALIASES` target `REGISTRY` मा उपस्थित र retired-id snapshot मा अनुपस्थित हुन्छ; `REGISTRY` मा अझै रहेका प्रत्येक retired id लाई forward गरिएको वा `allowedRetiredInCatalog` मा सूचीबद्ध गरिएको हुन्छ; र कुनै पनि `DEFAULT_DEGRADATION_MAP` source वा target उक्त snapshot मा retired देखिँदैन। यसले कुनै model हाल live upstream बाट उपलब्ध गराइएको छ भन्ने प्रमाणित गर्दैन। Offline — `config/quality/model-lifecycle.json` सँग तुलना गर्छ, जसलाई `npm run quality:refresh-model-lifecycle` (network; CI मा जडान नगरिएको) प्रयोग गरेर हातैले refresh गरिन्छ। `allowedRetiredInCatalog` एउटा burn-down ratchet हो: tracking issue भएमा मात्र प्रविष्टि थप्नुहोस्। | हो                                          |
| `check:fetch-targets`             | client-side `src/` मा भएका प्रत्येक `fetch("/api/...")` वास्तविक `route.ts` मा resolve हुन्छन्                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | हो                                          |
| `check:deps`                      | repo का प्रत्येक `package.json` मा रहेका सबै `npm install` गर्न मिल्ने deps `dependency-allowlist.json` मा छन्; नयाँ unpinned वा slopsquatted package हरूलाई flag गरिन्छ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | हो                                          |
| `audit:deps`                      | `npm audit` (root + electron) — कुनै high/critical advisory छैनन् (osv `check:vuln-ratchet` सँग overlap हुन्छ; Rationalization Backlog हेर्नुहोस्)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | हो                                          |
| `check:lockfile`                  | `package-lock.json` को integrity — https registry, integrity hash हरू, कुनै host override छैन                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | हो                                          |
| `check:licenses`                  | उत्पादन निर्भरताहरूका लागि SPDX लाइसेन्स अनुमति-सूची                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | हो                                          |
| `check:tracked-artifacts`         | कुनै बिल्ड आर्टिफ्याक्ट / कमिट गरिएका `node_modules` सिमलिङ्कहरू छैनन् (husky pre-commit मा पनि चल्छ; pre-push जानाजानी हल्का राखिएको छ — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | हो                                          |
| `check:vitest-exclusions`         | प्रत्येक Vitest बहिष्करणले ट्र्याकिङ समस्या उल्लेख गर्छ र `config/quality/vitest-exclusions.json` मा देखा पर्छ (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | हो                                          |
| `check:file-size`                 | कुनै पनि स्रोत फाइलले प्रति-विस्तार सीमा नाघ्दैन (र्याचेट: `frozen` सूचीमा स्थिर गरिएका ठूला फाइलहरू)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | हो                                          |
| `check:error-helper`              | executors/handlers मा त्रुटि प्रतिक्रियाहरूले `buildErrorBody()` / `sanitizeErrorMessage()` प्रयोग गर्छन् (कडा नियम #12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | हो                                          |
| `check:migration-numbering`       | माइग्रेसन SQL फाइलहरू क्रमिक रूपमा नम्बर गरिएका छन्, कुनै खाली अन्तर वा दोहोरो नम्बर छैन                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | हो                                          |
| `check:public-creds`              | `publicCreds.ts` बाहिर कुनै पनि अक्षरशः OAuth `client_id`/`client_secret` वा Firebase Web कुञ्जीहरू छैनन् (कडा नियम #11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | हो                                          |
| `check:db-rules`                  | `src/lib/db/` मोड्युलहरू बाहिर कुनै पनि कच्चा SQL छैन; `localDb.ts` बाट कुनै पनि ब्यारेल-आयात छैन (कडा नियमहरू #2/#5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | हो                                          |
| `check:known-symbols`             | आफ्ना डिस्प्याच तालिकाहरूमा दर्ता गरिएका प्रदायक एक्जिक्युटरहरू, राउटिङ रणनीतिहरू र अनुवादकहरू डिस्कमा रहेका फाइलहरूसँग मेल खान्छन् — कुनै पनि अनाथ वा अघोषित प्रतीकहरू छैनन्                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | हो                                          |
| `check:route-guard-membership`    | चाइल्ड प्रोसेस सिर्जना गर्ने प्रत्येक रुटलाई `isLocalOnlyPath()` द्वारा वर्गीकृत गरिएको छ (कडा नियमहरू #15/#17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | हो                                          |
| `check:test-discovery`            | रिपोजिटरीमा रहेका प्रत्येक `*.test.ts` / `*.spec.ts` फाइल कम्तीमा एउटा परीक्षण रनरद्वारा सङ्कलित हुन्छन् (र्याचेट: `test-discovery-baseline.json` मा रहेको अनाथ सूची घट्न मात्र सक्छ)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | हो                                          |
| `check:agent-skills-sync`         | उत्पन्न गरिएका एजेन्ट-सीप आर्टिफ्याक्टहरू तिनको स्रोत क्याटलगसँग मेल खान्छन् (कुनै विचलन छैन)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `check:provider-asset-provenance` | प्रदायकका लोगोहरू/एसेटहरूमा अभिलेख गरिएको उद्गम प्रविष्टि हुन्छ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `lint:json`                       | JSON कन्फिग फाइलहरू पार्स हुन्छन् र रिपोजिटरीका lint नियमहरू पूरा गर्छन्                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `typecheck:core`                  | त्रुटिविनाको TypeScript कम्पाइलेसन (सल्लाहात्मक चेतावनीहरू मात्र)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | हो                                          |
| `typecheck:noimplicit:core`       | कडा `noImplicitAny` — भविष्यलक्षित; पहिलेबाट रहेका धेरै call site हरूमा अझै पनि annotation आवश्यक छन्                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | **सल्लाहात्मक** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | `src/app/(dashboard)/**` मा सीमित `tsc` (#7033) — `typecheck:core` को सावधानीपूर्वक चयन गरिएको 27-फाइल allowlist मा कुनै पनि dashboard TSX समावेश छैन, र `next build` ले पनि यसलाई कहिल्यै type-check गर्दैन (`next.config.mjs` ले `ignoreBuildErrors: true` सेट गर्छ), त्यसैले त्यहाँका orphaned-identifier regression हरू (#6625/#6909) CI मा देखिँदैनथे। स्थिर गरिएको प्रति-फाइल/प्रति-TS-code गणना baseline (`config/quality/dashboard-typecheck-baseline.json`, `check:known-symbols` कै जस्तो stale-enforcement ढाँचा) सँग diff गर्छ — baseline गरिएको गणनाभन्दा बढीका नयाँ त्रुटिहरूले मात्र gate असफल गराउँछन्; पहिलेबाट रहेको त्रुटि समाधान हुँदा `--update` प्रयोग गरेर ratchet घटाउनुहोस्।                                                                                                                                                                                                  | हो                                          |

### Job: `quality-gate`

`test-coverage` पछि चल्छ। असफल भएमा merge रोक्छ।

| Script                       | प्रमाणीकरण गर्छ                                                                                                                                                                 | अवरोधकारी                   |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| `quality:collect`            | `quality-metrics.json` उत्सर्जन गर्छ (ESLint चेतावनी गणना, merge गरिएको shard report बाट coverage)                                                                              | हो (ratchet भन्दा upstream) |
| `quality:ratchet`            | `quality-baseline.json` मा रहेको प्रत्येक metric regression भएको छैन (ESLint चेतावनीहरू ≤ baseline; coverage ≥ baseline)                                                        | हो                          |
| `check:duplication`          | Code duplication (jscpd@4) ले `quality-baseline.json` मा रहेको baseline नाघ्दैन                                                                                                 | हो                          |
| `check:complexity`           | फाइल-स्तरीय cyclomatic complexity ले सीमा नाघ्दैन (मूल ESLint `complexity` + `max-lines-per-function`)                                                                          | हो                          |
| `check:cognitive-complexity` | Cognitive complexity ratchet (`eslint-plugin-sonarjs`) — छुट्टै ESLint pass; CI ले दुवैलाई एउटै `check:complexity-ratchets` चरणका रूपमा merge गरेर चलाउँछ                       | हो                          |
| `check:dead-code`            | प्रयोग नभएका export / फाइलहरूको ratchet baseline को तुलनामा regression हुँदैन                                                                                                   | हो                          |
| `check:compression-budget`   | Compression benchmark budget — प्रति-engine token-savings floor हरू regression हुनु हुँदैन                                                                                      | हो                          |
| `check:type-coverage`        | Percent-typed ratchet (`type-coverage`) regression हुँदैन; यसले धेरै हदसम्म `typecheck:noimplicit:core` लाई समेट्छ                                                              | हो                          |
| `check:codeql-ratchet`       | खुला CodeQL alert को गणना regression हुँदैन (`gh api` मार्फत पढ्छ; token नभएमा सहज रूपमा skip गर्छ) — refresh cadence र manual trigger का लागि तलको "CodeQL ratchet" हेर्नुहोस् | हो                          |

### Job: `quality-extended`

सम्पूर्ण job सल्लाहात्मक छ (`continue-on-error: true`)। npm-आधारित ratchet हरू वास्तवमै चल्छन्;
बाह्य scanner हरू `gh release download` मार्फत स्थापना हुन्छन् र binary अझै अनुपस्थित हुँदा
आफैं skip हुन्छन् (exit 0)।

| Script                   | प्रमाणीकरण                                                                                                                                                                                          | अवरोधक          |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `check:circular-deps`    | कुनै circular dependency छैन (dpdm)                                                                                                                                                                 | **सल्लाहात्मक** |
| `check:bundle-size`      | Bundle को आकारले अधिकतम सीमा नाघ्दैन                                                                                                                                                                | **सल्लाहात्मक** |
| `check:secrets`          | Secret scanning (gitleaks) — binary अनुपस्थित भए skip हुन्छ                                                                                                                                         | **सल्लाहात्मक** |
| `check:vuln-ratchet`     | Dependency vulnerability हरू (osv-scanner) पछि हट्दैनन् — binary अनुपस्थित भए skip हुन्छ                                                                                                            | **सल्लाहात्मक** |
| `check:workflows`        | Workflow lint (actionlint + zizmor) — binary हरू अनुपस्थित भए skip हुन्छ                                                                                                                            | **सल्लाहात्मक** |
| `check:openapi-breaking` | आधार branch को तुलनामा सार्वजनिक API contract (`openapi.yaml`) मा breaking change हरू (oasdiff) — `openapiBreaking=N` उत्सर्जन गर्छ; oasdiff अनुपस्थित भए वा आधार spec समाधान गर्न नसकिए skip हुन्छ | **सल्लाहात्मक** |

### Job: `docs-sync-strict`

`main` मा आउने प्रत्येक PR मा चल्छ। असफल भए merge हुनबाट रोक्छ।

| Script                         | प्रमाणीकरण                                                                                                                                              | अवरोधक                       |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `check:docs-all`               | तलका 6 sub-gate क्रमिक रूपमा चलाउने meta-gate                                                                                                           | हो                           |
| ↳ `check:docs-sync`            | CHANGELOG / OpenAPI / llm.txt को version एकरूपता                                                                                                        | हो                           |
| ↳ `check:docs-counts`          | गद्यमा भएका सङ्ख्याहरू (provider सङ्ख्या, migration सङ्ख्या, आदि) वास्तविक सङ्ख्याहरूको ratchet window भित्र छन्                                        | हो                           |
| ↳ `check:env-doc-sync`         | `.env.example` मा भएको प्रत्येक env var docs table मा दस्तावेजीकृत छ, र त्यसको विपरीत पनि                                                               | हो                           |
| ↳ `check:deprecated-versions`  | docs मा deprecated version string हरू छैनन्                                                                                                             | हो                           |
| ↳ `check:doc-links`            | docs भित्रका आन्तरिक markdown link हरू वास्तविक file मा resolve हुन्छन् (`[text]`/`(path)` ढाँचा)                                                       | हो                           |
| ↳ `check:fabricated-docs`      | docs मा उल्लेख गरिएका route, env var, CLI command, hook name र file path हरू codebase मा अवस्थित छन्। `--strict` मार्फत hard gate; flag बिना soft-fail। | हो (CI मा `--strict` मार्फत) |
| `check:cli-i18n`               | CLI command string हरू सबै i18n locale file मा उपस्थित छन्                                                                                              | हो                           |
| `check:openapi-coverage`       | OpenAPI spec ले कम्तीमा वास्तविक route हरूको ratchet गरिएको न्यूनतम सीमा समेट्छ                                                                         | हो                           |
| `check:openapi-security-tiers` | `openapi.yaml` का security tier annotation हरू `routeGuard.ts` classification सँग एकरूप छन्                                                             | **सल्लाहात्मक**              |
| `check:openapi-routes`         | `openapi.yaml` को प्रत्येक path वास्तविक `route.ts` मा resolve हुन्छ (भ्रम-निरोधी)                                                                      | हो                           |
| `check:docs-symbols`           | `docs/**/*.md` मा भएका प्रत्येक `/api/...` reference वास्तविक `route.ts` मा resolve हुन्छन् (भ्रम-निरोधी)                                               | हो                           |
| `i18n translation drift`       | i18n locale file हरूमा अनुवाद नभएका key हरू — चेतावनी मात्र                                                                                             | **सल्लाहात्मक**              |

### Job: `i18n-ui-coverage`

| स्क्रिप्ट                         | प्रमाणीकरण                                                                                                                                                                              | अवरोधक          |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `check-ui-keys-coverage` (इनलाइन) | UI i18n कुञ्जी कभरेज ≥ 65% छ                                                                                                                                                            | हो              |
| `check-ui-value-drift` (इनलाइन)   | पुनर्लेखन गरिएको अङ्ग्रेजी **मान** ले कुनै पुरानो अनुवाद बाँकी छोड्दैन                                                                                                                  | हो              |
| `check-new-key-coverage` (इनलाइन) | एउटा **नयाँ** अङ्ग्रेजी कुञ्जी प्रत्येक लोकेलमा पुग्छ                                                                                                                                   | हो              |
| `check-translation-ratio`         | प्रत्येक लोकेलको वास्तविक-अनुवाद अनुपात (अनुमति सूचीबाहिरका अङ्ग्रेजीसँग-समान / प्लेसहोल्डर / छुटेका लीफहरू) `config/quality/i18n-translation-baseline.json` + छुटभन्दा बढी हुनु हुँदैन | **सल्लाहात्मक** |

`fetch-depth: 0` आवश्यक हुन्छ — मान-ड्रिफ्ट गेटले मर्ज बेससँग `en.json` को diff गर्छ।

#### `check-ui-value-drift` — पुरानो-अनुवाद गेट

अन्य गेटहरूले संरचनात्मक रूपमा देख्न नसक्ने एउटा i18n रिग्रेसन यसले समात्छ: कुनै अङ्ग्रेजी मान
पुनर्लेखन गरिन्छ र _अघिल्लो_ अङ्ग्रेजीबाट व्युत्पन्न अनुवादहरू त्यहीँ बाँकी रहन्छन्, जसका कारण
गैर-अङ्ग्रेजी प्रयोगकर्ताहरूले आत्मविश्वासपूर्ण शैलीमा लेखिएको, तर अहिले गलत भइसकेको प्रतिलिपि पढिरहन्छन्।

यो वास्तविक रूपमा रिलिज भएको थियो। Antigravity लगइन सहायक थपिँदा (#5203)
`oauthModal.googleOAuthWarning` पुनर्लेखन गरिएको थियो; **43 मध्ये 39 लोकेलमा** अपरेटरहरूलाई "पूरै
URL प्रतिलिपि गरेर तल टाँस्नुहोस्" भन्ने पाठ कायमै थियो — उक्त प्रदायकका लागि पूरा हुनै नसक्ने प्रवाह। यो
#8463 सम्म पत्ता लागेन, किनभने:

- `sync-ui-keys` ले **अनुपस्थित** कुञ्जीहरू मात्र ब्याकफिल गर्छ, **पुराना** कुञ्जीहरू कहिल्यै गर्दैन;
- `check-ui-keys-coverage` ले कुञ्जीको _उपस्थिति_ गणना गर्छ, त्यसैले पुरानो अनुवाद पनि कभर भएको मानिन्छ;
- `check-translation-drift` ले `docs/i18n/<locale>/**.md` कागजात मिररहरू ट्र्याक गर्छ —
  यसले `src/i18n/messages/*.json` कहिल्यै पढ्दैन। 2026-09 को पुनः-सिङ्कदेखि job `docs-sync-strict` मा अवरोधक:
  मूल कागजात सम्पादन गर्नुहोस् → `npm run i18n:run -- --files=<doc>` (खण्ड-स्तरीय, सस्तो)।

**Diff-सचेत, बेसलाइनमा आधारित होइन।** यसले मर्ज बेसको `en.json` लाई कार्यरत ट्रीसँग तुलना गर्छ;
अङ्ग्रेजी मान परिवर्तन भएको प्रत्येक कुञ्जीका लागि, अपरिवर्तित अनुवाद अझै राख्ने कुनै पनि लोकेल पुरानो मानिन्छ।
यसले जानाजानी **पहिलेदेखिको ऋण स्थिर राख्छ** — लामो समयदेखि रहेको अनुवाद कुन पुरानो अङ्ग्रेजीबाट आएको हो
भन्ने कुरा diff ले देखाउन सक्दैन, त्यसैले गेटले हालको परिवर्तनले छोएका कुराहरू मात्र जाँच्छ। यसको विकल्प
(प्रति-कुञ्जी ह्यास बेसलाइन) का लागि करिब 600 KB को उत्पन्न फाइल चाहिन्थ्यो, जुन सबैभन्दा ठूलो विद्यमान
बेसलाइनभन्दा 3× ठूलो हुन्छ र प्रत्येक i18n PR मा परिवर्तन भइरहन्छ।

यसलाई सन्तुष्ट पार्ने दुई तरिका छन्:

1. प्रभावित अनुवादहरू अद्यावधिक गर्नुहोस्, वा
2. तिनलाई `__MISSING__:<new english>` मा सेट गर्नुहोस् — त्यसपछि रनटाइमले सच्याइएको अङ्ग्रेजी उपलब्ध गराउँछ
   (`src/i18n/request.ts::deepMergeFallback`, #7258) र कुञ्जी अनुवादका लागि पङ्क्तिबद्ध हुन्छ।

यदि स्ट्रिङको **अर्थ** परिवर्तन भएको हो भने, **कुञ्जीको नाम परिवर्तन गर्नुलाई** प्राथमिकता दिनुहोस्: नयाँ कुञ्जीले
पुरानो अनुवाद उत्तराधिकारमा लिन सक्दैन। #8463 ले यही ढाँचा प्रयोग गरेको थियो।

```bash
npm run i18n:check-value-drift          # कडा (CI ले चलाउने)
npm run i18n:check-value-drift:warn     # प्रतिवेदन मात्र
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

बेस क्याटलग पढ्न नसकिँदा (बेस ref नभएको shallow
clone) `SKIP reason=base-unresolved` सहित 0 मा निस्कन्छ, जसले `check-openapi-breaking` को व्यवहार प्रतिबिम्बित गर्छ।

### Job: `i18n`

पूर्ण i18n प्रमाणीकरण म्याट्रिक्स (प्रत्येक लोकेलका लागि एउटा job)। सम्पूर्ण job सल्लाहात्मक हो।

| स्क्रिप्ट                       | प्रमाणीकरण                      | अवरोधक                                                      |
| ------------------------------- | ------------------------------- | ----------------------------------------------------------- |
| `validate_translation.py quick` | प्रत्येक लोकेलको अनुवाद पूर्णता | **सल्लाहात्मक** (सम्पूर्ण job मा `continue-on-error: true`) |

### Job: `pr-test-policy`

pull request हरूमा मात्र चल्छ।

| स्क्रिप्ट              | प्रमाणीकरण                                                                                                                                                  | अवरोधक |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| `check:pr-test-policy` | `src/`, `open-sse/`, `electron/`, वा `bin/` मा उत्पादन कोड परिवर्तन गर्ने PR हरूले परीक्षण समावेश वा अद्यावधिक गर्नुपर्छ (कडा नियम #8)                      | हो     |
| `check:test-masking`   | परिवर्तन गरिएका परीक्षण फाइलहरूले कुल assert सङ्ख्या घटाउँदैनन् वा `assert.ok(true)` जस्ता tautology थप्दैनन्                                               | हो     |
| `check:pr-evidence`    | PR को मुख्य भागले परिवर्तनका लागि परीक्षण/VPS प्रमाण उल्लेख गर्छ (PR को गद्यमा grep गरेर कडा नियम #18 लाई यान्त्रिकीकरण गर्छ — कमजोर छ, Backlog हेर्नुहोस्) | हो     |

### Job: `test-vitest`

`build` पछि चल्छ। असफल भएमा मर्ज अवरुद्ध गर्छ।

| सुइट             | प्रमाणीकरण गर्ने कुरा                                | अवरोधक                                                                                                                  |
| ---------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `test:vitest`    | MCP सर्भर (110 उपकरण), autoCombo, क्यास — vitest रनर | हो                                                                                                                      |
| `test:vitest:ui` | UI कम्पोनेन्ट परीक्षणहरू — vitest रनर                | **अवरोधक** — पहिलेका विफलताहरूलाई `vitest.config.ts` मा स्पष्ट रूपमा बहिष्कृत गरिएको छ; नयाँ विफलताले कार्य असफल बनाउँछ |

### रात्रिकालीन कार्यप्रवाहहरू (तालिकाबद्ध, परामर्शात्मक)

यी cron तालिकाअनुसार (र `workflow_dispatch` मार्फत) चल्छन्, PR हरूमा कहिल्यै चल्दैनन्। सबै परामर्शात्मक हुन्।

| कार्यप्रवाह            | प्रमाणीकरण गर्ने कुरा                                                                                                                                                           | अवरोधक           |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| `nightly-property`     | अनियमित seed + उच्च run count सहितका fast-check property परीक्षणहरू                                                                                                             | **परामर्शात्मक** |
| `nightly-resilience`   | heap-growth gate, chaos fault-injection, k6 load/soak                                                                                                                           | **परामर्शात्मक** |
| `nightly-llm-security` | promptfoo injection guard (block mode) + garak probes (प्रदायकको secret बिना छोडिन्छ)                                                                                           | **परामर्शात्मक** |
| `nightly-schemathesis` | `docs/openapi.yaml` प्रयोग गरी सक्रिय OmniRoute विरुद्ध OpenAPI contract fuzzing (schemathesis) — स्पेसिफिकेसन उल्लङ्घनहरू / ह्यान्डल नगरिएका 500 त्रुटिहरू देखाउँछ (चरण 8 B.4) | **परामर्शात्मक** |
| `nightly-mutation`     | द्रुत unit lane माथिको Stryker mutation-testing score — बाँचेका mutants ले कमजोर asserts देखाउँछन्                                                                              | **परामर्शात्मक** |
| `nightly-compat`       | समर्थित `engines.node` दायराहरूभरि Node engine compatibility matrix                                                                                                             | **परामर्शात्मक** |

---

## गति चरण (2026-08-30 → v4.0 LTS): प्रत्येक आधाररेखा 20% ले खुकुलो पारियो

स्वामित्व निर्णय (2026-08-30): v4.0 मोड्युलराइजेसनसम्म, प्राविधिक ऋणको सीमा कायम राख्नुभन्दा
रिलिजको गति बढी महत्त्वपूर्ण हुन्छ। प्रत्येक **सङ्ख्यात्मक** र्याचेट आधाररेखालाई एउटै
लेखापरीक्षणयोग्य प्रक्रियामा 20% ले खुकुलो पारियो, र चरणलाई `config/quality/quality-baseline.json` मा घोषणा गरिएको छ:

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| के परिवर्तन भयो                                                                                                                                                                                    | कहाँ                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `metrics.*.value` — कम हुनु राम्रो हुने गणना ×1.2, बढी हुनु राम्रो हुने प्रतिशत ÷1.2 (कभरेजको न्यूनतम सीमा 60 कायम, `eslintErrors` 0 मै, `eslintWarnings` 0 → स्थिर गरिएको suppression गणनाको 20%) | `quality-baseline.json` (`_relax_velocity_2026_08_30` टिप्पणीले प्रत्येक अघिल्लो → पछिल्लो मान सूचीबद्ध गर्छ) |
| `count` ×1.2 / `percentage` ×1.2                                                                                                                                                                   | `complexity-baseline.json`, `duplication-baseline.json`                                                       |
| `cap`, `testCap`, प्रत्येक `frozen[*]` / `testFrozen[*]` लाइन सीमा ×1.2                                                                                                                            | `file-size-baseline.json`                                                                                     |
| प्रति-फाइल / प्रति-TS-code गणना ×1.2                                                                                                                                                               | `api-typecheck-baseline.json`, `dashboard-typecheck-baseline.json`, `open-sse-typecheck-baseline.json`        |
| `THRESHOLD` 36 → 30                                                                                                                                                                                | `scripts/check/check-openapi-coverage.mjs`                                                                    |
| `_policy.requireTighten === false` हुँदा `--require-tighten` सल्लाहकारी बन्छ                                                                                                                       | `scripts/quality/check-quality-ratchet.mjs`                                                                   |
| रात्रिकालीन `bank-ratchet-shrinks` रोकिन्छ (यसले मापन गरिएको कमी सञ्चित गरेर अतिरिक्त सीमा हटाउने थियो)                                                                                            | `.github/workflows/nightly-release-green.yml`                                                                 |

अनुमति सूचीहरू (`eslint-suppressions.json`, `test-masking-allowlist.json`, `test-discovery-baseline.json`,
…) **बजेट होइनन्** र तिनलाई परिवर्तन गरिएको छैन। पास/फेल नीति गेटहरू (गोप्य जानकारी, SQL नियमहरू,
कागजात/env सम्झौता, i18n समानता, एकाइ परीक्षणहरू) अपरिवर्तित छन् — रातो परीक्षण अझै पनि रातो परीक्षण नै हो।

**उपकरणहरू**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — एकपटक मात्र गरिने
  खुकुलोपना (`scripts/quality/relax-baselines.mjs`); उही टिप्पणीसँग दोस्रोपटक चल्न अस्वीकार गर्छ।
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  CI ले गरेकै तरिकाले प्रत्येक सङ्ख्यात्मक गेट मापन गर्छ र प्रति गेट बाँकी अतिरिक्त सीमा देखाउँछ
  (`scripts/quality/baseline-headroom.mjs`)। रात्रिकालीन `baseline-headroom` कार्यले तालिका
  सक्रिय मुद्दा **📈 आधाररेखाको अतिरिक्त सीमा (गति चरण)** मा पोस्ट गर्छ र कुनै गेट आफ्नो अधिकतम सीमाको 10% भित्र भए वा
  पहिल्यै त्यो सीमा नाघिसकेको भए `headroom-alert` लेबल थप्छ। त्यो मुद्दा प्रारम्भिक चेतावनी हो:
  केही दिनमै भरिने बजेटको अर्थ खुकुलोपना पूरै टोलीले नभई केही PR हरूले उपयोग गरिरहेका छन् —
  समस्या भएको गेटका `_rebaseline_*` टिप्पणीहरू हेर्नुहोस्।

**नयाँ-कोड मोड (कोड लेख्दै सफा राख्ने) — 2026-08-30 देखि, PR द्रुत-मार्गमा मात्र**

`pull_request` घटनाहरूमा `quality.yml` ले `check:file-size`,
`check:complexity-ratchets` र `check:dead-code` लाई `--base-ref <PR base SHA>` पठाउँछ। त्यो मोडमा गेटले HEAD लाई
merge-base सँग **PR ले छोएका फाइलहरूमा मात्र सीमित गरेर** तुलना गर्छ (`scripts/check/newCodeMode.mjs`:
merge-base लाई अस्थायी `git worktree` मा तयार गरिन्छ, ESLint/knip त्यहाँ र HEAD मा चलाइन्छ, अनि
प्रति-फाइल गणनाहरूको भिन्नता निकालिन्छ):

- **अवरोधक** — PR ले परिवर्तन गरेका फाइलहरूमा cyclomatic/cognitive उल्लङ्घन वा dead exports थप्यो
  (लगमा `complexityNewCode=`, `cognitiveComplexityNewCode=`, `deadExportsNewCode=`);
- **सल्लाहकारी** — स्थिर गरिएको आधाररेखासँग विश्वव्यापी कुलको तुलना। विरासतमा आएको विचलनले निर्दोष
  PR लाई कहिल्यै रातो बनाउँदैन; रिलिज मिलानका क्रममा विचलन पुनः स्थिर गरिन्छ र headroom कार्यले त्यसको निगरानी गर्छ।

`workflow_dispatch` रनहरू, release-green स्वीप र रात्रिकालीन headroom कार्यसँग PR आधार हुँदैन
र तिनले निरपेक्ष (विश्वव्यापी) तुलना कायम राख्छन्। कभरेज, duplication र type-coverage हालका लागि
विश्वव्यापी नै रहन्छन् (तिनका उपकरणहरूले सस्तो रूपमा प्रति-फाइल भिन्नता निकाल्दैनन्) — उही व्यवहारका लागि सम्भावित उम्मेदवारहरू।

**v4.0 मा चरण बन्द गर्ने (LTS = पहिलेभन्दा कडा, "सामान्य अवस्थामा फिर्ता" होइन)**

1. शुद्ध `release/v4.0.0` टिपमा: अभिलेखका लागि `npm run quality:headroom --json`, त्यसपछि
   `npm run quality:ratchet -- --update`, `check:file-size --update`,
   `check:complexity-ratchets --update`, `check:dead-code --update`, प्रत्येक typecheck गेटको
   `--update` — हरेक baseline मापन गरिएको मानमा झर्छ।
2. `quality-baseline.json` बाट `_policy` मेटाउनुहोस् (`--require-tighten` र रात्रिकालीन
   banking लाई पुनः सक्रिय गर्छ), `check-openapi-coverage.mjs` मा `THRESHOLD = 36` (वा बढी) पुनर्स्थापना गर्नुहोस्।
3. modularization प्रभावकारी भएका ठाउँमा मापन गरिएको मानभन्दा अझ कडा बनाउनुहोस्: file-size `cap` लाई पुनः 1000
   (वा 800), coverage floors +5, modularized packages का लागि dead exports 0।

## र्याचेट आधाररेखा (`quality-baseline.json`)

र्याचेट इन्जिन (`scripts/quality/check-quality-ratchet.mjs`) ले `quality-baseline.json`
पढ्छ र त्यसलाई भर्खरै सङ्कलन गरिएको `quality-metrics.json` सँग तुलना गर्छ। आफ्नो इप्सिलनभन्दा
बढी पछाडि गएको कुनै पनि मेट्रिकले बिल्ड असफल गराउँछ।

हाल ट्र्याक गरिएका मेट्रिकहरू:

| मेट्रिक               | दिशा   | अर्थ                                  |
| --------------------- | ------ | ------------------------------------- |
| `eslintWarnings`      | `down` | ESLint चेतावनीको सङ्ख्या बढ्नु हुँदैन |
| `coverage.statements` | `up`   | स्टेटमेन्ट कभरेज घट्नु हुँदैन         |
| `coverage.lines`      | `up`   | लाइन कभरेज घट्नु हुँदैन               |
| `coverage.functions`  | `up`   | फङ्सन कभरेज घट्नु हुँदैन              |
| `coverage.branches`   | `up`   | ब्रान्च कभरेज घट्नु हुँदैन            |

वास्तविक सुधारपछि आधाररेखा अद्यावधिक गर्न:

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

`--update` फ्ल्यागले हाल मापन गरिएका मानहरू `quality-baseline.json` मा लेख्छ।
मेट्रिक सुधार गर्ने परिवर्तनसँगै यो फाइल कमिट गर्नुहोस्। मेट्रिक सुधार गर्ने तर
आधाररेखा अद्यावधिक नगर्ने PR लाई `--require-tighten` ले समात्नेछ (चरण 6A.5,
कार्यान्वयन हुन बाँकी)।

### CodeQL र्याचेट: रिफ्रेस आवृत्ति र म्यानुअल ट्रिगर

`check:codeql-ratchet` ले **तालिकाअनुसार रिफ्रेस हुने रिपोको अवस्था पढ्छ — प्रत्येक PR मा होइन।**
`gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup` ले
`state: configured`, `schedule: weekly` रिपोर्ट गर्छ: यो GitHub को default-setup स्क्यान हो,
प्रत्येक push को विश्लेषण होइन। परिणामस्वरूप: अलर्टहरू समाधान गर्ने PR मर्ज भएपछि, र्याचेटले
अर्को निर्धारित स्क्यान नचल्दासम्म पुरानै, बढी सङ्ख्या पढिरहन्छ — त्यसैले स्क्यान अद्यावधिक
नहुञ्जेल समाधान गर्ने PR कै पछिल्ला PR हरूसहित प्रत्येक खुला PR मा यसले रिग्रेसन रिपोर्ट गर्छ।

**म्यानुअल रिफ्रेस**: `gh workflow run codeql.yml --ref release/vX.Y.Z` ले विश्लेषण पुनः चलाउँछ
र केही मिनेटभित्र अलर्टहरू पुनः प्रकाशित गर्छ। पहिले `.github/workflows/codeql.yml`
पढ्नुहोस् — यसको हेडरले यो `workflow_dispatch`-मात्र हुनुको कारण **GitHub को "default setup"
सँग द्वन्द्व हुनु** हो भनेर व्याख्या गर्छ (`CodeQL analyses from advanced configurations cannot be
processed when the default setup is enabled`)। `push`/`pull_request`/
`schedule` ट्रिगरहरू पुनर्स्थापना गर्न पहिले **मालिकको कार्य** आवश्यक हुन्छ: Settings → Code security →
CodeQL: Default → Advanced। त्यो स्विच नगरी `schedule:` ट्रिगर नथप्नुहोस् — त्यसले
असफल रनहरू मात्र उत्पादन गर्नेछ।

**सङ्ख्या घटेपछि आधाररेखा कस्नुहोस्** — `node scripts/check/check-codeql-ratchet.mjs
--update` ले नयाँ मापन गरिएको सङ्ख्या `quality-baseline.json` →
`metrics.codeqlAlerts.value` मा लेख्छ, जसले गर्दा र्याचेटले पुरानो अधिकतम सीमासम्मको रिग्रेसनलाई
चुपचाप अनुमति दिँदैन। कार्य गरिएको उदाहरण (2026-09-02/03): PR #12502 ले 7 वटा वास्तविक अलर्ट
समाधान गर्यो (मापन गरिएका खुला अलर्ट 13 → 6); PR #12530 ले त्यससँग मिलाउन स्थिर आधाररेखा 11 → 6
मा कस्यो; त्यसपछि बाँकी 6 वटालाई प्रत्येक अलर्टको औचित्यसहित खारेज गरेर खुला अलर्टको सङ्ख्या 0
मा झारियो।

**खारेजी अपरेटरको निर्णय हो (कडा नियम #14)** — खारेजी टिप्पणीमा प्राविधिक औचित्य अभिलेख नगरी
CodeQL अलर्ट कहिल्यै खारेज नगर्नुहोस्: upstream-protocol आवश्यकताका लागि `won't fix`,
परीक्षण फिक्स्चरका लागि `used in tests`, र CodeQL ले देख्न नसक्ने sanitizer का लागि
`false positive` (नजिर: `docs/security/ERROR_SANITIZATION.md`)।

---

## परीक्षण पुनःप्रयास नीति (WS5.4, v3.8.49)

पुनःप्रयास प्रत्येक रनरका लागि छुट्टाछुट्टै हुन्छ, कहिल्यै पनि विश्वव्यापी रूपमा लागू हुँदैन — सबैमा लागू हुने पुनःप्रयासले वास्तविक रिग्रेसनहरूलाई
अदृश्य फ्लेकहरूमा बदल्छ:

| रनर              | नीति                                                                                                                                | किन                                                                                                                                  |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Playwright (e2e) | CI मा मात्र `retries: 1`, साथै `trace: on-first-retry`                                                                              | ब्राउजर/नेटवर्कको समय निर्धारण वास्तवमै अनिश्चित हुन्छ; ट्रेससहितको एउटा पुनःप्रयासले फ्लेकलाई निदान गर्न सकिने आर्टिफ्याक्टमा बदल्छ |
| Vitest           | विश्वव्यापी पुनःप्रयास हुँदैन। फ्लेकी प्रमाणित परीक्षणले स्पष्ट प्रतिपरीक्षण पुनःप्रयास पाउँछ (diff मा देखिने, PR मा समीक्षा गरिने) | क्वारेन्टिन सूचीलाई repo मै राख्छ, कहिल्यै अपारदर्शी बनाउँदैन                                                                        |
| node:test (unit) | कहिल्यै पुनःप्रयास हुँदैन                                                                                                           | फ्लेकी युनिट परीक्षण भनेको परीक्षणमै भएको बग हो — त्यसलाई सुधार्नुहोस्, फेरि चलाएर भाग्य नजाँच्नुहोस्                                |

फ्लेक टेलिमेट्री उपलब्ध भएपछि लक्षित SLO हरू (WS5.2/5.3): प्रत्येक परीक्षणमा <1% फ्लेक दर
("अहिले नै सुधार्नुहोस्" सीमा), प्रत्येक पाइपलाइनमा ≥95% उत्तीर्ण दर। उद्योगका सन्दर्भ मानहरू —
हाम्रै मापनहरूअनुसार पुनःक्यालिब्रेट गर्नुहोस्।

## रिलिज-स्तरीय र्याचेट ड्रिफ्ट (WS5.5, v3.8.49)

जब कुनै र्याचेट (फाइल आकार, जटिलता, eslint चेतावनीहरू) शुद्ध रिलिज
टिपमा रिग्रेस हुन्छ — अर्थात्, मर्जहरूको संयोजनले त्यसलाई रिग्रेस गराएको हो र कुनै एकल PR ले आफ्नै
ब्रान्चमा उक्त रिग्रेसन पुनरुत्पादन गर्दैन — तब सुधारको जिम्मेवारी **रिलिज क्याप्टेनको हुन्छ, एकपटक,
रिलिज ब्रान्चमा**: एक्स्ट्र्याक्सन/रिफ्याक्टरलाई प्राथमिकता दिनुहोस्; दस्तावेजीकृत
औचित्य प्रविष्टिसहित मात्र पुनःबेसलाइन गर्नुहोस्। संयोजन ड्रिफ्टलाई योगदानकर्ताको PR माथि कहिल्यै नथोपर्नुहोस्, र प्रत्येक
PR का लागि पुनःबेसलाइन कहिल्यै नगर्नुहोस् (त्यसले वास्तविक रिग्रेसनहरू लुकाउँछ)। पहिले छुट्याएर पहिचान गर्नुहोस्: तपाईंको PR ले यो निम्त्याएको हो भनी मान्नुअघि
प्रोब worktree मा शुद्ध टिपविरुद्ध असफलता पुनरुत्पादन गर्नुहोस्।

## र्याचेटका कमीहरू सञ्चित गर्ने — घट्दो दिशा (#8584)

र्याचेट आधा मात्र स्वचालित छ, र त्यो गलत आधा हो। क्याप **बढाउनु** भनेको
दस सेकेन्ड लाग्ने म्यानुअल JSON सम्पादन हो र असफल PR लाई अवरोधमुक्त गर्ने सबैभन्दा छिटो तरिका हो।
क्याप **घटाउन** कसैले `--update` चलाएर नतिजा commit गर्नुपर्छ — र
`bank-ratchet-shrinks` job उपलब्ध नहुँदासम्म कुनै workflow ले यसलाई चलाउँदैनथ्यो। मापन गरिएको परिणाम
(2026-07-25): 18 वटा frozen फाइलहरू पहिले नै 800-लाइनको नयाँ-फाइल क्यापमा वा त्यसभन्दा तल थिए, सबैभन्दा खराब
132× मा (`src/shared/validation/schemas.ts`, 19 लाइनले 2,523 को क्याप बोकेको); जटिलता
सीमा ~37 वटा पुनःबेसलाइन नोटहरूमा `1794 → 2169` पुग्यो, जसमा ठ्याक्कै एकपटक मात्र
कमी (−1) भयो; र "अर्को चक्रमा `--update` मार्फत कस्नुहोस्" 31 पटक लेखियो तर
एकपटक मात्र पालना गरियो। जुन कोडका कारण क्याप तय भएको थियो, त्यो कोडभन्दा लामो समयसम्म क्याप कायम रहँदा सम्पन्न गरिएको हरेक
विघटन चुपचाप उक्त फाइल अर्को पटक सम्पादन गर्ने व्यक्तिका लागि वृद्धि अनुमतिमा बदलिन्छ।

`nightly-release-green.yml` → job **`bank-ratchet-shrinks`** ले त्यो चक्र पूरा गर्छ:

|               |                                                                                                            |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| चल्छ          | `schedule` (दिनमा 3×) + `workflow_dispatch` — जानाजानी `push` मा **होइन**                                  |
| मापन गर्छ     | उच्चतम `release/vX.Y.Z`, `release-green` कै जस्तो रिजोल्युसन + इन्जेक्सन गार्ड                             |
| लेख्छ         | `check:file-size --update` र `check:complexity-ratchets --update` (दुवै संरचनागत रूपमा घटाउन मात्र मिल्ने) |
| प्रमाणित गर्छ | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                                   |
| पठाउँछ        | रिलिज ब्रान्चविरुद्ध सधैँ अद्यावधिक रहने एउटा PR — बलपूर्वक अद्यावधिक गरिने, कहिल्यै स्प्याम नगरिने        |

सञ्चय प्रत्येक push मा नगरी ब्याचमा गरिन्छ, किनकि यसमा विलम्बसम्बन्धी कुनै आवश्यकता हुँदैन (8h भित्र
सञ्चित गरिएको कमी पर्याप्त हुन्छ), तर प्रत्येक merge मा चलाउँदा merge अभियानका क्रममा PR ब्रान्च बारम्बार
पुनर्निर्माण हुन्थ्यो र हरेक पटक पूर्ण ESLint वाकको लागत लाग्थ्यो। पहिचान भने
push (`release-green`) मै रहन्छ; सञ्चय मात्र ब्याचमा गरिन्छ।

### सुरक्षा प्रमाणक

job ले मानवीय हस्तक्षेपबिना baselines मा लेख्छ, त्यसैले `verify-ratchet-bank.mjs` ले
त्यसलाई स्वीकार्य बनाउँछ। यसले `--update` पछिको tree लाई `HEAD` सँग diff गर्छ र हरेक परिवर्तन निम्नमध्ये एउटा नभएसम्म
**कुनै commit बन्नुअघि नै job रोक्छ** — र कुनै PR खोल्दैन:

- `frozen` / `testFrozen` को सङ्ख्यात्मक प्रविष्टि **घटाइएको** वा **हटाइएको**
- `complexity-baseline.json` → `count` **घटाइएको**
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` **घटाइएको**

अरू कुनै पनि परिवर्तन असफल हुन्छ: सङ्ख्या बढाउने, प्रविष्टि थप्ने, `cap`/`testCap` परिवर्तन गर्ने, वा
`_rebaseline_*` नोट मेटाउने/पुनर्लेखन गर्ने (ती नोटहरू प्रत्येक
सीमा किन अस्तित्वमा छ भन्ने अडिट ट्रेल हुन् र फाइल प्रविष्टिहरू रहेकै `frozen` object भित्र भण्डारण गरिएका हुन्छन्)।
क्याप बढाउन सक्ने bot विद्यमान अवस्थाभन्दा निश्चित रूपमा झन् खराब हुन्थ्यो। रिग्रेसन
गार्ड: `tests/unit/verify-ratchet-bank.test.ts`।

job ले `release/*` मा कहिल्यै push गर्दैन — कुनै मानवले PR merge गर्छ, त्यसैले गलत मापन
समीक्षा नभई समावेश हुन सक्दैन।

## अनुमति-सूची नीति

पहिल्यैदेखि रहेका उल्लङ्घनहरूका कारण असफल हुन नसक्ने प्रत्येक गेटले स्थिर अनुमति-सूची प्रयोग गर्छ
(जस्तै, `KNOWN_STALE_DOC_REFS`, `KNOWN_MISSING`, `KNOWN_RAW_SQL`)। नीति यस्तो छ:

**मूल कारण समाधान गर्नुहोस्; उल्लङ्घन पहिल्यैदेखि रहेको र सोही PR मा समाधान गर्न
नसकिने अवस्थामा मात्र अनुमति-सूची प्रयोग गर्नुहोस्।**

अनुमति-सूचीमा प्रविष्टि थप्दा:

1. औचित्यसहितको टिप्पणी समावेश गर्नुहोस्।
2. ट्र्याकिङ इस्यु उल्लेख गर्नुहोस् (जस्तै, `// #3498 — चरण 2 को सुविधा, अझै कार्यान्वयन गरिएको छैन`)।
3. उल्लङ्घन समाधान गर्ने सोही PR मा प्रविष्टि हटाउनुहोस् — अब सक्रिय उल्लङ्घनलाई
   दबाउन नसक्ने पुरानो प्रविष्टि आफैंमा एउटा त्रुटि हो (कार्यान्वयन भएपछि 6A.3 पुरानो-प्रवर्तनले
   अनाथ अनुमति-सूची प्रविष्टिका कारण गेट असफल गराउनेछ)।

परीक्षणहरू छिटो पास गराउन अनुमति-सूचीमा प्रविष्टिहरू **नथप्नुहोस्**। बढ्दो
अनुमति-सूची भएको हरियो गेटले गुणस्तरको झूटो अनुभूति दिन्छ।

### तपाईंको PR मा गेट असफल हुँदा

1. **गेटको आउटपुट ध्यानपूर्वक पढ्नुहोस्** — कुन फाइल वा प्रतीकले नियम उल्लङ्घन गर्यो भन्ने कुरा यसले ठ्याक्कै बताउँछ।
2. **उल्लङ्घन समाधान गर्नुहोस्** — अधिकांश गेटहरू निर्धार्य फाइलसिस्टम जाँच हुन्, जुन कोड सही हुनेबित्तिकै पास हुन्छन्।
3. **उल्लङ्घन पहिल्यैदेखि रहेको भए** (अर्थात्, तपाईंले त्यसलाई ल्याउनुभएको होइन तर अब गेटले
   त्यसलाई समेट्छ): औचित्य टिप्पणी र ट्र्याकिङ इस्युसहित अनुमति-सूचीमा प्रविष्टि थप्नुहोस्।
4. **गेट र्याचेट भए** (कभरेज, ESLint चेतावनीहरू, दोहोरोपन, जटिलता):
   तपाईंको परिवर्तनले मेट्रिक बिगारेको छ। अन्तर्निहित समस्या समाधान गर्नुहोस्, वा (विरलै) परिवर्तन
   जानाजानी गरिएको र मेट्रिकको गिरावट स्वीकार्य भए `npm run quality:ratchet -- --update`
   चलाउनुहोस् — तर PR विवरणमा त्यसको कारण अभिलेख गर्नुहोस्।
5. **परामर्शात्मक गेटहरू** (`continue-on-error: true`) जानकारीमूलक हुन् — तिनले
   मर्ज रोक्दैनन् तर CI सारांशमा देखिन्छन्। तैपनि तिनलाई समाधान गर्नुहोस्।

---

## नयाँ गेट थप्ने

1. `scripts/check/check-<name>.mjs` (वा `.ts`) सिर्जना गर्नुहोस्। नीति गेटहरू 0/1 निकास गर्छन्।
   र्याचेट-शैलीका गेटहरूले `collect-metrics.mjs` मार्फत `quality-metrics.json` मा मेट्रिक उत्सर्जन गर्छन्।
2. `package.json` मा `"check:<name>": "node scripts/check/check-<name>.mjs"` थप्नुहोस्।
3. यसलाई `.github/workflows/ci.yml` मा उपयुक्त जबअन्तर्गत जडान गर्नुहोस्
   (नीति → `lint` वा `docs-sync-strict`; र्याचेट → `quality-gate`)।
4. यसमा अनुमति-सूची छ भने, पुराना प्रविष्टिहरू स्वतः पत्ता लगाउन
   `scripts/check/lib/allowlist.mjs` बाट `reportStaleEntries()` लागू गर्नुहोस्।
5. गेटको पहिचान तर्क समेट्ने परीक्षण `tests/unit/build/` मा लेख्नुहोस्।
6. यो कागजात अद्यावधिक गर्नुहोस् (सान्दर्भिक जब तालिकामा एउटा पङ्क्ति थप्नुहोस्)।

---

## एजेन्ट टुलिङ: LSP-in-the-loop (ऐच्छिक)

CI गेटहरूभन्दा बाहिर, OmniRoute ले **ऐच्छिक** `agent-lsp` स्काफोल्ड
(परियोजना-स्तरीय `.mcp.json`, Fase 7 Task 15) उपलब्ध गराउँछ। कोडिङ एजेन्टहरूलाई TypeScript भाषा सर्भर उपलब्ध गराउन `.mcp.json`
सिर्जना गर्नुहोस्, ताकि तिनले कोड लेख्नुभन्दा **पहिले** प्रतीकहरू /
डायग्नोस्टिक्स समाधान गरून् — यो `typecheck:core` को compile-before-claim सहायक हो,
जसले "आविष्कार गरिएका प्रतीक" त्रुटिहरूलाई स्रोतमै घटाउँछ। यसलाई जानाजानी
स्वतः लोड गरिँदैन (तपाईंले MCP↔LSP ब्रिज छान्नुहुन्छ र प्रमाणीकरण गर्नुहुन्छ); बिग्रिएको प्रविष्टिले
जडान त्रुटि मात्र लग गर्छ र सेसनहरूलाई कहिल्यै बिगार्दैन।

---

## युक्तिसंगतीकरण ब्याकलग (ROI समीक्षा — चरण 9 लहर 3)

यो सूचीलाई 2026-06-17 मा `ci.yml` सँग मिलान गरिएको थियो (अघिल्लो संस्करणमा
`audit:deps`, `check:tracked-artifacts`, `check:lockfile`, `check:licenses`,
`check:dead-code`, `check:cognitive-complexity`, `check:type-coverage`,
`check:codeql-ratchet`, `check:pr-evidence` छुटेका थिए)। मिलान गरिएको सेटको ROI समीक्षाले
निम्न युक्तिसंगतीकरणका उम्मेदवारहरू पहिचान गर्यो। **मर्जहरू यान्त्रिक CI
परिवर्तनहरू हुन्; फ्लिप/हटाउने निर्णयहरू अपरेटरका लागि आरक्षित नीतिगत निर्णय हुन्।** तलका कुनै पनि कुरा
अहिलेसम्म लागू गरिएको छैन।

**माथि कागजातबद्ध नगरिएका थप विषयहरू** (परामर्शात्मक, न्यून सङ्केत): `docs-lint` job
(markdownlint + Vale, सम्पूर्ण job मा `continue-on-error`) र छुट्टाछुट्टै scanner workflow हरू
`semgrep.yml` / `codeql.yml` / `scorecard.yml`। `semgrepFindings: 0`
`quality-baseline.json` मा छ तर `ci.yml` मा अवरोधकारी ratchet सँग जोडिएको छैन — यो metric
हाल अनाथ छ।

### मर्ज / डिडुप्लिकेसन (यान्त्रिक, कम जोखिम)

प्रत्येक उम्मेदवारलाई 2026-06-17 को प्रत्यक्ष gate अवस्थाविरुद्ध मान्य गरिएको थियो (विश्वास गर तर प्रमाणीकरण पनि गर);
धेरै "स्पष्ट" मर्जहरूले वास्तवमा प्राविधिक ऋण लुकाएका रहेछन् र ती **सिधै प्रतिस्थापन गर्न मिल्ने** छैनन्।

- **`check:docs-sync` दुई पटक चल्छ** — `lint` job मा छुट्टै र फेरि `check:docs-all` (`docs-sync-strict`) भित्र तथा husky pre-commit hook मा। ✅ **सम्पन्न** — छुट्टै `lint` invocation हटाइयो।
- **CVE scanning** — ❌ **सिधै मर्ज गर्न मिल्दैन।** `audit:deps` कुनै पनि उच्च/गम्भीर CVE मा कडाइका साथ विफल हुन्छ; `check:vuln-ratchet` (osv) baseline को तुलनामा _प्रतिगमन_ हुँदा मात्र विफल हुन्छ (हाल 1 MODERATE)। अर्थगत व्यवहार फरक छन् — `audit:deps` हटाउँदा निरपेक्ष उच्च/गम्भीर gate हराउँछ। दुवै राख्नुहोस्।
- **Cycle detection** — ❌ **सिधै मर्ज गर्न मिल्दैन।** `check:circular-deps` (dpdm) ले **91 cycles** रिपोर्ट गर्छ (त्यसैले यो परामर्शात्मक छ); पहिले तिनलाई समाधान नगरी यसलाई अवरोधकारी बनाउन सकिँदैन, र यसको दायरा हरियो, चयनित `check:cycles` भन्दा फराकिलो छ। `check:cycles` लाई अवरोधकारी नै राख्नुहोस्; 91 वटा dpdm cycle समाधान गर्नु यसको आफ्नै backlog हो।
- **Complexity** — ✅ **सम्पन्न** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`): एउटा ESLint walk, ruleId अनुसार गणना गरिएकाले cyclomatic+max-lines र cognitive baseline हरू स्वतन्त्र रहन्छन्; स्थानीय `--update` का लागि छुट्टाछुट्टै `check:complexity` / `check:cognitive-complexity` कायम छन्।
- **`/api` anti-hallucination** — ✅ **सम्पन्न** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`): `src/app/api` को एउटै FS inventory, openapi-routes + docs-symbols ले अझै स्वतन्त्र रूपमा रिपोर्ट गर्छन्; स्थानीय run का लागि छुट्टाछुट्टै जाँचहरू कायम छन्।
- **`check:node-runtime` 11 वटा job मा चल्छ** — ⚠️ **न्यून ROI।** प्रत्येक छुट्टै runner हो र जाँच <1s लाग्छ; सस्तो per-job guard गुमाउने तुलनामा कुल बचत ~10s मात्र हुन्छ। परिवर्तनको झन्झट लायक छैन।
- **CI lint मा `typecheck:noimplicit:core`** — ✅ **lint job बाट हटाइयो** (परामर्शात्मक `continue-on-error` थियो); अवरोधकारी type surface `typecheck:core` + `check:type-coverage` हो। स्थानीय script कायम राखियो।

### फ्लिप / निर्णय (अपरेटर नीति)

- `check:openapi-security-tiers` (परामर्शात्मक) — ❌ **सफा रूपमा फ्लिप गर्न मिल्दैन।** यो 0 सहित बाहिरिन्छ तर `LOCAL_ONLY_API_PREFIXES` अन्तर्गतका धेरै `traffic-inspector` route मा `x-loopback-only: true` annotation नभएको चेतावनी दिन्छ। यसलाई लागू गर्न पहिले `openapi.yaml` मा ती annotation थप्नुपर्छ।
- `typecheck:noimplicit:core` (परामर्शात्मक) — अवरोधकारी `check:type-coverage` ratchet ले यसलाई धेरै हदसम्म समेट्छ। यसलाई ratchet मा फ्लिप गर्नुहोस् वा दोहोरिएको दोस्रो `tsc` pass हटाउनुहोस्।
- `test:vitest:ui` (अहिले **अवरोधकारी**) — पहिलेबाट रहेका विफलताहरू `vitest.config.ts` मा `// #8618` tracking comment सहित स्पष्ट रूपमा बहिष्कृत गरिएका छन्; नयाँ विफलताले job विफल बनाउँछ।
- `check:secrets` (gitleaks, कागजातबद्ध 3 वटा false-positive मा स्थिर गरिएको अवरोधकारी ratchet) — 0 मा पुग्न ती 3 वटालाई allowlist गर्नुहोस्, वा परामर्शात्मकमा घटाउनुहोस्। यो GitHub को native secret-scanning + `check:public-creds` सँग दोहोरिन्छ।
- `check:pr-evidence` (अवरोधकारी, PR-body को गद्यमा grep गर्छ) — false-positive को उच्च जोखिम; हटाउँदा कडा नियम #18 को कार्यान्वयन कमजोर हुन्छ, त्यसैले यो वास्तविक नीतिगत निर्णय हो।
- `semgrep` (परामर्शात्मक standalone) — OWASP family हरूका लागि CodeQL सँग दोहोरिन्छ; यसको baseline लाई ratchet सँग जोड्नुहोस् वा हटाउनुहोस्।

---

## सम्बन्धित दस्तावेजीकरण

- आपूर्ति शृङ्खला (उत्पत्ति, SBOM, Trivy, Scorecard): [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — कुञ्जी-समुच्चय समानता गेट

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`, job `i18n-ui-coverage`)।
प्रत्येक `src/i18n/messages/<locale>.json` को अन्तिम तहको कुञ्जी-समुच्चयलाई `en.json` सँग तुलना गर्छ र
कुञ्जी कहिले थपिएको भए पनि कुनै अन्तिम तहको कुञ्जी अनुपस्थित वा अतिरिक्त भए असफल हुन्छ। `__MISSING__:`
प्लेसहोल्डरहरूलाई उपस्थित मानिन्छ (तिनको सामग्री अनुपात गेटको विषय हो)। यो दुईवटा
diff-आधारित/प्रतिशत गेटको पूर्ण पूरक हो: `check-ui-keys-coverage` ले प्रत्येक locale का लागि 80 % को न्यूनतम सीमा
लागू गर्छ (करिब 13,000 मध्ये 43 वटा कुञ्जी अनुपस्थित हुँदा पनि 99.7 % नै देखिन्छ) र `check-new-key-coverage` ले
PR ले `en.json` मा थपेका कुञ्जीहरूलाई मात्र जाँच्छ। कुनै locale ब्याचको branch बनाइएको दिनको `en.json` बाट
ब्याच सिर्जना गरिन्छ र आधारमा कुञ्जीहरू थपिँदै गर्दा पनि धेरै दिनसम्म अनुवाद गरिन्छ; ब्याच PR आफैँले कुनै
कुञ्जी थप्दैन, त्यसैले ब्याच 1 (#13044) नौवटा locale मा 43 कुञ्जी कम र ब्याच 2 (#13660) आठवटा locale मा
10 कुञ्जी कम भएर समावेश हुँदा पनि दुवै सहोदर गेट मौन रहे (2026-09-15)। रातो स्थिति सच्याउन
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers` प्रयोग गर्नुहोस्; `extra` अन्तिम तहको कुञ्जीको
अर्थ स्रोतबाट त्यो हटाइएको हो — locale बाट पनि हटाउनुहोस्। `--warn` ले असफल नगराई प्रतिवेदन दिन्छ।
`--catalog=cli` ले `bin/cli/locales` मा उही तुलना चलाउँछ (`npm run i18n:check-keys:cli`);
दुवै चरण job `i18n-ui-coverage` मा छन्।

#### `check-new-key-coverage` — नयाँ-कुञ्जी i18n गेट

`check-ui-value-drift` को सहोदर। त्यसले अनुवादहरू अद्यावधिक नगरी छोडिएको अवस्थामा **पुनर्लेखन गरिएको**
अङ्ग्रेजी मान पत्ता लगाउँछ; यसले केही locale ले कहिल्यै नपाएको **थपिएको** अङ्ग्रेजी कुञ्जी पत्ता लगाउँछ।

`check-ui-keys-coverage` ले यस वर्गलाई देख्न सक्दैन: यसले प्रत्येक locale का लागि प्रतिशतको न्यूनतम सीमा लागू गर्छ, र
करिब 13,000 अन्तिम तहका कुञ्जीमध्ये एघारवटा अनुपस्थित हुँदा पनि coverage 99.9% रहन्छ। प्रत्येक भाषाको प्रतिशतले
"यो सुविधा अनुवाद नगरी जारी गरियो" भन्ने कुरा व्यक्त गर्न सक्दैन — पूरै सुविधा कुनै पाठविनै नयाँ locale मा समावेश हुन
सक्छ र सङ्ख्यामा कहिल्यै परिवर्तन आउँदैन।

यसले समेटेको घटना: Orchestration Canvas को Phase 3 ले त्यस बेला अस्तित्वमा रहेका 42 वटा locale मा आफ्ना एघारवटा
कुञ्जी अनुवाद गरेको थियो। केही घण्टापछि EU-भाषा ब्याच (#13044) ले repo लाई 51 वटा locale मा पुर्यायो, र नौवटा
नयाँ locale (`el`, `et`, `ga`, `hr`, `lt`, `lv`, `mt`, `sl`, `sr`) ले ती कुञ्जीहरू कहिल्यै पाएनन्।
`deepMergeFallback` ले अनुपस्थित कुञ्जीको सट्टा अङ्ग्रेजी राख्छ, त्यसैले असफलताको स्वरूप खाली UI नभई
अनुवाद नगरिएको UI थियो — वास्तविक, र बनोटकै कारण मौन।

यसको सहोदरजस्तै यो पनि **diff-aware** छ, जसले merge base मा रहेको अङ्ग्रेजीलाई working tree सँग तुलना गर्छ,
त्यसैले पहिल्यै रहेका रिक्तताहरू यथावत् रहन्छन् र गेट सक्रिय गर्न कुनै migration आवश्यक परेन। वैकल्पिक उपाय:
`__MISSING__:<english>` ले runtime लाई सही राख्दै अनुवाद स्थगित गर्छ। `vi` ले
प्लेसहोल्डरहरू निषेध गर्छ (`tests/unit/i18n-vi-completeness.test.ts`) र वास्तविक अनुवाद आवश्यक हुन्छ।

#### `check-vitest-exclusions` — स्थगित-परीक्षण गेट

`vitest.config.ts` को `exclude` सूचीमा भएको फाइल नचल्ने परीक्षण हो, र tree पढ्ने व्यक्तिलाई त्यो coverage जस्तो
देखिन्छ। बासट्ठीवटा फाइलहरू
`// #8618 — pre-existing failure; remove this exclusion when fixed` टिप्पणीपछाडि जम्मा भए। Issue #8618
2026-08-11 मा बन्द गरिएको थियो, जबकि त्यसले ट्र्याक गर्ने सूची 45 प्रविष्टिबाट बढेर 62 पुग्यो, र प्रत्येक नयाँ
प्रविष्टिले बन्द भइसकेको issue तर्फ सङ्केत गर्ने टिप्पणी अपनायो। अन्ततः सूचीलाई फाइलअनुसार मापन गर्दा (#13204),
**62 मध्ये 51 वटा कुनै स्रोत परिवर्तनविनै हालको tree विरुद्ध सफल भए**।

वास्तविक फाइलमा resolve हुने प्रत्येक exclusion ले (a) ट्र्याकिङ issue उल्लेख गर्न र (b) आफ्नो मापन गरिएको स्थितिसहित
`config/quality/vitest-exclusions.json` मा देखा पर्न गेटले आवश्यक ठान्छ, ताकि एउटा थप्दा 60-प्रविष्टिको array मा
अर्को एउटा लाइन थपिनुको सट्टा समर्पित फाइलमा समीक्षा गर्न मिल्ने diff बनोस्। यसले जानाजानी exclude गरिएका
परीक्षणहरू पुनः चलाउँदैन — त्यसमा करिब 10 मिनेट लाग्छ र त्यो आवधिक job अन्तर्गत पर्छ; प्रत्येकलाई अन्तिम पटक
कहिले मापन गरिएको थियो भन्ने कुरा inventory ले अभिलेख गर्छ।
