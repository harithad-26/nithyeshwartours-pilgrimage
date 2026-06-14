import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uttar Pradesh Yatra 2026 — Varanasi, Ayodhya, Prayagraj & Gaya",
  description:
    "Sacred pilgrimage circuits through Uttar Pradesh — Kashi Vishwanath, Ram Janmabhoomi, Triveni Sangam and Pind Daan at Gaya. Expert guides, VIP temple access, Satvik meals and comfortable stays.",
};

const PACKAGES = [
  {
    code: "UP-01",
    name: "Kashi Essentials",
    subtitle: "3 Nights · 4 Days",
    route: "Varanasi · Dashashwamedh · Kashi Vishwanath · Sarnath",
    price: "₹12,500",
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
    code: "UP-02",
    name: "Varanasi–Ayodhya Circuit",
    subtitle: "4 Nights · 5 Days",
    route: "Varanasi · Kashi · Ayodhya · Ram Janmabhoomi · Varanasi",
    price: "₹18,500",
    priceNote: "Includes VIP Darshan at Ram Janmabhoomi",
    badge: "MOST POPULAR",
    highlights: [
      "VIP Darshan at the new Ram Janmabhoomi temple",
      "Hanuman Garhi and Kanak Bhawan in Ayodhya",
      "Kashi Vishwanath Jyotirlinga darshan",
      "Evening Ganga Aarti and sunrise boat ride",
      "Ayodhya River Sarayu evening visit",
      "All Satvik vegetarian meals throughout",
    ],
  },
  {
    code: "UP-03",
    name: "Grand UP Yatra",
    subtitle: "6 Nights · 7 Days",
    route: "Varanasi · Ayodhya · Prayagraj Sangam · Gaya · Varanasi",
    price: "₹32,000",
    priceNote: "Complete sacred four-city circuit, heritage stays",
    badge: null,
    highlights: [
      "Triveni Sangam holy dip at Prayagraj",
      "Pind Daan ancestral rites at Vishnu Pad, Gaya",
      "Ram Janmabhoomi darshan in Ayodhya",
      "Kashi Vishwanath Jyotirlinga and ghats",
      "Allahabad Fort — Akshaya Vat darshan",
      "Heritage accommodation and private guide",
    ],
  },
];

const FAQS = [
  {
    q: "Which cities are covered in UP Yatra packages?",
    a: "Our packages cover Varanasi (Kashi Vishwanath), Ayodhya (Ram Janmabhoomi), Prayagraj (Triveni Sangam), and Gaya in Bihar (Vishnu Pad Pind Daan). The focused packages start from Varanasi; the Grand UP Yatra connects all four sacred cities in one journey.",
  },
  {
    q: "Is the new Ram Mandir in Ayodhya accessible to all pilgrims?",
    a: "Yes. The Ram Janmabhoomi temple complex, inaugurated in January 2024, is open to all devotees. Darshan is available daily from early morning. We provide pre-arranged VIP passes that allow you to bypass the general queues — particularly valuable during peak festival periods.",
  },
  {
    q: "Can we arrange Pind Daan rituals at Gaya?",
    a: "Yes. We arrange complete Pind Daan ceremonies at Vishnu Pad Temple with qualified priests. Charges vary between ₹5,000–15,000 depending on the scale of rituals. Must be pre-booked. The most auspicious time is Pitru Paksha (September–October), though Pind Daan is spiritually valid year-round at Gaya.",
  },
  {
    q: "How many days are needed for the complete UP sacred circuit?",
    a: "Minimum 3 days for Varanasi essentials (UP-01). We recommend 5 days for Varanasi + Ayodhya (UP-02). 7 days (UP-03) covers all four sacred cities including Prayagraj Sangam and Gaya Pind Daan. Longer itineraries can be arranged with additional destinations like Chitrakoot and Vindhyachal.",
  },
  {
    q: "What is included in the package price?",
    a: "All packages include: hotel accommodation (category varies), daily vegetarian breakfast and dinner, AC vehicle for all transfers and sightseeing, Ganga boat rides (Varanasi packages), temple entry tickets, English/Hindi guide, and all applicable taxes. Flights and trains to Varanasi are excluded.",
  },
  {
    q: "What is the cancellation policy?",
    a: "30+ days before departure: full refund minus ₹2,000 processing fee. 15–29 days: 50% refund. Under 15 days: no refund. Force majeure or temple closure: full rescheduling or maximum possible refund. Travel insurance is strongly recommended.",
  },
];

