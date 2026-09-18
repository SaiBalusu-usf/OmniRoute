# Extending the Compression Pipeline (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../compression/EXTENDING_COMPRESSION.md) · 🇪🇹 [am](../../../am/docs/compression/EXTENDING_COMPRESSION.md) · 🇸🇦 [ar](../../../ar/docs/compression/EXTENDING_COMPRESSION.md) · 🇦🇿 [az](../../../az/docs/compression/EXTENDING_COMPRESSION.md) · 🇧🇬 [bg](../../../bg/docs/compression/EXTENDING_COMPRESSION.md) · 🇧🇩 [bn](../../../bn/docs/compression/EXTENDING_COMPRESSION.md) · 🇨🇿 [cs](../../../cs/docs/compression/EXTENDING_COMPRESSION.md) · 🇩🇰 [da](../../../da/docs/compression/EXTENDING_COMPRESSION.md) · 🇩🇪 [de](../../../de/docs/compression/EXTENDING_COMPRESSION.md) · 🇬🇷 [el](../../../el/docs/compression/EXTENDING_COMPRESSION.md) · 🇪🇸 [es](../../../es/docs/compression/EXTENDING_COMPRESSION.md) · 🇪🇪 [et](../../../et/docs/compression/EXTENDING_COMPRESSION.md) · 🇮🇷 [fa](../../../fa/docs/compression/EXTENDING_COMPRESSION.md) · 🇫🇮 [fi](../../../fi/docs/compression/EXTENDING_COMPRESSION.md) · 🇫🇷 [fr](../../../fr/docs/compression/EXTENDING_COMPRESSION.md) · 🇮🇪 [ga](../../../ga/docs/compression/EXTENDING_COMPRESSION.md) · 🇮🇳 [gu](../../../gu/docs/compression/EXTENDING_COMPRESSION.md) · 🇳🇬 [ha](../../../ha/docs/compression/EXTENDING_COMPRESSION.md) · 🇮🇱 [he](../../../he/docs/compression/EXTENDING_COMPRESSION.md) · 🇮🇳 [hi](../../../hi/docs/compression/EXTENDING_COMPRESSION.md) · 🇭🇷 [hr](../../../hr/docs/compression/EXTENDING_COMPRESSION.md) · 🇭🇺 [hu](../../../hu/docs/compression/EXTENDING_COMPRESSION.md) · 🇦🇲 [hy](../../../hy/docs/compression/EXTENDING_COMPRESSION.md) · 🇮🇩 [id](../../../id/docs/compression/EXTENDING_COMPRESSION.md) · 🇳🇬 [ig](../../../ig/docs/compression/EXTENDING_COMPRESSION.md) · 🇮🇹 [it](../../../it/docs/compression/EXTENDING_COMPRESSION.md) · 🇯🇵 [ja](../../../ja/docs/compression/EXTENDING_COMPRESSION.md) · 🇬🇪 [ka](../../../ka/docs/compression/EXTENDING_COMPRESSION.md) · 🇰🇭 [km](../../../km/docs/compression/EXTENDING_COMPRESSION.md) · 🇮🇳 [kn](../../../kn/docs/compression/EXTENDING_COMPRESSION.md) · 🇰🇷 [ko](../../../ko/docs/compression/EXTENDING_COMPRESSION.md) · 🇱🇹 [lt](../../../lt/docs/compression/EXTENDING_COMPRESSION.md) · 🇱🇻 [lv](../../../lv/docs/compression/EXTENDING_COMPRESSION.md) · 🇮🇳 [ml](../../../ml/docs/compression/EXTENDING_COMPRESSION.md) · 🇮🇳 [mr](../../../mr/docs/compression/EXTENDING_COMPRESSION.md) · 🇲🇾 [ms](../../../ms/docs/compression/EXTENDING_COMPRESSION.md) · 🇲🇹 [mt](../../../mt/docs/compression/EXTENDING_COMPRESSION.md) · 🇲🇲 [my](../../../my/docs/compression/EXTENDING_COMPRESSION.md) · 🇳🇵 [ne](../../../ne/docs/compression/EXTENDING_COMPRESSION.md) · 🇳🇱 [nl](../../../nl/docs/compression/EXTENDING_COMPRESSION.md) · 🇳🇴 [no](../../../no/docs/compression/EXTENDING_COMPRESSION.md) · 🇮🇳 [or](../../../or/docs/compression/EXTENDING_COMPRESSION.md) · 🇮🇳 [pa](../../../pa/docs/compression/EXTENDING_COMPRESSION.md) · 🇵🇭 [phi](../../../phi/docs/compression/EXTENDING_COMPRESSION.md) · 🇵🇱 [pl](../../../pl/docs/compression/EXTENDING_COMPRESSION.md) · 🇵🇹 [pt](../../../pt/docs/compression/EXTENDING_COMPRESSION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/compression/EXTENDING_COMPRESSION.md) · 🇷🇴 [ro](../../../ro/docs/compression/EXTENDING_COMPRESSION.md) · 🇷🇺 [ru](../../../ru/docs/compression/EXTENDING_COMPRESSION.md) · 🇱🇰 [si](../../../si/docs/compression/EXTENDING_COMPRESSION.md) · 🇸🇰 [sk](../../../sk/docs/compression/EXTENDING_COMPRESSION.md) · 🇸🇮 [sl](../../../sl/docs/compression/EXTENDING_COMPRESSION.md) · 🇷🇸 [sr](../../../sr/docs/compression/EXTENDING_COMPRESSION.md) · 🇸🇪 [sv](../../../sv/docs/compression/EXTENDING_COMPRESSION.md) · 🇰🇪 [sw](../../../sw/docs/compression/EXTENDING_COMPRESSION.md) · 🇮🇳 [ta](../../../ta/docs/compression/EXTENDING_COMPRESSION.md) · 🇮🇳 [te](../../../te/docs/compression/EXTENDING_COMPRESSION.md) · 🇹🇭 [th](../../../th/docs/compression/EXTENDING_COMPRESSION.md) · 🇹🇷 [tr](../../../tr/docs/compression/EXTENDING_COMPRESSION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/compression/EXTENDING_COMPRESSION.md) · 🇵🇰 [ur](../../../ur/docs/compression/EXTENDING_COMPRESSION.md) · 🇺🇿 [uz](../../../uz/docs/compression/EXTENDING_COMPRESSION.md) · 🇳🇬 [yo](../../../yo/docs/compression/EXTENDING_COMPRESSION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/compression/EXTENDING_COMPRESSION.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/compression/EXTENDING_COMPRESSION.md)

