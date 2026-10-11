import type { NextConfig } from "next";
import { redirectMap } from "./src/lib/redirects";

const nextConfig: NextConfig = {
  trailingSlash: true,
  // Fully static site: the Cache Components model adds Suspense requirements with no benefit here.
  cacheComponents: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      ...redirectMap.map(([source, destination]) => ({ source, destination, permanent: true })),
      { source: "/category/:path*", destination: "/blog/", permanent: true },
      { source: "/tag/:path*", destination: "/blog/", permanent: true },
      { source: "/author/:path*", destination: "/about/", permanent: true },
      { source: "/project-category/:path*", destination: "/projects/", permanent: true },
      { source: "/service-area/main-line/", destination: "/service-area/montgomery-county/", permanent: true },
      { source: "/service-area/:town((?!lancaster-county|berks-county|lebanon-county|york-county|chester-county|delaware-county|montgomery-county)[a-z-]+-pa)/", destination: "/service-area/", permanent: true },
      { source: "/:name(post|page|project|category|local)-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/sitemap_index.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/feed/", destination: "/blog/", permanent: true },
      { source: "/wp-admin/:path*", destination: "/", permanent: false },
      { source: "/wp-json/:path*", destination: "/", permanent: false },
      { source: "/wp-content/:path*", destination: "/projects/", permanent: false },
    ];
  },
  async headers() {
    return [
      // Keep *.vercel.app previews out of Google until the real domain points here.
      {
        source: "/(.*)",
        missing: [{ type: "host", value: "(www\\.)?demakorenovations\\.com" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
