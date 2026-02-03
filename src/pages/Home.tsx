import { Link } from 'react-router-dom';
import { HeroOrb } from '@/components/HeroOrb';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/content/projects';
import './Home.css';

export function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home__hero">
        <HeroOrb variant="warm" size="lg" className="home__orb home__orb--1" />
        <HeroOrb variant="cool" size="md" className="home__orb home__orb--2" />

        <div className="home__hero-content container">
          <h1 className="home__headline animate-fadeInUp">
            Produktdesigner som bygger funksjonelle løsninger
            <span className="home__headline-accent"> — fra innsikt til prototyp.</span>
          </h1>

          <p className="home__subline animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            Jeg er Brage Steen, en norsk produktdesigner med fokus på tjenestedesign,
            industridesign og bærekraftige løsninger. Jeg kombinerer research,
            prototyping og systemtenkning for å skape meningsfylte produkter.
          </p>

          <div className="home__ctas animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <Link to="/work" className="home__cta home__cta--primary">
              Se arbeid
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link to="/contact" className="home__cta home__cta--secondary">
              Kontakt
            </Link>
          </div>
        </div>

        <div className="home__scroll-indicator" aria-hidden="true">
          <span>Scroll</span>
          <div className="home__scroll-line" />
        </div>
      </section>

      {/* Projects Section */}
      <section className="home__projects section">
        <div className="container">
          <header className="home__projects-header">
            <h2 className="home__section-title">Utvalgte prosjekter</h2>
            <p className="home__section-intro">
              Et utvalg av mine nyeste prosjekter innen tjenestedesign, industridesign
              og materialforskning.
            </p>
          </header>

          <div className="home__projects-grid">
            {projects.map((project, index) => (
              <div
                key={project.slug}
                className="home__project-item animate-fadeInUp"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          <div className="home__projects-cta">
            <Link to="/work" className="home__cta home__cta--secondary">
              Se alle prosjekter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
