import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";
import ProjectGrid from "@/components/ui/ProjectGrid";
import { projects } from "@/content/projects";

const Home = () => {
  return (
    <SiteLayout>
      <main id="main-content">
        <section className="hero-section">
          <div className="container relative z-10">
            <p className="eyebrow">Produktdesigner</p>
            <h1 className="text-display-xl mt-6 text-balance">
              <span className="block">Jeg designer produkter og tjenester</span>
              <span className="block">med funksjon, klarhet og varighet.</span>
            </h1>
            <p className="text-body-lg mt-6 max-w-2xl">
              Tjenestedesign, industridesign og bærekraftig innovasjon.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a className="btn btn-primary" href="#arbeid">
                Se arbeid
              </a>
              <Link className="btn btn-ghost" to="/about">
                Om meg
              </Link>
            </div>
          </div>
          <div className="hero-orb" aria-hidden="true" />
        </section>

        <section id="arbeid" className="section">
          <div className="container">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow">Arbeid</p>
                <h2 className="text-display-md mt-3">Utvalgte prosjekter</h2>
              </div>
              <p className="text-sm md:text-base text-muted-foreground max-w-xl">
                Et rolig, kuratert utsnitt av prosjekter som viser metode, form og
                funksjon.
              </p>
            </div>
            <div className="mt-10">
              <ProjectGrid projects={projects} />
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
};

export default Home;
