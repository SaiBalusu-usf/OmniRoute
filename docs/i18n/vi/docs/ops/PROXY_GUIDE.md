# 🌐 OmniRoute Proxy Guide (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/PROXY_GUIDE.md) · 🇪🇹 [am](../../../am/docs/ops/PROXY_GUIDE.md) · 🇸🇦 [ar](../../../ar/docs/ops/PROXY_GUIDE.md) · 🇦🇿 [az](../../../az/docs/ops/PROXY_GUIDE.md) · 🇧🇬 [bg](../../../bg/docs/ops/PROXY_GUIDE.md) · 🇧🇩 [bn](../../../bn/docs/ops/PROXY_GUIDE.md) · 🇨🇿 [cs](../../../cs/docs/ops/PROXY_GUIDE.md) · 🇩🇰 [da](../../../da/docs/ops/PROXY_GUIDE.md) · 🇩🇪 [de](../../../de/docs/ops/PROXY_GUIDE.md) · 🇬🇷 [el](../../../el/docs/ops/PROXY_GUIDE.md) · 🇪🇸 [es](../../../es/docs/ops/PROXY_GUIDE.md) · 🇪🇪 [et](../../../et/docs/ops/PROXY_GUIDE.md) · 🇮🇷 [fa](../../../fa/docs/ops/PROXY_GUIDE.md) · 🇫🇮 [fi](../../../fi/docs/ops/PROXY_GUIDE.md) · 🇫🇷 [fr](../../../fr/docs/ops/PROXY_GUIDE.md) · 🇮🇪 [ga](../../../ga/docs/ops/PROXY_GUIDE.md) · 🇮🇳 [gu](../../../gu/docs/ops/PROXY_GUIDE.md) · 🇳🇬 [ha](../../../ha/docs/ops/PROXY_GUIDE.md) · 🇮🇱 [he](../../../he/docs/ops/PROXY_GUIDE.md) · 🇮🇳 [hi](../../../hi/docs/ops/PROXY_GUIDE.md) · 🇭🇷 [hr](../../../hr/docs/ops/PROXY_GUIDE.md) · 🇭🇺 [hu](../../../hu/docs/ops/PROXY_GUIDE.md) · 🇦🇲 [hy](../../../hy/docs/ops/PROXY_GUIDE.md) · 🇮🇩 [id](../../../id/docs/ops/PROXY_GUIDE.md) · 🇳🇬 [ig](../../../ig/docs/ops/PROXY_GUIDE.md) · 🇮🇹 [it](../../../it/docs/ops/PROXY_GUIDE.md) · 🇯🇵 [ja](../../../ja/docs/ops/PROXY_GUIDE.md) · 🇬🇪 [ka](../../../ka/docs/ops/PROXY_GUIDE.md) · 🇰🇭 [km](../../../km/docs/ops/PROXY_GUIDE.md) · 🇮🇳 [kn](../../../kn/docs/ops/PROXY_GUIDE.md) · 🇰🇷 [ko](../../../ko/docs/ops/PROXY_GUIDE.md) · 🇱🇹 [lt](../../../lt/docs/ops/PROXY_GUIDE.md) · 🇱🇻 [lv](../../../lv/docs/ops/PROXY_GUIDE.md) · 🇮🇳 [ml](../../../ml/docs/ops/PROXY_GUIDE.md) · 🇮🇳 [mr](../../../mr/docs/ops/PROXY_GUIDE.md) · 🇲🇾 [ms](../../../ms/docs/ops/PROXY_GUIDE.md) · 🇲🇹 [mt](../../../mt/docs/ops/PROXY_GUIDE.md) · 🇲🇲 [my](../../../my/docs/ops/PROXY_GUIDE.md) · 🇳🇵 [ne](../../../ne/docs/ops/PROXY_GUIDE.md) · 🇳🇱 [nl](../../../nl/docs/ops/PROXY_GUIDE.md) · 🇳🇴 [no](../../../no/docs/ops/PROXY_GUIDE.md) · 🇮🇳 [or](../../../or/docs/ops/PROXY_GUIDE.md) · 🇮🇳 [pa](../../../pa/docs/ops/PROXY_GUIDE.md) · 🇵🇭 [phi](../../../phi/docs/ops/PROXY_GUIDE.md) · 🇵🇱 [pl](../../../pl/docs/ops/PROXY_GUIDE.md) · 🇵🇹 [pt](../../../pt/docs/ops/PROXY_GUIDE.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/PROXY_GUIDE.md) · 🇷🇴 [ro](../../../ro/docs/ops/PROXY_GUIDE.md) · 🇷🇺 [ru](../../../ru/docs/ops/PROXY_GUIDE.md) · 🇱🇰 [si](../../../si/docs/ops/PROXY_GUIDE.md) · 🇸🇰 [sk](../../../sk/docs/ops/PROXY_GUIDE.md) · 🇸🇮 [sl](../../../sl/docs/ops/PROXY_GUIDE.md) · 🇷🇸 [sr](../../../sr/docs/ops/PROXY_GUIDE.md) · 🇸🇪 [sv](../../../sv/docs/ops/PROXY_GUIDE.md) · 🇰🇪 [sw](../../../sw/docs/ops/PROXY_GUIDE.md) · 🇮🇳 [ta](../../../ta/docs/ops/PROXY_GUIDE.md) · 🇮🇳 [te](../../../te/docs/ops/PROXY_GUIDE.md) · 🇹🇭 [th](../../../th/docs/ops/PROXY_GUIDE.md) · 🇹🇷 [tr](../../../tr/docs/ops/PROXY_GUIDE.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/PROXY_GUIDE.md) · 🇵🇰 [ur](../../../ur/docs/ops/PROXY_GUIDE.md) · 🇺🇿 [uz](../../../uz/docs/ops/PROXY_GUIDE.md) · 🇳🇬 [yo](../../../yo/docs/ops/PROXY_GUIDE.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/PROXY_GUIDE.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/PROXY_GUIDE.md)

---

> **Vượt qua các hạn chế địa lý, bảo vệ danh tính và định tuyến lưu lượng AI qua bất kỳ proxy nào — mà không gặp sự phức tạp trong cấu hình.**