---

> **Tóm tắt**: Công cụ nén của OmniRoute có khả năng **cắm ghép** — bạn có thể đăng ký các công cụ tùy chỉnh, cung cấp gói ngôn ngữ cho các ngôn ngữ mới và kết hợp các pipeline xếp chồng. Hướng dẫn này trình bày cách thực hiện.

**Các hướng dẫn liên quan:**

- [COMPRESSION_GUIDE.md](./COMPRESSION_GUIDE.md) — Tổng quan đầy đủ về pipeline
- [COMPRESSION_ENGINES.md](./COMPRESSION_ENGINES.md) — Registry công cụ và các công cụ tích hợp sẵn
- [RTK_COMPRESSION.md](./RTK_COMPRESSION.md) — Công cụ RTK và các bộ lọc tùy chỉnh
- [COMPRESSION_RULES_FORMAT.md](./COMPRESSION_RULES_FORMAT.md) — Tài liệu tham khảo định dạng gói quy tắc

---

## Tổng quan

Hệ thống nén có **3 điểm mở rộng**:

| Điểm mở rộng           | Trường hợp sử dụng                                                               | Độ khó     |
| ---------------------- | -------------------------------------------------------------------------------- | ---------- |
| **Công cụ tùy chỉnh**  | Thêm một thuật toán nén hoàn toàn mới (ví dụ: trình tóm tắt dành riêng cho miền) | Nâng cao   |
| **Gói ngôn ngữ**       | Thêm khả năng hỗ trợ một ngôn ngữ tự nhiên mới (ví dụ: tiếng Hindi, tiếng Ả Rập) | Trung bình |
| **Pipeline xếp chồng** | Kết hợp các công cụ hiện có theo thứ tự tùy chỉnh                                | Cơ bản     |

```
┌─────────────────────────────────────────────────────────────┐
│                      Chiến lược nén                          │
│                                                              │
│   Thông điệp đầu vào ──▶ getEffectiveMode() ──▶ chế độ      │
│                                              │               │
│                      ┌───────────────────────┼──────────┐    │
│                      │         │         │         │    │    │
│                      ▼         ▼         ▼         ▼    │    │
│                   "rtk"    "lite"   "standard" "stacked"    │
│                      │         │         │         │    │    │
│                      ▼         ▼         ▼         ▼    │    │
│                   Công cụ  Công cụ  Công cụ  engines[]      │
│                   RTK      Lite      Caveman  được nối chuỗi │
│                      │         │         │         │    │    │
│                      └─────────┴─────────┴─────────┘    │    │
│                                      │                    │
│                                      ▼                    │
│                                Đầu ra đã nén                │
└─────────────────────────────────────────────────────────────┘

Bộ chọn chiến lược DỰA TRÊN CHẾ ĐỘ: mỗi yêu cầu chọn MỘT chế độ
(rtk / lite / standard / aggressive / ultra / stacked / off).
Chỉ chế độ "stacked" nối nhiều công cụ theo trình tự.
Chế độ tự động kích hoạt mặc định là "lite" (không phải chuỗi ưu tiên 3 tầng).
```

---

## Viết công cụ nén tùy chỉnh

Giao diện công cụ (`open-sse/services/compression/engines/types.ts`) là hợp đồng mà mọi công cụ phải tuân thủ. Giao diện này có 5 phương thức bắt buộc.

### Giao diện `CompressionEngine`

