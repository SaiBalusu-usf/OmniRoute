# Quality Gates Reference (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

このドキュメントは、OmniRoute におけるすべての CI 品質ゲートの正式なリファレンスです。
各ゲート、その検証内容、実行される CI ジョブ、ラチェットベースラインまたは合否ポリシーの
どちらを使用するか、ビルドをブロックするかアドバイザリかを説明します。

簡潔な概要と許可リストポリシーについては、`AGENTS.md` の「Quality Gates & Ratchets」セクションを
参照してください。同じシステムの批判的評価、成熟度分類、ツール非依存の
再現計画については、
[品質ゲートプレイブック](../ops/QUALITY_GATE_PLAYBOOK.md)を参照してください。

---

## ゲート一覧（約90スクリプト）

スクリプトは `scripts/check/`（ポリシーゲート）および `scripts/quality/`（ラチェットエンジン）配下にあります。
CI の信頼できる唯一の情報源は `.github/workflows/ci.yml` です。

### リリース PR 高速パス（`quality.yml`）

`.github/workflows/quality.yml` は、`release/**` を対象とする PR で実行されます。パスフィルターを適用した
高速ゲートに加え、コード変更に対するアドバイザリの本番ビルドシグナルを1つ使用して、コントリビューターの
ブランチ進行を維持します。

| ジョブ                                           | スコープ                                                                                                                                                                                                                                     | ブロッキング                                                                             |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `Build (advisory)`                               | ドラフトではないコード PR および Mergify キューブランチ。Node 24、`npm-ci-retry`、`check:node-runtime`、`OMNIROUTE_USE_TURBOPACK=1` を指定した `npm run build`。後続の品質ジョブが使用しないため、アーティファクトのアップロードは行いません | **アドバイザリ**（`continue-on-error: true`。リリース PR の実行が1週間安定した後に削除） |
| `Docs Gates (fast-path)`                         | ドキュメント／コード PR。API ドキュメント参照および docs-all                                                                                                                                                                                 | はい                                                                                     |
| `Fast Quality Gates`                             | コード PR。静的チェック、型チェック、ダッシュボードの型チェック、影響を受けるユニットテスト                                                                                                                                                  | はい                                                                                     |
| `Forgotten sibling tests`                        | コード PR。変更されたモジュールから静的コンシューマーおよび候補となる兄弟テストまでを追跡。バレルおよび動的インポートのパスは、参照された許可リスト例外とともにアドバイザリ診断として報告されます                                            | **アドバイザリ**                                                                         |
| `Vitest (fast-path)`                             | コード PR。高速 Vitest スイート                                                                                                                                                                                                              | はい                                                                                     |
| `Unit Tests fast-path`                           | コード PR。4シャードのユニットテストスイート                                                                                                                                                                                                 | はい                                                                                     |
| `No new ESLint warnings`                         | コード PR。抑制を考慮した lint ガード                                                                                                                                                                                                        | 自リポジトリ由来でははい、フォークではアドバイザリ                                       |
| `Merge integrity (changelog + generated skills)` | ドラフトではない PR。変更履歴および生成されたスキルの同期                                                                                                                                                                                    | 自リポジトリ由来でははい、フォークではアドバイザリ                                       |

#### 取りこぼされた兄弟テストのレポート

`npm run check:forgotten-sibling-tests` は、テスト影響マップで使用されるインポートリゾルバーを再利用します。
変更された各本番モジュールについて、候補テストがプルリクエストの差分に含まれていない場合に、
`changed module/symbol -> static consumer -> candidate sibling test` の決定論的なチェーンを報告します。
Markdown サマリーおよび JSON 結果は、ブロッキング運用を開始する前の調整に使用できるよう、
`forgotten-sibling-tests` ワークフローアーティファクトとして保持されます。

バレル再エクスポートおよび動的インポートは解決診断専用であり、ブロッキング対象の検出結果を生成することは
ありません。レビュー済みの例外は
`config/quality/forgotten-sibling-allowlist.json` にあります。各エントリでは、コンシューマーと候補テストを指定し、
具体的な根拠を示したうえで、GitHub issue またはプルリクエストへのリンクを記載する必要があります。不正な形式の
エントリはフェイルクローズになります。例外によって、削除された候補テストや `.skip`／`.todo` を追加する差分を
抑制することはできません。アサーションの弱体化やその他の隠蔽は、独立してブロッキングする
`check:test-masking` ゲートが引き続き担当します。

### ジョブ：`lint`

`main` に対するすべての PR で実行されます。失敗した場合はマージをブロックします。

