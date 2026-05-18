import Link from "next/link";
import { PackageCard } from "@/components/ui";
import { SectionHeader } from "@/components/ui";
import type { Package } from "@/lib/types";

interface TopPackagesProps {
  packages: Package[];
}

export function TopPackages({ packages }: TopPackagesProps) {
  return (
    <section
      className="py-[var(--spacing-section)] bg-surface"
      aria-labelledby="top-packages-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header row: title left, "View All" right */}
        <div className="flex items-end justify-between mb-12 gap-6">
          <div className="flex-1">
            <SectionHeader
              eyebrow="Curated for You"
              title="Top Packages"
              align="left"
            />
          </div>
          <Link
            href="/packages"
            className="font-sans text-sm font-semibold text-gold-dark border border-gold-dark px-5 py-2.5 rounded-md transition-all duration-300 hover:bg-gold-dark hover:text-white focus-visible:outline-2 focus-visible:outline-gold shrink-0 mb-12"
            aria-label="View all packages"
          >
            View All
          </Link>
        </div>

        {/* Asymmetric grid */}
        {packages.length === 0 ? (
          <p className="font-sans text-midnight/50 text-center py-12">
            No featured packages available at the moment.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {packages.map((pkg, index) => (
              <div
                key={pkg.id}
                className={
                  // Give the first card extra visual weight on large screens
                  index === 0 ? "lg:col-span-2" : ""
                }
              >
                <PackageCard pkg={pkg} priority={index === 0} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