```ts
interface CompressionEngine {
  id: string; // ID công cụ duy nhất
  name: string; // Tên hiển thị
  description: string; // Mô tả ngắn
  icon: string; // Biểu tượng (emoji hoặc URL)
  targets: CompressionEngineTarget[]; // ["messages", "tool_results", "code_blocks"]
  stackable: boolean; // Có thể được sử dụng trong pipeline xếp chồng
  stackPriority: number; // Thứ tự trong pipeline xếp chồng (thấp hơn = sớm hơn)
  metadata: CompressionEngineMetadata;

  apply(body, options?): CompressionResult;
  compress(body, config?): CompressionResult;
  getConfigSchema(): EngineConfigField[];
  validateConfig(config): EngineValidationResult;
}
```

### Ví dụ tối giản: Công cụ xử lý khoảng trắng

Công cụ đơn giản nhất có thể — loại bỏ khoảng trắng thừa khỏi các thông điệp.

````ts
import type { CompressionEngine } from "omniroute/compression/engines/types";
import { registerCompressionEngine } from "omniroute/compression/engines/registry";

function preserveCodeBlocks(text: string): string {
  // Tách theo các dấu phân cách khối mã và giữ nguyên khoảng trắng bên trong chúng
  const parts = text.split(/(```[\s\S]*?```)/);
  return parts
    .map((part) => {
      if (part.startsWith("```")) {
        return part; // Không sửa đổi các khối mã
      }
      return part.replace(/\n{3,}/g, "\n\n"); // Chỉ áp dụng cho văn bản
    })
    .join("");
}

const whitespaceEngine: CompressionEngine = {
  id: "whitespace",
  name: "Whitespace Stripper",
  description: "Removes extra whitespace and blank lines",
  icon: "📝",
  targets: ["messages", "tool_results"],
  stackable: true,
  stackPriority: 100, // Chạy SAU caveman/rtk

  metadata: {
    id: "whitespace",
    name: "Whitespace Stripper",
    description: "Removes extra whitespace and blank lines",
    inputScope: "messages",
    targetLatencyMs: 5,
    supportsPreview: true,
    stable: true,
  },

  apply(body, options) {
    return this.compress(body, options?.config);
  },

  compress(body, config = {}) {
    let originalLength = 0;
    let compressedLength = 0;

    // Duyệt qua mảng thông báo — xử lý cả nội dung chuỗi và nội dung đa phần
    const compressedBody = (body.messages || []).map((msg) => {
      if (typeof msg.content === "string") {
        originalLength += msg.content.length;
        let compressed = msg.content
          .replace(/[ \t]+/g, " ")
          .replace(/\n{3,}/g, "\n\n")
          .replace(/^\s+|\s+$/gm, "");
        compressedLength += compressed.length;
        return { ...msg, content: compressed };
      }
      // Nội dung đa phần: duyệt qua các phần, chỉ nén các phần văn bản
      if (Array.isArray(msg.content)) {
        const newParts = msg.content.map((part) => {
          if (part.type === "text" && typeof part.text === "string") {
            originalLength += part.text.length;
            let compressed = part.text
              .replace(/[ \t]+/g, " ")
              .replace(/\n{3,}/g, "\n\n")
              .replace(/^\s+|\s+$/gm, "");
            compressedLength += compressed.length;
            return { ...part, text: compressed };
          }
          return part; // giữ nguyên image_url, tool_use, v.v.
        });
        return { ...msg, content: newParts };
      }
      return msg;
    });

    return {
      body: { ...body, messages: compressedBody },
      stats: {
        originalTokens: Math.ceil(originalLength / 4),
        compressedTokens: Math.ceil(compressedLength / 4),
        savingsPercent: originalLength > 0 ? 100 * (1 - compressedLength / originalLength) : 0,
        techniques: ["whitespace-collapse"],
        engineId: "whitespace",
      },
    };
  },

  getConfigSchema() {
    return [
      {
        key: "preserveCodeBlocks",
        type: "boolean",
        label: "Preserve code blocks",
        defaultValue: true,
        description: "Don't touch whitespace inside ```code``` blocks",
      },
    ];
  },

  validateConfig(config) {
    if (config.preserveCodeBlocks !== undefined && typeof config.preserveCodeBlocks !== "boolean") {
      return { valid: false, errors: ["preserveCodeBlocks must be a boolean"] };
    }
    return { valid: true, errors: [] };
  },
};

// Đăng ký trên toàn cục
registerCompressionEngine(whitespaceEngine);
````

### Vị trí đặt các engine tùy chỉnh

```
~/.omniroute/compression/engines/my-engine.ts    # Cấp người dùng
<project>/compression-engines/my-engine.ts        # Cấp dự án (được tải khi khởi động)
```

Hoặc tải theo chương trình từ một plugin:

```ts
// Trong plugin của bạn
import {
  registerCompressionEngine,
  unregisterCompressionEngine,
} from "@omniroute/open-sse/services/compression/engines/registry";
import { myEngine } from "./engines/my-engine";

export default definePlugin({
  name: "my-compression-plugin",
  // SDK plugin cung cấp các hook onRequest / onResponse / onError. Đăng ký
  // engine khi mô-đun plugin được tải (hoặc tại onRequest đầu tiên); hủy đăng ký
  // engine đó trong quy trình dọn dẹp của riêng bạn.
  onRequest: async (ctx) => {
    registerCompressionEngine(myEngine);
  },
});

// Khi dọn dẹp:
// unregisterCompressionEngine("my-engine");
```