| スクリプト (`npm run ...`)        | 検証内容                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | ブロッキング                          |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| `check:node-runtime`              | Node.js のバージョンがサポート対象範囲内であること                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | はい                                  |
| `check:cycles`                    | 循環インポート — `src/` + `open-sse/` の全モジュール                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | はい                                  |
| `check:route-validation:t06`      | すべてのルートに Zod スキーマが存在すること（Tier 6 ポリシー）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | はい                                  |
| `check:any-budget:t11`            | `@ts-expect-error // any` の数が上限を超えていないこと（Tier 11 catraca）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | はい                                  |
| `check:provider-consistency`      | `providers.ts` 内のすべてのプロバイダーに、`providerRegistry.ts` 内の対応するエントリが存在する（その逆も同様。ただし許可リストの範囲内）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | はい                                  |
| `check:model-lifecycle`           | 手動で保守されている3つのルーティングテーブルが、チェックイン済みのライフサイクルスナップショット（#11503）と整合していることを確認する。`FITNESS_TABLE`（`taskFitness.ts`）は、`REGISTRY` がルーティング可能な廃止済み ID をスコアリングしない。すべての `BUILT_IN_ALIASES` の参照先は `REGISTRY` に存在し、廃止済み ID のスナップショットには存在しない。`REGISTRY` に残っているすべての廃止済み ID は、転送されているか `allowedRetiredInCatalog` に記載されている。また、`DEFAULT_DEGRADATION_MAP` の参照元または参照先が、そのスナップショットで廃止済みになっていない。これは、モデルが現在稼働中のアップストリームによって提供されていることを証明するものではない。オフライン — `config/quality/model-lifecycle.json` と比較する。このファイルは、`npm run quality:refresh-model-lifecycle`（ネットワークを使用。CI には組み込まれていない）を使って手動で更新する。`allowedRetiredInCatalog` は段階的削減用のラチェットである。エントリを追加する場合は、必ず追跡用 Issue を添えること。 | はい                                  |
| `check:fetch-targets`             | クライアント側の `src/` 内にあるすべての `fetch("/api/...")` が、実在する `route.ts` に解決される                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | はい                                  |
| `check:deps`                      | リポジトリ内のすべての `package.json` に含まれる、`npm install` でインストール可能な依存関係が `dependency-allowlist.json` に記載されている。新規のバージョン未固定パッケージやスロップスクワッティングされたパッケージはフラグ付けされる                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | はい                                  |
| `audit:deps`                      | `npm audit`（ルート + Electron）— high/critical のアドバイザリがないこと（OSV の `check:vuln-ratchet` と重複。Rationalization Backlog を参照）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | はい                                  |
| `check:lockfile`                  | `package-lock.json` の完全性 — HTTPS レジストリ、完全性ハッシュ、ホストのオーバーライドなし                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | はい                                  |
| `check:licenses`                  | 本番環境の依存関係に対する SPDX ライセンス許可リスト                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | はい                                  |
| `check:tracked-artifacts`         | ビルド成果物やコミットされた `node_modules` シンボリックリンクがないこと（husky の pre-commit でも実行。pre-push は意図的に軽量化 — #6716）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | はい                                  |
| `check:vitest-exclusions`         | すべての Vitest 除外設定に追跡用 issue が明記され、`config/quality/vitest-exclusions.json` に記載されていること（#13204）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | はい                                  |
| `check:file-size`                 | 拡張子ごとの上限を超えるソースファイルがないこと（ラチェット方式：サイズの大きい既存ファイルは `frozen` リストに固定）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | はい                                  |
| `check:error-helper`              | executor/handler のエラーレスポンスで `buildErrorBody()` / `sanitizeErrorMessage()` を使用していること（厳格ルール #12）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | はい                                  |
| `check:migration-numbering`       | マイグレーション SQL ファイルに欠番や重複がなく、連番になっていること                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | はい                                  |
| `check:public-creds`              | `publicCreds.ts` 外に OAuth の `client_id`/`client_secret` または Firebase Web キーのリテラルが存在しないこと（ハードルール #11）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | はい                                  |
| `check:db-rules`                  | `src/lib/db/` モジュール外に生の SQL が存在しないこと、および `localDb.ts` からのバレルインポートが存在しないこと（ハードルール #2/#5）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | はい                                  |
| `check:known-symbols`             | ディスパッチテーブルに登録されているプロバイダーエグゼキューター、ルーティング戦略、トランスレーターがディスク上のファイルと一致し、孤立したシンボルや未宣言のシンボルが存在しないこと                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | はい                                  |
| `check:route-guard-membership`    | 子プロセスを生成するすべてのルートが `isLocalOnlyPath()` によって分類されていること（ハードルール #15/#17）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | はい                                  |
| `check:test-discovery`            | リポジトリ内のすべての `*.test.ts` / `*.spec.ts` ファイルが少なくとも1つのテストランナーによって収集されること（ラチェット：`test-discovery-baseline.json` 内の孤立ファイル一覧は縮小のみ可能）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | はい                                  |
| `check:agent-skills-sync`         | 生成されたエージェントスキルの成果物がソースカタログと一致していること（ドリフトなし）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `check:provider-asset-provenance` | プロバイダーのロゴ／アセットに、記録された出所情報のエントリが付与されていること                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `lint:json`                       | JSON 設定ファイルが解析可能で、リポジトリの lint ルールを満たしていること                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `typecheck:core`                  | TypeScript のコンパイルがエラーなしで完了すること（警告は勧告のみ）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | はい                                  |
| `typecheck:noimplicit:core`       | 厳格な `noImplicitAny` — 将来を見据えたチェック。既存の多くの呼び出し箇所には、依然として注釈が必要                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | **勧告**（`continue-on-error: true`） |
| `check:dashboard-typecheck`       | `src/app/(dashboard)/**` を対象とする `tsc`（#7033）— `typecheck:core` で厳選された27ファイルの許可リストにはダッシュボードの TSX が含まれておらず、`next build` でも型チェックされません（`next.config.mjs` で `ignoreBuildErrors: true` が設定されているため）。その結果、ダッシュボード内の孤立した識別子のリグレッション（#6625/#6909）は CI で検出できませんでした。ファイル単位および TypeScript コード単位のエラー数を固定したベースライン（`config/quality/dashboard-typecheck-baseline.json`、`check:known-symbols` と同じ古さの強制パターン）との差分を確認します。ベースライン化された数を超える新規エラーのみがゲートを失敗させます。既存のエラーを修正した場合は `--update` を使用して基準値を引き下げます。                                                                                                                                                                                                                                                                         | はい                                  |

### ジョブ: `quality-gate`

`test-coverage` の後に実行されます。失敗するとマージをブロックします。

| スクリプト                   | 検証内容                                                                                                                                                                                       | ブロッキング             |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `quality:collect`            | `quality-metrics.json` を出力します（ESLint の警告数、マージ済みシャードレポートから取得したカバレッジ）                                                                                       | はい（ラチェットの上流） |
| `quality:ratchet`            | `quality-baseline.json` 内の各メトリクスが悪化していないこと（ESLint の警告数 ≤ ベースライン、カバレッジ ≥ ベースライン）                                                                      | はい                     |
| `check:duplication`          | コードの重複（jscpd@4）が `quality-baseline.json` 内のベースラインを超えていないこと                                                                                                           | はい                     |
| `check:complexity`           | ファイルレベルの循環的複雑度が上限を超えていないこと（コア ESLint の `complexity` + `max-lines-per-function`）                                                                                 | はい                     |
| `check:cognitive-complexity` | 認知的複雑度のラチェット（`eslint-plugin-sonarjs`）— 個別の ESLint パス。CI では両方を単一の `check:complexity-ratchets` ステップに統合して実行します                                          | はい                     |
| `check:dead-code`            | 未使用のエクスポート／ファイルのラチェット（knip）がベースラインから悪化していないこと                                                                                                         | はい                     |
| `check:compression-budget`   | 圧縮ベンチマークの予算 — エンジンごとのトークン削減率の下限が悪化していないこと                                                                                                                | はい                     |
| `check:type-coverage`        | 型付け率のラチェット（`type-coverage`）が悪化していないこと。`typecheck:noimplicit:core` の大部分を包含します                                                                                  | はい                     |
| `check:codeql-ratchet`       | 未解決の CodeQL アラート数が悪化していないこと（`gh api` 経由で読み取り。トークンがない場合は正常にスキップ）— 更新頻度と手動トリガーについては、下記の「CodeQL ラチェット」を参照してください | はい                     |

### ジョブ: `quality-extended`

