# CLI Machine-ID Token (Eesti)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## Ülevaade

OmniRoute CLI käsud autendivad end kohaliku haldus-API vastu, kasutades
`HMAC-SHA256(machine-id, salt)` tokenit, mis saadetakse päringu päises
`x-omniroute-cli-token`.

See võimaldab CLI alamkäskudel (`omniroute status`, `omniroute providers` jne)
kutsuda halduse lõpp-punkte, ilma et kasutaja peaks iga käivitamise korral
JWT-d või parooli sisestama.

## Kuidas see töötab

1. `getMachineTokenSync()` loeb riistvara masina ID paketi `node-machine-id`
   kaudu (tõrke korral kasutatakse tühja stringi, mis keelab CLI autentimise).
2. See arvutab `HMAC-SHA256(machine_id, salt)` ja tagastab täieliku 64-märgilise
   kuueteistkümnendsüsteemis räsi — deterministliku, pöördumatu ja selle masinaga seotud tokeni.
3. CLI saadab tokeni päisena `x-omniroute-cli-token` ainult siis, kui lahendatud
   sihtkoht on selgesõnaline loopback-URL (`localhost`, `127.0.0.0/8` või
   loopback-IPv6). Tokenit sisaldavad päringud kasutavad sätet `redirect: error`,
   mistõttu kohalik ümbersuunamine ei saa seda teisele päritolule edastada. Kaugkontekstid
   kasutavad selle asemel piiratud ulatusega juurdepääsutokeneid. Kui tuletamine pole võimalik,
   jätab CLI päise lisamata ja `omniroute doctor` raporteerib tõrke, selle asemel et
   pidada tühja tokenit kehtivaks.
4. Server (`src/server/authz/policies/management.ts`) arvutab sama soola abil
   oodatava tokeni uuesti ja võrdleb seda funktsiooniga `timingSafeEqual`, et
   vältida ajastusel põhinevat eraldamist.

## Turvaomadused

| Omadus                               | Üksikasjad                                                                                                                                                                                                                             |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Ainult loopback**                  | Aktsepteeritakse ainult siis, kui serveri usaldusväärne partneri lokaalsuse märgend (tuletatud tegelikust TCP partneri aadressist) näitab loopback-aadressi. Kliendi juhitavat päist `Host` ei usaldata kunagi lokaalsuse määramiseks. |
| **Konstantse ajaga võrdlus**         | `crypto.timingSafeEqual` takistab ajastusründeid.                                                                                                                                                                                      |
| **Pöördumatu**                       | HMAC-i väljundist ei saa masina ID-d taastada.                                                                                                                                                                                         |
| **`always`-kaitse möödaviik puudub** | `isAlwaysProtectedPath()` hinnatakse enne CLI tokeni kontrollimist. `/api/shutdown` ja `/api/settings/database` nõuavad alati JWT-d.                                                                                                   |
| **Mitte-eksporditav**                | Tokenit ei kirjutata kunagi kettale ega logita.                                                                                                                                                                                        |

## Soola vahetamine

Määrake `OMNIROUTE_CLI_SALT`, et vahetada tuletatud token ilma koodi muutmata.
Pärast vahetamist kasutavad kõik selle masina CLI protsessid automaatselt uut tokenit.
See on kasulik pärast protsessiloendi leket, mis võis paljastada eelmise
tuletatud väärtuse.

```bash
# Püsiv vahetamine (lisage shelli profiili)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# Kontrollige, et uus token oleks kasutusel
omniroute status
```

Vaikesool: `omniroute-cli-auth-v1`

## Pärandvorming (SHA-256, 32 märki) — endiselt aktsepteeritav

Enne eespool kirjeldatud HMAC-vormingut tuletas CLI oma tokeni kujul
`SHA-256(machineId + salt).hex[0..32]` (32-märgiline prefiks) failis
`bin/cli/utils/cliToken.mjs` (`getLegacyCliTokenSync` failis `src/lib/machineToken.ts`).

Tagasiühilduvuse tagamiseks aktsepteerib server **mõlemat** vormingut: verifitseerija koostab
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]` ja võrdleb
sissetulevat päist igaühega funktsiooni `timingSafeEqual` abil
(`src/server/authz/policies/management.ts` ja `src/lib/middleware/cliTokenAuth.ts`).
Seega on token kehtiv, kui see vastab **kas** 64-märgilisele HMAC-räsile või 32-märgilisele
pärandvormingu SHA-256 prefiksile.

**Keelamine:** määrake `OMNIROUTE_DISABLE_CLI_TOKEN=true` (keskkonnas või failis `.env`), et CLI
tokenimehhanism täielikult keelata; seejärel nõuab kogu juurdepääs selgesõnalist API-võtit. Mitme kasutajaga
hostides on see soovitatav, kuna `machine-id` on seadmepõhine (mitte kasutajapõhine) ja sama
hosti teine kasutaja võib arvutada sama tokeni.

## Failid

| Fail                                      | Otstarve                                   |
| ----------------------------------------- | ------------------------------------------ |
| `src/lib/machineToken.ts`                 | Tokeni tuletamine (`getMachineTokenSync`)  |
| `src/server/authz/headers.ts`             | Konstant `CLI_TOKEN_HEADER`                |
| `src/server/authz/policies/management.ts` | Serveripoolne kontrollimine                |
| `src/server/authz/routeGuard.ts`          | Loopback-hosti kontroll (`isLoopbackHost`) |

## Vaata ka

- `docs/security/ROUTE_GUARD_TIERS.md` — marsruudi kaitsetasemed
- `docs/architecture/AUTHZ_GUIDE.md` — täielik autoriseerimiskonveier
