import type { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import GlowBackground from "@/components/ui/GlowBackground";
import { cn } from "@/lib/utils";

interface SiteLayoutProps {
  children: ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <GlowBackground />
      <a className="skip-link" href="#main-content">
        Hopp til innhold
      </a>
      <div className="relative z-10">
        <header className="site-header">
          <div className="container flex items-center justify-between gap-6 py-5">
            <Link to="/" className="brand-title">
              Brage Steen — Product Designer
            </Link>
            <nav
              className="flex flex-wrap items-center gap-4 md:gap-8"
              aria-label="Hovedmeny"
            >
              <NavLink
                to="/work/"
                className={({ isActive }) =>
                  cn("nav-link", isActive && "nav-link-active")
                }
              >
                Arbeid
              </NavLink>
              <NavLink
                to="/about/"
                className={({ isActive }) =>
                  cn("nav-link", isActive && "nav-link-active")
                }
              >
                Om meg
              </NavLink>
              <NavLink
                to="/contact/"
                className={({ isActive }) =>
                  cn("nav-link", isActive && "nav-link-active")
                }
              >
                Kontakt
              </NavLink>
              <a className="nav-link" href="https://bsclimbing.no">
                Butikk
              </a>
            </nav>
          </div>
        </header>

        {children}

        <footer className="site-footer">
          <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm">
            <span className="text-muted-foreground">Brage Steen</span>
            <div className="flex flex-wrap items-center gap-4">
              <a className="nav-link" href="mailto:brage.steen@gmail.com">
                brage.steen@gmail.com
              </a>
              <a className="nav-link" href="https://bsclimbing.no">
                bsclimbing.no
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SiteLayout;
