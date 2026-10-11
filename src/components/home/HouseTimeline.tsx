import Image from "next/image";
import Link from "next/link";
import { photo } from "@/content/photos";
import { TimelineScroller } from "./TimelineScroller";

// One house, in the order the work happened.
const steps = [
  { id: "img-5214", t: "The gambrel ends stripped back to the old boards.", href: "/projects/stone-gambrel-house-dormers-lower-merion/" },
  { id: "img-5213", t: "Roof opened and wrapped, one section a day, closed every night.", href: "/projects/stone-gambrel-house-dormers-lower-merion/" },
  { id: "img-5277", t: "New dormers framed into the gambrel and flashed by hand.", href: "/projects/stone-gambrel-house-dormers-lower-merion/" },
  { id: "img-5380", t: "The rear addition sheathed in ZIP System, every seam taped.", href: "/projects/stone-gambrel-house-dormers-lower-merion/" },
  { id: "img-5546", t: "A long shed dormer, new windows, lap siding on the cheeks.", href: "/projects/lap-siding-cedar-shake-gambrel-lower-merion/" },
  { id: "img-6720", t: "Inside: a row of Andersen windows cased and ready for paint.", href: "/projects/andersen-windows-french-doors-lower-merion/" },
  { id: "img-6936", t: "Square porch columns and a beadboard ceiling out front.", href: "/projects/front-porch-columns-entry-roof-lower-merion/" },
  { id: "img-7287", t: "Cedar shake gables over tan lap siding, finished in the snow.", href: "/projects/lap-siding-cedar-shake-gambrel-lower-merion/" },
  { id: "img-7727", t: "Panel trim and baseboard in the new upstairs bathroom.", href: "/projects/stairs-bath-trim-lower-merion/" },
];

export function HouseTimeline() {
  const items = steps.map((s) => ({ ...s, p: photo(s.id) }));
  return (
    <section className="relative overflow-hidden bg-night py-20 text-white md:py-28" aria-labelledby="house-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <p className="mono text-[0.78rem] uppercase text-beige">Lower Merion Township</p>
            <h2 id="house-title" className="mt-4 text-[clamp(2rem,1.4rem+2.4vw,3.4rem)] text-white">
              A stone house, start to finish
            </h2>
          </div>
          <p className="max-w-md text-[1.08rem] text-white/75">
            A fieldstone house with a gambrel roof, rebuilt by our crew from the roof framing to the bathroom trim. Every photo below is from this one job.
          </p>
        </div>
      </div>
      <TimelineScroller label="Photos of one stone house in Lower Merion">
        {items.map((s) => (
          <li key={s.id} className="w-[78vw] max-w-[380px] shrink-0 snap-start sm:w-[340px]">
            <Link href={s.href} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-white/5">
                <Image src={s.p.src} alt={s.p.alt} fill sizes="(min-width: 640px) 340px, 78vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              </div>
              <p className="mt-4 text-[1rem] leading-snug text-white/85 group-hover:text-white">{s.t}</p>
            </Link>
          </li>
        ))}
      </TimelineScroller>
    </section>
  );
}
