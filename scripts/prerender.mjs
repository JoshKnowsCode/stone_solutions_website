import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const ROUTES = ["/", "/about", "/products", "/services", "/contact", "/faq"];
const OUT = "dist/client";

const { default: handler } = await import("../dist/server/server.js");

async function fetchPage(path) {
  const req = new Request(`http://localhost${path}`, {
    method: "GET",
    headers: { accept: "text/html" },
  });
  const res = await handler.fetch(req, {}, { waitUntil: () => {} });
  return res.text();
}

for (const route of ROUTES) {
  try {
    const html = await fetchPage(route);
    const dir = route === "/" ? OUT : join(OUT, route);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "index.html"), html);
    console.log(`✓ ${route}`);
  } catch (e) {
    console.error(`✗ ${route}:`, e.message);
  }
}
