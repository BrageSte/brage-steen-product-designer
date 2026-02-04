import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { portfolioProjects } from "@/data/portfolioProjects";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section with subtle Turrell-inspired glow */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Subtle glow orb */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-[600px] h-[600px] rounded-full opacity-30 animate-glow-pulse"
            style={{
              background: "radial-gradient(circle, hsl(35 40% 94%) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
        </div>

        <div className="container-narrow relative z-10">
          <div className="max-w-2xl space-y-8">
            <h1 className="text-display-xl opacity-0 animate-fade-in-up">
              Designer som skaper
            </h1>
            <p className="text-display-sm text-muted-foreground opacity-0 animate-fade-in-up stagger-1">
              Meningsfulle, funksjonelle og bærekraftige løsninger
            </p>
            <p className="text-body-lg text-muted-foreground opacity-0 animate-fade-in-up stagger-2 max-w-lg">
              Jeg designer produkter og tjenester som fungerer — digitalt,
              fysisk, og i mellomrommet.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 opacity-0 animate-fade-in-up stagger-3">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors"
              >
                Se arbeid
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-accent transition-colors"
              >
                Kontakt meg
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="section-spacing bg-card/30">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-caption block mb-2">Prosjekter</span>
              <h2 className="text-display-md">Utvalgte arbeider</h2>
            </div>
            <Link
              to="/work"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors link-underline"
            >
              Se alle
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {portfolioProjects.slice(0, 4).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-accent transition-colors"
            >
              Se alle prosjekter
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Brief intro */}
      <section className="section-spacing">
        <div className="container-narrow">
          <div className="max-w-2xl">
            <span className="text-caption block mb-4">Om meg</span>
            <p className="text-display-sm text-muted-foreground leading-relaxed">
              Nysgjerrig designer med bakgrunn i produktdesign fra OsloMet.
              Jeg trives best når jeg får kombinere kreativitet med struktur,
              og når jeg kan samarbeide om komplekse utfordringer.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm font-medium hover:text-muted-foreground transition-colors link-underline"
            >
              Les mer om meg
              <ArrowRight size={16} />
            </Link>
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

export default Home;
