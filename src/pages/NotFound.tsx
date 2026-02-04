import { Link } from "react-router-dom";
import SiteLayout from "@/components/SiteLayout";

const NotFound = () => {
  return (
    <SiteLayout>
      <main id="main-content">
        <section className="section">
          <div className="container">
            <p className="eyebrow">404</p>
            <h1 className="text-display-lg mt-4">Siden finnes ikke</h1>
            <p className="text-body-lg mt-4 max-w-2xl">
              Gå tilbake til forsiden for å fortsette.
            </p>
            <div className="mt-8">
              <Link className="btn btn-ghost" to="/">
                Til forsiden
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
};

export default NotFound;
