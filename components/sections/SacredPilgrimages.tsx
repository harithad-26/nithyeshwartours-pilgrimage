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
    imageSrc: "/images/india-states/varanasi-ghats.jpg",
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
      className="py-24 bg-midnight"
      aria-labelledby="sacred-pilgrimages-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="THE ETERNAL PATH"
          title="Sacred Pilgrimages"
          subtitle="Walking the steps of the ancients. Journeys that transform the spirit through ritual, history, and profound peace."
          align="center"
          light
        />

        {/* Horizontally scrollable card row */}
        <div
          className="flex gap-6 overflow-x-auto pb-4 mt-4 snap-x snap-mandatory scrollbar-none"
          role="list"
          aria-label="Sacred pilgrimage packages"
        >
          {displayItems.map((item) => (
            <div
              key={item.id}
              role="listitem"
              className="snap-start shrink-0 w-85 sm:w-95"
            >
              <Link
                href={item.href}
                className="group flex flex-col bg-navy border border-white/10 rounded-md overflow-hidden transition-all duration-300 hover:border-gold/30 focus-visible:outline-2 focus-visible:outline-gold h-full"
                aria-label={`View ${item.title} pilgrimage`}
              >
                {/* Card image */}
                <div className="relative h-56 shrink-0 overflow-hidden">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    sizes="380px"
                    quality={85}
                    className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                  />
                  {/* Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="font-sans text-[10px] font-semibold tracking-[0.12em] uppercase bg-gold-dark/90 text-white px-3 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-6 gap-3">
                  <h3 className="font-serif text-xl text-gold font-normal leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-white/60 leading-relaxed flex-1">
                    {item.description}
                  </p>

                  {/* Card footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="font-sans text-sm text-white/70">
                      {item.duration}
                    </span>
                    <span className="font-serif text-xl text-white font-normal">
                      {item.price}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/pilgrimage"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-gold border border-gold/40 px-6 py-3 rounded-md transition-all duration-300 hover:bg-gold hover:text-midnight focus-visible:outline-2 focus-visible:outline-gold min-h-11"
          >
            View All Pilgrimages
          </Link>
        </div>
      </div>
    </section>
  );
}
