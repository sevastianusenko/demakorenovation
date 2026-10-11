import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "tan" | "white" | "dark" | "outline-light" | "outline";

const base =
  "inline-flex items-center justify-center gap-3 rounded-pill font-body font-bold text-[0.97rem] leading-none py-2 pl-6 pr-2 transition-colors duration-200 whitespace-nowrap select-none";

// Dark text on tan: the old site's white-on-tan was 2.6:1, near-black passes AA (7.9:1) and the siding pages already used it.
const variants: Record<Variant, string> = {
  tan: "bg-tan text-night hover:bg-tan-deep",
  white: "bg-white text-night hover:bg-beige",
  dark: "bg-night text-white hover:bg-coal",
  "outline-light": "border-2 border-beige text-white hover:bg-white hover:text-night",
  outline: "border-2 border-night text-night hover:bg-night hover:text-white",
};

const circle: Record<Variant, string> = {
  tan: "bg-white text-night",
  white: "bg-night text-white",
  dark: "bg-tan text-night",
  "outline-light": "bg-white text-night",
  outline: "bg-night text-white group-hover:bg-white group-hover:text-night",
};

export function ArrowIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" aria-hidden="true">
      <path d="M2 7h10M8 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Pill button from the old site: tan with a white arrow circle on the right. `arrow={false}` for a plain pill. */
export function Button({
  href,
  children,
  variant = "tan",
  arrow = true,
  className = "",
  ...rest
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
} & Record<string, unknown>) {
  const cls = `group ${base} ${variants[variant]} ${arrow ? "" : "!px-6 py-3.5"} ${className}`;
  const inner = (
    <>
      <span className={arrow ? "py-1.5" : ""}>{children}</span>
      {arrow && (
        <span className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${circle[variant]}`}>
          <ArrowIcon />
        </span>
      )}
    </>
  );
  if (href) {
    const external = /^(https?:|tel:|mailto:|sms:)/.test(href);
    if (external) {
      const web = href.startsWith("http");
      return (
        <a href={href} className={cls} {...(web ? { target: "_blank", rel: "noopener" } : {})} {...rest}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...rest}>
        {inner}
      </Link>
    );
  }
  return (
    <button type="submit" className={cls} {...rest}>
      {inner}
    </button>
  );
}

/** Underlined text link with a round black arrow, like "Get in touch" on the old feature cards. */
export function ArrowLink({ href, children, light = false, className = "" }: { href: string; children: ReactNode; light?: boolean; className?: string }) {
  return (
    <Link href={href} className={`group inline-flex items-center gap-3 font-bold underline decoration-2 underline-offset-4 ${light ? "text-white decoration-beige" : "text-ink decoration-tan"} ${className}`}>
      <span>{children}</span>
      <span aria-hidden="true" className={`inline-flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-1 ${light ? "bg-white text-night" : "bg-night text-white"}`}>
        <ArrowIcon size={12} />
      </span>
    </Link>
  );
}
