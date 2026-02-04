import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { portfolioProjects } from "@/data/portfolioProjects";

const Work = () => {
  return (
    <Layout>
      <section className="section-spacing">
        <div className="container-wide">
          {/* Header */}
          <div className="mb-12">
            <span className="text-caption block mb-2">Portefølje</span>
            <h1 className="text-display-xl mb-4">Arbeid</h1>
            <p className="text-body-lg text-muted-foreground max-w-2xl">
              Et utvalg av prosjekter innen tjenestedesign, produktdesign og
              prototyping.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {portfolioProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface ProjectCardProps {
  project: typeof portfolioProjects[0];
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isExternal = project.href.startsWith("http");

  const cardContent = (
    <div className="group project-card h-full">
      {/* Placeholder image area */}
      <div className="aspect-[4/3] bg-gradient-to-br from-muted to-accent/50 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-muted-foreground/40 text-sm font-medium">{project.title}</span>
        </div>
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-lg font-medium">{project.title}</h3>
          <span className="text-sm text-muted-foreground">{project.year}</span>
        </div>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-pill text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (isExternal) {
    return (
      <a
        href={project.href}
        className={`block opacity-0 animate-fade-up-reveal`}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <Link
      to={project.href}
      className={`block opacity-0 animate-fade-up-reveal`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {cardContent}
    </Link>
  );
};

export default Work;
