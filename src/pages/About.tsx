import Prosjektbilde from "@/components/Prosjektbilde";
import SiteLayout from "@/components/SiteLayout";
import profil from "@/content/profil.json";

export default function About() {
  return (
    <SiteLayout>
      <main id="main-content">
        <section className="section">
          <div className="container grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="eyebrow">Om meg</p>
              <h1 className="text-display-lg mt-4">Fra idé til en prototype som fungerer.</h1>
              <p className="text-body-lg mt-6">{profil.profil}</p>
              <p className="mt-5 text-base leading-relaxed">{profil.roller}</p>
              <p className="mt-5 font-medium">{profil.tilgjengelighet}.</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a className="btn btn-primary" href="/cv/brage-steen-cv.pdf">Last ned CV (PDF)</a>
                <a className="btn btn-ghost" href={`mailto:${profil.epost}`}>Send meg en e-post</a>
              </div>
            </div>
            <Prosjektbilde src="/images/portrait.jpg" alt="Portrett av Brage Steen" width={960} height={1200}
              className="aspect-[4/5] w-full rounded-2xl object-cover" style={{ objectPosition: "center 15%" }} />
          </div>
        </section>
        <section className="section border-t border-border">
          <div className="container grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-display-md">Erfaring</h2>
              <div className="mt-8 space-y-8">
                {profil.erfaring.map((jobb) => <article key={`${jobb.sted}-${jobb.rolle}`}>
                  <p className="text-sm text-muted-foreground">{jobb.periode}</p>
                  <h3 className="mt-1 text-xl font-medium">{jobb.rolle}</h3>
                  <p className="mt-1 font-medium">{jobb.sted}</p>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{jobb.beskrivelse}</p>
                </article>)}
              </div>
            </div>
            <div className="space-y-12">
              <section>
                <h2 className="text-display-md">Utdanning</h2>
                <div className="mt-8 space-y-8">
                  {profil.utdanning.map((studie) => <article key={studie.tittel}>
                    <p className="text-sm text-muted-foreground">{studie.periode}</p>
                    <h3 className="mt-1 text-xl font-medium">{studie.tittel}</h3>
                    <p className="mt-1 font-medium">{studie.sted}</p>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{studie.beskrivelse}</p>
                  </article>)}
                </div>
              </section>
              <section>
                <h2 className="text-display-md">Arbeidsmåte og verktøy</h2>
                <div className="mt-8 space-y-6">
                  {profil.ferdigheter.map((felt) => <div key={felt.gruppe}>
                    <h3 className="text-lg font-medium">{felt.gruppe}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{felt.tekst}</p>
                  </div>)}
                  <p className="text-sm text-muted-foreground">{profil.sprak}</p>
                </div>
              </section>
            </div>
          </div>
        </section>
        <section id="kontakt" className="section border-t border-border">
          <div className="container">
            <h2 className="text-display-md">Har du et prosjekt eller en rolle i tankene?</h2>
            <p className="text-body-lg mt-4 max-w-2xl">Jeg tar gjerne en prat om produktutvikling, design og digitale prototyper.</p>
            <a className="btn btn-primary mt-6 max-w-full break-all" href={`mailto:${profil.epost}`}>{profil.epost}</a>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
