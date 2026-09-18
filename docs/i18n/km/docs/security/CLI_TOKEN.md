# CLI Machine-ID Token (ខ្មែរ)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## ទិដ្ឋភាពទូទៅ

ពាក្យបញ្ជា OmniRoute CLI ផ្ទៀងផ្ទាត់អត្តសញ្ញាណជាមួយ API គ្រប់គ្រងមូលដ្ឋាន ដោយប្រើថូខិន
`HMAC-SHA256(machine-id, salt)` ដែលត្រូវបានផ្ញើតាម header សំណើ
`x-omniroute-cli-token`។

វាអនុញ្ញាតឱ្យពាក្យបញ្ជារង CLI (`omniroute status`, `omniroute providers` ជាដើម)
ហៅ endpoint គ្រប់គ្រងដោយមិនតម្រូវឱ្យអ្នកប្រើប្រាស់ផ្តល់ JWT ឬ
ពាក្យសម្ងាត់រាល់ពេលប្រតិបត្តិ។

## របៀបដែលវាដំណើរការ

1. `getMachineTokenSync()` អាន ID ផ្នែករឹងរបស់ម៉ាស៊ីនតាមរយៈ `node-machine-id`
   (ប្រើស៊្ត្រិងទទេជំនួស ប្រសិនបើបរាជ័យ ដែលធ្វើឱ្យការផ្ទៀងផ្ទាត់អត្តសញ្ញាណ CLI ត្រូវបានបិទ)។
2. វាគណនា `HMAC-SHA256(machine_id, salt)` ហើយត្រឡប់តម្លៃសង្ខេបជាលេខគោលដប់ប្រាំមួយ
   ពេញលេញប្រវែង 64 តួអក្សរ — ជាថូខិនដែលកំណត់បានដូចគ្នាជានិច្ច មិនអាចបញ្ច្រាសបាន និងភ្ជាប់ជាមួយម៉ាស៊ីននេះ។
3. CLI ផ្ញើថូខិនជា `x-omniroute-cli-token` តែនៅពេលគោលដៅដែលបានកំណត់
   ជា URL loopback ជាក់លាក់ (`localhost`, `127.0.0.0/8` ឬ
   loopback IPv6) ប៉ុណ្ណោះ។ សំណើដែលផ្ទុកថូខិនប្រើ `redirect: error` ដូច្នេះការបញ្ជូនបន្ត
   មូលដ្ឋានមិនអាចបញ្ជូនវាទៅ origin ផ្សេងបានទេ។ បរិបទពីចម្ងាយប្រើថូខិនចូលប្រើ
   ដែលមានវិសាលភាពកំណត់ជំនួសវិញ។ ប្រសិនបើមិនអាចទាញយកតម្លៃបាន CLI នឹងមិនដាក់ header
   ហើយ `omniroute doctor` នឹងរាយការណ៍ការបរាជ័យ ជំនួសឱ្យការចាត់ទុកថូខិនទទេ
   ថាមានសុពលភាព។
4. ម៉ាស៊ីនមេ (`src/server/authz/policies/management.ts`) គណនាថូខិន
   ដែលរំពឹងទុកឡើងវិញដោយប្រើ salt ដូចគ្នា ហើយប្រៀបធៀបតាមរយៈ `timingSafeEqual` ដើម្បី
   ទប់ស្កាត់ការទាញយកតម្លៃដោយផ្អែកលើពេលវេលា។

## លក្ខណៈសម្បត្តិសុវត្ថិភាព

| លក្ខណៈសម្បត្តិ                     | សេចក្តីលម្អិត                                                                                                                                                                                                            |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **សម្រាប់តែ loopback**             | ទទួលយកតែនៅពេលសញ្ញាសម្គាល់ទីតាំងមូលដ្ឋានរបស់ peer ដែលម៉ាស៊ីនមេទុកចិត្ត (ទាញយកពីអាសយដ្ឋាន TCP peer ពិតប្រាកដ) បញ្ជាក់ថាជា loopback។ header `Host` ដែលគ្រប់គ្រងដោយ client មិនត្រូវបានទុកចិត្តសម្រាប់កំណត់ទីតាំងមូលដ្ឋានឡើយ។ |
| **ការប្រៀបធៀបក្នុងពេលវេលាថេរ**     | `crypto.timingSafeEqual` ទប់ស្កាត់ការវាយប្រហារតាមពេលវេលា។                                                                                                                                                                |
| **មិនអាចបញ្ច្រាសបាន**              | លទ្ធផល HMAC មិនអាចប្រើដើម្បីយក machine-id មកវិញបានទេ។                                                                                                                                                                    |
| **គ្មានការរំលងការការពារ `always`** | `isAlwaysProtectedPath()` ត្រូវបានវាយតម្លៃមុនការត្រួតពិនិត្យថូខិន CLI។ `/api/shutdown` និង `/api/settings/database` តែងតែតម្រូវឱ្យមាន JWT។                                                                               |
| **មិនអាចនាំចេញបាន**                | ថូខិនមិនដែលត្រូវបានសរសេរទៅថាស ឬកត់ត្រាក្នុង log ឡើយ។                                                                                                                                                                     |

