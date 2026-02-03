import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Section from "@/components/ui/Section";
import ProjectGrid from "@/components/ui/ProjectGrid";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { projects, getFeaturedProjects } from "@/content/projects";

const Home = () => {
  const featuredProject = getFeaturedProjects()[0];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container-narrow">
          <div className="max-w-3xl space-y-8">
            <h1 className="text-display-xl opacity-0 animate-fade-in-up">
              Brage Steen
            </h1>
            <p className="text-display-md text-muted-foreground opacity-0 animate-fade-in-up stagger-1">
              Product Designer
            </p>
            <p className="text-body-lg text-muted-foreground opacity-0 animate-fade-in-up stagger-2 max-w-xl">
              Jeg designer produkter og tjenester som fungerer – digitalt,
              fysisk, og i mellomrommet.
            </p>
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up stagger-3">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors"
              >
                Se arbeid
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-foreground rounded-lg font-medium hover:bg-accent transition-colors"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <Section className="bg-card/50">
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

          <ProjectGrid projects={projects} />

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-foreground rounded-lg font-medium hover:bg-accent transition-colors"
            >
              Se alle prosjekter
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Section>

      {/* Featured Project Highlight */}
      {featuredProject && (
        <Section>
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="text-caption">Fremhevet prosjekt</span>
                <h2 className="text-display-lg">{featuredProject.title}</h2>
                <p className="text-body-lg text-muted-foreground">
                  {featuredProject.description}
                </p>
                <Link
                  to={`/work/${featuredProject.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium hover:text-muted-foreground transition-colors link-underline"
                >
                  Les case study
                  <ArrowRight size={16} />
                </Link>
              </div>
              <div>
                <ImageWithFallback
                  src={featuredProject.coverImage}
                  alt={featuredProject.title}
                  aspectRatio="wide"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </Section>
      )}
    </Layout>
  );
};

export default Home;
