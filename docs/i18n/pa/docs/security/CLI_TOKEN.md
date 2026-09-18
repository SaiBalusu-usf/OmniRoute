# CLI Machine-ID Token (ਪੰਜਾਬੀ)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## ਸੰਖੇਪ ਜਾਣਕਾਰੀ

OmniRoute CLI ਕਮਾਂਡਾਂ ਸਥਾਨਕ ਪ੍ਰਬੰਧਨ API ਨਾਲ ਪ੍ਰਮਾਣੀਕਰਨ ਕਰਨ ਲਈ
`x-omniroute-cli-token` ਬੇਨਤੀ ਹੈਡਰ ਰਾਹੀਂ ਭੇਜੇ ਗਏ
`HMAC-SHA256(machine-id, salt)` ਟੋਕਨ ਦੀ ਵਰਤੋਂ ਕਰਦੀਆਂ ਹਨ।

ਇਸ ਨਾਲ CLI ਉਪ-ਕਮਾਂਡਾਂ (`omniroute status`, `omniroute providers`, ਆਦਿ)
ਹਰ ਵਾਰ ਚਲਾਉਣ ਵੇਲੇ ਵਰਤੋਂਕਾਰ ਤੋਂ JWT ਜਾਂ ਪਾਸਵਰਡ ਮੰਗੇ ਬਿਨਾਂ ਪ੍ਰਬੰਧਨ
ਐਂਡਪੌਇੰਟਾਂ ਨੂੰ ਕਾਲ ਕਰ ਸਕਦੀਆਂ ਹਨ।

## ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ

