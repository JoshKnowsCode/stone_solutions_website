import { createFileRoute } from "@tanstack/react-router";

const BASE = "https://www.stonesolutionsmd.com";

const ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/products", priority: "0.8", changefreq: "monthly" },
  { path: "/services", priority: "0.9", changefreq: "monthly" },
  { path: "/contact", priority: "0.9", changefreq: "monthly" },
  { path: "/faq", priority: "0.6", changefreq: "monthly" },
];

export const Route = createFileRoute("/sitemap.xml")({
  loader: async () => {
    const now = new Date().toISOString().split("T")[0];
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map((r) => `  <url>
    <loc>${BASE}${r.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join("\n")}
</urlset>`;
    return new Response(xml, { headers: { "Content-Type": "application/xml" } });
  },
});
