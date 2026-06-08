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
        <div className="flex items-end justify-between mb-12 gap-6">
          <SectionHeader
            eyebrow="CURATED COLLECTIONS"
            title="Top Packages"
            align="left"
          />
          <Link
            href="/packages/madhya-pradesh"
            className="font-sans text-sm font-normal text-gold-dark border-b border-gold-dark/30 pb-0.5 transition-colors duration-300 hover:text-gold-dark hover:border-gold-dark shrink-0 mb-12"
            aria-label="View all packages"
          >
            View All
          </Link>
        </div>

        {/* 12-col bento grid: row1 = [8,4], row2 = [4,8] */}
        <div className="grid grid-cols-12 gap-4">
          {/* Row 1: large (8) + small (4) */}
          {cards[0] && (
            <BentoCard card={cards[0]} className="col-span-12 md:col-span-8 h-96" priority />
          )}
          {cards[1] && (
            <BentoCard card={cards[1]} className="col-span-12 md:col-span-4 h-96" />
          )}

          {/* Row 2: small (4) + large (8) */}
          {cards[2] && (
            <BentoCard card={cards[2]} className="col-span-12 md:col-span-4 h-96" />
          )}
          {cards[3] && (
            <BentoCard card={cards[3]} className="col-span-12 md:col-span-8 h-96" />
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
      className={`group relative rounded-md overflow-hidden block ${className}`}
      aria-label={`View ${card.title} package`}
    >
      <Image
        src={card.imageSrc}
        alt={card.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 50vw"
        quality={85}
        priority={priority}
        className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-midnight/80 via-midnight/20 to-transparent" aria-hidden="true" />

      {/* Badge */}
      {card.badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className="font-sans text-[10px] font-semibold tracking-[0.12em] uppercase bg-gold text-midnight px-3 py-1 rounded-full">
            {card.badge}
          </span>
        </div>
      )}

      {/* Text content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <h3 className="font-serif text-2xl text-white font-normal leading-snug mb-1.5">
          {card.title}
        </h3>
        <p className="font-sans text-sm text-white/70 leading-relaxed mb-3 line-clamp-2">
          {card.description}
        </p>
        {card.price && (
          <p className="font-sans text-xs text-white/60 mb-0.5">Starts from</p>
        )}
        {card.price && (
          <p className="font-serif text-xl text-gold font-semibold">
            {card.price}
          </p>
        )}
      </div>
    </Link>
  );
}
