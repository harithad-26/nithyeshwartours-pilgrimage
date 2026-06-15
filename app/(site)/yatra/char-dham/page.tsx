import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Char Dham Yatra 2026 — Complete Package | Badrinath Kedarnath Gangotri Yamunotri",
  description: "Experience the sacred Char Dham Yatra covering Badrinath, Kedarnath, Gangotri, and Yamunotri. Complete packages from Haridwar with expert guidance, comfortable stays, and spiritual immersion.",
};

const PACKAGES = [
  {
    code: "CD-STD-10D",
    name: "Char Dham Standard",
    subtitle: "9 Nights · 10 Days",
    route: "Haridwar · Yamunotri · Gangotri · Kedarnath · Badrinath",
    price: "₹33,700",
    priceNote: "Per person, twin-sharing basis",
    badge: null,
    highlights: [
      "Complete Darshan of all four sacred Dhams",
      "3-Star hotels throughout the circuit",
      "Pure vegetarian Satvik meals included",
      "AC coach transfers — Haridwar to Haridwar",
      "Experienced spiritual tour guide",
      "Medical kit & oxygen cylinder on coach",
    ],
  },
  {
    code: "CD-DLX-11D",
    name: "Char Dham Deluxe",
    subtitle: "10 Nights · 11 Days",
    route: "Haridwar · Yamunotri · Gangotri · Kedarnath · Badrinath · Rishikesh",
    price: "₹48,500",
    priceNote: "Per person, includes VIP Darshan priority",
    badge: "MOST POPULAR",
    highlights: [
      "Premium 3-star resorts with deluxe rooms",
      "Pre-arranged VIP Darshan at Kedarnath & Badrinath",
      "Travel in premium AC SUVs (Innova/Crysta)",
      "Extra day sightseeing in Rishikesh",
      "Helicopter assistance fully coordinated",
      "Satvik vegetarian buffet dining",
    ],
  },
  {
    code: "CD-LUX-12D",
    name: "Char Dham Luxury",
    subtitle: "11 Nights · 12 Days",
    route: "Dehradun · Yamunotri (Heli) · Gangotri (Heli) · Kedarnath (Heli) · Badrinath (Heli) · Rishikesh",
    price: "₹1,45,000",
    priceNote: "Per person, fully inclusive helicopter transfers",
    badge: null,
    highlights: [
      "Chartered Helicopter flights to all four Dhams",
      "Bypass 800+ km of strenuous mountain roads",
      "5-star and finest available luxury resorts",
      "VIP Darshan arrangements at all shrines",
      "Personal travel concierge & porter service",
      "Premium multi-cuisine Satvik buffet meals",
    ],
  },
];

const FAQS = [
  {
    q: "When do the Char Dham shrines open for 2026?",
    a: "The shrines typically open in late April/early May (around Akshaya Tritiya) and close in November (around Diwali). Exact 2026 dates are announced by the temple authorities in March. We will book your package aligned with the official opening dates.",
  },
  {
    q: "Is biometric registration mandatory for Char Dham?",
    a: "Yes, the Government of Uttarakhand requires biometric registration for all Char Dham pilgrims. We manage the entire registration process — you simply provide your ID proof and photograph at time of booking.",
  },
  {
    q: "How difficult is the Kedarnath trek?",
    a: "The Kedarnath trek is 18 km from Gaurikund. It is moderately challenging with steep sections. Options include walking, hiring a pony (₹1,500–2,000), using a palki/doli, or taking a helicopter from Phata/Sersi/Guptkashi. Good cardiovascular fitness is helpful but not mandatory.",
  },
  {
    q: "Are helicopter services available for Kedarnath?",
    a: "Yes. Helicopter services operate from Phata, Sersi, and Guptkashi. Since slots are limited and regulated by the state aviation authority, bookings fill months in advance. Please request a helicopter upgrade immediately upon booking.",
  },
  {
    q: "What is included in the standard package price?",
    a: "Accommodation in 3-star hotels (twin-sharing), daily vegetarian breakfast & dinner, AC coach transfers from Haridwar, spiritual tour guide, all permits and toll fees, oxygen cylinder and first-aid kit on the coach. Excluded: flights/trains to Haridwar, pony/porter fees for treks, lunch, and GST 5%.",
  },
  {
    q: "What is the cancellation policy?",
    a: "30+ days before departure: 90% refund. 15–29 days: 50% refund. Less than 15 days: No refund. In case of natural calamities or shrine closures, we offer full rescheduling or maximum possible refund after actual expense deductions.",
  },
];

