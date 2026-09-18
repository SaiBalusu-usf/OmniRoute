# CLI Machine-ID Token (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## نظرة عامة

تُصادِق أوامر OmniRoute CLI مع واجهة API المحلية للإدارة باستخدام رمز
`HMAC-SHA256(machine-id, salt)` يُرسَل عبر ترويسة الطلب
`x-omniroute-cli-token`.

يتيح ذلك للأوامر الفرعية في CLI (`omniroute status` و`omniroute providers` وما إلى ذلك)
استدعاء نقاط نهاية الإدارة دون مطالبة المستخدم بتوفير JWT أو
كلمة مرور عند كل استدعاء.

## آلية العمل

1. تقرأ `getMachineTokenSync()` معرّف الجهاز من العتاد عبر `node-machine-id`
   (وتعود إلى سلسلة فارغة عند الفشل، مما يعطّل مصادقة CLI).
2. تحسب `HMAC-SHA256(machine_id, salt)` وتُرجع ملخصًا سداسيًا عشريًا كاملًا مكوّنًا من 64 محرفًا
   — وهو رمز حتمي غير قابل للعكس ومرتبط بهذا الجهاز.
3. يرسل CLI الرمز بوصفه `x-omniroute-cli-token` فقط عندما تكون
   الوجهة المحلولة عنوان URL صريحًا للاسترجاع المحلي (`localhost` أو `127.0.0.0/8` أو
   IPv6 للاسترجاع المحلي). تستخدم الطلبات التي تحمل الرمز `redirect: error`، بحيث يتعذر على
   إعادة توجيه محلية تمريره إلى أصل آخر. تستخدم السياقات البعيدة
   رموز وصول محددة النطاق بدلًا من ذلك. إذا تعذر الاشتقاق، يحذف CLI الترويسة
   ويُبلغ `omniroute doctor` عن الفشل بدلًا من اعتبار الرمز الفارغ
   صالحًا.
4. يعيد الخادم (`src/server/authz/policies/management.ts`) حساب
   الرمز المتوقع باستخدام نفس القيمة الملحية ويقارنه عبر `timingSafeEqual`
   لمنع الاستخراج المستند إلى التوقيت.

## خصائص الأمان

| الخاصية                                  | التفاصيل                                                                                                                                                                              |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **الاسترجاع المحلي فقط**                 | لا يُقبل إلا عندما يشير وسم موضع النظير الموثوق في الخادم (المشتق من عنوان نظير TCP الحقيقي) إلى الاسترجاع المحلي. لا تُوثق أبدًا ترويسة `Host` التي يتحكم فيها العميل لتحديد الموضع. |
| **مقارنة بزمن ثابت**                     | تمنع `crypto.timingSafeEqual` هجمات التوقيت.                                                                                                                                          |
| **غير قابل للعكس**                       | لا يمكن استخدام مخرجات HMAC لاستعادة معرّف الجهاز.                                                                                                                                    |
| **لا تجاوز للمسارات المحمية بـ`always`** | يُقيَّم `isAlwaysProtectedPath()` قبل التحقق من رمز CLI. يتطلب `/api/shutdown` و`/api/settings/database` دائمًا JWT.                                                                  |
| **غير قابل للتصدير**                     | لا يُكتب الرمز على القرص ولا يُسجَّل مطلقًا.                                                                                                                                          |

## تدوير القيمة الملحية

عيّن `OMNIROUTE_CLI_SALT` لتدوير الرمز المشتق دون تغييرات في الشيفرة.
بعد التدوير، ستستخدم جميع عمليات CLI على هذا الجهاز الرمز الجديد
تلقائيًا. يفيد ذلك بعد تسرّب قائمة العمليات الذي ربما كشف
القيمة المشتقة السابقة.

```bash
# تدوير دائم (أضفه إلى ملف تعريف الصدفة)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# تحقق من استخدام الرمز الجديد
omniroute status
```

القيمة الملحية الافتراضية: `omniroute-cli-auth-v1`

## التنسيق القديم (SHA-256، 32 محرفًا) — لا يزال مقبولًا

قبل تنسيق HMAC أعلاه، كان CLI يشتق رمزه بالصيغة
`SHA-256(machineId + salt).hex[0..32]` (بادئة من 32 محرفًا) في
`bin/cli/utils/cliToken.mjs` (`getLegacyCliTokenSync` في `src/lib/machineToken.ts`).

للتوافق مع الإصدارات السابقة، يقبل الخادم **كلا** التنسيقين: ينشئ المتحقق
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]` ويقارن
الترويسة الواردة بكل منهما باستخدام `timingSafeEqual`
(`src/server/authz/policies/management.ts` و`src/lib/middleware/cliTokenAuth.ts`).
لذلك يكون الرمز صالحًا إذا طابق **إما** ملخص HMAC المكوّن من 64 محرفًا أو بادئة
SHA-256 القديمة المكوّنة من 32 محرفًا.

**إلغاء الاشتراك:** عيّن `OMNIROUTE_DISABLE_CLI_TOKEN=true` (في البيئة أو `.env`) لتعطيل آلية رمز CLI
بالكامل؛ وعندئذٍ يتطلب كل وصول مفتاح API صريحًا. يُوصى بذلك على المضيفات
متعددة المستخدمين، لأن `machine-id` خاص بكل جهاز (وليس بكل مستخدم)، وقد يتمكن مستخدم
آخر على المضيف نفسه من حساب الرمز ذاته.

## الملفات

| الملف                                     | الغرض                                              |
| ----------------------------------------- | -------------------------------------------------- |
| `src/lib/machineToken.ts`                 | اشتقاق الرمز (`getMachineTokenSync`)               |
| `src/server/authz/headers.ts`             | ثابت `CLI_TOKEN_HEADER`                            |
| `src/server/authz/policies/management.ts` | التحقق من جانب الخادم                              |
| `src/server/authz/routeGuard.ts`          | التحقق من مضيف الاسترجاع المحلي (`isLoopbackHost`) |

## انظر أيضًا

- `docs/security/ROUTE_GUARD_TIERS.md` — مستويات حماية المسارات
- `docs/architecture/AUTHZ_GUIDE.md` — مسار التفويض الكامل
