# Studentenkamers Turnhout - Website

[Beginner Gids](./Beginners-gids.md)
[Hero Image Instructies](./Hero-Image-Instructies.md)

## 📁 Structuur

De website bestaat uit:
- **index.html** - Homepage met intro over Turnhout, studentenleven en kamer preview
- **kamers.html** - Overzicht van alle 10 kamers
- **kamer-1.html t/m kamer-10.html** - Individuele detailpagina's per kamer
- **contact.html** - Contactpagina met telefoon en email
- **voorwaarden.html** - Huisregels en huurvoorwaarden
- **styles.css** - Stylesheet (standaard: blauw kleurenschema)

## 🎨 Kleurenschema's

Er zijn 3 verschillende kleurenschema's beschikbaar:

### 1. Blauw/Turquoise (Standaard)
- Modern en professioneel
- Bestand: `styles-blue.css`

### 2. Groen/Natuur
- Fris en natuurlijk
- Bestand: `styles-green.css`

### 3. Oranje/Warm
- Energiek en vriendelijk
- Bestand: `styles-orange.css`

**Om van kleur te veranderen:**
1. Vervang `styles.css` met het gewenste bestand (bijv. hernoem `styles-green.css` naar `styles.css`)
2. Of verander in alle HTML bestanden `<link rel="stylesheet" href="styles.css">` naar het gewenste stylesheet

## 📝 Website Onderhouden - Volledige Gids

### 🔧 Tekst Aanpassen op de Website

#### Homepage (index.html) Aanpassen
1. Open **index.html** in een teksteditor (Notepad++, VS Code, of zelfs Kladblok)
2. Zoek naar de tekst die je wilt aanpassen
3. Voorbeelden:

**Hoofdtitel aanpassen:**
```html
<!-- Zoek naar: -->
<h1>Welkom bij Studentenkamers Turnhout</h1>
<!-- Verander naar bijv: -->
<h1>Welkom bij De Beste Studentenkamers</h1>
```

**Intro tekst over Turnhout aanpassen:**
```html
<!-- Zoek in de sectie "Waarom Turnhout?" -->
<p>Turnhout combineert historische charme met moderne voorzieningen...</p>
<!-- Vervang de hele paragraaf met jouw eigen tekst -->
```

**Faciliteiten aanpassen:**
```html
<!-- Zoek naar: -->
<div class="feature-item">🍕 Diverse restaurants & cafés</div>
<!-- Voeg toe of verwijder items zoals je wilt -->
```

#### Contact Informatie Overal Aanpassen
Gebruik "Zoek en vervang" functie in je editor:

1. **Email aanpassen:**
   - Zoek: `info@studentenkamersturnhout.be`
   - Vervang door: `jouw-email@example.com`
   - Vervang in **ALLE** bestanden

2. **Telefoonnummer aanpassen:**
   - Zoek: `+32 123 45 67 89`
   - Vervang door: `jouw telefoonnummer`
   - Vervang in **ALLE** bestanden

3. **Adres aanpassen:**
   - Zoek: `Voorbeeldstraat 123, 2300 Turnhout`
   - Vervang door: `jouw adres`
   - Vervang in contact.html en index.html

#### Voorwaarden & Huisregels Aanpassen (voorwaarden.html)
1. Open **voorwaarden.html**
2. Zoek naar de `<ul class="rules-list">` secties
3. Pas individuele regels aan:

```html
<li>
    <strong>Huurperiode</strong><br>
    Minimaal 1 academiejaar (september - juni).
</li>
<!-- Verander de tekst naar jouw eigen voorwaarden -->
```

### 🏠 Kamer Informatie Aanpassen

#### Bestaande Kamers Wijzigen
1. Open **room-data.js**
2. Zoek de kamer die je wilt wijzigen (bijvoorbeeld kamer 1)
3. Pas de gegevens aan:

