import { useParams, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import Button from "@/components/Button";
import { getProjectBySlug, projects } from "@/data/projects";
import { ArrowLeft } from "lucide-react";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/prosjekter" replace />;
  }

  const currentIndex = projects.findIndex(p => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <Layout>
      {/* Hero */}
      <section className="section-spacing pb-12">
        <div className="container-narrow">
          <Button 
            to="/prosjekter" 
            variant="ghost" 
            className="mb-8 -ml-2 opacity-0 animate-fade-in"
          >
            <ArrowLeft size={16} />
            Alle prosjekter
          </Button>

          <div className="space-y-6 opacity-0 animate-fade-in-up">
            <span className="tag">{project.category}</span>
            <h1 className="text-display-lg">{project.title}</h1>
            <p className="text-body-lg text-muted-foreground max-w-2xl">
              {project.subtitle}
            </p>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-border opacity-0 animate-fade-in-up stagger-1">
            <div>
              <span className="text-caption block mb-1">Rolle</span>
              <p className="text-body">{project.role}</p>
            </div>
            <div>
              <span className="text-caption block mb-1">Varighet</span>
              <p className="text-body">{project.duration}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image Placeholder */}
      <section className="container-wide mb-16">
        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
          Hovedbilde: {project.title}
        </div>
      </section>

      {/* Content */}
      <article className="container-narrow">
        <div className="space-y-16">
          {/* Overview */}
          <section className="opacity-0 animate-fade-in-up stagger-2">
            <h2 className="text-display-md mb-6">Oversikt</h2>
            <p className="text-body-lg text-muted-foreground">
              {project.overview}
            </p>
          </section>

          {/* Problem */}
          <section>
            <h2 className="text-display-md mb-6">Problemet</h2>
            <p className="text-body-lg text-muted-foreground">
              {project.problem}
            </p>
          </section>

          {/* Image placeholder */}
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm">
            Prosessbilde / diagram
          </div>

          {/* My Role */}
          <section>
            <h2 className="text-display-md mb-6">Min rolle</h2>
            <p className="text-body-lg text-muted-foreground">
              {project.myRole}
            </p>
          </section>

          {/* Insights */}
          <section>
            <h2 className="text-display-md mb-6">Nøkkelinnsikter</h2>
            <ul className="space-y-4">
              {project.insights.map((insight, index) => (
                <li 
                  key={index}
                  className="flex gap-4 text-body-lg"
                >
                  <span className="text-muted-foreground font-display font-bold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-muted-foreground">{insight}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Image grid placeholder */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm">
              Prosessbilde 1
            </div>
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm">
              Prosessbilde 2
            </div>
          </div>

          {/* Process */}
          <section>
            <h2 className="text-display-md mb-6">Prosess og iterasjoner</h2>
            <p className="text-body-lg text-muted-foreground">
              {project.process}
            </p>
          </section>

          {/* Image placeholder */}
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm">
            Iterasjoner / prototyper
          </div>

          {/* Solution */}
          <section>
            <h2 className="text-display-md mb-6">Løsningen</h2>
            <p className="text-body-lg text-muted-foreground">
              {project.solution}
            </p>
          </section>

          {/* Final image placeholder */}
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm">
            Endelig løsning / resultat
          </div>

          {/* Reflection */}
          <section className="pb-8">
            <h2 className="text-display-md mb-6">Refleksjon</h2>
            <p className="text-body-lg text-muted-foreground">
              {project.reflection}
            </p>
          </section>
        </div>
      </article>

      {/* Next Project */}
      <section className="section-spacing bg-card mt-16">
        <div className="container-narrow text-center">
          <span className="text-caption block mb-4">Neste prosjekt</span>
          <h2 className="text-display-md mb-8">{nextProject.title}</h2>
          <Button to={`/prosjekter/${nextProject.slug}`} variant="primary" size="lg" showArrow>
            Se prosjekt
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
