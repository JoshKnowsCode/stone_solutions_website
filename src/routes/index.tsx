import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, ArrowUpRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/site/Section";
import { ImageSlot } from "@/components/site/ImageSlot";
import { QuoteForm } from "@/components/site/QuoteForm";
import heroLogo from "@/assets/hero-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Quartz Countertops, Granite Countertops - Stone Solutions - Rosedale, Md" },
      { name: "description", content: "Quality granite and quartz countertops in Rosedale. Call now for a free estimate." },
      { property: "og:title", content: "Quartz Countertops, Granite Countertops - Stone Solutions - Rosedale, Md" },
      { property: "og:description", content: "Quality granite and quartz countertops in Rosedale. Call now for a free estimate." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
}));

const TESTIMONIALS = [
  {
    q: "Great business! I picked a difficult pattern quartz that the flow pattern needed to follow a cohesive direction on counter and matching backsplash. It looks beautiful and dramatic, thanks!",
    who: "K.H.",
  },
  {
    q: "I stopped in to look around for a small piece of granite for a bar we created in our home. Chris and his staff were very welcoming and he took the time to show us everything he had that would work for our project. He was able to get us finished within a week. I would recommend anyone that asks to definitely give them a try.",
    who: "C.S.",
  },
] as const;

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0">
          <ImageSlot label="Hero · Premium Kitchen Photo" ratio="aspect-auto h-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <Eyebrow>Rosedale, MD · Est. 2011</Eyebrow>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95]">
              Quartz Countertops <span className="italic text-primary">in Rosedale.</span>
            </h1>
            <p className="mt-8 text-lg text-foreground/75 max-w-xl leading-relaxed">
              We set our standards high and believe that paying attention to even the tiniest of
              details is what makes a difference in customer satisfaction. Our prices are very
              competitive and our motto is,{" "}
              <em className="text-foreground/90 not-italic">"Discount the price, not the quality."</em>
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Stone Solutions is your #1 source for the finest quartz, granite, and solid surface
              countertops, products, &amp; services. No job is too small, too large, or too
              complicated. Every job is treated with the same level of quality and detail. We
              proudly serve the Greater Baltimore–Washington areas, Southern Pennsylvania, and
              Northern Virginia.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary px-8 py-4 text-[11px] uppercase tracking-[0.22em] font-medium text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Get Free Estimate <ArrowUpRight className="size-4" />
              </Link>
              <a
                href="tel:+14102741953"
                className="inline-flex items-center gap-2 border border-foreground/30 px-8 py-4 text-[11px] uppercase tracking-[0.22em] hover:border-primary hover:text-primary transition-colors"
              >
                Call (410) 274-1953
              </a>
            </div>
            <div className="mt-12 flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1 text-primary">
                {[1,2,3,4,5].map(i => <Star key={i} className="size-4 fill-current" />)}
              </div>
              <span className="uppercase tracking-[0.2em]">Trusted across Baltimore County since 2011</span>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <img
              src={heroLogo}
              alt="Stone Solutions, LLC emblem"
              className="w-full max-w-md h-auto object-contain drop-shadow-[0_20px_60px_rgba(56,189,248,0.25)]"
            />
          </div>
        </div>
      </section>

      {/* WE ARE READY — Our Services */}
      <Section className="border-b border-border">
        <div className="text-center mb-14">
          <Eyebrow>Our Services</Eyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">We Are Ready</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { to: "/services", title: "Countertops", copy: "Custom fabrication, removal of old tops, and professional installation — every time." },
            { to: "/services", title: "Repairs", copy: "Seam/joint repair, re-leveling, stain removal, edge refinishing, and much more." },
            { to: "/services", title: "Maintenance", copy: "Granite sealing, recaulking backsplashes, and ongoing countertop care." },
            { to: "/services", title: "Special Projects", copy: "Laminated profiles, commercial buildings, custom memorials, and design support." },
          ].map((s) => (
            <Link key={s.title} to={s.to} className="group block border border-border p-8 hover:border-primary transition-colors">
              <div className="flex items-start justify-between gap-3 mb-4">
                <h3 className="font-display text-2xl">{s.title}</h3>
                <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-primary transition-colors mt-1 shrink-0" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.copy}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS — What Clients Say */}
      <section className="bg-card border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl">What Clients Say About Us</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {TESTIMONIALS.map((t) => (
              <figure key={t.who} className="space-y-6 border border-border p-8">
                <div className="flex gap-1 text-primary">
                  {[1,2,3,4,5].map(i => <Star key={i} className="size-4 fill-current" />)}
                </div>
                <blockquote className="font-display text-xl leading-snug">"{t.q}"</blockquote>
                <figcaption className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                  — {t.who}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-14 max-w-3xl mx-auto text-center border-t border-border pt-14">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stone Solutions is your #1 source for the finest quartz, granite, and solid surface
              countertops, products, &amp; services. No job is too small, too large, or too
              complicated. Every job is treated with the same level of quality and detail. We
              proudly serve the Greater Baltimore–Washington areas, Southern Pennsylvania, and
              Northern Virginia.
            </p>
          </div>
        </div>
      </section>

      {/* WHY WE'RE DIFFERENT */}
      <Section className="border-b border-border">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow>What's Important to Us</Eyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Why We're Different</h2>
            <p className="mt-8 text-lg text-foreground/75 leading-relaxed">
              With over 20 years of experience in every aspect of stone design, fabrication, and
              installation you can be confident that your price will be fair and your kitchen or
              bath will look amazing!
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Our extensive training and on the job experiences allow us to specialize in repairs
              that many other companies simply cannot offer. Whatever your project, Stone Solutions
              is the right solution!
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { v: "Est. 2011", l: "Founded in Rosedale" },
                { v: "20+ Yrs", l: "Stone Experience" },
                { v: "5.0★", l: "Client Reviews" },
                { v: "Licensed &\u00A0Insured", l: "Residential & Commercial" },
              ].map((s) => (
                <div key={s.l} className="border-l-2 border-primary pl-5">
                  <div className="font-display text-2xl">{s.v}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <ImageSlot label="Why We're Different · Shop Photo" ratio="aspect-[4/5]" />
        </div>
      </Section>

      {/* WHO WE ARE — Meet the Team */}
      <Section className="border-b border-border">
        <div className="text-center mb-14">
          <Eyebrow>Meet the Team</Eyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Who We Are</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "Owner-operated", body: "Founded by Chris Byrley, NCIDQ Certified, with over 20 years of stone design, fabrication, and installation experience — serving Maryland since 2011." },
            { title: "In-house fabrication", body: "Every countertop is templated, cut, and finished in our Rosedale, MD shop on Philadelphia Road. We never subcontract our craft." },
            { title: "Background-checked team", body: "Stone Solutions takes the safety of our customers very seriously. We perform comprehensive background checks on all employees. Licensed and insured." },
          ].map(({ title, body }) => (
            <div key={title} className="border border-border p-8">
              <h3 className="font-display text-2xl">{title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 max-w-2xl mx-auto text-center">
          <p className="text-base text-muted-foreground leading-relaxed italic">
            "Our mission is to offer our residential and business customers professional, reliable,
            and top quality countertop installations and services."
          </p>
        </div>
      </Section>

      {/* GALLERY TEASER */}
      <Section className="border-b border-border">
        <div className="mb-12">
          <Eyebrow>Recent Work</Eyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">From Our Shop</h2>
          <p className="mt-4 text-muted-foreground">Residential and commercial projects across the Baltimore metro.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-7">
            <ImageSlot label="Quartz Kitchen · Residential" ratio="aspect-video" />
            <div className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              <span>01 · Pattern-Matched Quartz</span><span>Residential</span>
            </div>
          </div>
          <div className="md:col-span-5">
            <ImageSlot label="Custom Granite Bar" ratio="aspect-[3/4]" />
            <div className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              <span>02 · Granite Bar Top</span><span>Residential</span>
            </div>
          </div>
          <div className="md:col-span-12">
            <ImageSlot label="Commercial Install" ratio="aspect-[21/9]" />
            <div className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              <span>03 · Commercial Project</span><span>Baltimore Metro</span>
            </div>
          </div>
        </div>
      </Section>

      {/* QUOTE CTA */}
      <section id="quote" className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-16">
          <div>
            <Eyebrow>Start your project</Eyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
              Free, no-obligation estimates.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              Tell us about your space — kitchen, bath, or commercial. Our team will reach
              out within 24–48 hours M–F to schedule your in-home consultation and template.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              <div><span className="text-primary">Office</span><br/><a href="tel:+14102741953" className="text-foreground normal-case tracking-normal text-base">(410) 274-1953</a></div>
              <div><span className="text-primary">Sales</span><br/><a href="tel:+14436003623" className="text-foreground normal-case tracking-normal text-base">(443) 600-3623</a></div>
              <div><span className="text-primary">Email</span><br/><a href="mailto:sales@stonesolutionsmd.com" className="text-foreground normal-case tracking-normal text-base">sales@stonesolutionsmd.com</a></div>
              <div><span className="text-primary">Shop</span><br/><span className="text-foreground normal-case tracking-normal text-base">9341 Philadelphia Rd, Ste K-L<br/>Rosedale, MD 21237</span></div>
            </div>
          </div>
          <div className="bg-background border border-border p-8 md:p-10">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
