# Quality Gates Reference (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

هذا المستند هو المرجع المعتمد لجميع بوابات جودة CI في OmniRoute.
وهو يصف كل بوابة، وما تتحقق منه، ومهمة CI التي تعمل ضمنها، وما إذا كانت تستخدم
خط أساس تصاعديًا أم سياسة نجاح/فشل، وما إذا كانت تحظر عملية البناء أم أنها استشارية.

للاطلاع على ملخص موجز وسياسة قائمة السماح، راجع قسم "بوابات الجودة والخطوط الأساسية التصاعدية"
في `AGENTS.md`. وللاطلاع على التقييم النقدي، وتصنيف النضج، وخطة النسخ المحايدة للأدوات
للنظام نفسه، راجع
[دليل بوابات الجودة](../ops/QUALITY_GATE_PLAYBOOK.md).

---

## قائمة البوابات (~90 برنامجًا نصيًا)

توجد البرامج النصية ضمن `scripts/check/` (بوابات السياسات) و`scripts/quality/` (محرك الخط الأساسي التصاعدي).
ومصدر الحقيقة الخاص بـ CI هو `.github/workflows/ci.yml`.

### المسار السريع لطلبات سحب الإصدار (`quality.yml`)

يعمل `.github/workflows/quality.yml` على طلبات السحب التي تستهدف `release/**`. وهو يحافظ على تقدم
فروع المساهمين من خلال بوابات سريعة مُرشَّحة حسب المسار، بالإضافة إلى إشارة استشارية واحدة لبناء الإنتاج
في حالة تغييرات الشيفرة:

| المهمة                                           | النطاق                                                                                                                                                                                                                  | الحظر                                                                                                |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `Build (advisory)`                               | طلبات سحب الشيفرة غير المسودة وفروع قائمة انتظار Mergify؛ Node 24، و`npm-ci-retry`، و`check:node-runtime`، و`npm run build` مع `OMNIROUTE_USE_TURBOPACK=1`؛ لا يتم رفع أي أثر لأنه لا توجد مهمة جودة لاحقة تستهلكه      | **استشارية** (`continue-on-error: true`؛ يُزال بعد أسبوع واحد من التشغيل المستقر لطلبات سحب الإصدار) |
| `Docs Gates (fast-path)`                         | طلبات سحب التوثيق/الشيفرة؛ مراجع توثيق API وجميع التوثيقات                                                                                                                                                              | نعم                                                                                                  |
| `Fast Quality Gates`                             | طلبات سحب الشيفرة؛ فحوصات ساكنة، وفحص الأنواع، وفحص أنواع لوحة المعلومات، واختبارات الوحدة المتأثرة                                                                                                                     | نعم                                                                                                  |
| `Forgotten sibling tests`                        | طلبات سحب الشيفرة؛ تتبُّع الوحدات المتغيرة إلى المستهلكين الساكنين واختبارات النظائر المرشحة؛ تُبلَّغ مسارات ملفات التجميع وعمليات الاستيراد الديناميكي بوصفها تشخيصات استشارية، مع استثناءات قائمة السماح المشار إليها | **استشارية**                                                                                         |
| `Vitest (fast-path)`                             | طلبات سحب الشيفرة؛ حزمة اختبارات vitest السريعة                                                                                                                                                                         | نعم                                                                                                  |
| `Unit Tests fast-path`                           | طلبات سحب الشيفرة؛ حزمة اختبارات الوحدة ذات الأجزاء الأربعة                                                                                                                                                             | نعم                                                                                                  |
| `No new ESLint warnings`                         | طلبات سحب الشيفرة؛ حارس lint مدرك لعمليات الكبت                                                                                                                                                                         | نعم للمصدر الخاص، واستشارية للتفرعات                                                                 |
| `Merge integrity (changelog + generated skills)` | طلبات السحب غير المسودة؛ مزامنة سجل التغييرات والمهارات المُنشأة                                                                                                                                                        | نعم للمصدر الخاص، واستشارية للتفرعات                                                                 |

#### تقرير اختبارات النظائر المنسية

يعيد `npm run check:forgotten-sibling-tests` استخدام محلل الاستيراد الذي تستند إليه خريطة تأثير الاختبارات.
ولكل وحدة إنتاج متغيرة، فإنه يُبلغ عن سلاسل حتمية من الشكل
`changed module/symbol -> static consumer -> candidate sibling test` عندما لا يكون الاختبار المرشح
موجودًا في فروق طلب السحب. ويُحتفظ بملخص Markdown ونتيجة JSON بوصفهما
أثر سير العمل `forgotten-sibling-tests` لأغراض المعايرة قبل أي طرح للحظر.

عمليات إعادة التصدير عبر ملفات التجميع وعمليات الاستيراد الديناميكي هي تشخيصات دقة فقط؛ ولا تُنشئ مطلقًا
نتيجة حاظرة. توجد الاستثناءات المُراجعة في
`config/quality/forgotten-sibling-allowlist.json`. يجب أن يحدد كل إدخال المستهلك والاختبار المرشح،
وأن يقدم مسوغًا محددًا، وأن يتضمن رابطًا إلى مشكلة أو طلب سحب على GitHub. تؤدي الإدخالات غير الصالحة
إلى الفشل الآمن. لا يمكن للاستثناءات كبت اختبار مرشح محذوف أو فرق يضيف `.skip`/`.todo`؛
ويظل إضعاف التأكيدات وغيره من أساليب الإخفاء ضمن مسؤولية بوابة
`check:test-masking` المستقلة والحاظرة.

### المهمة: `lint`

تعمل على كل طلب سحب إلى `main`. وتحظر الدمج عند الفشل.

