import ProjectCard from "./ProjectCard";
import type { Project } from "@/content/projects/index";

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectCard key={project.href} project={project} index={index} />
      ))}
    </div>
  );
};

export default ProjectGrid;
