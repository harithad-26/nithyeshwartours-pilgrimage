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
              Guiding pilgrims across sacred lands for over three decades.
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
