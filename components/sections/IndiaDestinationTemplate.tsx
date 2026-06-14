import Image from "next/image";
import Link from "next/link";
import type { DestinationDetail, Package } from "@/lib/types";
import KailashFaq from "./KailashFaq";

interface IndiaDestinationTemplateProps {
  destination: DestinationDetail;
  packages: Package[];
}

// Default values for common section content to avoid duplication across destination pages
const DEFAULT_TRUST_CARDS = [
  {
    stat: "10k+",
    label: "Devotees Guided",
    description: "We have guided thousands of families and senior citizens on custom yatras with utmost care.",
    iconName: "devotees"
  },
  {
    stat: "100%",
    label: "VIP Darshan Pass",
    description: "All special entry passes are coordinated in advance to minimize waiting times at key shrines.",
    iconName: "darshan"
  },
  {
    stat: "24/7",
    label: "On-Road Support",
    description: "Dedicated vehicles, local drivers, and on-ground representatives always on call.",
    iconName: "support"
  },
  {
    stat: "30+",
    label: "Years of Service",
    description: "Organizing customized spiritual yatras across Bharat since 1993 with deep devotion.",
    iconName: "service"
  }
];

const DEFAULT_STANDARDS = [
  {
    title: "VIP Darshan Escorts",
    description: "Pre-booked special entry tickets and local escorts at major temples to minimize queues.",
    iconName: "vip"
  },
  {
    title: "Clean Satvik Dining",
    description: "Carefully selected dining options serving fresh, hygienic, vegetarian food along the yatra route.",
    iconName: "dining"
  },
  {
    title: "Spiritual Guides",
    description: "Knowledgeable guides accompanying you to explain historic legend, guide temple rituals, and coordinate regional transport.",
    iconName: "guide"
  }
];

const DEFAULT_STEPS = [
  {
    num: "01",
    title: "Choose Your Circuit",
    body: "We offer curated circuits designed for a specific depth of spiritual immersion, regional heritage, and natural beauty."
  },
  {
    num: "02",
    title: "Sacred Logistics",
    body: "All darshan arrangements, VIP queue passes, hotel bookings near the shrines, and transport are handled entirely by our team."
  },
  {
    num: "03",
    title: "Begin the Journey",
    body: "Travel with a knowledgeable guide who speaks both the local language and the language of devotion. Every ritual is explained."
  }
];

