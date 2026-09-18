# CLI Machine-ID Token (Oʻzbekcha)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## Umumiy ko‘rinish

OmniRoute CLI buyruqlari mahalliy boshqaruv API’sida autentifikatsiyadan o‘tish uchun
`x-omniroute-cli-token` so‘rov sarlavhasi orqali yuboriladigan
`HMAC-SHA256(machine-id, salt)` tokenidan foydalanadi.

Bu CLI quyi buyruqlariga (`omniroute status`, `omniroute providers` va boshqalar)
har bir chaqiruvda foydalanuvchidan JWT yoki parol kiritishni talab qilmasdan
boshqaruv endpointlariga murojaat qilish imkonini beradi.

## Ishlash tartibi

1. `getMachineTokenSync()` apparatning mashina identifikatorini `node-machine-id`
   orqali o‘qiydi (xatolik yuz bersa, bo‘sh satrga qaytadi va CLI autentifikatsiyasini
   o‘chiradi).
2. U `HMAC-SHA256(machine_id, salt)` qiymatini hisoblaydi va to‘liq 64 belgili
   o‘n oltilik dayjestni qaytaradi — bu ushbu mashinaga bog‘langan deterministik,
   qaytarib bo‘lmaydigan tokendir.
3. CLI tokenni `x-omniroute-cli-token` sifatida faqat aniqlangan manzil aniq
   loopback URL (`localhost`, `127.0.0.0/8` yoki loopback IPv6) bo‘lgandagina
   yuboradi. Tokenni tashuvchi so‘rovlar `redirect: error` parametridan foydalanadi,
   shuning uchun mahalliy qayta yo‘naltirish uni boshqa manbaga uzata olmaydi.
   Masofaviy kontekstlar uning o‘rniga amal doirasi cheklangan kirish tokenlaridan
   foydalanadi. Agar tokenni hosil qilish imkonsiz bo‘lsa, CLI sarlavhani qo‘shmaydi
   va `omniroute doctor` bo‘sh tokenni haqiqiy deb hisoblash o‘rniga xatolik haqida
   xabar beradi.
4. Server (`src/server/authz/policies/management.ts`) kutilayotgan tokenni xuddi
   shu tuz bilan qayta hisoblaydi va vaqtga asoslangan ajratib olishning oldini
   olish uchun `timingSafeEqual` orqali taqqoslaydi.

## Xavfsizlik xususiyatlari

| Xususiyat                                | Tafsilot                                                                                                                                                                                                                               |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Faqat loopback**                       | Faqat serverning ishonchli tugun-lokallik belgisi (haqiqiy TCP tuguni manzilidan hosil qilinadi) loopback ekanini ko‘rsatganda qabul qilinadi. Lokallikni aniqlashda mijoz boshqaradigan `Host` sarlavhasiga hech qachon ishonilmaydi. |
| **Doimiy vaqtda taqqoslash**             | `crypto.timingSafeEqual` vaqtga asoslangan hujumlarning oldini oladi.                                                                                                                                                                  |
| **Qaytarib bo‘lmaydi**                   | HMAC chiqishidan machine-id qiymatini tiklab bo‘lmaydi.                                                                                                                                                                                |
| **`always` himoyasini chetlab o‘tmaydi** | `isAlwaysProtectedPath()` CLI tokeni tekshiruvidan oldin hisoblanadi. `/api/shutdown` va `/api/settings/database` har doim JWT talab qiladi.                                                                                           |
| **Eksport qilinmaydi**                   | Token hech qachon diskka yozilmaydi yoki jurnalga qayd etilmaydi.                                                                                                                                                                      |

## Tuzni almashtirish

Hosil qilinadigan tokenni kodni o‘zgartirmasdan almashtirish uchun
`OMNIROUTE_CLI_SALT` qiymatini belgilang. Almashtirishdan so‘ng ushbu mashinadagi
barcha CLI jarayonlari yangi tokenni avtomatik ravishda ishlatadi. Bu oldingi
hosil qilingan qiymat oshkor bo‘lishi mumkin bo‘lgan jarayonlar ro‘yxati sizib
chiqqanidan keyin foydalidir.

```bash
# Doimiy almashtirish (shell profiliga qo‘shing)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# Yangi token ishlatilayotganini tekshiring
omniroute status
```

Standart tuz: `omniroute-cli-auth-v1`

## Eski format (SHA-256, 32 belgi) — hanuz qabul qilinadi

Yuqoridagi HMAC formatidan oldin CLI o‘z tokenini
`bin/cli/utils/cliToken.mjs` faylida (`src/lib/machineToken.ts` ichidagi
`getLegacyCliTokenSync`) `SHA-256(machineId + salt).hex[0..32]` (32 belgili
prefiks) sifatida hosil qilgan.

Orqaga muvofiqlik uchun server **ikkala** formatni ham qabul qiladi: tekshiruvchi
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]` ro‘yxatini tuzadi
va kiruvchi sarlavhani `timingSafeEqual` yordamida ularning har biri bilan taqqoslaydi
(`src/server/authz/policies/management.ts` va `src/lib/middleware/cliTokenAuth.ts`).
Shuning uchun token 64 belgili HMAC dayjestiga **yoki** 32 belgili eski SHA-256
prefiksiga mos kelsa, haqiqiy hisoblanadi.

**O‘chirish:** CLI tokeni mexanizmini butunlay o‘chirish uchun
`OMNIROUTE_DISABLE_CLI_TOKEN=true` qiymatini belgilang (muhitda yoki `.env` faylida);
shundan so‘ng barcha kirishlar aniq API kalitini talab qiladi. Ko‘p foydalanuvchili
xostlarda bu tavsiya etiladi, chunki `machine-id` har bir foydalanuvchiga emas, balki
qurilmaga tegishli va ayni xostdagi boshqa foydalanuvchi ham xuddi shu tokenni
hisoblashi mumkin.

## Fayllar

| Fayl                                      | Vazifasi                                       |
| ----------------------------------------- | ---------------------------------------------- |
| `src/lib/machineToken.ts`                 | Tokenni hosil qilish (`getMachineTokenSync`)   |
| `src/server/authz/headers.ts`             | `CLI_TOKEN_HEADER` konstantasi                 |
| `src/server/authz/policies/management.ts` | Server tomonida tekshirish                     |
| `src/server/authz/routeGuard.ts`          | Loopback xostini tekshirish (`isLoopbackHost`) |

## Shuningdek qarang

- `docs/security/ROUTE_GUARD_TIERS.md` — marshrutni himoyalash darajalari
- `docs/architecture/AUTHZ_GUIDE.md` — to‘liq avtorizatsiya jarayoni
