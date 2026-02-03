import { useParams, Link, Navigate } from 'react-router-dom';
import { getProjectBySlug, getNextProject } from '@/content/projects';
import './ProjectPage.css';

export function ProjectPage() {
  const { slug, subpage } = useParams<{ slug: string; subpage?: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  // Handle subpage (prototype, gigamap, etc.)
  if (subpage && project.subpages) {
    const subpageData = project.subpages.find((s) => s.slug === subpage);
    if (subpageData) {
      return (
        <div className="project-subpage">
          <header className="project-subpage__header section">
            <div className="container">
              <Link to={`/work/${slug}`} className="project-subpage__back">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Tilbake til {project.title}
              </Link>
              <h1 className="project-subpage__title">{subpageData.title}</h1>
              <p className="project-subpage__description">{subpageData.description}</p>
            </div>
          </header>

          <section className="project-subpage__content section">
            <div className="container container--narrow">
              <p>{subpageData.content}</p>

              {subpageData.embedUrl && (
                <div className="project-subpage__embed">
                  <iframe
                    src={subpageData.embedUrl}
                    title={subpageData.title}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              )}

              {subpageData.externalUrl && (
                <div className="project-subpage__external">
                  <a
                    href={subpageData.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-page__link"
                  >
                    Åpne i ny fane
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M12 8.667V12a1.333 1.333 0 01-1.333 1.333H4A1.333 1.333 0 012.667 12V5.333A1.333 1.333 0 014 4h3.333M10 2h4v4M6.667 9.333L14 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </section>
        </div>
      );
    }
  }

  const nextProject = getNextProject(project.slug);

  return (
    <div className="project-page">
      {/* Hero */}
      <header className="project-page__hero">
        {project.hero && (
          <div className="project-page__hero-image">
            <img src={project.hero} alt={project.title} />
            <div className="project-page__hero-overlay" />
          </div>
        )}
        <div className="project-page__hero-content container">
          <div className="project-page__tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-page__tag">{tag}</span>
            ))}
          </div>
          <h1 className="project-page__title">{project.title}</h1>
          {project.subtitle && (
            <p className="project-page__subtitle">{project.subtitle}</p>
          )}
        </div>
      </header>

      {/* Meta */}
      <section className="project-page__meta section">
        <div className="container">
          <div className="project-page__meta-grid">
            {project.meta.duration && (
              <div className="project-page__meta-item">
                <span className="project-page__meta-label">Varighet</span>
                <span className="project-page__meta-value">{project.meta.duration}</span>
              </div>
            )}
            {project.meta.year && (
              <div className="project-page__meta-item">
                <span className="project-page__meta-label">År</span>
                <span className="project-page__meta-value">{project.meta.year}</span>
              </div>
            )}
            {project.meta.role && (
              <div className="project-page__meta-item">
                <span className="project-page__meta-label">Rolle</span>
                <span className="project-page__meta-value">{project.meta.role}</span>
              </div>
            )}
            {project.meta.partner && (
              <div className="project-page__meta-item">
                <span className="project-page__meta-label">Partner</span>
                <span className="project-page__meta-value">{project.meta.partner}</span>
              </div>
            )}
            {project.meta.team && (
              <div className="project-page__meta-item">
                <span className="project-page__meta-label">Team</span>
                <span className="project-page__meta-value">{project.meta.team.join(', ')}</span>
              </div>
            )}
            {project.meta.discipline && (
              <div className="project-page__meta-item">
                <span className="project-page__meta-label">Disiplin</span>
                <span className="project-page__meta-value">{project.meta.discipline}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Sections */}
      {project.sections.map((section) => (
        <section key={section.id} className={`project-page__section section project-page__section--${section.type || 'text'}`}>
          <div className="container container--narrow">
            <h2 className="project-page__section-title">{section.title}</h2>
            <div className="project-page__section-content">
              {section.type === 'quote' ? (
                <blockquote className="project-page__quote">
                  {section.content}
                </blockquote>
              ) : (
                <div dangerouslySetInnerHTML={{
                  __html: section.content
                    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\n/g, '<br />')
                }} />
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="project-page__gallery section">
          <div className="container">
            <h2 className="project-page__section-title text-center">Galleri</h2>
            <div className="project-page__gallery-grid">
              {project.gallery.map((image, index) => (
                <figure key={index} className="project-page__gallery-item">
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement?.classList.add('project-page__gallery-item--placeholder');
                    }}
                  />
                  {image.caption && (
                    <figcaption className="project-page__gallery-caption">
                      {image.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Subpages */}
      {project.subpages && project.subpages.length > 0 && (
        <section className="project-page__subpages section">
          <div className="container container--narrow">
            <h2 className="project-page__section-title">Utforsk mer</h2>
            <div className="project-page__subpages-grid">
              {project.subpages.map((subpageItem) => (
                <Link
                  key={subpageItem.slug}
                  to={`/work/${project.slug}/${subpageItem.slug}`}
                  className="project-page__subpage-card"
                >
                  <h3 className="project-page__subpage-title">{subpageItem.title}</h3>
                  <p className="project-page__subpage-description">{subpageItem.description}</p>
                  <span className="project-page__subpage-cta">
                    Se mer
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Links */}
      {project.links && project.links.length > 0 && (
        <section className="project-page__links section">
          <div className="container container--narrow">
            <div className="project-page__links-list">
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="project-page__link"
                >
                  {link.label}
                  {link.external && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M12 8.667V12a1.333 1.333 0 01-1.333 1.333H4A1.333 1.333 0 012.667 12V5.333A1.333 1.333 0 014 4h3.333M10 2h4v4M6.667 9.333L14 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next Project */}
      {nextProject && (
        <section className="project-page__next section">
          <div className="container">
            <span className="project-page__next-label">Neste prosjekt</span>
            <Link to={`/work/${nextProject.slug}`} className="project-page__next-link">
              <span className="project-page__next-title">{nextProject.title}</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
