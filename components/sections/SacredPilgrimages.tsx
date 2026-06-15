import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/ui";
import type { Package } from "@/lib/types";
import { getStrapiImageUrl } from "@/lib/strapi";

interface SacredPilgrimagesProps {
  packages: Package[];
}

const FALLBACK_CARDS = [
  {
    id: "fallback-1",
    title: "Kashi — The Eternal City",
    description: "Walk the ancient ghats of Varanasi and witness the transcendent Ganga Aarti at dusk.",
    duration: "7N / 8D",
    price: "₹55,000",
    badge: "ICONIC",
    imageSrc: "/images/india-states/varanasi-ghats-photo.png",
    imageAlt: "Evening Ganga Aarti ceremony at Varanasi ghats",
    href: "/packages/uttar-pradesh",
  },
  {
    id: "fallback-2",
    title: "The Dravidian Trail",
    description: "Journey through Tamil Nadu's grand Dravidian temples and ancient sacred traditions.",
    duration: "10N / 11D",
    price: "₹72,000",
    badge: "ARCHITECTURAL",
    imageSrc: "/images/india-states/tamil-nadu.jpg",
    imageAlt: "Dravidian temple gopuram in Tamil Nadu",
    href: "/packages/tamil-nadu",
  },
  {
    id: "fallback-3",
    title: "Chardham Yatra",
    description: "The sacred circuit of Badrinath, Kedarnath, Gangotri and Yamunotri in the Himalayas.",
    duration: "12N / 13D",
    price: "₹1,45,000",
    badge: "DIVINE",
    imageSrc: "/images/pilgrimage/badrinath.jpg",
    imageAlt: "Badrinath temple shrine in the Himalayas",
    href: "/pilgrimage",
  },
];

const BADGES = ["ICONIC", "ARCHITECTURAL", "DIVINE"];

export function SacredPilgrimages({ packages }: SacredPilgrimagesProps) {
  const pilgrimagePackages = packages
    .filter((p) => p.category === "pilgrimage")
    .slice(0, 3);

  const displayItems =
    pilgrimagePackages.length > 0
      ? pilgrimagePackages.map((pkg, i) => ({
          id: String(pkg.id),
          title: pkg.title,
          description: pkg.subtitle,
          duration: pkg.duration,
          price: `₹${pkg.price.toLocaleString("en-IN")}`,
          badge: BADGES[i] ?? "SACRED",
          imageSrc: getStrapiImageUrl(pkg.coverImage.url),
          imageAlt: pkg.coverImage.alternativeText ?? pkg.title,
          href: `/packages/${pkg.slug}`,
        }))
      : FALLBACK_CARDS;

  return (
    <section
      className="py-12 md:py-16 lg:py-24 bg-midnight relative overflow-hidden"
      aria-labelledby="sacred-pilgrimages-heading"
    >
      {/* Decorative gold ambient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-muted/5 blur-[120px] rounded-full -z-10" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <SectionHeader
          eyebrow="THE ETERNAL PATH"
          title="Sacred Pilgrimages"
          subtitle="Walking the steps of the ancients. Journeys that transform the spirit through ritual, history, and profound peace."
          align="center"
          light
        />

        {/* Responsive layout: swipeable scroll on mobile, static grid on desktop */}
        <div
          className="grid grid-flow-col auto-cols-[85%] sm:auto-cols-[70%] md:auto-cols-auto md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible pb-6 mt-6 md:mt-8 snap-x snap-mandatory scrollbar-hide md:snap-none"
          role="list"
          aria-label="Sacred pilgrimage packages"
        >
          {displayItems.map((item) => (
            <div
              key={item.id}
              role="listitem"
              className="snap-start shrink-0 h-full"
            >
              <Link
                href={item.href}
                className="group flex flex-col bg-navy/40 border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:border-gold/30 hover:shadow-[0_20px_50px_rgba(254,214,91,0.08)] hover:-translate-y-2 active:scale-[0.98] active:duration-150 focus-visible:outline-2 focus-visible:outline-gold h-full"
                aria-label={`View ${item.title} pilgrimage`}
              >
                {/* Card image */}
                <div className="relative h-48 md:h-60 shrink-0 overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={90}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="font-sans text-[9px] font-bold tracking-widest uppercase bg-gold text-midnight px-3 py-1.5 rounded-full shadow-md">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-5 md:p-6 gap-2 md:gap-3 bg-gradient-to-b from-transparent to-navy/10">
                  <h3 className="font-serif text-xl md:text-2xl text-gold font-normal leading-snug drop-shadow-sm">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-white/70 leading-relaxed flex-1 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Card footer */}
                  <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-white/10 mt-1 md:mt-2">
                    <span className="font-sans text-[10px] md:text-xs tracking-wider uppercase text-white/50">
                      {item.duration}
                    </span>
                    <span className="font-serif text-lg md:text-xl text-white font-semibold">
                      {item.price}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 md:mt-12 text-center">
          <Link
            href="/pilgrimage"
            className="group/btn inline-flex items-center gap-2 font-sans text-xs md:text-sm font-bold text-midnight bg-gold px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-lg transition-all duration-300 hover:bg-gold-light hover:scale-[1.02] active:scale-[0.98] min-h-[44px] md:min-h-12"
          >
            View All Pilgrimages
          </Link>
        </div>
      </div>
    </section>
  );
}
