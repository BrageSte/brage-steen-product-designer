export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  duration: string;
  role: string;
  overview: string;
  problem: string;
  myRole: string;
  insights: string[];
  process: string;
  solution: string;
  reflection: string;
}

export const projects: Project[] = [
  {
    slug: "sorteringsguiden",
    title: "The Sorting Guide",
    subtitle: "Et verktøy for bedre kildesortering i hverdagen",
    description: "Bachelorprosjekt i samarbeid med IKEA Norge og Grønt Punkt.",
    category: "Tjenestedesign",
    duration: "4 måneder",
    role: "Produktdesigner / Lead researcher",
    overview: "Sorteringsguiden er et prosjekt som utforsker hvordan man kan gjøre kildesortering enklere for norske husstander. Gjennom grundig brukerinnsikt og iterativ prototyping utviklet vi en løsning som møter brukerne der de er.",
    problem: "Mange husstander ønsker å kildesortere, men opplever usikkerhet rundt hva som skal hvor. Resultatet er ofte at ting havner i restavfall «for sikkerhets skyld». Dette fører til lavere gjenvinningsgrad og økt miljøbelastning.",
    myRole: "Som lead researcher og produktdesigner hadde jeg ansvar for å planlegge og gjennomføre brukerintervjuer, analysere innsikt, og lede den iterative designprosessen. Jeg fasiliterte workshops med stakeholders fra både IKEA og Grønt Punkt.",
    insights: [
      "Usikkerhet er den største barrieren – folk vil gjøre rett, men vet ikke alltid hvordan",
      "Løsningen må være tilgjengelig i øyeblikket man trenger den",
      "Tillit til systemet er avgjørende – brukerne må føle at innsatsen deres faktisk betyr noe"
    ],
    process: "Vi startet med bred research gjennom hjemmebesøk og dagbokstudier. Innsikten ledet til flere konseptretninger som ble testet med papirprototyper. Gjennom tre iterasjoner raffinerte vi løsningen basert på brukertest og feedback fra partnere.",
    solution: "Den endelige løsningen kombinerer fysiske og digitale elementer: en enkel visuell guide som kan henge ved søppelstasjonen, støttet av en digital ressurs for mer komplekse spørsmål. Designet prioriterer klarhet og tilgjengelighet.",
    reflection: "Prosjektet lærte meg verdien av å holde løsningen enkel. Det er fristende å legge til funksjoner, men den virkelige utfordringen var å fjerne friksjon. Det viktigste bidraget var kanskje ikke selve løsningen, men prosessen med å bygge felles forståelse mellom IKEA og Grønt Punkt."
  },
  {
    slug: "headset",
    title: "Headset Concept",
    subtitle: "Ergonomisk headset for lange arbeidsøkter",
    description: "Fysisk produktdesign med fokus på form og komfort.",
    category: "Fysisk produkt",
    duration: "3 måneder",
    role: "Industridesigner",
    overview: "Et konseptuelt headset-design som prioriterer ergonomi og langvarig komfort for profesjonelle brukere. Prosjektet utforsket samspillet mellom form, materiale og brukeropplevelse.",
    problem: "Profesjonelle som bruker headset i mange timer daglig opplever ofte ubehag og trykk. Eksisterende løsninger prioriterer ofte lydkvalitet og estetikk fremfor ergonomi.",
    myRole: "Jeg hadde ansvar for hele designprosessen fra research til endelig konsept, inkludert brukerintervjuer, skissering, CAD-modellering og fysisk prototyping.",
    insights: [
      "Vektfordeling er like viktig som totalvekt",
      "Justerbarhet må være intuitiv og holdbar over tid",
      "Materialer som puster er essensielle for langvarig bruk"
    ],
    process: "Prosessen startet med analyse av eksisterende produkter og intervjuer med profesjonelle brukere. Gjennom hundrevis av skisser og flere fysiske mockups utforsket jeg ulike formspråk og mekanismer. 3D-printing tillot rask testing av ergonomiske løsninger.",
    solution: "Det endelige konseptet har en buet hodebøyle som fordeler vekt over et større område, øreputer med ventilasjon, og en justeringsmekanisme som er enkel å bruke med én hånd. Formspråket er rent og tidløst.",
    reflection: "Dette prosjektet forsterket min interesse for samspillet mellom form og funksjon. De beste løsningene oppsto når jeg sluttet å tenke på estetikk og funksjon som separate ting, og heller lot formen vokse ut av brukerens behov."
  },
  {
    slug: "klatretak",
    title: "Modulære 3D-printede klatretak",
    subtitle: "Fleksibelt system for hjemmevegg",
    description: "Designet for enkel produksjon og tilpasning.",
    category: "Fysisk produkt",
    duration: "Pågående",
    role: "Designer / Maker",
    overview: "Et modulært system av klatretak designet for 3D-printing. Prosjektet kombinerer parametrisk design med praktisk testing for å skape tak som både fungerer godt og er enkle å produsere hjemme.",
    problem: "Kommersielle klatretak er dyre og tilbyr begrenset variasjon. For de som bygger egen vegg hjemme, er det få gode alternativer som balanserer kvalitet, pris og variasjon.",
    myRole: "Som eneste designer og maker har jeg ansvar for alt fra konseptutvikling til produksjon og testing. Jeg bruker og tester takene selv på daglig basis.",
    insights: [
      "Grep-ergonomi varierer enormt mellom klatrere",
      "Printbarhet begrenser formen – men kan også inspirere",
      "Overflatestruktur er like viktig som makroform"
    ],
    process: "Prosessen er iterativ og pågående. Jeg designer nye former i CAD, printer prototyper, tester dem på egen vegg, og justerer basert på hvordan de føles i bruk. Parametrisk modellering tillater rask generering av variasjoner.",
    solution: "Systemet består av en voksende samling av tak i ulike størrelser og vanskelighetsgrader. Alle er designet for å kunne printes uten støttemateriale og med standard PLA eller PETG. Modulært monteringssystem gjør det enkelt å endre oppsettet.",
    reflection: "Dette prosjektet er et godt eksempel på design gjennom bruk. Fordi jeg selv er brukeren, får jeg umiddelbar og ærlig feedback. Det har lært meg verdien av å designe for meg selv først – og så generalisere."
  },
  {
    slug: "campervan",
    title: "Campervan Systemdesign",
    subtitle: "Innredning og elektrisk system for bobil",
    description: "Designet for robusthet og hverdagsbruk.",
    category: "Systemdesign",
    duration: "6 måneder",
    role: "Designer / Bygger",
    overview: "Full innredning og elektrisk system for en campervan. Prosjektet handlet om å balansere motstridende krav innenfor strenge begrensninger – og å designe for virkelig bruk, ikke ideelle forhold.",
    problem: "Å leve i en van krever systemer som fungerer pålitelig over tid, tåler røff bruk, og er enkle å vedlikeholde. Mange DIY-løsninger prioriterer estetikk eller funksjonalitet på bekostning av robusthet.",
    myRole: "Jeg hadde ansvar for all planlegging, design og bygging – fra elektrisk system til møbelsnekring. Prosjektet krevde både detaljert planlegging og improvisasjon underveis.",
    insights: [
      "Strøm, plass og vekt konkurrerer alltid",
      "Enkle systemer er mer pålitelige enn komplekse",
      "Tilgang for vedlikehold må designes inn fra starten"
    ],
    process: "Prosessen startet med grundig kartlegging av behov og begrensninger. Jeg lagde detaljerte tegninger av både layout og elektrisk system før bygging startet. Underveis måtte mange planer justeres basert på praktiske realiteter.",
    solution: "Det endelige systemet inkluderer 400Ah litiumbank, 300W solceller, og en layout som prioriterer funksjonalitet i hverdagen. Designet er bevisst «godt nok» fremfor perfekt – fordi robusthet og vedlikeholdbarhet var viktigere enn å optimalisere hvert detalj.",
    reflection: "Dette prosjektet var en masterclass i trade-offs. Hver beslutning påvirket andre deler av systemet. Det lærte meg at god design ofte handler om å akseptere begrensninger og designe innenfor dem – ikke å prøve å overvinne dem."
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projects;
};
