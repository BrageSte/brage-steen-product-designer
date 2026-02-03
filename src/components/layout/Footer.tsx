import { Link } from 'react-router-dom';
import './Footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            Brage Steen
          </Link>
          <p className="footer__tagline">
            Produktdesigner med fokus på funksjonelle, gjennomtenkte løsninger.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigasjon">
          <div className="footer__nav-group">
            <h4 className="footer__nav-title">Sider</h4>
            <ul className="footer__nav-list">
              <li><Link to="/work">Arbeid</Link></li>
              <li><Link to="/about">Om meg</Link></li>
              <li><Link to="/contact">Kontakt</Link></li>
            </ul>
          </div>

          <div className="footer__nav-group">
            <h4 className="footer__nav-title">Prosjekter</h4>
            <ul className="footer__nav-list">
              <li><Link to="/work/sorting-guide">Sorting Guide</Link></li>
              <li><Link to="/work/avfallsportalen">Avfallsportalen</Link></li>
              <li><Link to="/work/headset">Headset</Link></li>
              <li><Link to="/work/seaweed">Seaweed</Link></li>
              <li><Link to="/work/crimpblock">Crimpblock</Link></li>
            </ul>
          </div>

          <div className="footer__nav-group">
            <h4 className="footer__nav-title">Kontakt</h4>
            <ul className="footer__nav-list">
              <li>
                <a href="mailto:brage@example.com">E-post</a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/bragesteen/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} Brage Steen. Alle rettigheter reservert.
          </p>
        </div>
      </div>
    </footer>
  );
}
