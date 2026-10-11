import type { ReactNode } from "react";
import type { Faq as FaqItem } from "@/lib/site";
import { JsonLd, faqSchema } from "@/components/Schema";

/** Accordion from the old site's dark FAQ block: question rows with a plus that turns into a minus. */
export function Faq({ items, title = "Commonly asked questions", intro, withSchema = true, dark = false }: { items: FaqItem[]; title?: string; intro?: ReactNode; withSchema?: boolean; dark?: boolean }) {
  if (!items.length) return null;
  return (
    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
      {withSchema && <JsonLd data={faqSchema(items)} />}
      <div>
        <h2>{title}</h2>
        {intro && <div className="mt-6">{intro}</div>}
      </div>
      <div className={`divide-y ${dark ? "divide-white/15" : "divide-line"}`}>
        {items.map((it, i) => (
          <details key={i} className="group py-5" open={i === 0}>
            <summary className="flex items-start justify-between gap-6">
              <span className={`text-[1.15rem] font-bold leading-snug ${dark ? "text-white group-open:text-beige" : "text-ink group-open:text-tan-ink"}`}>{it.q}</span>
              <span aria-hidden="true" className={`relative mt-1.5 h-4 w-4 shrink-0 ${dark ? "text-white" : "text-ink"}`}>
                <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 bg-current" />
                <span className="absolute left-1/2 top-0 h-4 w-[2px] -translate-x-1/2 bg-current transition-transform duration-300 group-open:scale-y-0" />
              </span>
            </summary>
            <p className={`measure mt-3 ${dark ? "text-white/80" : "text-ink-soft"}`}>{it.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
