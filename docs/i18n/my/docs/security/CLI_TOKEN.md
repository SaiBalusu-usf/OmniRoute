# CLI Machine-ID Token (မြန်မာ)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## ခြုံငုံသုံးသပ်ချက်

OmniRoute CLI command များသည် `x-omniroute-cli-token` request header မှတစ်ဆင့် ပေးပို့သည့်
`HMAC-SHA256(machine-id, salt)` token ကို အသုံးပြု၍ local management API နှင့်
အထောက်အထားစိစစ်သည်။

၎င်းကြောင့် CLI subcommand များ (`omniroute status`, `omniroute providers` စသည်)
သည် အသုံးပြုသူက ခေါ်ယူမှုတိုင်းတွင် JWT သို့မဟုတ် password ပေးရန်မလိုဘဲ
management endpoint များကို ခေါ်ယူနိုင်သည်။

## အလုပ်လုပ်ပုံ

1. `getMachineTokenSync()` သည် `node-machine-id` မှတစ်ဆင့် hardware machine ID ကို
   ဖတ်ယူသည် (မအောင်မြင်ပါက empty string ကို အသုံးပြုသဖြင့် CLI auth ကို ပိတ်ထားမည်)။
2. ၎င်းသည် `HMAC-SHA256(machine_id, salt)` ကို တွက်ချက်ပြီး ဤစက်နှင့် ချိတ်ဆက်ထားသည့်
   အမြဲတူညီ၍ ပြန်လည်ဖော်ထုတ်၍မရသော token ဖြစ်သည့် 64-character အပြည့်အစုံပါ
   hex digest ကို ပြန်ပေးသည်။
3. ဖြေရှင်းသတ်မှတ်ထားသော destination သည် တိကျစွာဖော်ပြထားသည့် loopback URL
   (`localhost`, `127.0.0.0/8` သို့မဟုတ် loopback IPv6) ဖြစ်မှသာ CLI က token ကို
   `x-omniroute-cli-token` အဖြစ် ပေးပို့သည်။ Token ပါဝင်သည့် request များတွင်
   `redirect: error` ကို အသုံးပြုသဖြင့် local redirect တစ်ခုက ၎င်းကို အခြား origin
   တစ်ခုသို့ လွှဲပို့၍မရပါ။ Remote context များသည် ယင်းအစား scope သတ်မှတ်ထားသည့်
   access token များကို အသုံးပြုသည်။ Token derivation မရရှိနိုင်ပါက CLI သည် header ကို
   ချန်လှပ်ထားပြီး empty token ကို valid အဖြစ် သတ်မှတ်မည့်အစား `omniroute doctor` က
   မအောင်မြင်မှုကို အစီရင်ခံသည်။
4. Server (`src/server/authz/policies/management.ts`) သည် တူညီသော salt ဖြင့်
   မျှော်မှန်းထားသည့် token ကို ပြန်လည်တွက်ချက်ပြီး timing အပေါ်အခြေခံသော
   ထုတ်ယူမှုကို ကာကွယ်ရန် `timingSafeEqual` ဖြင့် နှိုင်းယှဉ်သည်။

## လုံခြုံရေးဆိုင်ရာ ဂုဏ်သတ္တိများ

| ဂုဏ်သတ္တိ                               | အသေးစိတ်                                                                                                                                                                                                                 |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Loopback သီးသန့်**                    | Server ၏ ယုံကြည်စိတ်ချရသော peer-locality stamp (အမှန်တကယ် TCP peer address မှ ရယူထားသည်) က loopback ဖြစ်သည်ဟု ဖော်ပြသည့်အခါမှသာ လက်ခံသည်။ Client က ထိန်းချုပ်နိုင်သည့် `Host` header ကို locality အတွက် လုံးဝမယုံကြည်ပါ။ |
| **အချိန်တူ နှိုင်းယှဉ်မှု**             | `crypto.timingSafeEqual` သည် timing attack များကို ကာကွယ်ပေးသည်။                                                                                                                                                         |
| **ပြန်လည်ဖော်ထုတ်၍မရခြင်း**             | HMAC output မှ machine-id ကို ပြန်လည်ရယူ၍မရပါ။                                                                                                                                                                           |
| **`always`-protected bypass မရှိခြင်း** | CLI token စစ်ဆေးမှုမတိုင်မီ `isAlwaysProtectedPath()` ကို အကဲဖြတ်သည်။ `/api/shutdown` နှင့် `/api/settings/database` တို့သည် JWT ကို အမြဲလိုအပ်သည်။                                                                      |
| **Export လုပ်၍မရခြင်း**                 | Token ကို disk သို့ မည်သည့်အခါမျှ ရေးသားခြင်း သို့မဟုတ် log မှတ်တမ်းတင်ခြင်း မပြုပါ။                                                                                                                                     |

