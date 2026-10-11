import Link from "next/link";
import { site } from "@/lib/site";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-night p-2 md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a href={site.phoneHref} className="flex items-center justify-center gap-2 rounded-pill bg-white/10 py-3 text-[0.92rem] font-bold text-white">
          Call
        </a>
        <a href={site.smsHref} className="flex items-center justify-center gap-2 rounded-pill bg-white/10 py-3 text-[0.92rem] font-bold text-white">
          Text
        </a>
        <Link href="/contact/" className="flex items-center justify-center rounded-pill bg-tan py-3 text-[0.92rem] font-bold text-night">
          Free estimate
        </Link>
      </div>
    </div>
  );
}
