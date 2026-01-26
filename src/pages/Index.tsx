import Layout from "@/components/Layout";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/data/projects";

const Index = () => {
  const featuredProjects = getFeaturedProjects();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-spacing">
        <div className="container-narrow">
          <div className="max-w-3xl space-y-8">
            <h1 className="text-display-xl opacity-0 animate-fade-in-up">
              Produktdesigner som bygger – digitalt, fysisk og i mellomrommet.
            </h1>
            <p className="text-body-lg text-muted-foreground opacity-0 animate-fade-in-up stagger-1">
              Brage er en produktdesigner som jobber i skjæringspunktet mellom 
              tjenester, fysiske produkter og praktiske systemer. Han er opptatt 
              av å gjøre komplekse problemer forståelige, brukbare og robuste.
            </p>
            <div className="opacity-0 animate-fade-in-up stagger-2">
              <Button to="/prosjekter" variant="primary" size="lg" showArrow>
                Se utvalgte prosjekter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-spacing bg-card">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-caption block mb-2">Utvalgte prosjekter</span>
              <h2 className="text-display-md">Nylige arbeider</h2>
            </div>
            <Button to="/prosjekter" variant="ghost" showArrow className="hidden md:inline-flex">
              Se alle
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                description={project.description}
                category={project.category}
                index={index}
              />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button to="/prosjekter" variant="secondary" showArrow>
              Se alle prosjekter
            </Button>
          </div>
        </div>
      </section>

      {/* Short About Teaser */}
      <section className="section-spacing">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-caption">Om meg</span>
              <h2 className="text-display-md">
                Jeg trives best når jeg får jobbe tett på problemet.
              </h2>
              <p className="text-body-lg text-muted-foreground">
                Enten det er gjennom research, prototyping, eller bygging av 
                faktiske løsninger – jeg liker å forstå ting fra innsiden.
              </p>
              <Button to="/om" variant="secondary" showArrow>
                Mer om meg
              </Button>
            </div>
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm">
              Profilbilde
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
