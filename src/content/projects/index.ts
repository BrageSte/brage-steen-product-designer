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
    title: "BS Climbing",
    year: "2025–nå",
    excerpt:
      "Et klatreprodukt tilpasset fingermål, fra fysiske prototyper og digital konfigurator til produksjonsunderlag.",
    tags: ["Produktdesign", "Prototyper", "Digital konfigurator"],
    href: "/prosjekter/bs-climbing",
    coverGradient:
      "linear-gradient(140deg, #e8e0d8 0%, #f5f0ea 55%, #e0d8d0 100%)",
    cover: "/projects/bsclimbing/nett/hero-product.jpg",
  },
  {
    title: "Kildesortering",
    year: "2020",
    excerpt:
      "Bachelorprosjekt med innsikt, gigamap og en interaktiv prototype for å gjøre sortering enklere å forstå.",
    tags: ["Tjenestedesign", "Bærekraft", "Innsikt"],
    href: "/prosjekter/kildesortering",
    coverGradient:
      "linear-gradient(140deg, #dfe8e1 0%, #f7f3ee 55%, #e2ede7 100%)",
    cover: "/projects/sorting-guide/nett/images-153.jpg",
  },
  {
    title: "Headset",
    year: "2021",
    excerpt:
      "Sammenleggbart headset med sprøytestøping som premiss og 3D-printede prototyper.",
    tags: ["Industridesign", "Prototyper", "Mekanikk"],
    href: "/prosjekter/headset",
    coverGradient:
      "linear-gradient(140deg, #e6e1db 0%, #f6f2ec 55%, #ddd6cf 100%)",
    cover: "/projects/headset/nett/details-render-2.jpg",
  },
  {
    title: "Seaweed",
    year: "2019",
    excerpt:
      "Materialforsøk med tang: testmetoder, tørking og læring fra fysiske prøver.",
    tags: ["Materialutforskning", "Bærekraft", "Konsept"],
    href: "/prosjekter/seaweed",
    coverGradient:
      "linear-gradient(140deg, #dbe7e1 0%, #f5f2ed 55%, #d9e3d8 100%)",
    cover:
      "/projects/seaweed/nett/overview.jpg",
  },
];
