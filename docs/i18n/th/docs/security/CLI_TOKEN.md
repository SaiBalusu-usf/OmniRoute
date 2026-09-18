# CLI Machine-ID Token (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇬🇷 [el](../../../el/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## ภาพรวม

คำสั่ง OmniRoute CLI ยืนยันตัวตนกับ API การจัดการภายในเครื่องโดยใช้โทเค็น
`HMAC-SHA256(machine-id, salt)` ซึ่งส่งผ่านส่วนหัวคำขอ `x-omniroute-cli-token`

วิธีนี้ช่วยให้คำสั่งย่อยของ CLI (`omniroute status`, `omniroute providers` เป็นต้น)
สามารถเรียกใช้ปลายทางการจัดการได้โดยผู้ใช้ไม่ต้องระบุ JWT หรือรหัสผ่าน
ทุกครั้งที่เรียกใช้งาน

## วิธีการทำงาน

1. `getMachineTokenSync()` อ่านรหัสเครื่องของฮาร์ดแวร์ผ่าน `node-machine-id`
   (หากล้มเหลวจะใช้สตริงว่างแทน ซึ่งเป็นการปิดใช้งานการยืนยันตัวตนของ CLI)
2. ฟังก์ชันจะคำนวณ `HMAC-SHA256(machine_id, salt)` และส่งคืนค่าไดเจสต์ฐานสิบหก
   ความยาวเต็ม 64 อักขระ ซึ่งเป็นโทเค็นที่ให้ผลลัพธ์แน่นอน ย้อนกลับไม่ได้ และผูกกับเครื่องนี้
3. CLI จะส่งโทเค็นเป็น `x-omniroute-cli-token` เฉพาะเมื่อปลายทางที่ได้จากการแปลงค่า
   เป็น URL ลูปแบ็กที่ระบุอย่างชัดเจน (`localhost`, `127.0.0.0/8` หรือ
   IPv6 แบบลูปแบ็ก) คำขอที่มีโทเค็นจะใช้ `redirect: error` ดังนั้นการเปลี่ยนเส้นทาง
   ภายในเครื่องจึงไม่สามารถส่งต่อโทเค็นไปยังต้นทางอื่นได้ บริบทระยะไกลจะใช้
   โทเค็นการเข้าถึงแบบจำกัดขอบเขตแทน หากไม่สามารถสร้างโทเค็นได้ CLI จะละเว้นส่วนหัวนี้
   และ `omniroute doctor` จะรายงานความล้มเหลวแทนที่จะถือว่าโทเค็นว่าง
   เป็นโทเค็นที่ถูกต้อง
4. เซิร์ฟเวอร์ (`src/server/authz/policies/management.ts`) จะคำนวณโทเค็น
   ที่คาดไว้อีกครั้งโดยใช้ salt เดียวกัน และเปรียบเทียบด้วย `timingSafeEqual`
   เพื่อป้องกันการดึงข้อมูลด้วยการวิเคราะห์เวลา

## คุณสมบัติด้านความปลอดภัย

| คุณสมบัติ                         | รายละเอียด                                                                                                                                                                           |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **เฉพาะลูปแบ็ก**                  | ยอมรับเฉพาะเมื่อค่าระบุตำแหน่งของเพียร์ที่เซิร์ฟเวอร์เชื่อถือ (ซึ่งได้จากที่อยู่เพียร์ TCP จริง) ระบุว่าเป็นลูปแบ็ก ส่วนหัว `Host` ที่ไคลเอนต์ควบคุมจะไม่ถูกเชื่อถือเพื่อระบุตำแหน่ง |
| **การเปรียบเทียบแบบเวลาคงที่**    | `crypto.timingSafeEqual` ป้องกันการโจมตีแบบวิเคราะห์เวลา                                                                                                                             |
| **ย้อนกลับไม่ได้**                | ไม่สามารถใช้เอาต์พุต HMAC เพื่อกู้คืน machine-id ได้                                                                                                                                 |
| **ไม่ข้ามการป้องกันแบบ `always`** | `isAlwaysProtectedPath()` จะถูกประเมินก่อนตรวจสอบโทเค็น CLI โดย `/api/shutdown` และ `/api/settings/database` ต้องใช้ JWT เสมอ                                                        |
| **ไม่สามารถส่งออกได้**            | โทเค็นจะไม่ถูกเขียนลงดิสก์หรือบันทึกในล็อก                                                                                                                                           |

