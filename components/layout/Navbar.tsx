import Link from "next/link";
import { NavLink } from "./NavLink";
import { MobileNavToggle } from "./MobileNav";

const NAV_LINKS = [
  { href: "/india", label: "India" },
  { href: "/packages/international", label: "International" },
  { href: "/pilgrimage", label: "Pilgrimages" },
  { href: "/trip-builder", label: "Trip Builder" },
  { href: "/about", label: "About Us" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="glass-surface" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-midnight font-bold text-xl lg:text-2xl tracking-[0.1em] uppercase shrink-0 transition-opacity duration-300 hover:opacity-70"
            aria-label="Nithyeshwar Tours — Home"
          >
            NITHYESHWAR TOURS
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-10" role="list">
            {NAV_LINKS.map((link) => (
              <div key={link.href} role="listitem">
                <NavLink href={link.href}>{link.label}</NavLink>
              </div>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/inquiry"
              className="hidden md:inline-flex items-center bg-navy text-white font-sans text-sm font-semibold px-5 py-2 rounded-md transition-all duration-300 hover:bg-midnight focus-visible:outline-2 focus-visible:outline-gold min-h-[44px]"
            >
              Book Now
            </Link>
            <MobileNavToggle />
          </div>
        </div>

        {/* Mobile nav */}
        <div id="mobile-nav" className="md:hidden border-t border-midnight/10 hidden bg-surface/95">
          <div className="px-6 py-5 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
            <Link
              href="/inquiry"
              className="inline-flex justify-center bg-navy text-white font-sans text-sm font-semibold px-5 py-3 rounded-md mt-2 min-h-[44px] items-center"
            >
              Book Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