ジョブ全体はアドバイザリです（`continue-on-error: true`）。npm ベースのラチェットは
実際に実行されます。外部スキャナーは `gh release download` を介してインストールされ、
バイナリが存在しない場合は自動的にスキップします（終了コード 0）。

| スクリプト               | 検証内容                                                                                                                                                                                               | ブロッキング     |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------- |
| `check:circular-deps`    | 循環依存がないこと（dpdm）                                                                                                                                                                             | **アドバイザリ** |
| `check:bundle-size`      | バンドルサイズが上限を超えていないこと                                                                                                                                                                 | **アドバイザリ** |
| `check:secrets`          | シークレットスキャン（gitleaks）— バイナリが存在しない場合はスキップ                                                                                                                                   | **アドバイザリ** |
| `check:vuln-ratchet`     | 依存関係の脆弱性（osv-scanner）が悪化していないこと — バイナリが存在しない場合はスキップ                                                                                                               | **アドバイザリ** |
| `check:workflows`        | ワークフローの lint（actionlint + zizmor）— バイナリが存在しない場合はスキップ                                                                                                                         | **アドバイザリ** |
| `check:openapi-breaking` | ベースブランチと比較して、公開 API コントラクト（`openapi.yaml`）に破壊的変更がないこと（oasdiff）— `openapiBreaking=N` を出力。oasdiff が存在しない場合、またはベース仕様を解決できない場合はスキップ | **アドバイザリ** |

### ジョブ: `docs-sync-strict`

`main` へのすべての PR で実行されます。失敗した場合はマージをブロックします。

| スクリプト                     | 検証内容                                                                                                                                                                  | ブロッキング               |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| `check:docs-all`               | 以下の 6 つのサブゲートを順番に実行するメタゲート                                                                                                                         | はい                       |
| ↳ `check:docs-sync`            | CHANGELOG / OpenAPI / llm.txt のバージョン整合性                                                                                                                          | はい                       |
| ↳ `check:docs-counts`          | 本文中の数値（プロバイダー数、マイグレーション数など）が、実際の数値に対するラチェット範囲内にあること                                                                    | はい                       |
| ↳ `check:env-doc-sync`         | `.env.example` 内のすべての環境変数がドキュメントの表に記載されており、その逆も成り立つこと                                                                               | はい                       |
| ↳ `check:deprecated-versions`  | ドキュメントに非推奨のバージョン文字列がないこと                                                                                                                          | はい                       |
| ↳ `check:doc-links`            | ドキュメント内の Markdown 内部リンクが実在するファイルに解決されること（`[text]`/`(path)` 形式）                                                                          | はい                       |
| ↳ `check:fabricated-docs`      | ドキュメントに記載されたルート、環境変数、CLI コマンド、フック名、ファイルパスがコードベースに存在すること。`--strict` によるハードゲート。フラグなしではソフトフェイル。 | はい（CI では `--strict`） |
| `check:cli-i18n`               | CLI コマンド文字列がすべての i18n ロケールファイルに存在すること                                                                                                          | はい                       |
| `check:openapi-coverage`       | OpenAPI 仕様が、実在するルート数に対してラチェットされた最低基準以上をカバーしていること                                                                                  | はい                       |
| `check:openapi-security-tiers` | `openapi.yaml` のセキュリティ階層アノテーションが `routeGuard.ts` の分類と一致していること                                                                                | **アドバイザリ**           |
| `check:openapi-routes`         | `openapi.yaml` 内のすべてのパスが実在する `route.ts` に解決されること（ハルシネーション防止）                                                                             | はい                       |
| `check:docs-symbols`           | `docs/**/*.md` 内のすべての `/api/...` 参照が実在する `route.ts` に解決されること（ハルシネーション防止）                                                                 | はい                       |
| `i18n translation drift`       | i18n ロケールファイル内の未翻訳キー — 警告のみ                                                                                                                            | **アドバイザリ**           |

### ジョブ: `i18n-ui-coverage`

| スクリプト                        | 検証内容                                                                                                                                                                    | ブロッキング |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `check-ui-keys-coverage` (inline) | UI i18n キーのカバレッジが 65% 以上であること                                                                                                                               | はい         |
| `check-ui-value-drift` (inline)   | 書き換えられた英語の**値**に古い翻訳が残っていないこと                                                                                                                      | はい         |
| `check-new-key-coverage` (inline) | **新しい**英語キーがすべてのロケールに反映されていること                                                                                                                    | はい         |
| `check-translation-ratio`         | ロケールごとの実翻訳率（許可リスト外にある、英語と同一の値／プレースホルダー／欠落したリーフ）が `config/quality/i18n-translation-baseline.json` + 余裕値を超えていないこと | **勧告のみ** |

`fetch-depth: 0` が必要です。値ドリフトゲートは、マージベースとの差分を取って `en.json` を比較します。

#### `check-ui-value-drift` — 古い翻訳のゲート

他のゲートでは構造上検出できない、ある種の i18n リグレッションを検出します。英語の値が書き換えられたにもかかわらず、_以前の_英語から作成された翻訳が残り、英語以外のユーザーが断定的に書かれた、現在では誤っている文言を読み続ける問題です。

これは実際にリリースされました。Antigravity のログインヘルパーが導入された際（#5203）、`oauthModal.googleOAuthWarning` が書き換えられましたが、**43 ロケール中 39 ロケール**には、運用担当者に「完全な URL をコピーして下に貼り付ける」よう指示する文言が残っていました。このプロバイダーでは、そのフローを完了できません。この問題が #8463 まで見過ごされた理由は次のとおりです。

- `sync-ui-keys` は**存在しない**キーのみを補完し、**古い**キーは補完しない。
- `check-ui-keys-coverage` はキーの_存在_を数えるため、古い翻訳もカバー済みとして計上される。
- `check-translation-drift` が追跡するのは `docs/i18n/<locale>/**.md` のドキュメントミラーであり、`src/i18n/messages/*.json` は一切読み込まない。2026-09 の再同期以降、ジョブ `docs-sync-strict` でブロッキングになっている。コアドキュメントを編集した場合は、`npm run i18n:run -- --files=<doc>` を実行する（セクション単位で低コスト）。

**差分対応型であり、ベースライン依存ではありません。** マージベースの `en.json` と作業ツリーを比較します。英語の値が変更されたすべてのキーについて、変更されていない翻訳を保持しているロケールは古いと判定されます。これは意図的に**既存の負債を固定**します。差分からは、以前から存在する翻訳がどの古い英語に由来するかを特定できないため、このゲートは現在の変更が触れた箇所のみを判定します。代替案であるキー単位のハッシュベースラインでは、約 600 KB の生成ファイルが必要になり、既存で最大のベースラインの 3 倍となるうえ、i18n PR のたびに大量の変更が発生します。

