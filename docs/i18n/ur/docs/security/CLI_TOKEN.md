# CLI Machine-ID Token (اردو)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## جائزہ

OmniRoute CLI کمانڈز مقامی مینجمنٹ API کے ساتھ توثیق کے لیے ایک
`HMAC-SHA256(machine-id, salt)` ٹوکن استعمال کرتی ہیں، جسے
`x-omniroute-cli-token` ریکوئسٹ ہیڈر کے ذریعے بھیجا جاتا ہے۔

یہ CLI ذیلی کمانڈز (`omniroute status`، `omniroute providers`، وغیرہ) کو اس قابل بناتا ہے
کہ وہ ہر بار چلانے پر صارف سے JWT یا پاس ورڈ فراہم کرنے کا تقاضا کیے بغیر
مینجمنٹ اینڈ پوائنٹس کو کال کر سکیں۔

## یہ کیسے کام کرتا ہے

1. `getMachineTokenSync()`، `node-machine-id` کے ذریعے ہارڈویئر مشین ID پڑھتا ہے
   (ناکامی کی صورت میں خالی اسٹرنگ استعمال کرتا ہے، جس سے CLI توثیق غیر فعال ہو جاتی ہے)۔
2. یہ `HMAC-SHA256(machine_id, salt)` کا حساب لگاتا ہے اور مکمل 64 حروف پر مشتمل
   ہیکس ڈائجسٹ واپس کرتا ہے — ایک تعین پذیر، ناقابلِ واپسی ٹوکن جو اس مشین سے منسلک ہوتا ہے۔
3. CLI ٹوکن کو `x-omniroute-cli-token` کے طور پر صرف اس وقت بھیجتا ہے جب حل شدہ
   منزل ایک واضح لوپ بیک URL (`localhost`، `127.0.0.0/8`، یا
   لوپ بیک IPv6) ہو۔ ٹوکن والی ریکوئسٹس `redirect: error` استعمال کرتی ہیں، تاکہ کوئی مقامی
   ری ڈائریکٹ اسے کسی دوسرے اوریجن کو فارورڈ نہ کر سکے۔ ریموٹ کانٹیکسٹس اس کے بجائے محدود دائرۂ کار والے
   ایکسیس ٹوکنز استعمال کرتے ہیں۔ اگر اخذ کرنا دستیاب نہ ہو تو CLI ہیڈر شامل نہیں کرتا،
   اور `omniroute doctor` خالی ٹوکن کو درست سمجھنے کے بجائے
   ناکامی کی اطلاع دیتا ہے۔
4. سرور (`src/server/authz/policies/management.ts`) اسی سالٹ کے ساتھ متوقع
   ٹوکن کا دوبارہ حساب لگاتا ہے اور ٹائمنگ پر مبنی استخراج روکنے کے لیے
   `timingSafeEqual` کے ذریعے موازنہ کرتا ہے۔

## سیکیورٹی خصوصیات

| خصوصیت                                                    | تفصیل                                                                                                                                                                                                               |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **صرف لوپ بیک**                                           | صرف اس وقت قبول کیا جاتا ہے جب سرور کی قابلِ اعتماد پیئر لوکیلٹی اسٹیمپ (حقیقی TCP پیئر ایڈریس سے اخذ کردہ) لوپ بیک کی نشان دہی کرے۔ لوکیلٹی کے لیے کلائنٹ کے زیرِ کنٹرول `Host` ہیڈر پر کبھی اعتماد نہیں کیا جاتا۔ |
| **مستقل وقت میں موازنہ**                                  | `crypto.timingSafeEqual` ٹائمنگ حملوں کو روکتا ہے۔                                                                                                                                                                  |
| **ناقابلِ واپسی**                                         | HMAC آؤٹ پٹ سے machine-id بازیافت نہیں کی جا سکتی۔                                                                                                                                                                  |
| **`always` سے محفوظ راستوں کو بائی پاس نہیں کیا جا سکتا** | CLI ٹوکن کی جانچ سے پہلے `isAlwaysProtectedPath()` کا جائزہ لیا جاتا ہے۔ `/api/shutdown` اور `/api/settings/database` کے لیے ہمیشہ JWT درکار ہوتا ہے۔                                                               |
| **ناقابلِ برآمد**                                         | ٹوکن کبھی ڈسک پر نہیں لکھا جاتا اور نہ ہی لاگ کیا جاتا ہے۔                                                                                                                                                          |

