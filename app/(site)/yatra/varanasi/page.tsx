import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Varanasi Yatra 2026 — Kashi Vishwanath, Ganga Aarti & Sacred Circuit",
  description:
    "Experience the spiritual heart of India. Varanasi pilgrimage packages with Kashi Vishwanath darshan, Ganga Aarti, and sacred boat rides on the holy Ganga. Expert guides, Satvik meals, comfortable stays.",
};

const PACKAGES = [
  {
    code: "VNS-01",
    name: "Kashi Essentials",
    subtitle: "3 Nights · 4 Days",
    route: "Varanasi Airport · Dashashwamedh · Kashi Vishwanath · Sarnath",
    price: "₹18,500",
    priceNote: "Per person, twin-sharing basis",
    badge: null,
    highlights: [
      "3 nights in 3-star hotel near the Ghats",
      "Evening Ganga Aarti at Dashashwamedh Ghat",
      "Kashi Vishwanath Jyotirlinga darshan",
      "Guided morning boat ride on the Ganga",
      "Sarnath Buddhist site excursion",
      "All vegetarian meals and AC transfers",
    ],
  },
  {
    code: "VNS-02",
    name: "Kashi Immersion",
    subtitle: "5 Nights · 6 Days",
    route: "Varanasi · Sarnath · Ramnagar · Assi Ghat · Varanasi",
    price: "₹32,000",
    priceNote: "Includes VIP Darshan at Kashi Vishwanath",
    badge: "MOST SOUGHT",
    highlights: [
      "5 nights in a heritage riverside property",
      "VIP Darshan at Kashi Vishwanath Temple",
      "Sarnath — Dhamek Stupa & Buddha Museum",
      "Private puja at Assi Ghat at sunrise",
      "Ramnagar Fort and old city walking tour",
      "Daily Satvik buffet meals throughout",
    ],
  },
  {
    code: "VNS-03",
    name: "Kashi Full Circuit",
    subtitle: "7 Nights · 8 Days",
    route: "Varanasi · Sarnath · Prayagraj · Vindhyachal · Gaya · Varanasi",
    price: "₹55,000",
    priceNote: "Luxury river-view accommodation, private guide",
    badge: null,
    highlights: [
      "7 nights in luxury river-view accommodation",
      "Prayagraj Triveni Sangam excursion",
      "Vindhyachal Devi Shakti Peetha darshan",
      "Gaya Pitru Tarpan — ancestor liberation rites",
      "Private Puja at Manikarnika Ghat",
      "Dedicated spiritual guide and 24/7 concierge",
    ],
  },
];

const FAQS = [
  {
    q: "What is the best time to visit Varanasi?",
    a: "October to March is ideal — pleasant weather (15–28°C), clear skies, and major festivals including Dev Deepawali (November) and Maha Shivaratri (February/March). Avoid April–June (extreme heat). Monsoon (July–September) has a certain unique beauty with far fewer crowds.",
  },
  {
    q: "How many days are enough for a meaningful Kashi experience?",
    a: "Minimum 3 days covers the essential rituals and the Kashi Vishwanath darshan (VNS-01). We recommend 5 days for true spiritual immersion — including Sarnath, ghat walks, private pujas, and reflection time. The 7-day circuit adds Prayagraj and Gaya for an expanded sacred journey.",
  },
  {
    q: "Can I get VIP Darshan at Kashi Vishwanath Temple?",
    a: "Yes. VIP Darshan skips the 2–3 hour general queue. It costs an additional ₹500–1,000 per person and must be pre-booked. We handle all VIP pass arrangements for packages that include it (VNS-02 and above). For VNS-01, we can arrange it as an add-on.",
  },
  {
    q: "Is Varanasi safe for solo female travellers?",
    a: "Yes, and we take special care. We provide dedicated female guides on request, ensure secure heritage accommodation, arrange private AC transfers, and maintain 24/7 support contact throughout the trip. The old city lanes can be crowded — all our sightseeing walks are guided.",
  },
  {
    q: "What are the inclusions across all packages?",
    a: "All packages include: accommodation (category varies by package), daily vegetarian breakfast and dinner (pure Satvik — no onion, garlic, or meat), AC vehicle for all transfers and sightseeing, Ganga boat rides, temple entry tickets, English/Hindi guide, and all applicable taxes. Flights and trains to Varanasi are excluded.",
  },
  {
    q: "What is the cancellation and refund policy?",
    a: "30+ days before travel: full refund minus ₹2,000 processing fee. 15–29 days: 50% refund. Less than 15 days: no refund. In cases of temple closures, natural events, or force majeure — full rescheduling or maximum possible refund after actual expense deductions. Travel insurance is strongly recommended.",
  },
];

