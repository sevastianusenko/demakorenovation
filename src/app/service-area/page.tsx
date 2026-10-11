import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { cities } from "@/content/cities";
import { photo } from "@/content/photos";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Section";
import { JsonLd, breadcrumbSchema } from "@/components/Schema";
import { h2, HeroSlices, AreaGrid, Estimate } from "@/components/sections";

export const metadata: Metadata = {
  title: { absolute: "Service Area: 7 Counties Around Ephrata, PA | D&E Mako" },
  description: "D&E Mako Renovation is based in Ephrata, PA and works in Lancaster, Berks, Lebanon, York, Chester, Delaware and Montgomery Counties.",
  alternates: { canonical: "/service-area/" },
};

export default function AreaHub() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Service Area", href: "/service-area/" },
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <section className="relative isolate overflow-hidden on-dark">
        <Image src={photo("img-7288").src} alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-night/80" />
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-10">
          <Breadcrumbs items={crumbs} light />
          <div className="mt-10 grid items-center gap-12 lg:mt-12 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <p className="mono hero-rise text-[0.78rem] uppercase text-beige">Service area · Based in Ephrata, PA</p>
              <h1 className="caps hero-rise mt-4 text-[clamp(1.9rem,1.2rem+2.4vw,3rem)] leading-[1.15]">Seven counties around Ephrata</h1>
              <p className="lede hero-rise-2 mt-6 max-w-xl text-white/90">
                Our shop is in Ephrata, Lancaster County. We work in Lancaster, Berks, Lebanon and York Counties close to home, and east in Chester, Delaware and Montgomery Counties.
              </p>
              <div className="hero-rise-3 mt-9 flex flex-wrap gap-4">
                <Button href="/contact/">Request a free estimate</Button>
                <Button href={site.phoneHref} variant="outline-light">
                  Call {site.phone}
                </Button>
              </div>
            </div>
            <HeroSlices ids={["img-5557", "img-4884", "img-6658"]} split />
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="mb-12 grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <h2 className={h2}>Pick your county</h2>
            <p className="max-w-md text-[1.05rem] lg:justify-self-end">Each page lists the towns we work in, the houses we see there and the jobs we have photographed in or near it.</p>
          </div>
          <AreaGrid />
          <div className="mt-12">
            <p className="mono mb-4 text-[0.72rem] uppercase text-ink-mute">City pages</p>
            <ul className="flex flex-wrap gap-2">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link href={`/service-area/${c.county}/${c.slug}/`} className="inline-block rounded-pill bg-white px-4 py-2 text-[0.95rem] text-ink transition-colors hover:bg-night hover:text-white">
                    Contractor in {c.name}, PA
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 rounded-card bg-white p-7 sm:p-9">
            <h2 className="text-[1.4rem]">Outside these counties</h2>
            <p className="mt-3 max-w-3xl">
              We have also built a rooftop stair enclosure and deck in Philadelphia, a timber truss porch in Ewing Township, New Jersey, and sided a new house in Hunterdon County, New Jersey. If your project is nearby, call and ask.
            </p>
          </div>
        </div>
      </section>

      <Estimate
        title="Tell us where the house is"
        text="Send the address and what needs doing, with a few photos if you can. We will tell you straight away if it is a job we can do well."
        image="img-7281"
        source="service-area"
      />
    </>
  );
}
