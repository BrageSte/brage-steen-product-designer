import { Project } from './types';

export const avfallsportalen: Project = {
  slug: 'avfallsportalen',
  title: 'Avfallsportalen',
  subtitle: 'Interaktiv læringsportal',
  description:
    'En interaktiv læringsportal om avfallshåndtering og resirkulering i Norge. Utforsk sorteringssystemer, ta quiz, sammenlign kommuner og se statistikk.',
  tags: ['UX Design', 'Interaktiv', 'Utdanning', 'Web'],
  thumbnail: '/images/avfallsportalen/thumbnail.jpg',
  hero: '/images/avfallsportalen/hero.jpg',
  meta: {
    year: '2023',
    role: 'UX Designer & Utvikler',
    discipline: 'Interaksjonsdesign',
    tools: ['HTML', 'CSS', 'JavaScript', 'Figma'],
  },
  sections: [
    {
      id: 'about',
      title: 'Om prosjektet',
      content:
        'Avfallsportalen er en utvidelse av The Sorting Guide-konseptet — en interaktiv læringsplattform som gjør det engasjerende å lære om avfallshåndtering og resirkulering i Norge.',
      type: 'text',
    },
    {
      id: 'problem',
      title: 'Utfordringen',
      content:
        'Informasjon om avfallshåndtering er ofte spredt, tørr og vanskelig tilgjengelig. Mange vet ikke hvordan deres lokale sorteringssystem fungerer eller hvorfor det er viktig å sortere riktig. Vi trengte en måte å gjøre denne informasjonen engasjerende og lett å forstå.',
      type: 'text',
    },
    {
      id: 'solution',
      title: 'Løsningen',
      content:
        'En interaktiv portal med flere moduler: En visuell tidslinje som viser avfallets reise fra hjem til gjenvinning. En quiz for å teste og forbedre sorteringskunnskaper. Et verktøy for å sammenligne resirkuleringsstatistikk mellom kommuner. Et dashboard med nøkkelstatistikk om Norges avfallssituasjon.',
      type: 'text',
    },
    {
      id: 'features',
      title: 'Hovedfunksjoner',
      content:
        '**Timeline-navigasjon** — Følg avfallets reise fra globalt nivå, gjennom Europa, Norge, husholdningen, innsamling, sortering, prosessering til slutt resultat. **Interaktiv quiz** — Test kunnskapen din om sortering med umiddelbar feedback. **Kommune-sammenligning** — Se hvordan din kommune presterer sammenlignet med andre. **Statistikk-dashboard** — Visualisert data om Norges avfallssituasjon.',
      type: 'list',
    },
    {
      id: 'tech',
      title: 'Teknisk implementering',
      content:
        'Portalen er bygget med vanilla JavaScript for optimal ytelse og ingen avhengigheter. Responsivt design som fungerer på alle enheter. Mørk modus-støtte. Tilgjengelig design med tastaturnavigasjon.',
      type: 'text',
    },
  ],
  gallery: [
    {
      src: '/images/avfallsportalen/timeline.jpg',
      alt: 'Tidslinje-visning',
      caption: 'Interaktiv tidslinje',
    },
    {
      src: '/images/avfallsportalen/quiz.jpg',
      alt: 'Quiz-modul',
      caption: 'Sorteringsquiz',
    },
    {
      src: '/images/avfallsportalen/compare.jpg',
      alt: 'Kommune-sammenligning',
      caption: 'Statistikk-sammenligning',
    },
    {
      src: '/images/avfallsportalen/dashboard.jpg',
      alt: 'Dashboard',
      caption: 'Statistikk-dashboard',
    },
  ],
  nextProject: 'headset',
};
