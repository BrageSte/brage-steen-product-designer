import Layout from "@/components/Layout";
import Button from "@/components/Button";

const About = () => {
  const principles = [
    {
      title: "Design for reell bruk",
      description: "Ikke ideelle scenarier. De beste løsningene tåler virkeligheten."
    },
    {
      title: "Reduser kompleksitet",
      description: "Før du legger til funksjoner. Enkelhet er ofte det vanskeligste."
    },
    {
      title: "Bygg for å lære",
      description: "Prototyper og testing gir innsikt som research alene ikke kan."
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="section-spacing">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Image */}
            <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm order-1 md:order-2 opacity-0 animate-fade-in">
              Profilbilde
            </div>

            {/* Content */}
            <div className="space-y-6 order-2 md:order-1">
              <span className="text-caption opacity-0 animate-fade-in">Om meg</span>
              <h1 className="text-display-lg opacity-0 animate-fade-in-up">
                Brage Steen
              </h1>
              <p className="text-body-lg text-muted-foreground opacity-0 animate-fade-in-up stagger-1">
                Jeg er en produktdesigner med bakgrunn fra tjenestedesign og 
                fysiske produkter. Jeg trives best når jeg får jobbe tett på 
                problemet — enten det er gjennom research, prototyping, eller 
                bygging av faktiske løsninger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Extended Bio */}
      <section className="section-spacing bg-card">
        <div className="container-narrow">
          <div className="max-w-2xl space-y-8">
            <h2 className="text-display-md">
              Hvordan jeg jobber
            </h2>
            <div className="space-y-6 text-body-lg text-muted-foreground">
              <p>
                Jeg er komfortabel med å jobbe på tvers av digitale og fysiske 
                produkter. Det betyr at jeg kan bidra i alt fra tidlig research 
                og konseptutvikling til detaljert prototyping og testing.
              </p>
              <p>
                Jeg er spesielt interessert i systemer, begrensninger og reell 
                bruk. Mange av de beste løsningene jeg har vært med på å lage 
                har kommet fra å forstå begrensningene godt – og designe innenfor 
                dem, heller enn å prøve å overvinne dem.
              </p>
              <p>
                Jeg verdsetter klarhet, reduksjon og praktiske løsninger. Det 
                betyr at jeg ofte argumenterer for å fjerne funksjoner, forenkle 
                flyter, eller akseptere «godt nok» når det er det riktige svaret.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-spacing">
        <div className="container-narrow">
          <h2 className="text-display-md mb-12">
            Prinsipper
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div 
                key={index}
                className="space-y-4 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-4xl font-display font-bold text-muted-foreground/30">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display font-semibold text-xl">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills / Areas */}
      <section className="section-spacing bg-card">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-display-md mb-8">Kompetanseområder</h2>
              <ul className="space-y-3">
                {[
                  "Tjenestedesign og brukerreiser",
                  "Fysisk produktdesign",
                  "Prototyping og testing",
                  "Brukerresearch og intervjuer",
                  "Systemtenkning",
                  "CAD og 3D-modellering",
                  "Workshop-fasilitering"
                ].map((skill, index) => (
                  <li 
                    key={index}
                    className="text-body-lg text-muted-foreground flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-display-md mb-8">Verktøy</h2>
              <ul className="space-y-3">
                {[
                  "Figma",
                  "Fusion 360 / SolidWorks",
                  "3D-printing (FDM/SLA)",
                  "Adobe Creative Suite",
                  "Miro / FigJam",
                  "Grunnleggende frontend"
                ].map((tool, index) => (
                  <li 
                    key={index}
                    className="text-body-lg text-muted-foreground flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-spacing">
        <div className="container-narrow text-center">
          <h2 className="text-display-md mb-6">La oss snakke</h2>
          <p className="text-body-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Jeg er alltid interessert i å høre om nye prosjekter og muligheter. 
            Ta gjerne kontakt for en uforpliktende prat.
          </p>
          <Button 
            href="mailto:brage@example.com" 
            variant="primary" 
            size="lg" 
            showArrow
          >
            Send meg en e-post
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
