import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { site, fitTitle } from "@/lib/site";
import { areas, areaBySlug } from "@/content/areas";
import { citiesIn } from "@/content/cities";
import Link from "next/link";
import { projects } from "@/content/projects";
import { services } from "@/content/services";
import { photo } from "@/content/photos";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Section";
import { Faq } from "@/components/ui/Faq";
import { Stamp } from "@/components/Photo";
import { JsonLd, breadcrumbSchema } from "@/components/Schema";
import { ServiceIndex, type ServiceTile } from "@/components/home/ServiceIndex";
import { h2, TextLink, HeroSlices, WorkBento, Steps, ReviewQuote, Estimate, AreaGrid } from "@/components/sections";

export const dynamicParams = false;

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = areaBySlug(slug);
  if (!a) return {};
  return {
    title: fitTitle(a.title),
    description: a.description,
    alternates: { canonical: `/service-area/${a.slug}/` },
    openGraph: { title: a.title, description: a.description, images: [{ url: `/photos/${a.hero}.jpg` }] },
  };
}

const wrap = "mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8";

// Same order and photos as the home page service tiles.
const servicePhotos: Record<string, string> = {
  siding: "img-7287",
  windows: "img-6729",
  doors: "img-6966",
  "exterior-trim": "img-3419",
  "porches-decks": "img-6459",
  "dormers-additions": "img-5546",
  "finish-carpentry": "img-7971",
  "built-ins": "img-7992",
  "copper-work": "img-4098",
  commercial: "img-7207",
};

