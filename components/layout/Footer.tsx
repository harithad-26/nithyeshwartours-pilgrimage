import Link from "next/link";

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
            <p className="text-sm leading-relaxed text-surface/60 max-w-xs mb-4">
              Curating profound spiritual journeys through the ancient and sacred
              landscapes of India and beyond.
            </p>
            <address className="text-sm leading-relaxed text-surface/60 not-italic">
              99, Kadambarayan Street,<br />
              Tiruvannamalai, Tamil Nadu
            </address>
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
