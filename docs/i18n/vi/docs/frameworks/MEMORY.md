# Memory System (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../frameworks/MEMORY.md) · 🇪🇹 [am](../../../am/docs/frameworks/MEMORY.md) · 🇸🇦 [ar](../../../ar/docs/frameworks/MEMORY.md) · 🇦🇿 [az](../../../az/docs/frameworks/MEMORY.md) · 🇧🇬 [bg](../../../bg/docs/frameworks/MEMORY.md) · 🇧🇩 [bn](../../../bn/docs/frameworks/MEMORY.md) · 🇨🇿 [cs](../../../cs/docs/frameworks/MEMORY.md) · 🇩🇰 [da](../../../da/docs/frameworks/MEMORY.md) · 🇩🇪 [de](../../../de/docs/frameworks/MEMORY.md) · 🇬🇷 [el](../../../el/docs/frameworks/MEMORY.md) · 🇪🇸 [es](../../../es/docs/frameworks/MEMORY.md) · 🇪🇪 [et](../../../et/docs/frameworks/MEMORY.md) · 🇮🇷 [fa](../../../fa/docs/frameworks/MEMORY.md) · 🇫🇮 [fi](../../../fi/docs/frameworks/MEMORY.md) · 🇫🇷 [fr](../../../fr/docs/frameworks/MEMORY.md) · 🇮🇪 [ga](../../../ga/docs/frameworks/MEMORY.md) · 🇮🇳 [gu](../../../gu/docs/frameworks/MEMORY.md) · 🇳🇬 [ha](../../../ha/docs/frameworks/MEMORY.md) · 🇮🇱 [he](../../../he/docs/frameworks/MEMORY.md) · 🇮🇳 [hi](../../../hi/docs/frameworks/MEMORY.md) · 🇭🇷 [hr](../../../hr/docs/frameworks/MEMORY.md) · 🇭🇺 [hu](../../../hu/docs/frameworks/MEMORY.md) · 🇦🇲 [hy](../../../hy/docs/frameworks/MEMORY.md) · 🇮🇩 [id](../../../id/docs/frameworks/MEMORY.md) · 🇳🇬 [ig](../../../ig/docs/frameworks/MEMORY.md) · 🇮🇹 [it](../../../it/docs/frameworks/MEMORY.md) · 🇯🇵 [ja](../../../ja/docs/frameworks/MEMORY.md) · 🇬🇪 [ka](../../../ka/docs/frameworks/MEMORY.md) · 🇰🇭 [km](../../../km/docs/frameworks/MEMORY.md) · 🇮🇳 [kn](../../../kn/docs/frameworks/MEMORY.md) · 🇰🇷 [ko](../../../ko/docs/frameworks/MEMORY.md) · 🇱🇹 [lt](../../../lt/docs/frameworks/MEMORY.md) · 🇱🇻 [lv](../../../lv/docs/frameworks/MEMORY.md) · 🇮🇳 [ml](../../../ml/docs/frameworks/MEMORY.md) · 🇮🇳 [mr](../../../mr/docs/frameworks/MEMORY.md) · 🇲🇾 [ms](../../../ms/docs/frameworks/MEMORY.md) · 🇲🇹 [mt](../../../mt/docs/frameworks/MEMORY.md) · 🇲🇲 [my](../../../my/docs/frameworks/MEMORY.md) · 🇳🇵 [ne](../../../ne/docs/frameworks/MEMORY.md) · 🇳🇱 [nl](../../../nl/docs/frameworks/MEMORY.md) · 🇳🇴 [no](../../../no/docs/frameworks/MEMORY.md) · 🇮🇳 [or](../../../or/docs/frameworks/MEMORY.md) · 🇮🇳 [pa](../../../pa/docs/frameworks/MEMORY.md) · 🇵🇭 [phi](../../../phi/docs/frameworks/MEMORY.md) · 🇵🇱 [pl](../../../pl/docs/frameworks/MEMORY.md) · 🇵🇹 [pt](../../../pt/docs/frameworks/MEMORY.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/frameworks/MEMORY.md) · 🇷🇴 [ro](../../../ro/docs/frameworks/MEMORY.md) · 🇷🇺 [ru](../../../ru/docs/frameworks/MEMORY.md) · 🇱🇰 [si](../../../si/docs/frameworks/MEMORY.md) · 🇸🇰 [sk](../../../sk/docs/frameworks/MEMORY.md) · 🇸🇮 [sl](../../../sl/docs/frameworks/MEMORY.md) · 🇷🇸 [sr](../../../sr/docs/frameworks/MEMORY.md) · 🇸🇪 [sv](../../../sv/docs/frameworks/MEMORY.md) · 🇰🇪 [sw](../../../sw/docs/frameworks/MEMORY.md) · 🇮🇳 [ta](../../../ta/docs/frameworks/MEMORY.md) · 🇮🇳 [te](../../../te/docs/frameworks/MEMORY.md) · 🇹🇭 [th](../../../th/docs/frameworks/MEMORY.md) · 🇹🇷 [tr](../../../tr/docs/frameworks/MEMORY.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/frameworks/MEMORY.md) · 🇵🇰 [ur](../../../ur/docs/frameworks/MEMORY.md) · 🇺🇿 [uz](../../../uz/docs/frameworks/MEMORY.md) · 🇳🇬 [yo](../../../yo/docs/frameworks/MEMORY.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/frameworks/MEMORY.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/frameworks/MEMORY.md)

---

> **Nguồn tham chiếu chính xác:** `src/lib/memory/` và `src/app/api/memory/`
> **Cập nhật lần cuối:** 2026-06-28 — v3.8.40 (tắt theo mặc định + cập nhật lượng tử hóa int8)

OmniRoute cung cấp bộ nhớ hội thoại bền vững được định danh theo khóa API (và
tùy chọn theo id phiên). Các ký ức được tự động trích xuất từ phản hồi của LLM
thông qua đối sánh mẫu regex nhẹ và được chèn trở lại vào các yêu cầu tiếp theo
dưới dạng thông điệp hệ thống ở đầu (hoặc thông điệp người dùng đầu tiên đối với
các nhà cung cấp từ chối vai trò hệ thống).

> **Bộ nhớ được TẮT theo mặc định (v3.8.30+).** `DEFAULT_MEMORY_SETTINGS.enabled`
> hiện là `false` (`src/lib/memory/settings.ts`). Việc bật bộ nhớ sẽ chèn tối đa
> `maxTokens` (~2k) ngữ cảnh được truy xuất vào **mọi** yêu cầu trò chuyện, và
> phần này sẽ bị tính phí — một chi phí ngoài dự kiến đối với các bản cài đặt mới
> và các máy khách tự quản lý ngữ cảnh. Hãy chủ động bật tính năng này tại
> **Settings → Memory** (`MemorySkillsTab` hiển thị cảnh báo về chi phí token khi
> bộ nhớ được bật). Máy khách có thể không dùng bộ nhớ cho một yêu cầu riêng lẻ
> bằng header yêu cầu `x-omniroute-no-memory` (`true`/`1`/`yes`) — xem bảng
> header yêu cầu trong [API_REFERENCE.md](../reference/API_REFERENCE.md). Một
> yêu cầu không dùng bộ nhớ sẽ đặt `memoryOwnerId = null`, qua đó vô hiệu hóa
> **cả** việc chèn bộ nhớ lẫn kỹ năng cho yêu cầu đó
> (`open-sse/handlers/chatCore/headers.ts::isNoMemoryRequested`).

Bộ nhớ được **phân phạm vi theo từng khóa API**, không phải theo từng người dùng
— mọi yêu cầu được xác thực bằng cùng một khóa API đều dùng chung một vùng nhớ,
với khả năng phân phạm vi chi tiết hơn theo `sessionId`.

## Kiến trúc

```
Máy khách → /v1/chat/completions (apiKeyInfo được phân giải ở thượng nguồn)
  → handleChatCore() [open-sse/handlers/chatCore.ts]
    → resolveMemoryOwnerId(apiKeyInfo)        # trích xuất id
    → getMemorySettings()                     # cài đặt đã lưu vào bộ nhớ đệm
    → shouldInjectMemory(body, {enabled})     # cổng kiểm tra
    → retrieveMemories(apiKeyId, config)      # SQL + FTS5 + vector tùy chọn
    → injectMemory(body, memories, provider)  # thông điệp hệ thống hoặc người dùng
  → gọi nhà cung cấp thượng nguồn
  → khi có phản hồi: extractFacts(text, apiKeyId, sessionId)  # không chặn
    → setImmediate → createMemory(fact) cho mỗi kết quả khớp
                   → embed(content) + upsertVector(id, vec)
```

Các điểm gọi để chèn và trích xuất được kết nối trong
`open-sse/handlers/chatCore.ts` (tìm `retrieveMemories`, `injectMemory`
và `extractFacts`).

## Kiến trúc engine (phân giải 3 tầng)

Memory Engine xác định đường dẫn truy xuất trong thời gian chạy dựa trên cơ sở
hạ tầng và cài đặt hiện có. Có ba tầng, được áp dụng theo thứ tự ưu tiên:

```
  ┌─────────────────────────────────────────────────────────────┐
  │  TẦNG 0 — Từ khóa (FTS5)                                    │
  │  Khả dụng dựa trên phép thăm dò: FTS5 khi bản dựng SQLite    │
  │  hỗ trợ nó (better-sqlite3 / node:sqlite / bun:sqlite);      │
  │  không khả dụng trên các bản dựng thiếu FTS5 (ví dụ:         │
  │  sql.js/WASM — "no such module: fts5"). Được dùng khi        │
  │  strategy = "exact" hoặc làm phương án dự phòng; trạng thái  │
  │  keyword của engine phản ánh kết quả thăm dò.                │
  └──────────────────────────────────┬──────────────────────────┘
                                     │ strategy = semantic|hybrid?
                                     ▼
  ┌─────────────────────────────────────────────────────────────┐
  │  TẦNG 1 — Vector nhúng (sqlite-vec)                          │
  │  sqlite-vec v0.1.9 được tải qua db.loadExtension().          │
  │  KNN vét cạn trên các vector Float32. Hoạt động khi:         │
  │   • sqlite-vec loadExtension thành công                      │
  │   • Có nguồn embedding (remote | static | transformers)      │
  │     có thể tạo ra một Float32Array                           │
  │   • Bảng vec_memories tồn tại (được tạo trong lần ready()    │
  │     đầu tiên)                                                │
  └──────────────────────────────────┬──────────────────────────┘
                                     │ qdrant.enabled?
                                     ▼
  ┌─────────────────────────────────────────────────────────────┐
  │  TẦNG 2 — Qdrant (cơ sở dữ liệu vector ngoài, cần chủ động bật)│
  │  Khi được bật, thay thế sqlite-vec cho semantic/hybrid.      │
  │  Yêu cầu một thực thể Qdrant đang chạy + host/port đã cấu hình.│
  └─────────────────────────────────────────────────────────────┘
```

