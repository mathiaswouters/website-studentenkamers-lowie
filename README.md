# Studentenkamers Turnhout — Website

Een kant-en-klare website voor het verhuren van studentenkamers. Gebouwd met pure HTML, CSS en JavaScript — geen server of database nodig.

---

## 📁 Bestandsstructuur

```
studentenkamers-website/
├── index.html                  ← Homepage
├── kamers.html                 ← Overzicht van alle kamers
├── kamer-detail.html           ← Dynamische detail pagina (werkt voor ALLE kamers)
├── contact.html                ← Contactpagina
├── voorwaarden.html            ← Huisregels & huurvoorwaarden
├── room-data.js                ← ⭐ Alle kamer data in één bestand
├── styles.css                  ← Alle stijlen & kleuren
├── images/                     ← Map voor foto's (maak deze aan)
│   ├── building-exterior.jpg   ← Hero achtergrond foto
│   ├── outside-buidling-1.jpg  ← Gebouw showcase foto
│   ├── kamer-1.jpg             ← Foto per kamer (optioneel)
│   └── ...
└── README.md                   ← Dit bestand
```

### Belangrijkste concept: room-data.js

Alle kamer-informatie zit in **één bestand**: `room-data.js`. Pas je hier een prijs, beschrijving of kenmerk aan, dan wordt dat **automatisch** overal op de website bijgewerkt — op de overzichtspagina, de detail pagina, en de homepage. Je hoeft nergens anders te ingrepen.

De `kamer-detail.html` pagina werkt dynamisch via URL parameters:
- `kamer-detail.html?id=1` → toont kamer 1
- `kamer-detail.html?id=5` → toont kamer 5
- Voeg een nieuwe kamer toe in `room-data.js` en het werkt direct.

---

## 🎨 Kleurenschema's

Er zijn 3 kleurschema's beschikbaar, gedefinieerd bovenaan in `styles.css` via CSS variabelen:

| Schema | Beschrijving | Activeren |
|--------|-------------|-----------|
| **Blauw/Turquoise** (standaard) | Modern & professioneel | Al actief |
| **Groen/Natuur** | Fris & natuurlijk | Uncomment het groen blok in `styles.css` |
| **Oranje/Warm** | Energiek & vriendelijk | Uncomment het oranje blok in `styles.css` |

Om te wisselen: open `styles.css`, zoek naar `:root {` bovenaan, en:
1. Zet commentaar (`/* ... */`) voor het huidige blok
2. Verwijder de commentaar van het gewenste blok

---

## 🔧 Tekst & Inhoud Aanpassen

### Kamers wijzigen (prijzen, beschrijvingen, kenmerken)

Alles in **room-data.js**:

```javascript
{
    id: 1,
    name: "Kamer 1 - Ruime Studio",      // Naam
    price: "€425",                        // Prijs
    image: "images/kamer-1.jpg",          // Foto (optioneel, voeg toe indien gewenst)
    size: "22m²",                         // Oppervlakte
    floor: "Gelijkvloers",               // Verdieping
    furnished: "Volledig gemeubeld",     // Meubilair status
    features: [                          // Kenmerken (lijst)
        "Eigen bureau",
        "Ruime kledingkast",
        "Wastafel op kamer",
        "Grote ramen - veel licht"
    ],
    description: "Ruime kamer op het gelijkvloers..."  // Beschrijving
}
```

**Letop bij het beweren van kenmerken (features):**
- Elk item staat tussen aanhalingstekens `""`
- Elk item heeft een komma `,` erachter — behalve het laatste item in de lijst
- De sluitende `]` heeft een komma erachter als er nog meer velden volgen

### Nieuwe kamer toevoegen

Voeg een nieuw object toe aan het einde van de `rooms` array in `room-data.js`. Vergeet de komma niet na het voorafgaande kamer-object:

