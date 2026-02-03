import { Link } from 'react-router-dom';
import './About.css';

const principles = [
  {
    title: 'Design for reell bruk',
    description: 'Ikke ideelle scenarier. De beste løsningene tåler virkeligheten.',
  },
  {
    title: 'Reduser kompleksitet',
    description: 'Før du legger til funksjoner. Enkelhet er ofte det vanskeligste.',
  },
  {
    title: 'Bygg for å lære',
    description: 'Prototyper og testing gir innsikt som research alene ikke kan.',
  },
];

const skills = [
  'Tjenestedesign og brukerreiser',
  'Fysisk produktdesign',
  'Prototyping og testing',
  'Brukerresearch og intervjuer',
  'Systemtenkning',
  'CAD og 3D-modellering',
  'Workshop-fasilitering',
];

const tools = [
  'Figma',
  'Fusion 360 / SolidWorks',
  '3D-printing (FDM/SLA)',
  'Adobe Creative Suite',
  'Miro / FigJam',
  'Grunnleggende frontend',
];

export function About() {
  return (
    <div className="about">
      {/* Hero */}
      <section className="about__hero section">
        <div className="container container--narrow">
          <div className="about__hero-grid">
            <div className="about__hero-content">
              <span className="about__label">Om meg</span>
              <h1 className="about__title">Brage Steen</h1>
              <p className="about__intro">
                Jeg er en produktdesigner med bakgrunn fra tjenestedesign og
                fysiske produkter. Jeg trives best når jeg får jobbe tett på
                problemet — enten det er gjennom research, prototyping, eller
                bygging av faktiske løsninger.
              </p>
            </div>
            <div className="about__image">
              <div className="about__image-placeholder">
                Profilbilde
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extended Bio */}
      <section className="about__bio section">
        <div className="container container--narrow">
          <div className="about__bio-content">
            <h2 className="about__section-title">Hvordan jeg jobber</h2>
            <p>
              Jeg er komfortabel med å jobbe på tvers av digitale og fysiske
              produkter. Det betyr at jeg kan bidra i alt fra tidlig research
              og konseptutvikling til detaljert prototyping og testing.
            </p>
            <p>
              Jeg er spesielt interessert i systemer, begrensninger og reell
              bruk. Mange av de beste løsningene jeg har vært med på å lage
              har kommet fra å forstå begrensningene godt – og designe innenfor
              dem, heller enn å prøve å overvinne dem.
            </p>
            <p>
              Jeg verdsetter klarhet, reduksjon og praktiske løsninger. Det
              betyr at jeg ofte argumenterer for å fjerne funksjoner, forenkle
              flyter, eller akseptere «godt nok» når det er det riktige svaret.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="about__principles section">
        <div className="container container--narrow">
          <h2 className="about__section-title">Prinsipper</h2>
          <div className="about__principles-grid">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="about__principle animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="about__principle-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="about__principle-title">{principle.title}</h3>
                <p className="about__principle-description">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="about__skills section">
        <div className="container container--narrow">
          <div className="about__skills-grid">
            <div className="about__skill-column">
              <h2 className="about__section-title">Kompetanseområder</h2>
              <ul className="about__skill-list">
                {skills.map((skill, index) => (
                  <li key={index} className="about__skill-item">
                    <span className="about__skill-dot" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="about__skill-column">
              <h2 className="about__section-title">Verktøy</h2>
              <ul className="about__skill-list">
                {tools.map((tool, index) => (
                  <li key={index} className="about__skill-item">
                    <span className="about__skill-dot" />
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="about__cta section">
        <div className="container container--narrow">
          <h2 className="about__cta-title">La oss snakke</h2>
          <p className="about__cta-text">
            Jeg er alltid interessert i å høre om nye prosjekter og muligheter.
            Ta gjerne kontakt for en uforpliktende prat.
          </p>
          <Link to="/contact" className="about__cta-button">
            Kontakt meg
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
