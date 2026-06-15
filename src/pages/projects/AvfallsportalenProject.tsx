import SiteLayout from "@/components/SiteLayout";

export default function AvfallsportalenProject() {
  return (
    <SiteLayout>
      <main id="main-content" className="bg-background">
        <iframe
          src="/projects/avfallsportalen/index.html"
          title="Avfallsportalen - Interaktiv læringsportal"
          className="w-full border-none block"
          style={{ height: "calc(100vh - 72px)" }}
          loading="eager"
        />
      </main>
    </SiteLayout>
  );
}
