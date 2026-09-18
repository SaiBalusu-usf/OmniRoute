# Quality Gates Reference (فارسی)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

این سند مرجع رسمی تمام دروازههای کیفیت CI در OmniRoute است.
این سند هر دروازه، مواردی که اعتبارسنجی میکند، job مربوط به CI که در آن اجرا میشود، اینکه آیا از
خط مبنای ratchet یا سیاست قبول/رد استفاده میکند، و اینکه آیا build را مسدود میکند یا صرفاً جنبه مشورتی دارد، شرح میدهد.

برای مشاهده خلاصهای کوتاه و سیاست allowlist، به بخش «دروازههای کیفیت و Ratchetها»
در `AGENTS.md` مراجعه کنید. برای ارزیابی انتقادی، طبقهبندی بلوغ و برنامه مستقل از ابزار
برای بازتولید همین سیستم، به
[راهنمای دروازه کیفیت](../ops/QUALITY_GATE_PLAYBOOK.md) مراجعه کنید.

---

## فهرست دروازهها (حدود ۹۰ اسکریپت)

اسکریپتها در `scripts/check/` (دروازههای سیاستی) و `scripts/quality/` (موتور ratchet) قرار دارند.
منبع حقیقت CI، فایل `.github/workflows/ci.yml` است.

### مسیر سریع PR انتشار (`quality.yml`)

`.github/workflows/quality.yml` روی PRهایی اجرا میشود که `release/**` را هدف قرار میدهند. این workflow با
دروازههای سریع فیلترشده بر اساس مسیر، branchهای مشارکتکنندگان را فعال نگه میدارد و برای تغییرات کد،
یک سیگنال مشورتی build تولید نیز ارائه میکند:

| Job                                              | دامنه                                                                                                                                                                                                         | مسدودکنندگی                                                                             |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `Build (advisory)`                               | PRهای کد غیردرفت و branchهای صف Mergify؛ Node 24، `npm-ci-retry`، `check:node-runtime`، و `npm run build` با `OMNIROUTE_USE_TURBOPACK=1`؛ بدون آپلود artifact، زیرا هیچ job کیفیت پاییندستی آن را مصرف نمیکند | **مشورتی** (`continue-on-error: true`؛ پس از یک هفته اجرای پایدار PRهای انتشار حذف شود) |
| `Docs Gates (fast-path)`                         | PRهای مستندات/کد؛ ارجاعات مستندات API و docs-all                                                                                                                                                              | بله                                                                                     |
| `Fast Quality Gates`                             | PRهای کد؛ بررسیهای استاتیک، typecheck، typecheck داشبورد و تستهای واحد تحتتأثیر                                                                                                                               | بله                                                                                     |
| `Forgotten sibling tests`                        | PRهای کد؛ ردیابی ماژولهای تغییریافته تا مصرفکنندگان استاتیک و تستهای sibling کاندید؛ مسیرهای barrel و dynamic-import بهصورت عیبیابی مشورتی همراه با استثناهای allowlist ارجاعشده گزارش میشوند                 | **مشورتی**                                                                              |
| `Vitest (fast-path)`                             | PRهای کد؛ مجموعه تست سریع vitest                                                                                                                                                                              | بله                                                                                     |
| `Unit Tests fast-path`                           | PRهای کد؛ مجموعه تست واحد ۴-shard                                                                                                                                                                             | بله                                                                                     |
| `No new ESLint warnings`                         | PRهای کد؛ محافظ lint آگاه از suppressionها                                                                                                                                                                    | برای مبدأ خودی بله، برای forkها مشورتی                                                  |
| `Merge integrity (changelog + generated skills)` | PRهای غیردرفت؛ همگامسازی changelog و skillهای تولیدشده                                                                                                                                                        | برای مبدأ خودی بله، برای forkها مشورتی                                                  |

#### گزارش تستهای sibling فراموششده

`npm run check:forgotten-sibling-tests` از resolver مربوط به import که پشت نگاشت تأثیر تست قرار دارد، مجدداً استفاده میکند.
برای هر ماژول تولیدی تغییریافته، زمانی که تست کاندید
در diff درخواست pull وجود نداشته باشد، زنجیرههای قطعی
`ماژول/نماد تغییریافته -> مصرفکننده استاتیک -> تست sibling کاندید` را گزارش میکند. خلاصه Markdown و نتیجه JSON بهعنوان
artifact مربوط به workflow با نام `forgotten-sibling-tests` برای تنظیم پیش از هرگونه عرضه مسدودکننده نگهداری میشوند.

re-exportهای barrel و importهای پویا فقط عیبیابیهای resolution هستند؛ آنها هرگز یافتهای
مسدودکننده ایجاد نمیکنند. استثناهای بازبینیشده در
`config/quality/forgotten-sibling-allowlist.json` قرار دارند. هر ورودی باید مصرفکننده و تست
کاندید را مشخص کند، دلیل مشخصی ارائه دهد و به یک issue یا pull request در GitHub پیوند داشته باشد. ورودیهای نامعتبر
بهصورت fail-closed عمل میکنند. استثناها نمیتوانند یک تست کاندید حذفشده یا diffای را که `.skip`/`.todo`
اضافه میکند، نادیده بگیرند؛ تضعیف assertion و سایر روشهای پنهانسازی همچنان بر عهده دروازه مستقل و مسدودکننده
`check:test-masking` هستند.

### Job: `lint`

روی هر PR به `main` اجرا میشود. در صورت شکست، merge را مسدود میکند.

