# Quality Gates Reference (မြန်မာ)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

ဤစာတမ်းသည် OmniRoute ရှိ CI အရည်အသွေးဂိတ်အားလုံးအတွက် အတည်ပြုကိုးကားရမည့် မူရင်းရင်းမြစ်ဖြစ်သည်။
၎င်းတွင် ဂိတ်တစ်ခုချင်းစီ၊ စစ်ဆေးအတည်ပြုသည့်အရာ၊ လုပ်ဆောင်သည့် CI job၊
ratchet baseline သို့မဟုတ် pass/fail policy ကို အသုံးပြုခြင်းရှိမရှိနှင့် build ကို ပိတ်ဆို့ခြင်းရှိမရှိ သို့မဟုတ် အကြံပြုချက်အဖြစ်သာ ရှိမရှိတို့ကို ဖော်ပြထားသည်။

အကျဉ်းချုပ်နှင့် allowlist policy အတွက် `AGENTS.md` ရှိ "Quality Gates & Ratchets" အပိုင်းကို
ကြည့်ပါ။ တူညီသည့်စနစ်၏ အရေးပါသော အကဲဖြတ်ချက်၊ ရင့်ကျက်မှုအဆင့်သတ်မှတ်ချက်နှင့် tool တစ်ခုတည်းအပေါ် မမှီခိုသည့်
ပြန်လည်အကောင်အထည်ဖော်ရေးအစီအစဉ်အတွက်
[Quality Gate Playbook](../ops/QUALITY_GATE_PLAYBOOK.md) ကို ကြည့်ပါ။

---

## ဂိတ်စာရင်း (~90 scripts)

Script များသည် `scripts/check/` (policy gates) နှင့် `scripts/quality/` (ratchet engine) အောက်တွင် ရှိသည်။
CI အတွက် အတည်ပြုကိုးကားရမည့် မူရင်းရင်းမြစ်မှာ `.github/workflows/ci.yml` ဖြစ်သည်။

### Release PR အမြန်လမ်းကြောင်း (`quality.yml`)

`.github/workflows/quality.yml` သည် `release/**` ကို ပစ်မှတ်ထားသည့် PR များတွင် လုပ်ဆောင်သည်။ ၎င်းသည် contributor
branch များ ဆက်လက်ရွေ့လျားနိုင်စေရန် path-filtered fast gate များနှင့်အတူ code
ပြောင်းလဲမှုများအတွက် အကြံပြုချက်အဖြစ်သာ အသုံးပြုသည့် production-build signal တစ်ခုကို ထည့်သွင်းထားသည်-

| Job                                              | နယ်ပယ်                                                                                                                                                                                                                                                           | ပိတ်ဆို့မှု                                                                                                            |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `Build (advisory)`                               | Draft မဟုတ်သော code PR များနှင့် Mergify queue branch များ၊ Node 24၊ `npm-ci-retry`၊ `check:node-runtime`၊ `OMNIROUTE_USE_TURBOPACK=1` ဖြင့် `npm run build`၊ ၎င်းကို အသုံးပြုသည့် downstream quality job မရှိသောကြောင့် artifact upload မလုပ်ပါ                 | **အကြံပြုချက်သာ** (`continue-on-error: true`; release-PR run များ တည်ငြိမ်စွာ လုပ်ဆောင်ပြီး တစ်ပတ်အကြာတွင် ဖယ်ရှားရန်) |
| `Docs Gates (fast-path)`                         | Docs/code PR များ၊ API docs ref များနှင့် docs-all                                                                                                                                                                                                               | ဟုတ်သည်                                                                                                                |
| `Fast Quality Gates`                             | Code PR များ၊ static check များ၊ typecheck၊ dashboard typecheck၊ သက်ရောက်မှုရှိသည့် unit test များ                                                                                                                                                               | ဟုတ်သည်                                                                                                                |
| `Forgotten sibling tests`                        | Code PR များ၊ ပြောင်းလဲထားသည့် module များမှ static consumer များနှင့် ဖြစ်နိုင်ခြေရှိသော sibling test များအထိ ခြေရာခံခြင်း၊ barrel နှင့် dynamic-import path များကို ကိုးကားထားသည့် allowlist ခြွင်းချက်များနှင့်အတူ အကြံပြု diagnostic များအဖြစ် အစီရင်ခံခြင်း | **အကြံပြုချက်သာ**                                                                                                      |
| `Vitest (fast-path)`                             | Code PR များ၊ မြန်ဆန်သော vitest suite                                                                                                                                                                                                                            | ဟုတ်သည်                                                                                                                |
| `Unit Tests fast-path`                           | Code PR များ၊ shard 4 ခုပါ unit suite                                                                                                                                                                                                                            | ဟုတ်သည်                                                                                                                |
| `No new ESLint warnings`                         | Code PR များ၊ suppression ကို ထည့်သွင်းစဉ်းစားသည့် lint guard                                                                                                                                                                                                    | ကိုယ်ပိုင်မူရင်းအတွက် ဟုတ်သည်၊ fork များအတွက် အကြံပြုချက်သာ                                                            |
| `Merge integrity (changelog + generated skills)` | Draft မဟုတ်သော PR များ၊ changelog နှင့် ထုတ်လုပ်ထားသည့် skill sync                                                                                                                                                                                               | ကိုယ်ပိုင်မူရင်းအတွက် ဟုတ်သည်၊ fork များအတွက် အကြံပြုချက်သာ                                                            |

#### မေ့လျော့နေသော sibling test အစီရင်ခံစာ

`npm run check:forgotten-sibling-tests` သည် test-impact map နောက်ကွယ်ရှိ import resolver ကို ပြန်လည်အသုံးပြုသည်။
ပြောင်းလဲထားသည့် production module တစ်ခုချင်းစီအတွက် ဖြစ်နိုင်ခြေရှိသော
test သည် pull-request diff တွင် မပါရှိသည့်အခါ သတ်မှတ်ထားသည့်အစဉ်အတိုင်း
`changed module/symbol -> static consumer -> candidate sibling test` chain များကို အစီရင်ခံသည်။ Markdown summary နှင့် JSON result ကို
ပိတ်ဆို့မှု စတင်အသုံးမပြုမီ ချိန်ညှိနိုင်ရန် `forgotten-sibling-tests` workflow artifact အဖြစ် ထိန်းသိမ်းထားသည်။

Barrel re-export များနှင့် dynamic import များသည် resolution diagnostic များသာ ဖြစ်ပြီး
ပိတ်ဆို့သည့် finding ကို မည်သည့်အခါမျှ မဖန်တီးပါ။ ပြန်လည်သုံးသပ်အတည်ပြုထားသည့် ခြွင်းချက်များကို
`config/quality/forgotten-sibling-allowlist.json` တွင် ထားရှိသည်။ Entry တစ်ခုချင်းစီတွင် consumer နှင့် ဖြစ်နိုင်ခြေရှိသော
test ကို အမည်တပ်ရမည်၊ တိကျသော အကြောင်းပြချက်ပေးရမည်၊ ထို့ပြင် GitHub issue သို့မဟုတ် pull request တစ်ခုကို link ချိတ်ရမည်။ ပုံစံမမှန်သည့် entry များသည်
ပိတ်ထားသည့်အခြေအနေဖြင့် မအောင်မြင်စေသည်။ ခြွင်းချက်များသည် ဖျက်ထားသည့် ဖြစ်နိုင်ခြေရှိသော test သို့မဟုတ် `.skip`/`.todo` ကို ထည့်သွင်းသည့် diff ကို ဖိနှိပ်၍ မရပါ။
Assertion အားလျော့စေခြင်းနှင့် အခြား masking များကို သီးခြားပိတ်ဆို့ထားသည့်
`check:test-masking` gate က ဆက်လက်တာဝန်ယူသည်။

### Job: `lint`

`main` သို့ ပို့သော PR တိုင်းတွင် လုပ်ဆောင်သည်။ မအောင်မြင်ပါက merge ကို ပိတ်ဆို့သည်။

