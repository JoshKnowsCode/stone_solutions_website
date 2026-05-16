import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow } from "@/components/site/Section";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const TITLE = "Contact Us — Free Estimate | Stone Solutions, LLC";
const DESC = "Request a free estimate. Stone Solutions, LLC · 9341 Philadelphia Rd, Suite K-L, Rosedale, MD 21237. Office (410) 274-1953 · Sales (443) 600-3623.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Section className="border-b border-border">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <Eyebrow>Get in Touch</Eyebrow>
            <h1 className="mt-4 font-display text-5xl md:text-6xl leading-[1]">Contact Form</h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Tell us about your space — kitchen, bath, or commercial. Someone will get back to
              you within 24–48 hours, Monday–Friday.
            </p>
            <ul className="mt-12 space-y-6">
              <li className="flex gap-4">
                <Phone className="size-5 text-primary mt-1" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Office</div>
                  <a href="tel:+14102741953" className="text-lg hover:text-primary">(410) 274-1953</a>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="size-5 text-primary mt-1" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Sales</div>
                  <a href="tel:+14436003623" className="text-lg hover:text-primary">(443) 600-3623</a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="size-5 text-primary mt-1" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Owner</div>
                  <a href="mailto:chris@stonesolutionsmd.com" className="text-lg hover:text-primary">chris@stonesolutionsmd.com</a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="size-5 text-primary mt-1" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Sales Email</div>
                  <a href="mailto:sales@stonesolutionsmd.com" className="text-lg hover:text-primary">sales@stonesolutionsmd.com</a>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin className="size-5 text-primary mt-1" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Address</div>
                  <span className="text-lg">9341 Philadelphia Rd, Suite K-L<br />Rosedale, MD 21237</span>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="size-5 text-primary mt-1" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Response Time</div>
                  <span className="text-lg">Within 24–48 hours, Mon–Fri</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-card border border-border p-8 md:p-10">
            <QuoteForm />
          </div>
        </div>
      </Section>

      {/* How to Find Us */}
      <Section>
        <Eyebrow>How to Find Us</Eyebrow>
        <h2 className="mt-4 font-display text-4xl md:text-5xl mb-10">Our Location</h2>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-4 text-muted-foreground">
            <p className="text-lg text-foreground">9341 Philadelphia Rd, Suite K-L<br />Rosedale, MD 21237</p>
            <p>We are located on Philadelphia Road in Rosedale, Maryland. Our showroom and fabrication shop are on-site, so you can see our work up close and browse samples from all major brands.</p>
            <p>Serving the Greater Baltimore–Washington areas, Southern Pennsylvania, and Northern Virginia.</p>
            <div className="pt-4 space-y-2">
              <div><span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Office:</span> <a href="tel:+14102741953" className="text-primary">(410) 274-1953</a></div>
              <div><span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Sales:</span> <a href="tel:+14436003623" className="text-primary">(443) 600-3623</a></div>
            </div>
          </div>
          {/* Embedded Google Map */}
          <div className="border border-border overflow-hidden aspect-video">
            <iframe
              title="Stone Solutions Location Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=Stone+Solutions+LLC+9341+Philadelphia+Rd+Rosedale+MD+21237&t=m&z=14&ie=UTF8&output=embed"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
