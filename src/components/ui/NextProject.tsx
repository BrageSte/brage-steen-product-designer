import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";
import type { Project } from "@/content/projects";

interface NextProjectProps {
  project: Project;
}

const NextProject = ({ project }: NextProjectProps) => {
  return (
    <div className="border-t border-border pt-16 md:pt-24">
      <div className="container-wide">
        <span className="text-caption block mb-4">Neste prosjekt</span>
        <Link
          to={`/work/${project.slug}`}
          className="group block"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-display-md group-hover:text-muted-foreground transition-colors">
                {project.title}
              </h3>
              <p className="text-body text-muted-foreground">
                {project.summary}
              </p>
            </div>
            <ArrowRight
              size={32}
              className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-2 transition-all flex-shrink-0"
            />
          </div>
          <div className="mt-8 max-w-md">
            <ImageWithFallback
              src={project.coverImage}
              alt={project.title}
              aspectRatio="wide"
              className="rounded-lg"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NextProject;
