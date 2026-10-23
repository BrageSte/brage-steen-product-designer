import SiteLayout from "@/components/SiteLayout";

export default function AvfallsportalenProject() {
  return (
    <SiteLayout>
      <main id="main-content" className="bg-background">
        <section
          aria-labelledby="avfallsportalen-title"
          className="mx-auto max-w-6xl px-6 py-8"
        >
          <h1 id="avfallsportalen-title" className="text-3xl font-bold tracking-tight">
            Avfallsportalen
          </h1>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            En interaktiv demonstrator fra 2026 om formidling og sorteringssystemer. Tallene er
            historiske eller illustrative prototypeeksempler, ikke verifiserte eller oppdaterte
            kommunedata.
          </p>
          <a
            href="/embeds/avfallsportalen/"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Åpne demo i eget vindu
          </a>
        </section>
        <iframe
          src="/embeds/avfallsportalen/"
          title="Avfallsportalen – interaktiv prototype"
          className="w-full border-none block"
          style={{ height: "calc(100vh - 250px)", minHeight: "520px" }}
          loading="eager"
        />
      </main>
    </SiteLayout>
  );
}
