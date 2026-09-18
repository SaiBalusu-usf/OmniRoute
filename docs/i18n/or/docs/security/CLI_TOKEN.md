# CLI Machine-ID Token (ଓଡ଼ିଆ)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## ସାରାଂଶ

OmniRoute CLI କମାଣ୍ଡଗୁଡ଼ିକ `x-omniroute-cli-token` ଅନୁରୋଧ ହେଡର୍ ମାଧ୍ୟମରେ ପଠାଯାଇଥିବା
`HMAC-SHA256(machine-id, salt)` ଟୋକନ୍ ବ୍ୟବହାର କରି ସ୍ଥାନୀୟ ପରିଚାଳନା API ସହିତ
ପ୍ରାମାଣୀକରଣ କରନ୍ତି।

ଏହା CLI ସବ୍କମାଣ୍ଡଗୁଡ଼ିକୁ (`omniroute status`, `omniroute providers`, ଇତ୍ୟାଦି)
ପ୍ରତ୍ୟେକ ଆହ୍ୱାନ ସମୟରେ ବ୍ୟବହାରକାରୀଙ୍କୁ JWT କିମ୍ବା ପାସ୍ୱାର୍ଡ ଯୋଗାଇବାର ଆବଶ୍ୟକତା ବିନା
ପରିଚାଳନା ଏଣ୍ଡପଏଣ୍ଟଗୁଡ଼ିକୁ କଲ୍ କରିବାକୁ ଅନୁମତି ଦିଏ।

## ଏହା କିପରି କାର୍ଯ୍ୟ କରେ

1. `getMachineTokenSync()` `node-machine-id` ମାଧ୍ୟମରେ ହାର୍ଡୱେର୍ ମେସିନ୍ ID ପଢ଼େ
   (ବିଫଳ ହେଲେ ଏକ ଖାଲି ଷ୍ଟ୍ରିଙ୍ଗ୍କୁ ଫେରିଯାଏ, ଯାହା CLI ପ୍ରାମାଣୀକରଣକୁ ଅକ୍ଷମ କରେ)।
2. ଏହା `HMAC-SHA256(machine_id, salt)` ଗଣନା କରେ ଏବଂ ସମ୍ପୂର୍ଣ୍ଣ 64-ଅକ୍ଷର ବିଶିଷ୍ଟ
   hex ଡାଇଜେଷ୍ଟ ଫେରାଏ — ଏହି ମେସିନ୍ ସହ ବନ୍ଧା ଥିବା ଏକ ନିର୍ଦ୍ଧାରିତ, ଅପ୍ରତ୍ୟାବର୍ତ୍ତନୀୟ ଟୋକନ୍।
3. ସମାଧାନ କରାଯାଇଥିବା ଗନ୍ତବ୍ୟ ଏକ ସ୍ପଷ୍ଟ ଲୁପ୍ବ୍ୟାକ୍ URL (`localhost`, `127.0.0.0/8`, କିମ୍ବା
   ଲୁପ୍ବ୍ୟାକ୍ IPv6) ହୋଇଥିଲେ ମାତ୍ର CLI ଟୋକନ୍ଟିକୁ `x-omniroute-cli-token` ଭାବରେ ପଠାଏ।
   ଟୋକନ୍ ବହନ କରୁଥିବା ଅନୁରୋଧଗୁଡ଼ିକ `redirect: error` ବ୍ୟବହାର କରନ୍ତି, ଫଳରେ ଏକ ସ୍ଥାନୀୟ
   ରିଡାଇରେକ୍ଟ ଏହାକୁ ଅନ୍ୟ ଏକ ଅରିଜିନ୍କୁ ଫରୱାର୍ଡ କରିପାରେ ନାହିଁ। ତାହା ପରିବର୍ତ୍ତେ ରିମୋଟ୍
   କଣ୍ଟେକ୍ସ୍ଟଗୁଡ଼ିକ ସ୍କୋପ୍ଡ ଆକ୍ସେସ୍ ଟୋକନ୍ ବ୍ୟବହାର କରନ୍ତି। ଡିରାଇଭେସନ୍ ଉପଲବ୍ଧ ନଥିଲେ,
   CLI ହେଡର୍ଟିକୁ ବାଦ ଦିଏ ଏବଂ ଏକ ଖାଲି ଟୋକନ୍କୁ ବୈଧ ଭାବରେ ଗ୍ରହଣ ନକରି
   `omniroute doctor` ବିଫଳତା ବିଷୟରେ ଜଣାଏ।
