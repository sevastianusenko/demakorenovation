import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/content/services";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section>
      <div className="max-w-2xl">
        <Eyebrow className="mb-3">404</Eyebrow>
        <h1>That page is not here.</h1>
        <p className="lede mt-6">The address may have changed when we rebuilt the site. Try one of these, or call us.</p>
        <ul className="mt-8 grid gap-x-8 gap-y-2 sm:grid-cols-2">
          {services.map((s) => (
            <li key={s.slug}>
              <Link href={`/${s.slug}/`} className="font-display font-bold text-ink hover:text-tan-ink">
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button href="/" variant="dark">
            Back to the home page
          </Button>
          <Button href={site.phoneHref} variant="outline">
            Call {site.phone}
          </Button>
        </div>
      </div>
    </Section>
  );
}
