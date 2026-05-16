import { Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function StickyCall() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden flex border-t border-border bg-background/95 backdrop-blur-md">
      <a
        href="tel:+14102741953"
        className="flex-1 py-4 text-center text-[11px] uppercase tracking-[0.22em] flex items-center justify-center gap-2 border-r border-border"
      >
        <Phone className="size-3.5" /> Call Now
      </a>
      <Link
        to="/contact"
        className="flex-1 py-4 text-center text-[11px] uppercase tracking-[0.22em] bg-primary text-primary-foreground font-medium"
      >
        Free Estimate
      </Link>
    </div>
  );
}
