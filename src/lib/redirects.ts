// 301 map from every URL on the old WordPress site to its new home. Used by next.config and by Markdown link rewriting.

const svc: Record<string, string> = {
  "custom-construction-renovationlancaster-county": "/dormers-additions/",
  "azek-trim-aluminumlancaster-county": "/exterior-trim/",
  "siding-installation-repairlancaster-county": "/siding/",
  "window-doorinstallationlancaster-county": "/windows/",
  "trim-finishcarpentrylancaster-county": "/finish-carpentry/",
  "copper-workcontractorlancaster-county": "/copper-work/",
  "commercialrenovation-construction": "/commercial/",
  "interior-finishingcontractor": "/finish-carpentry/",
};

const lancasterTowns = ["ephrata", "lititz", "new-holland", "manheim", "akron", "denver", "mount-joy", "adamstown", "reamstown", "reinholds", "stevens", "terre-hill", "east-earl", "blue-ball", "brownstown", "bowmansville", "churchtown", "goodville", "elizabethtown", "leola", "strasburg"];
const berksTowns = ["morgantown"];
const chesterTowns = ["downingtown", "kennett-square", "honey-brook"];

const g = (slug: string) => `/blog/${slug}/`;
const p = (slug: string) => `/projects/${slug}/`;

// Old blog posts (root-level slugs) -> new guide or the service page that now covers the topic.
const posts: Record<string, string> = {
  "home-addition-lancaster-county-pa": "/dormers-additions/",
  "three-season-room-addition-lancaster-county-pa": "/dormers-additions/",
  "stair-railing-replacement-lancaster-county-pa": "/finish-carpentry/",
  "custom-fireplace-mantel-lancaster-county-pa": "/built-ins/",
  "attic-conversion-living-space-lancaster-county-pa": g("adding-a-dormer"),
  "covered-porch-addition-lancaster-county-pa": "/porches-decks/",
  "gutter-replacement-lancaster-county-pa": g("soffit-and-fascia-repair"),
  "hardwood-floor-refinishing-lancaster-county-pa": "/finish-carpentry/",
  "bathroom-remodel-lancaster-county-pa": "/services/",
  "kitchen-remodel-lancaster-county-pa": "/services/",
  "building-a-deck-lancaster-county-pa": g("composite-vs-wood-decking"),
  "garage-conversion-living-space-lancaster-county-pa": "/dormers-additions/",
  "board-and-batten-accent-wall-lancaster-county-pa": "/finish-carpentry/",
  "bay-window-replacement-lancaster-county-pa": g("insert-vs-full-frame-window-replacement"),
  "custom-built-in-bookcases-lancaster-county-pa": g("built-in-bookshelves-cost"),
  "copper-gutters-downspouts-lancaster-county-pa": g("copper-gutters-guide"),
  "basement-finishing-lancaster-county-pa": "/services/",
  "crown-molding-installation-lancaster-county-pa": g("trim-carpentry-vs-finish-carpentry"),
  "soffit-ventilation-attic-airflow-lancaster-county-pa": g("soffit-and-fascia-repair"),
  "exterior-entry-door-replacement-lancaster-county-pa": g("replacing-a-front-door-with-sidelights"),
  "home-renovation-hempfield-township-lancaster-county-pa": "/service-area/lancaster-county/",
  "what-to-expect-during-lancaster-county-home-renovation": g("how-to-vet-a-pennsylvania-contractor"),
  "interior-renovation-permits-lancaster-county-pa": g("how-to-vet-a-pennsylvania-contractor"),
  "adding-mudroom-lancaster-county-pa-home": "/built-ins/",
  "azek-vs-boral-truexterior-trim-pennsylvania": g("azek-pvc-trim-guide"),
  "andersen-400-vs-pella-reserve-lancaster-county": g("marvin-vs-andersen-replacement-windows"),
  "james-hardie-vs-lp-smartside-pennsylvania": g("fiber-cement-vs-vinyl-vs-lp-smartside"),
  "converting-pennsylvania-bank-barn-living-space": "/dormers-additions/",
  "1920s-pennsylvania-farmhouse-interior-restoration": "/finish-carpentry/",
  "renovating-1950s-ranch-home-lancaster-county-pa": "/siding/",
  "how-to-vet-pennsylvania-home-improvement-contractor": g("how-to-vet-a-pennsylvania-contractor"),
  "trim-carpentry-vs-finish-carpentry-pa": g("trim-carpentry-vs-finish-carpentry"),
  "exterior-siding-installation-timeline-lancaster-county-pa": g("remove-old-siding-before-new-siding"),
  "load-bearing-wall-removal-lancaster-county-pa": "/dormers-additions/",
  "cape-cod-dormer-expansion-lancaster-county-pa": g("adding-a-dormer"),
  "replacing-wood-fascia-pvc-trim-lancaster-county-pa": g("soffit-and-fascia-repair"),
  "drywall-cracks-older-lancaster-county-homes": "/finish-carpentry/",
  "water-damage-behind-siding-pa-homeowner-signs": g("remove-old-siding-before-new-siding"),
  "rotted-fascia-board-repair-lancaster-county-pa": g("soffit-and-fascia-repair"),
  "aluminum-trim-warped-chalking-peeling-guide-pa": g("azek-pvc-trim-guide"),
  "aluminum-trim-installation-west-chester-pa": "/exterior-trim/",
  "why-siding-peeling-west-chester-pa-contractor-fix": g("fiber-cement-vs-vinyl-vs-lp-smartside"),
  "mistakes-interior-renovation-lancaster-county-pa": g("how-to-vet-a-pennsylvania-contractor"),
  "when-siding-needs-removal-vs-repair-lancaster-county-pa": g("remove-old-siding-before-new-siding"),
  "what-to-ask-contractor-before-commercial-renovation-pa": "/commercial/",
  "best-home-renovation-contractors-near-terre-hill-pa-de-mako-renovation": "/service-area/lancaster-county/",
  "do-copper-gutters-turn-green": g("copper-gutters-guide"),
  "caulk-around-windows-cracking": g("insert-vs-full-frame-window-replacement"),
  "fiber-cement-siding-over-stucco": g("fiber-cement-vs-vinyl-vs-lp-smartside"),
  "interior-doors-stick-in-summer": g("replacing-a-front-door-with-sidelights"),
  "fascia-vs-soffit-vs-frieze-board": g("soffit-and-fascia-repair"),
  "nail-pops-drywall-causes-fix": "/finish-carpentry/",
  "how-long-fiber-cement-siding-last-pennsylvania": g("fiber-cement-siding-cost"),
  "remove-old-siding-before-new-siding": g("remove-old-siding-before-new-siding"),
  "does-azek-trim-turn-yellow-fade": g("azek-pvc-trim-guide"),
  "stop-ice-dams-older-pennsylvania-home": g("soffit-and-fascia-repair"),
};

