import { Project } from './types';

export const sortingGuide: Project = {
  slug: 'sorting-guide',
  title: 'The Sorting Guide',
  subtitle: 'Kildesorteringsguiden',
  description:
    'Et tjenestedesign-prosjekt som hjelper norske husholdninger med å sortere avfall riktig gjennom personlig veiledning og smarte produktanbefalinger.',
  tags: ['Tjenestedesign', 'UX', 'Bachelor', 'Bærekraft'],
  thumbnail: '/images/sorting-guide/thumbnail.jpg',
  hero: '/images/sorting-guide/hero.jpg',
  meta: {
    duration: 'Jan – Mai 2020',
    year: '2020',
    role: 'Product Designer',
    team: ['Brage Steen', 'Regina von Koch'],
    partner: 'IKEA Norge',
    institution: 'OsloMet',
    discipline: 'Tjenestedesign',
    tools: ['Adobe XD', 'Figma', 'Miro'],
  },
  sections: [
    {
      id: 'about',
      title: 'Om prosjektet',
      content:
        'The Sorting Guide er et bachelorprosjekt utviklet ved OsloMet i samarbeid med IKEA Norge. Målet var å forbedre kildesortering i norske hjem ved å gjøre det enklere å forstå og følge lokale sorteringsregler.',
      type: 'text',
    },
    {
      id: 'problem',
      title: 'Utfordringen',
      content:
        'I det komplekse systemet som utgjør resirkulering, hviler et stort ansvar på husholdningene — den første linjen i resirkuleringsprosessen. De fleste husholdninger mangler tilstrekkelig kunnskap og verktøy for å sortere riktig. Når sorteringsfeil oppstår på husholdningsnivå, skaper det store utfordringer for hele resirkuleringsprosessen. Ulike kommuner har ulike systemer, noe som forvirrer folk som flytter eller reiser.',
      type: 'text',
    },
    {
      id: 'stats',
      title: 'Nøkkeltall',
      content: '60% av husholdningsavfall blir ikke resirkulert. Norge har nest høyest avfall per innbygger i Europa. 67+ workshop-deltakere og 5 hjemmebesøk i research-fasen.',
      type: 'stats',
    },
    {
      id: 'research',
      title: 'Research',
      content:
        'Forskningen ble gjennomført med en kvalitativ tilnærming. Vi brukte observasjon, intervjuer, design probes og desktop research for å få empati og forstå kompleksiteten i resirkuleringsproblemet. Metodene inkluderte hjemmebesøk, workshops, feltforskning, brukerintervjuer, design probes og journey mapping.',
      type: 'text',
    },
    {
      id: 'insights',
      title: 'Tre barrierer for resirkulering',
      content:
        'Etter å ha kartlagt innsikter fra forskningen, identifiserte vi tre kritiske barrierer: **Tilgjengelighet** — Plassering og tilgjengelighet av sorteringsbøtter påvirker direkte sorteringsraten. **Utdanning** — Folk mangler tilstrekkelig kunnskap til å sortere effektivt. **Tillit** — Personlige barrierer inkluderer manglende tillit til systemet.',
      type: 'list',
    },
    {
      id: 'solution',
      title: 'Løsningen',
      content:
        'The Sorting Guide er en flerfunksjonell tjenesteplattform som fungerer både som en resirkuleringsproduktbutikk og et utdanningsverktøy. Den bringer sammen nøkkelaktører — IKEA, lokale kommuner og brukere — for å gi personlig veiledning om resirkulering. Ved å inkorporere utdanning i kjøpsprosessen for sorteringsløsninger, påvirker vi brukere når de er mest mottakelige for å lære.',
      type: 'text',
    },
    {
      id: 'features',
      title: 'Hovedfunksjoner',
      content:
        '**Hjemmesorteringsbygger** — Lag et personlig tilpasset hjemmesorteringssystem basert på din bosituasjon. **Sortering i ditt område** — Finn raskt informasjon tilpasset din kommune. **Produktguide** — Produkter merket etter avfallstype med filterfunksjoner. **Tips og triks** — Smarte løsninger for enklere hverdagssortering.',
      type: 'list',
    },
    {
      id: 'impact',
      title: 'Verdi',
      content:
        'Ved å styrke den første linjen av resirkulering med nødvendige verktøy og ressurser, skaper The Sorting Guide verdier langs hele resirkuleringsverdikjeden — for brukere, bedrifter og miljøet.',
      type: 'text',
    },
    {
      id: 'quote',
      title: 'Tilbakemelding',
      content:
        '"Dere er spot on. Det er definitivt et behov for dette konseptet. Dere bidrar til å begrense den største lekkasjen i resirkuleringssystemet." — Kenneth Skauge, Sustainability Business Partner, IKEA Norge',
      type: 'quote',
    },
  ],
  gallery: [
    {
      src: '/images/sorting-guide/research-01.jpg',
      alt: 'Co-creation sessions med partnere',
      caption: 'Workshop med IKEA',
    },
    {
      src: '/images/sorting-guide/research-02.jpg',
      alt: 'Feltforskning hos IKEA',
      caption: 'Feltforskning',
    },
    {
      src: '/images/sorting-guide/research-03.jpg',
      alt: 'OBOS Living Lab besøk',
      caption: 'OBOS Living Lab',
    },
    {
      src: '/images/sorting-guide/journey-map.jpg',
      alt: 'Brukerreisekartlegging',
      caption: 'Journey mapping',
    },
    {
      src: '/images/sorting-guide/team.jpg',
      alt: 'Prosjektteamet',
      caption: 'Teamet',
    },
    {
      src: '/images/sorting-guide/mockup.jpg',
      alt: 'Tjenestemarkedsføringskonsept',
      caption: 'Markedsføring',
    },
  ],
  links: [
    {
      label: 'Last ned prosjektrapport',
      href: '/documents/TheSortingGuide_Report.pdf',
      external: false,
    },
  ],
  subpages: [
    {
      slug: 'prototype',
      title: 'Interaktiv Prototype',
      description: 'Utforsk den interaktive Adobe XD-prototypen',
      content:
        'Den interaktive prototypen demonstrerer hovedfunksjonene i The Sorting Guide, inkludert hjemmesorteringsbyggeren og den lokale sorteringsguiden.',
      embedUrl:
        'https://xd.adobe.com/embed/60cd8d3c-32ed-435d-7295-8826c2431807-16fc/?fullscreen&hints=on',
      externalUrl:
        'https://xd.adobe.com/view/60cd8d3c-32ed-435d-7295-8826c2431807-16fc/?fullscreen&hints=on',
    },
    {
      slug: 'gigamap',
      title: 'Gigamap: Avfall i verden',
      description: 'Et omfattende forskningskart over avfallshåndteringssystemer',
      content:
        'For en bedre forståelse av dagens avfallssituasjon, utviklet vi et forskningskart som forklarer avfallsverdenen. Dette har gitt et grunnlag for valgene som ble tatt gjennom prosjektet. Gigamapet dekker flere sammenkoblede systemer inkludert myndighetsreguleringer, bedriftsansvar, kommunal avfallsinnsamling, resirkuleringsfasiliteter og husholdningers sorteringsadferd.',
      externalUrl: 'https://bragesteen.wordpress.com/2025/05/28/gigamap/',
    },
  ],
  nextProject: 'avfallsportalen',
};
