# Dynamische Kamer Detail Pagina - Handleiding

## 🎯 Wat Is Dit?

In plaats van 10 aparte HTML bestanden (kamer-1.html, kamer-2.html, etc.), heb je nu **1 slimme template**: `kamer-detail.html`

Deze pagina werkt voor **alle kamers** automatisch! Het leest de kamer data uit `room-data.js` en toont de juiste informatie.

## ✨ Voordelen

✅ **Makkelijk onderhoud** - Wijzig 1 bestand voor alle kamers
✅ **Automatisch** - Voeg een kamer toe in room-data.js en het werkt direct
✅ **Geen duplicatie** - Geen 10x dezelfde HTML code
✅ **Professioneel design** - Mooie layout met foto galerij

## 📋 Pagina Onderdelen

De kamer detail pagina bestaat uit:

1. **Hero Image** - Grote foto van de kamer bovenaan
2. **Header** - Naam, prijs en snelle specs (m², verdieping, gemeubeld)
3. **Beschrijving** - Uitgebreide omschrijving van de kamer
4. **Kenmerken** - Features in badges
5. **Foto Galerij** - Meerdere foto's (optioneel)
6. **Sidebar** - Contact box en "wat is inbegrepen"

## 🔧 Hoe Werkt Het?

### URL Systeem
De pagina gebruikt URL parameters om te weten welke kamer te tonen:

- `kamer-detail.html?id=1` → Toont kamer 1
- `kamer-detail.html?id=2` → Toont kamer 2
- `kamer-detail.html?id=10` → Toont kamer 10

### Automatische Links
Alle links zijn automatisch aangepast:
- **kamers.html** linkt naar `kamer-detail.html?id=X`
- **index.html** linkt naar `kamer-detail.html?id=X`

## 📸 Foto's Toevoegen

### Enkele Hoofd Foto per Kamer

1. Open **room-data.js**
2. Voeg een `image` property toe:

```javascript
{
    id: 1,
    name: "Kamer 1 - Ruime Studio",
    price: "€425",
    image: "images/kamer-1-main.jpg",  // ← Voeg deze regel toe
    size: "22m²",
    floor: "Gelijkvloers",
    // ... rest
}
```

3. Plaats de foto in de `images` map met de juiste naam
4. Klaar! De foto verschijnt automatisch op de detail pagina

### Meerdere Foto's (Galerij)

Voor een foto galerij met meerdere foto's per kamer:

1. Open **room-data.js**
2. Voeg een `images` array toe:

```javascript
{
    id: 1,
    name: "Kamer 1 - Ruime Studio",
    price: "€425",
    image: "images/kamer-1-main.jpg",    // Hoofd foto
    images: [                              // Galerij foto's
        "images/kamer-1-photo1.jpg",
        "images/kamer-1-photo2.jpg",
        "images/kamer-1-photo3.jpg",
        "images/kamer-1-photo4.jpg"
    ],
    size: "22m²",
    // ... rest
}
```

3. Plaats alle foto's in de `images` map
4. De galerij verschijnt automatisch onder de beschrijving!

**Tip:** Gebruik 3, 6, of 9 foto's voor een mooie grid layout.

## ✏️ Content Aanpassen

### Kamer Informatie Wijzigen

**Alle kamer data zit in 1 bestand: `room-data.js`**

Open dit bestand en pas aan wat je wilt:

```javascript
{
    id: 1,
    name: "Kamer 1 - Ruime Studio",      // Naam
    price: "€425",                        // Prijs
    size: "22m²",                         // Oppervlakte
    floor: "Gelijkvloers",               // Verdieping
    furnished: "Volledig gemeubeld",     // Meubilair
    features: [                          // Kenmerken (voeg toe/verwijder)
        "Eigen bureau",
        "Ruime kledingkast",
        "Wastafel op kamer",
        "Grote ramen - veel licht"
    ],
    description: "Ruime kamer op..."     // Beschrijving
}
```

Sla op en **alle pagina's updaten automatisch**!

### Layout van Detail Pagina Aanpassen

Wil je de layout van de detail pagina zelf wijzigen?

Open **kamer-detail.html** - Deze wijzigingen gelden dan voor ALLE kamers.

**Voorbeelden:**

**Sidebar positie veranderen:**
Zoek naar `.room-content-grid` in de `<style>` sectie:
```css
.room-content-grid {
    display: grid;
    grid-template-columns: 1fr 2fr; /* Verander naar 1fr 2fr voor sidebar links */
    gap: 2rem;
}
```

**Hero image hoger/lager:**
Zoek naar `.room-detail-hero`:
```css
.room-detail-hero {
    height: 500px; /* Verander naar 400px of 600px */
}
```

## 🗑️ Oude Kamer Pagina's Verwijderen

Je hebt nu **kamer-detail.html** dus je kan de oude bestanden verwijderen:
- kamer-1.html
- kamer-2.html
- kamer-3.html
- ... t/m kamer-10.html

Deze zijn niet meer nodig! Alles werkt via **kamer-detail.html**

## 🆕 Nieuwe Kamer Toevoegen

