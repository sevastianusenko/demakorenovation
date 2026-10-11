"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function RevealObserver() {
  const path = usePathname();
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)"));
    if (!els.length) return;
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [path]);
  return null;
}
