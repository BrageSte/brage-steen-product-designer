import SiteLayout from "@/components/SiteLayout";
import ProjectGrid from "@/components/ui/ProjectGrid";
import { projects } from "@/content/projects";

const Work = () => {
  return (
    <SiteLayout>
      <main id="main-content">
        <section className="section-tight">
          <div className="container">
            <p className="eyebrow">Arbeid</p>
            <h1 className="text-display-lg mt-4">Utvalgte prosjekter</h1>
            <p className="text-body-lg mt-4 max-w-2xl">
              Et kuratert utvalg prosjekter — fra tjeneste- og industridesign til
              materialutforskning.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <ProjectGrid projects={projects} />
          </div>
        </section>
      </main>
    </SiteLayout>
  );
};

export default Work;
