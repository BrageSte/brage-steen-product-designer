import { Link } from 'react-router-dom';
import './NotFound.css';

export function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__content">
        <span className="not-found__code">404</span>
        <h1 className="not-found__title">Siden finnes ikke</h1>
        <p className="not-found__text">
          Beklager, men siden du leter etter eksisterer ikke eller har blitt flyttet.
        </p>
        <Link to="/" className="not-found__link">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Tilbake til forsiden
        </Link>
      </div>
    </div>
  );
}
