import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";
import TagPill from "./TagPill";
import type { Project } from "@/content/projects/index";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  return (
    <Link
      to={`/work/${project.slug}`}
      className="group block project-card opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Cover image */}
      <ImageWithFallback
        src={project.thumbnail}
        alt={project.title}
        aspectRatio="wide"
      />

      {/* Content */}
      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {project.tags[0] && <TagPill label={project.tags[0]} />}
              {project.meta.year && (
                <span className="text-xs text-muted-foreground self-center">
                  {project.meta.year}
                </span>
              )}
            </div>
            <h3 className="text-display-sm group-hover:text-muted-foreground transition-colors">
              {project.title}
            </h3>
            <p className="text-body text-muted-foreground line-clamp-2">
              {project.description}
            </p>
          </div>
          <ArrowRight
            size={20}
            className="mt-8 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all flex-shrink-0"
          />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
