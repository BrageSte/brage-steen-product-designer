import { Link, NavLink } from 'react-router-dom';
import './Header.css';

export function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__brand">
          Brage Steen <span className="header__brand-title">— Product Designer</span>
        </Link>

        <nav className="header__nav" aria-label="Hovednavigasjon">
          <ul className="header__nav-list">
            <li>
              <NavLink
                to="/work"
                className={({ isActive }) =>
                  `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
                }
              >
                Arbeid
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
                }
              >
                Om meg
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
                }
              >
                Kontakt
              </NavLink>
            </li>
          </ul>
        </nav>

        <button
          className="header__menu-btn"
          aria-label="Meny"
          aria-expanded="false"
          onClick={() => {
            document.body.classList.toggle('menu-open');
          }}
        >
          <span className="header__menu-icon" />
        </button>
      </div>

      {/* Mobile menu */}
      <nav className="header__mobile-nav" aria-label="Mobilmeny">
        <ul className="header__mobile-list">
          <li>
            <NavLink to="/work" onClick={() => document.body.classList.remove('menu-open')}>
              Arbeid
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => document.body.classList.remove('menu-open')}>
              Om meg
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => document.body.classList.remove('menu-open')}>
              Kontakt
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