このゲートを満たす方法は 2 つあります。

1. 影響を受ける翻訳を更新する。または
2. 翻訳を `__MISSING__:<new english>` に設定する。これにより、ランタイムは修正済みの英語を提供し（`src/i18n/request.ts::deepMergeFallback`、#7258）、そのキーは翻訳待ちキューに入る。

文字列の**意味**が変わった場合は、**キー名の変更**を優先してください。新しいキーが古い翻訳を継承することはありません。#8463 ではこのパターンが使用されました。

```bash
npm run i18n:check-value-drift          # 厳格モード（CI で実行されるもの）
npm run i18n:check-value-drift:warn     # レポートのみ
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

ベースカタログを読み取れない場合（ベース ref がない shallow clone）は、`check-openapi-breaking` と同様に、`SKIP reason=base-unresolved` を表示して終了コード 0 で終了します。

### ジョブ: `i18n`

完全な i18n 検証マトリックス（ロケールごとに 1 ジョブ）。ジョブ全体が勧告のみです。

| スクリプト                      | 検証内容                   | ブロッキング                                           |
| ------------------------------- | -------------------------- | ------------------------------------------------------ |
| `validate_translation.py quick` | ロケールごとの翻訳の完全性 | **勧告のみ**（ジョブ全体で `continue-on-error: true`） |

### ジョブ: `pr-test-policy`

プルリクエストでのみ実行されます。

| スクリプト             | 検証内容                                                                                                                                    | ブロッキング |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `check:pr-test-policy` | `src/`、`open-sse/`、`electron/`、または `bin/` の本番コードを変更する PR に、テストの追加または更新が含まれていること（Hard Rule #8）      | はい         |
| `check:test-masking`   | 変更されたテストファイルで、正味の assert 数が減少しておらず、`assert.ok(true)` のようなトートロジーが追加されていないこと                  | はい         |
| `check:pr-evidence`    | PR 本文に変更に関するテスト／VPS の証拠が記載されていること（PR の文章を grep して Hard Rule #18 を機械化しているため脆弱。Backlog を参照） | はい         |

### ジョブ: `test-vitest`

`build` の後に実行されます。失敗した場合はマージをブロックします。

| スイート         | 検証対象                                                            | ブロッキング                                                                                                        |
| ---------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `test:vitest`    | MCP サーバー（110 ツール）、autoCombo、キャッシュ — vitest ランナー | はい                                                                                                                |
| `test:vitest:ui` | UI コンポーネントテスト — vitest ランナー                           | **ブロッキング** — 既存の失敗は `vitest.config.ts` で明示的に除外されています。新たな失敗があるとジョブは失敗します |

### ナイトリーワークフロー（スケジュール実行、参考情報）

これらは cron スケジュール（および `workflow_dispatch`）で実行され、PR では実行されません。すべて参考情報として扱われます。

| ワークフロー           | 検証対象                                                                                                                                                        | ブロッキング |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `nightly-property`     | ランダムシードと高い実行回数を使用した fast-check プロパティテスト                                                                                              | **参考情報** |
| `nightly-resilience`   | ヒープ増加ゲート、カオス障害注入、k6 負荷／ソークテスト                                                                                                         | **参考情報** |
| `nightly-llm-security` | promptfoo インジェクションガード（ブロックモード）+ garak プローブ（プロバイダーシークレットがない場合はスキップ）                                              | **参考情報** |
| `nightly-schemathesis` | `docs/openapi.yaml` を使用した稼働中の OmniRoute に対する OpenAPI コントラクトファジング（schemathesis）— 仕様違反／未処理の 500 エラーを検出（フェーズ 8 B.4） | **参考情報** |
| `nightly-mutation`     | 高速ユニットレーンに対する Stryker ミューテーションテストのスコア — 生き残ったミュータントから弱いアサーションを特定                                            | **参考情報** |
| `nightly-compat`       | サポート対象の `engines.node` 範囲全体にわたる Node エンジン互換性マトリックス                                                                                  | **参考情報** |

---

## ベロシティフェーズ（2026-08-30 → v4.0 LTS）：すべてのベースラインを20%緩和

オーナー決定（2026-08-30）：v4.0でのモジュール化までは、技術的負債の増加を抑えることよりも
リリース速度を優先します。すべての**数値**ラチェットベースラインを、監査可能な1回の処理で20%
緩和し、このフェーズを`config/quality/quality-baseline.json`で宣言しています：

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| 変更内容                                                                                                                                                                 | 変更箇所                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `metrics.*.value` — 小さいほど良い件数は×1.2、大きいほど良い割合は÷1.2（カバレッジの下限60は維持、`eslintErrors`は0のまま、`eslintWarnings`は0 → 凍結済み抑制件数の20%） | `quality-baseline.json`（`_relax_velocity_2026_08_30`の注記に、変更前 → 変更後をすべて列挙）           |
| `count` ×1.2 / `percentage` ×1.2                                                                                                                                         | `complexity-baseline.json`、`duplication-baseline.json`                                                |
| `cap`、`testCap`、すべての`frozen[*]` / `testFrozen[*]`行数上限を×1.2                                                                                                    | `file-size-baseline.json`                                                                              |
| ファイル単位 / TSコード単位の件数を×1.2                                                                                                                                  | `api-typecheck-baseline.json`、`dashboard-typecheck-baseline.json`、`open-sse-typecheck-baseline.json` |
| `THRESHOLD` 36 → 30                                                                                                                                                      | `scripts/check/check-openapi-coverage.mjs`                                                             |
| `_policy.requireTighten === false`の間、`--require-tighten`を勧告扱いに変更                                                                                              | `scripts/quality/check-quality-ratchet.mjs`                                                            |
| nightlyの`bank-ratchet-shrinks`を一時停止（測定された縮小分が確定され、余裕が取り消されてしまうため）                                                                    | `.github/workflows/nightly-release-green.yml`                                                          |

許可リスト（`eslint-suppressions.json`、`test-masking-allowlist.json`、`test-discovery-baseline.json`
など）は予算ではないため、変更していません。合否判定を行うポリシーゲート（シークレット、SQLルール、
ドキュメント/環境契約、i18nの整合性、ユニットテスト）も変更していません。テストが赤なら、引き続き赤です。

**ツール**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` —
  1回限りの緩和処理（`scripts/quality/relax-baselines.mjs`）。同じ注記での2回目の実行は拒否されます。
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  CIと同じ方法ですべての数値ゲートを測定し、ゲートごとの残りの余裕を出力します
  （`scripts/quality/baseline-headroom.mjs`）。nightlyの`baseline-headroom`ジョブは、その表を継続的に更新されるIssue
  **📈 Baseline headroom (velocity phase)**へ投稿し、いずれかのゲートが上限の10%以内に達した場合、またはすでに超過している場合に
  `headroom-alert`ラベルを追加します。このIssueは早期警告として機能します。数日で予算が埋まる場合、その緩和分は
  チーム全体ではなく少数のPRによって消費されています。問題のあるゲートの`_rebaseline_*`注記を確認してください。

