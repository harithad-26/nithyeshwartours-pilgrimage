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
    <Link
      href={`/packages/${pkg.slug}`}
      className="group block bg-white rounded-md overflow-hidden premium-card-interactive"
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden">
        <Image
          src={imgUrl}
          alt={pkg.coverImage.alternativeText ?? pkg.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
          priority={priority}
          quality={85}
        />
        <div className="absolute inset-0 bg-midnight/15" />
        {/* Category badge */}
        <span className="absolute top-4 left-4 font-sans text-[10px] font-semibold tracking-[0.12em] uppercase text-white bg-midnight/60 backdrop-blur-sm px-3 py-1 rounded-full z-10">
          {pkg.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-xl text-midnight font-normal leading-snug mb-2 line-clamp-2">
          {pkg.title}
        </h3>
        <p className="font-sans text-sm text-midnight/60 leading-relaxed mb-6 line-clamp-2">
          {pkg.subtitle}
        </p>

        {/* Footer */}
        <div className="flex items-end justify-between pt-4 border-t border-surface-low">
          <div>
            <p className="font-sans text-xs text-midnight/40 mb-0.5">{pkg.duration}</p>
            <p className="font-serif text-2xl text-midnight font-normal tabular-nums">
              ₹{pkg.price.toLocaleString("en-IN")}
            </p>
          </div>
          <span
            className="btn-premium btn-premium-secondary text-xs px-4 py-2 min-h-[40px]"
          >
            <span>View Details</span>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5 flex-shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
