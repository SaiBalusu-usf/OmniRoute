# Egress IP Family Policy (IPv4/IPv6) (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../security/EGRESS_POLICY.md) · 🇪🇹 [am](../../../am/docs/security/EGRESS_POLICY.md) · 🇸🇦 [ar](../../../ar/docs/security/EGRESS_POLICY.md) · 🇦🇿 [az](../../../az/docs/security/EGRESS_POLICY.md) · 🇧🇬 [bg](../../../bg/docs/security/EGRESS_POLICY.md) · 🇧🇩 [bn](../../../bn/docs/security/EGRESS_POLICY.md) · 🇨🇿 [cs](../../../cs/docs/security/EGRESS_POLICY.md) · 🇩🇰 [da](../../../da/docs/security/EGRESS_POLICY.md) · 🇩🇪 [de](../../../de/docs/security/EGRESS_POLICY.md) · 🇬🇷 [el](../../../el/docs/security/EGRESS_POLICY.md) · 🇪🇸 [es](../../../es/docs/security/EGRESS_POLICY.md) · 🇪🇪 [et](../../../et/docs/security/EGRESS_POLICY.md) · 🇮🇷 [fa](../../../fa/docs/security/EGRESS_POLICY.md) · 🇫🇮 [fi](../../../fi/docs/security/EGRESS_POLICY.md) · 🇫🇷 [fr](../../../fr/docs/security/EGRESS_POLICY.md) · 🇮🇪 [ga](../../../ga/docs/security/EGRESS_POLICY.md) · 🇮🇳 [gu](../../../gu/docs/security/EGRESS_POLICY.md) · 🇳🇬 [ha](../../../ha/docs/security/EGRESS_POLICY.md) · 🇮🇱 [he](../../../he/docs/security/EGRESS_POLICY.md) · 🇮🇳 [hi](../../../hi/docs/security/EGRESS_POLICY.md) · 🇭🇷 [hr](../../../hr/docs/security/EGRESS_POLICY.md) · 🇭🇺 [hu](../../../hu/docs/security/EGRESS_POLICY.md) · 🇦🇲 [hy](../../../hy/docs/security/EGRESS_POLICY.md) · 🇮🇩 [id](../../../id/docs/security/EGRESS_POLICY.md) · 🇳🇬 [ig](../../../ig/docs/security/EGRESS_POLICY.md) · 🇮🇹 [it](../../../it/docs/security/EGRESS_POLICY.md) · 🇯🇵 [ja](../../../ja/docs/security/EGRESS_POLICY.md) · 🇬🇪 [ka](../../../ka/docs/security/EGRESS_POLICY.md) · 🇰🇭 [km](../../../km/docs/security/EGRESS_POLICY.md) · 🇮🇳 [kn](../../../kn/docs/security/EGRESS_POLICY.md) · 🇰🇷 [ko](../../../ko/docs/security/EGRESS_POLICY.md) · 🇱🇹 [lt](../../../lt/docs/security/EGRESS_POLICY.md) · 🇱🇻 [lv](../../../lv/docs/security/EGRESS_POLICY.md) · 🇮🇳 [ml](../../../ml/docs/security/EGRESS_POLICY.md) · 🇮🇳 [mr](../../../mr/docs/security/EGRESS_POLICY.md) · 🇲🇾 [ms](../../../ms/docs/security/EGRESS_POLICY.md) · 🇲🇹 [mt](../../../mt/docs/security/EGRESS_POLICY.md) · 🇲🇲 [my](../../../my/docs/security/EGRESS_POLICY.md) · 🇳🇵 [ne](../../../ne/docs/security/EGRESS_POLICY.md) · 🇳🇱 [nl](../../../nl/docs/security/EGRESS_POLICY.md) · 🇳🇴 [no](../../../no/docs/security/EGRESS_POLICY.md) · 🇮🇳 [or](../../../or/docs/security/EGRESS_POLICY.md) · 🇮🇳 [pa](../../../pa/docs/security/EGRESS_POLICY.md) · 🇵🇭 [phi](../../../phi/docs/security/EGRESS_POLICY.md) · 🇵🇱 [pl](../../../pl/docs/security/EGRESS_POLICY.md) · 🇵🇹 [pt](../../../pt/docs/security/EGRESS_POLICY.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/EGRESS_POLICY.md) · 🇷🇴 [ro](../../../ro/docs/security/EGRESS_POLICY.md) · 🇷🇺 [ru](../../../ru/docs/security/EGRESS_POLICY.md) · 🇱🇰 [si](../../../si/docs/security/EGRESS_POLICY.md) · 🇸🇰 [sk](../../../sk/docs/security/EGRESS_POLICY.md) · 🇸🇮 [sl](../../../sl/docs/security/EGRESS_POLICY.md) · 🇷🇸 [sr](../../../sr/docs/security/EGRESS_POLICY.md) · 🇸🇪 [sv](../../../sv/docs/security/EGRESS_POLICY.md) · 🇰🇪 [sw](../../../sw/docs/security/EGRESS_POLICY.md) · 🇮🇳 [ta](../../../ta/docs/security/EGRESS_POLICY.md) · 🇮🇳 [te](../../../te/docs/security/EGRESS_POLICY.md) · 🇹🇭 [th](../../../th/docs/security/EGRESS_POLICY.md) · 🇹🇷 [tr](../../../tr/docs/security/EGRESS_POLICY.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/EGRESS_POLICY.md) · 🇵🇰 [ur](../../../ur/docs/security/EGRESS_POLICY.md) · 🇺🇿 [uz](../../../uz/docs/security/EGRESS_POLICY.md) · 🇳🇬 [yo](../../../yo/docs/security/EGRESS_POLICY.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/EGRESS_POLICY.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/EGRESS_POLICY.md)

