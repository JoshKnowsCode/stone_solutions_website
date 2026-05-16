import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/Section";

const TITLE = "FAQ — Countertop Installation Questions | Stone Solutions";
const DESC = "Common questions about quartz, granite, and solid surface countertop fabrication, installation timelines, pricing, and care in Maryland.";

const FAQ = [
  { q: "How much do new countertops cost in Maryland?", a: "Pricing varies by material, edge profile, and slab selection. We use honest, upfront Time + Materials billing — no surprise fees — and provide a detailed line-item quote after templating. Our motto: discount the price, not the quality." },
  { q: "How long does the process take?", a: "From signed estimate to install, most residential projects take 2–3 weeks. Templating happens once cabinets are set; install is typically 7–10 days after templating." },
  { q: "Do you handle removal and disposal of my old countertops?", a: "Yes. Removal and disposal of old countertops, custom fabrication of the new tops, and installation are all included. We can also template over old countertops when needed." },
  { q: "What materials do you offer?", a: "Quartz, granite, and solid surface countertops from leading brands including Cambria, Caesarstone, Silestone, Corian, MSI, HanStone, Wilsonart, Vicostone, Technistone, and Gramaco." },
  { q: "Do you do repairs and maintenance?", a: "Yes — we specialize in repairs many other companies can't offer: seam and joint repair, re-leveling, sealing granite, recaulking backsplashes, edge refinishing, stain removal, trim cuts, additional drill holes, and cut-out modifications." },
  { q: "Do you serve commercial projects?", a: "Yes. We handle commercial building projects, custom memorials, laminated profiles, and design support — partnering with GCs, designers, and developers across Maryland, DC, Southern PA, and Northern VA." },
  { q: "What areas do you serve?", a: "Our shop is in Rosedale, MD. We proudly serve the greater Baltimore–Washington area, Southern Pennsylvania, and Northern Virginia." },
  { q: "Are you licensed and insured?", a: "Yes. Stone Solutions, LLC is fully licensed and insured, and we perform comprehensive background checks on every employee for your peace of mind." },
] as const;

const FAQ_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{ type: "application/ld+json", children: FAQ_LD }],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <Section>
      <Eyebrow>Frequently asked</Eyebrow>
      <h1 className="mt-4 font-display text-5xl md:text-7xl">Questions, answered.</h1>
      <div className="mt-16 max-w-3xl divide-y divide-border">
        {FAQ.map((f) => (
          <details key={f.q} className="group py-6">
            <summary className="cursor-pointer list-none flex justify-between items-start gap-4 text-xl font-display">
              {f.q}
              <span className="text-primary text-2xl leading-none transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
