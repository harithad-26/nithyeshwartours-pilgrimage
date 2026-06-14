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
      className="py-24 bg-surface-low overflow-hidden"
      aria-labelledby="luxury-escapes-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: images with decorative gold elements */}
          <div className="relative order-2 lg:order-1 flex justify-center">
            {/* Decorative gold corner border — top-left of composition */}
            <div
              className="absolute top-2 left-2 md:top-0 md:left-0 w-24 h-24 border-t-2 border-l-2 border-gold-dark/60 rounded-tl-sm z-10"
              aria-hidden="true"
            />

            {/* Main image with gold frame offset */}
            <div className="relative rounded-2xl overflow-hidden aspect-4/5 w-full max-w-md md:max-w-none border border-gold-dark/15 shadow-xl group/img">
              <Image
                src="/images/luxury-escapes.jpg"
                alt="Luxury heritage palace hotel with ornate architecture"
                fill
                quality={90}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
              />
            </div>

            {/* Overlapping secondary image — bottom-left */}
            <div
              className="absolute -bottom-6 left-4 md:-left-6 w-44 h-36 rounded-xl overflow-hidden border-4 border-surface-low shadow-[0_20px_40px_rgba(0,6,19,0.18)] z-20 transition-transform duration-500 hover:-translate-y-1"
              aria-hidden="true"
            >
              <Image
                src="/images/destinations/madhya-pradesh.jpg"
                alt="Sacred temple interior"
                fill
                quality={85}
                sizes="176px"
                className="object-cover"
              />
            </div>

            {/* Gold ambient blur */}
            <div
              className="absolute -top-8 -left-8 w-48 h-48 bg-gold-muted/30 blur-3xl rounded-full -z-10"
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
                <li key={point} className="flex items-start gap-4">
                  {/* Custom Gold Star Icon */}
                  <svg
                    className="mt-1 shrink-0 text-gold-dark"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path d="M12 2L2 12l10 10 10-10L12 2z" />
                    <circle cx="12" cy="12" r="3.5" fill="currentColor" />
                  </svg>
                  <span className="font-sans text-base font-medium text-midnight/80 leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/trip-builder"
              className="group/btn inline-flex items-center gap-2 bg-navy text-gold font-sans text-sm font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:bg-midnight hover:scale-[1.02] active:scale-[0.98] min-h-12"
            >
              Explore Luxury Collections
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="transition-transform duration-300 group-hover/btn:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
