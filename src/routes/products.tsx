import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/Section";

// ─── Quartz brand image card ───────────────────────────────────────────────
//
//  Replace `src` with the actual image path once you have the files, e.g.:
//    src="/images/brands/cambria.png"
//  Leave src as "" to show the stone-texture placeholder.
//
interface BrandCardProps {
  name: string;
  url: string;
  src: string;        // path to logo/swatch image — "" = placeholder
  label: string;      // link label, e.g. "View Colors →"
}

function BrandCard({ name, url, src, label }: BrandCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} — ${label}`}
      style={{ WebkitTapHighlightColor: "transparent" }}
      className="group relative flex flex-col overflow-hidden bg-card border-r border-b border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      {/* ── image area ── */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {src ? (
          <img
            src={src}
            alt={name}
            className="absolute inset-0 h-full w-full object-contain p-6
                       transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)]
                       group-hover:scale-110 group-active:scale-105"
          />
        ) : (
          /* placeholder — remove once real image is added */
          <div className="absolute inset-0 stone-tex grid place-items-center">
            <span className="text-[9px] uppercase tracking-[0.22em] text-white/25 select-none">
              {name}
            </span>
          </div>
        )}

        {/* cyan shimmer overlay on hover */}
        <div
          className="pointer-events-none absolute inset-0
                     bg-gradient-to-br from-primary/0 via-primary/10 to-primary/0
                     opacity-0 transition-opacity duration-300
                     group-hover:opacity-100 group-active:opacity-70"
        />
      </div>

      {/* ── label strip ── */}
      <div className="flex items-center justify-between px-5 py-4 border-t border-border
                      transition-colors duration-200 group-hover:bg-primary/5">
        <span className="font-display text-sm text-foreground
                         transition-colors duration-200 group-hover:text-primary">
          {name}
        </span>
        <span className="text-[9px] uppercase tracking-[0.22em] text-muted-foreground
                         translate-x-0 transition-all duration-200
                         group-hover:text-primary group-hover:translate-x-0.5">
          {label}
        </span>
      </div>
    </a>
  );
}

const TITLE = "Products — Quartz & Granite Distributors | Stone Solutions";
const DESC = "Stone Solutions carries products from leading quartz and granite distributors including Cambria, Caesarstone, Silestone, MSI, HanStone, Wilsonart, Gramaco, and more.";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

// ─── QUARTZ BRANDS ────────────────────────────────────────────────────────────
//  Set `src` to the path of the logo/image you download for each brand.
//  Example: src: "/images/brands/cambria.png"
//  Leave src as "" until you have the file — a placeholder shows instead.
// ─────────────────────────────────────────────────────────────────────────────
const QUARTZ_BRANDS: { name: string; url: string; src: string }[] = [
  { name: "Cambria",            url: "https://www.cambriausa.com/quartz-countertops/quartz-colors",                       src: "/images/brands/C2_IMAGE.png" },
  { name: "Caesarstone",        url: "https://www.caesarstoneus.com/countertops/?material=quartz",                        src: "/images/brands/C_IMAGE.png" },
  { name: "Silestone",          url: "https://www.silestoneusa.com/",                                                     src: "/images/brands/SILE_IMAGE.png" },
  { name: "MSI Surfaces",       url: "https://www.msisurfaces.com/quartz-countertops/quartz-collections/",               src: "/images/brands/MSI_IMAGE.png" },
  { name: "HanStone",           url: "https://www.hanstone.ca/en/quartz/colours-hanstone",                               src: "/images/brands/HANSTONE_IMAGE.png" },
  { name: "Vicostone",          url: "https://umistone.com/products/quartz/vicostone-quartz/",                           src: "/images/brands/C2_IMAGE.png" },
  { name: "Corian Quartz",      url: "https://www.corianquartz.com/-colors-of-quartz-",                                  src: "/images/brands/CORIAN_IMAGE.png" },
  { name: "Wilsonart",          url: "https://www.wilsonart.com/quartz/design-library?product_list_mode=largethumb",     src: "/images/brands/C2_IMAGE.png" },
  { name: "Gramaco Smart Quartz", url: "https://www.gramaco.com/quartz/",                                                src: "/images/brands/GRAM_IMAGE.png" },
  { name: "Technistone",        url: "https://www.technistone.com/usa/color-range/",                                     src: "/images/brands/C2_IMAGE.png" },
];

const GRANITE_BRANDS = [
  { name: "Emerstone", url: "https://emerstone.com/" },
  { name: "Lead Stone USA", url: "https://www.leadstoneusa.com/products.html" },
  { name: "Stone Action", url: "https://stoneaction.net/" },
  { name: "MSI Countertops", url: "https://www.msisurfaces.com/countertops/" },
  { name: "Gramaco", url: "https://www.gramaco.com/products/" },
  { name: "Granite Central", url: "https://granitecentral.smugmug.com/" },
] as const;

function ProductsPage() {
  return (
    <>
      <Section className="border-b border-border">
        <Eyebrow>Granite &amp; Quartz Distributors</Eyebrow>
        <h1 className="mt-4 font-display text-5xl md:text-7xl">Products</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          We have majority of samples on hand, but with our interactive display, you can easily
          access each brand's website to see their full color selection. Come visit our showroom
          at 9341 Philadelphia Rd, Suite K-L, Rosedale, MD 21237.
        </p>
      </Section>

      {/* Quartz */}
      <Section className="border-b border-border">
        <div className="mb-10">
          <Eyebrow>Product Website Links</Eyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Quartz Brands</h2>
          <p className="mt-4 text-muted-foreground">
            Engineered quartz — non-porous, consistent color, never needs sealing.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-border">
          {QUARTZ_BRANDS.map((b) => (
            <BrandCard key={b.name} name={b.name} url={b.url} src={b.src} label="View Colors →" />
          ))}
        </div>
      </Section>

      {/* Granite */}
      <Section className="border-b border-border">
        <div className="mb-10">
          <Eyebrow>Granite &amp; Natural Stone</Eyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Granite Distributors</h2>
          <p className="mt-4 text-muted-foreground">
            Hand-selected natural slabs — one-of-a-kind movement and lifetime durability.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border">
          {GRANITE_BRANDS.map((b) => (
            <a
              key={b.name}
              href={b.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-background p-8 flex flex-col justify-between hover:bg-card transition-colors"
            >
              <span className="font-display text-lg group-hover:text-primary transition-colors">{b.name}</span>
              <span className="mt-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground group-hover:text-primary transition-colors">View Products →</span>
            </a>
          ))}
        </div>
      </Section>

      {/* Showroom info */}
      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow>Interactive Showroom</Eyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Visit Our Showroom</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Our showroom features an interactive display with sample towers from all major brands.
              We carry a majority of samples on hand — come in and see the colors in person before
              you decide.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We also have a sink display and can show you integrated sink options for solid
              surface countertops.
            </p>
            <div className="mt-8 space-y-2 text-sm">
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Showroom Location</div>
              <div className="text-base">9341 Philadelphia Rd, Suite K-L<br />Rosedale, MD 21237</div>
              <div className="mt-4">
                <a href="tel:+14102741953" className="text-primary hover:opacity-80">(410) 274-1953</a>
              </div>
            </div>
          </div>
          <div className="border border-border p-10 space-y-6">
            <h3 className="font-display text-2xl">What We Carry</h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              {[
                "Quartz countertop samples from 10+ brands",
                "Granite and natural stone selection",
                "Solid surface options — Corian, Wilsonart",
                "Sink display for integrated sink options",
                "Edge profile samples",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-primary">→</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