## ការប្តូរ salt

កំណត់ `OMNIROUTE_CLI_SALT` ដើម្បីប្តូរថូខិនដែលបានទាញយក ដោយមិនចាំបាច់ផ្លាស់ប្តូរកូដ។
បន្ទាប់ពីការប្តូរ ដំណើរការ CLI ទាំងអស់នៅលើម៉ាស៊ីននេះនឹងប្រើថូខិនថ្មី
ដោយស្វ័យប្រវត្តិ។ វាមានប្រយោជន៍បន្ទាប់ពីការលេចធ្លាយបញ្ជីដំណើរការ ដែលអាចបានបង្ហាញ
តម្លៃដែលបានទាញយកពីមុន។

```bash
# ការប្តូរជាអចិន្ត្រៃយ៍ (បន្ថែមទៅកម្រងព័ត៌មាន shell)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# ផ្ទៀងផ្ទាត់ថាថូខិនថ្មីកំពុងត្រូវបានប្រើ
omniroute status
```

salt លំនាំដើម៖ `omniroute-cli-auth-v1`

## ទម្រង់ចាស់ (SHA-256, 32 តួអក្សរ) — នៅតែត្រូវបានទទួលយក

មុនពេលមានទម្រង់ HMAC ខាងលើ CLI បានទាញយកថូខិនរបស់វាជា
`SHA-256(machineId + salt).hex[0..32]` (បុព្វបទប្រវែង 32 តួអក្សរ) នៅក្នុង
`bin/cli/utils/cliToken.mjs` (`getLegacyCliTokenSync` នៅក្នុង `src/lib/machineToken.ts`)។

ដើម្បីរក្សាភាពត្រូវគ្នាជាមួយកំណែចាស់ ម៉ាស៊ីនមេទទួលយកទម្រង់ **ទាំងពីរ**៖ កម្មវិធីផ្ទៀងផ្ទាត់បង្កើត
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]` ហើយប្រៀបធៀប
header ដែលបានទទួលជាមួយតម្លៃនីមួយៗដោយប្រើ `timingSafeEqual`
(`src/server/authz/policies/management.ts` និង `src/lib/middleware/cliTokenAuth.ts`)។
ដូច្នេះ ថូខិនមួយមានសុពលភាព ប្រសិនបើវាផ្គូផ្គងនឹង **ទម្រង់ណាមួយ** ក្នុងចំណោមតម្លៃសង្ខេប HMAC ប្រវែង 64 តួអក្សរ ឬបុព្វបទ
SHA-256 ចាស់ប្រវែង 32 តួអក្សរ។

**ការបដិសេធប្រើ៖** កំណត់ `OMNIROUTE_DISABLE_CLI_TOKEN=true` (env ឬ `.env`) ដើម្បីបិទយន្តការ
ថូខិន CLI ទាំងស្រុង។ បន្ទាប់មក រាល់ការចូលប្រើទាំងអស់តម្រូវឱ្យមាន API key ជាក់លាក់។ នៅលើ host
ដែលមានអ្នកប្រើប្រាស់ច្រើន វិធីនេះត្រូវបានណែនាំ ព្រោះ `machine-id` គឺសម្រាប់ឧបករណ៍នីមួយៗ (មិនមែនសម្រាប់អ្នកប្រើប្រាស់នីមួយៗទេ) ហើយអ្នកប្រើប្រាស់ផ្សេង
នៅលើ host ដូចគ្នាអាចគណនាថូខិនដូចគ្នាបាន។

## ឯកសារ

| ឯកសារ                                     | គោលបំណង                                          |
| ----------------------------------------- | ------------------------------------------------ |
| `src/lib/machineToken.ts`                 | ការទាញយកថូខិន (`getMachineTokenSync`)            |
| `src/server/authz/headers.ts`             | ថេរ `CLI_TOKEN_HEADER`                           |
| `src/server/authz/policies/management.ts` | ការផ្ទៀងផ្ទាត់នៅផ្នែកម៉ាស៊ីនមេ                   |
| `src/server/authz/routeGuard.ts`          | ការត្រួតពិនិត្យ loopback host (`isLoopbackHost`) |

## សូមមើលផងដែរ

- `docs/security/ROUTE_GUARD_TIERS.md` — កម្រិតការការពារ route
- `docs/architecture/AUTHZ_GUIDE.md` — ខ្សែដំណើរការផ្តល់សិទ្ធិពេញលេញ
