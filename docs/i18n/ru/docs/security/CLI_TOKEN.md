# CLI Machine-ID Token (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## Обзор

Команды OmniRoute CLI проходят аутентификацию в локальном API управления с помощью
токена `HMAC-SHA256(machine-id, salt)`, передаваемого в заголовке запроса
`x-omniroute-cli-token`.

Это позволяет подкомандам CLI (`omniroute status`, `omniroute providers` и т. д.)
обращаться к конечным точкам управления, не требуя от пользователя указывать JWT или
пароль при каждом вызове.

## Как это работает

1. `getMachineTokenSync()` считывает аппаратный идентификатор машины с помощью `node-machine-id`
   (при ошибке использует пустую строку, отключая аутентификацию CLI).
2. Функция вычисляет `HMAC-SHA256(machine_id, salt)` и возвращает полный 64-символьный
   шестнадцатеричный дайджест — детерминированный необратимый токен, привязанный к этой машине.
3. CLI отправляет токен в заголовке `x-omniroute-cli-token` только в том случае, если
   разрешённый адрес назначения является явно указанным URL обратной петли (`localhost`,
   `127.0.0.0/8` или IPv6-адрес обратной петли). Для запросов, содержащих токен,
   используется `redirect: error`, поэтому локальное перенаправление не может переслать
   его другому источнику. Для удалённых контекстов вместо него используются токены доступа
   с ограниченной областью действия. Если сформировать токен невозможно, CLI не добавляет
   заголовок, а `omniroute doctor` сообщает об ошибке, не считая пустой токен действительным.
4. Сервер (`src/server/authz/policies/management.ts`) повторно вычисляет ожидаемый
   токен с той же солью и сравнивает его с помощью `timingSafeEqual`, чтобы
   предотвратить извлечение токена посредством анализа времени выполнения.

## Свойства безопасности

| Свойство                          | Сведения                                                                                                                                                                                                                                              |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Только обратная петля**         | Принимается только в том случае, если доверенная серверная отметка локальности узла (полученная из реального TCP-адреса узла) указывает на обратную петлю. Управляемый клиентом заголовок `Host` никогда не используется для определения локальности. |
| **Сравнение за постоянное время** | `crypto.timingSafeEqual` предотвращает атаки по времени.                                                                                                                                                                                              |
| **Необратимость**                 | Из результата HMAC невозможно восстановить идентификатор машины.                                                                                                                                                                                      |
| **Нет обхода защиты `always`**    | `isAlwaysProtectedPath()` вычисляется до проверки токена CLI. `/api/shutdown` и `/api/settings/database` всегда требуют JWT.                                                                                                                          |
| **Неэкспортируемость**            | Токен никогда не записывается на диск и не попадает в журналы.                                                                                                                                                                                        |

## Ротация соли

Задайте `OMNIROUTE_CLI_SALT`, чтобы изменить производный токен без внесения изменений
в код. После ротации все процессы CLI на этой машине автоматически начнут использовать
новый токен. Это полезно после утечки списка процессов, которая могла раскрыть
предыдущее производное значение.

```bash
# Постоянная ротация (добавьте в профиль оболочки)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# Проверьте, что используется новый токен
omniroute status
```

Соль по умолчанию: `omniroute-cli-auth-v1`

## Устаревший формат (SHA-256, 32 символа) — всё ещё поддерживается

До появления описанного выше формата HMAC CLI формировал токен как
`SHA-256(machineId + salt).hex[0..32]` (32-символьный префикс) в
`bin/cli/utils/cliToken.mjs` (`getLegacyCliTokenSync` в `src/lib/machineToken.ts`).

Для обратной совместимости сервер принимает **оба** формата: средство проверки формирует
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]` и сравнивает
входящий заголовок с каждым из них с помощью `timingSafeEqual`
(`src/server/authz/policies/management.ts` и `src/lib/middleware/cliTokenAuth.ts`).
Таким образом, токен считается действительным, если он соответствует **либо** 64-символьному
дайджесту HMAC, **либо** 32-символьному префиксу устаревшего формата SHA-256.

**Отключение:** задайте `OMNIROUTE_DISABLE_CLI_TOKEN=true` (в переменной среды или `.env`),
чтобы полностью отключить механизм токенов CLI; после этого для любого доступа потребуется
явный ключ API. Это рекомендуется на многопользовательских узлах, поскольку `machine-id`
назначается устройству, а не пользователю, и другой пользователь на том же узле сможет
вычислить такой же токен.

## Файлы

| Файл                                      | Назначение                                      |
| ----------------------------------------- | ----------------------------------------------- |
| `src/lib/machineToken.ts`                 | Формирование токена (`getMachineTokenSync`)     |
| `src/server/authz/headers.ts`             | Константа `CLI_TOKEN_HEADER`                    |
| `src/server/authz/policies/management.ts` | Проверка на стороне сервера                     |
| `src/server/authz/routeGuard.ts`          | Проверка узла обратной петли (`isLoopbackHost`) |

## См. также

- `docs/security/ROUTE_GUARD_TIERS.md` — уровни защиты маршрутов
- `docs/architecture/AUTHZ_GUIDE.md` — полный конвейер авторизации
