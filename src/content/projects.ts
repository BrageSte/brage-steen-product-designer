export interface Project {
  slug: string;
  title: string;
  year: string;
  tags: string[];
  category: string;
  role: string;
  summary: string;
  description: string;
  coverImage: string;
  galleryImages: string[];
  links: {
    prototype?: string;
    gigamap?: string;
    external?: string;
    model3d?: string;
  };
  featured?: boolean;
  hasSubpages?: boolean;
}

export const projects: Project[] = [
  {
    slug: "sorting-guide",
    title: "Sorteringsguiden",
    year: "2023",
    tags: ["Service", "Digital", "Prototype"],
    category: "Service Design",
    role: "Tjenestedesigner",
    summary: "En digital guide som gjør kildesortering enkelt og forståelig for alle.",
    description: "Sorteringsguiden er et samarbeidsprosjekt med IKEA og Grønt Punkt Norge som gjør kildesortering enklere gjennom en brukervennlig digital løsning. Prosjektet kombinerer tjenestedesign, brukerinnsikt og prototyping.",
    coverImage: "/images/sorting-guide/cover.jpg",
    galleryImages: [
      "/images/sorting-guide/gallery-1.jpg",
      "/images/sorting-guide/gallery-2.jpg",
      "/images/sorting-guide/gallery-3.jpg",
    ],
    links: {
      prototype: "/work/sorting-guide/prototype",
      gigamap: "/work/sorting-guide/gigamap",
    },
    featured: true,
    hasSubpages: true,
  },
  {
    slug: "avfallsportalen",
    title: "Avfallsportalen",
    year: "2023",
    tags: ["Service", "Digital"],
    category: "Digital Service",
    role: "Tjenestedesigner",
    summary: "Redesign av en kommunal avfallstjeneste med fokus på brukervennlighet.",
    description: "Avfallsportalen er et prosjekt som utforsker hvordan digitale tjenester kan gjøre hverdagen enklere for innbyggere som trenger å håndtere avfall og gjenvinning.",
    coverImage: "/images/avfallsportalen/cover.jpg",
    galleryImages: [
      "/images/avfallsportalen/gallery-1.jpg",
      "/images/avfallsportalen/gallery-2.jpg",
    ],
    links: {},
    featured: false,
  },
  {
    slug: "headset",
    title: "3D Printed Headset",
    year: "2022",
    tags: ["Product", "Prototype"],
    category: "Fysisk produkt",
    role: "Produktdesigner",
    summary: "Utforskning av ergonomi, form og produksjonsdesign gjennom fysisk prototyping.",
    description: "Dette prosjektet utforsker design av et sammenleggbart headset for pendlere og kontorbruk, med fokus på industriell produksjon. Gjennom rask prototyping og iterasjon testet jeg hvordan form, passform og ergonomi fungerer i virkeligheten.",
    coverImage: "/images/headset/cover.jpg",
    galleryImages: [
      "/images/headset/gallery-1.jpg",
      "/images/headset/gallery-2.jpg",
      "/images/headset/gallery-3.jpg",
    ],
    links: {
      model3d: "https://a360.co/4bEJ4bR",
    },
    featured: false,
  },
  {
    slug: "seaweed",
    title: "Seaweed",
    year: "2022",
    tags: ["Product", "Prototype"],
    category: "Fysisk produkt",
    role: "Produktdesigner",
    summary: "Utforskning av tang som materiale for bærekraftige produkter.",
    description: "Seaweed-prosjektet undersøker potensialet i tang som råmateriale for produktdesign. Gjennom eksperimentering med ulike bearbeidingsmetoder utforsket jeg materialets egenskaper og muligheter.",
    coverImage: "/images/seaweed/cover.jpg",
    galleryImages: [
      "/images/seaweed/gallery-1.jpg",
      "/images/seaweed/gallery-2.jpg",
    ],
    links: {},
    featured: false,
  },
  {
    slug: "crimpblock",
    title: "Crimpblock",
    year: "2024",
    tags: ["Product", "Prototype"],
    category: "Fysisk produkt",
    role: "Grunnlegger & Designer",
    summary: "Modulære 3D-printede klatretak for hjemmetrening.",
    description: "Crimpblock er et eget prosjekt der jeg designer og produserer modulære klatretak ved hjelp av 3D-printing. Produktene selges gjennom BS Climbing.",
    coverImage: "/images/crimpblock/cover.jpg",
    galleryImages: [
      "/images/crimpblock/gallery-1.jpg",
      "/images/crimpblock/gallery-2.jpg",
    ],
    links: {
      external: "https://bsclimbing.lovable.app",
    },
    featured: false,
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((p) => p.featured);
};

export const getProjectsByTag = (tag: string): Project[] => {
  return projects.filter((p) => p.tags.includes(tag));
};

export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags);
};