## Salt ပြောင်းလဲခြင်း

Code ပြောင်းလဲရန်မလိုဘဲ derived token ကို ပြောင်းလဲရန် `OMNIROUTE_CLI_SALT` ကို သတ်မှတ်ပါ။
ပြောင်းလဲပြီးနောက် ဤစက်ရှိ CLI process အားလုံးသည် token အသစ်ကို အလိုအလျောက်
အသုံးပြုမည်။ ယခင် derived value ပေါက်ကြားနိုင်ခြေရှိသည့် process-list leak ဖြစ်ပြီးနောက်
အသုံးဝင်သည်။

```bash
# အမြဲတမ်းပြောင်းလဲထားရန် (shell profile ထဲသို့ ထည့်ပါ)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# Token အသစ်ကို အသုံးပြုနေကြောင်း စစ်ဆေးပါ
omniroute status
```

ပုံသေ salt: `omniroute-cli-auth-v1`

## အဟောင်း format (SHA-256, 32-character) — ဆက်လက်လက်ခံနေဆဲ

အထက်ပါ HMAC format မတိုင်မီ CLI သည် ၎င်း၏ token ကို
`bin/cli/utils/cliToken.mjs` ရှိ `SHA-256(machineId + salt).hex[0..32]`
(32-character prefix) အဖြစ် derive လုပ်ခဲ့သည် (`src/lib/machineToken.ts` ရှိ
`getLegacyCliTokenSync`)။

နောက်ပြန်လိုက်ဖက်ညီမှုအတွက် server သည် format **နှစ်မျိုးလုံး** ကို လက်ခံသည်။ Verifier သည်
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]` ကို တည်ဆောက်ပြီး
ဝင်လာသည့် header ကို တစ်ခုချင်းစီနှင့် `timingSafeEqual` ဖြင့် နှိုင်းယှဉ်သည်
(`src/server/authz/policies/management.ts` နှင့် `src/lib/middleware/cliTokenAuth.ts`)။
ထို့ကြောင့် token သည် 64-character HMAC digest သို့မဟုတ် 32-character အဟောင်း
SHA-256 prefix **တစ်ခုခု** နှင့် ကိုက်ညီပါက valid ဖြစ်သည်။

**ပိတ်ထားရန်:** CLI token ယန္တရားကို လုံးဝပိတ်ရန် `OMNIROUTE_DISABLE_CLI_TOKEN=true`
(env သို့မဟုတ် `.env`) ကို သတ်မှတ်ပါ။ ထို့နောက် access အားလုံးအတွက် တိကျစွာပေးထားသည့်
API key လိုအပ်မည်။ Multi-user host များတွင် `machine-id` သည် အသုံးပြုသူတစ်ဦးချင်းစီအလိုက်
မဟုတ်ဘဲ device တစ်ခုချင်းစီအလိုက်ဖြစ်ပြီး host တစ်ခုတည်းရှိ အခြားအသုံးပြုသူက တူညီသော
token ကို တွက်ချက်နိုင်သောကြောင့် ဤသို့ပြုလုပ်ရန် အကြံပြုသည်။

## File များ

| File                                      | ရည်ရွယ်ချက်                                |
| ----------------------------------------- | ------------------------------------------ |
| `src/lib/machineToken.ts`                 | Token derivation (`getMachineTokenSync`)   |
| `src/server/authz/headers.ts`             | `CLI_TOKEN_HEADER` constant                |
| `src/server/authz/policies/management.ts` | Server ဘက်ရှိ verification                 |
| `src/server/authz/routeGuard.ts`          | Loopback host စစ်ဆေးမှု (`isLoopbackHost`) |

## ထပ်မံကြည့်ရှုရန်

- `docs/security/ROUTE_GUARD_TIERS.md` — route protection tier များ
- `docs/architecture/AUTHZ_GUIDE.md` — authorization pipeline အပြည့်အစုံ