4. ସର୍ଭର୍ (`src/server/authz/policies/management.ts`) ସମାନ salt ସହ ଆଶାକରାଯାଇଥିବା
   ଟୋକନ୍ଟିକୁ ପୁନଃଗଣନା କରେ ଏବଂ ସମୟ-ଆଧାରିତ ନିଷ୍କାସନକୁ ପ୍ରତିରୋଧ କରିବା ପାଇଁ
   `timingSafeEqual` ମାଧ୍ୟମରେ ତୁଳନା କରେ।

## ସୁରକ୍ଷା ବୈଶିଷ୍ଟ୍ୟଗୁଡ଼ିକ

| ବୈଶିଷ୍ଟ୍ୟ                           | ବିବରଣୀ                                                                                                                                                                                                    |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **କେବଳ ଲୁପ୍ବ୍ୟାକ୍**                 | ସର୍ଭର୍ର ବିଶ୍ୱସନୀୟ ପିଅର୍-ଲୋକାଲିଟି ଷ୍ଟାମ୍ପ (ପ୍ରକୃତ TCP ପିଅର୍ ଠିକଣାରୁ ବ୍ୟୁତ୍ପନ୍ନ) ଲୁପ୍ବ୍ୟାକ୍ ବୋଲି ଦର୍ଶାଇଲେ ମାତ୍ର ଗ୍ରହଣ କରାଯାଏ। ଲୋକାଲିଟି ପାଇଁ କ୍ଲାଏଣ୍ଟ-ନିୟନ୍ତ୍ରିତ `Host` ହେଡର୍କୁ କେବେବି ବିଶ୍ୱାସ କରାଯାଏ ନାହିଁ। |
| **ସ୍ଥିର-ସମୟ ତୁଳନା**                 | `crypto.timingSafeEqual` ଟାଇମିଂ ଆକ୍ରମଣକୁ ପ୍ରତିରୋଧ କରେ।                                                                                                                                                    |
| **ଅପ୍ରତ୍ୟାବର୍ତ୍ତନୀୟ**               | HMAC ଆଉଟପୁଟ୍ରୁ machine-id ପୁନରୁଦ୍ଧାର କରାଯାଇପାରେ ନାହିଁ।                                                                                                                                                    |
| **`always`-ସୁରକ୍ଷିତ ବାଇପାସ୍ ନାହିଁ** | CLI ଟୋକନ୍ ଯାଞ୍ଚ ପୂର୍ବରୁ `isAlwaysProtectedPath()` ମୂଲ୍ୟାୟନ କରାଯାଏ। `/api/shutdown` ଏବଂ `/api/settings/database` ପାଇଁ ସର୍ବଦା JWT ଆବଶ୍ୟକ।                                                                   |
| **ରପ୍ତାନିଯୋଗ୍ୟ ନୁହେଁ**              | ଟୋକନ୍ଟିକୁ କେବେବି ଡିସ୍କରେ ଲେଖାଯାଏ ନାହିଁ କିମ୍ବା ଲଗ୍ କରାଯାଏ ନାହିଁ।                                                                                                                                           |

## Salt ରୋଟେସନ୍

କୋଡ୍ ପରିବର୍ତ୍ତନ ବିନା ବ୍ୟୁତ୍ପନ୍ନ ଟୋକନ୍ଟିକୁ ରୋଟେଟ୍ କରିବା ପାଇଁ `OMNIROUTE_CLI_SALT` ସେଟ୍ କରନ୍ତୁ।
ରୋଟେସନ୍ ପରେ, ଏହି ମେସିନ୍ରେ ଥିବା ସମସ୍ତ CLI ପ୍ରକ୍ରିୟା ସ୍ୱୟଂଚାଳିତ ଭାବରେ ନୂତନ ଟୋକନ୍
ବ୍ୟବହାର କରିବ। ପୂର୍ବରୁ ବ୍ୟୁତ୍ପନ୍ନ ମୂଲ୍ୟ ପ୍ରକାଶ କରିଥାଇପାରେ ଏପରି ଏକ ପ୍ରକ୍ରିୟା-ତାଲିକା
ଲିକ୍ ପରେ ଏହା ଉପଯୋଗୀ।

```bash
# ସ୍ଥାୟୀ ରୋଟେସନ୍ (shell profileରେ ଯୋଡ଼ନ୍ତୁ)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# ନୂତନ ଟୋକନ୍ ବ୍ୟବହୃତ ହେଉଛି ବୋଲି ଯାଞ୍ଚ କରନ୍ତୁ
omniroute status
```

ଡିଫଲ୍ଟ salt: `omniroute-cli-auth-v1`

## ପୁରୁଣା ଫର୍ମାଟ୍ (SHA-256, 32-ଅକ୍ଷର) — ଏବେବି ଗ୍ରହଣୀୟ

