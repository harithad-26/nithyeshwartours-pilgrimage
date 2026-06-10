import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Varanasi Yatra — Kashi, The Eternal City",
  description:
    "Experience the spiritual heart of India. Varanasi pilgrimage packages including Ganga Aarti, Kashi Vishwanath darshan, and sacred boat rides. Starting from ₹18,500.",
};

const EXPERIENCES = [
  {
    icon: "🪔",
    title: "The Ganga Aarti",
    description: "Witness the transcendent evening fire ritual at Dashashwamedh Ghat — priests and flames in perfect sacred choreography.",
  },
  {
    icon: "🏛",
    title: "Kashi Vishwanath",
    description: "Receive darshan at the golden-spired temple, one of the twelve Jyotirlingas where moksha is granted.",
  },
  {
    icon: "🚣",
    title: "Dawn Boat Ritual",
    description: "A pre-dawn boat journey on the Ganga as the city awakens — silence of water, first bells from temples.",
  },
  {
    icon: "🍲",
    title: "The Kashi Thali",
    description: "Savour the sattvic cuisine — legendary Baati Chokha, Malaiyyo in winter, and sacred thandai.",
  },
];

const PACKAGES = [
  {
    code: "VNS 01",
    name: "Kashi Essentials",
    duration: "3N / 4D",
    price: "₹18,500",
    hotel: "3-Star Hotel",
    highlight: "Budget Friendly",
    featured: false,
  },
  {
    code: "VNS 02",
    name: "Kashi Immersion",
    duration: "5N / 6D",
    price: "₹32,000",
    hotel: "Heritage Property",
    highlight: "Most Popular",
    badge: "MOST SOUGHT",
    featured: true,
  },
  {
    code: "VNS 03",
    name: "Kashi — Full Circuit",
    duration: "7N / 8D",
    price: "₹55,000",
    hotel: "Luxury River-View",
    highlight: "Premium Experience",
    featured: false,
  },
];

const SACRED_SITES = [
  {
    name: "Kashi Vishwanath",
    type: "Jyotirlinga Temple",
    description: "The most sacred shrine in Varanasi, where Lord Shiva resides as the cosmic light.",
  },
  {
    name: "Dashashwamedh Ghat",
    type: "Main Ghat",
    description: "Site of the legendary ten-horse sacrifice by Lord Brahma, and the grand Ganga Aarti.",
  },
  {
    name: "Manikarnika Ghat",
    type: "Cremation Ghat",
    description: "The eternal cremation ground where death grants immediate liberation (moksha).",
  },
  {
    name: "Sarnath",
    type: "Buddhist Site",
    description: "Where Buddha gave his first sermon after attaining enlightenment at Bodh Gaya.",
  },
  {
    name: "Assi Ghat",
    type: "Southern Ghat",
    description: "The southernmost ghat, marking the confluence of Assi and Ganga rivers.",
  },
  {
    name: "Sankat Mochan Temple",
    type: "Hanuman Temple",
    description: "Dedicated to Lord Hanuman, believed to remove all troubles and obstacles.",
  },
];

