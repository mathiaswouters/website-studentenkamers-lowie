# Hero Achtergrond Foto Toevoegen

## Wat is de Hero Sectie?
De "hero" is het grote banner gedeelte bovenaan de homepage met de tekst "Welkom bij Studentenkamers Turnhout". Momenteel toont het een placeholder - je moet dit vervangen door een foto van je gebouw.

## 📸 Stap-voor-Stap Instructies

### Stap 1: Foto Voorbereiden
1. Maak een goede foto van de **buitenkant van je gebouw**
2. De foto moet:
   - Breed genoeg zijn (minimaal 1920px breed)
   - Goed belicht zijn (niet te donker)
   - Het hele gebouw of de voorgevel tonen
   - Bij voorkeur horizontaal (liggend) formaat

3. Optimaliseer de foto:
   - Gebruik een tool zoals TinyPNG.com om de bestandsgrootte te verkleinen
   - Doel: max 500KB tot 1MB
   - Formaat: JPG of PNG

### Stap 2: Foto Uploaden
1. Maak een map genaamd **images** in je website folder (als die nog niet bestaat)
2. Kopieer je foto naar deze map
3. Hernoem de foto naar: **building-exterior.jpg**
   - Exacte naam is belangrijk!
   - Gebruik kleine letters
   - Geen spaties

Je mapstructuur moet er zo uitzien:
```
studentenkoten-website/
├── index.html
├── kamers.html
├── styles.css
├── images/
│   └── building-exterior.jpg  ← Je foto hier
└── ...
```

### Stap 3: Test de Website
1. Open **index.html** in je browser
2. Je zou nu je gebouw foto moeten zien als achtergrond
3. De tekst staat in een semi-transparante box over de foto heen

## 🎨 Aanpassen (Optioneel)

### Andere Bestandsnaam Gebruiken?
Als je foto een andere naam heeft (bijv. `mijn-gebouw.jpg`):

1. Open **styles.css**
2. Zoek naar regel 115 (ongeveer):
   ```css
   background-image: url('images/building-exterior.jpg');
   ```
3. Verander naar jouw bestandsnaam:
   ```css
   background-image: url('images/mijn-gebouw.jpg');
   ```
4. Sla op

### Overlay Donkerder/Lichter Maken
De zwarte overlay zorgt ervoor dat de witte tekst leesbaar blijft.

1. Open **styles.css**
2. Zoek naar regel 124 (ongeveer):
   ```css
   background: rgba(0, 0, 0, 0.5);
   ```
3. Pas het laatste getal aan:
   - `0.5` = 50% transparant (standaard)
   - `0.7` = 70% donkerder (meer contrast)
   - `0.3` = 30% donkerder (lichter, foto meer zichtbaar)

### Hero Hoger/Lager Maken
1. Open **styles.css**
2. Zoek naar:
   ```css
   min-height: 400px;
   ```
3. Verander naar bijvoorbeeld:
   - `min-height: 500px;` voor hoger
   - `min-height: 300px;` voor lager

### Foto Positie Aanpassen
Als je gebouw niet goed in beeld staat:

1. Open **styles.css**
2. Zoek naar:
   ```css
   background-position: center;
   ```
3. Verander naar bijvoorbeeld:
   - `background-position: top;` (bovenkant foto)
   - `background-position: bottom;` (onderkant foto)
   - `background-position: left;` (linkerkant foto)
   - `background-position: center top;` (midden-boven)

## ⚠️ Problemen Oplossen

### Probleem: Foto wordt niet getoond
**Checklist:**
- [ ] Is de foto in de `images` map?
- [ ] Heet de foto exact `building-exterior.jpg`? (let op kleine/grote letters)
- [ ] Is het een .jpg of .png bestand?
- [ ] Heb je de pagina gerefreshed? (Ctrl+F5 of Cmd+Shift+R)

### Probleem: Foto is wazig/pixelig
- Foto is te klein - gebruik een grotere resolutie (minimaal 1920px breed)
- Of foto is te veel gecomprimeerd - gebruik betere kwaliteit

### Probleem: Foto laadt langzaam
- Bestand is te groot - comprimeer via TinyPNG.com
- Doel: max 500KB-1MB

### Probleem: Tekst is niet goed leesbaar
- Maak de overlay donkerder (zie hierboven)
- Of kies een foto met meer effen achtergrond
- Of kies een andere foto waar de lucht/muur effen is

## 💡 Tips voor de Beste Foto

1. **Timing:** Maak de foto bij goed weer en goede belichting (liefst overdag)
2. **Hoek:** Probeer verschillende hoeken - schuin kan vaak mooier zijn dan recht van voren
3. **Context:** Toon een beetje van de omgeving (straat, bomen) voor een levendiger beeld
4. **Mensen:** Vermijd mensen in de foto voor een professionele uitstraling
5. **Seizoen:** Lente/zomer foto's zijn meestal aantrekkelijker dan winter

## 🔄 Terug naar Gekleurde Achtergrond?

Wil je terug naar de originele gekleurde gradient in plaats van een foto?

1. Open **index.html**
2. Zoek naar:
   ```html
   <div class="hero hero-with-image">
       <div class="hero-overlay">
   ```
3. Verander naar:
   ```html
   <div class="hero">
   ```
4. Verwijder ook de `</div>` van de hero-overlay (laat alleen 1 `</div>` staan)
5. Sla op

Of nog simpeler: verwijder gewoon de foto uit de images map - dan valt de CSS terug op de gradient achtergrond.

---

**Hulp nodig?** Check de BEGINNERS-GIDS.md voor meer uitleg over het werken met bestanden!