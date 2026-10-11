import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site, fitTitle } from "@/lib/site";
import { projects, projectBySlug, galleryOf } from "@/content/projects";
import { serviceBySlug } from "@/content/services";
import { areaBySlug } from "@/content/areas";
import { Markdown } from "@/components/Markdown";
import { Photo } from "@/components/Photo";
import { Button } from "@/components/ui/Button";
import { Section, Breadcrumbs } from "@/components/ui/Section";
import { JsonLd, breadcrumbSchema, orgId } from "@/components/Schema";
import { PageHero, ProjectCard, CtaBand } from "@/components/blocks";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projectBySlug(slug);
  if (!p) return {};
  return {
    title: fitTitle(p.seoTitle),
    description: p.description,
    alternates: { canonical: `/projects/${p.slug}/` },
    openGraph: { title: p.seoTitle, description: p.description, images: [{ url: `/photos/${p.cover}.jpg` }] },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = projectBySlug(slug);
  if (!p) notFound();
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects/" },
    { name: p.title, href: `/projects/${p.slug}/` },
  ];
  const inBody = new Set([...p.body.matchAll(/\{\{photo:([a-z0-9-]+)\}\}/g)].map((m) => m[1]));
  const rest = galleryOf(p).filter((ph) => !inBody.has(ph.key) && ph.key !== p.cover);
  const area = p.area ? areaBySlug(p.area) : undefined;
  const more = projects.filter((o) => o.slug !== p.slug && o.services.some((s) => p.services.includes(s))).slice(0, 3);

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.title,
          description: p.description,
          image: `${site.url}/photos/${p.cover}.jpg`,
          author: { "@id": orgId },
          publisher: { "@id": orgId },
          mainEntityOfPage: `${site.url}/projects/${p.slug}/`,
          contentLocation: { "@type": "Place", name: `${p.place}, ${p.county}` },
        }}
      />
      <PageHero image={p.cover} eyebrow={`${p.place} · ${p.when}`} title={p.title} lede={p.summary} crumbs={<Breadcrumbs items={crumbs} light />} />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <article>
            <Markdown source={p.body} />
          </article>
          <aside className="space-y-6 lg:sticky lg:top-32 lg:h-fit">
            <div className="card p-7">
              <p className="eyebrow">Project facts</p>
              <dl className="mt-5 space-y-4 text-[0.98rem]">
                <div>
                  <dt className="font-bold text-ink">Where</dt>
                  <dd>
                    {p.place}, {p.county}
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-ink">When</dt>
                  <dd>{p.when}</dd>
                </div>
                <div>
                  <dt className="font-bold text-ink">Work</dt>
                  <dd>
                    <ul className="mt-1 list-disc space-y-1 pl-5 marker:text-tan">
                      {p.scope.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt className="font-bold text-ink">Services</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {p.services.map((s) => {
                      const sv = serviceBySlug(s)!;
                      return (
                        <Link key={s} href={`/${s}/`} className="rounded-pill bg-white px-4 py-1.5 text-[0.88rem] font-bold text-ink ring-1 ring-line hover:ring-tan">
                          {sv.name}
                        </Link>
                      );
                    })}
                  </dd>
                </div>
                {area && (
                  <div>
                    <dt className="font-bold text-ink">Area</dt>
                    <dd>
                      <Link href={`/service-area/${area.slug}/`} className="underline decoration-tan decoration-2 underline-offset-4">
                        {area.name}
                      </Link>
                    </dd>
                  </div>
                )}
              </dl>
            </div>
            <div className="rounded-card bg-night p-7 on-dark">
              <p className="font-display text-[1.25rem] font-bold text-white">Have a similar job?</p>
              <p className="mt-2">Send us a few photos and we will tell you what it involves.</p>
              <div className="mt-5">
                <Button href="/contact/">Request an estimate</Button>
              </div>
            </div>
            <p className="text-[0.88rem] text-ink-mute">Place and month on each photo come from the photo&apos;s own camera data. Street addresses are left out for the owners&apos; privacy.</p>
          </aside>
        </div>
      </Section>

      {rest.length > 0 && (
        <Section tone="mist" tight>
          <h2>More photos from this job</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {rest.map((ph) => (
              <Photo key={ph.key} id={ph.key} ratio="1 / 1" sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" />
            ))}
          </div>
        </Section>
      )}

      {more.length > 0 && (
        <Section>
          <h2>Related projects</h2>
          <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((o) => (
              <ProjectCard key={o.slug} p={o} />
            ))}
          </div>
        </Section>
      )}
      <CtaBand image={p.cover} />
    </>
  );
}