1. `getMachineTokenSync()` ਹਾਰਡਵੇਅਰ ਮਸ਼ੀਨ ID ਨੂੰ `node-machine-id` ਰਾਹੀਂ ਪੜ੍ਹਦਾ ਹੈ
   (ਅਸਫਲ ਹੋਣ 'ਤੇ ਖਾਲੀ ਸਤਰ ਵਰਤਦਾ ਹੈ, ਜਿਸ ਨਾਲ CLI ਪ੍ਰਮਾਣੀਕਰਨ ਅਯੋਗ ਹੋ ਜਾਂਦਾ ਹੈ)।
2. ਇਹ `HMAC-SHA256(machine_id, salt)` ਦੀ ਗਣਨਾ ਕਰਦਾ ਹੈ ਅਤੇ ਪੂਰਾ 64-ਅੱਖਰਾਂ ਵਾਲਾ
   ਹੈਕਸ ਡਾਈਜੈਸਟ ਵਾਪਸ ਕਰਦਾ ਹੈ—ਇੱਕ ਨਿਰਧਾਰਿਤ, ਗੈਰ-ਉਲਟਣਯੋਗ ਟੋਕਨ ਜੋ ਇਸ ਮਸ਼ੀਨ ਨਾਲ ਜੁੜਿਆ ਹੁੰਦਾ ਹੈ।
3. CLI ਟੋਕਨ ਨੂੰ `x-omniroute-cli-token` ਵਜੋਂ ਸਿਰਫ਼ ਉਦੋਂ ਭੇਜਦਾ ਹੈ ਜਦੋਂ ਨਿਰਧਾਰਤ
   ਮੰਜ਼ਿਲ ਇੱਕ ਸਪਸ਼ਟ ਲੂਪਬੈਕ URL (`localhost`, `127.0.0.0/8`, ਜਾਂ
   ਲੂਪਬੈਕ IPv6) ਹੋਵੇ। ਟੋਕਨ ਵਾਲੀਆਂ ਬੇਨਤੀਆਂ `redirect: error` ਦੀ ਵਰਤੋਂ ਕਰਦੀਆਂ ਹਨ, ਤਾਂ ਜੋ ਕੋਈ ਸਥਾਨਕ
   ਰੀਡਾਇਰੈਕਟ ਇਸਨੂੰ ਕਿਸੇ ਹੋਰ ਓਰਿਜਿਨ ਵੱਲ ਅੱਗੇ ਨਾ ਭੇਜ ਸਕੇ। ਰਿਮੋਟ ਕਾਂਟੈਕਸਟ ਇਸਦੀ ਬਜਾਏ ਸੀਮਿਤ-ਸਕੋਪ ਵਾਲੇ
   ਐਕਸੈੱਸ ਟੋਕਨਾਂ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਨ। ਜੇ ਟੋਕਨ ਬਣਾਉਣਾ ਉਪਲਬਧ ਨਾ ਹੋਵੇ, ਤਾਂ CLI ਹੈਡਰ ਨੂੰ ਛੱਡ ਦਿੰਦਾ ਹੈ
   ਅਤੇ ਖਾਲੀ ਟੋਕਨ ਨੂੰ ਵੈਧ ਮੰਨਣ ਦੀ ਬਜਾਏ `omniroute doctor`
   ਅਸਫਲਤਾ ਦੀ ਰਿਪੋਰਟ ਕਰਦਾ ਹੈ।
4. ਸਰਵਰ (`src/server/authz/policies/management.ts`) ਉਸੇ salt ਨਾਲ
   ਉਮੀਦ ਕੀਤਾ ਟੋਕਨ ਮੁੜ ਗਣਨਾ ਕਰਦਾ ਹੈ ਅਤੇ ਸਮਾਂ-ਆਧਾਰਿਤ ਨਿਕਾਸੀ ਨੂੰ ਰੋਕਣ ਲਈ
   `timingSafeEqual` ਰਾਹੀਂ ਤੁਲਨਾ ਕਰਦਾ ਹੈ।

## ਸੁਰੱਖਿਆ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ

| ਵਿਸ਼ੇਸ਼ਤਾ                         | ਵੇਰਵਾ                                                                                                                                                                                        |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ਕੇਵਲ ਲੂਪਬੈਕ**                   | ਸਿਰਫ਼ ਉਦੋਂ ਸਵੀਕਾਰਿਆ ਜਾਂਦਾ ਹੈ ਜਦੋਂ ਸਰਵਰ ਦੀ ਭਰੋਸੇਯੋਗ ਪੀਅਰ-ਸਥਾਨਕਤਾ ਮੋਹਰ (ਅਸਲ TCP ਪੀਅਰ ਪਤੇ ਤੋਂ ਪ੍ਰਾਪਤ) ਲੂਪਬੈਕ ਦਰਸਾਉਂਦੀ ਹੈ। ਸਥਾਨਕਤਾ ਲਈ ਕਲਾਇੰਟ-ਨਿਯੰਤਰਿਤ `Host` ਹੈਡਰ 'ਤੇ ਕਦੇ ਭਰੋਸਾ ਨਹੀਂ ਕੀਤਾ ਜਾਂਦਾ। |
| **ਸਥਿਰ-ਸਮਾਂ ਤੁਲਨਾ**               | `crypto.timingSafeEqual` ਟਾਈਮਿੰਗ ਹਮਲਿਆਂ ਨੂੰ ਰੋਕਦਾ ਹੈ।                                                                                                                                        |
| **ਗੈਰ-ਉਲਟਣਯੋਗ**                   | HMAC ਆਉਟਪੁੱਟ ਤੋਂ machine-id ਮੁੜ ਪ੍ਰਾਪਤ ਨਹੀਂ ਕੀਤਾ ਜਾ ਸਕਦਾ।                                                                                                                                    |
| **`always`-ਸੁਰੱਖਿਅਤ ਬਾਈਪਾਸ ਨਹੀਂ** | CLI ਟੋਕਨ ਜਾਂਚ ਤੋਂ ਪਹਿਲਾਂ `isAlwaysProtectedPath()` ਦਾ ਮੁਲਾਂਕਣ ਕੀਤਾ ਜਾਂਦਾ ਹੈ। `/api/shutdown` ਅਤੇ `/api/settings/database` ਲਈ ਹਮੇਸ਼ਾਂ JWT ਲੋੜੀਂਦਾ ਹੈ।                                         |
| **ਨਿਰਯਾਤ ਨਾ ਕਰਨਯੋਗ**              | ਟੋਕਨ ਨੂੰ ਕਦੇ ਵੀ ਡਿਸਕ 'ਤੇ ਨਹੀਂ ਲਿਖਿਆ ਜਾਂਦਾ ਜਾਂ ਲੌਗ ਨਹੀਂ ਕੀਤਾ ਜਾਂਦਾ।                                                                                                                           |

## Salt ਰੋਟੇਸ਼ਨ

ਕੋਡ ਵਿੱਚ ਤਬਦੀਲੀਆਂ ਕੀਤੇ ਬਿਨਾਂ ਬਣਾਏ ਗਏ ਟੋਕਨ ਨੂੰ ਬਦਲਣ ਲਈ `OMNIROUTE_CLI_SALT` ਸੈੱਟ ਕਰੋ।
ਰੋਟੇਸ਼ਨ ਤੋਂ ਬਾਅਦ, ਇਸ ਮਸ਼ੀਨ ਉੱਤੇ ਸਾਰੀਆਂ CLI ਪ੍ਰਕਿਰਿਆਵਾਂ ਆਪਣੇ ਆਪ ਨਵੇਂ ਟੋਕਨ ਦੀ
ਵਰਤੋਂ ਕਰਨਗੀਆਂ। ਇਹ ਕਿਸੇ ਪ੍ਰਕਿਰਿਆ-ਸੂਚੀ ਲੀਕ ਤੋਂ ਬਾਅਦ ਲਾਭਦਾਇਕ ਹੈ ਜਿਸ ਨੇ ਸੰਭਵ ਤੌਰ 'ਤੇ
ਪਿਛਲਾ ਬਣਾਇਆ ਗਿਆ ਮੁੱਲ ਉਜਾਗਰ ਕਰ ਦਿੱਤਾ ਹੋਵੇ।

```bash
# ਸਥਾਈ ਰੋਟੇਸ਼ਨ (ਸ਼ੈੱਲ ਪ੍ਰੋਫ਼ਾਈਲ ਵਿੱਚ ਸ਼ਾਮਲ ਕਰੋ)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ ਨਵਾਂ ਟੋਕਨ ਵਰਤਿਆ ਜਾ ਰਿਹਾ ਹੈ
omniroute status
```

ਡਿਫੌਲਟ salt: `omniroute-cli-auth-v1`

## ਪੁਰਾਤਨ ਫਾਰਮੈਟ (SHA-256, 32-ਅੱਖਰ) — ਅਜੇ ਵੀ ਸਵੀਕਾਰਿਆ ਜਾਂਦਾ ਹੈ

ਉਪਰੋਕਤ HMAC ਫਾਰਮੈਟ ਤੋਂ ਪਹਿਲਾਂ, CLI ਆਪਣਾ ਟੋਕਨ
`bin/cli/utils/cliToken.mjs` ਵਿੱਚ `SHA-256(machineId + salt).hex[0..32]`
(ਇੱਕ 32-ਅੱਖਰਾਂ ਵਾਲਾ ਪ੍ਰੀਫਿਕਸ) ਵਜੋਂ ਬਣਾਉਂਦਾ ਸੀ (`src/lib/machineToken.ts` ਵਿੱਚ `getLegacyCliTokenSync`)।

ਪਿਛਲੀ ਅਨੁਕੂਲਤਾ ਲਈ ਸਰਵਰ **ਦੋਵੇਂ** ਫਾਰਮੈਟ ਸਵੀਕਾਰਦਾ ਹੈ: ਵੈਰੀਫਾਇਰ
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]` ਬਣਾਉਂਦਾ ਹੈ ਅਤੇ ਆਉਣ ਵਾਲੇ
ਹੈਡਰ ਦੀ ਹਰੇਕ ਨਾਲ `timingSafeEqual` ਰਾਹੀਂ ਤੁਲਨਾ ਕਰਦਾ ਹੈ
(`src/server/authz/policies/management.ts` ਅਤੇ `src/lib/middleware/cliTokenAuth.ts`)।
ਇਸ ਲਈ ਕੋਈ ਟੋਕਨ ਵੈਧ ਹੈ ਜੇਕਰ ਉਹ **ਜਾਂ ਤਾਂ** 64-ਅੱਖਰਾਂ ਵਾਲੇ HMAC ਡਾਈਜੈਸਟ ਜਾਂ 32-ਅੱਖਰਾਂ ਵਾਲੇ
ਪੁਰਾਤਨ SHA-256 ਪ੍ਰੀਫਿਕਸ ਨਾਲ ਮੇਲ ਖਾਂਦਾ ਹੈ।

**ਚੋਣ ਰੱਦ ਕਰਨਾ:** CLI ਟੋਕਨ ਵਿਧੀ ਨੂੰ ਪੂਰੀ ਤਰ੍ਹਾਂ ਅਯੋਗ ਕਰਨ ਲਈ `OMNIROUTE_DISABLE_CLI_TOKEN=true`
(env ਜਾਂ `.env`) ਸੈੱਟ ਕਰੋ; ਫਿਰ ਹਰ ਪਹੁੰਚ ਲਈ ਇੱਕ ਸਪਸ਼ਟ API ਕੁੰਜੀ ਲੋੜੀਂਦੀ ਹੋਵੇਗੀ। ਬਹੁ-ਵਰਤੋਂਕਾਰ
ਹੋਸਟਾਂ ਉੱਤੇ ਇਸਦੀ ਸਿਫ਼ਾਰਸ਼ ਕੀਤੀ ਜਾਂਦੀ ਹੈ, ਕਿਉਂਕਿ `machine-id` ਪ੍ਰਤੀ-ਡਿਵਾਈਸ ਹੁੰਦਾ ਹੈ (ਪ੍ਰਤੀ-ਵਰਤੋਂਕਾਰ ਨਹੀਂ) ਅਤੇ ਉਸੇ
ਹੋਸਟ ਉੱਤੇ ਕੋਈ ਹੋਰ ਵਰਤੋਂਕਾਰ ਵੀ ਉਹੀ ਟੋਕਨ ਗਣਨਾ ਕਰ ਸਕਦਾ ਹੈ।

## ਫ਼ਾਈਲਾਂ

| ਫ਼ਾਈਲ                                     | ਉਦੇਸ਼                               |
| ----------------------------------------- | ----------------------------------- |
| `src/lib/machineToken.ts`                 | ਟੋਕਨ ਬਣਾਉਣਾ (`getMachineTokenSync`) |
| `src/server/authz/headers.ts`             | `CLI_TOKEN_HEADER` ਸਥਿਰਾਂਕ          |
| `src/server/authz/policies/management.ts` | ਸਰਵਰ-ਪਾਸੇ ਤਸਦੀਕ                     |
| `src/server/authz/routeGuard.ts`          | ਲੂਪਬੈਕ ਹੋਸਟ ਜਾਂਚ (`isLoopbackHost`) |

## ਇਹ ਵੀ ਵੇਖੋ

- `docs/security/ROUTE_GUARD_TIERS.md` — ਰੂਟ ਸੁਰੱਖਿਆ ਪੱਧਰ
- `docs/architecture/AUTHZ_GUIDE.md` — ਪੂਰੀ ਅਧਿਕਾਰਕਰਨ ਪਾਈਪਲਾਈਨ
