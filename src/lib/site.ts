// Business facts. Change them here only. Anything marked TODO is waiting on the client.
export const site = {
  name: "D&E Mako Renovation",
  legalName: "D&E Mako LLC", // from the logo; TODO confirm the registered entity name
  url: "https://demakorenovations.com",
  // TODO: (509) is a Washington State area code. It matches the Google Business Profile today,
  // so it stays until the client confirms a local 717/610 number.
  phone: "(509) 530-8685",
  phoneHref: "tel:+15095308685",
  phoneE164: "+1-509-530-8685",
  smsHref: "sms:+15095308685",
  email: "demakorenovation@gmail.com",
  address: {
    street: "", // service-area business: no street address is published on the GBP
    city: "Ephrata",
    state: "PA",
    zip: "17522",
    country: "US",
  },
  // Google Business Profile pin (eastern Lancaster County).
  geo: { lat: 40.0186, lng: -76.0413 },
  hoursText: "Monday to Friday, 8:00 am to 5:00 pm",
  openingHours: ["Mo-Fr 08:00-17:00"],
  // PA Home Improvement Contractor registration. null hides every HIC line on the site.
  hic: null as string | null, // TODO: get the PA HIC number from the client
  hicUrl: "https://hicsearch.attorneygeneral.gov/",
  google: {
    rating: 5.0,
    count: 3,
    placeId: "ChIJ9exSnEL34qURsRdaP5t7ZHo",
    mapsUrl: "https://maps.google.com/?cid=8819309877011290033",
    reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJ9exSnEL34qURsRdaP5t7ZHo",
  },
  facebook: null as string | null, // TODO
  counties: ["Lancaster County", "Berks County", "Lebanon County", "York County", "Chester County", "Delaware County", "Montgomery County"],
  callbackPromise: "We answer calls and texts during work hours and get back to every message within one business day",
  studio: { name: "Seva Web Studio", url: "https://seva-web-studio.com/" },
  copyrightYear: 2026,
} as const;

export type Faq = { q: string; a: string };

export const cityLine = `${site.address.city}, ${site.address.state} ${site.address.zip}`;

/** Titles get the " | D&E Mako Renovation" suffix only when the whole thing still fits in about 62 characters. */
export function fitTitle(core: string): string | { absolute: string } {
  return core.length + 22 <= 62 ? core : { absolute: core };
}