### Kiểm thử engine của bạn

Đăng ký engine của bạn trong một plugin hoặc hàm khởi động. Sau khi được đăng ký, engine sẽ khả dụng
trong bộ chọn chiến lược thông qua `id` của nó. Kiểm thử khả năng tích hợp bằng cách kết hợp engine trong một pipeline xếp chồng:

---

## Tạo gói ngôn ngữ

Kiểu nén Caveman sử dụng **các gói quy tắc dành riêng cho từng ngôn ngữ** để xử lý từ đệm, cách diễn đạt dè dặt và các mẫu dài dòng trong mỗi ngôn ngữ tự nhiên. OmniRoute đi kèm **6 gói ngôn ngữ**: `en`, `es`, `fr`, `de`, `ja`, `pt-BR`.

### Cấu trúc gói

Gói ngôn ngữ là một thư mục gồm các **tệp JSON** nằm trong `open-sse/services/compression/rules/<language>/`:

```
open-sse/services/compression/rules/
├── en/
│   ├── filler.json          # Lời xã giao, cách diễn đạt dè dặt, lịch sự
│   ├── context.json         # Các quy tắc rút gọn ngữ cảnh
│   ├── dedup.json           # Các quy tắc loại bỏ trùng lặp
│   ├── structural.json      # Dấu câu, định dạng
│   └── ultra.json           # Các quy tắc nén mạnh
├── es/  (cùng cấu trúc)
├── fr/  (cùng cấu trúc)
├── de/  (cùng cấu trúc)
├── ja/  (cùng cấu trúc)
└── pt-BR/ (cùng cấu trúc)
```

### Cấu tạo của quy tắc

Mỗi quy tắc có cấu trúc sau (từ `open-sse/services/compression/ruleLoader.ts`):

```ts
interface FileRule {
  name: string; // Tên dễ đọc đối với con người (kebab-case)
  pattern: string; // Mẫu biểu thức chính quy JavaScript
  replacement?: string; // Nội dung dùng để thay thế phần khớp
  replacementMap?: Record<string, string>; // HOẶC ánh xạ khóa→nội dung thay thế
  flags?: string; // Các cờ biểu thức chính quy (thường là "gi")
  context?: "all" | "user" | "system" | "assistant";
  category?: "filler" | "context" | "structural" | "dedup" | "terse" | "ultra";
  minIntensity?: "lite" | "full" | "ultra"; // Bỏ qua nếu thấp hơn cường độ này
  description?: string; // Tài liệu
}
```

### Ví dụ: Thêm các quy tắc từ đệm tiếng Hindi

```json
{
  "language": "hi",
  "category": "filler",
  "rules": [
    {
      "name": "polite_opener",
      "pattern": "\\b(?:नमस्ते|नमस्कार|आदरणीय)\\b[,!\\s]*",
      "replacement": "",
      "context": "all",
      "category": "filler",
      "minIntensity": "lite",
      "description": "Strip polite openers like 'नमस्ते'"
    },
    {
      "name": "filler_actually",
      "pattern": "\\b(?:असल में|वास्तव में|दरअसल)\\b\\s*",
      "replacement": "",
      "context": "all",
      "category": "filler",
      "minIntensity": "lite",
      "description": "Strip 'actually' fillers"
    },
    {
      "name": "verbose_plea",
      "pattern": "\\b(?:कृपया|कृपया आप|अनुरोध है कि आप)\\b\\s*",
      "replacement": "",
      "context": "all",
      "category": "filler",
      "minIntensity": "full",
      "description": "Strip 'please' in Hindi"
    }
  ]
}
```

### Xác thực

Các gói quy tắc được xác thực theo `_schema.json` khi tải. Gói có cấu trúc không hợp lệ sẽ không tải được và ghi lỗi vào nhật ký:

```
RULE_LOADER: pack "hi/filler.json" failed validation:
  - rules.0.pattern: Invalid regex
  - rules.1.context: must be one of [all, user, system, assistant]
```

Quá trình xác thực tự động chạy khi một gói được tải (dựa trên `_schema.json`); gói
không hợp lệ sẽ bị từ chối và lỗi ở trên sẽ được ghi vào nhật ký. Không có tập lệnh
`npm run` riêng để xác thực gói — hãy tải gói (ví dụ: khởi động máy chủ hoặc
thực thi luồng nén) và theo dõi nhật ký.

### Tải gói ngôn ngữ tùy chỉnh

```ts
import { loadRulePack } from "omniroute/compression/ruleLoader";

await loadRulePack("./my-custom-rules/hi/filler.json");
```

Hoặc đặt gói tại một vị trí được nhận diện:

```
~/.omniroute/compression/rules/hi/filler.json  # Cấp người dùng
<project>/.compression/rules/hi/filler.json   # Cấp dự án
```

### Các phương pháp hay nhất cho gói ngôn ngữ

