export interface Project {
  title: string;
  year: string;
  excerpt: string;
  tags: string[];
  href: string;
  coverGradient: string;
  cover?: string;
}

export const projects: Project[] = [
  {
    title: "The Sorting Guide",
    year: "2020",
    excerpt:
      "Bachelorprosjekt om sortering: innsikt, gigamap og interaktiv prototype som gjør avfall enklere å forstå.",
    tags: ["Tjenestedesign", "Bærekraft", "Innsikt"],
    href: "/projects/sorting-guide/index.html",
    coverGradient:
      "linear-gradient(140deg, #dfe8e1 0%, #f7f3ee 55%, #e2ede7 100%)",
    cover: "/projects/sorting-guide/images-153.png",
  },
  {
    title: "Headset",
    year: "2021",
    excerpt:
      "3D-printet headset med fokus på mekanikk, ergonomi og produksjon.",
    tags: ["Industridesign", "Prototyper", "Mekanikk"],
    href: "/projects/headset",
    coverGradient:
      "linear-gradient(140deg, #e6e1db 0%, #f6f2ec 55%, #ddd6cf 100%)",
    cover: "/projects/headset/details-render-2.png",
  },
  {
    title: "Seaweed",
    year: "2019",
    excerpt:
      "Utforsker tang som bærekraftig materiale for emballasje og produkter.",
    tags: ["Materialutforskning", "Bærekraft", "Konsept"],
    href: "/projects/seaweed/index.html",
    coverGradient:
      "linear-gradient(140deg, #dbe7e1 0%, #f5f2ed 55%, #d9e3d8 100%)",
    cover:
      "https://bragesteen.wordpress.com/wp-content/uploads/2025/05/fooodruewyrh12-copy.png?w=1024",
  },
  {
    title: "Avfallsportalen",
    year: "2026",
    excerpt:
      "Moderne visualisering av avfallsdata, basert på innsikten fra bachelorprosjektet The Sorting Guide (2020).",
    tags: ["Datavisualisering", "Bærekraft", "Tjeneste"],
    href: "/projects/avfallsportalen/index.html",
    coverGradient:
      "linear-gradient(140deg, #e1e6ee 0%, #f4f1ec 55%, #e2e1dc 100%)",
    cover: "/projects/avfallsportalen/cover.png",
  },
];