| Script (`npm run ...`)            | စစ်ဆေးအတည်ပြုသည့်အရာ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | ပိတ်ဆို့မှုရှိ/မရှိ                           |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `check:node-runtime`              | Node.js ဗားရှင်းသည် ပံ့ပိုးထားသော အပိုင်းအခြားအတွင်း ရှိသည်                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | ရှိသည်                                        |
| `check:cycles`                    | Circular imports — `src/` + `open-sse/` module အားလုံး                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | ရှိသည်                                        |
| `check:route-validation:t06`      | route အားလုံးတွင် Zod schema များ ရှိသည် (Tier 6 မူဝါဒ)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | ရှိသည်                                        |
| `check:any-budget:t11`            | `@ts-expect-error // any` အရေအတွက်သည် သတ်မှတ်ထားသော budget ထက် မကျော်လွန်ပါ (Tier 11 catraca)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | ရှိသည်                                        |
| `check:provider-consistency`      | `providers.ts` ရှိ provider တိုင်းတွင် `providerRegistry.ts` ထဲ၌ ကိုက်ညီသော entry တစ်ခုရှိသည် (ထို့အတူ allowlist အတွင်း၌ အပြန်အလှန်လည်း ကိုက်ညီသည်)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | ဟုတ်သည်                                       |
| `check:model-lifecycle`           | ကိုယ်တိုင်ထိန်းသိမ်းထားသော routing table သုံးခုသည် repository တွင် ထည့်သွင်းထားသော lifecycle snapshot (#11503) နှင့် တစ်သမတ်တည်းရှိနေသည်- `FITNESS_TABLE` (`taskFitness.ts`) သည် `REGISTRY` က route လုပ်နိုင်သော ရပ်ဆိုင်းပြီး id တစ်ခုကိုမျှ score မပေးပါ၊ `BUILT_IN_ALIASES` target တိုင်းသည် `REGISTRY` ထဲတွင်ရှိပြီး ရပ်ဆိုင်းထားသော id snapshot ထဲတွင် မရှိပါ၊ `REGISTRY` ထဲတွင် ဆက်လက်ရှိနေသေးသော ရပ်ဆိုင်းပြီး id တိုင်းကို forward လုပ်ထားသည် သို့မဟုတ် `allowedRetiredInCatalog` ထဲတွင် စာရင်းသွင်းထားသည်၊ ထို့ပြင် `DEFAULT_DEGRADATION_MAP` ၏ source သို့မဟုတ် target တစ်ခုမျှ အဆိုပါ snapshot ထဲတွင် ရပ်ဆိုင်းထားခြင်းမရှိပါ။ ဤအချက်က model တစ်ခုကို လက်ရှိအသုံးပြုနေသော upstream မှ အမှန်တကယ် ဝန်ဆောင်မှုပေးနေကြောင်း သက်သေမပြပါ။ Offline — `config/quality/model-lifecycle.json` နှင့် နှိုင်းယှဉ်ပြီး `npm run quality:refresh-model-lifecycle` ဖြင့် ကိုယ်တိုင် refresh လုပ်သည် (network လိုအပ်ပြီး CI နှင့် ချိတ်ဆက်မထားပါ)။ `allowedRetiredInCatalog` သည် တဖြည်းဖြည်းလျှော့ချရန် ရည်ရွယ်ထားသော ratchet တစ်ခုဖြစ်သည်- tracking issue ရှိမှသာ entry တစ်ခု ထည့်ပါ။ | ဟုတ်သည်                                       |
| `check:fetch-targets`             | client-side `src/` အတွင်းရှိ `fetch("/api/...")` တိုင်းသည် အမှန်တကယ်ရှိသော `route.ts` တစ်ခုသို့ resolve လုပ်သည်                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | ဟုတ်သည်                                       |
| `check:deps`                      | repo အတွင်းရှိ `package.json` တိုင်းမှ `npm install` လုပ်နိုင်သော dependency အားလုံးသည် `dependency-allowlist.json` ထဲတွင် ရှိသည်၊ အသစ်ထည့်သွင်းထားသော version မသတ်မှတ်ထားသည့် သို့မဟုတ် slopsquatting ဖြစ်နိုင်သော package များကို အမှတ်အသားပြုသည်                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | ဟုတ်သည်                                       |
| `audit:deps`                      | `npm audit` (root + electron) — high/critical အဆင့် advisory မရှိပါ (osv `check:vuln-ratchet` နှင့် ထပ်နေသည်၊ Rationalization Backlog ကို ကြည့်ပါ)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | ဟုတ်သည်                                       |
| `check:lockfile`                  | `package-lock.json` ၏ ခိုင်မာမှန်ကန်မှု — https registry၊ integrity hash များနှင့် host override မရှိခြင်း                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | ဟုတ်သည်                                       |
| `check:licenses`                  | ထုတ်လုပ်ရေး dependency များအတွက် SPDX လိုင်စင် allowlist                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | ဟုတ်သည်                                       |
| `check:tracked-artifacts`         | build artifact များ / commit လုပ်ထားသော `node_modules` symlink များ မရှိရပါ (husky pre-commit တွင်လည်း run သည်၊ pre-push ကို ရည်ရွယ်ချက်ရှိရှိ ပေါ့ပါးအောင်ထားသည် — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | ဟုတ်သည်                                       |
| `check:vitest-exclusions`         | Vitest exclusion တိုင်းတွင် tracking issue တစ်ခုကို အမည်ဖော်ပြထားပြီး `config/quality/vitest-exclusions.json` တွင် ပါဝင်ရမည် (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | ဟုတ်သည်                                       |
| `check:file-size`                 | source file တစ်ခုမျှ extension အလိုက် သတ်မှတ်ထားသော အများဆုံးပမာဏထက် မကျော်ရပါ (ratchet: ကြီးမားသော file များကို `frozen` စာရင်းတွင် ထိန်းထားသည်)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | ဟုတ်သည်                                       |
| `check:error-helper`              | executor/handler များရှိ error response များတွင် `buildErrorBody()` / `sanitizeErrorMessage()` ကို အသုံးပြုရမည် (တင်းကျပ်သော စည်းမျဉ်း #12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | ဟုတ်သည်                                       |
| `check:migration-numbering`       | Migration SQL file များကို နံပါတ်စဉ်အလိုက် ဆက်တိုက်သတ်မှတ်ထားရမည်ဖြစ်ပြီး ကြားလွတ်ခြင်း သို့မဟုတ် ထပ်နေခြင်း မရှိရပါ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | ဟုတ်သည်                                       |
| `check:public-creds`              | `publicCreds.ts` ပြင်ပတွင် စာသားအတိုင်းရေးထားသော OAuth `client_id`/`client_secret` သို့မဟုတ် Firebase Web keys မရှိရပါ (မဖြစ်မနေလိုက်နာရမည့် စည်းမျဉ်း #11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | ဟုတ်သည်                                       |
| `check:db-rules`                  | `src/lib/db/` modules များ၏ ပြင်ပတွင် raw SQL မရှိရပါ။ `localDb.ts` မှ barrel-imports များ မပြုလုပ်ရပါ (မဖြစ်မနေလိုက်နာရမည့် စည်းမျဉ်းများ #2/#5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | ဟုတ်သည်                                       |
| `check:known-symbols`             | ၎င်းတို့၏ dispatch tables များတွင် စာရင်းသွင်းထားသော provider executors၊ routing strategies နှင့် translators များသည် disk ပေါ်ရှိ files များနှင့် ကိုက်ညီရမည် — သီးခြားကျန်ရှိနေသော သို့မဟုတ် ကြေညာမထားသော symbols များ မရှိရပါ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | ဟုတ်သည်                                       |
| `check:route-guard-membership`    | child process တစ်ခု စတင်သည့် route တိုင်းကို `isLocalOnlyPath()` ဖြင့် အမျိုးအစားခွဲထားရမည် (မဖြစ်မနေလိုက်နာရမည့် စည်းမျဉ်းများ #15/#17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | ဟုတ်သည်                                       |
| `check:test-discovery`            | repo အတွင်းရှိ `*.test.ts` / `*.spec.ts` file တိုင်းကို အနည်းဆုံး test runner တစ်ခုက စုစည်းထားရမည် (ratchet: `test-discovery-baseline.json` အတွင်းရှိ orphan list သည် လျော့နည်းသွားခြင်းသာ ဖြစ်နိုင်သည်)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | ဟုတ်သည်                                       |
| `check:agent-skills-sync`         | ထုတ်လုပ်ထားသော agent-skills artifacts များသည် ၎င်းတို့၏ source catalog နှင့် ကိုက်ညီရမည် (ကွဲလွဲမှုမရှိရ)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `check:provider-asset-provenance` | Provider logos/assets များတွင် မှတ်တမ်းတင်ထားသော provenance entry တစ်ခု ပါရှိရမည်                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `lint:json`                       | JSON config ဖိုင်များကို parse လုပ်နိုင်ပြီး repo ၏ lint စည်းမျဉ်းများနှင့် ကိုက်ညီမှုရှိသည်                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `typecheck:core`                  | Error မရှိဘဲ TypeScript compilation ပြုလုပ်နိုင်သည် (အကြံပြု warning များသာ)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Yes                                           |
| `typecheck:noimplicit:core`       | တင်းကျပ်သော `noImplicitAny` — ရှေ့အနာဂတ်အတွက် ရည်ရွယ်ထားသည်။ ယခင်ကတည်းက ရှိနေသော call site အများအပြားတွင် annotation များ လိုအပ်နေဆဲဖြစ်သည်                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | **အကြံပြုချက်သာ** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | `src/app/(dashboard)/**` (#7033) အတွက် သီးသန့်သတ်မှတ်ထားသော `tsc` — `typecheck:core` ၏ စိစစ်ရွေးချယ်ထားသည့် ဖိုင် ၂၇ ဖိုင်ပါ allowlist တွင် dashboard TSX တစ်ခုမျှ မပါဝင်သကဲ့သို့ `next build` ကလည်း ၎င်းကို type-check လုံးဝမလုပ်ပါ (`next.config.mjs` တွင် `ignoreBuildErrors: true` ဟု သတ်မှတ်ထားသည်)။ ထို့ကြောင့် ထိုနေရာရှိ orphaned-identifier regression များ (#6625/#6909) ကို CI က မတွေ့ရှိနိုင်ခဲ့ပါ။ ရပ်တန့်ထားသော ဖိုင်အလိုက်/TS-code အလိုက် အရေအတွက် baseline (`config/quality/dashboard-typecheck-baseline.json`၊ `check:known-symbols` နှင့် တူညီသော stale-enforcement ပုံစံ) နှင့် diff ပြုလုပ်သည် — baseline တွင် သတ်မှတ်ထားသော အရေအတွက်ထက် ကျော်လွန်သည့် error အသစ်များကသာ gate ကို fail ဖြစ်စေသည်။ ယခင်ရှိပြီးသား error တစ်ခုကို ပြင်ဆင်ပြီးသည့်အခါ `--update` ဖြင့် baseline ကို တဖြည်းဖြည်း လျှော့ချပါ။                                                                                                                                                                                                                                                      | Yes                                           |

### Job: `quality-gate`

`test-coverage` ပြီးနောက် run သည်။ Failure ဖြစ်ပါက merge လုပ်ခြင်းကို ပိတ်ဆို့သည်။

| Script                       | စစ်ဆေးအတည်ပြုသည့်အရာ                                                                                                                                                                                                                 | ပိတ်ဆို့မှု              |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ |
| `quality:collect`            | `quality-metrics.json` ကို ထုတ်ပေးသည် (ESLint warning အရေအတွက်၊ ပေါင်းစည်းထားသော shard report မှ coverage)                                                                                                                           | Yes (ratchet ၏ upstream) |
| `quality:ratchet`            | `quality-baseline.json` ရှိ metric တစ်ခုချင်းစီသည် နောက်ပြန်ဆုတ်ယုတ်မှု မရှိရ (ESLint warning များ ≤ baseline၊ coverage ≥ baseline)                                                                                                  | Yes                      |
| `check:duplication`          | Code duplication (jscpd@4) သည် `quality-baseline.json` ရှိ baseline ထက် မကျော်လွန်ရ                                                                                                                                                  | Yes                      |
| `check:complexity`           | ဖိုင်အဆင့် cyclomatic complexity သည် သတ်မှတ်ထားသော အမြင့်ဆုံးပမာဏကို မကျော်လွန်ရ (core ESLint `complexity` + `max-lines-per-function`)                                                                                               | Yes                      |
| `check:cognitive-complexity` | Cognitive complexity ratchet (`eslint-plugin-sonarjs`) — သီးခြား ESLint pass ဖြစ်သည်။ CI တွင် နှစ်ခုလုံးကို တစ်ခုတည်းသော `check:complexity-ratchets` step အဖြစ် ပေါင်းစည်း run သည်                                                   | Yes                      |
| `check:dead-code`            | အသုံးမပြုသော export / ဖိုင်များအတွက် ratchet (knip) သည် baseline နှင့် နှိုင်းယှဉ်လျှင် နောက်ပြန်ဆုတ်ယုတ်မှု မရှိရ                                                                                                                   | Yes                      |
| `check:compression-budget`   | Compression benchmark budget — engine တစ်ခုချင်းစီ၏ token-savings အနိမ့်ဆုံးသတ်မှတ်ချက်များ နောက်ပြန်ဆုတ်ယုတ်မှု မရှိရ                                                                                                               | Yes                      |
| `check:type-coverage`        | ရာခိုင်နှုန်းဖြင့် typed ဖြစ်မှု ratchet (`type-coverage`) သည် နောက်ပြန်ဆုတ်ယုတ်မှု မရှိရ။ `typecheck:noimplicit:core` ကို အများအားဖြင့် လွှမ်းခြုံအစားထိုးထားသည်                                                                    | Yes                      |
| `check:codeql-ratchet`       | ဖွင့်ထားသော CodeQL alert အရေအတွက် နောက်ပြန်ဆုတ်ယုတ်မှု မရှိရ (`gh api` မှတစ်ဆင့် ဖတ်ယူသည်။ token မရှိပါက error မဖြစ်စေဘဲ skip လုပ်သည်) — refresh ပြုလုပ်သည့် အကြိမ်ရေနှင့် manual trigger အတွက် အောက်ပါ "CodeQL ratchet" ကို ကြည့်ပါ | Yes                      |

### Job: `quality-extended`

Job တစ်ခုလုံးသည် အကြံပြုအဆင့်သာဖြစ်သည် (`continue-on-error: true`)။ npm အခြေပြု ratchet များသည်
အမှန်တကယ် လုပ်ဆောင်သည်။ ပြင်ပ scanner များကို `gh release download` မှတစ်ဆင့် ထည့်သွင်းပြီး binary
မရှိသေးပါက ၎င်းတို့ကိုယ်တိုင် ကျော်သွားသည် (exit 0)။

| Script                   | စစ်ဆေးအတည်ပြုသည့်အရာ                                                                                                                                                                                                      | ပိတ်ဆို့မှု |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `check:circular-deps`    | စက်ဝိုင်းပုံစံ dependency မရှိခြင်း (dpdm)                                                                                                                                                                                | **အကြံပြု** |
| `check:bundle-size`      | Bundle အရွယ်အစားသည် သတ်မှတ်အများဆုံးပမာဏကို မကျော်လွန်ခြင်း                                                                                                                                                               | **အကြံပြု** |
| `check:secrets`          | Secret စစ်ဆေးခြင်း (gitleaks) — binary မရှိပါက ကျော်သွားသည်                                                                                                                                                               | **အကြံပြု** |
| `check:vuln-ratchet`     | Dependency အားနည်းချက်များ (osv-scanner) နောက်ပြန်မဆုတ်ခြင်း — binary မရှိပါက ကျော်သွားသည်                                                                                                                                | **အကြံပြု** |
| `check:workflows`        | Workflow lint (actionlint + zizmor) — binary များ မရှိပါက ကျော်သွားသည်                                                                                                                                                    | **အကြံပြု** |
| `check:openapi-breaking` | အခြေခံ branch နှင့် နှိုင်းယှဉ်ထားသော အများသုံး API contract (`openapi.yaml`) ၏ breaking change များ (oasdiff) — `openapiBreaking=N` ကို ထုတ်ပေးသည်။ oasdiff မရှိပါက သို့မဟုတ် အခြေခံ spec ကို ဖြေရှင်းမရပါက ကျော်သွားသည် | **အကြံပြု** |

### Job: `docs-sync-strict`

`main` သို့ PR ပြုလုပ်တိုင်း လုပ်ဆောင်သည်။ မအောင်မြင်ပါက merge ပြုလုပ်ခြင်းကို ပိတ်ဆို့သည်။

| Script                         | စစ်ဆေးအတည်ပြုသည့်အရာ                                                                                                                                                                                                  | ပိတ်ဆို့မှု                            |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| `check:docs-all`               | အောက်ပါ sub-gate ၆ ခုကို အစဉ်လိုက် လုပ်ဆောင်သည့် meta-gate                                                                                                                                                            | ဟုတ်သည်                                |
| ↳ `check:docs-sync`            | CHANGELOG / OpenAPI / llm.txt version များ တစ်သမတ်တည်းဖြစ်မှု                                                                                                                                                         | ဟုတ်သည်                                |
| ↳ `check:docs-counts`          | စာသားအတွင်းရှိ အရေအတွက်များ (provider အရေအတွက်၊ migration အရေအတွက် စသည်) သည် အမှန်တကယ် အရေအတွက်များ၏ ratchet window အတွင်း ရှိခြင်း                                                                                   | ဟုတ်သည်                                |
| ↳ `check:env-doc-sync`         | `.env.example` ရှိ env var တိုင်းကို docs table တစ်ခုတွင် မှတ်တမ်းတင်ထားပြီး အပြန်အလှန်အားဖြင့်လည်း ကိုက်ညီခြင်း                                                                                                      | ဟုတ်သည်                                |
| ↳ `check:deprecated-versions`  | docs များအတွင်း deprecated version string မရှိခြင်း                                                                                                                                                                   | ဟုတ်သည်                                |
| ↳ `check:doc-links`            | docs များရှိ internal markdown link များသည် အမှန်တကယ်ရှိသော file များသို့ ရောက်ရှိခြင်း (`[text]`/`(path)` ပုံစံ)                                                                                                     | ဟုတ်သည်                                |
| ↳ `check:fabricated-docs`      | docs များတွင် ဖော်ပြထားသော route များ၊ env var များ၊ CLI command များ၊ hook အမည်များနှင့် file path များသည် codebase ထဲတွင် ရှိခြင်း။ `--strict` မှတစ်ဆင့် hard gate အဖြစ် သတ်မှတ်ပြီး flag မပါပါက soft-fail ဖြစ်သည်။ | ဟုတ်သည် (CI တွင် `--strict` မှတစ်ဆင့်) |
| `check:cli-i18n`               | CLI command string များသည် i18n locale file အားလုံးတွင် ပါရှိခြင်း                                                                                                                                                    | ဟုတ်သည်                                |
| `check:openapi-coverage`       | OpenAPI spec သည် အမှန်တကယ် route များ၏ ratchet ဖြင့် သတ်မှတ်ထားသော အနည်းဆုံးပမာဏကို လွှမ်းခြုံခြင်း                                                                                                                   | ဟုတ်သည်                                |
| `check:openapi-security-tiers` | `openapi.yaml` ရှိ security tier annotation များသည် `routeGuard.ts` classification များနှင့် တစ်သမတ်တည်းဖြစ်ခြင်း                                                                                                     | **အကြံပြု**                            |
| `check:openapi-routes`         | `openapi.yaml` ရှိ path တိုင်းသည် အမှန်တကယ်ရှိသော `route.ts` သို့ ရောက်ရှိခြင်း (မရှိသည်ကို ဖန်တီးဖော်ပြခြင်းမှ ကာကွယ်မှု)                                                                                            | ဟုတ်သည်                                |
| `check:docs-symbols`           | `docs/**/*.md` ရှိ `/api/...` reference တိုင်းသည် အမှန်တကယ်ရှိသော `route.ts` သို့ ရောက်ရှိခြင်း (မရှိသည်ကို ဖန်တီးဖော်ပြခြင်းမှ ကာကွယ်မှု)                                                                            | ဟုတ်သည်                                |
| `i18n translation drift`       | i18n locale file များရှိ ဘာသာမပြန်ရသေးသော key များ — သတိပေးချက်သာ                                                                                                                                                     | **အကြံပြု**                            |

### Job: `i18n-ui-coverage`

| Script                            | စစ်ဆေးအတည်ပြုသည့်အရာ                                                                                                                                                                                   | ပိတ်ဆို့မှုရှိ/မရှိ |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------- |
| `check-ui-keys-coverage` (inline) | UI i18n key လွှမ်းခြုံမှုသည် ≥ 65% ဖြစ်သည်                                                                                                                                                             | ရှိ                 |
| `check-ui-value-drift` (inline)   | ပြန်လည်ရေးသားထားသော အင်္ဂလိပ် **value** သည် ခေတ်မမီတော့သော ဘာသာပြန်ချက်ကို ကျန်မနေစေပါ                                                                                                                 | ရှိ                 |
| `check-new-key-coverage` (inline) | **အသစ်** ထည့်ထားသော အင်္ဂလိပ် key သည် locale တိုင်းသို့ ရောက်ရှိသည်                                                                                                                                    | ရှိ                 |
| `check-translation-ratio`         | locale တစ်ခုချင်းစီ၏ တကယ့်ဘာသာပြန်ချက်အချိုး (allowlist ပြင်ပရှိ အင်္ဂလိပ်နှင့် တူညီသော / placeholder / ပျောက်နေသော leaf များ) သည် `config/quality/i18n-translation-baseline.json` + slack ထက် မကျော်ရ | **အကြံပြုချက်သာ**   |

`fetch-depth: 0` လိုအပ်သည် — value-drift gate သည် `en.json` ကို merge base နှင့် diff လုပ်သည်။

#### `check-ui-value-drift` — ခေတ်မမီသော ဘာသာပြန်ချက် gate

အခြား gate များက ဖွဲ့စည်းပုံအရ မတွေ့နိုင်သည့် i18n regression တစ်မျိုးကို ဖမ်းယူသည်။ အင်္ဂလိပ် value တစ်ခုကို
ပြန်လည်ရေးသားသော်လည်း _ယခင်_ အင်္ဂလိပ်မှ ဆင်းသက်လာသော ဘာသာပြန်ချက်များက ကျန်ရှိနေသောကြောင့်
အင်္ဂလိပ်မဟုတ်သော ဘာသာစကားသုံးစွဲသူများသည် ယုံကြည်စိတ်ချရသကဲ့သို့ ရေးသားထားသော်လည်း ယခုအခါ မှားယွင်းနေသည့် စာသားကို ဆက်လက်ဖတ်နေရသည်။

ဤပြဿနာသည် production သို့ အမှန်တကယ် ရောက်ရှိခဲ့သည်။ Antigravity login helper ထည့်သွင်းသောအခါ (#5203)
`oauthModal.googleOAuthWarning` ကို ပြန်လည်ရေးသားခဲ့သော်လည်း **locale 43 ခုအနက် 39 ခု** တွင် operator များကို "URL အပြည့်အစုံကို
ကူးယူပြီး အောက်တွင် ကူးထည့်ရန်" ပြောထားသည့် စာသား ကျန်နေခဲ့သည် — ထို provider အတွက် ပြီးမြောက်အောင် လုပ်ဆောင်၍မရသော flow ဖြစ်သည်။ အောက်ပါအကြောင်းရင်းများကြောင့်
#8463 အထိ သတိမပြုမိခဲ့ပါ။

- `sync-ui-keys` သည် **မရှိသော** key များကိုသာ ဖြည့်ပေးပြီး **ခေတ်မမီသော** key များကို မဖြည့်ပေးပါ။
- `check-ui-keys-coverage` သည် key _ရှိနေမှု_ ကို ရေတွက်သောကြောင့် ခေတ်မမီသော ဘာသာပြန်ချက်ကို လွှမ်းခြုံထားသည်ဟု သတ်မှတ်သည်။
- `check-translation-drift` သည် `docs/i18n/<locale>/**.md` documentation mirror များကို ခြေရာခံသည် —
  `src/i18n/messages/*.json` ကို လုံးဝမဖတ်ပါ။ 2026-09 ပြန်လည် sync လုပ်ပြီးကတည်းက job `docs-sync-strict` တွင် ပိတ်ဆို့ထားသည်။
  core doc တစ်ခုကို ပြင်ဆင်ပါက → `npm run i18n:run -- --files=<doc>` (section-level ဖြစ်၍ ကုန်ကျစရိတ်နည်းသည်)။

**Diff ကို အခြေခံပြီး baseline ကို မမှီခိုပါ။** ၎င်းသည် merge base ရှိ `en.json` ကို
working tree နှင့် နှိုင်းယှဉ်သည်။ အင်္ဂလိပ် value ပြောင်းလဲသွားသည့် key တစ်ခုစီအတွက် locale တစ်ခုခုတွင်
မပြင်ဆင်ရသေးသော ဘာသာပြန်ချက် ရှိနေပါက ထိုဘာသာပြန်ချက်သည် ခေတ်မမီတော့ပါ။ ဤနည်းလမ်းသည် **ယခင်ကတည်းကရှိသော debt ကို ရည်ရွယ်ချက်ရှိရှိ freeze လုပ်ထားသည်** —
ကာလကြာရှည်စွာ ရှိနေသော ဘာသာပြန်ချက်သည် မည်သည့် အင်္ဂလိပ်စာသားအဟောင်းမှ ဆင်းသက်လာသည်ကို diff တစ်ခုက မဖော်ထုတ်နိုင်သောကြောင့် gate သည်
လက်ရှိပြောင်းလဲမှုက ထိတွေ့သည့်အရာများကိုသာ ဆုံးဖြတ်သည်။ အခြားရွေးချယ်စရာဖြစ်သည့် per-key hash baseline သည်
ရှိပြီးသား အကြီးဆုံး baseline ထက် 3 ဆကြီးသော ~600 KB generated file တစ်ခု လိုအပ်မည်ဖြစ်ပြီး i18n PR တိုင်းတွင် မကြာခဏ ပြောင်းလဲနေမည်ဖြစ်သည်။

၎င်းကို ဖြည့်ဆည်းရန် နည်းလမ်းနှစ်ခုရှိသည်။

1. သက်ရောက်မှုရှိသော ဘာသာပြန်ချက်များကို update လုပ်ပါ၊ သို့မဟုတ်
2. ၎င်းတို့ကို `__MISSING__:<new english>` ဟု သတ်မှတ်ပါ — ထိုအခါ runtime သည် ပြင်ဆင်ထားသော အင်္ဂလိပ်စာသားကို ပေးသည်
   (`src/i18n/request.ts::deepMergeFallback`, #7258)၊ ထို့နောက် key သည် ဘာသာပြန်ရန် queue ထဲသို့ ရောက်သွားသည်။

စာသား၏ **အဓိပ္ပာယ်** ပြောင်းလဲသွားပါက **key ကို အမည်ပြောင်းခြင်း** ကို ပိုမိုဦးစားပေးပါ။ key အသစ်သည်
ခေတ်မမီသော ဘာသာပြန်ချက်ကို အမွေဆက်ခံ၍မရပါ။ #8463 တွင် ဤပုံစံကို အသုံးပြုခဲ့သည်။

```bash
npm run i18n:check-value-drift          # တင်းကျပ်သော mode (CI က run သည့်အရာ)
npm run i18n:check-value-drift:warn     # report သာ ထုတ်ရန်
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

base catalog ကို မဖတ်နိုင်သည့်အခါ (base ref မပါသော shallow
clone) `check-openapi-breaking` ကဲ့သို့ပင် `SKIP reason=base-unresolved` ဖြင့် exit 0 ပြန်သည်။

### Job: `i18n`

အပြည့်အစုံသော i18n validation matrix (locale တစ်ခုလျှင် job တစ်ခု)။ job တစ်ခုလုံးသည် အကြံပြုချက်သာဖြစ်သည်။

| Script                          | စစ်ဆေးအတည်ပြုသည့်အရာ                              | ပိတ်ဆို့မှုရှိ/မရှိ                                             |
| ------------------------------- | ------------------------------------------------- | --------------------------------------------------------------- |
| `validate_translation.py quick` | locale တစ်ခုချင်းစီ၏ ဘာသာပြန်ဆိုမှု ပြည့်စုံခြင်း | **အကြံပြုချက်သာ** (job တစ်ခုလုံးတွင် `continue-on-error: true`) |

### Job: `pr-test-policy`

pull request များတွင်သာ run သည်။

| Script                 | စစ်ဆေးအတည်ပြုသည့်အရာ                                                                                                                                                                   | ပိတ်ဆို့မှုရှိ/မရှိ |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| `check:pr-test-policy` | `src/`, `open-sse/`, `electron/` သို့မဟုတ် `bin/` အတွင်းရှိ production code ကို ပြောင်းလဲသော PR များတွင် test များ ထည့်သွင်းခြင်း သို့မဟုတ် update လုပ်ခြင်း ပါဝင်ရမည် (Hard Rule #8)  | ရှိ                 |
| `check:test-masking`   | ပြောင်းလဲထားသော test file များသည် net assert အရေအတွက်ကို မလျှော့ချဘဲ `assert.ok(true)` tautology များလည်း မထည့်ပါ                                                                      | ရှိ                 |
| `check:pr-evidence`    | PR body တွင် ပြောင်းလဲမှုအတွက် test/VPS အထောက်အထားကို ကိုးကားထားသည် (PR စာသားကို grep လုပ်ခြင်းဖြင့် Hard Rule #18 ကို အလိုအလျောက်လုပ်ဆောင်သည် — မခိုင်မာနိုင်ပါ၊ Backlog ကို ကြည့်ပါ) | ရှိ                 |

### Job: `test-vitest`

`build` ပြီးနောက် run သည်။ မအောင်မြင်ပါက merge ကို ပိတ်ဆို့သည်။

| စမ်းသပ်မှုအစု    | စစ်ဆေးအတည်ပြုသည့်အရာ                                      | ပိတ်ဆို့မှု                                                                                                                                             |
| ---------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `test:vitest`    | MCP ဆာဗာ (တူးလ် 110 ခု)၊ autoCombo၊ cache — vitest runner | ရှိ                                                                                                                                                     |
| `test:vitest:ui` | UI ကွန်ပိုနင့် စမ်းသပ်မှုများ — vitest runner             | **ပိတ်ဆို့မှုရှိ** — ယခင်ကတည်းကရှိသော မအောင်မြင်မှုများကို `vitest.config.ts` တွင် အတိအလင်း ဖယ်ထုတ်ထားပြီး၊ မအောင်မြင်မှုအသစ်များက job ကို ကျရှုံးစေသည် |

### ညစဉ် workflow များ (အချိန်ဇယားအရ၊ အကြံပြုချက်သဘော)

၎င်းတို့သည် cron အချိန်ဇယားအတိုင်း (နှင့် `workflow_dispatch` ဖြင့်) လုပ်ဆောင်ပြီး PR များတွင် မည်သည့်အခါမျှ မလုပ်ဆောင်ပါ။ အားလုံးသည် အကြံပြုချက်သဘောသာ ဖြစ်သည်။

| Workflow               | စစ်ဆေးအတည်ပြုသည့်အရာ                                                                                                                                                                                | ပိတ်ဆို့မှုမရှိ     |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| `nightly-property`     | ကျပန်း seed နှင့် run အရေအတွက်မြင့်မားစွာ အသုံးပြုသည့် fast-check property စမ်းသပ်မှုများ                                                                                                           | **အကြံပြုချက်သဘော** |
| `nightly-resilience`   | heap ကြီးထွားမှု gate၊ chaos fault-injection၊ k6 load/soak                                                                                                                                          | **အကြံပြုချက်သဘော** |
| `nightly-llm-security` | promptfoo injection guard (block mode) + garak probes (provider secret မရှိပါက ကျော်သွားမည်)                                                                                                        | **အကြံပြုချက်သဘော** |
| `nightly-schemathesis` | `docs/openapi.yaml` ကို အသုံးပြု၍ လည်ပတ်နေသော OmniRoute အပေါ် OpenAPI contract fuzzing (schemathesis) ပြုလုပ်ခြင်း — spec ချိုးဖောက်မှုများ / မကိုင်တွယ်ထားသော 500 များကို ဖော်ထုတ်သည် (Fase 8 B.4) | **အကြံပြုချက်သဘော** |
| `nightly-mutation`     | မြန်ဆန်သော unit lane တစ်လျှောက် Stryker mutation-testing ရမှတ် — ရှင်ကျန်နေသော mutant များက အားနည်းသည့် assert များကို ဖော်ထုတ်သည်                                                                  | **အကြံပြုချက်သဘော** |
| `nightly-compat`       | ပံ့ပိုးထားသော `engines.node` အပိုင်းအခြားများတစ်လျှောက် Node engine လိုက်ဖက်ညီမှု matrix                                                                                                            | **အကြံပြုချက်သဘော** |

---

## Velocity အဆင့် (2026-08-30 → v4.0 LTS): baseline အားလုံးကို 20% လျှော့ပေါ့ထားသည်

ပိုင်ရှင်၏ ဆုံးဖြတ်ချက် (2026-08-30): v4.0 modularization မတိုင်မီအထိ နည်းပညာဆိုင်ရာ ကြွေးမြီမျဉ်းကို ထိန်းထားခြင်းထက် release ထုတ်နိုင်သည့် အမြန်နှုန်းက ပိုအရေးကြီးသည်။ **ကိန်းဂဏန်းဆိုင်ရာ** ratchet baseline တိုင်းကို စစ်ဆေးအတည်ပြုနိုင်သော တစ်ကြိမ်တည်းလုပ်ဆောင်မှုဖြင့် 20% လျှော့ပေါ့ခဲ့ပြီး အဆိုပါအဆင့်ကို `config/quality/quality-baseline.json` တွင် ကြေညာထားသည်-

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| ပြောင်းလဲခဲ့သည့်အရာ                                                                                                                                                                                                                                                                                              | တည်နေရာ                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `metrics.*.value` — တန်ဖိုးနည်းလေ ကောင်းလေဖြစ်သော အရေအတွက်များကို ×1.2၊ တန်ဖိုးများလေ ကောင်းလေဖြစ်သော ရာခိုင်နှုန်းများကို ÷1.2 (coverage အနိမ့်ဆုံးကန့်သတ်ချက် 60 ကို ဆက်ထိန်းထားသည်၊ `eslintErrors` သည် 0 အဖြစ် ဆက်ရှိပြီး `eslintWarnings` ကို 0 မှ အေးခဲထားသော suppression အရေအတွက်၏ 20% သို့ ပြောင်းထားသည်) | `quality-baseline.json` (`_relax_velocity_2026_08_30` မှတ်စုတွင် မပြောင်းမီ → ပြောင်းပြီး တန်ဖိုးအားလုံးကို စာရင်းပြုထားသည်) |
| `count` ×1.2 / `percentage` ×1.2                                                                                                                                                                                                                                                                                 | `complexity-baseline.json`, `duplication-baseline.json`                                                                      |
| `cap`, `testCap` နှင့် `frozen[*]` / `testFrozen[*]` တစ်ခုစီ၏ line cap ကို ×1.2                                                                                                                                                                                                                                  | `file-size-baseline.json`                                                                                                    |
| file တစ်ခုချင်း / TS code တစ်ခုချင်းအလိုက် အရေအတွက်များကို ×1.2                                                                                                                                                                                                                                                  | `api-typecheck-baseline.json`, `dashboard-typecheck-baseline.json`, `open-sse-typecheck-baseline.json`                       |
| `THRESHOLD` 36 → 30                                                                                                                                                                                                                                                                                              | `scripts/check/check-openapi-coverage.mjs`                                                                                   |
| `_policy.requireTighten === false` ဖြစ်နေစဉ် `--require-tighten` သည် အကြံပြုချက်သာ ဖြစ်သွားသည်                                                                                                                                                                                                                   | `scripts/quality/check-quality-ratchet.mjs`                                                                                  |
| ညစဉ် `bank-ratchet-shrinks` ကို ခေတ္တရပ်ထားသည် (၎င်းသည် တိုင်းတာရရှိသော လျော့ကျမှုကို baseline ထဲသို့ ထည့်သွင်းပြီး ရရှိထားသော headroom ကို ပြန်ဖျက်ပစ်မည်ဖြစ်သောကြောင့်)                                                                                                                                        | `.github/workflows/nightly-release-green.yml`                                                                                |

Allowlist များ (`eslint-suppressions.json`, `test-masking-allowlist.json`, `test-discovery-baseline.json`,
…) သည် budget များ **မဟုတ်** သဖြင့် ပြင်ဆင်ထားခြင်းမရှိပါ။ အောင်/ကျရှုံး policy gate များ (secret များ၊ SQL စည်းမျဉ်းများ၊
docs/env contract၊ i18n parity၊ unit test များ) ကို မပြောင်းလဲထားပါ — အနီရောင် test သည် အနီရောင် test အဖြစ်သာ ဆက်ရှိနေမည်ဖြစ်သည်။

**ကိရိယာများ**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — တစ်ကြိမ်တည်းသာ
  လျှော့ပေါ့ပေးခြင်း (`scripts/quality/relax-baselines.mjs`); တူညီသော note ဖြင့် နှစ်ကြိမ်လုပ်ဆောင်ရန် ငြင်းပယ်သည်။
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  ကိန်းဂဏန်းဆိုင်ရာ gate တိုင်းကို CI လုပ်ဆောင်သည့်ပုံစံအတိုင်း တိုင်းတာပြီး gate တစ်ခုချင်းစီ၏ ကျန်ရှိသော headroom ကို
  ဖော်ပြသည် (`scripts/quality/baseline-headroom.mjs`)။ ညစဉ် `baseline-headroom` job သည်
  ဇယားကို ဆက်လက်အသုံးပြုနေသော issue **📈 Baseline headroom (velocity phase)** သို့ တင်ပေးပြီး gate တစ်ခုခုသည်
  ၎င်း၏ cap ၏ 10% အတွင်းသို့ ရောက်ရှိနေပါက သို့မဟုတ် cap ကို ကျော်လွန်ပြီးဖြစ်ပါက `headroom-alert` label ကို
  ထည့်ပေးသည်။ ထို issue သည် ကြိုတင်သတိပေးချက်ဖြစ်သည်- budget တစ်ခုသည် ရက်အနည်းငယ်အတွင်း ပြည့်သွားပါက လျှော့ပေါ့မှုကို
  အဖွဲ့တစ်ခုလုံးက အသုံးပြုနေခြင်းမဟုတ်ဘဲ PR အနည်းငယ်က ကုန်ဆုံးစေနေခြင်းဖြစ်သည် — ပြဿနာဖြစ်စေသော gate ၏ `_rebaseline_*` မှတ်စုများကို ကြည့်ပါ။

**Code အသစ် mode (Clean-as-You-Code) — 2026-08-30 မှစ၍ PR fast-path အတွက်သာ**

`pull_request` event များတွင် `quality.yml` သည် `check:file-size`,
`check:complexity-ratchets` နှင့် `check:dead-code` သို့ `--base-ref <PR base SHA>` ကို ပေးပို့သည်။ ထို mode တွင် gate သည် HEAD ကို
merge-base နှင့် နှိုင်းယှဉ်ရာ၌ **PR က ပြင်ဆင်ထိတွေ့ခဲ့သော file များကိုသာ ကန့်သတ်ထားသည်** (`scripts/check/newCodeMode.mjs`:
merge-base ကို ယာယီ `git worktree` တစ်ခုတွင် ဖန်တီးပြီး ESLint/knip ကို ထိုနေရာနှင့် HEAD နှစ်ခုစလုံးတွင် run ကာ
file တစ်ခုချင်းစီ၏ အရေအတွက်များကို diff လုပ်သည်)-

- **ပိတ်ဆို့ခြင်း** — PR သည် ပြောင်းလဲခဲ့သော file များတွင် cyclomatic/cognitive ချိုးဖောက်မှုများ သို့မဟုတ် dead export များကို ထည့်သွင်းခဲ့သည်
  (log ထဲရှိ `complexityNewCode=`, `cognitiveComplexityNewCode=`, `deadExportsNewCode=`);
- **အကြံပြုချက်သာ** — global စုစုပေါင်းကို အေးခဲထားသော baseline နှင့် နှိုင်းယှဉ်ခြင်း။ ဆက်ခံရရှိသော drift ကြောင့်
  အပြစ်မရှိသည့် PR တစ်ခု မည်သည့်အခါမျှ အနီရောင်ဖြစ်မသွားပါ။ drift ကို release reconciliation တွင် ပြန်လည်အေးခဲပြီး headroom job က စောင့်ကြည့်သည်။

`workflow_dispatch` run များ၊ release-green sweep နှင့် ညစဉ် headroom job တို့တွင် PR base မရှိသဖြင့်
အကြွင်းမဲ့ (global) နှိုင်းယှဉ်မှုကို ဆက်လက်အသုံးပြုသည်။ Coverage၊ duplication နှင့် type-coverage တို့သည် ယခုအချိန်အထိ global အဖြစ်
ဆက်ရှိသည် (၎င်းတို့၏ tool များက file တစ်ခုချင်းအလိုက် diff ကို ကုန်ကျစရိတ်နည်းစွာ မထုတ်ပေးနိုင်ပါ) — အလားတူနည်းလမ်းဖြင့် ပြောင်းလဲရန် အလားအလာရှိသော အရာများဖြစ်သည်။

**v4.0 တွင် အဆင့်ကို ပိတ်သိမ်းခြင်း (LTS = ယခင်ထက် ပိုတင်းကျပ်ခြင်း၊ "ပုံမှန်အခြေအနေသို့ ပြန်သွားခြင်း" မဟုတ်)**

1. ပြောင်းလဲမှုမရှိသည့် `release/v4.0.0` tip တွင် မှတ်တမ်းအတွက် `npm run quality:headroom --json` ကို run ပြီးနောက်
   `npm run quality:ratchet -- --update`, `check:file-size --update`,
   `check:complexity-ratchets --update`, `check:dead-code --update` နှင့် typecheck gate တစ်ခုစီ၏
   `--update` ကို run ပါ — baseline တစ်ခုစီသည် တိုင်းတာရရှိထားသည့် တန်ဖိုးအထိ လျော့ကျသွားပါမည်။
2. `quality-baseline.json` မှ `_policy` ကို ဖျက်ပါ (`--require-tighten` နှင့် ညစဉ်
   banking ကို ပြန်လည်အသက်သွင်းပေးသည်)၊ `check-openapi-coverage.mjs` တွင် `THRESHOLD = 36` (သို့မဟုတ် ပိုမြင့်သောတန်ဖိုး) ကို ပြန်ထားပါ။
3. modularization ပြုလုပ်ခြင်းကြောင့် အကျိုးရှိခဲ့သည့်နေရာများတွင် တိုင်းတာရရှိထားသည့်တန်ဖိုးထက် ပိုမိုတင်းကျပ်ပါစေ- file-size `cap` ကို 1000
   (သို့မဟုတ် 800) သို့ ပြန်ထားခြင်း၊ coverage အနိမ့်ဆုံးသတ်မှတ်ချက်များကို +5 တိုးခြင်း၊ modularized package များအတွက် dead exports ကို 0 သတ်မှတ်ခြင်းတို့ ပြုလုပ်ပါ။

## Ratchet အခြေခံမျဉ်း (`quality-baseline.json`)

Ratchet အင်ဂျင် (`scripts/quality/check-quality-ratchet.mjs`) သည် `quality-baseline.json`
ကို ဖတ်ပြီး အသစ်စုဆောင်းထားသော `quality-metrics.json` နှင့် နှိုင်းယှဉ်သည်။ သတ်မှတ်ထားသော
epsilon ထက်ကျော်လွန်၍ နောက်ပြန်ဆုတ်သွားသည့် မည်သည့်မက်ထရစ်မဆို build ကို ကျရှုံးစေသည်။

လက်ရှိ ခြေရာခံထားသော မက်ထရစ်များ-

| မက်ထရစ်               | ဦးတည်ချက် | အဓိပ္ပာယ်                          |
| --------------------- | --------- | ---------------------------------- |
| `eslintWarnings`      | `down`    | ESLint သတိပေးချက်အရေအတွက် မတိုးရပါ |
| `coverage.statements` | `up`      | Statement coverage မကျဆင်းရပါ      |
| `coverage.lines`      | `up`      | Line coverage မကျဆင်းရပါ           |
| `coverage.functions`  | `up`      | Function coverage မကျဆင်းရပါ       |
| `coverage.branches`   | `up`      | Branch coverage မကျဆင်းရပါ         |

အမှန်တကယ် တိုးတက်မှုတစ်ခု ဖြစ်ပေါ်ပြီးနောက် အခြေခံမျဉ်းကို အပ်ဒိတ်လုပ်ရန်-

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

`--update` flag သည် လက်ရှိတိုင်းတာထားသော တန်ဖိုးများကို `quality-baseline.json` ထဲသို့ ရေးသားသည်။
မက်ထရစ်ကို တိုးတက်စေခဲ့သော ပြောင်းလဲမှုနှင့်အတူ ဤဖိုင်ကို commit လုပ်ပါ။ မက်ထရစ်တစ်ခုကို
တိုးတက်စေသော်လည်း အခြေခံမျဉ်းကို အပ်ဒိတ်မလုပ်ထားသော PR ကို `--require-tighten` က
ဖမ်းမိမည်ဖြစ်သည် (အဆင့် 6A.5၊ အကောင်အထည်ဖော်ရန် ကျန်ရှိနေသေးသည်)။

### CodeQL ratchet: ပြန်လည်ဆန်းသစ်သည့် အကြိမ်နှုန်းနှင့် ကိုယ်တိုင်အစပျိုးခြင်း

`check:codeql-ratchet` သည် **အချိန်ဇယားအတိုင်း ပြန်လည်ဆန်းသစ်ထားသော repo အခြေအနေကို ဖတ်သည် — PR တစ်ခုချင်းအလိုက် မဟုတ်ပါ။**
`gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup` သည်
`state: configured`, `schedule: weekly` ဟု အစီရင်ခံသည်- ၎င်းသည် GitHub ၏ default-setup scan ဖြစ်ပြီး push တစ်ခုချင်းအလိုက်
လုပ်ဆောင်သော analysis မဟုတ်ပါ။ အကျိုးဆက်အနေဖြင့် alert များကို ပြင်ဆင်ထားသော PR တစ်ခု merge ဖြစ်ပြီးနောက်တွင်
ratchet သည် နောက်တစ်ကြိမ် အချိန်ဇယားအတိုင်း scan မလုပ်ဆောင်မချင်း အဟောင်းဖြစ်သည့် ပိုများသော အရေအတွက်ကို ဆက်လက်ဖတ်နေမည် —
ထို့ကြောင့် scan က အခြေအနေသစ်ကို ဖမ်းမိသည်အထိ ပြင်ဆင်သည့် PR ၏ နောက်ဆက်တွဲ PR များအပါအဝင် ဖွင့်ထားသော PR အားလုံးတွင်
နောက်ပြန်ဆုတ်မှုအဖြစ် အစီရင်ခံမည်ဖြစ်သည်။

**ကိုယ်တိုင် ပြန်လည်ဆန်းသစ်ခြင်း**: `gh workflow run codeql.yml --ref release/vX.Y.Z` သည်
analysis ကို ပြန်လည်လုပ်ဆောင်ပြီး မိနစ်ပိုင်းအတွင်း alert များကို ပြန်လည်ထုတ်ပြန်သည်။ `.github/workflows/codeql.yml`
ကို ဦးစွာဖတ်ပါ — GitHub ၏ "default setup" နှင့် ပဋိပက္ခဖြစ်သောကြောင့်
(`CodeQL analyses from advanced configurations cannot be processed when the default setup is enabled`) ၎င်းသည် `workflow_dispatch` သီးသန့်သာဖြစ်ကြောင်း
၎င်း၏ header တွင် ရှင်းပြထားသည်။ `push`/`pull_request`/
`schedule` trigger များကို ပြန်လည်ထည့်သွင်းရန် ဦးစွာ **owner ၏ လုပ်ဆောင်မှု** လိုအပ်သည်- Settings → Code security →
CodeQL: Default → Advanced။ ထိုပြောင်းလဲမှုမပြုလုပ်ဘဲ `schedule:` trigger ကို မထည့်ပါနှင့် — ထိုသို့ပြုလုပ်ပါက
ကျရှုံးသော run များသာ ဖြစ်ပေါ်စေမည်။

**အရေအတွက် ကျဆင်းပြီးနောက် အခြေခံမျဉ်းကို တင်းကျပ်ပါ** — `node scripts/check/check-codeql-ratchet.mjs
--update` သည် အသစ်တိုင်းတာထားသော အရေအတွက်ကို `quality-baseline.json` →
`metrics.codeqlAlerts.value` ထဲသို့ ရေးသားသောကြောင့် ratchet က အဟောင်းဖြစ်သည့် အမြင့်ဆုံးကန့်သတ်ချက်အထိ
ပြန်လည်မြင့်တက်သွားခြင်းကို မသိမသာ ခွင့်ပြုမည်မဟုတ်ပါ။ လက်တွေ့ဥပမာ (2026-09-02/03)- PR #12502 က အမှန်တကယ် alert 7 ခုကို
ပြင်ဆင်ခဲ့သည် (တိုင်းတာထားသော ဖွင့်ထားသည့် alert 13 → 6); PR #12530 က ကိုက်ညီစေရန် ပုံသေထားသော အခြေခံမျဉ်းကို 11 → 6 သို့
တင်းကျပ်ခဲ့သည်; ထို့နောက် ကျန်ရှိသည့် 6 ခုကို alert တစ်ခုချင်းအလိုက် အကြောင်းပြချက်ပေး၍ ပယ်ဖျက်ခဲ့ပြီး ဖွင့်ထားသည့် alert အရေအတွက်ကို 0 အထိ လျှော့ချခဲ့သည်။

**ပယ်ဖျက်ခြင်းများသည် operator ၏ ဆုံးဖြတ်ချက်ဖြစ်သည် (တင်းကျပ်သော စည်းမျဉ်း #14)** — ပယ်ဖျက်မှုမှတ်ချက်တွင်
နည်းပညာဆိုင်ရာ အကြောင်းပြချက်ကို မှတ်တမ်းမတင်ဘဲ CodeQL alert တစ်ခုကို မည်သည့်အခါမျှ မပယ်ဖျက်ပါနှင့်- upstream-protocol
လိုအပ်ချက်အတွက် `won't fix`၊ test fixture အတွက် `used in tests`၊ CodeQL က မမြင်နိုင်သော sanitizer
အတွက် `false positive` (ရှေ့နမူနာ- `docs/security/ERROR_SANITIZATION.md`)။

---

## စမ်းသပ်မှု ပြန်လည်ကြိုးစားရေး မူဝါဒ (WS5.4, v3.8.49)

ပြန်လည်ကြိုးစားခြင်းကို runner တစ်ခုချင်းစီအလိုက်သာ သတ်မှတ်ပြီး၊ အားလုံးအပေါ် ခြုံငုံသက်ရောက်သည့် ကမ္ဘာလုံးဆိုင်ရာ မူဝါဒအဖြစ် မည်သည့်အခါမျှ မသတ်မှတ်ပါ — ခြုံငုံပြန်လည်ကြိုးစားခြင်းသည် အမှန်တကယ်ဖြစ်ပေါ်သော regression များကို မမြင်နိုင်သည့် flake များအဖြစ် ပြောင်းလဲပစ်သည်-

| Runner           | မူဝါဒ                                                                                                                                                                                                              | အကြောင်းရင်း                                                                                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Playwright (e2e) | CI တွင်သာ `retries: 1`၊ `trace: on-first-retry` နှင့်အတူ                                                                                                                                                           | Browser/network အချိန်ကိုက်မှုသည် အမှန်တကယ် မခန့်မှန်းနိုင်ပါ၊ trace ပါသော ပြန်လည်ကြိုးစားမှုတစ်ကြိမ်က flake ကို စစ်ဆေးဖော်ထုတ်နိုင်သည့် artifact အဖြစ် ပြောင်းပေးသည် |
| Vitest           | ကမ္ဘာလုံးဆိုင်ရာ ပြန်လည်ကြိုးစားမှု လုံးဝမရှိပါ။ flake ဖြစ်ကြောင်း သက်သေပြပြီးသော စမ်းသပ်မှုကို test တစ်ခုချင်းအလိုက် ပြန်လည်ကြိုးစားရန် အတိအလင်း သတ်မှတ်ရမည် (diff တွင် မြင်နိုင်ပြီး PR တွင် ပြန်လည်သုံးသပ်ရမည်) | quarantine စာရင်းကို repo ထဲတွင် ထားရှိပြီး မည်သည့်အခါမျှ မမြင်နိုင်အောင် မလုပ်ပါ                                                                                     |
| node:test (unit) | မည်သည့်အခါမျှ ပြန်လည်မကြိုးစားပါ                                                                                                                                                                                   | မတည်ငြိမ်သော unit test သည် စမ်းသပ်မှုထဲရှိ bug ဖြစ်သည် — ပြင်ဆင်ပါ၊ နောက်တစ်ကြိမ် ကံစမ်းပြီး မပြေးပါနှင့်                                                             |

flake telemetry ရရှိလာပြီးနောက် ရည်မှန်းထားသော SLO များ (WS5.2/5.3)- စမ်းသပ်မှုတစ်ခုလျှင် flake နှုန်း <1%
("ယခုချက်ချင်းပြင်ဆင်ရန်" သတ်မှတ်ချက်)၊ pipeline တစ်ခုလျှင် pass နှုန်း ≥95%။ ၎င်းတို့သည် လုပ်ငန်းနယ်ပယ်ဆိုင်ရာ ကိုးကားတန်ဖိုးများသာဖြစ်ပြီး —
ကျွန်ုပ်တို့၏ ကိုယ်ပိုင်တိုင်းတာမှုများနှင့် နှိုင်းယှဉ်၍ ပြန်လည်ချိန်ညှိပါ။

## Release အဆင့် Ratchet Drift (WS5.5, v3.8.49)

PURE release tip ပေါ်တွင် ratchet တစ်ခု (ဖိုင်အရွယ်အစား၊ ရှုပ်ထွေးမှု၊ eslint သတိပေးချက်များ) regression ဖြစ်လာသောအခါ —
ဆိုလိုသည်မှာ merge များ၏ ပေါင်းစပ်မှုကြောင့် regression ဖြစ်ပြီး PR တစ်ခုတည်းက ၎င်း၏
ကိုယ်ပိုင် branch ပေါ်တွင် ထို regression ကို ပြန်လည်ဖြစ်ပေါ်စေနိုင်ခြင်းမရှိသောအခါ — ပြင်ဆင်မှုသည် **release captain က release
branch ပေါ်တွင် တစ်ကြိမ်သာ** လုပ်ဆောင်ရန် တာဝန်ရှိသည်- extraction/refactor ကို ဦးစားပေးပါ၊ မှတ်တမ်းတင်ထားသော
အကြောင်းပြချက် entry ရှိမှသာ baseline ကို ပြန်လည်သတ်မှတ်ပါ။ ပေါင်းစပ်မှုကြောင့်ဖြစ်သည့် drift ကို contributor PR ပေါ်သို့ မည်သည့်အခါမျှ
မတွန်းပို့ပါနှင့်၊ PR တစ်ခုချင်းစီအလိုက်လည်း baseline ကို မည်သည့်အခါမျှ ပြန်လည်မသတ်မှတ်ပါနှင့် (ထိုသို့လုပ်ခြင်းသည် အမှန်တကယ်ဖြစ်သော regression များကို ဖုံးကွယ်သည်)။ ဦးစွာ ခွဲခြားစစ်ဆေးပါ- သင်၏ PR ကြောင့် ဖြစ်သည်ဟု မယူဆမီ
probe worktree တစ်ခုထဲရှိ pure tip ကို အသုံးပြု၍ မအောင်မြင်မှုကို ပြန်လည်ဖြစ်ပေါ်စေပါ။

## Ratchet လျှော့ချမှုများကို စုဆောင်းသိမ်းဆည်းခြင်း — အောက်သို့ ဦးတည်ချက် (#8584)

ratchet သည် တစ်ဝက်သာ အလိုအလျောက်ဖြစ်ပြီး၊ အလိုအလျောက်ဖြစ်နေသည့်အပိုင်းကလည်း မှားယွင်းသည့်အပိုင်းဖြစ်သည်။ cap ကို **မြှင့်တင်ခြင်း** သည်
ဆယ်စက္ကန့်သာကြာသော manual JSON ပြင်ဆင်မှုဖြစ်ပြီး မအောင်မြင်နေသော PR ကို အမြန်ဆုံး ပြန်လည်လုပ်ဆောင်နိုင်စေသည့် နည်းလမ်းဖြစ်သည်။
cap တစ်ခုကို **လျှော့ချခြင်း** အတွက်မူ တစ်စုံတစ်ဦးက `--update` ကို run ပြီး ရလဒ်ကို commit လုပ်ရန်လိုသည် — ထို့အပြင်
`bank-ratchet-shrinks` job မပေါ်ပေါက်မီအထိ မည်သည့် workflow ကမျှ ထိုသို့ run မလုပ်ခဲ့ပါ။ တိုင်းတာတွေ့ရှိရသော အကျိုးဆက်
(2026-07-25)- frozen file 18 ခုသည် file အသစ်အတွက် သတ်မှတ်ထားသော လိုင်း 800 cap အောက် သို့မဟုတ် ၎င်းနှင့်ညီမျှသော အခြေအနေသို့ ရောက်ရှိပြီးဖြစ်သော်လည်း၊ အဆိုးဆုံးမှာ
132× (`src/shared/validation/schemas.ts` တွင် လိုင်း 19 သာရှိသော်လည်း cap 2,523 ထားရှိခြင်း) ဖြစ်သည်၊
complexity ceiling သည် rebaseline မှတ်စု ~37 ခုအတွင်း `1794 → 2169` သို့ တက်သွားပြီး လျှော့ချမှုမှာ တိတိကျကျ တစ်ကြိမ်သာ
(−1) ရှိခဲ့သည်၊ ထို့အပြင် "နောက် cycle တွင် `--update` ဖြင့် တင်းကျပ်မည်" ဟု 31 ကြိမ်ရေးသားခဲ့သော်လည်း တစ်ကြိမ်သာ
အကောင်အထည်ဖော်ခဲ့သည်။ ၎င်းကို ဖြစ်ပေါ်စေခဲ့သော code ထက် ပို၍ကြာရှည်တည်ရှိသည့် cap သည် ပြီးစီးသွားသော
decomposition တစ်ခုစီကို ထို file ကို နောက်တစ်ကြိမ် ပြင်ဆင်သူအတွက် တိုးချဲ့ခွင့်အဖြစ် တိတ်တဆိတ် ပြောင်းလဲပေးသည်။

`nightly-release-green.yml` → job **`bank-ratchet-shrinks`** သည် ထို loop ကို ပိတ်ပေးသည်-

|                |                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Run သည့်အချိန် | `schedule` (တစ်ရက်လျှင် 3×) + `workflow_dispatch` — ရည်ရွယ်ချက်ရှိရှိ **`push` မဟုတ်ပါ**                                  |
| တိုင်းတာမှု    | အမြင့်ဆုံး `release/vX.Y.Z`၊ `release-green` နှင့် တူညီသော resolution + injection guard                                   |
| ရေးသားမှု      | `check:file-size --update` နှင့် `check:complexity-ratchets --update` (နှစ်ခုစလုံးသည် ဖွဲ့စည်းပုံအရ လျှော့ချရန်သာဖြစ်သည်) |
| အတည်ပြုမှု     | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                                                  |
| ပေးပို့မှု     | release branch ကို ရည်ညွှန်းသည့် အမြဲတမ်း လက်ရှိအခြေအနေဖြစ်သော PR တစ်ခု — force-update လုပ်ပြီး၊ ထပ်ခါတလဲလဲ မဖန်တီးပါ     |

Banking ကို push တစ်ခုချင်းစီအလိုက် မလုပ်ဘဲ batch အလိုက် လုပ်ဆောင်ခြင်းမှာ latency လိုအပ်ချက်မရှိသောကြောင့်ဖြစ်သည် (လျှော့ချမှုကို
8h အတွင်း bank လုပ်နိုင်လျှင် လုံလောက်သည်)။ merge campaign များအတွင်း merge တစ်ခုချင်းစီအလိုက် run လျှင် PR branch ကို အကြိမ်ကြိမ်
ပြန်လည်တည်ဆောက်ရပြီး အကြိမ်တိုင်း ESLint အပြည့်အစုံ scan လုပ်ရသည့် ကုန်ကျစရိတ်ရှိမည်။ Detection ကို
push (`release-green`) ပေါ်တွင် ဆက်ထားပြီး banking ကိုသာ batch လုပ်သည်။

### ဘေးကင်းရေး အတည်ပြုကိရိယာ

job သည် လူကိုယ်တိုင် ကြီးကြပ်ခြင်းမရှိဘဲ baseline များသို့ ရေးသားသောကြောင့် `verify-ratchet-bank.mjs` ကသာ
ထိုလုပ်ဆောင်ချက်ကို လက်ခံနိုင်စေသည်။ ၎င်းသည် `--update` ပြီးနောက် tree ကို `HEAD` နှင့် diff လုပ်ပြီး၊ ပြောင်းလဲမှုတိုင်းသည်
အောက်ပါအမျိုးအစားများထဲမှ တစ်ခုမဟုတ်ပါက **မည်သည့် commit မျှ မရှိမီ job ကို ရပ်တန့်ကာ**
PR လုံးဝ မဖွင့်ပါ-

- `frozen` / `testFrozen` numeric entry တစ်ခုကို **လျှော့ချခြင်း** သို့မဟုတ် **ဖယ်ရှားခြင်း**
- `complexity-baseline.json` → `count` ကို **လျှော့ချခြင်း**
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` ကို **လျှော့ချခြင်း**

အခြားမည်သည့်အရာမဆို မအောင်မြင်ပါ- ကိန်းဂဏန်းတစ်ခုကို မြှင့်တင်ခြင်း၊ entry တစ်ခုထည့်ခြင်း၊ `cap`/`testCap` ကို ပြောင်းလဲခြင်း သို့မဟုတ်
`_rebaseline_*` မှတ်စုတစ်ခုကို ဖျက်ခြင်း/ပြန်လည်ရေးသားခြင်း (ထိုမှတ်စုများသည် ceiling တစ်ခုစီ ရှိနေရသည့်အကြောင်းရင်းအတွက် audit trail ဖြစ်ပြီး
file entry များနှင့်အတူ တူညီသော `frozen` object ထဲတွင် သိမ်းဆည်းထားသည်)။ cap ကို မြှင့်တင်နိုင်သော bot သည် လက်ရှိအခြေအနေထက်
ပိုဆိုးမည်မှာ သေချာသည်။ Regression guard- `tests/unit/verify-ratchet-bank.test.ts`။

job သည် `release/*` သို့ မည်သည့်အခါမျှ push မလုပ်ပါ — လူတစ်ဦးက PR ကို merge လုပ်ရသောကြောင့် မှားယွင်းသည့် တိုင်းတာမှုတစ်ခုသည်
ပြန်လည်သုံးသပ်ခြင်းမရှိဘဲ အတည်မဖြစ်နိုင်ပါ။

## ခွင့်ပြုစာရင်း မူဝါဒ

ယခင်ရှိပြီးသား ချိုးဖောက်မှုများကြောင့် မအောင်မြင်နိုင်သော gate တိုင်းသည် ပြောင်းလဲမှုမရှိအောင် ထိန်းထားသည့် ခွင့်ပြုစာရင်း
(ဥပမာ၊ `KNOWN_STALE_DOC_REFS`, `KNOWN_MISSING`, `KNOWN_RAW_SQL`) ကို အသုံးပြုသည်။ မူဝါဒမှာ-

**အရင်းခံအကြောင်းရင်းကို ပြင်ဆင်ပါ။ ချိုးဖောက်မှုသည် ယခင်ကတည်းက ရှိနေပြီး
တူညီသော PR အတွင်း မပြင်ဆင်နိုင်သည့်အခါမှသာ ခွင့်ပြုစာရင်းကို အသုံးပြုပါ။**

ခွင့်ပြုစာရင်းတစ်ခုသို့ entry ထည့်သွင်းသည့်အခါ-

1. အကြောင်းပြချက်ပါသည့် comment တစ်ခု ထည့်သွင်းပါ။
2. ခြေရာခံ issue ကို ရည်ညွှန်းပါ (ဥပမာ၊ `// #3498 — အဆင့် ၂ လုပ်ဆောင်ချက်၊ အကောင်အထည်မဖော်ရသေးပါ`)။
3. ချိုးဖောက်မှုကို ပြင်ဆင်သည့် PR တစ်ခုတည်းတွင် ထို entry ကို ဖယ်ရှားပါ — လက်ရှိ ချိုးဖောက်မှုတစ်ခုကို
   တားဆီးပေးခြင်းမရှိတော့သည့် ခေတ်မမီသော entry သည်လည်း ချို့ယွင်းချက်တစ်ခုဖြစ်သည် (အကောင်အထည်ဖော်ပြီးပါက 6A.3 stale-enforcement သည်
   သက်ဆိုင်ရာအရာမရှိတော့သည့် ခွင့်ပြုစာရင်း entry ကြောင့် gate ကို မအောင်မြင်စေမည်)။

စမ်းသပ်မှုများ ပိုမိုမြန်ဆန်စွာ အောင်မြင်စေရန် ခွင့်ပြုစာရင်း entry များကို **မထည့်ပါနှင့်**။ အဆက်မပြတ် ကြီးထွားနေသော
ခွင့်ပြုစာရင်းနှင့်အတူ အောင်မြင်နေသည့် gate သည် အရည်အသွေးရှိသည်ဟူသော မှားယွင်းသည့် ယုံကြည်မှုကို ဖြစ်စေသည်။

### သင့် PR တွင် gate တစ်ခု မအောင်မြင်သည့်အခါ

1. **gate output ကို ဂရုတစိုက်ဖတ်ပါ** — မည်သည့် file သို့မဟုတ် symbol က စည်းမျဉ်းကို ချိုးဖောက်ခဲ့ကြောင်း အတိအကျ ဖော်ပြထားသည်။
2. **ချိုးဖောက်မှုကို ပြင်ဆင်ပါ** — gate အများစုသည် code မှန်ကန်သည်နှင့် အောင်မြင်သည့် တိကျသေချာသော filesystem စစ်ဆေးမှုများ ဖြစ်သည်။
3. **ချိုးဖောက်မှုသည် ယခင်ကတည်းက ရှိနေပါက** (ဆိုလိုသည်မှာ သင်က စတင်ဖြစ်ပေါ်စေခဲ့ခြင်း မဟုတ်သော်လည်း ယခုအခါ gate ၏
   စစ်ဆေးမှုတွင် ပါဝင်လာခြင်း)- အကြောင်းပြချက် comment နှင့် ခြေရာခံ issue တို့ပါသည့် ခွင့်ပြုစာရင်း entry တစ်ခုကို ထည့်ပါ။
4. **gate သည် ratchet ဖြစ်ပါက** (coverage၊ ESLint သတိပေးချက်များ၊ ထပ်နေမှု၊ ရှုပ်ထွေးမှု)-
   သင်၏ ပြောင်းလဲမှုကြောင့် တိုင်းတာချက် ပိုမိုဆိုးရွားသွားသည်။ အရင်းခံပြဿနာကို ပြင်ဆင်ပါ၊ သို့မဟုတ် ပြောင်းလဲမှုကို ရည်ရွယ်ချက်ရှိရှိ လုပ်ထားပြီး
   တိုင်းတာချက် ကျဆင်းမှုကို လက်ခံနိုင်ပါက (အလွန်ရှားပါးသော အခြေအနေတွင်) `npm run quality:ratchet -- --update` ကို လုပ်ဆောင်ပါ —
   သို့သော် အကြောင်းရင်းကို PR ဖော်ပြချက်တွင် မှတ်တမ်းတင်ပါ။
5. **အကြံပြုချက်ပေးသည့် gate များ** (`continue-on-error: true`) သည် အချက်အလက်ပေးရန်သာ ဖြစ်သည် — ၎င်းတို့သည်
   merge လုပ်ခြင်းကို မတားဆီးသော်လည်း CI အကျဉ်းချုပ်တွင် ပေါ်လာမည်။ သို့သော်လည်း ၎င်းတို့ကို ပြင်ဆင်ပါ။

---

## Gate အသစ်တစ်ခု ထည့်သွင်းခြင်း

1. `scripts/check/check-<name>.mjs` (သို့မဟုတ် `.ts`) ကို ဖန်တီးပါ။ မူဝါဒ gate များသည် 0/1 ဖြင့် ထွက်သည်။
   Ratchet ပုံစံ gate များသည် `collect-metrics.mjs` မှတစ်ဆင့် တိုင်းတာချက်တစ်ခုကို `quality-metrics.json` သို့ ထုတ်ပေးသည်။
2. `"check:<name>": "node scripts/check/check-<name>.mjs"` ကို `package.json` တွင် ထည့်ပါ။
3. `.github/workflows/ci.yml` အတွင်း သင့်လျော်သော job အောက်တွင် ၎င်းကို ချိတ်ဆက်ပါ
   (မူဝါဒ → `lint` သို့မဟုတ် `docs-sync-strict`; ratchet → `quality-gate`)။
4. ၎င်းတွင် ခွင့်ပြုစာရင်းတစ်ခု ပါဝင်ပါက ခေတ်မမီတော့သော entry များကို အလိုအလျောက် ရှာဖွေနိုင်စေရန်
   `scripts/check/lib/allowlist.mjs` မှ `reportStaleEntries()` ကို အသုံးပြုပါ။
5. gate ၏ ရှာဖွေစစ်ဆေးမှု logic ကို လွှမ်းခြုံသည့် စမ်းသပ်မှုတစ်ခုကို `tests/unit/build/` တွင် ရေးပါ။
6. ဤစာတမ်းကို အပ်ဒိတ်လုပ်ပါ (သက်ဆိုင်ရာ job ဇယားတွင် row တစ်ခု ထည့်ပါ)။

---

## Agent ကိရိယာများ- LSP-in-the-loop (ရွေးချယ်အသုံးပြုနိုင်)

CI gate များအပြင် OmniRoute တွင် **ရွေးချယ်အသုံးပြုနိုင်သော** `agent-lsp` scaffold
(project အဆင့် `.mcp.json`၊ Fase 7 Task 15) ပါရှိသည်။ coding agent များအတွက် TypeScript language server ကို ဖော်ထုတ်ပေးရန် `.mcp.json`
ကို ဖန်တီးပါ။ ထိုသို့ဖြင့် ၎င်းတို့သည် code မရေးမီ symbol များ /
diagnostic များကို ဖြေရှင်းနိုင်မည်ဖြစ်သည် — ၎င်းသည် မရှိသည့် symbol များကို ဖန်တီးမိခြင်းကြောင့် ဖြစ်သော error များကို အရင်းအမြစ်မှ လျှော့ချပေးသည့်
`typecheck:core` ၏ compile-before-claim တွဲဖက်တစ်ခုဖြစ်သည်။ ၎င်းကို ရည်ရွယ်ချက်ရှိရှိ
အလိုအလျောက် မတင်ထားပါ (MCP↔LSP bridge ကို သင်ကိုယ်တိုင် ရွေးချယ်ပြီး အတည်ပြုရမည်)။ ပျက်နေသော entry တစ်ခုသည်
ချိတ်ဆက်မှု error ကိုသာ log လုပ်ပြီး session များကို မည်သည့်အခါမျှ မပျက်စေပါ။

---

## ကျိုးကြောင်းဆီလျော်အောင် ပြန်လည်စီစဉ်ရန် ကျန်ရှိစာရင်း (ROI ပြန်လည်သုံးသပ်မှု — အဆင့် 9 လှိုင်း 3)

ဤစာရင်းကို 2026-06-17 ရက်နေ့တွင် `ci.yml` နှင့် တိုက်ဆိုင်စစ်ဆေးထားသည် (ယခင်ဗားရှင်းတွင်
`audit:deps`, `check:tracked-artifacts`, `check:lockfile`, `check:licenses`,
`check:dead-code`, `check:cognitive-complexity`, `check:type-coverage`,
`check:codeql-ratchet`, `check:pr-evidence` တို့ မပါရှိခဲ့ပါ)။ တိုက်ဆိုင်စစ်ဆေးထားသော အစုကို
ROI ပြန်လည်သုံးသပ်ရာမှ အောက်ပါ ကျိုးကြောင်းဆီလျော်အောင် ပြန်လည်စီစဉ်နိုင်မည့် အရာများကို
ဖော်ထုတ်ခဲ့သည်။ **ပေါင်းစည်းမှုများသည် စက်ပိုင်းဆိုင်ရာ CI အပြောင်းအလဲများဖြစ်ပြီး၊
ပြောင်းလဲဖွင့်ခြင်း/ဖယ်ရှားခြင်းများသည် အော်ပရေတာအတွက် သီးသန့်ထားသော မူဝါဒဆုံးဖြတ်ချက်များ
ဖြစ်သည်။** အောက်ပါအရာများအနက် မည်သည့်အရာကိုမျှ အသုံးမချရသေးပါ။

**အထက်တွင် မှတ်တမ်းမတင်ရသေးသောအရာများလည်း ရှိသည်** (အကြံပြုအဆင့်၊ အချက်ပြမှုနည်း):
`docs-lint` job (markdownlint + Vale၊ job တစ်ခုလုံး `continue-on-error`) နှင့် သီးခြား scanner
workflow များဖြစ်သော `semgrep.yml` / `codeql.yml` / `scorecard.yml` တို့ဖြစ်သည်။
`semgrepFindings: 0` သည် `quality-baseline.json` ထဲတွင် ရှိသော်လည်း `ci.yml` ထဲရှိ
ပိတ်ဆို့တားဆီးသော ratchet တစ်ခုနှင့် ချိတ်ဆက်ထားခြင်းမရှိပါ — လက်ရှိတွင် ဤ metric သည်
သီးခြားပြတ်တောက်နေသည်။

### ပေါင်းစည်းခြင်း / ထပ်နေမှုဖယ်ရှားခြင်း (စက်ပိုင်းဆိုင်ရာ၊ အန္တရာယ်ပိုနည်း)

အဆိုပြုထားသည့် အရာတစ်ခုစီကို 2026-06-17 ရက်နေ့ရှိ တကယ့် gate အခြေအနေနှင့် တိုက်ဆိုင်၍
အတည်ပြုထားသည် (ယုံကြည်သော်လည်း ပြန်လည်စစ်ဆေးခြင်း)။ “သိသာထင်ရှား” သော ပေါင်းစည်းမှု
အများအပြားသည် အမှန်တကယ်တွင် ကြွေးကျန်များကို ဖုံးကွယ်ထားကြောင်း တွေ့ရှိရသဖြင့်
**တိုက်ရိုက်အစားထိုးအသုံးပြုနိုင်သော သန့်ရှင်းသည့် ပေါင်းစည်းမှုများ မဟုတ်ပါ**။

- **`check:docs-sync` ကို နှစ်ကြိမ် လုပ်ဆောင်နေသည်** — `lint` job ထဲတွင် သီးခြားလုပ်ဆောင်ပြီး `check:docs-all` (`docs-sync-strict`) နှင့် husky pre-commit hook ထဲတွင် ထပ်မံလုပ်ဆောင်သည်။ ✅ **ပြီးစီးပြီ** — သီးခြား `lint` invocation ကို ဖယ်ရှားပြီးဖြစ်သည်။
- **CVE စကင်ဖတ်ခြင်း** — ❌ **သန့်ရှင်းစွာ ပေါင်းစည်း၍ မရပါ။** `audit:deps` သည် high/critical CVE တစ်ခုခုရှိလျှင် ချက်ချင်း မအောင်မြင်စေသည်။ `check:vuln-ratchet` (osv) သည် baseline နှင့် နှိုင်းယှဉ်၍ _ပိုမိုဆိုးရွားလာမှု_ ရှိမှသာ မအောင်မြင်စေသည် (လက်ရှိတွင် 1 MODERATE)။ အဓိပ္ပာယ်သတ်မှတ်ချက်များ မတူညီပါ — `audit:deps` ကို ဖယ်ရှားပါက absolute high/critical gate ကို ဆုံးရှုံးမည်ဖြစ်သည်။ နှစ်ခုလုံးကို ဆက်လက်ထားရှိပါ။
- **Cycle ရှာဖွေခြင်း** — ❌ **သန့်ရှင်းစွာ ပေါင်းစည်း၍ မရပါ။** `check:circular-deps` (dpdm) က **cycle 91 ခု** ကို အစီရင်ခံထားသည် (ထို့ကြောင့်ပင် advisory အဖြစ်ထားရှိခြင်းဖြစ်သည်)။ ၎င်းတို့ကို ဦးစွာမဖြေရှင်းဘဲ blocking အဖြစ် မြှင့်တင်၍မရသည့်အပြင် green အခြေအနေရှိပြီး ရွေးချယ်စီစဉ်ထားသော `check:cycles` ထက် scope ပိုကျယ်သည်။ `check:cycles` ကို blocking အဖြစ် ဆက်လက်ထားရှိပါ။ dpdm cycle 91 ခုကို ဖြေရှင်းခြင်းသည် သီးခြား backlog ဖြစ်သည်။
- **ရှုပ်ထွေးမှု** — ✅ **ပြီးစီးပြီ** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`)။ ESLint walk တစ်ကြိမ်တည်းဖြင့် ruleId အလိုက် ရေတွက်သဖြင့် cyclomatic+max-lines နှင့် cognitive baseline များကို သီးခြားဆက်လက်ထိန်းသိမ်းထားသည်။ တစ်ခုချင်းစီဖြစ်သော `check:complexity` / `check:cognitive-complexity` ကို local `--update` အတွက် ဆက်လက်ထားရှိသည်။
- **`/api` anti-hallucination** — ✅ **ပြီးစီးပြီ** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`)။ `src/app/api` ကို FS inventory တစ်ကြိမ်တည်း ပြုလုပ်ပြီး openapi-routes + docs-symbols တို့က သီးခြားစီ ဆက်လက်အစီရင်ခံသည်။ တစ်ခုချင်းစီကို local run များအတွက် ဆက်လက်ထားရှိသည်။
- **`check:node-runtime` ကို job 11 ခုတွင် လုပ်ဆောင်နေသည်** — ⚠️ **ROI နည်းသည်။** တစ်ခုစီသည် သီးခြား runner ဖြစ်ပြီး check သည် <1s သာ ကြာသည်။ စုစုပေါင်းချွေတာနိုင်သည့်အချိန်မှာ ~10s ဖြစ်ကာ job တစ်ခုချင်းစီအတွက် စရိတ်နည်းသော guard ကို ဆုံးရှုံးရမည့်အခြေအနေနှင့် နှိုင်းယှဉ်လျှင် ပြောင်းလဲရသည့် အားထုတ်မှုနှင့် မထိုက်တန်ပါ။
- **CI lint ပေါ်ရှိ `typecheck:noimplicit:core`** — ✅ **lint job မှ ဖယ်ရှားပြီးဖြစ်သည်** (ယခင်က advisory `continue-on-error` ဖြစ်ခဲ့သည်)။ blocking type surface မှာ `typecheck:core` + `check:type-coverage` ဖြစ်သည်။ Local script ကို ဆက်လက်ထားရှိသည်။

### ပြောင်းလဲဖွင့်ရန် / ဆုံးဖြတ်ရန် (အော်ပရေတာ မူဝါဒ)

- `check:openapi-security-tiers` (advisory) — ❌ **သန့်ရှင်းစွာ ပြောင်းလဲဖွင့်၍ မရပါ။** ၎င်းသည် 0 ဖြင့် ထွက်သော်လည်း `LOCAL_ONLY_API_PREFIXES` အောက်ရှိ `traffic-inspector` route အများအပြားတွင် `x-loopback-only: true` annotation မရှိကြောင်း သတိပေးသည်။ ၎င်းကို အတင်းအကျပ်လိုက်နာစေရန် ဦးစွာ အဆိုပါ annotation များကို `openapi.yaml` ထဲသို့ ထည့်ရမည်။
- `typecheck:noimplicit:core` (advisory) — blocking ဖြစ်သော `check:type-coverage` ratchet က အများစုကို လွှမ်းခြုံထားပြီးဖြစ်သည်။ ratchet အဖြစ် ပြောင်းလဲဖွင့်ပါ သို့မဟုတ် ထပ်နေသော ဒုတိယ `tsc` pass ကို ဖယ်ရှားပါ။
- `test:vitest:ui` (ယခု **blocking**) — ယခင်ကတည်းကရှိသော failure များကို `vitest.config.ts` ထဲတွင် `// #8618` tracking comment များဖြင့် အတိအလင်း ဖယ်ထုတ်ထားသည်။ failure အသစ်များက job ကို မအောင်မြင်စေမည်။
- `check:secrets` (gitleaks၊ မှတ်တမ်းတင်ထားသော false-positive 3 ခုတွင် ရပ်တန့်ထားသည့် blocking ratchet) — 0 သို့ရောက်ရှိရန် 3 ခုကို allowlist ထဲ ထည့်ပါ သို့မဟုတ် advisory အဆင့်သို့ လျှော့ချပါ။ GitHub native secret-scanning + `check:public-creds` နှင့် ထပ်နေသည်။
- `check:pr-evidence` (blocking၊ PR-body စာသားကို greps လုပ်သည်) — false-positive ဖြစ်နိုင်ခြေ မြင့်မားသည်။ ဖယ်ရှားပါက Hard Rule #18 ကို အတင်းအကျပ်လိုက်နာစေမှု အားနည်းသွားမည်ဖြစ်သောကြောင့် ၎င်းသည် အမှန်တကယ် မူဝါဒဆိုင်ရာ ဆုံးဖြတ်ချက်ဖြစ်သည်။
- `semgrep` (advisory standalone) — OWASP family များအတွက် CodeQL နှင့် ထပ်နေသည်။ ၎င်း၏ baseline ကို ratchet တစ်ခုနှင့် ချိတ်ဆက်ပါ သို့မဟုတ် ဖယ်ရှားပါ။

---

## ဆက်စပ် စာရွက်စာတမ်းများ

- ထောက်ပံ့ရေးကွင်းဆက် (မူလဇာစ်မြစ်၊ SBOM၊ Trivy၊ Scorecard): [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — key-set တူညီမှု စစ်ဆေးရေးဂိတ်

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`၊ job `i18n-ui-coverage`)။
`src/i18n/messages/<locale>.json` တစ်ခုစီ၏ leaf key အစုကို `en.json` နှင့် နှိုင်းယှဉ်ပြီး key ကို မည်သည့်အချိန်တွင် ထည့်ခဲ့သည်ဖြစ်စေ ပျောက်နေသော သို့မဟုတ် ပိုနေသော leaf တစ်ခုခုရှိပါက မအောင်မြင်စေပါသည်။ `__MISSING__:` placeholder များကို ရှိနေသည်ဟု သတ်မှတ်သည် (၎င်းတို့၏ အကြောင်းအရာသည် ratio gate က ကိုင်တွယ်ရမည့်ကိစ္စ ဖြစ်သည်)။ ၎င်းသည် diff အခြေပြု/ရာခိုင်နှုန်းအခြေပြု gate နှစ်ခု၏ အပြည့်အဝ ဖြည့်စွက်ချက်ဖြစ်သည်- `check-ui-keys-coverage` သည် locale တစ်ခုစီအတွက် အနည်းဆုံး 80 % ကို သတ်မှတ်ထားသည် (`~13,000` ထဲမှ key 43 ခု ပျောက်နေသော်လည်း 99.7 % ဟု ပြသနေဆဲဖြစ်သည်)၊ `check-new-key-coverage` ကမူ PR တစ်ခုက `en.json` သို့ ထည့်သွင်းသည့် key များကိုသာ ဆုံးဖြတ်သည်။ locale batch တစ်ခုကို ၎င်း၏ branch ခွဲထုတ်သည့်နေ့ရှိ `en.json` မှ ထုတ်လုပ်ပြီး base က key များကို ဆက်လက်ထည့်သွင်းနေစဉ် ရက်အတန်ကြာ ဘာသာပြန်ပါသည်။ batch PR ကိုယ်တိုင်က key မထည့်သဖြင့် batch 1 (#13044) ကို locale ကိုးခုတွင် key 43 ခု လိုနေသည့်အခြေအနေဖြင့် ပေါင်းစည်းခဲ့ချိန်နှင့် batch 2 (#13660) ကို locale ရှစ်ခုတွင် key 10 ခု လိုနေသည့်အခြေအနေဖြင့် ပေါင်းစည်းခဲ့ချိန် (2026-09-15) တို့တွင် sibling gate နှစ်ခုစလုံးက မည်သည့်သတိပေးချက်မျှ မပေးခဲ့ပါ။ အနီရောင်ဖြစ်နေသော စစ်ဆေးမှုကို
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers` ဖြင့် ပြင်ဆင်ပါ။ `extra` leaf ဆိုသည်မှာ source မှ ၎င်းကို ဖယ်ရှားထားခြင်းဖြစ်သည် — locale မှလည်း ဖျက်ပါ။ `--warn` သည် စစ်ဆေးမှုကို မအောင်မြင်စေဘဲ အစီရင်ခံပေးသည်။
`--catalog=cli` သည် `bin/cli/locales` ပေါ်တွင် အလားတူ နှိုင်းယှဉ်မှုကို လုပ်ဆောင်သည် (`npm run i18n:check-keys:cli`)။ အဆင့်နှစ်ခုစလုံးသည် job `i18n-ui-coverage` တွင် ရှိသည်။

#### `check-new-key-coverage` — key အသစ် i18n စစ်ဆေးရေးဂိတ်

`check-ui-value-drift` ၏ sibling ဖြစ်သည်။ ထို gate က ဘာသာပြန်ချက်များကို မွမ်းမံမထားဘဲ အင်္ဂလိပ် value တစ်ခုကို **ပြန်လည်ရေးသားခဲ့ခြင်း** ကို ရှာဖွေပြီး၊ ဤ gate ကမူ locale အချို့တွင် လုံးဝ မရရှိခဲ့သော အင်္ဂလိပ် key တစ်ခုကို **ထည့်သွင်းခဲ့ခြင်း** ကို ရှာဖွေသည်။

`check-ui-keys-coverage` သည် ဤအမျိုးအစားကို မမြင်နိုင်ပါ။ ၎င်းသည် locale တစ်ခုစီအလိုက် ရာခိုင်နှုန်း အနည်းဆုံးသတ်မှတ်ချက်ကိုသာ အတည်ပြုပြီး `~13,000` ထဲမှ key ဆယ့်တစ်ခု ပျောက်နေသော်လည်း coverage သည် 99.9% တွင် ရှိနေဆဲဖြစ်သည်။ ဘာသာစကားတစ်ခုစီ၏ ရာခိုင်နှုန်းဖြင့် "ဤ feature ကို ဘာသာမပြန်ဘဲ ဖြန့်ချိခဲ့သည်" ဟူသော အခြေအနေကို မဖော်ပြနိုင်ပါ — feature တစ်ခုလုံးကို စာသားတစ်ခုမျှမပါဘဲ locale အသစ်တစ်ခုတွင် ထည့်သွင်းနိုင်သော်လည်း ကိန်းဂဏန်းမှာ လုံးဝ ပြောင်းလဲမည်မဟုတ်ပါ။

၎င်းက မှတ်တမ်းတင်ထားသည့် ဖြစ်ရပ်မှာ- Orchestration Canvas ၏ Phase 3 တွင် ထိုအချိန်က ရှိနေခဲ့သော locale 42 ခုလုံးအတွက် ၎င်း၏ key ဆယ့်တစ်ခုကို ဘာသာပြန်ခဲ့သည်။ နာရီအနည်းငယ်အကြာတွင် EU-language batch (#13044) က repo ကို locale 51 ခုအထိ တိုးချဲ့ခဲ့ပြီး အသစ်ဝင်လာသော ကိုးခု (`el`, `et`, `ga`, `hr`, `lt`, `lv`, `mt`, `sl`, `sr`) သည် ထို key များကို လုံးဝ မရရှိခဲ့ပါ။ `deepMergeFallback` သည် ပျောက်နေသော key အတွက် အင်္ဂလိပ်စာသားဖြင့် အစားထိုးသောကြောင့် ပျက်ကွက်မှုပုံစံမှာ UI အလွတ်ဖြစ်ခြင်းမဟုတ်ဘဲ ဘာသာမပြန်ထားသော UI ဖြစ်ခြင်းဖြစ်သည် — အမှန်တကယ်ဖြစ်ပေါ်သော်လည်း တည်ဆောက်ပုံအရ မည်သည့်သတိပေးချက်မျှ မရှိပါ။

၎င်း၏ sibling ကဲ့သို့ပင် ဤ gate သည် **diff-aware** ဖြစ်ပြီး merge base ရှိ အင်္ဂလိပ်စာသားကို working tree နှင့် နှိုင်းယှဉ်သောကြောင့် ယခင်ကတည်းက ရှိနေသော ကွာဟချက်များကို မပြောင်းလဲဘဲ ထားနိုင်ပြီး gate ကို စတင်အသုံးပြုရန် migration လုပ်ရန် မလိုအပ်ခဲ့ပါ။ ယာယီရှောင်လွှဲနည်း-
`__MISSING__:<english>` သည် runtime ကို မှန်ကန်စွာ ဆက်လက်လုပ်ဆောင်စေပြီး ဘာသာပြန်ခြင်းကို နောက်သို့ရွှေ့ဆိုင်းပေးသည်။ `vi` တွင် placeholder များကို ခွင့်မပြုပါ (`tests/unit/i18n-vi-completeness.test.ts`)၊ ထို့ကြောင့် အမှန်တကယ် ဘာသာပြန်ချက်တစ်ခု လိုအပ်သည်။

#### `check-vitest-exclusions` — ဆိုင်းငံ့ထားသော test စစ်ဆေးရေးဂိတ်

`vitest.config.ts` ၏ `exclude` စာရင်းထဲရှိ file တစ်ခုသည် အမှန်တကယ် မလုပ်ဆောင်သည့် test တစ်ခုဖြစ်သော်လည်း tree ကို ဖတ်ရှုသူအတွက်မူ coverage ရှိသကဲ့သို့ ထင်ရသည်။ File ခြောက်ဆယ့်နှစ်ခုသည် comment
`// #8618 — pre-existing failure; remove this exclusion when fixed` နောက်တွင် စုပုံလာခဲ့သည်။ Issue #8618 ကို
2026-08-11 တွင် ပိတ်ခဲ့သော်လည်း ၎င်းက ခြေရာခံခဲ့သော စာရင်းမှာ entry 45 ခုမှ 62 ခုအထိ တိုးလာခဲ့ပြီး အသစ်တစ်ခုစီသည် ပိတ်ပြီးသား issue ကို ညွှန်းဆိုသော comment ကို ဆက်လက်အမွေဆက်ခံခဲ့သည်။ နောက်ဆုံးတွင် file တစ်ခုချင်းစီအလိုက် စာရင်းကို တိုင်းတာစစ်ဆေးခဲ့သောအခါ (#13204)၊ **62 ခုအနက် 51 ခုသည် source ကို ပြောင်းလဲမှုတစ်စုံတစ်ရာ မပြုလုပ်ဘဲ လက်ရှိ tree တွင် အောင်မြင်ခဲ့သည်**။

ဤ gate သည် အမှန်တကယ် file တစ်ခုသို့ ညွှန်းဆိုနိုင်သော exclusion တိုင်းကို (a) ခြေရာခံရေး issue တစ်ခု အမည်တပ်ရန်နှင့် (b) တိုင်းတာထားသော အခြေအနေနှင့်အတူ `config/quality/vitest-exclusions.json` တွင် ပါဝင်ရန် လိုအပ်စေသည်။ ထို့ကြောင့် exclusion တစ်ခု ထည့်သွင်းခြင်းသည် entry 60 ပါ array တစ်ခုအတွင်း နောက်ထပ် line တစ်ကြောင်း ထပ်တိုးခြင်းမဟုတ်ဘဲ သီးခြား file တစ်ခုရှိ review ပြုလုပ်နိုင်သော diff တစ်ခု ဖြစ်လာသည်။ ၎င်းသည် ချန်လှပ်ထားသော test များကို တမင်တကာ ပြန်လည်မလုပ်ဆောင်ပါ — ထိုသို့လုပ်ရန် `~10` မိနစ်ခန့် ကုန်ကျပြီး periodic job တစ်ခုတွင် လုပ်ဆောင်သင့်သည်။ inventory သည် တစ်ခုချင်းစီကို နောက်ဆုံးတိုင်းတာခဲ့သည့် အချိန်ကို မှတ်တမ်းတင်ထားသည်။