Quá trình suy giảm chức năng diễn ra tự động và minh bạch:

- Nếu không tải được sqlite-vec, tầng 1 sẽ không khả dụng → chuyển về tầng 0.
- Nếu nguồn embedding trả về lỗi, tầng 1 sẽ chuyển về tầng 0.
- Nếu Qdrant không hoạt động bình thường, tầng 2 sẽ chuyển về tầng 1 (hoặc tầng
  0 nếu tầng 1 cũng không khả dụng).

## Nguồn embedding

Lớp embedding (`src/lib/memory/embedding/`) xác định nguồn cần sử dụng dựa trên `MemorySettingsExtended.embeddingSource`:

| Nguồn          | Mô tả                                                                              | Cần khóa | Khởi động nguội  |
| -------------- | ---------------------------------------------------------------------------------- | -------- | ---------------- |
| `remote`       | Sử dụng API embedding của nhà cung cấp đã cấu hình (OpenAI, Cohere, v.v.)          | Có       | Không            |
| `static`       | Embedding bằng bảng tra cứu cục bộ qua `potion-base-8M` (WordPiece + mean pooling) | Không    | ~200ms           |
| `transformers` | Suy luận ONNX cục bộ qua `@huggingface/transformers` v4, `all-MiniLM-L6-v2`        | Không    | ~3s + ~400MB RAM |
| `auto`         | Phân giải lúc chạy: remote (nếu có khóa) → static → transformers → null            | Tùy      | Tùy              |

**Thứ tự phân giải cho `auto`:**

1. Tìm nhà cung cấp đầu tiên trong `listEmbeddingProviders()` có `hasKey === true` → `remote`.
2. Nếu `settings.staticEnabled === true` → `static`.
3. Nếu `settings.transformersEnabled === true` → `transformers`.
4. Nếu không → `null` (hạ cấp xuống tìm kiếm từ khóa FTS5).

Bộ nhớ đệm embedding (`src/lib/memory/embedding/cache.ts`) sử dụng một ánh xạ LRU trong bộ nhớ, với khóa là `${source}:${model}:${dim}:${sha256(text)}`, được giới hạn ở `MEMORY_EMBEDDING_CACHE_MAX` mục (mặc định là 1000) và có TTL là `MEMORY_EMBEDDING_CACHE_TTL_MS` (mặc định là 5 phút). Bộ nhớ đệm này được dùng chung cho tất cả bên gọi trong suốt vòng đời của mỗi tiến trình.

## RRF lai (k=60)

Khi `strategy = "hybrid"` và kho vector khả dụng, quá trình truy xuất sử dụng Reciprocal Rank Fusion để hợp nhất các kết quả FTS5 và vector:

```
RRF(d) = Σ  1 / (k + rank_i(d))      trong đó k = 60 (có thể cấu hình qua MEMORY_RRF_K)
          i
```

Cụ thể:

1. Chạy tìm kiếm FTS5 → danh sách đã xếp hạng `R_fts` (vị trí 1..N).
2. Chạy tìm kiếm vector KNN → danh sách đã xếp hạng `R_vec` (vị trí 1..M).
3. Với mỗi `memoryId` duy nhất:  
   `rrf_score = 1/(60 + fts_rank)` + `1/(60 + vec_rank)` (bằng 0 nếu không có trong danh sách).
4. Sắp xếp theo `rrf_score` giảm dần, sau đó duyệt theo ngân sách token.

RRF được biết đến rộng rãi là có hiệu quả mà không cần chuẩn hóa điểm số giữa các hệ thống truy xuất không đồng nhất. Giá trị mặc định `k=60` xuất phát từ bài báo gốc của Cormack và cộng sự, đồng thời hoạt động tốt với các kho dữ liệu nhỏ (<10k bộ nhớ).

## Điền bù (lười + lập chỉ mục lại)

Khi mô hình embedding thay đổi (được phát hiện qua `embedding_signature`), kho vector sẽ được xây dựng lại và tất cả bộ nhớ hiện có được đánh dấu `needs_reindex = 1` trong bảng `memories`.

**Điền bù lười**: Trong lần truy xuất tiếp theo, mọi bộ nhớ chưa có mục nhập vector sẽ được embedding và chèn vào `vec_memories` trước khi quá trình tìm kiếm chạy. Cách này phân bổ chi phí điền bù qua các yêu cầu thực tế mà không chặn quá trình khởi động.

**Lập chỉ mục lại rõ ràng**: Tab Engine trong `/dashboard/memory` cung cấp nút "Lập chỉ mục lại ngay" để gọi `POST /api/memory/reindex`. Trình xử lý gọi `runReindexBatch()` từ `src/lib/memory/reindex.ts`, xử lý tối đa `limit` mục đang chờ trong mỗi yêu cầu. Có thể thăm dò tiến trình qua `GET /api/memory/engine-status` (`vectorStore.needsReindex`).

Bảng `memory_vec_meta` (migration `083_memory_vec.sql`) lưu trữ:

- `active_dim` — số chiều vector hiện tại (null = chưa được hiệu chỉnh).
- `embedding_signature` — `${source}:${model}:${dim}` được dùng để phát hiện thay đổi.
- `last_reset_at` — dấu thời gian của lần đặt lại toàn bộ gần nhất.
- `vec_loaded` — cờ 0/1 cho biết sqlite-vec có được tải thành công hay không.

## Phần mở rộng cài đặt

Có chín trường embedding và vector trong `MemorySettingsExtended` tại
`src/shared/schemas/memory.ts`, được lưu trữ thông qua `src/lib/db/settings.ts`:

| Trường                   | Kiểu                                               | Mặc định | Mô tả                                                          |
| ------------------------ | -------------------------------------------------- | -------- | -------------------------------------------------------------- |
| `embeddingSource`        | `"remote" \| "static" \| "transformers" \| "auto"` | `"auto"` | Nguồn embedding cần sử dụng                                    |
| `embeddingProviderModel` | `string \| null`                                   | `null`   | Nhà cung cấp/mô hình theo định dạng `provider/model`           |
| `customBaseUrl`          | `string \| null`                                   | `null`   | URL cơ sở của endpoint tương thích OpenAI chỉ cho Memory       |
| `customModelId`          | `string \| null`                                   | `null`   | ID mô hình được gửi đến endpoint tùy chỉnh                     |
| `transformersEnabled`    | `boolean`                                          | `false`  | Chủ động bật Transformers.js (MiniLM, ~400MB)                  |
| `staticEnabled`          | `boolean`                                          | `false`  | Chủ động bật mô hình cục bộ tĩnh potion-base-8M                |
| `rerankEnabled`          | `boolean`                                          | `false`  | Bật bước xếp hạng lại (tăng thêm +200-500ms/yêu cầu)           |
| `rerankProviderModel`    | `string \| null`                                   | `null`   | Nhà cung cấp/mô hình xếp hạng lại ở định dạng `provider/model` |
| `vectorStore`            | `"sqlite-vec" \| "qdrant" \| "auto"`               | `"auto"` | Backend vector cần sử dụng                                     |

Các trường này được cung cấp qua `GET /PUT /api/settings/memory` (schema `MemorySettingsExtendedSchema`).

Đối với nguồn `remote`, Memory cũng chấp nhận các cài đặt tùy chọn `customBaseUrl` và
`customModelId`. Khi kết hợp, chúng sẽ chọn một endpoint `/embeddings` tương thích
OpenAI và mô hình mà không thay đổi registry embedding toàn cục. Endpoint được
chuẩn hóa trước khi sử dụng và được kiểm tra theo chính sách URL gửi đi của nhà cung
cấp: bắt buộc phải dùng HTTP(S), thông tin xác thực được nhúng và chuỗi truy vấn sẽ
bị từ chối, đồng thời các địa chỉ metadata đám mây vẫn bị chặn. Các giá trị trống sẽ
giữ nguyên nhà cung cấp registry đã chọn. Các lỗi được trả về dashboard đều được
lược bỏ thông tin nhạy cảm và thông tin xác thực endpoint không bao giờ được ghi log.

> **VIỆC CẦN LÀM (D20):** Phạm vi `global` (chia sẻ bộ nhớ trên tất cả các khóa API)
> chưa được triển khai trong bản phát hành này. Tính năng này yêu cầu thay đổi schema
> và một đường dẫn truy xuất toàn cục. Theo dõi riêng.

## Các lớp lưu trữ

### Chính: SQLite (bảng `memories`)

Được tạo bởi migration `015_create_memories.sql`:

| Cột                         | Kiểu               | Ghi chú                                                                   |
| --------------------------- | ------------------ | ------------------------------------------------------------------------- |
| `id`                        | `TEXT PRIMARY KEY` | UUID được tạo qua `crypto.randomUUID()`                                   |
| `api_key_id`                | `TEXT NOT NULL`    | Khóa API sở hữu                                                           |
| `session_id`                | `TEXT`             | Phạm vi tùy chọn theo từng cuộc hội thoại                                 |
| `type`                      | `TEXT NOT NULL`    | Một trong `factual`, `episodic`, `procedural`, `semantic`                 |
| `key`                       | `TEXT`             | Khóa upsert ổn định, ví dụ: `preference:i_prefer_python`                  |
| `content`                   | `TEXT NOT NULL`    | Nội dung văn bản thực tế                                                  |
| `metadata`                  | `TEXT`             | Blob JSON (category, extractedAt, source, ...)                            |
| `created_at` / `updated_at` | `TEXT`             | Chuỗi ISO 8601                                                            |
| `expires_at`                | `TEXT`             | Thời điểm hết hạn tùy chọn; `NULL` nghĩa là vĩnh viễn                     |
| `memory_id`                 | `INTEGER UNIQUE`   | Được thêm bởi `023_fix_memory_fts_uuid.sql` để liên kết UUID ↔ rowid FTS5 |

