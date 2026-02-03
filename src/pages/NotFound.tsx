import { Link } from 'react-router-dom';
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-6">
          <span className="text-8xl font-bold text-muted-foreground/20">404</span>
          <h1 className="text-display-lg">Siden finnes ikke</h1>
          <p className="text-body-lg text-muted-foreground max-w-md mx-auto">
            Beklager, men siden du leter etter eksisterer ikke eller har blitt flyttet.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Tilbake til forsiden
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