// Old project case studies -> the real project that matches, or the service page.
const oldProjects: Record<string, string> = {
  "full-window-replacement-ephrata-pa": "/windows/",
  "custom-entry-door-stone-facade-west-chester-pa": p("andersen-windows-french-doors-lower-merion"),
  "andersen-windows-stone-home-malvern-pa": "/service-area/chester-county/malvern/",
  "board-and-batten-feature-wall-ephrata-pa": "/finish-carpentry/",
  "staircase-wainscoting-railing-new-holland-pa": p("stairwell-wainscoting-thornbury"),
  "custom-built-in-bookcases-lititz-pa": "/built-ins/",
  "gray-lap-siding-new-home-manheim-pa": p("blue-gray-lap-siding-manheim"),
  "gambrel-home-residing-fieldstone-kennett-square-pa": p("lap-siding-cedar-shake-gambrel-lower-merion"),
  "fiber-cement-siding-installation-denver-pa": "/siding/",
  "bedroom-suite-interior-finish-ephrata-pa": "/finish-carpentry/",
  "hardwood-refinishing-interior-trim-downingtown-pa": p("interior-trim-built-ins-lower-merion"),
  "interior-trim-crown-molding-lititz-pa": "/finish-carpentry/",
  "stone-farmhouse-whole-home-renovation-new-holland-pa": p("stone-gambrel-house-dormers-lower-merion"),
  "stone-pier-porch-composite-deck-kennett-square-pa": p("composite-deck-stairs-wayne"),
  "custom-timber-truss-porch-downingtown-pa": p("timber-truss-front-porch-ewing-nj"),
  "copper-downspouts-roofline-details-lititz-pa": "/copper-work/",
  "copper-window-sill-flashing-chester-springs-pa": p("copper-bay-window-flashing-haverford"),
  "copper-gutters-cornice-stone-home-malvern-pa": "/copper-work/",
  "commercial-exterior-renovation-ephrata-pa": "/commercial/",
  "commercial-storefront-glass-doors-west-chester-pa": p("storefront-glass-doors-newtown-square"),
  "retail-store-buildout-lancaster-pa": "/commercial/",
  "pvc-rake-gable-trim-new-holland-pa": p("pvc-rake-trim-stucco-farmhouse-newtown-square"),
  "aluminum-trim-gutter-work-ephrata-pa": "/exterior-trim/",
  "azek-fascia-soffit-replacement-lititz-pa": "/exterior-trim/",
  "custom-entry-portico-berwyn-pa-stone-home": p("front-porch-columns-entry-roof-lower-merion"),
  "interior-renovation-downingtown-pa-hardwood-floors-trim": p("interior-trim-built-ins-lower-merion"),
  "composite-deck-stairs-lititz-pa-lancaster-county": p("composite-steps-landing-media"),
  "re-siding-stone-home-kennett-square-pa": p("lap-siding-cedar-shake-gambrel-lower-merion"),
  "fiber-cement-siding-denver-pa-lancaster-county": "/siding/",
  "andersen-window-installation-malvern-pa": "/service-area/chester-county/malvern/",
  "custom-door-installation-west-chester-pa": "/service-area/chester-county/west-chester/",
};

