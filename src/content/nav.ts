import { services } from "./services";
import { areas } from "./areas";

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/", children: services.map((s) => ({ label: s.name, href: `/${s.slug}/` })) },
  { label: "Projects", href: "/projects/" },
  { label: "Service Area", href: "/service-area/", children: areas.map((a) => ({ label: a.name, href: `/service-area/${a.slug}/` })) },
  { label: "About", href: "/about/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];