```javascript
{
    id: 1,
    name: "Kamer 1 - Ruime Studio",  // Verander de naam
    price: "€425",                    // Verander de prijs
    size: "22m²",                     // Verander de oppervlakte
    floor: "Gelijkvloers",           // Verander de verdieping
    furnished: "Volledig gemeubeld",
    features: [                       // Voeg kenmerken toe of verwijder ze
        "Eigen bureau",
        "Ruime kledingkast",
        "Wastafel op kamer",
        "Grote ramen - veel licht"
    ],
    description: "Ruime kamer op..."  // Verander de beschrijving
}
```

4. Sla het bestand op
5. Refresh je browser - de wijzigingen zijn direct zichtbaar!

#### Nieuwe Kamer Toevoegen (Kamer 11)

**Stap 1: Voeg de kamer toe aan room-data.js**
1. Open **room-data.js**
2. Scroll naar het einde van de lijst (na kamer 10)
3. Voeg een komma toe na het laatste kamer object
4. Voeg de nieuwe kamer toe:

```javascript
    },  // <- Vergeet deze komma niet na kamer 10!
    {
        id: 11,
        name: "Kamer 11 - Jouw Naam",
        price: "€400",
        size: "20m²",
        floor: "1ste verdieping",
        furnished: "Volledig gemeubeld",
        features: [
            "Feature 1",
            "Feature 2",
            "Feature 3"
        ],
        description: "Beschrijving van de nieuwe kamer..."
    }
];
```

**Stap 2: Maak een nieuwe HTML pagina voor kamer 11**
1. Kopieer **kamer-10.html**
2. Hernoem de kopie naar **kamer-11.html**
3. Open **kamer-11.html** in je editor
4. Zoek en vervang:
   - Zoek: `const roomId = 10;`
   - Vervang door: `const roomId = 11;`
   - Zoek: `Kamer 10` (in de title tag)
   - Vervang door: `Kamer 11`
   - Zoek: `subject=Interesse in Kamer 10`
   - Vervang door: `subject=Interesse in Kamer 11`

5. Sla op - de nieuwe kamer is klaar!

