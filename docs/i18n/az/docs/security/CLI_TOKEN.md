# CLI Machine-ID Token (Azərbaycan dili)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## İcmal

OmniRoute CLI əmrləri yerli idarəetmə API-sində autentifikasiya üçün
`x-omniroute-cli-token` sorğu başlığı vasitəsilə göndərilən
`HMAC-SHA256(machine-id, salt)` tokenindən istifadə edir.

Bu, CLI alt əmrlərinə (`omniroute status`, `omniroute providers` və s.) istifadəçidən
hər çağırışda JWT və ya parol təqdim etməsini tələb etmədən idarəetmə son nöqtələrini
çağırmağa imkan verir.

## İş prinsipi

1. `getMachineTokenSync()` `node-machine-id` vasitəsilə avadanlığın maşın ID-sini
   oxuyur (uğursuzluq halında boş sətrə keçir və CLI autentifikasiyasını deaktiv edir).
2. O, `HMAC-SHA256(machine_id, salt)` hesablayır və tam 64 simvolluq
   onaltılıq daycesti qaytarır — bu maşına bağlı deterministik, geri çevrilə bilməyən token.
3. CLI tokeni `x-omniroute-cli-token` kimi yalnız müəyyən edilmiş təyinat açıq şəkildə
   geri döngə URL-si (`localhost`, `127.0.0.0/8` və ya geri döngə IPv6) olduqda göndərir.
   Token daşıyan sorğular `redirect: error` istifadə edir, beləliklə yerli yönləndirmə onu
   başqa mənbəyə ötürə bilmir. Uzaq kontekstlər bunun əvəzinə əhatə dairəsi məhdudlaşdırılmış
   giriş tokenlərindən istifadə edir. Tokenin yaradılması mümkün olmadıqda CLI başlığı əlavə
   etmir və `omniroute doctor` boş tokeni etibarlı hesab etmək əvəzinə xətanı bildirir.
4. Server (`src/server/authz/policies/management.ts`) eyni duzdan istifadə edərək
   gözlənilən tokeni yenidən hesablayır və zamanlama əsasında çıxarışın qarşısını almaq üçün
   `timingSafeEqual` vasitəsilə müqayisə edir.

## Təhlükəsizlik xüsusiyyətləri

| Xüsusiyyət                            | Təfərrüat                                                                                                                                                                                                                                   |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Yalnız geri döngə**                 | Yalnız serverin etibar edilən həmkar lokallığı nişanı (real TCP həmkar ünvanından əldə edilir) geri döngəni göstərdikdə qəbul edilir. Müştərinin idarə etdiyi `Host` başlığına lokallığın müəyyənləşdirilməsi üçün heç vaxt etibar edilmir. |
| **Sabit zamanlı müqayisə**            | `crypto.timingSafeEqual` zamanlama hücumlarının qarşısını alır.                                                                                                                                                                             |
| **Geri çevrilə bilməyən**             | HMAC çıxışından maşın ID-sini bərpa etmək mümkün deyil.                                                                                                                                                                                     |
| **`always` ilə qorunan keçid yoxdur** | `isAlwaysProtectedPath()` CLI tokeni yoxlanılmamışdan əvvəl qiymətləndirilir. `/api/shutdown` və `/api/settings/database` həmişə JWT tələb edir.                                                                                            |
| **İxrac edilə bilməyən**              | Token heç vaxt diskə yazılmır və ya jurnala qeydə alınmır.                                                                                                                                                                                  |

## Duzun rotasiyası

Əldə edilən tokeni kod dəyişikliyi etmədən rotasiya etmək üçün `OMNIROUTE_CLI_SALT`
təyin edin. Rotasiyadan sonra bu maşındakı bütün CLI prosesləri avtomatik olaraq yeni
tokendən istifadə edəcək. Əvvəlki hesablanmış dəyəri ifşa etmiş ola biləcək proses
siyahısı sızmasından sonra faydalıdır.

```bash
# Daimi rotasiya (qabıq profilinə əlavə edin)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# Yeni tokenin istifadə olunduğunu yoxlayın
omniroute status
```

Standart duz: `omniroute-cli-auth-v1`

## Köhnə format (SHA-256, 32 simvol) — hələ də qəbul edilir

Yuxarıdakı HMAC formatından əvvəl CLI öz tokenini
`bin/cli/utils/cliToken.mjs` faylında (`src/lib/machineToken.ts` daxilində
`getLegacyCliTokenSync`) `SHA-256(machineId + salt).hex[0..32]` (32 simvolluq prefiks)
kimi əldə edirdi.

Geriyə uyğunluq üçün server **hər iki** formatı qəbul edir: yoxlayıcı
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]` yaradır və daxil olan
başlığı `timingSafeEqual` vasitəsilə hər biri ilə müqayisə edir
(`src/server/authz/policies/management.ts` və `src/lib/middleware/cliTokenAuth.ts`).
Beləliklə, token ya 64 simvolluq HMAC daycesti, ya da 32 simvolluq köhnə SHA-256
prefiksi ilə uyğun gəldikdə etibarlıdır.

**İmtina:** CLI token mexanizmini tamamilə deaktiv etmək üçün
`OMNIROUTE_DISABLE_CLI_TOKEN=true` (`env` və ya `.env`) təyin edin; bundan sonra bütün
girişlər açıq şəkildə API açarı tələb edəcək. Çoxistifadəçili hostlarda bu tövsiyə olunur,
çünki `machine-id` istifadəçi üçün deyil, cihaz üçün ayrıdır və eyni hostdakı başqa
istifadəçi eyni tokeni hesablaya bilər.

## Fayllar

| Fayl                                      | Məqsəd                                            |
| ----------------------------------------- | ------------------------------------------------- |
| `src/lib/machineToken.ts`                 | Tokenin əldə edilməsi (`getMachineTokenSync`)     |
| `src/server/authz/headers.ts`             | `CLI_TOKEN_HEADER` sabiti                         |
| `src/server/authz/policies/management.ts` | Server tərəfində yoxlama                          |
| `src/server/authz/routeGuard.ts`          | Geri döngə hostunun yoxlanması (`isLoopbackHost`) |

## Həmçinin baxın

- `docs/security/ROUTE_GUARD_TIERS.md` — marşrutun qorunma səviyyələri
- `docs/architecture/AUTHZ_GUIDE.md` — tam avtorizasiya emal xətti
