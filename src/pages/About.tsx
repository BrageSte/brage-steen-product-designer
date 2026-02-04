import type { CSSProperties } from "react";
import SiteLayout from "@/components/SiteLayout";

const aboutParagraphs = [
  "Jeg heter Brage – en nysgjerrig og engasjert designer som drives av å skape meningsfulle, funksjonelle og bærekraftige løsninger. Jeg har en bachelorgrad i produktdesign fra OsloMet, og fullførte ett år av en master i industriell design ved NTNU før jeg valgte andre muligheter som passet bedre med min hands-on mentalitet og eventyrlyst.",
  "Nysgjerrigheten min startet tidlig. Som 12-åring seilte jeg jorda rundt med familien i ett år – en erfaring som lærte meg robusthet, tilpasningsevne og kreativ problemløsning. Jeg vokste opp med friluftsliv, teltturer med pappa, klatring og sykling, og brukte utallige timer i garasjen med å fikse ting eller jobbe på båten. Det har formet måten jeg tenker design på: praktisk, løsningsorientert og alltid ivrig etter å forstå hvordan ting fungerer.",
  "Jeg trives best når jeg får kombinere kreativitet med struktur, og når jeg kan samarbeide med andre om komplekse utfordringer – enten det handler om å utvikle produkter, forbedre tjenester eller bygge prototyper som tar ideer videre. Utenom jobb finner du meg ofte i fjellet, i et klatretau, på vei mot en ny seildestinasjon, eller midt i neste store eventyr.",
];

const About = () => {
  return (
    <SiteLayout>
      <main id="main-content">
        <section className="section">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="eyebrow">Om meg</p>
                <h1 className="text-display-lg mt-4">Designer med nysgjerrighet og driv</h1>
                <div className="mt-6 space-y-5">
                  {aboutParagraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base md:text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div
                  className="project-cover"
                  style={
                    {
                      "--cover-gradient":
                        "linear-gradient(140deg, #ece6df 0%, #f8f4ef 55%, #e2ddd6 100%)",
                    } as CSSProperties
                  }
                >
                  <img src="/images/portrait.jpg" alt="Portrett av Brage Steen" />
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  Portrett (placeholder)
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
};

export default About;
