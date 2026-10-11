import type { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/lib/posts";
import { serviceBySlug } from "@/content/services";
import { JsonLd, breadcrumbSchema } from "@/components/Schema";
import { PageHero, CtaBand } from "@/components/blocks";
import { Section, Breadcrumbs } from "@/components/ui/Section";
import { Photo } from "@/components/Photo";

export const metadata: Metadata = {
  title: { absolute: "Guides: Siding, Windows, Trim & Carpentry Explained" },
  description: "Plain answers from a carpentry crew: siding cost, window replacement, fascia and soffit repair, AZEK trim, built-ins, copper gutters and dormers.",
  alternates: { canonical: "/blog/" },
};

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog/" },
];

export default function BlogPage() {
  const posts = getPosts();
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero image="img-7961" title="Guides and straight answers" lede="What things cost, how they are built and what to ask before you hire anyone. Written by carpenters, from our own jobs." crumbs={<Breadcrumbs items={crumbs} light />} />
      <Section>
        <ul className="grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}/`} className="group block">
                {p.hero && <Photo id={p.hero} ratio="16 / 10" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />}
                <p className="mt-5 text-[0.78rem] font-bold uppercase tracking-[0.08em] text-ink-mute">
                  {serviceBySlug(p.service)?.name ?? "Guide"} · {Math.max(3, Math.round(p.words / 230))} min read
                </p>
                <h2 className="mt-2 text-[clamp(1.2rem,1.1rem+0.5vw,1.45rem)] group-hover:underline group-hover:decoration-tan group-hover:underline-offset-4">{p.title}</h2>
                <p className="mt-2 text-[0.98rem]">{p.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand title="Want a price for your house?" />
    </>
  );
}