---

> **Ghim lưu lượng đi ra vào một họ IP duy nhất — `auto`, `ipv4` hoặc `ipv6` — cho từng proxy, để một đường ra chỉ hỗ trợ IPv6 không bao giờ âm thầm rò rỉ trở lại IPv4.**

> **Nguồn chính xác:** `open-sse/utils/proxyFamily.ts`, `open-sse/utils/proxyDispatcher.ts`, `open-sse/utils/proxyFetch.ts`, `open-sse/utils/socksConnectorWithFamily.ts`, `open-sse/utils/proxyFamilyResolve.ts`, `src/shared/validation/schemas.ts`, `src/lib/db/proxies.ts`, `src/lib/db/upstreamProxy.ts`, `src/lib/db/migrations/099_proxy_family.sql`

OmniRoute cho phép mỗi proxy mang một **chỉ thị họ địa chỉ cho lưu lượng đi ra**. Theo mặc định, hệ điều hành chọn IPv4 hoặc IPv6 (dual-stack, "Happy Eyeballs"). Khi bạn đặt chỉ thị thành `ipv4` hoặc `ipv6`, OmniRoute ghim mọi kết nối qua proxy đó vào họ đã chọn và **từ chối kết nối một cách an toàn** thay vì quay về sử dụng họ còn lại.

Trang này mô tả chỉ thị này là gì, lý do nó tồn tại, nơi bạn cấu hình nó và cách runtime phân giải nó.

---

## Mục lục

