import type { Metadata } from "next";
import { site } from "@/lib/site";
import { LeadForm } from "@/components/LeadForm";
import { Section, Breadcrumbs } from "@/components/ui/Section";
import { JsonLd, breadcrumbSchema } from "@/components/Schema";
import { PageHero, Process } from "@/components/blocks";

export const metadata: Metadata = {
  title: "Contact & Free Estimate",
  description: `Free on-site estimate from D&E Mako Renovation, Ephrata, PA. Call ${site.phone} or send the form. Lancaster, Chester, Delaware and Montgomery Counties.`,
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact/" },
  ];
  const row = "flex flex-col gap-1 border-b border-line py-5 last:border-0";
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <PageHero image="img-6936" title="Let's talk about your project" lede="Every job starts with a conversation. Tell us what you have in mind and we will come out, look at it with you and give you an honest written estimate." crumbs={<Breadcrumbs items={crumbs} light />} />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="card p-6 sm:p-10">
            <h2 className="text-[1.8rem]">Request a free estimate</h2>
            <p className="mt-3 text-ink-mute">Name and phone are enough to start. We reply within one business day.</p>
            <div className="mt-8">
              <LeadForm source="contact" />
            </div>
          </div>
          <div>
            <h2 className="text-[1.8rem]">Or reach us directly</h2>
            <div className="mt-6">
              <div className={row}>
                <span className="eyebrow">Call or text</span>
                <a href={site.phoneHref} className="font-display text-[1.5rem] font-bold text-ink">
                  {site.phone}
                </a>
              </div>
              <div className={row}>
                <span className="eyebrow">Email</span>
                <a href={`mailto:${site.email}`} className="text-[1.1rem] font-bold text-ink underline decoration-tan underline-offset-4">
                  {site.email}
                </a>
              </div>
              <div className={row}>
                <span className="eyebrow">Based in</span>
                <span className="text-[1.1rem] text-ink">Ephrata, PA 17522</span>
              </div>
              <div className={row}>
                <span className="eyebrow">Hours</span>
                <span className="text-[1.1rem] text-ink">{site.hoursText}</span>
              </div>
              <div className={row}>
                <span className="eyebrow">Service area</span>
                <span>Lancaster, Berks, Lebanon, York, Chester, Delaware and Montgomery Counties.</span>
              </div>
            </div>
            <p className="mt-6 text-[0.95rem] text-ink-mute">Photos help us give you a rough idea before we visit. After you send the form, you can text them to {site.phone}.</p>
          </div>
        </div>
      </Section>
      <Process />
    </>
  );
}