**新規コードモード（Clean-as-You-Code）— 2026-08-30以降、PRの高速パスのみ**

`pull_request`イベントでは、`quality.yml`が`--base-ref <PR base SHA>`を`check:file-size`、
`check:complexity-ratchets`、`check:dead-code`へ渡します。このモードでは、ゲートはHEADと
マージベースを、**PRが変更したファイルのみに限定して**比較します（`scripts/check/newCodeMode.mjs`：
マージベースを一時的な`git worktree`に展開し、そこでESLint/knipを実行するとともにHEADでも実行し、
ファイル単位の件数の差分を取ります）：

- **ブロッキング** — PRによって、変更対象ファイルに循環的複雑度/認知的複雑度の違反または未使用のexportが追加された場合
  （ログ内の`complexityNewCode=`、`cognitiveComplexityNewCode=`、`deadExportsNewCode=`）；
- **勧告** — グローバル合計と凍結済みベースラインの比較。継承されたドリフトによって、無関係なPRが
  赤になることはありません。ドリフトはリリース時の調整で再凍結され、headroomジョブによって監視されます。

`workflow_dispatch`による実行、release-greenの一括チェック、nightlyのheadroomジョブにはPRベースがないため、
引き続き絶対値（グローバル）で比較します。カバレッジ、重複、型カバレッジは、現時点では引き続きグローバルです
（これらのツールでは、ファイル単位の差分を低コストで生成できないため）。これらは同じ方式を適用する候補です。

**v4.0でのフェーズ終了（LTS = 「通常に戻す」のではなく、以前より厳格にする）**

1. 純粋な `release/v4.0.0` の先端で、記録用に `npm run quality:headroom --json` を実行し、続いて
   `npm run quality:ratchet -- --update`、`check:file-size --update`、
   `check:complexity-ratchets --update`、`check:dead-code --update`、各 typecheck ゲートの
   `--update` を実行する — すべてのベースラインを測定値まで引き下げる。
2. `quality-baseline.json` から `_policy` を削除し（`--require-tighten` と夜間の
   バンキングを再有効化）、`check-openapi-coverage.mjs` の `THRESHOLD = 36`（またはそれ以上）を復元する。
3. モジュール化の効果が得られた箇所では、測定値を超えて厳格化する：ファイルサイズの `cap` を 1000
   （または 800）に戻し、カバレッジの下限を +5、モジュール化したパッケージの未使用エクスポートを 0 にする。

## ラチェットベースライン (`quality-baseline.json`)

ラチェットエンジン (`scripts/quality/check-quality-ratchet.mjs`) は `quality-baseline.json`
を読み込み、新たに収集された `quality-metrics.json` と比較します。イプシロンを超えて
悪化したメトリクスがある場合、ビルドは失敗します。

現在追跡されているメトリクス:

| メトリクス            | 方向   | 意味                                         |
| --------------------- | ------ | -------------------------------------------- |
| `eslintWarnings`      | `down` | ESLint の警告数が増えてはならない            |
| `coverage.statements` | `up`   | ステートメントカバレッジが低下してはならない |
| `coverage.lines`      | `up`   | 行カバレッジが低下してはならない             |
| `coverage.functions`  | `up`   | 関数カバレッジが低下してはならない           |
| `coverage.branches`   | `up`   | ブランチカバレッジが低下してはならない       |

実際に改善された後でベースラインを更新するには、次を実行します:

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

`--update` フラグは、現在の測定値を `quality-baseline.json` に書き込みます。
このファイルは、メトリクスを改善した変更と一緒にコミットしてください。メトリクスを
改善してもベースラインを更新していない PR は、`--require-tighten` によって検出されます
（フェーズ 6A.5、実装予定）。

### CodeQL ラチェット: 更新頻度と手動トリガー

`check:codeql-ratchet` は、**スケジュールに従って更新されるリポジトリの状態を読み取ります。PR ごとではありません。**
`gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup` は
`state: configured`、`schedule: weekly` を返します。これは GitHub のデフォルトセットアップによるスキャンであり、
push ごとの分析ではありません。そのため、アラートを修正する PR がマージされた後も、次回の
スケジュール済みスキャンが実行されるまでは、ラチェットが古い高い件数を読み取り続けます。その結果、
スキャン結果が追いつくまで、修正 PR 自体のフォローアップを含むすべてのオープンな PR で
リグレッションが報告されます。

**手動更新**: `gh workflow run codeql.yml --ref release/vX.Y.Z` を実行すると、
分析が再実行され、数分以内にアラートが再公開されます。最初に `.github/workflows/codeql.yml`
を読んでください。そのヘッダーでは、GitHub の「デフォルトセットアップ」と競合するため、
`workflow_dispatch` 専用であることが説明されています（`CodeQL analyses from advanced configurations cannot be
processed when the default setup is enabled`）。`push`/`pull_request`/
`schedule` トリガーを復元するには、まず**オーナーによる操作**が必要です: Settings → Code security →
CodeQL: Default → Advanced。この切り替えを行わずに `schedule:` トリガーを追加しないでください。
失敗する実行が生成されるだけです。

**件数が減少したらベースラインを厳格化してください** — `node scripts/check/check-codeql-ratchet.mjs
--update` は、新しい測定件数を `quality-baseline.json` →
`metrics.codeqlAlerts.value` に書き込みます。これにより、ラチェットが以前の上限までのリグレッションを
暗黙に許可することを防ぎます。実例（2026-09-02/03）: PR #12502 で実在する 7 件のアラートを
修正しました（測定されたオープン件数は 13 → 6）。PR #12530 では、それに合わせて固定された
ベースラインを 11 → 6 に厳格化しました。その後、残りの 6 件はアラートごとの根拠を添えて却下され、
オープン件数は 0 になりました。

**却下はオペレーターの判断です（ハードルール #14）** — CodeQL アラートを却下する際は、
必ず却下コメントに技術的な根拠を記録してください。上流プロトコルの要件には `won't fix`、
テストフィクスチャには `used in tests`、CodeQL が認識できないサニタイザーには `false positive`
を使用します（先例: `docs/security/ERROR_SANITIZATION.md`）。

