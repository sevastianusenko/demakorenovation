import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import { resolveOldPath } from "@/lib/redirects";
import { Photo } from "./Photo";

/** Minimal markdown: ##/### headings, paragraphs, - and 1. lists, > quotes, | tables |, **bold**, [links](url), ![img](src). */

const OLD_ORIGIN = /^https?:\/\/(www\.)?demakorenovations\.com/;

function inline(text: string, key = 0): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*)|(\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith("**")) {
      out.push(<strong key={`${key}-${i++}`}>{tok.slice(2, -2)}</strong>);
    } else {
      const mm = /\[([^\]]+)\]\(([^)]+)\)/.exec(tok)!;
      let href = mm[2].trim();
      if (OLD_ORIGIN.test(href)) href = resolveOldPath(href.replace(OLD_ORIGIN, "") || "/");
      else if (href.startsWith("/")) href = resolveOldPath(href);
      // CTA links from the old posts ("Get a Free Estimate", "Call ...") render as pill buttons, like the old post kit.
      const isCta = /^(get|request|call|schedule|book)\b/i.test(mm[1].trim()) && (href === "/contact/" || href.startsWith("tel:"));
      out.push(
        href.startsWith("/") ? (
          <Link key={`${key}-${i++}`} href={href} className={isCta ? "btn-inline" : undefined}>
            {mm[1]}
          </Link>
        ) : (
          <a key={`${key}-${i++}`} href={href} rel="noopener" target="_blank">
            {mm[1]}
          </a>
        ),
      );
    }
    last = m.index + tok.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function Markdown({ source, className = "prose-fg" }: { source: string; className?: string }) {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  const blocks: ReactNode[] = [];
  let i = 0;
  let k = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i++;
      continue;
    }
    if (/^!\[/.test(line.trim())) {
      // Images from the old site are dropped until replaced with our own photos.
      i++;
      continue;
    }
    const ph = /^\{\{photo:([a-z0-9-]+)\}\}$/.exec(line.trim());
    if (ph) {
      // Our own photo with its EXIF stamp: {{photo:key}} on a line by itself.
      blocks.push(<Photo key={k++} id={ph[1]} sizes="(min-width: 1024px) 48rem, 100vw" />);
      i++;
      continue;
    }
    if (line.startsWith("#### ")) {
      blocks.push(<h4 key={k++}>{inline(line.slice(5), k)}</h4>);
      i++;
      continue;
    }
    if (line.startsWith("### ")) {
      blocks.push(<h3 key={k++}>{inline(line.slice(4), k)}</h3>);
      i++;
      continue;
    }
    if (line.startsWith("## ")) {
      blocks.push(<h2 key={k++}>{inline(line.slice(3), k)}</h2>);
      i++;
      continue;
    }
    if (line.startsWith("# ")) {
      // A stray H1 inside a post body becomes an H2.
      blocks.push(<h2 key={k++}>{inline(line.slice(2), k)}</h2>);
      i++;
      continue;
    }
    if (line.startsWith("> ")) {
      const q: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) q.push(lines[i++].slice(2));
      blocks.push(<blockquote key={k++}>{inline(q.join(" "), k)}</blockquote>);
      continue;
    }
    if (/^[-*] /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*] /.test(lines[i])) items.push(lines[i++].slice(2));
      blocks.push(
        <ul key={k++}>
          {items.map((it, j) => (
            <li key={j}>{inline(it, k * 100 + j)}</li>
          ))}
        </ul>,
      );
      continue;
    }
    if (/^\d+\. /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) items.push(lines[i++].replace(/^\d+\. /, ""));
      blocks.push(
        <ol key={k++}>
          {items.map((it, j) => (
            <li key={j}>{inline(it, k * 100 + j)}</li>
          ))}
        </ol>,
      );
      continue;
    }
    if (line.startsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        const cells = lines[i]
          .split("|")
          .slice(1, -1)
          .map((c) => c.trim());
        if (!cells.every((c) => /^:?-{2,}:?$/.test(c))) rows.push(cells);
        i++;
      }
      if (!rows.length) continue;
      const [head, ...body] = rows;
      blocks.push(
        <div key={k++} className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                {head.map((c, j) => (
                  <th key={j}>{inline(c, j)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((r, j) => (
                <tr key={j}>
                  {r.map((c, jj) => (
                    <td key={jj}>{inline(c, j * 10 + jj)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }
    const p: string[] = [];
    while (i < lines.length && lines[i].trim() && !/^(#{1,4} |> |[-*] |\d+\. |\||!\[)/.test(lines[i])) p.push(lines[i++]);
    blocks.push(<p key={k++}>{inline(p.join(" "), k)}</p>);
  }
  return (
    <div className={className}>
      {blocks.map((b, j) => (
        <Fragment key={j}>{b}</Fragment>
      ))}
    </div>
  );
}