#### Kamer Verwijderen
1. Open **room-data.js**
2. Verwijder het hele kamer object (inclusief de komma's)
3. Verwijder het bijbehorende **kamer-X.html** bestand
4. Klaar!

### 📸 Foto's Toevoegen

#### Voorbereiding
1. Maak een nieuwe map genaamd **images** in je website folder
2. Plaats al je foto's in deze map
3. Geef foto's duidelijke namen: `kamer-1.jpg`, `kamer-2.jpg`, etc.
4. Gebruik bij voorkeur JPG of PNG formaat
5. Optimaliseer foto's (max 1920px breed, 500-800KB per foto)

#### Methode 1: Foto's Toevoegen aan Kamer Overzicht

**Optie A: Via CSS (Eenvoudigst)**
1. Open **styles.css**
2. Zoek naar `.card-image` (rond regel 192)
3. Voeg achtergrond afbeelding toe:

```css
.card-image {
    width: 100%;
    height: 200px;
    background: url('images/default-room.jpg'); /* Voeg deze regel toe */
    background-size: cover;                      /* En deze */
    background-position: center;                 /* En deze */
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
}
```

4. Verwijder de emoji (🏠) uit de HTML bestanden als je wilt

**Optie B: Individuele Foto's per Kamer (Geavanceerd)**

1. Open **room-data.js**
2. Voeg een `image` property toe aan elke kamer:

```javascript
{
    id: 1,
    name: "Kamer 1 - Ruime Studio",
    price: "€425",
    image: "images/kamer-1.jpg",  // <- Voeg deze regel toe
    size: "22m²",
    // ... rest van de data
}
```

3. Open **kamers.html**
4. Zoek de regel waar de card-image wordt gemaakt (in de JavaScript sectie):

```javascript
// Zoek naar:
card.innerHTML = `
    <div class="card-image">🏠</div>

// Vervang door:
card.innerHTML = `
    <div class="card-image" style="background-image: url('${room.image}'); background-size: cover; background-position: center;">
        ${room.image ? '' : '🏠'}
    </div>
```

5. Herhaal dit voor **index.html** (bij de room preview sectie)

#### Methode 2: Foto's op Individuele Kamer Pagina's

1. Open **room-data.js** en voeg foto's toe (zie hierboven)

2. Open **elk kamer-X.html bestand** (of doe dit in één kamer bestand als template)
3. Zoek in de JavaScript naar:

```javascript
<div class="card-image" style="height: 400px; border-radius: 12px; font-size: 5rem;">🏠</div>
```

4. Vervang door:

```javascript
<div class="card-image" style="height: 400px; border-radius: 12px; background-image: url('${room.image}'); background-size: cover; background-position: center;">
    ${room.image ? '' : '🏠'}
</div>
```

#### Methode 3: Meerdere Foto's per Kamer (Galerij)

1. Open **room-data.js**
2. Verander `image` naar `images` array:

```javascript
{
    id: 1,
    name: "Kamer 1",
    images: [
        "images/kamer-1-a.jpg",
        "images/kamer-1-b.jpg",
        "images/kamer-1-c.jpg"
    ],
    // ... rest
}
```

3. In de kamer detail pagina's, voeg een galerij toe:

```javascript
// In de kamer-X.html, voeg toe na de hoofd foto:
<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: 2rem;">
    ${room.images ? room.images.map(img => `
        <img src="${img}" alt="Kamer foto" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;">
    `).join('') : ''}
</div>
```

### 🎨 Kleuren Aanpassen

1. Open **styles.css**
2. Zoek naar `:root` (regel 8-14)
3. Pas de kleuren aan:

```css
:root {
    --primary-color: #0ea5e9;      /* Hoofdkleur */
    --primary-dark: #0284c7;       /* Donkere variant */
    --secondary-color: #06b6d4;    /* Secundaire kleur */
    --accent-color: #f0f9ff;       /* Lichte achtergrond */
    --text-dark: #0c4a6e;          /* Donkere tekst */
}
```

Gebruik een color picker tool online om hex codes te vinden (#xxxxxx)

### 📋 Checklist na Wijzigingen

- [ ] Test alle pagina's in je browser
- [ ] Klik alle links door om te checken of ze werken
- [ ] Test op mobiel (of gebruik browser developer tools)
- [ ] Check of foto's correct laden
- [ ] Controleer of kamers correct worden weergegeven
- [ ] Test contact links (email & telefoon)
- [ ] Spelling & grammatica check

## 🚀 Website Online Zetten

### Optie 1: Gratis Hosting via GitHub Pages
1. Maak een GitHub account
2. Upload alle bestanden naar een repository
3. Ga naar Settings → Pages
4. Kies de main branch en klik Save
5. Je website is online op: `jouwgebruikersnaam.github.io/repository-naam`

### Optie 2: Eigen Domein
1. Koop een domein (bijv. via TransIP, Combell, One.com)
2. Upload alle bestanden via FTP naar je hosting
3. Je website is bereikbaar via je eigen domein

### Optie 3: Netlify (Gratis & Simpel)
1. Ga naar netlify.com
2. Drag & drop de hele map in Netlify
3. Je krijgt direct een gratis subdomain
4. Later kun je een eigen domein koppelen

## 📱 Responsive Design

De website werkt perfect op:
- Desktop computers
- Tablets
- Smartphones

De navigatie past zich automatisch aan voor kleinere schermen.

## ✅ Checklist voor Lancering

- [ ] Vervang dummy content met echte kamer informatie
- [ ] Update contactgegevens (email, telefoon, adres)
- [ ] Kies en implementeer kleurenschema
- [ ] Voeg echte foto's toe (optioneel)
- [ ] Test alle links en pagina's
- [ ] Test op mobiel
- [ ] Upload naar hosting
- [ ] Test de online versie

## 🛠️ Technische Details

- Pure HTML, CSS en JavaScript (geen frameworks nodig)
- Werkt in alle moderne browsers
- Geen database of server-side code vereist
- Alle bestanden zijn statisch en snel

## 💡 Tips

1. **SEO verbeteren:** Voeg meta descriptions toe aan elke pagina
2. **Google Analytics:** Voeg tracking code toe om bezoeken te meten
3. **Contactformulier:** Overweeg een service zoals Formspree.io voor een werkend contactformulier
4. **SSL Certificaat:** Zorg voor https:// (meestal gratis bij hosting providers)
