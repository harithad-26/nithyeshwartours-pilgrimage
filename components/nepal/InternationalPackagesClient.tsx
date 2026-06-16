"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MOCK_DESTINATIONS } from "@/lib/mockInternationalData";

const renderStandardIcon = (iconType: string) => {
  switch (iconType) {
    case "security":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#735c00" strokeWidth="1.75" aria-hidden="true">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      );
    case "dining":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#735c00" strokeWidth="1.75" aria-hidden="true">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      );
    case "service":
    default:
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#735c00" strokeWidth="1.75" aria-hidden="true">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      );
  }
};

const getInitials = (name: string) => {
  if (!name) return "";
  const parts = name.split(" ");
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
};

interface InternationalPackagesClientProps {
  destinationKey: string;
}

export default function InternationalPackagesClient({ destinationKey }: InternationalPackagesClientProps) {
  const dest = MOCK_DESTINATIONS[destinationKey];
  if (!dest) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <p className="font-sans text-lg text-midnight/60">Destination not found.</p>
      </div>
    );
  }

  const [activeFilter, setActiveFilter] = useState("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const packagesList = Object.values(dest.packages);

  const filters = [
    { id: "all", label: "All Packages" },
    { id: "luxury", label: "Luxury Retreats" },
    { id: "family", label: "Family-Friendly" },
    { id: "couples", label: "Couples & Honeymoons" },
  ];

  // For mock, we'll display all packages in the destination
  const filteredPackages = packagesList;

  return (
    <>
      {/* Short, focused hero header */}
      <section className="relative min-h-[60vh] py-24 md:py-36 flex flex-col items-center justify-center overflow-hidden">
        <Image
          src={dest.heroImage}
          alt={dest.title}
          fill
          sizes="100vw"
          className="object-cover"
          quality={95}
          priority
        />
        {/* Navy-tinted premium overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/75 via-midnight/65 to-midnight/90" aria-hidden="true" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold mb-5">
            {dest.tagline}
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-surface font-normal leading-tight tracking-tight mb-6">
            {dest.title}
          </h1>
          <p className="font-sans text-lg text-white/70 leading-relaxed max-w-2xl mx-auto mb-10">
            {dest.description}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#packages-list"
              className="font-sans text-sm font-semibold bg-gold text-gold-dark px-8 py-4 rounded hover:bg-yellow-300 transition-colors shadow-lg min-h-11 flex items-center"
            >
              Explore Packages
            </a>
          </div>
        </div>
      </section>

      {/* Intro Context */}
      <section className="bg-surface py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-gold-dark">
            BESPOKE ESCAPE
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal mt-3 mb-6">
            An Unparalleled Luxury Voyage
          </h2>
          <p className="font-sans text-base text-midnight/70 leading-relaxed">
            Our {dest.name} packages are meticulously crafted for travelers seeking pristine natural environments, absolute comfort, and smooth coordination. Enjoy handpicked luxury accommodations, private Transfers, and guided experiences designed to provide peace of mind throughout your journey.
          </p>
        </div>
      </section>

      {/* Standalone Trust Strip - Premium Luxury Design */}
      <section className="bg-gradient-to-b from-[#FCFBF9] to-white border-y border-gold/10 py-10 shadow-xs relative z-10 animate-in fade-in duration-500">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group relative bg-white px-6 py-5 border border-gold-dark/10 hover:border-gold/40 hover:-translate-y-1 shadow-[0_4px_20px_rgba(154,124,46,0.015)] hover:shadow-[0_12px_32px_rgba(154,124,46,0.08)] transition-all duration-300">
            {/* Gold accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gold-dark/40 group-hover:bg-gold group-hover:w-16 transition-all duration-300" />
            
            <div className="flex flex-col items-center text-center">
              <p className="font-serif text-5xl md:text-6xl text-gold-dark font-extralight tracking-tight group-hover:scale-102 transition-transform duration-300">50k+</p>
              <div className="w-5 h-px bg-gold/40 my-2" />
              <p className="font-sans text-[10px] text-midnight/80 uppercase tracking-[0.2em] font-bold">
                Travelers Guided
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-white px-6 py-5 border border-gold-dark/10 hover:border-gold/40 hover:-translate-y-1 shadow-[0_4px_20px_rgba(154,124,46,0.015)] hover:shadow-[0_12px_32px_rgba(154,124,46,0.08)] transition-all duration-300">
            {/* Gold accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gold-dark/40 group-hover:bg-gold group-hover:w-16 transition-all duration-300" />
            
            <div className="flex flex-col items-center text-center">
              <p className="font-serif text-5xl md:text-6xl text-gold-dark font-extralight tracking-tight group-hover:scale-102 transition-transform duration-300">4.9/5</p>
              <div className="w-5 h-px bg-gold/40 my-2" />
              <p className="font-sans text-[10px] text-midnight/80 uppercase tracking-[0.2em] font-bold">
                Average Traveler Rating
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-white px-6 py-5 border border-gold-dark/10 hover:border-gold/40 hover:-translate-y-1 shadow-[0_4px_20px_rgba(154,124,46,0.015)] hover:shadow-[0_12px_32px_rgba(154,124,46,0.08)] transition-all duration-300">
            {/* Gold accent line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gold-dark/40 group-hover:bg-gold group-hover:w-16 transition-all duration-300" />
            
            <div className="flex flex-col items-center text-center">
              <p className="font-serif text-5xl md:text-6xl text-gold-dark font-extralight tracking-tight group-hover:scale-102 transition-transform duration-300">25+</p>
              <div className="w-5 h-px bg-gold/40 my-2" />
              <p className="font-sans text-[10px] text-midnight/80 uppercase tracking-[0.2em] font-bold">
                Years of Sacred Service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid Section */}
      <section id="packages-list" className="bg-white py-16 px-6 md:px-12 border-t border-b border-midnight/5 scroll-mt-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <p className="font-sans text-sm font-semibold tracking-wider text-gold-dark mb-3">
                 {dest.name} Catalog
              </p>
              <h2 className="font-serif text-4xl text-midnight font-normal leading-snug">
                Our Most Beloved Journeys
              </h2>
            </div>
            <div className="shrink-0 flex items-center gap-3">
              <div className="w-16 h-px bg-gold-dark" aria-hidden="true" />
              <p className="font-serif text-base text-gold-dark italic">
                {filteredPackages.length} {filteredPackages.length === 1 ? "Retreat Available" : "Retreats Available"}
              </p>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2.5 pb-10 border-b border-midnight/5 mb-14 justify-start">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`font-sans text-sm font-semibold py-2 px-5 rounded-full border transition-all duration-300 ${
                  activeFilter === f.id
                    ? "bg-gold text-gold-dark border-gold shadow-sm"
                    : "bg-white text-midnight/60 border-midnight/5 hover:border-gold-dark/20 hover:text-midnight"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPackages.map((pkg) => (
              <Link
                key={pkg.code}
                href={`/packages/international/${destinationKey}/${pkg.code}`}
                className="group relative flex flex-col h-full rounded-lg overflow-hidden premium-card-interactive bg-white text-midnight"
              >
                {/* Header */}
                <div className="p-8 border-b border-midnight/10 bg-surface-low/30">
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-sans text-[10px] font-bold tracking-[0.12em] uppercase px-3 py-1 rounded-full bg-gold/15 text-gold-dark">
                      Premium Voyage
                    </span>
                    <span className="font-sans text-xs font-semibold tracking-wide text-midnight/65">
                      {pkg.duration}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-2xl font-normal leading-snug mb-2">
                    {pkg.title}
                  </h3>
                  
                  <p className="font-sans text-[11px] tracking-[0.15em] uppercase mb-6 font-medium text-midnight/45">
                    Code: {pkg.code} · Difficulty: {pkg.difficulty}
                  </p>

                  <div className="flex items-baseline gap-1.5">
                    <span className="font-sans text-xs font-light text-midnight/50">Starting from</span>
                    <span className="font-serif text-3xl font-normal leading-none text-gold-dark">
                      {pkg.price}
                    </span>
                    <span className="font-sans text-[10px] ml-1 font-light uppercase tracking-wider text-midnight/45">
                      per person
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-8 flex flex-col flex-grow justify-between gap-7">
                  <p className="font-sans text-sm leading-relaxed font-light text-midnight/70 line-clamp-2">
                    {pkg.description}
                  </p>

                  <div>
                    <p className="font-sans text-[10px] font-bold tracking-[0.15em] uppercase mb-4 text-gold-dark">
                      Tour Highlights &amp; Inclusions
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {pkg.overview.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5">
                          <svg
                            width="12"
                            height="10"
                            viewBox="0 0 12 10"
                            fill="none"
                            className="shrink-0 mt-1"
                            aria-hidden="true"
                          >
                            <path
                              d="M1 5l3 3 7-7"
                              stroke="#735c00"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="font-sans text-xs leading-relaxed text-midnight/80">
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {pkg.priceNote && (
                    <p className="font-sans text-xs leading-relaxed border-t border-midnight/10 pt-5 font-light italic text-midnight/45">
                      {pkg.priceNote}
                    </p>
                  )}
                </div>

                <div className="p-8 border-t border-midnight/10 bg-surface-low/30">
                  <span
                    className="btn-premium btn-premium-primary w-full text-center"
                  >
                    <span>View Details</span>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Storytelling Section */}
      {dest.storytelling && (
        <section className="py-24 px-6 bg-surface border-b border-midnight/5" aria-labelledby="storytelling-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
                {dest.storytelling.subtitle}
              </span>
              <h2 id="storytelling-heading" className="font-serif text-3xl md:text-4xl text-midnight font-normal leading-tight">
                {dest.storytelling.title}
              </h2>
              <p className="font-sans text-sm text-midnight/50 mt-4 max-w-md mx-auto text-center">
                {dest.storytelling.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {dest.storytelling.items.map((item, idx) => (
                <article key={idx} className="flex flex-col bg-white rounded-md overflow-hidden premium-card-static group">
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-midnight/10" aria-hidden="true" />
                  </div>
                  <div className="p-8 flex-1 flex flex-col gap-3">
                    <h3 className="font-serif text-2xl text-midnight font-normal leading-snug">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Standards Section */}
      {dest.standards && (
        <section className="py-24 px-6 bg-white border-b border-midnight/5" aria-labelledby="standards-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
                {dest.standards.subtitle}
              </span>
              <h2 id="standards-heading" className="font-serif text-3xl md:text-4xl text-midnight font-normal leading-tight">
                {dest.standards.title}
              </h2>
              <p className="font-sans text-sm text-midnight/55 mt-4 max-w-md mx-auto text-center">
                {dest.standards.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dest.standards.items.map((item, idx) => (
                <article key={idx} className="flex flex-col gap-5 p-8 bg-surface rounded premium-card-static group">
                  <div className="w-12 h-12 rounded-xl bg-gold-dark/5 flex items-center justify-center border border-gold-dark/15">
                    {renderStandardIcon(item.iconType)}
                  </div>
                  <h3 className="font-serif text-xl text-midnight font-medium">{item.title}</h3>
                  <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {dest.testimonials && (
        <section className="py-24 px-6 bg-surface border-b border-midnight/5" aria-labelledby="testimonials-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
                {dest.testimonials.subtitle}
              </span>
              <h2 id="testimonials-heading" className="font-serif text-3xl md:text-4xl text-midnight font-normal leading-tight">
                {dest.testimonials.title}
              </h2>
              <div className="w-12 h-0.5 bg-gold-dark mx-auto mt-6" aria-hidden="true" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dest.testimonials.items.map((item, idx) => (
                <article key={idx} className="bg-white p-8 rounded flex flex-col justify-between premium-card-static">
                  <div>
                    <div className="flex gap-1 mb-5" aria-label={`Rating: ${item.rating} stars`}>
                      {[...Array(item.rating)].map((_, starIdx) => (
                        <span key={starIdx} className="text-gold text-lg">★</span>
                      ))}
                    </div>
                    <p className="font-sans text-sm text-[#43474e] leading-relaxed italic mb-8">
                      "{item.comment}"
                    </p>
                  </div>
                  <div className="border-t border-midnight/5 pt-5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold-dark font-sans font-bold text-sm">
                      {getInitials(item.author)}
                    </div>
                    <div>
                      <p className="font-sans text-sm font-semibold text-midnight">{item.author}</p>
                      <p className="font-sans text-xs text-midnight/50">{item.location}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs Section */}
      <section className="py-24 px-6 bg-white border-b border-midnight/5" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
              Practical Guidance
            </span>
            <h2 id="faq-heading" className="font-serif text-3xl md:text-4xl text-midnight font-normal leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="font-sans text-sm text-midnight/55 mt-4 max-w-md mx-auto text-center">
              Essential tips and travel information for your {dest.name} voyage.
            </p>
          </div>

          <dl className="space-y-4">
            {dest.faqs.map((faq, i) => (
              <div key={i} className="bg-surface rounded border border-midnight/5 overflow-hidden shadow-sm">
                <dt>
                  <button
                    className="w-full flex justify-between items-center px-6 py-5 text-left focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-serif text-base text-midnight font-medium pr-6 leading-snug">
                      {faq.q}
                    </span>
                    <span
                      className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 1l5 5 5-5" stroke="var(--color-gold-dark)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "max-h-[300px]" : "max-h-0"
                  }`}
                  aria-hidden={openFaq !== i}
                >
                  <p className="px-6 pb-5 font-sans text-sm text-midnight/70 leading-relaxed border-t border-midnight/5 pt-4 bg-white">
                    {faq.a}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Customization CTA Section */}
      <section className="bg-navy py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-[-12rem] right-[-12rem] w-96 h-96 bg-gold-dark rounded-xl opacity-5 blur-[32px]" aria-hidden="true" />
        <div className="absolute bottom-[-8rem] left-[-8rem] w-64 h-64 bg-gold-dark rounded-xl opacity-5 blur-[20px]" aria-hidden="true" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center gap-8">
          <h2 className="font-serif text-3xl md:text-5xl text-surface font-normal leading-snug">
            Need a Tailored Experience?
          </h2>
          <p className="font-sans text-base md:text-lg text-white/70 leading-relaxed max-w-2xl">
            Our destination experts can customize any itinerary to match your specific dates, budget, or family needs. Prefill our trip builder form and let us craft your sanctuary voyage.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/trip-builder"
              className="font-sans text-sm font-semibold bg-gold text-gold-dark px-10 py-4 rounded hover:bg-yellow-300 transition-colors shadow-lg min-h-11 flex items-center"
            >
              Build Your Trip
            </Link>
            <Link
              href="/inquiry"
              className="font-sans text-sm font-semibold border border-white/20 text-white px-10 py-4 rounded hover:bg-white/10 transition-colors min-h-11 flex items-center"
            >
              Inquire General
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
