import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/ui";
import type { Package } from "@/lib/types";
import { getStrapiImageUrl } from "@/lib/strapi";

interface SacredPilgrimagesProps {
  packages: Package[];
}

// Static fallback cards shown when packages array is empty
const FALLBACK_CARDS = [
  {
    id: "fallback-1",
    title: "Char Dham Yatra",
    category: "Pilgrimage",
    imageSrc: "/images/pilgrimage-char-dham.jpg",
    imageAlt: "Kedarnath temple in the Himalayas",
  },
  {
    id: "fallback-2",
    title: "Varanasi & Ganga Aarti",
    category: "Pilgrimage",
    imageSrc: "/images/pilgrimage-varanasi.jpg",
    imageAlt: "Evening Ganga Aarti ceremony at Varanasi ghats",
  },
  {
    id: "fallback-3",
    title: "Tirupati Balaji Darshan",
    category: "Pilgrimage",
    imageSrc: "/images/pilgrimage-tirupati.jpg",
    imageAlt: "Tirupati Venkateswara temple gopuram",
  },
];

export function SacredPilgrimages({ packages }: SacredPilgrimagesProps) {
  const pilgrimagePackages = packages
    .filter((p) => p.category === "pilgrimage")
    .slice(0, 3);

  // Build display items: use real packages if available, else static fallbacks
  const displayItems =
    pilgrimagePackages.length > 0
      ? pilgrimagePackages.map((pkg) => ({
          id: String(pkg.id),
          title: pkg.title,
          category: pkg.category,
          imageSrc: getStrapiImageUrl(pkg.coverImage.url),
          imageAlt: pkg.coverImage.alternativeText ?? pkg.title,
          href: `/packages/${pkg.slug}`,
        }))
      : FALLBACK_CARDS.map((card) => ({
          ...card,
          href: "/pilgrimage",
        }));

  return (
    <section
      className="py-[var(--spacing-section)] bg-surface-low"
      aria-labelledby="sacred-pilgrimages-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Spiritual Travel"
          title="Sacred Pilgrimages"
          subtitle="Journey to the holiest sites in India. We handle every detail so you can focus on what matters most — your spiritual experience."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group block rounded-md overflow-hidden focus-visible:outline-2 focus-visible:outline-gold"
              aria-label={`View ${item.title} pilgrimage package`}
            >
              {/* Card: fixed height image with gradient overlay */}
              <div className="relative h-72 img-overlay">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  quality={85}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                />
                {/* Bottom gradient for text legibility */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent z-10"
                  aria-hidden="true"
                />
                {/* Category label + title */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                  <p className="font-sans text-[10px] font-semibold tracking-[0.12em] uppercase text-gold mb-1.5">
                    {item.category}
                  </p>
                  <h3 className="font-serif text-xl text-white font-semibold leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA link */}
        <div className="mt-10 text-center">
          <Link
            href="/pilgrimage"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-gold-dark border border-gold-dark px-6 py-2.5 rounded-md transition-all duration-300 hover:bg-gold-dark hover:text-white focus-visible:outline-2 focus-visible:outline-gold min-h-[44px]"
          >
            View All Pilgrimages
          </Link>
        </div>
      </div>
    </section>
  );
}
