import type { Metadata } from "next";
import { site, cityLine } from "@/lib/site";
import { Section, Breadcrumbs } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms for using the D&E Mako Renovation website, how estimates work and your rights under Pennsylvania's Home Improvement Consumer Protection Act.",
  alternates: { canonical: "/terms/" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <Section tone="paper">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Terms", href: "/terms/" },
        ]}
      />
      <div className="prose-fg mx-auto mt-8 max-w-3xl">
        <h1 className="text-[clamp(2rem,1.3rem+3vw,3.4rem)]">Terms of use</h1>
        <p>Last updated October 10, 2026. These terms cover your use of {site.url}. Work we do at your home is governed by the written contract we sign with you, not by this page.</p>
        <h2>What this site is</h2>
        <p>This website describes the renovation and carpentry services of {site.legalName} and lets you ask for an estimate. Using the site or sending the form does not create a contract for work. A contract exists only when both of us sign a written agreement.</p>
        <h2>Estimates and prices</h2>
        <p>
          Estimates are free and are prepared after we see the house. Any costs mentioned in articles on this site are general guidance for planning. They are not quotes for your project. Your written estimate controls.
        </p>
        <h2>Your rights under Pennsylvania law</h2>
        <p>
          Pennsylvania&apos;s Home Improvement Consumer Protection Act (73 P.S. § 517.1 and following) protects you on every job. In short: any home improvement contract over $500 must be in writing; you have the right to cancel a home improvement contract without penalty within three business days of signing it; and registered contractors must display their registration number in advertising, including websites.
          {site.hic ? ` Our registration number is ${site.hic}.` : ""} You can look up any Pennsylvania contractor at{" "}
          <a href={site.hicUrl} rel="noopener" target="_blank">
            hicsearch.attorneygeneral.gov
          </a>
          .
        </p>
        <h2>Photos and content</h2>
        <p>The photos, text and design on this site belong to {site.legalName} or are used with permission. You may share links to pages. Please do not copy photos or text for use elsewhere without asking.</p>
        <h2>Accuracy</h2>
        <p>We try to keep every page current and honest. Prices, timelines and code requirements change. If you find something wrong, tell us and we will fix it.</p>
        <h2>Links</h2>
        <p>Some pages link to other websites, such as manufacturers or government agencies. We do not control those sites and are not responsible for their content.</p>
        <h2>Liability</h2>
        <p>The website is provided as is. To the extent the law allows, {site.legalName} is not liable for damages arising from your use of the site itself. This does not limit our responsibility for work performed under a signed contract.</p>
        <h2>Governing law</h2>
        <p>These terms are governed by the laws of the Commonwealth of Pennsylvania.</p>
        <h2>Contact</h2>
        <p>
          {site.legalName}, {cityLine}. {site.phone}. {site.email}.
        </p>
      </div>
    </Section>
  );
}
