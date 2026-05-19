import Link from "next/link";

const FOOTER_LINKS = {
  EXPLORE: [
    { href: "/india", label: "Spiritual Guides" },
    { href: "/india", label: "Destinations" },
    { href: "/inquiry", label: "Newsletter" },
  ],
  COMPANY: [
    { href: "/about", label: "About Us" },
    { href: "/inquiry", label: "Contact Us" },
    { href: "/inquiry", label: "Terms of Service" },
  ],
  PRIVACY: [
    { href: "/inquiry", label: "Privacy Policy" },
    { href: "/inquiry", label: "Cookie Settings" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-midnight font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-10">
        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-serif text-gold font-normal text-xl tracking-wide mb-4 block hover:opacity-80 transition-opacity duration-300"
            >
              Nithyeshwar Tours
            </Link>
            <p className="text-sm leading-relaxed text-surface/60 max-w-xs">
              Curating profound spiritual journeys through the ancient and sacred
              landscapes of India and beyond.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links], colIndex) => (
            <div key={heading}>
              <h3 className="text-gold text-xs font-semibold tracking-wider uppercase mb-4">
                {heading}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-surface/60 hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social icons in PRIVACY column */}
              {colIndex === 2 && (
                <div className="flex gap-4 pt-6" aria-label="Social media links">
                  <a
                    href="#"
                    aria-label="Visit our website"
                    className="text-surface/50 hover:text-gold transition-colors duration-300"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Share this page"
                    className="text-surface/50 hover:text-gold transition-colors duration-300"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <circle cx="18" cy="5" r="3"/>
                      <circle cx="6" cy="12" r="3"/>
                      <circle cx="18" cy="19" r="3"/>
                      <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/>
                    </svg>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-surface/10 pt-8 text-center">
          <p className="text-xs text-surface/40 tracking-[0.02em]">
            © {new Date().getFullYear()} Nithyeshwar Tours. The Sacred Journey.
          </p>
        </div>
      </div>
    </footer>
  );
}