export default function VaranasiPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/india-states/varanasi-ghats.jpg"
          alt="Varanasi Ghats at sunrise"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/50 via-midnight/40 to-midnight/80" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold mb-5">
            THE ETERNAL CITY
          </p>
          <h1 className="font-serif text-6xl md:text-7xl text-white font-normal leading-tight tracking-tight mb-6">
            Varanasi Yatra
          </h1>
          <p className="font-sans text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
            Where the divine meets the mortal on the banks of the sacred Ganga
          </p>
          <Link
            href="/inquiry"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold bg-gold text-midnight px-8 py-4 rounded-md hover:bg-gold-dark hover:text-white transition-colors duration-300 min-h-11"
          >
            View Packages
          </Link>
        </div>
      </section>

      {/* At a Glance */}
      <section className="border-y border-white/10 bg-midnight">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-6">
            {[
              { label: "Best Season", value: "Oct — Mar" },
              { label: "Duration", value: "3-7 Days" },
              { label: "Deity", value: "Lord Shiva" },
              { label: "Language", value: "Hindi · Sanskrit" },
              { label: "Nearest Airport", value: "Varanasi (VNS)" },
              { label: "Altitude", value: "80 m ASL" },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`px-6 py-8 text-center ${
                  i < 5 ? "border-r border-white/10" : ""
                } ${i >= 3 ? "border-t md:border-t-0 border-white/10" : ""}`}
              >
                <p className="font-sans text-[9px] text-gold uppercase tracking-[0.3em] mb-2 font-semibold">
                  {item.label}
                </p>
                <p className="font-serif text-base text-white font-normal">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Yatra */}
      <section className="py-20 px-6 bg-surface" id="story">
        <div className="max-w-4xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4">
            ABOUT THIS YATRA
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal leading-snug mb-6">
            The City Lord Shiva Never Abandons
          </h2>
          <div className="space-y-5 font-sans text-base text-midnight/70 leading-relaxed">
            <p>
              Varanasi — known also as Kashi and Benares — is among the oldest continually inhabited cities on earth.
              It stands on the western bank of the Ganga, cradled between two smaller rivers, Varana and Asi, from
              which its modern name is drawn.
            </p>
            <p>
              For the devout Hindu, Kashi is not merely a city — it is the living embodiment of Lord Shiva&apos;s consciousness.
              The Kashi Vishwanath Temple, housing one of the twelve sacred Jyotirlingas, draws over a million pilgrims each
              year who come seeking liberation, known here as moksha.
            </p>
            <p>
              The ghats of Varanasi — 88 of them stretching along the Ganga — are the stage upon which the great drama of
              life and death unfolds daily. The Ganga Aarti at Dashashwamedh Ghat, performed each evening as the sun descends,
              is one of the most transcendent rituals in all of Hindu civilization.
            </p>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-20 px-6 bg-surface-low">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4 text-center">
            WHAT AWAITS YOU
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal text-center mb-14 leading-snug">
            The Kashi Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {EXPERIENCES.map((exp) => (
              <div key={exp.title} className="bg-white rounded-md overflow-hidden shadow-ambient p-6">
                <span className="text-4xl block mb-4">{exp.icon}</span>
                <h3 className="font-serif text-xl text-midnight font-normal mb-3">{exp.title}</h3>
                <p className="font-sans text-sm text-midnight/60 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages - Premium 3 Column Cards */}
      <section className="py-20 px-6 bg-surface" id="packages">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4 text-center">
            OUR PACKAGES
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal text-center mb-4 leading-snug">
            Choose Your Kashi Journey
          </h2>
          <p className="font-sans text-base text-midnight/50 text-center mb-14 max-w-2xl mx-auto leading-relaxed">
            From short temple visits to complete spiritual immersions — we offer complete flexibility
            to match your spiritual goals and travel style.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* VNS 01 - Budget */}
            <div className="bg-white rounded-md overflow-hidden shadow-ambient transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,31,63,0.15)] hover:-translate-y-2">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-midnight/50 font-semibold">
                    VNS 01
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-midnight font-normal mb-2">
                  Kashi Essentials
                </h3>
                <p className="font-sans text-sm text-midnight/50 mb-6">3 Nights / 4 Days</p>
                
                <div className="mb-8">
                  <p className="font-serif text-4xl text-gold-dark font-normal mb-1">₹18,500</p>
                  <p className="font-sans text-xs text-midnight/40">per person · twin sharing</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "3 nights hotel accommodation",
                    "Ganga Aarti darshan (evening)",
                    "Kashi Vishwanath temple visit",
                    "Guided morning boat ride",
                    "All transfers included",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 font-sans text-sm text-midnight/70">
                      <span className="text-gold-dark mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/yatra/varanasi/VNS-01"
                  className="block text-center font-sans text-xs tracking-[0.15em] uppercase font-semibold py-3.5 border border-gold-dark text-gold-dark hover:bg-gold-dark hover:text-white transition-colors duration-300 rounded-sm"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* VNS 02 - Featured (Gold Accent & Extra Highlighted) */}
            <div className="bg-surface-container-lowest rounded-md overflow-hidden relative md:-mt-6 md:mb-6 border-2 border-secondary shadow-[0_20px_70px_rgba(115,92,0,0.25)] transition-all duration-500 hover:shadow-[0_30px_90px_rgba(115,92,0,0.35)] hover:-translate-y-3 hover:border-secondary-container">
              <div className="absolute top-0 left-0 right-0 bg-secondary text-midnight font-sans text-[9px] font-bold tracking-[0.25em] uppercase px-4 py-2.5 text-center">
                Most Sought
              </div>
              <div className="p-8 pt-14 bg-gradient-to-br from-secondary/5 to-transparent">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-secondary font-semibold">
                    VNS 02
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-midnight font-medium mb-2">
                  Kashi Immersion
                </h3>
                <p className="font-sans text-sm text-midnight/50 mb-6">5 Nights / 6 Days</p>
                
                <div className="mb-8">
                  <p className="font-serif text-5xl text-secondary font-normal mb-1">₹32,000</p>
                  <p className="font-sans text-xs text-midnight/40">per person · twin sharing</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "5 nights heritage accommodation",
                    "Evening & morning Ganga Aarti",
                    "Kashi Vishwanath VIP darshan",
                    "Sarnath excursion (Buddha Stupa)",
                    "Ramnagar Fort visit",
                    "Sattvic meals throughout",
                    "Dedicated spiritual guide",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 font-sans text-sm text-midnight/75">
                      <span className="text-secondary mt-1 text-base">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/yatra/varanasi/VNS-02"
                  className="block text-center font-sans text-xs tracking-[0.15em] uppercase font-semibold py-4 bg-secondary text-midnight hover:bg-secondary-container transition-colors duration-300 rounded-sm shadow-md"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* VNS 03 - Premium */}
            <div className="bg-white rounded-md overflow-hidden shadow-ambient transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,31,63,0.15)] hover:-translate-y-2">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-midnight/50 font-semibold">
                    VNS 03
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-midnight font-normal mb-2">
                  Kashi — Full Circuit
                </h3>
                <p className="font-sans text-sm text-midnight/50 mb-6">7 Nights / 8 Days</p>
                
                <div className="mb-8">
                  <p className="font-serif text-4xl text-gold-dark font-normal mb-1">₹55,000</p>
                  <p className="font-sans text-xs text-midnight/40">per person · twin sharing</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "7 nights luxury river-view stay",
                    "Private Puja at Manikarnika Ghat",
                    "Allahabad Sangam excursion",
                    "Vindhyachal Devi temple",
                    "Gaya Pitru Tarpan arrangements",
                    "Full sattvic meals · Ayurvedic spa",
                    "Private guide · 24/7 concierge",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 font-sans text-sm text-midnight/70">
                      <span className="text-gold-dark mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/yatra/varanasi/VNS-03"
                  className="block text-center font-sans text-xs tracking-[0.15em] uppercase font-semibold py-3.5 border border-gold-dark text-gold-dark hover:bg-gold-dark hover:text-white transition-colors duration-300 rounded-sm"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>

          <p className="font-sans text-xs text-midnight/40 text-center mt-12 leading-relaxed">
            All prices are per person on twin sharing basis. Single supplement charges apply.
          </p>
        </div>
      </section>

      {/* Sacred Sites */}
      <section className="py-20 px-6 bg-surface-low">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4 text-center">
            SACRED GEOGRAPHY
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal text-center mb-14 leading-snug">
            Six Pillars of Kashi
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SACRED_SITES.map((site, i) => (
              <div key={site.name} className="bg-white rounded-md overflow-hidden shadow-ambient p-6">
                <p className="font-serif text-5xl font-light text-gold/20 leading-none mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-serif text-xl text-midnight font-normal mb-2">{site.name}</h3>
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold-dark mb-3">
                  {site.type}
                </p>
                <p className="font-sans text-sm text-midnight/60 leading-relaxed">{site.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Itinerary - Five Days in Kashi */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-4xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4 text-center">
            SAMPLE ITINERARY
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal text-center mb-14 leading-snug">
            Five Days in Kashi
          </h2>

          <div className="space-y-4">
            {[
              {
                day: "01",
                title: "Arrival · First Steps on the Sacred Soil",
                desc: "Arrival at Varanasi Airport. Transfer to heritage hotel. Evening Ganga Aarti at Dashashwamedh Ghat.",
              },
              {
                day: "02",
                title: "The Golden Temple & The Ancient Ghats",
                desc: "Pre-dawn boat ride on the Ganga. Darshan at Kashi Vishwanath Jyotirlinga. Guided walk through old Varanasi.",
              },
              {
                day: "03",
                title: "Sarnath · Where Buddha Spoke",
                desc: "Excursion to Sarnath — Buddha's first sermon site. Visit Dhamek Stupa and Archaeological Museum. Evening Aarti at Assi Ghat.",
              },
              {
                day: "04",
                title: "The Circle of Life & Death",
                desc: "Visit Manikarnika Ghat. Understand the philosophy of moksha. Visit Tulsi Manas Mandir and Durga Temple. Sunset boat ride.",
              },
              {
                day: "05",
                title: "Departure · Carrying Kashi Within",
                desc: "Final darshan at Kashi Vishwanath. Optional private puja. Checkout and transfer to airport/station.",
              },
            ].map((day) => (
              <details
                key={day.day}
                className="group bg-white rounded-md overflow-hidden shadow-ambient"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 hover:bg-surface-low transition-colors">
                  <div className="flex items-center gap-5">
                    <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold-dark font-semibold">
                      Day {day.day}
                    </span>
                    <h3 className="font-serif text-lg text-midnight font-normal">{day.title}</h3>
                  </div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="shrink-0 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="px-6 pb-5">
                  <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                    {day.desc}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions & Exclusions */}
      <section className="py-20 px-6 bg-surface-low">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4 text-center">
            WHAT&apos;S COVERED
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal text-center mb-14 leading-snug">
            Inclusions & Exclusions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Inclusions */}
            <div className="bg-white rounded-md overflow-hidden shadow-ambient p-6">
              <h3 className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#15803d] mb-5 font-semibold">
                ✓ Included
              </h3>
              <ul className="space-y-3">
                {[
                  "Accommodation as per package",
                  "Daily breakfast & dinner",
                  "All transfers & sightseeing by AC vehicle",
                  "Boat ride on the Ganga (shared)",
                  "Ganga Aarti attendance",
                  "English/Hindi speaking guide",
                  "Kashi Vishwanath temple entry",
                  "Sarnath entrance tickets",
                  "All applicable taxes",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-midnight/70 font-sans text-sm">
                    <span className="text-[#15803d] text-sm mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="bg-white rounded-md overflow-hidden shadow-ambient p-6">
              <h3 className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#991b1b] mb-5 font-semibold">
                ✗ Not Included
              </h3>
              <ul className="space-y-3">
                {[
                  "Airfare / Train tickets to Varanasi",
                  "Lunch & beverages",
                  "Personal expenses & tips",
                  "Camera fees at monuments",
                  "Private puja arrangements",
                  "Pony/palki at Vishwanath lane",
                  "Travel insurance",
                  "Any item not mentioned in inclusions",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-midnight/50 font-sans text-sm">
                    <span className="text-[#991b1b] text-sm mt-0.5">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-4xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4 text-center">
            BEST TIME TO VISIT
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal text-center mb-14 leading-snug">
            When to Plan Your Kashi Journey
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                status: "Best Time",
                months: "October — March",
                description: "Pleasant weather, clear skies, and ideal temperatures for ghat walks and rituals. Festival season includes Dev Deepawali.",
                color: "bg-[#dcfce7] text-[#15803d]",
              },
              {
                status: "Good Time",
                months: "July — September",
                description: "Monsoon brings a different beauty to Kashi. The Ganga is fuller, ghats glisten with rain. Fewer crowds, special monsoon rates.",
                color: "bg-gold-muted text-gold-dark",
              },
              {
                status: "Off Season",
                months: "April — June",
                description: "Summer heat can be intense (40°C+). Early morning and evening activities only. Best avoided unless you have specific spiritual dates.",
                color: "bg-surface-low text-midnight/40",
              },
            ].map((season) => (
              <div key={season.months} className={`rounded-md p-6 ${season.color}`}>
                <p className="font-sans text-xs font-bold tracking-widest uppercase mb-2">
                  {season.status}
                </p>
                <p className="font-serif text-xl font-normal mb-3">{season.months}</p>
                <p className="font-sans text-sm leading-relaxed opacity-80">
                  {season.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Information */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4 text-center">
            PRACTICAL INFORMATION
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal text-center mb-14 leading-snug">
            Everything You Need to Plan Your Trip
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* How to Reach */}
            <div className="bg-white rounded-md overflow-hidden shadow-ambient p-6">
              <h3 className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold-dark mb-4 font-semibold">
                How to Reach
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-sans text-xs font-bold text-midnight mb-1">By Air</p>
                  <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                    Lal Bahadur Shastri Airport (VNS) — 25 km from city center. Daily flights from Delhi, Mumbai, Bengaluru.
                  </p>
                </div>
                <div>
                  <p className="font-sans text-xs font-bold text-midnight mb-1">By Train</p>
                  <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                    Varanasi Junction & Manduadih — well connected to all major cities. Overnight trains from Delhi (12-14 hrs).
                  </p>
                </div>
              </div>
            </div>

            {/* What to Pack */}
            <div className="bg-white rounded-md overflow-hidden shadow-ambient p-6">
              <h3 className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold-dark mb-4 font-semibold">
                What to Pack
              </h3>
              <ul className="space-y-2 font-sans text-sm text-midnight/70">
                <li className="flex items-start gap-2">
                  <span className="text-gold-dark mt-1">•</span>
                  <span>Modest clothing — long pants/skirts, covered shoulders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-dark mt-1">•</span>
                  <span>Comfortable walking shoes (ghats have steps)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-dark mt-1">•</span>
                  <span>Shawl for temples and evening boat rides</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-dark mt-1">•</span>
                  <span>Sunscreen, hat, sunglasses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-dark mt-1">•</span>
                  <span>Personal medicines & first-aid kit</span>
                </li>
              </ul>
            </div>

            {/* Local Transport */}
            <div className="bg-white rounded-md overflow-hidden shadow-ambient p-6">
              <h3 className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold-dark mb-4 font-semibold">
                Local Transport
              </h3>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed mb-3">
                All our packages include AC vehicle for airport transfers and sightseeing. Within the old city, walking is the best option.
              </p>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                Boat rides on the Ganga are included in all packages. Auto-rickshaws available for short distances.
              </p>
            </div>

            {/* Photography Tips */}
            <div className="bg-white rounded-md overflow-hidden shadow-ambient p-6">
              <h3 className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold-dark mb-4 font-semibold">
                For Vloggers & Photographers
              </h3>
              <ul className="space-y-2 font-sans text-sm text-midnight/70">
                <li className="flex items-start gap-2">
                  <span className="text-gold-dark mt-1">•</span>
                  <span>Best light: Sunrise (5:30-7 AM) & Aarti time (6:30 PM)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-dark mt-1">•</span>
                  <span>Camera fees: ₹25-50 at Kashi Vishwanath</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-dark mt-1">•</span>
                  <span>Drones: Prohibited in temple areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-dark mt-1">•</span>
                  <span>Respect: Ask before photographing people/rituals</span>
                </li>
              </ul>
            </div>

            {/* Food Guide */}
            <div className="bg-white rounded-md overflow-hidden shadow-ambient p-6">
              <h3 className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold-dark mb-4 font-semibold">
                Food Guide
              </h3>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed mb-3">
                All packages include daily breakfast & dinner. Varanasi is famous for pure vegetarian cuisine.
              </p>
              <p className="font-sans text-xs font-bold text-midnight mb-2">Must Try:</p>
              <p className="font-sans text-sm text-midnight/70">
                Kashi Chaat, Baati Chokha, Malaiyyo (winter), Lassi, Thandai
              </p>
            </div>

            {/* Booking Process */}
            <div className="bg-white rounded-md overflow-hidden shadow-ambient p-6">
              <h3 className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold-dark mb-4 font-semibold">
                How to Book
              </h3>
              <div className="space-y-3 font-sans text-sm text-midnight/70">
                <p>
                  <span className="font-bold text-midnight">1. Contact Us:</span> WhatsApp or call +91 72001 18411
                </p>
                <p>
                  <span className="font-bold text-midnight">2. Customize:</span> Choose package, dates, hotel category
                </p>
                <p>
                  <span className="font-bold text-midnight">3. Payment:</span> 30% advance to confirm booking
                </p>
                <p>
                  <span className="font-bold text-midnight">4. Confirmation:</span> Receive detailed itinerary & vouchers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-surface-low">
        <div className="max-w-4xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4 text-center">
            FREQUENTLY ASKED
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal text-center mb-14 leading-snug">
            Everything You Need to Know
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "What is the best time to visit Varanasi?",
                a: "October to March is the best time — pleasant weather (15-30°C), clear skies, and major festivals like Dev Deepawali. Avoid April-June (extreme heat 40°C+). Monsoon (July-Sep) is offseason with fewer crowds.",
              },
              {
                q: "How many days are enough for Varanasi?",
                a: "Minimum 3 days for key rituals and temples (VNS 01). We recommend 5 days (VNS 02) for deeper immersion including Sarnath, Allahabad day trip, and personal reflection time. 7 days (VNS 03) adds Gaya and Vindhyachal.",
              },
              {
                q: "What's included in the package price?",
                a: "All packages include: accommodation as per category, daily breakfast & dinner (sattvic meals), AC vehicle for all transfers & sightseeing, boat rides on Ganga, temple entry tickets, English/Hindi guide, and all taxes. Excluded: flights/trains, lunch, personal expenses.",
              },
              {
                q: "Can we customize the itinerary?",
                a: "Absolutely! We offer complete customization — change hotel category, add extra days, include nearby destinations (Prayagraj, Ayodhya), arrange private puja, or create a Do Dham combo. WhatsApp us your requirements: +91 72001 18411.",
              },
              {
                q: "Is Varanasi safe for solo female travelers?",
                a: "Yes, generally safe. We provide: dedicated female guides on request, secure heritage hotels, private AC transfers, and 24/7 support. The old city lanes can be crowded — we ensure guided walks and safe navigation.",
              },
              {
                q: "Can we get VIP darshan at Kashi Vishwanath?",
                a: "Yes, VIP darshan available for additional ₹500-1000 per person. Allows you to skip 2-3 hour queues. Must be pre-booked. Regular darshan is free but involves long waits, especially during festivals.",
              },
              {
                q: "What should I wear in Varanasi?",
                a: "Modest clothing essential: long pants/skirts below knee, covered shoulders for temples. Comfortable walking shoes (ghats have 100+ steps). Bring a shawl for early morning boat rides. Avoid shorts, sleeveless tops, and revealing clothes.",
              },
              {
                q: "Are vegetarian meals provided? Any food restrictions?",
                a: "Yes, all packages include pure sattvic vegetarian meals — no onion, garlic, meat, eggs, or alcohol. Varanasi specializes in vegetarian cuisine. Special dietary needs (Jain, vegan, gluten-free) can be accommodated with advance notice.",
              },
              {
                q: "What is the cancellation & refund policy?",
                a: "30+ days before travel: Full refund minus ₹2000 processing fee. 15-30 days: 50% refund. Less than 15 days: No refund. Force majeure (natural disasters, temple closures) — full refund or reschedule. Travel insurance recommended.",
              },
              {
                q: "How do I book? What's the payment process?",
                a: "Step 1: WhatsApp/call +91 72001 18411. Step 2: Share travel dates, group size, preferences. Step 3: Receive customized quote. Step 4: Pay 30% advance to confirm. Step 5: Pay 70% balance 7 days before travel. Accept UPI, bank transfer, card.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-md overflow-hidden shadow-ambient"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 hover:bg-surface-low transition-colors">
                  <h3 className="font-serif text-lg text-midnight font-normal pr-4">
                    {faq.q}
                  </h3>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="shrink-0 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="px-6 pb-5">
                  <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-midnight/95 backdrop-blur-md border-t border-white/10 py-4 px-6 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden md:block">
            <p className="font-serif text-lg text-white font-normal">
              Ready to Experience <span className="italic text-gold">Kashi</span>?
            </p>
            <p className="font-sans text-sm text-white/60">Packages starting from ₹18,500</p>
          </div>
          <div className="flex gap-3 flex-1 md:flex-initial">
            <Link
              href="/inquiry"
              className="flex-1 md:flex-initial inline-flex items-center justify-center font-sans text-sm font-semibold bg-gold text-midnight px-8 py-3 rounded-md hover:bg-secondary transition-colors min-h-11"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
