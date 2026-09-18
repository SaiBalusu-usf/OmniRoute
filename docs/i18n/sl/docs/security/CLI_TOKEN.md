# CLI Machine-ID Token (Slovenščina)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## Pregled

Ukazi OmniRoute CLI se overjajo pri lokalnem upravljalnem API-ju z žetonom
`HMAC-SHA256(machine-id, salt)`, poslanim prek glave zahteve
`x-omniroute-cli-token`.

To podukazom CLI (`omniroute status`, `omniroute providers` itd.) omogoča
klicanje upravljalnih končnih točk, ne da bi moral uporabnik pri vsakem klicu
navesti JWT ali geslo.

## Kako deluje

1. `getMachineTokenSync()` prebere identifikator strojne opreme prek paketa
   `node-machine-id` (ob napaki uporabi prazen niz, s čimer onemogoči overjanje CLI).
2. Izračuna `HMAC-SHA256(machine_id, salt)` in vrne celoten 64-mestni
   šestnajstiški povzetek — determinističen, nepovraten žeton, vezan na ta računalnik.
3. CLI pošlje žeton kot `x-omniroute-cli-token` samo, ko je razrešeni cilj izrecni
   URL povratne zanke (`localhost`, `127.0.0.0/8` ali IPv6 s povratno zanko).
   Zahteve, ki vsebujejo žeton, uporabljajo `redirect: error`, zato ga lokalna
   preusmeritev ne more posredovati drugemu izvoru. Oddaljeni konteksti namesto tega
   uporabljajo žetone za dostop z omejenim obsegom. Če izpeljava ni na voljo, CLI
   izpusti glavo, `omniroute doctor` pa sporoči napako, namesto da bi prazen žeton
   obravnaval kot veljaven.
4. Strežnik (`src/server/authz/policies/management.ts`) znova izračuna
   pričakovani žeton z isto soljo in ga primerja s funkcijo `timingSafeEqual`,
   da prepreči razkritje na podlagi časovnih razlik.

## Varnostne lastnosti

| Lastnost                          | Podrobnosti                                                                                                                                                                                                                         |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Samo povratna zanka**           | Sprejeto samo, kadar strežnikov zaupanja vreden žig lokalnosti vrstnika (izpeljan iz dejanskega naslova vrstnika TCP) kaže na povratno zanko. Glavi `Host`, ki jo nadzoruje odjemalec, se pri določanju lokalnosti nikoli ne zaupa. |
| **Primerjava v konstantnem času** | `crypto.timingSafeEqual` preprečuje časovne napade.                                                                                                                                                                                 |
| **Nepovratnost**                  | Iz izhoda HMAC ni mogoče obnoviti identifikatorja `machine-id`.                                                                                                                                                                     |
| **Brez obhoda zaščite `always`**  | `isAlwaysProtectedPath()` se ovrednoti pred preverjanjem žetona CLI. `/api/shutdown` in `/api/settings/database` vedno zahtevata JWT.                                                                                               |
| **Brez možnosti izvoza**          | Žeton se nikoli ne zapiše na disk ali v dnevnike.                                                                                                                                                                                   |

## Zamenjava soli

Nastavite `OMNIROUTE_CLI_SALT`, da zamenjate izpeljani žeton brez sprememb kode.
Po zamenjavi bodo vsi procesi CLI na tem računalniku samodejno uporabljali novi
žeton. To je uporabno po uhajanju seznama procesov, ki je morda razkrilo prejšnjo
izpeljano vrednost.

```bash
# Trajna zamenjava (dodajte v profil lupine)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# Preverite, ali se uporablja novi žeton
omniroute status
```

Privzeta sol: `omniroute-cli-auth-v1`

## Podedovana oblika (SHA-256, 32 znakov) — še vedno sprejeta

Pred zgoraj opisano obliko HMAC je CLI svoj žeton izpeljal kot
`SHA-256(machineId + salt).hex[0..32]` (32-mestno predpono) v
`bin/cli/utils/cliToken.mjs` (`getLegacyCliTokenSync` v `src/lib/machineToken.ts`).

Zaradi združljivosti za nazaj strežnik sprejema **obe** obliki: preverjevalnik sestavi
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]` in primerja
prejeto glavo z vsako vrednostjo prek `timingSafeEqual`
(`src/server/authz/policies/management.ts` in `src/lib/middleware/cliTokenAuth.ts`).
Žeton je torej veljaven, če se ujema **bodisi** s 64-mestnim povzetkom HMAC **bodisi**
z 32-mestno podedovano predpono SHA-256.

**Onemogočanje:** nastavite `OMNIROUTE_DISABLE_CLI_TOKEN=true` (v okolju ali `.env`),
da v celoti onemogočite mehanizem žetona CLI; ves dostop nato zahteva izrecni ključ
API. To je priporočljivo v gostiteljskih sistemih z več uporabniki, saj je `machine-id`
vezan na napravo (in ne na uporabnika), zato bi lahko drug uporabnik v istem
gostiteljskem sistemu izračunal isti žeton.

## Datoteke

| Datoteka                                  | Namen                                                    |
| ----------------------------------------- | -------------------------------------------------------- |
| `src/lib/machineToken.ts`                 | Izpeljava žetona (`getMachineTokenSync`)                 |
| `src/server/authz/headers.ts`             | Konstanta `CLI_TOKEN_HEADER`                             |
| `src/server/authz/policies/management.ts` | Preverjanje na strani strežnika                          |
| `src/server/authz/routeGuard.ts`          | Preverjanje gostitelja povratne zanke (`isLoopbackHost`) |

## Glejte tudi

- `docs/security/ROUTE_GUARD_TIERS.md` — ravni zaščite poti
- `docs/architecture/AUTHZ_GUIDE.md` — celoten postopek avtorizacije
