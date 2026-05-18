import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/ui";

const highlights = [
  "Handpicked luxury heritage hotels and palace stays",
  "Private guided tours with expert local historians",
  "Bespoke itineraries tailored to your preferences",
  "24/7 concierge and on-ground support",
  "Seamless logistics — from flights to last-mile transfers",
];

export function LuxuryEscapes() {
  return (
    <section
      className="py-[var(--spacing-section)] bg-navy"
      aria-labelledby="luxury-escapes-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text content */}
          <div>
            <SectionHeader
              eyebrow="Premium Travel"
              title="Luxury Escapes"
              subtitle="Step beyond the ordinary. Our curated luxury escapes blend India's timeless heritage with modern indulgence — crafting memories that last a lifetime."
              align="left"
              light
            />

            <ul className="space-y-4 mb-10" aria-label="Luxury escape highlights">
              {highlights.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  {/* Gold bullet */}
                  <span
                    className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-gold"
                    aria-hidden="true"
                  />
                  <span className="font-sans text-sm text-white/70 leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/packages?category=honeymoon"
              className="inline-flex items-center gap-2 bg-gold text-midnight font-sans text-sm font-semibold px-8 py-3 rounded-md transition-all duration-300 hover:bg-gold-dark hover:text-white focus-visible:outline-2 focus-visible:outline-gold min-h-[44px]"
            >
              Explore Luxury Packages
            </Link>
          </div>

          {/* Right: image with gold border offset effect */}
          <div className="relative">
            {/* Decorative gold border shifted behind */}
            <div
              className="absolute inset-0 translate-x-4 translate-y-4 border-2 border-gold rounded-md"
              aria-hidden="true"
            />
            {/* Image */}
            <div className="relative rounded-md overflow-hidden aspect-[4/3]">
              <Image
                src="/images/luxury-escapes.jpg"
                alt="Luxury palace hotel with ornate architecture"
                fill
                quality={85}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
