import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/Section";
import { ImageSlot } from "@/components/site/ImageSlot";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

const TITLE = "Services — Stone Solutions, LLC | Countertops, Repairs & More";
const DESC = "Stone Solutions offers countertop fabrication, repairs, maintenance, and special projects for residential and commercial customers across Maryland.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const GALLERY_ITEMS = [
  { label: "Residential Kitchen · Quartz", ratio: "aspect-video", tag: "Residential" },
  { label: "Granite Bar Top", ratio: "aspect-[3/4]", tag: "Residential" },
  { label: "Commercial Bar", ratio: "aspect-video", tag: "Commercial" },
  { label: "Bathroom Vanity", ratio: "aspect-[3/4]", tag: "Residential" },
] as const;

function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <Section className="border-b border-border">
        <Eyebrow>What We Offer</Eyebrow>
        <h1 className="mt-4 font-display text-5xl md:text-7xl">Services</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          From custom countertop fabrication to specialty repairs, Stone Solutions handles every
          stone project with the same level of quality and detail.
        </p>
      </Section>

      {/* GALLERY */}
      <Section className="border-b border-border">
        <div className="mb-12">
          <h2 className="font-display text-4xl md:text-5xl">Gallery</h2>
          <p className="mt-3 text-muted-foreground">Check out some of our recent work — residential and commercial!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-7">
            <ImageSlot label={GALLERY_ITEMS[0].label} ratio={GALLERY_ITEMS[0].ratio} />
            <div className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              <span>01 · {GALLERY_ITEMS[0].label}</span><span>{GALLERY_ITEMS[0].tag}</span>
            </div>
          </div>
          <div className="md:col-span-5">
            <ImageSlot label={GALLERY_ITEMS[1].label} ratio={GALLERY_ITEMS[1].ratio} />
            <div className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              <span>02 · {GALLERY_ITEMS[1].label}</span><span>{GALLERY_ITEMS[1].tag}</span>
            </div>
          </div>
          <div className="md:col-span-5">
            <ImageSlot label={GALLERY_ITEMS[2].label} ratio={GALLERY_ITEMS[2].ratio} />
            <div className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              <span>03 · {GALLERY_ITEMS[2].label}</span><span>{GALLERY_ITEMS[2].tag}</span>
            </div>
          </div>
          <div className="md:col-span-7">
            <ImageSlot label={GALLERY_ITEMS[3].label} ratio={GALLERY_ITEMS[3].ratio} />
            <div className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              <span>04 · {GALLERY_ITEMS[3].label}</span><span>{GALLERY_ITEMS[3].tag}</span>
            </div>
          </div>
        </div>
      </Section>

      {/* COUNTERTOPS SERVICE */}
      <Section className="border-b border-border">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <Eyebrow>Countertops</Eyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Custom Countertop Services</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              From design support to final installation, we handle every step in-house at our
              Rosedale shop. No subcontracting, no surprises.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Design Support for Your Project",
                "Template Over Old Countertops",
                "Custom Fabrication of New Countertops",
                "Removal and Disposal of Old Countertops",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-base">
                  <span className="text-primary mt-1">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <ImageSlot label="Countertop Installation" ratio="aspect-[4/5]" />
        </div>
      </Section>

      {/* OTHER SERVICES GRID */}
      <Section className="border-b border-border">
        <h2 className="font-display text-4xl md:text-5xl mb-12">Other Repairs &amp; Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Maintenance */}
          <div className="border border-border p-8">
            <h3 className="font-display text-2xl mb-4">Maintenance</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              {[
                "Granite Countertop Maintenance",
                "Sealing Granite Countertops",
                "Recaulk Backsplash",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-primary text-xs mt-1">▸</span>{item}
                </li>
              ))}
            </ul>
          </div>
          {/* Repairs */}
          <div className="border border-border p-8">
            <h3 className="font-display text-2xl mb-4">Repairs</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              {[
                "Re-Level Countertops",
                "Seam/Joint Repairs and Leveling",
                "Stain Removal Treatments",
                "Edge Refinishing",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-primary text-xs mt-1">▸</span>{item}
                </li>
              ))}
            </ul>
          </div>
          {/* Special Projects */}
          <div className="border border-border p-8">
            <h3 className="font-display text-2xl mb-4">Special Projects</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              {[
                "Laminated Profiles",
                "Commercial Building Projects",
                "Custom Memorials",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-primary text-xs mt-1">▸</span>{item}
                </li>
              ))}
            </ul>
          </div>
          {/* Trim */}
          <div className="border border-border p-8 md:col-span-3">
            <h3 className="font-display text-2xl mb-4">Trim &amp; Modifications</h3>
            <ul className="grid md:grid-cols-3 gap-2 text-muted-foreground text-sm">
              {[
                "Trim Countertops",
                "Drill Additional Holes",
                "Modify/Adjust Cut Outs",
                "And Much More…",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-primary text-xs mt-1">▸</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <Eyebrow>Ready to start?</Eyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Get a free estimate today.</h2>
          <p className="mt-6 text-muted-foreground">
            No job is too small, too large, or too complicated. Contact us and we'll get back to
            you within 24–48 hours, Monday–Friday.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 bg-primary px-10 py-4 text-[11px] uppercase tracking-[0.22em] font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Contact Us <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
