# CLI Machine-ID Token (Latviešu)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## Pārskats

OmniRoute CLI komandas autentificējas lokālajā pārvaldības API, izmantojot
`HMAC-SHA256(machine-id, salt)` marķieri, kas tiek nosūtīts pieprasījuma galvenē
`x-omniroute-cli-token`.

Tas ļauj CLI apakškomandām (`omniroute status`, `omniroute providers` u.c.)
izsaukt pārvaldības galapunktus, neprasot lietotājam katrā izsaukumā norādīt JWT
vai paroli.

## Darbības princips

1. `getMachineTokenSync()` nolasa aparatūras iekārtas ID, izmantojot `node-machine-id`
   (kļūmes gadījumā izmanto tukšu virkni, atspējojot CLI autentifikāciju).
2. Tā aprēķina `HMAC-SHA256(machine_id, salt)` un atgriež pilnu 64 rakstzīmju
   heksadecimālo jaucējvērtību — deterministisku, neatgriezenisku marķieri, kas piesaistīts šai iekārtai.
3. CLI nosūta marķieri kā `x-omniroute-cli-token` tikai tad, ja noteiktais
   galamērķis ir nepārprotams atgriezeniskās cilpas URL (`localhost`, `127.0.0.0/8` vai
   atgriezeniskās cilpas IPv6). Pieprasījumi, kas satur marķieri, izmanto `redirect: error`, tāpēc lokāla
   novirzīšana nevar to pārsūtīt uz citu avotu. Attāli konteksti tā vietā izmanto
   ierobežota tvēruma piekļuves marķierus. Ja atvasināšana nav pieejama, CLI izlaiž galveni,
   un `omniroute doctor` ziņo par kļūmi, nevis uzskata tukšu marķieri
   par derīgu.
4. Serveris (`src/server/authz/policies/management.ts`) atkārtoti aprēķina
   sagaidāmo marķieri ar to pašu sāli un salīdzina to, izmantojot `timingSafeEqual`, lai
   novērstu izgūšanu, kas balstīta uz izpildes laika mērījumiem.

## Drošības īpašības

| Īpašība                                 | Informācija                                                                                                                                                                                                                                          |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tikai atgriezeniskā cilpa**           | Tiek pieņemts tikai tad, ja servera uzticamā vienādranga mezgla lokalitātes atzīme (kas iegūta no faktiskās TCP vienādranga adreses) norāda uz atgriezenisko cilpu. Lokalizācijas noteikšanai nekad neuzticas klienta kontrolētajai `Host` galvenei. |
| **Konstanta laika salīdzināšana**       | `crypto.timingSafeEqual` novērš izpildes laika analīzes uzbrukumus.                                                                                                                                                                                  |
| **Neatgriezenisks**                     | No HMAC izvades nevar atgūt iekārtas ID.                                                                                                                                                                                                             |
| **Nav `always` aizsardzības apiešanas** | `isAlwaysProtectedPath()` tiek izpildīta pirms CLI marķiera pārbaudes. `/api/shutdown` un `/api/settings/database` vienmēr pieprasa JWT.                                                                                                             |
| **Neeksportējams**                      | Marķieris nekad netiek ierakstīts diskā vai žurnālos.                                                                                                                                                                                                |

## Sāls rotācija

Iestatiet `OMNIROUTE_CLI_SALT`, lai nomainītu atvasināto marķieri, neveicot izmaiņas kodā.
Pēc rotācijas visi CLI procesi šajā iekārtā automātiski izmantos jauno marķieri.
Tas ir noderīgi pēc procesu saraksta noplūdes, kurā varēja tikt atklāta
iepriekšējā atvasinātā vērtība.

```bash
# Pastāvīga rotācija (pievienojiet čaulas profilam)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# Pārbaudiet, vai tiek izmantots jaunais marķieris
omniroute status
```

Noklusējuma sāls: `omniroute-cli-auth-v1`

## Mantotais formāts (SHA-256, 32 rakstzīmes) — joprojām tiek pieņemts

Pirms iepriekš aprakstītā HMAC formāta CLI atvasināja savu marķieri kā
`SHA-256(machineId + salt).hex[0..32]` (32 rakstzīmju prefiksu) failā
`bin/cli/utils/cliToken.mjs` (`getLegacyCliTokenSync` failā `src/lib/machineToken.ts`).

Atpakaļsaderības nolūkos serveris pieņem **abus** formātus: pārbaudītājs izveido
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]` un salīdzina
ienākošo galveni ar katru no tiem, izmantojot `timingSafeEqual`
(`src/server/authz/policies/management.ts` un `src/lib/middleware/cliTokenAuth.ts`).
Tādējādi marķieris ir derīgs, ja tas atbilst **vai nu** 64 rakstzīmju HMAC jaucējvērtībai, **vai** 32 rakstzīmju
mantotajam SHA-256 prefiksam.

**Atteikšanās:** iestatiet `OMNIROUTE_DISABLE_CLI_TOKEN=true` (vidē vai `.env`), lai pilnībā
atspējotu CLI marķiera mehānismu; tad visai piekļuvei ir nepieciešama nepārprotami norādīta API atslēga. Vairāku lietotāju
resursdatoros tas ir ieteicams, jo `machine-id` ir unikāls ierīcei (nevis lietotājam), un cits
lietotājs tajā pašā resursdatorā varētu aprēķināt identisku marķieri.

## Faili

| Fails                                     | Nolūks                                                         |
| ----------------------------------------- | -------------------------------------------------------------- |
| `src/lib/machineToken.ts`                 | Marķiera atvasināšana (`getMachineTokenSync`)                  |
| `src/server/authz/headers.ts`             | Konstante `CLI_TOKEN_HEADER`                                   |
| `src/server/authz/policies/management.ts` | Servera puses pārbaude                                         |
| `src/server/authz/routeGuard.ts`          | Atgriezeniskās cilpas resursdatora pārbaude (`isLoopbackHost`) |

## Skatiet arī

- `docs/security/ROUTE_GUARD_TIERS.md` — maršrutu aizsardzības līmeņi
- `docs/architecture/AUTHZ_GUIDE.md` — pilna autorizācijas apstrādes plūsma
