import Layout from "@/components/layout/Layout";

const About = () => {
  const skills = [
    "Tjenestedesign og brukerreiser",
    "Fysisk produktdesign",
    "Prototyping og testing",
    "Brukerresearch og intervjuer",
    "Systemtenkning",
    "CAD og 3D-modellering",
    "Workshop-fasilitering",
  ];

  const tools = [
    "Figma",
    "Fusion 360 / SolidWorks",
    "3D-printing (FDM/SLA)",
    "Adobe Creative Suite",
    "Miro / FigJam",
    "Grunnleggende frontend",
  ];

  return (
    <Layout>
      <section className="section-spacing">
        <div className="container-narrow">
          <div className="space-y-12">
            {/* Header */}
            <div className="space-y-6">
              <span className="text-caption block">Om meg</span>
              <h1 className="text-display-xl">Brage Steen</h1>
            </div>

            {/* Main bio */}
            <div className="space-y-6 text-body-lg text-muted-foreground">
              <p>
                Jeg heter Brage — en nysgjerrig og engasjert designer som drives
                av å skape meningsfulle, funksjonelle og bærekraftige løsninger.
                Jeg har en bachelorgrad i produktdesign fra OsloMet, og fullførte
                ett år av en master i industriell design ved NTNU før jeg valgte
                andre muligheter som passet bedre med min hands-on mentalitet og
                eventyrlyst.
              </p>
              <p>
                Nysgjerrigheten min startet tidlig. Som 12-åring seilte jeg jorda
                rundt med familien i ett år — en erfaring som lærte meg robusthet,
                tilpasningsevne og kreativ problemløsning. Jeg vokste opp med
                friluftsliv, teltturer med pappa, klatring og sykling, og brukte
                utallige timer i garasjen med å fikse ting eller jobbe på båten.
                Det har formet måten jeg tenker design på: praktisk,
                løsningsorientert og alltid ivrig etter å forstå hvordan ting
                fungerer.
              </p>
              <p>
                Jeg trives best når jeg får kombinere kreativitet med struktur,
                og når jeg kan samarbeide med andre om komplekse utfordringer —
                enten det handler om å utvikle produkter, forbedre tjenester
                eller bygge prototyper som tar ideer videre.
              </p>
              <p>
                Utenom jobb finner du meg ofte i fjellet, i et klatretau, på vei
                mot en ny seildestinasjon, eller midt i neste store eventyr.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="section-spacing bg-card/30">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Skills */}
            <div className="space-y-6">
              <h2 className="text-display-sm">Kompetanse</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="space-y-6">
              <h2 className="text-display-sm">Verktøy</h2>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-secondary rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
