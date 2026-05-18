import Link from "next/link";
import { NavLink } from "./NavLink";
import { MobileNavToggle } from "./MobileNav";

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
            className="font-serif text-white font-semibold text-lg tracking-tight shrink-0 transition-opacity duration-300 hover:opacity-80"
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

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-2">
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

            {/* Mobile hamburger — Client Component manages open/close state */}
            <MobileNavToggle />
          </div>
        </div>

        {/* Mobile nav — hidden by default, toggle handled by MobileNavToggle */}
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
