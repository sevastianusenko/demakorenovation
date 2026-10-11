"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/content/nav";
import { site } from "@/lib/site";

function PhoneIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2" strokeLinejoin="round" />
    </svg>
  );
}

/** Black bar from the old site: logo left, uppercase links, tan call pill and a round tan menu button. */
export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const active = (href: string) => (href === "/" ? path === "/" : path.startsWith(href) || nav.find((n) => n.href === href)?.children?.some((c) => path.startsWith(c.href)));

  return (
    <header className="sticky top-0 z-50 bg-night text-white">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-pill focus:bg-white focus:px-4 focus:py-2 focus:text-night">
        Skip to content
      </a>
      <div className="mx-auto flex h-[84px] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:h-[104px] lg:px-8">
        <Link href="/" className="shrink-0" aria-label={`${site.name}, home`}>
          <Image src="/brand/logo.png" alt={`${site.name} logo`} width={337} height={397} priority className="h-[64px] w-auto lg:h-[82px]" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1 xl:gap-3">
            {nav.map((item) => (
              <li key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-2.5 py-3 text-[0.8rem] font-bold uppercase tracking-[0.02em] transition-colors hover:text-tan ${active(item.href) ? "text-tan" : "text-white"}`}
                >
                  {item.label}
                  {item.children && (
                    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" className="opacity-70">
                      <path d="M2 4l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  )}
                </Link>
                {item.children && (
                  <div className="invisible absolute left-0 top-full w-64 translate-y-1 pt-2 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <ul className="rounded-card bg-white p-2 text-ink shadow-[var(--shadow-card)]">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} className={`block rounded-xl px-4 py-2.5 text-[0.95rem] font-semibold hover:bg-mist ${path.startsWith(c.href) ? "text-tan-ink" : ""}`}>
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a href={site.phoneHref} className="hidden items-center gap-2 rounded-pill bg-tan px-5 py-3 text-[0.95rem] font-bold text-night transition-colors hover:bg-tan-deep sm:inline-flex">
            <PhoneIcon />
            Call {site.phone}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-tan text-night lg:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
              {open ? (
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M3 6h14M3 10h10M3 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-[84px] overflow-y-auto bg-night px-4 pb-28 pt-4 sm:px-6 lg:hidden">
          <ul className="divide-y divide-white/10">
            {nav.map((item) => (
              <li key={item.href} className="py-1">
                <Link href={item.href} className={`block py-3 text-[1.1rem] font-bold uppercase ${active(item.href) ? "text-tan" : "text-white"}`}>
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mb-3 grid grid-cols-1 gap-1 pl-3 sm:grid-cols-2">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} className="block py-2 text-[1rem] text-white/80 hover:text-white">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <a href={site.phoneHref} className="mt-6 flex items-center justify-center gap-2 rounded-pill bg-tan px-5 py-4 font-bold text-night">
            <PhoneIcon />
            Call {site.phone}
          </a>
        </div>
      )}
    </header>
  );
}