Các chỉ mục: `api_key_id`, `session_id`, `type`, `expires_at`, cùng với chỉ mục
`memory_id` duy nhất.

**Ngữ nghĩa upsert**: `createMemory()` tìm một hàng hiện có với cùng
`(api_key_id, key)` và cập nhật trực tiếp hàng đó khi tìm thấy (hợp nhất `metadata`
bằng phép spread nông). Điều này ngăn bảng tăng trưởng không giới hạn khi các câu
lệnh về tùy chọn được lặp lại.

### Tìm kiếm toàn văn (bảng ảo `memory_fts`)

`022_add_memory_fts5.sql` tạo một bảng ảo FTS5 trên `content` và
`key`. `023_fix_memory_fts_uuid.sql` khắc phục một lỗi thực tế, trong đó khóa chính
UUID không thể liên kết với rowid số nguyên của FTS5 — migration này thêm cột
`memory_id`, tạo lại bảng FTS và kết nối các trigger
(`memory_fts_ai`, `memory_fts_ad`, `memory_fts_au`) để giữ FTS đồng bộ khi
INSERT, DELETE và UPDATE.

Được `retrieval.ts` sử dụng cho các chiến lược `semantic` và `hybrid` (xem bên dưới).
Mã truy xuất kiểm tra bằng `hasTable("memory_fts")` và quay về thứ tự thời gian nếu
bảng FTS bị thiếu hoặc truy vấn FTS phát sinh lỗi.

### Tùy chọn: Qdrant (tầng kho vector 2)

`src/lib/memory/qdrant.ts` triển khai tích hợp Qdrant tùy chọn làm kho vector tầng 2.
Việc truy xuất chỉ được định tuyến đến Qdrant khi bộ chọn engine
`memoryVectorStore === "qdrant"` — giá trị mặc định `"auto"` (và `"sqlite-vec"`)
**không bao giờ** chọn Qdrant. Nút chuyển đổi trong tab Engine đặt **cả hai**
`qdrantEnabled` và `memoryVectorStore` cùng lúc: bật sẽ đặt Qdrant làm kho chính,
tắt sẽ đặt lại thành `"auto"` (#5597 — trước bản sửa lỗi đó, thao tác bật không có
tác dụng vì không có gì ghi vào bộ chọn engine). Nếu không thể kết nối với Qdrant
hoặc Qdrant không trả về kết quả nào, quá trình truy xuất sẽ chuyển sang
sqlite-vec → FTS5.

- `upsertSemanticMemoryPoint()` — nhúng `key + content` bằng mô hình embedding đã cấu hình, đảm bảo collection tồn tại (tạo các vector dùng khoảng cách cosine trong lần sử dụng đầu tiên), rồi upsert một point với payload `{memoryId,
apiKeyId, sessionId, key, content, metadata, createdAtUnix, expiresAtUnix}`.
- `searchSemanticMemory(query, topK, scope)` — nhúng truy vấn, tìm kiếm trong collection với bộ lọc `kind = "omniroute_memory"` và tùy chọn lọc theo `apiKeyId` / `sessionId`. Giới hạn `topK` trong khoảng `[1, 20]`.
- `deleteSemanticMemoryPoint(id)` — xóa một point. Được `deleteMemory()` gọi sau khi hàng SQLite bị xóa (D15).
- `cleanupSemanticMemoryPoints({retentionDays})` — xóa hàng loạt các point có `expiresAtUnix` đã qua hoặc có `createdAtUnix` cũ hơn ngưỡng lưu giữ. Đếm trước để dashboard có thể hiển thị số liệu thực tế.
- `checkQdrantHealth()` — phép kiểm tra sức khỏe `GET /readyz` kèm độ trễ.

UI cài đặt cung cấp cấu hình Qdrant, kiểm tra sức khỏe, kiểm thử tìm kiếm ngữ nghĩa và dọn dẹp trong **tab Engine** của `/dashboard/memory`. Tất cả các route tương ứng bên dưới `src/app/api/settings/qdrant/` đã được kết nối kể từ v3.8.6:

| Route                                   | Phương thức   | Mô tả                                |
| --------------------------------------- | ------------- | ------------------------------------ |
| `/api/settings/qdrant`                  | `GET` / `PUT` | Đọc / cập nhật cài đặt Qdrant        |
| `/api/settings/qdrant/health`           | `GET`         | Kiểm tra hoạt động + độ trễ          |
| `/api/settings/qdrant/search`           | `POST`        | Kiểm thử tìm kiếm ngữ nghĩa          |
| `/api/settings/qdrant/cleanup`          | `POST`        | Xóa các point hết hạn / cũ           |
| `/api/settings/qdrant/embedding-models` | `GET`         | Liệt kê các mô hình embedding có sẵn |

**Ghi chú về hành vi (những gì có thể mong đợi):**

