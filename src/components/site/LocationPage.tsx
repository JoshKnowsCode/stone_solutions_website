import { Link } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/Section";
import { ImageSlot } from "@/components/site/ImageSlot";
import { QuoteForm } from "@/components/site/QuoteForm";
import { MapPin, Check } from "lucide-react";

export interface LocationContent {
  slug: string;
  city: string;
  metaTitle: string;
  metaDesc: string;
  intro: string;
  neighborhoods: string[];
  highlights: string[];
}

export const LOCATIONS: Record<string, LocationContent> = {
  baltimore: {
    slug: "baltimore",
    city: "Baltimore",
    metaTitle: "Granite & Quartz Countertops Baltimore, MD | Stone Solutions",
    metaDesc: "Custom countertop installation in Baltimore, MD. Granite, quartz, and solid surface fabrication for rowhomes, condos, and historic renovations citywide.",
    intro: "From Federal Hill rowhomes to Roland Park estates, we've installed thousands of stone surfaces across Baltimore City. Our crews navigate tight stairwells and historic constraints with the same precision we bring to new construction.",
    neighborhoods: ["Federal Hill", "Canton", "Roland Park", "Mt. Vernon", "Hampden", "Locust Point"],
    highlights: [
      "Specialists in narrow rowhome installs",
      "Historic-renovation experience",
      "Same-week templating across Baltimore City",
    ],
  },
  rosedale: {
    slug: "rosedale",
    city: "Rosedale",
    metaTitle: "Countertops Rosedale, MD | Stone Solutions Showroom & Shop",
    metaDesc: "Visit Stone Solutions at 9341 Philadelphia Rd, Suite K-L in Rosedale, MD. Quartz, granite, and solid surface countertops fabricated on-site. Call (410) 274-1953.",
    intro: "Our shop and showroom sit on Philadelphia Road in Rosedale — the heart of eastern Baltimore County. Walk in any weekday to view slabs, browse samples from Cambria, Caesarstone, MSI, and more, and meet the team that will fabricate your project.",
    neighborhoods: ["Overlea", "Parkville", "Essex", "Middle River", "White Marsh", "Nottingham"],
    highlights: [
      "Local showroom with full-slab viewing",
      "Same-day quote turnaround for Rosedale residents",
      "Trusted by Baltimore County GCs and designers since 2011",
    ],
  },
  essex: {
    slug: "essex",
    city: "Essex",
    metaTitle: "Countertop Installation Essex, MD | Stone Solutions",
    metaDesc: "Quartz, granite, and solid surface countertops installed across Essex, MD. Free in-home estimates from our nearby Rosedale shop.",
    intro: "Essex is right next door to our Rosedale shop. From Eastern Boulevard remodels to waterfront kitchens, our crews template and install fast — without sacrificing the craftsmanship our Baltimore County clients expect.",
    neighborhoods: ["Middle River", "Chase", "Bowleys Quarters", "Hawthorne"],
    highlights: [
      "Same-week templating across Essex",
      "Local crews — no out-of-state subcontractors",
      "Honest, transparent Time + Materials pricing",
    ],
  },
  "white-marsh": {
    slug: "white-marsh",
    city: "White Marsh",
    metaTitle: "Countertops White Marsh MD | Granite & Quartz Installation",
    metaDesc: "White Marsh, MD countertop fabricators. Custom kitchens, baths, and additions installed throughout the 21162 corridor.",
    intro: "White Marsh's mix of new construction and established communities calls for stone work that fits both modern builds and classic remodels. We handle everything from builder packages to one-off luxury kitchens.",
    neighborhoods: ["Perry Hall", "Honeygo", "Nottingham", "Kingsville"],
    highlights: [
      "Builder & GC trade pricing available",
      "Coordinated installs with your cabinet team",
      "Quick turnaround for White Marsh remodels",
    ],
  },
  towson: {
    slug: "towson",
    city: "Towson",
    metaTitle: "Granite & Quartz Countertops Towson, MD | Stone Solutions",
    metaDesc: "High-end stone fabrication and installation across Towson, MD. Quartz islands, granite vanities, and full-kitchen renovations.",
    intro: "Towson's blend of mid-century homes and high-end renovations is right in our wheelhouse. We've installed flagship kitchens for some of the area's most ambitious remodels.",
    neighborhoods: ["Rodgers Forge", "Anneslie", "Stoneleigh", "Riderwood", "Loch Raven"],
    highlights: [
      "Designer-friendly project management",
      "Quartz and granite specialists",
      "Concierge install scheduling for occupied homes",
    ],
  },
  dundalk: {
    slug: "dundalk",
    city: "Dundalk",
    metaTitle: "Countertop Installation Dundalk, MD",
    metaDesc: "Affordable, premium-quality granite and quartz installation in Dundalk, MD. Local fabrication, fair pricing, lifetime craftsmanship.",
    intro: "Right next door to our Rosedale shop. Dundalk homeowners get fast templating, fair pricing, and the same craftsmanship we bring to our luxury Towson and Bel Air installs.",
    neighborhoods: ["Edgemere", "Sparrows Point", "Turners Station"],
    highlights: [
      "Fast turnaround for Dundalk projects",
      "Honest, transparent pricing",
      "Local crews — no out-of-state subcontractors",
    ],
  },
  "bel-air": {
    slug: "bel-air",
    city: "Bel Air",
    metaTitle: "Granite & Quartz Countertops Bel Air, MD | Harford County",
    metaDesc: "Bel Air, MD countertop specialists. Premium quartz, granite, and solid surface for Harford County homes and estates.",
    intro: "Serving Bel Air and the wider Harford County corridor with premium stone fabrication for executive homes, estates, and bespoke renovations.",
    neighborhoods: ["Forest Hill", "Fallston", "Abingdon", "Jarrettsville"],
    highlights: [
      "Estate-scale kitchens and butler's pantries",
      "Outdoor kitchen specialists",
      "White-glove install for occupied homes",
    ],
  },
};

