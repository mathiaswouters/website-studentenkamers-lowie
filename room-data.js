// Shared room data for all pages
const rooms = [
    {
        id: 1,
        name: "Kamer 1 - Ruime Studio",
        price: "€425",
        size: "22m²",
        floor: "Gelijkvloers",
        furnished: "Volledig gemeubeld",
        features: ["Eigen bureau", "Ruime kledingkast", "Wastafel op kamer", "Grote ramen - veel licht"],
        description: "Ruime kamer op het gelijkvloers met veel natuurlijk licht. Perfect voor studenten die van ruimte houden. De kamer beschikt over grote ramen waardoor er de hele dag veel natuurlijk licht binnenkomt. Ideaal voor wie graag in een lichte omgeving studeert en woont."
    },
    {
        id: 2,
        name: "Kamer 2 - Gezellige Kamer",
        price: "€385",
        size: "18m²",
        floor: "1ste verdieping",
        furnished: "Volledig gemeubeld",
        features: ["Comfortabel bed", "Bureau met lamp", "Kledingkast", "Rustige ligging"],
        description: "Gezellige kamer op de eerste verdieping met een rustige uitstraling en alle nodige comfort. Deze kamer ligt aan de achterkant van het gebouw, waardoor je optimaal kunt genieten van rust tijdens het studeren. Perfect voor studenten die waarde hechten aan een rustige studeeromgeving."
    },
    {
        id: 3,
        name: "Kamer 3 - Studentenkamer Plus",
        price: "€450",
        size: "24m²",
        floor: "1ste verdieping",
        furnished: "Volledig gemeubeld",
        features: ["Extra grote kledingkast", "Zithoek", "Bureau", "Balkon"],
        description: "Ruime kamer met balkon, ideaal voor studenten die wat extra ruimte willen. Het balkon is perfect om 's avonds te ontspannen na een lange studiedag, of om in de lente en zomer buiten te kunnen genieten. De zithoek maakt deze kamer ideaal voor wie graag vrienden ontvangt."
    },
    {
        id: 4,
        name: "Kamer 4 - Compacte Kamer",
        price: "€365",
        size: "16m²",
        floor: "2de verdieping",
        furnished: "Volledig gemeubeld",
        features: ["Functioneel ingericht", "Bureau", "Bed", "Kledingkast"],
        description: "Praktische kamer met alles wat je nodig hebt voor een comfortabel studentenleven. Ondanks de compacte afmetingen is de kamer slim ingericht met voldoende opbergruimte. Perfect voor studenten die een betaalbare kamer zoeken zonder in te boeten op comfort."
    },
    {
        id: 5,
        name: "Kamer 5 - Lichte Kamer",
        price: "€410",
        size: "20m²",
        floor: "2de verdieping",
        furnished: "Volledig gemeubeld",
        features: ["Grote ramen", "Bureau met boekenkast", "Comfortabel bed", "Wastafel"],
        description: "Heerlijk lichte kamer met optimale werkruimte voor intensieve studiemomenten. De ingebouwde boekenkast bij het bureau biedt voldoende ruimte voor al je studieboeken en materialen. De wastafel op de kamer geeft extra privacy en comfort."
    },
    {
        id: 6,
        name: "Kamer 6 - Modern Comfort",
        price: "€430",
        size: "21m²",
        floor: "Gelijkvloers",
        furnished: "Volledig gemeubeld",
        features: ["Modern ingericht", "Ruim bureau", "Loungestoel", "Extra opbergruimte"],
        description: "Modern ingerichte kamer met eigentijds meubilair en veel opbergmogelijkheden. De loungestoel maakt het mogelijk om ook eens lekker te ontspannen met een boek of serie. Het moderne meubilair geeft de kamer een frisse, eigentijdse uitstraling."
    },
    {
        id: 7,
        name: "Kamer 7 - Student Deluxe",
        price: "€475",
        size: "25m²",
        floor: "1ste verdieping",
        furnished: "Volledig gemeubeld",
        features: ["Eigen douche", "Minibar koelkast", "Luxe meubilair", "Smart TV"],
        description: "Onze meest luxueuze kamer met eigen douche en extra voorzieningen. Deze kamer biedt maximaal comfort en privacy met een eigen badkamer, zodat je niet hoeft te delen. De minibar koelkast is ideaal voor drankjes en snacks, en de Smart TV zorgt voor optimale ontspanning."
    },
    {
        id: 8,
        name: "Kamer 8 - Basis Comfort",
        price: "€360",
        size: "15m²",
        floor: "2de verdieping",
        furnished: "Volledig gemeubeld",
        features: ["Bed", "Bureau", "Kledingkast", "Praktisch ingedeeld"],
        description: "Betaalbare kamer met alle basis voorzieningen voor een zorgeloos studentenleven. Deze kamer is perfect voor studenten met een beperkt budget die toch niet willen inboeten op kwaliteit. Alle essentiële voorzieningen zijn aanwezig voor een comfortabel studentenleven."
    },
    {
        id: 9,
        name: "Kamer 9 - Studiokamer",
        price: "€440",
        size: "23m²",
        floor: "Gelijkvloers",
        furnished: "Volledig gemeubeld",
        features: ["Gescheiden slaap/werkruimte", "Grote bureau", "Fauteuil", "Veel kastruimte"],
        description: "Kamer met duidelijke scheiding tussen werk- en ontspanningsruimte. Deze indeling helpt je om een goede werk-privé balans te behouden. De aparte werkruimte met groot bureau is ideaal voor wie veel thuis studeert, terwijl de ontspanningsruimte zorgt voor de nodige afleiding."
    },
    {
        id: 10,
        name: "Kamer 10 - Top Kamer",
        price: "€395",
        size: "19m²",
        floor: "2de verdieping",
        furnished: "Volledig gemeubeld",
        features: ["Dakraam - veel licht", "Bureau", "Bed", "Rustgevende sfeer"],
        description: "Charmante kamer op de bovenste verdieping met dakraam en veel lichtinval. Het dakraam geeft een uniek karakter aan de kamer en zorgt voor een heerlijke lichtinval. 's Avonds kun je vanaf je bed naar de sterren kijken - perfect voor een romantische sfeer."
    }
];
