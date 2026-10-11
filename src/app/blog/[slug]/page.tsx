import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site, fitTitle } from "@/lib/site";
import { getPosts, getPost } from "@/lib/posts";
import { serviceBySlug } from "@/content/services";
import { JsonLd, breadcrumbSchema, articleSchema } from "@/components/Schema";
import { Markdown } from "@/components/Markdown";
import { CtaBand, ServiceRows } from "@/components/blocks";
import { Section, Breadcrumbs } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return {
    title: fitTitle(p.seoTitle || p.title),
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}/` },
    openGraph: { type: "article", title: p.title, description: p.description, images: [{ url: p.hero ? `/photos/${p.hero}.jpg` : "/og-default.jpg" }], publishedTime: p.date, modifiedTime: p.modified },
  };
}

function fmt(d: string) {
  if (!d) return "";
  const [y, m, day] = d.split("-");
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${months[Number(m) - 1]} ${Number(day)}, ${y}`;
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog/" },
    { name: p.title, href: `/blog/${p.slug}/` },
  ];
  const svc = serviceBySlug(p.service);
  const more = getPosts()
    .filter((x) => x.slug !== p.slug)
    .sort((a, b) => Number(b.service === p.service) - Number(a.service === p.service))
    .slice(0, 3);
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd data={articleSchema({ title: p.title, description: p.description, url: `/blog/${p.slug}/`, image: p.hero ? `/photos/${p.hero}.jpg` : undefined, datePublished: p.date, dateModified: p.modified })} />
      <article>
        <header className="bg-night on-dark">
          <div className="mx-auto w-full max-w-7xl px-4 pb-14 pt-10 sm:px-6 lg:px-8 lg:pb-20">
            <Breadcrumbs items={[crumbs[0], crumbs[1]]} light />
            <div className="mt-8 max-w-4xl">
              <p className="eyebrow mb-4">
                {fmt(p.date)}
                {p.modified && p.modified !== p.date ? ` · Updated ${fmt(p.modified)}` : ""} · {Math.max(3, Math.round(p.words / 230))} min read
              </p>
              <h1 className="text-[clamp(2rem,1.3rem+2.8vw,3.4rem)]">{p.title}</h1>
              <p className="mt-5 text-[0.98rem] text-white/75">By the {site.name} crew, Ephrata, PA. General guidance, not a quote for your house.</p>
            </div>
          </div>
        </header>
        <Section tight>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
            <div className="mx-auto w-full min-w-0 max-w-3xl">
              <Markdown source={p.body} />
            </div>
            <aside className="hidden lg:block">
              <div className="sticky top-32 space-y-6">
                {svc && (
                  <div className="card p-7">
                    <p className="eyebrow">Our service</p>
                    <p className="mt-3 font-display text-[1.2rem] font-bold text-ink">{svc.name}</p>
                    <p className="mt-2 text-[0.95rem]">{svc.card}</p>
                    <Link href={`/${svc.slug}/`} className="mt-4 inline-block font-bold text-ink underline decoration-tan decoration-2 underline-offset-4">
                      See the service
                    </Link>
                  </div>
                )}
                <div className="rounded-card bg-night p-7 on-dark">
                  <p className="font-display text-[1.2rem] font-bold text-white">Free estimate</p>
                  <p className="mt-2 text-[0.95rem]">We come out, look and give you a written price.</p>
                  <div className="mt-5">
                    <Button href="/contact/">Request one</Button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </Section>
      </article>
      <Section tone="mist" tight>
        <h2>Keep reading</h2>
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {more.map((m) => (
            <li key={m.slug}>
              <Link href={`/blog/${m.slug}/`} className="card-white group block h-full p-7">
                <h3 className="text-[1.1rem] group-hover:underline group-hover:decoration-tan group-hover:underline-offset-4">{m.title}</h3>
                <p className="mt-2 text-[0.95rem]">{m.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
        {svc && (
          <div className="mt-14">
            <h2>Related services</h2>
            <div className="mt-6">
              <ServiceRows slugs={[svc.slug, ...svc.related.slice(0, 2)]} />
            </div>
          </div>
        )}
      </Section>
      <CtaBand title="Want a price for your house?" />
    </>
  );
}