OmniRoute bao gồm một hệ thống quản lý proxy đầy đủ tính năng, cho phép bạn định tuyến lưu lượng đến các nhà cung cấp AI thượng nguồn qua proxy HTTP, HTTPS hoặc SOCKS5. Cho dù bạn đang ở khu vực bị chặn, cần xoay vòng IP hay muốn che giấu dấu vân tay — hướng dẫn này sẽ trình bày mọi nội dung cần thiết.

---

## Mục lục

- [Tại sao nên sử dụng proxy?](#why-use-proxies)
- [Tổng quan kiến trúc](#architecture-overview)
- [Hệ thống proxy 4 cấp](#4-level-proxy-system)
- [Sổ đăng ký proxy (CRUD)](#proxy-registry-crud)
- [Chợ proxy miễn phí 1proxy](#1proxy-free-proxy-marketplace)
- [Xoay vòng proxy](#proxy-rotation)
- [Chống phát hiện & ẩn danh](#anti-detection--stealth)
- [Các chế độ proxy thượng nguồn](#upstream-proxy-modes)
- [Giao diện bảng điều khiển](#dashboard-ui)
- [Tài liệu tham khảo API](#api-reference)
- [Biến môi trường](#environment-variables)
- [Khắc phục sự cố](#troubleshooting)

---

## Tại sao nên sử dụng proxy?

Nhiều nhà cung cấp AI hạn chế quyền truy cập theo khu vực địa lý. Các nhà phát triển tại **Nga, Trung Quốc, Iran, Cuba, Thổ Nhĩ Kỳ** và các quốc gia khác có thể gặp những lỗi như:

```
unsupported_country_region_territory
```

Ngay cả ngoài các khu vực bị chặn, proxy vẫn hữu ích cho:

| Trường hợp sử dụng      | Mô tả                                                              |
| ----------------------- | ------------------------------------------------------------------ |
| **Vượt hạn chế địa lý** | Truy cập OpenAI, Anthropic, Codex, Copilot từ các quốc gia bị chặn |
| **Xoay vòng IP**        | Phân phối yêu cầu trên nhiều IP để tránh bị giới hạn tốc độ        |
| **Quyền riêng tư**      | Ẩn IP thực của bạn khỏi các nhà cung cấp thượng nguồn              |
| **Tuân thủ**            | Định tuyến lưu lượng qua các khu vực pháp lý cụ thể                |
| **Kiểm thử**            | Mô phỏng yêu cầu từ các khu vực khác nhau                          |

---

## Tổng quan kiến trúc

```
┌───────────────────────────────────────────────────────────────┐
│                       Máy chủ OmniRoute                       │
│                                                               │
│  ┌─────────────┐    ┌──────────────┐    ┌──────────────────┐  │
│  │ Sổ đăng ký  │    │ Bộ điều phối │    │ Fetch (undici)   │  │
│  │ proxy       │───▶│ proxy        │───▶│                  │  │
│  │ (SQLite)    │    │ (được đệm)   │    │                  │  │
│  └─────────────┘    └──────────────┘    └────────┬─────────┘  │
│         ▲                                        │            │
│         │                                        ▼            │
│  ┌──────┴──────┐                        ┌──────────────────┐  │
│  │ Đồng bộ     │                        │ API nhà cung cấp │  │
│  │ 1proxy      │                        │ thượng nguồn     │  │
│  │ (nhóm miễn phí)                      │                  │  │
│  └─────────────┘                        └──────────────────┘  │
└───────────────────────────────────────────────────────────────┘
```

### Các thành phần chính

| Thành phần             | Tệp                                          | Vai trò                                                          |
| ---------------------- | -------------------------------------------- | ---------------------------------------------------------------- |
| **Sổ đăng ký proxy**   | `src/lib/db/proxies.ts`                      | CRUD cho các mục proxy và việc gán phạm vi                       |
| **Bộ điều phối proxy** | `open-sse/utils/proxyDispatcher.ts`          | Tạo các bộ điều phối ProxyAgent/SOCKS của `undici` có bộ nhớ đệm |
| **Proxy Fetch**        | `open-sse/utils/proxyFetch.ts`               | Bao bọc `fetch()` bằng cách chèn bộ điều phối proxy              |
| **Tuyến cài đặt**      | `src/app/api/settings/proxy/route.ts`        | API cấu hình proxy cũ (GET/PUT/DELETE)                           |
| **Tuyến quản lý**      | `src/app/api/v1/management/proxies/route.ts` | API CRUD cho sổ đăng ký (GET/POST/PATCH/DELETE)                  |
| **CSDL 1proxy**        | `src/lib/db/oneproxy.ts`                     | Lưu trữ bền vững cho chợ proxy miễn phí                          |

---

## Hệ thống Proxy 4 cấp độ

OmniRoute hỗ trợ cấu hình proxy tại **bốn phạm vi độc lập**, được phân giải theo thứ tự ưu tiên:

```
Thứ tự ưu tiên phân giải (cao nhất → thấp nhất):

  1. 🔵 Proxy tài khoản/kết nối  →  theo từng API key / kết nối OAuth
  2. 🟡 Proxy nhà cung cấp       →  theo từng nhà cung cấp (ví dụ: toàn bộ lưu lượng OpenAI)
  3. 🟠 Proxy tổ hợp             →  theo từng cấu hình tổ hợp/định tuyến
  4. 🟢 Proxy toàn cục           →  toàn bộ lưu lượng, mọi nhà cung cấp
```

### Cách hoạt động của quá trình phân giải

Khi OmniRoute gửi một yêu cầu đến nhà cung cấp thượng nguồn, hệ thống gọi `resolveProxyForConnectionFromRegistry()` để kiểm tra lần lượt từng cấp độ:

1. **Cấp tài khoản** — Có proxy nào được gán cho ID kết nối cụ thể này không?
2. **Cấp nhà cung cấp** — Có proxy nào được gán cho nhà cung cấp này (ví dụ: `openai`) không?
3. **Cấp toàn cục** — Có proxy toàn cục nào được cấu hình không?
4. **Không có proxy** — Kết nối trực tiếp đến nhà cung cấp.

Kết quả khớp đầu tiên sẽ được sử dụng. Điều này có nghĩa là bạn có thể đặt một proxy toàn cục làm phương án dự phòng nhưng ghi đè proxy đó cho các nhà cung cấp hoặc kết nối cụ thể.

### Những lưu lượng được chuyển qua proxy

| Loại lưu lượng       | Qua proxy? | Ghi chú                                          |
| -------------------- | ---------- | ------------------------------------------------ |
| Hoàn thành hội thoại | ✅         | Tất cả yêu cầu `/v1/chat/completions`            |
| Embedding            | ✅         | `/v1/embeddings`                                 |
| Tạo hình ảnh         | ✅         | `/v1/images/generations`                         |
| Âm thanh (TTS/STT)   | ✅         | `/v1/audio/*`                                    |
| Trao đổi token OAuth | ✅         | Khắc phục `unsupported_country_region_territory` |
| Kiểm tra kết nối     | ✅         | Nút "Kiểm tra kết nối" sử dụng proxy             |
| Làm mới token        | ✅         | Gia hạn OAuth trong nền                          |
| Đồng bộ mô hình      | ✅         | Liệt kê và khám phá mô hình                      |

---

## Registry Proxy (CRUD)

Registry proxy là một bảng SQLite (`proxy_registry`) lưu trữ tất cả proxy của bạn. Mỗi proxy có:

| Trường     | Kiểu dữ liệu | Mô tả                                             |
| ---------- | ------------ | ------------------------------------------------- |
| `id`       | UUID         | Mã định danh duy nhất                             |
| `name`     | Chuỗi        | Nhãn dễ đọc                                       |
| `type`     | Chuỗi        | Giao thức: `http`, `https`, `socks5`              |
| `host`     | Chuỗi        | Tên máy chủ hoặc IP của proxy                     |
| `port`     | Số nguyên    | Số cổng                                           |
| `username` | Chuỗi        | Tên người dùng xác thực (được mã hóa khi lưu trữ) |
| `password` | Chuỗi        | Mật khẩu xác thực (được mã hóa khi lưu trữ)       |
| `region`   | Chuỗi        | Nhãn khu vực địa lý                               |
| `notes`    | Chuỗi        | Ghi chú dạng văn bản tự do                        |
| `status`   | Chuỗi        | `active` hoặc `inactive`                          |
| `source`   | Chuỗi        | `manual` hoặc `oneproxy`                          |

### Tạo Proxy

**Qua bảng điều khiển:**

1. Đi đến **Cài đặt → Proxy**
2. Nhấp vào **Thêm Proxy**
3. Điền loại, máy chủ, cổng và thông tin xác thực tùy chọn
4. Lưu

**Qua API:**

```bash
curl -X POST http://localhost:20128/api/v1/management/proxies \
  -H "Content-Type: application/json" \
  -d '{
    "name": "US Proxy",
    "type": "http",
    "host": "proxy.example.com",
    "port": 8080,
    "username": "user",
    "password": "pass",
    "region": "US"
  }'
```

### Cập nhật Proxy

```bash
curl -X PATCH http://localhost:20128/api/v1/management/proxies \
  -H "Content-Type: application/json" \
  -d '{
    "id": "proxy-uuid-here",
    "host": "new-proxy.example.com",
    "port": 9090
  }'
```

> **Lưu ý:** Thông tin xác thực được giữ nguyên trừ khi bạn gửi rõ ràng các giá trị thay thế không rỗng. Việc gửi chuỗi rỗng cho `username`/`password` sẽ giữ lại các giá trị đã lưu.

### Xóa Proxy

```bash
# Thất bại nếu proxy được gán cho bất kỳ phạm vi nào
curl -X DELETE "http://localhost:20128/api/v1/management/proxies?id=proxy-uuid"

# Buộc xóa (đồng thời xóa các phép gán)
curl -X DELETE "http://localhost:20128/api/v1/management/proxies?id=proxy-uuid&force=1"
```

### Liệt kê Proxy

```bash
curl "http://localhost:20128/api/v1/management/proxies?limit=50&offset=0"
```

### Gán Proxy cho các phạm vi

```bash
# Gán cho phạm vi toàn cục
curl -X PUT http://localhost:20128/api/settings/proxy \
  -H "Content-Type: application/json" \
  -d '{"level": "global", "proxy": {"type":"http","host":"proxy.example.com","port":8080}}'

# Gán cho một nhà cung cấp cụ thể
curl -X PUT http://localhost:20128/api/settings/proxy \
  -H "Content-Type: application/json" \
  -d '{"level": "provider", "id": "openai", "proxy": {"type":"socks5","host":"socks.example.com","port":1080}}'

# Gán cho một kết nối/khóa cụ thể
curl -X PUT http://localhost:20128/api/settings/proxy \
  -H "Content-Type: application/json" \
  -d '{"level": "key", "id": "connection-uuid", "proxy": {"type":"http","host":"key-proxy.com","port":3128}}'
```

### Phân giải Proxy có hiệu lực

Kiểm tra proxy nào sẽ được sử dụng cho một kết nối nhất định:

```bash
curl "http://localhost:20128/api/settings/proxy?resolve=connection-uuid"
```

Trả về proxy đã phân giải cùng với cấp độ (`account`, `provider` hoặc `global`) và nguồn của proxy đó.

### Gán hàng loạt

Gán một proxy cho nhiều nhà cung cấp hoặc kết nối cùng lúc:

```bash
curl -X POST http://localhost:20128/api/v1/management/proxies/bulk-assign \
  -H "Content-Type: application/json" \
  -d '{
    "scope": "provider",
    "scopeIds": ["openai", "anthropic", "codex"],
    "proxyId": "proxy-uuid"
  }'
```

### Nhập/Xuất

Proxy được bao gồm trong hệ thống **Sao lưu/Khôi phục**. Khi bạn xuất cấu hình OmniRoute:

1. Đi đến **Bảng điều khiển → Cài đặt → Sao lưu**
2. Nhấp vào **Xuất** — registry proxy và các phép gán sẽ được bao gồm
3. Để khôi phục, nhấp vào **Nhập** và tải lên tệp sao lưu

Registry proxy cũng hỗ trợ **upsert theo host+port** — nếu bạn nhập một proxy đã tồn tại (cùng máy chủ và cổng), hệ thống sẽ cập nhật proxy đó thay vì tạo một bản trùng lặp.

### Di chuyển dữ liệu cũ

Nếu bạn đã cấu hình proxy trong phiên bản cũ hơn (trước khi có registry), OmniRoute sẽ tự động di chuyển chúng:

```
Kho lưu trữ key_value cũ → proxy_registry + proxy_assignments
```

Quá trình này diễn ra một lần trong lần khởi động đầu tiên sau khi nâng cấp. Sử dụng `migrateLegacyProxyConfigToRegistry({ force: true })` để chạy lại.

---

## 1proxy Chợ Proxy Miễn phí

> 🆕 **Được đóng góp bởi [@oyi77](https://github.com/oyi77)** — PR [#1847](https://github.com/diegosouzapw/OmniRoute/pull/1847) (Vấn đề [#1788](https://github.com/diegosouzapw/OmniRoute/issues/1788))

OmniRoute tích hợp với nền tảng cộng đồng **[1proxy](https://1proxy-api.aitradepulse.com)** để cung cấp quyền truy cập vào **hàng trăm proxy miễn phí đã được xác thực** trên toàn thế giới. Đây là lựa chọn hoàn hảo cho người dùng không có hạ tầng proxy riêng.

### Cách Hoạt động

```
┌─────────────┐   Đồng bộ    ┌─────────────────┐    Luân phiên   ┌──────────────┐
│  1proxy API │ ────────────▶ │  proxy_registry  │ ─────────────▶ │ Nhà cung cấp │
│  (bên ngoài)│  tối đa 500  │  source=oneproxy │ theo chất lượng│     API      │
└─────────────┘     proxy    └─────────────────┘                 └──────────────┘
```

1. **Đồng bộ** — OmniRoute tải các proxy đã được xác thực từ 1proxy API
2. **Lưu trữ** — Các proxy được lưu trong cùng bảng `proxy_registry` với `source = 'oneproxy'`
3. **Lọc** — Lọc theo giao thức, quốc gia và điểm chất lượng
4. **Luân phiên** — Chọn proxy tốt nhất bằng chiến lược dựa trên chất lượng, ngẫu nhiên hoặc tuần tự
5. **Tự động hạ cấp** — Proxy bị lỗi sẽ bị giảm điểm chất lượng; nếu thấp hơn ngưỡng → được đánh dấu là không hoạt động

### Đồng bộ Proxy

**Qua Bảng điều khiển:**

1. Chuyển đến tab **Cài đặt → 1proxy**
2. Nhấp vào **"Đồng bộ ngay"**
3. Xem thống kê: tổng số proxy, số lượng đang hoạt động, chất lượng trung bình và phân bố theo quốc gia

**Qua API:**

```bash
# Kích hoạt đồng bộ
curl -X POST http://localhost:20128/api/settings/oneproxy \
  -H "Content-Type: application/json" \
  -d '{}'

# Phản hồi:
# { "success": true, "added": 127, "updated": 45, "failed": 2, "total": 172 }
```

### Lọc Proxy

```bash
# Lọc theo giao thức
curl "http://localhost:20128/api/settings/oneproxy?protocol=socks5"

# Lọc theo quốc gia
curl "http://localhost:20128/api/settings/oneproxy?countryCode=US"

# Lọc theo điểm chất lượng tối thiểu
curl "http://localhost:20128/api/settings/oneproxy?minQuality=80"

# Kết hợp các bộ lọc
curl "http://localhost:20128/api/settings/oneproxy?protocol=http&countryCode=DE&minQuality=70"
```

### Điểm Chất lượng Proxy

Mỗi proxy của 1proxy đều đi kèm siêu dữ liệu:

| Trường          | Mô tả                                                |
| --------------- | ---------------------------------------------------- |
| `qualityScore`  | Điểm đánh giá 0-100 từ quá trình xác thực của 1proxy |
| `latencyMs`     | Độ trễ mạng đo được                                  |
| `anonymity`     | `transparent`, `anonymous` hoặc `elite`              |
| `googleAccess`  | Proxy có thể truy cập các dịch vụ Google hay không   |
| `countryCode`   | Mã quốc gia ISO gồm hai chữ cái                      |
| `lastValidated` | Dấu thời gian của lần xác thực gần nhất              |

Điểm chất lượng được điều chỉnh linh hoạt:

- **Các yêu cầu thất bại** làm giảm điểm 10 điểm
- **Điểm giảm xuống ≤10** → proxy được đánh dấu là `inactive`
- Các proxy không hoạt động sẽ bị loại khỏi quá trình luân phiên

### Chiến lược Luân phiên

```bash
# Luân phiên theo chất lượng (proxy tốt nhất trước) — mặc định
curl -X POST http://localhost:20128/api/settings/oneproxy/rotate \
  -H "Content-Type: application/json" \
  -d '{"strategy": "quality"}'

# Luân phiên ngẫu nhiên
curl -X POST http://localhost:20128/api/settings/oneproxy/rotate \
  -d '{"strategy": "random"}'

# Tuần tự (proxy được xác thực cách đây lâu nhất trước)
curl -X POST http://localhost:20128/api/settings/oneproxy/rotate \
  -d '{"strategy": "sequential"}'
```

### Bộ Ngắt Mạch

Tính năng đồng bộ 1proxy có bộ ngắt mạch tích hợp:

- Sau **5 lần đồng bộ thất bại liên tiếp**, các lần đồng bộ tiếp theo sẽ bị chặn
- Đặt lại bằng: `resetOneproxyCircuitBreaker()` hoặc khởi động lại máy chủ
- Trạng thái đồng bộ có tại `GET /api/settings/oneproxy?action=status`

### Xóa Proxy của 1proxy

```bash
# Xóa một proxy 1proxy
curl -X DELETE "http://localhost:20128/api/settings/oneproxy?id=proxy-uuid"

# Xóa TẤT CẢ proxy 1proxy (các proxy thủ công không bị ảnh hưởng)
curl -X DELETE "http://localhost:20128/api/settings/oneproxy?clearAll=1"
```

---

## Chống phát hiện & Ẩn mình

OmniRoute không chỉ định tuyến lưu lượng qua proxy — mà còn khiến lưu lượng trông hợp lệ:

### Giả mạo dấu vân tay TLS

Sử dụng `wreq-js` để tạo dấu vân tay TLS giống trình duyệt, qua đó vượt qua các hệ thống phát hiện bot vốn đánh dấu những phiên bắt tay TLS không phải từ trình duyệt.

### Khớp dấu vân tay CLI

**Công tắc Dấu vân tay CLI** (`Cài đặt → Bảo mật`) sắp xếp lại các header HTTP và trường trong phần thân JSON để khớp chính xác với chữ ký của các tệp nhị phân CLI gốc (Claude Code, Codex, v.v.). Tính năng này hoạt động **trên cả** proxy:

```
IP của bạn (bị chặn) → IP proxy (Mỹ) → API nhà cung cấp
                        + giả mạo TLS
                        + dấu vân tay CLI
```

Bạn có được đồng thời cả **che giấu IP** và **tính xác thực của yêu cầu**.

### Bảo toàn IP proxy

Các huy hiệu được mã hóa bằng màu trong bảng điều khiển cho biết cấp proxy nào đang hoạt động:

| Huy hiệu | Cấp độ       | Ý nghĩa                                                  |
| -------- | ------------ | -------------------------------------------------------- |
| 🟢       | Toàn cục     | Toàn bộ lưu lượng đi qua proxy này                       |
| 🟡       | Nhà cung cấp | Chỉ lưu lượng của nhà cung cấp này được chuyển qua proxy |
| 🔵       | Kết nối      | Khóa/tài khoản cụ thể này sử dụng proxy này              |

Huy hiệu cũng hiển thị IP proxy đã được phân giải để xác minh.

---

## Chế độ proxy thượng nguồn

Đối với các nhà cung cấp sử dụng mẫu CLIProxyAPI, OmniRoute hỗ trợ ba chế độ proxy thượng nguồn:

| Chế độ        | Mô tả                                                         |
| ------------- | ------------------------------------------------------------- |
| `native`      | OmniRoute trực tiếp xử lý việc định tuyến proxy (mặc định)    |
| `cliproxyapi` | Ủy quyền cho một phiên bản CLIProxyAPI bên ngoài              |
| `fallback`    | Thử chế độ gốc trước, sau đó chuyển sang CLIProxyAPI dự phòng |

Cấu hình theo từng nhà cung cấp:

```bash
curl -X PUT "http://localhost:20128/api/upstream-proxy/openai" \
  -H "Content-Type: application/json" \
  -d '{"mode": "native", "enabled": true}'
```

---

## Giao diện bảng điều khiển

### Cài đặt → Thẻ Proxy

- Cấu hình **proxy toàn cục** (thiết lập một lần cho toàn bộ lưu lượng)
- Ghi đè **proxy theo từng nhà cung cấp**
- Gán **proxy theo từng kết nối**
- **Kiểm tra kết nối** thông qua proxy đã cấu hình
- **Huy hiệu được mã hóa bằng màu** hiển thị cấp proxy đang hoạt động

### Cài đặt → Thẻ 1proxy

- Nút **Đồng bộ ngay** để lấy các proxy miễn phí
- **Thẻ thống kê**: Tổng số, Đang hoạt động, Chất lượng trung bình, Lần đồng bộ gần nhất
- **Bộ lọc**: Giao thức, Mã quốc gia, Chất lượng tối thiểu
- **Bảng proxy** với máy chủ, giao thức, quốc gia, điểm chất lượng, độ trễ, mức ẩn danh, khả năng truy cập Google
- Bảng **trạng thái đồng bộ** với tính năng theo dõi thành công/thất bại và số lần thất bại liên tiếp
- **Xóa tất cả** để xóa toàn bộ mục 1proxy

---

## Tham chiếu API

### API cài đặt proxy

| Phương thức | Điểm cuối                                      | Mô tả                       |
| ----------- | ---------------------------------------------- | --------------------------- |
| `GET`       | `/api/settings/proxy`                          | Lấy toàn bộ cấu hình proxy  |
| `GET`       | `/api/settings/proxy?level=global`             | Lấy proxy toàn cục          |
| `GET`       | `/api/settings/proxy?level=provider&id=openai` | Lấy proxy của nhà cung cấp  |
| `GET`       | `/api/settings/proxy?resolve=connectionId`     | Phân giải proxy có hiệu lực |
| `PUT`       | `/api/settings/proxy`                          | Cập nhật cấu hình proxy     |
| `DELETE`    | `/api/settings/proxy?level=provider&id=openai` | Xóa proxy ở cấp này         |

### API sổ đăng ký proxy

| Phương thức | Điểm cuối                                         | Mô tả                     |
| ----------- | ------------------------------------------------- | ------------------------- |
| `GET`       | `/api/v1/management/proxies`                      | Liệt kê tất cả proxy      |
| `GET`       | `/api/v1/management/proxies?id=uuid`              | Lấy proxy theo ID         |
| `GET`       | `/api/v1/management/proxies?id=uuid&where_used=1` | Lấy các phép gán proxy    |
| `POST`      | `/api/v1/management/proxies`                      | Tạo proxy                 |
| `PATCH`     | `/api/v1/management/proxies`                      | Cập nhật proxy            |
| `DELETE`    | `/api/v1/management/proxies?id=uuid`              | Xóa proxy                 |
| `DELETE`    | `/api/v1/management/proxies?id=uuid&force=1`      | Buộc xóa                  |
| `POST`      | `/api/v1/management/proxies/bulk-assign`          | Gán hàng loạt             |
| `GET`       | `/api/v1/management/proxies/assignments`          | Liệt kê các phép gán      |
| `GET`       | `/api/v1/management/proxies/health`               | Thống kê tình trạng proxy |

### API đường hầm

Để đưa phiên bản OmniRoute của bạn ra internet công cộng (Cloudflare/ngrok/Tailscale) thay vì định tuyến lưu lượng đi ra thông qua proxy, hãy xem [TUNNELS_GUIDE.md](./TUNNELS_GUIDE.md). API REST của đường hầm nằm dưới `/api/tunnels/{cloudflared,ngrok,tailscale}/*` và độc lập với chuỗi proxy đi ra được ghi lại ở trên.

### API 1proxy

| Phương thức | Điểm cuối                              | Mô tả                             |
| ----------- | -------------------------------------- | --------------------------------- |
| `GET`       | `/api/settings/oneproxy`               | Liệt kê các proxy 1proxy          |
| `GET`       | `/api/settings/oneproxy?action=stats`  | Lấy thống kê + trạng thái đồng bộ |
| `GET`       | `/api/settings/oneproxy?action=status` | Chỉ lấy trạng thái đồng bộ        |
| `POST`      | `/api/settings/oneproxy`               | Kích hoạt đồng bộ                 |
| `POST`      | `/api/settings/oneproxy/rotate`        | Chuyển sang proxy tiếp theo       |
| `DELETE`    | `/api/settings/oneproxy?id=uuid`       | Xóa một proxy                     |
| `DELETE`    | `/api/settings/oneproxy?clearAll=1`    | Xóa tất cả                        |

### API proxy thượng nguồn

| Phương thức | Điểm cuối                         | Mô tả                           |
| ----------- | --------------------------------- | ------------------------------- |
| `GET`       | `/api/upstream-proxy/:providerId` | Lấy cấu hình proxy thượng nguồn |
| `PUT`       | `/api/upstream-proxy/:providerId` | Đặt chế độ proxy thượng nguồn   |
| `DELETE`    | `/api/upstream-proxy/:providerId` | Xóa cấu hình proxy thượng nguồn |

---

## Biến môi trường

| Biến                  | Mặc định | Mô tả                                                             |
| --------------------- | -------- | ----------------------------------------------------------------- |
| `ENABLE_SOCKS5_PROXY` | `true`   | Bật hỗ trợ proxy SOCKS5 (mặc định là `true` trong `.env.example`) |

---

## Khắc phục sự cố

### "Proxy SOCKS5 đã bị tắt"

Đặt `ENABLE_SOCKS5_PROXY=true` trong tệp `.env` của bạn rồi khởi động lại.

### Lỗi "socket hang up" khi sử dụng proxy

Điều này là bình thường với các proxy giá rẻ thường ngắt những kết nối không hoạt động. OmniRoute đã xử lý vấn đề này bằng cách:

- Tắt keep-alive trên các kết nối proxy (`keepAliveTimeout: 1`)
- Tắt pipelining (`pipelining: 0`)
- Lưu các dispatcher vào bộ nhớ đệm để tránh lặp lại quá trình bắt tay

Nếu sự cố vẫn tiếp diễn, hãy thử một proxy khác hoặc sử dụng tính năng xoay vòng 1proxy.

### "unsupported_country_region_territory" trong quá trình OAuth

Hãy đảm bảo proxy được cấu hình **trước khi** bắt đầu luồng OAuth. OmniRoute định tuyến quá trình trao đổi token OAuth qua proxy đã cấu hình. Trước tiên, hãy đặt proxy ở cấp toàn cục hoặc cấp nhà cung cấp, sau đó mới kết nối.

### Proxy không được sử dụng

Kiểm tra thứ tự phân giải:

1. Xác minh bằng `GET /api/settings/proxy?resolve=your-connection-id`
2. Kiểm tra xem `status` của proxy có phải là `active` (không phải `inactive`) hay không
3. Đảm bảo phạm vi gán proxy khớp với kết nối của bạn

### Đồng bộ 1proxy thất bại

Kiểm tra trạng thái đồng bộ:

```bash
curl "http://localhost:20128/api/settings/oneproxy?action=status"
```

Nếu `consecutiveFailures >= 5`, cầu dao ngắt mạch đã được kích hoạt. Hãy khởi động lại máy chủ để đặt lại hoặc chờ đặt lại thủ công.

---

## Lược đồ cơ sở dữ liệu

### Bảng `proxy_registry`

```sql
CREATE TABLE proxy_registry (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'http',
  host TEXT NOT NULL,
  port INTEGER NOT NULL,
  username TEXT DEFAULT '',
  password TEXT DEFAULT '',
  region TEXT,
  notes TEXT,
  status TEXT DEFAULT 'active',
  source TEXT NOT NULL DEFAULT 'manual',    -- 'manual' hoặc 'oneproxy'
  quality_score INTEGER,                     -- 0-100 (chỉ dành cho 1proxy)
  latency_ms INTEGER,                        -- mili giây (chỉ dành cho 1proxy)
  anonymity TEXT,                            -- trong suốt/ẩn danh/ưu tú
  google_access INTEGER DEFAULT 0,           -- có thể truy cập Google? (1proxy)
  last_validated TEXT,                       -- dấu thời gian ISO (1proxy)
  country_code TEXT,                         -- mã ISO gồm 2 chữ cái (1proxy)
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
```

### Bảng `proxy_assignments`

```sql
CREATE TABLE proxy_assignments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  proxy_id TEXT NOT NULL REFERENCES proxy_registry(id),
  scope TEXT NOT NULL,        -- 'global', 'provider', 'account', 'combo'
  scope_id TEXT,              -- ID nhà cung cấp, ID kết nối hoặc ID combo
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  UNIQUE(scope, scope_id)
);
```

---

## Kiểm tra tình trạng proxy (v3.8.16+)

Cơ chế **proxy fast-fail** của OmniRoute (`src/lib/proxyHealth.ts`) phát hiện các proxy không hoạt động trong <2 giây thông qua thao tác kiểm tra nhanh kết nối TCP, sau đó **lưu kết quả vào bộ nhớ đệm** để tránh phát sinh chi phí xử lý trên từng yêu cầu.

### Cách thức hoạt động

```
Yêu cầu ──▶ ProxyHealthCache.get(url)
             │
             ├─ Tìm thấy trong bộ nhớ đệm + còn mới?  ──▶ trả về trạng thái đã lưu
             │
             └─ Không có trong bộ nhớ đệm / đã cũ?  ──▶ kết nối TCP đến host:port
                                                         (thời gian chờ: FAST_FAIL_TIMEOUT_MS)
                                                         ──▶ lưu vào bộ nhớ đệm trong HEALTH_CACHE_TTL_MS
                                                         ──▶ trả về kết quả
```

Nếu không có cơ chế này, một proxy không hoạt động sẽ chặn mọi yêu cầu trong toàn bộ thời gian `PROXY_TIMEOUT_MS` (mặc định là 30 giây) trước khi thất bại.

### Các biến môi trường có thể điều chỉnh

| Biến                         | Mặc định | Mục đích                                                    |
| ---------------------------- | -------- | ----------------------------------------------------------- |
| `PROXY_FAST_FAIL_TIMEOUT_MS` | `2000`   | Thời gian chờ kết nối TCP cho mỗi lần kiểm tra              |
| `PROXY_HEALTH_CACHE_TTL_MS`  | `30000`  | Khoảng thời gian kết quả tình trạng được lưu vào bộ nhớ đệm |

**Giá trị khuyến nghị:**

| Tình huống                | Thời gian chờ fast-fail | TTL bộ nhớ đệm | Lý do                                                                       |
| ------------------------- | ----------------------- | -------------- | --------------------------------------------------------------------------- |
| Cổng API có lưu lượng cao | 1500ms                  | 60000ms        | Thất bại nhanh chủ động, lưu lâu hơn để giảm số lần kiểm tra                |
| Các nút phân tán địa lý   | 3000ms                  | 15000ms        | Mạng chậm hơn cần thêm thời gian; lưu ngắn hơn để chuyển đổi dự phòng nhanh |
| Phát triển / kiểm thử     | 1000ms                  | 10000ms        | Lặp lại nhanh với các proxy cục bộ                                          |
| Ẩn mình / chống phát hiện | 2500ms                  | 45000ms        | Tránh thăm dò nhanh có thể kích hoạt giới hạn tốc độ                        |

### Kiểm tra tình trạng proxy

```ts
import { getAllProxyHealthStatuses, invalidateProxyHealth } from "omniroute/proxyHealth";

const statuses = getAllProxyHealthStatuses();
for (const s of statuses) {
  console.log(`${s.proxyUrl} → healthy=${s.healthy}, stale=${s.stale}`);
}

// Buộc kiểm tra lại một proxy cụ thể
invalidateProxyHealth("http://user:pass@203.0.113.7:8080");
```

Cờ `stale` là `true` khi mục nhập trong bộ nhớ đệm đã vượt quá `HEALTH_CACHE_TTL_MS` và yêu cầu tiếp theo sẽ kích hoạt một lần kiểm tra mới.

### Giá trị mặc định theo từng loại proxy

Quá trình kiểm tra tình trạng sử dụng các giá trị mặc định hợp lý dựa trên lược đồ URL:

| Lược đồ                    | Cổng mặc định |
| -------------------------- | ------------- |
| `http://`                  | 8080          |
| `https://`                 | 443           |
| `socks5://` / `socks5h://` | 1080          |

Các cổng tùy chỉnh trong URL (`http://host:9999`) luôn được ưu tiên hơn cổng mặc định của lược đồ.

---

## Phân tích & Khả năng quan sát proxy

OmniRoute theo dõi mức sử dụng của từng proxy để giúp người vận hành chẩn đoán các mẫu định tuyến, mức tăng đột biến về độ trễ và các lỗi tái diễn.

### Dữ liệu được theo dõi

Đối với mọi yêu cầu đi qua một proxy đã cấu hình, OmniRoute ghi lại:

| Chỉ số       | Mô tả                                                      |
| ------------ | ---------------------------------------------------------- |
| `proxy_url`  | URL proxy đầy đủ (thông tin xác thực được che)             |
| `provider`   | ID nhà cung cấp thượng nguồn (openai, anthropic, v.v.)     |
| `latency_ms` | Tổng thời gian khứ hồi, bao gồm cả quá trình bắt tay proxy |
| `connect_ms` | Chỉ tính thời gian kết nối TCP                             |
| `status`     | Mã trạng thái HTTP từ thượng nguồn                         |
| `error`      | Lớp lỗi nếu yêu cầu thất bại                               |
| `timestamp`  | ISO 8601 UTC                                               |

### Truy cập dữ liệu

```bash
# Các sự kiện proxy gần đây
curl -H "Authorization: Bearer $OMNIROUTE_KEY" \
  "http://localhost:20128/api/usage/proxy-logs?limit=100"
```

Endpoint thực tế là `/api/usage/proxy-logs` (xem `src/app/api/usage/proxy-logs/route.ts`). Endpoint này hỗ trợ:

- `GET /api/usage/proxy-logs` — truy xuất nhật ký proxy
- `DELETE /api/usage/proxy-logs` — xóa toàn bộ nhật ký proxy

Nếu cần, có thể truy vấn trực tiếp số liệu thống kê tổng hợp từ bảng `proxy_logs` bằng SQL. Giao diện bảng điều khiển có thể cung cấp các chế độ xem tổng hợp.

### Các mẫu phổ biến

**Phát hiện proxy chập chờn** (luân phiên giữa thành công/thất bại):

```sql
SELECT proxy_url,
       COUNT(*) AS total,
       SUM(CASE WHEN status >= 500 THEN 1 ELSE 0 END) AS errors,
       ROUND(100.0 * SUM(CASE WHEN status >= 500 THEN 1 ELSE 0 END) / COUNT(*), 1) AS error_pct
FROM proxy_logs
WHERE timestamp > datetime('now', '-1 hour')
GROUP BY proxy_url
HAVING error_pct > 5
ORDER BY error_pct DESC;
```

**Tìm các proxy chậm** (độ trễ p95 > 2 giây):

```sql
WITH ranked AS (
  SELECT proxy_url, latency_ms,
         PERCENT_RANK() OVER (PARTITION BY proxy_url ORDER BY latency_ms) AS pct
  FROM proxy_logs
  WHERE timestamp > datetime('now', '-24 hour')
)
SELECT proxy_url, latency_ms
FROM ranked
WHERE pct >= 0.95
ORDER BY latency_ms DESC;
```

---

## Cây quyết định chiến lược xoay vòng

Khi nhiều proxy được gán cho một phạm vi, OmniRoute sử dụng một **chiến lược xoay vòng** để chọn proxy sẽ dùng cho từng yêu cầu. Chiến lược được cấu hình ở cấp phạm vi (toàn cục, theo từng nhà cung cấp, theo từng tài khoản, theo từng tổ hợp).

### Các chiến lược khả dụng

| Chiến lược           | Khi nào nên sử dụng                                         | Sự đánh đổi                                                                                |
| -------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `quality` (mặc định) | Môi trường production với các proxy có chất lượng khác nhau | Ưu tiên các proxy được đánh giá cao; có thể khiến proxy được đánh giá thấp không được dùng |
| `random`             | Phân phối tải, quyền riêng tư                               | Phân phối đồng đều; bỏ qua các tín hiệu chất lượng                                         |
| `sequential`         | Gỡ lỗi, kiểm thử có tính xác định                           | Lần lượt duyệt qua các proxy theo thứ tự; dễ suy luận                                      |

### Cây quyết định

```
                    Bạn có điểm chất lượng cho các proxy không?
                    │
        ┌───────────┴───────────┐
        │                       │
       CÓ                    KHÔNG
        │                       │
   Tất cả proxy có             │
   chất lượng gần như          │
   tương đương không?          │
        │                       │
   ┌────┴────┐                  │
   │         │                  │
  CÓ       KHÔNG             Dùng
   │         │              `random`
   │         │              (phân phối đều
   │         │              giúp tích lũy dữ liệu
   │         │              chất lượng theo thời gian)
   │         │
   │    Dùng `quality`
   │    (tốt nhất khi
   │    chất lượng khác nhau)
   │
Dùng `random`
(phân phối tải
đồng đều)
```

## Tự động loại trừ lỗi đối với proxy của riêng bạn

Nhóm marketplace của 1proxy đã tự động hạ cấp các proxy bị lỗi (xem
[Điểm chất lượng proxy](#proxy-quality-scores)). Đối với các
proxy do **bạn** thêm vào registry, trình lập lịch kiểm tra tình trạng chạy nền
(`src/lib/proxyHealth/scheduler.ts`) cung cấp cùng cơ chế "tự động loại trừ một thành viên không hoạt động
khỏi chuỗi" mà không xóa bất kỳ thứ gì:

```bash
# .env — vô hiệu hóa tạm thời một proxy sau 3 lần thăm dò thất bại liên tiếp, rồi kích hoạt lại
# tự động khi proxy bắt đầu phản hồi các lần thăm dò trở lại.
PROXY_AUTO_DISABLE=true
PROXY_AUTO_REMOVE_AFTER=3
```

Cách cơ chế này hoạt động trong một chuỗi nhiều proxy:

1. Trình lập lịch thăm dò mọi proxy đã đăng ký sau mỗi `PROXY_HEALTH_INTERVAL_MS`
   (mặc định 10 phút; tối thiểu 1 phút).
2. Sau `PROXY_AUTO_REMOVE_AFTER` lần thất bại **có kết luận rõ ràng** liên tiếp (một lỗi
   kết nối thực sự — lỗi hết thời gian chờ hoặc lỗi 5xx của chính mục tiêu thăm dò không bao giờ được tính, xem
   [Kiểm tra tình trạng proxy](#proxy-health-checking-v3816)), `status` của proxy được
   đặt thành `dead`.
3. `dead` là một trong các trạng thái bị bộ lọc trạng thái hoạt động dùng khi phân giải nhóm/phép xoay vòng
   loại trừ, vì vậy cơ chế xoay vòng của một phạm vi (round-robin / ngẫu nhiên / cố định /
   độ trễ — xem [Cây quyết định chiến lược xoay vòng](#rotation-strategy-decision-tree))
   ngay lập tức ngừng cấp proxy đó cho các yêu cầu mới. Các proxy khác trong
   nhóm không bị ảnh hưởng và toàn bộ nhóm không bao giờ âm thầm chuyển dự phòng sang kết nối
   trực tiếp — xem cơ chế bảo vệ đóng khi lỗi của [Hệ thống proxy 4 cấp](#4-level-proxy-system).
4. Trình lập lịch tiếp tục thăm dò các proxy `dead` theo cùng khoảng thời gian. Lần thăm dò
   thành công tiếp theo sẽ chuyển `status` trở lại `active` và proxy được đưa lại vào cơ chế xoay vòng —
   không cần thêm lại theo cách thủ công.

Cơ chế này được thiết kế có chủ đích theo hướng **tùy chọn tham gia và không phá hủy**: theo mặc định, trình lập lịch chỉ
đếm và ghi nhật ký các lỗi (xem chính sách C trong `decision.ts`), còn `PROXY_AUTO_DISABLE`
không bao giờ xóa một hàng — đó là chức năng của cờ riêng biệt và mạnh tay hơn
`PROXY_AUTO_REMOVE`. Nếu cả hai được đặt thành `true`, `PROXY_AUTO_REMOVE`
được ưu tiên (một proxy sắp bị xóa không cần được vô hiệu hóa tạm thời ở bước trung gian). Xem tài liệu tham khảo
[Cấu hình môi trường](../reference/ENVIRONMENT.md) để biết danh sách biến đầy đủ.

---

> 📖 **Tài liệu liên quan:**
>
> - [Hướng dẫn người dùng](../guides/USER_GUIDE.md) — Thiết lập và cấu hình chung
> - [Tài liệu tham khảo API](../reference/API_REFERENCE.md) — Tài liệu API đầy đủ
> - [Cấu hình môi trường](../reference/ENVIRONMENT.md) — Tất cả các biến môi trường
