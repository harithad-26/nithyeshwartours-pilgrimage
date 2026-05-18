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
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Metadata } from "next";

export const dynamicParams = true;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllPackageSlugs();
  return slugs.map((slug) => ({ slug }));
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

export default async function PackageDetailPage({ params }: Props) {
  const { slug } = await params;
  const pkg = await getPackageBySlug(slug);

  if (!pkg) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-72 img-overlay" aria-label={pkg.title}>
        <Image
          src={getStrapiImageUrl(pkg.coverImage.url)}
          alt={pkg.coverImage.alternativeText ?? pkg.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-navy/40 to-transparent" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 max-w-7xl mx-auto w-full">
          <p className="font-sans text-xs font-semibold tracking-[0.12em] uppercase text-gold mb-3">
            {pkg.category} · {pkg.destination}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-semibold leading-tight max-w-2xl">
            {pkg.title}
          </h1>
        </div>
      </section>

      {/* Main content */}
      <div className="bg-surface py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: itinerary */}
          <div className="lg:col-span-2">
            <p className="font-sans text-base text-midnight/70 leading-relaxed mb-10">
              {pkg.description}
            </p>
            <ItinerarySection days={pkg.itinerary} />
          </div>

          {/* Right: sticky sidebar */}
          <div className="lg:col-span-1">
            <PricingSidebar pkg={pkg} />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      {pkg.testimonials.length > 0 && (
        <section className="py-16 px-6 bg-surface-low">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              eyebrow="Sacred Testimonials"
              title="What Pilgrims Say"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
