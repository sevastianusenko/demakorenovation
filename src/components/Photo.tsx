import Image from "next/image";
import { photo as getPhoto, type Photo as PhotoData } from "@/content/photos";

/** Where and when the photo was taken, read from the photo's EXIF. */
export function Stamp({ p, className = "" }: { p: PhotoData; className?: string }) {
  const parts = [p.place, p.month].filter(Boolean);
  if (!parts.length) return null;
  return (
    <span className={`stamp ${className}`}>
      {parts.map((t, i) => (
        <span key={i} className="inline-flex items-center gap-[0.6em]">
          {i > 0 && <i aria-hidden="true" />}
          {t}
        </span>
      ))}
    </span>
  );
}

/** A client photo with 20px corners and its EXIF stamp. Every job photo on the site goes through here. */
export function Photo({
  id,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  className = "",
  ratio,
  stamp = true,
  caption,
  fill = false,
}: {
  id: string;
  /** Fill the parent's height instead of keeping the photo's ratio. */
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  className?: string;
  ratio?: string; // e.g. "4 / 3"
  stamp?: boolean;
  caption?: string;
}) {
  const p = getPhoto(id);
  return (
    <figure className={`relative ${fill ? "h-full" : ""} ${className}`}>
      <div className={`relative overflow-hidden rounded-card bg-mist ${fill ? "h-full" : ""}`} style={fill ? undefined : { aspectRatio: ratio ?? `${p.w} / ${p.h}` }}>
        <Image src={p.src} alt={p.alt} fill sizes={sizes} priority={priority} className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
        {stamp && <Stamp p={p} className="absolute bottom-3 left-3" />}
      </div>
      {caption && <figcaption className="mt-2 text-[0.92rem] text-ink-mute">{caption}</figcaption>}
    </figure>
  );
}
