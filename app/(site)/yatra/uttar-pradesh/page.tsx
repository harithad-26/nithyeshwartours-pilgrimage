import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uttar Pradesh Yatra — Varanasi, Ayodhya, Prayagraj, Gaya Pilgrimages",
  description:
    "Explore the spiritual heart of India. Varanasi Kashi Vishwanath, Ayodhya Ram Janmabhoomi, Prayagraj Triveni Sangam, and Gaya Pitru Tarpan packages. Starting from ₹12,500.",
};

const EXPERIENCES = [
  {
    icon: "🏛️",
    title: "Sacred Cities",
    description: "Visit Varanasi (Kashi), Ayodhya (birthplace of Lord Ram), and Prayagraj (Triveni Sangam) — the most sacred sites.",
  },
  {
    icon: "🪔",
    title: "Ganga Aarti",
    description: "Witness the divine evening Aarti at Dashashwamedh Ghat — priests, fire, and devotion in perfect harmony.",
  },
  {
    icon: "🕉️",
    title: "Ancestral Rituals",
    description: "Perform Pind Daan at Gaya for departed souls — believed to grant moksha to ancestors.",
  },
  {
    icon: "🌊",
    title: "Triveni Sangam",
    description: "Take a holy dip at the confluence of Ganga, Yamuna, and Saraswati at Prayagraj.",
  },
];

const PACKAGES = [
  {
    code: "UP 01",
    name: "Kashi Essentials",
    duration: "3N / 4D",
    price: "₹12,500",
    hotel: "3-Star Hotel",
    highlight: "Varanasi Focus",
  },
  {
    code: "UP 02",
    name: "Varanasi-Ayodhya Circuit",
    duration: "4N / 5D",
    price: "₹18,500",
    hotel: "3-Star Hotel",
    highlight: "Ram Janmabhoomi",
    badge: "MOST POPULAR",
  },
  {
    code: "UP 03",
    name: "Grand UP Yatra",
    duration: "6N / 7D",
    price: "₹32,000",
    hotel: "Heritage Property",
    highlight: "Complete Circuit",
  },
];

const SACRED_SITES = [
  {
    name: "Kashi Vishwanath",
    location: "Varanasi",
    description: "One of the twelve Jyotirlingas, the golden-spired temple of Lord Shiva.",
  },
  {
    name: "Ram Janmabhoomi",
    location: "Ayodhya",
    description: "The birthplace of Lord Ram, newly reconstructed grand temple complex.",
  },
  {
    name: "Triveni Sangam",
    location: "Prayagraj",
    description: "Confluence of three holy rivers — Ganga, Yamuna, and mythical Saraswati.",
  },
  {
    name: "Vishnu Pad Temple",
    location: "Gaya",
    description: "Temple housing Lord Vishnu's footprints, sacred for ancestral rites (Pind Daan).",
  },
  {
    name: "Hanuman Garhi",
    location: "Ayodhya",
    description: "Ancient fortress temple dedicated to Lord Hanuman with 76 steps.",
  },
  {
    name: "Allahabad Fort",
    location: "Prayagraj",
    description: "Mughal-era fort housing Akshaya Vat (immortal banyan tree) and Patalpuri Temple.",
  },
];

