import Link from "next/link";
import { NavLink } from "./NavLink";
import { MobileNavToggle } from "./MobileNav";

const NAV_LINKS = [
  { href: "/india", label: "India" },
  { href: "/packages/international", label: "International" },
  { href: "/pilgrimages", label: "Pilgrimages" },
  { href: "/trip-builder", label: "Trip Builder" },
  { href: "/about", label: "About Us" },
];

export function Navbar() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 max-w-7xl mx-auto">
      <nav className="bg-white/80 backdrop-blur-lg border border-white/40 rounded-2xl shadow-[0_12px_32px_rgba(0,31,63,0.08)]" aria-label="Main navigation">
        <div className="px-6 md:px-10 h-18 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-midnight font-bold text-lg lg:text-xl tracking-[0.12em] uppercase shrink-0 transition-opacity duration-300 hover:opacity-75"
            aria-label="Nithyeshwar Tours — Home"
          >
            NITHYESHWAR <span className="text-gold-dark font-medium">TOURS</span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10" role="list">
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
              className="hidden md:inline-flex items-center justify-center bg-navy text-gold font-sans text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl transition-all duration-300 hover:bg-midnight hover:scale-[1.02] active:scale-[0.98] shadow-md min-h-[42px]"
            >
              Book Now
            </Link>
            <MobileNavToggle />
          </div>
        </div>

        {/* Mobile nav */}
        <div id="mobile-nav" className="md:hidden border-t border-midnight/5 hidden bg-white/95 rounded-b-2xl overflow-hidden">
          <div className="px-6 py-5 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
            <Link
              href="/inquiry"
              className="inline-flex justify-center bg-navy text-gold font-sans text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl mt-2 min-h-[44px] items-center"
            >
              Book Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
