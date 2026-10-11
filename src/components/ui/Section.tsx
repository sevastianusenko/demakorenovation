import type { ReactNode } from "react";

type Tone = "paper" | "mist" | "night" | "wave";

const tones: Record<Tone, string> = {
  paper: "bg-paper",
  mist: "bg-mist",
  night: "bg-night on-dark",
  wave: "wave on-dark",
};

export function Section({
  tone = "paper",
  tight = false,
  flushTop = false,
  id,
  className = "",
  children,
}: {
  tone?: Tone;
  tight?: boolean;
  /** No top padding, for a section that continues the one above it. */
  flushTop?: boolean;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  const pad = tight ? (flushTop ? "pb-12 md:pb-16" : "py-12 md:py-16") : flushTop ? "pb-16 md:pb-24" : "py-16 md:py-24";
  return (
    <section id={id} className={`relative flow-root ${tones[tone]} ${className}`}>
      <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${pad}`}>{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

/** Section heading row from the old home page: big title left, short intro right. */
export function SectionHead({ eyebrow, title, intro, className = "" }: { eyebrow?: string; title: ReactNode; intro?: ReactNode; className?: string }) {
  return (
    <div className={`grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-end ${className}`}>
      <div>
        {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
        <h2>{title}</h2>
      </div>
      {intro && <div className="lede measure">{intro}</div>}
    </div>
  );
}

export function Breadcrumbs({ items, light = false }: { items: { name: string; href: string }[]; light?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className={`text-[0.78rem] font-bold uppercase tracking-[0.08em] ${light ? "text-white/70" : "text-ink-mute"}`}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((it, i) => (
          <li key={it.href} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === items.length - 1 ? (
              <span className={light ? "text-beige" : "text-ink"}>{it.name}</span>
            ) : (
              <a href={it.href} className={light ? "hover:text-white" : "hover:text-tan-ink"}>
                {it.name}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
