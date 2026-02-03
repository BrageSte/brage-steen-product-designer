import { Project } from './types';
import { sortingGuide } from './sorting-guide';
import { avfallsportalen } from './avfallsportalen';
import { headset } from './headset';
import { seaweed } from './seaweed';
import { crimpblock } from './crimpblock';

// Ordered list of all projects - add coverImage as alias for thumbnail
export const projects: Project[] = [
  { ...sortingGuide, coverImage: sortingGuide.thumbnail, featured: true },
  { ...avfallsportalen, coverImage: avfallsportalen.thumbnail },
  { ...headset, coverImage: headset.thumbnail },
  { ...seaweed, coverImage: seaweed.thumbnail },
  { ...crimpblock, coverImage: crimpblock.thumbnail },
];

// Get a project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

// Get the next project in the list
export function getNextProject(currentSlug: string): Project | undefined {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  if (currentIndex !== -1 && currentIndex < projects.length - 1) {
    return projects[currentIndex + 1];
  }
  return projects[0]; // Loop back to first project
}

// Get featured projects
export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

// Get all unique tags
export function getAllTags(): string[] {
  const tags = new Set<string>();
  projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags);
}

// Re-export types
export type { Project, ProjectSection, ProjectGalleryImage, ProjectLink, ProjectMeta, ProjectSubpage } from './types';
