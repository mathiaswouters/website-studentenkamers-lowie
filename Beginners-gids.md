# Eenvoudige Handleiding - Voor Beginners

Deze gids is voor mensen met weinig tot geen technische ervaring. Alles wordt stap-voor-stap uitgelegd.

## 📂 Wat heb je nodig?

1. **Een teksteditor** - Kies één van deze (allemaal gratis):
   - **Notepad++** (Windows) - Download via notepad-plus-plus.org
   - **Visual Studio Code** (Windows/Mac) - Download via code.visualstudio.com
   - **Kladblok** (Windows) - Al geïnstalleerd, maar minder handig

2. **Een browser** - Chrome, Firefox, Safari of Edge

## 🎯 Meest Voorkomende Aanpassingen

### 1️⃣ Prijzen van Kamers Veranderen

**Probleem:** Je wilt de prijs van kamer 3 veranderen van €450 naar €475.

**Oplossing:**
1. Zoek het bestand **room-data.js** in je website map
2. Klik rechts → "Openen met" → Kies je teksteditor
3. Druk op **Ctrl+F** (Windows) of **Cmd+F** (Mac) om de zoekfunctie te openen
4. Typ: `"€450"`
5. Je ziet nu de prijs gemarkeerd
6. Verander `"€450"` naar `"€475"`
7. Klik op **Bestand** → **Opslaan** (of druk Ctrl+S)
8. Klaar! Open index.html in je browser om het resultaat te zien

### 2️⃣ Telefoonnummer Aanpassen

**Probleem:** Je wilt het dummy telefoonnummer vervangen door je echte nummer.

**Oplossing:**
1. Open **ALLE** HTML bestanden (index.html, kamers.html, contact.html, etc.)
2. In je editor: **Bestand** → **Zoeken en vervangen in bestanden**
3. Zoek naar: `+32 123 45 67 89`
4. Vervang door: jouw telefoonnummer (bijv. `+32 14 12 34 56`)
5. Klik op "Vervang alles"
6. Sla alle bestanden op
7. Klaar!

**Alternatief (eenvoudiger maar trager):**
1. Open elk HTML bestand één voor één
2. Gebruik Ctrl+H (Zoeken & Vervangen)
3. Vervang het nummer
4. Sla op en ga naar het volgende bestand

### 3️⃣ Email Adres Aanpassen

**Stappen:**
1. Open alle HTML bestanden
2. Zoek en vervang functie (Ctrl+H):
   - Zoek: `info@studentenkamersturnhout.be`
   - Vervang door: jouw email adres
3. Klik "Vervang alles"
4. Sla alles op

### 4️⃣ Beschrijving van een Kamer Aanpassen

**Voorbeeld:** Je wilt de beschrijving van kamer 5 aanpassen.

**Stappen:**
1. Open **room-data.js**
2. Scroll naar beneden tot je deze tekst ziet:
   ```
   id: 5,
   name: "Kamer 5 - Lichte Kamer",
   ```
3. Scroll iets verder naar beneden tot je `description:` ziet
4. De tekst tussen de aanhalingstekens `"..."` is de beschrijving
5. Verander deze tekst naar wat je wilt
6. **Belangrijk:** Laat de aanhalingstekens `"` staan!
7. Sla op

**Voorbeeld:**
```javascript
// VOOR:
description: "Heerlijk lichte kamer met optimale werkruimte..."

// NA:
description: "Prachtige kamer met veel licht en ruimte voor studeren en ontspannen."
```

### 5️⃣ Kenmerken van een Kamer Toevoegen of Verwijderen

**Voorbeeld:** Je wilt een extra kenmerk toevoegen aan kamer 1.

**Stappen:**
1. Open **room-data.js**
2. Zoek kamer 1 (id: 1)
3. Zoek het stukje met `features: [`
4. Je ziet een lijst met kenmerken tussen `[` en `]`
5. Voeg een nieuw kenmerk toe:

```javascript
// VOOR:
features: [
    "Eigen bureau",
    "Ruime kledingkast",
    "Wastafel op kamer",
    "Grote ramen - veel licht"
],

// NA (met nieuw kenmerk):
features: [
    "Eigen bureau",
    "Ruime kledingkast",
    "Wastafel op kamer",
    "Grote ramen - veel licht",
    "Smart TV"  // <- Nieuw kenmerk toegevoegd
],
```

**Let op:**
- Elk kenmerk staat tussen aanhalingstekens `""`
- Elk kenmerk heeft een komma `,` erachter
- Het laatste kenmerk heeft GEEN komma

### 6️⃣ Foto's Toevoegen (Eenvoudigste Methode)

**Wat je nodig hebt:**
- Foto's van je kamers (bij voorkeur JPG formaat)
- De foto's moeten niet te groot zijn (max 2MB per foto)

**Stappen:**

