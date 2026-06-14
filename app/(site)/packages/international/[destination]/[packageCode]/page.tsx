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

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pb-16">
          <div className="max-w-3xl">
            <span className="font-sans text-[10px] font-bold tracking-[0.35em] uppercase text-gold mb-3 block">
              {pkg.tagline}
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-3 leading-[0.95] font-light">
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

          {/* Content Column */}
          <div className="lg:col-span-8 space-y-20">

            {/* ── Overview ── */}
            <section id="overview" aria-labelledby="overview-heading" className="scroll-mt-24">
              <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
                PACKAGE OVERVIEW
              </span>
              <h2 id="overview-heading" className="font-serif text-3xl md:text-4xl text-midnight font-normal leading-tight mb-6">
                {pkg.title}
              </h2>
              <p className="font-sans text-base text-midnight/70 leading-relaxed mb-10">
                {pkg.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                {pkg.overview.map((point, i) => (
                  <div key={i} className="bg-white rounded-xl border border-midnight/8 p-6 hover:border-gold-dark/20 hover:shadow-ambient transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                        <span className="font-serif text-sm text-gold-dark">{i + 1}</span>
                      </div>
                      <p className="font-sans text-sm text-midnight/70 leading-relaxed">{point}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-white rounded-xl border border-midnight/8">
                <p className="font-sans text-xs text-midnight/55 leading-relaxed">
                  <span className="font-bold text-midnight/70">Ideal for: </span>{pkg.idealFor}
                </p>
              </div>
            </section>

            {/* ── Itinerary ── */}
            <section id="itinerary" aria-labelledby="itinerary-heading" className="scroll-mt-24">
              <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
                DETAILED ITINERARY
              </span>
              <h2 id="itinerary-heading" className="font-serif text-3xl md:text-4xl text-midnight font-normal leading-tight mb-8">
                Day-by-Day Journey
              </h2>

              <NepalPackageItinerary itinerary={pkg.itinerary} />
            </section>

            {/* ── Accommodation ── */}
            <section id="hotels" className="scroll-mt-24">
              <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
                ACCOMMODATION
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal leading-tight mb-8">
                Where You&apos;ll Stay
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {pkg.hotels.map((hotel, index) => (
                  <div key={index} className="bg-white rounded-xl border border-midnight/8 p-6 hover:border-gold-dark/20 hover:shadow-ambient transition-all duration-300">
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
                        <div className="shrink-0 bg-surface border border-midnight/5 px-4 py-2 rounded-lg text-center min-w-[70px]">
                          <span className="font-serif text-lg text-midnight font-normal block">{hotel.nights}</span>
                          <span className="font-sans text-[9px] text-midnight/50 uppercase tracking-wider block">
                            {hotel.nights === 1 ? 'Night' : 'Nights'}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Inclusions ── */}
            <section id="inclusions" aria-labelledby="inclusions-heading" className="scroll-mt-24">
              <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
                WHAT&apos;S COVERED
              </span>
              <h2 id="inclusions-heading" className="font-serif text-3xl md:text-4xl text-midnight font-normal leading-tight mb-8">
                Inclusions & Exclusions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-emerald-50 rounded-xl border border-emerald-100 p-6">
                  <div className="flex items-center gap-2.5 mb-5">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="font-sans text-xs font-bold text-emerald-800 uppercase tracking-widest">Included</h3>
                  </div>
                  <ul className="space-y-3">
                    {pkg.inclusions.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                        <span className="font-sans text-sm text-midnight/75 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50 rounded-xl border border-red-100 p-6">
                  <div className="flex items-center gap-2.5 mb-5">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="font-sans text-xs font-bold text-red-700 uppercase tracking-widest">Not Included</h3>
                  </div>
                  <ul className="space-y-3">
                    {pkg.exclusions.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="font-sans text-sm text-midnight/70 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* ── Booking Details ── */}
            <section id="booking" className="scroll-mt-24">
              <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
                RESERVING YOUR SPOT
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal leading-tight mb-8">
                How to Book
              </h2>
              <div className="space-y-6">
                <div className="bg-white rounded-xl border border-midnight/8 p-6">
                  <h3 className="font-sans text-xs font-bold text-midnight uppercase tracking-wider mb-4">Required Documents</h3>
                  <ul className="space-y-3">
                    {pkg.booking.requiredDocuments.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold-dark mt-2 shrink-0" />
                        <span className="font-sans text-sm text-midnight/70 leading-relaxed">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-xl border border-midnight/8 p-6">
                  <h3 className="font-sans text-xs font-bold text-midnight uppercase tracking-wider mb-4">Payment Schedule</h3>
                  <div className="border border-midnight/8 rounded-lg overflow-hidden bg-surface">
                    {pkg.booking.paymentSchedule.map((stage, idx) => (
                      <div key={idx} className={`grid grid-cols-2 p-4 ${idx > 0 ? 'border-t border-midnight/8' : ''}`}>
                        <div className="font-sans text-sm text-midnight font-semibold">{stage.stage}</div>
                        <div className="font-sans text-sm text-midnight/70">{stage.amount} ({stage.due})</div>
                      </div>
                    ))}
                  </div>
                </div>
                {pkg.booking.importantNotes && (
                  <div className="bg-amber-50/50 rounded-xl border border-amber-200/50 p-6">
                    <h3 className="font-sans text-xs font-bold text-amber-800 uppercase tracking-wider mb-4">Important Notes</h3>
                    <ul className="space-y-3">
                      {pkg.booking.importantNotes.map((note, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                          <span className="font-sans text-sm text-amber-800/80 leading-relaxed">{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>

            {/* ── Know Before You Go ── */}
            <section id="know-before" aria-labelledby="know-before-heading" className="scroll-mt-24">
              <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
                TRAVEL ESSENTIALS
              </span>
              <h2 id="know-before-heading" className="font-serif text-3xl md:text-4xl text-midnight font-normal leading-tight mb-8">
                Know Before You Go
              </h2>

              <div className="space-y-5">
                <div className="bg-white rounded-xl border border-midnight/8 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2" />
                        <path d="M3 10h18" strokeWidth="2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-sans text-sm font-bold text-midnight mb-2">Visa & Entry</h3>
                      <p className="font-sans text-sm text-midnight/70 leading-relaxed">{pkg.knowBefore.visa}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-xl border border-amber-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-sans text-sm font-bold text-amber-800 mb-2">ID Documents (Critical)</h3>
                      <p className="font-sans text-sm text-amber-800/80 leading-relaxed">{pkg.knowBefore.id}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-midnight/8 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-sans text-sm font-bold text-midnight mb-2">Fitness Level</h3>
                      <p className="font-sans text-sm text-midnight/70 leading-relaxed">{pkg.knowBefore.fitness}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-midnight/8 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-midnight/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-sans text-sm font-bold text-midnight mb-4">What to Pack</h3>
                      <ul className="space-y-2.5">
                        {pkg.knowBefore.packing.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <svg className="w-3.5 h-3.5 text-gold-dark shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="font-sans text-sm text-midnight/70 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── FAQ ── */}
            <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-24">
              <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
                QUESTIONS &amp; CLARITY
              </span>
              <h2 id="faq-heading" className="font-serif text-3xl md:text-4xl text-midnight font-normal leading-tight mb-8">
                Frequently Asked Questions
              </h2>

              <div className="space-y-3">
                {pkg.faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group bg-white rounded-xl border border-midnight/8 overflow-hidden hover:border-gold-dark/20 transition-colors duration-300"
                  >
                    <summary className="flex items-center justify-between cursor-pointer px-6 py-5 hover:bg-surface transition-colors list-none">
                      <h3 className="font-serif text-lg text-midnight font-normal pr-4 leading-snug">{faq.q}</h3>
                      <svg
                        width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-midnight/35"
                        aria-hidden="true"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 pt-1 border-t border-midnight/5">
                      <p className="font-sans text-sm text-midnight/70 leading-relaxed">{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>

            </section>

            {/* ── Terms ── */}
            <section id="terms" className="scroll-mt-24">
              <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
                POLICIES &amp; CONDITIONS
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal leading-tight mb-8">
                Terms &amp; Conditions
              </h2>
              <div className="space-y-6">
                <div className="bg-white rounded-xl border border-midnight/8 p-6">
                  <h3 className="font-sans text-xs font-bold text-midnight uppercase tracking-wider mb-4">Cancellation Policy</h3>
                  <div className="border border-midnight/8 rounded-lg overflow-hidden bg-surface">
                    {pkg.terms.cancellationPolicy.map((policy, idx) => (
                      <div key={idx} className={`grid grid-cols-2 p-4 ${idx > 0 ? 'border-t border-midnight/8' : ''}`}>
                        <div className="font-sans text-sm text-midnight font-semibold">{policy.timeBefore}</div>
                        <div className="font-sans text-sm text-midnight/70">{policy.refund}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-xl border border-midnight/8 p-6 space-y-6">
                  {[
                    { title: "Travel Insurance", content: pkg.terms.travelInsurance },
                    { title: "Changes & Amendments", content: pkg.terms.changes },
                    { title: "Company Rights", content: pkg.terms.companyRights },
                    { title: "Refund Policy", content: pkg.terms.refundPolicy },
                    { title: "Age Restriction", content: pkg.terms.ageRestriction }
                  ].map((item, idx) => (
                    <div key={idx} className={idx > 0 ? "pt-5 border-t border-midnight/8" : ""}>
                      <h4 className="font-sans text-xs font-bold text-midnight uppercase tracking-wider mb-2">{item.title}</h4>
                      <p className="font-sans text-sm text-midnight/70 leading-relaxed">{item.content}</p>
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
                    className="flex items-center justify-center font-sans text-xs font-semibold bg-white text-[#000613] w-full py-3 transition-all duration-300 hover:bg-gold hover:text-[#000613] min-h-[44px] tracking-wider uppercase"
                  >
                    Book This Package
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
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-midnight/10 shadow-2xl px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="font-sans text-[10px] text-midnight/45 uppercase tracking-wider">Starting from</p>
            <p className="font-serif text-2xl text-midnight font-normal leading-none">{pkg.price}</p>
          </div>
          <Link
            href={`/inquiry?package=${packageCode}`}
            className="flex items-center gap-2 px-6 py-3.5 bg-gold text-midnight font-sans text-xs font-bold tracking-[0.1em] uppercase hover:bg-yellow-300 transition-all duration-300 min-h-11 shrink-0"
          >
            Book This Package
          </Link>
        </div>
      </div>
      <div className="lg:hidden h-20" aria-hidden="true" />
    </div>
  );
}