---

## テスト再試行ポリシー (WS5.4, v3.8.49)

再試行はランナー単位で行い、グローバルに一律適用してはなりません。一律の再試行は、実際のリグレッションを見えないフレークへと変えてしまいます。

| ランナー         | ポリシー                                                                                                                                            | 理由                                                                                                                                  |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Playwright (e2e) | CI でのみ `retries: 1`、および `trace: on-first-retry`                                                                                              | ブラウザーやネットワークのタイミングは実際に非決定的です。トレース付きで1回再試行することで、フレークを診断可能な成果物に変えられます |
| Vitest           | グローバルな再試行は禁止。フレークすることが確認されたテストにのみ、テスト単位の再試行を明示的に設定します（差分に表示され、PR でレビューされます） | 隔離リストを不透明にせず、リポジトリ内に保持します                                                                                    |
| node:test (unit) | 再試行は常に禁止                                                                                                                                    | 不安定なユニットテストはテストのバグです。再実行するのではなく、修正してください                                                      |

フレークのテレメトリが導入された後の目標 SLO (WS5.2/5.3)：テストごとのフレーク率 <1%
（「今すぐ修正」のしきい値）、パイプラインごとの合格率 ≥95%。これらは業界の参考値です。
自分たちの測定結果に基づいて再調整してください。

## リリースレベルのラチェットドリフト (WS5.5, v3.8.49)

PURE リリース先端でラチェット（ファイルサイズ、複雑度、eslint 警告）が悪化した場合、
つまり、マージの組み合わせによって悪化したものの、個々の PR のブランチでは
そのリグレッションを再現できない場合、その修正は**リリースキャプテンが一度だけ、
リリースブランチ上で**行う責任があります。抽出やリファクタリングを優先し、
ベースラインの再設定は、根拠を記録したエントリがある場合にのみ行ってください。
組み合わせによるドリフトをコントリビューターの PR に押し付けてはならず、
PR ごとにベースラインを再設定してもなりません（実際のリグレッションが隠れてしまいます）。
まず原因を切り分けてください。自分の PR が原因だと決めつける前に、検証用 worktree で
純粋な先端に対して失敗を再現してください。

## ラチェット縮小値のバンキング — 下方への方向 (#8584)

ラチェットの自動化は半分しかなく、しかも自動化されているのは間違った側です。
上限の**引き上げ**は10秒で済む手動の JSON 編集であり、失敗している PR のブロックを
解除する最速の方法です。上限の**引き下げ**には、誰かが `--update` を実行して結果を
コミットする必要があります。そして `bank-ratchet-shrinks` ジョブが導入されるまで、
それを実行するワークフローはありませんでした。測定された結果 (2026-07-25)：
18個の frozen ファイルがすでに新規ファイルの800行上限以下であり、最悪のものでは
132倍（`src/shared/validation/schemas.ts` は19行なのに2,523の上限を保持）。
複雑度の上限は約37件のベースライン再設定メモを経て `1794 → 2169` まで上昇し、
低下はちょうど1回（−1）だけでした。また、「次のサイクルで `--update` を使って
厳格化する」と31回記載されたものの、実行されたのは1回だけでした。
その上限の根拠となったコードより長く残り続ける上限は、完了した分割作業のすべてを、
次にそのファイルを編集する人のための増加許容量へと密かに変えてしまいます。

`nightly-release-green.yml` → ジョブ **`bank-ratchet-shrinks`** がこのループを閉じます。

|          |                                                                                                    |
| -------- | -------------------------------------------------------------------------------------------------- |
| 実行条件 | `schedule`（1日3回）+ `workflow_dispatch` — 意図的に `push` では**実行しません**                   |
| 測定対象 | 最上位の `release/vX.Y.Z`。`release-green` と同じ解決処理およびインジェクションガードを使用します  |
| 書き込み | `check:file-size --update` および `check:complexity-ratchets --update`（どちらも構造上、縮小のみ） |
| 検証     | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                           |
| 提供方法 | リリースブランチに対する、常に最新の単一 PR — 強制更新され、PR が乱立することはありません          |

バンキングはプッシュごとではなく、まとめて実行されます。これはレイテンシー要件がなく
（縮小が8時間以内にバンキングされれば十分）、マージ作業中にマージごとに実行すると、
PR ブランチが繰り返し再構築され、そのたびに ESLint の完全な走査コストがかかるためです。
検出は引き続き push 時に行われます (`release-green`)。まとめて実行されるのは
バンキングだけです。

### 安全性検証ツール

このジョブは無人でベースラインへ書き込むため、それを許容可能にしているのが
`verify-ratchet-bank.mjs` です。これは `--update` 後のツリーと `HEAD` の差分を取得し、
すべての変更が次のいずれかに該当しない限り、**コミットが作成される前にジョブを中止**
します。その場合、PR は作成されません。

