import { Project } from './types';
import { sortingGuide } from './sorting-guide';
import { avfallsportalen } from './avfallsportalen';
import { headset } from './headset';
import { seaweed } from './seaweed';
import { crimpblock } from './crimpblock';

// Ordered list of all projects
export const projects: Project[] = [
  sortingGuide,
  avfallsportalen,
  headset,
  seaweed,
  crimpblock,
];

// Get a project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

// Get the next project in the list
export function getNextProject(currentSlug: string): Project | undefined {
  const project = getProjectBySlug(currentSlug);
  if (project?.nextProject) {
    return getProjectBySlug(project.nextProject);
  }
  return undefined;
}

// Re-export types
export type { Project, ProjectSection, ProjectGalleryImage, ProjectLink, ProjectMeta, ProjectSubpage } from './types';
