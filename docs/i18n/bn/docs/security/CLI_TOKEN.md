# CLI Machine-ID Token (বাংলা)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## সংক্ষিপ্ত বিবরণ

OmniRoute CLI কমান্ডগুলো `x-omniroute-cli-token` রিকোয়েস্ট হেডারের মাধ্যমে পাঠানো
`HMAC-SHA256(machine-id, salt)` টোকেন ব্যবহার করে স্থানীয় ম্যানেজমেন্ট API-তে
প্রমাণীকরণ করে।

এর ফলে CLI সাবকমান্ডগুলো (`omniroute status`, `omniroute providers` ইত্যাদি)
ব্যবহারকারীকে প্রতিবার চালানোর সময় JWT বা পাসওয়ার্ড সরবরাহ করতে না বলেই
ম্যানেজমেন্ট এন্ডপয়েন্ট কল করতে পারে।

## এটি যেভাবে কাজ করে

1. `getMachineTokenSync()` `node-machine-id`-এর মাধ্যমে হার্ডওয়্যার মেশিন ID পড়ে
   (ব্যর্থ হলে একটি খালি স্ট্রিংয়ে ফিরে যায়, ফলে CLI প্রমাণীকরণ নিষ্ক্রিয় হয়)।
2. এটি `HMAC-SHA256(machine_id, salt)` গণনা করে এবং সম্পূর্ণ 64-অক্ষরের
   হেক্স ডাইজেস্ট ফেরত দেয়—এটি এই মেশিনের সঙ্গে সম্পর্কিত একটি নির্ধারিত ও
   অপরিবর্তনীয় টোকেন।
3. সমাধানকৃত গন্তব্যটি একটি সুস্পষ্ট লুপব্যাক URL (`localhost`, `127.0.0.0/8`,
   অথবা লুপব্যাক IPv6) হলেই কেবল CLI টোকেনটিকে `x-omniroute-cli-token` হিসেবে
   পাঠায়। টোকেন বহনকারী রিকোয়েস্টগুলো `redirect: error` ব্যবহার করে, যাতে কোনো
   স্থানীয় রিডাইরেক্ট এটিকে অন্য কোনো অরিজিনে ফরোয়ার্ড করতে না পারে। রিমোট
   কনটেক্সটগুলো পরিবর্তে সীমাবদ্ধ-পরিসরের অ্যাক্সেস টোকেন ব্যবহার করে। ডেরাইভেশন
   উপলভ্য না হলে CLI হেডারটি বাদ দেয় এবং একটি খালি টোকেনকে বৈধ হিসেবে গণ্য না করে
   `omniroute doctor` ব্যর্থতাটি রিপোর্ট করে।
4. সার্ভার (`src/server/authz/policies/management.ts`) একই salt দিয়ে প্রত্যাশিত
   টোকেনটি পুনরায় গণনা করে এবং টাইমিং-ভিত্তিক নিষ্কাশন প্রতিরোধ করতে
   `timingSafeEqual`-এর মাধ্যমে তুলনা করে।

## নিরাপত্তা বৈশিষ্ট্য

| বৈশিষ্ট্য                                | বিস্তারিত                                                                                                                                                                                                                 |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **শুধু লুপব্যাক**                        | সার্ভারের বিশ্বস্ত পিয়ার-লোক্যালিটি স্ট্যাম্প (প্রকৃত TCP পিয়ার অ্যাড্রেস থেকে নির্ণীত) লুপব্যাক নির্দেশ করলেই কেবল গ্রহণ করা হয়। লোক্যালিটি নির্ধারণে ক্লায়েন্ট-নিয়ন্ত্রিত `Host` হেডারকে কখনোই বিশ্বাস করা হয় না। |
| **ধ্রুব-সময়ের তুলনা**                   | `crypto.timingSafeEqual` টাইমিং আক্রমণ প্রতিরোধ করে।                                                                                                                                                                      |
| **অপরিবর্তনীয়**                         | HMAC আউটপুট থেকে machine-id পুনরুদ্ধার করা যায় না।                                                                                                                                                                       |
| **`always`-সুরক্ষিত অংশ এড়ানো যায় না** | CLI টোকেন পরীক্ষার আগে `isAlwaysProtectedPath()` মূল্যায়ন করা হয়। `/api/shutdown` এবং `/api/settings/database`-এর জন্য সবসময় JWT প্রয়োজন।                                                                             |
| **এক্সপোর্ট-অযোগ্য**                     | টোকেনটি কখনোই ডিস্কে লেখা বা লগ করা হয় না।                                                                                                                                                                               |

