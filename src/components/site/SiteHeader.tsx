import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact Us" },
  { to: "/services", label: "Services" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-[0.22em] text-foreground/80">
          {NAV.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ "data-active": "true" } as never}
              className="nav-link hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="tel:+14102741953"
            className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-foreground/80 hover:text-primary transition-colors"
          >
            <Phone className="size-3.5" /> (410) 274-1953
          </a>
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center bg-primary px-5 py-3 text-[11px] uppercase tracking-[0.22em] font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Free Estimate
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-foreground"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-6 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm uppercase tracking-[0.2em] border-b border-border last:border-0"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
