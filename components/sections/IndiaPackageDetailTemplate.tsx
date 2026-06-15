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
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pb-20">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 font-sans text-xs text-white/50">
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
          <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur border border-white/20 mb-6">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
              {code}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-[0.95] max-w-4xl font-light">
            {name}
          </h1>

          {/* Tagline */}
          <p className="font-serif text-xl md:text-2xl text-white/80 mb-12 max-w-2xl leading-relaxed font-light">
            {tagline}
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap items-center gap-6 mb-12 font-sans text-sm text-white/70">
            <div className="flex items-center gap-2">
              <span className="text-white/40">Duration</span>
              <span className="text-white font-medium">{normalizedDuration.display}</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-white/40">Altitude</span>
              <span className="text-white font-medium">{normalizedMaxAltitude.display.split('(')[0].trim()}</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-white/40">From</span>
              <span className="text-white font-medium">{normalizedPricing.display}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href={`/inquiry?package=${code}`}
              className="inline-flex items-center gap-2 font-sans px-8 py-4 bg-white text-midnight text-sm font-semibold hover:bg-white/95 transition-all duration-300"
            >
              Book This Package
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="https://wa.me/917200118411"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans px-8 py-4 bg-white/10 backdrop-blur text-white text-sm font-medium border border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              Contact Us
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

      {/* 3. Sticky Pricing Bar (Mobile & Tablet) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-midnight/5 z-50 lg:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <div className="font-sans text-[10px] font-semibold uppercase tracking-wider text-midnight/40 mb-1">From</div>
            <div className="font-serif text-2xl text-midnight font-light">{normalizedPricing.display}</div>
          </div>
          <div className="flex gap-3">
            <a
              href="https://wa.me/917200118411"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-3 border border-midnight/10 text-midnight rounded"
            >
              <svg className="w-5 h-5 fill-current text-green-600" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.208-3.79c1.661.986 3.292 1.503 4.794 1.504 5.518 0 10.005-4.486 10.008-10.004.002-2.673-1.03-5.184-2.905-7.062C16.287 2.766 13.784 1.72 11.11 1.72c-5.524 0-10.01 4.487-10.014 10.007-.001 1.905.511 3.766 1.481 5.392L1.582 21.03l3.961-1.028 1.439.845-.717-2.637zM17.38 15.65c-.297-.15-1.758-.867-2.03-.967-.273-.099-.471-.15-.669.15-.198.297-.768.967-.941 1.165-.173.199-.347.223-.644.074-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.15-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.075-.15-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
            </a>
            <Link
              href={`/inquiry?package=${code}`}
              className="font-sans px-6 py-3 bg-midnight text-white text-sm font-semibold hover:bg-midnight/90 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