| اسکریپت (`npm run ...`)           | اعتبارسنجی میکند                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | مسدودکننده                             |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| `check:node-runtime`              | نسخه Node.js در محدوده پشتیبانیشده قرار دارد                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | بله                                    |
| `check:cycles`                    | importهای حلقوی — همه ماژولهای `src/` و `open-sse/`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | بله                                    |
| `check:route-validation:t06`      | وجود schemaهای Zod در همه routeها (سیاست Tier 6)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | بله                                    |
| `check:any-budget:t11`            | تعداد `@ts-expect-error // any` از بودجه تعیینشده فراتر نمیرود (کنترلگر Tier 11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | بله                                    |
| `check:provider-consistency`      | هر provider در `providers.ts` یک ورودی متناظر در `providerRegistry.ts` دارد (و بالعکس، در محدوده allowlist)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | بله                                    |
| `check:model-lifecycle`           | سه جدول مسیریابی که بهصورت دستی نگهداری میشوند، با snapshot چرخهعمر ثبتشده در مخزن سازگار میمانند (#11503): امتیازهای `FITNESS_TABLE` (`taskFitness.ts`) شامل هیچ شناسه بازنشستهای نیست که `REGISTRY` بتواند آن را مسیریابی کند؛ هر مقصد `BUILT_IN_ALIASES` در `REGISTRY` وجود دارد و در snapshot شناسههای بازنشسته نیست؛ هر شناسه بازنشستهای که همچنان در `REGISTRY` است، هدایت میشود یا در `allowedRetiredInCatalog` فهرست شده است؛ و هیچ مبدأ یا مقصدی در `DEFAULT_DEGRADATION_MAP` در آن snapshot بازنشسته نیست. این بررسی ثابت نمیکند که یک مدل در حال حاضر توسط upstream زندهای سرویسدهی میشود. آفلاین — مقایسه با `config/quality/model-lifecycle.json` که بهصورت دستی با `npm run quality:refresh-model-lifecycle` تازهسازی میشود (نیازمند شبکه؛ به CI متصل نیست). `allowedRetiredInCatalog` یک ضامن کاهش تدریجی است: فقط همراه با یک issue رهگیری، ورودی اضافه کنید. | بله                                    |
| `check:fetch-targets`             | هر `fetch("/api/...")` در `src/` سمت client به یک `route.ts` واقعی منتهی میشود                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | بله                                    |
| `check:deps`                      | همه dependencyهای قابل نصب با `npm install` در تمام فایلهای `package.json` مخزن، در `dependency-allowlist.json` قرار دارند؛ packageهای جدیدِ بدون نسخه ثابت یا دارای نام مستعد slopsquatting علامتگذاری میشوند                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | بله                                    |
| `audit:deps`                      | `npm audit` (ریشه و electron) — بدون هشدار امنیتی high/critical (با `check:vuln-ratchet` مربوط به osv همپوشانی دارد؛ Rationalization Backlog را ببینید)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | بله                                    |
| `check:lockfile`                  | یکپارچگی `package-lock.json` — registry مبتنی بر https، hashهای یکپارچگی، و بدون overrideهای host                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | بله                                    |
| `check:licenses`                  | allowlist مجوزهای SPDX برای dependencyهای production                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | بله                                    |
| `check:tracked-artifacts`         | نبود artifactهای build یا symlinkهای commitشده `node_modules` (همچنین در pre-commit مربوط به husky اجرا میشود؛ pre-push عمداً سبک است — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | بله                                    |
| `check:vitest-exclusions`         | هر exclusion در Vitest یک issue رهگیری را مشخص میکند و در `config/quality/vitest-exclusions.json` وجود دارد (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | بله                                    |
| `check:file-size`                 | هیچ فایل منبعی از سقف تعیینشده برای پسوند خود فراتر نمیرود (ضامن: فایلهای بزرگ ثابتشده در فهرست `frozen`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | بله                                    |
| `check:error-helper`              | پاسخهای خطا در executorها/handlerها از `buildErrorBody()` / `sanitizeErrorMessage()` استفاده میکنند (قانون سختگیرانه #12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | بله                                    |
| `check:migration-numbering`       | فایلهای SQL مربوط به migration بهترتیب شمارهگذاری شدهاند و هیچ شکاف یا شماره تکراری وجود ندارد                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | بله                                    |
| `check:public-creds`              | هیچ `client_id`/`client_secret` مربوط به OAuth یا کلید Firebase Web بهصورت literal خارج از `publicCreds.ts` وجود ندارد (قانون سختگیرانه #11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | بله                                    |
| `check:db-rules`                  | هیچ SQL خامی خارج از ماژولهای `src/lib/db/` وجود ندارد؛ هیچ barrel-importی از `localDb.ts` انجام نمیشود (قوانین سختگیرانه #2/#5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | بله                                    |
| `check:known-symbols`             | executorهای provider، راهبردهای مسیریابی و translatorهای ثبتشده در جدولهای dispatch خود با فایلهای روی دیسک مطابقت دارند — بدون symbol یتیم یا اعلامنشده                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | بله                                    |
| `check:route-guard-membership`    | هر route که یک child process ایجاد میکند، توسط `isLocalOnlyPath()` طبقهبندی شده است (قوانین سختگیرانه #15/#17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | بله                                    |
| `check:test-discovery`            | هر فایل `*.test.ts` / `*.spec.ts` در مخزن، دستکم توسط یک test runner جمعآوری میشود (ضامن: فهرست فایلهای یتیم در `test-discovery-baseline.json` فقط میتواند کوچکتر شود)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | بله                                    |
| `check:agent-skills-sync`         | artifactهای تولیدشده agent-skills با catalog منبع خود مطابقت دارند (بدون واگرایی)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `check:provider-asset-provenance` | logoها/assetهای provider دارای یک ورودی ثبتشده برای منشأ هستند                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `lint:json`                       | فایلهای پیکربندی JSON parse میشوند و قواعد lint مخزن را رعایت میکنند                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `typecheck:core`                  | کامپایل TypeScript بدون خطا (فقط هشدارهای مشورتی)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | بله                                    |
| `typecheck:noimplicit:core`       | `noImplicitAny` سختگیرانه — آیندهنگر؛ بسیاری از call siteهای ازپیشموجود همچنان به annotation نیاز دارند                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | **مشورتی** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | اجرای `tsc` محدود به `src/app/(dashboard)/**` (#7033) — allowlist گزینششده ۲۷ فایلی `typecheck:core` شامل هیچ TSX مربوط به dashboard نیست و `next build` نیز هرگز آن را type-check نمیکند (`next.config.mjs` مقدار `ignoreBuildErrors: true` را تنظیم میکند)، بنابراین regressionهای identifier یتیم در آنجا (#6625/#6909) برای CI نامرئی بودند. خروجی با یک baseline ثابتشده از تعداد خطاها بهازای هر فایل/کد TS مقایسه میشود (`config/quality/dashboard-typecheck-baseline.json`، با همان الگوی اعمال stale در `check:known-symbols`) — فقط خطاهای جدید فراتر از تعداد ثبتشده در baseline باعث شکست gate میشوند؛ وقتی یک خطای ازپیشموجود رفع شد، با `--update` ضامن را کاهش دهید.                                                                                                                                                                                           | بله                                    |

### وظیفه: `quality-gate`

پس از `test-coverage` اجرا میشود. در صورت شکست، ادغام را مسدود میکند.

| اسکریپت                      | موارد اعتبارسنجیشده                                                                                                                                                       | مسدودکننده            |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `quality:collect`            | فایل `quality-metrics.json` را تولید میکند (تعداد هشدارهای ESLint و پوشش برگرفته از گزارش ادغامشدهٔ شاردها)                                                               | بله (پیشنیاز ratchet) |
| `quality:ratchet`            | هیچیک از معیارهای موجود در `quality-baseline.json` پسرفت نکردهاند (هشدارهای ESLint ≤ خط مبنا؛ پوشش ≥ خط مبنا)                                                             | بله                   |
| `check:duplication`          | تکرار کد (jscpd@4) از خط مبنای موجود در `quality-baseline.json` فراتر نمیرود                                                                                              | بله                   |
| `check:complexity`           | پیچیدگی دوری در سطح فایل از سقف تعیینشده فراتر نمیرود (`complexity` هستهٔ ESLint بههمراه `max-lines-per-function`)                                                        | بله                   |
| `check:cognitive-complexity` | سازوکار ratchet برای پیچیدگی شناختی (`eslint-plugin-sonarjs`) — یک اجرای جداگانهٔ ESLint؛ CI هر دو را بهصورت یک مرحلهٔ واحد با نام `check:complexity-ratchets` اجرا میکند | بله                   |
| `check:dead-code`            | سازوکار ratchet برای خروجیها / فایلهای استفادهنشده (knip) نسبت به خط مبنا پسرفت نمیکند                                                                                    | بله                   |
| `check:compression-budget`   | بودجهٔ بنچمارک فشردهسازی — حداقل صرفهجویی توکن برای هر موتور نباید پسرفت کند                                                                                              | بله                   |
| `check:type-coverage`        | سازوکار ratchet درصد کدهای دارای نوع (`type-coverage`) پسرفت نمیکند؛ تا حد زیادی جایگزین `typecheck:noimplicit:core` میشود                                                | بله                   |
| `check:codeql-ratchet`       | تعداد هشدارهای باز CodeQL پسرفت نمیکند (از طریق `gh api` میخواند؛ بدون توکن با ملایمت رد میشود) — تناوب نوسازی و اجرای دستی: بخش «CodeQL ratchet» را در ادامه ببینید      | بله                   |

### وظیفه: `quality-extended`

کل این وظیفه جنبهٔ توصیهای دارد (`continue-on-error: true`). سازوکارهای ratchet مبتنی بر npm
واقعاً اجرا میشوند؛ اسکنرهای خارجی از طریق `gh release download` نصب میشوند و
اگر فایل اجرایی همچنان موجود نباشد، خودبهخود از اجرا صرفنظر میکنند (exit 0).

| اسکریپت                  | موارد اعتبارسنجیشده                                                                                                                                                                                     | مسدودکننده  |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `check:circular-deps`    | نبود وابستگیهای دوری (dpdm)                                                                                                                                                                             | **توصیهای** |
| `check:bundle-size`      | اندازهٔ بسته از سقف تعیینشده فراتر نمیرود                                                                                                                                                               | **توصیهای** |
| `check:secrets`          | اسکن اسرار (gitleaks) — در صورت نبود فایل اجرایی، صرفنظر میشود                                                                                                                                          | **توصیهای** |
| `check:vuln-ratchet`     | آسیبپذیریهای وابستگیها (osv-scanner) پسرفت نمیکنند — در صورت نبود فایل اجرایی، صرفنظر میشود                                                                                                             | **توصیهای** |
| `check:workflows`        | بررسی صحت workflowها (actionlint + zizmor) — در صورت نبود فایلهای اجرایی، صرفنظر میشود                                                                                                                  | **توصیهای** |
| `check:openapi-breaking` | تغییرات ناسازگار در قرارداد API عمومی (`openapi.yaml`) نسبت به شاخهٔ پایه (oasdiff) — مقدار `openapiBreaking=N` را تولید میکند؛ اگر oasdiff موجود نباشد یا مشخصات پایه قابل دستیابی نباشد، صرفنظر میشود | **توصیهای** |

### وظیفه: `docs-sync-strict`

در هر PR به `main` اجرا میشود. در صورت شکست، ادغام را مسدود میکند.

| اسکریپت                        | اعتبارسنجی                                                                                                                                                    | مسدودکننده                |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| `check:docs-all`               | دروازهٔ فراگیری که ۶ زیردروازهٔ زیر را بهترتیب اجرا میکند                                                                                                     | بله                       |
| ↳ `check:docs-sync`            | سازگاری نسخه میان CHANGELOG / OpenAPI / llm.txt                                                                                                               | بله                       |
| ↳ `check:docs-counts`          | تعدادهای ذکرشده در متن (تعداد ارائهدهندگان، تعداد مهاجرتها و غیره) در محدودهٔ جغجغهای تعدادهای واقعی قرار دارند                                               | بله                       |
| ↳ `check:env-doc-sync`         | هر متغیر محیطی در `.env.example` در یکی از جدولهای مستندات ثبت شده است و بالعکس                                                                               | بله                       |
| ↳ `check:deprecated-versions`  | هیچ رشتهٔ نسخهٔ منسوخی در مستندات وجود ندارد                                                                                                                  | بله                       |
| ↳ `check:doc-links`            | پیوندهای داخلی markdown در مستندات به فایلهای واقعی ارجاع میدهند (با قالب `[text]`/`(path)`)                                                                  | بله                       |
| ↳ `check:fabricated-docs`      | مسیرها، متغیرهای محیطی، فرمانهای CLI، نام هوکها و مسیر فایلهای ذکرشده در مستندات، در پایگاه کد وجود دارند. دروازهٔ سخت با `--strict`؛ شکست نرم بدون این پرچم. | بله (با `--strict` در CI) |
| `check:cli-i18n`               | رشتههای فرمان CLI در همهٔ فایلهای زبان i18n وجود دارند                                                                                                        | بله                       |
| `check:openapi-coverage`       | مشخصات OpenAPI دستکم کف جغجغهای تعیینشدهای از مسیرهای واقعی را پوشش میدهد                                                                                     | بله                       |
| `check:openapi-security-tiers` | حاشیهنویسیهای سطح امنیتی در `openapi.yaml` با طبقهبندیهای `routeGuard.ts` سازگار هستند                                                                        | **مشورتی**                |
| `check:openapi-routes`         | هر مسیر در `openapi.yaml` به یک `route.ts` واقعی ارجاع میدهد (ضد توهم)                                                                                        | بله                       |
| `check:docs-symbols`           | هر ارجاع `/api/...` در `docs/**/*.md` به یک `route.ts` واقعی ارجاع میدهد (ضد توهم)                                                                            | بله                       |
| `i18n translation drift`       | کلیدهای ترجمهنشده در فایلهای زبان i18n — فقط هشدار                                                                                                            | **مشورتی**                |

### کار: `i18n-ui-coverage`

| اسکریپت                            | اعتبارسنجی                                                                                                                                                                                     | مسدودکننده |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `check-ui-keys-coverage` (درونخطی) | پوشش کلیدهای i18n رابط کاربری ≥ 65% است                                                                                                                                                        | بله        |
| `check-ui-value-drift` (درونخطی)   | بازنویسی یک **مقدار** انگلیسی، هیچ ترجمهٔ کهنهای باقی نمیگذارد                                                                                                                                 | بله        |
| `check-new-key-coverage` (درونخطی) | یک کلید انگلیسی **جدید** به همهٔ زبانها میرسد                                                                                                                                                  | بله        |
| `check-translation-ratio`          | نسبت ترجمهٔ واقعی در هر زبان (موارد یکسان با انگلیسی / جاینگهدار / ورودیهای مفقود خارج از فهرست مجاز) نباید از `config/quality/i18n-translation-baseline.json` بهاضافهٔ حاشیهٔ ارفاق تجاوز کند | **مشورتی** |

به `fetch-depth: 0` نیاز دارد — دروازهٔ انحراف مقدار، تفاوت `en.json` را با مبنای ادغام بررسی میکند.

#### `check-ui-value-drift` — دروازهٔ ترجمهٔ کهنه

آن رگرسیون i18n را شناسایی میکند که دیگر دروازهها از نظر ساختاری قادر به تشخیصش نیستند: یک مقدار انگلیسی
بازنویسی میشود، اما ترجمههای برگرفته از نسخهٔ _پیشین_ انگلیسی باقی میمانند؛ بنابراین
کاربران غیرانگلیسی همچنان متنی با لحنی مطمئن، اما اکنون نادرست، میخوانند.

این مشکل واقعاً منتشر شد. `oauthModal.googleOAuthWarning` هنگام اضافهشدن ابزار کمکی ورود Antigravity
بازنویسی شد (#5203)؛ **۳۹ مورد از ۴۳ زبان** متنی را حفظ کردند که به اپراتورها میگفت «نشانی اینترنتی
کامل را کپی و در پایین جایگذاری کنید» — جریانی که برای آن ارائهدهنده قابل تکمیل نیست. این مشکل
تا #8463 دیده نشد، زیرا:

- `sync-ui-keys` فقط کلیدهایی را که **وجود ندارند** تکمیل میکند، نه کلیدهایی را که **کهنه** هستند؛
- `check-ui-keys-coverage` _وجود_ کلید را میشمارد، بنابراین یک ترجمهٔ کهنه بهعنوان پوششدادهشده امتیاز میگیرد؛
- `check-translation-drift` نسخههای آینهای مستندات در `docs/i18n/<locale>/**.md` را ردیابی میکند —
  و هرگز `src/i18n/messages/*.json` را نمیخواند. از همگامسازی مجدد 2026-09 به بعد، در کار `docs-sync-strict` مسدودکننده است:
  یک سند اصلی را ویرایش کنید → `npm run i18n:run -- --files=<doc>` (در سطح بخش، کمهزینه).

**آگاه از diff، بدون اتکا به baseline.** این بررسی، `en.json` در merge base را با
working tree مقایسه میکند؛ برای هر کلیدی که مقدار انگلیسی آن تغییر کرده است، هر localeای که همچنان
ترجمهٔ دستنخورده را نگه داشته باشد، منسوخ محسوب میشود. این کار عمداً **بدهی ازپیشموجود را ثابت نگه میدارد** — یک diff
نمیتواند مشخص کند که ترجمهای قدیمی و دیرپا از کدام متن انگلیسی قبلی منشأ گرفته است، بنابراین gate
فقط مواردی را ارزیابی میکند که تغییر فعلی به آنها دست میزند. گزینهٔ جایگزین (یک baseline مبتنی بر hash برای هر کلید)
به یک فایل تولیدشدهٔ حدوداً 600 KB نیاز دارد که 3× بزرگتر از بزرگترین baseline موجود است و در هر PR مربوط به i18n
دچار تغییرات گسترده میشود.

دو راه برای برآوردهکردن آن وجود دارد:

1. ترجمههای تحتتأثیر را بهروزرسانی کنید، یا
2. آنها را روی `__MISSING__:<new english>` تنظیم کنید — سپس runtime متن انگلیسی اصلاحشده را ارائه میدهد
   (`src/i18n/request.ts::deepMergeFallback`، #7258) و کلید برای ترجمه در صف قرار میگیرد.

اگر **معنای** رشته تغییر کرده است، **تغییر نام کلید** را ترجیح دهید: یک کلید جدید نمیتواند
ترجمهای منسوخ را به ارث ببرد. این همان الگویی است که #8463 استفاده کرد.

```bash
npm run i18n:check-value-drift          # سختگیرانه (همان چیزی که CI اجرا میکند)
npm run i18n:check-value-drift:warn     # فقط گزارش
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

هنگامی که catalog پایه قابل خواندن نباشد (clone کمعمق بدون ref پایه)، با `SKIP reason=base-unresolved`
و کد 0 خارج میشود و رفتار `check-openapi-breaking` را منعکس میکند.

### Job: `i18n`

ماتریس کامل اعتبارسنجی i18n (یک job برای هر locale). کل job جنبهٔ توصیهای دارد.

| اسکریپت                         | مورد اعتبارسنجی               | مسدودکننده                                         |
| ------------------------------- | ----------------------------- | -------------------------------------------------- |
| `validate_translation.py quick` | کاملبودن ترجمه برای هر locale | **توصیهای** (`continue-on-error: true` روی کل job) |

### Job: `pr-test-policy`

فقط روی pull requestها اجرا میشود.

| اسکریپت                | مورد اعتبارسنجی                                                                                                                                    | مسدودکننده |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `check:pr-test-policy` | PRهایی که کد production را در `src/`، `open-sse/`، `electron/` یا `bin/` تغییر میدهند باید تستها را اضافه یا بهروزرسانی کنند (قانون سختگیرانهٔ #8) | بله        |
| `check:test-masking`   | فایلهای تست تغییرکرده، تعداد خالص assertها را کاهش نمیدهند یا همانگوییهای `assert.ok(true)` را اضافه نمیکنند                                       | بله        |
| `check:pr-evidence`    | بدنهٔ PR برای تغییر به شواهد تست/VPS استناد میکند (قانون سختگیرانهٔ #18 را با grep کردن متن PR ماشینی میکند — شکننده است، Backlog را ببینید)       | بله        |

### Job: `test-vitest`

پس از `build` اجرا میشود. در صورت شکست، merge را مسدود میکند.

| مجموعه           | مورد اعتبارسنجی                                            | مسدودکننده                                                                                                            |
| ---------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `test:vitest`    | سرور MCP (110 ابزار)، autoCombo، cache — اجراکنندهٔ vitest | بله                                                                                                                   |
| `test:vitest:ui` | تستهای مؤلفههای UI — اجراکنندهٔ vitest                     | **مسدودکننده** — شکستهای ازپیشموجود بهطور صریح در `vitest.config.ts` مستثنا شدهاند؛ شکستهای جدید باعث شکست job میشوند |

### Workflowهای شبانه (زمانبندیشده، توصیهای)

این موارد طبق زمانبندی cron (و `workflow_dispatch`) اجرا میشوند و هرگز روی PRها اجرا نمیشوند. همگی توصیهای هستند.

| Workflow               | مورد اعتبارسنجی                                                                                                                                                   | مسدودکننده  |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `nightly-property`     | تستهای property مبتنی بر fast-check با seed تصادفی + تعداد اجرای بالا                                                                                             | **توصیهای** |
| `nightly-resilience`   | gate رشد heap، تزریق خطای chaos، بار/soak با k6                                                                                                                   | **توصیهای** |
| `nightly-llm-security` | محافظ تزریق promptfoo (حالت block) + probeهای garak (بدون secret ارائهدهنده نادیده گرفته میشود)                                                                   | **توصیهای** |
| `nightly-schemathesis` | fuzzing قرارداد OpenAPI با schemathesis علیه یک OmniRoute زنده با استفاده از `docs/openapi.yaml` — نقضهای spec / خطاهای 500 مدیریتنشده را آشکار میکند (فاز 8 B.4) | **توصیهای** |
| `nightly-mutation`     | امتیاز mutation testing با Stryker روی مسیر سریع unit — mutantهای باقیمانده، assertهای ضعیف را آشکار میکنند                                                       | **توصیهای** |
| `nightly-compat`       | ماتریس سازگاری موتور Node در محدودههای پشتیبانیشدهٔ `engines.node`                                                                                                | **توصیهای** |

---

## فاز شتاب (2026-08-30 → v4.0 LTS): همهٔ خطوط مبنا 20٪ تسهیل شدند

تصمیم مالک پروژه (2026-08-30): تا زمان ماژولارسازی v4.0، سرعت انتشار اهمیت بیشتری
از مهار بدهی دارد. همهٔ خطوط مبنای **عددی** جغجغهای، طی یک مرحلهٔ قابل ممیزی 20٪ تسهیل
شدند و این فاز در `config/quality/quality-baseline.json` اعلام شده است:

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| چه چیزی تغییر کرد                                                                                                                                                                                                | کجا                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `metrics.*.value` — تعدادهایی که کمتر بودنشان بهتر است ×1.2، درصدهایی که بیشتر بودنشان بهتر است ÷1.2 (کف پوشش 60 حفظ شد، `eslintErrors` روی 0 باقی ماند، `eslintWarnings` از 0 → به 20٪ تعداد ثابت سرکوبها رسید) | `quality-baseline.json` (یادداشت `_relax_velocity_2026_08_30` همهٔ مقادیر قبل → بعد را فهرست میکند)    |
| `count` ×1.2 / `percentage` ×1.2                                                                                                                                                                                 | `complexity-baseline.json`، `duplication-baseline.json`                                                |
| `cap`، `testCap`، سقف تعداد خطوط هر `frozen[*]` / `testFrozen[*]` ×1.2                                                                                                                                           | `file-size-baseline.json`                                                                              |
| تعدادهای هر فایل / هر کد TS ×1.2                                                                                                                                                                                 | `api-typecheck-baseline.json`، `dashboard-typecheck-baseline.json`، `open-sse-typecheck-baseline.json` |
| `THRESHOLD` از 36 → به 30                                                                                                                                                                                        | `scripts/check/check-openapi-coverage.mjs`                                                             |
| تا زمانی که `_policy.requireTighten === false` باشد، `--require-tighten` جنبهٔ توصیهای دارد                                                                                                                      | `scripts/quality/check-quality-ratchet.mjs`                                                            |
| اجرای شبانهٔ `bank-ratchet-shrinks` متوقف میشود (در غیر این صورت، کاهش اندازهگیریشده را ثبت کرده و فضای آزاد ایجادشده را از بین میبرد)                                                                           | `.github/workflows/nightly-release-green.yml`                                                          |

فهرستهای مجاز (`eslint-suppressions.json`، `test-masking-allowlist.json`، `test-discovery-baseline.json`،
…) **بودجه** نیستند و تغییری نکردهاند. گیتهای سیاستی قبولی/ردی (اسرار، قواعد SQL،
قرارداد مستندات/محیط، برابری i18n، آزمونهای واحد) بدون تغییر ماندهاند — آزمون قرمز همچنان آزمون قرمز است.

**ابزارها**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — عملیات
  یکبارهٔ تسهیل خطوط مبنا (`scripts/quality/relax-baselines.mjs`)؛ از اجرای دوباره با
  همان یادداشت خودداری میکند.
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  هر گیت عددی را دقیقاً به همان شیوهٔ CI اندازهگیری میکند و فضای آزاد باقیمانده برای هر گیت را
  نمایش میدهد (`scripts/quality/baseline-headroom.mjs`). کار شبانهٔ `baseline-headroom`
  جدول را در ایشوی زندهٔ **📈 فضای آزاد خط مبنا (فاز شتاب)** ارسال میکند و هرگاه گیتی به
  فاصلهٔ 10٪ از سقف خود برسد یا از آن عبور کرده باشد، برچسب `headroom-alert` را میافزاید. آن ایشو
  هشدار زودهنگام است: بودجهای که ظرف چند روز پر میشود یعنی تسهیل ایجادشده توسط چند PR
  مصرف میشود، نه کل تیم — یادداشتهای `_rebaseline_*` گیت متخلف را بررسی کنید.

**حالت کد جدید (Clean-as-You-Code) — از 2026-08-30، فقط برای مسیر سریع PR**

در رویدادهای `pull_request`، فایل `quality.yml` گزینهٔ `--base-ref <PR base SHA>` را به
`check:file-size`، `check:complexity-ratchets` و `check:dead-code` ارسال میکند. در این حالت،
گیت HEAD را با merge-base **محدود به فایلهایی که PR تغییر داده است** مقایسه میکند
(`scripts/check/newCodeMode.mjs`: ‏merge-base در یک `git worktree` موقت ایجاد میشود،
ESLint/knip در آنجا و روی HEAD اجرا میشوند و اختلاف تعدادهای هر فایل محاسبه میشود):

- **مسدودکننده** — ‏PR در فایلهایی که تغییر داده است، تخلفهای پیچیدگی سیکلوماتیک/شناختی یا exportهای مرده افزوده باشد
  (`complexityNewCode=`، `cognitiveComplexityNewCode=`، `deadExportsNewCode=` در گزارش)؛
- **توصیهای** — مجموع سراسری در مقایسه با خط مبنای ثابت. رانش بهارثرسیده هرگز یک
  PR بیتقصیر را قرمز نمیکند؛ این رانش هنگام تطبیق انتشار دوباره ثابت میشود و کار headroom آن را پایش میکند.

اجراهای `workflow_dispatch`، پیمایش release-green و کار شبانهٔ headroom هیچ مبنای PRای
ندارند و مقایسهٔ مطلق (سراسری) را حفظ میکنند. پوشش، تکرار و پوشش نوع فعلاً سراسری باقی
میمانند (ابزارهای آنها نمیتوانند با هزینهٔ کم diff هر فایل را تولید کنند) — اینها نامزدهای دریافت همین رویکرد هستند.

**پایاندادن به فاز در v4.0 (‏LTS = سختگیرانهتر از قبل، نه «بازگشت به حالت عادی»)**

1. روی نوک دستنخوردهٔ `release/v4.0.0`: برای ثبت، `npm run quality:headroom --json` را اجرا کنید، سپس
   `npm run quality:ratchet -- --update`، `check:file-size --update`،
   `check:complexity-ratchets --update`، `check:dead-code --update` و
   `--update` مربوط به هر دروازهٔ typecheck را اجرا کنید — هر خط مبنا به مقدار اندازهگیریشده کاهش مییابد.
2. `_policy` را از `quality-baseline.json` حذف کنید (تا `--require-tighten` و ذخیرهسازی شبانه
   دوباره فعال شوند) و `THRESHOLD = 36` (یا بیشتر) را در `check-openapi-coverage.mjs` بازیابی کنید.
3. در بخشهایی که ماژولارسازی نتیجه داده است، محدودیتها را فراتر از مقادیر اندازهگیریشده سختگیرانهتر کنید: `cap` اندازهٔ فایل را دوباره روی 1000
   (یا 800) تنظیم کنید، کفهای پوشش را 5 واحد افزایش دهید و تعداد exportهای مرده را برای پکیجهای ماژولارسازیشده روی 0 قرار دهید.

## خط مبنای Ratchet (`quality-baseline.json`)

موتور ratchet (`scripts/quality/check-quality-ratchet.mjs`) فایل `quality-baseline.json`
را میخواند و آن را با `quality-metrics.json` که بهتازگی جمعآوری شده مقایسه میکند. هر معیاری که بیش از
اپسیلون خود پسرفت کند، باعث شکست build میشود.

معیارهای فعلی تحت پایش:

| معیار                 | جهت    | معنا                                    |
| --------------------- | ------ | --------------------------------------- |
| `eslintWarnings`      | `down` | تعداد هشدارهای ESLint نباید افزایش یابد |
| `coverage.statements` | `up`   | پوشش دستورها نباید کاهش یابد            |
| `coverage.lines`      | `up`   | پوشش خطوط نباید کاهش یابد               |
| `coverage.functions`  | `up`   | پوشش توابع نباید کاهش یابد              |
| `coverage.branches`   | `up`   | پوشش شاخهها نباید کاهش یابد             |

برای بهروزرسانی خط مبنا پس از یک بهبود واقعی:

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

پرچم `--update` مقادیر اندازهگیریشده فعلی را در `quality-baseline.json` مینویسد.
این فایل را همراه با تغییری که معیار را بهبود داده است commit کنید. PRای که یک
معیار را بدون بهروزرسانی خط مبنا بهبود دهد، توسط `--require-tighten` شناسایی خواهد شد (فاز 6A.5،
در انتظار پیادهسازی).

### ratchet مربوط به CodeQL: تناوب نوسازی و اجرای دستی

`check:codeql-ratchet` **وضعیت repo را میخواند که طبق یک زمانبندی نوسازی میشود — نه بهازای هر PR.**
`gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup` مقادیر
`state: configured` و `schedule: weekly` را گزارش میکند: اسکن default-setup گیتهاب، نه تحلیلی بهازای هر push.
نتیجه: پس از merge شدن PRای که هشدارها را رفع میکند، ratchet تا زمان اجرای اسکن زمانبندیشده بعدی
همچنان تعداد قدیمی و بالاتر را میخواند — بنابراین تا زمانی که اسکن بهروز شود، در هر PR باز،
از جمله PRهای تکمیلی مربوط به همان PR اصلاحکننده، یک پسرفت گزارش میکند.

**نوسازی دستی**: دستور `gh workflow run codeql.yml --ref release/vX.Y.Z`
تحلیل را دوباره اجرا میکند و هشدارها را ظرف چند دقیقه مجدداً منتشر میکند. ابتدا `.github/workflows/codeql.yml`
را بخوانید — سرآیند آن توضیح میدهد که این workflow فقط برای `workflow_dispatch` است، **زیرا با
"default setup" گیتهاب تداخل دارد** (`CodeQL analyses from advanced configurations cannot be
processed when the default setup is enabled`). بازگرداندن triggerهای `push`/`pull_request`/
`schedule` ابتدا به **اقدام مالک** نیاز دارد: Settings → Code security →
CodeQL: Default → Advanced. بدون انجام این تغییر، trigger مربوط به `schedule:` را اضافه نکنید — این کار
فقط اجراهای ناموفق ایجاد خواهد کرد.

**پس از کاهش تعداد، خط مبنا را سختگیرانهتر کنید** — دستور `node scripts/check/check-codeql-ratchet.mjs
--update` تعداد اندازهگیریشده جدید را در `quality-baseline.json` →
`metrics.codeqlAlerts.value` مینویسد تا ratchet بهطور بیسروصدا پسرفت به سقف قدیمی را مجاز نکند.
نمونه عملی (2026-09-02/03): PR #12502 تعداد 7 هشدار واقعی را رفع کرد
(تعداد هشدارهای باز اندازهگیریشده از 13 به 6 رسید)؛ PR #12530 خط مبنای ثابتشده را از 11 به 6 سختگیرانهتر کرد تا مطابقت داشته باشد؛
سپس 6 هشدار باقیمانده با ارائه توجیه جداگانه برای هر هشدار رد شدند و تعداد هشدارهای باز به 0 رسید.

**رد کردن هشدارها بر عهده اپراتور است (قانون سختگیرانه #14)** — هرگز یک هشدار CodeQL را
بدون ثبت توجیه فنی در نظر رد کردن آن، رد نکنید: `won't fix` برای
الزامی ناشی از پروتکل بالادستی، `used in tests` برای fixture آزمایشی، و `false positive`
برای sanitizerای که CodeQL قادر به تشخیص آن نیست (سابقه: `docs/security/ERROR_SANITIZATION.md`).

---

## سیاست تلاش مجدد آزمونها (WS5.4، v3.8.49)

تلاش مجدد برای هر اجراکننده بهصورت جداگانه تعریف میشود و هرگز یک سیاست سراسری نیست — تلاش مجدد سراسری، پسرفتهای واقعی را به آزمونهای ناپایدار نامرئی تبدیل میکند:

| اجراکننده        | سیاست                                                                                                                                               | دلیل                                                                                                                       |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Playwright (e2e) | فقط در CI، مقدار `retries: 1` همراه با `trace: on-first-retry`                                                                                      | زمانبندی مرورگر/شبکه واقعاً غیرقطعی است؛ یک تلاش مجدد همراه با ردیابی، آزمون ناپایدار را به یک خروجی قابلتشخیص تبدیل میکند |
| Vitest           | بدون تلاش مجدد سراسری. آزمونی که ناپایداری آن اثبات شده است، تلاش مجدد صریح مختص همان آزمون دریافت میکند (در diff قابلمشاهده و در PR بازبینی میشود) | فهرست قرنطینه را در مخزن و بهصورت شفاف نگه میدارد                                                                          |
| node:test (unit) | هرگز تلاش مجدد انجام نمیشود                                                                                                                         | آزمون واحد ناپایدار، یک اشکال در خود آزمون است — آن را اصلاح کنید، نه اینکه دوباره بخت خود را امتحان کنید                  |

SLOهای هدف پس از راهاندازی تلهمتری آزمونهای ناپایدار (WS5.2/5.3): نرخ ناپایداری کمتر از 1% برای هر آزمون
(آستانه «همین حالا اصلاح شود»)، و نرخ موفقیت حداقل 95% برای هر خط لوله. اینها مقادیر مرجع صنعت هستند —
آنها را بر اساس اندازهگیریهای خودمان دوباره تنظیم کنید.

## انحراف جغجغهای در سطح انتشار (WS5.5، v3.8.49)

وقتی یک جغجغه (اندازه فایل، پیچیدگی، هشدارهای eslint) در رأس خالص انتشار پسرفت میکند
— یعنی **ترکیب** ادغامها باعث پسرفت شده است و هیچ PR منفردی بهتنهایی روی شاخه خودش
آن را بازتولید نمیکند — مسئولیت اصلاح، **برای یک بار و روی شاخه انتشار، بر عهده راهبر انتشار است**:
استخراج/بازآرایی را ترجیح دهید؛ فقط همراه با ثبت توجیه مستند، خط مبنا را دوباره تنظیم کنید.
هرگز انحراف ناشی از ترکیب را به PR یک مشارکتکننده تحمیل نکنید و هرگز برای هر PR بهصورت جداگانه
خط مبنا را دوباره تنظیم نکنید (این کار پسرفتهای واقعی را پنهان میکند). ابتدا علت را تفکیک کنید:
پیش از آنکه فرض کنید PR شما عامل آن بوده است، وضعیت قرمز را در یک worktree آزمایشی و روی رأس خالص بازتولید کنید.

## ذخیرهسازی کاهشهای جغجغه — جهت نزولی (#8584)

جغجغه فقط نیمهخودکار است، و آن هم نیمه اشتباه. **افزایش** یک سقف، ویرایش دستی JSON است
که ده ثانیه زمان میبرد و سریعترین راه برای رفع انسداد یک PR قرمز است.
**کاهش** سقف مستلزم آن است که شخصی `--update` را اجرا و نتیجه را commit کند — و تا پیش از
راهاندازی job مربوط به `bank-ratchet-shrinks`، هیچ workflowای آن را اجرا نمیکرد. پیامد اندازهگیریشده
(2026-07-25): تعداد 18 فایل منجمد از قبل روی سقف 800 خطی فایل جدید یا پایینتر از آن بودند؛ بدترین مورد
132 برابر بود (`src/shared/validation/schemas.ts`، فایلی 19 خطی با سقف 2,523)؛ سقف پیچیدگی طی حدود
37 یادداشت بازتنظیم خط مبنا از `1794 → 2169` افزایش یافت و دقیقاً یک کاهش (−1) داشت؛ و عبارت
«در چرخه بعدی از طریق `--update` محدودتر شود» 31 بار نوشته شد و فقط یک بار رعایت شد. سقفی که
پس از حذف کدی که آن را توجیه میکرد همچنان باقی بماند، بیسروصدا هر تجزیه تکمیلشده را به مجوزی
برای رشد در اختیار فرد بعدی که فایل را ویرایش میکند تبدیل میکند.

`nightly-release-green.yml` → job **`bank-ratchet-shrinks`** این چرخه را کامل میکند:

|            |                                                                                                 |
| ---------- | ----------------------------------------------------------------------------------------------- |
| اجرا در    | `schedule` (3 بار در روز) + `workflow_dispatch` — عمداً **نه** در `push`                        |
| اندازهگیری | بالاترین `release/vX.Y.Z`، با همان guard مربوط به resolution + injection در `release-green`     |
| نوشتن      | `check:file-size --update` و `check:complexity-ratchets --update` (هر دو ذاتاً فقط کاهشی هستند) |
| اعتبارسنجی | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                        |
| تحویل      | یک PR همیشه بهروز علیه شاخه انتشار — با بهروزرسانی اجباری و بدون هرزنگاری                       |

ذخیرهسازی بهجای انجام در هر push، بهصورت دستهای انجام میشود، زیرا هیچ الزام تأخیری ندارد
(ذخیرهشدن یک کاهش ظرف 8 ساعت قابلقبول است)، در حالی که اجرای آن برای هر ادغام، طی کارزارهای
ادغام بارها شاخه PR را بازسازی میکند و هر بار هزینه پیمایش کامل ESLint را تحمیل میکند.
تشخیص همچنان هنگام push (`release-green`) انجام میشود؛ فقط ذخیرهسازی بهصورت دستهای است.

### اعتبارسنج ایمنی

این job بدون نظارت انسانی در خطوط مبنا مینویسد، بنابراین `verify-ratchet-bank.mjs` همان چیزی است
که این کار را قابلقبول میکند. این ابزار درخت پس از `--update` را با `HEAD` مقایسه میکند و
**پیش از ایجاد هرگونه commit، job را متوقف میکند** — بدون بازکردن هیچ PR — مگر آنکه هر تغییر
یکی از موارد زیر باشد:

- یک ورودی عددی `frozen` / `testFrozen` که **کاهش یافته** یا **حذف شده** باشد
- `complexity-baseline.json` → مقدار `count` **کاهش یافته** باشد
- `quality-baseline.json` → مقدار `metrics.cognitiveComplexity.value` **کاهش یافته** باشد

هر چیز دیگری ناموفق تلقی میشود: افزایش یک عدد، افزودن یک ورودی، تغییر `cap`/`testCap`، یا
حذف/بازنویسی یادداشت `_rebaseline_*` (این یادداشتها سابقه ممیزی دلیل وجود هر سقف هستند و در
همان شیء `frozen` حاوی ورودیهای فایل ذخیره میشوند). باتی که بتواند سقفی را افزایش دهد، قطعاً
از وضعیت موجود بدتر خواهد بود. guard پسرفت: `tests/unit/verify-ratchet-bank.test.ts`.

این job هرگز چیزی را به `release/*` push نمیکند — یک انسان PR را ادغام میکند، بنابراین یک
اندازهگیری نادرست نمیتواند بدون بازبینی وارد شود.

## خطمشی فهرست مجاز

هر دروازهای که نباید بهدلیل تخلفهای ازپیشموجود شکست بخورد، از یک فهرست مجاز ثابت استفاده میکند
(برای مثال، `KNOWN_STALE_DOC_REFS`، `KNOWN_MISSING`، `KNOWN_RAW_SQL`). خطمشی به این صورت است:

**علت ریشهای را برطرف کنید؛ فقط زمانی از فهرست مجاز استفاده کنید که تخلف از قبل وجود داشته باشد و
نتوان آن را در همان PR برطرف کرد.**

هنگام افزودن یک ورودی به فهرست مجاز:

1. دیدگاهی شامل دلیل توجیهی اضافه کنید.
2. به مسئلهٔ پیگیری ارجاع دهید (برای مثال، `// #3498 — قابلیت فاز ۲، هنوز پیادهسازی نشده است`).
3. ورودی را در همان PR که تخلف را برطرف میکند حذف کنید — ورودی منسوخی که دیگر
   یک تخلف فعال را نادیده نمیگیرد، خود یک نقص است (اجرای منسوخ 6A.3 پس از
   پیادهسازی، دروازه را بهدلیل ورودی یتیمشدهٔ فهرست مجاز ناموفق خواهد کرد).

برای سریعتر پاسشدن آزمونها، ورودی به فهرست مجاز اضافه **نکنید**. دروازهای سبز با فهرست مجازی که پیوسته
بزرگتر میشود، برداشتی کاذب از کیفیت ایجاد میکند.

### وقتی یک دروازه روی PR شما شکست میخورد

1. **خروجی دروازه را با دقت بخوانید** — دقیقاً به شما میگوید کدام فایل یا نماد
   قانون را نقض کرده است.
2. **تخلف را برطرف کنید** — بیشتر دروازهها بررسیهای قطعیِ سیستم فایل هستند که بهمحض
   صحیحشدن کد پاس میشوند.
3. **اگر تخلف از قبل وجود داشته است** (یعنی شما آن را ایجاد نکردهاید، اما دروازه اکنون
   آن را پوشش میدهد): یک ورودی فهرست مجاز همراه با دیدگاه توجیهی و یک مسئلهٔ پیگیری اضافه کنید.
4. **اگر دروازه از نوع ضامندار است** (پوشش، هشدارهای ESLint، تکرار، پیچیدگی):
   تغییر شما معیار را بدتر کرده است. مشکل زیربنایی را برطرف کنید، یا (بهندرت) اگر تغییر
   عمدی است و افت معیار پذیرفتنی است، `npm run quality:ratchet -- --update` را اجرا کنید
   — اما دلیل آن را در توضیحات PR مستند کنید.
5. **دروازههای مشورتی** (`continue-on-error: true`) صرفاً اطلاعرسان هستند — ادغام را
   مسدود نمیکنند، اما در خلاصهٔ CI ظاهر میشوند. بااینحال آنها را برطرف کنید.

---

## افزودن یک دروازهٔ جدید

1. `scripts/check/check-<name>.mjs` (یا `.ts`) را ایجاد کنید. دروازههای خطمشی با 0/1 خارج میشوند.
   دروازههای ضامندار از طریق `collect-metrics.mjs` یک معیار را در `quality-metrics.json` منتشر میکنند.
2. `"check:<name>": "node scripts/check/check-<name>.mjs"` را به `package.json` اضافه کنید.
3. آن را در `.github/workflows/ci.yml` و زیر کار مناسب متصل کنید
   (خطمشی → `lint` یا `docs-sync-strict`؛ ضامندار → `quality-gate`).
4. اگر دارای فهرست مجاز است، `reportStaleEntries()` را از
   `scripts/check/lib/allowlist.mjs` اعمال کنید تا ورودیهای منسوخ بهطور خودکار شناسایی شوند.
5. آزمونی در `tests/unit/build/` بنویسید که منطق تشخیص دروازه را پوشش دهد.
6. این سند را بهروزرسانی کنید (یک ردیف به جدول کار مرتبط اضافه کنید).

---

## ابزارهای عامل: LSP-in-the-loop (اختیاری)

فراتر از دروازههای CI، OmniRoute یک چارچوب `agent-lsp` **اختیاری** ارائه میکند
(یک `.mcp.json` در سطح پروژه، فاز ۷ وظیفهٔ ۱۵). `.mcp.json` را ایجاد کنید
تا یک سرور زبان TypeScript را در اختیار عاملهای کدنویسی قرار دهد و آنها نمادها /
عیبیابیها را **پیش از** نوشتن کد بررسی کنند — مکملی برای کامپایل پیش از ادعا در کنار
`typecheck:core` که خطاهای «نماد ساختگی» را از مبدأ کاهش میدهد. این چارچوب عمداً
بهصورت خودکار بارگذاری نمیشود (شما پل MCP↔LSP را انتخاب و تأیید میکنید)؛ یک ورودی خراب فقط
یک خطای اتصال را ثبت میکند و هرگز نشستها را مختل نمیکند.

---

## فهرست معوقهی منطقیسازی (بازبینی ROI — فاز 9 موج 3)

این فهرست در 2026-06-17 با `ci.yml` تطبیق داده شد (نسخهی قبلی
`audit:deps`، `check:tracked-artifacts`، `check:lockfile`، `check:licenses`،
`check:dead-code`، `check:cognitive-complexity`، `check:type-coverage`،
`check:codeql-ratchet` و `check:pr-evidence` را از قلم انداخته بود). بازبینی ROI مجموعهی
تطبیقدادهشده، گزینههای زیر را برای منطقیسازی مشخص کرد. **ادغامها تغییرات مکانیکی CI
هستند؛ تغییر وضعیتها/حذفها تصمیمهای سیاستیاند که در اختیار اپراتور قرار دارند.** هنوز هیچیک
از موارد زیر اعمال نشده است.

**موارد دیگری که در بالا مستند نشدهاند** (مشورتی، با سیگنال ضعیف): job مربوط به `docs-lint`
(markdownlint + Vale، با `continue-on-error` برای کل job) و workflowهای اسکنر مستقل
`semgrep.yml` / `codeql.yml` / `scorecard.yml`. مقدار `semgrepFindings: 0` در
`quality-baseline.json` وجود دارد، اما در `ci.yml` به ratchet مسدودکنندهای متصل نیست — این معیار
در حال حاضر بدون استفاده مانده است.

### ادغام / حذف موارد تکراری (مکانیکی، با ریسک کمتر)

هر گزینه در 2026-06-17 با وضعیت زندهی gate اعتبارسنجی شد (اعتماد کن، اما راستیآزمایی هم بکن)؛
چند ادغام «بدیهی» مشخص شد که بدهی پنهانی دارند و **جایگزینهای مستقیم و بیدردسری نیستند**.

- **`check:docs-sync` دو بار اجرا میشود** — یکبار بهصورت مستقل در job مربوط به `lint` و بار دیگر داخل `check:docs-all` (`docs-sync-strict`) و hook مربوط به pre-commit در husky. ✅ **انجام شد** — فراخوانی مستقل `lint` حذف شد.
- **اسکن CVE** — ❌ **ادغام تمیزی نیست.** `audit:deps` در صورت وجود هر CVE با شدت بالا/بحرانی، hard-fail میشود؛ `check:vuln-ratchet` (osv) فقط در صورت وقوع _پسرفت_ نسبت به baseline شکست میخورد (در حال حاضر 1 مورد MODERATE). معناشناسی آنها متفاوت است — حذف `audit:deps` باعث از دست رفتن gate مطلق مربوط به شدت بالا/بحرانی میشود. هر دو حفظ شوند.
- **تشخیص چرخه** — ❌ **ادغام تمیزی نیست.** `check:circular-deps` (dpdm) تعداد **91 چرخه** گزارش میکند (به همین دلیل مشورتی است)؛ بدون برطرفکردن آنها نمیتوان آن را به حالت مسدودکننده ارتقا داد و دامنهی آن از `check:cycles` سبز و گزینششده گستردهتر است. `check:cycles` بهصورت مسدودکننده حفظ شود؛ رفع 91 چرخهی dpdm خود یک مورد مستقل در فهرست معوقه است.
- **پیچیدگی** — ✅ **انجام شد** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`): یک پیمایش ESLint، با شمارش بر اساس ruleId تا baselineهای cyclomatic+max-lines و cognitive مستقل بمانند؛ `check:complexity` / `check:cognitive-complexity` جداگانه برای اجرای محلی با `--update` حفظ میشوند.
- **ضدتوهم `/api`** — ✅ **انجام شد** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`): یک فهرستبرداری FS از `src/app/api`؛ openapi-routes و docs-symbols همچنان بهطور مستقل گزارش میدهند؛ موارد جداگانه برای اجراهای محلی حفظ میشوند.
- **`check:node-runtime` در 11 job اجرا میشود** — ⚠️ **ROI پایین.** هرکدام روی runner جداگانهای اجرا میشوند و زمان بررسی کمتر از 1 ثانیه است؛ صرفهجویی کلی حدود 10 ثانیه خواهد بود، درحالیکه یک محافظ ارزانقیمت برای هر job از دست میرود. ارزش این تغییر را ندارد.
- **`typecheck:noimplicit:core` در lint مربوط به CI** — ✅ **از job مربوط به lint حذف شد** (قبلاً با `continue-on-error` مشورتی بود)؛ سطح type مسدودکننده شامل `typecheck:core` + `check:type-coverage` است. اسکریپت محلی حفظ شد.

### تغییر وضعیت / تصمیمگیری (سیاست اپراتور)

- `check:openapi-security-tiers` (مشورتی) — ❌ **نمیتوان وضعیت آن را بهسادگی تغییر داد.** با کد 0 خارج میشود، اما هشدار میدهد که چند route مربوط به `traffic-inspector` تحت `LOCAL_ONLY_API_PREFIXES` فاقد annotation مربوط به `x-loopback-only: true` هستند. اجباریکردن آن مستلزم افزودن آن annotationها به `openapi.yaml` است.
- `typecheck:noimplicit:core` (مشورتی) — تا حد زیادی توسط ratchet مسدودکنندهی `check:type-coverage` پوشش داده میشود. آن را به ratchet تبدیل کنید یا اجرای دوم و تکراری `tsc` را حذف کنید.
- `test:vitest:ui` (اکنون **مسدودکننده**) — شکستهای ازپیشموجود در `vitest.config.ts` بهطور صریح با کامنتهای پیگیری `// #8618` مستثنا شدهاند؛ شکستهای جدید باعث شکست job میشوند.
- `check:secrets` (gitleaks، یک ratchet مسدودکننده که روی 3 مثبت کاذب مستندشده ثابت شده است) — آن 3 مورد را در allowlist قرار دهید تا به 0 برسد، یا آن را به حالت مشورتی تنزل دهید. با secret-scanning بومی GitHub و `check:public-creds` همپوشانی دارد.
- `check:pr-evidence` (مسدودکننده، متن بدنهی PR را با grep جستوجو میکند) — ریسک مثبت کاذب بالایی دارد؛ حذف آن اجرای Hard Rule #18 را تضعیف میکند، بنابراین این واقعاً یک تصمیم سیاستی است.
- `semgrep` (مستقل و مشورتی) — برای خانوادههای OWASP با CodeQL همپوشانی دارد؛ baseline آن را به یک ratchet متصل کنید یا حذفش کنید.

---

## مستندات مرتبط

- زنجیرهٔ تأمین (منشأ، SBOM، Trivy، Scorecard): [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — دروازهٔ برابری مجموعهکلیدها

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`، کار `i18n-ui-coverage`).
مجموعهٔ کلیدهای برگ هر `src/i18n/messages/<locale>.json` را با `en.json` مقایسه میکند و در صورت
وجود هر برگ غایب یا اضافی، صرفنظر از زمان افزودهشدن کلید، شکست میخورد. جاینگهدارهای
`__MISSING__:` موجود محسوب میشوند (محتوای آنها به دروازهٔ نسبت مربوط است). این دروازه مکمل مطلق
دو دروازهٔ مبتنی بر diff/درصد است: `check-ui-keys-coverage` برای هر locale حداقل 80 % را الزام میکند
(43 کلید غایب از حدود 13,000 کلید همچنان 99.7 % نمایش داده میشود) و `check-new-key-coverage` فقط
کلیدهایی را ارزیابی میکند که یک PR به `en.json` میافزاید. یک دستهٔ locale بر پایهٔ نسخهٔ روز
`en.json` در زمان ایجاد شاخهاش تولید میشود و در حالی که شاخهٔ پایه به افزودن کلیدها ادامه میدهد،
ترجمهٔ آن چند روز طول میکشد؛ خود PR دسته هیچ کلیدی اضافه نمیکند، بنابراین وقتی دستهٔ 1 (#13044)
با کمبود 43 کلید در 9 locale و دستهٔ 2 (#13660) با کمبود 10 کلید در 8 locale ادغام شدند
(2026-09-15)، هر دو دروازهٔ همخانواده ساکت ماندند. وضعیت قرمز را با
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers` برطرف کنید؛ یک برگ `extra`
یعنی منبع آن را حذف کرده است — آن را از locale حذف کنید. `--warn` بدون شکستدادن گزارش میدهد.
`--catalog=cli` همین مقایسه را روی `bin/cli/locales` اجرا میکند (`npm run i18n:check-keys:cli`)؛
هر دو مرحله در کار `i18n-ui-coverage` قرار دارند.

#### `check-new-key-coverage` — دروازهٔ i18n برای کلیدهای جدید

همخانوادهٔ `check-ui-value-drift` است. آن دروازه زمانی را تشخیص میدهد که یک مقدار انگلیسی
**بازنویسی شده** اما ترجمههایش بهروزرسانی نشدهاند؛ این یکی زمانی را تشخیص میدهد که یک کلید
انگلیسی **افزوده شده** اما برخی localeها هرگز آن را دریافت نکردهاند.

`check-ui-keys-coverage` نمیتواند این دسته از خطاها را ببیند: این دروازه برای هر locale حداقل
درصدی را الزام میکند و غیبت یازده کلید از حدود 13,000 برگ، پوشش را روی 99.9% نگه میدارد.
یک درصد برای هر زبان نمیتواند مفهوم «این قابلیت بدون ترجمه منتشر شد» را بیان کند — ممکن است
یک قابلیت کامل در locale جدیدی بدون هیچ متنی وارد شود و هرگز این عدد را تغییر ندهد.

رخدادی که این دروازه ثبت میکند: فاز 3 از Orchestration Canvas یازده کلید خود را در 42 locale
موجود در آن زمان ترجمه کرد. چند ساعت بعد، دستهٔ زبانهای اتحادیهٔ اروپا (#13044) تعداد localeهای
مخزن را به 51 رساند و 9 تازهوارد (`el`، `et`، `ga`، `hr`، `lt`، `lv`، `mt`، `sl`، `sr`) هرگز
آن کلیدها را دریافت نکردند. `deepMergeFallback` برای کلید غایب، متن انگلیسی را جایگزین میکند؛
بنابراین حالت خرابی، رابط کاربری ترجمهنشده بود نه رابط کاربری خالی — مشکلی واقعی که بهصورت
ذاتی بیصدا بود.

این دروازه نیز مانند همخانوادهاش **از diff آگاه است** و نسخهٔ انگلیسی در merge base را با
درخت کاری مقایسه میکند؛ بنابراین شکافهای ازپیشموجود ثابت میمانند و فعالسازی دروازه به هیچ
مهاجرتی نیاز نداشت. راه فرار: `__MISSING__:<english>` ترجمه را به تعویق میاندازد و در عین حال
رفتار صحیح زمان اجرا را حفظ میکند. `vi` جاینگهدارها را ممنوع میکند
(`tests/unit/i18n-vi-completeness.test.ts`) و به ترجمهٔ واقعی نیاز دارد.

#### `check-vitest-exclusions` — دروازهٔ آزمونهای کنارگذاشتهشده

فایلی در فهرست `exclude` متعلق به `vitest.config.ts`، آزمونی است که اجرا نمیشود اما برای کسی
که درخت را میخواند مانند پوشش آزمون به نظر میرسد. شصتودو فایل پشت این توضیح انباشته شدند:
`// #8618 — خرابی ازپیشموجود؛ پس از رفع، این استثنا را حذف کنید`. Issue شمارهٔ #8618 در
2026-08-11 بسته شد، در حالی که فهرست تحت پیگیری آن از 45 ورودی به 62 ورودی افزایش یافت و هر
ورودی جدید توضیحی را به ارث میبرد که به issue بستهشدهای اشاره میکرد. وقتی سرانجام این فهرست
فایلبهفایل اندازهگیری شد (#13204)، **51 مورد از 62 فایل بدون هیچ تغییری در کد منبع، روی درخت
فعلی با موفقیت اجرا شدند**.

این دروازه الزام میکند که هر استثنایی که به یک فایل واقعی منتهی میشود، (الف) یک issue رهگیری
را نام ببرد و (ب) همراه با وضعیت اندازهگیریشدهٔ خود در `config/quality/vitest-exclusions.json`
ظاهر شود؛ بنابراین افزودن یک مورد، بهجای یک خط دیگر در آرایهای 60 ورودی، یک diff قابلبازبینی
در فایلی اختصاصی خواهد بود. این دروازه عمداً آزمونهای مستثناشده را دوباره اجرا نمیکند — این کار
حدود 10 دقیقه زمان میبرد و باید در یک کار دورهای انجام شود؛ موجودی ثبت میکند که هر مورد آخرین
بار چه زمانی اندازهگیری شده است.
