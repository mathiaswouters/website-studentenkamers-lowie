# Studentenkamers Turnhout - Website

Volledige website voor studentenkamers in Turnhout met 10 kamers.

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
1. Open **color-demo.html** in je browser om de 3 opties te bekijken
2. Kies je favoriete kleur
3. Vervang `styles.css` met het gewenste bestand (bijv. hernoem `styles-green.css` naar `styles.css`)
4. Of verander in alle HTML bestanden `<link rel="stylesheet" href="styles.css">` naar het gewenste stylesheet

## 📝 Content Aanpassen

### Kamer Informatie
Alle kamer data staat in **room-data.js**. Hier kun je aanpassen:
- Kamernamen
- Prijzen
- Oppervlaktes
- Verdiepingen
- Kenmerken
- Beschrijvingen

### Contactgegevens
Zoek en vervang in alle bestanden:
- **Email:** `info@studentenkamersturnhout.be`
- **Telefoon:** `+32 123 45 67 89`
- **Adres:** `Voorbeeldstraat 123, 2300 Turnhout`

### Foto's Toevoegen
Momenteel worden emoji iconen (🏠) gebruikt als placeholder. Om echte foto's toe te voegen:

1. **Voor kamer overzichten:**
   - Vervang in de CSS `.card-image` achtergrond door: `background: url('jouw-foto.jpg');`
   - Of vervang de div met: `<img src="jouw-foto.jpg" alt="Kamer foto">`

2. **Voor individuele kamers:**
   - Bewerk **room-data.js** en voeg een `image` property toe aan elk kamer object
   - Pas de room detail pagina's aan om de foto weer te geven

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

## 📞 Vragen?

Als je hulp nodig hebt bij het aanpassen of online zetten van de website, neem contact op!

---

**Versie:** 1.0  
**Gemaakt:** Januari 2026  
**Compatibel met:** Alle moderne browsers