export default function UttarPradeshYatraPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/india-states/varanasi-ghats.jpg"
          alt="Uttar Pradesh Sacred Sites"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/50 via-midnight/40 to-midnight/80" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold mb-5">
            SPIRITUAL HEARTLAND
          </p>
          <h1 className="font-serif text-6xl md:text-7xl text-white font-normal leading-tight tracking-tight mb-6">
            Uttar Pradesh Yatra
          </h1>
          <p className="font-sans text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
            From Kashi to Ayodhya — journey through India&apos;s most sacred cities
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
              { label: "Starting Point", value: "Varanasi" },
              { label: "Language", value: "Hindi · Awadhi" },
              { label: "Nearest Airport", value: "Varanasi (VNS)" },
              { label: "Cities Covered", value: "4 Sacred Cities" },
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
            ABOUT THIS CIRCUIT
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal leading-snug mb-6">
            The Sacred Geography of Uttar Pradesh
          </h2>
          <div className="space-y-5 font-sans text-base text-midnight/70 leading-relaxed">
            <p>
              Uttar Pradesh, the most populous state in India, holds within its boundaries some of Hinduism&apos;s holiest cities — 
              Varanasi (Kashi), Ayodhya, Prayagraj (Allahabad), and neighboring Gaya in Bihar. Together, these form a sacred 
              circuit that every devout Hindu aspires to complete at least once in their lifetime.
            </p>
            <p>
              Varanasi, the city Lord Shiva never abandons, sits on the banks of the Ganga and houses the Kashi Vishwanath 
              Jyotirlinga. Ayodhya, recently revitalized with the grand Ram Janmabhoomi temple, is the birthplace of Lord Ram. 
              Prayagraj hosts the Triveni Sangam where three sacred rivers meet, and Gaya is the only place where ancestral 
              rites (Pind Daan) are believed to grant immediate moksha.
            </p>
            <p>
              This circuit combines spiritual devotion with rich historical heritage — from ancient temples to Mughal forts, 
              from dawn boat rides on the Ganga to elaborate evening Aarti ceremonies. Each city has its own rhythm, its own 
              sacred rituals, and its own profound connection to the divine.
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
            The Uttar Pradesh Experience
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

      {/* Packages */}
      <section className="py-20 px-6 bg-surface" id="packages">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4 text-center">
            OUR PACKAGES
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal text-center mb-4 leading-snug">
            Choose Your Sacred Circuit
          </h2>
          <p className="font-sans text-base text-midnight/50 text-center mb-14 max-w-2xl mx-auto leading-relaxed">
            From focused temple visits to comprehensive multi-city circuits — flexible itineraries to match your time
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg, idx) => (
              <div
                key={pkg.code}
                className={`bg-white rounded-md overflow-hidden shadow-ambient transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,31,63,0.15)] hover:-translate-y-2 ${
                  idx === 1 ? "md:-mt-4 md:mb-4 border-2 border-secondary/20" : ""
                }`}
              >
                {idx === 1 && (
                  <div className="bg-secondary text-midnight font-sans text-[9px] font-bold tracking-[0.25em] uppercase px-4 py-2 text-center">
                    {pkg.badge}
                  </div>
                )}
                <div className={`p-8 ${idx === 1 ? "bg-gradient-to-br from-secondary/5 to-transparent" : ""}`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-sans text-[10px] tracking-[0.25em] uppercase font-semibold ${
                      idx === 1 ? "text-secondary" : "text-midnight/50"
                    }`}>
                      {pkg.code}
                    </span>
                  </div>
                  <h3 className={`font-serif text-2xl font-normal mb-2 ${
                    idx === 1 ? "text-midnight font-medium" : "text-midnight"
                  }`}>
                    {pkg.name}
                  </h3>
                  <p className="font-sans text-sm text-midnight/50 mb-6">{pkg.duration}</p>
                  
                  <div className="mb-8">
                    <p className={`font-serif font-normal mb-1 ${
                      idx === 1 ? "text-4xl text-secondary" : "text-3xl text-gold-dark"
                    }`}>
                      {pkg.price}
                    </p>
                    <p className="font-sans text-xs text-midnight/40">per person · twin sharing</p>
                  </div>

                  <Link
                    href={`/yatra/uttar-pradesh/${pkg.code.replace(' ', '-')}`}
                    className={`block text-center font-sans text-xs tracking-[0.15em] uppercase font-semibold py-3.5 transition-colors duration-300 rounded-sm ${
                      idx === 1
                        ? "bg-secondary text-midnight hover:bg-secondary-container shadow-md"
                        : "border border-gold-dark text-gold-dark hover:bg-gold-dark hover:text-white"
                    }`}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
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
            Six Must-Visit Sites
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SACRED_SITES.map((site, i) => (
              <div key={site.name} className="bg-white rounded-md overflow-hidden shadow-ambient p-6">
                <p className="font-serif text-5xl font-light text-gold/20 leading-none mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-serif text-xl text-midnight font-normal mb-2">{site.name}</h3>
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold-dark mb-3">
                  {site.location}
                </p>
                <p className="font-sans text-sm text-midnight/60 leading-relaxed">{site.description}</p>
              </div>
            ))}
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
            When to Plan Your Yatra
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                status: "Best Time",
                months: "October — March",
                description: "Pleasant weather (15-30°C), clear skies, festival season including Diwali, Dev Deepawali, Kartik Purnima.",
                color: "bg-[#dcfce7] text-[#15803d]",
              },
              {
                status: "Good Time",
                months: "July — September",
                description: "Monsoon season brings lush greenery. Ganga is fuller. Fewer crowds, special monsoon rates available.",
                color: "bg-gold-muted text-gold-dark",
              },
              {
                status: "Avoid",
                months: "April — June",
                description: "Extreme summer heat (40-45°C). Uncomfortable for temple visits and outdoor activities. Best avoided.",
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
                q: "Which cities are covered in UP Yatra packages?",
                a: "Our packages cover Varanasi (Kashi Vishwanath), Ayodhya (Ram Janmabhoomi), Prayagraj (Triveni Sangam), and Gaya (Pind Daan). You can choose focused packages (Varanasi only) or comprehensive circuits covering all cities.",
              },
              {
                q: "How many days are needed for complete UP Yatra?",
                a: "Minimum 3 days for Varanasi essentials. We recommend 5 days for Varanasi + Ayodhya combo (most popular). 7 days covers all four sacred cities including Gaya for ancestral rites. Customize based on your time availability.",
              },
              {
                q: "What's included in the package price?",
                a: "All packages include: hotel accommodation, daily breakfast & dinner, AC vehicle for transfers & sightseeing, boat rides on Ganga, temple entry tickets, guide services, and all taxes. Excluded: flights/trains, lunch, personal expenses, special puja arrangements.",
              },
              {
                q: "Can we arrange Pind Daan rituals at Gaya?",
                a: "Yes, we arrange complete Pind Daan ceremonies at Vishnu Pad Temple, Gaya with qualified priests. Separate charges apply (₹5000-15000 depending on rituals). Must be pre-booked. Best done during Pitru Paksha (Sep-Oct).",
              },
              {
                q: "Is the new Ram Mandir in Ayodhya accessible?",
                a: "Yes! The grand Ram Janmabhoomi temple complex opened in January 2024. Darshan available daily. We provide VIP passes to skip long queues. Also visit Hanuman Garhi, Kanak Bhawan, and other ancient temples in Ayodhya.",
              },
              {
                q: "Can packages be customized?",
                a: "Absolutely! Add extra days, change hotel categories, include additional destinations (Chitrakoot, Vindhyachal), arrange private puja, or create custom combinations. WhatsApp your requirements: +91 72001 18411.",
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
              Ready for Your <span className="italic text-gold">Sacred Journey</span>?
            </p>
            <p className="font-sans text-sm text-white/60">Packages starting from ₹12,500</p>
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