- [Đây là gì](#what-it-is)
- [Lý do tồn tại](#why-it-exists)
- [Ba giá trị](#the-three-values)
- [Cách cấu hình](#how-to-configure-it)
- [Cách `auto` được phân giải](#how-auto-resolves)
- [Cách thực thi `ipv4` / `ipv6`](#how-ipv4--ipv6-are-enforced)
- [Khả năng tương thích với SOCKS5](#socks5-compatibility)
- [Hành vi từ chối an toàn](#fail-closed-behavior)
- [Mô hình dữ liệu](#data-model)
- [Tài liệu liên quan](#related-documentation)

---

## Đây là gì

Mỗi proxy trong registry đều có một trường `family` với ba giá trị khả dụng, được xác thực bằng enum của Zod:

```ts
// src/shared/validation/schemas.ts
family: z.enum(["auto", "ipv4", "ipv6"]).optional().default("auto"),
```

Trường này mặc định là `"auto"`, duy trì hành vi dual-stack trước đây. Việc đặt thành `ipv4` hoặc `ipv6` sẽ ghim họ kết nối cho proxy đó.

Chỉ thị này được chuẩn hóa ở mọi nơi thông qua một helper duy nhất, vì vậy mọi giá trị không xác định đều được quy về `auto`:

```ts
// open-sse/utils/proxyFamily.ts
export type ProxyFamily = "auto" | "ipv4" | "ipv6";

export function parseProxyFamily(value: unknown): ProxyFamily {
  return value === "ipv4" || value === "ipv6" ? value : "auto";
}
```

---

## Lý do tồn tại

Được giới thiệu trong PR [#3777](https://github.com/diegosouzapw/OmniRoute/pull/3777). Các vấn đề thúc đẩy việc bổ sung tính năng này:

| Vấn đề                                           | Những gì chỉ thị này khắc phục                                                                                                                                                                                                                                                                                                                                                        |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Đường ra chỉ hỗ trợ IPv6 bị rò rỉ sang IPv4**  | Khi máy chủ proxy có cả bản ghi A và AAAA (hoặc hệ điều hành ưu tiên IPv4), Happy Eyeballs có thể quay số ra ngoài qua IPv4 ngay cả khi bạn muốn một đường dẫn chỉ hỗ trợ IPv6. Việc ghim `ipv6` loại bỏ rò rỉ đó.                                                                                                                                                                    |
| **Thu hồi do bất thường về đường ra dùng chung** | Các nhà cung cấp luân phiên (codex/openai) thu hồi token khi nhiều tài khoản đi ra qua **cùng một** IP với lưu lượng lớn. Kiểm soát họ địa chỉ của đường ra là một phần của việc giữ các tài khoản trên những đường ra riêng biệt, có thể dự đoán được (xem [`src/lib/proxyEgress.ts`](../../src/lib/proxyEgress.ts) để biết chức năng chẩn đoán IP đầu ra đi kèm với tính năng này). |
| **Đường ra xác định cho tuân thủ/kiểm thử**      | Khi bạn phải đảm bảo lưu lượng rời hệ thống qua một họ cụ thể, `auto` là chưa đủ.                                                                                                                                                                                                                                                                                                     |

Chỉ thị này được thiết kế có chủ đích để áp dụng **theo từng proxy**, không phải trên toàn cục — các proxy khác nhau trong pool của bạn có thể sử dụng các chính sách khác nhau.

---

## Ba giá trị

| Giá trị | Nhãn UI                  | Hành vi                                                                                                                                                                                            |
| ------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`  | `Tự động (ngăn xếp kép)` | Hệ điều hành chọn họ địa chỉ. Với máy chủ proxy là địa chỉ IP dạng literal, họ địa chỉ được xác định ngay từ literal; với tên máy chủ, cả hai họ đều có thể được sử dụng. Đây là giá trị mặc định. |
| `ipv4`  | `Chỉ IPv4`               | Cố định kết nối ở IPv4. Từ chối kết nối nếu máy chủ proxy không có bản ghi IPv4 (A).                                                                                                               |
| `ipv6`  | `Chỉ IPv6`               | Cố định kết nối ở IPv6. Từ chối kết nối nếu máy chủ proxy không có bản ghi IPv6 (AAAA).                                                                                                            |

Các chuỗi UI nằm trong `src/i18n/messages/en.json` (`labelFamily`, `familyAuto`, `familyIpv4`, `familyIpv6`, `familyHint`).

---

## Cách cấu hình

### Bảng điều khiển

Bộ chọn nằm trong biểu mẫu proxy của tab **Nhóm proxy**:

1. Mở **Bảng điều khiển → Cài đặt → Proxy → Nhóm proxy**
2. Thêm hoặc chỉnh sửa một proxy
3. Đặt danh sách thả xuống **Họ IP** thành `Tự động (ngăn xếp kép)`, `Chỉ IPv4` hoặc `Chỉ IPv6`
4. Lưu

Điều khiển này được kết xuất bởi `ProxyRegistryManager.tsx` (được gắn trong `proxy/ProxyPoolTab.tsx`).

### API

Trường `family` là một phần của payload tạo/cập nhật sổ đăng ký proxy, được xác thực bởi `createProxyRegistrySchema` / `updateProxyRegistrySchema` (`src/shared/validation/schemas.ts`) và được xử lý bởi `POST` / `PATCH /api/v1/management/proxies`:

```bash
# Tạo một proxy chỉ sử dụng IPv6
curl -X POST http://localhost:20128/api/v1/management/proxies \
  -H "Content-Type: application/json" \
  -d '{
    "name": "IPv6 egress",
    "type": "socks5",
    "host": "proxy.example.com",
    "port": 1080,
    "family": "ipv6"
  }'

# Chuyển một proxy hiện có sang chỉ sử dụng IPv4
curl -X PATCH http://localhost:20128/api/v1/management/proxies \
  -H "Content-Type: application/json" \
  -d '{ "id": "proxy-uuid-here", "family": "ipv4" }'
```

Trường tương tự cũng được chấp nhận trong đối tượng cấu hình proxy nội tuyến dùng cho các mục proxy ngược dòng (`upstream_proxy_config.family`, xem [Mô hình dữ liệu](#data-model)).

Để biết phần còn lại của API CRUD/gán proxy, hãy xem [PROXY_GUIDE.md](../ops/PROXY_GUIDE.md).

---

## Cách `auto` được phân giải

Khi `family` là `auto`, OmniRoute **không** nối thêm bất kỳ chỉ thị nào — URL proxy được sử dụng nguyên trạng và họ kết nối được xác định nội tại.

Tại thời điểm tạo URL (`proxyConfigToUrl` / `normalizeProxyUrl` trong `open-sse/utils/proxyDispatcher.ts`), một proxy `auto` tạo ra URL thuần không có dấu hiệu đánh dấu:

```ts
// open-sse/utils/proxyDispatcher.ts
const fam = parseProxyFamily(config.family);
const normalized = normalizeProxyUrl(proxyUrlStr, "context proxy", {
  allowSocks5,
});
return fam === "auto" ? normalized : `${normalized}?family=${fam}`;
```

Tại thời điểm điều phối (`resolveDispatcherFamily`), `auto` được phân giải thành họ nội tại của máy chủ là địa chỉ IP dạng literal, hoặc `null` (để hệ điều hành quyết định) đối với tên máy chủ:

```ts
// open-sse/utils/proxyDispatcher.ts
function resolveDispatcherFamily(parsed: URL): 4 | 6 | null {
  const directive = parseProxyFamily(parsed.searchParams.get("family") ?? undefined);
  const literal = detectIpLiteralFamily(parsed.hostname);
  if (directive === "auto") return literal; // null đối với tên máy chủ → hệ điều hành chọn
  // ...
}
```

Vì vậy:

- `auto` + máy chủ là địa chỉ IP dạng literal (`192.0.2.1` / `[2001:db8::1]`) → họ của địa chỉ literal đó.
- `auto` + tên máy chủ → `null` → cơ chế phân giải ngăn xếp kép tiêu chuẩn của hệ điều hành.

---

## Cách `ipv4` / `ipv6` được thực thi

Một chỉ thị khác `auto` được truyền dưới dạng một dấu truy vấn tổng hợp duy nhất — `?family=ipv4` hoặc `?family=ipv6` — được nối đúng một lần vào URL proxy đã chuẩn hóa. `normalizeProxyUrl` cẩn thận loại bỏ rồi nối lại dấu này đúng một lần để không bao giờ làm hỏng quá trình phân tích cổng.

Khi dispatcher được tạo, dấu này được đọc và chuyển đổi thành một họ kết nối cụ thể. Nếu máy chủ là một địa chỉ IP literal thuộc họ **đối lập**, OmniRoute sẽ ném lỗi (mâu thuẫn được xử lý theo cơ chế đóng khi lỗi):

```ts
// open-sse/utils/proxyDispatcher.ts
const want = directive === "ipv6" ? 6 : 4;
if (literal !== null && literal !== want) {
  throw new Error(
    `[ProxyDispatcher] Proxy family directive ${directive} contradicts ${literal === 6 ? "IPv6" : "IPv4"} literal host`
  );
}
```

Sau đó, họ cụ thể được cố định trên connector:

- **Proxy HTTP/HTTPS** (`ProxyAgent`): `proxyTls: { family, autoSelectFamily: false }` — vô hiệu hóa Happy Eyeballs để chỉ họ đã chọn được dùng để quay số kết nối.
- **Proxy SOCKS5**: một connector tùy chỉnh truyền `socket_options: { family, autoSelectFamily: false }` vào máy khách SOCKS (xem [Khả năng tương thích SOCKS5](#socks5-compatibility)).

---

## Khả năng tương thích SOCKS5

Cơ chế cố định họ hoạt động với proxy SOCKS5, nhưng `fetch-socks` nguyên bản không cung cấp các tùy chọn socket cần thiết để cố định họ của chặng proxy. OmniRoute tích hợp connector riêng cho mục đích đó:

```ts
// open-sse/utils/socksConnectorWithFamily.ts
export function buildSocksFamilySocketOptions(family: 4 | 6 | null): Record<string, unknown> {
  if (family === 6) return { family: 6, autoSelectFamily: false };
  if (family === 4) return { family: 4, autoSelectFamily: false };
  return {};
}
```

Mọi lượt điều phối SOCKS5 đều đi qua `createSocksDispatcherWithFamily` bất kể `family` là gì (bao gồm `null` / `auto` trên một tên máy chủ): `buildSocksFamilySocketOptions(null)` tạo ra `{}`, và cùng một luồng `SocksClient.createConnection` + TLS `buildConnector` được sử dụng với việc cố định `socket_options`, nhờ đó Happy Eyeballs không thể chọn IPv4 cho chính sách đầu ra chỉ dành cho IPv6.

Bản thân hỗ trợ SOCKS5 được bật theo mặc định (có thể chọn không dùng thông qua `ENABLE_SOCKS5_PROXY=false`); xem [PROXY_GUIDE.md → Các biến môi trường](../ops/PROXY_GUIDE.md#environment-variables).

---

## Hành vi đóng khi lỗi

Mục đích chính của chỉ thị là **từ chối** thay vì âm thầm chuyển dự phòng sang họ không đúng. Hai cơ chế bảo vệ thực thi điều này:

1. **Mâu thuẫn địa chỉ literal** — một chỉ thị mâu thuẫn với máy chủ là địa chỉ IP literal sẽ ném lỗi tại thời điểm tạo dispatcher (`resolveDispatcherFamily`, được trình bày ở trên).

2. **Kiểm tra DNS trước cho tên máy chủ** — đối với proxy sử dụng tên máy chủ với một họ đã được cố định, `proxyFetch.ts` xác minh rằng tên máy chủ thực sự có bản ghi thuộc họ bắt buộc **trước khi** gửi lưu lượng ra ngoài, thông qua `assertHostnameSupportsFamily`:

   ```ts
   // open-sse/utils/proxyFamilyResolve.ts
   const hasFamily = records.some((r) => r.family === family);
   if (!hasFamily) {
     throw new Error(
       `[ProxyFamily] Proxy host ${host} has no ${family === 6 ? "IPv6 (AAAA)" : "IPv4 (A)"} record; ` +
         `refusing ${family === 6 ? "IPv6" : "IPv4"}-only egress (fail-closed)`
     );
   }
   ```

   Khi thất bại, `proxyFetch.ts` gắn `code = "PROXY_FAMILY_UNAVAILABLE"` và `statusCode = 503` vào lỗi. Lỗi phân giải DNS cũng được xử lý theo cơ chế đóng khi lỗi (từ chối gửi lưu lượng ra ngoài).

Các máy chủ là địa chỉ IP literal không cần thực hiện bước kiểm tra DNS trước — họ địa chỉ của chúng là thuộc tính nội tại và không cần tra cứu.

---

## Mô hình dữ liệu

Cột `family` được thêm bởi migration `099_proxy_family.sql` vào **hai** bảng:

```sql
-- src/lib/db/migrations/099_proxy_family.sql
ALTER TABLE proxy_registry ADD COLUMN family TEXT NOT NULL DEFAULT 'auto';
ALTER TABLE upstream_proxy_config ADD COLUMN family TEXT NOT NULL DEFAULT 'auto';
```

- `proxy_registry.family` — chỉ thị riêng cho từng proxy đối với các mục trong registry (`src/lib/db/proxies.ts`). Các truy vấn phân giải chọn `family` cùng với các cột proxy khác, và giá trị bị thiếu/không phải chuỗi sẽ được chuyển thành `"auto"`.
- `upstream_proxy_config.family` — chỉ thị dành cho các mục upstream proxy (`src/lib/db/upstreamProxy.ts`), với cùng giá trị mặc định `"auto"`.

Khi một đối tượng proxy đã phân giải chứa `family` khác `auto`, `proxyConfigToUrl` sẽ nối thêm dấu hiệu `?family=` để tùy chọn cố định này được giữ nguyên cho đến tận dispatcher.

---

## Tài liệu liên quan

> 📖 **Tài liệu liên quan:**
>
> - [Hướng dẫn về proxy](../ops/PROXY_GUIDE.md) — toàn bộ hệ thống proxy: CRUD cho registry, phân giải 4 cấp, luân phiên, kiểm tra tình trạng hoạt động, tài liệu tham khảo API
> - `docs/security/STEALTH_GUIDE.md` (git; không được biên dịch vào `/docs`) — các lớp dấu vân tay TLS và dấu vân tay CLI hoạt động phía trên proxy
> - [Các cấp bảo vệ route](./ROUTE_GUARD_TIERS.md) — thực thi loopback cho các route chỉ dành cho truy cập cục bộ