ଉପରୋକ୍ତ HMAC ଫର୍ମାଟ୍ ପୂର୍ବରୁ, CLI ଏହାର ଟୋକନ୍କୁ
`SHA-256(machineId + salt).hex[0..32]` (ଏକ 32-ଅକ୍ଷର ବିଶିଷ୍ଟ ପ୍ରିଫିକ୍ସ) ଭାବରେ
`bin/cli/utils/cliToken.mjs`ରେ (`src/lib/machineToken.ts`ରେ `getLegacyCliTokenSync`) ବ୍ୟୁତ୍ପନ୍ନ କରୁଥିଲା।

ପଶ୍ଚାତ୍-ସୁସଙ୍ଗତତା ପାଇଁ ସର୍ଭର୍ **ଉଭୟ** ଫର୍ମାଟ୍ ଗ୍ରହଣ କରେ: ଯାଞ୍ଚକାରୀ
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]` ନିର୍ମାଣ କରେ ଏବଂ
ଆସୁଥିବା ହେଡର୍କୁ ପ୍ରତ୍ୟେକ ସହିତ `timingSafeEqual` ବ୍ୟବହାର କରି ତୁଳନା କରେ
(`src/server/authz/policies/management.ts` ଏବଂ `src/lib/middleware/cliTokenAuth.ts`)।
ତେଣୁ, ଯଦି ଏକ ଟୋକନ୍ 64-ଅକ୍ଷର ବିଶିଷ୍ଟ HMAC ଡାଇଜେଷ୍ଟ **କିମ୍ବା** 32-ଅକ୍ଷର ବିଶିଷ୍ଟ
ପୁରୁଣା SHA-256 ପ୍ରିଫିକ୍ସ ମଧ୍ୟରୁ **ଯେକୌଣସି ଗୋଟିଏ** ସହ ମେଳ ଖାଏ, ତେବେ ଏହା ବୈଧ।

**ଅପ୍ଟ-ଆଉଟ୍:** CLI ଟୋକନ୍ ବ୍ୟବସ୍ଥାକୁ ସମ୍ପୂର୍ଣ୍ଣ ଭାବରେ ଅକ୍ଷମ କରିବା ପାଇଁ
`OMNIROUTE_DISABLE_CLI_TOKEN=true` (env କିମ୍ବା `.env`) ସେଟ୍ କରନ୍ତୁ; ତାହା ପରେ ସମସ୍ତ
ଆକ୍ସେସ୍ ପାଇଁ ଏକ ସ୍ପଷ୍ଟ API କୀ ଆବଶ୍ୟକ ହେବ। ବହୁ-ବ୍ୟବହାରକାରୀ ହୋଷ୍ଟଗୁଡ଼ିକରେ ଏହା
ସୁପାରିଶ କରାଯାଏ, କାରଣ `machine-id` ପ୍ରତି-ଡିଭାଇସ୍ (ପ୍ରତି-ବ୍ୟବହାରକାରୀ ନୁହେଁ) ଅଟେ ଏବଂ
ସମାନ ହୋଷ୍ଟରେ ଥିବା ଅନ୍ୟ ଜଣେ ବ୍ୟବହାରକାରୀ ସମାନ ଟୋକନ୍ ଗଣନା କରିପାରନ୍ତି।

## ଫାଇଲ୍ଗୁଡ଼ିକ

| ଫାଇଲ୍                                     | ଉଦ୍ଦେଶ୍ୟ                                  |
| ----------------------------------------- | ----------------------------------------- |
| `src/lib/machineToken.ts`                 | ଟୋକନ୍ ବ୍ୟୁତ୍ପତ୍ତି (`getMachineTokenSync`) |
| `src/server/authz/headers.ts`             | `CLI_TOKEN_HEADER` ସ୍ଥିରାଙ୍କ              |
| `src/server/authz/policies/management.ts` | ସର୍ଭର୍-ପାର୍ଶ୍ୱ ଯାଞ୍ଚ                      |
| `src/server/authz/routeGuard.ts`          | ଲୁପ୍ବ୍ୟାକ୍ ହୋଷ୍ଟ ଯାଞ୍ଚ (`isLoopbackHost`) |

## ଏହା ମଧ୍ୟ ଦେଖନ୍ତୁ

- `docs/security/ROUTE_GUARD_TIERS.md` — ରୁଟ୍ ସୁରକ୍ଷା ସ୍ତରଗୁଡ଼ିକ
- `docs/architecture/AUTHZ_GUIDE.md` — ସମ୍ପୂର୍ଣ୍ଣ ପ୍ରାଧିକରଣ ପାଇପ୍ଲାଇନ୍
