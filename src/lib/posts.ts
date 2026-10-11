import fs from "node:fs";
import path from "node:path";

export type Post = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  service: string; // service slug this guide supports
  hero: string; // key of the first {{photo:...}} in the body, or empty
  date: string; // YYYY-MM-DD
  modified: string;
  words: number;
  body: string; // markdown
  excerpt: string;
};

const DIR = path.join(process.cwd(), "src", "content", "posts");

function parseFront(raw: string): { meta: Record<string, string>; body: string } {
  const m = /^---\n([\s\S]*?)\n---\n?/.exec(raw);
  if (!m) return { meta: {}, body: raw };
  const meta: Record<string, string> = {};
  for (const line of m[1].split("\n")) {
    const i = line.indexOf(":");
    if (i < 0) continue;
    const k = line.slice(0, i).trim();
    let v = line.slice(i + 1).trim();
    if (v.startsWith('"') && v.endsWith('"')) {
      try {
        v = JSON.parse(v) as string;
      } catch {
        v = v.slice(1, -1);
      }
    }
    meta[k] = v;
  }
  return { meta, body: raw.slice(m[0].length) };
}

let cache: Post[] | null = null;

export function getPosts(): Post[] {
  if (cache) return cache;
  if (!fs.existsSync(DIR)) return (cache = []);
  const files = fs.readdirSync(DIR).filter((f) => f.endsWith(".md"));
  const posts = files.map((f) => {
    const raw = fs.readFileSync(path.join(DIR, f), "utf8").replace(/\r\n/g, "\n");
    const { meta, body } = parseFront(raw);
    const text = body
      .replace(/\{\{photo:[^}]+\}\}/g, "")
      .replace(/^#+ .*$/gm, "")
      .replace(/^\|.*$/gm, "")
      .replace(/\*\*/g, "")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/\s+/g, " ")
      .trim();
    return {
      slug: meta.slug || f.replace(/\.md$/, ""),
      title: meta.title || f,
      seoTitle: meta.seo_title || meta.title || "",
      description: meta.description || text.slice(0, 155),
      service: meta.service || "",
      date: (meta.date || "").slice(0, 10),
      modified: (meta.modified || meta.date || "").slice(0, 10),
      words: text.split(" ").length,
      body,
      hero: /\{\{photo:([a-z0-9-]+)\}\}/.exec(body)?.[1] ?? "",
      excerpt: text.slice(0, 170).replace(/\s\S*$/, "") + "...",
    } satisfies Post;
  });
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  cache = posts;
  return posts;
}

export const getPost = (slug: string) => getPosts().find((p) => p.slug === slug);
