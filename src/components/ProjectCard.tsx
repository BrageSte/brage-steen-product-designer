import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  category: string;
  imagePlaceholder?: string;
  index?: number;
}

const ProjectCard = ({ slug, title, description, category, imagePlaceholder, index = 0 }: ProjectCardProps) => {
  return (
    <Link 
      to={`/prosjekter/${slug}`}
      className="group block project-card opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image placeholder */}
      <div className="aspect-[4/3] bg-muted relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
          {imagePlaceholder || "Prosjektbilde"}
        </div>
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <span className="tag">{category}</span>
            <h3 className="font-display font-semibold text-xl group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground text-body">
              {description}
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
