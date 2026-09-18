# CLI Machine-ID Token (Ελληνικά)

🌐 **Languages:** 🇺🇸 [English](../../../../security/CLI_TOKEN.md) · 🇪🇹 [am](../../../am/docs/security/CLI_TOKEN.md) · 🇸🇦 [ar](../../../ar/docs/security/CLI_TOKEN.md) · 🇦🇿 [az](../../../az/docs/security/CLI_TOKEN.md) · 🇧🇬 [bg](../../../bg/docs/security/CLI_TOKEN.md) · 🇧🇩 [bn](../../../bn/docs/security/CLI_TOKEN.md) · 🇨🇿 [cs](../../../cs/docs/security/CLI_TOKEN.md) · 🇩🇰 [da](../../../da/docs/security/CLI_TOKEN.md) · 🇩🇪 [de](../../../de/docs/security/CLI_TOKEN.md) · 🇪🇸 [es](../../../es/docs/security/CLI_TOKEN.md) · 🇪🇪 [et](../../../et/docs/security/CLI_TOKEN.md) · 🇮🇷 [fa](../../../fa/docs/security/CLI_TOKEN.md) · 🇫🇮 [fi](../../../fi/docs/security/CLI_TOKEN.md) · 🇫🇷 [fr](../../../fr/docs/security/CLI_TOKEN.md) · 🇮🇪 [ga](../../../ga/docs/security/CLI_TOKEN.md) · 🇮🇳 [gu](../../../gu/docs/security/CLI_TOKEN.md) · 🇳🇬 [ha](../../../ha/docs/security/CLI_TOKEN.md) · 🇮🇱 [he](../../../he/docs/security/CLI_TOKEN.md) · 🇮🇳 [hi](../../../hi/docs/security/CLI_TOKEN.md) · 🇭🇷 [hr](../../../hr/docs/security/CLI_TOKEN.md) · 🇭🇺 [hu](../../../hu/docs/security/CLI_TOKEN.md) · 🇦🇲 [hy](../../../hy/docs/security/CLI_TOKEN.md) · 🇮🇩 [id](../../../id/docs/security/CLI_TOKEN.md) · 🇳🇬 [ig](../../../ig/docs/security/CLI_TOKEN.md) · 🇮🇹 [it](../../../it/docs/security/CLI_TOKEN.md) · 🇯🇵 [ja](../../../ja/docs/security/CLI_TOKEN.md) · 🇬🇪 [ka](../../../ka/docs/security/CLI_TOKEN.md) · 🇰🇭 [km](../../../km/docs/security/CLI_TOKEN.md) · 🇮🇳 [kn](../../../kn/docs/security/CLI_TOKEN.md) · 🇰🇷 [ko](../../../ko/docs/security/CLI_TOKEN.md) · 🇱🇹 [lt](../../../lt/docs/security/CLI_TOKEN.md) · 🇱🇻 [lv](../../../lv/docs/security/CLI_TOKEN.md) · 🇮🇳 [ml](../../../ml/docs/security/CLI_TOKEN.md) · 🇮🇳 [mr](../../../mr/docs/security/CLI_TOKEN.md) · 🇲🇾 [ms](../../../ms/docs/security/CLI_TOKEN.md) · 🇲🇹 [mt](../../../mt/docs/security/CLI_TOKEN.md) · 🇲🇲 [my](../../../my/docs/security/CLI_TOKEN.md) · 🇳🇵 [ne](../../../ne/docs/security/CLI_TOKEN.md) · 🇳🇱 [nl](../../../nl/docs/security/CLI_TOKEN.md) · 🇳🇴 [no](../../../no/docs/security/CLI_TOKEN.md) · 🇮🇳 [or](../../../or/docs/security/CLI_TOKEN.md) · 🇮🇳 [pa](../../../pa/docs/security/CLI_TOKEN.md) · 🇵🇭 [phi](../../../phi/docs/security/CLI_TOKEN.md) · 🇵🇱 [pl](../../../pl/docs/security/CLI_TOKEN.md) · 🇵🇹 [pt](../../../pt/docs/security/CLI_TOKEN.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/CLI_TOKEN.md) · 🇷🇴 [ro](../../../ro/docs/security/CLI_TOKEN.md) · 🇷🇺 [ru](../../../ru/docs/security/CLI_TOKEN.md) · 🇱🇰 [si](../../../si/docs/security/CLI_TOKEN.md) · 🇸🇰 [sk](../../../sk/docs/security/CLI_TOKEN.md) · 🇸🇮 [sl](../../../sl/docs/security/CLI_TOKEN.md) · 🇷🇸 [sr](../../../sr/docs/security/CLI_TOKEN.md) · 🇸🇪 [sv](../../../sv/docs/security/CLI_TOKEN.md) · 🇰🇪 [sw](../../../sw/docs/security/CLI_TOKEN.md) · 🇮🇳 [ta](../../../ta/docs/security/CLI_TOKEN.md) · 🇮🇳 [te](../../../te/docs/security/CLI_TOKEN.md) · 🇹🇭 [th](../../../th/docs/security/CLI_TOKEN.md) · 🇹🇷 [tr](../../../tr/docs/security/CLI_TOKEN.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/CLI_TOKEN.md) · 🇵🇰 [ur](../../../ur/docs/security/CLI_TOKEN.md) · 🇺🇿 [uz](../../../uz/docs/security/CLI_TOKEN.md) · 🇻🇳 [vi](../../../vi/docs/security/CLI_TOKEN.md) · 🇳🇬 [yo](../../../yo/docs/security/CLI_TOKEN.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/CLI_TOKEN.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/CLI_TOKEN.md)