export default function VaranasiPage() {
  return (
    <div className="bg-surface min-h-screen">

      {/* 1. Cinematic Hero — Left Aligned */}
      <section className="relative h-screen flex items-center overflow-hidden" aria-label="Varanasi Yatra — The Eternal City of Kashi">
        <Image
          src="/images/india-states/varanasi-ghats-v3.png"
          alt="Varanasi — Sacred ghats and the eternal city of Kashi on the banks of the Ganga"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/75 to-midnight/20" aria-hidden="true" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-3xl">
            <span className="font-sans text-xs font-bold tracking-[0.35em] uppercase text-gold mb-4 block">
              KASHI — THE ETERNAL CITY OF LORD SHIVA
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-white mb-4 leading-[0.95] font-light">
              Varanasi
              <br />
              <span className="italic font-normal">Yatra</span>
            </h1>
            <p className="font-serif text-xl md:text-2xl text-white/90 mb-4 font-light leading-snug">
              Kashi Vishwanath · Ganga Aarti · Sacred Ghats
            </p>
            <p className="font-sans text-sm md:text-base text-white/65 mb-10 leading-relaxed max-w-xl">
              Where the divine meets the mortal on the banks of the sacred Ganga — a living city of eternal flame, ancient ritual, and the promise of moksha.
            </p>

            {/* Micro Stats */}
            <div className="flex flex-wrap items-center gap-6 mb-10 font-sans text-xs md:text-sm text-white/80">
              <div className="flex items-center gap-2">
                <span className="text-white/40">Duration:</span>
                <span className="font-semibold text-gold">4–8 Days</span>
              </div>
              <div className="w-px h-4 bg-white/20" aria-hidden="true" />
              <div className="flex items-center gap-2">
                <span className="text-white/40">Best Season:</span>
                <span className="font-semibold text-gold">October–March</span>
              </div>
              <div className="w-px h-4 bg-white/20" aria-hidden="true" />
              <div className="flex items-center gap-2">
                <span className="text-white/40">From:</span>
                <span className="font-semibold text-gold">₹18,500</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="#packages"
                className="btn-premium btn-premium-gold text-center"
              >
                <span>Explore Packages</span>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/inquiry?package=VNS-General"
                className="btn-premium btn-premium-glass text-center"
              >
                <span>Inquiry & Reserve</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
          <span className="font-sans text-[10px] text-white/40 uppercase tracking-widest">Begin the Journey</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </section>

      {/* 2. Trust Stats - Redesigned Premium Luxury Design */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 bg-gradient-to-b from-[#FCFBF9] to-white border-b border-gold/10 animate-in fade-in duration-500" aria-label="Why choose Nithyeshwar Tours">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
 
            <div className="group relative bg-white px-6 py-6 border border-gold-dark/10 hover:border-gold/40 hover:-translate-y-1 shadow-[0_4px_20px_rgba(154,124,46,0.015)] hover:shadow-[0_12px_32px_rgba(154,124,46,0.08)] transition-all duration-300">
              {/* Gold accent line at top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gold-dark/40 group-hover:bg-gold group-hover:w-16 transition-all duration-300" />
              
              <div className="flex flex-col items-center text-center">
                {/* Icon with premium gold styling */}
                <div className="w-9 h-9 mb-3.5 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 52 52" fill="none" stroke="#9a7c2e" strokeWidth="1.25" aria-hidden="true" className="group-hover:scale-105 transition-transform duration-300">
                    <circle cx="26" cy="14" r="8" />
                    <path d="M8 44c0-9.94 8.06-18 18-18s18 8.06 18 18" />
                    <path d="M38 20c4 1.5 7 5.3 7 10" strokeDasharray="2 2" />
                    <path d="M14 20c-4 1.5-7 5.3-7 10" strokeDasharray="2 2" />
                  </svg>
                </div>
                <p className="font-serif text-4xl md:text-5xl text-gold-dark font-extralight tracking-tight leading-none mb-1.5 group-hover:scale-102 transition-transform duration-300">50k+</p>
                <p className="font-sans text-[10px] text-midnight/80 uppercase tracking-[0.2em] font-bold mb-2">Pilgrims Guided</p>
                <p className="font-sans text-[11px] text-midnight/55 leading-relaxed font-light mt-1">Over three decades guiding devout pilgrims through the sacred lanes and ghats of Kashi.</p>
              </div>
            </div>
 
            <div className="group relative bg-white px-6 py-6 border border-gold-dark/10 hover:border-gold/40 hover:-translate-y-1 shadow-[0_4px_20px_rgba(154,124,46,0.015)] hover:shadow-[0_12px_32px_rgba(154,124,46,0.08)] transition-all duration-300">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gold-dark/40 group-hover:bg-gold group-hover:w-16 transition-all duration-300" />
              
              <div className="flex flex-col items-center text-center">
                <div className="w-9 h-9 mb-3.5 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 52 52" fill="none" stroke="#9a7c2e" strokeWidth="1.25" aria-hidden="true" className="group-hover:scale-105 transition-transform duration-300">
                    <path d="M26 6L32 18l13 2-9.5 9.2 2.2 13L26 36l-11.7 6.2 2.2-13L7 20l13-2z" />
                  </svg>
                </div>
                <p className="font-serif text-4xl md:text-5xl text-gold-dark font-extralight tracking-tight leading-none mb-1.5 group-hover:scale-102 transition-transform duration-300">4.9/5</p>
                <p className="font-sans text-[10px] text-midnight/80 uppercase tracking-[0.2em] font-bold mb-2">Average Guest Rating</p>
                <p className="font-sans text-[11px] text-midnight/55 leading-relaxed font-light mt-1">Consistently rated among the most trusted Varanasi spiritual tour operators by our pilgrims.</p>
              </div>
            </div>
 
            <div className="group relative bg-white px-6 py-6 border border-gold-dark/10 hover:border-gold/40 hover:-translate-y-1 shadow-[0_4px_20px_rgba(154,124,46,0.015)] hover:shadow-[0_12px_32px_rgba(154,124,46,0.08)] transition-all duration-300">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gold-dark/40 group-hover:bg-gold group-hover:w-16 transition-all duration-300" />
              
              <div className="flex flex-col items-center text-center">
                <div className="w-9 h-9 mb-3.5 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 52 52" fill="none" stroke="#9a7c2e" strokeWidth="1.25" aria-hidden="true" className="group-hover:scale-105 transition-transform duration-300">
                    <circle cx="26" cy="26" r="18" />
                    <path d="M26 16v14l8 4" />
                  </svg>
                </div>
                <p className="font-serif text-4xl md:text-5xl text-gold-dark font-extralight tracking-tight leading-none mb-1.5 group-hover:scale-102 transition-transform duration-300">100%</p>
                <p className="font-sans text-[10px] text-midnight/80 uppercase tracking-[0.2em] font-bold mb-2">Satvik Vegetarian</p>
                <p className="font-sans text-[11px] text-midnight/55 leading-relaxed font-light mt-1">All meals are pure Satvik — no onion, garlic, meat, or eggs. Prepared to honour the sanctity of the pilgrimage.</p>
              </div>
            </div>
 
            <div className="group relative bg-white px-6 py-6 border border-gold-dark/10 hover:border-gold/40 hover:-translate-y-1 shadow-[0_4px_20px_rgba(154,124,46,0.015)] hover:shadow-[0_12px_32px_rgba(154,124,46,0.08)] transition-all duration-300">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gold-dark/40 group-hover:bg-gold group-hover:w-16 transition-all duration-300" />
              
              <div className="flex flex-col items-center text-center">
                <div className="w-9 h-9 mb-3.5 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 52 52" fill="none" stroke="#9a7c2e" strokeWidth="1.25" aria-hidden="true" className="group-hover:scale-105 transition-transform duration-300">
                    <path d="M26 6v5M26 41v5M6 26h5M41 26h5" />
                    <circle cx="26" cy="26" r="14" />
                    <path d="M26 18v8l5 3" />
                  </svg>
                </div>
                <p className="font-serif text-4xl md:text-5xl text-gold-dark font-extralight tracking-tight leading-none mb-1.5 group-hover:scale-102 transition-transform duration-300">30+</p>
                <p className="font-sans text-[10px] text-midnight/80 uppercase tracking-[0.2em] font-bold mb-2">Years of Sacred Service</p>
                <p className="font-sans text-[11px] text-midnight/55 leading-relaxed font-light mt-1">Nithyeshwar Tours has served pilgrims at the divine city of Kashi for over three decades since 1993.</p>
              </div>
            </div>
 
          </div>
        </div>
      </section>

      {/* 3. The Kashi Experience (With Visual Storytelling Layout) */}
      <section className="py-12 md:py-20 lg:py-28 px-4 sm:px-6 bg-surface" aria-labelledby="experiences-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
              WHAT AWAITS YOU
            </span>
            <h2 id="experiences-heading" className="font-serif text-4xl md:text-5xl text-midnight font-normal leading-tight">
              The Kashi Experience
            </h2>
            <div className="w-12 h-0.5 bg-gold-dark mx-auto mt-6" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Kashi Vishwanath",
                desc: "Receive darshan at the golden-spired temple — one of the twelve Jyotirlingas where the divine light of Shiva burns eternally and moksha is believed to be granted to all who seek it here.",
                image: "/images/pilgrimage/kashi_vishwanath_highlight.png",
                subtitle: "The Eternal Light",
              },
              {
                title: "Dashashwamedh Ghat",
                desc: "A pre-dawn boat journey on the Ganga as Kashi awakens — silence of water, morning temple bells, the first saffron light breaking over 88 ancient ghats in an unbroken tradition.",
                image: "/images/india-states/varanasi-ghats-photo.png",
                subtitle: "Dawn Boat Ritual",
              },
              {
                title: "The Ganga Aarti",
                desc: "Witness the transcendent evening fire ritual at Dashashwamedh Ghat — priests and flames choreographed in perfect sacred symphony as a thousand devotees look on in silent awe.",
                image: "/images/pilgrimage/ganga_aarti_highlight.png",
                subtitle: "Evening Fire Ritual",
              },
            ].map((exp) => (
              <article
                key={exp.title}
                className="flex flex-col bg-white shadow-ambient rounded-md overflow-hidden border border-midnight/5 transition-all duration-300 hover:shadow-card hover:-translate-y-1 hover:border-midnight group"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-midnight/10" aria-hidden="true" />
                </div>
                <div className="p-8 flex-1 flex flex-col gap-3">
                  <h3 className="font-serif text-2xl text-midnight font-normal leading-snug">
                    {exp.title}
                  </h3>
                  <p className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-dark">{exp.subtitle}</p>
                  <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Sacred Circuit Timeline */}
      <section className="py-12 md:py-20 lg:py-28 px-4 sm:px-6 bg-surface-low border-y border-midnight/5" aria-labelledby="timeline-heading">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
              THE SACRED PATHWAY
            </span>
            <h2 id="timeline-heading" className="font-serif text-4xl text-midnight font-normal leading-tight">
              The Kashi Spiritual Circuit
            </h2>
            <p className="font-sans text-sm text-midnight/50 mt-4 max-w-md mx-auto">
              A deeply meaningful sequence of sacred sites that opens the pilgrim's heart to the deepest spiritual dimensions of the ancient city.
            </p>
          </div>

          <div className="relative pl-0">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gold-dark/20 -translate-x-1/2" aria-hidden="true" />
            <ol className="space-y-16" role="list">
              {[
                {
                  step: 1,
                  title: "Arrival · Evening Ganga Aarti",
                  desc: "Arrive at Lal Bahadur Shastri Airport. Transfer to your heritage accommodation. As the sun sets, attend the sacred Ganga Aarti at Dashashwamedh Ghat — your first immersion into the living ritual of Kashi.",
                  side: "right",
                },
                {
                  step: 2,
                  title: "Pre-Dawn Boat Ride on the Ganga",
                  desc: "Rise before sunrise and take a sacred boat ride on the Ganga. Watch Kashi's 88 ghats come alive as morning light touches the ancient riverfront — an unforgettable spiritual awakening.",
                  side: "left",
                },
                {
                  step: 3,
                  title: "Kashi Vishwanath Jyotirlinga",
                  desc: "Seek the sacred darshan of Lord Shiva at the Kashi Vishwanath Temple — one of the twelve Jyotirlingas. Experience the intense spiritual energy that has drawn pilgrims here for thousands of years.",
                  side: "right",
                },
                {
                  step: 4,
                  title: "Sarnath — Buddha's Sacred Deer Park",
                  desc: "A half-day excursion to Sarnath, just 10km from Varanasi, where the Buddha gave his first teachings after enlightenment. Visit the Dhamek Stupa and the archaeological museum.",
                  side: "left",
                },
                {
                  step: 5,
                  title: "Deeper Kashi — The Extended Circuit",
                  desc: "For the 5- and 7-day packages: visit Manikarnika Ghat, Sankat Mochan Temple, Ramnagar Fort, Assi Ghat sunrise puja, and the extended circuit to Prayagraj Sangam and Vindhyachal Devi.",
                  side: "right",
                },
              ].map((item) => (
                <li
                  key={item.step}
                  className="relative grid grid-cols-[48px_1fr] md:grid-cols-[1fr_80px_1fr] items-start md:items-center gap-4 md:gap-0"
                >
                  {item.side === "right" ? (
                    <>
                      <div className="order-2 md:order-1 md:text-right md:pr-12">
                        <h3 className="font-serif text-xl text-midnight font-normal mb-2">{item.title}</h3>
                        <p className="font-sans text-sm text-midnight/60 leading-relaxed max-w-sm md:ml-auto">{item.desc}</p>
                      </div>
                      <div className="order-1 md:order-2 flex justify-center relative z-10">
                        <div className="w-10 h-10 rounded-full bg-midnight border-2 border-gold flex items-center justify-center font-serif text-xs text-gold">{item.step}</div>
                      </div>
                      <div className="hidden md:block md:order-3" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block md:order-1" />
                      <div className="order-1 md:order-2 flex justify-center relative z-10">
                        <div className="w-10 h-10 rounded-full bg-midnight border-2 border-gold flex items-center justify-center font-serif text-xs text-gold">{item.step}</div>
                      </div>
                      <div className="order-2 md:order-3 md:pl-12">
                        <h3 className="font-serif text-xl text-midnight font-normal mb-2">{item.title}</h3>
                        <p className="font-sans text-sm text-midnight/60 leading-relaxed max-w-sm">{item.desc}</p>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 5. Package Cards */}
      <section className="py-12 md:py-20 lg:py-28 px-4 sm:px-6 bg-surface" id="packages" aria-labelledby="packages-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
              CHOOSE YOUR JOURNEY
            </span>
            <h2 id="packages-heading" className="font-serif text-4xl md:text-5xl text-midnight font-normal leading-tight">
              Kashi Yatra Packages
            </h2>
            <p className="font-sans text-sm text-midnight/50 mt-4">
              Three deeply curated Kashi journeys — from the essential 4-day temple circuit to the complete 8-day sacred India pilgrimage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg) => (
              <article
                key={pkg.code}
                className={`flex flex-col h-full bg-white rounded-md border-2 shadow-card hover:-translate-y-1.5 hover:shadow-ambient transition-all duration-300 ${
                  pkg.badge
                    ? "border-gold-dark/30 hover:border-gold-dark"
                    : "border-midnight/5 hover:border-midnight"
                }`}
              >
                {/* Header */}
                <div className="p-8 border-b border-midnight/5 bg-surface-low/30">
                  <div className="flex items-center justify-between mb-5">
                    <span className={`font-sans text-[10px] font-bold tracking-[0.25em] uppercase px-3 py-1 rounded-full ${
                      pkg.badge
                        ? "bg-gold-muted/60 text-gold-dark"
                        : "bg-midnight/5 text-midnight/50"
                    }`}>
                      {pkg.badge ?? pkg.code}
                    </span>
                    {pkg.badge && (
                      <span className="font-sans text-[10px] font-medium text-midnight/40 tracking-wide">
                        {pkg.code}
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-midnight font-normal leading-snug mb-2 line-clamp-2 min-h-14">{pkg.name}</h3>
                  <p className="font-sans text-[11px] text-midnight/45 tracking-[0.15em] uppercase mb-6 font-medium">
                    {pkg.subtitle}
                  </p>
                  <p className="font-sans text-[10px] text-midnight/40 mb-3 uppercase tracking-wider">Route</p>
                  <p className="font-sans text-xs text-midnight/60 leading-relaxed">{pkg.route}</p>
                  <div className="flex items-baseline gap-1.5 mt-5">
                    <span className="font-sans text-xs text-midnight/50 font-light">From</span>
                    <span className="font-serif text-3xl font-normal text-gold-dark leading-none">{pkg.price}</span>
                    <span className="font-sans text-xs text-midnight/40 ml-1 font-light">/ person</span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-8 flex-1 flex flex-col justify-between gap-7">
                  <div>
                    <p className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-5">
                      Package Highlights
                    </p>
                    <ul className="space-y-3.5">
                      {pkg.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-3">
                          <svg className="w-4 h-4 text-gold-dark flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="font-sans text-sm text-midnight/75 font-light leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="font-sans text-xs text-midnight/35 leading-relaxed border-t border-midnight/5 pt-5 font-light italic">
                    {pkg.priceNote}
                  </p>
                </div>

                {/* Footer */}
                <div className="p-8 border-t border-midnight/5 bg-surface-low/30">
                  <Link
                    href={`/yatra/varanasi/${pkg.code}`}
                    className="btn-premium btn-premium-primary w-full text-center"
                  >
                    <span>View Details</span>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="font-sans text-xs text-midnight/40 text-center mt-10">
            All prices are per person on twin-sharing basis. Single supplement applicable. GST 5% extra.
          </p>
        </div>
      </section>

      {/* 6. Expedition Standards */}
      <section className="py-12 md:py-20 lg:py-28 px-4 sm:px-6 bg-surface-low border-y border-midnight/5" aria-labelledby="standards-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
              THE NITHYESHWAR STANDARD
            </span>
            <h2 id="standards-heading" className="font-serif text-4xl md:text-5xl text-midnight font-normal leading-tight">
              Comfort &amp; Sacred Authenticity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="flex flex-col gap-5 p-8 bg-white border border-gold-dark/10 rounded shadow-ambient hover:shadow-card hover:-translate-y-1 hover:border-gold-dark/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gold-dark/5 flex items-center justify-center border border-gold-dark/15">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#735c00" strokeWidth="1.75" aria-hidden="true">
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-midnight font-medium">VIP Temple Access</h3>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                Pre-arranged VIP Darshan at Kashi Vishwanath, bypassing the 2–3 hour general queue. All temple passes, boat permits, and entrance fees handled on your behalf.
              </p>
            </article>

            <article className="flex flex-col gap-5 p-8 bg-white border border-gold-dark/10 rounded shadow-ambient hover:shadow-card hover:-translate-y-1 hover:border-gold-dark/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gold-dark/5 flex items-center justify-center border border-gold-dark/15">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#735c00" strokeWidth="1.75" aria-hidden="true">
                  <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9" />
                  <path d="M18.5 3a2.5 2.5 0 0 1 0 5" />
                  <path d="M22 3a6 6 0 0 1-6 6" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-midnight font-medium">Heritage Ghat Stays</h3>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                We partner with handpicked heritage hotels along the Ganga riverfront — within walking distance of the major ghats, combining comfort with authentic proximity to Kashi's sacred pulse.
              </p>
            </article>

            <article className="flex flex-col gap-5 p-8 bg-white border border-gold-dark/10 rounded shadow-ambient hover:shadow-card hover:-translate-y-1 hover:border-gold-dark/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gold-dark/5 flex items-center justify-center border border-gold-dark/15">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#735c00" strokeWidth="1.75" aria-hidden="true">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-midnight font-medium">Pure Satvik Cuisine</h3>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                Every meal is prepared without onion, garlic, meat, or eggs — true Satvik style, honoring the sanctity of the pilgrimage. Varanasi's legendary Kashi Thali is a pilgrimage in itself.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Bento Gallery Section */}
      <section className="py-12 md:py-20 lg:py-28 px-4 sm:px-6 bg-white border-t border-midnight/5" aria-labelledby="gallery-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
              VISUAL REVERENCE
            </span>
            <h2 id="gallery-heading" className="font-serif text-4xl text-midnight font-normal leading-tight">
              Glances of the Sacred Ghats
            </h2>
            <div className="w-12 h-0.5 bg-gold-dark mx-auto mt-6" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[720px] md:h-[520px]">
            {/* Left wide card - Ghats */}
            <div className="relative col-span-1 md:col-span-2 h-full overflow-hidden rounded shadow-ambient group">
              <Image
                src="/images/india-states/varanasi-ghats-photo.png"
                alt="Sunrise panoramic view of the ancient ghats of Varanasi"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-midnight/80 to-transparent p-6 text-white">
                <p className="font-serif text-xl">The River of Salvation</p>
                <p className="font-sans text-xs text-white/70">Dashashwamedh & Assi Ghats</p>
              </div>
            </div>

            {/* Right stacked cards */}
            <div className="grid grid-rows-2 gap-6 h-full">
              {/* Kashi Vishwanath */}
              <div className="relative h-full overflow-hidden rounded shadow-ambient group">
                <Image
                  src="/images/pilgrimage/kashi_vishwanath_highlight.png"
                  alt="Golden spires of Kashi Vishwanath Temple"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-midnight/80 to-transparent p-4 text-white">
                  <p className="font-serif text-base">Kashi Vishwanath Mandir</p>
                </div>
              </div>
              
              {/* Ganga Aarti */}
              <div className="relative h-full overflow-hidden rounded shadow-ambient group">
                <Image
                  src="/images/pilgrimage/ganga_aarti_highlight.png"
                  alt="Evening Ganga Aarti fire ritual ceremony"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-midnight/80 to-transparent p-4 text-white">
                  <p className="font-serif text-base">Evening Ganga Aarti</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Sarnath Dhamek Stupa */}
            <div className="relative h-64 overflow-hidden rounded shadow-ambient group">
              <Image
                src="/images/pilgrimage/sarnath_gallery.png"
                alt="Dhamek Stupa at Sarnath standing tall in green gardens"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-midnight/80 to-transparent p-4 text-white">
                <p className="font-serif text-base">Dhamek Stupa, Sarnath</p>
              </div>
            </div>

            {/* Prayagraj Sangam */}
            <div className="relative h-64 overflow-hidden rounded shadow-ambient group">
              <Image
                src="/images/pilgrimage/prayagraj_sangam_highlight.png"
                alt="Devotees on boats at the Triveni Sangam in Prayagraj"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-midnight/80 to-transparent p-4 text-white">
                <p className="font-serif text-base">Triveni Sangam, Prayagraj</p>
              </div>
            </div>

            {/* Ayodhya Ram Mandir */}
            <div className="relative h-64 overflow-hidden rounded shadow-ambient group">
              <Image
                src="/images/india-states/ram-mandir-ayodhya.png"
                alt="The newly constructed grand Ram Mandir in Ayodhya"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-midnight/80 to-transparent p-4 text-white">
                <p className="font-serif text-base">Ram Mandir, Ayodhya</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-12 md:py-20 lg:py-28 px-4 sm:px-6 bg-surface border-t border-midnight/5" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
              QUESTIONS &amp; CLARITY
            </span>
            <h2 id="faq-heading" className="font-serif text-4xl text-midnight font-normal leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-md overflow-hidden shadow-ambient border border-midnight/5 hover:border-gold-dark/15 transition-colors duration-300"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 hover:bg-surface-low transition-colors list-none">
                  <h3 className="font-serif text-lg text-midnight font-normal pr-4 leading-snug">{faq.q}</h3>
                  <svg
                    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-midnight/40"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 pt-1">
                  <p className="font-sans text-sm text-midnight/70 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
