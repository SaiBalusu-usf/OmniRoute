# CLI Machine-ID Token (فارسی)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## نمای کلی

فرمانهای OmniRoute CLI با استفاده از توکن
`HMAC-SHA256(machine-id, salt)` که از طریق هدر درخواست
`x-omniroute-cli-token` ارسال میشود، در API مدیریت محلی احراز هویت میکنند.

این کار به زیرفرمانهای CLI (`omniroute status`، `omniroute providers` و غیره)
اجازه میدهد بدون نیاز به ارائه JWT یا گذرواژه توسط کاربر در هر بار اجرا،
نقاط پایانی مدیریت را فراخوانی کنند.

## نحوه کار

1. `getMachineTokenSync()` شناسه سختافزاری دستگاه را از طریق `node-machine-id`
   میخواند (در صورت شکست، به رشته خالی بازمیگردد و احراز هویت CLI را غیرفعال میکند).
2. این تابع `HMAC-SHA256(machine_id, salt)` را محاسبه کرده و چکیده هگز کامل
   ۶۴ کاراکتری را برمیگرداند — توکنی قطعی و برگشتناپذیر که به این دستگاه وابسته است.
3. CLI تنها زمانی توکن را بهصورت `x-omniroute-cli-token` ارسال میکند که مقصد
   نهایی یک URL صریح loopback باشد (`localhost`، `127.0.0.0/8` یا IPv6 از نوع
   loopback). درخواستهای حاوی توکن از `redirect: error` استفاده میکنند تا یک
   تغییرمسیر محلی نتواند آن را به مبدأ دیگری ارسال کند. زمینههای راهدور در عوض
   از توکنهای دسترسی با دامنه محدود استفاده میکنند. اگر استخراج توکن ممکن نباشد،
   CLI هدر را حذف میکند و `omniroute doctor` بهجای معتبر تلقی کردن یک توکن خالی،
   شکست را گزارش میدهد.
4. سرور (`src/server/authz/policies/management.ts`) توکن مورد انتظار را با همان
   salt دوباره محاسبه کرده و با استفاده از `timingSafeEqual` مقایسه میکند تا از
   استخراج مبتنی بر زمانبندی جلوگیری شود.

## ویژگیهای امنیتی

| ویژگی                           | جزئیات                                                                                                                                                                                                      |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **فقط loopback**                | تنها زمانی پذیرفته میشود که نشان محلیبودن همتای مورد اعتماد سرور (که از آدرس واقعی همتای TCP استخراج شده است) loopback را نشان دهد. برای تعیین محلیبودن، هرگز به هدر `Host` تحت کنترل کلاینت اعتماد نمیشود. |
| **مقایسه با زمان ثابت**         | `crypto.timingSafeEqual` از حملات زمانبندی جلوگیری میکند.                                                                                                                                                   |
| **برگشتناپذیر**                 | از خروجی HMAC نمیتوان machine-id را بازیابی کرد.                                                                                                                                                            |
| **بدون دور زدن حفاظت `always`** | `isAlwaysProtectedPath()` پیش از بررسی توکن CLI ارزیابی میشود. `/api/shutdown` و `/api/settings/database` همیشه به JWT نیاز دارند.                                                                          |
| **غیرقابل استخراج**             | توکن هرگز روی دیسک نوشته یا ثبت نمیشود.                                                                                                                                                                     |

## چرخش salt

برای چرخاندن توکن استخراجشده بدون تغییر کد، `OMNIROUTE_CLI_SALT` را تنظیم کنید.
پس از چرخش، تمام فرایندهای CLI روی این دستگاه بهطور خودکار از توکن جدید استفاده
خواهند کرد. این کار پس از نشت فهرست فرایندها که ممکن است مقدار استخراجشده قبلی
را افشا کرده باشد، مفید است.

```bash
# چرخش دائمی (به پروفایل پوسته اضافه کنید)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# بررسی کنید که توکن جدید در حال استفاده است
omniroute status
```

salt پیشفرض: `omniroute-cli-auth-v1`

## قالب قدیمی (SHA-256، ۳۲ کاراکتر) — همچنان پذیرفته میشود

پیش از قالب HMAC بالا، CLI توکن خود را بهصورت
`SHA-256(machineId + salt).hex[0..32]` (یک پیشوند ۳۲ کاراکتری) در
`bin/cli/utils/cliToken.mjs` (`getLegacyCliTokenSync` در `src/lib/machineToken.ts`)
استخراج میکرد.

برای سازگاری با نسخههای قبلی، سرور **هر دو** قالب را میپذیرد: اعتبارسنج
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]` را میسازد و
هدر ورودی را با استفاده از `timingSafeEqual` با هرکدام مقایسه میکند
(`src/server/authz/policies/management.ts` و `src/lib/middleware/cliTokenAuth.ts`).
بنابراین، توکن در صورتی معتبر است که با **هر یک** از چکیده ۶۴ کاراکتری HMAC یا
پیشوند قدیمی ۳۲ کاراکتری SHA-256 مطابقت داشته باشد.

**انصراف:** برای غیرفعال کردن کامل سازوکار توکن CLI، مقدار
`OMNIROUTE_DISABLE_CLI_TOKEN=true` را تنظیم کنید (در محیط یا `.env`)؛ پس از آن،
تمام دسترسیها به یک کلید API صریح نیاز خواهند داشت. این کار در میزبانهای
چندکاربره توصیه میشود، زیرا `machine-id` بهازای هر دستگاه است (نه هر کاربر) و
کاربر دیگری روی همان میزبان میتواند همان توکن را محاسبه کند.

## فایلها

| فایل                                      | هدف                                      |
| ----------------------------------------- | ---------------------------------------- |
| `src/lib/machineToken.ts`                 | استخراج توکن (`getMachineTokenSync`)     |
| `src/server/authz/headers.ts`             | ثابت `CLI_TOKEN_HEADER`                  |
| `src/server/authz/policies/management.ts` | اعتبارسنجی سمت سرور                      |
| `src/server/authz/routeGuard.ts`          | بررسی میزبان loopback (`isLoopbackHost`) |

## همچنین ببینید

- `docs/security/ROUTE_GUARD_TIERS.md` — سطوح حفاظت از مسیر
- `docs/architecture/AUTHZ_GUIDE.md` — خط لوله کامل مجوزدهی
