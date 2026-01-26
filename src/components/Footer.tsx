import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-wide section-spacing">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Info */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-xl">Brage Steen</h3>
            <p className="text-muted-foreground">
              Produktdesigner<br />
              Norge
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-caption">Navigasjon</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors link-underline">
                  Hjem
                </Link>
              </li>
              <li>
                <Link to="/prosjekter" className="text-muted-foreground hover:text-foreground transition-colors link-underline">
                  Prosjekter
                </Link>
              </li>
              <li>
                <Link to="/om" className="text-muted-foreground hover:text-foreground transition-colors link-underline">
                  Om meg
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-caption">Kontakt</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:brage@example.com" 
                  className="text-muted-foreground hover:text-foreground transition-colors link-underline inline-flex items-center gap-1"
                >
                  brage@example.com
                  <ArrowUpRight size={14} />
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors link-underline inline-flex items-center gap-1"
                >
                  Tidligere prosjekter / arkiv
                  <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Brage Steen. Alle rettigheter reservert.
          </p>
          <p className="text-sm text-muted-foreground">
            Designet og bygget med omtanke.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
