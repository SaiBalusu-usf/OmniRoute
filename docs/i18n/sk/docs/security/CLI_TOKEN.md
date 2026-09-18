# CLI Machine-ID Token (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## Prehľad

Príkazy OmniRoute CLI sa autentifikujú voči lokálnemu správcovskému API pomocou
tokenu `HMAC-SHA256(machine-id, salt)` odosielaného prostredníctvom hlavičky
požiadavky `x-omniroute-cli-token`.

Vďaka tomu môžu podpríkazy CLI (`omniroute status`, `omniroute providers` atď.)
volať správcovské koncové body bez toho, aby používateľ musel pri každom spustení
zadávať JWT alebo heslo.

## Ako to funguje

1. `getMachineTokenSync()` načíta hardvérový identifikátor zariadenia pomocou
   `node-machine-id` (v prípade zlyhania použije prázdny reťazec, čím vypne
   autentifikáciu CLI).
2. Vypočíta `HMAC-SHA256(machine_id, salt)` a vráti úplný 64-znakový
   hexadecimálny odtlačok — deterministický, nevratný token viazaný na toto
   zariadenie.
3. CLI odošle token ako `x-omniroute-cli-token` iba vtedy, keď je výsledným cieľom
   explicitná adresa URL spätnej slučky (`localhost`, `127.0.0.0/8` alebo IPv6
   spätnej slučky). Požiadavky obsahujúce token používajú `redirect: error`, takže
   lokálne presmerovanie ho nemôže preposlať na iný pôvod. Vzdialené kontexty
   namiesto toho používajú prístupové tokeny s obmedzeným rozsahom. Ak odvodenie
   nie je dostupné, CLI hlavičku vynechá a `omniroute doctor` nahlási zlyhanie
   namiesto toho, aby prázdny token považoval za platný.
4. Server (`src/server/authz/policies/management.ts`) prepočíta očakávaný token
   s rovnakým saltom a porovná ho pomocou `timingSafeEqual`, aby zabránil jeho
   získaniu na základe časovania.

## Bezpečnostné vlastnosti

| Vlastnosť                         | Podrobnosti                                                                                                                                                                                                         |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Iba spätná slučka**             | Akceptuje sa iba vtedy, keď dôveryhodná značka lokality partnera na serveri (odvodená zo skutočnej adresy partnera TCP) označuje spätnú slučku. Klientom ovládaná hlavička `Host` sa na určenie lokality nepoužíva. |
| **Porovnanie v konštantnom čase** | `crypto.timingSafeEqual` zabraňuje útokom založeným na časovaní.                                                                                                                                                    |
| **Nevratnosť**                    | Z výstupu HMAC nie je možné získať machine-id.                                                                                                                                                                      |
| **Bez obídenia ochrany `always`** | `isAlwaysProtectedPath()` sa vyhodnotí pred kontrolou tokenu CLI. `/api/shutdown` a `/api/settings/database` vždy vyžadujú JWT.                                                                                     |
| **Neexportovateľnosť**            | Token sa nikdy nezapisuje na disk ani do protokolov.                                                                                                                                                                |

## Rotácia saltu

Nastavením `OMNIROUTE_CLI_SALT` môžete odvodený token zmeniť bez úprav kódu.
Po rotácii budú všetky procesy CLI na tomto zariadení automaticky používať nový
token. Je to užitočné po úniku zoznamu procesov, ktorý mohol odhaliť predchádzajúcu
odvodenú hodnotu.

```bash
# Trvalá rotácia (pridajte do profilu shellu)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# Overenie, že sa používa nový token
omniroute status
```

Predvolený salt: `omniroute-cli-auth-v1`

## Starší formát (SHA-256, 32-znakový) — stále sa akceptuje

Pred zavedením vyššie uvedeného formátu HMAC odvodzovalo CLI svoj token ako
`SHA-256(machineId + salt).hex[0..32]` (32-znakový prefix) v súbore
`bin/cli/utils/cliToken.mjs` (`getLegacyCliTokenSync` v `src/lib/machineToken.ts`).

Z dôvodu spätnej kompatibility server akceptuje **oba** formáty: overovateľ zostaví
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]` a porovná
prichádzajúcu hlavičku s každým z nich pomocou `timingSafeEqual`
(`src/server/authz/policies/management.ts` a `src/lib/middleware/cliTokenAuth.ts`).
Token je teda platný, ak sa zhoduje **buď** so 64-znakovým odtlačkom HMAC, alebo
s 32-znakovým prefixom staršieho formátu SHA-256.

**Vypnutie:** nastavením `OMNIROUTE_DISABLE_CLI_TOKEN=true` (v prostredí alebo
v `.env`) úplne vypnete mechanizmus tokenu CLI; každý prístup potom vyžaduje
explicitný kľúč API. Na hostiteľoch s viacerými používateľmi sa to odporúča,
pretože `machine-id` je špecifický pre zariadenie (nie pre používateľa) a iný
používateľ na rovnakom hostiteľovi by mohol vypočítať rovnaký token.

## Súbory

| Súbor                                     | Účel                                                 |
| ----------------------------------------- | ---------------------------------------------------- |
| `src/lib/machineToken.ts`                 | Odvodenie tokenu (`getMachineTokenSync`)             |
| `src/server/authz/headers.ts`             | Konštanta `CLI_TOKEN_HEADER`                         |
| `src/server/authz/policies/management.ts` | Overenie na strane servera                           |
| `src/server/authz/routeGuard.ts`          | Kontrola hostiteľa spätnej slučky (`isLoopbackHost`) |

## Pozrite tiež

- `docs/security/ROUTE_GUARD_TIERS.md` — úrovne ochrany trás
- `docs/architecture/AUTHZ_GUIDE.md` — úplný proces autorizácie
