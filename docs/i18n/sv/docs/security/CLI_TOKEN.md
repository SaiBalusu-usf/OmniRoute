# CLI Machine-ID Token (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## Översikt

OmniRoute CLI-kommandon autentiseras mot det lokala hanterings-API:t med en
`HMAC-SHA256(machine-id, salt)`-token som skickas via request-headern
`x-omniroute-cli-token`.

Detta gör att CLI-underkommandon (`omniroute status`, `omniroute providers` osv.)
kan anropa hanteringsendpoints utan att användaren behöver ange en JWT eller ett
lösenord vid varje körning.

## Så fungerar det

1. `getMachineTokenSync()` läser maskinvarans maskin-ID via `node-machine-id`
   (återgår till en tom sträng vid fel, vilket inaktiverar CLI-autentisering).
2. Funktionen beräknar `HMAC-SHA256(machine_id, salt)` och returnerar hela det
   hexadecimala sammandraget på 64 tecken — en deterministisk, icke-reversibel
   token som är knuten till den här maskinen.
3. CLI:t skickar endast token som `x-omniroute-cli-token` när den fastställda
   destinationen är en explicit loopback-URL (`localhost`, `127.0.0.0/8` eller
   loopback-IPv6). Förfrågningar som innehåller token använder `redirect: error`,
   så att en lokal omdirigering inte kan vidarebefordra den till ett annat
   ursprung. Fjärrkontexter använder i stället åtkomsttoken med begränsad
   omfattning. Om härledningen inte är tillgänglig utelämnar CLI:t headern, och
   `omniroute doctor` rapporterar felet i stället för att behandla en tom token
   som giltig.
4. Servern (`src/server/authz/policies/management.ts`) beräknar den förväntade
   token på nytt med samma salt och jämför med `timingSafeEqual` för att
   förhindra tidsbaserad extrahering.

## Säkerhetsegenskaper

| Egenskap                                  | Detalj                                                                                                                                                                                                   |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Endast loopback**                       | Accepteras endast när serverns betrodda stämpel för motpartens lokalitet (härledd från den faktiska TCP-motpartens adress) anger loopback. Den klientstyrda `Host`-headern används aldrig för lokalitet. |
| **Jämförelse i konstant tid**             | `crypto.timingSafeEqual` förhindrar tidsattacker.                                                                                                                                                        |
| **Icke-reversibel**                       | Maskin-ID:t kan inte återskapas från HMAC-utdata.                                                                                                                                                        |
| **Ingen förbikoppling av `always`-skydd** | `isAlwaysProtectedPath()` utvärderas före kontrollen av CLI-token. `/api/shutdown` och `/api/settings/database` kräver alltid JWT.                                                                       |
| **Kan inte exporteras**                   | Token skrivs aldrig till disk eller loggas.                                                                                                                                                              |

## Rotation av salt

Ange `OMNIROUTE_CLI_SALT` för att rotera den härledda token utan kodändringar.
Efter rotationen använder alla CLI-processer på den här maskinen automatiskt
den nya token. Detta är användbart efter en läcka av processlistan som kan ha
exponerat det tidigare härledda värdet.

```bash
# Beständig rotation (lägg till i skalprofilen)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# Verifiera att den nya token används
omniroute status
```

Standardsalt: `omniroute-cli-auth-v1`

## Äldre format (SHA-256, 32 tecken) — accepteras fortfarande

Före HMAC-formatet ovan härledde CLI:t sin token som
`SHA-256(machineId + salt).hex[0..32]` (ett prefix på 32 tecken) i
`bin/cli/utils/cliToken.mjs` (`getLegacyCliTokenSync` i `src/lib/machineToken.ts`).

För bakåtkompatibilitet accepterar servern **båda** formaten: verifieraren skapar
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]` och jämför den
inkommande headern mot var och en med `timingSafeEqual`
(`src/server/authz/policies/management.ts` och `src/lib/middleware/cliTokenAuth.ts`).
En token är alltså giltig om den matchar **antingen** HMAC-sammandraget på 64 tecken
eller det äldre SHA-256-prefixet på 32 tecken.

**Inaktivering:** ange `OMNIROUTE_DISABLE_CLI_TOKEN=true` (i miljön eller `.env`) för
att inaktivera CLI-tokenmekanismen helt. All åtkomst kräver då en explicit API-nyckel.
Detta rekommenderas på värdar med flera användare, eftersom `machine-id` gäller per
enhet (inte per användare) och en annan användare på samma värd skulle kunna beräkna
samma token.

## Filer

| Fil                                       | Syfte                                        |
| ----------------------------------------- | -------------------------------------------- |
| `src/lib/machineToken.ts`                 | Tokenhärledning (`getMachineTokenSync`)      |
| `src/server/authz/headers.ts`             | Konstanten `CLI_TOKEN_HEADER`                |
| `src/server/authz/policies/management.ts` | Verifiering på serversidan                   |
| `src/server/authz/routeGuard.ts`          | Kontroll av loopback-värd (`isLoopbackHost`) |

## Se även

- `docs/security/ROUTE_GUARD_TIERS.md` — nivåer för ruttskydd
- `docs/architecture/AUTHZ_GUIDE.md` — fullständig auktoriseringspipeline
