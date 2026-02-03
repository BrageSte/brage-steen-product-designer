import Layout from "@/components/layout/Layout";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/content/projects/index";

const Projects = () => {
  return (
    <Layout>
      <section className="section-spacing">
        <div className="container-wide">
          <div className="max-w-2xl mb-16">
            <span className="text-caption block mb-4">Prosjekter</span>
            <h1 className="text-display-lg mb-6">
              Utvalgte arbeider
            </h1>
            <p className="text-body-lg text-muted-foreground">
              Et utvalg prosjekter som viser bredden i arbeidet mitt – fra 
              tjenestedesign og digitale produkter til fysiske objekter og 
              systemtenkning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
