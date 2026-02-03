import ProjectCard from "./ProjectCard";
import type { Project } from "@/content/projects";

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
};

export default ProjectGrid;