export default function CharDhamPage() {
  return (
    <div className="bg-surface min-h-screen">

      {/* 1. Cinematic Hero — Left Aligned */}
      <section className="relative h-screen flex items-center overflow-hidden" aria-label="Char Dham Yatra">
        <Image
          src="/images/india-states/kedarnath-temple.png"
          alt="Char Dham — Four sacred shrines of Uttarakhand"
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
              THE SACRED CIRCUIT OF UTTARAKHAND
            </span>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-white mb-4 leading-[0.95] font-light">
              Char Dham
              <br />
              <span className="italic font-normal">Yatra</span>
            </h1>
            <p className="font-serif text-xl md:text-2xl text-white/90 mb-4 font-light leading-snug">
              Badrinath · Kedarnath · Gangotri · Yamunotri
            </p>
            <p className="font-sans text-sm md:text-base text-white/65 mb-10 leading-relaxed max-w-xl">
              The four abodes of the divine nestled in the Himalayas of Uttarakhand — the ultimate pilgrimage that absolves sins and opens the path to moksha.
            </p>

            {/* Micro Stats */}
            <div className="flex flex-wrap items-center gap-6 mb-10 font-sans text-xs md:text-sm text-white/80">
              <div className="flex items-center gap-2">
                <span className="text-white/40">Duration:</span>
                <span className="font-semibold text-gold">10–12 Days</span>
              </div>
              <div className="w-px h-4 bg-white/20" aria-hidden="true" />
              <div className="flex items-center gap-2">
                <span className="text-white/40">Altitude:</span>
                <span className="font-semibold text-gold">3,583m (Kedarnath)</span>
              </div>
              <div className="w-px h-4 bg-white/20" aria-hidden="true" />
              <div className="flex items-center gap-2">
                <span className="text-white/40">From:</span>
                <span className="font-semibold text-gold">₹33,700</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#packages"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-midnight font-sans text-sm font-semibold rounded hover:bg-gold/90 transition-all duration-300 min-h-11"
              >
                Explore Packages
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.3} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/inquiry?package=CD-General"
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

      {/* 2. Trust Stats - Redesigned Premium Luxury Design */}
      <section className="py-10 px-6 bg-gradient-to-b from-[#FCFBF9] to-white border-b border-gold/10 animate-in fade-in duration-500" aria-label="Why choose Nithyeshwar Tours">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

            <div className="group relative bg-white px-6 py-6 border border-gold-dark/10 hover:border-gold/40 hover:-translate-y-1 shadow-[0_4px_20px_rgba(154,124,46,0.015)] hover:shadow-[0_12px_32px_rgba(154,124,46,0.08)] transition-all duration-300">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gold-dark/40 group-hover:bg-gold group-hover:w-16 transition-all duration-300" />
              
              <div className="flex flex-col items-center text-center">
                <div className="w-9 h-9 mb-3.5 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 52 52" fill="none" stroke="#9a7c2e" strokeWidth="1.25" aria-hidden="true" className="group-hover:scale-105 transition-transform duration-300">
                    <circle cx="26" cy="14" r="8" />
                    <path d="M8 44c0-9.94 8.06-18 18-18s18 8.06 18 18" />
                    <path d="M38 20c4 1.5 7 5.3 7 10" strokeDasharray="2 2" />
                    <path d="M14 20c-4 1.5-7 5.3-7 10" strokeDasharray="2 2" />
                  </svg>
                </div>
                <p className="font-serif text-4xl md:text-5xl text-gold-dark font-extralight tracking-tight leading-none mb-1.5 group-hover:scale-102 transition-transform duration-300">100k+</p>
                <p className="font-sans text-[10px] text-midnight/80 uppercase tracking-[0.2em] font-bold mb-2">Pilgrims Guided</p>
                <p className="font-sans text-[11px] text-midnight/55 leading-relaxed font-light mt-1">Over three decades guiding devoted pilgrims safely through the Char Dham circuit.</p>
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
                <p className="font-serif text-4xl md:text-5xl text-gold-dark font-extralight tracking-tight leading-none mb-1.5 group-hover:scale-102 transition-transform duration-300">98%</p>
                <p className="font-sans text-[10px] text-midnight/80 uppercase tracking-[0.2em] font-bold mb-2">Yatra Completion Rate</p>
                <p className="font-sans text-[11px] text-midnight/55 leading-relaxed font-light mt-1">Careful pacing, medical support, and route planning ensures pilgrims complete all four dhams.</p>
              </div>
            </div>

            <div className="group relative bg-white px-6 py-6 border border-gold-dark/10 hover:border-gold/40 hover:-translate-y-1 shadow-[0_4px_20px_rgba(154,124,46,0.015)] hover:shadow-[0_12px_32px_rgba(154,124,46,0.08)] transition-all duration-300">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-gold-dark/40 group-hover:bg-gold group-hover:w-16 transition-all duration-300" />
              
              <div className="flex flex-col items-center text-center">
                <div className="w-9 h-9 mb-3.5 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 52 52" fill="none" stroke="#9a7c2e" strokeWidth="1.25" aria-hidden="true" className="group-hover:scale-105 transition-transform duration-300">
                    <rect x="10" y="10" width="32" height="32" rx="6" />
                    <path d="M26 18v16M18 26h16" />
                  </svg>
                </div>
                <p className="font-serif text-4xl md:text-5xl text-gold-dark font-extralight tracking-tight leading-none mb-1.5 group-hover:scale-102 transition-transform duration-300">24/7</p>
                <p className="font-sans text-[10px] text-midnight/80 uppercase tracking-[0.2em] font-bold mb-2">Medical Support</p>
                <p className="font-sans text-[11px] text-midnight/55 leading-relaxed font-light mt-1">Oxygen cylinders, first-aid kits, and emergency protocols on every coach throughout the journey.</p>
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
                <p className="font-sans text-[11px] text-midnight/55 leading-relaxed font-light mt-1">Nithyeshwar Tours has been the most trusted name in Char Dham Yatra organisation since 1993.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. The Four Sacred Dhams (With Visual Storytelling Layout) */}
      <section className="py-28 px-6 bg-surface" aria-labelledby="dhams-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
              FOUR ABODES OF THE DIVINE
            </span>
            <h2 id="dhams-heading" className="font-serif text-4xl md:text-5xl text-midnight font-normal leading-tight">
              The Sacred Char Dham
            </h2>
            <div className="w-12 h-0.5 bg-gold-dark mx-auto mt-6" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Yamunotri",
                deity: "Goddess Yamuna",
                altitude: "3,293m",
                desc: "The western source of the sacred Yamuna river. The first stop of the Char Dham circuit — pilgrims take a holy dip in the thermal hot springs of Surya Kund.",
                image: "/images/pilgrimage/yamunotri_highlight.png",
              },
              {
                name: "Gangotri",
                deity: "Goddess Ganga",
                altitude: "3,100m",
                desc: "The origin of the sacred River Ganga. Pilgrims worship at the white granite temple where the celestial river first touched the earth, cleansing all sins.",
                image: "/images/pilgrimage/gangotri_highlight.png",
              },
              {
                name: "Kedarnath",
                deity: "Lord Shiva",
                altitude: "3,583m",
                desc: "One of the twelve sacred Jyotirlingas — an ancient stone temple dedicated to Lord Shiva, perched dramatically at the foot of Kedarnath Peak, accessible by an 18km trek.",
                image: "/images/india-states/kedarnath-temple.png",
              },
              {
                name: "Badrinath",
                deity: "Lord Vishnu",
                altitude: "3,133m",
                desc: "The final and most revered dham — dedicated to Lord Vishnu seated in meditation. One of the 108 Divya Desams with a stunning backdrop of Nilkantha Peak (6,596m).",
                image: "/images/india-states/badrinath-temple.png",
              },
            ].map((dham) => (
              <article
                key={dham.name}
                className="flex flex-col bg-white shadow-ambient rounded-md overflow-hidden border border-midnight/5 transition-all duration-300 hover:shadow-card hover:-translate-y-1 hover:border-midnight group"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={dham.image}
                    alt={`${dham.name} Temple`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-midnight/10" aria-hidden="true" />
                </div>
                <div className="p-6 flex-1 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl text-midnight font-normal">{dham.name}</h3>
                    <span className="font-sans text-[9px] text-white bg-midnight px-2 py-0.5 rounded-full uppercase tracking-wide">
                      {dham.altitude}
                    </span>
                  </div>
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-wider text-gold-dark">{dham.deity}</p>
                  <p className="font-sans text-xs text-midnight/70 leading-relaxed flex-1">{dham.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Journey Route Timeline */}
      <section className="py-28 px-6 bg-surface-low border-y border-midnight/5" aria-labelledby="timeline-heading">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
              THE CIRCUIT ROUTE
            </span>
            <h2 id="timeline-heading" className="font-serif text-4xl text-midnight font-normal leading-tight">
              The Classic Char Dham Pathway
            </h2>
            <p className="font-sans text-sm text-midnight/50 mt-4 max-w-md mx-auto">
              A traditional clockwise pilgrimage circuit designed to cover all four shrines in the correct spiritual order.
            </p>
          </div>

          <div className="relative pl-0">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gold-dark/20 -translate-x-1/2" aria-hidden="true" />
            <ol className="space-y-16" role="list">
              {[
                {
                  step: 1,
                  title: "Haridwar — Gateway of the Gods",
                  desc: "Arrive at Haridwar, attend the iconic evening Ganga Aarti at Har Ki Pauri. Begin the sacred journey with blessings from the holy Ganga.",
                  side: "right",
                },
                {
                  step: 2,
                  title: "Yamunotri — First Dham",
                  desc: "Drive to Janki Chatti. Trek 6km to Yamunotri Temple, take a holy dip in Surya Kund hot springs, and receive the blessings of Goddess Yamuna.",
                  side: "left",
                },
                {
                  step: 3,
                  title: "Gangotri — Second Dham",
                  desc: "Proceed to Uttarkashi and onward to Gangotri. Worship at the origin shrine of the sacred Ganga river at 3,100m altitude.",
                  side: "right",
                },
                {
                  step: 4,
                  title: "Kedarnath — Third Dham",
                  desc: "Drive to Guptkashi, then trek 18km to Kedarnath (or fly by helicopter). Receive darshan at the ancient Jyotirlinga temple amid towering Himalayan peaks.",
                  side: "left",
                },
                {
                  step: 5,
                  title: "Badrinath — Fourth Dham",
                  desc: "Journey to Badrinath via Joshimath. Complete the circuit with darshan at Lord Vishnu's shrine, take a holy dip in Tapt Kund, and return to Haridwar with divine blessings.",
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
              Char Dham Yatra Packages
            </h2>
            <p className="font-sans text-sm text-midnight/50 mt-4">
              Select from three thoughtfully designed packages based on your comfort preferences and budget.
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
                    href={`/yatra/char-dham/${pkg.code}`}
                    className="block w-full text-center bg-midnight text-white font-sans text-sm font-semibold py-4 rounded hover:bg-navy transition-all duration-300 min-h-11 tracking-widest uppercase"
                  >
                    View Details
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
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-midnight font-medium">Biometric Permit Management</h3>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                We handle the mandatory Uttarakhand biometric Yatra registration, all forest permits, temple entry cards, and toll documentation on your behalf.
              </p>
            </article>

            <article className="flex flex-col gap-5 p-8 bg-white border border-gold-dark/10 rounded shadow-ambient hover:shadow-card hover:-translate-y-1 hover:border-gold-dark/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gold-dark/5 flex items-center justify-center border border-gold-dark/15">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#735c00" strokeWidth="1.75" aria-hidden="true">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-midnight font-medium">Medical Support on Every Coach</h3>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                Oxygen cylinders, pulse oximeters, altitude sickness medication, and a trained medical first responder accompany every group throughout the circuit.
              </p>
            </article>

            <article className="flex flex-col gap-5 p-8 bg-white border border-gold-dark/10 rounded shadow-ambient hover:shadow-card hover:-translate-y-1 hover:border-gold-dark/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gold-dark/5 flex items-center justify-center border border-gold-dark/15">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#735c00" strokeWidth="1.75" aria-hidden="true">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-midnight font-medium">Fresh Satvik Vegetarian Meals</h3>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                Our culinary team serves hot, nutritious, pure vegetarian meals throughout the journey — Satvik style, mild in spices, designed for high-altitude digestion.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Bento Gallery Section */}
      <section className="py-28 px-6 bg-white border-t border-midnight/5" aria-labelledby="gallery-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
              VISUAL REVERENCE
            </span>
            <h2 id="gallery-heading" className="font-serif text-4xl text-midnight font-normal leading-tight">
              Glances of the Sacred Valleys
            </h2>
            <div className="w-12 h-0.5 bg-gold-dark mx-auto mt-6" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[720px] md:h-[520px]">
            {/* Left wide card - Kedarnath */}
            <div className="relative col-span-1 md:col-span-2 h-full overflow-hidden rounded shadow-ambient group">
              <Image
                src="/images/india-states/kedarnath-temple.png"
                alt="Kedarnath Temple nestled amidst high snow-covered Himalayan peaks"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-midnight/80 to-transparent p-6 text-white">
                <p className="font-serif text-xl">The Shrine of Shiva</p>
                <p className="font-sans text-xs text-white/70">Kedarnath Temple (3,583m)</p>
              </div>
            </div>

            {/* Right stacked cards */}
            <div className="grid grid-rows-2 gap-6 h-full">
              {/* Badrinath */}
              <div className="relative h-full overflow-hidden rounded shadow-ambient group">
                <Image
                  src="/images/india-states/badrinath-temple.png"
                  alt="Colorful façade of Badrinath Temple"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-midnight/80 to-transparent p-4 text-white">
                  <p className="font-serif text-base">Badrinath Temple</p>
                </div>
              </div>
              
              {/* Yamunotri */}
              <div className="relative h-full overflow-hidden rounded shadow-ambient group">
                <Image
                  src="/images/pilgrimage/yamunotri_highlight.png"
                  alt="Yamunotri Temple in the mountain valley gorge"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-midnight/80 to-transparent p-4 text-white">
                  <p className="font-serif text-base">Yamunotri Dham</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Gangotri */}
            <div className="relative h-64 overflow-hidden rounded shadow-ambient group">
              <Image
                src="/images/pilgrimage/gangotri_highlight.png"
                alt="White granite Gangotri Temple surrounded by pine trees"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-midnight/80 to-transparent p-4 text-white">
                <p className="font-serif text-base">Gangotri Temple</p>
              </div>
            </div>

            {/* Haridwar */}
            <div className="relative h-64 overflow-hidden rounded shadow-ambient group">
              <Image
                src="/images/india-states/har-ki-pauri.png"
                alt="Har Ki Pauri ghats on the banks of Ganga at Haridwar"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-midnight/80 to-transparent p-4 text-white">
                <p className="font-serif text-base">Har Ki Pauri, Haridwar</p>
              </div>
            </div>

            {/* Rishikesh */}
            <div className="relative h-64 overflow-hidden rounded shadow-ambient group">
              <Image
                src="/images/pilgrimage/rishikesh_highlight.png"
                alt="Laxman Jhula bridge in Rishikesh over the emerald Ganga"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-midnight/80 to-transparent p-4 text-white">
                <p className="font-serif text-base">Laxman Jhula, Rishikesh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-28 px-6 bg-surface border-t border-midnight/5 pb-36" aria-labelledby="faq-heading">
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
