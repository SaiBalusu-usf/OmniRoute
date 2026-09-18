# Quality Gates Reference (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

Этот документ является авторитетным справочным материалом по всем контрольным критериям качества CI в OmniRoute.
В нём описывается каждый критерий, что он проверяет, в каком задании CI он выполняется, использует ли он
базовый уровень с храповым механизмом или политику «пройдено/не пройдено», а также блокирует ли он сборку или носит рекомендательный характер.

Краткое описание и политику списка разрешений см. в разделе "Quality Gates & Ratchets"
в `AGENTS.md`. Критическую оценку, классификацию зрелости и не зависящий от инструментов
план воспроизведения той же системы см. в
[руководстве по контрольным критериям качества](../ops/QUALITY_GATE_PLAYBOOK.md).

---

## Перечень контрольных критериев (~90 скриптов)

Скрипты находятся в `scripts/check/` (контрольные критерии политик) и `scripts/quality/` (механизм храпового контроля).
Источник истины для CI — `.github/workflows/ci.yml`.

### Ускоренный путь для PR выпуска (`quality.yml`)

`.github/workflows/quality.yml` запускается для PR, нацеленных на `release/**`. Он помогает поддерживать движение
веток участников с помощью быстрых контрольных критериев, отфильтрованных по путям, а также одного рекомендательного сигнала о производственной сборке при
изменениях кода:

| Задание                                          | Область применения                                                                                                                                                                                                                                    | Блокировка                                                                                                  |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `Build (advisory)`                               | Не являющиеся черновиками PR с кодом и ветки очереди Mergify; Node 24, `npm-ci-retry`, `check:node-runtime`, `npm run build` с `OMNIROUTE_USE_TURBOPACK=1`; артефакты не загружаются, поскольку ни одно последующее задание качества их не использует | **Рекомендательное** (`continue-on-error: true`; удалить после одной недели стабильных запусков PR выпуска) |
| `Docs Gates (fast-path)`                         | PR с документацией/кодом; ссылки в документации API и вся документация                                                                                                                                                                                | Да                                                                                                          |
| `Fast Quality Gates`                             | PR с кодом; статические проверки, проверка типов, проверка типов панели управления, затронутые модульные тесты                                                                                                                                        | Да                                                                                                          |
| `Forgotten sibling tests`                        | PR с кодом; отслеживание изменённых модулей до статических потребителей и потенциальных соседних тестов; пути через barrel-файлы и динамические импорты выводятся как рекомендательная диагностика со ссылками на исключения из списка разрешений     | **Рекомендательное**                                                                                        |
| `Vitest (fast-path)`                             | PR с кодом; быстрый набор тестов vitest                                                                                                                                                                                                               | Да                                                                                                          |
| `Unit Tests fast-path`                           | PR с кодом; набор модульных тестов из 4 шардов                                                                                                                                                                                                        | Да                                                                                                          |
| `No new ESLint warnings`                         | PR с кодом; проверка линтера с учётом подавлений                                                                                                                                                                                                      | Да для PR из собственных веток, рекомендательное для форков                                                 |
| `Merge integrity (changelog + generated skills)` | Не являющиеся черновиками PR; синхронизация журнала изменений и сгенерированных навыков                                                                                                                                                               | Да для PR из собственных веток, рекомендательное для форков                                                 |

#### Отчёт о забытых соседних тестах

`npm run check:forgotten-sibling-tests` повторно использует механизм разрешения импортов, лежащий в основе карты влияния тестов.
Для каждого изменённого производственного модуля он сообщает о детерминированных цепочках
`изменённый модуль/символ -> статический потребитель -> потенциальный соседний тест`, если потенциальный
тест отсутствует в diff запроса на включение изменений. Сводка Markdown и результат JSON сохраняются как
артефакт рабочего процесса `forgotten-sibling-tests` для калибровки перед переводом проверки в блокирующий режим.

Повторные экспорты через barrel-файлы и динамические импорты служат только для диагностики разрешения; они никогда не создают
блокирующее обнаружение. Проверенные исключения находятся в
`config/quality/forgotten-sibling-allowlist.json`. Каждая запись должна указывать потребителя и потенциальный
тест, содержать конкретное обоснование и ссылку на issue или pull request в GitHub. Некорректно оформленные записи приводят
к запрету по умолчанию. Исключения не могут скрыть удалённый потенциальный тест или diff, добавляющий `.skip`/`.todo`;
ослабление утверждений и прочие способы маскировки по-прежнему контролируются независимо блокирующим
критерием `check:test-masking`.

### Задание: `lint`

Выполняется для каждого PR в `main`. При сбое блокирует слияние.