## سالٹ کی تبدیلی

کوڈ میں تبدیلی کیے بغیر اخذ کردہ ٹوکن تبدیل کرنے کے لیے `OMNIROUTE_CLI_SALT` سیٹ کریں۔
تبدیلی کے بعد، اس مشین پر موجود تمام CLI پراسیسز خودکار طور پر نیا ٹوکن
استعمال کریں گے۔ یہ کسی پراسیس لسٹ کے افشا ہونے کے بعد مفید ہے، جس سے ممکنہ طور پر
پچھلی اخذ کردہ قدر ظاہر ہو گئی ہو۔

```bash
# مستقل تبدیلی (شیل پروفائل میں شامل کریں)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# تصدیق کریں کہ نیا ٹوکن استعمال ہو رہا ہے
omniroute status
```

ڈیفالٹ سالٹ: `omniroute-cli-auth-v1`

## سابقہ فارمیٹ (SHA-256، 32 حروف) — اب بھی قابلِ قبول

مندرجہ بالا HMAC فارمیٹ سے پہلے، CLI اپنا ٹوکن
`SHA-256(machineId + salt).hex[0..32]` (32 حروف کا سابقہ) کے طور پر
`bin/cli/utils/cliToken.mjs` میں اخذ کرتا تھا (`src/lib/machineToken.ts` میں `getLegacyCliTokenSync`)۔

پسماندہ مطابقت کے لیے سرور **دونوں** فارمیٹس قبول کرتا ہے: تصدیق کار
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]` بناتا ہے اور آنے والے
ہیڈر کا ہر ایک سے `timingSafeEqual` کے ذریعے موازنہ کرتا ہے
(`src/server/authz/policies/management.ts` اور `src/lib/middleware/cliTokenAuth.ts`)۔
لہٰذا، ٹوکن اس صورت میں درست ہے جب وہ 64 حروف والے HMAC ڈائجسٹ یا 32 حروف والے
سابقہ SHA-256 پریفکس میں سے **کسی ایک** سے مماثل ہو۔

**غیر فعال کرنا:** CLI ٹوکن کے طریقۂ کار کو مکمل طور پر غیر فعال کرنے کے لیے
`OMNIROUTE_DISABLE_CLI_TOKEN=true` (`env` یا `.env`) سیٹ کریں؛ اس کے بعد ہر رسائی کے لیے
ایک واضح API کلید درکار ہو گی۔ متعدد صارفین والے ہوسٹس پر اس کی سفارش کی جاتی ہے،
کیونکہ `machine-id` فی ڈیوائس ہوتا ہے (فی صارف نہیں)، اور اسی ہوسٹ پر موجود کوئی دوسرا
صارف بھی وہی ٹوکن اخذ کر سکتا ہے۔

## فائلیں

| فائل                                      | مقصد                                    |
| ----------------------------------------- | --------------------------------------- |
| `src/lib/machineToken.ts`                 | ٹوکن اخذ کرنا (`getMachineTokenSync`)   |
| `src/server/authz/headers.ts`             | `CLI_TOKEN_HEADER` مستقل                |
| `src/server/authz/policies/management.ts` | سرور کی جانب سے تصدیق                   |
| `src/server/authz/routeGuard.ts`          | لوپ بیک ہوسٹ کی جانچ (`isLoopbackHost`) |

## مزید دیکھیے

- `docs/security/ROUTE_GUARD_TIERS.md` — روٹ کے تحفظ کی سطحیں
- `docs/architecture/AUTHZ_GUIDE.md` — مکمل اجازت دہی پائپ لائن
