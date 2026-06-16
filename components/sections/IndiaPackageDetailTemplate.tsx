import Image from "next/image";
import Link from "next/link";
import type { Package } from "@/lib/types";
import LuxuryPackageDetailTabs, { LuxuryPackageDetailNav } from "@/components/pilgrimage/LuxuryPackageDetailTabs";
import LuxuryPricingSidebar from "@/components/pilgrimage/LuxuryPricingSidebar";

interface IndiaPackageDetailTemplateProps {
  pkg: Package;
}

export function IndiaPackageDetailTemplate({ pkg }: IndiaPackageDetailTemplateProps) {
  // Ensure the fields are normalized so the luxury components don't crash
  const normalizedDuration = typeof pkg.duration === "object" ? pkg.duration : {
    display: pkg.duration,
    nights: parseInt(pkg.duration.split("N")[0]) || 0,
    days: parseInt(pkg.duration.split("/")[1]?.split("D")[0]) || 0,
  };

  const normalizedMaxAltitude = typeof pkg.maxAltitude === "object" ? pkg.maxAltitude : {
    display: typeof pkg.maxAltitude === "string" ? pkg.maxAltitude : "Normal",
  };

  const normalizedPricing = pkg.pricing || {
    startingFrom: pkg.price,
    currency: pkg.currency || "INR",
    display: `₹${pkg.price.toLocaleString("en-IN")}`,
    notes: "Per person, inclusive of accommodation and travel logistics",
  };

  const code = pkg.code || pkg.documentId?.toUpperCase() || "PKG";
  const name = pkg.title;
  const tagline = pkg.tagline || pkg.subtitle || "A Sacred Pilgrimage Journey";

  // Re-build package object with normalized fields for sub-components
  const normalizedPkg = {
    ...pkg,
    code,
    name,
    tagline,
    difficulty: pkg.difficulty || "Easy to Moderate",
    startingPoint: pkg.startingPoint || "Local Hub",
    duration: normalizedDuration,
    maxAltitude: normalizedMaxAltitude,
    pricing: normalizedPricing,
  };

  return (
    <>
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <Image
          src={pkg.coverImage.url}
          alt={pkg.coverImage.alternativeText || pkg.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={95}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-transparent" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-10 sm:pb-16 md:pb-20">
          {/* Breadcrumb */}
          <nav className="mb-4 sm:mb-6 md:mb-8 flex items-center gap-2 font-sans text-xs text-white/50">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href={`/packages/${pkg.destination}`} className="hover:text-white transition-colors capitalize">
              {pkg.destination.replace("-", " ")}
            </Link>
            <span>/</span>
            <span className="text-white">{code}</span>
          </nav>

          {/* Package Code Badge */}
          <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur border border-white/20 mb-4 sm:mb-6">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
              {code}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-7xl text-white mb-4 sm:mb-6 leading-[0.95] max-w-4xl font-light line-clamp-2">
            {name}
          </h1>

          {/* Tagline */}
          <p className="font-serif text-base sm:text-xl md:text-2xl text-white/80 mb-6 sm:mb-8 md:mb-12 max-w-2xl leading-relaxed font-light">
            {tagline}
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-6 sm:mb-8 md:mb-12 font-sans text-sm text-white/70">
            <div className="flex items-center gap-2">
              <span className="text-white/40">Duration</span>
              <span className="text-white font-medium">{normalizedDuration.display}</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-white/40">Altitude</span>
              <span className="text-white font-medium">{normalizedMaxAltitude.display.split('(')[0].trim()}</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-white/40">From</span>
              <span className="text-white font-medium">{normalizedPricing.display}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href={`/inquiry?package=${code}`}
              className="btn-premium btn-premium-white"
            >
              <span>Book This Package</span>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="https://wa.me/917200118411"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium btn-premium-glass"
            >
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Sub-Navigation Bar */}
      <LuxuryPackageDetailNav packageData={normalizedPkg as any} />

      {/* 3. Main Page Layout Grid */}
      <div className="bg-[#F8F7F4] min-h-screen pt-8 pb-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: All details scrolling sequentially with Scrollspy */}
            <div className="lg:col-span-8">
              <LuxuryPackageDetailTabs packageData={normalizedPkg as any} />
            </div>

            {/* Right Column: Sticky Booking Sidebar */}
            <div className="lg:col-span-4 relative hidden lg:block">
              <div className="sticky top-[152px]">
                <LuxuryPricingSidebar pkg={normalizedPkg as any} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Floating Sticky Pricing Bar (Mobile & Tablet) */}
      <div className="mobile-sticky-bar fixed bottom-6 left-4 right-4 bg-white/95 backdrop-blur-md border border-midnight/5 z-50 lg:hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)] rounded-2xl">
        <div className="flex items-center justify-between px-5 py-3.5">
          <div>
            <div className="font-sans text-[10px] font-semibold uppercase tracking-wider text-midnight/40 mb-0.5">From</div>
            <div className="font-serif text-xl text-midnight font-medium">{normalizedPricing.display}</div>
          </div>
          <div className="flex gap-3">
            <Link
              href={`/inquiry?package=${code}`}
              className="font-sans px-5 py-2.5 bg-midnight text-white text-xs font-bold uppercase tracking-wider hover:bg-midnight/90 transition-all duration-300 rounded-xl"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
