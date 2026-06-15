import Image from "next/image";
import Link from "next/link";
import { getStrapiImageUrl } from "@/lib/strapi";
import type { Destination } from "@/lib/types";

interface DestinationCardProps {
  destination: Destination;
  priority?: boolean;
}

export function DestinationCard({ destination, priority = false }: DestinationCardProps) {
  const imgUrl = getStrapiImageUrl(destination.coverImage.url);

  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group relative rounded-md overflow-hidden h-72 block premium-card-interactive"
      aria-label={`Explore ${destination.name}`}
    >
      {/* Image with overlay gradient */}
      <Image
        src={imgUrl}
        alt={destination.coverImage.alternativeText ?? destination.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
        priority={priority}
        quality={85}
      />
      <div className="absolute inset-0 bg-linear-to-t from-midnight/80 via-midnight/20 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <h3 className="font-serif text-xl font-semibold text-white leading-snug mb-1">
          {destination.name}
        </h3>
        <p className="font-sans text-sm text-white/70 line-clamp-2 mb-3">
          {destination.description}
        </p>
        <span
          className="font-sans text-xs font-semibold text-gold tracking-wide group-hover:text-gold-light transition-colors duration-300"
        >
          Explore &rarr;
        </span>
      </div>
    </Link>
  );
}