---

## Επισκόπηση

Οι εντολές του OmniRoute CLI πραγματοποιούν έλεγχο ταυτότητας στο τοπικό API διαχείρισης χρησιμοποιώντας ένα διακριτικό
`HMAC-SHA256(machine-id, salt)`, το οποίο αποστέλλεται μέσω της κεφαλίδας αιτήματος
`x-omniroute-cli-token`.

Αυτό επιτρέπει στις υποεντολές του CLI (`omniroute status`, `omniroute providers` κ.λπ.)
να καλούν τελικά σημεία διαχείρισης χωρίς να απαιτείται από τον χρήστη να παρέχει JWT ή
κωδικό πρόσβασης σε κάθε εκτέλεση.

## Πώς λειτουργεί

1. Η `getMachineTokenSync()` διαβάζει το αναγνωριστικό υλικού του μηχανήματος μέσω του `node-machine-id`
   (σε περίπτωση αποτυχίας χρησιμοποιεί ως εναλλακτική μια κενή συμβολοσειρά, απενεργοποιώντας τον έλεγχο ταυτότητας του CLI).
2. Υπολογίζει το `HMAC-SHA256(machine_id, salt)` και επιστρέφει την πλήρη δεκαεξαδική σύνοψη
   64 χαρακτήρων — ένα ντετερμινιστικό, μη αναστρέψιμο διακριτικό που συνδέεται με αυτό το μηχάνημα.
3. Το CLI αποστέλλει το διακριτικό ως `x-omniroute-cli-token` μόνο όταν ο προορισμός που προκύπτει
   είναι ένα ρητό URL loopback (`localhost`, `127.0.0.0/8` ή
   loopback IPv6). Τα αιτήματα που περιέχουν το διακριτικό χρησιμοποιούν `redirect: error`, ώστε μια τοπική
   ανακατεύθυνση να μην μπορεί να το προωθήσει σε διαφορετική προέλευση. Τα απομακρυσμένα περιβάλλοντα χρησιμοποιούν
   διακριτικά πρόσβασης περιορισμένου εύρους. Αν η παραγωγή δεν είναι διαθέσιμη, το CLI παραλείπει την κεφαλίδα
   και το `omniroute doctor` αναφέρει την αποτυχία αντί να θεωρεί έγκυρο ένα κενό διακριτικό.
4. Ο διακομιστής (`src/server/authz/policies/management.ts`) υπολογίζει εκ νέου το
   αναμενόμενο διακριτικό με το ίδιο salt και το συγκρίνει μέσω της `timingSafeEqual`, ώστε
   να αποτρέψει την εξαγωγή βάσει χρονισμού.

## Ιδιότητες ασφαλείας

