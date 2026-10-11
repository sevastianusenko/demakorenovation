import type { Metadata } from "next";
import { site, cityLine } from "@/lib/site";
import { Section, Breadcrumbs } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How D&E Mako Renovation handles the information you send through this website and what we do not collect.",
  alternates: { canonical: "/privacy-policy/" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <Section tone="paper">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Privacy policy", href: "/privacy-policy/" },
        ]}
      />
      <div className="prose-fg mx-auto mt-8 max-w-3xl">
        <h1 className="text-[clamp(2rem,1.3rem+3vw,3.4rem)]">Privacy policy</h1>
        <p>Last updated October 10, 2026. This policy covers {site.url} and is written in plain language because that is how we would want to read it.</p>
        <h2>What we collect</h2>
        <p>
          When you fill out the estimate form we receive what you type: your name, phone number, email address if you give one, your town, the kind of work you want and your message. The form also records which page you sent it from. That is it. We do not ask for payment details, Social Security numbers or anything we do not need to call you back.
        </p>
        <p>If you call or text us, your phone carrier handles that call the way it handles any other. We keep your number in our phone like any contractor would.</p>
        <h2>What we do with it</h2>
        <p>We use your information to contact you about your project, schedule a walkthrough and send you an estimate. We do not sell it, rent it or share it with marketers. If a licensed roofer, electrician or plumber works on your job, we share your address and schedule with them so they can show up.</p>
        <h2>How the form is delivered</h2>
        <p>Form submissions are sent to our email through a form delivery service. That service processes the message in order to deliver it and does not use it for its own purposes.</p>
        <h2>Cookies and analytics</h2>
        <p>
          This site does not use advertising cookies and does not run ad tracking. We may use a privacy-respecting analytics tool to count visits and see which pages people read. If we add Google Analytics or a similar tool, this section will say so. Your browser&apos;s do-not-track and cookie settings are respected by the site itself.
        </p>
        <h2>Photos</h2>
        <p>Photos on this site were taken by our crew on our own jobs. We do not show house numbers, street names, faces or anything that identifies a client without permission. If a photo of your home is on this site and you would like it removed, email us and it comes down.</p>
        <h2>Your choices</h2>
        <p>
          Email {site.email} to see what we have on file for you, correct it or have it deleted. We will do it within a few business days. Residents of states with privacy laws that grant specific rights can exercise them the same way.
        </p>
        <h2>Children</h2>
        <p>This site is for homeowners and is not directed at children under 13. We do not knowingly collect information from them.</p>
        <h2>Changes</h2>
        <p>If this policy changes, the date at the top changes with it.</p>
        <h2>Contact</h2>
        <p>
          {site.legalName}, {cityLine}. {site.phone}. {site.email}.
        </p>
      </div>
    </Section>
  );
}
