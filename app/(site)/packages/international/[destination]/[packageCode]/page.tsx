import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import NepalDetailTabs from "@/components/nepal/NepalDetailTabs";
import NepalPackageItinerary from "@/components/nepal/NepalPackageItinerary";
import { MOCK_DESTINATIONS } from "@/lib/mockInternationalData";

interface PageProps {
  params: Promise<{
    destination: string;
    packageCode: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { destination, packageCode } = await params;
  const destKey = destination.toLowerCase();
  const dest = MOCK_DESTINATIONS[destKey];
  if (!dest) return { title: "Package Not Found — Nithyeshwar Tours" };
  
  const pkg = dest.packages[packageCode];
  if (!pkg) return { title: "Package Not Found — Nithyeshwar Tours" };

  return {
    title: `${pkg.title} | ${pkg.subtitle} — Nithyeshwar Tours`,
    description: pkg.description,
  };
}

export default async function DynamicPackageDetailPage({ params }: PageProps) {
  const { destination, packageCode } = await params;
  const destKey = destination.toLowerCase();
  const dest = MOCK_DESTINATIONS[destKey];
  if (!dest) notFound();

  const pkg = dest.packages[packageCode];
  if (!pkg) notFound();

  return (
    <div className="bg-surface min-h-screen">
      {/* 1. Hero */}
      <section className="relative h-[85vh] min-h-[580px] flex items-end overflow-hidden">
        <Image
          src={pkg.heroImage}
          alt={pkg.heroAlt}
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/65 to-midnight/15" aria-hidden="true" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-10 sm:pb-16">
          <div className="max-w-3xl">
            <span className="font-sans text-[10px] font-bold tracking-[0.35em] uppercase text-gold mb-3 block">
              {pkg.tagline}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white mb-3 leading-[0.95] font-light line-clamp-2">
              {pkg.title}
            </h1>
            <p className="font-sans text-sm text-white/50 mb-6">{pkg.code} · {pkg.subtitle}</p>
            <div className="flex flex-wrap items-center gap-4">
              <span className={`px-3 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-wider ${pkg.difficultyColor}`}>
                {pkg.difficulty}
              </span>
              {pkg.altitude && pkg.altitude !== "Sea Level" && (
                <span className="font-sans text-xs text-white/65 flex items-center gap-1.5">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" aria-hidden="true">
                    <path d="M3 21l9-18 9 18H3z" />
                  </svg>
                  {pkg.altitude}
                </span>
              )}
              <span className="font-sans text-xs text-white/65 flex items-center gap-1.5">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                {pkg.duration}
              </span>
              <span className="font-sans text-xs text-gold font-semibold">From {pkg.price}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sticky Tab Nav */}
      <NepalDetailTabs />

      {/* 3. Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Content Column with premium alternating spacing */}
          <div className="lg:col-span-8 space-y-12">

            {/* ── 1. Overview ── */}
            <section id="overview" aria-labelledby="overview-heading" className="bg-white border border-midnight/5 p-8 md:p-12 shadow-sm rounded-2xl border-t-gold-dark/40 border-t-2 relative overflow-hidden scroll-mt-[160px]">
              <div className="mb-8 border-b border-midnight/5 pb-6">
                <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-2 block">
                  About the Journey
                </span>
                <h2 id="overview-heading" className="font-serif text-3xl text-midnight font-light">
                  Overview
                </h2>
              </div>
              <p className="font-sans text-base text-midnight/70 leading-relaxed mb-10">
                {pkg.description}
              </p>

              {/* Grid highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                {pkg.overview.map((point, i) => (
                  <div key={i} className="bg-stone-50/50 rounded-xl border border-midnight/5 p-6 hover:border-gold-dark/20 hover:shadow-ambient hover:-translate-y-0.5 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gold-dark/10 flex items-center justify-center shrink-0 border border-gold-dark/15 text-gold-dark">
                        <span className="font-serif text-sm font-semibold">{i + 1}</span>
                      </div>
                      <p className="font-sans text-sm text-midnight/70 leading-relaxed font-light">{point}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-stone-50 border border-midnight/5 rounded-xl">
                <p className="font-sans text-xs text-midnight/60 leading-relaxed">
                  <span className="font-bold text-midnight/70">Ideal for: </span>{pkg.idealFor}
                </p>
              </div>
            </section>

            {/* ── 2. Itinerary ── */}
            <section id="itinerary" aria-labelledby="itinerary-heading" className="bg-gradient-to-b from-[#FCFBF9] to-[#FAF9F5] border border-midnight/5 p-8 md:p-12 shadow-sm rounded-2xl border-t-gold-dark/25 border-t-2 scroll-mt-[160px]">
              <div className="mb-8 border-b border-midnight/5 pb-6">
                <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-2 block">
                  DETAILED ITINERARY
                </span>
                <h2 id="itinerary-heading" className="font-serif text-3xl text-midnight font-light">
                  Journey Itinerary
                </h2>
              </div>

              <NepalPackageItinerary itinerary={pkg.itinerary} />
            </section>

            {/* ── 3. Accommodation ── */}
            <section id="hotels" className="bg-white border border-midnight/5 p-8 md:p-12 shadow-sm rounded-2xl border-t-gold-dark/30 border-t-2 scroll-mt-[160px]">
              <div className="mb-8 border-b border-midnight/5 pb-6">
                <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-2 block">
                  ACCOMMODATION
                </span>
                <h2 className="font-serif text-3xl text-midnight font-light">
                  Where You'll Stay
                </h2>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {pkg.hotels.map((hotel, index) => (
                  <div key={index} className="bg-[#FAF9F7] rounded-xl border border-midnight/5 p-6 hover:border-gold-dark/20 hover:shadow-ambient hover:-translate-y-0.5 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-sans text-[10px] text-gold-dark uppercase tracking-wider font-semibold">
                            {hotel.location}
                          </span>
                          <div className="w-1.5 h-1.5 rounded-full bg-midnight/15" />
                          <span className="font-sans text-xs text-midnight/65">
                            {hotel.category}
                          </span>
                        </div>
                        <h3 className="font-serif text-lg text-midnight font-light">
                          {hotel.hotelName}
                        </h3>
                      </div>
                      {hotel.nights && (
                        <div className="shrink-0 bg-white border border-midnight/5 px-4 py-2 rounded-lg text-center min-w-[75px] shadow-sm">
                          <span className="font-serif text-lg text-midnight font-normal block leading-none">{hotel.nights}</span>
                          <span className="font-sans text-[9px] text-midnight/50 uppercase tracking-wider block mt-1">
                            {hotel.nights === 1 ? 'Night' : 'Nights'}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── 4. Inclusions ── */}
            <section id="inclusions" aria-labelledby="inclusions-heading" className="bg-[#FAF9F6] border border-midnight/5 p-8 md:p-12 shadow-sm rounded-2xl border-t-gold-dark/20 border-t-2 scroll-mt-[160px]">
              <div className="mb-8 border-b border-midnight/5 pb-6">
                <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-2 block">
                  WHAT'S COVERED
                </span>
                <h2 id="inclusions-heading" className="font-serif text-3xl text-midnight font-light">
                  Inclusions & Exclusions
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Cost Includes - Soft Emerald Green */}
                <div className="bg-white border border-midnight/5 border-l-4 border-l-emerald-500 shadow-sm p-6 rounded-xl hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3.5 mb-6 pb-3 border-b border-midnight/5">
                    <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-midnight font-medium">Cost Includes</h3>
                      <p className="font-sans text-[9px] text-emerald-600 uppercase tracking-wider font-semibold">Covered items</p>
                    </div>
                  </div>
                  <ul className="space-y-3.5">
                    {pkg.inclusions.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg className="w-4.5 h-4.5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-sans text-sm text-midnight/70 leading-relaxed font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cost Excludes - Soft Red */}
                <div className="bg-white border border-midnight/5 border-l-4 border-l-red-500 shadow-sm p-6 rounded-xl hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3.5 mb-6 pb-3 border-b border-midnight/5">
                    <div className="w-9 h-9 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-red-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-midnight font-medium">Cost Excludes</h3>
                      <p className="font-sans text-[9px] text-red-600 uppercase tracking-wider font-semibold">Out-of-pocket items</p>
                    </div>
                  </div>
                  <ul className="space-y-3.5">
                    {pkg.exclusions.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg className="w-4.5 h-4.5 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="font-sans text-sm text-midnight/70 leading-relaxed font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </section>

            {/* ── 5. Booking Details ── */}
            <section id="booking" className="bg-white border border-midnight/5 p-8 md:p-12 shadow-sm rounded-2xl border-t-gold-dark/30 border-t-2 scroll-mt-[160px]">
              <div className="mb-8 border-b border-midnight/5 pb-6">
                <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-2 block">
                  RESERVING YOUR SPOT
                </span>
                <h2 className="font-serif text-3xl text-midnight font-light">
                  How to Book
                </h2>
              </div>

              <div className="space-y-6">
                {/* Required Documents */}
                <div className="bg-[#FAFAF9] rounded-xl border border-midnight/5 p-6 shadow-sm">
                  <div className="flex items-center gap-3.5 mb-5 pb-3 border-b border-midnight/5">
                    <div className="w-8 h-8 rounded-lg bg-gold-dark/5 border border-gold-dark/15 flex items-center justify-center text-gold-dark shrink-0">
                      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-base text-midnight font-medium">Required Documents</h3>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {pkg.booking.requiredDocuments.map((doc, idx) => (
                      <li key={idx} className="flex items-center gap-3 group">
                        <div className="w-5 h-5 rounded-full bg-gold-dark/5 border border-gold-dark/15 flex items-center justify-center shrink-0 group-hover:bg-gold-dark/10 transition-colors">
                          <svg className="w-2.5 h-2.5 text-gold-dark" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <span className="font-sans text-sm text-midnight/70 leading-relaxed font-light">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Payment Schedule */}
                <div className="bg-[#FAFAF9] rounded-xl border border-midnight/5 p-6 shadow-sm">
                  <div className="flex items-center gap-3.5 mb-5 pb-3 border-b border-midnight/5">
                    <div className="w-8 h-8 rounded-lg bg-gold-dark/5 border border-gold-dark/15 flex items-center justify-center text-gold-dark shrink-0">
                      <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" strokeWidth="2" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-base text-midnight font-medium">Payment Schedule</h3>
                  </div>
                  <div className="border border-midnight/10 rounded-lg overflow-hidden bg-white shadow-sm">
                    {pkg.booking.paymentSchedule.map((stage, idx) => (
                      <div key={idx} className={`grid grid-cols-2 p-4 ${idx > 0 ? 'border-t border-midnight/5' : ''}`}>
                        <div className="font-sans text-sm text-midnight font-medium">{stage.stage}</div>
                        <div className="font-sans text-sm text-midnight/70 font-light">{stage.amount} ({stage.due})</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Guidelines note */}
                {pkg.booking.importantNotes && (
                  <div className="bg-amber-50/50 rounded-xl border border-amber-200/30 p-6 flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-gold-dark shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 111.063.852l-.708 2.836a.75.75 0 001.063.852l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-base text-amber-900 mb-2 font-medium">Booking Guidelines</h3>
                      <ul className="space-y-2.5">
                        {pkg.booking.importantNotes.map((note, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-900/40 mt-2 shrink-0" />
                            <span className="font-sans text-sm text-amber-900/70 leading-relaxed font-light">{note}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* ── 6. Know Before You Go ── */}
            <section id="know-before" aria-labelledby="know-before-heading" className="bg-[#FAF9F6] border border-midnight/5 p-8 md:p-12 shadow-sm rounded-2xl border-t-gold-dark/35 border-t-2 scroll-mt-[160px]">
              <div className="mb-8 border-b border-midnight/5 pb-6">
                <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-2 block">
                  TRAVEL ESSENTIALS
                </span>
                <h2 id="know-before-heading" className="font-serif text-3xl text-midnight font-light">
                  Know Before You Go
                </h2>
              </div>

              <div className="space-y-5">
                <div className="bg-white rounded-xl border border-midnight/5 p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50/50 border border-blue-100/30 flex items-center justify-center shrink-0 text-blue-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.5" />
                        <path d="M3 10h18" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-base text-midnight font-medium mb-1">Visa & Entry</h3>
                      <p className="font-sans text-sm text-midnight/70 leading-relaxed font-light">{pkg.knowBefore.visa}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50/50 rounded-xl border border-amber-200/40 p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0 text-gold-dark">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-base text-amber-900 font-medium mb-1">ID Documents (Critical)</h3>
                      <p className="font-sans text-sm text-amber-800/80 leading-relaxed font-light">{pkg.knowBefore.id}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-midnight/5 p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-50/50 border border-emerald-100/30 flex items-center justify-center shrink-0 text-emerald-800">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-base text-midnight font-medium mb-1">Fitness Level</h3>
                      <p className="font-sans text-sm text-midnight/70 leading-relaxed font-light">{pkg.knowBefore.fitness}</p>
                    </div>
                  </div>
                </div>

                {/* Packing List guide */}
                <div className="bg-white rounded-xl border border-midnight/5 p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-stone-50 border border-midnight/5 flex items-center justify-center shrink-0 text-gold-dark">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-base text-midnight font-medium mb-4">What to Pack</h3>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {pkg.knowBefore.packing.map((item) => (
                          <li key={item} className="flex items-start gap-3 group">
                            <div className="w-5 h-5 rounded-full bg-gold-dark/5 border border-gold-dark/15 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-gold-dark/10 transition-colors">
                              <svg className="w-2.5 h-2.5 text-gold-dark" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                              </svg>
                            </div>
                            <span className="font-sans text-sm text-midnight/70 leading-relaxed font-light">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── 7. FAQ ── */}
            <section id="faq" aria-labelledby="faq-heading" className="bg-gradient-to-b from-[#F2F4F7] to-[#ECF0F4] border border-[#DEE3EC] p-8 md:p-12 shadow-sm rounded-2xl scroll-mt-[160px]">
              <div className="mb-8 border-b border-midnight/10 pb-6">
                <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-2 block">
                  QUESTIONS &amp; CLARITY
                </span>
                <h2 id="faq-heading" className="font-serif text-3xl text-midnight font-light">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">
                {pkg.faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group bg-white rounded-xl border border-[#DEE3EC] hover:border-gold-dark/20 transition-all duration-300 overflow-hidden shadow-sm"
                  >
                    <summary className="flex items-center justify-between cursor-pointer px-6 py-5 hover:bg-[#FAFAF9] transition-colors list-none focus:outline-none">
                      <h3 className="font-serif text-lg text-midnight font-light pr-4 leading-snug group-open:text-gold-dark group-open:font-medium transition-colors">
                        {faq.q}
                      </h3>
                      <svg
                        width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-midnight/45 group-open:text-gold-dark"
                        aria-hidden="true"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 pt-1 border-t border-midnight/5 bg-[#FAFAF9]">
                      <p className="pt-6 font-sans text-sm text-midnight/70 leading-relaxed font-light">{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* ── 8. Terms ── */}
            <section id="terms" className="bg-white border border-midnight/5 p-8 md:p-12 shadow-sm rounded-2xl border-t-gold-dark/20 border-t-2 scroll-mt-[160px]">
              <div className="mb-8 border-b border-midnight/5 pb-6">
                <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-2 block">
                  POLICIES &amp; CONDITIONS
                </span>
                <h2 className="font-serif text-3xl text-midnight font-light">
                  Terms &amp; Conditions
                </h2>
              </div>
              <div className="space-y-6">
                <div className="bg-[#FAFAF9] rounded-xl border border-midnight/5 p-6 shadow-sm">
                  <h3 className="font-sans text-xs font-bold text-midnight uppercase tracking-wider mb-4">Cancellation Policy</h3>
                  <div className="border border-midnight/10 rounded-lg overflow-hidden bg-white shadow-sm">
                    {pkg.terms.cancellationPolicy.map((policy, idx) => (
                      <div key={idx} className={`grid grid-cols-2 p-4 ${idx > 0 ? 'border-t border-midnight/5' : ''}`}>
                        <div className="font-sans text-sm text-midnight font-medium">{policy.timeBefore}</div>
                        <div className="font-sans text-sm text-midnight/70 font-light">{policy.refund}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-xl border border-midnight/5 p-6 space-y-6 shadow-sm">
                  {[
                    { title: "Travel Insurance", content: pkg.terms.travelInsurance },
                    { title: "Changes & Amendments", content: pkg.terms.changes },
                    { title: "Company Rights", content: pkg.terms.companyRights },
                    { title: "Refund Policy", content: pkg.terms.refundPolicy },
                    { title: "Age Restriction", content: pkg.terms.ageRestriction }
                  ].map((item, idx) => (
                    <div key={idx} className={idx > 0 ? "pt-5 border-t border-midnight/5" : ""}>
                      <h4 className="font-sans text-xs font-bold text-midnight uppercase tracking-wider mb-2">{item.title}</h4>
                      <p className="font-sans text-sm text-midnight/70 leading-relaxed font-light">{item.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

          </div>

          {/* ── Sticky Sidebar (Replicated Dark Theme) ── */}
          <aside className="lg:col-span-4 relative hidden lg:block">
            <div className="sticky top-[152px]">
              <div className="bg-[#000613] text-white border border-white/10 hover:border-gold-dark/30 transition-all duration-300 p-5 shadow-card relative overflow-hidden">
                <div className="absolute -right-24 -top-24 w-48 h-48 bg-gold-dark/10 rounded-full blur-3xl pointer-events-none" />
                
                <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-gold uppercase mb-1.5 block">
                  {pkg.code}
                </span>
                <h3 className="font-serif text-lg text-white font-light leading-snug mb-3">
                  {pkg.title}
                </h3>

                {/* Pricing Block */}
                <div className="mb-4 pb-4 border-b border-white/10">
                  <p className="font-sans text-[10px] font-medium text-white/70 tracking-wider mb-0.5">
                    Starting from
                  </p>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif text-4xl font-light text-gold leading-none">
                      {pkg.price}
                    </span>
                    <span className="font-sans text-[11px] text-white/65">per person</span>
                  </div>
                  <p className="font-sans text-[10px] text-white/50 mt-1 italic">
                    {pkg.priceNote}
                  </p>
                </div>

                {/* Key Journey Facts - 2x2 Grid */}
                <dl className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
                  {[
                    { label: "Duration", value: pkg.duration },
                    { label: "Difficulty", value: pkg.difficulty },
                    { label: "Altitude", value: pkg.altitude },
                    { label: "Starts Point", value: pkg.startPoint },
                  ].map(({ label, value }) => (
                    <div key={label} className="space-y-0.5">
                      <dt className="font-sans text-[9px] text-white/60 uppercase tracking-wider">
                        {label}
                      </dt>
                      <dd className="font-sans text-xs text-white/95 font-medium truncate">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>

                {/* Call to Action */}
                <div>
                  <Link
                    href={`/inquiry?package=${packageCode}`}
                    className="btn-premium btn-premium-white w-full text-center"
                  >
                    <span>Book This Package</span>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Small Trust Signals */}
                <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {[
                    "100% Satvik Meals",
                    "Oxygen Backup",
                    "Visa & Permits",
                    "Official Partner",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-1.5 text-[11px] text-white/70">
                      <svg className="w-3 h-3 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Trust Sign */}
                <div className="mt-4 pt-4 border-t border-white/10 text-center">
                  <p className="font-sans text-[10px] text-gold/80 font-medium tracking-wider uppercase">
                    30+ Years of Sacred Service
                  </p>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>

      {/* Mobile Booking Bar */}
      <div className="mobile-sticky-bar lg:hidden fixed bottom-6 left-4 right-4 z-50 bg-white/95 backdrop-blur-md border border-midnight/5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] rounded-2xl px-5 py-3.5">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-sans text-[10px] text-midnight/45 uppercase tracking-wider mb-0.5">Starting from</p>
            <p className="font-serif text-xl text-midnight font-medium leading-none">{pkg.price}</p>
          </div>
          <Link
            href={`/inquiry?package=${packageCode}`}
            className="btn-premium btn-premium-primary text-xs px-5 py-2.5 min-h-[38px]"
          >
            <span>Book Now</span>
          </Link>
        </div>
      </div>
      <div className="lg:hidden h-24" aria-hidden="true" />
    </div>
  );
}
