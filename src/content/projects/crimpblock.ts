import { Project } from './types';

export const crimpblock: Project = {
  slug: 'crimpblock',
  title: 'Crimpblock',
  subtitle: 'Custom 3D-printet treningsgrep',
  description:
    'Tilpassbare 3D-printede crimpblocks for klatretrening. Designet for å kunne justeres etter individuelle behov og treningsnivå.',
  tags: ['3D Print', 'Produktdesign', 'Klatring', 'Parametrisk'],
  thumbnail: '/images/crimpblock/thumbnail.jpg',
  hero: '/images/crimpblock/hero.jpg',
  meta: {
    year: '2023',
    role: 'Designer & Produsent',
    discipline: 'Produktdesign',
    tools: ['Fusion 360', '3D Print', 'PLA/PETG'],
  },
  sections: [
    {
      id: 'about',
      title: 'Om prosjektet',
      content:
        'Crimpblock er et personlig prosjekt som kombinerer min lidenskap for klatring med ferdighetene mine innen produktdesign og 3D-printing. Målet var å lage tilpassbare treningsgrep som kan justeres for ulike ferdighetsnivåer og treningsbehov.',
      type: 'text',
    },
    {
      id: 'problem',
      title: 'Problemet',
      content:
        'Tradisjonelle hangboards og treningsgrep kommer i faste størrelser og dybder. Dette fungerer dårlig for klatrere på ulike nivåer — nybegynnere trenger ofte dypere grep for å unngå skader, mens erfarne klatrere trenger mindre grep for progresjon. I tillegg er mange treningsgrep dyre og lite tilpassbare.',
      type: 'text',
    },
    {
      id: 'solution',
      title: 'Løsningen',
      content:
        'Ved å bruke parametrisk design i Fusion 360 har jeg utviklet en crimpblock som kan tilpasses i flere dimensjoner: grepsdybde, vinkel, avrunding av kanter, og totalhøyde. Dette gjør det mulig å produsere grep som er perfekt tilpasset den enkelte brukers behov og progresjon.',
      type: 'text',
    },
    {
      id: 'customization',
      title: 'Tilpasningsparametere',
      content:
        '**Grepsdybde** — Fra 6mm (avansert) til 25mm (nybegynner). **Kantavrunding** — Justerbar fra skarp til komfortabel. **Vinkel** — Flat, innover eller utover. **Montasje** — Flere alternativer for oppheng og feste.',
      type: 'list',
    },
    {
      id: 'production',
      title: 'Produksjon',
      content:
        'Alle crimpblocks 3D-printes i PETG eller PLA+ for optimal styrke og holdbarhet. Overflaten etterbehandles for å gi god friksjon uten å være for hard på huden. Hver blokk går gjennom kvalitetskontroll før levering.',
      type: 'text',
    },
    {
      id: 'shop',
      title: 'Kjøp Crimpblock',
      content:
        'Crimpblocks er tilgjengelige for salg gjennom BS Climbing. Du kan velge mellom standard størrelser eller bestille tilpassede grep basert på dine spesifikasjoner.',
      type: 'text',
    },
  ],
  gallery: [
    {
      src: '/images/crimpblock/product-01.jpg',
      alt: 'Crimpblock oversikt',
      caption: 'Produktoversikt',
    },
    {
      src: '/images/crimpblock/product-02.jpg',
      alt: 'Ulike størrelser',
      caption: 'Størrelsesvariasjoner',
    },
    {
      src: '/images/crimpblock/detail.jpg',
      alt: 'Detaljbilde',
      caption: 'Overflatedetalj',
    },
    {
      src: '/images/crimpblock/in-use.jpg',
      alt: 'I bruk',
      caption: 'Trening med Crimpblock',
    },
  ],
  links: [
    {
      label: 'Se BS Climbing butikk',
      href: 'https://bsclimbing.no',
      external: true,
    },
  ],
  nextProject: 'sorting-guide',
};