export default function UttarPradeshYatraPage() {
  return (
    <div className="bg-surface min-h-screen">

      {/* 1. Cinematic Hero — Left Aligned */}
      <section className="relative h-screen flex items-center overflow-hidden" aria-label="Uttar Pradesh Sacred Yatra Circuit">
        <Image
          src="/images/pilgrimage/uttarpradesh-card.png"
          alt="Uttar Pradesh — Varanasi, Ayodhya, Prayagraj — spiritual heartland of India"
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
              THE SPIRITUAL HEARTLAND OF INDIA
            </span>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-white mb-4 leading-[0.95] font-light">
              Uttar Pradesh
              <br />
              <span className="italic font-normal">Yatra</span>
            </h1>
            <p className="font-serif text-xl md:text-2xl text-white/90 mb-4 font-light leading-snug">
              Kashi · Ayodhya · Prayagraj · Gaya
            </p>
            <p className="font-sans text-sm md:text-base text-white/65 mb-10 leading-relaxed max-w-xl">
              From the eternal city of Kashi to the birthplace of Lord Ram — journey through the holiest geography in Hinduism across four sacred cities.
            </p>

            {/* Micro Stats */}
            <div className="flex flex-wrap items-center gap-6 mb-10 font-sans text-xs md:text-sm text-white/80">
              <div className="flex items-center gap-2">
                <span className="text-white/40">Duration:</span>
                <span className="font-semibold text-gold">4–7 Days</span>
              </div>
              <div className="w-px h-4 bg-white/20" aria-hidden="true" />
              <div className="flex items-center gap-2">
                <span className="text-white/40">Best Season:</span>
                <span className="font-semibold text-gold">October–March</span>
              </div>
              <div className="w-px h-4 bg-white/20" aria-hidden="true" />
              <div className="flex items-center gap-2">
                <span className="text-white/40">From:</span>
                <span className="font-semibold text-gold">₹12,500</span>
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
                href="/inquiry?package=UP-General"
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
              <p className="font-serif text-4xl text-midnight font-normal leading-none mb-1">50k+</p>
              <p className="font-serif text-base text-midnight/80 font-normal mb-3">Pilgrims Guided</p>
              <p className="font-sans text-xs text-midnight/50 leading-relaxed">Over three decades guiding devoted pilgrims across the sacred cities of Uttar Pradesh.</p>
            </div>

            <div className="flex flex-col items-center text-center p-10 border-r border-midnight/8 last:border-r-0 bg-white hover:bg-surface hover:-translate-y-1 hover:shadow-ambient transition-all duration-300">
              <div className="w-16 h-16 mb-6 flex items-center justify-center">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="#9a7c2e" strokeWidth="1.4" aria-hidden="true">
                  <path d="M26 6L32 18l13 2-9.5 9.2 2.2 13L26 36l-11.7 6.2 2.2-13L7 20l13-2z" />
                </svg>
              </div>
              <p className="font-serif text-4xl text-midnight font-normal leading-none mb-1">4.9/5</p>
              <p className="font-serif text-base text-midnight/80 font-normal mb-3">Average Guest Rating</p>
              <p className="font-sans text-xs text-midnight/50 leading-relaxed">Consistently rated the most trusted sacred tour operator by our returning pilgrims and families.</p>
            </div>

            <div className="flex flex-col items-center text-center p-10 border-r border-midnight/8 last:border-r-0 bg-white hover:bg-surface hover:-translate-y-1 hover:shadow-ambient transition-all duration-300">
              <div className="w-16 h-16 mb-6 flex items-center justify-center">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="#9a7c2e" strokeWidth="1.4" aria-hidden="true">
                  <path d="M16 6L6 16h4v12h12V16h4z" />
                  <path d="M14 28v-6h10v6" />
                  <circle cx="26" cy="11" r="2.5" />
                  <rect x="30" y="6" width="12" height="12" rx="2" />
                  <path d="M33 16V9l5 3.5" />
                </svg>
              </div>
              <p className="font-serif text-4xl text-midnight font-normal leading-none mb-1">VIP</p>
              <p className="font-serif text-base text-midnight/80 font-normal mb-3">Temple Access</p>
              <p className="font-sans text-xs text-midnight/50 leading-relaxed">Pre-arranged VIP Darshan at Kashi Vishwanath and Ram Janmabhoomi — skip the queues entirely.</p>
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
              <p className="font-sans text-xs text-midnight/50 leading-relaxed">Nithyeshwar Tours has served pilgrims in the sacred heartland of India for over three decades since 1993.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Sacred Experiences */}
      <section className="py-28 px-6 bg-surface" aria-labelledby="experiences-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
              WHAT AWAITS YOU
            </span>
            <h2 id="experiences-heading" className="font-serif text-4xl md:text-5xl text-midnight font-normal leading-tight">
              The UP Sacred Experience
            </h2>
            <div className="w-12 h-0.5 bg-gold-dark mx-auto mt-6" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Sacred Cities of India",
                desc: "Varanasi (the city Lord Shiva never abandons), Ayodhya (birthplace of Lord Ram), Prayagraj (Triveni Sangam), and Gaya (ancestral liberation) — the four holiest sites in the Hindu world.",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#9a7c2e" strokeWidth="1.5" aria-hidden="true">
                    <path d="M16 4L6 16h4v12h12V16h4z" />
                    <path d="M12 28V20h8v8" />
                    <circle cx="16" cy="12" r="2.5" />
                  </svg>
                ),
              },
              {
                title: "Ganga Aarti",
                desc: "Witness the divine evening fire ritual at Dashashwamedh Ghat — priests choreograph flames, flowers, and devotional chants in a thousand-year-old ceremony on the banks of the sacred Ganga.",
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
              {
                title: "Ancestral Liberation",
                desc: "Perform Pind Daan at Vishnu Pad Temple, Gaya — believed to grant immediate moksha to departed ancestors. We coordinate qualified priests and complete ceremony arrangements on your behalf.",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#9a7c2e" strokeWidth="1.5" aria-hidden="true">
                    <circle cx="16" cy="12" r="4" />
                    <path d="M16 16v8" />
                    <path d="M10 26c0-3.3 2.7-6 6-6s6 2.7 6 6" />
                    <path d="M8 20c-2 0-4-2-4-4s2-4 4-4M24 20c2 0 4-2 4-4s-2-4-4-4" />
                  </svg>
                ),
              },
              {
                title: "Triveni Sangam",
                desc: "Take a holy dip at the sacred confluence of the Ganga, Yamuna, and the invisible Saraswati at Prayagraj — a site where bathing is believed to wash away the sins of all past lifetimes.",
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#9a7c2e" strokeWidth="1.5" aria-hidden="true">
                    <path d="M8 24c2-4 4-8 8-8s6 4 8 8" />
                    <path d="M4 28c3-6 5-12 12-12s9 6 12 12" />
                    <path d="M16 12V4M12 8l4-4 4 4" />
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

      {/* 4. Sacred Circuit Timeline */}
      <section className="py-28 px-6 bg-surface-low border-y border-midnight/5" aria-labelledby="timeline-heading">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
              THE SACRED ROUTE
            </span>
            <h2 id="timeline-heading" className="font-serif text-4xl text-midnight font-normal leading-tight">
              The Grand UP Yatra Circuit
            </h2>
            <p className="font-sans text-sm text-midnight/50 mt-4 max-w-md mx-auto">
              A complete pilgrimage covering four of the holiest cities in Hinduism — from the eternal city of Kashi to the birthplace of Lord Ram.
            </p>
          </div>

          <div className="relative pl-0">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gold-dark/20 -translate-x-1/2" aria-hidden="true" />
            <ol className="space-y-16" role="list">
              {[
                {
                  step: 1,
                  title: "Varanasi — Kashi, the Eternal City",
                  desc: "Arrive at Lal Bahadur Shastri Airport. Transfer to heritage hotel. Evening Ganga Aarti at Dashashwamedh Ghat, followed by darshan at Kashi Vishwanath Jyotirlinga — a sacred beginning.",
                  side: "right",
                },
                {
                  step: 2,
                  title: "Sacred Boat Ride & Sarnath",
                  desc: "Pre-dawn boat ride on the Ganga watching 88 ghats awaken. Afternoon excursion to Sarnath — the deer park where Buddha first turned the wheel of Dharma after his enlightenment.",
                  side: "left",
                },
                {
                  step: 3,
                  title: "Ayodhya — Birthplace of Lord Ram",
                  desc: "Drive to Ayodhya for darshan at the grand new Ram Janmabhoomi temple complex (VIP passes arranged). Visit Hanuman Garhi fortress temple and Kanak Bhawan. Evening at Sarayu Ghat.",
                  side: "right",
                },
                {
                  step: 4,
                  title: "Prayagraj — The Triveni Sangam",
                  desc: "Visit the confluence of the Ganga, Yamuna, and mythical Saraswati — one of the holiest bathing sites in Hinduism. Boat ride at the Sangam. Visit Allahabad Fort and Akshaya Vat.",
                  side: "left",
                },
                {
                  step: 5,
                  title: "Gaya — Liberation of Ancestors",
                  desc: "The final and deepest stop. Perform Pind Daan at Vishnu Pad Temple for ancestral liberation rites — one of the most spiritually significant acts a Hindu can undertake for their departed family.",
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
              UP Yatra Packages
            </h2>
            <p className="font-sans text-sm text-midnight/50 mt-4">
              Three carefully designed sacred circuits — from the essential Kashi experience to the complete four-city grand yatra.
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
                    href={`/yatra/uttar-pradesh/${pkg.code}`}
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
              Sacred Authenticity &amp; Care
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
                Pre-arranged VIP Darshan passes at Kashi Vishwanath and Ram Janmabhoomi, bypassing 2–4 hour queues. All temple permits and entry documentation handled before departure.
              </p>
            </article>

            <article className="flex flex-col gap-5 p-8 bg-white border border-gold-dark/10 rounded shadow-ambient hover:shadow-card hover:-translate-y-1 hover:border-gold-dark/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gold-dark/5 flex items-center justify-center border border-gold-dark/15">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#735c00" strokeWidth="1.75" aria-hidden="true">
                  <circle cx="12" cy="8" r="5" />
                  <path d="M3 21v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2" />
                  <path d="M16 3.5c1.2.8 2 2.2 2 3.5" />
                  <path d="M18 14l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-midnight font-medium">Expert Spiritual Guides</h3>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                Our guides are deeply trained in the mythology, ritual significance, and sacred geography of each city — transforming sightseeing into a genuine spiritual journey rather than a tourist tour.
              </p>
            </article>

            <article className="flex flex-col gap-5 p-8 bg-white border border-gold-dark/10 rounded shadow-ambient hover:shadow-card hover:-translate-y-1 hover:border-gold-dark/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gold-dark/5 flex items-center justify-center border border-gold-dark/15">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#735c00" strokeWidth="1.75" aria-hidden="true">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-midnight font-medium">Pind Daan Arrangements</h3>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                For the Grand UP Yatra, we coordinate qualified Brahmin priests at Vishnu Pad Temple in Gaya for complete ancestral liberation rites — one of the deepest spiritual services we offer.
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
