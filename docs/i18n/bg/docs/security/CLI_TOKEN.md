# CLI Machine-ID Token (Български)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## Общ преглед

Командите на OmniRoute CLI се удостоверяват пред локалния API за управление чрез
токен `HMAC-SHA256(machine-id, salt)`, изпращан чрез заглавката на заявката
`x-omniroute-cli-token`.

Това позволява на подкомандите на CLI (`omniroute status`, `omniroute providers` и др.)
да извикват крайните точки за управление, без да се налага потребителят да предоставя JWT или
парола при всяко извикване.

## Как работи

1. `getMachineTokenSync()` прочита хардуерния идентификатор на машината чрез `node-machine-id`
   (при неуспех използва празен низ, което деактивира удостоверяването на CLI).
2. Изчислява `HMAC-SHA256(machine_id, salt)` и връща пълния 64-знаков
   шестнадесетичен дайджест — детерминистичен, необратим токен, свързан с тази машина.
3. CLI изпраща токена като `x-omniroute-cli-token` само когато определената
   цел е изричен loopback URL (`localhost`, `127.0.0.0/8` или
   loopback IPv6). Заявките, съдържащи токена, използват `redirect: error`, така че локално
   пренасочване да не може да го препрати към друг origin. Отдалечените контексти вместо това използват
   токени за достъп с ограничен обхват. Ако извеждането на токена не е възможно, CLI пропуска заглавката,
   а `omniroute doctor` докладва неуспеха, вместо да третира празен токен
   като валиден.
4. Сървърът (`src/server/authz/policies/management.ts`) преизчислява
   очаквания токен със същата salt стойност и го сравнява чрез `timingSafeEqual`, за да
   предотврати извличане чрез времеви атаки.

## Свойства за сигурност

| Свойство                                 | Подробности                                                                                                                                                                                                                                         |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Само за loopback**                     | Приема се само когато довереният маркер на сървъра за локалност на peer-а (изведен от действителния TCP адрес на peer-а) указва loopback. Контролираната от клиента заглавка `Host` никога не се счита за достоверна при определяне на локалността. |
| **Сравнение за константно време**        | `crypto.timingSafeEqual` предотвратява времеви атаки.                                                                                                                                                                                               |
| **Необратимост**                         | От изхода на HMAC не може да бъде възстановен machine-id.                                                                                                                                                                                           |
| **Без заобикаляне на защитата `always`** | `isAlwaysProtectedPath()` се оценява преди проверката на CLI токена. `/api/shutdown` и `/api/settings/database` винаги изискват JWT.                                                                                                                |
| **Неекспортируем**                       | Токенът никога не се записва на диска или в журналите.                                                                                                                                                                                              |

## Ротация на salt стойността

Задайте `OMNIROUTE_CLI_SALT`, за да смените извеждания токен без промени в кода.
След ротацията всички CLI процеси на тази машина автоматично ще използват новия токен.
Това е полезно след изтичане на списъка с процеси, което може да е разкрило
предишната изведена стойност.

```bash
# Постоянна ротация (добавете към профила на shell-а)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# Проверете дали се използва новият токен
omniroute status
```

Salt стойност по подразбиране: `omniroute-cli-auth-v1`

## Наследен формат (SHA-256, 32 знака) — все още се приема

Преди описания по-горе HMAC формат CLI извеждаше токена си като
`SHA-256(machineId + salt).hex[0..32]` (32-знаков префикс) в
`bin/cli/utils/cliToken.mjs` (`getLegacyCliTokenSync` в `src/lib/machineToken.ts`).

За обратна съвместимост сървърът приема **и двата** формата: верификаторът създава
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]` и сравнява
входящата заглавка с всеки от тях чрез `timingSafeEqual`
(`src/server/authz/policies/management.ts` и `src/lib/middleware/cliTokenAuth.ts`).
Следователно даден токен е валиден, ако съвпада с **който и да е** от 64-знаковия HMAC дайджест или 32-знаковия
наследен SHA-256 префикс.

**Отказване:** задайте `OMNIROUTE_DISABLE_CLI_TOKEN=true` (в средата или `.env`), за да деактивирате изцяло
механизма за CLI токени; тогава целият достъп изисква изричен API ключ. При хостове с множество потребители
това е препоръчително, тъй като `machine-id` е за цялото устройство (а не за отделен потребител) и друг
потребител на същия хост би могъл да изчисли същия токен.

## Файлове

| Файл                                      | Предназначение                               |
| ----------------------------------------- | -------------------------------------------- |
| `src/lib/machineToken.ts`                 | Извеждане на токена (`getMachineTokenSync`)  |
| `src/server/authz/headers.ts`             | Константа `CLI_TOKEN_HEADER`                 |
| `src/server/authz/policies/management.ts` | Проверка от страна на сървъра                |
| `src/server/authz/routeGuard.ts`          | Проверка за loopback хост (`isLoopbackHost`) |

## Вижте също

- `docs/security/ROUTE_GUARD_TIERS.md` — нива на защита на маршрутите
- `docs/architecture/AUTHZ_GUIDE.md` — пълен процес на оторизация
