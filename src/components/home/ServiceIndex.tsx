import Image from "next/image";
import Link from "next/link";
import type { Photo } from "@/content/photos";

export type ServiceTile = { slug: string; name: string; card: string; photo: Photo };

const arrow = (
  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
    <path d="M2 7h10M8 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/**
 * Services as photo tiles. The first two are the work most people call about and get the wide tiles;
 * the rest sit four to a row on desktop and two to a row on phones.
 */
export function ServiceIndex({ items, wide: wideCount = 2, cols = 4 }: { items: ServiceTile[]; wide?: number; cols?: 3 | 4 }) {
  return (
    <ul className={`grid grid-cols-2 gap-3 sm:gap-4 ${cols === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
      {items.map((it, i) => {
        const wide = i < wideCount;
        // An odd tile left over on the two-column phone grid takes the full row.
        const stretch = !wide && cols === 3 && (items.length - wideCount) % 2 === 1 && i === items.length - 1;
        return (
          <li key={it.slug} className={wide ? "col-span-2" : stretch ? "col-span-2 lg:col-span-1" : ""}>
            <Link
              href={`/${it.slug}/`}
              className={`group relative flex h-full flex-col justify-end overflow-hidden rounded-card bg-night ${wide ? "aspect-[4/3] sm:aspect-[16/10]" : stretch ? "aspect-[16/10] lg:aspect-[4/5]" : "aspect-[3/4] sm:aspect-[4/5]"}`}
            >
              <Image
                src={it.photo.src}
                alt={it.photo.alt}
                fill
                sizes={wide ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgb(18_17_15/0.95)_0%,rgb(18_17_15/0.7)_35%,rgb(18_17_15/0)_70%)]" />
              <span className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-night transition-all duration-300 group-hover:bg-tan group-hover:text-white sm:right-4 sm:top-4">
                {arrow}
              </span>
              <div className={`relative ${wide ? "p-5 sm:p-8" : "p-4 sm:p-6"}`}>
                <h3 className={`text-white ${wide ? "text-[clamp(1.5rem,1.1rem+1.4vw,2.3rem)]" : "text-[1.1rem] sm:text-[1.35rem]"}`}>{it.name}</h3>
                <p
                  className={`mt-2 text-white/80 ${wide ? "max-w-lg text-[0.98rem] sm:text-[1.05rem]" : "hidden text-[0.92rem] leading-snug sm:line-clamp-3 sm:block"}`}
                >
                  {it.card}
                </p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
