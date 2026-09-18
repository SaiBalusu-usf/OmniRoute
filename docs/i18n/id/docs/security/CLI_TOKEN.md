# CLI Machine-ID Token (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## Ikhtisar

Perintah OmniRoute CLI melakukan autentikasi terhadap API manajemen lokal menggunakan
token `HMAC-SHA256(machine-id, salt)` yang dikirim melalui header permintaan
`x-omniroute-cli-token`.

Hal ini memungkinkan subperintah CLI (`omniroute status`, `omniroute providers`, dll.)
memanggil endpoint manajemen tanpa mengharuskan pengguna memberikan JWT atau
kata sandi pada setiap pemanggilan.

## Cara kerjanya

1. `getMachineTokenSync()` membaca ID perangkat keras mesin melalui `node-machine-id`
   (menggunakan string kosong sebagai fallback jika gagal, sehingga autentikasi CLI dinonaktifkan).
2. Fungsi tersebut menghitung `HMAC-SHA256(machine_id, salt)` dan mengembalikan digest
   heksadesimal lengkap sepanjang 64 karakter — token deterministik dan tidak dapat dibalik
   yang terikat ke mesin ini.
3. CLI mengirimkan token sebagai `x-omniroute-cli-token` hanya ketika tujuan yang
   dihasilkan adalah URL loopback eksplisit (`localhost`, `127.0.0.0/8`, atau
   IPv6 loopback). Permintaan yang membawa token menggunakan `redirect: error`, sehingga
   pengalihan lokal tidak dapat meneruskannya ke origin lain. Konteks jarak jauh menggunakan
   token akses terbatas sebagai gantinya. Jika derivasi tidak tersedia, CLI menghilangkan
   header tersebut dan `omniroute doctor` melaporkan kegagalan alih-alih menganggap token
   kosong sebagai valid.
4. Server (`src/server/authz/policies/management.ts`) menghitung ulang token yang
   diharapkan dengan salt yang sama dan membandingkannya melalui `timingSafeEqual` untuk
   mencegah ekstraksi berbasis waktu.

## Properti keamanan

| Properti                                 | Detail                                                                                                                                                                                                                              |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Hanya loopback**                       | Diterima hanya ketika penanda lokalitas peer tepercaya milik server (yang diperoleh dari alamat peer TCP sebenarnya) menunjukkan loopback. Header `Host` yang dikendalikan klien tidak pernah dipercaya untuk menentukan lokalitas. |
| **Perbandingan waktu konstan**           | `crypto.timingSafeEqual` mencegah serangan berbasis waktu.                                                                                                                                                                          |
| **Tidak dapat dibalik**                  | Output HMAC tidak dapat digunakan untuk mendapatkan kembali machine-id.                                                                                                                                                             |
| **Tidak melewati perlindungan `always`** | `isAlwaysProtectedPath()` dievaluasi sebelum pemeriksaan token CLI. `/api/shutdown` dan `/api/settings/database` selalu memerlukan JWT.                                                                                             |
| **Tidak dapat diekspor**                 | Token tidak pernah ditulis ke disk atau dicatat dalam log.                                                                                                                                                                          |

## Rotasi salt

Tetapkan `OMNIROUTE_CLI_SALT` untuk merotasi token turunan tanpa perubahan kode.
Setelah rotasi, semua proses CLI pada mesin ini akan menggunakan token baru
secara otomatis. Berguna setelah kebocoran daftar proses yang mungkin telah mengekspos
nilai turunan sebelumnya.

```bash
# Rotasi persisten (tambahkan ke profil shell)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# Verifikasi bahwa token baru sedang digunakan
omniroute status
```

Salt default: `omniroute-cli-auth-v1`

## Format lama (SHA-256, 32 karakter) — masih diterima

Sebelum format HMAC di atas, CLI memperoleh tokennya sebagai
`SHA-256(machineId + salt).hex[0..32]` (prefiks 32 karakter) di
`bin/cli/utils/cliToken.mjs` (`getLegacyCliTokenSync` di `src/lib/machineToken.ts`).

Untuk kompatibilitas mundur, server menerima **kedua** format: pemverifikasi membuat
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]` dan membandingkan
header yang masuk dengan masing-masing token menggunakan `timingSafeEqual`
(`src/server/authz/policies/management.ts` dan `src/lib/middleware/cliTokenAuth.ts`).
Dengan demikian, token dianggap valid jika cocok dengan **salah satu** dari digest HMAC
64 karakter atau prefiks SHA-256 lama sepanjang 32 karakter.

**Penonaktifan:** tetapkan `OMNIROUTE_DISABLE_CLI_TOKEN=true` (env atau `.env`) untuk
menonaktifkan mekanisme token CLI sepenuhnya; setelah itu, semua akses memerlukan kunci
API eksplisit. Pada host multi-pengguna, hal ini direkomendasikan karena `machine-id`
berlaku per perangkat (bukan per pengguna), dan pengguna lain pada host yang sama dapat
menghitung token yang sama.

## Berkas

| Berkas                                    | Tujuan                                       |
| ----------------------------------------- | -------------------------------------------- |
| `src/lib/machineToken.ts`                 | Derivasi token (`getMachineTokenSync`)       |
| `src/server/authz/headers.ts`             | Konstanta `CLI_TOKEN_HEADER`                 |
| `src/server/authz/policies/management.ts` | Verifikasi sisi server                       |
| `src/server/authz/routeGuard.ts`          | Pemeriksaan host loopback (`isLoopbackHost`) |

## Lihat juga

- `docs/security/ROUTE_GUARD_TIERS.md` — tingkat perlindungan rute
- `docs/architecture/AUTHZ_GUIDE.md` — alur otorisasi lengkap
