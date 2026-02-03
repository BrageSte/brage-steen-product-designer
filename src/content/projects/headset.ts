import { Project } from './types';

export const headset: Project = {
  slug: 'headset',
  title: '3D Printed Headset',
  subtitle: 'Design for Industrialization',
  description:
    'Et foldbart pendler- og kontorheadset designet for masseproduksjon via sprøytestøping. 4 måneders prosjekt med fokus på industrielle produksjonsmetoder.',
  tags: ['Industridesign', '3D Print', 'CAD', 'Prototyping'],
  thumbnail: '/images/headset/thumbnail.jpg',
  hero: '/images/headset/hero.jpg',
  meta: {
    duration: '4 måneder',
    year: '2021',
    role: 'Product Designer',
    discipline: 'Industridesign',
    tools: ['Fusion 360', '3D Print', 'Keyshot'],
    materials: ['Polyetylen', 'Stål', 'Skinn'],
  },
  sections: [
    {
      id: 'about',
      title: 'Om prosjektet',
      content:
        'Prosjektbriefet var å designe et pendler- og kontorvennlig headset med fokus på industrialisert produksjon. Det foldbare designet sikrer portabilitet for reise og daglig bruk.',
      type: 'text',
    },
    {
      id: 'brief',
      title: 'Produktbrief',
      content:
        'Målmarked: $200-300 prisklasse. Produksjonsvolum: 100 000 enheter. Produksjonsmetode: Sprøytestøping. Hver komponent er optimalisert for plastsprøytestøping for å sikre kostnadseffektiv masseproduksjon.',
      type: 'stats',
    },
    {
      id: 'challenge',
      title: 'Utfordringen',
      content:
        'Å designe et headset som kombinerer estetikk, komfort og produserbarhet krever nøye balansering av mange faktorer. Deler må ha riktige formslippvinkler for enkel utløsning fra støpeformer, noe som reduserer produksjonsfeil og slitasje på verktøy.',
      type: 'text',
    },
    {
      id: 'ideation',
      title: 'Idéfase',
      content:
        'Den innledende fasen involverte utforskning av ulike leddtyper og formspråk. Et betydelig fokus ble lagt på å designe headset-koppholderen, med mål om et visuelt distinkt bakstykke som kontrasterer med hovedformen.',
      type: 'text',
    },
    {
      id: 'prototyping',
      title: 'Prototyping',
      content:
        'Å perfeksjonere vinklene for både estetikk og funksjonalitet var en utfordring som krevde mange iterasjoner for å oppnå ideell passform. Siden headsettet er designet for sprøytestøping, ble det lagt nøye vekt på formslippvinkler for å sikre jevn utløsning fra støpeformer. Lean prototyping-metoder var essensielle — 3D-printing muliggjorde rask testing av variasjoner for å validere komfort og ergonomi før finalisering av designet.',
      type: 'text',
    },
    {
      id: 'solution',
      title: 'Endelig design',
      content:
        'Det endelige designet har modulær konstruksjon for enkel montering og servicevennlighet. Alle plastdeler har 2% formslippvinkel gjennomgående for optimal produksjonseffektivitet. Det foldbare designet gjør headsettet kompakt og reisevennlig.',
      type: 'text',
    },
    {
      id: 'technical',
      title: 'Tekniske tegninger',
      content:
        'Detaljerte tekniske tegninger med dimensjoner og toleranser for alle komponenter. Inkluderer eksplodert monteringsvisning, ørekoppmål, glidemekanisme og hodetbånddetaljer.',
      type: 'text',
    },
  ],
  gallery: [
    {
      src: '/images/headset/sketch-01.jpg',
      alt: 'Konseptskisser',
      caption: 'Tidlige skisser',
    },
    {
      src: '/images/headset/sketch-02.jpg',
      alt: 'Detaljskisser',
      caption: 'Formutforskning',
    },
    {
      src: '/images/headset/prototype-01.jpg',
      alt: 'Vinkelvariasjoner',
      caption: '3D-printede prototyper',
    },
    {
      src: '/images/headset/prototype-02.jpg',
      alt: 'Hodebånditerasjoner',
      caption: 'Hodebånd-iterasjoner',
    },
    {
      src: '/images/headset/render-01.jpg',
      alt: 'Endelig design render',
      caption: 'Endelig design',
    },
    {
      src: '/images/headset/render-02.jpg',
      alt: 'Funksjonsdetaljer',
      caption: 'Funksjonsdetaljer',
    },
    {
      src: '/images/headset/detail-01.jpg',
      alt: 'Ledddetalj',
      caption: 'Leddmekanisme',
    },
    {
      src: '/images/headset/detail-02.jpg',
      alt: 'Knappdetalj',
      caption: 'Kontrollknapper',
    },
    {
      src: '/images/headset/technical-01.jpg',
      alt: 'Eksplodert monteringsvisning',
      caption: 'Teknisk tegning',
    },
  ],
  links: [
    {
      label: 'Se 3D-modell på Sketchfab',
      href: 'https://sketchfab.com/3d-models/assembly-2-dd8b8b2a1f0645b6b65a4f19227cc69d',
      external: true,
    },
  ],
  nextProject: 'seaweed',
};