| البرنامج النصي (`npm run ...`)    | ما يتحقق منه                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | حاجب                                    |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| `check:node-runtime`              | أن إصدار Node.js يقع ضمن النطاق المدعوم                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | نعم                                     |
| `check:cycles`                    | الاستيرادات الدائرية — جميع وحدات `src/` + `open-sse/`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | نعم                                     |
| `check:route-validation:t06`      | وجود مخططات Zod في جميع المسارات (سياسة المستوى 6)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | نعم                                     |
| `check:any-budget:t11`            | ألا يتجاوز عدد `@ts-expect-error // any` الميزانية المحددة (بوابة المستوى 11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | نعم                                     |
| `check:provider-consistency`      | أن يكون لكل موفّر في `providers.ts` إدخال مطابق في `providerRegistry.ts` (والعكس صحيح، ضمن قائمة السماح)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | نعم                                     |
| `check:model-lifecycle`           | أن تظل جداول التوجيه الثلاثة المُدارة يدويًا متسقة مع لقطة دورة الحياة المضمّنة في المستودع (#11503): لا يمنح `FITNESS_TABLE` (`taskFitness.ts`) درجةً لأي معرّف متقاعد يمكن لـ `REGISTRY` توجيهه؛ وأن يكون كل هدف في `BUILT_IN_ALIASES` موجودًا في `REGISTRY` وغائبًا عن لقطة المعرّفات المتقاعدة؛ وأن تتم إعادة توجيه كل معرّف متقاعد ما زال موجودًا في `REGISTRY` أو إدراجه في `allowedRetiredInCatalog`؛ وألا يظهر أي مصدر أو هدف من `DEFAULT_DEGRADATION_MAP` كمتقاعد في تلك اللقطة. لا يثبت هذا أن النموذج مخدوم حاليًا من جهة مصدر مباشرة. يعمل دون اتصال — إذ يقارن مع `config/quality/model-lifecycle.json`، الذي يُحدَّث يدويًا باستخدام `npm run quality:refresh-model-lifecycle` (يتطلب الشبكة؛ غير موصول بالتكامل المستمر). يمثّل `allowedRetiredInCatalog` آلية تقليص تدريجية: لا تُضِف إدخالًا إلا مع مشكلة تتبّع. | نعم                                     |
| `check:fetch-targets`             | أن يُحلّ كل `fetch("/api/...")` في `src/` من جانب العميل إلى ملف `route.ts` حقيقي                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | نعم                                     |
| `check:deps`                      | أن تكون جميع التبعيات القابلة للتثبيت عبر `npm install` في كل ملف `package.json` داخل المستودع مدرجة في `dependency-allowlist.json`؛ مع الإبلاغ عن الحزم الجديدة غير المثبّتة بإصدار محدد أو التي تنطوي على استحواذ إملائي مضلل                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | نعم                                     |
| `audit:deps`                      | تنفيذ `npm audit` (الجذر + electron) — عدم وجود تنبيهات عالية/حرجة (يتداخل مع osv `check:vuln-ratchet`؛ راجع سجل ترشيد الأعمال المتراكمة)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | نعم                                     |
| `check:lockfile`                  | سلامة `package-lock.json` — سجل https، وتجزئات السلامة، وعدم وجود تجاوزات للمضيف                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | نعم                                     |
| `check:licenses`                  | قائمة سماح بتراخيص SPDX لتبعيات الإنتاج                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | نعم                                     |
| `check:tracked-artifacts`         | عدم وجود نواتج بناء / روابط رمزية ملتزم بها إلى `node_modules` (يعمل أيضًا في فحص husky السابق للالتزام؛ فحص ما قبل الدفع خفيف عمدًا — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | نعم                                     |
| `check:vitest-exclusions`         | أن يسمّي كل استثناء في Vitest مشكلة تتبّع وأن يظهر في `config/quality/vitest-exclusions.json` (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | نعم                                     |
| `check:file-size`                 | ألا يتجاوز أي ملف مصدر الحد الأقصى المحدد لكل امتداد (آلية تقليص: الملفات الكبيرة المجمّدة في قائمة `frozen`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | نعم                                     |
| `check:error-helper`              | أن تستخدم استجابات الأخطاء في المنفّذات/المعالجات `buildErrorBody()` / `sanitizeErrorMessage()` (القاعدة الصارمة #12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | نعم                                     |
| `check:migration-numbering`       | أن تكون ملفات SQL الخاصة بالترحيل مرقمة تسلسليًا، دون فجوات أو تكرارات                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | نعم                                     |
| `check:public-creds`              | عدم وجود قيم OAuth حرفية لـ `client_id`/`client_secret` أو مفاتيح Firebase Web خارج `publicCreds.ts` (القاعدة الصارمة #11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | نعم                                     |
| `check:db-rules`                  | عدم وجود SQL خام خارج وحدات `src/lib/db/`؛ وعدم وجود استيرادات تجميعية من `localDb.ts` (القاعدتان الصارمتان #2/#5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | نعم                                     |
| `check:known-symbols`             | أن تتطابق منفّذات الموفّرين واستراتيجيات التوجيه والمترجمات المسجلة في جداول الإرسال الخاصة بها مع الملفات الموجودة على القرص — دون رموز يتيمة أو غير مصرّح بها                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | نعم                                     |
| `check:route-guard-membership`    | أن يُصنَّف كل مسار ينشئ عملية فرعية بواسطة `isLocalOnlyPath()` (القاعدتان الصارمتان #15/#17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | نعم                                     |
| `check:test-discovery`            | أن يجمع مشغّل اختبار واحد على الأقل كل ملف `*.test.ts` / `*.spec.ts` في المستودع (آلية تقليص: لا يمكن لقائمة الملفات اليتيمة في `test-discovery-baseline.json` إلا أن تتقلص)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | نعم                                     |
| `check:agent-skills-sync`         | أن تتطابق نواتج مهارات الوكلاء المُولّدة مع كتالوجها المصدري (دون انحراف)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `check:provider-asset-provenance` | أن تحمل شعارات/أصول الموفّرين إدخال منشأ مسجّلًا                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `lint:json`                       | أن تُحلَّل ملفات إعداد JSON وتستوفي قواعد التدقيق الخاصة بالمستودع                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `typecheck:core`                  | ترجمة TypeScript دون أخطاء (تحذيرات استشارية فقط)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | نعم                                     |
| `typecheck:noimplicit:core`       | تطبيق صارم لـ `noImplicitAny` — استشرافي؛ لا تزال العديد من مواضع الاستدعاء الموجودة مسبقًا بحاجة إلى تعليقات توضيحية للأنواع                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | **استشاري** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | تشغيل `tsc` بنطاق يقتصر على `src/app/(dashboard)/**` (#7033) — لا تتضمن قائمة السماح المنقّحة المكوّنة من 27 ملفًا في `typecheck:core` أي ملف TSX للوحة المعلومات، كما أن `next build` لا يتحقق من أنواعها أيضًا (يضبط `next.config.mjs` الخيار `ignoreBuildErrors: true`)، ولذلك كانت حالات الانحدار المتعلقة بالمعرّفات اليتيمة هناك (#6625/#6909) غير مرئية للتكامل المستمر. تُقارَن النتائج بخط أساس مجمّد لعدد الأخطاء لكل ملف ولكل رمز TS (`config/quality/dashboard-typecheck-baseline.json`، باتباع نمط فرض تقادم مماثل لـ `check:known-symbols`) — لا تُفشل البوابة إلا الأخطاء الجديدة التي تتجاوز العدد المسجّل في خط الأساس؛ وقلّص خط الأساس باستخدام `--update` عند إصلاح خطأ موجود مسبقًا.                                                                                                                          | نعم                                     |

### المهمة: `quality-gate`

تُشغَّل بعد `test-coverage`. تمنع الدمج عند الفشل.

| البرنامج النصي               | ما يتحقق منه                                                                                                                                                 | الحظر                  |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------- |
| `quality:collect`            | يُنشئ `quality-metrics.json` (عدد تحذيرات ESLint، والتغطية من تقرير الأجزاء المدمج)                                                                          | نعم (قبل آلية التصعيد) |
| `quality:ratchet`            | عدم تراجع أي مقياس في `quality-baseline.json` (تحذيرات ESLint ≤ خط الأساس؛ التغطية ≥ خط الأساس)                                                              | نعم                    |
| `check:duplication`          | عدم تجاوز تكرار الشيفرة (jscpd@4) خط الأساس في `quality-baseline.json`                                                                                       | نعم                    |
| `check:complexity`           | عدم تجاوز التعقيد الدوري على مستوى الملف الحد الأقصى (قاعدتا ESLint الأساسيتان `complexity` و`max-lines-per-function`)                                       | نعم                    |
| `check:cognitive-complexity` | آلية تصعيد التعقيد المعرفي (`eslint-plugin-sonarjs`) — تمريرة ESLint منفصلة؛ يشغّل CI كليهما مدمجين ضمن خطوة `check:complexity-ratchets` واحدة               | نعم                    |
| `check:dead-code`            | عدم تراجع آلية تصعيد التصديرات / الملفات غير المستخدمة (knip) مقارنة بخط الأساس                                                                              | نعم                    |
| `check:compression-budget`   | ميزانية معيار ضغط الأداء — يجب ألا تتراجع الحدود الدنيا لتوفير الرموز لكل محرك                                                                               | نعم                    |
| `check:type-coverage`        | عدم تراجع آلية تصعيد نسبة الأنواع المحددة (`type-coverage`)؛ وهي تغطي إلى حد كبير `typecheck:noimplicit:core`                                                | نعم                    |
| `check:codeql-ratchet`       | عدم زيادة عدد تنبيهات CodeQL المفتوحة (تُقرأ عبر `gh api`؛ تخطٍّ سلس عند غياب الرمز المميز) — لدورية التحديث والتشغيل اليدوي: راجع "آلية تصعيد CodeQL" أدناه | نعم                    |

### المهمة: `quality-extended`

المهمة بأكملها استشارية (`continue-on-error: true`). تعمل آليات التصعيد المستندة إلى npm
فعليًا؛ أما أدوات الفحص الخارجية فتُثبَّت عبر `gh release download` وتتخطى نفسها (رمز الخروج 0)
عندما يظل الملف الثنائي غير موجود.

| البرنامج النصي           | ما يتحقق منه                                                                                                                                                                             | الحظر       |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `check:circular-deps`    | عدم وجود تبعيات دائرية (dpdm)                                                                                                                                                            | **استشاري** |
| `check:bundle-size`      | عدم تجاوز حجم الحزمة الحد الأقصى                                                                                                                                                         | **استشاري** |
| `check:secrets`          | فحص الأسرار (gitleaks) — يُتخطى إذا كان الملف الثنائي غير موجود                                                                                                                          | **استشاري** |
| `check:vuln-ratchet`     | عدم تراجع ثغرات التبعيات (osv-scanner) — يُتخطى إذا كان الملف الثنائي غير موجود                                                                                                          | **استشاري** |
| `check:workflows`        | تدقيق سير العمل (actionlint + zizmor) — يُتخطى إذا كانت الملفات الثنائية غير موجودة                                                                                                      | **استشاري** |
| `check:openapi-breaking` | التغييرات الكاسرة في عقد واجهة API العامة (`openapi.yaml`) مقارنة بالفرع الأساسي (oasdiff) — يُصدر `openapiBreaking=N`؛ يُتخطى إذا كان oasdiff غير موجود أو تعذر تحليل المواصفة الأساسية | **استشاري** |

### المهمة: `docs-sync-strict`

تُشغَّل عند كل طلب سحب إلى `main`. تمنع الدمج عند الفشل.

| السكربت                        | ما يتحقق منه                                                                                                                                                              | الحظر                      |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| `check:docs-all`               | بوابة شاملة تشغّل البوابات الفرعية الست أدناه بالتتابع                                                                                                                    | نعم                        |
| ↳ `check:docs-sync`            | اتساق الإصدارات بين CHANGELOG وOpenAPI وllm.txt                                                                                                                           | نعم                        |
| ↳ `check:docs-counts`          | الأعداد الواردة في النصوص (عدد المزوّدين، وعدد عمليات الترحيل، وما إلى ذلك) تقع ضمن نطاق التدرّج للأعداد الفعلية                                                          | نعم                        |
| ↳ `check:env-doc-sync`         | كل متغير بيئة في `.env.example` موثّق في جدول ضمن الوثائق، والعكس صحيح                                                                                                    | نعم                        |
| ↳ `check:deprecated-versions`  | عدم وجود سلاسل إصدارات مهملة في الوثائق                                                                                                                                   | نعم                        |
| ↳ `check:doc-links`            | روابط markdown الداخلية في الوثائق تؤدي إلى ملفات حقيقية (بصيغة `[text]`/`(path)`)                                                                                        | نعم                        |
| ↳ `check:fabricated-docs`      | المسارات، ومتغيرات البيئة، وأوامر CLI، وأسماء نقاط الربط، ومسارات الملفات المذكورة في الوثائق موجودة في قاعدة الشيفرة. بوابة صارمة عبر `--strict`؛ وفشل غير مانع من دونه. | نعم (عبر `--strict` في CI) |
| `check:cli-i18n`               | سلاسل أوامر CLI موجودة في جميع ملفات اللغات الخاصة بالتدويل                                                                                                               | نعم                        |
| `check:openapi-coverage`       | مواصفات OpenAPI تغطي حدًا أدنى متدرجًا على الأقل من المسارات الفعلية                                                                                                      | نعم                        |
| `check:openapi-security-tiers` | تعليقات مستويات الأمان التوضيحية في `openapi.yaml` متسقة مع تصنيفات `routeGuard.ts`                                                                                       | **استشاري**                |
| `check:openapi-routes`         | كل مسار في `openapi.yaml` يؤدي إلى ملف `route.ts` حقيقي (لمنع الهلوسة)                                                                                                    | نعم                        |
| `check:docs-symbols`           | كل مرجع إلى `/api/...` في `docs/**/*.md` يؤدي إلى ملف `route.ts` حقيقي (لمنع الهلوسة)                                                                                     | نعم                        |
| `i18n translation drift`       | المفاتيح غير المترجمة في ملفات لغات التدويل — تحذير فقط                                                                                                                   | **استشاري**                |

### المهمة: `i18n-ui-coverage`

| السكربت                          | ما يتحقق منه                                                                                                                                                                                           | الحظر       |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| `check-ui-keys-coverage` (مضمّن) | تغطية مفاتيح تدويل واجهة المستخدم هي ≥ 65%                                                                                                                                                             | نعم         |
| `check-ui-value-drift` (مضمّن)   | إعادة كتابة **قيمة** إنجليزية لا تترك وراءها أي ترجمة قديمة                                                                                                                                            | نعم         |
| `check-new-key-coverage` (مضمّن) | وصول كل مفتاح إنجليزي **جديد** إلى جميع اللغات                                                                                                                                                         | نعم         |
| `check-translation-ratio`        | يجب ألا تتجاوز نسبة الترجمات الفعلية لكل لغة (القيم المطابقة للإنجليزية / العناصر النائبة / العناصر الناقصة خارج قائمة السماح) القيمة في `config/quality/i18n-translation-baseline.json` + هامش السماح | **استشاري** |

يتطلب `fetch-depth: 0` — إذ تقارن بوابة انحراف القيم ملف `en.json` مع قاعدة الدمج.

#### `check-ui-value-drift` — بوابة الترجمات القديمة

تكتشف هذه البوابة نوع التراجع الوحيد في التدويل الذي لا تستطيع البوابات الأخرى رؤيته بنيويًا: تُعاد كتابة قيمة إنجليزية
بينما تبقى الترجمات المشتقة من النص الإنجليزي _السابق_، ولذلك يستمر
المستخدمون غير الناطقين بالإنجليزية في قراءة نص مكتوب بصياغة واثقة لكنه أصبح خاطئًا.

حدث هذا فعليًا في إصدار منشور. أُعيدت كتابة `oauthModal.googleOAuthWarning` عند إضافة
مساعد تسجيل الدخول Antigravity (#5203)؛ وأبقت **39 من أصل 43 لغة** على نص يطلب من المشغّلين «نسخ
عنوان URL الكامل ولصقه أدناه» — وهي عملية لا يمكن إكمالها لذلك المزوّد. ولم
يُلاحظ ذلك حتى #8463 للأسباب التالية:

- لا يملأ `sync-ui-keys` إلا المفاتيح **الغائبة**، وليس المفاتيح **القديمة** أبدًا؛
- يحسب `check-ui-keys-coverage` _وجود_ المفتاح، لذا تُحتسب الترجمة القديمة على أنها مغطاة؛
- يتتبّع `check-translation-drift` النسخ المتطابقة من الوثائق في `docs/i18n/<locale>/**.md` —
  ولا يقرأ `src/i18n/messages/*.json` مطلقًا. وهو مانع في المهمة `docs-sync-strict` منذ
  إعادة المزامنة في 2026-09: عدّل مستندًا أساسيًا → `npm run i18n:run -- --files=<doc>` (على مستوى القسم، ومنخفض التكلفة).

**مدرك للفروقات، وغير مستند إلى خط أساس.** يقارن `en.json` عند قاعدة الدمج بشجرة
العمل؛ ولكل مفتاح تغيّرت قيمته الإنجليزية، تُعدّ أي لغة لا تزال تحتفظ بترجمة
لم تُمس قديمة. يؤدي هذا عمدًا إلى **تجميد الدَّين الموجود مسبقًا** — إذ لا يمكن للفرق
كشف النص الإنجليزي القديم الذي جاءت منه ترجمة قائمة منذ زمن، ولذلك لا تتحقق البوابة
إلا مما يلامسه التغيير الحالي. أما البديل (خط أساس لتجزئة كل مفتاح) فسيتطلب
ملفًا مولّدًا بحجم يقارب 600 KB، أي 3× أكبر خط أساس موجود، وسيتغير في كل طلب سحب خاص بالتدويل.

توجد طريقتان لاستيفاء ذلك:

1. تحديث الترجمات المتأثرة، أو
2. تعيينها إلى `__MISSING__:<new english>` — وعندئذ يقدّم وقت التشغيل النص الإنجليزي المصحح
   (`src/i18n/request.ts::deepMergeFallback`، #7258) ويُضاف المفتاح إلى قائمة انتظار الترجمة.

إذا تغيّر **معنى** السلسلة النصية، فمن الأفضل **إعادة تسمية المفتاح**: إذ لا يمكن لمفتاح جديد أن يرث
ترجمة قديمة. وهذا هو النمط الذي استخدمه #8463.

```bash
npm run i18n:check-value-drift          # صارم (ما تشغّله CI)
npm run i18n:check-value-drift:warn     # إنشاء تقرير فقط
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

ينتهي بالرمز 0 مع `SKIP reason=base-unresolved` عندما يتعذر قراءة الكتالوج الأساسي (نسخة
مستنسخة سطحية لا تتضمن المرجع الأساسي)، بما يماثل `check-openapi-breaking`.

### المهمة: `i18n`

مصفوفة تحقق كاملة للتدويل (مهمة واحدة لكل لغة). المهمة بأكملها استشارية.

| البرنامج النصي                  | ما يتحقق منه           | الحظر                                                      |
| ------------------------------- | ---------------------- | ---------------------------------------------------------- |
| `validate_translation.py quick` | اكتمال الترجمة لكل لغة | **استشاري** (`continue-on-error: true` على المهمة بأكملها) |

### المهمة: `pr-test-policy`

تعمل على طلبات السحب فقط.

| البرنامج النصي         | ما يتحقق منه                                                                                                                               | الحظر |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ----- |
| `check:pr-test-policy` | يجب أن تتضمن طلبات السحب التي تغيّر كود الإنتاج في `src/` أو `open-sse/` أو `electron/` أو `bin/` اختبارات أو تحدّثها (القاعدة الصارمة #8) | نعم   |
| `check:test-masking`   | ملفات الاختبار المتغيرة لا تقلّل العدد الصافي للتأكيدات ولا تضيف تحصيلات حاصلة من نوع `assert.ok(true)`                                    | نعم   |
| `check:pr-evidence`    | يستشهد نص طلب السحب بأدلة اختبار/VPS للتغيير (يؤتمت القاعدة الصارمة #18 عبر البحث في نص طلب السحب — هش، راجع قائمة الأعمال المتراكمة)      | نعم   |

### المهمة: `test-vitest`

تعمل بعد `build`. وتحظر الدمج عند الفشل.

| الحزمة           | ما تتحقق منه                                                           | الحظر                                                                                                              |
| ---------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `test:vitest`    | خادم MCP ‏(110 أداة)، وautoCombo، وذاكرة التخزين المؤقت — مشغّل vitest | نعم                                                                                                                |
| `test:vitest:ui` | اختبارات مكوّنات واجهة المستخدم — مشغّل vitest                         | **حاظر** — تُستثنى حالات الفشل الموجودة مسبقًا صراحةً في `vitest.config.ts`؛ أما حالات الفشل الجديدة فتُفشل المهمة |

### مهام سير العمل الليلية (مجدولة، استشارية)

تعمل هذه وفق جدول cron (وعبر `workflow_dispatch`)، ولا تعمل مطلقًا على طلبات السحب. وجميعها استشارية.

| سير العمل              | ما يتحقق منه                                                                                                                                                     | الحظر       |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `nightly-property`     | اختبارات الخصائص باستخدام fast-check مع قيمة ابتدائية عشوائية + عدد تشغيلات مرتفع                                                                                | **استشاري** |
| `nightly-resilience`   | بوابة نمو الكومة، وحقن أعطال الفوضى، واختبارات التحميل/الاستمرارية باستخدام k6                                                                                   | **استشاري** |
| `nightly-llm-security` | واقي الحقن في promptfoo (وضع الحظر) + فحوصات garak (تُتخطى من دون سر خاص بموفّر)                                                                                 | **استشاري** |
| `nightly-schemathesis` | اختبار عشوائي لعقد OpenAPI ‏(schemathesis) مقابل OmniRoute فعّال باستخدام `docs/openapi.yaml` — يكشف انتهاكات المواصفات / أخطاء 500 غير المعالجة (المرحلة 8 B.4) | **استشاري** |
| `nightly-mutation`     | نتيجة اختبار الطفرات باستخدام Stryker على مسار الوحدات السريع — تكشف الطفرات الناجية عن تأكيدات ضعيفة                                                            | **استشاري** |
| `nightly-compat`       | مصفوفة توافق محرك Node عبر نطاقات `engines.node` المدعومة                                                                                                        | **استشاري** |

---

## مرحلة السرعة (2026-08-30 → v4.0 LTS): تخفيف كل خط أساس بنسبة 20%

قرار المالك (2026-08-30): حتى اكتمال التقسيم إلى وحدات في v4.0، تُعد سرعة الإصدار أهم
من الحفاظ على حد الدين التقني. جرى تخفيف كل خط أساس **رقمي** للعتبات التصاعدية بنسبة 20% في عملية
واحدة قابلة للتدقيق، وتم الإعلان عن المرحلة في `config/quality/quality-baseline.json`:

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| ما الذي تغير                                                                                                                                                                                                                                           | أين                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `metrics.*.value` — الأعداد التي يكون الأقل فيها أفضل ×1.2، والنسب المئوية التي يكون الأعلى فيها أفضل ÷1.2 (تم الإبقاء على الحد الأدنى للتغطية عند 60، ويظل `eslintErrors` عند 0، ويتغير `eslintWarnings` من 0 إلى 20% من عدد عمليات التعطيل المجمّدة) | `quality-baseline.json` (تسرد ملاحظة `_relax_velocity_2026_08_30` كل قيمة قبل → بعد)                   |
| `count` ×1.2 / `percentage` ×1.2                                                                                                                                                                                                                       | `complexity-baseline.json`, `duplication-baseline.json`                                                |
| `cap` و`testCap` وحدّ الأسطر لكل عنصر في `frozen[*]` / `testFrozen[*]` ×1.2                                                                                                                                                                            | `file-size-baseline.json`                                                                              |
| الأعداد لكل ملف / لكل شيفرة TS ×1.2                                                                                                                                                                                                                    | `api-typecheck-baseline.json`, `dashboard-typecheck-baseline.json`, `open-sse-typecheck-baseline.json` |
| `THRESHOLD` من 36 → 30                                                                                                                                                                                                                                 | `scripts/check/check-openapi-coverage.mjs`                                                             |
| يصبح `--require-tighten` إرشاديًا عندما تكون `_policy.requireTighten === false`                                                                                                                                                                        | `scripts/quality/check-quality-ratchet.mjs`                                                            |
| إيقاف `bank-ratchet-shrinks` الليلي مؤقتًا (إذ كان سيسجل الانخفاض المقاس ويلغي الهامش المتاح)                                                                                                                                                          | `.github/workflows/nightly-release-green.yml`                                                          |

قوائم السماح (`eslint-suppressions.json` و`test-masking-allowlist.json` و`test-discovery-baseline.json`
وغيرها) ليست **ميزانيات** ولم تُعدّل. لم تتغير بوابات سياسة النجاح/الفشل (الأسرار، وقواعد SQL،
وعقد التوثيق/البيئة، وتكافؤ i18n، واختبارات الوحدات) — فالاختبار الفاشل يظل اختبارًا فاشلًا.

**الأدوات**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — عملية
  التخفيف أحادية التنفيذ (`scripts/quality/relax-baselines.mjs`)؛ وترفض التشغيل مرتين باستخدام
  الملاحظة نفسها.
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  يقيس كل بوابة رقمية بالطريقة نفسها التي يستخدمها CI ويطبع الهامش المتبقي لكل بوابة
  (`scripts/quality/baseline-headroom.mjs`). تنشر مهمة `baseline-headroom` الليلية
  الجدول في المشكلة المستمرة **📈 هامش خطوط الأساس (مرحلة السرعة)**، وتضيف التصنيف
  `headroom-alert` عندما تكون أي بوابة ضمن 10% من حدها الأقصى أو قد تجاوزته بالفعل. تمثل تلك المشكلة
  إنذارًا مبكرًا: فإذا امتلأت ميزانية خلال أيام، فهذا يعني أن التخفيف تستهلكه
  بضعة طلبات دمج، لا الفريق بأكمله — راجع ملاحظات `_rebaseline_*` الخاصة بالبوابة المخالفة.

**وضع الشيفرة الجديدة (Clean-as-You-Code) — منذ 2026-08-30، للمسار السريع لطلبات الدمج فقط**

في أحداث `pull_request`، يمرر `quality.yml` الخيار `--base-ref <PR base SHA>` إلى `check:file-size`
و`check:complexity-ratchets` و`check:dead-code`. في هذا الوضع، تقارن البوابة HEAD مع
قاعدة الدمج **مع الاقتصار على الملفات التي عدّلها طلب الدمج** (`scripts/check/newCodeMode.mjs`: يجري
تجسيد قاعدة الدمج في `git worktree` مؤقت، ويُشغّل ESLint/knip هناك وعلى HEAD، ثم تُحسب
فروق الأعداد لكل ملف):

- **مانع** — أضاف طلب الدمج مخالفات للتعقيد الدوري/الإدراكي أو صادرات غير مستخدمة في الملفات التي غيّرها
  (`complexityNewCode=` و`cognitiveComplexityNewCode=` و`deadExportsNewCode=` في السجل)؛
- **إرشادي** — الإجمالي العام مقارنةً بخط الأساس المجمّد. لا يؤدي الانحراف الموروث أبدًا إلى إفشال
  طلب دمج بريء؛ ويُعاد تجميد الانحراف أثناء تسوية الإصدار، بينما تراقبه مهمة الهامش.

لا تحتوي عمليات تشغيل `workflow_dispatch`، ولا فحص release-green، ولا مهمة الهامش الليلية على أساس
لطلب دمج، ولذلك تستمر في استخدام المقارنة المطلقة (العامة). تظل تغطية الاختبارات والتكرار وتغطية الأنواع
عامة في الوقت الحالي (فأدواتها لا تنتج فرقًا لكل ملف بتكلفة منخفضة) — وهي مرشحة للمعالجة نفسها.

**إغلاق المرحلة عند v4.0 (تعني LTS قيودًا أشد من السابق، لا «العودة إلى الوضع الطبيعي»)

1. على أحدث نسخة خالصة من `release/v4.0.0`: شغّل `npm run quality:headroom --json` للتوثيق، ثم
   `npm run quality:ratchet -- --update`، و`check:file-size --update`،
   و`check:complexity-ratchets --update`، و`check:dead-code --update`، و`--update` لكل بوابة من بوابات التحقق من الأنواع — بحيث ينخفض كل خط أساس إلى القيمة المقاسة.
2. احذف `_policy` من `quality-baseline.json` (لإعادة تفعيل `--require-tighten` والادخار
   الليلي)، وأعِد `THRESHOLD = 36` (أو قيمة أعلى) في `check-openapi-coverage.mjs`.
3. شدّد الحدود إلى ما هو أبعد من القيم المقاسة حيث أثمرت عملية التقسيم إلى وحدات: أعِد `cap` لحجم الملفات إلى 1000
   (أو 800)، وارفع الحدود الدنيا للتغطية بمقدار 5، واضبط عدد التصديرات غير المستخدمة على 0 للحزم التي جرى تقسيمها إلى وحدات.

## خط الأساس لآلية Ratchet ‏(`quality-baseline.json`)

يقرأ محرك ratchet ‏(`scripts/quality/check-quality-ratchet.mjs`) الملف `quality-baseline.json`
ويقارنه بالملف `quality-metrics.json` الذي جُمعت بياناته حديثًا. يؤدي أي مقياس يتراجع
بما يتجاوز قيمة epsilon الخاصة به إلى فشل عملية البناء.

المقاييس المتتبعة حاليًا:

| المقياس               | الاتجاه | المعنى                           |
| --------------------- | ------- | -------------------------------- |
| `eslintWarnings`      | `down`  | يجب ألا يزداد عدد تحذيرات ESLint |
| `coverage.statements` | `up`    | يجب ألا تنخفض تغطية العبارات     |
| `coverage.lines`      | `up`    | يجب ألا تنخفض تغطية الأسطر       |
| `coverage.functions`  | `up`    | يجب ألا تنخفض تغطية الدوال       |
| `coverage.branches`   | `up`    | يجب ألا تنخفض تغطية الفروع       |

لتحديث خط الأساس بعد حدوث تحسين فعلي:

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

تكتب العلامة `--update` القيم المقاسة حاليًا في `quality-baseline.json`.
ثبّت هذا الملف مع التغيير الذي حسّن المقياس. سيكتشف الخيار `--require-tighten` أي طلب PR
يحسّن مقياسًا من دون تحديث خط الأساس (المرحلة 6A.5،
قيد التنفيذ).

### آلية ratchet الخاصة بـ CodeQL: وتيرة التحديث والتشغيل اليدوي

يقرأ `check:codeql-ratchet` **حالة المستودع، التي تُحدَّث وفق جدول زمني — وليس لكل PR.**
يعرض `gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup`
القيمتين `state: configured` و`schedule: weekly`: أي فحص الإعداد الافتراضي في GitHub، وليس تحليلًا
يُجرى مع كل عملية دفع. والنتيجة: بعد دمج طلب PR يعمل على إصلاح التنبيهات، تستمر آلية ratchet في قراءة
العدد القديم الأعلى حتى تشغيل الفحص المجدول التالي — ولذلك تُبلغ عن تراجع
في كل طلب PR مفتوح، بما في ذلك المتابعات الخاصة بطلب PR الذي نفّذ الإصلاح، إلى أن يلحق الفحص بالتغييرات.

**التحديث اليدوي**: يعيد `gh workflow run codeql.yml --ref release/vX.Y.Z` تشغيل
التحليل وينشر التنبيهات مجددًا خلال دقائق. اقرأ `.github/workflows/codeql.yml`
أولًا — إذ يوضح ترويسته أنه مخصص لـ `workflow_dispatch` فقط **لأنه يتعارض مع
"الإعداد الافتراضي" في GitHub** (`CodeQL analyses from advanced configurations cannot be
processed when the default setup is enabled`). تتطلب استعادة مشغلات `push`/`pull_request`/
`schedule` **إجراءً من المالك أولًا**: Settings → Code security →
CodeQL: Default → Advanced. لا تضف مشغل `schedule:` من دون إجراء ذلك التبديل — فلن
ينتج عنه سوى عمليات تشغيل فاشلة.

**شدّد خط الأساس بعد انخفاض العدد** — يكتب `node scripts/check/check-codeql-ratchet.mjs
--update` العدد الجديد المقاس في `quality-baseline.json` →
`metrics.codeqlAlerts.value`، كي لا تسمح آلية ratchet ضمنيًا بحدوث تراجع يعيد العدد
إلى الحد الأقصى القديم. مثال عملي (2026-09-02/03): أصلح طلب PR رقم #12502 سبعة تنبيهات حقيقية
(من 13 إلى 6 تنبيهات مفتوحة مقاسة)؛ وشدّد طلب PR رقم #12530 خط الأساس المجمّد من 11 إلى 6 ليتطابق معه؛ ثم
رُفضت التنبيهات الستة المتبقية مع تقديم مبرر لكل تنبيه، حتى وصل عدد التنبيهات المفتوحة إلى 0.

**قرارات الرفض من اختصاص المشغّل (القاعدة الصارمة رقم #14)** — لا ترفض أبدًا تنبيه CodeQL
من دون تسجيل المبرر التقني في تعليق الرفض: `won't fix` لمتطلب يخص بروتوكولًا تابعًا لجهة خارجية،
و`used in tests` لوحدة اختبار ثابتة، و`false positive`
لأداة تنقية لا يستطيع CodeQL اكتشافها (السابقة: `docs/security/ERROR_SANITIZATION.md`).

---

## سياسة إعادة محاولة الاختبارات (WS5.4، v3.8.49)

تُطبَّق إعادة المحاولة لكل مشغّل على حدة، وليست سياسة عامة شاملة أبدًا — إذ إن إعادة المحاولة الشاملة تحوّل حالات التراجع الحقيقية
إلى اختبارات متذبذبة غير مرئية:

| المشغّل          | السياسة                                                                                                                | السبب                                                                                                            |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Playwright (e2e) | `retries: 1` في CI فقط، مع `trace: on-first-retry`                                                                     | توقيت المتصفح/الشبكة غير حتمي بطبيعته؛ وإعادة محاولة واحدة مع تتبّع تحوّل الاختبار المتذبذب إلى أثر قابل للتشخيص |
| Vitest           | لا توجد إعادة محاولة عامة. يحصل الاختبار المثبت تذبذبه على إعادة محاولة صريحة لكل اختبار (تظهر في الفرق وتُراجع في PR) | يُبقي قائمة العزل في المستودع، ولا يجعلها مبهمة أبدًا                                                            |
| node:test (unit) | لا إعادة محاولة، إطلاقًا                                                                                               | الاختبار الوحدوي المتذبذب هو خطأ في الاختبار — أصلحه، ولا تعِد تشغيله على أمل نتيجة مختلفة                       |

مستهدفات SLO بعد توافر قياس تذبذب الاختبارات (WS5.2/5.3): معدل تذبذب <1% لكل اختبار
(عتبة "الإصلاح الآن")، ومعدل نجاح ≥95% لكل مسار. هذه قيم مرجعية متداولة في المجال —
تُعاد معايرتها استنادًا إلى قياساتنا الخاصة.

## انحراف سقوف الضبط على مستوى الإصدار (WS5.5، v3.8.49)

عندما يتراجع أحد سقوف الضبط (حجم الملف، أو التعقيد، أو تحذيرات eslint) عند الطرف الخالص لفرع الإصدار
— أي إن **اجتماع** عمليات الدمج هو الذي سبّب التراجع، ولا يعيد أي PR منفرد إنتاج
التراجع على فرعه الخاص — فإن مسؤولية الإصلاح تقع على **قائد الإصدار، مرة واحدة، على
فرع الإصدار**: يُفضَّل الاستخراج/إعادة الهيكلة؛ ولا تُعَد معايرة خط الأساس إلا مع إدخال
التبرير الموثّق. لا تُحمِّل انحرافًا ناتجًا عن اجتماع التغييرات على PR لأحد المساهمين، ولا
تعِد معايرة خط الأساس لكل PR (فهذا يخفي حالات التراجع الحقيقية). ميّز السبب أولًا: أعِد إنتاج
حالة الفشل عند الطرف الخالص داخل شجرة عمل استقصائية قبل افتراض أن PR الخاص بك سبّبها.

## حفظ انخفاضات سقوف الضبط — الاتجاه التنازلي (#8584)

سقف الضبط مؤتمت إلى النصف فقط، وهو النصف الخطأ. **رفع** الحد الأقصى هو
تعديل يدوي على JSON يستغرق عشر ثوانٍ، وهو أسرع طريقة لإلغاء حظر PR فاشل.
أما **خفضه** فيتطلب من شخص تشغيل `--update` وإيداع النتيجة — وحتى
إطلاق مهمة `bank-ratchet-shrinks`، لم يكن هناك أي سير عمل يشغّلها. النتيجة المقاسة
(2026-07-25): يوجد 18 ملفًا مجمدًا بالفعل عند الحد الأقصى البالغ 800 سطر للملفات الجديدة أو دونه، وأسوأها
عند 132× (`src/shared/validation/schemas.ts`، إذ يحتوي 19 سطرًا مع حد أقصى قدره 2,523)؛ كما ارتفع
سقف التعقيد من `1794 → 2169` عبر نحو 37 ملاحظة لإعادة معايرة خط الأساس، مع انخفاض واحد بالضبط
(−1)؛ وكُتبت عبارة "التشديد عبر `--update` في الدورة التالية" 31 مرة ولم تُنفّذ إلا
مرة واحدة. الحد الأقصى الذي يبقى بعد زوال الشيفرة التي استوجبته يحوّل بصمت كل عملية
تفكيك مكتملة إلى سماح بالنمو لمن يعدّل الملف بعد ذلك.

`nightly-release-green.yml` → المهمة **`bank-ratchet-shrinks`** تغلق هذه الحلقة:

|           |                                                                                                           |
| --------- | --------------------------------------------------------------------------------------------------------- |
| تعمل عند  | `schedule` (3 مرات/يوم) + `workflow_dispatch` — وعمداً **ليس** عند `push`                                 |
| تقيس      | أعلى `release/vX.Y.Z`، مع آلية الحل نفسها + حاجز الحقن نفسه كما في `release-green`                        |
| تكتب      | `check:file-size --update` و`check:complexity-ratchets --update` (كلاهما لا يسمح إلا بالخفض بحكم التصميم) |
| تتحقق عبر | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                                  |
| تسلّم     | PR واحدًا محدّثًا دائمًا مقابل فرع الإصدار — يُحدَّث قسرًا، ولا يرسل طلبات مزعجة متعددة                   |

يُنفَّذ حفظ الانخفاضات على دفعات بدلًا من تنفيذه عند كل عملية دفع، لأنه لا يتطلب زمن استجابة منخفضًا (يكفي
حفظ الانخفاض خلال 8 ساعات)، بينما سيؤدي التشغيل عند كل دمج إلى إعادة بناء فرع PR مرارًا
أثناء حملات الدمج، مع تحمّل تكلفة فحص ESLint كامل في كل مرة. يظل الكشف عند
الدفع (`release-green`)؛ أما الحفظ وحده فيُنفَّذ على دفعات.

### أداة التحقق من السلامة

تكتب المهمة إلى خطوط الأساس دون إشراف، ولذلك فإن `verify-ratchet-bank.mjs` هو ما يجعل
ذلك مقبولًا. تقارن الأداة شجرة ما بعد `--update` مع `HEAD`، ثم **تُجهض المهمة
قبل وجود أي عملية إيداع** — من دون فتح أي PR — ما لم يكن كل تغيير واحدًا مما يلي:

- إدخال رقمي في `frozen` / `testFrozen` تم **خفضه** أو **إزالته**
- `complexity-baseline.json` → تم **خفض** `count`
- `quality-baseline.json` → تم **خفض** `metrics.cognitiveComplexity.value`

يفشل أي شيء آخر: رفع رقم، أو إضافة إدخال، أو تغيير `cap`/`testCap`، أو
حذف/إعادة كتابة ملاحظة `_rebaseline_*` (هذه الملاحظات هي سجل التدقيق الذي يوضح سبب وجود كل
سقف، وهي مخزنة داخل كائن `frozen` نفسه مع إدخالات الملفات).
أي روبوت يمكنه رفع حد أقصى سيكون أسوأ قطعًا من الوضع الراهن. حاجز التراجع:
`tests/unit/verify-ratchet-bank.test.ts`.

لا تدفع المهمة أبدًا إلى `release/*` — بل يدمج إنسان PR، بحيث لا يمكن
لقياس سيئ أن يصل دون مراجعة.

## سياسة قائمة السماح

تستخدم كل بوابة لا يمكن أن تفشل بسبب انتهاكات موجودة مسبقًا قائمة سماح مجمّدة
(مثل `KNOWN_STALE_DOC_REFS` و`KNOWN_MISSING` و`KNOWN_RAW_SQL`). والسياسة هي:

**أصلح السبب الجذري؛ ولا تستخدم قائمة السماح إلا عندما يكون الانتهاك موجودًا مسبقًا
ولا يمكن إصلاحه ضمن طلب السحب نفسه.**

عند إضافة إدخال إلى قائمة سماح:

1. أضف تعليقًا يوضّح المبرر.
2. أشر إلى مشكلة التتبع (مثل `// #3498 — ميزة المرحلة الثانية، لم تُنفّذ بعد`).
3. أزل الإدخال ضمن طلب السحب نفسه الذي يُصلح الانتهاك — فالإدخال المتقادم الذي لم يعد
   يمنع الإبلاغ عن انتهاك نشط يُعدّ عيبًا بحد ذاته (سيؤدي فرض التحقق من الإدخالات المتقادمة في 6A.3
   إلى إفشال البوابة عند وجود إدخال يتيم في قائمة السماح بمجرد تنفيذه).

**لا** تضف إدخالات إلى قائمة السماح لتسريع اجتياز الاختبارات. فالبوابة الناجحة مع قائمة سماح
متنامية تمنح إحساسًا زائفًا بالجودة.

### عندما تفشل بوابة في طلب السحب الخاص بك

1. **اقرأ مخرجات البوابة بعناية** — فهي تخبرك بدقة بالملف أو الرمز الذي خالف
   القاعدة.
2. **أصلح الانتهاك** — معظم البوابات عبارة عن عمليات تحقق حتمية من نظام الملفات تنجح بمجرد
   تصحيح الشيفرة.
3. **إذا كان الانتهاك موجودًا مسبقًا** (أي إنك لم تُدخله، لكن البوابة أصبحت
   تغطيه الآن): أضف إدخالًا إلى قائمة السماح مع تعليق يوضّح المبرر وإشارة إلى مشكلة تتبع.
4. **إذا كانت البوابة تصاعدية** (التغطية، وتحذيرات ESLint، والتكرار، والتعقيد):
   فقد جعل تغييرك المقياس أسوأ. أصلح المشكلة الأساسية، أو شغّل في حالات نادرة
   `npm run quality:ratchet -- --update` إذا كان التغيير مقصودًا وكان تراجع
   المقياس مقبولًا — لكن وثّق السبب في وصف طلب السحب.
5. **البوابات الاستشارية** (`continue-on-error: true`) إعلامية — فهي لا تمنع
   الدمج، لكنها تظهر في ملخص CI. أصلحها رغم ذلك.

---

## إضافة بوابة جديدة

1. أنشئ `scripts/check/check-<name>.mjs` (أو `.ts`). تُنهي بوابات السياسة التنفيذ بالرمز 0/1.
   وتصدر البوابات التصاعدية مقياسًا إلى `quality-metrics.json` عبر `collect-metrics.mjs`.
2. أضف `"check:<name>": "node scripts/check/check-<name>.mjs"` إلى `package.json`.
3. اربطها في `.github/workflows/ci.yml` ضمن المهمة المناسبة
   (السياسة ← `lint` أو `docs-sync-strict`؛ التصاعدية ← `quality-gate`).
4. إذا كانت لها قائمة سماح، فطبّق `reportStaleEntries()` من
   `scripts/check/lib/allowlist.mjs` لكي تُكتشف الإدخالات المتقادمة تلقائيًا.
5. اكتب اختبارًا في `tests/unit/build/` يغطي منطق الكشف الخاص بالبوابة.
6. حدّث هذا المستند (أضف صفًا إلى جدول المهمة ذات الصلة).

---

## أدوات الوكلاء: دمج LSP في الحلقة (اختياري)

إلى جانب بوابات CI، يوفّر OmniRoute هيكل `agent-lsp` **اختياريًا**
(ملف `.mcp.json` على مستوى المشروع، المهمة 15 من المرحلة 7). أنشئ `.mcp.json`
لإتاحة خادم لغة TypeScript لوكلاء البرمجة، حتى يتمكنوا من تحليل الرموز /
والتشخيصات **قبل** كتابة الشيفرة — وهو رفيق لـ`typecheck:core` يعمل وفق مبدأ الترجمة قبل الادعاء،
ويحدّ من أخطاء «الرموز المختلقة» من مصدرها. وهو لا يُحمّل تلقائيًا عن قصد
(إذ تختار جسر MCP↔LSP وتتحقق منه بنفسك)؛ ولا يؤدي الإدخال المعطّل إلا إلى تسجيل
خطأ اتصال، ولا يتسبب أبدًا في تعطيل الجلسات.

---

## قائمة ترشيد الأعمال المتراكمة (مراجعة العائد على الاستثمار — المرحلة 9، الموجة 3)

تمت مطابقة هذا الجرد مع `ci.yml` بتاريخ 2026-06-17 (أغفل الإصدار السابق
`audit:deps` و`check:tracked-artifacts` و`check:lockfile` و`check:licenses`
و`check:dead-code` و`check:cognitive-complexity` و`check:type-coverage`
و`check:codeql-ratchet` و`check:pr-evidence`). حدّدت مراجعة العائد على الاستثمار للمجموعة التي تمت مطابقتها
مرشحي الترشيد التاليين. **عمليات الدمج هي تغييرات ميكانيكية في CI؛ أما عمليات التفعيل/الحذف فهي قرارات تتعلق بالسياسة ومتروكة للمشغّل.** لم يُطبَّق أي مما يلي
حتى الآن.

**ومن الأمور غير الموثّقة أعلاه أيضًا** (استشارية، منخفضة الإشارة): مهمة `docs-lint`
(markdownlint + Vale، والمهمة بأكملها تستخدم `continue-on-error`) ومسارات عمل الفحص المستقلة
`semgrep.yml` / `codeql.yml` / `scorecard.yml`. القيمة `semgrepFindings: 0` موجودة في
`quality-baseline.json` لكنها غير موصولة بآلية تصعيد حاجبة في `ci.yml` — لذا فالمقياس
معزول حاليًا.

### الدمج / إزالة التكرار (ميكانيكي، أقل خطورة)

تم التحقق من كل مرشح مقابل الحالة الفعلية للبوابات بتاريخ 2026-06-17 (الثقة مع التحقق)؛
وقد تبيّن أن عدة عمليات دمج بدت «بديهية» تخفي ديونًا، وبالتالي فهي **ليست** بدائل مباشرة سليمة.

- **يعمل `check:docs-sync` مرتين** — مرة بصورة مستقلة في مهمة `lint` ومرة أخرى داخل `check:docs-all` (`docs-sync-strict`) وفي خطاف husky السابق للإيداع. ✅ **تم** — أزيل الاستدعاء المستقل من `lint`.
- **فحص CVE** — ❌ **ليس دمجًا مباشرًا سليمًا.** يفشل `audit:deps` فشلًا حاسمًا عند وجود أي CVE عالي/حرج؛ بينما لا يفشل `check:vuln-ratchet` (osv) إلا عند حدوث _تراجع_ مقارنة بخط الأساس (حاليًا توجد حالة واحدة MODERATE). الدلالات مختلفة — سيؤدي حذف `audit:deps` إلى فقدان البوابة المطلقة للثغرات العالية/الحرجة. أبقِ كليهما.
- **اكتشاف الدورات** — ❌ **ليس دمجًا مباشرًا سليمًا.** يُبلغ `check:circular-deps` (dpdm) عن **91 دورة** (ولهذا السبب هو استشاري)؛ ولا يمكن ترقيته إلى حاجب قبل حلها أولًا، كما أن نطاقه أوسع من `check:cycles` المنسّق والناجح. أبقِ `check:cycles` حاجبًا؛ أما حل دورات dpdm البالغ عددها 91 فهو بند مستقل في قائمة الأعمال المتراكمة.
- **التعقيد** — ✅ **تم** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`): مرور واحد عبر ESLint، مع العد حسب ruleId بحيث تظل خطوط الأساس الخاصة بالتعقيد الدوري+الحد الأقصى للأسطر والتعقيد المعرفي مستقلة؛ ويظل كل من `check:complexity` و`check:cognitive-complexity` متاحًا على حدة لاستخدام `--update` محليًا.
- **مكافحة الهلوسة في `/api`** — ✅ **تم** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`): جرد واحد لنظام الملفات في `src/app/api`، مع استمرار openapi-routes وdocs-symbols في إعداد تقارير مستقلة؛ وتظل الأوامر المنفردة متاحة للتشغيل المحلي.
- **يعمل `check:node-runtime` في 11 مهمة** — ⚠️ **عائد منخفض على الاستثمار.** تعمل كل مهمة على مشغّل منفصل ويستغرق الفحص أقل من ثانية واحدة؛ ويبلغ إجمالي التوفير نحو 10 ثوانٍ، مقابل فقدان أداة حماية زهيدة لكل مهمة. لا يستحق هذا الاضطراب.
- **`typecheck:noimplicit:core` في lint الخاص بـCI** — ✅ **أزيل من مهمة lint** (كان استشاريًا مع `continue-on-error`)؛ ويتكون سطح الأنواع الحاجب من `typecheck:core` + `check:type-coverage`. تم الإبقاء على السكربت المحلي.

### التفعيل / اتخاذ القرار (سياسة المشغّل)

- `check:openapi-security-tiers` (استشاري) — ❌ **لا يمكن تحويله إلى حاجب بصورة سليمة مباشرةً.** ينتهي برمز 0، لكنه يحذّر من أن عدة مسارات `traffic-inspector` ضمن `LOCAL_ONLY_API_PREFIXES` تفتقر إلى التعليق التوضيحي `x-loopback-only: true`. يتطلب فرضه إضافة تلك التعليقات التوضيحية إلى `openapi.yaml` أولًا.
- `typecheck:noimplicit:core` (استشاري) — تستوعبه إلى حد كبير آلية التصعيد الحاجبة `check:type-coverage`. حوّله إلى آلية تصعيد أو احذف مرور `tsc` الثاني المتكرر.
- `test:vitest:ui` (أصبح الآن **حاجبًا**) — تُستبعد حالات الفشل الموجودة مسبقًا صراحةً في `vitest.config.ts` باستخدام تعليقات التتبع `// #8618`؛ أما حالات الفشل الجديدة فتُفشل المهمة.
- `check:secrets` (gitleaks، آلية تصعيد حاجبة مجمّدة عند 3 نتائج إيجابية كاذبة موثّقة) — أضف الحالات الثلاث إلى قائمة السماح للوصول إلى 0، أو اخفضها إلى استشارية. تتداخل مع الفحص الأصلي للأسرار في GitHub ومع `check:public-creds`.
- `check:pr-evidence` (حاجب، يبحث في النص النثري لنص PR) — خطر مرتفع للنتائج الإيجابية الكاذبة؛ وسيؤدي حذفه إلى إضعاف تطبيق القاعدة الصارمة رقم 18، لذا فهذا قرار حقيقي يتعلق بالسياسة.
- `semgrep` (مسار مستقل استشاري) — يتداخل مع CodeQL بالنسبة إلى عائلات OWASP؛ اربط خط أساسه بآلية تصعيد أو احذفه.

---

## الوثائق ذات الصلة

- سلسلة التوريد (الأصل، SBOM، Trivy، Scorecard): [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — بوابة تكافؤ مجموعات المفاتيح

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`، المهمة `i18n-ui-coverage`).
تقارن مجموعة المفاتيح الطرفية في كل ملف `src/i18n/messages/<locale>.json` مع `en.json` وتفشل
عند وجود أي مفتاح طرفي مفقود أو زائد، بصرف النظر عن وقت إضافة المفتاح. تُعدّ العناصر النائبة
`__MISSING__:` موجودة (أما محتواها فهو من اختصاص بوابة النسبة). وهي المكمّل المطلق
لبوابتي الفروقات/النسبة المئوية: تفرض `check-ui-keys-coverage` حدًا أدنى قدره 80 % لكل
لغة محلية (فحتى غياب 43 مفتاحًا من أصل نحو 13,000 يظل يُقرأ على أنه 99.7 %)، بينما تحكم
`check-new-key-coverage` فقط على المفاتيح التي يضيفها طلب سحب إلى `en.json`. تُنشأ دفعة لغة
محلية من نسخة `en.json` الموجودة يوم إنشاء فرعها، وتستمر الترجمة أيامًا بينما تواصل القاعدة إضافة
مفاتيح؛ ولا يضيف طلب سحب الدفعة أي مفتاح بنفسه، لذلك ظلت البوابتان الشقيقتان صامتتين عندما دُمجت
الدفعة 1 (#13044) وهي تفتقر إلى 43 مفتاحًا في تسع لغات محلية، والدفعة 2 (#13660) وهي تفتقر
إلى 10 مفاتيح في ثماني لغات (2026-09-15). أصلح الحالة الحمراء باستخدام
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers`؛ ويعني وجود مفتاح طرفي
`extra` أن المصدر قد حذفه — لذا احذفه من اللغة المحلية. يُبلغ `--warn` دون التسبب في الفشل.
يشغّل `--catalog=cli` المقارنة نفسها على `bin/cli/locales` (`npm run i18n:check-keys:cli`)؛
وتوجد الخطوتان في المهمة `i18n-ui-coverage`.

#### `check-new-key-coverage` — بوابة تدويل المفاتيح الجديدة

البوابة الشقيقة لـ `check-ui-value-drift`. تكتشف تلك البوابة قيمة إنجليزية **أُعيدت صياغتها**
بينما تُركت ترجماتها دون تحديث؛ أما هذه فتكتشف مفتاحًا إنجليزيًا **أُضيف**
دون أن تتلقاه بعض اللغات المحلية.

لا تستطيع `check-ui-keys-coverage` اكتشاف هذه الفئة: فهي تفرض حدًا أدنى للنسبة المئوية لكل لغة،
وغياب أحد عشر مفتاحًا من أصل نحو 13,000 يُبقي التغطية عند 99.9%. لا تستطيع نسبة مئوية لكل لغة
التعبير عن أن «هذه الميزة أُطلقت دون ترجمة» — إذ يمكن أن تصل ميزة كاملة إلى لغة محلية جديدة دون
أي نص، من غير أن يتغير الرقم مطلقًا.

الحادثة التي تجسّدها: ترجمت المرحلة 3 من لوحة التنسيق مفاتيحها الأحد عشر عبر اللغات المحلية
الـ42 الموجودة آنذاك. وبعد ساعات، رفعت دفعة لغات الاتحاد الأوروبي (#13044) عدد اللغات المحلية
في المستودع إلى 51، ولم تتلقَّ اللغات التسع الجديدة (`el`، `et`، `ga`، `hr`، `lt`، `lv`، `mt`، `sl`، `sr`)
هذه المفاتيح مطلقًا. تستبدل `deepMergeFallback` اللغة الإنجليزية بالمفتاح الغائب، لذلك كان نمط
الفشل واجهة مستخدم غير مترجمة بدلًا من واجهة مستخدم فارغة — وهو فشل حقيقي وصامت بحكم التصميم.

وكما هو حال البوابة الشقيقة، فهي **مدركة للفروقات**؛ إذ تقارن الإنجليزية عند قاعدة الدمج بشجرة
العمل، ولذلك تظل الفجوات الموجودة مسبقًا مجمّدة ولم تحتج البوابة إلى أي ترحيل لتفعيلها. مخرج الطوارئ:
يؤجل `__MISSING__:<english>` الترجمة مع إبقاء سلوك وقت التشغيل صحيحًا. تحظر `vi`
العناصر النائبة (`tests/unit/i18n-vi-completeness.test.ts`) وتتطلب ترجمة حقيقية.

#### `check-vitest-exclusions` — بوابة الاختبارات المركونة

الملف الموجود في قائمة `exclude` ضمن `vitest.config.ts` هو اختبار لا يُشغَّل، ومع ذلك يبدو كتغطية
لمن يقرأ الشجرة. تراكم اثنان وستون ملفًا خلف التعليق
`// #8618 — فشل موجود مسبقًا؛ أزل هذا الاستثناء عند إصلاحه`. أُغلقت المشكلة #8618 في
2026-08-11 بينما نمت القائمة التي كانت تتعقبها من 45 إدخالًا إلى 62، وكان كل إدخال جديد يرث تعليقًا
يشير إلى مشكلة مغلقة. وعندما قِيست القائمة أخيرًا ملفًا تلو الآخر (#13204)، **نجح 51 من أصل 62
مقابل الشجرة الحالية دون أي تغيير في المصدر**.

تشترط البوابة أن يقوم كل استثناء يُحلّ إلى ملف حقيقي بما يلي: (أ) تسمية مشكلة تتبّع، و
(ب) الظهور في `config/quality/vitest-exclusions.json` مع حالته المقاسة، بحيث تصبح إضافة استثناء
فرقًا قابلًا للمراجعة في ملف مخصص بدلًا من أن تكون مجرد سطر آخر في مصفوفة من 60 إدخالًا. وهي
لا تعيد عمدًا تشغيل الاختبارات المستثناة — إذ يستغرق ذلك نحو 10 دقائق وينتمي إلى مهمة دورية؛
ويسجّل المخزون تاريخ آخر قياس لكل اختبار.
