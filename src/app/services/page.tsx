import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/services";
import { Photo } from "@/components/Photo";
import { Button } from "@/components/ui/Button";
import { Section, Breadcrumbs } from "@/components/ui/Section";
import { JsonLd, breadcrumbSchema } from "@/components/Schema";
import { PageHero, Process, CtaBand } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Renovation & Carpentry Services",
  description: "Siding, windows, doors, AZEK trim, finish carpentry, built-ins, porches, copper, dormers and commercial carpentry from a crew based in Ephrata, PA.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services/" },
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero
        image="img-5550"
        title={
          <>
            Ten crafts, one <span className="it">crew</span>
          </>
        }
        lede="We are carpenters. Everything on this list is work we do with our own hands, on old houses and new ones, from Lancaster County to the Main Line."
        crumbs={<Breadcrumbs items={crumbs} light />}
      >
        <Button href="/contact/">Request a free estimate</Button>
      </PageHero>
      <Section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} href={`/${s.slug}/`} className="group flex flex-col overflow-hidden rounded-card border border-line bg-white shadow-[var(--shadow-card)]">
              <Photo id={s.hero} ratio="16 / 10" sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="[&>div]:rounded-none" />
              <div className="flex flex-1 flex-col p-8">
                <h2 className="text-[1.45rem] group-hover:text-tan-ink">{s.name}</h2>
                <p className="mt-3 flex-1">{s.card}</p>
                <span className="mt-6 font-bold text-ink underline decoration-tan decoration-2 underline-offset-4">More about {s.name.toLowerCase()}</span>
              </div>
              <span aria-hidden="true" className="h-1.5 bg-tan" />
            </Link>
          ))}
          <div className="flex flex-col justify-between rounded-card border border-line bg-mist p-8">
            <p className="text-[1.05rem]">Not sure which service you need? Tell us what you are dealing with and we will give you an honest answer, even if the answer is that it can wait.</p>
            <div className="mt-8">
              <Button href="/contact/">Ask us</Button>
            </div>
          </div>
        </div>
      </Section>
      <Process />
      <CtaBand />
    </>
  );
}