| Ιδιότητα                                | Λεπτομέρεια                                                                                                                                                                                                                                                                                                  |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Μόνο loopback**                       | Γίνεται αποδεκτό μόνο όταν η αξιόπιστη σήμανση τοπικότητας του ομότιμου μέρους στον διακομιστή (η οποία προκύπτει από την πραγματική διεύθυνση του ομότιμου μέρους TCP) υποδεικνύει loopback. Η ελεγχόμενη από τον πελάτη κεφαλίδα `Host` δεν θεωρείται ποτέ αξιόπιστη για τον προσδιορισμό της τοπικότητας. |
| **Σύγκριση σταθερού χρόνου**            | Η `crypto.timingSafeEqual` αποτρέπει επιθέσεις χρονισμού.                                                                                                                                                                                                                                                    |
| **Μη αναστρέψιμο**                      | Από την έξοδο HMAC δεν μπορεί να ανακτηθεί το machine-id.                                                                                                                                                                                                                                                    |
| **Χωρίς παράκαμψη προστασίας `always`** | Η `isAlwaysProtectedPath()` αξιολογείται πριν από τον έλεγχο του διακριτικού CLI. Τα `/api/shutdown` και `/api/settings/database` απαιτούν πάντα JWT.                                                                                                                                                        |
| **Μη εξαγώγιμο**                        | Το διακριτικό δεν εγγράφεται ποτέ στον δίσκο ούτε καταγράφεται σε αρχεία καταγραφής.                                                                                                                                                                                                                         |

## Περιστροφή salt

Ορίστε το `OMNIROUTE_CLI_SALT` για να περιστρέψετε το παραγόμενο διακριτικό χωρίς αλλαγές στον κώδικα.
Μετά την περιστροφή, όλες οι διεργασίες CLI σε αυτό το μηχάνημα θα χρησιμοποιούν αυτόματα το νέο διακριτικό.
Αυτό είναι χρήσιμο μετά από διαρροή λίστας διεργασιών, η οποία ενδέχεται να εξέθεσε την
προηγούμενη παραγόμενη τιμή.

```bash
# Μόνιμη περιστροφή (προσθέστε το στο προφίλ του κελύφους)
export OMNIROUTE_CLI_SALT="my-secret-salt-2026"

# Επαληθεύστε ότι χρησιμοποιείται το νέο διακριτικό
omniroute status
```

Προεπιλεγμένο salt: `omniroute-cli-auth-v1`

## Παλαιός μορφότυπος (SHA-256, 32 χαρακτήρες) — εξακολουθεί να γίνεται αποδεκτός

Πριν από τον παραπάνω μορφότυπο HMAC, το CLI παρήγαγε το διακριτικό του ως
`SHA-256(machineId + salt).hex[0..32]` (ένα πρόθεμα 32 χαρακτήρων) στο
`bin/cli/utils/cliToken.mjs` (`getLegacyCliTokenSync` στο `src/lib/machineToken.ts`).

Για λόγους συμβατότητας προς τα πίσω, ο διακομιστής αποδέχεται **και τους δύο** μορφότυπους: ο επαληθευτής δημιουργεί
το `expectedTokens = [getMachineTokenSync(), getLegacyCliTokenSync()]` και συγκρίνει την
εισερχόμενη κεφαλίδα με καθένα από αυτά μέσω της `timingSafeEqual`
(`src/server/authz/policies/management.ts` και `src/lib/middleware/cliTokenAuth.ts`).
Επομένως, ένα διακριτικό είναι έγκυρο αν αντιστοιχεί **είτε** στη σύνοψη HMAC 64 χαρακτήρων είτε στο
παλαιό πρόθεμα SHA-256 των 32 χαρακτήρων.

**Απενεργοποίηση:** ορίστε το `OMNIROUTE_DISABLE_CLI_TOKEN=true` (στο περιβάλλον ή στο `.env`) για να απενεργοποιήσετε πλήρως τον μηχανισμό
διακριτικού CLI· τότε κάθε πρόσβαση απαιτεί ένα ρητό κλειδί API. Αυτό συνιστάται σε συστήματα
πολλών χρηστών, καθώς το `machine-id` αντιστοιχεί σε κάθε συσκευή (όχι σε κάθε χρήστη) και κάποιος άλλος
χρήστης στο ίδιο σύστημα θα μπορούσε να υπολογίσει το ίδιο διακριτικό.

## Αρχεία

| Αρχείο                                    | Σκοπός                                                   |
| ----------------------------------------- | -------------------------------------------------------- |
| `src/lib/machineToken.ts`                 | Παραγωγή διακριτικού (`getMachineTokenSync`)             |
| `src/server/authz/headers.ts`             | Σταθερά `CLI_TOKEN_HEADER`                               |
| `src/server/authz/policies/management.ts` | Επαλήθευση στην πλευρά του διακομιστή                    |
| `src/server/authz/routeGuard.ts`          | Έλεγχος κεντρικού υπολογιστή loopback (`isLoopbackHost`) |

## Δείτε επίσης

- `docs/security/ROUTE_GUARD_TIERS.md` — επίπεδα προστασίας διαδρομών
- `docs/architecture/AUTHZ_GUIDE.md` — πλήρης διοχέτευση εξουσιοδότησης
