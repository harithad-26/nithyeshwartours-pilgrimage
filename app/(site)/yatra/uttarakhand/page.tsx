import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uttarakhand Yatra 2026 — Haridwar, Kedarnath, Badrinath & Do Dham",
  description:
    "Sacred Himalayan journeys through Devbhumi — Haridwar-Rishikesh circuits, Do Dham Yatra, and Kedarnath special packages. Expert guides, comfortable stays, biometric registration handled.",
};

const PACKAGES = [
  {
    code: "uk-01",
    name: "Haridwar-Rishikesh Circuit",
    subtitle: "3 Nights · 4 Days",
    route: "Delhi · Haridwar · Rishikesh · Delhi",
    price: "₹15,000",
    priceNote: "Per person, twin-sharing basis",
    badge: null,
    highlights: [
      "3 nights in 3-star hotel at Haridwar",
      "Evening Ganga Aarti at Har Ki Pauri",
      "Rishikesh ashram & temple visits",
      "Laxman Jhula & Ram Jhula sightseeing",
      "Daily vegetarian breakfast and dinner",
      "All airport and sightseeing transfers",
    ],
  },
  {
    code: "uk-02",
    name: "Do Dham Yatra",
    subtitle: "6 Nights · 7 Days",
    route: "Haridwar · Guptkashi · Kedarnath · Badrinath · Rishikesh",
    price: "₹28,000",
    priceNote: "Includes VIP Darshan at both shrines",
    badge: "MOST POPULAR",
    highlights: [
      "Kedarnath Jyotirlinga darshan (trek/pony/heli)",
      "Badrinath Vishnu Peetha darshan",
      "Visit Mana Village — last Indian village",
      "Guptkashi & Sonprayag sightseeing",
      "Haridwar Ganga Aarti and Rishikesh visit",
      "All vegetarian meals and AC transfers",
    ],
  },
  {
    code: "uk-03",
    name: "Kedarnath Special",
    subtitle: "4 Nights · 5 Days",
    route: "Haridwar · Guptkashi · Kedarnath · Haridwar",
    price: "₹22,000",
    priceNote: "Trek, pony, and helicopter options available",
    badge: null,
    highlights: [
      "Focused darshan at Kedarnath Jyotirlinga",
      "Flexible trek, pony, or helicopter ascent",
      "2 nights at Guptkashi / Sonprayag",
      "Haridwar Ganga Aarti evening experience",
      "Medical kit and oxygen cylinder on route",
      "All meals and AC SUV transfers",
    ],
  },
];

const FAQS = [
  {
    q: "When do the Uttarakhand shrines open for 2026?",
    a: "Kedarnath and Badrinath open in late April/early May and close in November. Gangotri and Yamunotri also follow this seasonal schedule. Haridwar and Rishikesh are accessible year-round.",
  },
  {
    q: "What is the difference between Do Dham and Char Dham?",
    a: "Do Dham covers Kedarnath and Badrinath — the two most popular and spiritually significant shrines. Char Dham adds Yamunotri and Gangotri (the origin shrines of Yamuna and Ganga), making it the complete circuit. Our Do Dham package is ideal for those with 7–8 days available.",
  },
  {
    q: "How difficult is the Kedarnath trek?",
    a: "The Kedarnath trek is 18km from Gaurikund with significant ascent. It is moderately challenging but very manageable with normal fitness. Options include trekking, hiring a pony (₹1,500–2,000), using a palki/doli (₹5,000–7,000), or taking a helicopter from Phata/Sersi/Guptkashi.",
  },
  {
    q: "Can helicopter services be arranged for Kedarnath?",
    a: "Yes. We coordinate helicopter bookings from Phata, Sersi, and Guptkashi (₹6,000–8,000 per person one-way). Slots are limited and fill months ahead — request a helicopter option at time of booking.",
  },
  {
    q: "What should I pack for high-altitude Uttarakhand?",
    a: "Layered warm clothing (heavy jacket for early mornings), good trekking shoes, raincoat, sunscreen SPF 50+, personal medications, valid photo ID, and a small daypack. Temperatures drop to 0–8°C at altitude even in May and June.",
  },
  {
    q: "Is biometric registration required for Kedarnath and Badrinath?",
    a: "Yes, the Uttarakhand government requires biometric registration for all pilgrims visiting Kedarnath and Badrinath. We manage the registration process on your behalf — you just provide your Aadhaar or passport details.",
  },
];

