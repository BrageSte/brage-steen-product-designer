import { useState, useEffect, type ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import GlowBackground from "@/components/ui/GlowBackground";
import { cn } from "@/lib/utils";

interface SiteLayoutProps {
  children: ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <GlowBackground />
      <a className="skip-link" href="#main-content">
        Hopp til innhold
      </a>
      <div className="relative z-10">
        <header className="site-header sticky top-0 z-[2000] bg-[rgba(250,249,247,0.94)] border-b border-[rgba(26,26,26,0.12)] backdrop-blur-[12px]">
          <div className="container h-[72px] flex items-center justify-between gap-6 py-5">
            <Link to="/" className="brand-title">
              Brage Steen — Product Designer
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex flex-wrap items-center gap-4 md:gap-8"
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

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 -mr-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Lukk meny" : "Åpne meny"}
              aria-expanded={mobileMenuOpen}
            >
              <span
                className={cn(
                  "block w-6 h-0.5 bg-foreground transition-all duration-300",
                  mobileMenuOpen && "rotate-45 translate-y-[3px]"
                )}
              />
              <span
                className={cn(
                  "block w-6 h-0.5 bg-foreground mt-1.5 transition-all duration-300",
                  mobileMenuOpen && "-rotate-45 -translate-y-[5px]"
                )}
              />
            </button>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-black/50 z-[1999] transition-opacity duration-300 md:hidden",
            mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Mobile Menu Slide-in Panel */}
        <div
          className={cn(
            "fixed top-0 right-0 h-full w-[280px] max-w-[80vw] bg-[#faf9f7] z-[2001] shadow-2xl transition-transform duration-300 ease-out md:hidden",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex justify-end p-4">
            <button
              className="flex items-center justify-center w-10 h-10"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Lukk meny"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav
            className="flex flex-col px-8 py-4 gap-2"
            aria-label="Mobilmeny"
          >
            <NavLink
              to="/work/"
              className={({ isActive }) =>
                cn(
                  "py-3 text-lg border-b border-[rgba(26,26,26,0.08)] text-[rgba(26,26,26,0.7)]",
                  isActive && "text-foreground font-medium"
                )
              }
            >
              Arbeid
            </NavLink>
            <NavLink
              to="/about/"
              className={({ isActive }) =>
                cn(
                  "py-3 text-lg border-b border-[rgba(26,26,26,0.08)] text-[rgba(26,26,26,0.7)]",
                  isActive && "text-foreground font-medium"
                )
              }
            >
              Om meg
            </NavLink>
            <NavLink
              to="/contact/"
              className={({ isActive }) =>
                cn(
                  "py-3 text-lg border-b border-[rgba(26,26,26,0.08)] text-[rgba(26,26,26,0.7)]",
                  isActive && "text-foreground font-medium"
                )
              }
            >
              Kontakt
            </NavLink>
            <a
              className="py-3 text-lg text-[rgba(26,26,26,0.7)]"
              href="https://bsclimbing.no"
            >
              Butikk
            </a>
          </nav>
        </div>

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
