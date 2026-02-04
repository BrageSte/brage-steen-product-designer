import SiteLayout from "@/components/SiteLayout";

const Contact = () => {
  return (
    <SiteLayout>
      <main id="main-content">
        <section className="section">
          <div className="container">
            <div className="mx-auto flex max-w-2xl flex-col items-start gap-6">
              <p className="eyebrow">Kontakt</p>
              <h1 className="text-display-lg">La oss snakke</h1>
              <p className="text-body-lg">
                Send meg en e-post, så svarer jeg så fort jeg kan.
              </p>
              <a className="btn btn-primary" href="mailto:brage.steen@gmail.com">
                brage.steen@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
};

export default Contact;
