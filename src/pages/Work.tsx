import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/content/projects';
import './Work.css';

export function Work() {
  return (
    <div className="work">
      <header className="work__header section">
        <div className="container">
          <h1 className="work__title">Arbeid</h1>
          <p className="work__intro">
            En samling av mine prosjekter innen tjenestedesign, industridesign,
            materialforskning og produktutvikling. Hvert prosjekt representerer
            en reise fra problemforståelse til konkret løsning.
          </p>
        </div>
      </header>

      <section className="work__projects section">
        <div className="container">
          <div className="work__grid">
            {projects.map((project, index) => (
              <div
                key={project.slug}
                className="work__project-item animate-fadeInUp"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