| Скрипт (`npm run ...`)            | Проверяет                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Блокирующий                                      |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| `check:node-runtime`              | Версия Node.js находится в поддерживаемом диапазоне                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Да                                               |
| `check:cycles`                    | Циклические импорты во всех модулях `src/` + `open-sse/`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Да                                               |
| `check:route-validation:t06`      | Наличие схем Zod во всех маршрутах (политика уровня 6)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Да                                               |
| `check:any-budget:t11`            | Количество `@ts-expect-error // any` не превышает установленный лимит (турникет уровня 11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Да                                               |
| `check:provider-consistency`      | Каждый провайдер в `providers.ts` имеет соответствующую запись в `providerRegistry.ts` (и наоборот, в пределах списка разрешений)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Да                                               |
| `check:model-lifecycle`           | Три поддерживаемые вручную таблицы маршрутизации остаются согласованными с зафиксированным в репозитории снимком жизненного цикла (#11503): `FITNESS_TABLE` (`taskFitness.ts`) не оценивает ни один выведенный из эксплуатации идентификатор, который может маршрутизировать `REGISTRY`; каждая цель `BUILT_IN_ALIASES` присутствует в `REGISTRY` и отсутствует в снимке выведенных из эксплуатации идентификаторов; каждый выведенный из эксплуатации идентификатор, всё ещё находящийся в `REGISTRY`, перенаправляется или указан в `allowedRetiredInCatalog`; и ни один источник или цель `DEFAULT_DEGRADATION_MAP` не помечены в этом снимке как выведенные из эксплуатации. Это не доказывает, что модель в настоящее время обслуживается действующим вышестоящим сервисом. Работает офлайн — сравнивает с `config/quality/model-lifecycle.json`, обновляемым вручную с помощью `npm run quality:refresh-model-lifecycle` (требуется сеть; не встроено в CI). `allowedRetiredInCatalog` — храповик постепенного сокращения: добавляйте запись только при наличии задачи для отслеживания. | Да                                               |
| `check:fetch-targets`             | Каждый `fetch("/api/...")` в клиентском коде `src/` разрешается в реально существующий `route.ts`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Да                                               |
| `check:deps`                      | Все зависимости, устанавливаемые через `npm install`, во всех файлах `package.json` репозитория присутствуют в `dependency-allowlist.json`; новые незакреплённые пакеты или пакеты, подозреваемые в слопсквоттинге, помечаются                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Да                                               |
| `audit:deps`                      | `npm audit` (корневой проект + electron) — нет предупреждений высокого/критического уровня (частично дублирует osv `check:vuln-ratchet`; см. журнал рационализации)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Да                                               |
| `check:lockfile`                  | Целостность `package-lock.json` — реестр https, хеши целостности, отсутствие переопределений хостов                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Да                                               |
| `check:licenses`                  | Список разрешённых лицензий SPDX для production-зависимостей                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Да                                               |
| `check:tracked-artifacts`         | Отсутствие артефактов сборки и закоммиченных символических ссылок `node_modules` (также запускается в husky pre-commit; pre-push намеренно упрощён — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Да                                               |
| `check:vitest-exclusions`         | Каждое исключение Vitest содержит ссылку на задачу для отслеживания и присутствует в `config/quality/vitest-exclusions.json` (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Да                                               |
| `check:file-size`                 | Ни один исходный файл не превышает ограничение для соответствующего расширения (трещотка: зафиксированные крупные файлы в списке `frozen`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Да                                               |
| `check:error-helper`              | Для ответов с ошибками в исполнителях/обработчиках используются `buildErrorBody()` / `sanitizeErrorMessage()` (строгое правило № 12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Да                                               |
| `check:migration-numbering`       | SQL-файлы миграций пронумерованы последовательно, без пропусков и дубликатов                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Да                                               |
| `check:public-creds`              | Отсутствуют литеральные OAuth `client_id`/`client_secret` или веб-ключи Firebase вне `publicCreds.ts` (жёсткое правило №11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Да                                               |
| `check:db-rules`                  | Отсутствует необработанный SQL вне модулей `src/lib/db/`; отсутствуют импорты из barrel-файлов `localDb.ts` (жёсткие правила №2/№5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Да                                               |
| `check:known-symbols`             | Исполнители провайдеров, стратегии маршрутизации и преобразователи, зарегистрированные в соответствующих таблицах диспетчеризации, совпадают с файлами на диске — нет потерянных или необъявленных символов                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Да                                               |
| `check:route-guard-membership`    | Каждый маршрут, порождающий дочерний процесс, классифицируется функцией `isLocalOnlyPath()` (жёсткие правила №15/№17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Да                                               |
| `check:test-discovery`            | Каждый файл `*.test.ts` / `*.spec.ts` в репозитории обнаруживается хотя бы одним средством запуска тестов (храповый механизм: список потерянных тестов в `test-discovery-baseline.json` может только сокращаться)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Да                                               |
| `check:agent-skills-sync`         | Сгенерированные артефакты навыков агентов соответствуют исходному каталогу (без расхождений)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `check:provider-asset-provenance` | Для логотипов/ресурсов провайдеров имеется запись об их происхождении                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `lint:json`                       | Файлы конфигурации JSON корректно разбираются и соответствуют правилам линтинга репозитория                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `typecheck:core`                  | Компиляция TypeScript без ошибок (допускаются только рекомендательные предупреждения)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Да                                               |
| `typecheck:noimplicit:core`       | Строгая проверка `noImplicitAny` — ориентирована на будущее; многие существующие места вызова всё ещё требуют аннотаций                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | **Рекомендательная** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | `tsc`, ограниченный областью `src/app/(dashboard)/**` (#7033), — тщательно отобранный список из 27 файлов в `typecheck:core` не включает ни одного файла TSX панели мониторинга, а `next build` также никогда не проверяет их типы (`next.config.mjs` задаёт `ignoreBuildErrors: true`), поэтому регрессии с потерянными идентификаторами в них (#6625/#6909) были невидимы для CI. Результаты сравниваются с зафиксированной базовой линией количества ошибок для каждого файла и кода TS (`config/quality/dashboard-typecheck-baseline.json`, та же схема контроля устаревания, что и в `check:known-symbols`) — проверка завершается с ошибкой только при появлении НОВЫХ ошибок сверх зафиксированного базового количества; уменьшайте базовую линию с помощью `--update` при исправлении существующей ошибки.                                                                                                                                                                                                                                                                             | Да                                               |

### Задание: `quality-gate`

Запускается после `test-coverage`. Блокирует слияние при сбое.

| Скрипт                       | Что проверяет                                                                                                                                                                                                                    | Блокирующий                           |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| `quality:collect`            | Создаёт `quality-metrics.json` (количество предупреждений ESLint, покрытие из объединённого отчёта сегментов)                                                                                                                    | Да (предшествует храповому механизму) |
| `quality:ratchet`            | Ни одна метрика в `quality-baseline.json` не ухудшилась (предупреждения ESLint ≤ базового уровня; покрытие ≥ базового уровня)                                                                                                    | Да                                    |
| `check:duplication`          | Дублирование кода (jscpd@4) не превышает базовый уровень из `quality-baseline.json`                                                                                                                                              | Да                                    |
| `check:complexity`           | Цикломатическая сложность на уровне файла не превышает предельное значение (основные правила ESLint `complexity` + `max-lines-per-function`)                                                                                     | Да                                    |
| `check:cognitive-complexity` | Храповой механизм когнитивной сложности (`eslint-plugin-sonarjs`) — отдельный проход ESLint; CI запускает обе проверки совместно как единый шаг `check:complexity-ratchets`                                                      | Да                                    |
| `check:dead-code`            | Храповой механизм для неиспользуемых экспортов / файлов (knip) не допускает ухудшения относительно базового уровня                                                                                                               | Да                                    |
| `check:compression-budget`   | Бюджет теста производительности сжатия — минимальные значения экономии токенов для каждого движка не должны снижаться                                                                                                            | Да                                    |
| `check:type-coverage`        | Храповой механизм процента типизированного кода (`type-coverage`) не допускает ухудшения; в значительной степени заменяет `typecheck:noimplicit:core`                                                                            | Да                                    |
| `check:codeql-ratchet`       | Количество открытых предупреждений CodeQL не увеличилось (читается через `gh api`; при отсутствии токена проверка корректно пропускается) — периодичность обновления и ручной запуск: см. раздел «Храповой механизм CodeQL» ниже | Да                                    |

### Задание: `quality-extended`

Вся задача носит рекомендательный характер (`continue-on-error: true`). Проверки на основе npm выполняются
фактически; внешние сканеры устанавливаются через `gh release download` и самостоятельно пропускают выполнение (код выхода 0),
если бинарный файл всё ещё отсутствует.

| Скрипт                   | Что проверяет                                                                                                                                                                                                  | Блокирует |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `check:circular-deps`    | Отсутствие циклических зависимостей (dpdm)                                                                                                                                                                     | **Нет**   |
| `check:bundle-size`      | Размер бандла не превышает установленный предел                                                                                                                                                                | **Нет**   |
| `check:secrets`          | Сканирование секретов (gitleaks) — пропускается, если бинарный файл отсутствует                                                                                                                                | **Нет**   |
| `check:vuln-ratchet`     | Уязвимости зависимостей (osv-scanner) не ухудшаются — пропускается, если бинарный файл отсутствует                                                                                                             | **Нет**   |
| `check:workflows`        | Линтинг рабочих процессов (actionlint + zizmor) — пропускается, если бинарные файлы отсутствуют                                                                                                                | **Нет**   |
| `check:openapi-breaking` | Критические изменения публичного контракта API (`openapi.yaml`) относительно базовой ветки (oasdiff) — выводит `openapiBreaking=N`; пропускается, если oasdiff отсутствует или базовая спецификация недоступна | **Нет**   |

### Задача: `docs-sync-strict`

Выполняется для каждого PR в `main`. При сбое блокирует слияние.

| Скрипт                         | Что проверяет                                                                                                                                                                        | Блокирует                  |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| `check:docs-all`               | Мета-проверка, которая последовательно запускает 6 перечисленных ниже подпроверок                                                                                                    | Да                         |
| ↳ `check:docs-sync`            | Согласованность версий в CHANGELOG / OpenAPI / llm.txt                                                                                                                               | Да                         |
| ↳ `check:docs-counts`          | Числовые показатели в тексте (количество провайдеров, миграций и т. д.) находятся в пределах порогового окна относительно фактических значений                                       | Да                         |
| ↳ `check:env-doc-sync`         | Каждая переменная среды из `.env.example` задокументирована в таблице документации, и наоборот                                                                                       | Да                         |
| ↳ `check:deprecated-versions`  | В документации отсутствуют строки устаревших версий                                                                                                                                  | Да                         |
| ↳ `check:doc-links`            | Внутренние markdown-ссылки в документации указывают на существующие файлы (в формате `[text]`/`(path)`)                                                                              | Да                         |
| ↳ `check:fabricated-docs`      | Упомянутые в документации маршруты, переменные среды, команды CLI, имена хуков и пути к файлам существуют в кодовой базе. Жёсткая проверка с `--strict`; без флага допускается сбой. | Да (через `--strict` в CI) |
| `check:cli-i18n`               | Строки команд CLI присутствуют во всех файлах локалей i18n                                                                                                                           | Да                         |
| `check:openapi-coverage`       | Спецификация OpenAPI покрывает как минимум пороговое число реальных маршрутов                                                                                                        | Да                         |
| `check:openapi-security-tiers` | Аннотации уровней безопасности в `openapi.yaml` согласованы с классификациями в `routeGuard.ts`                                                                                      | **Нет**                    |
| `check:openapi-routes`         | Каждый путь в `openapi.yaml` соответствует реальному `route.ts` (защита от галлюцинаций)                                                                                             | Да                         |
| `check:docs-symbols`           | Каждая ссылка `/api/...` в `docs/**/*.md` соответствует реальному `route.ts` (защита от галлюцинаций)                                                                                | Да                         |
| `i18n translation drift`       | Непереведённые ключи в файлах локалей i18n — только предупреждение                                                                                                                   | **Нет**                    |

### Задача: `i18n-ui-coverage`

| Скрипт                            | Проверяет                                                                                                                                                                                                                                    | Блокирует            |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| `check-ui-keys-coverage` (inline) | Покрытие ключей UI i18n составляет ≥ 65%                                                                                                                                                                                                     | Да                   |
| `check-ui-value-drift` (inline)   | После изменения английского **значения** не остаётся устаревших переводов                                                                                                                                                                    | Да                   |
| `check-new-key-coverage` (inline) | **Новый** английский ключ добавлен во все локали                                                                                                                                                                                             | Да                   |
| `check-translation-ratio`         | Доля фактических переводов для каждой локали (листья, идентичные английским / с заполнителями / отсутствующие и не входящие в список исключений) не должна превышать `config/quality/i18n-translation-baseline.json` + допустимое отклонение | **Рекомендательный** |

Требуется `fetch-depth: 0` — проверка расхождения значений сравнивает `en.json` с базой слияния.

#### `check-ui-value-drift` — защита от устаревших переводов

Выявляет единственную регрессию i18n, которую остальные проверки структурно не способны обнаружить: английское значение
переписано, а переводы, созданные на основе _предыдущего_ английского текста, остаются без изменений, поэтому
пользователи неанглоязычных локалей продолжают видеть уверенно сформулированный, но теперь неверный текст.

Такая проблема действительно попала в релиз. `oauthModal.googleOAuthWarning` был переписан при добавлении вспомогательного
механизма входа Antigravity (#5203); в **39 из 43 локалей** сохранился текст, предлагавший операторам «скопировать
полный URL-адрес и вставить его ниже» — для этого провайдера такой процесс невозможно завершить. Проблема
оставалась незамеченной до #8463, поскольку:

- `sync-ui-keys` добавляет только **отсутствующие** ключи и никогда не обновляет **устаревшие**;
- `check-ui-keys-coverage` учитывает _наличие_ ключа, поэтому устаревший перевод считается покрытым;
- `check-translation-drift` отслеживает зеркала документации `docs/i18n/<locale>/**.md` —
  он никогда не читает `src/i18n/messages/*.json`. Блокирует в задании `docs-sync-strict` с повторной синхронизации
  2026-09: изменили основной документ → `npm run i18n:run -- --files=<doc>` (на уровне раздела, быстро).

**Учитывает различия, а не опирается на базовый уровень.** Проверка сравнивает `en.json` в базе слияния
с рабочим деревом; для каждого ключа, английское значение которого изменилось, любой неизменённый перевод
в локали считается устаревшим. Такой подход намеренно **замораживает существующий технический долг** — по различиям
невозможно определить, из какой старой английской версии появился давно существующий перевод, поэтому проверка оценивает
только то, чего касается текущее изменение. Альтернатива (базовый уровень хешей для каждого ключа) потребовала бы
создания генерируемого файла размером около 600 КБ, втрое больше крупнейшего существующего базового файла, который
изменялся бы при каждом PR с правками i18n.

Проверку можно пройти двумя способами:

1. обновить затронутые переводы или
2. задать для них `__MISSING__:<new english>` — тогда среда выполнения будет выводить исправленный английский текст
   (`src/i18n/request.ts::deepMergeFallback`, #7258), а ключ будет поставлен в очередь на перевод.

Если изменился **смысл** строки, предпочтительно **переименовать ключ**: новый ключ не может унаследовать
устаревший перевод. Именно этот подход использовался в #8463.

```bash
npm run i18n:check-value-drift          # строгий режим (используется в CI)
npm run i18n:check-value-drift:warn     # только отчёт
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

Завершается с кодом 0 и сообщением `SKIP reason=base-unresolved`, если базовый каталог невозможно прочитать (поверхностный
клон без базовой ссылки), аналогично `check-openapi-breaking`.

### Задание: `i18n`

Полная матрица проверок i18n (одно задание на локаль). Всё задание носит рекомендательный характер.

| Скрипт                          | Проверяет                          | Блокирует                                                          |
| ------------------------------- | ---------------------------------- | ------------------------------------------------------------------ |
| `validate_translation.py quick` | Полноту перевода для каждой локали | **Рекомендательный** (`continue-on-error: true` для всего задания) |

### Задание: `pr-test-policy`

Выполняется только для запросов на включение изменений.

| Скрипт                 | Проверяет                                                                                                                                                    | Блокирует |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| `check:pr-test-policy` | PR, изменяющие производственный код в `src/`, `open-sse/`, `electron/` или `bin/`, должны включать новые или обновлённые тесты (строгое правило №8)          | Да        |
| `check:test-masking`   | Изменённые тестовые файлы не уменьшают итоговое количество проверок и не добавляют тавтологии `assert.ok(true)`                                              | Да        |
| `check:pr-evidence`    | В описании PR приведены подтверждения тестирования/VPS для изменения (автоматизирует строгое правило №18 путём поиска по тексту PR — ненадёжно, см. Backlog) | Да        |

### Задание: `test-vitest`

Выполняется после `build`. При сбое блокирует слияние.

| Набор тестов     | Что проверяет                                          | Блокирующий                                                                                                    |
| ---------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| `test:vitest`    | MCP-сервер (110 инструментов), autoCombo, кеш — vitest | Да                                                                                                             |
| `test:vitest:ui` | Тесты компонентов UI — vitest                          | **Блокирующий** — существующие сбои явно исключены в `vitest.config.ts`; новые сбои приводят к провалу задания |

### Ночные рабочие процессы (по расписанию, рекомендательные)

Они запускаются по расписанию cron (а также через `workflow_dispatch`) и никогда не запускаются для PR. Все они носят рекомендательный характер.

| Рабочий процесс        | Что проверяет                                                                                                                                                                     | Статус               |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| `nightly-property`     | Тесты свойств fast-check со случайным начальным значением и большим количеством запусков                                                                                          | **Рекомендательный** |
| `nightly-resilience`   | Ограничение роста кучи, хаотическое внедрение сбоев, нагрузочное/длительное тестирование с помощью k6                                                                             | **Рекомендательный** |
| `nightly-llm-security` | Защита от инъекций promptfoo (режим блокировки) и проверки garak (пропускаются без секрета провайдера)                                                                            | **Рекомендательный** |
| `nightly-schemathesis` | Фаззинг контрактов OpenAPI (schemathesis) на работающем OmniRoute с использованием `docs/openapi.yaml` — выявляет нарушения спецификации и необработанные ошибки 500 (Fase 8 B.4) | **Рекомендательный** |
| `nightly-mutation`     | Оценка мутационного тестирования Stryker для быстрого набора модульных тестов — выжившие мутанты выявляют слабые проверки                                                         | **Рекомендательный** |
| `nightly-compat`       | Матрица совместимости движка Node для поддерживаемых диапазонов `engines.node`                                                                                                    | **Рекомендательный** |

---

## Фаза ускорения (2026-08-30 → v4.0 LTS): все базовые пороги ослаблены на 20%

Решение владельца (2026-08-30): до модульной переработки в v4.0 скорость выпуска важнее,
чем сдерживание технического долга. Все **числовые** базовые пороги ratchet-проверок были ослаблены на 20% за один
аудируемый проход, а фаза объявлена в `config/quality/quality-baseline.json`:

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| Что изменилось                                                                                                                                                                                                                       | Где                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| `metrics.*.value` — показатели, где меньше — лучше, ×1.2; проценты, где больше — лучше, ÷1.2 (минимальное покрытие сохранено на уровне 60, `eslintErrors` остаётся 0, `eslintWarnings` 0 → 20% от зафиксированного числа подавлений) | `quality-baseline.json` (в примечании `_relax_velocity_2026_08_30` перечислены все значения до → после) |
| `count` ×1.2 / `percentage` ×1.2                                                                                                                                                                                                     | `complexity-baseline.json`, `duplication-baseline.json`                                                 |
| `cap`, `testCap`, ограничение числа строк для каждого `frozen[*]` / `testFrozen[*]` ×1.2                                                                                                                                             | `file-size-baseline.json`                                                                               |
| количество по файлам / по TS-коду ×1.2                                                                                                                                                                                               | `api-typecheck-baseline.json`, `dashboard-typecheck-baseline.json`, `open-sse-typecheck-baseline.json`  |
| `THRESHOLD` 36 → 30                                                                                                                                                                                                                  | `scripts/check/check-openapi-coverage.mjs`                                                              |
| `--require-tighten` носит рекомендательный характер, пока `_policy.requireTighten === false`                                                                                                                                         | `scripts/quality/check-quality-ratchet.mjs`                                                             |
| ночная задача `bank-ratchet-shrinks` приостановлена (иначе она зафиксировала бы измеренное снижение и свела на нет запас)                                                                                                            | `.github/workflows/nightly-release-green.yml`                                                           |

Списки разрешений (`eslint-suppressions.json`, `test-masking-allowlist.json`, `test-discovery-baseline.json`,
…) **не** являются бюджетами и не были изменены. Политики проверок с результатом «пройдено/не пройдено» (секреты, правила SQL,
контракт документации и окружения, паритет i18n, модульные тесты) не изменились — непройденный тест по-прежнему считается непройденным.

**Инструменты**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — однократное
  ослабление (`scripts/quality/relax-baselines.mjs`); повторный запуск с тем же примечанием
  отклоняется.
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  измеряет каждый числовой порог так же, как CI, и выводит оставшийся запас для каждого порога
  (`scripts/quality/baseline-headroom.mjs`). Ночная задача `baseline-headroom` публикует
  таблицу в постоянно обновляемой задаче **📈 Запас базовых порогов (фаза ускорения)** и добавляет
  метку `headroom-alert`, когда какой-либо показатель оказывается в пределах 10% от своего предела или уже превышает его. Эта задача
  служит ранним предупреждением: если бюджет исчерпывается за несколько дней, значит, ослабление расходуется
  несколькими PR, а не всей командой — смотрите примечания `_rebaseline_*` соответствующей проверки.

**Режим нового кода (Clean-as-You-Code) — с 2026-08-30, только для ускоренного пути PR**

При событиях `pull_request` файл `quality.yml` передаёт `--base-ref <PR base SHA>` в `check:file-size`,
`check:complexity-ratchets` и `check:dead-code`. В этом режиме проверка сравнивает HEAD с
базой слияния **только для файлов, затронутых PR** (`scripts/check/newCodeMode.mjs`:
база слияния материализуется во временном `git worktree`, ESLint/knip запускаются там и на HEAD, после чего
вычисляется разница показателей по файлам):

- **блокирующая проверка** — PR добавил нарушения цикломатической/когнитивной сложности или мёртвые экспорты в изменённых им файлах
  (`complexityNewCode=`, `cognitiveComplexityNewCode=`, `deadExportsNewCode=` в журнале);
- **рекомендательная проверка** — глобальное итоговое значение относительно зафиксированного базового порога. Унаследованное отклонение никогда не делает проверку
  непричастного PR красной; отклонение повторно фиксируется при сверке релиза и отслеживается задачей контроля запаса.

Запуски `workflow_dispatch`, проверка release-green и ночная задача контроля запаса не имеют базовой версии PR
и продолжают использовать абсолютное (глобальное) сравнение. Покрытие, дублирование и покрытие типами пока остаются глобальными
(их инструменты не позволяют дёшево получить разницу по файлам) — они являются кандидатами на такой же подход.

**Завершение фазы в v4.0 (LTS = строже, чем раньше, а не «возврат к норме»)**

1. На чистой вершине ветки `release/v4.0.0`: для протокола выполните `npm run quality:headroom --json`, затем
   `npm run quality:ratchet -- --update`, `check:file-size --update`,
   `check:complexity-ratchets --update`, `check:dead-code --update`, а также
   `--update` для каждого гейта проверки типов — все базовые значения снизятся до измеренных.
2. Удалите `_policy` из `quality-baseline.json` (это повторно активирует `--require-tighten` и
   ночное накопление), восстановите `THRESHOLD = 36` (или выше) в `check-openapi-coverage.mjs`.
3. Ужесточите ограничения сверх измеренных значений там, где модульность принесла результат: верните `cap` размера файла к 1000
   (или 800), повысьте минимальные пороги покрытия на 5, установите 0 неиспользуемых экспортов для переведённых на модульную структуру пакетов.

## Базовый уровень храповика (`quality-baseline.json`)

Механизм храповика (`scripts/quality/check-quality-ratchet.mjs`) считывает `quality-baseline.json`
и сравнивает его со свежесобранным `quality-metrics.json`. Если любая метрика ухудшается
больше, чем допускает её эпсилон, сборка завершается с ошибкой.

Текущие отслеживаемые метрики:

| Метрика               | Направление | Значение                                         |
| --------------------- | ----------- | ------------------------------------------------ |
| `eslintWarnings`      | `down`      | Количество предупреждений ESLint не должно расти |
| `coverage.statements` | `up`        | Покрытие операторов не должно снижаться          |
| `coverage.lines`      | `up`        | Покрытие строк не должно снижаться               |
| `coverage.functions`  | `up`        | Покрытие функций не должно снижаться             |
| `coverage.branches`   | `up`        | Покрытие ветвей не должно снижаться              |

Чтобы обновить базовый уровень после фактического улучшения:

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

Флаг `--update` записывает текущие измеренные значения в `quality-baseline.json`.
Зафиксируйте этот файл вместе с изменением, улучшившим метрику. PR, который улучшает
метрику без обновления базового уровня, будет обнаружен с помощью `--require-tighten` (Фаза 6A.5,
реализация ожидается).

### Храповик CodeQL: периодичность обновления и ручной запуск

`check:codeql-ratchet` считывает **состояние репозитория, обновляемое по расписанию, а не для каждого PR.**
`gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup` сообщает
`state: configured`, `schedule: weekly`: это сканирование GitHub с настройками по умолчанию, а не анализ
при каждой отправке изменений. Следствие: после слияния PR, ИСПРАВЛЯЮЩЕГО предупреждения, храповик продолжает считывать
старое, более высокое значение до следующего запуска сканирования по расписанию — поэтому он сообщает о регрессии
в каждом открытом PR, включая последующие PR для исправляющего PR, пока результаты сканирования не обновятся.

**Ручное обновление**: `gh workflow run codeql.yml --ref release/vX.Y.Z` повторно запускает
анализ и в течение нескольких минут повторно публикует предупреждения. Сначала прочитайте `.github/workflows/codeql.yml`
— в его заголовке объясняется, что используется только `workflow_dispatch`, **поскольку он конфликтует с
«настройками по умолчанию» GitHub** (`CodeQL analyses from advanced configurations cannot be
processed when the default setup is enabled`). Для восстановления триггеров `push`/`pull_request`/
`schedule` сначала требуется **действие владельца**: Настройки → Безопасность кода →
CodeQL: По умолчанию → Расширенная. Не добавляйте триггер `schedule:` без этого переключения — он
будет приводить только к неудачным запускам.

**Ужесточите базовый уровень после уменьшения количества** — `node scripts/check/check-codeql-ratchet.mjs
--update` записывает новое измеренное количество в `quality-baseline.json` →
`metrics.codeqlAlerts.value`, чтобы храповик не допускал незаметной регрессии обратно
до старого предельного значения. Практический пример (2026-09-02/03): PR #12502 исправил 7 реальных предупреждений
(13 → 6 измеренных открытых); PR #12530 ужесточил зафиксированный базовый уровень с 11 до 6 для соответствия; затем
оставшиеся 6 были отклонены с отдельным обоснованием для каждого предупреждения, в результате чего открытых предупреждений стало 0.

**Решение об отклонении принимает оператор (Жёсткое правило #14)** — никогда не отклоняйте предупреждение CodeQL,
не указав техническое обоснование в комментарии к отклонению: `won't fix` для
требования вышестоящего протокола, `used in tests` для тестовой фикстуры, `false positive`
для санитайзера, который CodeQL не может обнаружить (прецедент: `docs/security/ERROR_SANITIZATION.md`).

---

## Политика повторных запусков тестов (WS5.4, v3.8.49)

Повторные запуски настраиваются отдельно для каждого раннера, а не глобально для всех — глобальный повторный запуск превращает реальные регрессии в незаметные нестабильности:

| Раннер           | Политика                                                                                                                                                   | Почему                                                                                                                                                       |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Playwright (e2e) | `retries: 1` только в CI, с `trace: on-first-retry`                                                                                                        | Временные параметры браузера/сети действительно недетерминированы; один повторный запуск с трассировкой превращает нестабильность в диагностируемый артефакт |
| Vitest           | БЕЗ глобального повторного запуска. Для подтверждённо нестабильного теста повторный запуск задаётся явно на уровне теста (виден в diff и проверяется в PR) | Список изолированных тестов остаётся в репозитории и никогда не становится непрозрачным                                                                      |
| node:test (unit) | БЕЗ повторных запусков, никогда                                                                                                                            | Нестабильный модульный тест — это ошибка в тесте: исправьте её, а не запускайте тест заново                                                                  |

Целевые SLO после появления телеметрии нестабильностей (WS5.2/5.3): частота нестабильности <1% для каждого теста (порог «исправить сейчас»), доля успешных выполнений для каждого пайплайна ≥95%. Это отраслевые ориентиры — их следует откалибровать по нашим собственным измерениям.

## Дрейф ограничителей на уровне релиза (WS5.5, v3.8.49)

Когда ограничитель (размера файла, сложности, предупреждений eslint) регрессирует на ЧИСТОЙ вершине релизной ветки — то есть регрессия возникает из-за КОМБИНАЦИИ слияний и ни один отдельный PR не воспроизводит её в собственной ветке, — исправление выполняет **капитан релиза, однократно, в релизной ветке**: предпочтительно выделить код или провести рефакторинг; обновлять базовый уровень можно только с документированным обоснованием. Никогда не перекладывайте дрейф, вызванный комбинацией изменений, на PR участника и никогда не обновляйте базовый уровень отдельно для каждого PR (это скрывает реальные регрессии). Сначала определите источник: воспроизведите ошибку на чистой вершине в проверочном worktree, прежде чем предполагать, что её вызвал ваш PR.

## Фиксация снижений ограничителей — движение вниз (#8584)

Автоматизирована лишь половина механизма ограничителей, причём не та половина, которая нужна. **Повышение** предела — это ручное редактирование JSON, занимающее десять секунд и позволяющее быстрее всего разблокировать красный PR. **Понижение** требует, чтобы кто-то запустил `--update` и зафиксировал результат, — а до появления задания `bank-ratchet-shrinks` ни один рабочий процесс этого не делал. Измеренные последствия (2026-07-25): 18 замороженных файлов уже достигли или опустились ниже предела в 800 строк для новых файлов, худший случай превышает актуальное значение в 132 раза (`src/shared/validation/schemas.ts`: 19 строк при установленном пределе 2 523); потолок сложности вырос с `1794 → 2169` примерно за 37 заметок об обновлении базового уровня и снизился ровно один раз (−1); фраза «снизить через `--update` в следующем цикле» была записана 31 раз, а выполнено это было один раз. Предел, сохраняющийся дольше, чем код, из-за которого он появился, незаметно превращает каждую завершённую декомпозицию в разрешение на рост для следующего разработчика, изменяющего файл.

`nightly-release-green.yml` → задание **`bank-ratchet-shrinks`** замыкает этот цикл:

|            |                                                                                                                       |
| ---------- | --------------------------------------------------------------------------------------------------------------------- |
| Запуск     | `schedule` (3 раза в день) + `workflow_dispatch` — намеренно **не** `push`                                            |
| Измеряет   | старшую ветку `release/vX.Y.Z`, с тем же разрешением и защитой от внедрения, что и `release-green`                    |
| Записывает | `check:file-size --update` и `check:complexity-ratchets --update` (оба по своей реализации допускают только снижение) |
| Проверяет  | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                                              |
| Доставляет | один всегда актуальный PR в релизную ветку — принудительно обновляемый и не создающий спама                           |

Фиксация выполняется пакетно, а не при каждом push, поскольку у неё нет требований к задержке (зафиксировать снижение в течение 8 часов вполне допустимо), тогда как запуск при каждом слиянии многократно пересобирал бы ветку PR во время серий слияний и каждый раз требовал бы полного прохода ESLint. Обнаружение по-прежнему выполняется при push (`release-green`); пакетно выполняется только фиксация.

### Верификатор безопасности

Задание изменяет базовые уровни без вмешательства человека, поэтому приемлемость этого обеспечивает `verify-ratchet-bank.mjs`. Он сравнивает дерево после `--update` с `HEAD` и **прерывает задание до создания какого-либо коммита**, не открывая PR, если каждое изменение не относится к одному из следующих типов:

- числовая запись `frozen` / `testFrozen` **снижена** или **удалена**
- `complexity-baseline.json` → `count` **снижено**
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` **снижено**

Любые другие изменения приводят к сбою: повышение числа, добавление записи, изменение `cap`/`testCap` либо удаление/перезапись заметки `_rebaseline_*` (эти заметки служат журналом аудита, объясняющим причину существования каждого потолка, и хранятся внутри того же объекта `frozen`, что и записи файлов). Бот, способный повысить предел, был бы однозначно хуже текущего положения дел. Защита от регрессий: `tests/unit/verify-ratchet-bank.test.ts`.

Задание никогда не выполняет push в `release/*` — PR сливает человек, поэтому ошибочное измерение не может попасть в ветку без проверки.

## Политика списка разрешений

Каждая проверка, которая не должна завершаться ошибкой из-за ранее существовавших нарушений, использует зафиксированный список разрешений
(например, `KNOWN_STALE_DOC_REFS`, `KNOWN_MISSING`, `KNOWN_RAW_SQL`). Политика такова:

**Устраняйте первопричину; используйте список разрешений только тогда, когда нарушение существовало ранее и
не может быть исправлено в том же PR.**

При добавлении записи в список разрешений:

1. Добавьте комментарий с обоснованием.
2. Укажите ссылку на задачу для отслеживания (например, `// #3498 — Функциональность этапа 2, ещё не реализована`).
3. Удалите запись в том же PR, который исправляет нарушение, — устаревшая запись, которая больше
   не подавляет активное нарушение, сама является дефектом (проверка устаревших правил 6A.3
   после реализации будет завершаться ошибкой при наличии бесхозной записи в списке разрешений).

**Не** добавляйте записи в список разрешений, чтобы тесты проходили быстрее. Успешная проверка при растущем
списке разрешений создаёт ложное ощущение качества.

### Если проверка завершается ошибкой в вашем PR

1. **Внимательно прочитайте вывод проверки** — в нём точно указано, какой файл или символ нарушил
   правило.
2. **Исправьте нарушение** — большинство проверок представляют собой детерминированные проверки файловой системы, которые проходят, как только
   код исправлен.
3. **Если нарушение существовало ранее** (то есть вы его не вносили, но теперь оно
   охватывается проверкой): добавьте запись в список разрешений с комментарием-обоснованием и ссылкой на задачу для отслеживания.
4. **Если проверка использует храповый механизм** (покрытие, предупреждения ESLint, дублирование, сложность):
   ваше изменение ухудшило метрику. Исправьте первопричину или (в редких случаях) выполните
   `npm run quality:ratchet -- --update`, если изменение было намеренным и ухудшение
   метрики допустимо, — но объясните причину в описании PR.
5. **Рекомендательные проверки** (`continue-on-error: true`) носят информационный характер — они не блокируют
   слияние, но отображаются в сводке CI. Тем не менее исправляйте их.

---

## Добавление новой проверки

1. Создайте `scripts/check/check-<name>.mjs` (или `.ts`). Проверки политик завершаются с кодом 0/1.
   Проверки с храповым механизмом записывают метрику в `quality-metrics.json` через `collect-metrics.mjs`.
2. Добавьте `"check:<name>": "node scripts/check/check-<name>.mjs"` в `package.json`.
3. Подключите её в `.github/workflows/ci.yml` в рамках соответствующего задания
   (политика → `lint` или `docs-sync-strict`; храповый механизм → `quality-gate`).
4. Если у неё есть список разрешений, примените `reportStaleEntries()` из
   `scripts/check/lib/allowlist.mjs`, чтобы устаревшие записи обнаруживались автоматически.
5. Напишите тест в `tests/unit/build/`, покрывающий логику обнаружения нарушений этой проверкой.
6. Обновите этот документ (добавьте строку в таблицу соответствующего задания).

---

## Инструменты для агентов: LSP в цикле разработки (по желанию)

Помимо проверок CI, OmniRoute поставляется с **опциональной** заготовкой `agent-lsp`
(проектный файл `.mcp.json`, этап 7, задача 15). Создайте `.mcp.json`,
чтобы предоставить агентам разработки доступ к языковому серверу TypeScript и позволить им разрешать символы /
диагностику **до** написания кода — это дополняющий `typecheck:core` подход «компиляция до утверждения»,
который устраняет ошибки с «выдуманными символами» в самом источнике. Заготовка намеренно
не загружается автоматически (вы сами выбираете и проверяете мост MCP↔LSP); некорректная запись лишь регистрирует
ошибку подключения и никогда не нарушает работу сеансов.

---

## Бэклог рационализации (оценка ROI — фаза 9, волна 3)

Этот перечень был сверен с `ci.yml` 2026-06-17 (в предыдущей версии были пропущены
`audit:deps`, `check:tracked-artifacts`, `check:lockfile`, `check:licenses`,
`check:dead-code`, `check:cognitive-complexity`, `check:type-coverage`,
`check:codeql-ratchet`, `check:pr-evidence`). Оценка ROI сверенного набора
выявила следующие кандидатуры на рационализацию. **Объединения представляют собой механические
изменения CI; включение обязательного режима и удаление — это решения в области политик, остающиеся за оператором.** Ничто из перечисленного ниже
пока не применено.

**Также не задокументированы выше** (рекомендательные проверки с низкой информативностью): задание `docs-lint`
(markdownlint + Vale, для всего задания задано `continue-on-error`) и автономные рабочие процессы сканирования
`semgrep.yml` / `codeql.yml` / `scorecard.yml`. Значение `semgrepFindings: 0` присутствует в
`quality-baseline.json`, но не подключено к блокирующему храповому механизму в `ci.yml` — в настоящее
время эта метрика изолирована.

### Объединение / устранение дублирования (механические изменения, более низкий риск)

Каждая кандидатура была проверена на соответствие фактическому состоянию шлюзов 2026-06-17 (доверяй, но проверяй);
несколько «очевидных» объединений, как выяснилось, скрывают технический долг и **не** являются чистыми
прямыми заменами.

- **`check:docs-sync` запускается дважды** — отдельно в задании `lint`, а затем ещё раз внутри `check:docs-all` (`docs-sync-strict`) и в pre-commit-хуке husky. ✅ **ВЫПОЛНЕНО** — отдельный вызов из `lint` удалён.
- **Сканирование CVE** — ❌ **НЕ является чистым объединением.** `audit:deps` завершается с ошибкой при любой CVE высокой/критической серьёзности; `check:vuln-ratchet` (osv) завершается с ошибкой только при _регрессии_ относительно базового уровня (сейчас 1 MODERATE). Семантика различается — удаление `audit:deps` привело бы к потере абсолютного шлюза для высокой/критической серьёзности. Сохранить оба.
- **Обнаружение циклов** — ❌ **НЕ является чистым объединением.** `check:circular-deps` (dpdm) сообщает о **91 цикле** (поэтому эта проверка и является рекомендательной); её нельзя сделать блокирующей, не устранив сначала эти циклы, а область её действия шире, чем у успешно проходящей курируемой проверки `check:cycles`. Оставить `check:cycles` блокирующей; устранение 91 цикла dpdm — отдельная задача в бэклоге.
- **Сложность** — ✅ **ВЫПОЛНЕНО** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`): один проход ESLint, подсчёт по ruleId, поэтому базовые уровни цикломатической сложности+max-lines и когнитивной сложности остаются независимыми; отдельные `check:complexity` / `check:cognitive-complexity` сохранены для локального запуска с `--update`.
- **Защита от галлюцинаций `/api`** — ✅ **ВЫПОЛНЕНО** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`): одна инвентаризация `src/app/api` через ФС, openapi-routes + docs-symbols по-прежнему формируют отчёты независимо; отдельные проверки сохранены для локальных запусков.
- **`check:node-runtime` запускается в 11 заданиях** — ⚠️ **низкий ROI.** Каждое из них выполняется на отдельном раннере, а проверка занимает <1 с; общая экономия составит ~10 с ценой потери дешёвой проверки в каждом задании. Изменения того не стоят.
- **`typecheck:noimplicit:core` в CI lint** — ✅ **удалено из задания lint** (проверка была рекомендательной с `continue-on-error`); блокирующая проверка поверхности типов обеспечивается `typecheck:core` + `check:type-coverage`. Локальный скрипт сохранён.

### Включить обязательный режим / принять решение (политика оператора)

- `check:openapi-security-tiers` (рекомендательная) — ❌ **нельзя просто сделать блокирующей.** Она завершается с кодом 0, но предупреждает, что у нескольких маршрутов `traffic-inspector` в `LOCAL_ONLY_API_PREFIXES` отсутствует аннотация `x-loopback-only: true`. Для её обязательного применения необходимо сначала добавить эти аннотации в `openapi.yaml`.
- `typecheck:noimplicit:core` (рекомендательная) — в значительной степени перекрывается блокирующим храповым механизмом `check:type-coverage`. Преобразовать в храповую проверку или удалить избыточный второй проход `tsc`.
- `test:vitest:ui` (теперь **блокирующая**) — существовавшие ранее сбои явно исключены в `vitest.config.ts` с отслеживающими комментариями `// #8618`; новые сбои приводят к ошибке задания.
- `check:secrets` (gitleaks, блокирующий храповой механизм, зафиксированный на уровне 3 задокументированных ложноположительных результатов) — добавить эти 3 результата в список разрешённых, чтобы достичь 0, либо перевести проверку в рекомендательный режим. Перекрывается встроенным сканированием секретов GitHub + `check:public-creds`.
- `check:pr-evidence` (блокирующая, выполняет grep по тексту тела PR) — высокий риск ложноположительных результатов; её удаление ослабит контроль соблюдения жёсткого правила №18, поэтому это действительно вопрос политики.
- `semgrep` (автономная рекомендательная проверка) — пересекается с CodeQL по семействам OWASP; подключить её базовый уровень к храповому механизму или удалить.

---

## Связанная документация

- Цепочка поставок (происхождение, SBOM, Trivy, Scorecard): [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — проверка соответствия наборов ключей

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`, задание `i18n-ui-coverage`).
Сравнивает набор конечных ключей каждого файла `src/i18n/messages/<locale>.json` с `en.json` и завершает
проверку с ошибкой при наличии любого отсутствующего или лишнего конечного ключа независимо от того, когда он был добавлен. Заполнители `__MISSING__:`
считаются присутствующими (их содержимое относится к проверке доли переводов). Эта проверка является абсолютным дополнением
к двум проверкам на основе различий/процентных показателей: `check-ui-keys-coverage` устанавливает минимальный порог в 80 % для каждой
локали (43 отсутствующих ключа из ~13,000 по-прежнему дают 99.7 %), а `check-new-key-coverage` оценивает
только ключи, добавленные PR в `en.json`. Пакет локалей создаётся на основе версии `en.json`, актуальной на день
создания его ветки, а перевод занимает несколько дней, в течение которых в базовую ветку продолжают добавляться ключи; сам PR пакета не добавляет
ключей, поэтому обе соседние проверки промолчали, когда пакет 1 (#13044) был влит с недостающими 43 ключами в девяти
локалях, а пакет 2 (#13660) — с недостающими 10 ключами в восьми (2026-09-15). Чтобы устранить ошибку, выполните
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers`; конечный ключ `extra`
означает, что он был удалён из исходной локали — удалите его и из соответствующей локали. `--warn` выводит отчёт без завершения с ошибкой.
`--catalog=cli` выполняет то же сравнение для `bin/cli/locales` (`npm run i18n:check-keys:cli`);
оба шага входят в задание `i18n-ui-coverage`.

#### `check-new-key-coverage` — проверка i18n для новых ключей

Соседняя проверка для `check-ui-value-drift`. Та обнаруживает ситуацию, когда английское значение было **переписано**,
а его переводы остались без изменений; эта же обнаруживает ситуацию, когда английский ключ был **добавлен**,
но некоторые локали его так и не получили.

`check-ui-keys-coverage` не может обнаружить этот класс проблем: она устанавливает процентный порог для каждой локали, а
одиннадцать отсутствующих ключей из ~13,000 оставляют покрытие на уровне 99.9 %. Процентный показатель для языка не способен
выразить утверждение «эта функция выпущена без перевода» — целая функция может попасть в новую локаль без какого-либо
текста, никак не повлияв на этот показатель.

Инцидент, который предотвращает эта проверка: на этапе 3 Orchestration Canvas одиннадцать ключей были переведены для
42 существовавших на тот момент локалей. Несколько часов спустя пакет языков ЕС (#13044) увеличил число локалей в репозитории
до 51, а девять новых локалей (`el`, `et`, `ga`, `hr`, `lt`, `lv`, `mt`, `sl`, `sr`) так и не
получили эти ключи. `deepMergeFallback` подставляет английский текст вместо отсутствующего ключа, поэтому проблема проявлялась
как непереведённый, а не пустой интерфейс — реальная проблема, которая по своей природе оставалась незаметной.

Как и соседняя проверка, эта проверка **учитывает различия**, сравнивая английскую локаль в общей базовой версии с рабочим
деревом, поэтому уже существовавшие пробелы остаются зафиксированными, а для включения проверки не потребовалась миграция. Аварийный обход:
`__MISSING__:<english>` позволяет отложить перевод, сохраняя корректную работу приложения. В `vi`
заполнители запрещены (`tests/unit/i18n-vi-completeness.test.ts`), поэтому требуется настоящий перевод.

#### `check-vitest-exclusions` — проверка отложенных тестов

Файл в списке `exclude` из `vitest.config.ts` — это тест, который не запускается, но для любого, кто просматривает
дерево, он выглядит как покрытие. За комментарием
`// #8618 — pre-existing failure; remove this exclusion when fixed` накопилось шестьдесят два файла. Задача #8618 была закрыта
2026-08-11, тогда как отслеживаемый ею список вырос с 45 до 62 элементов, каждый новый элемент наследовал комментарий,
ссылающийся на уже закрытую задачу. Когда список наконец проверили пофайлово (#13204), **51 из 62 файлов
успешно прошёл тестирование на текущем дереве без каких-либо изменений исходного кода**.

Проверка требует, чтобы каждое исключение, указывающее на существующий файл, (a) содержало номер отслеживающей задачи и
(b) присутствовало в `config/quality/vitest-exclusions.json` с зафиксированным статусом проверки, благодаря чему добавление исключения становится
доступным для проверки изменением в отдельном файле, а не ещё одной строкой в массиве из 60 элементов. Эта проверка намеренно
не запускает исключённые тесты повторно — это занимает ~10 минут и должно выполняться в рамках периодического задания; в
реестре фиксируется дата последней проверки каждого из них.
