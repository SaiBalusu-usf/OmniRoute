# CLI Machine-ID Token (Српски)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## Преглед

OmniRoute CLI команде се аутентификују на локалном управљачком API-ју помоћу
`HMAC-SHA256(machine-id, salt)` токена који се шаље путем `x-omniroute-cli-token`
заглавља захтева.

Ово омогућава CLI поткомандама (`omniroute status`, `omniroute providers` итд.)
да позивају управљачке крајње тачке без потребе да корисник при сваком позиву
наводи JWT или лозинку.

## Како функционише

1. `getMachineTokenSync()` чита хардверски идентификатор машине путем пакета `node-machine-id`
   (у случају неуспеха користи празну ниску, чиме се онемогућава CLI аутентификација).
2. Израчунава `HMAC-SHA256(machine_id, salt)` и враћа пун хексадецимални сажетак
   од 64 знака — детерминистички, неповратни токен везан за ову машину.
3. CLI шаље токен као `x-omniroute-cli-token` само када је разрешено одредиште
   експлицитна loopback URL адреса (`localhost`, `127.0.0.0/8` или loopback IPv6).
   Захтеви који садрже токен користе `redirect: error`, тако да локално
   преусмеравање не може да га проследи другом извору. Удаљени контексти уместо
   тога користе приступне токене ограниченог опсега. Ако извођење токена није
   доступно, CLI изоставља заглавље, а `omniroute doctor` пријављује грешку уместо
   да празан токен сматра важећим.
4. Сервер (`src/server/authz/policies/management.ts`) поново израчунава
   очекивани токен помоћу исте соли и упоређује га функцијом `timingSafeEqual`
   како би спречио издвајање засновано на времену извршавања.

## Безбедносна својства

| Својство                              | Детаљ                                                                                                                                                                                                                                                  |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Само loopback**                     | Прихвата се само када серверска поуздана ознака локалности равноправног чвора (изведена из стварне TCP адресе равноправног чвора) указује на loopback. Клијентски контролисано `Host` заглавље се никада не сматра поузданим за утврђивање локалности. |
| **Поређење у константном времену**    | `crypto.timingSafeEqual` спречава временске нападе.                                                                                                                                                                                                    |
| **Неповратан**                        | Из HMAC излаза није могуће повратити machine-id.                                                                                                                                                                                                       |
| **Нема заобилажења `always` заштите** | `isAlwaysProtectedPath()` се проверава пре провере CLI токена. `/api/shutdown` и `/api/settings/database` увек захтевају JWT.                                                                                                                          |
| **Не извози се**                      | Токен се никада не уписује на диск нити у евиденцију.                                                                                                                                                                                                  |

## Ротација соли

Подесите `OMNIROUTE_CLI_SALT` да бисте ротирали изведени токен без измена кода.
Након ротације, сви CLI процеси на овој машини аутоматски ће користити нови
токен. Ово је корисно након цурења листе процеса које је можда открило претходну
изведену вредност.

```bash
# Трајна ротација (додајте у профил љуске)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# Проверите да ли се користи нови токен
omniroute status
```

Подразумевана со: `omniroute-cli-auth-v1`

## Застарели формат (SHA-256, 32 знака) — и даље се прихвата

Пре горенаведеног HMAC формата, CLI је изводио свој токен као
`SHA-256(machineId + salt).hex[0..32]` (префикс од 32 знака) у
`bin/cli/utils/cliToken.mjs` (`getLegacyCliTokenSync` у `src/lib/machineToken.ts`).

Ради компатибилности са старијим верзијама, сервер прихвата **оба** формата:
верификатор формира `expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]`
и упоређује долазно заглавље са сваким од њих помоћу `timingSafeEqual`
(`src/server/authz/policies/management.ts` и `src/lib/middleware/cliTokenAuth.ts`).
Стога је токен важећи ако се подудара са **било којим** од њих: HMAC сажетком од
64 знака или застарелим SHA-256 префиксом од 32 знака.

**Онемогућавање:** подесите `OMNIROUTE_DISABLE_CLI_TOKEN=true` (у окружењу или
`.env` датотеци) да бисте у потпуности онемогућили механизам CLI токена; тада је
за сваки приступ неопходан експлицитни API кључ. Ово се препоручује на рачунарима
са више корисника, јер је `machine-id` везан за уређај (а не за корисника), па би
други корисник на истом рачунару могао да израчуна исти токен.

## Датотеке

| Датотека                                  | Намена                                    |
| ----------------------------------------- | ----------------------------------------- |
| `src/lib/machineToken.ts`                 | Извођење токена (`getMachineTokenSync`)   |
| `src/server/authz/headers.ts`             | Константа `CLI_TOKEN_HEADER`              |
| `src/server/authz/policies/management.ts` | Провера на страни сервера                 |
| `src/server/authz/routeGuard.ts`          | Провера loopback хоста (`isLoopbackHost`) |

## Такође погледајте

- `docs/security/ROUTE_GUARD_TIERS.md` — нивои заштите рута
- `docs/architecture/AUTHZ_GUIDE.md` — комплетан ток ауторизације
