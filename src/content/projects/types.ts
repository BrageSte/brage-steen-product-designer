export interface ProjectSection {
  id: string;
  title: string;
  content: string;
  type?: 'text' | 'quote' | 'stats' | 'list';
}

export interface ProjectGalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface ProjectMeta {
  duration?: string;
  year?: string;
  role?: string;
  team?: string[];
  partner?: string;
  institution?: string;
  discipline?: string;
  tools?: string[];
  materials?: string[];
}

export interface ProjectSubpage {
  slug: string;
  title: string;
  description: string;
  content: string;
  embedUrl?: string;
  externalUrl?: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  thumbnail: string;
  hero?: string;
  meta: ProjectMeta;
  sections: ProjectSection[];
  gallery?: ProjectGalleryImage[];
  links?: ProjectLink[];
  subpages?: ProjectSubpage[];
  nextProject?: string;
}
