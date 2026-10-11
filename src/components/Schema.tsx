import { site, type Faq } from "@/lib/site";
import { areas } from "@/content/areas";
import type { Service } from "@/content/services";

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export const orgId = `${site.url}/#business`;

const areaServed = [
  ...site.counties.map((c) => ({ "@type": "AdministrativeArea", name: `${c}, PA` })),
  ...areas.flatMap((a) => a.towns.slice(0, 8).map((t) => ({ "@type": "City", name: `${t}, PA` }))),
];

export function businessNode() {
  const node: Record<string, unknown> = {
    "@type": ["GeneralContractor", "HomeAndConstructionBusiness"],
    "@id": orgId,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    telephone: site.phoneE164,
    email: site.email,
    image: `${site.url}/photos/img-5557.jpg`,
    logo: `${site.url}/brand/logo.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    hasMap: site.google.mapsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    areaServed,
    sameAs: [site.google.mapsUrl, site.facebook].filter(Boolean),
    knowsAbout: [
      "Siding installation and replacement",
      "Fiber cement siding",
      "Window replacement",
      "Entry door replacement",
      "AZEK and PVC exterior trim",
      "Fascia and soffit repair",
      "Finish carpentry",
      "Custom built-ins",
      "Covered porches and composite decks",
      "Copper gutters and flashing",
      "Dormers and home additions",
      "Commercial window and storefront installation",
    ],
  };
  // No aggregateRating: Google treats a business rating its own reviews as self-serving and ignores it.
  if (site.hic) {
    node.hasCredential = {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: `Pennsylvania Home Improvement Contractor Registration ${site.hic}`,
      recognizedBy: { "@type": "GovernmentOrganization", name: "Pennsylvania Office of Attorney General" },
    };
  }
  return node;
}

export function OrgSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          businessNode(),
          { "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: site.name, publisher: { "@id": orgId } },
        ],
      }}
    />
  );
}

export function serviceSchema(s: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}/${s.slug}/#service`,
    name: s.h1,
    serviceType: s.name,
    description: s.description,
    url: `${site.url}/${s.slug}/`,
    provider: { "@id": orgId },
    areaServed,
    image: `${site.url}/photos/${s.hero}.jpg`,
  };
}

export function faqSchema(items: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${site.url}${it.href}` })),
  };
}

export function articleSchema(a: { title: string; description: string; url: string; image?: string; datePublished: string; dateModified?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    url: `${site.url}${a.url}`,
    image: a.image ? `${site.url}${a.image}` : undefined,
    datePublished: a.datePublished,
    dateModified: a.dateModified ?? a.datePublished,
    author: { "@id": orgId },
    publisher: { "@id": orgId },
    mainEntityOfPage: `${site.url}${a.url}`,
  };
}
