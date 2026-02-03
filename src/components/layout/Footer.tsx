import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container-wide section-spacing-sm">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Brage Steen</h3>
            <p className="text-muted-foreground text-sm">
              Produktdesigner
              <br />
              Oslo, Norge
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-caption">Navigasjon</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
                >
                  Hjem
                </Link>
              </li>
              <li>
                <Link
                  to="/work"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
                >
                  Arbeid
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
                >
                  Om meg
                </Link>
              </li>
              <li>
                <a
                  href="https://bsclimbing.no"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
                >
                  Butikk
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
                >
                  Kontakt
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
                  href="mailto:hei@bragesteen.no"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline inline-flex items-center gap-1"
                >
                  hei@bragesteen.no
                  <ArrowUpRight size={14} />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/bragesteen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline inline-flex items-center gap-1"
                >
                  LinkedIn
                  <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Brage Steen
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
