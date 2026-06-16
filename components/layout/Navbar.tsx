import Link from "next/link";
import Image from "next/image";
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
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/60 shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="h-20 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 transition-opacity duration-300 hover:opacity-75"
            aria-label="Nithyeshwar Tours — Home"
          >
            <div className="relative w-12 h-12">
              <Image
                src="/images/logo/nithyeshwar-logo.svg"
                alt="Nithyeshwar Tours"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-serif text-midnight font-bold text-base sm:text-lg lg:text-xl tracking-[0.12em] uppercase">
              NITHYESHWAR <span className="text-gold-dark font-medium">TOURS</span>
            </span>
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
            <div className="hidden md:block">
              <Link
                href="/inquiry"
                className="btn-premium btn-premium-primary text-xs px-5 py-2.5 min-h-[40px]"
              >
                <span>Book Now</span>
              </Link>
            </div>
            <MobileNavToggle />
          </div>
        </div>

        {/* Mobile nav */}
        <div id="mobile-nav" className="md:hidden border-t border-slate-100 hidden bg-white overflow-hidden">
          <div className="px-4 py-5 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
            <Link
              href="/inquiry"
              className="btn-premium btn-premium-primary w-full mt-2"
            >
              <span>Book Now</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
