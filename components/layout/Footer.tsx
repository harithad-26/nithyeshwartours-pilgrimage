import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = {
  EXPLORE: [
    { href: "/india", label: "Destinations" },
    { href: "/pilgrimage", label: "Pilgrimages" },
    { href: "/services", label: "Services" },
  ],
  COMPANY: [
    { href: "/about", label: "About Us" },
    { href: "/inquiry", label: "Contact Us" },
    { href: "/testimonials", label: "Testimonials" },
  ],
  CONTACT: [
    { href: "tel:+917200118411", label: "+91 72001 18411" },
    { href: "https://wa.me/917200118411", label: "WhatsApp Us" },
    { href: "mailto:info@nithyeshwartours.com", label: "info@nithyeshwartours.com" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-midnight font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-12 md:mb-16 lg:mb-20">
          {/* Brand column */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity duration-300"
            >
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo/nithyeshwar-logo.svg"
                  alt="Nithyeshwar Tours"
                  fill
                  className="object-contain brightness-0 invert opacity-80"
                />
              </div>
              <span className="font-serif text-gold font-normal text-xl tracking-wide">
                Nithyeshwar Tours
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-surface/60 max-w-xs mb-4">
              Curating profound spiritual journeys through the ancient and sacred
              landscapes of India and beyond.
            </p>
            <address className="text-sm leading-relaxed text-surface/60 not-italic">
              99, Kadambarayan Street,<br />
              Tiruvannamalai, Tamil Nadu
            </address>
            {/* Social Media Links */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com/nithyeshwartours"
                target="_blank"
                rel="noopener noreferrer"
                className="text-surface/60 hover:text-gold transition-colors duration-300"
                aria-label="Follow us on Instagram"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://facebook.com/nithyeshwartours"
                target="_blank"
                rel="noopener noreferrer"
                className="text-surface/60 hover:text-gold transition-colors duration-300"
                aria-label="Follow us on Facebook"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://x.com/nithyeshwartours"
                target="_blank"
                rel="noopener noreferrer"
                className="text-surface/60 hover:text-gold transition-colors duration-300"
                aria-label="Follow us on X (Twitter)"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
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
