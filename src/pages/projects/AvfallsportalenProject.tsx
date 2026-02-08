import SiteLayout from "@/components/SiteLayout";
import ProjectBar from "@/components/ProjectBar";

const avfallsportalenSections = [
  { label: "Portalen", href: "#portalen" },
];

export default function AvfallsportalenProject() {
  return (
    <SiteLayout>
      <ProjectBar title="Avfallsportalen" sections={avfallsportalenSections} />
      <main id="main-content" className="bg-background">
        <iframe
          id="portalen"
          src="/projects/avfallsportalen/index.html"
          title="Avfallsportalen - Interaktiv læringsportal"
          className="w-full border-none"
          style={{ minHeight: "100vh", height: "100vh" }}
          loading="eager"
        />
      </main>
    </SiteLayout>
  );
}