1. **Bắt đầu với `filler`** — đây là những quy tắc có tác động lớn nhất
2. **Sử dụng `minIntensity`** để kiểm soát các quy tắc mạnh — giúp tránh nén quá mức
3. **Bao gồm các trường hợp kiểm thử** — thêm mảng `tests[]` vào JSON để xác minh hành vi
4. **Thứ tự rất quan trọng** — các quy tắc đứng trước được áp dụng trước; hãy đặt các quy tắc có tác động lớn lên đầu
5. **Thận trọng với `replacement`** — chuỗi rỗng thường là lựa chọn chính xác; không bao giờ đưa vào nội dung mới

### Chiến lược dịch thuật

Khi bản địa hóa các gói quy tắc sang một ngôn ngữ mới:

1. **Dịch tên quy tắc** — chúng xuất hiện trong đầu ra gỡ lỗi
2. **Điều chỉnh các mẫu biểu thức chính quy** — dịch trực tiếp thường không hiệu quả (ranh giới từ khác nhau)
3. **Kiểm thử với các cuộc hội thoại thực tế** — gói phải an toàn khi áp dụng cho dữ liệu đầu vào thực tế
4. **Phù hợp với các quy ước văn hóa** — chẳng hạn, các gói tiếng Nhật có nhiều từ đệm kính ngữ hơn tiếng Anh

---

## Pipeline xếp chồng

Một **pipeline xếp chồng** chạy tuần tự nhiều engine, trong đó đầu ra của mỗi engine được chuyển thành đầu vào cho engine tiếp theo. Đây là cách `mode: stacked` hoạt động nội bộ.

### Cách hoạt động của cơ chế xếp chồng

```
Đầu vào (10,000 token)
        │
        ▼
   ┌──────────┐
   │  Engine  │  mức ưu tiên 10
   │  A       │  ──▶ đầu ra: 6,000 token (-40%)
   └────┬─────┘
        ▼
   ┌──────────┐
   │  Engine  │  mức ưu tiên 50
   │  B       │  ──▶ đầu ra: 2,400 token (-60%)
   └────┬─────┘
        ▼
   ┌──────────┐
   │  Engine  │  mức ưu tiên 100
   │  C       │  ──▶ đầu ra: 1,200 token (-80%)
   └────┬─────┘
        │
        ▼
Đầu ra cuối cùng (1,200 token, tổng mức tiết kiệm ~88%)
```

Khi `mode: "stacked"` được chọn, các engine thực thi tuần tự theo thứ tự được chỉ định trong mảng `pipeline`.
Đầu ra của engine N trở thành đầu vào của engine N+1.

### Các chế độ nén

OmniRoute chọn **MỘT chế độ cho mỗi yêu cầu** dựa trên cấu hình, các ngưỡng kích hoạt tự động và các giá trị ghi đè của combo.
Các chế độ khả dụng được định nghĩa trong `open-sse/services/compression/types.ts` (kiểu `CompressionMode`):

| Chế độ       | Engine               | Trường hợp sử dụng                                                                                                                                                                                                   |
| ------------ | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `off`        | Không có             | Tắt toàn bộ cơ chế nén                                                                                                                                                                                               |
| `rtk`        | Chỉ RTK              | Các phiên chứa nhiều đầu ra lệnh (tiết kiệm 80%+)                                                                                                                                                                    |
| `lite`       | Chỉ Lite             | Nén thận trọng (nhanh, an toàn)                                                                                                                                                                                      |
| `standard`   | Caveman              | Nén văn xuôi bằng các gói ngôn ngữ                                                                                                                                                                                   |
| `aggressive` | Caveman + Aggressive | Nén mạnh văn xuôi + lượt xử lý cuối mạnh                                                                                                                                                                             |
| `ultra`      | Ultra                | Mức nén tối đa (có mất mát, giải pháp cuối cùng). Có thể được định tuyến qua engine SLM **LLMLingua-2** khi `ultra.modelPath` được thiết lập (tự chuyển sang quy trình dựa trên quy tắc khi mô hình không khả dụng). |
| `stacked`    | Pipeline tùy chỉnh   | Kết hợp các engine theo thứ tự bất kỳ (xem bên dưới)                                                                                                                                                                 |

