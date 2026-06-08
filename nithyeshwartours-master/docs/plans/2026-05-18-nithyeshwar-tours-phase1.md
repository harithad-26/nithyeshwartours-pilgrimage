# Nithyeshwar Tours — Phase 1 Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build the complete public-facing tourism website for Nithyeshwar Tours — 18 pages, design-system-first, Strapi-connected, on-demand ISR — matching the Figma designs pixel-for-pixel.

**Architecture:** Next.js 16 App Router with all pages as Server Components fetching from Strapi via `lib/strapi.ts`. Design tokens live in `app/globals.css` (`@theme` block). Glassmorphism Navbar and Footer wrap every route via `app/layout.tsx`. On-demand ISR: pages fetch with `next: { revalidate: 3600, tags: [...] }` and a `POST /api/revalidate` webhook calls `revalidateTag()` on Strapi publish.

**Tech Stack:** Next.js 16.2.6, React 19, TypeScript, Tailwind CSS v4, Noto Serif + Manrope (next/font/google), next/image, Strapi v5 (external service at `STRAPI_URL` env var)

**Figma file:** `pyRDftu7wZCkZxsEK00Nvz` — all screens at 1280px wide desktop.

**UI/UX Standards enforced throughout:**
- Touch targets ≥ 44px, focus rings, ARIA labels on all icon-only controls
- Slow transitions (300ms ease-out) — never snappy
- `prefers-reduced-motion` respected via `motion-safe:` Tailwind prefix
- All images: `next/image` with `sizes`, `quality={85}`, explicit `width`/`height`
- Semantic HTML hierarchy (h1→h6, no level skips)
- Visible focus states on all interactive elements

---

## Task 1: Design Tokens + Fonts + Global CSS

**Figma ref:** All screens — colors `#000613`, `#001f3f`, `#735c00`, `#fed65b`, `#faf9f8`; fonts Noto Serif + Manrope

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`
- Create: `app/not-found.tsx`

**Step 1: Replace `app/globals.css` entirely**

```css
@import "tailwindcss";

@theme {
  /* Brand Colors */
  --color-midnight: #000613;
  --color-navy: #001f3f;
  --color-navy-glass: color-mix(in srgb, #001f3f 70%, transparent);
  --color-gold-dark: #735c00;
  --color-gold: #fed65b;
  --color-gold-muted: color-mix(in srgb, #fed65b 20%, transparent);
  --color-surface: #faf9f8;
  --color-surface-low: #f4f3f2;
  --color-surface-lowest: #ffffff;

  /* Tonal shadow (navy-tinted) */
  --shadow-ambient: 0 10px 30px rgba(0, 31, 63, 0.06);
  --shadow-card: 0 4px 20px rgba(0, 31, 63, 0.08);

  /* Typography */
  --font-serif: var(--font-noto-serif);
  --font-sans: var(--font-manrope);

  /* Spacing */
  --spacing-section: 6rem;

  /* Transitions */
  --duration-slow: 300ms;
  --duration-medium: 200ms;
}

/* Base reset */
*, *::before, *::after { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  background-color: var(--color-surface);
  color: var(--color-midnight);
  font-family: var(--font-sans), system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}

/* Focus ring — visible, on-brand */
:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 3px;
  border-radius: 3px;
}

/* Gold accent line utility */
.gold-accent-left {
  border-left: 2px solid var(--color-gold-dark);
  padding-left: 1rem;
}

/* Glassmorphism utility */
.glass {
  background: var(--color-navy-glass);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

/* Tonal card */
.card-tonal {
  background: var(--color-surface-lowest);
  box-shadow: var(--shadow-card);
}

/* Navy overlay on images */
.img-overlay {
  position: relative;
}
.img-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 31, 63, 0.20);
  pointer-events: none;
}
```

**Step 2: Replace `app/layout.tsx` with fonts + metadata**

```tsx
import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Nithyeshwar Tours",
    default: "Nithyeshwar Tours — The Sacred Journey",
  },
  description:
    "Curating transformative pilgrimage and travel experiences across India and beyond. Book your sacred journey with Nithyeshwar Tours.",
  openGraph: {
    siteName: "Nithyeshwar Tours",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${notoSerif.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-dvh flex flex-col bg-surface text-midnight">
        {children}
      </body>
    </html>
  );
}
```

**Step 3: Create `app/not-found.tsx`**

```tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center min-h-dvh bg-surface px-6 text-center">
      <p className="font-sans text-sm tracking-[0.1em] uppercase text-gold-dark mb-4">
        404
      </p>
      <h1 className="font-serif text-4xl text-navy mb-6">Page Not Found</h1>
      <p className="font-sans text-midnight/60 mb-10 max-w-md leading-relaxed">
        The path you seek does not exist on this journey. Let us guide you back.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-navy text-gold font-sans text-sm font-medium px-8 py-3 rounded-md transition-all duration-300 hover:bg-midnight focus-visible:outline-gold"
      >
        Return Home
      </Link>
    </main>
  );
}
```

**Step 4: Commit**

```bash
git add app/globals.css app/layout.tsx app/not-found.tsx
git commit -m "feat: add design tokens, fonts, global CSS for Nithyeshwar Tours"
```

---

## Task 2: Strapi Client + TypeScript Types

**Files:**
- Create: `lib/strapi.ts`
- Create: `lib/types.ts`
- Create: `.env.local` (gitignored — instructions only, not committed)

**Step 1: Create `lib/types.ts`**

```ts
export interface StrapiImage {
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
}

export interface StrapiMeta {
  pagination?: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface Package {
  id: number;
  documentId: string;
  slug: string;
  title: string;
  subtitle: string;
  destination: string;
  category: "pilgrimage" | "honeymoon" | "international" | "adventure" | "group";
  state: string | null;
  price: number;
  currency: "INR" | "USD";
  duration: string;
  groupSize: string;
  availability: string;
  coverImage: StrapiImage;
  galleryImages: StrapiImage[];
  description: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  testimonials: Testimonial[];
  isFeatured: boolean;
  publishedAt: string;
}

export interface ItineraryDay {
  id: number;
  day: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: StrapiImage | null;
}

export interface Destination {
  id: number;
  documentId: string;
  slug: string;
  name: string;
  state: string;
  description: string;
  coverImage: StrapiImage;
  packageCount: number;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar: StrapiImage;
}

export interface Inquiry {
  fullName: string;
  email: string;
  phone: string;
  destination: string;
  groupSize: string;
  message: string;
}

export interface StrapiResponse<T> {
  data: T;
  meta: StrapiMeta;
}

export interface StrapiListResponse<T> {
  data: T[];
  meta: StrapiMeta;
}
```

**Step 2: Create `lib/strapi.ts`**

```ts
import type {
  Package,
  Destination,
  TeamMember,
  Testimonial,
  Inquiry,
  StrapiResponse,
  StrapiListResponse,
} from "./types";

const STRAPI_URL = process.env.STRAPI_URL ?? "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN ?? "";

async function strapiGet<T>(
  path: string,
  tags: string[],
  params: Record<string, string> = {}
): Promise<T> {
  const url = new URL(`${STRAPI_URL}/api${path}`);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));

  const res = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${STRAPI_TOKEN}` },
    next: { revalidate: 3600, tags },
  });

  if (!res.ok) {
    throw new Error(`Strapi ${res.status}: ${path}`);
  }

  return res.json() as Promise<T>;
}

export async function getFeaturedPackages(): Promise<Package[]> {
  const data = await strapiGet<StrapiListResponse<Package>>(
    "/packages",
    ["packages"],
    {
      "filters[isFeatured][$eq]": "true",
      "populate": "coverImage,testimonials",
      "sort": "publishedAt:desc",
      "pagination[limit]": "6",
    }
  );
  return data.data;
}

export async function getPackagesByDestination(destination: string): Promise<Package[]> {
  const data = await strapiGet<StrapiListResponse<Package>>(
    "/packages",
    ["packages", `packages-${destination}`],
    {
      "filters[state][$eqi]": destination,
      "populate": "coverImage",
      "sort": "publishedAt:desc",
    }
  );
  return data.data;
}

export async function getPackageBySlug(slug: string): Promise<Package | null> {
  const data = await strapiGet<StrapiListResponse<Package>>(
    "/packages",
    ["packages", `package-${slug}`],
    {
      "filters[slug][$eq]": slug,
      "populate": "coverImage,galleryImages,itinerary,testimonials.avatar",
    }
  );
  return data.data[0] ?? null;
}

export async function getAllPackageSlugs(): Promise<string[]> {
  const data = await strapiGet<StrapiListResponse<Package>>(
    "/packages",
    ["packages"],
    { "fields": "slug", "pagination[limit]": "100" }
  );
  return data.data.map((p) => p.slug);
}

export async function getDestinations(): Promise<Destination[]> {
  const data = await strapiGet<StrapiListResponse<Destination>>(
    "/destinations",
    ["destinations"],
    { "populate": "coverImage", "sort": "name:asc" }
  );
  return data.data;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const data = await strapiGet<StrapiListResponse<Testimonial>>(
    "/testimonials",
    ["testimonials"],
    { "populate": "avatar", "sort": "publishedAt:desc", "pagination[limit]": "12" }
  );
  return data.data;
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  const data = await strapiGet<StrapiListResponse<TeamMember>>(
    "/team-members",
    ["team"],
    { "populate": "avatar", "sort": "order:asc" }
  );
  return data.data;
}

export async function submitInquiry(inquiry: Inquiry): Promise<void> {
  const res = await fetch(`${STRAPI_URL}/api/inquiries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
    body: JSON.stringify({ data: inquiry }),
  });
  if (!res.ok) throw new Error("Failed to submit inquiry");
}

