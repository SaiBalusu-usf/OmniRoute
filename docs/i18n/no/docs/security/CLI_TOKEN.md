# CLI Machine-ID Token (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## Oversikt

OmniRoute CLI-kommandoer autentiserer mot det lokale administrasjons-API-et med et
`HMAC-SHA256(machine-id, salt)`-token som sendes via forespørselshodet
`x-omniroute-cli-token`.

Dette gjør det mulig for CLI-underkommandoer (`omniroute status`, `omniroute providers` osv.)
å kalle administrasjonsendepunkter uten at brukeren må oppgi en JWT eller
et passord ved hver kjøring.

## Slik fungerer det

1. `getMachineTokenSync()` leser maskinens maskinvare-ID via `node-machine-id`
   (bruker en tom streng som reserve ved feil, noe som deaktiverer CLI-autentisering).
2. Den beregner `HMAC-SHA256(machine_id, salt)` og returnerer hele det 64 tegn lange
   hex-sammendraget – et deterministisk token som ikke kan reverseres, og som er knyttet til denne maskinen.
3. CLI-en sender tokenet som `x-omniroute-cli-token` bare når det fastslåtte
   målet er en eksplisitt loopback-URL (`localhost`, `127.0.0.0/8` eller
   loopback-IPv6). Forespørsler som inneholder tokenet, bruker `redirect: error`, slik at en lokal
   omdirigering ikke kan videresende det til en annen opprinnelse. Eksterne kontekster bruker avgrensede
   tilgangstokener i stedet. Hvis avledningen ikke er tilgjengelig, utelater CLI-en hodet,
   og `omniroute doctor` rapporterer feilen i stedet for å behandle et tomt token
   som gyldig.
4. Serveren (`src/server/authz/policies/management.ts`) beregner det
   forventede tokenet på nytt med samme salt og sammenligner via `timingSafeEqual` for å
   forhindre tidsbasert uthenting.

## Sikkerhetsegenskaper

| Egenskap                                   | Detaljer                                                                                                                                                                                                                   |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Kun loopback**                           | Godtas bare når serverens pålitelige stempel for nettverksmotpartens lokalitet (utledet fra den faktiske TCP-motpartens adresse) angir loopback. Det klientkontrollerte `Host`-hodet brukes aldri til å fastslå lokalitet. |
| **Sammenligning med konstant tid**         | `crypto.timingSafeEqual` forhindrer tidsangrep.                                                                                                                                                                            |
| **Kan ikke reverseres**                    | HMAC-resultatet kan ikke brukes til å gjenopprette maskin-ID-en.                                                                                                                                                           |
| **Ingen omgåelse av `always`-beskyttelse** | `isAlwaysProtectedPath()` evalueres før kontrollen av CLI-tokenet. `/api/shutdown` og `/api/settings/database` krever alltid JWT.                                                                                          |
| **Kan ikke eksporteres**                   | Tokenet skrives aldri til disk eller logges.                                                                                                                                                                               |

## Rotasjon av salt

Angi `OMNIROUTE_CLI_SALT` for å rotere det avledede tokenet uten kodeendringer.
Etter rotasjonen bruker alle CLI-prosesser på denne maskinen det nye tokenet
automatisk. Dette er nyttig etter en lekkasje av prosesslisten som kan ha eksponert
den tidligere avledede verdien.

```bash
# Vedvarende rotasjon (legg til i skallprofilen)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# Kontroller at det nye tokenet er i bruk
omniroute status
```

Standardsalt: `omniroute-cli-auth-v1`

## Eldre format (SHA-256, 32 tegn) – godtas fortsatt

Før HMAC-formatet ovenfor avledet CLI-en tokenet som
`SHA-256(machineId + salt).hex[0..32]` (et prefiks på 32 tegn) i
`bin/cli/utils/cliToken.mjs` (`getLegacyCliTokenSync` i `src/lib/machineToken.ts`).

For bakoverkompatibilitet godtar serveren **begge** formatene: verifikatoren bygger
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]` og sammenligner det
innkommende hodet med hvert av dem ved hjelp av `timingSafeEqual`
(`src/server/authz/policies/management.ts` og `src/lib/middleware/cliTokenAuth.ts`).
Et token er derfor gyldig hvis det samsvarer med **enten** det 64 tegn lange HMAC-sammendraget eller det 32 tegn lange
eldre SHA-256-prefikset.

**Deaktivering:** Angi `OMNIROUTE_DISABLE_CLI_TOKEN=true` (miljøvariabel eller `.env`) for å deaktivere CLI-
tokenmekanismen fullstendig. All tilgang krever da en eksplisitt API-nøkkel. På flerbruker-
verter anbefales dette, siden `machine-id` gjelder per enhet (ikke per bruker), og en annen
bruker på samme vert kan beregne det samme tokenet.

## Filer

| Fil                                       | Formål                                       |
| ----------------------------------------- | -------------------------------------------- |
| `src/lib/machineToken.ts`                 | Tokenavledning (`getMachineTokenSync`)       |
| `src/server/authz/headers.ts`             | Konstanten `CLI_TOKEN_HEADER`                |
| `src/server/authz/policies/management.ts` | Verifisering på serversiden                  |
| `src/server/authz/routeGuard.ts`          | Kontroll av loopback-vert (`isLoopbackHost`) |

## Se også

- `docs/security/ROUTE_GUARD_TIERS.md` – nivåer for rutebeskyttelse
- `docs/architecture/AUTHZ_GUIDE.md` – fullstendig autorisasjonsflyt
