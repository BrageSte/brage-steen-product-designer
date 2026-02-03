export interface PortfolioProject {
  id: string;
  title: string;
  year: string;
  description: string;
  tags: string[];
  href: string;
  coverPlaceholder?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "sorting-guide",
    title: "The Sorting Guide",
    year: "2020",
    description: "Tjenestedesign for enklere kildesortering i norske hjem — bachelorprosjekt med IKEA Norge.",
    tags: ["Tjenestedesign", "UX", "Bachelor"],
    href: "/projects/sorting-guide/",
  },
  {
    id: "headset",
    title: "Headset",
    year: "2019",
    description: "Ergonomisk hodtelefondesign med fokus på komfort og materialvalg.",
    tags: ["Produktdesign", "3D"],
    href: "/projects/headset/",
  },
  {
    id: "seaweed",
    title: "Seaweed",
    year: "2019",
    description: "Utforskning av tang som bærekraftig materiale for produktdesign.",
    tags: ["Materialforskning", "Bærekraft"],
    href: "/projects/seaweed/",
  },
  {
    id: "crimpblock",
    title: "Crimpblock",
    year: "2024",
    description: "Treningsverktøy for klatring — designet og produsert for BS Climbing.",
    tags: ["Produktdesign", "Klatring"],
    href: "https://bsclimbing.no",
  },
  {
    id: "avfallsportalen",
    title: "Avfallsportalen",
    year: "2021",
    description: "Digital tjeneste for bedre avfallshåndtering i kommuner.",
    tags: ["UX", "Digital tjeneste"],
    href: "/projects/avfallsportalen/",
  },
];
