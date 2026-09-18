# CLI Machine-ID Token (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## Prezentare generală

Comenzile OmniRoute CLI se autentifică la API-ul local de administrare folosind un
token `HMAC-SHA256(machine-id, salt)` trimis prin antetul de solicitare
`x-omniroute-cli-token`.

Acest lucru permite subcomenzilor CLI (`omniroute status`, `omniroute providers` etc.)
să apeleze endpointurile de administrare fără ca utilizatorul să fie nevoit să furnizeze
un JWT sau o parolă la fiecare invocare.

## Cum funcționează

1. `getMachineTokenSync()` citește ID-ul hardware al mașinii prin `node-machine-id`
   (în caz de eroare, utilizează un șir gol, dezactivând autentificarea CLI).
2. Calculează `HMAC-SHA256(machine_id, salt)` și returnează digestul hexazecimal
   complet de 64 de caractere — un token determinist, ireversibil, asociat acestei
   mașini.
3. CLI-ul trimite tokenul ca `x-omniroute-cli-token` numai atunci când destinația
   rezolvată este un URL explicit de loopback (`localhost`, `127.0.0.0/8` sau
   IPv6 de loopback). Solicitările care conțin tokenul folosesc `redirect: error`,
   astfel încât o redirecționare locală să nu îl poată transmite către o altă origine.
   Contextele la distanță utilizează în schimb tokenuri de acces cu domeniu limitat.
   Dacă derivarea nu este disponibilă, CLI-ul omite antetul, iar `omniroute doctor`
   raportează eroarea în loc să trateze un token gol ca fiind valid.
4. Serverul (`src/server/authz/policies/management.ts`) recalculează tokenul
   așteptat folosind același salt și îl compară prin `timingSafeEqual` pentru a
   preveni extragerea bazată pe temporizare.

## Proprietăți de securitate

| Proprietate                           | Detaliu                                                                                                                                                                                                                                                                               |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Numai loopback**                    | Este acceptat numai atunci când marcajul de localitate al peerului, considerat de încredere de către server (derivat din adresa reală a peerului TCP), indică loopback. Antetul `Host`, controlat de client, nu este niciodată considerat de încredere pentru stabilirea localității. |
| **Comparare în timp constant**        | `crypto.timingSafeEqual` previne atacurile de temporizare.                                                                                                                                                                                                                            |
| **Ireversibil**                       | Din rezultatul HMAC nu poate fi recuperat ID-ul mașinii.                                                                                                                                                                                                                              |
| **Fără ocolirea protecției `always`** | `isAlwaysProtectedPath()` este evaluat înaintea verificării tokenului CLI. `/api/shutdown` și `/api/settings/database` necesită întotdeauna JWT.                                                                                                                                      |
| **Neexportabil**                      | Tokenul nu este niciodată scris pe disc sau înregistrat în jurnale.                                                                                                                                                                                                                   |

## Rotirea saltului

Setați `OMNIROUTE_CLI_SALT` pentru a roti tokenul derivat fără modificări ale codului.
După rotire, toate procesele CLI de pe această mașină vor utiliza automat noul token.
Acest lucru este util după o scurgere a listei de procese care ar fi putut expune
valoarea derivată anterior.

```bash
# Rotire persistentă (adăugați în profilul shell)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# Verificați dacă noul token este utilizat
omniroute status
```

Salt implicit: `omniroute-cli-auth-v1`

## Format vechi (SHA-256, 32 de caractere) — încă acceptat

Înaintea formatului HMAC de mai sus, CLI-ul își deriva tokenul ca
`SHA-256(machineId + salt).hex[0..32]` (un prefix de 32 de caractere) în
`bin/cli/utils/cliToken.mjs` (`getLegacyCliTokenSync` în `src/lib/machineToken.ts`).

Pentru compatibilitate cu versiunile anterioare, serverul acceptă **ambele** formate:
verificatorul construiește `expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]`
și compară antetul primit cu fiecare dintre acestea folosind `timingSafeEqual`
(`src/server/authz/policies/management.ts` și `src/lib/middleware/cliTokenAuth.ts`).
Prin urmare, un token este valid dacă se potrivește cu **oricare dintre** digestul HMAC
de 64 de caractere sau prefixul SHA-256 vechi de 32 de caractere.

**Dezactivare:** setați `OMNIROUTE_DISABLE_CLI_TOKEN=true` (în mediul de execuție sau
în `.env`) pentru a dezactiva complet mecanismul tokenului CLI; în acest caz, orice
acces necesită o cheie API explicită. Acest lucru este recomandat pe sistemele cu mai
mulți utilizatori, deoarece `machine-id` este specific dispozitivului (nu utilizatorului),
iar un alt utilizator de pe aceeași gazdă ar putea calcula același token.

## Fișiere

| Fișier                                    | Scop                                           |
| ----------------------------------------- | ---------------------------------------------- |
| `src/lib/machineToken.ts`                 | Derivarea tokenului (`getMachineTokenSync`)    |
| `src/server/authz/headers.ts`             | Constanta `CLI_TOKEN_HEADER`                   |
| `src/server/authz/policies/management.ts` | Verificarea pe server                          |
| `src/server/authz/routeGuard.ts`          | Verificarea gazdei loopback (`isLoopbackHost`) |

## Consultați și

- `docs/security/ROUTE_GUARD_TIERS.md` — niveluri de protecție a rutelor
- `docs/architecture/AUTHZ_GUIDE.md` — fluxul complet de autorizare