> Ngoài các engine theo chế độ ở trên, registry còn cung cấp các engine chuyên biệt có thể xếp chồng —
> **CCR**, **headroom**, **ionizer** và **session-dedup** — được ghi lại trong
> [COMPRESSION_ENGINES.md](./COMPRESSION_ENGINES.md#additional-built-in-engines).

Việc chọn chế độ được xác định bởi `getEffectiveMode()` trong `open-sse/services/compression/strategySelector.ts`:

1. Nếu tính năng nén bị tắt: `"off"`
2. Nếu có giá trị ghi đè của combo: sử dụng giá trị ghi đè
3. Nếu vượt quá ngưỡng kích hoạt tự động: sử dụng `autoTriggerMode` (mặc định: `"lite"`)
4. Nếu không: sử dụng `defaultMode`

### Pipeline xếp chồng mặc định

Khi `mode: "stacked"` được cấu hình rõ ràng, pipeline mặc định kết hợp:

1. **RTK** — loại bỏ nhiễu trong đầu ra lệnh (tiết kiệm ~80% đối với đầu ra terminal)
2. **Caveman** — loại bỏ từ ngữ thừa, cô đọng văn xuôi (~46% trên phần văn bản còn lại)
3. **Lite** — lượt xử lý cuối để chuẩn hóa khoảng trắng + loại bỏ nội dung trùng lặp

Cách kết hợp này đạt mức **tiết kiệm 78-95%** trong các phiên sử dụng nhiều công cụ.

### Cấu hình pipeline xếp chồng

Trong cấu hình combo:

```json
{
  "compression": {
    "mode": "stacked",
    "pipeline": [
      { "engine": "rtk", "config": { "intensity": "aggressive" } },
      { "engine": "caveman", "config": { "intensity": "full" } },
      { "engine": "lite", "config": {} }
    ]
  }
}
```

Bạn có thể bỏ bớt engine, thêm engine tùy chỉnh hoặc sắp xếp lại chúng.

### Truyền trạng thái

Các engine có thể đọc metadata từ ngữ cảnh yêu cầu (trong `options`):

```ts
compress(body, config) {
  // Đọc metadata từ các engine trước đó
  const original = options?.compressionComboId;  // "my-coding-combo"
  // ...
}
```

Metadata là **chỉ đọc** — các engine không thể thay đổi ngữ cảnh yêu cầu mà chỉ có thể thay đổi đầu ra phần nội dung của chính chúng.

### Những điểm cần lưu ý về thứ tự thực thi

| Thứ tự engine                             | Hiệu ứng                                                                                    |
| ----------------------------------------- | ------------------------------------------------------------------------------------------- |
| RTK → Caveman → Lite                      | **Khuyến nghị** (loại bỏ nhiễu trước, sau đó đến ngôn ngữ, rồi khoảng trắng)                |
| Lite → RTK → Caveman                      | Không tốt — Lite loại bỏ khoảng trắng khỏi đầu ra thô, khiến việc khớp mẫu của RTK thất bại |
| Caveman → RTK                             | Không tốt — Caveman có thể viết lại văn bản theo cách mà RTK không nhận dạng được           |
| Bất kỳ thứ tự nào có `tool_results` trước | Tốt hơn — đầu ra công cụ là nội dung nhiều nhiễu nhất                                       |

### Khi KHÔNG nên xếp chồng

Xếp chồng không phải lúc nào cũng tốt hơn:

- **Thông điệp đơn giản** (không có đầu ra công cụ) — chỉ cần một Caveman hoặc Lite
- **Nhạy cảm về chi phí** — mỗi engine làm tăng độ trễ khoảng ~5-50ms
- **Công cụ cụ thể** — riêng RTK thường đã đủ cho đầu ra shell

### Xây dựng pipeline tùy chỉnh

Không có sổ đăng ký pipeline được đặt tên. Một pipeline xếp chồng chỉ đơn giản là một **mảng bước nội tuyến** được truyền vào `applyStackedCompression()` (được xuất từ `@omniroute/open-sse/services/compression/strategySelector`):

```ts
import { applyStackedCompression } from "@omniroute/open-sse/services/compression/strategySelector";

const result = applyStackedCompression(body, [
  { engine: "rtk", intensity: "aggressive" },
  { engine: "caveman", intensity: "full" },
]);
```

Khi bạn không truyền pipeline, mặc định sẽ là `rtk(standard) → caveman(full)`.

Để điều khiển thông qua cấu hình, hãy đặt `mode: "stacked"` và cung cấp mảng bước trong `stackedPipeline` (được đọc từ `config.stackedPipeline`):

```json
{
  "compression": {
    "mode": "stacked",
    "stackedPipeline": [
      { "engine": "rtk", "intensity": "aggressive" },
      { "engine": "caveman", "intensity": "full" }
    ]
  }
}
```

---

## Chính sách đồng bộ với dự án thượng nguồn

Các công cụ nén của OmniRoute ghi nhận công lao của một số dự án thượng nguồn trong README
("lấy cảm hứng từ RTK, Caveman, LLMLingua-2, Troglodita"). Một câu hỏi phổ biến từ những người đóng góp
là: **khi RTK thượng nguồn bổ sung một bộ lọc công cụ mới hoặc Caveman bổ sung một gói quy tắc,
thay đổi đó được đưa vào OmniRoute như thế nào?** Phần này là câu trả lời chính thức.

### Các bản sao được vendoring so với các bản triển khai độc lập

| Công cụ                      | Mối quan hệ với dự án thượng nguồn                                                                                             | Vị trí                                                              |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| **RTK**                      | **Bản triển khai lại độc lập** (lấy cảm hứng, không phải bản sao)                                                              | `open-sse/services/compression/engines/rtk/`                        |
| **Caveman**                  | **Bản triển khai lại độc lập** (lấy cảm hứng)                                                                                  | `open-sse/services/compression/engines/cavemanAdapter.ts`           |
| **Headroom**                 | Chủ yếu là nội bộ; chỉ codec `gcf/` là **thực sự được vendoring** từ `gcf-typescript` (MIT, có đánh dấu SPDX, chỉ hồ sơ chung) | `open-sse/services/compression/engines/headroom/gcf/`               |
| **LLMLingua-2 / Troglodita** | Lấy cảm hứng (định hướng cho các công cụ `llmlingua` + `session-dedup`)                                                        | `open-sse/services/compression/engines/llmlingua/`, `session-dedup` |

Điểm chính: **RTK và Caveman là các bản triển khai TypeScript theo mô hình phòng sạch của những
_ý tưởng_ (quy tắc bộ lọc, gói quy tắc), không phải các cây mã nguồn được vendoring.** Không có
bản sao thượng nguồn nào để `git pull` — đó chính là lý do README ghi
"lấy cảm hứng từ" thay vì "được đóng gói kèm".

### Cách các cải tiến thượng nguồn được hợp nhất

Theo chủ đích, **không có cơ chế tự động theo dõi bản phát hành thượng nguồn và không có nhãn
`compression-sync`**. Vì các công cụ này là những bản triển khai lại, một bộ lọc RTK hoặc gói quy tắc
Caveman từ thượng nguồn không được hợp nhất dưới dạng mã nguồn; thay vào đó, nó được **biểu đạt lại thành một
quy tắc/bộ lọc mới theo định dạng riêng của OmniRoute** (xem
[COMPRESSION_RULES_FORMAT.md](./COMPRESSION_RULES_FORMAT.md)) và được tích hợp tùy từng trường hợp thông qua
một PR thông thường. Các điểm mở rộng nêu trên (công cụ tùy chỉnh, gói ngôn ngữ, bộ lọc RTK)
là cách được chấp thuận để đóng góp.

Các ví dụ gần đây về chính quy trình này:

- Các bộ lọc RTK cho đầu ra bản dựng Gradle & `dotnet` (v3.8.42)
- Các bộ lọc RTK cho kubectl / docker-build / composer / gh (#2824)
- Gói ngôn ngữ Indonesia cho Caveman (#3975), cùng các gói tiếng Đức / Pháp / Nhật / Trung

### Headroom (proxy nén đầu vào)

Headroom **hoàn toàn là nội bộ** — gồm một ảnh chụp nhanh codec `gcf` được vendoring và ghim phiên bản,
cùng các lớp `smartcrusher` / `toon` / `tabular` riêng của OmniRoute. Không có
dự án thượng nguồn hoạt động nào cần theo dõi ngoài bản sao được vendoring; các bản cập nhật cho `gcf` được làm mới
thủ công khi codec thay đổi và được xác thực lại dựa trên cổng ngân sách nén
(`check:compression-budget`).

### Đề xuất một cải tiến lấy cảm hứng từ dự án thượng nguồn

1. **Không vendoring** — hãy biểu đạt lại quy tắc/bộ lọc thượng nguồn theo định dạng của OmniRoute.
2. Thêm quy tắc/bộ lọc đó thông qua điểm mở rộng tương ứng bên dưới (gói ngôn ngữ, bộ lọc RTK hoặc
   công cụ tùy chỉnh).
3. Dẫn chiếu dự án thượng nguồn trong phần mô tả PR (ghi nhận công lao), thay vì
   sao chép mã nguồn mang giấy phép của dự án đó.
4. Bao gồm các bài kiểm thử và xác nhận rằng cổng `check:compression-budget` vẫn vượt qua.

---

## Thêm một Kiểu Đầu ra

Các kiểu đầu ra (xem [bảng danh mục trong hướng dẫn](./COMPRESSION_GUIDE.md#output-styles-catalog))
là phần tương ứng ở phía phản hồi của các công cụ đầu vào: thay vì nén nội dung bạn
gửi, chúng hướng dẫn mô hình tạo ra đầu ra tiết kiệm hơn. Registry là
`OUTPUT_STYLE_CATALOG` trong `open-sse/services/compression/outputStyles/catalog.ts`, và
**một mục trong danh mục chính là toàn bộ tính năng**: bộ chèn, bảng cài đặt trên dashboard,
cơ chế lưu trữ lâu dài và telemetry đều duyệt qua danh mục — không có danh sách nào khác cần cập nhật.

1. **Thêm một mục vào `OUTPUT_STYLE_CATALOG`** với `id`, `label`, `description` và ba
   `levels` bằng tiếng Anh (`lite`, `full`, `ultra`). Mỗi cấp độ phải kết thúc bằng
   `${SHARED_BOUNDARIES}` để mã nguồn, đường dẫn, lệnh, lỗi và URL được giữ nguyên văn.
   Văn bản hướng dẫn phải **tĩnh và có tính xác định** theo từng
   `(id, level, language)` — `${SHARED_BOUNDARIES}` là phép nội suy duy nhất được phép.
2. **Dịch mục đó.** Cung cấp ít nhất một khối `pt-BR` trong `i18n`; `ponytail` và
   `i-have-adhd` (en, pt-BR, es, de, fr, it, ru, zh, ja, id, vi) là cấu trúc tham chiếu. Một kiểu được chủ ý
   giới hạn ở một ngôn ngữ sẽ đặt `locale` thay thế (như `terse-cjk` → `zh`) và khi đó
   chỉ được cung cấp cho locale đó.
3. **Cập nhật bộ kiểm tra ma trận** — thêm các ngôn ngữ của kiểu vào `BASELINE_LANGUAGES` trong
   `tests/unit/compression/output-styles-i18n-matrix.test.ts`. Cổng kiểm tra sẽ từ chối mọi kiểu mới
   không bị giới hạn theo locale nhưng thiếu các bản dịch bắt buộc, trừ khi kiểu đó có
   một mục `KNOWN_ENGLISH_ONLY` rõ ràng kèm theo issue theo dõi.
4. **Thêm bài kiểm thử riêng cho kiểu** dựa theo
   `tests/unit/compression/i-have-adhd-catalog.test.ts`: cấu trúc danh mục, mệnh đề
   ranh giới cho từng cấp độ và một điểm neo xác nhận rằng mỗi bản dịch được viết bằng
   chính ngôn ngữ tương ứng thay vì sao chép từ tiếng Anh.
5. **Ghi công**: nếu kiểu được chuyển thể từ một dự án thượng nguồn, hãy ghi công trong
   chú thích nguồn tại mục đó (ví dụ: `i-have-adhd` → ayghri/i-have-adhd, MIT) — áp dụng
   cùng quy tắc như phần "Đề xuất một cải tiến lấy cảm hứng từ thượng nguồn" ở trên.

Không cần thay đổi UI, schema hoặc telemetry — các bề mặt đó kết xuất từ danh mục.

---

## Các phương pháp hay nhất

### Phát triển công cụ

1. **Luôn triển khai `validateConfig`** — các công cụ không có bước xác thực sẽ gây ra lỗi âm thầm
2. **Đặt `targetLatencyMs` thực tế** — được bộ chọn chiến lược sử dụng để lựa chọn công cụ
3. **Sử dụng `getConfigSchema` cho dashboard** — không bao giờ ẩn cấu hình khỏi người dùng
4. **Hỗ trợ `stackable: true` nếu công cụ của bạn là thuần túy** — các công cụ có tác dụng phụ không nên được xếp chồng
5. **Viết các bài kiểm thử nội tuyến** — công cụ phải có thể được xác minh trong <1s

### Phát triển gói ngôn ngữ

1. **Bắt đầu với cường độ `lite`** — các quy tắc của bạn phải an toàn ở thiết lập thấp nhất
2. **Sử dụng `context` để giới hạn phạm vi quy tắc** — các quy tắc chỉ áp dụng cho `user` không thể vô tình ảnh hưởng đến prompt hệ thống
3. **Tránh bắt các khóa JSON** — `\\bword\\b` có thể khớp bên trong JSON, làm hỏng dữ liệu có cấu trúc
4. **Kiểm thử với các trường hợp biên** — đầu vào rỗng, unicode, văn bản RTL, emoji
5. **Sử dụng các gói hiện có làm mẫu** — `en/filler.json` là ví dụ được phát triển hoàn thiện nhất

### Thiết kế pipeline

1. **Lập hồ sơ trước khi tối ưu hóa** — trước tiên hãy đo lường bằng `compression_stats`
2. **Ưu tiên kết hợp thay vì triển khai lại** — mở rộng các quy tắc Caveman trước khi viết một công cụ mới
3. **Ghi lại lý do về thứ tự** — chú thích lý do công cụ A đứng trước công cụ B
4. **Kiểm thử ở cả 3 cấp độ cường độ** — `lite` nhanh nhưng dễ làm mất thông tin, `ultra` chậm nhưng chính xác

---

## Tham khảo: Các engine tích hợp sẵn

| ID engine            | Có thể xếp chồng | stackPriority mặc định | Đối tượng áp dụng                  |
| -------------------- | ---------------- | ---------------------- | ---------------------------------- |
| `lite`               | Có               | 5                      | tin nhắn, kết quả công cụ          |
| `rtk`                | Có               | 10                     | kết quả công cụ                    |
| `standard` (caveman) | Có               | 20                     | tin nhắn, kết quả công cụ, khối mã |
| `aggressive`         | Có               | 30                     | tin nhắn                           |
| `ultra`              | Có               | 40                     | tin nhắn, khối mã                  |

### Xem thêm

- [COMPRESSION_GUIDE.md](./COMPRESSION_GUIDE.md) — Tổng quan về pipeline
- [COMPRESSION_ENGINES.md](./COMPRESSION_ENGINES.md) — Tài liệu tham khảo về registry engine
- [COMPRESSION_RULES_FORMAT.md](./COMPRESSION_RULES_FORMAT.md) — Đặc tả định dạng quy tắc
- [COMPRESSION_LANGUAGE_PACKS.md](./COMPRESSION_LANGUAGE_PACKS.md) — Chi tiết về gói ngôn ngữ
- [RTK_COMPRESSION.md](./RTK_COMPRESSION.md) — Engine RTK và các bộ lọc tùy chỉnh
- Nguồn: `open-sse/services/compression/` (117 tệp, ~250KB)
