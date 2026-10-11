import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { services } from "@/content/services";
import { Section, Breadcrumbs } from "@/components/ui/Section";
import { JsonLd, breadcrumbSchema } from "@/components/Schema";
import { PageHero, ProjectCard, CtaBand } from "@/components/blocks";

export const metadata: Metadata = {
  title: { absolute: "Projects: Siding, Windows, Trim & Porches We Built" },
  description: `${projects.length} real jobs by D&E Mako Renovation with photos stamped by place and date: Lower Merion, Wayne, Newtown Square, Media, Chester County and Lancaster County.`,
  alternates: { canonical: "/projects/" },
};

export default function ProjectsPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects/" },
  ];
  const groups = services
    .map((s) => ({ s, list: projects.filter((p) => p.services[0] === s.slug) }))
    .filter((g) => g.list.length);
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        image="img-5557"
        title="Our projects"
        lede={`${projects.length} jobs, each with its own photos. Every photo carries the town and month it was taken, read straight from the camera, so you can see where we actually work.`}
        crumbs={<Breadcrumbs items={crumbs} light />}
      />
      {groups.map(({ s, list }, i) => (
        <Section key={s.slug} tone={i % 2 ? "mist" : "paper"}>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2>{s.name}</h2>
            <a href={`/${s.slug}/`} className="font-bold text-ink underline decoration-tan decoration-2 underline-offset-4">
              About our {s.name.toLowerCase()} work
            </a>
          </div>
          <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <ProjectCard key={p.slug} p={p} />
            ))}
          </div>
        </Section>
      ))}
      <CtaBand />
    </>
  );
}