- `frozen` / `testFrozen` の数値エントリが**引き下げられた**、または**削除された**
- `complexity-baseline.json` → `count` が**引き下げられた**
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` が**引き下げられた**

それ以外はすべて失敗となります。数値の引き上げ、エントリの追加、`cap`/`testCap` の変更、
または `_rebaseline_*` メモの削除や書き換えは禁止です（これらのメモは各上限が存在する
理由を示す監査証跡であり、ファイルエントリと同じ `frozen` オブジェクト内に保存されます）。
上限を引き上げられるボットは、現状より確実に悪いものとなります。
リグレッションガード：`tests/unit/verify-ratchet-bank.test.ts`。

このジョブが `release/*` にプッシュすることはありません。PR は人間がマージするため、
誤った測定結果がレビューなしで取り込まれることはありません。

## 許可リストポリシー

既存の違反によって失敗させることができないすべてのゲートでは、固定された許可リスト
（例: `KNOWN_STALE_DOC_REFS`、`KNOWN_MISSING`、`KNOWN_RAW_SQL`）を使用します。ポリシーは次のとおりです。

**根本原因を修正してください。違反が既存のものであり、同じ PR 内で修正できない場合にのみ許可リストを使用してください。**

許可リストにエントリを追加する場合:

1. 理由を記載したコメントを含めます。
2. 追跡用 Issue を参照します（例: `// #3498 — フェーズ 2 の機能、未実装`）。
3. 違反を修正する同じ PR 内でエントリを削除します。アクティブな違反を抑制しなくなった古いエントリは、それ自体が不具合です（6A.3 の古い適用ルールのチェックが実装されると、孤立した許可リストエントリによってゲートが失敗します）。

テストを早く通すために許可リストエントリを追加しては**なりません**。許可リストが増え続ける一方でゲートが成功していても、品質に対する誤った安心感を与えるだけです。

### PR でゲートが失敗した場合

1. **ゲートの出力を注意深く読みます** — ルールに違反したファイルまたはシンボルが正確に示されています。
2. **違反を修正します** — ほとんどのゲートは決定的なファイルシステムチェックであり、コードが正しくなればすぐに成功します。
3. **違反が既存のものである場合**（つまり、自分が導入したものではなく、ゲートが新たに対象とするようになった場合）: 理由を記載したコメントと追跡用 Issue を添えて、許可リストにエントリを追加します。
4. **ゲートがラチェット方式の場合**（カバレッジ、ESLint の警告、重複、複雑度）:
   変更によってメトリクスが悪化しています。根本的な問題を修正するか、変更が意図的でメトリクスの悪化が許容可能な場合に限り、（まれに）`npm run quality:ratchet -- --update` を実行します。ただし、その理由を PR の説明に記載してください。
5. **助言目的のゲート**（`continue-on-error: true`）は情報提供用です。マージをブロックしませんが、CI のサマリーに表示されます。それでも修正してください。

---

## 新しいゲートの追加

1. `scripts/check/check-<name>.mjs`（または `.ts`）を作成します。ポリシーゲートは終了コード 0/1 で終了します。
   ラチェット方式のゲートは、`collect-metrics.mjs` を介して `quality-metrics.json` にメトリクスを出力します。
2. `"check:<name>": "node scripts/check/check-<name>.mjs"` を `package.json` に追加します。
3. `.github/workflows/ci.yml` の適切なジョブ配下に組み込みます
   （ポリシー → `lint` または `docs-sync-strict`、ラチェット → `quality-gate`）。
4. 許可リストがある場合は、古いエントリが自動的に検出されるように、
   `scripts/check/lib/allowlist.mjs` の `reportStaleEntries()` を適用します。
5. ゲートの検出ロジックをカバーするテストを `tests/unit/build/` に記述します。
6. このドキュメントを更新します（該当するジョブの表に行を追加します）。

---

## エージェントツール: LSP-in-the-loop（オプトイン）

CI ゲートに加えて、OmniRoute には**オプトイン**の `agent-lsp` スキャフォールド
（プロジェクトレベルの `.mcp.json`、Fase 7 Task 15）が含まれています。`.mcp.json`
を作成して TypeScript 言語サーバーをコーディングエージェントに公開することで、エージェントがコードを記述する**前に**シンボルや診断情報を解決できるようにします。これは、発生源で「存在しないシンボルを捏造する」エラーを減らす、`typecheck:core` のコンパイル前提の主張を補完する仕組みです。これは意図的に自動読み込みされません（MCP↔LSP ブリッジは利用者が選択して検証します）。壊れたエントリがあっても接続エラーがログに記録されるだけで、セッションが中断されることはありません。

---

## 合理化バックログ（ROI レビュー — フェーズ 9 ウェーブ 3）

このインベントリは 2026-06-17 に `ci.yml` と照合済みです（以前のバージョンでは
`audit:deps`、`check:tracked-artifacts`、`check:lockfile`、`check:licenses`、
`check:dead-code`、`check:cognitive-complexity`、`check:type-coverage`、
`check:codeql-ratchet`、`check:pr-evidence` が抜けていました）。照合済みセットの ROI レビューにより、
以下の合理化候補が特定されました。**マージは機械的な CI
変更です。切り替え／削除はオペレーターに委ねられたポリシー上の判断です。** 以下の内容は
まだ何も適用されていません。

**上記に加えて未文書化の項目**（アドバイザリー、シグナルが弱い）として、`docs-lint` ジョブ
（markdownlint + Vale、ジョブ全体が `continue-on-error`）およびスタンドアロンのスキャナーワークフロー
`semgrep.yml` / `codeql.yml` / `scorecard.yml` があります。`semgrepFindings: 0` は
`quality-baseline.json` にありますが、`ci.yml` のブロッキング・ラチェットには接続されていません。このメトリクスは
現在孤立しています。

### マージ／重複排除（機械的、低リスク）

各候補は 2026-06-17 時点の実際のゲート状態に対して検証済みです（信頼しつつ検証）。
一見「明らか」なマージのいくつかは、実際には負債を隠していることが判明し、**そのまま置き換え可能ではありません**。

- **`check:docs-sync` が 2 回実行される** — `lint` ジョブ内で単独実行され、さらに `check:docs-all`（`docs-sync-strict`）内および husky の pre-commit フックでも実行されます。✅ **完了** — `lint` での単独呼び出しを削除しました。
- **CVE スキャン** — ❌ **そのままマージ不可。** `audit:deps` は high/critical の CVE が 1 件でもあるとハードフェイルします。一方、`check:vuln-ratchet`（osv）はベースライン（現在は MODERATE が 1 件）に対する_リグレッション_がある場合にのみ失敗します。セマンティクスが異なるため、`audit:deps` を削除すると high/critical に対する絶対的なゲートが失われます。両方を維持してください。
- **循環依存の検出** — ❌ **そのままマージ不可。** `check:circular-deps`（dpdm）は **91 件の循環**を報告します（そのためアドバイザリーになっています）。まずそれらを解消しない限りブロッキングに昇格できず、正常なキュレーション済み `check:cycles` よりも対象範囲が広くなっています。`check:cycles` はブロッキングのまま維持してください。91 件の dpdm 循環の解消は、独立したバックログ項目です。
- **複雑度** — ✅ **完了**（`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`）：ESLint の走査を 1 回に統合し、ruleId ごとにカウントすることで、循環的複雑度＋最大行数と認知的複雑度のベースラインを独立させたままにしています。個別の `check:complexity` / `check:cognitive-complexity` は、ローカルでの `--update` 用に残しています。
- **`/api` のハルシネーション防止** — ✅ **完了**（`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`）：`src/app/api` の FS インベントリを 1 回に統合し、openapi-routes と docs-symbols は引き続き個別にレポートします。個別コマンドはローカル実行用に残しています。
- **`check:node-runtime` が 11 個のジョブで実行される** — ⚠️ **ROI が低いです。** 各ジョブは別々のランナーで実行され、このチェックは 1 秒未満です。合計削減時間は約 10 秒ですが、安価なジョブ単位のガードを失うことになります。変更コストに見合いません。
- **CI lint 上の `typecheck:noimplicit:core`** — ✅ **lint ジョブから削除済み**（以前はアドバイザリーの `continue-on-error`）。ブロッキングの型サーフェスは `typecheck:core` + `check:type-coverage` です。ローカルスクリプトは維持しています。

### 切り替え／判断（オペレーターのポリシー）

- `check:openapi-security-tiers`（アドバイザリー）— ❌ **そのまま切り替え不可。** 終了コードは 0 ですが、`LOCAL_ONLY_API_PREFIXES` 配下の複数の `traffic-inspector` ルートに `x-loopback-only: true` アノテーションがないと警告します。強制するには、まずそれらのアノテーションを `openapi.yaml` に追加する必要があります。
- `typecheck:noimplicit:core`（アドバイザリー）— ブロッキングの `check:type-coverage` ラチェットによって大部分が包含されています。ラチェットに切り替えるか、重複する 2 回目の `tsc` パスを削除してください。
- `test:vitest:ui`（現在は**ブロッキング**）— 既存の失敗は、`// #8618` の追跡コメント付きで `vitest.config.ts` から明示的に除外されています。新たな失敗が発生するとジョブは失敗します。
- `check:secrets`（gitleaks、文書化済みの誤検知 3 件で固定されたブロッキング・ラチェット）— 3 件を許可リストに入れて 0 にするか、アドバイザリーに降格してください。GitHub ネイティブのシークレットスキャンおよび `check:public-creds` と重複しています。
- `check:pr-evidence`（ブロッキング、PR 本文の文章を grep）— 誤検知のリスクが高い一方、削除するとハードルール #18 の強制力が弱まるため、これは純粋にポリシー上の判断です。
- `semgrep`（アドバイザリーのスタンドアロン）— OWASP 系の検出で CodeQL と重複しています。ベースラインをラチェットに接続するか、削除してください。

---

## 関連ドキュメント

- サプライチェーン（来歴、SBOM、Trivy、Scorecard）：[`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — キーセット同等性ゲート

`scripts/i18n/check-key-completeness.mjs`（`npm run i18n:check-keys`、ジョブ `i18n-ui-coverage`）。
すべての `src/i18n/messages/<locale>.json` の末端キーセットを `en.json` と比較し、キーが追加された時期にかかわらず、欠落または余分な末端キーがある場合は失敗します。`__MISSING__:` プレースホルダーは存在するものとして数えられます（その内容は比率ゲートの管轄です）。これは、差分ベース／割合ベースの2つのゲートを完全に補完するものです。`check-ui-keys-coverage` はロケールごとに 80 % の下限を適用します（約13,000個中43個のキーが欠落していても 99.7 % と表示されます）。一方、`check-new-key-coverage` はPRが `en.json` に追加したキーだけを判定します。ロケールバッチはブランチを切った日の `en.json` から生成され、ベース側でキーが追加され続ける間も数日かけて翻訳されます。バッチPR自体はキーを追加しないため、バッチ1（#13044）が9つのロケールで43個のキーを欠いたまま、バッチ2（#13660）が8つのロケールで10個のキーを欠いたままマージされた際（2026-09-15）、どちらの関連ゲートも何も検出しませんでした。失敗を修正するには、`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers` を実行します。`extra` の末端キーは、ソース側でそのキーが削除されたことを意味するため、ロケールから削除してください。`--warn` は失敗させずに報告します。`--catalog=cli` は `bin/cli/locales` に対して同じ比較を実行します（`npm run i18n:check-keys:cli`）。どちらのステップもジョブ `i18n-ui-coverage` に含まれています。

#### `check-new-key-coverage` — 新規キーのi18nゲート

`check-ui-value-drift` と対をなすゲートです。後者は、英語の値が**書き換えられた**にもかかわらず翻訳が更新されていないケースを検出します。こちらは、英語のキーが**追加された**にもかかわらず、一部のロケールに追加されていないケースを検出します。

`check-ui-keys-coverage` では、この種の問題を検出できません。これはロケールごとにカバレッジ率の下限を適用しますが、約13,000個中11個のキーが欠落していても、カバレッジは 99.9% のままです。言語ごとの割合では、「この機能が未翻訳のままリリースされた」ことを表現できません。ある機能全体がテキストなしで新しいロケールに導入されても、数値はまったく動かない可能性があります。

このゲートが教訓として組み込んでいるインシデントは、次のとおりです。Orchestration Canvasのフェーズ3では、当時存在した42のロケールすべてについて11個のキーが翻訳されました。その数時間後、EU言語バッチ（#13044）によってリポジトリのロケール数は51になりましたが、新たに追加された9つのロケール（`el`、`et`、`ga`、`hr`、`lt`、`lv`、`mt`、`sl`、`sr`）には、それらのキーが追加されませんでした。`deepMergeFallback` は欠落したキーを英語で補完するため、障害は空白のUIではなく未翻訳のUIとして現れました。これは実在する問題でありながら、仕組み上、検知されませんでした。

対となるゲートと同様に、これは**差分を考慮**し、マージベース時点の英語と作業ツリーを比較します。そのため、既存の欠落はそのまま固定され、このゲートを有効にするための移行作業は不要でした。回避策として、`__MISSING__:<english>` を使用すれば、ランタイムの正しさを維持しながら翻訳を先送りできます。`vi` ではプレースホルダーが禁止されているため（`tests/unit/i18n-vi-completeness.test.ts`）、実際の翻訳が必要です。

#### `check-vitest-exclusions` — 保留テスト用ゲート

`vitest.config.ts` の `exclude` リストに含まれるファイルは、実行されないテストです。しかし、ツリーを読む人にはカバレッジがあるように見えます。`// #8618 — 既存の失敗。修正時にこの除外を削除すること` というコメントの下に、62個のファイルが蓄積していました。Issue #8618 は 2026-08-11 にクローズされましたが、それが追跡していたリストは45件から62件に増え、新しい項目はすべて、すでにクローズされたIssueを指すコメントを引き継いでいました。最終的にファイルごとの測定が行われた際（#13204）、**62個中51個が、ソースを変更することなく現在のツリーで合格しました**。

このゲートでは、実在するファイルとして解決されるすべての除外項目について、(a) 追跡用Issueを明記し、(b) 測定済みのステータスとともに `config/quality/vitest-exclusions.json` に記載することを求めます。これにより、除外の追加は、60件の配列にさらに1行を加えるだけではなく、専用ファイルにおけるレビュー可能な差分になります。このゲートは、除外されたテストを意図的に再実行しません。再実行には約10分かかり、定期ジョブで行うべきだからです。インベントリには、各テストが最後に測定された日時が記録されます。
