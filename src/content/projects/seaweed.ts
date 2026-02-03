import { Project } from './types';

export const seaweed: Project = {
  slug: 'seaweed',
  title: 'Seaweed',
  subtitle: 'Ting av Tang',
  description:
    'Utforskning av tang som et bærekraftig materiale for produktdesign og produksjon. 11 ukers materialforskningsprosjekt.',
  tags: ['Materialforskning', 'Bærekraft', 'Eksperimentelt', 'Teamarbeid'],
  thumbnail: '/images/seaweed/thumbnail.jpg',
  hero: '/images/seaweed/hero.jpg',
  meta: {
    duration: '11 uker',
    year: '2019',
    role: 'Forsker & Designer',
    team: ['Brage Steen', 'Thomas Rokstad', 'Ly Nguyen'],
    discipline: 'Materialforskning',
    tools: ['Laboratorieutstyr', 'Keramikkovn', 'Hydraulisk presse'],
    materials: ['Sagtang', 'Blæretang', 'Sukkertare', 'Tarmgrønske'],
  },
  sections: [
    {
      id: 'about',
      title: 'Om prosjektet',
      content:
        'I dagens samfunn er det en voksende utfordring å finne alternative ressurser for å erstatte materialer som skader miljøet. Materialer som plast, betong og aluminium er ofte ikke gjenvinnbare og ikke biologisk nedbrytbare. Med dette prosjektet ønsket vi å utforske mulighetene for å bruke tang som et fysisk materiale som kan bidra positivt til det grønne skiftet.',
      type: 'text',
    },
    {
      id: 'question',
      title: 'Forskningsspørsmålet',
      content:
        'Kan vi utvikle et materiale fra tang som kan brukes til å designe enkle produkter?',
      type: 'quote',
    },
    {
      id: 'context',
      title: 'Kontekst',
      content:
        'Høsting av tang har lange tradisjoner langs norskekysten, og har fungert som en tilleggsnæring og matkilde. Norge sikter mot å produsere 20 millioner tonn tang innen 2050, noe som skaper verdier på ca. 40 milliarder kroner. Tang konsumerer CO2 under vekst, produserer oksygen, og fungerer som et filter for havet — absorberer nitrogen, tungmetaller og forurensning fra fiskeoppdrett.',
      type: 'text',
    },
    {
      id: 'process',
      title: 'Prosess',
      content:
        'Vi utviklet en systematisk tilnærming til prosessering av tang, og eksperimenterte med ulike arter, kokemetoder og tilsetningsstoffer for å finne den optimale materialsammensetningen. Prosessen besto av: **Høsting** — Vi samlet tang selv og mottok tørket sukkertare fra SES. **Prosessering** — Tangen ble malt før koking, deretter kokt i 3 timer med natriumkarbonat for å ekstrahere alginat. **Testing av tilsetningsstoffer** — Vi testet systematisk organiske tilsetningsstoffer som mel, ris, havrefiber og havredrikke i ulike forhold. **Tørkemetoder** — Vi eksperimenterte med treformer, gipsformer, vakuumkamre, hydrauliske presser og keramikkovner.',
      type: 'list',
    },
    {
      id: 'stats',
      title: 'Nøkkeltall',
      content:
        '90+ materialprøver testet. 4 tangarter brukt. 50% typisk krympingsrate. 15 tonn trykkmotstand i tester.',
      type: 'stats',
    },
    {
      id: 'findings',
      title: 'Hovedfunn',
      content:
        'Den største utfordringen var å tørke tangmassen uten at den sprakk. Tang holder ekstremt godt på fuktighet, noe som gjør at tørkeprosessen tar 4-5 dager. Kombinert med betydelig krymping (opptil 50%), gjorde dette det svært vanskelig å kontrollere den endelige formen. Sukkertare og sagtang produserte de sterkeste, mest homogene materialene. Å tilsette havredrikke til blandingen skapte overraskende harde resultater — små tørkede biter tålte 15 tonn trykk uten å knekke.',
      type: 'text',
    },
    {
      id: 'concepts',
      title: 'Designkonsepter',
      content:
        '**Take-away emballasje** — Et biologisk nedbrytbart alternativ til pappemballasje for matleveringstjenester. **Restaurant-servering** — Materialet blir hardt nok for servering, og den organiske krympingen under tørking skaper unike, bølgelignende kanter. **Biologisk nedbrytbare plantepotter** — Et bærekraftig alternativ til plastpotter som kan plantes direkte i jorden.',
      type: 'list',
    },
    {
      id: 'reflection',
      title: 'Refleksjon',
      content:
        'Tang har fascinerende egenskaper og vi tror det kan utnyttes i mange ulike sammenhenger. Selv om vi ikke fullt ut løste utfordringen vi satte oss, viser materialets ekstreme hardhet og holdbarhet et reelt potensial for fremtidig utvikling med mer tid og spesialisert ekspertise.',
      type: 'quote',
    },
  ],
  gallery: [
    {
      src: '/images/seaweed/collection.jpg',
      alt: 'Innsamling av tang',
      caption: 'Feltarbeid langs kysten',
    },
    {
      src: '/images/seaweed/processing.jpg',
      alt: 'Materialprosessering',
      caption: 'Prosessering i lab',
    },
    {
      src: '/images/seaweed/samples.jpg',
      alt: 'Materialprøver',
      caption: '90+ testprøver',
    },
    {
      src: '/images/seaweed/testing.jpg',
      alt: 'Materialtesting',
      caption: 'Trykktest',
    },
    {
      src: '/images/seaweed/concept-serving.jpg',
      alt: 'Serveringskonsept',
      caption: 'Restaurant-servering',
    },
    {
      src: '/images/seaweed/concept-pot.jpg',
      alt: 'Plantepotte-konsept',
      caption: 'Biologisk nedbrytbar potte',
    },
  ],
  nextProject: 'crimpblock',
};
