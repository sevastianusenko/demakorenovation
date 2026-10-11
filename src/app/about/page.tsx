import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { projectBySlug } from "@/content/projects";
import { photo } from "@/content/photos";
import { Photo } from "@/components/Photo";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Section";
import { JsonLd, breadcrumbSchema } from "@/components/Schema";
import { h2, TextLink, WorkBento, Steps, ReviewQuote, Estimate } from "@/components/sections";

export const metadata: Metadata = {
  title: { absolute: "About D&E Mako Renovation | Family Carpentry Crew, Ephrata PA" },
  description: "D&E Mako Renovation is a family-run carpentry crew based in Ephrata, PA. One team from start to finish, written line-by-line estimates and clean job sites.",
  alternates: { canonical: "/about/" },
  openGraph: { images: [{ url: "/photos/team.jpg" }] },
};

const wrap = "mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8";

// What we hold ourselves to. The ideas come from the old About page, said plainly and only what we can stand behind.
const values = [
  { t: "Built like it is our own house", d: "Most of what makes a job last is hidden: flashing, sheathing, blocking, sill pans. That is where we spend the time, and it is the part we never cut." },
  { t: "The price you sign is the price", d: "A written estimate, line by line, before any work starts. If we open a wall and find rot, you see it and approve the change before we go on." },
  { t: "A schedule we can keep", d: "We give you a realistic start date and a realistic length, and then we show up. If the weather or a delivery moves things, you hear it from us first." },
  { t: "One person to call", d: "You talk to the people doing the work, from the first visit to the walk-through. You always know what is happening and what comes next." },
  { t: "Done to code", d: "Pennsylvania uses the Uniform Construction Code. When a job needs a permit, we tell you at the estimate and handle it with your township." },
  { t: "Close to home", d: "We live and work out of Ephrata. That makes it easy to come back for a second look, a small adjustment or a repair a year later." },
];

const promises = [
  "One team, start to finish. No handoffs.",
  "A written estimate. Line by line. No surprises.",
  "The house closed up every night, the site cleaned every day.",
  "A walk-through together before we call it done.",
];

const steps = [
  { t: "Call, text or send the form", d: "Tell us what is going on. Photos help. We answer within one business day." },
  { t: "We come to you", d: "A free visit at a time that works for you. We look at the job, ask questions, measure and tell you what we see, including what can wait." },
  { t: "Written price, line by line", d: "Each part of the job priced on its own, with an allowance for anything hidden behind the walls." },
  { t: "One crew does the work", d: "The same carpenters from start to finish. We show up on time, work clean and tell you right away if anything changes." },
  { t: "We walk it with you", d: "Before we call it done, we go over every detail together and fix anything that is not right." },
];

