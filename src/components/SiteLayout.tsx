import { useState, useEffect, useLayoutEffect, useRef, type ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import GlowBackground from "@/components/ui/GlowBackground";
import { cn } from "@/lib/utils";

interface SiteLayoutProps {
  children: ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuOpenRef = useRef(mobileMenuOpen);
  const lastLocationRef = useRef({
    pathname: location.pathname,
    search: location.search,
    hash: location.hash,
  });
  mobileMenuOpenRef.current = mobileMenuOpen;

  const closeMobileMenu = (restoreFocus = false) => {
    setMobileMenuOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => menuTriggerRef.current?.focus());
    }
  };

  // Close the menu after any navigation, including a page-fragment change.
  useEffect(() => {
    const previousLocation = lastLocationRef.current;
    lastLocationRef.current = {
      pathname: location.pathname,
      search: location.search,
      hash: location.hash,
    };

    const locationChanged =
      previousLocation.pathname !== location.pathname ||
      previousLocation.search !== location.search ||
      previousLocation.hash !== location.hash;
    if (!locationChanged || !mobileMenuOpenRef.current) return;

    const focusWasInMenu = mobileMenuRef.current?.contains(document.activeElement) ?? false;
    setMobileMenuOpen(false);
    if (!focusWasInMenu) return;

    const focusFrame = window.requestAnimationFrame(() => {
      const activeElement = document.activeElement;
      const focusWasMovedOutside =
        activeElement !== document.body &&
        !mobileMenuRef.current?.contains(activeElement);
      if (!focusWasMovedOutside) menuTriggerRef.current?.focus();
    });

    return () => window.cancelAnimationFrame(focusFrame);
  }, [location.pathname, location.search, location.hash]);

  // React 18 omits the boolean inert attribute, so set its native HTML form.
  useLayoutEffect(() => {
    const panel = mobileMenuRef.current;
    if (!panel) return;

    if (mobileMenuOpen) panel.removeAttribute("inert");
    else panel.setAttribute("inert", "");
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = previousOverflow;
    }
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  // Move focus into the open navigation, contain Tab there, and close on Escape.
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const focusFrame = window.requestAnimationFrame(() => {
      mobileMenuRef.current
        ?.querySelector<HTMLElement>("button, a[href]")
        ?.focus();
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMobileMenuOpen(false);
        window.requestAnimationFrame(() => menuTriggerRef.current?.focus());
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = mobileMenuRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const activeElement = document.activeElement;
      const focusOutsideMenu = !mobileMenuRef.current?.contains(activeElement);
      if (event.shiftKey && (activeElement === first || focusOutsideMenu)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (activeElement === last || focusOutsideMenu)) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", onKeyDown);
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
              Brage Steen — Produktdesigner
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex flex-wrap items-center gap-4 md:gap-8"
              aria-label="Hovedmeny"
            >
              <NavLink
                to="/#arbeid"
                className={({ isActive }) =>
                  cn("nav-link", isActive && "nav-link-active")
                }
              >
                Arbeid
              </NavLink>
              <NavLink
                to="/om-meg"
                aria-current={location.hash === "#kontakt" ? false : "page"}
                className={({ isActive }) =>
                  cn("nav-link", isActive && location.hash !== "#kontakt" && "nav-link-active")
                }
              >
                Om meg
              </NavLink>
              <NavLink
                to="/om-meg#kontakt"
                aria-current={location.hash === "#kontakt" ? "location" : false}
                className={({ isActive }) =>
                  cn("nav-link", isActive && location.hash === "#kontakt" && "nav-link-active")
                }
              >
                Kontakt
              </NavLink>
            </nav>

            {/* Mobile Menu Button */}
            <button
              ref={menuTriggerRef}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 -mr-2"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={mobileMenuOpen ? "Lukk meny" : "Åpne meny"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
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
            "fixed inset-0 bg-black/50 z-[1999] transition-opacity duration-300 motion-reduce:transition-none md:hidden",
            mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          aria-hidden="true"
          onClick={() => closeMobileMenu(true)}
        />

        {/* Mobile Menu Slide-in Panel */}
        <div
          id="mobile-navigation"
          ref={mobileMenuRef}
          className={cn(
            "fixed top-0 right-0 h-full w-[280px] max-w-[80vw] bg-[#faf9f7] z-[2001] shadow-2xl transition-transform duration-300 ease-out motion-reduce:transition-none md:hidden",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
          aria-hidden={!mobileMenuOpen}
        >
          <div className="flex justify-end p-4">
            <button
              className="flex items-center justify-center w-10 h-10"
              onClick={() => closeMobileMenu(true)}
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
              to="/#arbeid"
              onClick={() => closeMobileMenu(true)}
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
              to="/om-meg"
                aria-current={location.hash === "#kontakt" ? false : "page"}
              onClick={() => closeMobileMenu(true)}
              className={({ isActive }) =>
                cn(
                  "py-3 text-lg border-b border-[rgba(26,26,26,0.08)] text-[rgba(26,26,26,0.7)]",
                  isActive && location.hash !== "#kontakt" && "text-foreground font-medium"
                )
              }
            >
              Om meg
            </NavLink>
            <NavLink
              to="/om-meg#kontakt"
                aria-current={location.hash === "#kontakt" ? "location" : false}
              onClick={() => closeMobileMenu(true)}
              className={({ isActive }) =>
                cn(
                  "py-3 text-lg border-b border-[rgba(26,26,26,0.08)] text-[rgba(26,26,26,0.7)]",
                  isActive && location.hash === "#kontakt" && "text-foreground font-medium"
                )
              }
            >
              Kontakt
            </NavLink>
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
              <a className="nav-link" href="/cv/brage-steen-cv.pdf">CV (PDF)</a>
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