export default function UttarakhandPage() {
  return (
    <div className="bg-surface min-h-screen">

      {/* 1. Cinematic Hero — Left Aligned */}
      <section className="relative h-screen flex items-center overflow-hidden" aria-label="Uttarakhand Sacred Himalayan Journeys">
        <Image
          src="/images/pilgrimage/uttarakhand-card.png"
          alt="Uttarakhand — Sacred shrines and Himalayan landscapes of Devbhumi"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/75 to-midnight/20" aria-hidden="true" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <span className="font-sans text-xs font-bold tracking-[0.35em] uppercase text-gold mb-4 block">
              DEVBHUMI — THE LAND OF GODS
            </span>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-white mb-4 leading-[0.95] font-light">
              Uttarakhand
              <br />
              <span className="italic font-normal">Yatra</span>
            </h1>
            <p className="font-serif text-xl md:text-2xl text-white/90 mb-4 font-light leading-snug">
              Haridwar · Rishikesh · Kedarnath · Badrinath
            </p>
            <p className="font-sans text-sm md:text-base text-white/65 mb-10 leading-relaxed max-w-xl">
              From the sacred ghats of Haridwar to the snow-clad shrine of Kedarnath — Uttarakhand is where the Himalayas meet the divine.
            </p>

            {/* Micro Stats */}
            <div className="flex flex-wrap items-center gap-6 mb-10 font-sans text-xs md:text-sm text-white/80">
              <div className="flex items-center gap-2">
                <span className="text-white/40">Duration:</span>
                <span className="font-semibold text-gold">4–7 Days</span>
              </div>
              <div className="w-px h-4 bg-white/20" aria-hidden="true" />
              <div className="flex items-center gap-2">
                <span className="text-white/40">Max Altitude:</span>
                <span className="font-semibold text-gold">3,583m (Kedarnath)</span>
              </div>
              <div className="w-px h-4 bg-white/20" aria-hidden="true" />
              <div className="flex items-center gap-2">
                <span className="text-white/40">From:</span>
                <span className="font-semibold text-gold">₹15,000</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#packages"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-midnight font-sans text-sm font-semibold rounded hover:bg-gold/90 transition-all duration-300 min-h-11"
              >
                Explore Packages
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.3} d="M19 9l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/inquiry?package=UK-General"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-sans text-sm font-medium rounded border border-white/20 hover:bg-white/20 transition-all duration-300 min-h-11"
              >
                Inquiry & Reserve
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

      {/* 2. Trust Stats */}
      <section className="py-16 px-6 bg-white border-b border-midnight/5" aria-label="Why choose Nithyeshwar Tours">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-midnight/8 rounded-xl overflow-hidden">

            <div className="flex flex-col items-center text-center p-10 border-r border-midnight/8 last:border-r-0 bg-white hover:bg-surface hover:-translate-y-1 hover:shadow-ambient transition-all duration-300">
              <div className="w-16 h-16 mb-6 flex items-center justify-center">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="#9a7c2e" strokeWidth="1.4" aria-hidden="true">
                  <circle cx="26" cy="14" r="8" />
                  <path d="M8 44c0-9.94 8.06-18 18-18s18 8.06 18 18" />
                  <path d="M38 20c4 1.5 7 5.3 7 10" strokeDasharray="2 2" />
                  <path d="M14 20c-4 1.5-7 5.3-7 10" strokeDasharray="2 2" />
                </svg>
              </div>
              <p className="font-serif text-4xl text-midnight font-normal leading-none mb-1">100k+</p>
              <p className="font-serif text-base text-midnight/80 font-normal mb-3">Pilgrims Guided</p>
              <p className="font-sans text-xs text-midnight/50 leading-relaxed">Over three decades guiding devoted pilgrims safely through Uttarakhand's sacred circuit.</p>
            </div>

            <div className="flex flex-col items-center text-center p-10 border-r border-midnight/8 last:border-r-0 bg-white hover:bg-surface hover:-translate-y-1 hover:shadow-ambient transition-all duration-300">
              <div className="w-16 h-16 mb-6 flex items-center justify-center">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="#9a7c2e" strokeWidth="1.4" aria-hidden="true">
                  <path d="M26 6L32 18l13 2-9.5 9.2 2.2 13L26 36l-11.7 6.2 2.2-13L7 20l13-2z" />
                </svg>
              </div>
              <p className="font-serif text-4xl text-midnight font-normal leading-none mb-1">98%</p>
              <p className="font-serif text-base text-midnight/80 font-normal mb-3">Yatra Completion Rate</p>
              <p className="font-sans text-xs text-midnight/50 leading-relaxed">Careful pacing, medical support, and weather monitoring ensures pilgrims complete their darshan.</p>
            </div>

            <div className="flex flex-col items-center text-center p-10 border-r border-midnight/8 last:border-r-0 bg-white hover:bg-surface hover:-translate-y-1 hover:shadow-ambient transition-all duration-300">
              <div className="w-16 h-16 mb-6 flex items-center justify-center">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="#9a7c2e" strokeWidth="1.4" aria-hidden="true">
                  <rect x="10" y="10" width="32" height="32" rx="6" />
                  <path d="M26 18v16M18 26h16" />
                </svg>
              </div>
              <p className="font-serif text-4xl text-midnight font-normal leading-none mb-1">24/7</p>
              <p className="font-serif text-base text-midnight/80 font-normal mb-3">Medical Support</p>
              <p className="font-sans text-xs text-midnight/50 leading-relaxed">Oxygen cylinders, first-aid kits, and altitude sickness protocols on every vehicle at all times.</p>
            </div>

            <div className="flex flex-col items-center text-center p-10 bg-white hover:bg-surface hover:-translate-y-1 hover:shadow-ambient transition-all duration-300">
              <div className="w-16 h-16 mb-6 flex items-center justify-center">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="#9a7c2e" strokeWidth="1.4" aria-hidden="true">
                  <path d="M26 6v5M26 41v5M6 26h5M41 26h5" />
                  <circle cx="26" cy="26" r="14" />
                  <path d="M26 18v8l5 3" />
                </svg>
              </div>
              <p className="font-serif text-4xl text-midnight font-normal leading-none mb-1">30+</p>
              <p className="font-serif text-base text-midnight/80 font-normal mb-3">Years of Sacred Service</p>
              <p className="font-sans text-xs text-midnight/50 leading-relaxed">Nithyeshwar Tours has been the most trusted organiser of Uttarakhand pilgrimages since 1993.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. The Sacred Experiences */}
      <section className="py-28 px-6 bg-surface" aria-labelledby="experiences-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
              WHAT AWAITS YOU
            </span>
            <h2 id="experiences-heading" className="font-serif text-4xl md:text-5xl text-midnight font-normal leading-tight">
              The Uttarakhand Experience
            </h2>
            <div className="w-12 h-0.5 bg-gold-dark mx-auto mt-6" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Himalayan Shrines",
                desc: "Visit ancient temples at Kedarnath (3,583m), Badrinath (3,133m), Gangotri, and Yamunotri — each nestled in breathtaking snow-capped mountain settings.",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#9a7c2e" strokeWidth="1.5" aria-hidden="true">
                    <path d="M16 4L6 16h4v12h12V16h4z" />
                    <path d="M12 28V20h8v8" />
                    <circle cx="16" cy="12" r="2.5" />
                  </svg>
                ),
              },
              {
                title: "Sacred River Origins",
                desc: "Stand at the origins of the Yamuna at Yamunotri and the Ganga at Gangotri — where these holiest of rivers first emerge from glacial ice in the high Himalayas.",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#9a7c2e" strokeWidth="1.5" aria-hidden="true">
                    <path d="M8 24c2-4 4-8 8-8s6 4 8 8" />
                    <path d="M4 28c3-6 5-12 12-12s9 6 12 12" />
                    <path d="M16 4v8" />
                    <path d="M12 8l4-4 4 4" />
                  </svg>
                ),
              },
              {
                title: "Yoga & Meditation",
                desc: "Experience spiritual awakening in Rishikesh — world capital of yoga, meditation, and Vedic learning, set along the emerald waters of the sacred Ganga.",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#9a7c2e" strokeWidth="1.5" aria-hidden="true">
                    <circle cx="16" cy="8" r="3" />
                    <path d="M16 11v10" />
                    <path d="M9 16c0 0 3-2 7-2s7 2 7 2" />
                    <path d="M11 28c0-4 5-6 5-6s5 2 5 6" />
                  </svg>
                ),
              },
              {
                title: "Evening Ganga Aarti",
                desc: "Witness the grand Ganga Aarti at Har Ki Pauri in Haridwar — a thousand oil lamps set adrift on the holy river, filling the night with divine light and devotion.",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#9a7c2e" strokeWidth="1.5" aria-hidden="true">
                    <path d="M16 6v4" />
                    <path d="M10 10l3 3M22 10l-3 3" />
                    <circle cx="16" cy="18" r="5" />
                    <path d="M8 28h16" />
                    <path d="M12 28v-5M16 28v-5M20 28v-5" />
                  </svg>
                ),
              },
            ].map((exp) => (
              <article
                key={exp.title}
                className="flex flex-col bg-white shadow-ambient rounded-md overflow-hidden border border-midnight/5 transition-all duration-300 hover:shadow-card hover:-translate-y-1 hover:border-gold-dark/20 p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-gold-dark/5 border border-gold-dark/15 flex items-center justify-center mb-6">
                  {exp.icon}
                </div>
                <h3 className="font-serif text-xl text-midnight font-normal mb-4">{exp.title}</h3>
                <p className="font-sans text-sm text-midnight/65 leading-relaxed flex-1">{exp.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Journey Pathway Timeline */}
      <section className="py-28 px-6 bg-surface-low border-y border-midnight/5" aria-labelledby="timeline-heading">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
              THE SACRED ROUTE
            </span>
            <h2 id="timeline-heading" className="font-serif text-4xl text-midnight font-normal leading-tight">
              Your Himalayan Pilgrimage Path
            </h2>
            <p className="font-sans text-sm text-midnight/50 mt-4 max-w-md mx-auto">
              From the sacred ghats of Haridwar to the highest shrine in the Himalayas — a traditional route steeped in devotion.
            </p>
          </div>

          <div className="relative pl-0">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gold-dark/20 -translate-x-1/2" aria-hidden="true" />
            <ol className="space-y-16" role="list">
              {[
                {
                  step: 1,
                  title: "Haridwar — Gateway of the Gods",
                  desc: "Arrive at Haridwar, one of the seven holy cities of Hinduism. Experience the iconic evening Ganga Aarti at Har Ki Pauri ghat — a profound introduction to the sacred journey ahead.",
                  side: "right",
                },
                {
                  step: 2,
                  title: "Rishikesh — The Yoga Capital",
                  desc: "Visit the world capital of yoga along the Ganga. Attend an ashram morning session, cross Laxman Jhula, and receive blessings at the revered Triveni Ghat.",
                  side: "left",
                },
                {
                  step: 3,
                  title: "Guptkashi & Sonprayag — The Approach",
                  desc: "Drive through stunning mountain landscapes to Guptkashi. Visit the ancient Vishwanath temple and prepare spiritually and physically for the Kedarnath ascent the next morning.",
                  side: "right",
                },
                {
                  step: 4,
                  title: "Kedarnath — The Jyotirlinga",
                  desc: "Ascend to the ancient 8th-century Kedarnath temple dedicated to Lord Shiva at 3,583m. Trek, pony, or helicopter — and receive the most powerful darshan of the circuit.",
                  side: "left",
                },
                {
                  step: 5,
                  title: "Badrinath — Abode of Vishnu",
                  desc: "Complete the Do Dham circuit at Badrinath (3,133m) with darshan at the Lord Vishnu shrine, a holy dip in Tapt Kund, and a visit to Mana — the last village before the Tibetan border.",
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
      <section className="py-28 px-6 bg-surface" id="packages" aria-labelledby="packages-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
              CHOOSE YOUR JOURNEY
            </span>
            <h2 id="packages-heading" className="font-serif text-4xl md:text-5xl text-midnight font-normal leading-tight">
              Uttarakhand Yatra Packages
            </h2>
            <p className="font-sans text-sm text-midnight/50 mt-4">
              Three curated Himalayan pilgrimage experiences — from a 4-day gateway circuit to the complete 7-day Do Dham Yatra.
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
                      {pkg.badge ?? pkg.code.toUpperCase()}
                    </span>
                    {pkg.badge && (
                      <span className="font-sans text-[10px] font-medium text-midnight/40 tracking-wide">
                        {pkg.code.toUpperCase()}
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-2xl text-midnight font-normal leading-snug mb-2">{pkg.name}</h3>
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
                    href={`/yatra/uttarakhand/${pkg.code}`}
                    className="block w-full text-center bg-midnight text-white font-sans text-sm font-semibold py-4 rounded hover:bg-navy transition-all duration-300 min-h-11 tracking-widest uppercase"
                  >
                    View Details
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="font-sans text-xs text-midnight/40 text-center mt-10">
            All prices are per person on twin-sharing basis. Single supplement applicable. GST 5% extra.{" "}
            <Link href="/yatra/char-dham" className="text-gold-dark hover:underline">
              View Char Dham (all 4 shrines) packages →
            </Link>
          </p>
        </div>
      </section>

      {/* 6. Expedition Standards */}
      <section className="py-28 px-6 bg-surface-low border-y border-midnight/5" aria-labelledby="standards-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
              THE NITHYESHWAR STANDARD
            </span>
            <h2 id="standards-heading" className="font-serif text-4xl md:text-5xl text-midnight font-normal leading-tight">
              Safety &amp; Service
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
              <h3 className="font-serif text-xl text-midnight font-medium">Biometric Permit Management</h3>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                We handle mandatory Uttarakhand biometric registration, forest permits, and temple entry cards for Kedarnath and Badrinath — complete paperwork from your home.
              </p>
            </article>

            <article className="flex flex-col gap-5 p-8 bg-white border border-gold-dark/10 rounded shadow-ambient hover:shadow-card hover:-translate-y-1 hover:border-gold-dark/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gold-dark/5 flex items-center justify-center border border-gold-dark/15">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#735c00" strokeWidth="1.75" aria-hidden="true">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-midnight font-medium">Medical Support on Route</h3>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                Oxygen cylinders, pulse oximeters, altitude sickness medications, and a trained first responder accompany every group from Haridwar to Kedarnath and back.
              </p>
            </article>

            <article className="flex flex-col gap-5 p-8 bg-white border border-gold-dark/10 rounded shadow-ambient hover:shadow-card hover:-translate-y-1 hover:border-gold-dark/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gold-dark/5 flex items-center justify-center border border-gold-dark/15">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#735c00" strokeWidth="1.75" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <path d="M9 9h6M9 12h6M9 15h4" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-midnight font-medium">Helicopter Coordination</h3>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                We coordinate helicopter bookings from Phata, Sersi, and Guptkashi to Kedarnath. Slots are limited — request early and we manage the entire booking on your behalf.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-28 px-6 bg-surface border-t border-midnight/5" aria-labelledby="faq-heading">
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