export function IndiaDestinationTemplate({ destination, packages }: IndiaDestinationTemplateProps) {
  const trustCards = destination.trustCards || DEFAULT_TRUST_CARDS;
  const standards = destination.standards || DEFAULT_STANDARDS;
  const steps = destination.steps || DEFAULT_STEPS;

  // Render SVG helper for trust cards
  const renderTrustIcon = (name: string) => {
    switch (name) {
      case "devotees":
        return (
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="#9a7c2e" strokeWidth="1.4" aria-hidden="true">
            <circle cx="26" cy="14" r="8" />
            <path d="M8 44c0-9.94 8.06-18 18-18s18 8.06 18 18" />
            <path d="M38 20c4 1.5 7 5.3 7 10" strokeDasharray="2 2" />
            <path d="M14 20c-4 1.5-7 5.3-7 10" strokeDasharray="2 2" />
          </svg>
        );
      case "darshan":
      case "vip":
        return (
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="#9a7c2e" strokeWidth="1.4" aria-hidden="true">
            <path d="M26 6L32 18l13 2-9.5 9.2 2.2 13L26 36l-11.7 6.2 2.2-13L7 20l13-2z" />
            <path d="M18 34l-5 10M34 34l5 10" strokeDasharray="2 2" />
          </svg>
        );
      case "support":
        return (
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="#9a7c2e" strokeWidth="1.4" aria-hidden="true">
            <rect x="10" y="10" width="32" height="32" rx="6" />
            <path d="M26 18v16M18 26h16" />
            <circle cx="26" cy="26" r="18" strokeDasharray="2 3" />
          </svg>
        );
      case "service":
      case "years":
      default:
        return (
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="#9a7c2e" strokeWidth="1.4" aria-hidden="true">
            <path d="M26 6v5M26 41v5M6 26h5M41 26h5" />
            <circle cx="26" cy="26" r="14" />
            <path d="M26 18v8l5 3" />
          </svg>
        );
    }
  };

  // Render SVG helper for standards cards
  const renderStandardIcon = (name: string) => {
    switch (name) {
      case "vip":
      case "escort":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#735c00" strokeWidth="1.75" aria-hidden="true">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        );
      case "dining":
      case "food":
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#735c00" strokeWidth="1.75" aria-hidden="true">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        );
      case "guide":
      default:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#735c00" strokeWidth="1.75" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
        );
    }
  };

  return (
    <>
      {/* 1. Master Template Hero (Dark) - Clean & Visual */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <Image
          src={destination.heroImage}
          alt={destination.title}
          fill
          sizes="100vw"
          className="object-cover"
          quality={90}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/40 via-midnight/35 to-midnight/70" aria-hidden="true" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold mb-5">
            {destination.eyebrow}
          </p>
          <h1 className="font-serif text-6xl md:text-7xl text-surface font-normal leading-tight mb-6">
            {destination.name}
          </h1>
          <p className="font-sans text-xl text-white/90 leading-relaxed max-w-2xl mx-auto mb-10">
            {destination.tagline || "Discover sacred heritage and spiritual serenity"}
          </p>
          <Link
            href="/inquiry"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold bg-white text-midnight px-8 py-4 rounded-md hover:bg-gold transition-colors duration-300 min-h-11"
          >
            Begin Your Pilgrimage
          </Link>
        </div>
      </section>

      {/* 1.5 About Destination - Full Description Section */}
      <section className="py-20 px-6 bg-white border-b border-midnight/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4">
              About {destination.name}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal leading-snug mb-6">
              {destination.title || `Discover ${destination.name}`}
            </h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="font-sans text-base text-midnight/70 leading-relaxed mb-6">
              {destination.description}
            </p>
            {destination.extendedDescription && (
              <p className="font-sans text-base text-midnight/70 leading-relaxed">
                {destination.extendedDescription}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* 2. Trust Section (4-column Grid) */}
      <section className="py-20 px-6 bg-white border-b border-midnight/5" aria-label="Why choose Nithyeshwar Tours">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-midnight/8 rounded-xl overflow-hidden">
            {trustCards.map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-10 border-r border-midnight/8 last:border-r-0 bg-white hover:bg-surface-low hover:-translate-y-1 hover:shadow-ambient transition-all duration-300"
              >
                <div className="w-16 h-16 mb-6 flex items-center justify-center">
                  {renderTrustIcon(card.iconName)}
                </div>
                <p className="font-serif text-4xl text-midnight font-normal leading-none mb-1">{card.stat}</p>
                <p className="font-serif text-base text-midnight/80 font-normal mb-3">{card.label}</p>
                <p className="font-sans text-xs text-midnight/50 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Key Attractions (3 Alternating Rows) */}
      <section className="bg-surface py-28 px-12">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4 text-center">
            Sacred Triad
          </p>
          <h2 className="font-serif text-4xl text-midnight font-normal text-center mb-4 leading-snug">
            Attractions & Pilgrimage Landmarks
          </h2>
          <p className="font-sans text-base text-midnight/50 text-center mb-16 max-w-xl mx-auto leading-relaxed">
            Discover the monumental sights and sacred centers that form the historical core of this region.
          </p>

          <div className="flex flex-col gap-20">
            {destination.attractions.map((site, i) => (
              <div
                key={site.name}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <p className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                    {site.location}
                  </p>
                  <h3 className="font-serif text-3xl text-midnight font-normal leading-snug mb-5">
                    {site.name}
                  </h3>
                  <p className="font-sans text-base text-midnight/60 leading-relaxed">
                    {site.description}
                  </p>
                </div>
                <div className={`relative h-80 lg:h-96 rounded-sm overflow-hidden shadow-xl ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Image
                    src={site.img}
                    alt={site.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-midnight/15" aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Packages Grid (Tamil Nadu style 4-column Grid) */}
      <section className="bg-surface py-28 px-12 border-t border-midnight/5" aria-labelledby="packages-heading">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4 text-center">
            SACRED CIRCUITS
          </p>
          <h2 id="packages-heading" className="font-serif text-4xl text-midnight font-normal text-center mb-4 leading-snug">
            Featured {destination.name} Packages
          </h2>
          <p className="font-sans text-base text-midnight/50 text-center mb-16 max-w-xl mx-auto leading-relaxed">
            Choose from our pre-curated spiritual itineraries, or contact our travel desk to customize your journey.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id || pkg.slug}
                className="flex flex-col h-full p-8 rounded-xl bg-white border border-gold-dark/10 shadow-ambient hover:shadow-card hover:-translate-y-1 hover:border-gold-dark/30 transition-all duration-300"
              >
                {/* Code badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sans text-[10px] font-bold tracking-[0.1em] text-midnight/40 uppercase">
                    CODE: {pkg.code}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl font-normal leading-snug mb-3 text-midnight">
                  {pkg.title}
                </h3>

                {/* Pricing display */}
                <div className="mb-6 pb-6 border-b border-gold-dark/10">
                  <p className="font-sans text-[10px] uppercase tracking-[0.1em] text-midnight/40 mb-1">
                    Starting From
                  </p>
                  <p className="font-sans text-3xl font-bold text-gold-dark tracking-tight">
                    ₹{pkg.price.toLocaleString("en-IN")}
                  </p>
                  <p className="font-sans text-[10px] text-midnight/40 mt-1">per devotee</p>
                </div>

                {/* Subtitle / Description */}
                <p className="font-sans text-sm leading-relaxed mb-6 text-midnight/60 line-clamp-2">
                  {pkg.subtitle}
                </p>

                {/* Highlights (rendered as features) */}
                <ul className="flex flex-col gap-2.5 mb-8">
                  {pkg.highlights.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden="true">
                        <path d="M1 5l3 3 7-7" stroke="#9a7c2e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="font-sans text-xs text-midnight/70 truncate">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA View Details */}
                <Link
                  href={`/packages/${pkg.slug}`}
                  className="mt-auto flex items-center justify-center py-3.5 font-sans text-xs font-bold tracking-[0.15em] uppercase rounded border border-gold-dark text-gold-dark hover:bg-gold-dark hover:text-white transition-colors duration-300 min-h-11"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Service Standards */}
      <section className="py-28 px-6 bg-surface-low border-y border-midnight/5" aria-labelledby="standards-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
              THE NITHYESHWAR STANDARD
            </span>
            <h2 id="standards-heading" className="font-serif text-4xl md:text-5xl text-midnight font-normal leading-tight">
              Devotion & Comfort Hand in Hand
            </h2>
            <p className="font-sans text-sm text-midnight/55 mt-4">
              We ensure your pilgrimage balances authentic spiritual guides and temple rituals with complete home comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {standards.map((standard, idx) => (
              <article
                key={idx}
                className="flex flex-col gap-5 p-8 bg-white border border-gold-dark/10 rounded shadow-ambient hover:shadow-card hover:-translate-y-1 hover:border-gold-dark/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-dark/5 flex items-center justify-center border border-gold-dark/15">
                  {renderStandardIcon(standard.iconName)}
                </div>
                <h3 className="font-serif text-xl text-midnight font-medium">{standard.title}</h3>
                <p className="font-sans text-sm text-midnight/70 leading-relaxed">{standard.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Planning steps */}
      <section className="bg-surface py-28 px-12">
        <div className="max-w-4xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4 text-center">
            How It Works
          </p>
          <h2 className="font-serif text-4xl text-midnight font-normal text-center mb-16 leading-snug">
            Planning Your Journey
          </h2>

          <div className="relative">
            <div className="absolute left-8 top-8 bottom-8 w-px bg-midnight/10" aria-hidden="true" />
            <ol className="space-y-0" role="list">
              {steps.map((step) => (
                <li key={step.num} className="flex gap-8 pb-14 relative">
                  <div className="flex flex-col items-center z-10">
                    <div className="w-16 h-16 rounded-xl bg-midnight flex items-center justify-center shrink-0">
                      <span className="font-serif text-sm text-gold font-normal">
                        {step.num}
                      </span>
                    </div>
                  </div>
                  <div className="pt-3">
                    <h3 className="font-serif text-xl text-midnight font-normal mb-2">
                      {step.title}
                    </h3>
                    <p className="font-sans text-sm text-midnight/60 leading-relaxed max-w-lg">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 7. Devotee reviews / testimonials */}
      <section className="py-28 px-6 bg-surface-low border-t border-midnight/5" aria-labelledby="stories-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
              VOICES OF GRACE
            </span>
            <h2 id="stories-heading" className="font-serif text-4xl text-midnight font-normal leading-tight">
              Testimonials from the Devotees
            </h2>
            <div className="w-12 h-0.5 bg-gold-dark mx-auto mt-6" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destination.testimonials.map((t, i) => (
              <article
                key={i}
                className="bg-white p-8 rounded border border-midnight/5 shadow-ambient hover:-translate-y-1 hover:shadow-card hover:border-midnight transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-5" aria-label={`Rating: ${t.rating} stars`}>
                    {[...Array(t.rating)].map((_, idx) => (
                      <span key={idx} className="text-gold text-lg">★</span>
                    ))}
                  </div>
                  <p className="font-sans text-sm text-[#43474e] leading-relaxed italic mb-8">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
                <div className="border-t border-midnight/5 pt-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold-dark/10 flex items-center justify-center font-serif text-sm text-gold-dark font-medium">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-midnight">{t.name}</h4>
                    <p className="font-sans text-[11px] text-midnight/40">{t.location}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQs Section */}
      <section className="py-28 px-6 bg-white border-t border-midnight/5" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
              QUESTIONS & ANSWERS
            </span>
            <h2 id="faq-heading" className="font-serif text-4xl text-midnight font-normal leading-tight">
              Frequently Asked Questions
            </h2>
            <div className="w-12 h-0.5 bg-gold-dark mx-auto mt-6" aria-hidden="true" />
          </div>

          <KailashFaq faqs={destination.faqs} />
        </div>
      </section>

      {/* 9. footer/CTA section */}
      <section className="bg-midnight py-24 px-12 text-center">
        <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold mb-5">
          The Path Awaits
        </p>
        <h2 className="font-serif text-4xl text-surface font-normal mb-6 leading-snug">
          Begin Your Journey Today
        </h2>
        <p className="font-sans text-base text-white/60 max-w-md mx-auto mb-10 leading-relaxed">
          Our specialized pilgrimage desks will design a custom tour matching your dates, your budget, and your sense of wonder.
        </p>
        <Link
          href="/inquiry"
          className="inline-flex items-center gap-2 font-sans text-sm font-semibold bg-gold text-midnight px-8 py-4 rounded-md hover:bg-yellow-300 transition-colors duration-300 min-h-11"
        >
          {destination.planButtonText}
        </Link>
      </section>
    </>
  );
}
