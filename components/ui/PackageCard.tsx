import Image from "next/image";
import Link from "next/link";
import { getStrapiImageUrl } from "@/lib/strapi";
import type { Package } from "@/lib/types";

interface PackageCardProps {
  pkg: Package;
  priority?: boolean;
}

export function PackageCard({ pkg, priority = false }: PackageCardProps) {
  const imgUrl = getStrapiImageUrl(pkg.coverImage.url);

  return (
    <article className="group relative bg-surface-lowest rounded-md overflow-hidden transition-shadow duration-300 hover:shadow-card">
      {/* Gold left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold-dark z-10" aria-hidden="true" />

      {/* Image */}
      <div className="relative h-52 overflow-hidden img-overlay">
        <Image
          src={imgUrl}
          alt={pkg.coverImage.alternativeText ?? pkg.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
          priority={priority}
          quality={85}
        />
        {/* Category tag */}
        <span className="absolute top-3 left-4 font-sans text-[10px] font-semibold tracking-[0.1em] uppercase text-white/90 bg-navy/60 backdrop-blur-sm px-2.5 py-1 rounded-sm z-10">
          {pkg.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="font-serif text-xl text-navy font-semibold leading-snug mb-2 line-clamp-2">
          {pkg.title}
        </h3>
        <p className="font-sans text-sm text-midnight/60 leading-relaxed mb-6 line-clamp-2">
          {pkg.subtitle}
        </p>

        {/* Meta row */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-sans text-xs text-midnight/40 uppercase tracking-wide">From</p>
            <p className="font-serif text-2xl font-semibold text-navy">
              ₹{pkg.price.toLocaleString("en-IN")}
            </p>
          </div>
          <Link
            href={`/packages/${pkg.slug}`}
            className="font-sans text-xs font-semibold tracking-wide text-gold-dark border border-gold-dark px-4 py-2 rounded-md transition-all duration-300 hover:bg-gold-dark hover:text-white focus-visible:outline-2 focus-visible:outline-gold"
            aria-label={`View details for ${pkg.title}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
