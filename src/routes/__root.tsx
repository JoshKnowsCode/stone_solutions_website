import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { StickyCall } from "@/components/site/StickyCall";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl">404</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="mt-8 inline-flex bg-primary px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-primary-foreground">
          Back home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl">Something went wrong</h1>
        <p className="mt-3 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-8 inline-flex bg-primary px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-primary-foreground"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

const ORG_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Stone Solutions, LLC",
  description:
    "Custom granite, quartz, and solid surface countertop fabrication and installation serving the greater Baltimore–Washington area, Southern Pennsylvania, and Northern Virginia.",
  telephone: "+1-410-274-1953",
  email: "sales@stonesolutionsmd.com",
  url: "/",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9341 Philadelphia Rd, Suite K-L",
    addressLocality: "Rosedale",
    addressRegion: "MD",
    postalCode: "21237",
    addressCountry: "US",
  },
  areaServed: [
    "Baltimore, MD", "Rosedale, MD", "Essex, MD", "White Marsh, MD",
    "Towson, MD", "Dundalk, MD", "Bel Air, MD", "Washington, DC",
    "Southern Pennsylvania", "Northern Virginia",
  ],
  priceRange: "$$",
  openingHours: "Mo-Fr 08:00-17:00",
  foundingDate: "2011",
  founder: { "@type": "Person", name: "Chris Byrley" },
});

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Stone Solutions — Quartz, Granite & Solid Surface Countertops in Rosedale, MD" },
      { name: "description", content: "Stone Solutions, LLC: custom quartz, granite, and solid surface countertop fabrication & installation in Rosedale, MD. Serving the greater Baltimore–Washington area, Southern PA, and Northern VA. Discount the price, not the quality." },
      { name: "author", content: "Stone Solutions, LLC" },
      { name: "theme-color", content: "#000000" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Stone Solutions, LLC" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: ORG_LD },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1 pb-20 md:pb-0">
          <Outlet />
        </main>
        <SiteFooter />
        <StickyCall />
        <Toaster richColors position="top-center" />
      </div>
    </QueryClientProvider>
  );
}