const steps = [
  { t: "Call, text or send the form", d: "Tell us what is going on. Photos help. We answer within one business day." },
  { t: "We come and look", d: "A free visit. We measure, push a pick into the soft spots and tell you what we see, including what can wait." },
  { t: "Written price, line by line", d: "Each part of the job priced on its own, with an allowance for anything hidden behind the walls." },
  { t: "One crew does the work", d: "The same carpenters from start to finish. The house is closed up every night and the site is cleaned daily." },
  { t: "We walk it with you", d: "Before we call it done, we go over every detail together and fix anything that is not right." },
];

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = areaBySlug(slug);
  if (!a) notFound();
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Service Area", href: "/service-area/" },
    { name: a.name, href: `/service-area/${a.slug}/` },
  ];
  const local = projects.filter((p) => p.area === a.slug);
  // Fill up with jobs from the neighbouring counties, in the order they are listed, so every page has real work to show.
  const near = a.nearby.flatMap((n) => projects.filter((p) => p.area === n));
  const work = [...local, ...near].slice(0, local.length >= 3 ? Math.min(local.length, 6) : 5);
  const tiles: ServiceTile[] = services.map((s) => ({ slug: s.slug, name: s.name, card: s.card, photo: photo(servicePhotos[s.slug] ?? s.hero) }));
  const [lead, ...rest] = a.intro;
  const housePhoto = photo(a.photos[1] ?? a.hero);
  const home = a.drive === "Home base";

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      {/* Hero */}
      <section className="relative isolate overflow-hidden on-dark">
        <Image src={photo(a.hero).src} alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-night/80" />
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-10">
          <Breadcrumbs items={crumbs} light />
          <div className="mt-10 grid items-center gap-12 lg:mt-12 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <p className="mono hero-rise text-[0.78rem] uppercase text-beige">
                {a.name}, PA · {home ? "Home base" : `${a.drive} from Ephrata`}
              </p>
              <h1 className="caps hero-rise mt-4 text-[clamp(1.9rem,1.2rem+2.4vw,3rem)] leading-[1.15]">{a.h1}</h1>
              <p className="lede hero-rise-2 mt-6 max-w-xl text-white/90">{a.lede}</p>
              <div className="hero-rise-3 mt-9 flex flex-wrap gap-4">
                <Button href="/contact/">Request a free estimate</Button>
                <Button href={site.phoneHref} variant="outline-light">
                  Call {site.phone}
                </Button>
              </div>
            </div>
            <HeroSlices ids={a.photos} split />
          </div>
        </div>
      </section>

      {/* Intro + towns */}
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
              <p className="mono text-[0.72rem] uppercase text-tan-ink">Towns we work in</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {a.towns.map((t) => (
                  <li key={t} className="rounded-pill bg-white px-3.5 py-1.5 text-[0.92rem] text-ink">
                    {t}
                  </li>
                ))}
              </ul>
              {citiesIn(a.slug).map((ct) => (
                <Link key={ct.slug} href={`/service-area/${a.slug}/${ct.slug}/`} className="group mt-6 flex items-center justify-between gap-4 rounded-[14px] bg-night px-5 py-4 text-white">
                  <span>
                    <span className="mono block text-[0.66rem] uppercase text-beige">City page</span>
                    <span className="font-display text-[1.1rem] font-bold text-white group-hover:text-beige">Contractor in {ct.name}, PA</span>
                  </span>
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              ))}
              <p className="mt-6 border-t border-ink/10 pt-5 text-[0.95rem] text-ink-mute">
                Not on the list? Most towns nearby are too.{" "}
                <a href={site.phoneHref} className="font-bold text-ink underline decoration-tan decoration-2 underline-offset-4">
                  Call {site.phone}
                </a>
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-mist">
        <div className={wrap}>
          <div className="mb-12 grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow">What we do here</p>
              <h2 className={`mt-3 ${h2}`}>Our services in {a.name}</h2>
            </div>
            <div className="lg:justify-self-end">
              <p className="max-w-md text-[1.05rem]">The same crew does every part of the job, so the siding, the window and the trim around it meet the way they should.</p>
              <div className="mt-5">
                <TextLink href="/services/">All services</TextLink>
              </div>
            </div>
          </div>
          <ServiceIndex items={tiles} />
        </div>
      </section>

      {/* Houses here */}
      <section className="bg-night text-white on-dark">
        <div className={wrap}>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div className="lg:sticky lg:top-36 lg:h-fit">
              <h2 className={`${h2} text-white`}>Houses in {a.name}, and what they need</h2>
              <div className="relative mt-10 hidden aspect-[4/3] overflow-hidden rounded-card lg:block">
                <Image src={housePhoto.src} alt={housePhoto.alt} fill sizes="35vw" className="object-cover" />
                <Stamp p={housePhoto} className="absolute bottom-3 left-3" />
              </div>
            </div>
            <ul>
              {a.houses.map((h) => (
                <li key={h.t} className="border-t border-white/15 py-8 first:pt-8 last:pb-0">
                  <h3 className="text-[1.4rem] text-white">{h.t}</h3>
                  <p className="mt-3 max-w-xl text-[1.05rem] text-white/75">{h.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      {work.length > 0 && (
        <section className="bg-paper">
          <div className={wrap}>
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className={h2}>{local.length >= 3 ? `Our projects in ${a.name}` : local.length > 0 ? `Our work in and near ${a.name}` : `Our nearest jobs to ${a.name}`}</h2>
                <p className="mt-3 max-w-xl text-ink-mute">
                  {local.length >= 3
                    ? "Place and month on every card come from the camera."
                    : local.length > 0
                      ? `${local.length === 1 ? "One job" : `${local.length} jobs`} in ${a.name} so far, and the closest ones around it. Place and month on every card come from the camera.`
                      : `No ${a.name} project pages yet. These are the closest jobs we have photographed, and each card says where it was.`}
                </p>
              </div>
              <TextLink href="/projects/">All projects</TextLink>
            </div>
            <WorkBento items={work} />
          </div>
        </section>
      )}

      <Steps title="How a job goes" text={`Five steps, the same in ${a.name} as anywhere we work. The estimate is free and nothing starts without your signature.`} steps={steps} />

      <ReviewQuote />

      <Estimate
        title={`Get a free estimate in ${a.name}`}
        text="Tell us what is going on and send a few photos if you can. We will come and look, and give you a written price, line by line."
        image={a.photos[2] ?? a.hero}
        source={`area-${a.slug}`}
      />

      {/* FAQ */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
          <Faq title={`Working in ${a.name}`} items={a.faqs} />
        </div>
      </section>

      {/* Other counties */}
      <section className="bg-mist">
        <div className={wrap}>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <h2 className={h2}>Other counties we serve</h2>
            <TextLink href="/service-area/">Whole service area</TextLink>
          </div>
          <AreaGrid exclude={a.slug} cta={false} />
        </div>
      </section>
    </>
  );
}
