import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { services } from "@/content/services";
import { areas } from "@/content/areas";
import { cities } from "@/content/cities";
import { projects } from "@/content/projects";
import { getPosts } from "@/lib/posts";

const LAUNCH = new Date("2026-10-11");

export default function sitemap(): MetadataRoute.Sitemap {
  const u = (p: string) => `${site.url}${p}`;
  const entries: MetadataRoute.Sitemap = [
    { url: u("/"), lastModified: LAUNCH, changeFrequency: "monthly", priority: 1 },
    { url: u("/services/"), lastModified: LAUNCH, changeFrequency: "monthly", priority: 0.8 },
    { url: u("/projects/"), lastModified: LAUNCH, changeFrequency: "monthly", priority: 0.8 },
    { url: u("/service-area/"), lastModified: LAUNCH, changeFrequency: "yearly", priority: 0.6 },
    { url: u("/blog/"), lastModified: LAUNCH, changeFrequency: "weekly", priority: 0.6 },
    { url: u("/about/"), lastModified: LAUNCH, changeFrequency: "yearly", priority: 0.6 },
    { url: u("/contact/"), lastModified: LAUNCH, changeFrequency: "yearly", priority: 0.7 },
  ];
  for (const s of services) entries.push({ url: u(`/${s.slug}/`), lastModified: LAUNCH, changeFrequency: "monthly", priority: 0.9 });
  for (const a of areas) entries.push({ url: u(`/service-area/${a.slug}/`), lastModified: LAUNCH, changeFrequency: "yearly", priority: 0.6 });
  for (const c of cities) entries.push({ url: u(`/service-area/${c.county}/${c.slug}/`), lastModified: LAUNCH, changeFrequency: "yearly", priority: 0.6 });
  for (const p of projects) entries.push({ url: u(`/projects/${p.slug}/`), lastModified: LAUNCH, changeFrequency: "yearly", priority: 0.7 });
  for (const p of getPosts()) entries.push({ url: u(`/blog/${p.slug}/`), lastModified: new Date(p.modified || p.date), changeFrequency: "yearly", priority: 0.5 });
  return entries;
}
