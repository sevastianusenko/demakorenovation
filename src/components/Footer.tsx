import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/content/services";
import { areas } from "@/content/areas";

function Col({ title, children, wide = false }: { title: string; children: React.ReactNode; wide?: boolean }) {
  return (
    <div className={wide ? "col-span-2 lg:col-span-1" : ""}>
      <p className="mono mb-5 text-[0.72rem] uppercase text-beige">{title}</p>
      {children}
    </div>
  );
}

export function Footer() {
  const link = "inline-block py-1 text-[0.95rem] text-white/70 transition-colors hover:text-white";
  return (
    <footer className="relative overflow-hidden bg-night text-white on-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Columns */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 pb-14 pt-16 md:pt-20 lg:grid-cols-[1.25fr_1.5fr_1fr_0.9fr] lg:gap-10">
          <div className="col-span-2 lg:col-span-1">
            <Image src="/brand/logo.png" alt={`${site.name} logo`} width={337} height={397} className="h-20 w-auto" />
            <p className="mt-6 max-w-xs text-[0.95rem] text-white/70">
              A carpentry and renovation crew from Ephrata, PA, working in seven counties across southeastern Pennsylvania.
            </p>
            <dl className="mt-8 space-y-4 text-[0.95rem]">
              <div>
                <dt className="mono text-[0.68rem] uppercase text-white/45">Phone</dt>
                <dd>
                  <a href={site.phoneHref} className="text-white hover:text-beige">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="mono text-[0.68rem] uppercase text-white/45">Email</dt>
                <dd>
                  <a href={`mailto:${site.email}`} className="break-all text-white hover:text-beige">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="mono text-[0.68rem] uppercase text-white/45">Hours</dt>
                <dd className="text-white/80">{site.hoursText}</dd>
              </div>
              <div>
                <dt className="mono text-[0.68rem] uppercase text-white/45">Based in</dt>
                <dd>
                  <a href={site.google.mapsUrl} target="_blank" rel="noopener" className="text-white hover:text-beige">
                    Ephrata, PA 17522
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <Col title="Services" wide>
            <ul className="columns-2 gap-x-8 [&>li]:break-inside-avoid">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}/`} className={link}>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col title="Service area">
            <ul>
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link href={`/service-area/${a.slug}/`} className={link}>
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          <Col title="Company">
            <ul>
              {[
                ["About", "/about/"],
                ["Projects", "/projects/"],
                ["Blog", "/blog/"],
                ["Contact", "/contact/"],
              ].map(([l, h]) => (
                <li key={h}>
                  <Link href={h} className={link}>
                    {l}
                  </Link>
                </li>
              ))}
              <li>
                <a href={site.google.reviewUrl} target="_blank" rel="noopener" className={link}>
                  Leave a Google review
                </a>
              </li>
            </ul>
          </Col>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 pb-28 pt-6 text-[0.85rem] text-white/55 sm:px-6 md:flex-row md:items-center md:justify-between md:pb-8 lg:px-8">
          <p>
            © {site.copyrightYear} {site.legalName}. All rights reserved.
            {site.hic && <> PA HIC #{site.hic}.</>}
          </p>
          <p className="flex flex-wrap gap-x-5 gap-y-1">
            <Link href="/privacy-policy/" className="inline-block py-1 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms/" className="inline-block py-1 hover:text-white">
              Terms &amp; Conditions
            </Link>
            <span className="py-1">
              Website by{" "}
              <a href={site.studio.url} rel="noopener" target="_blank" className="text-white/80 underline decoration-tan underline-offset-4 hover:text-white">
                {site.studio.name}
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
