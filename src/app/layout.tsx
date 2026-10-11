import type { Metadata } from "next";
import Script from "next/script";
import { Archivo, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { RevealObserver } from "@/components/RevealObserver";
import { OrgSchema } from "@/components/Schema";
import { site } from "@/lib/site";

// Archivo with its width axis for headings (the stretched lettering of a lumber stamp), Instrument Sans for text,
// IBM Plex Mono for the place-and-date stamps on photos.
const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"], weight: "variable", axes: ["wdth"], display: "swap" });
const instrument = Instrument_Sans({ variable: "--font-instrument", subsets: ["latin"], weight: "variable", style: ["normal", "italic"], display: "swap" });
const plexMono = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin"], weight: ["400", "500"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Siding, Windows & Finish Carpentry, PA`,
    template: `%s | ${site.name}`,
  },
  description:
    "Carpentry and renovation crew from Ephrata, PA: siding, windows, doors, AZEK trim, porches, built-ins and finish carpentry across Lancaster, Chester, Delaware and Montgomery Counties.",
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Stone gambrel house with new dormers and porch by D&E Mako Renovation" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${instrument.variable} ${plexMono.variable} h-full`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col bg-paper text-ink-soft">
        <Script id="js-anim" strategy="beforeInteractive">
          {"document.documentElement.classList.add('js-anim')"}
        </Script>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileBar />
        <RevealObserver />
        <OrgSchema />
      </body>
    </html>
  );
}