export function LocationPage({ l }: { l: LocationContent }) {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow><MapPin className="inline size-3 mr-1" /> Service Area</Eyebrow>
            <h1 className="mt-4 font-display text-5xl md:text-6xl leading-[1]">
              Countertops in <span className="text-primary italic">{l.city}, MD</span>
            </h1>
            <p className="mt-8 text-lg text-foreground/75 leading-relaxed">{l.intro}</p>
            <div className="mt-10 flex gap-4">
              <Link to="/contact" className="bg-primary text-primary-foreground px-8 py-4 text-[11px] uppercase tracking-[0.22em] font-medium">Free {l.city} Estimate</Link>
              <a href="tel:+14102741953" className="border border-foreground/30 px-8 py-4 text-[11px] uppercase tracking-[0.22em] hover:border-primary hover:text-primary transition-colors">(410) 274-1953</a>
            </div>
          </div>
          <ImageSlot label={`${l.city} Project Photo`} ratio="aspect-[4/5]" />
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <Eyebrow>Why local matters</Eyebrow>
            <h2 className="mt-4 font-display text-4xl">Working in {l.city}</h2>
            <ul className="mt-8 space-y-4">
              {l.highlights.map((h) => (
                <li key={h} className="flex gap-3"><Check className="size-5 text-primary shrink-0 mt-1" /><span>{h}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>Neighborhoods served</Eyebrow>
            <h2 className="mt-4 font-display text-4xl">In & around {l.city}</h2>
            <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
              {l.neighborhoods.map((n) => (
                <div key={n} className="border-b border-border py-3">{n}</div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-16">
          <div>
            <Eyebrow>Local quotes</Eyebrow>
            <h2 className="mt-4 font-display text-4xl">Free in-home estimate in {l.city}.</h2>
            <p className="mt-6 text-muted-foreground max-w-md">We'll measure, template, and quote your project at no cost. Most {l.city} estimates are scheduled within 48 hours.</p>
          </div>
          <div className="bg-background border border-border p-8 md:p-10">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