## การหมุนเวียน salt

ตั้งค่า `OMNIROUTE_CLI_SALT` เพื่อหมุนเวียนโทเค็นที่สร้างขึ้นโดยไม่ต้องแก้ไขโค้ด
หลังการหมุนเวียน กระบวนการ CLI ทั้งหมดบนเครื่องนี้จะใช้โทเค็นใหม่
โดยอัตโนมัติ วิธีนี้มีประโยชน์หลังเกิดการรั่วไหลของรายการกระบวนการ ซึ่งอาจเปิดเผย
ค่าที่สร้างขึ้นก่อนหน้านี้

```bash
# การหมุนเวียนแบบถาวร (เพิ่มลงในโปรไฟล์เชลล์)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# ตรวจสอบว่ากำลังใช้โทเค็นใหม่
omniroute status
```

salt เริ่มต้น: `omniroute-cli-auth-v1`

## รูปแบบเดิม (SHA-256, 32 อักขระ) — ยังคงรองรับ

ก่อนใช้รูปแบบ HMAC ข้างต้น CLI สร้างโทเค็นเป็น
`SHA-256(machineId + salt).hex[0..32]` (คำนำหน้าความยาว 32 อักขระ) ใน
`bin/cli/utils/cliToken.mjs` (`getLegacyCliTokenSync` ใน `src/lib/machineToken.ts`)

เพื่อรักษาความเข้ากันได้ย้อนหลัง เซิร์ฟเวอร์จึงรองรับ **ทั้งสอง** รูปแบบ โดยตัวตรวจสอบจะสร้าง
`expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]` และเปรียบเทียบ
ส่วนหัวขาเข้ากับแต่ละค่าด้วย `timingSafeEqual`
(`src/server/authz/policies/management.ts` และ `src/lib/middleware/cliTokenAuth.ts`)
ดังนั้นโทเค็นจะถูกต้องหากตรงกับ **อย่างใดอย่างหนึ่ง** ระหว่างไดเจสต์ HMAC ความยาว 64 อักขระ
หรือคำนำหน้า SHA-256 แบบเดิมความยาว 32 อักขระ

**การปิดใช้งาน:** ตั้งค่า `OMNIROUTE_DISABLE_CLI_TOKEN=true` (ผ่าน env หรือ `.env`) เพื่อปิดใช้งาน
กลไกโทเค็น CLI ทั้งหมด หลังจากนั้นการเข้าถึงทุกครั้งจะต้องใช้ API key ที่ระบุอย่างชัดเจน สำหรับโฮสต์
ที่มีผู้ใช้หลายคน ขอแนะนำให้ปิดใช้งาน เนื่องจาก `machine-id` เป็นค่าต่ออุปกรณ์ (ไม่ใช่ต่อผู้ใช้) และผู้ใช้รายอื่น
บนโฮสต์เดียวกันอาจคำนวณโทเค็นเดียวกันได้

## ไฟล์

| ไฟล์                                      | วัตถุประสงค์                              |
| ----------------------------------------- | ----------------------------------------- |
| `src/lib/machineToken.ts`                 | การสร้างโทเค็น (`getMachineTokenSync`)    |
| `src/server/authz/headers.ts`             | ค่าคงที่ `CLI_TOKEN_HEADER`               |
| `src/server/authz/policies/management.ts` | การตรวจสอบฝั่งเซิร์ฟเวอร์                 |
| `src/server/authz/routeGuard.ts`          | การตรวจสอบโฮสต์ลูปแบ็ก (`isLoopbackHost`) |

## ดูเพิ่มเติม

- `docs/security/ROUTE_GUARD_TIERS.md` — ระดับการป้องกันเส้นทาง
- `docs/architecture/AUTHZ_GUIDE.md` — กระบวนการอนุญาตสิทธิ์ทั้งหมด