export function getStrapiImageUrl(url: string): string {
  if (url.startsWith("http")) return url;
  return `${STRAPI_URL}${url}`;
}
```

**Step 3: Document `.env.local` requirements (do NOT commit)**

Add to `.gitignore` if not already there: `.env.local`

The file needs:
```
STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_strapi_token_here
REVALIDATE_SECRET=your_random_secret_here
```

**Step 4: Commit**

```bash
git add lib/strapi.ts lib/types.ts
git commit -m "feat: add Strapi client and TypeScript content types"
```

---

## Task 3: On-Demand Revalidation Webhook

**Files:**
- Create: `app/api/revalidate/route.ts`

**Step 1: Create the route handler**

```ts
// app/api/revalidate/route.ts
import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const TAG_MAP: Record<string, string[]> = {
  package: ["packages"],
  destination: ["destinations"],
  testimonial: ["testimonials"],
  "team-member": ["team"],
};

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const model: string = body?.model ?? "";
    const tags = TAG_MAP[model] ?? ["packages", "destinations", "testimonials"];

    for (const tag of tags) {
      revalidateTag(tag);
    }

    return NextResponse.json({
      revalidated: true,
      tags,
      model,
      timestamp: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
```

**Step 2: Commit**

```bash
git add app/api/revalidate/route.ts
git commit -m "feat: add on-demand ISR webhook for Strapi content updates"
```

---

## Task 4: Navbar Component

**Figma ref:** Screen 1:2 — Dark navy glass bar, logo left, links center, BOOK NOW gold button right. Nav links: India | International | Pilgrimage | About Us

**Files:**
- Create: `components/layout/Navbar.tsx`
- Create: `components/layout/NavLink.tsx`

**Step 1: Create `components/layout/NavLink.tsx`** (Client Component for active state)

```tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={`
        font-sans text-sm font-medium tracking-wide transition-colors duration-300
        ${isActive
          ? "text-gold"
          : "text-white/80 hover:text-white"
        }
      `}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
```

**Step 2: Create `components/layout/Navbar.tsx`**

```tsx
import Link from "next/link";
import { NavLink } from "./NavLink";

const NAV_LINKS = [
  { href: "/india", label: "India" },
  { href: "/packages/international", label: "International" },
  { href: "/pilgrimage", label: "Pilgrimage" },
  { href: "/about", label: "About Us" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className="glass border-b border-white/10"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-white font-semibold text-lg tracking-tight flex-shrink-0 transition-opacity duration-300 hover:opacity-80"
            aria-label="Nithyeshwar Tours — Home"
          >
            NITHYESHWAR TOURS
          </Link>

          {/* Desktop nav links */}
          <div
            className="hidden md:flex items-center gap-8"
            role="list"
          >
            {NAV_LINKS.map((link) => (
              <div key={link.href} role="listitem">
                <NavLink href={link.href}>{link.label}</NavLink>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/inquiry"
            className="
              hidden md:inline-flex items-center
              bg-gold text-midnight font-sans text-sm font-semibold
              px-5 py-2 rounded-md
              transition-all duration-300
              hover:bg-gold-dark hover:text-white
              focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2
            "
          >
            Book Now
          </Link>

          {/* Mobile menu button — aria-expanded managed by client wrapper */}
          <button
            className="md:hidden text-white p-2 rounded-md focus-visible:outline-gold"
            aria-label="Open navigation menu"
            aria-expanded="false"
            aria-controls="mobile-nav"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M3 5h16M3 11h16M3 17h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Mobile nav — hidden by default, toggle handled by MobileNav client component */}
        <div id="mobile-nav" className="md:hidden border-t border-white/10 hidden">
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
            <Link
              href="/inquiry"
              className="inline-flex justify-center bg-gold text-midnight font-sans text-sm font-semibold px-5 py-2.5 rounded-md mt-2"
            >
              Book Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
```

**Step 3: Create `components/layout/MobileNav.tsx`** (Client toggle)

```tsx
"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function MobileNavToggle() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const btn = document.querySelector('[aria-controls="mobile-nav"]') as HTMLButtonElement | null;
    const menu = document.getElementById("mobile-nav");
    if (!btn || !menu) return;

    btn.setAttribute("aria-expanded", String(open));
    menu.classList.toggle("hidden", !open);
  }, [open]);

  return (
    <button
      className="md:hidden text-white p-2 rounded-md focus-visible:outline-gold absolute right-6 top-4"
      aria-label={open ? "Close navigation menu" : "Open navigation menu"}
      onClick={() => setOpen((v) => !v)}
    >
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        {open
          ? <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
          : <path d="M3 5h16M3 11h16M3 17h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        }
      </svg>
    </button>
  );
}
```

> Note: Refactor Navbar to use MobileNavToggle after creating it. The Navbar should import `MobileNavToggle` and render it beside the CTA area.

**Step 4: Commit**

```bash
git add components/layout/
git commit -m "feat: add glassmorphism Navbar with accessible nav links and mobile toggle"
```

---

## Task 5: Footer Component

**Figma ref:** Home Page (1:491) bottom — dark navy `#001f3f`, four columns (Nithyeshwar Tours, Destinations, Experience, Support), copyright line, social icons

**Files:**
- Create: `components/layout/Footer.tsx`

**Step 1: Create `components/layout/Footer.tsx`**

```tsx
import Link from "next/link";

const FOOTER_LINKS = {
  Destinations: [
    { href: "/india", label: "India Pilgrimages" },
    { href: "/packages/international", label: "International" },
    { href: "/packages/honeymoon", label: "Honeymoon" },
    { href: "/india", label: "Spiritual Guides" },
  ],
  Experience: [
    { href: "/pilgrimage", label: "Sacred Pilgrimages" },
    { href: "/services", label: "Our Services" },
    { href: "/trip-builder", label: "Trip Builder" },
    { href: "/travel-memories", label: "Travel Memories" },
  ],
  Support: [
    { href: "/about", label: "About Us" },
    { href: "/inquiry", label: "Contact Us" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/inquiry", label: "Group Bookings" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy text-white/80 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-serif text-white font-semibold text-base tracking-tight mb-4 block hover:opacity-80 transition-opacity duration-300"
            >
              NITHYESHWAR TOURS
            </Link>
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              Cuiding pilgrims across sacred lands for over three decades.
              Spiritual journeys curated with devotion.
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-6" aria-label="Social media links">
              <a
                href="#"
                aria-label="Follow us on Instagram"
                className="text-white/50 hover:text-gold transition-colors duration-300 p-1"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Follow us on Facebook"
                className="text-white/50 hover:text-gold transition-colors duration-300 p-1"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Watch us on YouTube"
                className="text-white/50 hover:text-gold transition-colors duration-300 p-1"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.41 19.1C5.12 19.56 12 19.56 12 19.56s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95 29 29 0 0 0 .46-5.29 29 29 0 0 0-.46-5.44z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-white text-xs font-semibold tracking-[0.1em] uppercase mb-4">
                {heading}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Nithyeshwar Tours. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/inquiry" className="text-xs text-white/40 hover:text-white/70 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/inquiry" className="text-xs text-white/40 hover:text-white/70 transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

**Step 2: Create `app/(site)/layout.tsx`** — wrap all public pages with Navbar + Footer

```tsx
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </>
  );
}
```

> All public route files move into `app/(site)/` route group. This keeps the API route (`app/api/`) outside the Navbar/Footer layout.

**Step 3: Move `app/page.tsx` to `app/(site)/page.tsx`**

Just move the file — Next.js route groups don't affect the URL.

**Step 4: Commit**

```bash
git add components/layout/Footer.tsx app/(site)/layout.tsx app/(site)/page.tsx
git commit -m "feat: add Footer and site route group layout with Navbar + Footer"
```

---

## Task 6: Shared UI Components

**Files:**
- Create: `components/ui/Button.tsx`
- Create: `components/ui/PackageCard.tsx`
- Create: `components/ui/SectionHeader.tsx`
- Create: `components/ui/TestimonialCard.tsx`
- Create: `components/ui/DestinationCard.tsx`

**Step 1: Create `components/ui/Button.tsx`**

```tsx
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: Variant;
  href?: string;
  size?: "sm" | "md" | "lg";
}

const styles: Record<Variant, string> = {
  primary:
    "bg-navy text-gold border-transparent hover:bg-midnight",
  secondary:
    "bg-transparent text-gold-dark border border-gold-dark hover:bg-gold hover:text-midnight",
  ghost:
    "bg-transparent text-midnight border-transparent hover:bg-surface-low",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base = `
    inline-flex items-center justify-center gap-2
    font-sans font-semibold rounded-md
    transition-all duration-300
    focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${styles[variant]} ${sizes[size]} ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button className={base} {...props}>
      {children}
    </button>
  );
}
```

**Step 2: Create `components/ui/SectionHeader.tsx`**

```tsx
interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <p
          className={`font-sans text-xs font-semibold tracking-[0.12em] uppercase mb-3 ${
            light ? "text-gold" : "text-gold-dark"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-3xl md:text-4xl font-semibold leading-tight tracking-tight ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 font-sans text-base leading-relaxed max-w-xl ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-midnight/60"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
```

**Step 3: Create `components/ui/PackageCard.tsx`**

```tsx
import Image from "next/image";
import Link from "next/link";
import { getStrapiImageUrl } from "@/lib/strapi";
import type { Package } from "@/lib/types";

interface PackageCardProps {
  pkg: Package;
  priority?: boolean;
}

export function PackageCard({ pkg, priority = false }: PackageCardProps) {
  const imgUrl = getStrapiImageUrl(pkg.coverImage.url);

  return (
    <article className="group relative bg-surface-lowest rounded-md overflow-hidden transition-shadow duration-300 hover:shadow-card">
      {/* Gold left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold-dark z-10" aria-hidden="true" />

      {/* Image */}
      <div className="relative h-52 overflow-hidden img-overlay">
        <Image
          src={imgUrl}
          alt={pkg.coverImage.alternativeText ?? pkg.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
          priority={priority}
          quality={85}
        />
        {/* Category tag */}
        <span className="absolute top-3 left-4 font-sans text-[10px] font-semibold tracking-[0.1em] uppercase text-white/90 bg-navy/60 backdrop-blur-sm px-2.5 py-1 rounded-sm z-10">
          {pkg.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="font-serif text-xl text-navy font-semibold leading-snug mb-2 line-clamp-2">
          {pkg.title}
        </h3>
        <p className="font-sans text-sm text-midnight/60 leading-relaxed mb-6 line-clamp-2">
          {pkg.subtitle}
        </p>

        {/* Meta row */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-sans text-xs text-midnight/40 uppercase tracking-wide">From</p>
            <p className="font-serif text-2xl font-semibold text-navy">
              ₹{pkg.price.toLocaleString("en-IN")}
            </p>
          </div>
          <Link
            href={`/packages/${pkg.slug}`}
            className="font-sans text-xs font-semibold tracking-wide text-gold-dark border border-gold-dark px-4 py-2 rounded-md transition-all duration-300 hover:bg-gold-dark hover:text-white focus-visible:outline-2 focus-visible:outline-gold"
            aria-label={`View details for ${pkg.title}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
```

**Step 4: Create `components/ui/TestimonialCard.tsx`**

```tsx
import Image from "next/image";
import { getStrapiImageUrl } from "@/lib/strapi";
import type { Testimonial } from "@/lib/types";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <blockquote className="bg-surface-lowest p-8 rounded-md shadow-ambient flex flex-col gap-4">
      {/* Stars */}
      <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill={i < t.rating ? "var(--color-gold)" : "none"}
            stroke="var(--color-gold)"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        ))}
      </div>

      <p className="font-sans text-sm leading-relaxed text-midnight/70 italic flex-1">
        "{t.text}"
      </p>

      <footer className="flex items-center gap-3 pt-2 border-t border-surface-low">
        {t.avatar && (
          <Image
            src={getStrapiImageUrl(t.avatar.url)}
            alt={t.name}
            width={36}
            height={36}
            className="rounded-full object-cover"
          />
        )}
        <div>
          <cite className="font-sans text-sm font-semibold text-navy not-italic">{t.name}</cite>
          <p className="font-sans text-xs text-midnight/40">{t.location}</p>
        </div>
      </footer>
    </blockquote>
  );
}
```

**Step 5: Commit**

```bash
git add components/ui/
git commit -m "feat: add shared UI components (Button, PackageCard, SectionHeader, TestimonialCard)"
```

---

## Task 7: Home Page — Hero + Search Bar + Sections

**Figma ref:** Screen 1:491 — Full page, ~4802px tall. Sections: Hero with search, Top Packages (asymmetric grid), Luxury Escapes (dark navy), Sacred Pilgrimages (grid), Pilgrim Stories (testimonials)

**Files:**
- Create: `app/(site)/page.tsx`
- Create: `components/sections/HeroSection.tsx`
- Create: `components/sections/TopPackages.tsx`
- Create: `components/sections/LuxuryEscapes.tsx`
- Create: `components/sections/SacredPilgrimages.tsx`
- Create: `components/sections/PilgrimStories.tsx`

**Step 1: Create `components/sections/HeroSection.tsx`**

```tsx
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero — The Sacred Journey"
    >
      {/* Background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Sacred pilgrimage landscape"
        fill
        sizes="100vw"
        className="object-cover"
        priority
        quality={90}
      />

      {/* Deep navy gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/50 to-midnight/70"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-gold mb-6">
          Nithyeshwar Tours
        </p>

        <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white leading-tight tracking-tight mb-8">
          The Sacred
          <br />
          Journey
        </h1>

        <p className="font-sans text-base md:text-lg text-white/70 leading-relaxed max-w-lg mx-auto mb-12">
          Transformative pilgrimage experiences curated with devotion, guiding
          souls across India's most sacred destinations.
        </p>

        {/* Search / CTA bar */}
        <div className="glass border border-white/10 rounded-md p-4 md:p-6 max-w-2xl mx-auto text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-1">
              <label className="font-sans text-[10px] text-white/50 uppercase tracking-widest">
                Destination
              </label>
              <select
                className="bg-transparent text-white font-sans text-sm border-b border-white/20 pb-1 outline-none focus:border-gold transition-colors duration-300"
                aria-label="Select destination"
              >
                <option value="" className="text-midnight">Choose State</option>
                <option value="uttar-pradesh" className="text-midnight">Uttar Pradesh</option>
                <option value="madhya-pradesh" className="text-midnight">Madhya Pradesh</option>
                <option value="odisha" className="text-midnight">Odisha</option>
                <option value="tamil-nadu" className="text-midnight">Tamil Nadu</option>
                <option value="andaman" className="text-midnight">Andaman</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-sans text-[10px] text-white/50 uppercase tracking-widest">
                Group Size
              </label>
              <select
                className="bg-transparent text-white font-sans text-sm border-b border-white/20 pb-1 outline-none focus:border-gold transition-colors duration-300"
                aria-label="Select group size"
              >
                <option value="" className="text-midnight">1–4 Pilgrims</option>
                <option value="5-10" className="text-midnight">5–10 Pilgrims</option>
                <option value="11-20" className="text-midnight">11–20 Pilgrims</option>
                <option value="21+" className="text-midnight">21+ Pilgrims</option>
              </select>
            </div>
            <Link
              href="/packages/madhya-pradesh"
              className="flex items-center justify-center bg-gold text-midnight font-sans text-sm font-semibold rounded-md px-6 py-3 transition-all duration-300 hover:bg-gold-dark hover:text-white mt-auto"
            >
              Explore Packages
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div className="w-px h-12 bg-gradient-to-b from-white/0 to-white/40" />
      </div>
    </section>
  );
}
```

**Step 2: Create `components/sections/TopPackages.tsx`**

```tsx
import { PackageCard } from "@/components/ui/PackageCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import type { Package } from "@/lib/types";

export function TopPackages({ packages }: { packages: Package[] }) {
  return (
    <section className="py-24 px-6 bg-surface" aria-labelledby="top-packages-heading">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <SectionHeader
            eyebrow="Curated for You"
            title="Top Packages"
            align="left"
          />
          <Button href="/india" variant="secondary" size="sm" className="hidden md:inline-flex">
            View All
          </Button>
        </div>

        {/* Asymmetric grid — design.md: "avoid three perfectly centered cards" */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {packages.slice(0, 3).map((pkg, i) => (
            <div
              key={pkg.id}
              className={i === 0 ? "lg:col-span-1 lg:row-span-2 lg:h-auto" : ""}
            >
              <PackageCard pkg={pkg} priority={i === 0} />
            </div>
          ))}
          {packages.slice(3, 5).map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        <div className="mt-8 flex md:hidden justify-center">
          <Button href="/india" variant="secondary">View All Packages</Button>
        </div>
      </div>
    </section>
  );
}
```

**Step 3: Create `components/sections/LuxuryEscapes.tsx`**

```tsx
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";

const HIGHLIGHTS = [
  "Personalized spiritual guide assigned",
  "Accommodation at heritage properties",
  "Private temple access & rituals",
  "Door-to-door travel coordination",
];

export function LuxuryEscapes() {
  return (
    <section className="py-24 px-6 bg-navy" aria-labelledby="luxury-heading">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text side */}
        <div>
          <SectionHeader
            eyebrow="Premium Experience"
            title="Luxury Escapes for the Discerning Soul"
            subtitle="An elevated pilgrimage where sacred tradition meets curated comfort."
            align="left"
            light
          />

          <ul className="space-y-3 mb-10" role="list">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 font-sans text-sm text-white/70"
              >
                <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-gold/20 flex items-center justify-center" aria-hidden="true">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <Button href="/packages/madhya-pradesh" variant="secondary">
            Discover Luxury Packages
          </Button>
        </div>

        {/* Image side — slightly offset (staggered layout per design.md) */}
        <div className="relative h-96 lg:h-[500px]">
          <div className="absolute inset-0 translate-x-6 translate-y-6 border border-gold/20 rounded-md" aria-hidden="true" />
          <div className="relative h-full rounded-md overflow-hidden img-overlay">
            <Image
              src="/images/luxury-escape.jpg"
              alt="Luxury pilgrimage accommodation"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              quality={85}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
```

**Step 4: Create `components/sections/SacredPilgrimages.tsx`**

```tsx
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getStrapiImageUrl } from "@/lib/strapi";
import type { Package } from "@/lib/types";

const PILGRIM_LINKS = [
  { label: "Kashi — The Eternal City", slug: "kashi", img: "/images/kashi.jpg" },
  { label: "The Shambhavi Trail", slug: "shambhavi", img: "/images/shambhavi.jpg" },
  { label: "Chardham Yatra", slug: "chardham", img: "/images/chardham.jpg" },
];

export function SacredPilgrimages({ packages }: { packages: Package[] }) {
  const items = packages.length
    ? packages.slice(0, 3)
    : null;

  return (
    <section className="py-24 px-6 bg-surface-low" aria-labelledby="pilgrimages-heading">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Spiritual Destinations"
          title="Sacred Pilgrimages"
          subtitle="Journeys that transform. Paths that heal. Moments that endure."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILGRIM_LINKS.map((item, i) => (
            <Link
              key={item.slug}
              href={`/pilgrimage`}
              className="group relative h-72 rounded-md overflow-hidden img-overlay focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
              aria-label={`Explore ${item.label}`}
            >
              <Image
                src={item.img}
                alt={item.label}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                quality={85}
              />
              {/* Strong gradient for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" aria-hidden="true" />

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-sans text-xs text-gold/80 uppercase tracking-wider mb-1">
                  {i === 0 ? "Featured" : "Popular"}
                </p>
                <h3 className="font-serif text-lg text-white font-medium leading-snug">
                  {item.label}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 5: Create `components/sections/PilgrimStories.tsx`**

```tsx
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import type { Testimonial } from "@/lib/types";

export function PilgrimStories({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="py-24 px-6 bg-surface" aria-labelledby="stories-heading">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Pilgrim Stories"
          title="Spoken from the Heart"
          subtitle="Every journey leaves an imprint. Hear from those whose lives were touched."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Step 6: Wire up `app/(site)/page.tsx`**

```tsx
import { HeroSection } from "@/components/sections/HeroSection";
import { TopPackages } from "@/components/sections/TopPackages";
import { LuxuryEscapes } from "@/components/sections/LuxuryEscapes";
import { SacredPilgrimages } from "@/components/sections/SacredPilgrimages";
import { PilgrimStories } from "@/components/sections/PilgrimStories";
import {
  getFeaturedPackages,
  getTestimonials,
} from "@/lib/strapi";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Sacred Journey — Premium Pilgrimage Packages",
  description:
    "Discover transformative pilgrimage and travel experiences across India's most sacred destinations. Book with Nithyeshwar Tours.",
};

export default async function HomePage() {
  const [packages, testimonials] = await Promise.all([
    getFeaturedPackages(),
    getTestimonials(),
  ]);

  return (
    <>
      <HeroSection />
      <TopPackages packages={packages} />
      <LuxuryEscapes />
      <SacredPilgrimages packages={packages.filter(p => p.category === "pilgrimage")} />
      <PilgrimStories testimonials={testimonials} />
    </>
  );
}
```

**Step 7: Add placeholder hero images to `public/images/`**

During development, add Unsplash-sourced placeholder images:
- `public/images/hero-bg.jpg` — sacred landscape (Varanasi ghats, mountains)
- `public/images/luxury-escape.jpg` — heritage hotel or temple
- `public/images/kashi.jpg`, `shambhavi.jpg`, `chardham.jpg`

These will be replaced by Strapi media in production.

**Step 8: Commit**

```bash
git add app/(site)/page.tsx components/sections/
git commit -m "feat: implement Home Page with Hero, Top Packages, Luxury Escapes, Pilgrimages, Testimonials"
```

---

## Task 8: Package Detail Page

**Figma ref:** Screen 1:2213 — Left: hero image + itinerary days. Right: sticky pricing sidebar ($1,299, duration, group size, Book Now + Inquiry CTAs). Bottom: Sacred Testimonials section.

**Files:**
- Create: `app/(site)/packages/[slug]/page.tsx`
- Create: `components/sections/ItinerarySection.tsx`
- Create: `components/sections/PricingSidebar.tsx`

**Step 1: Create `components/sections/ItinerarySection.tsx`**

```tsx
import type { ItineraryDay } from "@/lib/types";

export function ItinerarySection({ days }: { days: ItineraryDay[] }) {
  return (
    <section aria-labelledby="itinerary-heading" className="py-12">
      <h2
        id="itinerary-heading"
        className="font-serif text-2xl text-navy font-semibold mb-8"
      >
        Your Journey
      </h2>

      <ol className="space-y-6" role="list">
        {days.map((day) => (
          <li key={day.id} className="flex gap-6 group">
            {/* Day number */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border-2 border-gold-dark flex items-center justify-center bg-surface">
                <span className="font-sans text-xs font-bold text-gold-dark tabular-nums">
                  {String(day.day).padStart(2, "0")}
                </span>
              </div>
              {/* Connector line */}
              <div className="flex-1 w-px bg-surface-low mt-2" aria-hidden="true" />
            </div>

            {/* Content */}
            <div className="flex-1 pb-6">
              <h3 className="font-serif text-lg text-navy font-semibold mb-2 leading-snug">
                Day {day.day}: {day.title}
              </h3>
              <p className="font-sans text-sm text-midnight/60 leading-relaxed">
                {day.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
```

**Step 2: Create `components/sections/PricingSidebar.tsx`**

```tsx
import { Button } from "@/components/ui/Button";
import type { Package } from "@/lib/types";

export function PricingSidebar({ pkg }: { pkg: Package }) {
  return (
    <aside
      className="sticky top-24 bg-surface-lowest rounded-md shadow-card p-8 border-l-2 border-gold-dark"
      aria-label="Package pricing and booking"
    >
      {/* Price */}
      <div className="mb-6">
        <p className="font-sans text-xs text-midnight/40 uppercase tracking-widest mb-1">
          Starting from
        </p>
        <p className="font-serif text-4xl text-navy font-semibold tabular-nums">
          ₹{pkg.price.toLocaleString("en-IN")}
        </p>
        <p className="font-sans text-xs text-midnight/40 mt-1">per person</p>
      </div>

      {/* Details */}
      <dl className="space-y-3 mb-8 border-t border-surface-low pt-6">
        {[
          { label: "Duration", value: pkg.duration },
          { label: "Group Size", value: pkg.groupSize },
          { label: "Availability", value: pkg.availability },
        ].map(({ label, value }) => (
          <div key={label} className="flex justify-between items-center">
            <dt className="font-sans text-xs text-midnight/50 uppercase tracking-wide">
              {label}
            </dt>
            <dd className="font-sans text-sm font-medium text-midnight">
              {value}
            </dd>
          </div>
        ))}
      </dl>

      {/* CTAs */}
      <div className="space-y-3">
        <Button href="/inquiry" variant="primary" className="w-full justify-center">
          Book Now
        </Button>
        <Button href="/inquiry" variant="secondary" className="w-full justify-center">
          Send Inquiry
        </Button>
      </div>

      {/* Trust signal */}
      <p className="font-sans text-xs text-midnight/40 text-center mt-6 leading-relaxed">
        Free cancellation within 48 hours. No hidden fees.
      </p>
    </aside>
  );
}
```

**Step 3: Create `app/(site)/packages/[slug]/page.tsx`**

```tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getPackageBySlug,
  getAllPackageSlugs,
  getStrapiImageUrl,
} from "@/lib/strapi";
import { ItinerarySection } from "@/components/sections/ItinerarySection";
import { PricingSidebar } from "@/components/sections/PricingSidebar";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllPackageSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = await getPackageBySlug(slug);
  if (!pkg) return {};
  return {
    title: pkg.title,
    description: pkg.subtitle,
    openGraph: {
      images: [{ url: getStrapiImageUrl(pkg.coverImage.url) }],
    },
  };
}

export default async function PackageDetailPage({ params }: Props) {
  const { slug } = await params;
  const pkg = await getPackageBySlug(slug);

  if (!pkg) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-72 img-overlay" aria-label={pkg.title}>
        <Image
          src={getStrapiImageUrl(pkg.coverImage.url)}
          alt={pkg.coverImage.alternativeText ?? pkg.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-navy/40 to-transparent" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 max-w-7xl mx-auto w-full">
          <p className="font-sans text-xs font-semibold tracking-[0.12em] uppercase text-gold mb-3">
            {pkg.category} · {pkg.destination}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-semibold leading-tight max-w-2xl">
            {pkg.title}
          </h1>
        </div>
      </section>

      {/* Main content */}
      <div className="bg-surface py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: itinerary */}
          <div className="lg:col-span-2">
            <p className="font-sans text-base text-midnight/70 leading-relaxed mb-10">
              {pkg.description}
            </p>
            <ItinerarySection days={pkg.itinerary} />
          </div>

          {/* Right: sticky sidebar */}
          <div className="lg:col-span-1">
            <PricingSidebar pkg={pkg} />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      {pkg.testimonials.length > 0 && (
        <section className="py-16 px-6 bg-surface-low">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              eyebrow="Sacred Testimonials"
              title="What Pilgrims Say"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pkg.testimonials.map((t) => (
                <TestimonialCard key={t.id} t={t} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
```

**Step 4: Commit**

```bash
git add app/(site)/packages/ components/sections/ItinerarySection.tsx components/sections/PricingSidebar.tsx
git commit -m "feat: implement Package Detail page with itinerary, pricing sidebar, testimonials"
```

---

## Task 9: Package Listing Pages (All Destinations)

**Figma refs:** Screens 1:828 (MP), 1:1023 (UP), 1:1217 (Odisha), 1:1402 (Andaman), 1:1619 (Tamil Nadu), 1:1809 (International), 1:1999 (Honeymoon)

**Files:**
- Create: `app/(site)/packages/[destination]/page.tsx` (dynamic listing)

**Step 1: Create `app/(site)/packages/[destination]/page.tsx`**

```tsx
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPackagesByDestination } from "@/lib/strapi";
import { PackageCard } from "@/components/ui/PackageCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Metadata } from "next";

const DESTINATION_META: Record<string, { title: string; subtitle: string; hero: string }> = {
  "madhya-pradesh": {
    title: "Madhya Pradesh",
    subtitle: "The Heart of India — Ancient temples, sacred rivers, and timeless devotion.",
    hero: "/images/destinations/madhya-pradesh.jpg",
  },
  "uttar-pradesh": {
    title: "Uttar Pradesh",
    subtitle: "The Land of the Divine — Varanasi, Mathura, Ayodhya, and the Ganga.",
    hero: "/images/destinations/uttar-pradesh.jpg",
  },
  odisha: {
    title: "Odisha",
    subtitle: "The Soul of Eastern India — Jagannath, Konark, and ancient sacred arts.",
    hero: "/images/destinations/odisha.jpg",
  },
  andaman: {
    title: "Andaman",
    subtitle: "Sacred shores and pristine waters — where pilgrimage meets paradise.",
    hero: "/images/destinations/andaman.jpg",
  },
  "tamil-nadu": {
    title: "Tamil Nadu Pilgrimage",
    subtitle: "The Dravidian Tradition — grand temples, ancient rituals, divine heritage.",
    hero: "/images/destinations/tamil-nadu.jpg",
  },
  international: {
    title: "International Packages",
    subtitle: "Sacred journeys beyond borders — Nepal, Sri Lanka, Cambodia, and beyond.",
    hero: "/images/destinations/international.jpg",
  },
  honeymoon: {
    title: "Honeymoon Packages",
    subtitle: "Begin your journey together — curated experiences for couples.",
    hero: "/images/destinations/honeymoon.jpg",
  },
};

interface Props {
  params: Promise<{ destination: string }>;
}

export function generateStaticParams() {
  return Object.keys(DESTINATION_META).map((d) => ({ destination: d }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { destination } = await params;
  const meta = DESTINATION_META[destination];
  if (!meta) return {};
  return { title: meta.title, description: meta.subtitle };
}

export default async function PackageListingPage({ params }: Props) {
  const { destination } = await params;
  const meta = DESTINATION_META[destination];
  if (!meta) notFound();

  const packages = await getPackagesByDestination(destination);

  return (
    <>
      {/* Destination hero */}
      <section className="relative h-72 md:h-96 img-overlay" aria-label={meta.title}>
        <Image
          src={meta.hero}
          alt={meta.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-navy/40 to-transparent" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 max-w-7xl mx-auto w-full">
          <h1 className="font-serif text-4xl md:text-5xl text-white font-semibold mb-3">
            {meta.title}
          </h1>
          <p className="font-sans text-base text-white/70 max-w-xl">{meta.subtitle}</p>
        </div>
      </section>

      {/* Package grid */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          {packages.length > 0 ? (
            <>
              <SectionHeader
                eyebrow={`${packages.length} Packages`}
                title={`Explore ${meta.title}`}
                align="left"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {packages.map((pkg, i) => (
                  <PackageCard key={pkg.id} pkg={pkg} priority={i < 3} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="font-serif text-2xl text-navy mb-4">
                Packages coming soon
              </p>
              <p className="font-sans text-sm text-midnight/50">
                We are curating sacred journeys for this destination. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
```

**Step 2: Commit**

```bash
git add "app/(site)/packages/[destination]/"
git commit -m "feat: implement dynamic package listing pages for all destinations"
```

---

## Task 10: India States Index Page

**Figma ref:** Screen 1:100 — Grid of India state destination cards with imagery

**Files:**
- Create: `app/(site)/india/page.tsx`
- Create: `components/sections/StateGrid.tsx`

**Step 1: Create `components/sections/StateGrid.tsx`**

```tsx
import Image from "next/image";
import Link from "next/link";

const STATES = [
  { slug: "uttar-pradesh", name: "Uttar Pradesh", description: "Varanasi, Mathura & Ayodhya", img: "/images/destinations/uttar-pradesh.jpg" },
  { slug: "madhya-pradesh", name: "Madhya Pradesh", description: "Omkareshwar & Ujjain", img: "/images/destinations/madhya-pradesh.jpg" },
  { slug: "odisha", name: "Odisha", description: "Jagannath & Konark", img: "/images/destinations/odisha.jpg" },
  { slug: "andaman", name: "Andaman", description: "Sacred shores & pilgrimage", img: "/images/destinations/andaman.jpg" },
  { slug: "tamil-nadu", name: "Tamil Nadu", description: "Dravidian temples & heritage", img: "/images/destinations/tamil-nadu.jpg" },
];

export function StateGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {STATES.map((state, i) => (
        <Link
          key={state.slug}
          href={`/packages/${state.slug}`}
          className="group relative h-80 rounded-md overflow-hidden img-overlay focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
          aria-label={`Explore packages in ${state.name}`}
        >
          <Image
            src={state.img}
            alt={state.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
            quality={85}
            priority={i < 2}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-navy/20 to-transparent" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="font-serif text-xl text-white font-semibold mb-1">{state.name}</h2>
            <p className="font-sans text-sm text-white/60">{state.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
```

**Step 2: Create `app/(site)/india/page.tsx`**

```tsx
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StateGrid } from "@/components/sections/StateGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "India Pilgrimage Destinations",
  description:
    "Explore sacred pilgrimage destinations across India — from the ghats of Varanasi to the temples of Tamil Nadu.",
};

export default function IndiaPage() {
  return (
    <div className="py-20 px-6 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Spiritual India"
          title="Explore Sacred Destinations"
          subtitle="Choose your state and discover curated pilgrimage packages across the subcontinent."
        />
        <StateGrid />
      </div>
    </div>
  );
}
```

**Step 3: Commit**

```bash
git add "app/(site)/india/" components/sections/StateGrid.tsx
git commit -m "feat: implement India States index page with destination grid"
```

---

## Task 11: Pilgrimage Main Page

**Figma ref:** Screen 1:2648 — Longest page (9394px). Sections: Hero, Featured pilgrimages (Kashi, Shambhavi, Chardham), In-depth descriptions, Package cards, testimonials at bottom.

**Files:**
- Create: `app/(site)/pilgrimage/page.tsx`
- Create: `components/sections/PilgrimageHero.tsx`

**Step 1: Create `app/(site)/pilgrimage/page.tsx`**

```tsx
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { PackageCard } from "@/components/ui/PackageCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { getFeaturedPackages, getTestimonials } from "@/lib/strapi";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sacred Pilgrimages",
  description:
    "Begin your spiritual journey with Nithyeshwar Tours. Curated pilgrimage routes across India's most revered sites.",
};

const FEATURED_PILGRIMAGES = [
  {
    name: "Kashi — The Eternal City",
    description:
      "Walk the ancient ghats of Varanasi, witness Ganga Aarti at dawn, and seek blessings at the Kashi Vishwanath temple.",
    img: "/images/kashi.jpg",
    slug: "kashi-eternal-city",
  },
  {
    name: "The Shambhavi Trail",
    description:
      "A meditative pilgrimage through the mystical paths of the Himalayas, connecting ashrams and sacred peaks.",
    img: "/images/shambhavi.jpg",
    slug: "shambhavi-trail",
  },
  {
    name: "Chardham Yatra",
    description:
      "The four holy abodes — Yamunotri, Gangotri, Kedarnath, Badrinath. The complete Hindu pilgrimage circuit.",
    img: "/images/chardham.jpg",
    slug: "chardham-yatra",
  },
];

export default async function PilgrimagePage() {
  const [packages, testimonials] = await Promise.all([
    getFeaturedPackages(),
    getTestimonials(),
  ]);

  const pilgrimPackages = packages.filter((p) => p.category === "pilgrimage");

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center" aria-label="Sacred Pilgrimages">
        <Image
          src="/images/hero-pilgrimage.jpg"
          alt="Sacred pilgrimage landscape"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-midnight/80" aria-hidden="true" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-gold mb-6">
            Spiritual Journeys
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-white font-semibold leading-tight mb-6">
            Sacred Pilgrimages
          </h1>
          <p className="font-sans text-base text-white/70 leading-relaxed max-w-lg mx-auto mb-10">
            More than travel. A transformation. We walk with you on paths that have guided devotees for centuries.
          </p>
          <Button href="/inquiry" variant="secondary">Plan Your Pilgrimage</Button>
        </div>
      </section>

      {/* Featured routes */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Featured Routes"
            title="Choose Your Sacred Path"
            subtitle="Each pilgrimage is an encounter with the divine. Choose the one that calls to your soul."
          />

          <div className="space-y-16">
            {FEATURED_PILGRIMAGES.map((item, i) => (
              <div
                key={item.slug}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  i % 2 !== 0 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Image — staggered offset per design.md */}
                <div className={`relative h-80 ${i % 2 !== 0 ? "lg:col-start-2" : ""}`}>
                  <div
                    className={`absolute inset-0 border border-gold/20 rounded-md ${
                      i % 2 !== 0 ? "-translate-x-4 translate-y-4" : "translate-x-4 translate-y-4"
                    }`}
                    aria-hidden="true"
                  />
                  <div className="relative h-full rounded-md overflow-hidden img-overlay">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      quality={85}
                    />
                  </div>
                </div>

                {/* Text */}
                <div className={i % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <h2 className="font-serif text-3xl text-navy font-semibold mb-4 leading-snug">
                    {item.name}
                  </h2>
                  <p className="font-sans text-base text-midnight/60 leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <Button href={`/packages/${item.slug}`} variant="secondary">
                    Explore This Route
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package cards */}
      {pilgrimPackages.length > 0 && (
        <section className="py-20 px-6 bg-surface-low">
          <div className="max-w-7xl mx-auto">
            <SectionHeader eyebrow="Book a Package" title="Pilgrimage Packages" align="left" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pilgrimPackages.map((p, i) => (
                <PackageCard key={p.id} pkg={p} priority={i < 3} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="py-20 px-6 bg-navy">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Pilgrim Stories"
            title="Voices of the Devoted"
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.id} t={t} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
```

**Step 2: Commit**

```bash
git add "app/(site)/pilgrimage/"
git commit -m "feat: implement Pilgrimage main page with featured routes, packages, testimonials"
```

---

## Task 12: Company / About Page

**Figma ref:** Screen 1:291 — "The Legacy of Spiritual Passage" hero, mission statement, timeline (1992 → 2005 → 2018), testimonials, FAQ accordion.

**Files:**
- Create: `app/(site)/about/page.tsx`
- Create: `components/sections/Timeline.tsx`
- Create: `components/sections/FaqAccordion.tsx`

**Step 1: Create `components/sections/Timeline.tsx`**

```tsx
const MILESTONES = [
  {
    year: "1992",
    title: "The Humble Beginning",
    description:
      "Founded in the holy city of Varanasi, Nithyeshwar Tours was born from a singular mission: to make authentic pilgrimage accessible to every devotee.",
  },
  {
    year: "2005",
    title: "Expanding Horizons",
    description:
      "Launched international pilgrimage programmes to Nepal, Sri Lanka, and Southeast Asia, touching over 50,000 pilgrim souls.",
  },
  {
    year: "2018",
    title: "100,000 Souls",
    description:
      "Celebrated a milestone of guiding over 100,000 pilgrims across 200+ sacred destinations — becoming India's most trusted spiritual travel company.",
  },
];

export function Timeline() {
  return (
    <section aria-labelledby="timeline-heading" className="py-20 px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <h2 id="timeline-heading" className="font-serif text-3xl text-navy font-semibold text-center mb-16">
          Decades of Devotion
        </h2>

        <ol className="relative space-y-12" role="list">
          {MILESTONES.map((m, i) => (
            <li key={m.year} className="flex gap-8 group">
              {/* Year badge */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center shadow-ambient">
                  <span className="font-serif text-xs text-gold font-semibold">{m.year}</span>
                </div>
                {i < MILESTONES.length - 1 && (
                  <div className="flex-1 w-px bg-navy/20 mt-3" aria-hidden="true" />
                )}
              </div>

              {/* Content */}
              <div className="pb-12">
                <h3 className="font-serif text-xl text-navy font-semibold mb-2">
                  {m.title}
                </h3>
                <p className="font-sans text-sm text-midnight/60 leading-relaxed max-w-lg">
                  {m.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
```

**Step 2: Create `components/sections/FaqAccordion.tsx`** (Client Component)

```tsx
"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "Which level of fitness is required for your trips?",
    a: "We design trips for devotees of all fitness levels. Detailed fitness requirements are listed on each package page. Our team assists pilgrims at every step.",
  },
  {
    q: "Do you provide personalized spiritual guidance?",
    a: "Yes. Every package includes an assigned spiritual guide with deep knowledge of the destination's history, rituals, and significance.",
  },
  {
    q: "What dietary options are available during the trip?",
    a: "We provide sattvic vegetarian meals throughout all pilgrimages. Special dietary requirements can be accommodated with advance notice.",
  },
];

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section aria-labelledby="faq-heading" className="py-20 px-6 bg-surface-low">
      <div className="max-w-3xl mx-auto">
        <h2 id="faq-heading" className="font-serif text-3xl text-navy font-semibold text-center mb-12">
          Seeking Clarity
        </h2>

        <dl className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-surface-lowest rounded-md overflow-hidden shadow-ambient">
              <dt>
                <button
                  className="w-full flex justify-between items-center px-6 py-5 text-left focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="font-sans text-sm font-semibold text-navy pr-4">
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-5 h-5 rounded-full border border-gold-dark flex items-center justify-center transition-transform duration-300 ${
                      open === i ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 1v8M1 5h8" stroke="var(--color-gold-dark)" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                </button>
              </dt>
              <dd
                id={`faq-answer-${i}`}
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-48" : "max-h-0"
                }`}
                aria-hidden={open !== i}
              >
                <p className="px-6 pb-5 font-sans text-sm text-midnight/60 leading-relaxed">
                  {faq.a}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
```

**Step 3: Create `app/(site)/about/page.tsx`**

```tsx
import Image from "next/image";
import { Timeline } from "@/components/sections/Timeline";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getTestimonials } from "@/lib/strapi";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — The Legacy of Spiritual Passage",
  description:
    "For over three decades, Nithyeshwar Tours has been the bridge between the seeker and the sacred. Our story, mission, and the team that guides you.",
};

export default async function AboutPage() {
  const testimonials = await getTestimonials();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end pb-16" aria-label="About Nithyeshwar Tours">
        <Image
          src="/images/about-hero.jpg"
          alt="Ancient temple architecture"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-navy/50 to-transparent" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-gold mb-4">
            Our Story
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white font-semibold leading-tight max-w-2xl">
            The Legacy of Spiritual Passage
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-serif text-3xl text-navy font-semibold mb-6 leading-snug">
              A Purpose Beyond Destination
            </h2>
            <p className="font-sans text-base text-midnight/70 leading-relaxed mb-4">
              Founded in the philosophy of Dharma, Nithyeshwar Tours was born from a singular belief — that spiritual travel is not merely tourism, but transformation.
            </p>
            <p className="font-sans text-base text-midnight/70 leading-relaxed">
              Our team of dedicated guides, scholars, and spiritual companions have walked these sacred paths themselves. We do not merely plan itineraries — we walk with you on your pilgrimage.
            </p>
          </div>
          <blockquote className="gold-accent-left">
            <p className="font-serif text-xl text-navy italic leading-relaxed">
              "We do not plan journeys for the feet. We plan journeys for the soul."
            </p>
            <footer className="mt-4 font-sans text-sm text-midnight/50">
              — Founder, Nithyeshwar Tours
            </footer>
          </blockquote>
        </div>
      </section>

      <Timeline />

      {/* Testimonials */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="Pilgrim Stories" title="Spoken from the Heart" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.id} t={t} />
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion />
    </>
  );
}
```

**Step 4: Commit**

```bash
git add "app/(site)/about/" components/sections/Timeline.tsx components/sections/FaqAccordion.tsx
git commit -m "feat: implement About/Company page with timeline, mission, FAQ accordion"
```

---

## Task 13: Services + Testimonials + Travel Memories Pages

**Figma refs:** Services (1:3612), Testimonials (1:2409), Travel Memories (1:3218)

**Files:**
- Create: `app/(site)/services/page.tsx`
- Create: `app/(site)/testimonials/page.tsx`
- Create: `app/(site)/travel-memories/page.tsx`

**Step 1: Create `app/(site)/services/page.tsx`**

```tsx
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "From spiritual guidance to luxury travel coordination — discover everything Nithyeshwar Tours offers for your sacred journey.",
};

const SERVICES = [
  {
    icon: "🕌",
    title: "Spiritual Guided Tours",
    description: "Expert-led pilgrimages with dedicated spiritual guides who bring each sacred site to life.",
  },
  {
    icon: "🏨",
    title: "Heritage Accommodation",
    description: "Curated stays in heritage properties, ashrams, and premium hotels near sacred sites.",
  },
  {
    icon: "🚌",
    title: "Complete Travel Coordination",
    description: "Door-to-door logistics — flights, trains, transfers, and local transport fully managed.",
  },
  {
    icon: "👥",
    title: "Group Tour Packages",
    description: "Specially designed itineraries for groups, families, and corporate spiritual retreats.",
  },
  {
    icon: "🌍",
    title: "International Pilgrimages",
    description: "Sacred journeys to Nepal, Sri Lanka, Cambodia, and other global spiritual destinations.",
  },
  {
    icon: "💍",
    title: "Honeymoon Packages",
    description: "Romantic, spiritually-enriched escapes curated for couples beginning their life together.",
  },
];

export default function ServicesPage() {
  return (
    <div className="py-20 px-6 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="What We Offer"
          title="Services Crafted with Devotion"
          subtitle="Every service is designed to support, enrich, and elevate your sacred journey."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SERVICES.map((s) => (
            <article key={s.title} className="card-tonal p-8 rounded-md border-l-2 border-gold-dark">
              <p className="text-3xl mb-4" aria-hidden="true">{s.icon}</p>
              <h2 className="font-serif text-xl text-navy font-semibold mb-3">{s.title}</h2>
              <p className="font-sans text-sm text-midnight/60 leading-relaxed">{s.description}</p>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button href="/inquiry" variant="primary" size="lg">Start Planning Your Journey</Button>
        </div>
      </div>
    </div>
  );
}
```

**Step 2: Create `app/(site)/testimonials/page.tsx`**

```tsx
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { getTestimonials } from "@/lib/strapi";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pilgrim Stories",
  description: "Hear from devotees whose lives were transformed by their journey with Nithyeshwar Tours.",
};

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <div className="py-20 px-6 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Pilgrim Stories"
          title="Voices of the Devoted"
          subtitle="Every journey changes a life. These are the stories of pilgrims who found what they sought."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>

        {testimonials.length === 0 && (
          <div className="text-center py-20">
            <p className="font-serif text-2xl text-navy">Stories coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
}
```

**Step 3: Create `app/(site)/travel-memories/page.tsx`**

```tsx
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel Memories",
  description: "A gallery of sacred moments from pilgrimages across India and beyond.",
};

// Placeholder gallery — replaced by Strapi media in production
const GALLERY = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `/images/gallery/memory-${i + 1}.jpg`,
  alt: `Sacred journey memory ${i + 1}`,
  caption: ["Varanasi Ganga Aarti", "Kedarnath Temple", "Jagannath Puri", "Tirupati Balaji", "Amarnath Yatra", "Kanchipuram Temples", "Mathura Vrindavan", "Shirdi Sai Baba", "Rameshwaram", "Dwarka", "Somnath", "Badrinath"][i],
}));

export default function TravelMemoriesPage() {
  return (
    <div className="py-20 px-6 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Gallery"
          title="Travel Memories"
          subtitle="A visual pilgrimage through the sacred destinations we have had the honour of sharing."
        />

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {GALLERY.map((item, i) => (
            <figure key={item.id} className="break-inside-avoid rounded-md overflow-hidden relative img-overlay group">
              <Image
                src={item.src}
                alt={item.alt}
                width={600}
                height={i % 3 === 0 ? 800 : 500}
                className="w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                quality={85}
              />
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 font-sans text-xs text-white/80 bg-gradient-to-t from-midnight/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 motion-safe:group-hover:opacity-100">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
```

**Step 4: Commit**

```bash
git add "app/(site)/services/" "app/(site)/testimonials/" "app/(site)/travel-memories/"
git commit -m "feat: implement Services, Testimonials, and Travel Memories pages"
```

---

## Task 14: Inquiry Page (Contact Form)

**Figma ref:** Screen 1:3446 — "Inquire with Reverence" headline, full-name/email/phone/destination/message form, Our Presence sidebar (Varanasi HQ, Rishikesh office), India map, Newsletter signup.

**Files:**
- Create: `app/(site)/inquiry/page.tsx`
- Create: `components/forms/InquiryForm.tsx`

**Step 1: Create `components/forms/InquiryForm.tsx`** (Client Component)

```tsx
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "loading" | "success" | "error";

export function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full bg-transparent font-sans text-sm text-midnight border-b border-midnight/20 pb-2 outline-none focus:border-gold-dark transition-colors duration-300 placeholder:text-midnight/30";

  const labelClass = "font-sans text-xs font-semibold tracking-[0.08em] uppercase text-midnight/50 mb-2 block";

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Inquiry form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full Name <span aria-label="required">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            placeholder="e.g. Aditya Sharma"
            className={inputClass}
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email Address <span aria-label="required">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="your@email.com"
            className={inputClass}
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="destination" className={labelClass}>
            Desired Destination
          </label>
          <select
            id="destination"
            name="destination"
            className={inputClass}
            defaultValue=""
            aria-label="Select a destination"
          >
            <option value="" disabled>Choose State / Yatra</option>
            <option value="uttar-pradesh">Uttar Pradesh</option>
            <option value="madhya-pradesh">Madhya Pradesh</option>
            <option value="odisha">Odisha</option>
            <option value="andaman">Andaman</option>
            <option value="tamil-nadu">Tamil Nadu</option>
            <option value="international">International</option>
            <option value="honeymoon">Honeymoon</option>
          </select>
        </div>
      </div>

      <div className="mb-8">
        <label htmlFor="message" className={labelClass}>
          Your Message / Spiritual Intent
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your journey aspirations..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "success" && (
        <div role="alert" className="mb-6 p-4 bg-gold/10 border-l-2 border-gold-dark rounded-sm">
          <p className="font-sans text-sm text-gold-dark font-medium">
            Your inquiry has been received. Our guides will reach out within 24 hours.
          </p>
        </div>
      )}

      {status === "error" && (
        <div role="alert" className="mb-6 p-4 bg-red-50 border-l-2 border-red-400 rounded-sm">
          <p className="font-sans text-sm text-red-700">
            Something went wrong. Please try again or call us directly.
          </p>
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === "loading"}
        aria-busy={status === "loading"}
      >
        {status === "loading" ? "Sending…" : "Submit Inquiry →"}
      </Button>
    </form>
  );
}
```

**Step 2: Create `app/api/inquiry/route.ts`**

```ts
import { NextRequest, NextResponse } from "next/server";
import { submitInquiry } from "@/lib/strapi";
import type { Inquiry } from "@/lib/types";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const inquiry: Inquiry = {
      fullName: String(body.fullName ?? ""),
      email: String(body.email ?? ""),
      phone: String(body.phone ?? ""),
      destination: String(body.destination ?? ""),
      groupSize: String(body.groupSize ?? ""),
      message: String(body.message ?? ""),
    };

    if (!inquiry.fullName || !inquiry.email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    await submitInquiry(inquiry);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to submit inquiry" }, { status: 500 });
  }
}
```

**Step 3: Create `app/(site)/inquiry/page.tsx`**

```tsx
import { InquiryForm } from "@/components/forms/InquiryForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inquire — Plan Your Sacred Journey",
  description: "Reach out to Nithyeshwar Tours to plan your personalized pilgrimage. Our spiritual guides are ready to assist.",
};

const OFFICES = [
  {
    city: "Varanasi Headquarters",
    address: "Shiv Ghat, Sacred Circle, Varanasi, UP 221001",
    phone: "+91 (542) 233-4455",
    email: "support@nithyeshwartours.com",
  },
  {
    city: "Rishikesh Office",
    address: "Spiritual Heights, Tapovan, Rishikesh, UK 249192",
    phone: "+91 (542) 233-4455",
    email: "support@nithyeshwartours.com",
  },
];

export default function InquiryPage() {
  return (
    <div className="py-20 px-6 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Form side */}
        <div className="lg:col-span-2">
          <p className="font-sans text-xs font-semibold tracking-[0.12em] uppercase text-gold-dark mb-4">
            Begin Your Pilgrimage
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-navy font-semibold leading-tight mb-3">
            Inquire with
            <br />
            <span className="text-gold-dark">Reverence.</span>
          </h1>
          <p className="font-sans text-base text-midnight/50 leading-relaxed mb-12 max-w-lg">
            Our spiritual guides are ready to assist you in tailoring a journey that resonates with your soul's deepest intentions.
          </p>

          <InquiryForm />
        </div>

        {/* Presence sidebar */}
        <aside aria-labelledby="presence-heading">
          <h2 id="presence-heading" className="font-sans text-xs font-semibold tracking-[0.12em] uppercase text-gold-dark mb-6">
            Our Presence
          </h2>

          <div className="space-y-6">
            {OFFICES.map((o) => (
              <div key={o.city} className="p-5 bg-surface-lowest rounded-md shadow-ambient border-l-2 border-gold-dark">
                <h3 className="font-sans text-sm font-semibold text-navy mb-1">{o.city}</h3>
                <address className="not-italic">
                  <p className="font-sans text-xs text-midnight/60 leading-relaxed mb-2">{o.address}</p>
                  <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="font-sans text-xs text-gold-dark hover:underline">
                    {o.phone}
                  </a>
                </address>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="mt-10 p-6 bg-navy rounded-md">
            <h3 className="font-serif text-lg text-white font-medium mb-2">
              Receive Spiritual Insights
            </h3>
            <p className="font-sans text-xs text-white/60 leading-relaxed mb-4">
              Subscribe to our sacred journal — stories, guides, and pilgrimage wisdom.
            </p>
            <form aria-label="Newsletter signup" className="flex gap-3">
              <label htmlFor="newsletter-email" className="sr-only">Your email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/10 text-white placeholder:text-white/30 font-sans text-xs px-3 py-2.5 rounded-md outline-none focus:ring-1 focus:ring-gold"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="bg-gold text-midnight font-sans text-xs font-semibold px-4 py-2.5 rounded-md hover:bg-gold-dark hover:text-white transition-colors duration-300"
              >
                Join
              </button>
            </form>
          </div>
        </aside>
      </div>
    </div>
  );
}
```

**Step 4: Commit**

```bash
git add "app/(site)/inquiry/" components/forms/ app/api/inquiry/
git commit -m "feat: implement Inquiry page with accessible form, Strapi submission, office sidebar"
```

---

## Task 15: Metadata, Sitemap, Robots, Image Optimization

**Files:**
- Create: `app/sitemap.ts`
- Create: `app/robots.ts`
- Modify: `next.config.ts`

**Step 1: Create `app/sitemap.ts`**

```ts
import type { MetadataRoute } from "next";
import { getAllPackageSlugs } from "@/lib/strapi";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getAllPackageSlugs();
  const base = "https://www.nithyeshwartours.com";

  const staticPages = [
    { url: base, priority: 1.0 },
    { url: `${base}/india`, priority: 0.9 },
    { url: `${base}/pilgrimage`, priority: 0.9 },
    { url: `${base}/about`, priority: 0.8 },
    { url: `${base}/services`, priority: 0.8 },
    { url: `${base}/testimonials`, priority: 0.7 },
    { url: `${base}/inquiry`, priority: 0.8 },
    { url: `${base}/travel-memories`, priority: 0.6 },
  ].map((p) => ({ ...p, lastModified: new Date(), changeFrequency: "monthly" as const }));

  const packagePages = slugs.map((slug) => ({
    url: `${base}/packages/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticPages, ...packagePages];
}
```

**Step 2: Create `app/robots.ts`**

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: "https://www.nithyeshwartours.com/sitemap.xml",
  };
}
```

**Step 3: Update `next.config.ts`** for Strapi image domain

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "*.nithyeshwartours.com",
        pathname: "/uploads/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
```

**Step 4: Commit**

```bash
git add app/sitemap.ts app/robots.ts next.config.ts
git commit -m "feat: add sitemap, robots.txt, and next/image remote pattern config"
```

---

## Task 16: Final Polish + Strapi Setup Guide

**Files:**
- Create: `docs/strapi-setup.md`

**Step 1: Create `docs/strapi-setup.md`**

Document the Strapi content types to create in the Strapi admin:

```markdown
# Strapi Setup Guide

## Required Content Types

### Package
Fields: slug (UID), title, subtitle, destination, category (enum), state, price (integer), currency (enum), duration, groupSize, availability, coverImage (Media), galleryImages (Media, multiple), description (Rich Text), highlights (JSON), isFeatured (Boolean), itinerary (Component - repeatable), testimonials (Relation)

### Itinerary (Component)
Fields: day (Integer), title, description (Text)

### Destination
Fields: slug (UID), name, state, description, coverImage (Media), packageCount (Integer)

### Testimonial
Fields: name, location, rating (Integer 1-5), text (Text), avatar (Media)

### Team Member
Fields: name, role, bio, avatar (Media), order (Integer)

### Inquiry
Fields: fullName, email, phone, destination, groupSize, message, status (enum: pending/replied/closed)

## Webhook Setup (Strapi → Next.js)

1. In Strapi Admin → Settings → Webhooks → Create New
2. URL: `https://your-domain.com/api/revalidate?secret=YOUR_REVALIDATE_SECRET`
3. Events: entry.publish, entry.update, entry.delete
4. Headers: Content-Type: application/json

## API Token

1. Settings → API Tokens → Create new token
2. Type: Custom — read access to all content types, write access to inquiries
3. Copy token → add to `.env.local` as `STRAPI_API_TOKEN`
```

**Step 2: Final type-check**

```bash
npx tsc --noEmit
```

Fix any type errors.

**Step 3: Final lint**

```bash
npm run lint
```

Fix any lint errors.

**Step 4: Final commit**

```bash
git add docs/strapi-setup.md
git commit -m "docs: add Strapi content type and webhook setup guide"
git commit -m "chore: fix type errors and lint warnings post-phase-1"
```

---

## Summary

| Task | Description | Key Files |
|---|---|---|
| 1 | Design tokens, fonts, global CSS | `app/globals.css`, `app/layout.tsx` |
| 2 | Strapi client + TypeScript types | `lib/strapi.ts`, `lib/types.ts` |
| 3 | On-demand revalidation webhook | `app/api/revalidate/route.ts` |
| 4 | Navbar (glassmorphism, accessible) | `components/layout/Navbar.tsx` |
| 5 | Footer (dark navy, 4-col) | `components/layout/Footer.tsx` |
| 6 | Shared UI components | `components/ui/` |
| 7 | Home page (all sections) | `app/(site)/page.tsx`, `components/sections/` |
| 8 | Package detail page | `app/(site)/packages/[slug]/page.tsx` |
| 9 | Package listing pages (7 destinations) | `app/(site)/packages/[destination]/page.tsx` |
| 10 | India States index | `app/(site)/india/page.tsx` |
| 11 | Pilgrimage main page | `app/(site)/pilgrimage/page.tsx` |
| 12 | Company / About page | `app/(site)/about/page.tsx` |
| 13 | Services, Testimonials, Travel Memories | `app/(site)/services/`, `testimonials/`, `travel-memories/` |
| 14 | Inquiry page + form API | `app/(site)/inquiry/page.tsx`, `app/api/inquiry/route.ts` |
| 15 | Sitemap, robots, image config | `app/sitemap.ts`, `app/robots.ts`, `next.config.ts` |
| 16 | Final polish + Strapi docs | `docs/strapi-setup.md` |

**Phase 2 (deferred):** AI Chatbot (`/chat`), Trip Builder (`/trip-builder`)
