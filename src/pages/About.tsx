import Layout from "@/components/layout/Layout";
import Section from "@/components/ui/Section";
import ImageWithFallback from "@/components/ui/ImageWithFallback";

const About = () => {
  const values = [
    {
      title: "Hands-on",
      description:
        "Jeg trives best når jeg får bygge og teste – ikke bare tegne og presentere.",
    },
    {
      title: "Systemtenkning",
      description:
        "God design krever forståelse av helheten, ikke bare enkeltdelene.",
    },
    {
      title: "Enkelhet",
      description:
        "De beste løsningene er ofte de enkleste. Kompleksitet er lett – enkelhet er vanskelig.",
    },
  ];

  const skills = [
    "Tjenestedesign",
    "Produktdesign",
    "UX/UI",
    "Prototyping",
    "Brukerundersøkelser",
    "Systemkartlegging",
  ];

  const tools = [
    "Figma",
    "Fusion 360",
    "3D-printing",
    "Adobe Creative Suite",
    "Miro",
  ];

const skills = [
  'Tjenestedesign og brukerreiser',
  'Fysisk produktdesign',
  'Prototyping og testing',
  'Brukerresearch og intervjuer',
  'Systemtenkning',
  'CAD og 3D-modellering',
  'Workshop-fasilitering',
];

const tools = [
  'Figma',
  'Fusion 360 / SolidWorks',
  '3D-printing (FDM/SLA)',
  'Adobe Creative Suite',
  'Miro / FigJam',
  'Grunnleggende frontend',
];

export function About() {
  return (
    <Layout>
      <Section animate={false}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Portrait */}
            <div className="order-2 lg:order-1">
              <ImageWithFallback
                src="/images/portrait.jpg"
                alt="Brage Steen"
                aspectRatio="portrait"
                className="rounded-lg"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-12">
              <div className="space-y-6">
                <h1 className="text-display-xl">Om meg</h1>
                <p className="text-body-lg text-muted-foreground">
                  Jeg er Brage, en produktdesigner basert i Oslo. Jeg jobber i
                  skjæringspunktet mellom tjenester, fysiske produkter og
                  digitale løsninger.
                </p>
                <p className="text-body text-muted-foreground">
                  Jeg er opptatt av å gjøre komplekse problemer forståelige,
                  brukbare og robuste. Enten det er gjennom research,
                  prototyping, eller bygging av faktiske løsninger – jeg liker å
                  forstå ting fra innsiden.
                </p>
                <p className="text-body text-muted-foreground">
                  For tiden jobber jeg med prosjekter som spenner fra
                  tjenestedesign for offentlig sektor til fysisk produktutvikling
                  og egne produkter.
                </p>
              </div>

              {/* Values */}
              <div className="space-y-6">
                <h2 className="text-display-sm">Prinsipper</h2>
                <div className="grid gap-4">
                  {values.map((value) => (
                    <div
                      key={value.title}
                      className="p-5 bg-card rounded-lg"
                    >
                      <h3 className="font-medium mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills & Tools */}
      <Section className="bg-card/50">
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
      </Section>
    </Layout>
  );
}
