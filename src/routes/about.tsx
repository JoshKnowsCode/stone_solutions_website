import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/Section";
import { ImageSlot } from "@/components/site/ImageSlot";

const TITLE = "About — Stone Solutions, LLC | Founded 2011 in Rosedale, MD";
const DESC = "Stone Solutions, LLC was founded in 2011 by Chris Byrley (NCIDQ Certified). Quartz, granite, and solid surface countertop specialists serving the greater Baltimore–Washington area, Southern PA, and Northern VA.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section className="border-b border-border">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>Our Story</Eyebrow>
            <h1 className="mt-4 font-display text-5xl md:text-6xl leading-[1]">
              Honest pricing. <span className="italic text-primary">Unmatched quality.</span>
            </h1>
            <p className="mt-8 text-lg text-foreground/75 leading-relaxed">
              Stone Solutions, LLC was founded in 2011 by Chris Byrley, an NCIDQ-certified stone
              specialist with over 20 years of experience in design, fabrication, and installation.
              From our Rosedale, MD shop we proudly serve the greater Baltimore–Washington area,
              Southern Pennsylvania, and Northern Virginia.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              We set our standards high and believe attention to even the tiniest details is what
              makes a difference in customer satisfaction. Our motto says it best:{" "}
              <em className="text-foreground/90 not-italic">"Discount the price, not the quality."</em>{" "}
              We won't nickel &amp; dime you with surprise charges — we use honest, upfront Time +
              Materials billing so the price you're quoted is the price you pay.
            </p>
          </div>
          <ImageSlot label="The Shop · Rosedale, MD" ratio="aspect-[4/5]" />
        </div>
      </Section>

      {/* Company Profile */}
      <Section className="border-b border-border">
        <Eyebrow>Company Profile</Eyebrow>
        <h2 className="mt-4 font-display text-4xl md:text-5xl mb-12">Stone Solutions, LLC</h2>
        <div className="grid md:grid-cols-4 gap-10">
          {[
            { v: "2011", l: "Founded in Rosedale" },
            { v: "Chris Byrley", l: "Owner · NCIDQ Certified" },
            { v: "20+ Years", l: "Stone Experience" },
            { v: "Licensed & Insured", l: "Residential & Commercial" },
          ].map((s) => (
            <div key={s.l} className="border-l-2 border-primary pl-6">
              <div className="font-display text-3xl">{s.v}</div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Making it your choice + Safety First */}
      <Section className="border-b border-border">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="border border-border p-8">
            <h3 className="font-display text-2xl">Making it your choice for all projects — big or small</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              From removing your old countertops to installing your beautiful new countertops, no
              job is too big or small for us. We provide the same level of detail to all projects;
              no matter the size.
            </p>
          </div>
          <div className="border border-border p-8">
            <h3 className="font-display text-2xl">Safety first</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Stone Solutions takes the safety of our customers very seriously. We perform
              comprehensive background checks on all of our employees. We are licensed and insured
              so you can feel confident having us in your home.
            </p>
          </div>
          <div className="border border-border p-8">
            <h3 className="font-display text-2xl">Doing it right from start to finish</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Many stone fabricators say they can do custom countertops, but what really matters is
              getting it done right from start to finish. Whether it's a bathroom vanity or a
              gourmet kitchen, choose the professional stone fabricators qualified to do the job:
              Stone Solutions.
            </p>
          </div>
          <div className="border border-border p-8">
            <h3 className="font-display text-2xl">Honest and upfront pricing</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We perform all work using an honest, upfront pricing format. Our Time + Materials
              billing ensures that you pay a fair competitive price, not an inflated estimate.
            </p>
          </div>
        </div>
      </Section>

      {/* We Are All About */}
      <Section>
        <Eyebrow>We are all about…</Eyebrow>
        <h2 className="mt-4 font-display text-4xl md:text-5xl mb-12">Customer satisfaction</h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Stone Solutions, LLC understands that customer satisfaction starts with arriving at
              your home on time. You won't have to interrupt your day, wasting valuable time
              waiting on us. Our on-time record is second to none, and we arrive ready to work.
            </p>
            <p>
              Our technicians will treat you with courtesy and always make sure the work areas are
              clean when the job is complete.
            </p>
            <blockquote className="border-l-2 border-primary pl-6 font-display text-xl text-foreground italic">
              "Our mission is to offer our residential and business customers professional,
              reliable, and top quality countertop installations and services."
            </blockquote>
          </div>
          <ImageSlot label="Customer Satisfaction · Team at Work" ratio="aspect-[4/5]" />
        </div>
      </Section>
    </>
  );
}
