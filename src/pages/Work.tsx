import Layout from "@/components/layout/Layout";
import Section from "@/components/ui/Section";
import ProjectGrid from "@/components/ui/ProjectGrid";
import FilterBar from "@/components/ui/FilterBar";
import { projects, getAllTags } from "@/content/projects/index";

const Work = () => {
  const tags = getAllTags();

  return (
    <Layout>
      <Section animate={false}>
        <div className="container-wide">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-display-xl mb-4">Arbeid</h1>
            <p className="text-body-lg text-muted-foreground max-w-2xl">
              Et utvalg av prosjekter innen tjenestedesign, produktdesign og
              prototyping.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-12">
            <FilterBar tags={tags} />
          </div>

          {/* Project Grid */}
          <ProjectGrid projects={projects} />
        </div>
      </Section>
    </Layout>
  );
};

export default Work;
