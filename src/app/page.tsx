import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { photo } from "@/content/photos";
import { projects, projectBySlug } from "@/content/projects";
import { serviceBySlug } from "@/content/services";
import { Button } from "@/components/ui/Button";
import { Faq } from "@/components/ui/Faq";
import { HeroSlices, WorkBento, Steps, ReviewQuote, Estimate, AreaGrid } from "@/components/sections";
import { ServiceIndex, type ServiceTile } from "@/components/home/ServiceIndex";
import { HouseTimeline } from "@/components/home/HouseTimeline";

export const metadata: Metadata = {
  title: { absolute: `${site.name} | Exterior & Finish Carpentry Contractor, PA` },
  description: "Carpentry and renovation crew from Ephrata, PA: siding, windows, doors, AZEK trim, porches, dormers and built-ins, across Lancaster County and six counties around it.",
  alternates: { canonical: "/" },
};

const homeFaqs = [
  { q: "Is the estimate really free?", a: "Yes. We visit, look at the work with you and send a written estimate at no cost and with no obligation to hire us." },
  { q: "Where do you work?", a: "We are based in Ephrata and work in seven Pennsylvania counties: Lancaster, Berks, Lebanon, York, Chester, Delaware and Montgomery." },
  { q: "Do you do the whole job or only carpentry?", a: "We do the carpentry ourselves: framing, siding, windows, doors, trim, porches and built-ins. For roofing, electrical, plumbing and HVAC we coordinate licensed trades we work with and tell you who they are." },
  { q: "How does payment work?", a: "The payment schedule is written into the estimate before work starts. Larger jobs are paid in stages tied to finished work, never all up front." },
];

// Services in the order people ask for them, each with the photo that shows it best.
const serviceTiles: [string, string][] = [
  ["siding", "img-7287"],
  ["windows", "img-6729"],
  ["doors", "img-6966"],
  ["exterior-trim", "img-3419"],
  ["porches-decks", "img-6459"],
  ["dormers-additions", "img-5546"],
  ["finish-carpentry", "img-7971"],
  ["built-ins", "img-7992"],
  ["copper-work", "img-4098"],
  ["commercial", "img-7207"],
];

const steps = [
  { t: "Call, text or send the form", d: "Tell us what is going on. Photos help. We answer within one business day." },
  { t: "We come and look", d: "A free visit. We measure, push a pick into the soft spots and tell you what we see, including what can wait." },
  { t: "Written price, line by line", d: "Each part of the job priced on its own, with an allowance for anything hidden behind the walls." },
  { t: "One crew does the work", d: "The same carpenters from start to finish. The house is closed up every night and the site is cleaned daily." },
  { t: "We walk it with you", d: "Before we call it done, we go over every detail together and fix anything that is not right." },
];

export default function Home() {
  const bg = photo("img-7285");
  const tiles: ServiceTile[] = serviceTiles.map(([slug, ph]) => {
    const sv = serviceBySlug(slug)!;
    return { slug, name: sv.name, card: sv.card, photo: photo(ph) };
  });
  const work = ["timber-truss-front-porch-ewing-nj", "composite-deck-stairs-wayne", "storefront-glass-doors-newtown-square", "stairwell-wainscoting-thornbury", "blue-gray-lap-siding-manheim", "copper-bay-window-flashing-haverford"].map((s) => projectBySlug(s)!);
  return (
    <>
      {/* Hero: the old site's layout, one porch photo cut into three rounded slices */}
      <section className="relative isolate overflow-hidden on-dark">
        <Image src={bg.src} alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-night/75" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:px-8 lg:py-24">
          <div>
            <h1 className="caps hero-rise text-[clamp(2rem,1.3rem+2.6vw,3.2rem)] leading-[1.25]">
              D&amp;E Mako Renovation: exterior &amp; finish carpentry <span className="it">done right</span>
            </h1>
            <p className="lede hero-rise-2 mt-6 max-w-xl text-white/90">
              We are a small, careful carpentry crew out of Ephrata. Siding, windows, doors, trim, porches, dormers and built-ins, across Lancaster County and the six counties around it.
            </p>
            <div className="hero-rise-3 mt-9 flex flex-wrap gap-4">
              <Button href="/contact/">Request a free estimate</Button>
              <Button href="/projects/" variant="outline-light">
                See our projects
              </Button>
            </div>
          </div>
          <HeroSlices ids={["img-6460"]} />
        </div>
      </section>

      {/* Statement */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <p className="display max-w-5xl text-[clamp(1.6rem,1.15rem+1.9vw,2.9rem)] font-semibold leading-[1.18] text-ink">
            A small crew of carpenters from Ephrata. <span className="text-ink/45">We frame, sheathe, side, trim and finish ourselves, and we take the slow parts seriously: the flashing, the blocking, the sill pan nobody sees.</span>
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="mb-12 grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow">What we do</p>
              <h2 className="mt-3 text-[clamp(2rem,1.4rem+2.4vw,3.4rem)]">Ten kinds of work, one crew</h2>
            </div>
            <div className="lg:justify-self-end">
              <p className="max-w-md text-[1.05rem]">Outside and inside the house, plus shops and offices. The same carpenters do every part, so the siding, the window and the trim around it meet the way they should.</p>
              <Link href="/services/" className="mono mt-5 inline-block text-[0.8rem] uppercase text-ink underline decoration-tan decoration-2 underline-offset-[6px]">
                All services
              </Link>
            </div>
          </div>
          <ServiceIndex items={tiles} />
        </div>
      </section>

      {/* One house, start to finish */}
      <HouseTimeline />

      {/* Other jobs */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="text-[clamp(2rem,1.4rem+2.4vw,3.4rem)]">Other jobs, other towns</h2>
              <p className="mt-3 max-w-xl text-ink-mute">Porches, decks, storefronts, stairs and siding. Place and month on every card come from the camera.</p>
            </div>
            <Link href="/projects/" className="mono text-[0.8rem] uppercase text-ink underline decoration-tan decoration-2 underline-offset-[6px]">
              All {projects.length} projects
            </Link>
          </div>
          <WorkBento items={work} />
        </div>
      </section>

      {/* Process: a real sequence */}
      <Steps title="How a job goes" text="Five steps, the same on a single window or a whole roof. The estimate is free and nothing starts without your signature." steps={steps} />

      <ReviewQuote />

      {/* Service area: west to east */}
      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow">Service area</p>
              <h2 className="mt-3 text-[clamp(2rem,1.4rem+2.4vw,3.4rem)]">Seven counties around Ephrata</h2>
            </div>
            <div className="lg:justify-self-end">
              <p className="max-w-md text-[1.05rem]">Our shop is in Ephrata, Lancaster County. We work in the counties around it, from Lebanon and York to Chester, Delaware and Montgomery.</p>
              <Link href="/service-area/" className="mono mt-5 inline-block text-[0.8rem] uppercase text-ink underline decoration-tan decoration-2 underline-offset-[6px]">
                All service areas
              </Link>
            </div>
          </div>

          <div className="mt-14">
            <AreaGrid />
          </div>
        </div>
      </section>

      <Estimate
        title="Tell us what the house needs"
        text="Rot under a window, a door that drags, siding that is done, an attic you want to stand up in. We will come and look, and give you a written price."
        image="img-7281"
        source="home"
      />

      {/* FAQ */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-24 lg:px-8">
          <Faq title="Before you call" items={homeFaqs} />
        </div>
      </section>
    </>
  );
}