## Salt রোটেশন

কোড পরিবর্তন না করেই ডেরাইভ করা টোকেনটি রোটেট করতে `OMNIROUTE_CLI_SALT` সেট করুন।
রোটেশনের পরে এই মেশিনের সব CLI প্রসেস স্বয়ংক্রিয়ভাবে নতুন টোকেনটি ব্যবহার করবে।
প্রসেস তালিকা ফাঁস হয়ে আগের ডেরাইভ করা মানটি প্রকাশিত হয়ে থাকতে পারে—এমন পরিস্থিতিতে
এটি কার্যকর।

```bash
# স্থায়ী রোটেশন (shell profile-এ যোগ করুন)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# নতুন টোকেন ব্যবহৃত হচ্ছে কি না যাচাই করুন
omniroute status
```

ডিফল্ট salt: `omniroute-cli-auth-v1`

## লিগ্যাসি ফরম্যাট (SHA-256, 32-অক্ষর) — এখনও গৃহীত হয়

উপরের HMAC ফরম্যাটের আগে CLI তার টোকেনকে
`SHA-256(machineId + salt).hex[0..32]` (একটি 32-অক্ষরের প্রিফিক্স) হিসেবে
`bin/cli/utils/cliToken.mjs`-এ ডেরাইভ করত (`src/lib/machineToken.ts`-এ
`getLegacyCliTokenSync`)।

পশ্চাৎ-সামঞ্জস্যের জন্য সার্ভার **উভয়** ফরম্যাটই গ্রহণ করে: যাচাইকারী
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]` তৈরি করে এবং
আগত হেডারটিকে প্রতিটির সঙ্গে `timingSafeEqual` ব্যবহার করে তুলনা করে
(`src/server/authz/policies/management.ts` এবং `src/lib/middleware/cliTokenAuth.ts`)।
অতএব, কোনো টোকেন 64-অক্ষরের HMAC ডাইজেস্ট অথবা 32-অক্ষরের লিগ্যাসি SHA-256
প্রিফিক্স—**যেকোনো একটির** সঙ্গে মিলে গেলেই সেটি বৈধ।

**অপ্ট-আউট:** CLI টোকেন ব্যবস্থা সম্পূর্ণভাবে নিষ্ক্রিয় করতে
`OMNIROUTE_DISABLE_CLI_TOKEN=true` (env অথবা `.env`-এ) সেট করুন; এরপর সব ধরনের
অ্যাক্সেসের জন্য একটি সুস্পষ্ট API key প্রয়োজন হবে। বহু-ব্যবহারকারী হোস্টে এটি
সুপারিশ করা হয়, কারণ `machine-id` প্রতি-ব্যবহারকারীর নয়, প্রতি-ডিভাইসের এবং একই
হোস্টের অন্য কোনো ব্যবহারকারী একই টোকেন গণনা করতে পারে।

## ফাইলসমূহ

| ফাইল                                      | উদ্দেশ্য                                  |
| ----------------------------------------- | ----------------------------------------- |
| `src/lib/machineToken.ts`                 | টোকেন ডেরাইভেশন (`getMachineTokenSync`)   |
| `src/server/authz/headers.ts`             | `CLI_TOKEN_HEADER` ধ্রুবক                 |
| `src/server/authz/policies/management.ts` | সার্ভার-পক্ষের যাচাইকরণ                   |
| `src/server/authz/routeGuard.ts`          | লুপব্যাক হোস্ট পরীক্ষা (`isLoopbackHost`) |

## আরও দেখুন

- `docs/security/ROUTE_GUARD_TIERS.md` — রুট সুরক্ষা স্তরসমূহ
- `docs/architecture/AUTHZ_GUIDE.md` — সম্পূর্ণ অথরাইজেশন পাইপলাইন
