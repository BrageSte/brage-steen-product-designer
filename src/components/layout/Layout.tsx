import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <a href="#main-content" className="skip-link">
        Hopp til hovedinnhold
      </a>
      <Header />
      <main id="main-content" className="layout__main">
        {children}
      </main>
      <Footer />
    </div>
  );
}
