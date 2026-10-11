import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { site, type Faq as FaqItem } from "@/lib/site";
import { services, serviceBySlug } from "@/content/services";
import { projectBySlug, type Project } from "@/content/projects";
import { photo } from "@/content/photos";
import { reviews } from "@/content/reviews";
import { Photo, Stamp } from "./Photo";
import { Button, ArrowIcon } from "./ui/Button";
import { Section } from "./ui/Section";
import { Faq } from "./ui/Faq";

/* ---------- Service rows: the old home page's "Five crafts, one crew" list ---------- */
const icons: Record<string, string> = {
  siding: "M3 6h18M3 10h18M3 14h18M3 18h18",
  windows: "M5 4h14v16H5zM12 4v16M5 12h14",
  doors: "M7 3h10v18H7zM14 12h.01",
  "exterior-trim": "M3 20L12 5l9 15M7 20v-4h10v4",
  "finish-carpentry": "M4 19h16M6 19V9l6-5 6 5v10M10 19v-5h4v5",
  "built-ins": "M5 3h14v18H5zM5 9h14M5 15h14",
  "porches-decks": "M3 11l9-6 9 6M5 10v9M19 10v9M3 19h18M9 19v-5M15 19v-5",
  "copper-work": "M4 7h16l-2 3H6zM12 10v10M9 20h6",
  "dormers-additions": "M3 20V10l9-6 9 6v10M9 20v-6h6v6M8 10h3v3H8z",
  commercial: "M3 21V8l9-5 9 5v13M7 21v-6h4v6M14 12h4v3h-4z",
};

export function ServiceIcon({ slug }: { slug: string }) {
  return (
    <span aria-hidden="true" className="inline-flex h-[72px] w-[60px] shrink-0 items-center justify-center rounded-[30px] border-2 border-night text-night">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d={icons[slug] ?? icons.siding} />
      </svg>
    </span>
  );
}