- **Lựa chọn engine** — bật Qdrant trong tab Engine sẽ đặt nó làm kho lưu trữ chính (đặt `memoryVectorStore="qdrant"`); tắt sẽ đặt lại thành `"auto"` (#5597).
- **Không bổ sung dữ liệu cũ** — chỉ các memory được tạo/cập nhật **sau khi** Qdrant được bật mới được ghi vào đó (ghi kép theo kiểu fire-and-forget). Các memory SQLite đã tồn tại từ trước **không** được di chuyển; "Reindex Now" chỉ xây dựng lại chỉ mục sqlite-vec, không phải Qdrant.
- **Kích thước vector được tự động phát hiện** từ embedding thực tế trong lần sử dụng đầu tiên — không có trường kích thước nào cần điền. Việc thay đổi mô hình embedding sau khi một collection đã tồn tại **không** được tự động xử lý: collection hiện có được giữ nguyên, các thao tác ghi/tìm kiếm không khớp kích thước sẽ thất bại và chuyển sang sqlite-vec. Hãy tạo lại collection (dùng tên mới hoặc xóa collection đó trong Qdrant) để chuyển đổi trình tạo embedding.
- **Độ đo khoảng cách** — luôn là **Cosine** (được mã hóa cố định khi tạo collection; không thể cấu hình).
- **Xác thực** — chỉ dùng API key (được gửi dưới dạng header `api-key`; không bắt buộc đối với Docker cục bộ không xác thực). JWT/RBAC không được sử dụng.
- **Các trường cấu hình** — UI cung cấp `host`, `port`, `collection`, `embeddingModel`, `apiKey`. `vectorSize` / `hnswEfConstruct` chỉ có trong env/DB và `vectorSize` không được sử dụng để tạo collection (kích thước được lấy từ embedding).

### Lượng tử hóa vector (int8 — tùy chọn bật, cả hai backend)

Cả hai backend vector đều hỗ trợ **lượng tử hóa int8 tùy chọn bật** để giảm dung lượng bộ nhớ của các vector được lưu trữ (nhỏ hơn khoảng 4 lần so với Float32), với mức suy giảm nhỏ về khả năng truy hồi. Mặc định tính năng này **tắt** trên cả hai backend — các vector giữ nguyên độ chính xác đầy đủ trừ khi được bật rõ ràng.

| Backend    | Cài đặt                         | Kiểu                           | Mặc định | Nơi đọc                                                     |
| ---------- | ------------------------------- | ------------------------------ | -------- | ----------------------------------------------------------- |
| Qdrant     | `qdrantQuantization` (khóa DB)  | `"none" \| "int8" \| "binary"` | `"none"` | `src/lib/memory/qdrant.ts::normalizeQdrantConfig()`         |
| sqlite-vec | `MEMORY_VEC_QUANTIZATION` (env) | `"none" \| "int8"`             | `"none"` | `src/lib/memory/vectorStore.ts::requestedVecQuantization()` |

- **Qdrant** được cấu hình theo từng instance thông qua khóa cài đặt `qdrantQuantization` (được cung cấp dưới dạng trường `quantization` trên `PUT /api/settings/qdrant`). Khi là `"int8"`, `buildQuantizationConfig()` yêu cầu lượng tử hóa vô hướng (`always_ram`, phân vị `0.99`) và các tìm kiếm bật `rescore: true` để các vector có độ chính xác đầy đủ tinh chỉnh tập ứng viên int8.
- Lượng tử hóa **sqlite-vec** **chỉ được cấu hình qua môi trường** (không phải cài đặt DB): đặt `MEMORY_VEC_QUANTIZATION=int8` để lưu các vector cục bộ dưới dạng cột `int8[dim]` thông qua `vec_quantize_int8(?, 'unit')`. Chế độ đã chọn được đưa vào `embedding_signature` (hậu tố `:int8`), vì vậy việc chuyển đổi chế độ sẽ kích hoạt tái lập chỉ mục đầy đủ cho bảng `vec_memories` — cùng một quy trình bổ sung dữ liệu cũ theo cơ chế lazy được sử dụng khi mô hình embedding thay đổi.

## Các loại bộ nhớ

`MemoryType` (`src/lib/memory/types.ts`):

| Loại         | Dùng cho                                                                                      |
| ------------ | --------------------------------------------------------------------------------------------- |
| `factual`    | Sở thích, thông tin ổn định về người dùng, các mẫu hành vi                                    |
| `episodic`   | Các quyết định gắn với một thời điểm cụ thể ("Tôi đã chọn Postgres")                          |
| `procedural` | Bộ nhớ về quy trình / cách thực hiện (được dành riêng; hiện chưa có trình trích xuất tự động) |
| `semantic`   | Dành riêng cho các mục trong kho vector                                                       |

Chiến lược truy xuất của `MemoryConfig` là một trong `exact`, `semantic` hoặc `hybrid`,
và phạm vi là một trong `session`, `apiKey` hoặc `global`. Phạm vi mặc định từ
`getMemorySettings()` là `apiKey`.

## Trích xuất dữ kiện (`extraction.ts`)

Việc trích xuất **dựa trên biểu thức chính quy**, không dựa trên LLM — nó chạy trong tiến trình bằng
`setImmediate()` nên không bao giờ chặn luồng phản hồi:

- **Các mẫu sở thích** → `MemoryType.FACTUAL`
  (ví dụ: `Tôi thích …`, `Tôi thực sự thích …`, `món yêu thích của tôi là …`, `Tôi ghét …`)
- **Các mẫu quyết định** → `MemoryType.EPISODIC`
  (ví dụ: `Tôi sẽ dùng …`, `Tôi đã chọn …`, `Tôi quyết định dùng …`, `Tôi sẽ áp dụng …`)
- **Các mẫu hành vi** → `MemoryType.FACTUAL`
  (ví dụ: `Tôi thường …`, `Tôi luôn …`, `Tôi có xu hướng …`)

Mỗi kết quả khớp được làm sạch (`trim`, thu gọn khoảng trắng, giới hạn ở 500 ký tự),
loại bỏ trùng lặp trong lô thông qua `factKey(category, content)` ổn định và
được lưu bằng `createMemory()` với siêu dữ liệu
`{category, extractedAt, source: "llm_response"}`. Văn bản đầu vào được giới hạn ở
64 KiB (`MAX_EXTRACTION_TEXT_LENGTH`) — khi dài hơn, **phần cuối** của văn bản
được sử dụng để nội dung mới nhất của trợ lý luôn được xét đến.

`extractFactsFromText(text)` được xuất để phục vụ kiểm thử và trả về các dữ kiện có cấu trúc
mà không lưu chúng.

## Truy xuất (`retrieval.ts`)

`retrieveMemories(apiKeyId, config)` là điểm vào chính. Hàm này:

1. Chuẩn hóa và xác thực cấu hình thông qua `MemoryConfigSchema`.
2. Trả về `[]` ngay lập tức khi `enabled` là false hoặc `maxTokens <= 0`.
3. Giới hạn `maxTokens` trong khoảng `[1, 8000]`.
4. Phát hiện bảng `memories` hiện đại có tồn tại hay không (so với bảng `memory`
   cũ) để các cơ sở dữ liệu cũ tiếp tục hoạt động.
5. Xây dựng truy vấn cơ sở với điều kiện bảo vệ hết hạn
   (`expires_at IS NULL OR datetime(expires_at) > datetime('now')`), phạm vi
   phiên tùy chọn và ngưỡng `retentionDays` tùy chọn.
6. Phân nhánh theo chiến lược:
   - **`exact`** (mặc định): theo thứ tự thời gian `ORDER BY created_at DESC LIMIT 100`.
   - **`semantic`**: nếu `config.query` và `memory_fts` tồn tại, thực hiện JOIN
     `memory_fts MATCH ?` và sắp xếp theo thứ hạng FTS; quay lại thứ tự thời gian
     khi FTS trả về 0 hàng.
   - **`hybrid`**: hợp các kết quả FTS (độ liên quan cao hơn) với tập kết quả
     theo thứ tự thời gian, rồi loại bỏ trùng lặp theo id.
7. Tính điểm liên quan theo từ khóa (`getRelevanceScore`) trên
   `content`, `key` và JSON `metadata` khi có truy vấn. Các hàng có
   điểm bằng 0 sẽ bị lọc bỏ.
8. Sắp xếp theo điểm giảm dần, sau đó theo `createdAt` giảm dần.
9. Duyệt danh sách đã xếp hạng và chấp nhận các mục miễn là tổng lũy kế
   `estimateTokens(content)` (≈ `length / 4`) vẫn nằm trong ngân sách. Luôn
   trả về ít nhất một mục khi có bất kỳ kết quả khớp nào.

`estimateTokens` được xuất và sử dụng bởi quá trình truy xuất, tóm tắt và công cụ MCP
`omniroute_memory_search`.

## Tiêm (`injection.ts`)

`injectMemory(request, memories, provider)`:

1. Nối tất cả nội dung bộ nhớ thành một chuỗi `Memory context: …` duy nhất.
2. Chọn chiến lược theo tên nhà cung cấp:
   - **Thông điệp hệ thống** (mặc định cho OpenAI, Anthropic, Gemini, …) — thêm
     một `{role: "system", content: memoryText}` vào trước mọi thông điệp hệ thống
     hiện có để lời nhắc hệ thống của người dùng vẫn được ưu tiên.
   - **Thông điệp người dùng** (dự phòng) — dành cho các nhà cung cấp trong
     `PROVIDERS_WITHOUT_SYSTEM_MESSAGE`: `o1`, `o1-mini`, `o1-preview`,
     `glm`, `glmt`, `glm-cn`, `zai`, `qianfan`. Các nhà cung cấp này từ chối vai trò hệ thống
     và nếu không sẽ trả về lỗi 400 (xem vấn đề #1701 đối với GLM/Zhipu).
3. Ghi nhật ký số lượng, chiến lược và mô hình dưới `memory.injection.injected`.

`providerSupportsSystemMessage(provider)` được xuất để các trình gọi có thể tự
đưa ra quyết định định tuyến. Các nhà cung cấp không xác định mặc định trả về `true`
(cho phép vai trò hệ thống) để đảm bảo an toàn.

## Cài đặt (`settings.ts`)

Cấu hình bộ nhớ được **lưu trữ trong bảng cài đặt của DB**, không phải trong các biến môi trường.
`getMemorySettings()` đọc từ `getSettings()` và lưu kết quả vào bộ nhớ đệm
trong tiến trình; `invalidateMemorySettingsCache()` được tuyến PUT của phần cài đặt gọi
sau khi ghi.

### Các trường cũ (mọi phiên bản)

| Khóa DB               | Kiểu    | Mặc định                                              | Điều khiển trên UI                                       |
| --------------------- | ------- | ----------------------------------------------------- | -------------------------------------------------------- |
| `memoryEnabled`       | boolean | `false` (tắt theo mặc định kể từ v3.8.30)             | Bật/tắt bộ nhớ                                           |
| `memoryMaxTokens`     | integer | `2000` (phạm vi `0–16000`)                            | Ngân sách token cho việc tiêm                            |
| `memoryRetentionDays` | integer | `30` (phạm vi `1–365`)                                | Khoảng thời gian lưu giữ                                 |
| `memoryStrategy`      | enum    | `"hybrid"` (một trong `recent`, `semantic`, `hybrid`) | Chiến lược truy xuất                                     |
| `skillsEnabled`       | boolean | `false`                                               | Bật/tắt việc tiêm kỹ năng theo từng khóa (xem SKILLS.md) |

Lưu ý: chiến lược `"recent"` trên UI ánh xạ tới chiến lược truy xuất `"exact"`
nội bộ thông qua `toMemoryRetrievalConfig()` (theo thứ tự thời gian).

### Các trường mới (v3.8.6, kế hoạch 21 D9)

Xem thêm phần "Mở rộng cài đặt" ở trên để biết mô tả về các trường.

| Khóa DB                     | Trường API               | Mặc định |
| --------------------------- | ------------------------ | -------- |
| `memoryEmbeddingSource`     | `embeddingSource`        | `"auto"` |
| `memoryEmbeddingModel`      | `embeddingProviderModel` | `null`   |
| `memoryTransformersEnabled` | `transformersEnabled`    | `false`  |
| `memoryStaticEnabled`       | `staticEnabled`          | `false`  |
| `memoryRerankEnabled`       | `rerankEnabled`          | `false`  |
| `memoryRerankModel`         | `rerankProviderModel`    | `null`   |
| `memoryVectorStore`         | `vectorStore`            | `"auto"` |

Các khóa DB liên quan đến Qdrant (`qdrantEnabled`, `qdrantHost`, `qdrantPort`,
`qdrantApiKey`, `qdrantCollection` mặc định là `"omniroute_memory"`,
`qdrantEmbeddingModel` mặc định là `"openai/text-embedding-3-small"`) được
`normalizeQdrantConfig()` đọc trong `qdrant.ts`.

### Biến môi trường (v3.8.6)

Sáu biến môi trường tùy chọn điều chỉnh hành vi thời gian chạy của công cụ (được ghi lại trong `.env.example`):

| Biến                            | Mặc định                   | Mô tả                                                                                                                                                          |
| ------------------------------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `MEMORY_EMBEDDING_CACHE_TTL_MS` | `300000`                   | TTL của bộ nhớ đệm embedding (5 phút)                                                                                                                          |
| `MEMORY_EMBEDDING_CACHE_MAX`    | `1000`                     | Số mục tối đa trong bộ nhớ đệm LRU của embedding                                                                                                               |
| `MEMORY_TRANSFORMERS_MODEL`     | `Xenova/all-MiniLM-L6-v2`  | Kho lưu trữ HF cho mô hình Transformers.js                                                                                                                     |
| `MEMORY_STATIC_MODEL`           | `minishlab/potion-base-8M` | Kho lưu trữ HF cho mô hình potion tĩnh                                                                                                                         |
| `MEMORY_STATIC_CACHE_DIR`       | `<DATA_DIR>/embeddings`    | Nơi lưu trữ các mô hình đã tải xuống                                                                                                                           |
| `MEMORY_VEC_TOP_K`              | `20`                       | Top-K mặc định cho tìm kiếm vector                                                                                                                             |
| `MEMORY_RRF_K`                  | `60`                       | Hằng số k của RRF cho tìm kiếm kết hợp                                                                                                                         |
| `MEMORY_VEC_QUANTIZATION`       | `none`                     | Đặt thành `int8` để lưu các vector sqlite-vec cục bộ đã lượng tử hóa (nhỏ hơn khoảng 4 lần; cần chủ động bật). Việc thay đổi chế độ buộc phải lập lại chỉ mục. |

## Tóm tắt (`summarization.ts`)

`summarizeMemories(apiKeyId, sessionId?, maxTokens = 4000)` thu gọn nội dung cũ khi tổng số token đang dùng trong các bộ nhớ của một khóa vượt quá ngân sách. Hàm duyệt các hàng theo thứ tự giảm dần của `created_at`, giữ lại các hàng còn phù hợp với ngân sách và, đối với phần còn lại, thay thế trực tiếp `content` bằng ba câu đầu tiên của nội dung gốc. `tokensSaved` là chênh lệch `estimateTokens` giữa nội dung cũ và nội dung mới.

Quy trình này **khả dụng nhưng không được gọi tự động** trong pipeline trò chuyện hiện tại — hãy gọi nó từ cron, một thao tác quản trị hoặc mã kết nối `MemoryConfig.autoSummarize` nếu bạn cần thu gọn liên tục. Việc mất dữ liệu là một chiều: văn bản gốc sẽ bị ghi đè.

## REST API

Tất cả endpoint đều yêu cầu xác thực quản trị (`requireManagementAuth`).

### Các endpoint bộ nhớ cốt lõi (hiện có + đã cập nhật)

| Phương thức | Đường dẫn            | Mô tả                                                                                                                                                                                        |
| ----------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GET`       | `/api/memory`        | Danh sách phân trang với các bộ lọc: `apiKeyId`, `type`, `sessionId`, `q`, `limit`, `page`, `offset`. Phản hồi bao gồm `stats.total`, `stats.tokensUsed`, `stats.hitRate`, `cacheStats`      |
| `POST`      | `/api/memory`        | Tạo mục nhập (được Zod xác thực: `content`, `key`, tùy chọn `type`, `sessionId`, `apiKeyId`, `metadata`, `expiresAt`). Gọi `createMemory()`, hàm này thực hiện upsert theo `(apiKeyId, key)` |
| `GET`       | `/api/memory/[id]`   | Truy xuất một mục nhập theo UUID                                                                                                                                                             |
| `PUT`       | `/api/memory/[id]`   | Cập nhật các trường của mục nhập (`type`, `key`, `content`, `metadata`). Nội dung yêu cầu: `MemoryUpdatePutSchema`. Đồng thời đồng bộ vector nếu có nguồn embedding.                         |
| `DELETE`    | `/api/memory/[id]`   | Xóa một mục nhập; đồng thời xóa khỏi `vec_memories` (D15) và cố gắng xóa khỏi Qdrant. Trả về 404 khi không tìm thấy.                                                                         |
| `GET`       | `/api/memory/health` | Chạy `verifyExtractionPipeline("health-check")` — quy trình khép kín tạo→liệt kê→xóa. Trả về `{working, latencyMs, error?}`                                                                  |

### Các endpoint công cụ bộ nhớ mới (kế hoạch 21)

| Phương thức | Đường dẫn                         | Mô tả                                                                                                                                                                                      |
| ----------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `POST`      | `/api/memory/retrieve-preview`    | Chạy thử `retrieveMemories` — trả về các kết quả đã xếp hạng kèm điểm số, tầng và số token. Nội dung yêu cầu: `RetrievePreviewSchema`. KHÔNG chèn hoặc sửa đổi bộ nhớ.                     |
| `GET`       | `/api/memory/embedding-providers` | Liệt kê các nhà cung cấp cùng với các mô hình embedding, đồng thời cho biết nhà cung cấp nào đã được cấu hình khóa API.                                                                    |
| `GET`       | `/api/memory/engine-status`       | Trả về trạng thái đầy đủ của công cụ: tầng từ khóa, cách phân giải embedding, số liệu thống kê kho vector, tình trạng Qdrant, cấu hình xếp hạng lại. Cấu trúc: `MemoryEngineStatusSchema`. |
| `POST`      | `/api/memory/summarize`           | Kích hoạt thủ công việc thu gọn bộ nhớ. Nội dung yêu cầu: `MemorySummarizeSchema` (`olderThanDays`, `apiKeyId?`, `dryRun`). Trả về `{candidates, tokensSaved}`.                            |
| `POST`      | `/api/memory/reindex`             | Kích hoạt lập chỉ mục lại vector cho các bộ nhớ có `needs_reindex=1`. Nội dung yêu cầu: `MemoryReindexSchema` (`force`). Trả về `{started, pending}`.                                      |

### Các endpoint cài đặt

| Phương thức | Đường dẫn                               | Mô tả                                                                                                       |
| ----------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `GET`       | `/api/settings/memory`                  | `MemorySettingsExtended` hiện tại đã được chuẩn hóa (7 trường mới + trường cũ)                              |
| `PUT`       | `/api/settings/memory`                  | Cập nhật bất kỳ trường nào từ `MemorySettingsExtendedSchema` (tổng cộng 12 trường)                          |
| `GET`       | `/api/settings/qdrant`                  | Cài đặt Qdrant hiện tại (`QdrantSettingsSchema`)                                                            |
| `PUT`       | `/api/settings/qdrant`                  | Cập nhật cài đặt Qdrant. Nội dung yêu cầu: `QdrantSettingsUpdateSchema`. `apiKey` = chuỗi rỗng sẽ xóa khóa. |
| `GET`       | `/api/settings/qdrant/health`           | Thăm dò khả năng hoạt động của phiên bản Qdrant đã cấu hình. Trả về `QdrantHealthResultSchema`.             |
| `POST`      | `/api/settings/qdrant/search`           | Kiểm thử tìm kiếm ngữ nghĩa trên Qdrant. Nội dung yêu cầu: `QdrantSearchSchema` (`query`, `topK`).          |
| `POST`      | `/api/settings/qdrant/cleanup`          | Xóa các điểm Qdrant tương ứng với bộ nhớ đã hết hạn / cũ.                                                   |
| `GET`       | `/api/settings/qdrant/embedding-models` | Liệt kê các mô hình embedding khả dụng cho Qdrant.                                                          |

Truy vấn danh sách `/api/memory` hỗ trợ phân trang dựa trên `page` (`parsePaginationParams`) **hoặc** `offset` thô — khi có `offset`, tham số này được ưu tiên và một `page` suy ra sẽ được tính toán cho cấu trúc phản hồi.

## Công cụ MCP (`open-sse/mcp-server/tools/memoryTools.ts`)

Khi máy chủ MCP được bật, ba công cụ bộ nhớ được đăng ký:

- `omniroute_memory_search` — `{apiKeyId, query?, type?, maxTokens?, limit?}`
  → bao bọc `retrieveMemories()`. Kể từ v3.8.6 (D16), `strategy` được đọc
  từ `getMemorySettings()` thay vì được mã hóa cứng thành `"exact"`. Nếu
  `query` được cung cấp và `strategy` là `semantic` hoặc `hybrid`, kho vector
  sẽ được sử dụng khi khả dụng.
- `omniroute_memory_add` — `{apiKeyId, sessionId?, type, key, content,
metadata?}` → bao bọc `createMemory()`. Chỉ chấp nhận 4 loại chính thức:
  `factual`, `episodic`, `procedural`, `semantic` (D17).
- `omniroute_memory_clear` — `{apiKeyId, type?, olderThan?}` → liệt kê các
  mục khớp, tùy chọn lọc theo dấu thời gian được tạo trước một thời điểm, sau đó xóa từng mục
  thông qua `deleteMemory()` (đồng thời cũng xóa các vector khỏi sqlite-vec + Qdrant).

Xem [MCP-SERVER.md](./MCP-SERVER.md) để biết chi tiết về phương thức truyền tải và phạm vi.

## Bảng điều khiển (Memory Studio)

`src/app/(dashboard)/dashboard/memory/page.tsx` hiện là một **Studio gồm 3 tab**:

### Tab: Memories

- Thẻ khái niệm (phần giải thích "Cách thức hoạt động" có thể thu gọn).
- Danh sách theo thời gian thực, tìm kiếm và phân trang (chống dội 300 ms).
- Bộ lọc loại (`factual` / `episodic` / `procedural` / `semantic` / tất cả).
- Hộp thoại thêm bộ nhớ (khóa, nội dung, loại).
- Chỉnh sửa trực tiếp (nút bút chì → `PUT /api/memory/[id]`).
- Xóa từng hàng (kèm hộp thoại xác nhận).
- Xuất trang hiện tại dưới dạng JSON; nhập JSON thông qua trình chọn tệp.
- Thẻ thống kê: `totalEntries`, `tokensUsed`, `hitRate`.
- Nút "Thu gọn dữ liệu cũ" → `POST /api/memory/summarize` (lần chạy thử đầu tiên hiển thị
  số lượng ứng viên, sau đó yêu cầu xác nhận).
- Chấm trạng thái màu xanh lục/đỏ dựa trên `GET /api/memory/health`.

### Tab: Playground

- Ô nhập truy vấn + bộ chọn chiến lược (Chính xác / Ngữ nghĩa / Kết hợp) + ngân sách token.
- "Mô phỏng" → `POST /api/memory/retrieve-preview` — hiển thị kết quả được xếp hạng cùng
  `score`, `tier`, `tokens`, `vecScore`, `ftsScore`.
- Bảng phân giải hiển thị nguồn embedding / kho vector nào đã được sử dụng và
  liệu có xảy ra chuyển sang phương án dự phòng hay không.

### Tab: Engine

- Bảng trạng thái engine (chip FTS5 từ khóa, chip embedding, chip kho vector,
  chip tình trạng Qdrant, chip xếp hạng lại).
- Nút "Lập chỉ mục lại ngay" → `POST /api/memory/reindex`.
- Bộ chọn nguồn embedding (tự động / từ xa / tĩnh / transformers + các nút bật/tắt).
- Thẻ cấu hình Qdrant (bật/tắt, máy chủ/cổng/bộ sưu tập/khóa, kiểm tra kết nối,
  kiểm tra tìm kiếm ngữ nghĩa, dọn dẹp).
- Thẻ cấu hình xếp hạng lại (bật/tắt, bộ chọn nhà cung cấp/mô hình).

Các thiết lập Bộ nhớ và Qdrant cũng nằm trong
`/dashboard/settings → Memory & Skills` (`MemorySkillsTab.tsx`) dành cho
giao diện thiết lập toàn cục/cũ.

## Bộ nhớ đệm

`src/lib/memory/store.ts` duy trì một bộ nhớ đệm trong tiến trình theo kiểu LRU
(`MEMORY_CACHE_TTL = 1 min`, `MEMORY_MAX_CACHE_SIZE = 500`, loại bỏ 20 %
mục cũ nhất) cho các lần đọc `getMemory(id)`, cùng với một lớp `memoryCache`
khóa/giá trị đa dụng (`src/lib/memory/cache.ts`) có các phương thức `get`/`set`/`invalidate`
được sử dụng bởi các thành phần gọi muốn có bộ nhớ đệm theo phạm vi riêng (LRU 1 000 mục,
TTL mặc định 5 min).

## Quyền riêng tư & Vòng đời

- Quyền sở hữu bộ nhớ là id của khóa API (`resolveMemoryOwnerId` trong
  `chatCore.ts`). Nếu không có `apiKeyInfo.id`, quá trình truy xuất, chèn
  và trích xuất đều không chạy.
- Các mục có `expires_at` trong tương lai sẽ bị lọc khỏi kết quả truy xuất; các
  mục cũ vượt quá `retentionDays` sẽ bị loại trừ bởi mệnh đề
  `created_at >= cutoff` trong `retrieveMemories`.
- Để xóa vĩnh viễn, hãy sử dụng `DELETE /api/memory/[id]` hoặc `omniroute_memory_clear`.
- Quá trình trích xuất chạy theo kiểu không chờ kết quả thông qua `setImmediate`; các lỗi được ghi nhật ký dưới
  `memory.extraction.background.failed` và không bao giờ được trả về cho bên gọi.
- Các vòng kiểm tra khứ hồi (`verifyExtractionPipeline`) tự dọn dẹp
  các mục kiểm thử của chúng trong khối `finally`.

## Xem thêm

- [SKILLS.md](./SKILLS.md) — cài đặt `skillsEnabled` chèn các định nghĩa công cụ
  cùng với bộ nhớ.
- [MCP-SERVER.md](./MCP-SERVER.md) — phương thức truyền tải / phạm vi MCP.
- [API_REFERENCE.md](../reference/API_REFERENCE.md) — phạm vi API rộng hơn.
- Các mô-đun nguồn:
  - `src/lib/memory/types.ts`, `schemas.ts`
  - `src/lib/memory/store.ts`, `retrieval.ts`, `injection.ts`, `reindex.ts`
  - `src/lib/memory/extraction.ts`, `summarization.ts`, `verify.ts`
  - `src/lib/memory/settings.ts`, `qdrant.ts`, `cache.ts`
  - `src/lib/memory/vectorStore.ts` — sqlite-vec + RRF lai
  - `src/lib/memory/embedding/index.ts` — lớp embedding đa nguồn
  - `src/lib/memory/embedding/types.ts`, `remote.ts`, `staticPotion.ts`,
    `transformersLocal.ts`, `cache.ts`
  - `src/shared/schemas/memory.ts` — các schema Zod cho tất cả phần thân API bộ nhớ
  - `src/shared/schemas/qdrant.ts` — các schema Zod cho cài đặt/thao tác Qdrant
  - `src/lib/db/memoryVec.ts` — CRUD cho `memory_vec_meta`
  - `src/lib/db/migrations/015_create_memories.sql`,
    `022_add_memory_fts5.sql`, `023_fix_memory_fts_uuid.sql`,
    `083_memory_vec.sql`
  - `src/app/api/memory/route.ts`, `[id]/route.ts`, `health/route.ts`
  - `src/app/api/memory/retrieve-preview/route.ts`
  - `src/app/api/memory/engine-status/route.ts`
  - `src/app/api/memory/embedding-providers/route.ts`
  - `src/app/api/memory/summarize/route.ts`
  - `src/app/api/memory/reindex/route.ts`
  - `src/app/api/settings/memory/route.ts`
  - `src/app/api/settings/qdrant/route.ts` + các tuyến con
  - `src/app/(dashboard)/dashboard/memory/` — giao diện Studio (trang + thành phần +
    tab + hook)
  - `open-sse/handlers/chatCore.ts` (kết nối chèn / trích xuất)
  - `open-sse/mcp-server/tools/memoryTools.ts`

---

## Chọn nhà cung cấp Embedding (v3.8.16+)

Công cụ bộ nhớ của OmniRoute hỗ trợ **bốn nguồn embedding** (`src/lib/memory/embedding/`). Mỗi nguồn có sự đánh đổi khác nhau về **độ trễ, chi phí, chất lượng mô hình và độ phức tạp khi thiết lập**.

### Các nguồn Embedding

| Nhà cung cấp   | Nguồn                                         | Độ trễ                                          | Chi phí             | Chất lượng                                                   | Thiết lập                               |
| -------------- | --------------------------------------------- | ----------------------------------------------- | ------------------- | ------------------------------------------------------------ | --------------------------------------- |
| `transformers` | Mô hình ONNX cục bộ (Xenova/all-MiniLM-L6-v2) | ~50-150ms (CPU)                                 | Miễn phí            | Tốt                                                          | Chỉ cần `npm install`                   |
| `static`       | Vector được tính toán trước (được lưu đệm)    | <1ms                                            | Miễn phí            | Không áp dụng (phụ thuộc vào việc tìm thấy trong bộ nhớ đệm) | Không cần                               |
| `remote`       | API OpenAI / Cohere / Voyage                  | ~100-300ms                                      | $0.02-0.10/1M token | Xuất sắc                                                     | Khóa API                                |
| `auto`         | Chọn nguồn tốt nhất hiện có khi chạy          | Giống nguồn được chọn                           | Miễn phí            | Giống nguồn được chọn                                        | Không cần                               |
| _(bộ nhớ đệm)_ | Lớp LRU trong bộ nhớ trên bất kỳ nguồn nào    | <1ms (tìm thấy), độ trễ đầy đủ (không tìm thấy) | Miễn phí            | Giống nguồn cơ sở                                            | Luôn bật (không phải nguồn có thể chọn) |

### Cây quyết định

```
                  Ngữ cảnh triển khai của bạn là gì?
                  │
      ┌───────────┼───────────┬──────────────┐
      │           │           │              │
  DEV/TEST    PROD NHỎ     PROD LỚN      EDGE / OFFLINE
      │           │           │              │
      ▼           ▼           ▼              ▼
  transformers transformers remote (Qdrant) transformers
  (miễn phí, không cần API)  (chất lượng tốt nhất) (không cần Internet)
      │           │           │              │
      └────────┬──┴───────────┴──────────────┘
               │
               ▼
            LUÔN thêm lớp `cache` ở trên cùng
            (`LruCache` bao bọc mọi nhà cung cấp)
```

### Cấu hình Cơ sở dữ liệu & API

Các tùy chọn embedding bộ nhớ được cấu hình thông qua API/giao diện Cài đặt, không phải bằng biến môi trường. Các khóa cơ sở dữ liệu cài đặt liên quan trong Cài đặt (`normalizeMemorySettings` trong `src/lib/memory/settings.ts`) là:

- `memoryEmbeddingSource`: `"transformers"` (cục bộ), `"remote"` (dựa trên API, ví dụ: OpenAI), `"static"` (kho lưu trữ bên ngoài) hoặc `"auto"`
- `memoryEmbeddingProviderModel`: Mã định danh mô hình cho các nguồn remote/static (ví dụ: `"text-embedding-3-small"`)
- `memoryTransformersEnabled`: `true` | `false`
- `memoryStaticEnabled`: `true` | `false`
- `memoryVectorStore`: `"sqlite-vec"`, `"qdrant"` hoặc `"auto"`

#### Mô hình cục bộ (`transformers`)

Sử dụng transformers.js nội bộ để chạy các mô hình cục bộ:

```bash
# Các biến môi trường được đọc trong mã nguồn (src/lib/memory/embedding/index.ts):
MEMORY_TRANSFORMERS_MODEL=Xenova/all-MiniLM-L6-v2  # Kho mô hình HF
MEMORY_STATIC_MODEL=minishlab/potion-base-8M       # Mô hình potion tĩnh HF
MEMORY_STATIC_CACHE_DIR=<DATA_DIR>/embeddings      # Thư mục bộ nhớ đệm
```

#### Bộ nhớ đệm Embedding LRU

Bộ nhớ đệm luôn được bật theo mặc định và được cấu hình thông qua các biến môi trường:

```bash
MEMORY_EMBEDDING_CACHE_MAX=1000                    # Số mục được lưu đệm tối đa
MEMORY_EMBEDDING_CACHE_TTL_MS=300000               # TTL (5 phút)
```

### Các số liệu hiệu năng

Điểm chuẩn trên máy chủ x86 4 lõi điển hình (văn bản khoảng 100 token mỗi văn bản):

| Nhà cung cấp         | p50   | p95   | p99   | Chi phí / 1 triệu embedding          |
| -------------------- | ----- | ----- | ----- | ------------------------------------ |
| `transformers` (CPU) | 80ms  | 180ms | 350ms | Miễn phí                             |
| `remote` (OpenAI)    | 120ms | 220ms | 400ms | ~$0.02 (ada-002) / $0.13 (3-large)   |
| `static` (Qdrant)    | 15ms  | 30ms  | 60ms  | Phụ thuộc vào dịch vụ lưu trữ Qdrant |
| `cache` (trúng)      | <1ms  | <1ms  | 2ms   | Miễn phí                             |

---

## Các mẫu trích xuất thông tin (v3.8.16+)

Mô-đun `extraction.ts` (`src/lib/memory/extraction.ts`) sử dụng **đối sánh mẫu bằng biểu thức chính quy** để trích xuất thông tin có cấu trúc từ các tin nhắn hội thoại. Việc hiểu các mẫu này giúp bạn tinh chỉnh chất lượng trích xuất cho trường hợp sử dụng của mình.

### Các danh mục mẫu mặc định

| Danh mục            | Mẫu ví dụ                                                           | Nội dung thu thập                   |
| ------------------- | ------------------------------------------------------------------- | ----------------------------------- |
| PREFERENCE_PATTERNS | `"Tôi thích <X> hơn"`, `"Tôi thích <X>"`, `"Tôi ghét <X>"`          | Sở thích của người dùng             |
| DECISION_PATTERNS   | `"Tôi sẽ dùng <X>"`, `"Tôi đã quyết định <X>"`, `"Tôi đã chọn <X>"` | Quyết định của người dùng (sự kiện) |
| PATTERN_PATTERNS    | `"Tôi thường <X>"`, `"Tôi luôn <X>"`, `"Tôi không bao giờ <X>"`     | Các mẫu hành vi lâu dài             |

### Các mẫu ví dụ (đã đơn giản hóa)

```ts
// Từ src/lib/memory/extraction.ts
const PREFERENCE_PATTERNS = [
  /\bI\s+(?:really\s+)?prefer\s+([^.,\n]+)/gi,
  /\bI\s+(?:really\s+)?like\s+([^.,\n]+)/gi,
  /\bI\s+(?:hate|dislike|avoid)\s+([^.,\n]+)/gi,
];
const DECISION_PATTERNS = [
  /\bI'?(?:ll|will)\s+use\s+([^.,\n]+)/gi,
  /\bI\s+(?:have\s+)?decided\s+(?:to\s+)?([^.,\n]+)/gi,
];
const PATTERN_PATTERNS = [/\bI\s+usually\s+([^.,\n]+)/gi, /\bI\s+always\s+([^.,\n]+)/gi];
```

### Những gì được trích xuất

Khi người dùng nói:

> "Tôi thích TypeScript hơn. Tôi sẽ dùng Postgres cho dự án này. Tôi luôn commit trước khi push. Tôi không thích Python."
> Quá trình trích xuất tạo ra 4 mục nhớ:
>
> | Khóa                                 | Danh mục   | Loại     | Nội dung                 |
> | ------------------------------------ | ---------- | -------- | ------------------------ |
> | `preference:typescript`              | preference | factual  | "TypeScript"             |
> | `decision:postgres_for_this_project` | decision   | episodic | "Postgres cho dự án này" |
> | `pattern:commit_before_pushing`      | pattern    | factual  | "commit trước khi push"  |
> | `preference:python`                  | preference | factual  | "Python"                 |

### Giới hạn trích xuất

Để ngăn việc trích xuất mất kiểm soát, các giới hạn sau được áp dụng:

| Độ dài nội dung tối thiểu | 3 ký tự |
| Độ dài nội dung tối đa | 500 ký tự |

### Khi nào nên tắt tính năng trích xuất

Quá trình trích xuất tự động chạy bất cứ khi nào bộ nhớ được bật; không có công tắc riêng
chỉ dành cho việc trích xuất. Để tắt tính năng này, hãy tắt hoàn toàn bộ nhớ (`enabled: false`
thông qua `PUT /api/settings/memory`). Hãy cân nhắc thực hiện điều này khi:

- Bạn có khối lượng tin nhắn lớn và chi phí trích xuất không phải là không đáng kể
- Các cuộc hội thoại của bạn chủ yếu mang tính tạm thời (trò chuyện, gỡ lỗi) và không có giá trị lâu dài
- Bạn đã thu thập ngữ cảnh thông qua các plugin tùy chỉnh

---

## Tinh chỉnh RRF kết hợp (v3.8.16+)

Thuật toán **Reciprocal Rank Fusion (RRF)** kết hợp các kết quả FTS5 (từ khóa) và vector (ngữ nghĩa). Tham số `k` kiểm soát mức trọng số dành cho các kết quả có thứ hạng thấp hơn.

### Công thức

Đối với mỗi mục nhớ ứng viên, điểm RRF là:

```
RRF(d) = Σ  1 / (k + rank_i(d))
```

Trong đó:

- `k` là hằng số (mặc định là 60)
- `rank_i(d)` là thứ hạng của tài liệu `d` trong hệ thống truy xuất thứ i (FTS, vector)
- Tổng được tính trên tất cả các hệ thống truy xuất

### `k` ảnh hưởng đến kết quả như thế nào

| Giá trị `k`           | Tác động                                                                                                 | Phù hợp nhất khi                              |
| --------------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| `k=0`                 | Hợp nhất thứ hạng thuần túy (không làm mượt)                                                             | Mốc cơ sở lý thuyết                           |
| `k=10-30`             | Đặt trọng số lớn cho các kết quả hàng đầu, thứ hạng thấp hầu như không đóng góp                          | 3 kết quả hàng đầu thường chính xác           |
| **`k=60`** (mặc định) | Cân bằng — 10 kết quả hàng đầu đều đóng góp đáng kể                                                      | Truy xuất đa mục đích                         |
| `k=100+`              | Phẳng hơn — ngay cả kết quả có thứ hạng thấp cũng có thể chiếm ưu thế nếu xuất hiện trong nhiều hệ thống | Khi độ phủ > độ chính xác là yếu tố then chốt |

### Tinh chỉnh `k` trong thực tế

```bash
# Mặc định
MEMORY_RRF_K=60

# Độ chính xác cao (bộ nhớ nhỏ, ít tài liệu)
MEMORY_RRF_K=20

# Độ phủ tối đa (bộ nhớ lớn, truy vấn đa dạng)
MEMORY_RRF_K=120
```

**Ví dụ với `k=20`:**

- FTS hạng 1 → mức đóng góp `1/21 = 0.048`
- FTS hạng 10 → mức đóng góp `1/30 = 0.033`
- Vector hạng 1 → mức đóng góp `0.048`
- Giá trị kết hợp tối đa: `0.096`

**Ví dụ với `k=60`:**

- FTS hạng 1 → mức đóng góp `1/61 = 0.016`
- FTS hạng 10 → mức đóng góp `1/70 = 0.014`
- Vector hạng 1 → mức đóng góp `0.016`
- Giá trị kết hợp tối đa: `0.033`

Với `k` cao hơn, **chênh lệch tương đối** giữa hạng 1 và hạng 10 nhỏ hơn, do đó thuật toán phụ thuộc nhiều hơn vào **sự đồng thuận giữa các hệ thống truy xuất** thay vì độ tin cậy của thứ hạng cao nhất.

### Khi nào nên thay đổi `k`

| Biểu hiện                                               | Thử                                                                         |
| ------------------------------------------------------- | --------------------------------------------------------------------------- |
| Kết quả hàng đầu luôn thắng nhưng lại sai               | **Giảm** k (ví dụ: 20) — độ tin cậy của thứ hạng cao nhất quan trọng hơn    |
| Câu trả lời đúng nằm trong top 5 nhưng không phải top 1 | **Tăng** k (ví dụ: 100) — cách tính điểm phẳng hơn sẽ ưu tiên sự đồng thuận |
| Độ phủ cao nhưng độ chính xác thấp                      | **Giảm** k — làm sắc nét thứ hạng                                           |
| Độ phủ thấp (bỏ sót tài liệu liên quan)                 | **Tăng** k — tạo cơ hội cho các tài liệu có thứ hạng thấp hơn               |

### Trọng số RRF

Phép hợp nhất thứ hạng nghịch đảo sử dụng trọng số bằng nhau cho thứ hạng vector ngữ nghĩa và thứ hạng tìm kiếm toàn văn:

```
RRF(d) = 1/(k + rank_vector) + 1/(k + rank_fts)
```

Không có biến môi trường nào để điều chỉnh từng trọng số riêng lẻ (`MEMORY_RRF_VECTOR_WEIGHT`/`MEMORY_RRF_FTS_WEIGHT` không tồn tại).

---

## Chiến lược tóm tắt (v3.8.16+)

Mô-đun `summarization.ts` (`src/lib/memory/summarization.ts`) nén các ký ức cũ hơn để giữ cho tập đang hoạt động ở mức nhỏ trong khi vẫn duy trì khả năng truy hồi.

### Khi nào quá trình tóm tắt được kích hoạt

| Tác nhân kích hoạt         | Ngưỡng (mặc định) |
| -------------------------- | ----------------- |
| Kích hoạt thủ công qua API | không áp dụng     |

### Nội dung được tóm tắt

Hai điểm vào được xuất từ `summarization.ts`:

- **`summarizeMemories(apiKeyId, sessionId?, maxTokens = 4000)`** — cô đọng các
  ký ức của một phiên thành một văn bản tóm tắt duy nhất, được giới hạn bởi ngân sách token.
- **`summarizeMemoriesOlderThan(apiKeyId, days, dryRun)`** — cơ chế nén dựa trên
  độ tuổi được API sử dụng: hàm này chọn mọi ký ức cũ hơn `days`, tạo
  một ký ức tóm tắt cô đọng từ chúng và (khi `dryRun` là `false`) xóa
  các bản gốc. Truyền `dryRun: true` để xem trước tập ứng viên và tổng số token
  mà không sửa đổi bất kỳ nội dung nào.

Không có bước gom cụm theo thẻ/khóa hoặc chấm điểm "cốt lõi so với có thể tóm tắt" cho từng ký ức —
việc lựa chọn hoàn toàn dựa trên ngưỡng độ tuổi, còn văn bản tóm tắt là một dòng cô đọng
có tiền tố loại cho mỗi ứng viên.

### Kích hoạt quá trình tóm tắt

Việc tóm tắt là **thủ công / tùy chọn** — cài đặt `autoSummarize` mặc định là `false`,
vì vậy không có nội dung nào được tự động nén. Kích hoạt thông qua API:

```bash
curl -X POST http://localhost:20128/api/memory/summarize \
  -H "Authorization: Bearer $OMNIROUTE_KEY"
```

Để tiếp tục tắt tính năng này, chỉ cần giữ `autoSummarize` ở giá trị mặc định (`false`).

### Mẹo cải thiện chất lượng tóm tắt

- **Xem trước bằng `dryRun`** — `summarizeMemoriesOlderThan(..., true)` trả về
  danh sách ứng viên và tổng số token để bạn có thể xác nhận những gì sẽ được hợp nhất
  trước khi xóa các bản gốc.
- **Chạy quá trình tóm tắt vào giờ lưu lượng thấp** nếu bạn có một kho ký ức lớn — lệnh gọi LLM là phần chậm nhất

```bash
# Theo kiểu Cron: tóm tắt hằng ngày lúc 3 giờ sáng
0 3 * * * curl -X POST http://localhost:20128/api/memory/summarize \
  -H "Authorization: Bearer $OMNIROUTE_KEY"
```

---

## Mẫu nhà cung cấp MemoryBackend

> **Nguồn tham chiếu chính xác:** `src/lib/memory/backend.ts`, `src/lib/memory/genericBackend.ts`, `src/lib/memory/manager.ts`
> **Kiểm thử:** `src/lib/memory/__tests__/generic-backend.test.ts`

Mẫu nhà cung cấp MemoryBackend giới thiệu một **lớp trừu tượng backend có thể cắm ghép** trên công cụ ký ức hiện có. Thay vì bị ràng buộc với một cách triển khai lưu trữ duy nhất, hệ thống ký ức giờ đây hỗ trợ nhiều backend (SQLite, Obsidian, Notion, các backend HTTP tùy chỉnh) với cơ chế định tuyến chính/dự phòng có thể cấu hình.

### Kiến trúc

```
┌──────────────────────────────────────────────────────────┐
│                    Các tuyến API                          │
│            (src/app/api/memory/route.ts)                  │
└──────────────────────┬───────────────────────────────────┘
                       │
┌──────────────────────▼───────────────────────────────────┐
│                   MemoryManager                           │
│       Bộ điều phối singleton (manager.ts)                 │
│                                                          │
│  Chính ─────► Backend A  (ví dụ: SQLite)                 │
│  Dự phòng ─► Backend B  (ví dụ: Obsidian)                │
│              Backend C  (ví dụ: Notion qua GenericBackend)│
└──────────────────────┬───────────────────────────────────┘
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
┌────────────┐ ┌────────────┐ ┌──────────────────┐
│ Backend    │ │ Backend    │ │ Backend          │
│ SQLite     │ │ Obsidian   │ │ GenericMemory    │
│            │ │            │ │ (HTTP)           │
└────────────┘ └────────────┘ └──────────────────┘
```

#### Giao diện cốt lõi (`backend.ts`)

Mỗi backend phải triển khai giao diện `MemoryBackend`:

```typescript
interface MemoryBackend {
  readonly id: string;
  readonly displayName: string;

  // CRUD
  create(input: CreateMemoryInput): Promise<Memory>;
  get(id: string): Promise<Memory | null>;
  update(id: string, updates: Partial<...>): Promise<boolean>;
  delete(id: string): Promise<boolean>;
  list(filter: MemoryFilter): Promise<{ data: Memory[]; total: number; byType: Record<string, number> }>;

  // Tìm kiếm
  search(config: SearchConfig): Promise<Memory[]>;

  // Tình trạng hoạt động
  health(): Promise<HealthCheckResult>;

  // Vòng đời (không bắt buộc)
  initialize?(): Promise<void>;
  shutdown?(): Promise<void>;
}
```

#### MemoryManager (`manager.ts`)

Bộ điều phối singleton có chức năng:

- **Đăng ký** các backend qua `register(backend)` — được gọi khi khởi động từ `index.ts`
- **Cấu hình** backend chính + dự phòng qua `configure(primary, fallbacks)`
- **Định tuyến** các thao tác CRUD/tìm kiếm đến backend chính, với chuỗi dự phòng khi xảy ra lỗi
- **Kiểm tra tình trạng hoạt động** của tất cả backend theo định kỳ

**Hành vi dự phòng:**

| Thao tác | Backend chính              | Các backend dự phòng         |
| -------- | -------------------------- | ---------------------------- |
| `create` | ✅ Chỉ backend chính       | ❌                           |
| `get`    | ✅ Thử backend chính trước | ✅ Dự phòng nếu là null      |
| `update` | ✅ Chỉ backend chính       | ✅ Đồng bộ không chờ kết quả |
| `delete` | ✅ Chỉ backend chính       | ✅ Đồng bộ không chờ kết quả |
| `list`   | ✅ Chỉ backend chính       | ❌                           |
| `search` | ✅ Backend chính trước     | ✅ Dự phòng khi xảy ra lỗi   |

#### GenericMemoryBackend (`genericBackend.ts`)

Một trình kết nối HTTP tổng quát giúp điều chỉnh bất kỳ REST API nào thành một MemoryBackend. Hữu ích cho:

- **Notion** — kết nối qua Notion API
- **Obsidian** — kết nối qua Obsidian Local REST API
- **Các backend tùy chỉnh** — bất kỳ dịch vụ nào cung cấp một RESTful memory API

**Cấu hình:**

```typescript
interface GenericBackendConfig {
  baseUrl: string;           // URL cơ sở của API backend
  apiKey?: string;           // Bearer token để xác thực
  headers?: Record<string, string>;  // Các HTTP header tùy chỉnh
  timeout?: number;          // Thời gian chờ yêu cầu (mặc định: 30000ms)
  backendType?: string;      // Dùng để ghi log

  // Ghi đè endpoint (mặc định sử dụng các quy ước REST)
  endpoints?: {
    search?: string;   // mặc định: "/memories/search"
    create?: string;   // mặc định: "/memories"
    list?: string;     // mặc định: "/memories"
    get?: string;      // mặc định: "/memories/{id}"
    update?: string;   // mặc định: "/memories/{id}"
    delete?: string;   // mặc định: "/memories/{id}"
    health?: string;   // mặc định: "/health"
  };

  // Ánh xạ tên tham số truy vấn
  queryParams?: {
    query?/apiKeyId?/limit?/offset?/strategy?/maxTokens?/type?/sessionId?/orderBy?/orderDir?/options?
  };

  // Ánh xạ tên tham số đường dẫn
  pathParams?: {
    id?/memoryId?
  };
}
```

**Các backend đã biết** được cấu hình sẵn trong `KNOWN_BACKENDS`:

```typescript
createKnownBackend("obsidian"); // → GenericMemoryBackend trỏ đến localhost:27123
createKnownBackend("notion"); // → GenericMemoryBackend trỏ đến api.notion.com/v1
```

#### Các backend tích hợp sẵn

##### SQLiteBackend (`sqliteBackend.ts`)

Backend chính mặc định. Bao bọc kho lưu trữ bộ nhớ dựa trên SQLite hiện có bằng cách sử dụng `src/lib/memory/store.ts`. Được đăng ký tự động khi khởi động.

```typescript
import { sqliteBackend } from "./sqliteBackend";
memoryManager.register(sqliteBackend);
```

##### ObsidianBackend (`obsidianBackend.ts`)

Bao bọc tích hợp Obsidian hiện có (`src/lib/memory/obsidianBackend.ts`). Kết nối với một kho Obsidian thông qua Obsidian Local REST API.

### Cài đặt

Các cài đặt backend bộ nhớ được lưu trong bảng cài đặt của ứng dụng và được quản lý thông qua `src/lib/memory/settings.ts`:

| Cài đặt          | Khóa Env/Cấu hình        | Mặc định   | Mô tả                                    |
| ---------------- | ------------------------ | ---------- | ---------------------------------------- |
| Backend chính    | `memoryPrimaryBackend`   | `"sqlite"` | ID của backend chính                     |
| Backend dự phòng | `memoryFallbackBackends` | `[]`       | Các ID backend dự phòng theo thứ tự      |
| Cấu hình backend | `memoryBackendConfigs`   | `{}`       | Các giá trị ghi đè cấu hình theo backend |

Các cài đặt được chuẩn hóa thông qua `normalizeMemorySettings()` và được lưu vào bộ nhớ đệm tại `getMemorySettings()`.

### Luồng khởi tạo

```
Khởi động ứng dụng
  → index.ts được import (tác dụng phụ): đăng ký SQLiteBackend
  → initMemoryBackends() được gọi từ vòng đời ứng dụng:
      1. Tải cài đặt (getMemorySettings)
      2. Cấu hình backend chính + dự phòng
      3. Khởi tạo tất cả backend (kiểm tra trạng thái)
      4. Sẵn sàng xử lý yêu cầu
```

### Thêm một backend mới

1. **Triển khai giao diện `MemoryBackend`** trong `src/lib/memory/<name>Backend.ts`
2. **Export** từ `src/lib/memory/index.ts`
3. **Đăng ký** bằng `memoryManager.register(yourBackend)` khi khởi động
4. **Cấu hình** thông qua cài đặt: đặt `memoryPrimaryBackend` thành ID backend của bạn
5. **Kiểm thử** với `src/lib/memory/__tests__/generic-backend.test.ts` làm tài liệu tham khảo

#### Ví dụ: Backend Brain

```typescript
import { createGenericMemoryBackend } from "./genericBackend";

const brainBackend = createGenericMemoryBackend("brain", "BK-Brain", {
  baseUrl: process.env.BRAIN_API_URL || "http://localhost:9099",
  apiKey: process.env.BRAIN_API_KEY,
  endpoints: {
    search: "/api/memory/search",
    create: "/api/memory",
    health: "/api/health",
  },
});

memoryManager.register(brainBackend);
```

### Xác minh

#### Kiểm thử đơn vị

```bash
npx vitest run src/lib/memory/__tests__/generic-backend.test.ts --reporter=verbose
```

Kết quả mong đợi: **35 kiểm thử, tất cả đều thành công**, bao gồm:

- Hàm khởi tạo (2)
- Kiểm tra trạng thái (4) — thành công, lỗi 500, lỗi mạng, độ trễ
- Khởi tạo (2) — thành công, thất bại
- Tạo (2) — endpoint mặc định, endpoint tùy chỉnh
- Lấy (4) — thành công, 404 → null, lỗi khác 404 được ném ra, tham số đường dẫn tùy chỉnh
- Cập nhật (2) — thành công, 404 → false
- Xóa (2) — thành công, 404 → false
- Liệt kê (2) — tham số truy vấn, tên tham số tùy chỉnh
- Tìm kiếm (3) — tham số truy vấn, endpoint tùy chỉnh, tuần tự hóa tùy chọn
- Header xác thực (2) — Bearer token, header tùy chỉnh
- Factory (1)

#### Kiểm tra kiểu

```bash
npm run typecheck:core
```

Mong đợi: **0 lỗi**.
