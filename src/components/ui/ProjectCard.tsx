import type { CSSProperties } from "react";
import TagPill from "./TagPill";
import type { Project } from "@/content/projects/index";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  return (
    <a
      href={project.href}
      className="group project-card opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div
        className="project-cover"
        style={
          {
            "--cover-gradient": project.coverGradient,
          } as CSSProperties
        }
      >
        {project.cover && (
          <img src={project.cover} alt={project.title} loading="lazy" />
        )}
      </div>

      <div className="mt-5 space-y-3">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          {project.tags.map((tag) => (
            <TagPill key={tag} label={tag} />
          ))}
          <span className="text-xs text-muted-foreground">{project.year}</span>
        </div>
        <h3 className="text-display-sm group-hover:text-muted-foreground transition-colors">
          {project.title}
        </h3>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
          {project.excerpt}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;
