# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev        # Start dev server (Turbopack, default)
npm run dev -- --webpack   # Start dev server with Webpack instead
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint (next build no longer runs lint)
npm run lint:fix   # Auto-fix lint issues (add this script if needed)
npx tsc --noEmit   # Type-check without emitting files
```

## Next.js 16 — What Changed

This is Next.js 16 with React 19. Key breaking changes from prior versions:

- **Turbopack is the default bundler.** `next dev` and `next build` use Turbopack unless you pass `--webpack`.
- **`next build` no longer runs ESLint.** Run `npm run lint` separately in CI.
- **Route params are a Promise** — always `await params` in pages/layouts:
  ```tsx
  export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
  }
  ```
- **ESLint uses flat config** (`eslint.config.mjs`), not `.eslintrc.*`.
- **Tailwind CSS v4** — configured via `@import 'tailwindcss'` in `app/globals.css`, no `tailwind.config.js` file needed. Theme tokens are declared with `@theme` blocks in CSS.

## Architecture

```
app/                     # Next.js App Router (all Server Components by default)
  layout.tsx             # Root layout — fonts, global metadata
  globals.css            # Tailwind import + @theme token declarations
  page.tsx               # Home page (/)
  [route]/
    page.tsx             # Route page (Server Component)
    layout.tsx           # Optional nested layout
components/
  ui/                    # Shared primitives (buttons, cards, inputs)
  sections/              # Page-level section components
  layout/                # Navbar, Footer, etc.
lib/
  strapi.ts              # Strapi API client + fetch helpers
  types.ts               # Shared TypeScript types for CMS content
public/                  # Static assets
```

Add `'use client'` only when a component needs interactivity (`useState`, `useEffect`, event handlers, browser APIs). Pages and layouts fetch data as async Server Components and pass data down as props.

## Import Alias

`@/*` maps to the project root (`./*`), so `@/components/ui/Button` resolves to `components/ui/Button.tsx`.

## Design System (design.md)

Colors — defined as CSS custom properties in `@theme` in `globals.css`:

| Token | Hex | Use |
|---|---|---|
| `--color-midnight` | `#000613` | Critical text, deepest backgrounds |
| `--color-navy` | `#001f3f` | Hero sections, brand blocks |
| `--color-gold-dark` | `#735c00` | Sophisticated callouts |
| `--color-gold` | `#fed65b` | Highlights, active states |
| `--color-surface` | `#faf9f8` | Default page background (never pure white) |

Fonts: **Noto Serif** for all display/headline text, **Manrope** for body and UI. Load both via `next/font/google` in `app/layout.tsx`.

Styling rules:
- No 1px solid borders — use background-color shifts or negative space to section content.
- Glassmorphism on nav/cards: `background-color` at 60–80% opacity + `backdrop-blur`.
- Ambient shadows use navy tint: `rgba(0, 31, 63, 0.06)` with 30px blur, 10px Y-offset.
- Use slow transitions (300ms+) — no snappy animations.
- Default background is `--color-surface` (#faf9f8), not white.

## Strapi CMS

Strapi runs as a separate service (not in this repo). All content management (packages, inquiries, users) is done via Strapi's built-in admin panel — there is no custom admin UI in this Next.js app.

API calls go through `lib/strapi.ts`. Pages use **on-demand ISR** with a long fallback TTL (`{ next: { revalidate: 3600, tags: ['packages'] } }`). When Strapi publishes content, it fires a webhook to `app/api/revalidate/route.ts`, which calls `revalidateTag()` to instantly invalidate affected pages.

Never call Strapi directly from Client Components — always fetch in Server Components or Route Handlers and pass data as props.

Content types managed in Strapi: packages, destinations, testimonials, team members, itineraries, inquiries.

## Phase Plan

**Phase 1 (current):** All 18 CMS-driven public pages — Home, Company, India States, all Package listing/detail pages, Pilgrimage, Services, Testimonials, Inquiry, Travel Memories.

**Phase 2:** AI Chatbot and Trip Builder (complex interactive features, deferred).

## Site Pages (from Figma)

| Route | Figma Screen | Notes |
|---|---|---|
| `/` | Home Page | Hero, top packages, pilgrimages, testimonials |
| `/about` | Company Page | Legacy story, mission, team |
| `/india` | India States Page | State-based destination listing |
| `/packages/[slug]` | Package Detail Page | Itinerary days, pricing, booking sidebar |
| `/packages/madhya-pradesh` | Madhya Pradesh Packages | |
| `/packages/uttar-pradesh` | Uttar Pradesh Packages | |
| `/packages/odisha` | Odisha Packages | |
| `/packages/andaman` | Andaman Packages | |
| `/packages/tamil-nadu` | Tamil Nadu Pilgrimage | |
| `/packages/international` | International Packages | |
| `/packages/honeymoon` | Honeymoon Page | |
| `/pilgrimage` | Pilgrimage Main Page | Long-form, full spiritual journey page |
| `/services` | Services Page | |
| `/testimonials` | Testimonials Page | |
| `/inquiry` | Inquiry Page | Contact/booking form |
| `/travel-memories` | Travel Memories Page | Photo gallery / UGC |
| `/trip-builder` | Trip Builder | Interactive itinerary builder |
| `/chat` | AI Chatbot Screen | |
| `/admin` | Admin Dashboard | "Sacred Insights" — bookings, inquiries, revenue |
