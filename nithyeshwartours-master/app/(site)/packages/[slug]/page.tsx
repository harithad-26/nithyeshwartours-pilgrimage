import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getPackageBySlug,
  getAllPackageSlugs,
  getStrapiImageUrl,
} from "@/lib/strapi";
import { ItinerarySection } from "@/components/sections/ItinerarySection";
import { PricingSidebar } from "@/components/sections/PricingSidebar";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import type { Metadata } from "next";

// Destination pages (madhya-pradesh, uttar-pradesh, odisha, andaman, tamil-nadu,
// international, honeymoon) have their own static route pages under
// app/(site)/packages/[destination]/page.tsx which take precedence over this
// dynamic route. This file only handles individual Strapi package detail pages.

export const dynamicParams = true;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const packageSlugs = await getAllPackageSlugs();
  return packageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = await getPackageBySlug(slug);
  if (!pkg) return {};
  return {
    title: pkg.title,
    description: pkg.subtitle,
    openGraph: {
      images: [{ url: getStrapiImageUrl(pkg.coverImage.url) }],
    },
  };
}

export default async function PackagesPage({ params }: Props) {
  const { slug } = await params;

  // Destination slugs (madhya-pradesh, uttar-pradesh, odisha, andaman,
  // tamil-nadu, international, honeymoon) are handled by static page files
  // and will never reach this handler.
  const pkg = await getPackageBySlug(slug);
  if (!pkg) notFound();

  const imgUrl = getStrapiImageUrl(pkg.coverImage.url);

  return (
    <>
      {/* Hero — split gallery: large image left, metadata right */}
      <section
        className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] min-h-[65vh]"
        aria-label={pkg.title}
      >
        {/* Cover image */}
        <div className="relative min-h-80 lg:min-h-0">
          <Image
            src={imgUrl}
            alt={pkg.coverImage.alternativeText ?? pkg.title}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
            priority
            quality={90}
          />
          <div
            className="absolute inset-0 bg-midnight/20"
            aria-hidden="true"
          />
        </div>

        {/* Meta panel */}
        <div className="flex flex-col justify-end px-10 py-16 bg-midnight">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold mb-5">
            {pkg.category} · {pkg.destination}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-normal leading-tight mb-5 max-w-xs">
            {pkg.title}
          </h1>
          <p className="font-sans text-base text-white/60 leading-relaxed mb-8 max-w-xs line-clamp-3">
            {pkg.subtitle}
          </p>

          {/* Quick stats */}
          <div className="flex gap-6">
            <div>
              <p className="font-sans text-xs text-white/40 mb-1">Duration</p>
              <p className="font-sans text-sm text-white font-medium">{pkg.duration}</p>
            </div>
            <div>
              <p className="font-sans text-xs text-white/40 mb-1">Group Size</p>
              <p className="font-sans text-sm text-white font-medium">{pkg.groupSize}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="bg-surface py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16">
          <div>
            {/* Description */}
            <div className="mb-12">
              <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-3">
                About This Journey
              </p>
              <p className="font-sans text-base text-[#43474e] leading-relaxed">
                {pkg.description}
              </p>
            </div>

            {/* Highlights */}
            {pkg.highlights.length > 0 && (
              <div className="mb-12">
                <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-5">
                  Journey Highlights
                </p>
                <ul className="space-y-3">
                  {pkg.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-4 h-4 rounded-full bg-gold-dark/20 flex items-center justify-center shrink-0 mt-0.5">
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" aria-hidden="true">
                          <path d="M1 3l2 2 4-4" stroke="var(--color-gold-dark)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span className="font-sans text-sm text-midnight/70 leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <ItinerarySection days={pkg.itinerary} />
          </div>

          <PricingSidebar pkg={pkg} />
        </div>
      </div>

      {/* Testimonials */}
      {pkg.testimonials.length > 0 && (
        <section className="py-24 px-6 bg-surface-low">
          <div className="max-w-7xl mx-auto">
            <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-3 text-center">
              Sacred Testimonials
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal text-center mb-14 leading-snug">
              What Pilgrims Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pkg.testimonials.map((t) => (
                <TestimonialCard key={t.id} t={t} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
