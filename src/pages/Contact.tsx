import './Contact.css';

export function Contact() {
  return (
    <div className="contact">
      <section className="contact__content section">
        <div className="container container--narrow">
          <header className="contact__header">
            <h1 className="contact__title">Kontakt</h1>
            <p className="contact__intro">
              Har du et prosjekt du vil diskutere, eller bare vil slå av en prat?
              Jeg er alltid interessert i å høre om nye muligheter.
            </p>
          </header>

          <div className="contact__grid">
            <div className="contact__info">
              <div className="contact__method">
                <h2 className="contact__method-title">E-post</h2>
                <a href="mailto:brage@example.com" className="contact__link">
                  brage@example.com
                </a>
                <p className="contact__method-description">
                  For prosjekthenvendelser, samarbeid, eller generelle spørsmål.
                </p>
              </div>

              <div className="contact__method">
                <h2 className="contact__method-title">LinkedIn</h2>
                <a
                  href="https://www.linkedin.com/in/bragesteen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__link contact__link--external"
                >
                  linkedin.com/in/bragesteen
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M12 8.667V12a1.333 1.333 0 01-1.333 1.333H4A1.333 1.333 0 012.667 12V5.333A1.333 1.333 0 014 4h3.333M10 2h4v4M6.667 9.333L14 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <p className="contact__method-description">
                  For profesjonelt nettverk og oppdateringer.
                </p>
              </div>

              <div className="contact__method">
                <h2 className="contact__method-title">Lokasjon</h2>
                <p className="contact__location">Oslo, Norge</p>
                <p className="contact__method-description">
                  Tilgjengelig for prosjekter i hele Norge og remote-samarbeid.
                </p>
              </div>
            </div>

            <div className="contact__availability">
              <div className="contact__availability-card">
                <h2 className="contact__availability-title">Tilgjengelighet</h2>
                <p className="contact__availability-status">
                  <span className="contact__status-dot" />
                  Åpen for nye prosjekter
                </p>
                <p className="contact__availability-text">
                  Jeg tar på meg oppdrag innen tjenestedesign, produktdesign,
                  og UX. Ta gjerne kontakt for å diskutere ditt prosjekt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