```javascript
    },  // ← komma na de vorige kamer
    {
        id: 11,
        name: "Kamer 11 - Nieuwe Kamer",
        price: "€450",
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

De kamer verschijnt automatisch op de overzichtspagina en heeft direct een werkende detail pagina via `kamer-detail.html?id=11`.

### Kamer verwijderen

Verwijder het volledige object (van `{` t/m de bijbehorende `}`) uit `room-data.js`, inclusief de komma ervoor of erna (zorg ervoor dat de syntax correct blijft).

### Contact info overal aanpassen

Gebruik "Zoeken en Vervangen" (Ctrl+H) in je editor en vervang in **alle** bestanden:

| Zoek naar | Vervang door |
|-----------|--------------|
| `info@studentenkamersturnhout.be` | Je eigen e-mailadres |
| `+32 123 45 67 89` | Je telefoonnummer |
| `Voorbeeldstraat 123, 2300 Turnhout` | Je werkelijke adres |

### Homepage tekst aanpassen

Open `index.html` en zoek naar de sectie die je wilt wijzigen. De opbouw is:
- **"Waarom Turnhout?"** — de 4 blokken met info over de stad
- **"Studentenleven"** — de feature items en locatie box
- **"Ons Pand"** — de building showcase sectie (tekst en features)
- **"Onze Studentenkamers"** — de "Wat Wij Bieden" en "Faciliteiten" lijsten
- **De CTA sectie** onderaan met de aanroep naar actie

### Voorwaarden & huisregels aanpassen

Open `voorwaarden.html` en zoek naar de `<ul class="rules-list">` secties. Elk `<li>` is een regel — bewerk de tekst binnen de tags naar eigen wil.

---

## 📸 Foto's Toevoegen

### Stap 1: Foto's voorbereiden

- Maak een map genaamd `images` in de website folder (als die nog niet bestaat)
- Formaat: JPG of PNG
- Grootte: max 1MB per foto, bij voorkeur 1920px breed
- Gebruik TinyPNG.com om te comprimeren indien nodig

### Stap 2: Hero achtergrond foto (bovenaan de homepage)

1. Plaats je foto in `images/` en hernoem naar `building-exterior.jpg`
2. In `styles.css` staat het pad al ingesteld: `background-image: url('./images/turnhout-6.jpg')` — verander dit naar `url('./images/building-exterior.jpg')` als je een andere bestandsnaam wilt
3. De overlay (donkerheid over de foto) is instelbaar via `background: rgba(0, 0, 0, 0.5)` in `.hero-overlay` — verhoog het laatste getal voor meer donkerheid

### Stap 3: Gebouw showcase foto (de grote foto op de homepage)

1. Plaats de foto in `images/` — de huidige foto heet `outside-buidling-1.jpg`
2. Vervang deze door jouw eigen foto met dezelfde naam, of verander het pad in `index.html` bij de `<img src="./images/outside-buidling-1.jpg"` regel

### Stap 4: Foto's per kamer

Voeg een `image` eigenschap toe in `room-data.js` bij elke kamer:

```javascript
{
    id: 1,
    name: "Kamer 1 - Ruime Studio",
    price: "€425",
    image: "images/kamer-1.jpg",   // ← voeg deze regel toe
    // ... rest blijft hetzelfde
}
```

Plaats de foto in de `images` map met de juiste naam en het werkt automatisch.

### Stap 5: Meerdere foto's per kamer (galerij)

Voeg een `images` array toe (extra aan de enkele `image`):

```javascript
{
    id: 1,
    image: "images/kamer-1.jpg",          // Hoofd foto
    images: [                              // Galerij (optioneel)
        "images/kamer-1-foto1.jpg",
        "images/kamer-1-foto2.jpg",
        "images/kamer-1-foto3.jpg"
    ],
    // ... rest
}
```

De galerij verschijnt automatisch op de detail pagina.

---

## 🛠️ De Detail Pagina (kamer-detail.html)

Dit is een enkele HTML pagina die dynamisch werkt voor **alle** kamers. Het leest de kamer-id uit de URL en haalt de bijbehorende data op uit `room-data.js`.

### Hoe het werkt

| URL | Resultaat |
|-----|-----------|
| `kamer-detail.html?id=1` | Toont kamer 1 |
| `kamer-detail.html?id=7` | Toont kamer 7 |
| `kamer-detail.html?id=999` | Toont "Kamer Niet Gevonden" melding |

### Aanpassen wat in de sidebar staat ("Inbegrepen")

Open `kamer-detail.html` en zoek naar `included-list`. De items in deze lijst gelden voor alle kamers. Voeg items toe of verwijder ze naar behoedt.

### Directe links delen

Je kunt een directe link naar een specifieke kamer delen via social media, email of QR code:
`https://jouwwebsite.nl/kamer-detail.html?id=5`

---

## 🚀 Website Online Zetten

### Optie 1: GitHub Pages (gratis)

1. Maak een GitHub account op github.com
2. Maak een nieuw repository aan
3. Upload alle bestanden naar dit repository
4. Ga naar **Settings → Pages**
5. Kies de `main` branch en klik **Save**
6. Je website is online op: `jouwgebruikersnaam.github.io/repository-naam`

### Optie 2: Netlify (gratis & simpel)

1. Ga naar netlify.com en maak een account
2. Drag & drop de hele website map in Netlify
3. Je krijgt direct een werkende URL
4. Later kan je een eigen domein koppelen

### Optie 3: Eigen hosting met domein

1. Koop een domein (bijv. via TransIP, Combell, One.com)
2. Upload alle bestanden via FTP naar de hosting
3. De website is bereikbaar via je eigen domein

---

## 📱 Responsief Design

De website werkt automatisch op desktop, tablet en smartphone. De navigatie past zich aan voor kleinere schermen en alle grids stacking automatisch.

Testen zonder echte telefoon: open de website in Chrome, druk F12, klik het telefoon-icoon, en kies een apparaat.

---

## ✅ Checklist voor Lancering

- [ ] Vervang dummy teksten door echte informatie
- [ ] Update contactgegevens (email, telefoon, adres)
- [ ] Kies een kleurenschema
- [ ] Voeg foto's toe (hero, gebouw, kamers)
- [ ] Test alle links door te klikken
- [ ] Test op mobiel
- [ ] Upload naar hosting
- [ ] Test de online versie

---

## 💡 Extra Tips

- **SEO:** Voeg `<meta name="description" content="...">` toe aan elke pagina voor betere Google-vindbaarheid
- **Contactformulier:** Overweeg Formspree.io voor een werkend contactformulier zonder server
- **Google Analytics:** Voeg tracking code toe om bezoeken te meten
- **Backup:** Maak altijd een kopie van de hele map voordat je wijzigingen maak