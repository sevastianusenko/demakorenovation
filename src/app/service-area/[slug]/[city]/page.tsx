import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site, fitTitle } from "@/lib/site";
import { areaBySlug } from "@/content/areas";
import { cities, cityBySlug } from "@/content/cities";
import { projectBySlug } from "@/content/projects";
import { services, serviceBySlug } from "@/content/services";
import { photo } from "@/content/photos";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Section";
import { Faq } from "@/components/ui/Faq";
import { Stamp } from "@/components/Photo";
import { JsonLd, breadcrumbSchema } from "@/components/Schema";
import { h2, TextLink, HeroSlices, WorkBento, ReviewQuote, Estimate } from "@/components/sections";

export const dynamicParams = false;

export function generateStaticParams() {
  return cities.map((c) => ({ slug: c.county, city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; city: string }> }): Promise<Metadata> {
  const { slug, city } = await params;
  const c = cityBySlug(slug, city);
  if (!c) return {};
  return {
    title: fitTitle(c.title),
    description: c.description,
    alternates: { canonical: `/service-area/${c.county}/${c.slug}/` },
    openGraph: { title: c.title, description: c.description, images: [{ url: `/photos/${c.hero}.jpg` }] },
  };
}

const wrap = "mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8";

// The photo that best shows each service, same as the home page tiles.
const servicePhotos: Record<string, string> = {
  siding: "img-7287",
  windows: "img-6729",
  doors: "img-6966",
  "exterior-trim": "img-3419",
  "porches-decks": "img-7762",
  "dormers-additions": "img-5546",
  "finish-carpentry": "img-4582",
  "built-ins": "img-7992",
  "copper-work": "img-4098",
  commercial: "img-7772",
};

export default async function CityPage({ params }: { params: Promise<{ slug: string; city: string }> }) {
  const { slug, city } = await params;
  const c = cityBySlug(slug, city);
  const a = areaBySlug(slug);
  if (!c || !a) notFound();
  const base = `/service-area/${a.slug}/`;
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Service Area", href: "/service-area/" },
    { name: a.name, href: base },
    { name: `${c.name}, PA`, href: `${base}${c.slug}/` },
  ];
  const work = c.projects.map((s) => projectBySlug(s)).filter((p) => p !== undefined);
  const inCity = work.filter((p) => p.place.toLowerCase().includes(c.name.toLowerCase())).length;
  const [lead, ...rest] = c.intro;
  const housePhoto = photo(c.photos[1] ?? c.hero);
  const others = cities.filter((o) => o.slug !== c.slug);

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      {/* Hero */}
      <section className="relative isolate overflow-hidden on-dark">
        <Image src={photo(c.hero).src} alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-night/80" />
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-10">
          <Breadcrumbs items={crumbs} light />
          <div className="mt-10 grid items-center gap-12 lg:mt-12 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <p className="mono hero-rise text-[0.78rem] uppercase text-beige">
                {a.name} · {c.drive} from Ephrata
              </p>
              <h1 className="caps hero-rise mt-4 text-[clamp(2.1rem,1.3rem+2.8vw,3.4rem)] leading-[1.1]">{c.h1}</h1>
              <p className="lede hero-rise-2 mt-6 max-w-xl text-white/90">{c.lede}</p>
              <div className="hero-rise-3 mt-9 flex flex-wrap gap-4">
                <Button href="/contact/">Request a free estimate</Button>
                <Button href={site.phoneHref} variant="outline-light">
                  Call {site.phone}
                </Button>
              </div>
            </div>
            <HeroSlices ids={c.photos} split />
          </div>
        </div>
      </section>

      {/* Intro + around the city */}
      <section className="bg-paper">
        <div className={wrap}>
          <p className="display max-w-4xl text-[clamp(1.25rem,1rem+1vw,1.85rem)] font-semibold leading-[1.35] text-ink">{lead}</p>
          <div className="mt-14 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
            <div className="space-y-5 text-[1.08rem]">
              {rest.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <aside className="rounded-card bg-mist p-7 sm:p-8">
              <p className="mono text-[0.72rem] uppercase text-tan-ink">In and around {c.name}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {c.around.map((t) => (
                  <li key={t} className="rounded-pill bg-white px-3.5 py-1.5 text-[0.92rem] text-ink">
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-ink/10 pt-5 text-[0.95rem] text-ink-mute">
                The rest of the county is on our{" "}
                <Link href={base} className="font-bold text-ink underline decoration-tan decoration-2 underline-offset-4">
                  {a.name} page
                </Link>
                .
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* What we do in the city */}
      <section className="bg-mist">
        <div className={wrap}>
          <div className="mb-12 grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow">What {c.name} asks us for</p>
              <h2 className={`mt-3 ${h2}`}>Our work in {c.name}</h2>
            </div>
            <p className="max-w-md text-[1.05rem] lg:justify-self-end">The jobs we are called for most here. Each one links to the full page about that work.</p>
          </div>
          <ul className="grid gap-4 md:grid-cols-2">
            {c.focus.map((f) => {
              const s = serviceBySlug(f.service)!;
              const p = photo(servicePhotos[f.service] ?? s.hero);
              return (
                <li key={f.t}>
                  <Link href={`/${s.slug}/`} className="group grid h-full overflow-hidden rounded-card bg-white sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                    <div className="relative aspect-[16/10] overflow-hidden bg-night sm:aspect-auto sm:min-h-[260px]">
                      <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 22vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                    </div>
                    <div className="flex flex-col p-6 sm:p-7">
                      <h3 className="text-[1.3rem] group-hover:text-tan-ink">{f.t}</h3>
                      <p className="mb-5 mt-2.5 text-[0.98rem]">{f.d}</p>
                      <span className="mono mt-auto text-[0.75rem] uppercase text-ink">More about {s.name.toLowerCase()} →</span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-10 flex flex-wrap items-center gap-2">
            <span className="mono mr-2 text-[0.72rem] uppercase text-ink-mute">Also in {c.name}:</span>
            {services
              .filter((s) => !c.focus.some((f) => f.service === s.slug))
              .map((s) => (
                <Link key={s.slug} href={`/${s.slug}/`} className="rounded-pill bg-white px-4 py-2 text-[0.92rem] text-ink transition-colors hover:bg-night hover:text-white">
                  {s.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Houses */}
      <section className="bg-night text-white on-dark">
        <div className={wrap}>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div className="lg:sticky lg:top-36 lg:h-fit">
              <h2 className={`${h2} text-white`}>{c.name} houses, and what they need</h2>
              <div className="relative mt-10 hidden aspect-[4/3] overflow-hidden rounded-card lg:block">
                <Image src={housePhoto.src} alt={housePhoto.alt} fill sizes="35vw" className="object-cover" />
                <Stamp p={housePhoto} className="absolute bottom-3 left-3" />
              </div>
            </div>
            <ul>
              {c.houses.map((h) => (
                <li key={h.t} className="border-t border-white/15 py-8 last:pb-0">
                  <h3 className="text-[1.4rem] text-white">{h.t}</h3>
                  <p className="mt-3 max-w-xl text-[1.05rem] text-white/75">{h.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Nearest jobs */}
      {work.length > 0 && (
        <section className="bg-paper">
          <div className={wrap}>
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className={h2}>{inCity > 0 ? `Our work in and near ${c.name}` : `Our nearest jobs to ${c.name}`}</h2>
                <p className="mt-3 max-w-xl text-ink-mute">Real jobs, closest first. Place and month on every card come from the camera, so you can see exactly where each one was.</p>
              </div>
              <TextLink href="/projects/">All projects</TextLink>
            </div>
            <WorkBento items={work} />
          </div>
        </section>
      )}

      <ReviewQuote tone="mist" />

      <Estimate
        title={`Get a free estimate in ${c.name}`}
        text="Tell us what is going on and send a few photos if you can. We will come and look, and give you a written price, line by line."
        image={c.photos[2] ?? c.hero}
        source={`city-${c.slug}`}
      />

      {/* FAQ */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
          <Faq title={`Working in ${c.name}`} items={c.faqs} />
        </div>
      </section>

      {/* Links out */}
      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-start">
            <Link href={base} className="group block rounded-card bg-night p-7 text-white">
              <p className="mono text-[0.7rem] uppercase text-beige">The whole county</p>
              <p className="mt-3 font-display text-[1.5rem] font-bold text-white group-hover:text-beige">{a.name} →</p>
              <p className="mt-2 text-[0.95rem] text-white/70">{a.towns.slice(0, 5).join(", ")} and the rest of the county.</p>
            </Link>
            <div>
              <p className="mono mb-4 text-[0.72rem] uppercase text-ink-mute">Other cities we work in</p>
              <ul className="flex flex-wrap gap-2">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link href={`/service-area/${o.county}/${o.slug}/`} className="inline-block rounded-pill bg-white px-4 py-2 text-[0.95rem] text-ink transition-colors hover:bg-night hover:text-white">
                      {o.name}, PA
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
