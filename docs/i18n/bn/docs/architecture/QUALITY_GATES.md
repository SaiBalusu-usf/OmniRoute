# Quality Gates Reference (বাংলা)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

এই নথিটি OmniRoute-এর সব CI গুণমান গেটের প্রামাণ্য রেফারেন্স।
এতে প্রতিটি গেট, সেটি কী যাচাই করে, কোন CI জবে চলে, এটি র্যাচেট বেসলাইন নাকি
পাস/ফেল নীতি ব্যবহার করে এবং এটি বিল্ড ব্লক করে নাকি কেবল পরামর্শমূলক—এসব বর্ণনা করা হয়েছে।

সংক্ষিপ্ত সারাংশ এবং অনুমোদন-তালিকা নীতির জন্য `AGENTS.md`-এর "Quality Gates & Ratchets"
বিভাগটি দেখুন। একই সিস্টেমের সমালোচনামূলক মূল্যায়ন, পরিপক্বতার শ্রেণিবিন্যাস এবং
টুল-স্বাধীন পুনরাবৃত্তি পরিকল্পনার জন্য
[গুণমান গেট প্লেবুক](../ops/QUALITY_GATE_PLAYBOOK.md) দেখুন।

---

## গেটের তালিকা (~90টি স্ক্রিপ্ট)

স্ক্রিপ্টগুলো `scripts/check/` (নীতি গেট) এবং `scripts/quality/` (র্যাচেট ইঞ্জিন)-এর অধীনে থাকে।
CI-এর একক নির্ভরযোগ্য উৎস হলো `.github/workflows/ci.yml`।

### রিলিজ PR দ্রুত-পথ (`quality.yml`)

`.github/workflows/quality.yml` `release/**` লক্ষ্যকারী PR-গুলোতে চলে। এটি পাথ-ফিল্টার করা
দ্রুত গেটের মাধ্যমে অবদানকারীদের ব্রাঞ্চের অগ্রগতি সচল রাখে, পাশাপাশি কোড পরিবর্তনের জন্য
একটি পরামর্শমূলক প্রোডাকশন-বিল্ড সংকেত দেয়:

| জব                                               | পরিধি                                                                                                                                                                                                                        | ব্লকিং                                                                                               |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `Build (advisory)`                               | নন-ড্রাফট কোড PR এবং Mergify কিউ ব্রাঞ্চ; Node 24, `npm-ci-retry`, `check:node-runtime`, `OMNIROUTE_USE_TURBOPACK=1` সহ `npm run build`; কোনো ডাউনস্ট্রিম গুণমান জব এটি ব্যবহার করে না বলে আর্টিফ্যাক্ট আপলোড করা হয় না     | **পরামর্শমূলক** (`continue-on-error: true`; এক সপ্তাহ স্থিতিশীল রিলিজ-PR রান হওয়ার পর সরিয়ে ফেলুন) |
| `Docs Gates (fast-path)`                         | ডকস/কোড PR; API ডকস রেফারেন্স এবং docs-all                                                                                                                                                                                   | হ্যাঁ                                                                                                |
| `Fast Quality Gates`                             | কোড PR; স্ট্যাটিক পরীক্ষা, টাইপচেক, ড্যাশবোর্ড টাইপচেক, প্রভাবিত ইউনিট টেস্ট                                                                                                                                                 | হ্যাঁ                                                                                                |
| `Forgotten sibling tests`                        | কোড PR; পরিবর্তিত মডিউল থেকে স্ট্যাটিক কনজিউমার ও সম্ভাব্য সিবলিং টেস্ট পর্যন্ত ট্রেস করা হয়; ব্যারেল ও ডায়নামিক-ইমপোর্ট পাথগুলো রেফারেন্সযুক্ত অনুমোদন-তালিকা ব্যতিক্রমসহ পরামর্শমূলক ডায়াগনস্টিক হিসেবে রিপোর্ট করা হয় | **পরামর্শমূলক**                                                                                      |
| `Vitest (fast-path)`                             | কোড PR; দ্রুত vitest স্যুট                                                                                                                                                                                                   | হ্যাঁ                                                                                                |
| `Unit Tests fast-path`                           | কোড PR; 4-শার্ড ইউনিট স্যুট                                                                                                                                                                                                  | হ্যাঁ                                                                                                |
| `No new ESLint warnings`                         | কোড PR; সাপ্রেশন-সচেতন লিন্ট গার্ড                                                                                                                                                                                           | নিজস্ব উৎসের জন্য হ্যাঁ, ফর্কের জন্য পরামর্শমূলক                                                     |
| `Merge integrity (changelog + generated skills)` | নন-ড্রাফট PR; চেঞ্জলগ এবং জেনারেট করা স্কিলের সিঙ্ক                                                                                                                                                                          | নিজস্ব উৎসের জন্য হ্যাঁ, ফর্কের জন্য পরামর্শমূলক                                                     |

#### ভুলে যাওয়া সিবলিং টেস্টের রিপোর্ট

`npm run check:forgotten-sibling-tests` টেস্ট-ইমপ্যাক্ট ম্যাপের পেছনের ইমপোর্ট রিজলভারটি পুনরায় ব্যবহার করে।
প্রতিটি পরিবর্তিত প্রোডাকশন মডিউলের জন্য, সম্ভাব্য টেস্টটি পুল-রিকোয়েস্টের ডিফে অনুপস্থিত থাকলে এটি নির্ধারিত
`changed module/symbol -> static consumer -> candidate sibling test` চেইন রিপোর্ট করে।
কোনো ব্লকিং রোলআউটের আগে ক্যালিব্রেশনের জন্য Markdown সারাংশ এবং JSON ফলাফল
`forgotten-sibling-tests` ওয়ার্কফ্লো আর্টিফ্যাক্ট হিসেবে সংরক্ষণ করা হয়।

ব্যারেল রি-এক্সপোর্ট এবং ডায়নামিক ইমপোর্ট কেবল রেজোলিউশন ডায়াগনস্টিক; এগুলো কখনোই
ব্লকিং ফাইন্ডিং তৈরি করে না। পর্যালোচিত ব্যতিক্রমগুলো
`config/quality/forgotten-sibling-allowlist.json`-এ থাকে। প্রতিটি এন্ট্রিতে কনজিউমার এবং সম্ভাব্য
টেস্টের নাম, একটি নির্দিষ্ট যুক্তি এবং একটি GitHub ইস্যু বা পুল রিকোয়েস্টের লিংক থাকতে হবে। ত্রুটিপূর্ণ এন্ট্রি
ফেল-ক্লোজড হয়। কোনো ব্যতিক্রম মুছে ফেলা সম্ভাব্য টেস্ট বা `.skip`/`.todo` যোগ করা ডিফকে দমন করতে পারে না;
অ্যাসারশন দুর্বল করা এবং অন্যান্য আড়াল করার বিষয় স্বাধীনভাবে ব্লকিং
`check:test-masking` গেটের আওতাধীন থাকে।

### জব: `lint`

`main`-এ পাঠানো প্রতিটি PR-এ চলে। ব্যর্থ হলে মার্জ ব্লক করে।

