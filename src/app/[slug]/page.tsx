import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site, fitTitle } from "@/lib/site";
import { services, serviceBySlug } from "@/content/services";
import { projectBySlug } from "@/content/projects";
import { photo } from "@/content/photos";
import { getPosts } from "@/lib/posts";
import { Photo } from "@/components/Photo";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Section";
import { Faq } from "@/components/ui/Faq";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/components/Schema";
import { ServiceIndex, type ServiceTile } from "@/components/home/ServiceIndex";
import { h2, TextLink, HeroSlices, WorkBento, Steps, ReviewQuote, Estimate } from "@/components/sections";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) return {};
  return {
    title: fitTitle(s.title),
    description: s.description,
    alternates: { canonical: `/${s.slug}/` },
    openGraph: { title: s.title, description: s.description, images: [{ url: `/photos/${s.hero}.jpg` }] },
  };
}

const wrap = "mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8";

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) notFound();
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services/" },
    { name: s.name, href: `/${s.slug}/` },
  ];
  const guides = getPosts().filter((p) => p.service === s.slug);
  const lower = s.name.toLowerCase();
  const g = s.gallery;
  // Hero shows three different photos of this service; the intro photo is the next one that is not in the hero.
  const heroIds = [s.hero, ...g.filter((id) => id !== s.hero)].slice(0, 3);
  const introPhoto = g.find((id) => !heroIds.includes(id)) ?? g[g.length - 1];
  const work = s.projects.map((p) => projectBySlug(p)).filter((p) => p !== undefined).slice(0, 6);
  const tile = (slug: string): ServiceTile => {
    const o = serviceBySlug(slug)!;
    return { slug, name: o.name, card: o.card, photo: photo(o.hero) };
  };
  const [lead, ...rest] = s.intro;

  return (
    <>
      <JsonLd data={serviceSchema(s)} />
      <JsonLd data={breadcrumbSchema(crumbs)} />

      {/* Hero: same layout as the home page, with three photos of this service */}
      <section className="relative isolate overflow-hidden on-dark">
        <Image src={photo(s.hero).src} alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-night/80" />
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-10">
          <Breadcrumbs items={crumbs} light />
          <div className="mt-10 grid items-center gap-12 lg:mt-12 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <p className="mono hero-rise text-[0.78rem] uppercase text-beige">Service · {site.name}</p>
              <h1 className="caps hero-rise mt-4 text-[clamp(1.9rem,1.2rem+2.4vw,3rem)] leading-[1.15]">{s.h1}</h1>
              <p className="lede hero-rise-2 mt-6 max-w-xl text-white/90">{s.lede}</p>
              <div className="hero-rise-3 mt-9 flex flex-wrap gap-4">
                <Button href="/contact/">Request a free estimate</Button>
                <Button href={site.phoneHref} variant="outline-light">
                  Call {site.phone}
                </Button>
              </div>
            </div>
            <HeroSlices ids={heroIds} split />
          </div>
        </div>
      </section>

      {/* Intro: the first paragraph as a statement, the rest beside a photo */}
      <section className="bg-paper">
        <div className={wrap}>
          <p className="display max-w-4xl text-[clamp(1.25rem,1rem+1vw,1.85rem)] font-semibold leading-[1.35] text-ink">{lead}</p>
          <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <div className="space-y-5 text-[1.08rem]">
              {rest.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-ink/15 pt-6">
                <span className="mono text-[0.75rem] uppercase text-ink-mute">Free written estimate</span>
                <span className="mono text-[0.75rem] uppercase text-ink-mute">One crew, start to finish</span>
                <span className="mono text-[0.75rem] uppercase text-ink-mute">Based in Ephrata, PA</span>
              </div>
            </div>
            <Photo id={introPhoto} ratio="4 / 3" sizes="(min-width: 1024px) 45vw, 100vw" />
          </div>
        </div>
      </section>

      {/* What the work covers */}
      <section className="bg-mist">
        <div className={wrap}>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.7fr]">
            <div className="lg:sticky lg:top-36 lg:h-fit">
              <p className="eyebrow">What we do</p>
              <h2 className={`mt-3 ${h2}`}>What our {lower} work covers</h2>
              <p className="mt-5 max-w-sm text-[1.05rem]">Everything below is done by our own carpenters. If a job needs a roofer, electrician or plumber, we bring in trades we know and tell you who they are.</p>
            </div>
            <ul className="grid gap-x-10 sm:grid-cols-2">
              {s.included.map((it) => (
                <li key={it.t} className="border-t border-ink/15 py-7">
                  <h3 className="text-[1.25rem]">{it.t}</h3>
                  <p className="mt-2.5">{it.d}</p>
                </li>
              ))}
            </ul>
          </div>

          {s.notHere.length > 0 && (
            <div className="mt-16 border-t border-ink/15 pt-12">
              <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                <h3 className="text-[clamp(1.4rem,1.15rem+1vw,2rem)]">Not quite what you need?</h3>
                <TextLink href="/services/">All services</TextLink>
              </div>
              <ul className="grid gap-4 md:grid-cols-3">
                {s.notHere.map((n) => {
                  const o = serviceBySlug(n.slug)!;
                  const p = photo(o.hero);
                  return (
                    <li key={n.slug}>
                      <Link href={`/${o.slug}/`} className="group flex h-full gap-4 rounded-card bg-white p-3 pr-5 transition-shadow hover:shadow-[0_10px_30px_-12px_rgb(18_17_15/0.3)]">
                        <span className="relative h-24 w-24 shrink-0 overflow-hidden rounded-[14px] bg-night">
                          <Image src={p.src} alt="" fill sizes="96px" className="object-cover transition-transform duration-700 group-hover:scale-[1.06]" />
                        </span>
                        <span className="flex flex-col justify-center py-1">
                          <span className="font-display text-[1.1rem] font-bold text-ink group-hover:text-tan-ink">{o.name} →</span>
                          <span className="mt-1 text-[0.92rem] leading-snug text-ink-mute">{n.why}</span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Photos */}
      <section className="bg-night text-white on-dark">
        <div className={wrap}>
          <div className="mb-12 grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <h2 className={`${h2} text-white`}>Our {lower} work in photos</h2>
            <p className="max-w-md text-white/70 lg:justify-self-end">Every photo is from our own jobs. The label on each one says where and when it was taken.</p>
          </div>
          {g.length <= 4 ? (
            <div className="grid gap-4 sm:grid-cols-3">
              {g.map((id) => (
                <Photo key={id} id={id} ratio="1 / 1" sizes="(min-width: 640px) 33vw, 100vw" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {g.map((id, i) => {
                // First photo is 2x2; the last row is stretched so the 4-column grid never ends with a hole.
                const n = g.length - 1;
                const r = Math.max(0, n - 4) % 4;
                const lastRowStart = n - r + 1;
                const wide = i > 0 && r > 0 && n > 4 && i >= lastRowStart && (r === 1 || r === 2 || i === g.length - 1);
                const span = r === 1 ? "md:col-span-4" : "md:col-span-2";
                if (i === 0) return <Photo key={id} id={id} fill className="col-span-2 row-span-2 aspect-square md:aspect-auto" sizes="(min-width: 768px) 50vw, 100vw" />;
                return <Photo key={id} id={id} ratio={wide ? (r === 1 ? "4 / 1" : "2 / 1") : "1 / 1"} className={wide ? `col-span-2 ${span}` : ""} sizes={wide ? "50vw" : "(min-width: 768px) 25vw, 50vw"} />;
              })}
            </div>
          )}
        </div>
      </section>

      {/* Options table */}
      {s.table && (
        <section className="bg-paper">
          <div className={wrap}>
            <h2 className={`max-w-3xl ${h2}`}>{s.table.caption}</h2>
            <div className="mt-12 overflow-x-auto rounded-card border border-ink/15">
              <table className="w-full min-w-[640px] border-collapse text-left text-[0.98rem]">
                <thead>
                  <tr className="bg-night text-white">
                    {s.table.head.map((h, i) => (
                      <th key={i} scope="col" className="mono px-6 py-4 text-[0.72rem] font-medium uppercase text-beige">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {s.table.rows.map((r, i) => (
                    <tr key={i} className="border-t border-ink/10 odd:bg-white even:bg-mist/50">
                      {r.map((c, j) =>
                        j === 0 ? (
                          <th key={j} scope="row" className="px-6 py-5 align-top font-display text-[1.02rem] font-bold text-ink">
                            {c}
                          </th>
                        ) : (
                          <td key={j} className="px-6 py-5 align-top text-ink-soft">
                            {c}
                          </td>
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      <Steps title={`How a ${lower} job goes`} text="The same five steps on a small repair or a whole house. The estimate is free and nothing starts without your signature." steps={s.steps} tone={s.table ? "mist" : "paper"} />

      {/* Projects */}
      {work.length > 0 && (
        <section className={s.table ? "bg-paper" : "bg-mist"}>
          <div className={wrap}>
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className={h2}>{s.name} projects</h2>
                <p className="mt-3 max-w-xl text-ink-mute">Jobs where this work was part of the scope. Place and month on every card come from the camera.</p>
              </div>
              <TextLink href="/projects/">All projects</TextLink>
            </div>
            <WorkBento items={work} />
          </div>
        </section>
      )}

      <ReviewQuote tone={s.table ? "mist" : "paper"} />

      <Estimate
        title={`Talk to us about your ${lower} project`}
        text="Tell us what is going on and send a few photos if you can. We will come and look, and give you a written price, line by line."
        image={g[1] ?? s.hero}
        source={`service-${s.slug}`}
        service={s.name}
      />

      {/* FAQ */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
          <Faq title={`${s.name}: common questions`} items={s.faqs} />
        </div>
      </section>

      {/* Guides + related services */}
      <section className="bg-mist">
        <div className={wrap}>
          {guides.length > 0 && (
            <div className="mb-20">
              <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                <h2 className={h2}>Guides on this topic</h2>
                <TextLink href="/blog/">All guides</TextLink>
              </div>
              <ul className="grid gap-4 md:grid-cols-2">
                {guides.map((gd) => (
                  <li key={gd.slug}>
                    <Link href={`/blog/${gd.slug}/`} className="group flex h-full flex-col rounded-card bg-white p-7 sm:p-8">
                      <span className="mono text-[0.7rem] uppercase text-tan-ink">Guide</span>
                      <h3 className="mt-3 text-[1.25rem] group-hover:text-tan-ink">{gd.title}</h3>
                      <p className="mt-2 text-[0.98rem]">{gd.excerpt}</p>
                      <span className="mono mt-auto pt-6 text-[0.75rem] uppercase text-ink">Read the guide →</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className={h2}>Related services</h2>
            <TextLink href="/services/">All services</TextLink>
          </div>
          <ServiceIndex items={s.related.map(tile)} wide={s.related.length === 2 ? 2 : 0} cols={3} />
        </div>
      </section>
    </>
  );
}