export default function AboutPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about/" },
  ];
  const bg = photo("img-7288");
  const work = ["stone-gambrel-house-dormers-lower-merion", "blue-gray-lap-siding-manheim", "composite-deck-stairs-wayne", "brick-home-windows-door-douglassville", "stairwell-wainscoting-thornbury"]
    .map((s) => projectBySlug(s))
    .filter((p) => p !== undefined);
  const promiseBg = photo("img-6966");

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />

      {/* Hero: the crew, as on the old About page */}
      <section className="relative isolate overflow-hidden on-dark">
        <Image src={bg.src} alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-night/85" />
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-10">
          <Breadcrumbs items={crumbs} light />
          <div className="mt-10 grid items-center gap-12 lg:mt-12 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <p className="mono hero-rise text-[0.78rem] uppercase text-beige">About us · Ephrata, PA</p>
              <h1 className="caps hero-rise mt-4 text-[clamp(2rem,1.2rem+2.8vw,3.4rem)] leading-[1.1]">
                The story behind <span className="it">D&amp;E Mako</span>
              </h1>
              <p className="lede hero-rise-2 mt-6 max-w-xl text-white/90">
                A family-run carpentry crew based in Ephrata. We built our name one job at a time: careful work, honest prices and a clean site at the end of every day.
              </p>
              <div className="hero-rise-3 mt-9 flex flex-wrap gap-4">
                <Button href="/contact/">Request a free estimate</Button>
                <Button href="/projects/" variant="outline-light">
                  See our projects
                </Button>
              </div>
            </div>
            <figure className="hero-rise-2 mx-auto w-full max-w-[420px] lg:mr-0">
              <div className="relative aspect-[3/4] overflow-hidden rounded-card ring-1 ring-white/15">
                <Image src="/photos/team.jpg" alt="Two members of the D&E Mako crew in company shirts in front of the work truck" fill priority sizes="(min-width: 1024px) 420px, 90vw" className="object-cover" />
              </div>
              <figcaption className="mono mt-3 text-[0.72rem] uppercase text-white/60">The crew and the truck you will see in your driveway</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-paper">
        <div className={wrap}>
          <p className="display max-w-5xl text-[clamp(1.4rem,1.05rem+1.5vw,2.4rem)] font-semibold leading-[1.25] text-ink">
            We started as carpenters and we still are. <span className="text-ink/45">Trim, windows, doors, siding, porches and dormers are the work we know, and we do it with our own hands.</span>
          </p>
          <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <div className="space-y-5 text-[1.08rem]">
              <p>
                D&amp;E Mako Renovation is a family business out of Ephrata, in Lancaster County. There is no sales team and no call center. When you call, you reach the people who will measure the job, price it and then do it.
              </p>
              <p>
                Over the last two years that has meant a year-long rebuild of a stone gambrel house in Lower Merion, interior trim and built-ins nearby, decks in Wayne and Media, office windows and storefront doors in Newtown Square, siding near Manheim and new windows in a brick house in Berks County.
              </p>
              <p>
                We are at our best on older houses: stone walls that are never square, gambrel roofs, stucco and brick with wood trim that has rotted. That work takes patience and planning, and it is the work we like most. We give a single window the same attention as a whole exterior.
              </p>
              <p>
                Every photo on this site is ours. Each one shows the town and month it was taken, read from the camera, so you can see where we really work.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Photo id="img-5277" ratio="3 / 4" sizes="(min-width: 1024px) 22vw, 50vw" />
              <Photo id="img-7992" ratio="3 / 4" sizes="(min-width: 1024px) 22vw, 50vw" className="mt-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-mist">
        <div className={wrap}>
          <div className="mb-12 grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <p className="eyebrow">What we stand for</p>
              <h2 className={`mt-3 ${h2}`}>How we treat your house</h2>
            </div>
            <p className="max-w-md text-[1.05rem] lg:justify-self-end">These guide every decision we make, from how we price a job to how we leave your yard at the end of the day.</p>
          </div>
          <ul className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <li key={v.t} className="border-t border-ink/15 py-7">
                <h3 className="text-[1.25rem]">{v.t}</h3>
                <p className="mt-2.5">{v.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Promises on dark */}
      <section className="relative isolate overflow-hidden bg-night text-white on-dark">
        <div className={`${wrap} grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center`}>
          <div>
            <h2 className={`${h2} text-white`}>The contractor you can leave the keys with</h2>
            <p className="mt-5 max-w-md text-[1.08rem] text-white/75">We keep our work focused, our prices clear and our job sites clean, whether it is one door or a whole house.</p>
            <ul className="mt-10 space-y-4">
              {promises.map((p) => (
                <li key={p} className="flex items-start gap-4">
                  <span aria-hidden="true" className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-tan text-night">
                    <svg width="13" height="13" viewBox="0 0 14 14">
                      <path d="M2.5 7.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[1.1rem] text-white">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Photo id={promiseBg.key} ratio="3 / 4" sizes="(min-width: 1024px) 22vw, 50vw" />
            <Photo id="img-6992" ratio="3 / 4" sizes="(min-width: 1024px) 22vw, 50vw" className="mt-10" />
          </div>
        </div>
      </section>

      {/* Our work */}
      <section className="bg-paper">
        <div className={wrap}>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className={h2}>A few of our jobs</h2>
              <p className="mt-3 max-w-xl text-ink-mute">From a year-long stone house rebuild to a single stairwell. Place and month on every card come from the camera.</p>
            </div>
            <TextLink href="/projects/">All projects</TextLink>
          </div>
          <WorkBento items={work} />
        </div>
      </section>

      <Steps title="How a project works with us" text="The same five steps on a single window or a whole roof. The estimate is free and nothing starts without your signature." steps={steps} />

      <ReviewQuote />

      <Estimate
        title="Tell us about your house"
        text="Rot under a window, a door that drags, siding that is done. We will come and look, and give you a written price."
        image="img-7281"
        source="about"
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          {site.hic && <p className="mb-4">Pennsylvania Home Improvement Contractor registration #{site.hic}.</p>}
          <p className="max-w-3xl text-[1.02rem] text-ink-mute">
            Comparing contractors? Read our guide on{" "}
            <Link href="/blog/how-to-vet-a-pennsylvania-contractor/" className="font-bold text-ink underline decoration-tan decoration-2 underline-offset-4">
              how to vet a home improvement contractor in Pennsylvania
            </Link>
            , whoever you end up hiring.
          </p>
        </div>
      </section>
    </>
  );
}