export function ServiceRows({ slugs }: { slugs?: string[] }) {
  const list = slugs ? slugs.map((s) => serviceBySlug(s)!).filter(Boolean) : services;
  return (
    <ul className="divide-y divide-line border-y border-line">
      {list.map((s) => (
        <li key={s.slug}>
          <Link href={`/${s.slug}/`} className="group grid items-center gap-4 py-6 sm:grid-cols-[auto_1fr_auto] sm:gap-8 lg:grid-cols-[auto_minmax(0,0.9fr)_minmax(0,1.6fr)_auto]">
            <ServiceIcon slug={s.slug} />
            <h3 className="text-[1.3rem] group-hover:text-tan-ink">{s.name}</h3>
            <p className="text-ink-soft sm:col-span-3 sm:col-start-2 lg:col-span-1 lg:col-start-3">{s.card}</p>
            <span aria-hidden="true" className="hidden h-11 w-11 items-center justify-center rounded-full bg-night text-white transition-transform duration-300 group-hover:translate-x-1 sm:row-start-1 sm:inline-flex lg:col-start-4">
              <ArrowIcon />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Project cards: the old "Our latest projects" grid ---------- */
export function ProjectCard({ p, dark = false, sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" }: { p: Project; dark?: boolean; sizes?: string }) {
  const svc = serviceBySlug(p.services[0]);
  return (
    <Link href={`/projects/${p.slug}/`} className="group block">
      <Photo id={p.cover} ratio="4 / 3" sizes={sizes} />
      <h3 className={`mt-5 text-[1.15rem] leading-snug ${dark ? "text-white" : ""} group-hover:underline group-hover:decoration-tan group-hover:underline-offset-4`}>{p.title}</h3>
      <p className={`mt-1 text-[0.95rem] ${dark ? "text-white/70" : "text-ink-mute"}`}>
        {p.place} · {p.when}
      </p>
      {svc && <span className={`mt-3 inline-block rounded-pill px-4 py-1.5 text-[0.85rem] ${dark ? "bg-white/10 text-white/80" : "bg-mist text-ink-soft"}`}>{svc.name}</span>}
    </Link>
  );
}

export function ProjectGrid({ slugs, dark = false }: { slugs: string[]; dark?: boolean }) {
  const list = slugs.map((s) => projectBySlug(s)).filter(Boolean) as Project[];
  return (
    <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((p) => (
        <ProjectCard key={p.slug} p={p} dark={dark} />
      ))}
    </div>
  );
}

/* ---------- Process: the old dark wave block with 01. to 04. ---------- */
export const defaultSteps = [
  { t: "You reach out", d: "Call, text or send the form. We get back to you within one business day." },
  { t: "We come to you", d: "A free visit at a time that works for you. We look, ask questions, take measurements and photos." },
  { t: "Written estimate", d: "A line-by-line price and a start date. No pressure and no surprise costs later." },
  { t: "We build and walk it", d: "Our crew does the work, keeps you posted and walks every detail with you before calling it done." },
];

export function Process({ title = `How a project works with ${site.name}`, steps = defaultSteps }: { title?: string; steps?: { t: string; d: string }[] }) {
  return (
    <Section tone="wave">
      <h2 className="max-w-3xl">{title}</h2>
      <ol className={`mt-12 grid overflow-hidden rounded-card border border-dashed border-white/20 sm:grid-cols-2 ${steps.length >= 5 ? "lg:grid-cols-5" : "lg:grid-cols-4"}`}>
        {steps.map((s, i) => (
          <li key={i} className="border-dashed border-white/20 p-7 sm:border-l sm:first:border-l-0 sm:[&:nth-child(3)]:border-l-0 lg:[&:nth-child(3)]:border-l max-sm:border-t max-sm:first:border-t-0">
            <div className="flex items-start gap-3">
              <span className="font-display text-[3.4rem] font-bold leading-none text-white">{String(i + 1).padStart(2, "0")}.</span>
              <span className="mt-1 text-[0.85rem] font-bold uppercase leading-snug tracking-wide text-white">{s.t}</span>
            </div>
            <p className="mt-6 text-[0.98rem]">{s.d}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* ---------- Reviews: real Google reviews in the old quote style ---------- */
export function Reviews({ title }: { title?: ReactNode }) {
  return (
    <div>
      <h2>
        {title ?? (
          <>
            What clients say <span className="it">on Google</span>
          </>
        )}
      </h2>
      <p className="mt-3 font-bold text-ink">
        {site.google.rating.toFixed(1)} out of 5 from {site.google.count} Google reviews.{" "}
        <a href={site.google.mapsUrl} target="_blank" rel="noopener" className="underline decoration-tan decoration-2 underline-offset-4">
          See them on Google
        </a>
      </p>
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        {reviews.map((r) => (
          <figure key={r.name} className="flex flex-col">
            <div className="flex gap-5">
              <span aria-hidden="true" className="font-display text-[4.5rem] leading-[0.8] text-night">“</span>
              <blockquote className="text-ink-soft">{r.text}</blockquote>
            </div>
            <figcaption className="card-white mt-6 inline-flex w-fit items-center gap-4 px-6 py-4">
              <span className="font-display text-[1.1rem] font-bold text-ink">{r.name}</span>
              <span className="text-[0.95rem] text-ink-mute">Google review, {r.date}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

/* ---------- CTA band: photo background, areas box left, call to action right ---------- */
export function CtaBand({ title = "Let's talk about your project", text, image = "img-7288" }: { title?: string; text?: string; image?: string }) {
  const p = photo(image);
  return (
    <section className="relative isolate overflow-hidden on-dark">
      <Image src={p.src} alt="" fill sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-night/70" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
        <div className="rounded-card bg-night p-8 sm:p-10">
          <div className="grid gap-6 sm:grid-cols-[auto_1fr]">
            <h3 className="font-display text-[1.6rem] leading-tight text-white sm:max-w-[6ch]">Areas we serve</h3>
            <p>
              Based in Ephrata. Working across <strong className="text-white">Lancaster, Berks, Lebanon, York, Chester, Delaware and Montgomery Counties</strong>.{" "}
              <Link href="/service-area/" className="text-beige underline underline-offset-4">
                See the service area
              </Link>
            </p>
          </div>
        </div>
        <div>
          <h2>{title}</h2>
          <p className="mt-5 max-w-xl">{text ?? "Tell us what needs doing. We will come out, look at it with you and give you a clear written price. No pressure and no guesswork."}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={site.phoneHref}>Call {site.phone}</Button>
            <Button href="/contact/" variant="white">
              Request an estimate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Dark FAQ with contact chips: the old home page's last block ---------- */
export function FaqContact({ items, title = "Commonly asked questions and answers" }: { items: FaqItem[]; title?: string }) {
  const chip = (href: string, label: string, value: string, d: string) => (
    <a href={href} className="group flex items-center gap-5">
      <span className="inline-flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-white text-night transition-colors group-hover:bg-tan">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
          <path d={d} />
        </svg>
      </span>
      <span>
        <span className="block font-display text-[1.15rem] font-bold text-white">{label}</span>
        <span className="block text-white/85">{value}</span>
      </span>
    </a>
  );
  return (
    <Section tone="night">
      <Faq
        dark
        title={title}
        items={items}
        intro={
          <div className="grid gap-6">
            {chip(site.phoneHref, "Phone:", site.phone, "M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2")}
            {chip(`mailto:${site.email}`, "Email:", site.email, "M3 7l9 6 9-6M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z")}
          </div>
        }
      />
    </Section>
  );
}

/* ---------- Page hero for inner pages: dark photo band ---------- */
export function PageHero({ image, eyebrow, title, lede, children, crumbs }: { image: string; eyebrow?: string; title: ReactNode; lede?: ReactNode; children?: ReactNode; crumbs?: ReactNode }) {
  const p = photo(image);
  return (
    <section className="relative isolate overflow-hidden on-dark">
      <Image src={p.src} alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-night/90 via-night/75 to-night/40" />
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-14">
        {crumbs}
        <div className="mt-10 max-w-3xl">
          {eyebrow && <p className="eyebrow hero-rise mb-4">{eyebrow}</p>}
          <h1 className="hero-rise">{title}</h1>
          {lede && <div className="lede hero-rise-2 mt-6 max-w-2xl text-white/85">{lede}</div>}
          {children && <div className="hero-rise-3 mt-8 flex flex-wrap gap-4">{children}</div>}
        </div>
        <Stamp p={p} className="absolute bottom-4 right-4 hidden md:inline-flex" />
      </div>
    </section>
  );
}