**Stap 1: Foto's Voorbereiden**
1. Maak een nieuwe map genaamd `images` in je website folder
2. Kopieer al je kamer foto's naar deze map
3. Hernoem ze naar: `kamer-1.jpg`, `kamer-2.jpg`, etc.

**Stap 2: Foto's Koppelen aan Kamers**
1. Open **room-data.js**
2. Bij elke kamer, voeg deze regel toe (vlak na de `price:` regel):

```javascript
{
    id: 1,
    name: "Kamer 1 - Ruime Studio",
    price: "€425",
    image: "images/kamer-1.jpg",  // <- Deze regel toevoegen
    size: "22m²",
    // ... rest blijft hetzelfde
}
```

3. Doe dit voor alle kamers (kamer-1.jpg, kamer-2.jpg, etc.)
4. Sla op

**Stap 3: HTML Aanpassen (Eenmalig)**
1. Open **kamers.html**
2. Zoek naar deze regel (ongeveer regel 95):
   ```javascript
   <div class="card-image">🏠</div>
   ```
3. Vervang door:
   ```javascript
   <div class="card-image" style="background-image: url('${room.image}'); background-size: cover; background-position: center;"></div>
   ```
4. Sla op

5. Herhaal stap 2-4 voor **index.html** (zoek dezelfde regel)

6. Voor de individuele kamer pagina's (kamer-1.html, kamer-2.html, etc.):
   - Zoek: `<div class="card-image" style="height: 400px; border-radius: 12px; font-size: 5rem;">🏠</div>`
   - Vervang door: `<div class="card-image" style="height: 400px; border-radius: 12px; background-image: url('${room.image}'); background-size: cover; background-position: center;"></div>`

**Klaar!** Open de website in je browser - je foto's worden nu getoond!

## ⚠️ Veelgemaakte Fouten & Oplossingen

### Fout 1: Website ziet er raar uit na aanpassing
**Oplossing:** Je hebt waarschijnlijk per ongeluk iets verwijderd.
- Druk op **Ctrl+Z** om ongedaan te maken
- Of download de originele bestanden opnieuw

### Fout 2: Foto's worden niet getoond
**Checklist:**
- [ ] Staat de `images` map in dezelfde folder als je HTML bestanden?
- [ ] Zijn de bestandsnamen exact hetzelfde? (let op hoofdletters!)
- [ ] Zijn de foto's .jpg of .png formaat?
- [ ] Heb je `image: "images/kamer-1.jpg"` toegevoegd in room-data.js?

### Fout 3: Komma's en aanhalingstekens vergeten
**Symptoom:** Website werkt niet meer
**Oplossing:** 
- In room-data.js moet elk item eindigen met een komma (behalve het laatste)
- Tekst moet tussen aanhalingstekens: `"tekst hier"`
- Check of je ergens een `"` bent vergeten

**Voorbeeld van correcte syntax:**
```javascript
features: [
    "Kenmerk 1",     // <- komma
    "Kenmerk 2",     // <- komma
    "Kenmerk 3"      // <- GEEN komma (laatste item)
],                   // <- komma na de ]
```

## 🆘 Hulp Nodig?

### Controle Tools:
1. **Browser Console** (om fouten te zien):
   - Open je website in Chrome
   - Druk op **F12**
   - Klik op "Console"
   - Rode tekst = fout

2. **HTML/JavaScript Validator**:
   - Ga naar validator.w3.org
   - Upload je bestand om te checken op fouten

### Backup Maken:
**Maak ALTIJD een backup voordat je wijzigingen maakt!**
1. Kopieer je hele website folder
2. Hernoem naar: `studentenkoten-website-backup-[datum]`
3. Bewaar op een veilige plek

Als iets misgaat, kopieer gewoon de backup terug!

## ✅ Handige Tips

1. **Test altijd lokaal eerst** - Open index.html in je browser voordat je online zet
2. **Kleine stapjes** - Verander één ding tegelijk en test
3. **Bewaar originelen** - Houd altijd een kopie van de originele bestanden
4. **Gebruik Ctrl+F** - Zoeken is sneller dan scrollen
5. **Ctrl+Z is je vriend** - Maak fouten ongedaan

## 📱 Testen op Mobiel

**Zonder echte telefoon:**
1. Open website in Chrome
2. Druk op **F12**
3. Klik op het telefoon icoon (links bovenin)
4. Selecteer een telefoon type (bijv. iPhone 12)
5. Bekijk hoe je website eruit ziet op mobiel

**Met echte telefoon:**
1. Zorg dat je telefoon op hetzelfde WiFi netwerk zit
2. Op je computer: zoek je IP adres (ipconfig in CMD)
3. Op je telefoon: typ in browser: `http://[jouw-ip]:8000`
   (Als je een lokale server draait)

---

**Nog steeds vast?** Lees de volledige README.md voor meer details!