import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/ui";
import { getStrapiImageUrl } from "@/lib/strapi";
import type { Package } from "@/lib/types";

interface TopPackagesProps {
  packages: Package[];
}

// Static fallback bento cards shown when no packages from Strapi
const FALLBACK_CARDS = [
  {
    id: "f1",
    title: "Golden Triangle Luxury Retreat",
    description: "Delhi, Agra & Jaipur — immerse in Mughal grandeur and Rajput splendour.",
    price: "₹1,24,000",
    badge: "BEST SELLER",
    imageSrc: "/images/destinations/madhya-pradesh.jpg",
    href: "/packages/madhya-pradesh",
    large: true,
  },
  {
    id: "f2",
    title: "Pink City Heritage",
    description: "A royal sojourn through Jaipur's palaces and havelis.",
    price: "₹86,500",
    badge: null,
    imageSrc: "/images/india-states/rajasthan.jpg",
    href: "/packages/madhya-pradesh",
    large: false,
  },
  {
    id: "f3",
    title: "Kerala Soul Sojourn",
    description: "Backwaters, Ayurveda, and the emerald heart of South India.",
    price: "₹94,000",
    badge: null,
    imageSrc: "/images/india-states/goa.jpg",
    href: "/packages/madhya-pradesh",
    large: false,
  },
  {
    id: "f4",
    title: "Himalayan Zenith Expedition",
    description: "From Rishikesh to Kedarnath — a journey to the roof of the world.",
    price: "₹2,10,000",
    badge: null,
    imageSrc: "/images/india-states/himachal.jpg",
    href: "/packages/madhya-pradesh",
    large: true,
  },
];

interface BentoCard {
  id: string;
  title: string;
  description: string;
  price: string;
  badge: string | null;
  imageSrc: string;
  href: string;
  large: boolean;
}

export function TopPackages({ packages }: TopPackagesProps) {
  // Build bento cards from CMS or fallback (show exactly 4)
  const cards: BentoCard[] = packages.length >= 4
    ? packages.slice(0, 4).map((pkg, i) => ({
        id: String(pkg.id),
        title: pkg.title,
        description: pkg.subtitle ?? "",
        price: pkg.price ? `₹${pkg.price.toLocaleString("en-IN")}` : "",
        badge: i === 0 ? "BEST SELLER" : null,
        imageSrc: getStrapiImageUrl(pkg.coverImage.url),
        href: `/packages/${pkg.slug}`,
        large: i === 0 || i === 3,
      }))
    : FALLBACK_CARDS;

  return (
    <section
      className="py-24 bg-surface"
      aria-labelledby="top-packages-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header row */}
        <div className="flex items-center justify-between mb-12 gap-6">
          <SectionHeader
            eyebrow="CURATED COLLECTIONS"
            title="Top Packages"
            align="left"
          />
          <Link
            href="/india"
            className="group/btn flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-gold-dark bg-gold-muted/10 border border-gold-dark/25 px-5 py-3 rounded-full transition-all duration-300 hover:bg-gold-dark hover:text-white shrink-0 shadow-xs hover:shadow-md"
            aria-label="View all packages"
          >
            <span>View All Packages</span>
            <svg
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        {/* 12-col bento grid: row1 = [8,4], row2 = [4,8] */}
        <div className="grid grid-cols-12 gap-6">
          {/* Row 1: large (8) + small (4) */}
          {cards[0] && (
            <BentoCard card={cards[0]} className="col-span-12 md:col-span-8 h-[450px]" priority />
          )}
          {cards[1] && (
            <BentoCard card={cards[1]} className="col-span-12 md:col-span-4 h-[450px]" />
          )}

          {/* Row 2: small (4) + large (8) */}
          {cards[2] && (
            <BentoCard card={cards[2]} className="col-span-12 md:col-span-4 h-[450px]" />
          )}
          {cards[3] && (
            <BentoCard card={cards[3]} className="col-span-12 md:col-span-8 h-[450px]" />
          )}
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  card,
  className,
  priority = false,
}: {
  card: BentoCard;
  className: string;
  priority?: boolean;
}) {
  return (
    <Link
      href={card.href}
      className={`group relative rounded-2xl overflow-hidden block border border-midnight/5 hover:border-gold-dark/30 hover:shadow-2xl shadow-ambient transition-all duration-500 ${className}`}
      aria-label={`View ${card.title} package`}
    >
      <Image
        src={card.imageSrc}
        alt={card.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 50vw"
        quality={90}
        priority={priority}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      {/* Premium dark gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-midnight/95 via-midnight/40 to-transparent transition-opacity duration-500 group-hover:from-midnight" aria-hidden="true" />

      {/* Badge */}
      {card.badge && (
        <div className="absolute top-6 left-6 z-10">
          <span className="font-sans text-[9px] font-bold tracking-widest uppercase bg-gold text-midnight px-3.5 py-1.5 rounded-full shadow-md">
            {card.badge}
          </span>
        </div>
      )}

      {/* Text content with slide-up micro-interaction */}
      <div className="absolute bottom-0 left-0 right-0 p-8 z-10 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="font-serif text-2xl md:text-3xl text-white font-normal leading-snug mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          {card.title}
        </h3>
        <p className="font-sans text-sm text-white/70 leading-relaxed mb-4 line-clamp-2 max-w-xl transition-opacity duration-500 group-hover:text-white/85">
          {card.description}
        </p>
        <div className="flex items-center justify-between border-t border-white/10 pt-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          {card.price && (
            <div>
              <p className="font-sans text-[10px] tracking-wider uppercase text-white/50 mb-0.5">Starts from</p>
              <p className="font-serif text-2xl text-gold font-bold">
                {card.price}
              </p>
            </div>
          )}
          <span className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-gold-light group-hover:underline">
            View Details
            <svg
              className="transition-transform duration-300 group-hover:translate-x-1"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
