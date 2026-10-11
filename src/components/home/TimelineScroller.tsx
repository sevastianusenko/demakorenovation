"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";

/** Horizontal scroll-snap strip with previous/next buttons and a progress bar. Works with touch, trackpad and keyboard. */
export function TimelineScroller({ children, label }: { children: ReactNode; label: string }) {
  const ref = useRef<HTMLUListElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const on = () => setProgress(el.scrollWidth > el.clientWidth ? el.scrollLeft / (el.scrollWidth - el.clientWidth) : 1);
    on();
    el.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      el.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, []);

  const go = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 24 : 360;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const btn = "inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-night disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white";

  return (
    <div className="mt-12">
      <ul
        ref={ref}
        tabIndex={0}
        aria-label={label}
        className="flex snap-x snap-mandatory scroll-pl-4 gap-6 overflow-x-auto scroll-smooth px-4 pb-2 sm:scroll-pl-6 lg:scroll-pl-[max(2rem,calc((100vw-80rem)/2+2rem))] [scrollbar-width:none] sm:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))] [&::-webkit-scrollbar]:hidden"
      >
        {children}
        <li aria-hidden="true" className="w-1 shrink-0" />
      </ul>
      <div className="mx-auto mt-10 flex max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
        <div className="relative h-[2px] flex-1 bg-white/15">
          <div className="absolute inset-y-0 left-0 bg-tan transition-[width] duration-200" style={{ width: `${Math.max(8, progress * 100)}%` }} />
        </div>
        <div className="flex gap-3">
          <button type="button" className={btn} onClick={() => go(-1)} disabled={progress <= 0.01} aria-label="Previous photos">
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <path d="M12 7H2M6 3L2 7l4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button type="button" className={btn} onClick={() => go(1)} disabled={progress >= 0.99} aria-label="Next photos">
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
