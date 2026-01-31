# Gebouw Foto Toevoegen aan Homepage

## Wat is Dit?
Op de homepage is nu een mooie showcase sectie toegevoegd die jouw gebouw prominent toont met belangrijke features. Deze sectie verschijnt tussen "Studentenleven in Turnhout" en "Onze Studentenkamers".

## 📸 Hoe Voeg Je de Foto Toe?

### Stap 1: Foto Voorbereiden
1. Maak een **goede foto van je gebouw**:
   - Bij voorkeur overdag met goed licht
   - Horizontaal (liggend) formaat werkt het beste
   - Minimaal 1200px breed
   - Toon het hele gebouw of een duidelijk deel ervan

2. **Bewerk de foto** (optioneel):
   - Crop tot de ideale compositie
   - Zorg dat het beeld scherp en helder is
   - Comprimeer naar max 500KB (gebruik TinyPNG.com)

### Stap 2: Foto Uploaden
1. Maak een **images** map in je website folder (als die er nog niet is)
2. Plaats je foto in de `images` map
3. **Hernoem de foto naar:** `building-photo.jpg`
   - Exacte naam! Anders werkt het niet
   - Kleine letters
   - Geen spaties

### Stap 3: Refresh & Klaar!
1. Open **index.html** in je browser
2. Druk op **Ctrl+F5** (of Cmd+Shift+R) om de cache te legen
3. Je foto verschijnt nu in de showcase sectie!

## 🎨 De Layout

De sectie bestaat uit twee delen:
- **Links:** Jouw gebouw foto (groot en prominent)
- **Rechts:** Tekst met 4 features:
  - 🏛️ Recent Gerenoveerd
  - 📍 Toplocatie
  - 🔒 Veilig & Verzorgd
  - 🌳 Groene Omgeving

## ✏️ Tekst Aanpassen

### Hoofdtekst Wijzigen
1. Open **index.html**
2. Zoek naar de sectie `<!-- Building Showcase Section -->`
3. Pas de tekst aan tussen de `<p>` tags:

```html
<p style="font-size: 1.1rem; line-height: 1.8; color: #555; margin-bottom: 1.5rem;">
    Onze studentenkamers bevinden zich in een prachtig, recent gerenoveerd pand in het hart van Turnhout. 
    Het gebouw combineert historische charme met moderne comfort en biedt een veilige, gezellige thuisbasis voor studenten.
</p>
```

### Features Aanpassen
Zoek de `building-features` sectie en pas aan:

```html
<div class="building-feature">
    <span class="feature-icon">🏛️</span>  <!-- Pas het emoji aan -->
    <div>
        <strong>Recent Gerenoveerd</strong>  <!-- Pas de titel aan -->
        <p>Modern comfort in klassieke uitstraling</p>  <!-- Pas de beschrijving aan -->
    </div>
</div>
```

Je kan features toevoegen door de hele `<div class="building-feature">...</div>` te kopiëren en te plakken.

## 🔧 Aanpassingen

### Andere Bestandsnaam?
Als je foto een andere naam heeft (bijv. `mijn-pand.jpg`):

1. Open **index.html**
2. Zoek naar: `<img src="images/building-photo.jpg"`
3. Verander naar: `<img src="images/mijn-pand.jpg"`
4. Sla op

Of werk dit ook bij in **alle** CSS bestanden (niet nodig als je gewoon de foto hernoemt).

### Foto Links of Rechts?
Standaard staat de foto links. Om deze rechts te zetten:

1. Open **styles.css**
2. Zoek naar `.building-showcase`
3. Verander naar:
```css
.building-showcase {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    min-height: 500px;
    direction: rtl; /* Voeg deze regel toe */
}

.building-info {
    direction: ltr; /* Voeg deze regel toe */
    /* ... rest blijft hetzelfde */
}
```

### Sectie Hoger/Lager Maken
1. Open **styles.css**
2. Zoek naar `.building-showcase`
3. Verander `min-height: 500px;` naar bijvoorbeeld:
   - `min-height: 600px;` voor hoger
   - `min-height: 400px;` voor lager

## 📱 Mobiele Weergave

Op mobiel stapelt de sectie automatisch:
- Foto bovenaan (300px hoog)
- Tekst daaronder

Dit zorgt voor een optimale mobiele ervaring!

## ⚠️ Problemen Oplossen

### Foto wordt niet getoond
✅ **Checklist:**
- [ ] Is de foto in de `images` map?
- [ ] Heet het bestand exact `building-photo.jpg`?
- [ ] Is het een .jpg bestand (niet .jpeg of .png)?
- [ ] Heb je de pagina gerefreshed met Ctrl+F5?

Als de foto nog steeds niet verschijnt, zie je een mooie placeholder met 🏢 emoji.

### Foto is vervormd/uitgerekt
Je foto heeft waarschijnlijk de verkeerde aspect ratio. Het systeem gebruikt `object-fit: cover` wat de foto bijsnijdt om in het kader te passen.

**Oplossing:**
Gebruik een foto met een verhouding van ongeveer 3:4 (portret) of 4:3 (landschap).

### Tekst is niet goed leesbaar op mobiel
Pas de padding aan in de CSS:

```css
@media (max-width: 768px) {
    .building-info {
        padding: 2rem 1.5rem; /* Verhoog naar 3rem 2rem voor meer ruimte */
    }
}
```

## 💡 Design Tips

1. **Foto Kwaliteit:** Gebruik een hoogwaardige foto - dit is een van de eerste dingen die bezoekers zien
2. **Tijd van Dag:** Foto's overdag met natuurlijk licht zien er het beste uit
3. **Hoek:** Probeer verschillende hoeken - soms is een hoek van 45° interessanter dan frontaal
4. **Context:** Laat een beetje van de omgeving zien (straat, bomen) voor context
5. **Seizoen:** Lente/zomer foto's zijn vaak aantrekkelijker

## 🔄 Sectie Verwijderen?

Wil je de building showcase sectie verwijderen?

1. Open **index.html**
2. Verwijder alles tussen `<!-- Building Showcase Section -->` en `<!-- Our Rooms Section -->`
3. Sla op

De CSS blijft staan maar wordt gewoon niet gebruikt.

---

**Zie ook:**
- HERO-IMAGE-INSTRUCTIES.md voor de achtergrond foto bovenaan
- README.md voor algemene aanpassingen
- BEGINNERS-GIDS.md voor basis uitleg