import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { photo } from "@/content/photos";
import { projects, type Project } from "@/content/projects";
import { areas } from "@/content/areas";
import { reviews } from "@/content/reviews";
import { Button } from "@/components/ui/Button";
import { LeadForm } from "@/components/LeadForm";
import { Stamp } from "@/components/Photo";

// Sections shared by the home page and the service pages, so both read as one site.

export const h2 = "text-[clamp(2rem,1.4rem+2.4vw,3.4rem)]";

export function TextLink({ href, children, external = false }: { href: string; children: ReactNode; external?: boolean }) {
  const cls = "mono text-[0.8rem] uppercase text-ink underline decoration-tan decoration-2 underline-offset-[6px]";
  return external ? (
    <a href={href} target="_blank" rel="noopener" className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** Rounded photo slices in the hero: one photo cut into three on the home page, three photos on service pages. */
export function HeroSlices({ ids, split = false }: { ids: string[]; split?: boolean }) {
  const slices = [
    { w: "55%", h: "86%", top: "0%", pos: "20% 50%" },
    { w: "17%", h: "86%", top: "14%", pos: "62% 50%" },
    { w: "17%", h: "80%", top: "0%", pos: "92% 50%" },
  ];
  const first = photo(ids[0]);
  return (
    <div className="relative hidden aspect-[1.4] w-full lg:block" aria-hidden="true">
      <div className="absolute inset-0 flex justify-between">
        {slices.map((s, i) => {
          const p = split ? photo(ids[i] ?? ids[0]) : first;
          return (
            <div key={i} className="relative overflow-hidden rounded-card" style={{ width: s.w, height: s.h, marginTop: `calc(${s.top} * 0.7)` }}>
              <Image src={p.src} alt="" fill sizes="30vw" className="object-cover" style={{ objectPosition: split ? "50% 50%" : s.pos }} priority={i === 0} />
            </div>
          );
        })}
      </div>
      <Stamp p={first} className="absolute bottom-[8%] left-3" />
    </div>
  );
}

export function WorkCard({ p, big = false, sizes }: { p: Project; big?: boolean; sizes: string }) {
  const ph = photo(p.cover);
  return (
    <Link href={`/projects/${p.slug}/`} className="group relative block h-full min-h-[240px] overflow-hidden rounded-card bg-night">
      <Image src={ph.src} alt={ph.alt} fill sizes={sizes} className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
      <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/20 to-transparent" />
      <div className={`absolute inset-x-0 bottom-0 ${big ? "p-7 sm:p-9" : "p-5 sm:p-6"}`}>
        <p className="mono text-[0.7rem] uppercase text-beige">
          {ph.place} · {ph.month}
        </p>
        <h3 className={`mt-2 text-white ${big ? "text-[clamp(1.4rem,1.1rem+1vw,2rem)]" : "text-[1.1rem]"}`}>{p.title}</h3>
        {big && <p className="mt-2 hidden max-w-md text-[0.98rem] text-white/75 sm:block">{p.summary}</p>}
      </div>
    </Link>
  );
}

/** One big card and the rest beside and under it. Works for 2 to 6 projects without leaving holes. */
export function WorkBento({ items }: { items: Project[] }) {
  const [first, ...rest] = items;
  if (!first) return null;
  if (rest.length < 2) {
    return (
      <div className="grid auto-rows-[280px] gap-4 md:auto-rows-[380px] md:grid-cols-2">
        {items.map((p) => (
          <WorkCard key={p.slug} p={p} big sizes="(min-width: 768px) 50vw, 100vw" />
        ))}
      </div>
    );
  }
  // Big card spans 4 of 6 columns and 2 rows; two cards stack beside it; the rest share the last row.
  const side = rest.slice(0, 2);
  const below = rest.slice(2);
  const span = below.length === 1 ? "md:col-span-6" : below.length === 2 ? "md:col-span-3" : "md:col-span-2";
  return (
    <div className="grid auto-rows-[240px] gap-4 sm:auto-rows-[260px] md:grid-cols-6 lg:auto-rows-[280px]">
      <div className="md:col-span-4 md:row-span-2">
        <WorkCard p={first} big sizes="(min-width: 768px) 66vw, 100vw" />
      </div>
      {side.map((p) => (
        <div key={p.slug} className="md:col-span-2">
          <WorkCard p={p} sizes="(min-width: 768px) 33vw, 100vw" />
        </div>
      ))}
      {below.map((p) => (
        <div key={p.slug} className={span}>
          <WorkCard p={p} sizes="(min-width: 768px) 33vw, 100vw" />
        </div>
      ))}
    </div>
  );
}

/** A real sequence: sticky heading on the left, numbered steps on a line on the right. */
export function Steps({ title, text, steps, tone = "mist" }: { title: string; text: string; steps: { t: string; d: string }[]; tone?: "mist" | "paper" }) {
  const bg = tone === "mist" ? "bg-mist" : "bg-paper";
  return (
    <section className={bg}>
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1fr_1.4fr] lg:px-8">
        <div className="lg:sticky lg:top-36 lg:h-fit">
          <h2 className={h2}>{title}</h2>
          <p className="mt-5 max-w-md text-[1.08rem]">{text}</p>
          <div className="mt-8">
            <Button href="/contact/" variant="dark">
              Start with step one
            </Button>
          </div>
        </div>
        <ol className="relative">
          <span aria-hidden="true" className="absolute bottom-6 left-[23px] top-6 w-px bg-ink/20" />
          {steps.map((s, i) => (
            <li key={s.t} className="relative grid grid-cols-[48px_1fr] gap-6 pb-10 last:pb-0">
              <span className={`mono relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink/25 text-[0.9rem] text-ink ${bg}`}>{i + 1}</span>
              <div className="pt-2.5">
                <h3 className="text-[1.25rem]">{s.t}</h3>
                <p className="mt-2 max-w-lg">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Google reviews: one big pull quote and the second review under it. */
export function ReviewQuote({ tone = "paper" }: { tone?: "mist" | "paper" }) {
  const [lead, second] = reviews;
  return (
    <section className={tone === "mist" ? "bg-mist" : "bg-paper"}>
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <p className="mono text-[0.78rem] uppercase text-tan-ink">Google review · {lead.date}</p>
        <blockquote className="display mt-6 max-w-5xl text-[clamp(1.5rem,1.1rem+1.7vw,2.6rem)] font-semibold leading-[1.22] text-ink">
          &ldquo;They came to my home, looked over what I needed done&hellip; They were very pleasant and professional and completed the job in the time they stated.&rdquo;
        </blockquote>
        <p className="mt-6 font-bold text-ink">{lead.name}</p>
        <div className="mt-14 grid gap-8 border-t border-ink/15 pt-10 md:grid-cols-[1fr_auto] md:items-end">
          <figure className="max-w-2xl">
            <blockquote className="text-[1.05rem]">&ldquo;{second.text}&rdquo;</blockquote>
            <figcaption className="mt-3 text-ink-mute">
              <span className="font-bold text-ink">{second.name}</span>, Google review, {second.date}
            </figcaption>
          </figure>
          <TextLink href={site.google.mapsUrl} external>
            Read them on Google
          </TextLink>
        </div>
      </div>
    </section>
  );
}

/** Dark estimate block with contacts and the lead form. */
export function Estimate({ title, text, image, source, service }: { title: string; text: string; image: string; source: string; service?: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-night text-white on-dark">
      <Image src={photo(image).src} alt="" fill sizes="100vw" className="-z-20 object-cover opacity-35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-night via-night/90 to-night/60" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1fr_1.15fr] lg:px-8">
        <div>
          <h2 className={`${h2} text-white`}>{title}</h2>
          <p className="mt-5 max-w-md text-[1.08rem]">{text}</p>
          <dl className="mt-10 space-y-5">
            <div>
              <dt className="mono text-[0.72rem] uppercase text-beige">Call or text</dt>
              <dd>
                <a href={site.phoneHref} className="display text-[1.6rem] font-bold text-white hover:text-beige">
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="mono text-[0.72rem] uppercase text-beige">Email</dt>
              <dd>
                <a href={`mailto:${site.email}`} className="text-[1.05rem] text-white underline decoration-tan underline-offset-4">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="mono text-[0.72rem] uppercase text-beige">Hours</dt>
              <dd className="text-white/80">{site.hoursText}</dd>
            </div>
          </dl>
        </div>
        <div className="rounded-card border border-white/15 bg-night/70 p-6 backdrop-blur sm:p-9">
          <LeadForm source={source} tone="dark" defaultService={service} />
        </div>
      </div>
    </section>
  );
}

/** The seven counties as photo cards, plus a call card to make eight. */
export function AreaGrid({ exclude, cta = true }: { exclude?: string; cta?: boolean }) {
  const list = areas.filter((a) => a.slug !== exclude);
  const total = list.length + (cta ? 1 : 0);
  return (
    <ul className={`grid gap-4 sm:grid-cols-2 ${total % 4 === 0 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
      {list.map((a) => {
        const p = photo(a.hero);
        const n = projects.filter((x) => x.area === a.slug).length;
        return (
          <li key={a.slug}>
            <Link href={`/service-area/${a.slug}/`} className="group flex h-full flex-col overflow-hidden rounded-card bg-white">
              <div className="relative aspect-[16/10] overflow-hidden bg-night">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                <span className="mono absolute left-3 top-3 rounded-pill bg-night/75 px-3 py-1.5 text-[0.66rem] uppercase text-beige backdrop-blur">{a.drive === "Home base" ? "Home base" : `${a.drive} away`}</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-[1.2rem] group-hover:text-tan-ink">{a.name}</h3>
                <p className="mb-4 mt-1.5 text-[0.92rem] leading-snug text-ink-mute">{a.towns.slice(0, 4).join(", ")} and nearby</p>
                <span className="mono mt-auto flex items-center justify-between border-t border-ink/10 pt-3 text-[0.72rem] uppercase text-ink">
                  {n > 0 ? `${n} ${n === 1 ? "project" : "projects"}` : "See the area"}
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          </li>
        );
      })}
      {cta && (
        <li>
          <div className="flex h-full min-h-[260px] flex-col justify-between rounded-card bg-night p-6 text-white">
            <div>
              <p className="mono text-[0.7rem] uppercase text-beige">Not on the list?</p>
              <p className="mt-3 font-display text-[1.35rem] font-bold leading-tight text-white">Call and ask. If we can do the job well, we will say so.</p>
            </div>
            <a href={site.phoneHref} className="mt-6 inline-flex items-center justify-between gap-3 rounded-pill bg-tan py-2 pl-5 pr-2 font-display font-bold text-night transition-colors hover:bg-beige">
              {site.phone}
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-night text-white">→</span>
            </a>
          </div>
        </li>
      )}
    </ul>
  );
}