| স্ক্রিপ্ট (`npm run ...`)         | যা যাচাই করে                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | ব্লকিং                                      |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `check:node-runtime`              | Node.js সংস্করণটি সমর্থিত সীমার মধ্যে রয়েছে                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | হ্যাঁ                                       |
| `check:cycles`                    | সার্কুলার ইমপোর্ট — সব `src/` + `open-sse/` মডিউল                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | হ্যাঁ                                       |
| `check:route-validation:t06`      | সব রুটে Zod স্কিমা উপস্থিত আছে (Tier 6 নীতি)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | হ্যাঁ                                       |
| `check:any-budget:t11`            | `@ts-expect-error // any`-এর সংখ্যা নির্ধারিত সীমা অতিক্রম করে না (Tier 11 catraca)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | হ্যাঁ                                       |
| `check:provider-consistency`      | `providers.ts`-এর প্রতিটি প্রোভাইডারের জন্য `providerRegistry.ts`-এ একটি মিলযুক্ত এন্ট্রি রয়েছে (এবং উল্টোটিও, অনুমোদিত তালিকার মধ্যে)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | হ্যাঁ                                       |
| `check:model-lifecycle`           | হাতে রক্ষণাবেক্ষণ করা তিনটি রাউটিং টেবিল চেক-ইন করা লাইফসাইকেল স্ন্যাপশটের (#11503) সঙ্গে সামঞ্জস্যপূর্ণ থাকে: `FITNESS_TABLE` (`taskFitness.ts`) এমন কোনো অবসরপ্রাপ্ত id-কে স্কোর করে না যেটিতে `REGISTRY` রাউট করতে পারে; প্রতিটি `BUILT_IN_ALIASES` টার্গেট `REGISTRY`-তে উপস্থিত এবং অবসরপ্রাপ্ত-id স্ন্যাপশটে অনুপস্থিত; `REGISTRY`-তে এখনও থাকা প্রতিটি অবসরপ্রাপ্ত id ফরওয়ার্ড করা হয়েছে অথবা `allowedRetiredInCatalog`-এ তালিকাভুক্ত; এবং কোনো `DEFAULT_DEGRADATION_MAP` সোর্স বা টার্গেট ওই স্ন্যাপশটে অবসরপ্রাপ্ত হিসেবে উপস্থিত নয়। এটি প্রমাণ করে না যে কোনো মডেল বর্তমানে একটি সক্রিয় আপস্ট্রিম দ্বারা পরিবেশিত হচ্ছে। অফলাইন — `config/quality/model-lifecycle.json`-এর সঙ্গে তুলনা করে, যা হাতে `npm run quality:refresh-model-lifecycle` দিয়ে রিফ্রেশ করা হয় (নেটওয়ার্ক; CI-তে সংযুক্ত নয়)। `allowedRetiredInCatalog` হলো ক্রমহ্রাসমান র্যাচেট: কেবল একটি ট্র্যাকিং ইস্যুসহ এন্ট্রি যোগ করুন। | হ্যাঁ                                       |
| `check:fetch-targets`             | ক্লায়েন্ট-সাইড `src/`-এর প্রতিটি `fetch("/api/...")` একটি বাস্তব `route.ts`-এ রিজলভ করে                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | হ্যাঁ                                       |
| `check:deps`                      | রিপোজিটরির প্রতিটি `package.json` জুড়ে থাকা সব `npm install`-যোগ্য ডিপেন্ডেন্সি `dependency-allowlist.json`-এ রয়েছে; নতুন আনপিনড বা স্লপস্কোয়াটেড প্যাকেজ ফ্ল্যাগ করা হয়                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | হ্যাঁ                                       |
| `audit:deps`                      | `npm audit` (রুট + electron) — কোনো উচ্চ/গুরুতর অ্যাডভাইজরি নেই (osv `check:vuln-ratchet`-এর সঙ্গে ওভারল্যাপ করে; Rationalization Backlog দেখুন)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | হ্যাঁ                                       |
| `check:lockfile`                  | `package-lock.json`-এর অখণ্ডতা — https রেজিস্ট্রি, অখণ্ডতা হ্যাশ, কোনো হোস্ট ওভাররাইড নেই                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | হ্যাঁ                                       |
| `check:licenses`                  | প্রোডাকশন ডিপেন্ডেন্সির জন্য SPDX লাইসেন্সের অনুমোদিত তালিকা                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | হ্যাঁ                                       |
| `check:tracked-artifacts`         | কোনো বিল্ড আর্টিফ্যাক্ট / কমিট করা `node_modules` সিমলিংক নেই (husky pre-commit-এও চলে; pre-push ইচ্ছাকৃতভাবে হালকা — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | হ্যাঁ                                       |
| `check:vitest-exclusions`         | প্রতিটি Vitest এক্সক্লুশনে একটি ট্র্যাকিং ইস্যুর উল্লেখ থাকে এবং সেটি `config/quality/vitest-exclusions.json`-এ উপস্থিত থাকে (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | হ্যাঁ                                       |
| `check:file-size`                 | কোনো সোর্স ফাইল প্রতি-এক্সটেনশন সীমা অতিক্রম করে না (র্যাচেট: বড় স্থিরীকৃত ফাইলগুলো `frozen` তালিকায়)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | হ্যাঁ                                       |
| `check:error-helper`              | এক্সিকিউটর/হ্যান্ডলারের ত্রুটি রেসপন্সে `buildErrorBody()` / `sanitizeErrorMessage()` ব্যবহার করা হয় (কঠোর নিয়ম #12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | হ্যাঁ                                       |
| `check:migration-numbering`       | মাইগ্রেশন SQL ফাইলগুলো ধারাবাহিকভাবে নম্বরযুক্ত, কোনো ফাঁক বা ডুপ্লিকেট নেই                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | হ্যাঁ                                       |
| `check:public-creds`              | `publicCreds.ts`-এর বাইরে কোনো লিটারাল OAuth `client_id`/`client_secret` বা Firebase Web কী নেই (কঠোর নিয়ম #11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | হ্যাঁ                                       |
| `check:db-rules`                  | `src/lib/db/` মডিউলের বাইরে কোনো কাঁচা SQL নেই; `localDb.ts` থেকে কোনো ব্যারেল-ইমপোর্ট নেই (কঠোর নিয়ম #2/#5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | হ্যাঁ                                       |
| `check:known-symbols`             | ডিসপ্যাচ টেবিলে নিবন্ধিত প্রোভাইডার এক্সিকিউটর, রাউটিং কৌশল এবং ট্রান্সলেটরগুলো ডিস্কের ফাইলগুলোর সঙ্গে মেলে — কোনো অনাথ বা অঘোষিত সিম্বল নেই                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | হ্যাঁ                                       |
| `check:route-guard-membership`    | চাইল্ড প্রসেস তৈরি করা প্রতিটি রুট `isLocalOnlyPath()` দ্বারা শ্রেণিবদ্ধ (কঠোর নিয়ম #15/#17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | হ্যাঁ                                       |
| `check:test-discovery`            | রিপোজিটরির প্রতিটি `*.test.ts` / `*.spec.ts` ফাইল অন্তত একটি টেস্ট রানার দ্বারা সংগ্রহ করা হয় (র্যাচেট: `test-discovery-baseline.json`-এর অনাথ তালিকা কেবল ছোট হতে পারে)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | হ্যাঁ                                       |
| `check:agent-skills-sync`         | জেনারেট করা agent-skills আর্টিফ্যাক্টগুলো তাদের সোর্স ক্যাটালগের সঙ্গে মেলে (কোনো বিচ্যুতি নেই)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `check:provider-asset-provenance` | প্রোভাইডারের লোগো/অ্যাসেটে নথিভুক্ত উৎস-সংক্রান্ত এন্ট্রি রয়েছে                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `lint:json`                       | JSON কনফিগ ফাইলগুলো পার্স হয় এবং রিপোজিটরির লিন্ট নিয়ম পূরণ করে                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `typecheck:core`                  | ত্রুটি ছাড়া TypeScript কম্পাইলেশন (শুধু পরামর্শমূলক সতর্কতা)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | হ্যাঁ                                       |
| `typecheck:noimplicit:core`       | কঠোর `noImplicitAny` — ভবিষ্যৎমুখী; আগে থেকেই থাকা অনেক কল সাইটে এখনও অ্যানোটেশন প্রয়োজন                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | **পরামর্শমূলক** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | `src/app/(dashboard)/**`-এ সীমাবদ্ধ `tsc` (#7033) — `typecheck:core`-এর বাছাইকৃত 27-ফাইলের অনুমোদিত তালিকায় কোনো dashboard TSX অন্তর্ভুক্ত নেই এবং `next build`-ও কখনো এটি টাইপ-চেক করে না (`next.config.mjs`-এ `ignoreBuildErrors: true` সেট করা আছে), তাই সেখানে অনাথ-আইডেন্টিফায়ার রিগ্রেশনগুলো (#6625/#6909) CI-তে অদৃশ্য ছিল। স্থিরীকৃত প্রতি-ফাইল/প্রতি-TS-কোড গণনার বেসলাইনের (`config/quality/dashboard-typecheck-baseline.json`, `check:known-symbols`-এর মতো একই স্টেল-এনফোর্সমেন্ট প্যাটার্ন) সঙ্গে ডিফ করে — বেসলাইনে থাকা সংখ্যার চেয়ে কেবল নতুন ত্রুটিই গেট ব্যর্থ করে; আগে থেকে থাকা কোনো ত্রুটি ঠিক করা হলে `--update` দিয়ে র্যাচেট কমান।                                                                                                                                                                                                                                                         | হ্যাঁ                                       |

### জব: `quality-gate`

`test-coverage`-এর পরে চলে। ব্যর্থ হলে মার্জ ব্লক করে।

| স্ক্রিপ্ট                    | যা যাচাই করে                                                                                                                                                                       | ব্লকিং                      |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| `quality:collect`            | `quality-metrics.json` তৈরি করে (ESLint সতর্কতার সংখ্যা, একত্রিত শার্ড রিপোর্ট থেকে কভারেজ)                                                                                        | হ্যাঁ (র্যাচেটের আপস্ট্রিম) |
| `quality:ratchet`            | `quality-baseline.json`-এর প্রতিটি মেট্রিকের অবনতি হয়নি (ESLint সতর্কতা ≤ বেসলাইন; কভারেজ ≥ বেসলাইন)                                                                              | হ্যাঁ                       |
| `check:duplication`          | কোড ডুপ্লিকেশন (jscpd@4) `quality-baseline.json`-এর বেসলাইন অতিক্রম করে না                                                                                                         | হ্যাঁ                       |
| `check:complexity`           | ফাইল-স্তরের সাইক্লোম্যাটিক জটিলতা সর্বোচ্চ সীমা অতিক্রম করে না (মূল ESLint `complexity` + `max-lines-per-function`)                                                                | হ্যাঁ                       |
| `check:cognitive-complexity` | কগনিটিভ জটিলতা র্যাচেট (`eslint-plugin-sonarjs`) — পৃথক ESLint পাস; CI উভয়টিকে একত্রিত করে একক `check:complexity-ratchets` ধাপ হিসেবে চালায়                                      | হ্যাঁ                       |
| `check:dead-code`            | অব্যবহৃত এক্সপোর্ট / ফাইল র্যাচেট (knip) বেসলাইনের তুলনায় অবনতি ঘটায় না                                                                                                          | হ্যাঁ                       |
| `check:compression-budget`   | কম্প্রেশন বেঞ্চমার্ক বাজেট — প্রতি-ইঞ্জিন টোকেন-সাশ্রয়ের ন্যূনতম সীমার অবনতি হওয়া চলবে না                                                                                        | হ্যাঁ                       |
| `check:type-coverage`        | টাইপযুক্ত কোডের শতাংশের র্যাচেট (`type-coverage`) অবনতি ঘটায় না; এটি মূলত `typecheck:noimplicit:core`-কে অন্তর্ভুক্ত করে                                                          | হ্যাঁ                       |
| `check:codeql-ratchet`       | খোলা CodeQL অ্যালার্টের সংখ্যা বৃদ্ধি পায় না (`gh api` দিয়ে পড়ে; টোকেন ছাড়া নিরাপদে স্কিপ করে) — রিফ্রেশের সময়সূচি এবং ম্যানুয়াল ট্রিগারের জন্য নিচের "CodeQL র্যাচেট" দেখুন | হ্যাঁ                       |

### জব: `quality-extended`

সম্পূর্ণ জবটি পরামর্শমূলক (`continue-on-error: true`)। npm-ভিত্তিক র্যাচেটগুলো
বাস্তবে চলে; বাহ্যিক স্ক্যানারগুলো `gh release download` দিয়ে ইনস্টল হয় এবং কোনো
বাইনারি তখনও অনুপস্থিত থাকলে নিজে থেকেই স্কিপ করে (exit 0)।

| স্ক্রিপ্ট                | যা যাচাই করে                                                                                                                                                                             | ব্লকিং          |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `check:circular-deps`    | কোনো সার্কুলার ডিপেন্ডেন্সি নেই (dpdm)                                                                                                                                                   | **পরামর্শমূলক** |
| `check:bundle-size`      | বান্ডলের আকার সর্বোচ্চ সীমা অতিক্রম করে না                                                                                                                                               | **পরামর্শমূলক** |
| `check:secrets`          | সিক্রেট স্ক্যানিং (gitleaks) — বাইনারি অনুপস্থিত থাকলে স্কিপ করে                                                                                                                         | **পরামর্শমূলক** |
| `check:vuln-ratchet`     | ডিপেন্ডেন্সির দুর্বলতাগুলোর (osv-scanner) অবনতি ঘটে না — বাইনারি অনুপস্থিত থাকলে স্কিপ করে                                                                                               | **পরামর্শমূলক** |
| `check:workflows`        | ওয়ার্কফ্লো লিন্ট (actionlint + zizmor) — বাইনারিগুলো অনুপস্থিত থাকলে স্কিপ করে                                                                                                          | **পরামর্শমূলক** |
| `check:openapi-breaking` | বেস ব্রাঞ্চের তুলনায় পাবলিক API চুক্তিতে (`openapi.yaml`) ব্রেকিং পরিবর্তন (oasdiff) — `openapiBreaking=N` তৈরি করে; oasdiff অনুপস্থিত থাকলে বা বেস স্পেক নির্ণয় করা না গেলে স্কিপ করে | **পরামর্শমূলক** |

### জব: `docs-sync-strict`

`main`-এ প্রতিটি PR-এর সময় চলে। ব্যর্থ হলে মার্জ ব্লক করে।

| স্ক্রিপ্ট                      | যা যাচাই করে                                                                                                                                      | ব্লকিং                          |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| `check:docs-all`               | নিচের ৬টি সাব-গেট ক্রমানুসারে চালানো মেটা-গেট                                                                                                     | হ্যাঁ                           |
| ↳ `check:docs-sync`            | CHANGELOG / OpenAPI / llm.txt সংস্করণের সামঞ্জস্য                                                                                                 | হ্যাঁ                           |
| ↳ `check:docs-counts`          | গদ্যে উল্লেখ করা সংখ্যা (প্রোভাইডারের সংখ্যা, মাইগ্রেশনের সংখ্যা ইত্যাদি) প্রকৃত সংখ্যার র্যাচেট উইন্ডোর মধ্যে রয়েছে কিনা                        | হ্যাঁ                           |
| ↳ `check:env-doc-sync`         | `.env.example`-এর প্রতিটি env var কোনো docs টেবিলে নথিভুক্ত আছে কিনা এবং বিপরীতটিও সত্য কিনা                                                      | হ্যাঁ                           |
| ↳ `check:deprecated-versions`  | docs-এ কোনো অবচিত সংস্করণ স্ট্রিং নেই                                                                                                             | হ্যাঁ                           |
| ↳ `check:doc-links`            | docs-এর অভ্যন্তরীণ markdown লিংক বাস্তব ফাইলে সমাধান হয় কিনা (`[text]`/`(path)` ফর্ম)                                                            | হ্যাঁ                           |
| ↳ `check:fabricated-docs`      | docs-এ উল্লিখিত রুট, env var, CLI কমান্ড, হুকের নাম ও ফাইল পাথ codebase-এ বিদ্যমান কিনা। `--strict`-এর মাধ্যমে হার্ড গেট; ফ্ল্যাগ ছাড়া সফট-ফেইল। | হ্যাঁ (CI-তে `--strict` দ্বারা) |
| `check:cli-i18n`               | CLI কমান্ড স্ট্রিং সব i18n locale ফাইলে উপস্থিত কিনা                                                                                              | হ্যাঁ                           |
| `check:openapi-coverage`       | OpenAPI spec প্রকৃত রুটগুলোর অন্তত র্যাচেট-করা ন্যূনতম সীমা কভার করে কিনা                                                                         | হ্যাঁ                           |
| `check:openapi-security-tiers` | `openapi.yaml`-এর নিরাপত্তা স্তরের অ্যানোটেশনগুলো `routeGuard.ts`-এর শ্রেণিবিন্যাসের সঙ্গে সামঞ্জস্যপূর্ণ কিনা                                    | **পরামর্শমূলক**                 |
| `check:openapi-routes`         | `openapi.yaml`-এর প্রতিটি পাথ একটি বাস্তব `route.ts`-এ সমাধান হয় কিনা (অবাস্তব তথ্য প্রতিরোধ)                                                    | হ্যাঁ                           |
| `check:docs-symbols`           | `docs/**/*.md`-এর প্রতিটি `/api/...` রেফারেন্স একটি বাস্তব `route.ts`-এ সমাধান হয় কিনা (অবাস্তব তথ্য প্রতিরোধ)                                   | হ্যাঁ                           |
| `i18n translation drift`       | i18n locale ফাইলের অনূদিত না হওয়া key — শুধু সতর্কতা                                                                                             | **পরামর্শমূলক**                 |

### জব: `i18n-ui-coverage`

| স্ক্রিপ্ট                         | যা যাচাই করে                                                                                                                                                                                  | ব্লকিং          |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `check-ui-keys-coverage` (ইনলাইন) | UI i18n key কভারেজ ≥ 65% কিনা                                                                                                                                                                 | হ্যাঁ           |
| `check-ui-value-drift` (ইনলাইন)   | পুনর্লিখিত কোনো ইংরেজি **value**-এর কারণে কোনো পুরোনো অনুবাদ রয়ে যায়নি কিনা                                                                                                                 | হ্যাঁ           |
| `check-new-key-coverage` (ইনলাইন) | একটি **নতুন** ইংরেজি key প্রতিটি locale-এ পৌঁছায় কিনা                                                                                                                                        | হ্যাঁ           |
| `check-translation-ratio`         | প্রতি locale-এ প্রকৃত অনুবাদের অনুপাত (allowlist-এর বাইরে ইংরেজির সঙ্গে অভিন্ন / placeholder / অনুপস্থিত leaf) অবশ্যই `config/quality/i18n-translation-baseline.json` + slack অতিক্রম করবে না | **পরামর্শমূলক** |

`fetch-depth: 0` প্রয়োজন — value-drift গেটটি merge base-এর বিপরীতে `en.json` diff করে।

#### `check-ui-value-drift` — পুরোনো-অনুবাদ গেট

এটি সেই একটি i18n regression শনাক্ত করে, যা অন্য গেটগুলো কাঠামোগতভাবে দেখতে পারে না: কোনো ইংরেজি value
পুনর্লিখিত হলেও _পূর্ববর্তী_ ইংরেজি থেকে তৈরি অনুবাদগুলো রয়ে যায়, ফলে
অ-ইংরেজি ব্যবহারকারীরা আত্মবিশ্বাসী ভাষায় লেখা, কিন্তু এখন ভুল, এমন কপি পড়তে থাকেন।

এটি বাস্তবেই রিলিজ হয়েছিল। Antigravity
লগইন সহায়ক যুক্ত হওয়ার সময় (#5203) `oauthModal.googleOAuthWarning` পুনর্লিখিত হয়েছিল; **৪৩টি locale-এর মধ্যে ৩৯টিতে** অপারেটরদের "সম্পূর্ণ URL কপি করে নিচে পেস্ট করতে" বলা টেক্সট রয়ে গিয়েছিল — এমন একটি প্রবাহ, যা ওই প্রোভাইডারের ক্ষেত্রে সম্পন্ন করা যায় না। এটি
#8463 পর্যন্ত নজরে আসেনি, কারণ:

- `sync-ui-keys` কেবল **অনুপস্থিত** key ব্যাকফিল করে, **পুরোনো** key কখনো নয়;
- `check-ui-keys-coverage` key-এর _উপস্থিতি_ গণনা করে, তাই পুরোনো অনুবাদও কভার করা হয়েছে বলে স্কোর পায়;
- `check-translation-drift` `docs/i18n/<locale>/**.md` documentation mirror ট্র্যাক করে —
  এটি কখনোই `src/i18n/messages/*.json` পড়ে না। 2026-09 পুনঃসিঙ্কের পর থেকে `docs-sync-strict` জবে ব্লকিং:
  কোনো মূল doc সম্পাদনা করুন → `npm run i18n:run -- --files=<doc>` (section-level, সাশ্রয়ী)।

**Diff-সচেতন, baseline-সমর্থিত নয়।** এটি merge base-এর `en.json`-কে working tree-এর সঙ্গে তুলনা করে; যেসব key-এর ইংরেজি value পরিবর্তিত হয়েছে, সেসবের জন্য এখনও অপরিবর্তিত translation ধারণকারী যেকোনো locale অচল বলে গণ্য হয়। এটি ইচ্ছাকৃতভাবে **আগে থেকে বিদ্যমান ঋণ স্থির রাখে** — দীর্ঘদিনের কোনো translation কোন পুরোনো ইংরেজি থেকে এসেছে তা একটি diff প্রকাশ করতে পারে না, তাই gate কেবল বর্তমান পরিবর্তনে স্পর্শ করা অংশই বিচার করে। বিকল্পটি (প্রতি-key hash baseline) তৈরি করতে একটি ~600 KB generated file লাগত, যা বিদ্যমান বৃহত্তম baseline-এর 3× এবং প্রতিটি i18n PR-এ পরিবর্তিত হতো।

এটি সন্তুষ্ট করার দুটি উপায়:

1. প্রভাবিত translation-গুলো হালনাগাদ করুন, অথবা
2. সেগুলোকে `__MISSING__:<new english>`-এ সেট করুন — তখন runtime সংশোধিত ইংরেজি পরিবেশন করে
   (`src/i18n/request.ts::deepMergeFallback`, #7258) এবং key-টি translation-এর জন্য queue-তে যুক্ত হয়।

string-টির **অর্থ** পরিবর্তিত হলে, **key-এর নাম পরিবর্তন করাকে** অগ্রাধিকার দিন: একটি নতুন key অচল translation উত্তরাধিকারসূত্রে পেতে পারে না। #8463-এ এই pattern-ই ব্যবহৃত হয়েছে।

```bash
npm run i18n:check-value-drift          # কঠোর (CI যা চালায়)
npm run i18n:check-value-drift:warn     # শুধু প্রতিবেদন
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

base catalog পড়া না গেলে (base ref ছাড়া shallow clone), `check-openapi-breaking`-এর আচরণ অনুসরণ করে `SKIP reason=base-unresolved` সহ 0 exit করে।

### Job: `i18n`

সম্পূর্ণ i18n validation matrix (প্রতি locale-এ একটি job)। পুরো job-টি পরামর্শমূলক।

| Script                          | যা যাচাই করে                              | Blocking                                               |
| ------------------------------- | ----------------------------------------- | ------------------------------------------------------ |
| `validate_translation.py quick` | প্রতি locale-এর translation-এর সম্পূর্ণতা | **পরামর্শমূলক** (পুরো job-এ `continue-on-error: true`) |

### Job: `pr-test-policy`

শুধু pull request-এ চলে।

| Script                 | যা যাচাই করে                                                                                                                                   | Blocking |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `check:pr-test-policy` | `src/`, `open-sse/`, `electron/`, অথবা `bin/`-এর production code পরিবর্তনকারী PR-এ অবশ্যই test যোগ বা হালনাগাদ করতে হবে (Hard Rule #8)         | হ্যাঁ    |
| `check:test-masking`   | পরিবর্তিত test file-গুলো net assert count কমায় না বা `assert.ok(true)` tautology যোগ করে না                                                   | হ্যাঁ    |
| `check:pr-evidence`    | PR body-তে পরিবর্তনের জন্য test/VPS evidence উল্লেখ করা হয়েছে (PR-এর গদ্য grep করে Hard Rule #18-কে স্বয়ংক্রিয় করে — ভঙ্গুর, Backlog দেখুন) | হ্যাঁ    |

### Job: `test-vitest`

`build`-এর পরে চলে। ব্যর্থ হলে merge block করে।

| Suite            | যা যাচাই করে                                             | Blocking                                                                                                                         |
| ---------------- | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `test:vitest`    | MCP server (110 tools), autoCombo, cache — vitest runner | হ্যাঁ                                                                                                                            |
| `test:vitest:ui` | UI component test — vitest runner                        | **Blocking** — আগে থেকে বিদ্যমান failure-গুলো `vitest.config.ts`-এ স্পষ্টভাবে বাদ দেওয়া হয়েছে; নতুন failure হলে job ব্যর্থ হয় |

### রাত্রিকালীন workflow (নির্ধারিত, পরামর্শমূলক)

এগুলো cron schedule-এ (এবং `workflow_dispatch`-এর মাধ্যমে) চলে, PR-এ কখনোই নয়। সবগুলোই পরামর্শমূলক।

| Workflow               | যা যাচাই করে                                                                                                                                                    | Blocking        |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `nightly-property`     | random seed + উচ্চ run count সহ fast-check property test                                                                                                        | **পরামর্শমূলক** |
| `nightly-resilience`   | heap-growth gate, chaos fault-injection, k6 load/soak                                                                                                           | **পরামর্শমূলক** |
| `nightly-llm-security` | promptfoo injection guard (block mode) + garak probe (provider secret না থাকলে skip করা হয়)                                                                    | **পরামর্শমূলক** |
| `nightly-schemathesis` | `docs/openapi.yaml` ব্যবহার করে live OmniRoute-এর বিরুদ্ধে OpenAPI contract fuzzing (schemathesis) — spec violation / handle না করা 500 প্রকাশ করে (Fase 8 B.4) | **পরামর্শমূলক** |
| `nightly-mutation`     | দ্রুত unit lane-এর ওপর Stryker mutation-testing score — টিকে থাকা mutant দুর্বল assert প্রকাশ করে                                                               | **পরামর্শমূলক** |
| `nightly-compat`       | সমর্থিত `engines.node` range-গুলো জুড়ে Node engine compatibility matrix                                                                                        | **পরামর্শমূলক** |

---

## ভেলোসিটি পর্ব (2026-08-30 → v4.0 LTS): প্রতিটি বেসলাইন 20% শিথিল করা হয়েছে

মালিকের সিদ্ধান্ত (2026-08-30): v4.0 মডিউলারাইজেশন পর্যন্ত কারিগরি ঋণের সীমা ধরে রাখার চেয়ে
রিলিজের গতি বেশি গুরুত্বপূর্ণ। প্রতিটি **সংখ্যাসূচক** র্যাচেট বেসলাইন একটি
নিরীক্ষাযোগ্য ধাপে 20% শিথিল করা হয়েছে, এবং পর্বটি `config/quality/quality-baseline.json`-এ ঘোষণা করা হয়েছে:

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| কী পরিবর্তিত হয়েছে                                                                                                                                                                                | কোথায়                                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `metrics.*.value` — কম-হওয়া-ভালো এমন গণনা ×1.2, বেশি-হওয়া-ভালো এমন শতাংশ ÷1.2 (কভারেজের নিম্নসীমা 60 রাখা হয়েছে, `eslintErrors` 0-তেই আছে, `eslintWarnings` 0 → স্থিরীকৃত সাপ্রেশন সংখ্যার 20%) | `quality-baseline.json` (`_relax_velocity_2026_08_30` নোটে প্রতিটি আগে → পরে তালিকাভুক্ত আছে)          |
| `count` ×1.2 / `percentage` ×1.2                                                                                                                                                                   | `complexity-baseline.json`, `duplication-baseline.json`                                                |
| `cap`, `testCap`, প্রতিটি `frozen[*]` / `testFrozen[*]` লাইন সীমা ×1.2                                                                                                                             | `file-size-baseline.json`                                                                              |
| প্রতি-ফাইল / প্রতি-TS-কোড গণনা ×1.2                                                                                                                                                                | `api-typecheck-baseline.json`, `dashboard-typecheck-baseline.json`, `open-sse-typecheck-baseline.json` |
| `THRESHOLD` 36 → 30                                                                                                                                                                                | `scripts/check/check-openapi-coverage.mjs`                                                             |
| `_policy.requireTighten === false` হলে `--require-tighten` পরামর্শমূলক হয়ে যায়                                                                                                                   | `scripts/quality/check-quality-ratchet.mjs`                                                            |
| রাতের `bank-ratchet-shrinks` স্থগিত থাকে (এটি পরিমাপ করা সংকোচন সংরক্ষণ করে হেডরুম বাতিল করে দিত)                                                                                                  | `.github/workflows/nightly-release-green.yml`                                                          |

অনুমোদন-তালিকাগুলো (`eslint-suppressions.json`, `test-masking-allowlist.json`, `test-discovery-baseline.json`,
…) **বাজেট নয়** এবং এগুলো পরিবর্তন করা হয়নি। পাস/ফেল নীতির গেটগুলো (সিক্রেট, SQL নিয়ম,
ডকুমেন্টেশন/পরিবেশ চুক্তি, i18n সামঞ্জস্য, ইউনিট টেস্ট) অপরিবর্তিত — একটি লাল টেস্ট এখনও লাল টেস্টই।

**টুলিং**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — এককালীন
  শিথিলকরণ (`scripts/quality/relax-baselines.mjs`); একই নোট দিয়ে দ্বিতীয়বার চালাতে অস্বীকৃতি জানায়।
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  CI যেভাবে পরিমাপ করে সেভাবে প্রতিটি সংখ্যাসূচক গেট পরিমাপ করে এবং প্রতিটি গেটের অবশিষ্ট হেডরুম
  দেখায় (`scripts/quality/baseline-headroom.mjs`)। রাতের `baseline-headroom` জবটি চলমান ইস্যু
  **📈 বেসলাইন হেডরুম (ভেলোসিটি পর্ব)**-তে টেবিলটি পোস্ট করে এবং কোনো গেট তার সীমার 10%-এর
  মধ্যে থাকলে বা ইতিমধ্যে তা অতিক্রম করলে `headroom-alert` লেবেল যোগ করে। সেই ইস্যুটিই প্রাথমিক
  সতর্কতা: কোনো বাজেট কয়েক দিনের মধ্যে পূর্ণ হয়ে যাওয়ার অর্থ হলো শিথিলতাটি পুরো দল নয়, অল্প কয়েকটি
  PR ব্যবহার করছে — সমস্যাযুক্ত গেটের `_rebaseline_*` নোটগুলো দেখুন।

**নতুন-কোড মোড (Clean-as-You-Code) — 2026-08-30 থেকে, শুধু PR দ্রুত-পথে**

`pull_request` ইভেন্টে `quality.yml`, `check:file-size`, `check:complexity-ratchets` এবং
`check:dead-code`-এ `--base-ref <PR base SHA>` পাঠায়। এই মোডে গেটটি HEAD-কে মার্জ-বেসের সঙ্গে
**শুধু PR-টি যে ফাইলগুলো পরিবর্তন করেছে সেগুলোর মধ্যে সীমাবদ্ধ রেখে** তুলনা করে
(`scripts/check/newCodeMode.mjs`: মার্জ-বেসটি একটি অস্থায়ী `git worktree`-তে বাস্তবায়িত হয়,
ESLint/knip সেখানে এবং HEAD-এ চালানো হয়, তারপর প্রতি-ফাইলের গণনার পার্থক্য নির্ণয় করা হয়):

- **ব্লকিং** — PR-টি পরিবর্তিত ফাইলগুলোতে সাইক্লোম্যাটিক/কগনিটিভ লঙ্ঘন বা ডেড এক্সপোর্ট যোগ করেছে
  (লগে `complexityNewCode=`, `cognitiveComplexityNewCode=`, `deadExportsNewCode=`);
- **পরামর্শমূলক** — স্থিরীকৃত বেসলাইনের তুলনায় সামগ্রিক মোট সংখ্যা। উত্তরাধিকারসূত্রে পাওয়া ড্রিফট
  কখনো কোনো নির্দোষ PR-কে লাল করে না; রিলিজ সমন্বয়ের সময় ড্রিফটটি পুনরায় স্থিরীকৃত হয় এবং
  হেডরুম জব এটি পর্যবেক্ষণ করে।

`workflow_dispatch` রান, রিলিজ-গ্রিন সুইপ এবং রাতের হেডরুম জবের কোনো PR বেস নেই
এবং এগুলো পরম (সামগ্রিক) তুলনাই বজায় রাখে। কভারেজ, ডুপ্লিকেশন এবং টাইপ-কভারেজ আপাতত সামগ্রিকই
থাকে (এগুলোর টুল সস্তায় প্রতি-ফাইল ডিফ তৈরি করে না) — একই ব্যবস্থার সম্ভাব্য প্রার্থী।

**v4.0-এ পর্বটি বন্ধ করা (LTS = আগের চেয়েও কঠোর, শুধু "স্বাভাবিক অবস্থায় ফেরা" নয়)**

1. বিশুদ্ধ `release/v4.0.0` টিপে: রেকর্ডের জন্য `npm run quality:headroom --json`, তারপর
   `npm run quality:ratchet -- --update`, `check:file-size --update`,
   `check:complexity-ratchets --update`, `check:dead-code --update`, প্রতিটি typecheck গেটের
   `--update` চালান—প্রতিটি বেসলাইন পরিমাপ করা মানে নেমে আসবে।
2. `quality-baseline.json` থেকে `_policy` মুছে দিন (`--require-tighten` এবং রাতের
   ব্যাংকিং পুনরায় সক্রিয় করে), `check-openapi-coverage.mjs`-এ `THRESHOLD = 36` (বা বেশি) পুনঃস্থাপন করুন।
3. যেখানে মডিউলারাইজেশন সুফল দিয়েছে, সেখানে পরিমাপ করা মানের চেয়েও সীমা আরও কঠোর করুন: file-size `cap` আবার 1000
   (বা 800) করুন, coverage floor +5 করুন, এবং মডিউলারাইজ করা প্যাকেজগুলোর জন্য dead export 0 করুন।

## র্যাচেট বেসলাইন (`quality-baseline.json`)

র্যাচেট ইঞ্জিন (`scripts/quality/check-quality-ratchet.mjs`) `quality-baseline.json` পড়ে
এবং এটিকে সদ্য সংগৃহীত `quality-metrics.json`-এর সঙ্গে তুলনা করে। কোনো মেট্রিক তার epsilon-এর
সীমা ছাড়িয়ে অবনতি হলে বিল্ড ব্যর্থ হয়।

বর্তমানে ট্র্যাক করা মেট্রিকসমূহ:

| মেট্রিক               | দিক    | অর্থ                                   |
| --------------------- | ------ | -------------------------------------- |
| `eslintWarnings`      | `down` | ESLint সতর্কতার সংখ্যা বাড়তে পারবে না |
| `coverage.statements` | `up`   | স্টেটমেন্ট কভারেজ কমতে পারবে না        |
| `coverage.lines`      | `up`   | লাইন কভারেজ কমতে পারবে না              |
| `coverage.functions`  | `up`   | ফাংশন কভারেজ কমতে পারবে না             |
| `coverage.branches`   | `up`   | ব্রাঞ্চ কভারেজ কমতে পারবে না           |

প্রকৃত উন্নতির পর বেসলাইন আপডেট করতে:

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

`--update` ফ্ল্যাগটি বর্তমানে পরিমাপ করা মানগুলো `quality-baseline.json`-এ লেখে।
যে পরিবর্তনটি মেট্রিকের উন্নতি করেছে, তার সঙ্গে এই ফাইলটিও কমিট করুন। কোনো PR একটি
মেট্রিক উন্নত করলেও বেসলাইন আপডেট না করলে `--require-tighten` সেটি শনাক্ত করবে (ধাপ 6A.5,
বাস্তবায়ন অপেক্ষমাণ)।

### CodeQL র্যাচেট: রিফ্রেশের সময়সূচি ও ম্যানুয়াল ট্রিগার

`check:codeql-ratchet` **রিপোজিটরির অবস্থা পড়ে, যা একটি সময়সূচি অনুযায়ী রিফ্রেশ হয় — প্রতিটি PR-এ নয়।**
`gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup` রিপোর্ট করে
`state: configured`, `schedule: weekly`: এটি GitHub-এর default-setup স্ক্যান, প্রতিটি push-এর
বিশ্লেষণ নয়। ফলাফল: অ্যালার্ট সংশোধনকারী কোনো PR মার্জ হওয়ার পরও র্যাচেটটি
পরবর্তী নির্ধারিত স্ক্যান না চলা পর্যন্ত পুরোনো, বেশি সংখ্যাটিই পড়তে থাকে — তাই স্ক্যানটি হালনাগাদ না হওয়া
পর্যন্ত এটি প্রতিটি খোলা PR-এ, এমনকি সংশোধনকারী PR-এর নিজস্ব ফলো-আপগুলোতেও, অবনতি রিপোর্ট করে।

**ম্যানুয়াল রিফ্রেশ**: `gh workflow run codeql.yml --ref release/vX.Y.Z` বিশ্লেষণটি
পুনরায় চালায় এবং কয়েক মিনিটের মধ্যে অ্যালার্ট পুনঃপ্রকাশ করে। প্রথমে `.github/workflows/codeql.yml`
পড়ুন — এর হেডারে ব্যাখ্যা করা হয়েছে যে এটি কেবল `workflow_dispatch` **কারণ এটি
GitHub-এর "default setup"-এর সঙ্গে সংঘর্ষ করে** (`CodeQL analyses from advanced configurations cannot be
processed when the default setup is enabled`)। `push`/`pull_request`/
`schedule` ট্রিগার পুনঃস্থাপন করতে হলে প্রথমে **মালিকের পদক্ষেপ নেওয়া আবশ্যক**: Settings → Code security →
CodeQL: Default → Advanced। ওই পরিবর্তন ছাড়া কোনো `schedule:` ট্রিগার যোগ করবেন না — এটি
শুধু ব্যর্থ রান তৈরি করবে।

**সংখ্যা কমার পর বেসলাইন আরও কঠোর করুন** — `node scripts/check/check-codeql-ratchet.mjs
--update` নতুন পরিমাপ করা সংখ্যাটি `quality-baseline.json` →
`metrics.codeqlAlerts.value`-এ লেখে, ফলে র্যাচেটটি পুরোনো সর্বোচ্চ সীমায় ফিরে যাওয়া কোনো অবনতিকে
নীরবে অনুমতি দেয় না। কার্যকর উদাহরণ (2026-09-02/03): PR #12502 7টি প্রকৃত অ্যালার্ট
সংশোধন করেছে (পরিমাপ করা খোলা অ্যালার্ট 13 → 6); PR #12530 তার সঙ্গে সামঞ্জস্য রাখতে স্থিরীকৃত বেসলাইন 11 → 6-এ কঠোর করেছে; এরপর
অবশিষ্ট 6টি অ্যালার্ট-প্রতি যুক্তিসহ খারিজ করে খোলা অ্যালার্টের সংখ্যা 0-তে নামানো হয়েছিল।

**খারিজ করার সিদ্ধান্ত অপারেটরের (কঠোর নিয়ম #14)** — খারিজের মন্তব্যে প্রযুক্তিগত
যুক্তি নথিবদ্ধ না করে কখনো কোনো CodeQL অ্যালার্ট খারিজ করবেন না: upstream-protocol-এর
প্রয়োজনীয়তার জন্য `won't fix`, টেস্ট ফিক্সচারের জন্য `used in tests`, CodeQL শনাক্ত করতে পারে না এমন
sanitizer-এর জন্য `false positive` (নজির: `docs/security/ERROR_SANITIZATION.md`)।

---

## টেস্ট পুনঃচেষ্টা নীতি (WS5.4, v3.8.49)

পুনঃচেষ্টা প্রতিটি রানারের জন্য আলাদা, কখনোই সর্বব্যাপী বৈশ্বিক নয় — সর্বব্যাপী পুনঃচেষ্টা প্রকৃত রিগ্রেশনকে
অদৃশ্য ফ্লেকে পরিণত করে:

| রানার            | নীতি                                                                                                                              | কারণ                                                                                                                       |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Playwright (e2e) | শুধু CI-তে `retries: 1`, সঙ্গে `trace: on-first-retry`                                                                            | ব্রাউজার/নেটওয়ার্কের টাইমিং প্রকৃতপক্ষেই অনির্ধারিত; ট্রেসসহ একটি পুনঃচেষ্টা ফ্লেককে নির্ণয়যোগ্য আর্টিফ্যাক্টে পরিণত করে |
| Vitest           | কোনো বৈশ্বিক পুনঃচেষ্টা নয়। প্রমাণিত-ফ্লেকি টেস্টে স্পষ্টভাবে প্রতি-টেস্ট পুনঃচেষ্টা দেওয়া হয় (ডিফে দৃশ্যমান, PR-এ পর্যালোচিত) | কোয়ারেন্টাইন তালিকাটি রিপোতেই থাকে, কখনোই অস্বচ্ছ নয়                                                                     |
| node:test (unit) | কখনোই কোনো পুনঃচেষ্টা নয়                                                                                                         | ফ্লেকি ইউনিট টেস্ট মানে টেস্টেই বাগ আছে — এটি ঠিক করুন, আবার চালিয়ে ভাগ্য পরীক্ষা করবেন না                                |

ফ্লেক টেলিমেট্রি চালু হওয়ার পর লক্ষ্য SLO-গুলো (WS5.2/5.3): প্রতি টেস্টে <1% ফ্লেক হার
("এখনই ঠিক করুন" সীমা), প্রতি পাইপলাইনে ≥95% পাসের হার। শিল্পখাতের রেফারেন্স মান —
আমাদের নিজস্ব পরিমাপের ভিত্তিতে পুনরায় ক্যালিব্রেট করতে হবে।

## রিলিজ-স্তরের র্যাচেট ড্রিফট (WS5.5, v3.8.49)

যখন কোনো র্যাচেট (ফাইলের আকার, জটিলতা, eslint সতর্কতা) বিশুদ্ধ রিলিজ
টিপে রিগ্রেস করে — অর্থাৎ মার্জগুলোর সমন্বয় এটিকে রিগ্রেস করেছে, কিন্তু কোনো একক PR-এর
নিজস্ব ব্রাঞ্চে রিগ্রেশনটি পুনরুৎপাদিত হয় না — তখন সমাধানের দায়িত্ব **একবার, রিলিজ
ব্রাঞ্চে, রিলিজ ক্যাপ্টেনের**: এক্সট্রাকশন/রিফ্যাক্টরকে অগ্রাধিকার দিন; শুধু নথিভুক্ত
যৌক্তিকতার এন্ট্রিসহ পুনরায় বেসলাইন নির্ধারণ করুন। সমন্বয়জনিত ড্রিফট কখনোই কোনো অবদানকারীর PR-এর ওপর
চাপিয়ে দেবেন না এবং প্রতি-PR-এ কখনোই পুনরায় বেসলাইন নির্ধারণ করবেন না (এটি প্রকৃত রিগ্রেশন লুকিয়ে ফেলে)। প্রথমে পার্থক্য নির্ণয় করুন: আপনার PR-কে কারণ ধরে নেওয়ার আগে
একটি প্রোব ওয়ার্কট্রিতে বিশুদ্ধ টিপের বিপরীতে ব্যর্থতা পুনরুৎপাদন করুন।

## র্যাচেট সংকোচন সঞ্চয় — নিম্নমুখী দিক (#8584)

র্যাচেটটি কেবল অর্ধেক স্বয়ংক্রিয়, আর সেটি ভুল অর্ধেক। কোনো সর্বোচ্চ সীমা **বাড়াতে**
দশ সেকেন্ডের একটি ম্যানুয়াল JSON সম্পাদনা লাগে এবং এটি ব্যর্থ PR আনব্লক করার দ্রুততম উপায়।
কোনো সীমা **কমাতে** কাউকে `--update` চালিয়ে ফলাফল কমিট করতে হয় — এবং
`bank-ratchet-shrinks` জবটি আসার আগে পর্যন্ত কোনো ওয়ার্কফ্লো এটি চালাত না। পরিমাপকৃত ফলাফল
(2026-07-25): 18টি ফ্রোজেন ফাইল ইতিমধ্যেই নতুন ফাইলের 800-লাইনের সীমায় বা তার নিচে, সবচেয়ে খারাপটি
132× (`src/shared/validation/schemas.ts`, 19 লাইনের জন্য 2,523 সীমা); প্রায় 37টি পুনঃবেসলাইন নোটজুড়ে
জটিলতার সর্বোচ্চ সীমা `1794 → 2169`-এ পৌঁছেছে, যেখানে কমেছে ঠিক একবার (−1);
এবং "পরবর্তী চক্রে `--update` দিয়ে কঠোর করুন" 31 বার লেখা হলেও মানা হয়েছে
একবার। যে সীমা তার কারণ হওয়া কোডের চেয়েও বেশি সময় টিকে থাকে, সেটি নীরবে প্রতিটি সম্পন্ন
বিভাজনকে পরবর্তীবার ফাইলটি সম্পাদনকারী ব্যক্তির জন্য বৃদ্ধির অনুমতিতে পরিণত করে।

`nightly-release-green.yml` → জব **`bank-ratchet-shrinks`** সেই চক্রটি সম্পূর্ণ করে:

|            |                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------ |
| চলে        | `schedule` (দিনে 3×) + `workflow_dispatch`-এ — ইচ্ছাকৃতভাবেই `push`-এ **নয়**                          |
| পরিমাপ করে | সর্বোচ্চ `release/vX.Y.Z`, `release-green`-এর মতো একই রেজোলিউশন + ইনজেকশন গার্ড                        |
| লেখে       | `check:file-size --update` এবং `check:complexity-ratchets --update` (দুটিই নকশাগতভাবে শুধু সংকোচনশীল)  |
| যাচাই করে  | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                               |
| সরবরাহ করে | রিলিজ ব্রাঞ্চের বিপরীতে সর্বদা-হালনাগাদ একটি PR — জোরপূর্বক হালনাগাদ করা হয়, কখনোই স্প্যাম করা হয় না |

প্রতি-পুশের বদলে ব্যাচে সঞ্চয় করা হয়, কারণ এর কোনো ল্যাটেন্সির প্রয়োজন নেই (8 ঘণ্টার মধ্যে
সংকোচন সঞ্চিত হলেই যথেষ্ট), অন্যদিকে প্রতি-মার্জ রান মার্জ ক্যাম্পেইনের সময় বারবার
PR ব্রাঞ্চ পুনর্নির্মাণ করত এবং প্রতিবার সম্পূর্ণ ESLint স্ক্যানের খরচ বহন করত। শনাক্তকরণ
`push`-এ (`release-green`) থাকে; শুধু সঞ্চয় ব্যাচে করা হয়।

### নিরাপত্তা যাচাইকারী

জবটি তত্ত্বাবধান ছাড়াই বেসলাইনগুলোতে লেখে, তাই `verify-ratchet-bank.mjs`-ই এটিকে
গ্রহণযোগ্য করে। এটি `HEAD`-এর বিপরীতে `--update`-পরবর্তী ট্রির ডিফ করে এবং প্রতিটি পরিবর্তন নিচের
কোনো একটি না হলে **কোনো কমিট তৈরি হওয়ার আগেই জবটি বাতিল করে** — কোনো PR খোলে না:

- কোনো `frozen` / `testFrozen` সংখ্যাসূচক এন্ট্রি **কমানো** বা **সরানো**
- `complexity-baseline.json` → `count` **কমানো**
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` **কমানো**

অন্য যেকোনো কিছু ব্যর্থ হয়: কোনো সংখ্যা বাড়ানো, এন্ট্রি যোগ করা, `cap`/`testCap` পরিবর্তন করা, অথবা
কোনো `_rebaseline_*` নোট মুছে ফেলা/পুনর্লিখন করা (এই নোটগুলো প্রতিটি সর্বোচ্চ সীমা কেন রয়েছে তার অডিট ট্রেইল
এবং ফাইল এন্ট্রিগুলোর মতো একই `frozen` অবজেক্টে সংরক্ষিত থাকে)।
যে বট সীমা বাড়াতে পারে, সেটি বর্তমান অবস্থার চেয়ে নিশ্চিতভাবেই খারাপ হবে। রিগ্রেশন
গার্ড: `tests/unit/verify-ratchet-bank.test.ts`।

জবটি কখনোই `release/*`-এ পুশ করে না — একজন মানুষ PR মার্জ করেন, তাই ভুল পরিমাপ
পর্যালোচনা ছাড়া অন্তর্ভুক্ত হতে পারে না।

## অনুমোদিত তালিকা নীতি

পূর্ববর্তী লঙ্ঘনের কারণে ব্যর্থ হতে পারে না—এমন প্রতিটি গেট একটি অপরিবর্তনীয় অনুমোদিত তালিকা ব্যবহার করে
(যেমন, `KNOWN_STALE_DOC_REFS`, `KNOWN_MISSING`, `KNOWN_RAW_SQL`)। নীতিটি হলো:

**মূল কারণটি ঠিক করুন; কেবল তখনই অনুমোদিত তালিকা ব্যবহার করুন, যখন লঙ্ঘনটি পূর্ববর্তী এবং
একই PR-এ ঠিক করা সম্ভব নয়।**

অনুমোদিত তালিকায় কোনো এন্ট্রি যোগ করার সময়:

1. যৌক্তিকতা ব্যাখ্যা করে একটি মন্তব্য অন্তর্ভুক্ত করুন।
2. ট্র্যাকিং ইস্যুর উল্লেখ করুন (যেমন, `// #3498 — পর্যায় ২-এর ফিচার, এখনো বাস্তবায়িত হয়নি`)।
3. যে PR লঙ্ঘনটি ঠিক করে, সেই একই PR-এ এন্ট্রিটি সরিয়ে দিন—যে অচল এন্ট্রি আর কোনো সক্রিয়
   লঙ্ঘন দমন করে না, সেটি নিজেই একটি ত্রুটি (বাস্তবায়িত হলে 6A.3 অচল-প্রয়োগ ব্যবস্থা
   কোনো অনাথ অনুমোদিত তালিকা এন্ট্রি পেলে গেটটিকে ব্যর্থ করবে)।

পরীক্ষা দ্রুত পাস করানোর জন্য অনুমোদিত তালিকায় এন্ট্রি যোগ করবেন **না**। ক্রমবর্ধমান
অনুমোদিত তালিকাসহ একটি সবুজ গেট গুণমান সম্পর্কে মিথ্যা আশ্বাস দেয়।

### আপনার PR-এ কোনো গেট ব্যর্থ হলে

1. **গেটের আউটপুট মনোযোগ দিয়ে পড়ুন**—কোন ফাইল বা সিম্বল নিয়মটি লঙ্ঘন করেছে, তা সেখানে
   নির্দিষ্টভাবে বলা থাকে।
2. **লঙ্ঘনটি ঠিক করুন**—অধিকাংশ গেটই নির্ধারক ফাইলসিস্টেম পরীক্ষা, কোড সঠিক হলেই যেগুলো পাস
   করে।
3. **লঙ্ঘনটি পূর্ববর্তী হলে** (অর্থাৎ, আপনি এটি প্রবর্তন করেননি, কিন্তু গেটটি এখন এটিকে
   আওতাভুক্ত করছে): যৌক্তিকতার মন্তব্য ও একটি ট্র্যাকিং ইস্যুসহ অনুমোদিত তালিকায় একটি এন্ট্রি যোগ করুন।
4. **গেটটি যদি র্যাচেট হয়** (কভারেজ, ESLint সতর্কতা, পুনরাবৃত্তি, জটিলতা):
   আপনার পরিবর্তন মেট্রিকটিকে আরও খারাপ করেছে। অন্তর্নিহিত সমস্যাটি ঠিক করুন, অথবা (খুব কম ক্ষেত্রেই)
   পরিবর্তনটি ইচ্ছাকৃত এবং মেট্রিকের অবনতি গ্রহণযোগ্য হলে
   `npm run quality:ratchet -- --update` চালান—তবে PR-এর বিবরণে কারণটি নথিভুক্ত করুন।
5. **পরামর্শমূলক গেটগুলো** (`continue-on-error: true`) তথ্যগত—এগুলো মার্জ অবরুদ্ধ করে না,
   তবে CI সারাংশে দেখা যায়। তবুও এগুলো ঠিক করুন।

---

## নতুন গেট যোগ করা

1. `scripts/check/check-<name>.mjs` (অথবা `.ts`) তৈরি করুন। নীতি-ভিত্তিক গেটগুলো 0/1 দিয়ে প্রস্থান করে।
   র্যাচেট-ধাঁচের গেটগুলো `collect-metrics.mjs`-এর মাধ্যমে `quality-metrics.json`-এ একটি মেট্রিক নির্গত করে।
2. `package.json`-এ `"check:<name>": "node scripts/check/check-<name>.mjs"` যোগ করুন।
3. উপযুক্ত জবের অধীনে `.github/workflows/ci.yml`-এ এটিকে সংযুক্ত করুন
   (নীতি → `lint` অথবা `docs-sync-strict`; র্যাচেট → `quality-gate`)।
4. এতে অনুমোদিত তালিকা থাকলে, `scripts/check/lib/allowlist.mjs` থেকে
   `reportStaleEntries()` প্রয়োগ করুন, যাতে অচল এন্ট্রিগুলো স্বয়ংক্রিয়ভাবে শনাক্ত হয়।
5. গেটটির শনাক্তকরণ লজিক কভার করে `tests/unit/build/`-এ একটি পরীক্ষা লিখুন।
6. এই নথিটি হালনাগাদ করুন (প্রাসঙ্গিক জব টেবিলে একটি সারি যোগ করুন)।

---

## এজেন্ট টুলিং: LSP-in-the-loop (ঐচ্ছিক)

CI গেটগুলোর পাশাপাশি, OmniRoute একটি **ঐচ্ছিক** `agent-lsp` স্ক্যাফোল্ড সরবরাহ করে
(একটি প্রকল্প-স্তরের `.mcp.json`, Fase 7 Task 15)। কোডিং এজেন্টগুলোর কাছে একটি TypeScript
ল্যাঙ্গুয়েজ সার্ভার উন্মুক্ত করতে `.mcp.json` তৈরি করুন, যাতে তারা কোড লেখার **আগেই** সিম্বল /
ডায়াগনস্টিক সমাধান করতে পারে—এটি `typecheck:core`-এর একটি কম্পাইল-বিফোর-ক্লেইম সহযোগী,
যা উৎসেই "উদ্ভাবিত সিম্বল" ত্রুটি কমায়। এটি ইচ্ছাকৃতভাবে স্বয়ংক্রিয়ভাবে লোড করা হয় না
(আপনিই MCP↔LSP ব্রিজ বেছে নেবেন এবং যাচাই করবেন); কোনো ত্রুটিপূর্ণ এন্ট্রি শুধু একটি
সংযোগ-ত্রুটি লগ করে এবং কখনোই সেশন ব্যাহত করে না।

---

## যৌক্তিকীকরণ ব্যাকলগ (ROI পর্যালোচনা — পর্যায় 9 তরঙ্গ 3)

এই তালিকাটি 2026-06-17 তারিখে `ci.yml`-এর সঙ্গে মিলিয়ে দেখা হয়েছে (আগের সংস্করণে
`audit:deps`, `check:tracked-artifacts`, `check:lockfile`, `check:licenses`,
`check:dead-code`, `check:cognitive-complexity`, `check:type-coverage`,
`check:codeql-ratchet`, `check:pr-evidence` বাদ পড়েছিল)। মিলিয়ে নেওয়া সেটটির একটি ROI পর্যালোচনায়
নিম্নলিখিত যৌক্তিকীকরণের প্রার্থীগুলো শনাক্ত হয়েছে। **মার্জগুলো যান্ত্রিক CI
পরিবর্তন; ফ্লিপ/বাদ দেওয়ার সিদ্ধান্তগুলো অপারেটরের জন্য সংরক্ষিত নীতিগত সিদ্ধান্ত।** নিচের কিছুই
এখনও প্রয়োগ করা হয়নি।

**উপরের অংশে আরও যা নথিভুক্ত হয়নি** (পরামর্শমূলক, কম সংকেত): `docs-lint` জব
(markdownlint + Vale, পুরো জব `continue-on-error`) এবং স্বতন্ত্র স্ক্যানার ওয়ার্কফ্লো
`semgrep.yml` / `codeql.yml` / `scorecard.yml`। `semgrepFindings: 0`
`quality-baseline.json`-এ রয়েছে, কিন্তু `ci.yml`-এ কোনো ব্লকিং র্যাচেটের সঙ্গে সংযুক্ত নয় — মেট্রিকটি
বর্তমানে অনাথ।

### মার্জ / ডিডুপ (যান্ত্রিক, কম ঝুঁকি)

প্রতিটি প্রার্থীকে 2026-06-17 তারিখের সক্রিয় গেট অবস্থার বিপরীতে যাচাই করা হয়েছে (বিশ্বাস করুন, তবে যাচাইও করুন);
বেশ কয়েকটি "স্পষ্ট" মার্জের আড়ালে ঋণ লুকিয়ে থাকতে দেখা গেছে এবং সেগুলো **পরিষ্কার ড্রপ-ইন নয়**।

- **`check:docs-sync` দুবার চলে** — `lint` জবে স্বতন্ত্রভাবে এবং আবার `check:docs-all` (`docs-sync-strict`) ও husky pre-commit hook-এর মধ্যে। ✅ **সম্পন্ন** — স্বতন্ত্র `lint` ইনভোকেশন সরানো হয়েছে।
- **CVE স্ক্যানিং** — ❌ **পরিষ্কার মার্জ নয়।** `audit:deps` যেকোনো high/critical CVE-তে হার্ড-ফেল করে; `check:vuln-ratchet` (osv) কেবল বেসলাইনের তুলনায় কোনো _অবনতি_ হলে ব্যর্থ হয় (বর্তমানে 1 MODERATE)। অর্থগত আচরণ ভিন্ন — `audit:deps` বাদ দিলে পরম high/critical গেটটি হারিয়ে যাবে। দুটিই রাখুন।
- **সাইকেল শনাক্তকরণ** — ❌ **পরিষ্কার মার্জ নয়।** `check:circular-deps` (dpdm) **91টি সাইকেল** রিপোর্ট করে (এই কারণেই এটি পরামর্শমূলক); সেগুলো আগে সমাধান না করে এটিকে ব্লকিং হিসেবে উন্নীত করা যায় না, এবং সবুজ, নির্বাচিত `check:cycles`-এর তুলনায় এর পরিধি বিস্তৃত। `check:cycles`-কে ব্লকিং রাখুন; 91টি dpdm সাইকেল সমাধান করা একটি স্বতন্ত্র ব্যাকলগ।
- **জটিলতা** — ✅ **সম্পন্ন** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`): একটি ESLint ওয়াক, ruleId অনুযায়ী গণনা করে যাতে cyclomatic+max-lines এবং cognitive বেসলাইনগুলো স্বাধীন থাকে; স্থানীয় `--update`-এর জন্য পৃথক `check:complexity` / `check:cognitive-complexity` বহাল রয়েছে।
- **`/api` অ্যান্টি-হ্যালুসিনেশন** — ✅ **সম্পন্ন** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`): `src/app/api`-এর একটি FS ইনভেন্টরি, openapi-routes + docs-symbols এখনও স্বাধীনভাবে রিপোর্ট করে; স্থানীয় রানগুলোর জন্য পৃথকগুলো বহাল রয়েছে।
- **`check:node-runtime` 11টি জবে চলে** — ⚠️ **কম ROI।** প্রতিটি আলাদা রানার এবং যাচাইটি <1s; মোট সাশ্রয় ~10s, যার বিনিময়ে প্রতিটি জবের জন্য একটি সস্তা গার্ড হারাতে হবে। এই পরিবর্তনের ঝামেলার যোগ্য নয়।
- **CI lint-এ `typecheck:noimplicit:core`** — ✅ **lint জব থেকে সরানো হয়েছে** (এটি পরামর্শমূলক `continue-on-error` ছিল); ব্লকিং টাইপ সারফেস হলো `typecheck:core` + `check:type-coverage`। স্থানীয় স্ক্রিপ্ট রাখা হয়েছে।

### ফ্লিপ / সিদ্ধান্ত নিন (অপারেটর নীতি)

- `check:openapi-security-tiers` (পরামর্শমূলক) — ❌ **পরিষ্কারভাবে ফ্লিপযোগ্য নয়।** এটি 0 দিয়ে বের হয়, তবে সতর্ক করে যে `LOCAL_ONLY_API_PREFIXES`-এর অধীন একাধিক `traffic-inspector` রুটে `x-loopback-only: true` অ্যানোটেশন নেই। এটি কার্যকর করতে হলে প্রথমে `openapi.yaml`-এ ওই অ্যানোটেশনগুলো যোগ করতে হবে।
- `typecheck:noimplicit:core` (পরামর্শমূলক) — ব্লকিং `check:type-coverage` র্যাচেটের মাধ্যমে অনেকটাই অন্তর্ভুক্ত। এটিকে র্যাচেটে ফ্লিপ করুন অথবা অপ্রয়োজনীয় দ্বিতীয় `tsc` পাসটি বাদ দিন।
- `test:vitest:ui` (এখন **ব্লকিং**) — আগে থেকে বিদ্যমান ব্যর্থতাগুলো `vitest.config.ts`-এ `// #8618` ট্র্যাকিং মন্তব্যসহ স্পষ্টভাবে বাদ দেওয়া হয়েছে; নতুন ব্যর্থতা জবটিকে ব্যর্থ করে।
- `check:secrets` (gitleaks, 3টি নথিভুক্ত false-positive-এ স্থির করা ব্লকিং র্যাচেট) — 0-তে পৌঁছাতে 3টিকে allowlist করুন, অথবা পরামর্শমূলক স্তরে নামিয়ে দিন। GitHub-এর নেটিভ secret-scanning + `check:public-creds`-এর সঙ্গে ওভারল্যাপ করে।
- `check:pr-evidence` (ব্লকিং, PR-body-এর গদ্য grep করে) — false-positive-এর উচ্চ ঝুঁকি; বাদ দিলে Hard Rule #18-এর প্রয়োগ দুর্বল হয়, তাই এটি প্রকৃতপক্ষেই একটি নীতিগত সিদ্ধান্ত।
- `semgrep` (পরামর্শমূলক স্বতন্ত্র) — OWASP ফ্যামিলিগুলোর ক্ষেত্রে CodeQL-এর সঙ্গে ওভারল্যাপ করে; এর বেসলাইনকে একটি র্যাচেটের সঙ্গে সংযুক্ত করুন অথবা বাদ দিন।

---

## সম্পর্কিত ডকুমেন্টেশন

- সাপ্লাই-চেইন (provenance, SBOM, Trivy, Scorecard): [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — কী-সেট সমতা গেট

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`, জব `i18n-ui-coverage`)।
প্রতিটি `src/i18n/messages/<locale>.json`-এর লিফ কী-সেটকে `en.json`-এর সঙ্গে তুলনা করে এবং
কোনো লিফ অনুপস্থিত বা অতিরিক্ত হলে ব্যর্থ হয়, কীটি কখন যোগ করা হয়েছে তা নির্বিশেষে। `__MISSING__:`
প্লেসহোল্ডার উপস্থিত হিসেবে গণ্য হয় (সেগুলোর বিষয়বস্তু রেশিও গেটের আওতাধীন)। এটি দুটি
diff-ভিত্তিক/শতাংশভিত্তিক গেটের সম্পূর্ণ পরিপূরক: `check-ui-keys-coverage` প্রতি locale-এ 80 %
ন্যূনতম সীমা প্রয়োগ করে (প্রায় 13,000টির মধ্যে 43টি কী অনুপস্থিত থাকলেও ফলাফল 99.7 % দেখায়) এবং
`check-new-key-coverage` কেবল কোনো PR `en.json`-এ যে কীগুলো যোগ করে সেগুলো বিচার করে। একটি locale
ব্যাচের branch যেদিন তৈরি হয়, সেদিনকার `en.json` থেকে সেটি উৎপন্ন হয় এবং base-এ নতুন কী যোগ হতে
থাকার মধ্যেই কয়েক দিন ধরে অনুবাদ চলে; ব্যাচ PR নিজে কোনো কী যোগ করে না, তাই batch 1 (#13044) নয়টি
locale-এ 43টি কী কম নিয়ে এবং batch 2 (#13660) আটটি locale-এ 10টি কী কম নিয়ে merge হওয়ার সময়
(2026-09-15) উভয় সহযোগী গেটই নীরব ছিল। ব্যর্থতা ঠিক করতে
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers` ব্যবহার করুন; একটি `extra`
লিফের অর্থ হলো source থেকে সেটি বাদ দেওয়া হয়েছে—locale থেকেও সেটি মুছে দিন। `--warn` ব্যর্থ না
করে রিপোর্ট করে। `--catalog=cli` একই তুলনা `bin/cli/locales`-এর ওপর চালায়
(`npm run i18n:check-keys:cli`); উভয় ধাপই `i18n-ui-coverage` জবে রয়েছে।

#### `check-new-key-coverage` — নতুন-কীর i18n গেট

`check-ui-value-drift`-এর সহযোগী। সেটি এমন কোনো ইংরেজি value শনাক্ত করে যা **পুনর্লিখিত** হয়েছে
কিন্তু যার অনুবাদগুলো হালনাগাদ করা হয়নি; এটি এমন কোনো ইংরেজি key শনাক্ত করে যা **যোগ করা হয়েছে**
কিন্তু কিছু locale কখনো সেটি পায়নি।

`check-ui-keys-coverage` এই শ্রেণির সমস্যা দেখতে পারে না: এটি locale-প্রতি একটি ন্যূনতম শতাংশ
প্রয়োগ করে, আর প্রায় 13,000টি লিফের মধ্যে এগারোটি key অনুপস্থিত থাকলেও coverage 99.9% থাকে।
ভাষাপ্রতি একটি শতাংশ দিয়ে “এই feature অনূদিত না হয়েই প্রকাশিত হয়েছে” প্রকাশ করা যায় না—একটি
সম্পূর্ণ feature কোনো text ছাড়াই নতুন locale-এ যুক্ত হতে পারে, অথচ সংখ্যাটি কখনো বদলাবে না।

এতে যে ঘটনাটি প্রতিফলিত হয়েছে: Orchestration Canvas-এর Phase 3-এর এগারোটি key তখন বিদ্যমান
42টি locale-এই অনুবাদ করেছিল। কয়েক ঘণ্টা পর EU-language batch (#13044) repository-টিকে 51টি
locale-এ নিয়ে যায়, এবং নতুন নয়টি locale (`el`, `et`, `ga`, `hr`, `lt`, `lv`, `mt`, `sl`, `sr`)
কখনোই সেগুলো পায়নি। অনুপস্থিত key-এর পরিবর্তে `deepMergeFallback` ইংরেজি বসায়, তাই failure
mode ছিল ফাঁকা UI-এর বদলে অনূদিত না হওয়া UI—বাস্তব সমস্যা, এবং নকশাগতভাবেই নীরব।

এর সহযোগীর মতো এটিও **diff-aware**; এটি merge base-এর ইংরেজির সঙ্গে working tree-এর তুলনা করে,
ফলে আগে থেকে থাকা ঘাটতিগুলো অপরিবর্তিত থাকে এবং gate চালু করতে কোনো migration-এর প্রয়োজন হয়নি।
বিকল্প পথ: `__MISSING__:<english>` runtime-কে সঠিক রেখে কোনো অনুবাদ স্থগিত রাখে। `vi`-তে
placeholder নিষিদ্ধ (`tests/unit/i18n-vi-completeness.test.ts`) এবং সেখানে প্রকৃত অনুবাদ প্রয়োজন।

#### `check-vitest-exclusions` — স্থগিত-test গেট

`vitest.config.ts`-এর `exclude` তালিকার কোনো file হলো এমন একটি test যা চলে না, অথচ tree পড়া
ব্যক্তির কাছে সেটিকে coverage-এর অংশ বলে মনে হয়। বাষট্টিটি file এই comment-এর আড়ালে জমেছিল:
`// #8618 — আগে থেকে থাকা ব্যর্থতা; ঠিক করা হলে এই exclusion সরিয়ে দিন`। Issue #8618
2026-08-11 তারিখে বন্ধ হয়েছিল, অথচ এটি যে তালিকা track করত সেটি 45টি entry থেকে বেড়ে 62টিতে
পৌঁছায়; প্রতিটি নতুন entry একটি বন্ধ হয়ে যাওয়া issue-র দিকে নির্দেশকারী comment উত্তরাধিকারসূত্রে
পেয়েছিল। অবশেষে যখন তালিকাটি file ধরে ধরে পরিমাপ করা হয় (#13204), **source-এ কোনো পরিবর্তন
ছাড়াই 62টির মধ্যে 51টি বর্তমান tree-এর বিপরীতে pass করেছিল**।

Gate-টির নিয়ম হলো, বাস্তব কোনো file-এ resolve হওয়া প্রতিটি exclusion-কে (a) একটি tracking issue
উল্লেখ করতে হবে এবং (b) পরিমাপ করা status-সহ `config/quality/vitest-exclusions.json`-এ থাকতে হবে,
যাতে নতুন exclusion যোগ করা 60-entry-র array-এ আরেকটি line হওয়ার পরিবর্তে একটি নিবেদিত file-এ
review-যোগ্য diff হয়। এটি ইচ্ছাকৃতভাবে বাদ দেওয়া test-গুলো পুনরায় চালায় না—এতে প্রায় 10 মিনিট
লাগে এবং এটি periodic job-এর কাজ; inventory-তে প্রতিটির সর্বশেষ পরিমাপের সময় record করা থাকে।
