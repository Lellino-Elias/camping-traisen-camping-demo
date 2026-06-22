import type { CampsiteConfig } from "../types";

const IMG = "/campsites/camping-traisen";

const campingTraisen: CampsiteConfig = {
  name: "Terrassen Camping Traisen",
  shortName: "Traisen",
  slug: "camping-traisen",
  ort: "Traisen",
  region: "Niederösterreich",
  brandKind: "Terrassen-Camping",
  regionLong: "Mostviertel · Niederösterreichische Voralpen · Österreich",

  heroVariant: "center",

  claim: "Camping auf Terrassen über dem Traisental",
  claimEmphasis: "auf Terrassen",
  emailDetail: "die Terrassenlage über dem Traisental",
  intro:
    "Rund um die zentrale Hofterrasse mit solarbeheiztem Pool liegen die Stellplätze auf sanften Terrassen — ein gepflegter Familienbetrieb in den Niederösterreichischen Voralpen, seit 50 Jahren persönlich geführt.",

  statement: {
    text: "Den Mittelpunkt bildet die Hofterrasse mit dem Pool — drumherum betten sich die Stellplätze auf sonnige Terrassen.",
    emphasis: "die Hofterrasse mit dem Pool",
  },

  pillars: [
    {
      title: "Auf Terrassen gebettet",
      text: "Die Plätze liegen auf sanften Terrassen — mit weitem Blick über die Voralpen und Abstand zum Nachbarn.",
      image: { src: `${IMG}/gallery-48eaca3e3c.webp`, alt: "Drohnenbild des Terrassen Camping Traisen — gestufte Stellplätze auf grünen Terrassen mit Blick in die Voralpen" },
    },
    {
      title: "Pool mitten im Hof",
      text: "Mittelpunkt ist die Hofterrasse mit dem solarbeheizten Pool — hier trifft man sich den ganzen Tag.",
      image: { src: `${IMG}/gallery-7346fc502d.webp`, alt: "Solarbeheizter Pool auf der zentralen Hofterrasse des Camping Traisen" },
    },
    {
      title: "Seit 50 Jahren persönlich",
      text: "Familie Wallentin führt den Platz seit 50 Jahren als echten Familienbetrieb — persönlich betreut.",
      image: { src: `${IMG}/gallery-a9d6f35611.webp`, alt: "Familie Wallentin vor dem Hofgebäude des Terrassen Camping Traisen" },
    },
  ],

  usps: [
    "Solarbeheizter Pool",
    "Café-Bistro am Platz",
    "35 individuelle Plätze",
    "Gratis WLAN",
    "Familienbetrieb",
    "Eigene Brennerei",
  ],

  trust: {
    heading: "Warum Gäste länger bleiben als geplant",
    headingEmphasis: "länger bleiben",
    intro:
      "Seit 50 Jahren in Familienhand: persönliche Betreuung, ein gepflegter Platz mit Pool und Bistro und ehrliche Ausflugstipps für die ganze Region — dafür kommen viele Gäste immer wieder.",
  },

  awards: [
    { label: "Zoover Award Gold" },
    { label: "Quality-Partner Mostviertel" },
  ],

  saison: { von: "März", bis: "Oktober" },

  hero: {
    aerial: { src: `${IMG}/gallery-b82a2aa4fd.webp`, alt: "Luftaufnahme des Terrassen Camping Traisen auf einer grünen Anhöhe in den Voralpen" },
  },

  breather: {
    image: { src: `${IMG}/gallery-2b8332ce2a.webp`, alt: "Laue Abendstimmung auf der beleuchteten Hofterrasse des Camping Traisen" },
    line: "Laue Abende auf der Hofterrasse.",
  },

  camping: {
    heading: "Dein Platz auf der Terrasse",
    intro:
      "Vom Stellplatz auf der Terrasse bis zum Pool im Hof — kurze Wege und alles, was einen entspannten Campingtag ausmacht.",
    features: [
      {
        title: "35 individuelle Stellplätze",
        text: "35 individuelle Plätze von 50 bis 100 m², alle mit dem Auto zufahrbar und mit Stromanschluss.",
        image: { src: `${IMG}/gallery-cc141f805f.webp`, alt: "Wohnwagen auf ebenem Grasstellplatz mit Blick in die Voralpen" },
      },
      {
        title: "Zelten & Gruppenplatz",
        text: "Platz für Zelte, Wohnwagen und Wohnmobile — Gruppen finden einen eigenen Platz mit Lagerfeuerstelle.",
        image: { src: `${IMG}/gallery-4c16c63a82.webp`, alt: "Zelt und Motorrad auf einem sonnigen Stellplatz am Terrassen Camping Traisen mit Blick in die Voralpen" },
      },
      {
        title: "Café-Bistro Wallentino",
        text: "Das Café-Bistro Wallentino direkt am Pool — Kaffee, Kuchen von Uschi, Most und Schmankerl aus der Region.",
        image: { src: `${IMG}/gallery-d04d02c653.webp`, alt: "Beleuchtetes Café-Bistro Wallentino am Abend" },
      },
      {
        title: "Solarstrom & Warmwasser",
        text: "Warmwasser und Strom kommen großteils aus eigener Solar- und Photovoltaikanlage am Hofdach.",
        image: { src: `${IMG}/gallery-e67eb078e0.webp`, alt: "Solarkollektoren und Photovoltaikanlage auf dem Hofdach des Terrassen Camping Traisen" },
      },
      {
        title: "Camperservice-Station",
        text: "Eigene Camperservice-Station mit Trinkwasser für unkompliziertes Ver- und Entsorgen am Wohnmobil.",
        image: { src: `${IMG}/gallery-fec2c368c6.webp`, alt: "Wohnmobil an der Camperservice-Station am Camping Traisen" },
      },
      {
        title: "Liegewiese am Hof",
        text: "Liegewiese mit Sitzplätzen neben Pool und Hof — zum Sonnen, Plaudern und entspannten Ausspannen.",
        image: { src: `${IMG}/gallery-30545dd8a4.webp`, alt: "Grüne Liegewiese vor der Hofterrasse des Camping Traisen" },
      },
    ],
  },

  mobilheime: {
    heading: "Übernachten ohne eigenes Zelt",
    intro:
      "Kein eigenes Zelt dabei? In unseren Trekkinghütten übernachtest du einfach und gemütlich mitten im Grünen.",
    items: [
      {
        name: "Trekkinghütte",
        kind: "Holzhütte",
        text: "Gemütliche Holzhütte für bis zu 3 Personen, 3 × 3 m mit Betten im Erd- und Obergeschoss — Sanitär am Platz.",
        image: { src: `${IMG}/gallery-8d6b617086.webp`, alt: "Trekkinghütte aus Holz mit Sitzplatz im Freien am Camping Traisen" },
        features: ["3 × 3 m", "Bis 3 Personen", "Kühlbox & Kaffeemaschine", "Elektroheizung"],
      },
    ],
  },

  aktivitaeten: {
    heading: "Raus in die Voralpen",
    intro:
      "Wandern, Radfahren und Ausflüge ins Mostviertel — rund um den Platz ist immer etwas los.",
    items: [
      {
        title: "Wandern in den Voralpen",
        text: "Markierte Wege starten direkt am Platz — geführte Wanderungen in die Voralpen gibt es auf Anfrage.",
        image: { src: `${IMG}/activity-72677e9c63.webp`, alt: "Familie wandert auf einem Steg durch eine Klamm in den Voralpen" },
      },
      {
        title: "Traisental-Radweg",
        text: "Der Traisental-Radweg führt direkt am Platz vorbei — eben von der Donau bis hinauf nach Mariazell.",
        image: { src: `${IMG}/gallery-5f7f4f930c.webp`, alt: "Radfahrerin auf dem Traisental-Radweg durch einen alten Eisenbahntunnel" },
      },
      {
        title: "Radeln & Mountainbiken",
        text: "Mountainbike-Routen und der Gölsen-Triestingtal-Radweg liegen gleich vor der Vorzelt-Tür.",
        image: { src: `${IMG}/gallery-a7408027de.webp`, alt: "Radlergruppe vor dem Hofgebäude am Pool des Camping Traisen" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg ins Traisental",
    modes: [
      { title: "Mit dem Auto", text: "Über die A1 Westautobahn bis St. Pölten, dann ins Traisental nach Traisen — der Platz liegt rund 15 km von der Autobahn." },
      { title: "Mit der Bahn", text: "Mit der Traisentalbahn bis Bahnhof Traisen, von dort sind es nur wenige Minuten zum Campingplatz." },
      { title: "Mit dem Rad", text: "Der Traisental-Radweg führt direkt am Platz vorbei — von der Donau bis Mariazell." },
    ],
  },

  galerie: {
    heading: "Sommer am Terrassen-Camping",
    headingEmphasis: "Sommer",
    intro:
      "Pool im Hof, Terrassen im Grünen und lange Sommerabende — ein paar Eindrücke vom Terrassen Camping Traisen.",
    tag: "März bis Oktober",
    moreCount: 40,
    images: [
      { src: `${IMG}/gallery-c135af8dba.webp`, alt: "Solarbeheizter Pool des Camping Traisen an einem sonnigen Tag" },
      { src: `${IMG}/gallery-cfb6cb3d41.webp`, alt: "Eisbecher auf der Bistro-Terrasse mit Blick zum Pool" },
      { src: `${IMG}/gallery-83de71cac9.webp`, alt: "Beleuchtete Hofterrasse des Camping Traisen bei Nacht" },
      { src: `${IMG}/gallery-0615b9fc9c.webp`, alt: "Gemütlicher Innenraum einer Trekkinghütte mit Betten und Tisch" },
    ],
  },

  booking: {
    heading: "Sichere dir deine Terrasse für die Saison",
    headingEmphasis: "deine Terrasse",
    intro:
      "Wähle Zeitraum und Personen — wir melden uns persönlich mit deiner Verfügbarkeit für die Saison.",
    pricesArePlaceholder: true,
    priceNote:
      "Richtpreise — auf der Website sind keine Preise angegeben (bitte bestätigen). Basis 2 Personen inkl. Strom, zzgl. Ortstaxe.",
    highlight: { title: "Mitten im Grünen", text: "Von Wien nur eine Autostunde — und doch ganz im Grünen." },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 34, perExtraGuest: 7 },
      { id: "zelt", label: "Zeltplatz", perNight: 26, perExtraGuest: 7 },
      { id: "huette", label: "Trekkinghütte", perNight: 65, perExtraGuest: 10 },
    ],
  },

  kontakt: {
    coords: { lat: 48.04242, lng: 15.603829 },
    tel: "+43 2762 62900",
    telHref: "tel:+43276262900",
    mail: "info@camping-traisen.at",
    facebook: "http://www.facebook.com/pages/Terrassen-Camping-Traisen/118411548202288",
    adresse: "Kulmhof 1 · 3160 Traisen · Niederösterreich",
  },

  languages: ["DE", "EN"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Trekkinghütten", href: "#mobilheime" },
    ]},
    { label: "Aktiv", href: "#aktivitaeten" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Lage", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default campingTraisen;