Super simpel:

1. Open **room-data.js**
2. Voeg een nieuwe kamer toe aan het einde:

```javascript
    },  // ← Vergeet de komma niet na kamer 10!
    {
        id: 11,
        name: "Kamer 11 - Nieuwe Kamer",
        price: "€450",
        image: "images/kamer-11.jpg",
        size: "21m²",
        floor: "1ste verdieping",
        furnished: "Volledig gemeubeld",
        features: [
            "Feature 1",
            "Feature 2"
        ],
        description: "Beschrijving van de nieuwe kamer..."
    }
];
```

3. Sla op
4. **Klaar!** De kamer verschijnt automatisch op:
   - kamers.html (overzicht)
   - kamer-detail.html?id=11 (detail pagina)

Geen HTML aanpassen nodig!

## 🎨 Sidebar "Inbegrepen" Lijst Aanpassen

Open **kamer-detail.html** en zoek naar de `.included-box` sectie:

```html
<ul class="included-list">
    <li>Gratis WiFi internet</li>
    <li>Water, gas & elektriciteit</li>
    <li>Volledig gemeubeld</li>
    <li>Gedeelde keuken</li>
    <li>Wasmachine & droogkast</li>
    <li>Fietsenstalling</li>
    <li>Onderhoud & service</li>
</ul>
```

Voeg items toe of verwijder ze. Dit geldt dan voor alle kamers!

## 📱 Mobiele Weergave

De pagina is volledig responsive:
- **Desktop:** 2 kolommen (content links, sidebar rechts)
- **Tablet:** 2 kolommen (aangepast)
- **Mobiel:** 1 kolom (alles onder elkaar)

## 🔗 Direct Linken naar een Kamer

Wil je een directe link delen naar bijvoorbeeld kamer 5?

Gebruik: `https://jouwwebsite.nl/kamer-detail.html?id=5`

Dit werkt perfect voor:
- Social media posts
- Email campagnes
- QR codes

## ⚙️ Geavanceerde Aanpassingen

### Custom Fields Toevoegen

Wil je extra velden zoals "beschikbaar vanaf"?

1. Voeg toe aan **room-data.js**:
```javascript
{
    id: 1,
    name: "Kamer 1",
    availableFrom: "1 september 2026",  // Nieuw veld
    // ... rest
}
```

2. Toon het in **kamer-detail.html**:
```javascript
// Zoek de plek waar je het wilt tonen en voeg toe:
if (room.availableFrom) {
    document.getElementById('someElement').textContent = room.availableFrom;
}
```

### Kamer Specifieke Styling

Wil je dat sommige kamers er anders uitzien?

Voeg een `type` veld toe in room-data.js:
```javascript
{
    id: 7,
    type: "premium",  // Premium kamers
    // ... rest
}
```

En in kamer-detail.html:
```javascript
if (room.type === 'premium') {
    document.querySelector('.room-header').style.background = 'gold';
}
```

## ⚠️ Veelgemaakte Fouten

### Fout 1: Kamer wordt niet gevonden
**Symptoom:** Pagina toont "Kamer Niet Gevonden"
**Oplossing:** Check of het `id` in de URL overeenkomt met een `id` in room-data.js

### Fout 2: Foto's laden niet
**Checklist:**
- [ ] Staat de foto in de `images` map?
- [ ] Klopt de bestandsnaam in room-data.js?
- [ ] Is het pad correct? (bijv. `images/kamer-1.jpg` niet `image/kamer-1.jpg`)

### Fout 3: Wijzigingen niet zichtbaar
**Oplossing:** Hard refresh met **Ctrl+F5** (of Cmd+Shift+R op Mac)

## 💡 Pro Tips

1. **Consistente Foto's:** Gebruik foto's met dezelfde aspect ratio (bijv. 4:3) voor een nette galerij
2. **Foto Volgorde:** Zet de beste foto eerst in de `images` array
3. **Beschrijving Lengte:** Houd de beschrijving tussen 100-200 woorden voor beste leesbaarheid
4. **Features:** Gebruik 4-8 features per kamer - niet te veel, niet te weinig

## 🔄 Oude vs Nieuwe Systeem

### VOOR (10 aparte bestanden):
```
kamer-1.html  ← Moet je 10x aanpassen
kamer-2.html  ← voor elke wijziging
kamer-3.html
...
kamer-10.html
```

### NA (1 dynamisch bestand):
```
kamer-detail.html  ← Pas 1x aan voor alle kamers
room-data.js       ← Kamer data centraal
```

**Resultaat:** 90% minder werk bij updates! 🎉

## 📞 Links en Contact

De contact links in de sidebar gebruiken automatisch de kamer naam:
- Email subject: "Interesse in Kamer X - Naam"
- Telefoon en email zijn dezelfde voor alle kamers

Wil je per kamer andere contactgegevens? Voeg toe in room-data.js:
```javascript
{
    id: 1,
    contactEmail: "kamer1@example.com",  // Optioneel
    contactPhone: "+32 123 45 67 89"     // Optioneel
}
```
