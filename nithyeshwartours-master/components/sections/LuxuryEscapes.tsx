import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/ui";

const highlights = [
  "Personalized 24/7 Spiritual Concierge",
  "Private Jet & Helicopter Transfers",
  "Exclusive After-Hours Temple Access",
];

export function LuxuryEscapes() {
  return (
    <section
      className="py-24 bg-surface-low"
      aria-labelledby="luxury-escapes-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: images with decorative gold elements */}
          <div className="relative order-2 lg:order-1">
            {/* Decorative gold corner border — top-left of composition */}
            <div
              className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold-dark/40 rounded-tl-sm z-10"
              aria-hidden="true"
            />

            {/* Main image */}
            <div className="relative rounded-md overflow-hidden aspect-4/5">
              <Image
                src="/images/luxury-escapes.jpg"
                alt="Luxury heritage palace hotel with ornate architecture"
                fill
                quality={85}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Overlapping secondary image — bottom-left */}
            <div
              className="absolute -bottom-6 -left-6 w-44 h-36 rounded-md overflow-hidden border-4 border-surface-low shadow-[0_20px_40px_rgba(0,6,19,0.15)] z-20"
              aria-hidden="true"
            >
              <Image
                src="/images/destinations/madhya-pradesh.jpg"
                alt="Sacred temple interior"
                fill
                quality={80}
                sizes="176px"
                className="object-cover"
              />
            </div>

            {/* Gold ambient blur */}
            <div
              className="absolute -top-8 -left-8 w-48 h-48 bg-gold-muted blur-3xl rounded-full -z-10"
              aria-hidden="true"
            />
          </div>

          {/* Right: text content */}
          <div className="order-1 lg:order-2">
            <SectionHeader
              eyebrow="EXCLUSIVITY REDEFINED"
              title="Luxury Escapes for the Discerning Soul"
              align="left"
            />

            <p className="font-sans text-base text-[#43474e] leading-relaxed mb-8 mt-4">
              Our Luxury Escapes prioritize silence, space, and spirit. Stay in
              restored palaces, private villas, and heritage sanctuaries where
              every detail is an homage to timeless elegance.
            </p>

            <ul className="space-y-4 mb-10" aria-label="Luxury escape highlights">
              {highlights.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  {/* Checkmark icon */}
                  <svg
                    className="mt-0.5 shrink-0 text-gold-dark"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="font-sans text-sm text-midnight/70 leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/packages/honeymoon"
              className="inline-flex items-center gap-2 bg-navy text-white font-sans text-sm font-semibold px-8 py-3 rounded-md transition-all duration-300 hover:bg-midnight focus-visible:outline-2 focus-visible:outline-gold min-h-11"
            >
              Explore Luxury Collections
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