export const redirectMap: [string, string][] = [
  ["/gallery/", "/projects/"],
  ["/news/", "/blog/"],
  ["/project/", "/projects/"],
  ...Object.entries(svc).flatMap(([old, to]) => [
    [`/services/${old}/`, to] as [string, string],
    [`/${old}/`, to] as [string, string],
  ]),
  ...lancasterTowns.map((t) => [`/service-area/${t}-pa/`, "/service-area/lancaster-county/"] as [string, string]),
  ...chesterTowns.map((t) => [`/service-area/${t}-pa/`, "/service-area/chester-county/"] as [string, string]),
  ["/service-area/malvern-pa/", "/service-area/chester-county/malvern/"],
  ["/service-area/west-chester-pa/", "/service-area/chester-county/west-chester/"],
  ...berksTowns.map((t) => [`/service-area/${t}-pa/`, "/service-area/berks-county/"] as [string, string]),
  ...Object.entries(posts).map(([old, to]) => [`/${old}/`, to] as [string, string]),
  ...Object.entries(oldProjects).map(([old, to]) => [`/project/${old}/`, to] as [string, string]),
];

const lookup = new Map(redirectMap);

/** Where an old internal path now lives (paths without a match are returned unchanged). */
export function resolveOldPath(path: string): string {
  const [base, hash = ""] = path.split("#");
  const withSlash = base.endsWith("/") ? base : `${base}/`;
  const to = lookup.get(withSlash);
  return (to ?? base) + (hash ? `#${hash}` : "");
}
