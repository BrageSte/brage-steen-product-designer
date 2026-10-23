import Prosjektbilde from "@/components/Prosjektbilde";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SiteLayout from "@/components/SiteLayout";
import ProjectBar from "@/components/ProjectBar";

const basePath = "/projects/headset";

function BriefItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
        {label}
      </p>
      <p className="text-foreground">{value}</p>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-[58svh] min-h-[430px] max-h-[760px] w-full overflow-hidden bg-neutral-950 md:h-[78vh]">
      <Prosjektbilde
        src={`${basePath}/nett/header.jpg`}
        className="h-full w-full object-cover object-center"
        alt="Sprengskisse av det sammenleggbare headsettet og komponentene"
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-6 pb-8 text-white md:px-8 md:pb-12">
        <p className="text-caption text-white/75">Industridesign · NTNU · 2021</p>
        <h1 className="text-display-md mt-3 text-white">Et sammenleggbart headset</h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
          Et individuelt prosjekt over fire måneder i Design for Industrialization, utviklet med sprøytestøping som premiss.
        </p>
      </div>
    </section>
  );
}

function OverviewSection() {
  return (
    <section id="overview" className="py-24 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="opacity-0 animate-fade-in-up">
          <span className="text-caption">Oppgaven</span>
          <h2 className="text-display-md mt-4 mb-6">Oppgave og rammer</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Jeg utviklet et headset for pendlere og kontorbruk, med en form som kunne legges sammen for transport og daglig bruk.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Oppgaven satte prisnivået 200–300 USD og et produksjonsmål på 100&nbsp;000 enheter. Dette var mål i oppgaven, ikke dokumentasjon på produksjon eller salg.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">
              Produksjonspremiss:
            </strong>{" "}
            Delene ble utviklet med sprøytestøping i tankene, blant annet med hensyn til form og uttak fra form.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
            <BriefItem label="Varighet" value="Fire måneder" />
            <BriefItem label="Prisnivå i oppgaven" value="200–300 USD" />
            <BriefItem label="Produksjonsmål i oppgaven" value="100 000 enheter" />
            <BriefItem label="Produksjonspremiss" value="Sprøytestøping" />
            <BriefItem label="Verktøy" value="Fusion 360" />
          </div>
        </div>

        <div
          className="opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <Prosjektbilde
            src={`${basePath}/nett/details-render.jpg`}
            alt="Detaljutsnitt av headsetdesignet"
            className="w-full rounded-2xl"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}

function IdeationSection() {
  return (
    <section id="ideation" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <span className="text-caption">01 — Idéutvikling</span>
        <h2 className="text-display-md mt-4 mb-6">Skisser og formutforsking</h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Jeg utforsket ulike ledd og former, med særlig oppmerksomhet på ørekoppen og holderen. Skissene undersøker hvordan bakstykket kunne få et særpreget uttrykk.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Prosjektbilde
            src={`${basePath}/nett/sketch-1.png`}
            alt="Skisser av ulike former på ørekopp og holder"
            className="rounded-2xl bg-white"
            loading="lazy"
            decoding="async"
          />
          <Prosjektbilde
            src={`${basePath}/nett/sketch-2.png`}
            alt="Skisser av knapper og headsetdetaljer"
            className="rounded-2xl bg-white"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}

function PrototypingSection() {
  const prototypeImages = [
    "nett/prototype-2.jpg",
    "nett/prototype-3.jpg",
    "nett/prototype-4.jpg",
    "nett/prototype-5.jpg",
  ];

  return (
    <section id="prototyping" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <span className="text-caption">02 — Prototyper</span>
        <h2 className="text-display-md mt-4 mb-6">Fra digital modell til fysisk form</h2>
        <p className="text-muted-foreground max-w-2xl mb-5">
          3D-printede prototyper gjorde det mulig å sammenligne formvarianter og vurdere passform og komfort uformelt. Dette var utforskende utprøving, ikke dokumentert ergonomisk validering.
        </p>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Med fysiske prototyper utforsket og justerte jeg vinkler, toleranser og proporsjoner, og vurderte CAD-modellen i fysisk form.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Prosjektbilde
            src={`${basePath}/nett/prototype-1.jpg`}
            alt="Utprøving av en fysisk headsetprototype"
            className="rounded-2xl"
            loading="lazy"
            decoding="async"
          />
          <Prosjektbilde
            src={`${basePath}/nett/prototype.jpg`}
            alt="Hvit 3D-printet prototype av headsettet"
            className="rounded-2xl"
            loading="lazy"
            decoding="async"
          />
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {prototypeImages.map((img) => (
              <CarouselItem key={img} className="pl-4 md:basis-1/3 lg:basis-1/4">
                <Prosjektbilde
                  src={`${basePath}/${img}`}
                  alt="Deler til 3D-printede headsetprototyper"
                  className="rounded-xl h-56 object-cover w-full"
                  loading="lazy"
                  decoding="async"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
}

function ProductShowcase() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-8">
        <Prosjektbilde
          src={`${basePath}/nett/functions.jpg`}
          alt="Headset med forklaringer av funksjonene"
          className="w-full"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="max-w-4xl mx-auto px-8 mt-16">
        <Prosjektbilde
          src={`${basePath}/nett/full-headset.jpg`}
          alt="Samlet visualisering av headsetdesignet"
          className="w-full"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}

function ModelSection() {
  return (
    <section id="model" className="py-24 bg-neutral-900 text-white">
      <div className="max-w-4xl mx-auto px-8">
        <span className="text-xs uppercase tracking-widest text-amber-400 font-medium">03 — 3D-modell</span>
        <h2 className="text-display-md mt-4 mb-6 text-white">Utforsk modellen</h2>
        <p className="text-neutral-300 mb-8">
          Se komponentene i 3D-modellen. Modellen viser prosjektets sammenstilling og konstruksjon.
        </p>

        <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden bg-neutral-800">
          <iframe
            title="3D-modell av headsettet"
            className="absolute inset-0 w-full h-full"
            src="https://sketchfab.com/models/dd8b8b2a1f0645b6b65a4f19227cc69d/embed"
            loading="lazy"
            allowFullScreen
          />
        </div>
        <p className="mt-4 text-sm text-neutral-300">
          <a className="underline underline-offset-4" href="https://sketchfab.com/3d-models/dd8b8b2a1f0645b6b65a4f19227cc69d" target="_blank" rel="noopener noreferrer">Åpne 3D-modellen hos Sketchfab</a>
        </p>
      </div>
    </section>
  );
}

function TechnicalSection() {
  const technicalImages = [
    "nett/technical-drawing-1.png",
    "nett/technical-drawing-3.png",
    "nett/technical-drawing-4.png",
  ];

  return (
    <section id="technical" className="py-24">
      <div className="max-w-4xl mx-auto px-8 mb-12">
        <span className="text-caption">04 — Tegninger</span>
        <h2 className="text-display-md mt-4 mb-6">Tekniske tegninger</h2>
        <p className="text-muted-foreground">
          Tegningene viser mål og toleranser for komponentene. Sprøytestøping var produksjonspremisset i oppgaven.
        </p>
      </div>

      <Carousel className="max-w-5xl mx-auto px-8">
        <CarouselContent className="-ml-4">
          {technicalImages.map((img) => (
            <CarouselItem key={img} className="pl-4 md:basis-4/5">
              <div className="bg-white border border-border rounded-2xl p-6">
                <Prosjektbilde
                  src={`${basePath}/${img}`}
                  alt="Teknisk tegning av en headsetkomponent"
                  className="w-full"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>

      <div className="max-w-5xl mx-auto px-8 mt-6">
        <p className="text-sm">Åpne en tegning i full størrelse:</p>
        <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {technicalImages.map((img, index) => <li key={img}>
            <a className="underline underline-offset-4" href={`${basePath}/${img}`} target="_blank" rel="noopener noreferrer">Tegning {index + 1} (PNG)</a>
          </li>)}
        </ul>
      </div>

      {/* Closing image — full bleed */}
      <div className="mt-16">
        <Prosjektbilde
          src={`${basePath}/nett/jadda-65.jpg`}
          alt="Avsluttende teknisk oversikt over headsettet"
          className="w-full"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}

// Main Component
const headsetSections = [
  { id: "overview", label: "Oppgaven" },
  { id: "ideation", label: "Idéutvikling" },
  { id: "prototyping", label: "Prototyper" },
  { id: "model", label: "3D-modell" },
  { id: "technical", label: "Tegninger" },
];

export default function HeadsetProject() {
  return (
    <SiteLayout>
      <ProjectBar title="Headset" sections={headsetSections} />
      <main id="main-content" className="bg-background">
        <HeroSection />
        <OverviewSection />
        <IdeationSection />
        <PrototypingSection />
        <ProductShowcase />
        <ModelSection />
        <TechnicalSection />
      </main>
    </SiteLayout>
  );
}
