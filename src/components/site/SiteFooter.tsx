import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-12 md:grid-cols-4">
        <div className="space-y-6">
          <Logo />
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Stone Solutions is your #1 source for the finest quartz, granite, and solid surface
            countertops. No job too small, too large, or too complicated.{" "}
            <em className="not-italic text-foreground/80">Discount the price, not the quality.</em>
          </p>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold text-muted-foreground mb-6">Navigation</h4>
          <ul className="space-y-3 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/products", label: "Products" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact Us" },
            ].map((s) => (
              <li key={s.to}><Link to={s.to} className="hover:text-primary transition-colors">{s.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold text-muted-foreground mb-6">Service Areas</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>Greater Baltimore–Washington</li>
            <li>Southern Pennsylvania</li>
            <li>Northern Virginia</li>
          </ul>
          <div className="mt-6">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold text-muted-foreground mb-3">Certifications</h4>
            <p className="text-sm text-muted-foreground">NCIDQ Certified</p>
          </div>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold text-muted-foreground mb-6">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>9341 Philadelphia Rd, Suite K-L<br />Rosedale, MD 21237</li>
            <li>Office: <a href="tel:+14102741953" className="hover:text-primary">(410) 274-1953</a></li>
            <li>Sales: <a href="tel:+14436003623" className="hover:text-primary">(443) 600-3623</a></li>
            <li><a href="mailto:chris@stonesolutionsmd.com" className="hover:text-primary">chris@stonesolutionsmd.com</a></li>
            <li><a href="mailto:sales@stonesolutionsmd.com" className="hover:text-primary">sales@stonesolutionsmd.com</a></li>
          </ul>
          <div className="mt-6">
            <Link to="/contact" className="inline-flex items-center bg-primary px-4 py-2.5 text-[11px] uppercase tracking-[0.22em] font-medium text-primary-foreground hover:opacity-90">
              Get Estimate
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row justify-between gap-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          <span>© {new Date().getFullYear()} Stone Solutions, LLC. All rights reserved.</span>
          <span>Founded 2011 · Rosedale, MD</span>
        </div>
      </div>
    </footer>
  );
}
