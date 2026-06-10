import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uttarakhand Yatra — Sacred Himalayan Journeys",
  description:
    "Explore Uttarakhand's sacred sites including Haridwar, Rishikesh, Do Dham (Kedarnath-Badrinath), and Char Dham circuits. Packages starting from ₹15,000.",
};

const EXPERIENCES = [
  {
    icon: "🏔️",
    title: "Himalayan Shrines",
    description: "Visit ancient temples nestled in snow-capped mountains — Kedarnath, Badrinath, Gangotri, Yamunotri.",
  },
  {
    icon: "🌊",
    title: "Sacred River Origins",
    description: "Witness the birthplaces of holy rivers — Yamuna at Yamunotri and Ganga at Gangotri.",
  },
  {
    icon: "🧘",
    title: "Yoga Capital",
    description: "Experience spiritual awakening in Rishikesh, the world capital of yoga and meditation.",
  },
  {
    icon: "🕉️",
    title: "Evening Aarti",
    description: "Attend the grand Ganga Aarti at Har Ki Pauri in Haridwar — a spectacle of devotion.",
  },
];

const PACKAGES = [
  {
    code: "UK 01",
    name: "Haridwar-Rishikesh Circuit",
    duration: "3N / 4D",
    price: "₹15,000",
    hotel: "3-Star Hotel",
    highlight: "Gateway to Himalayas",
  },
  {
    code: "UK 02",
    name: "Do Dham Yatra",
    duration: "6N / 7D",
    price: "₹28,000",
    hotel: "Heritage Property",
    highlight: "Kedarnath-Badrinath",
    badge: "MOST POPULAR",
  },
  {
    code: "UK 03",
    name: "Kedarnath Special",
    duration: "4N / 5D",
    price: "₹22,000",
    hotel: "Standard Hotel",
    highlight: "Shiva Jyotirlinga",
  },
];

const SACRED_SITES = [
  {
    name: "Kedarnath",
    type: "Jyotirlinga Temple",
    description: "One of the twelve Jyotirlingas, dedicated to Lord Shiva at 3,583m altitude.",
  },
  {
    name: "Badrinath",
    type: "Vishnu Temple",
    description: "One of the Char Dhams, dedicated to Lord Vishnu at 3,133m altitude.",
  },
  {
    name: "Haridwar",
    type: "Gateway",
    description: "Where the Ganga enters the plains. Famous for Har Ki Pauri ghat and evening Aarti.",
  },
  {
    name: "Rishikesh",
    type: "Yoga Capital",
    description: "World's yoga capital with ashrams, adventure sports, and Laxman Jhula suspension bridge.",
  },
  {
    name: "Gangotri",
    type: "Origin of Ganga",
    description: "Temple marking the origin of River Ganga, one of the Char Dhams at 3,100m.",
  },
  {
    name: "Yamunotri",
    type: "Origin of Yamuna",
    description: "The source of River Yamuna, first stop of the Char Dham circuit at 3,293m.",
  },
];

export default function UttarakhandPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/pilgrimage/badrinath.jpg"
          alt="Uttarakhand Sacred Himalayan Shrines"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/50 via-midnight/40 to-midnight/80" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold mb-5">
            HIMALAYAN PILGRIMAGES
          </p>
          <h1 className="font-serif text-6xl md:text-7xl text-white font-normal leading-tight tracking-tight mb-6">
            Uttarakhand Yatra
          </h1>
          <p className="font-sans text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
            Sacred journeys through the land of gods — from riverside ghats to snow-clad shrines
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
              { label: "Best Season", value: "May-Jun, Sep-Oct" },
              { label: "Duration", value: "3-13 Days" },
              { label: "Starting Point", value: "Haridwar / Dehradun" },
              { label: "Language", value: "Hindi · Garhwali" },
              { label: "Nearest Airport", value: "Dehradun (DED)" },
              { label: "Max Altitude", value: "3,583 m ASL" },
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
            ABOUT THIS REGION
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal leading-snug mb-6">
            The Land of Gods
          </h2>
          <div className="space-y-5 font-sans text-base text-midnight/70 leading-relaxed">
            <p>
              Uttarakhand, literally meaning &quot;Northern Land,&quot; is aptly called Devbhumi — the Land of Gods. 
              This Himalayan state is home to some of Hinduism&apos;s most sacred shrines, including the renowned 
              Char Dham circuit comprising Yamunotri, Gangotri, Kedarnath, and Badrinath.
            </p>
            <p>
              The pilgrimage season typically runs from late April to early November, as winter brings heavy snowfall 
              that makes the high-altitude shrines inaccessible. The journey combines spiritual devotion with 
              breathtaking mountain scenery, as pilgrims traverse winding Himalayan roads and trek through pine forests.
            </p>
            <p>
              Haridwar and Rishikesh serve as gateways to these sacred circuits. Haridwar, where the Ganga enters 
              the plains, hosts millions during the Kumbh Mela. Rishikesh, the yoga capital, offers both spiritual 
              retreats and adventure activities along the Ganga&apos;s rapids.
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
            The Uttarakhand Experience
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
            Choose Your Himalayan Journey
          </h2>
          <p className="font-sans text-base text-midnight/50 text-center mb-14 max-w-2xl mx-auto leading-relaxed">
            From riverside spiritual retreats to high-altitude shrine visits — customized itineraries for every pilgrim
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* UK 01 - Budget */}
            <div className="bg-white rounded-md overflow-hidden shadow-ambient transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,31,63,0.15)] hover:-translate-y-2">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-midnight/50 font-semibold">
                    UK 01
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-midnight font-normal mb-2">
                  Haridwar-Rishikesh Circuit
                </h3>
                <p className="font-sans text-sm text-midnight/50 mb-6">3 Nights / 4 Days</p>
                
                <div className="mb-8">
                  <p className="font-serif text-4xl text-gold-dark font-normal mb-1">₹15,000</p>
                  <p className="font-sans text-xs text-midnight/40">per person · twin sharing</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "3 nights hotel accommodation",
                    "Har Ki Pauri Ganga Aarti",
                    "Rishikesh temple & ashram visits",
                    "Laxman Jhula sightseeing",
                    "All transfers included",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 font-sans text-sm text-midnight/70">
                      <span className="text-gold-dark mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/yatra/uttarakhand/uk-01"
                  className="block text-center font-sans text-xs tracking-[0.15em] uppercase font-semibold py-3.5 border border-gold-dark text-gold-dark hover:bg-gold-dark hover:text-white transition-colors duration-300 rounded-sm"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* UK 02 - Featured (Do Dham) */}
            <div className="bg-surface-container-lowest rounded-md overflow-hidden relative md:-mt-6 md:mb-6 border-2 border-secondary shadow-[0_20px_70px_rgba(115,92,0,0.25)] transition-all duration-500 hover:shadow-[0_30px_90px_rgba(115,92,0,0.35)] hover:-translate-y-3 hover:border-secondary-container">
              <div className="absolute top-0 left-0 right-0 bg-secondary text-midnight font-sans text-[9px] font-bold tracking-[0.25em] uppercase px-4 py-2.5 text-center">
                Most Popular
              </div>
              <div className="p-8 pt-14 bg-gradient-to-br from-secondary/5 to-transparent">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-secondary font-semibold">
                    UK 02
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-midnight font-medium mb-2">
                  Do Dham Yatra
                </h3>
                <p className="font-sans text-sm text-midnight/50 mb-6">6 Nights / 7 Days</p>
                
                <div className="mb-8">
                  <p className="font-serif text-5xl text-secondary font-normal mb-1">₹28,000</p>
                  <p className="font-sans text-xs text-midnight/40">per person · twin sharing</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "6 nights accommodation (Haridwar, Guptkashi, Badrinath)",
                    "Kedarnath trek/pony arrangements",
                    "Badrinath temple darshan",
                    "Mana Village visit (last Indian village)",
                    "Haridwar-Rishikesh sightseeing",
                    "All meals · AC vehicle transfers",
                    "Experienced guide throughout",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 font-sans text-sm text-midnight/75">
                      <span className="text-secondary mt-1 text-base">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/yatra/uttarakhand/uk-02"
                  className="block text-center font-sans text-xs tracking-[0.15em] uppercase font-semibold py-4 bg-secondary text-midnight hover:bg-secondary-container transition-colors duration-300 rounded-sm shadow-md"
                >
                  View Details
                </Link>
              </div>
            </div>

            {/* UK 03 - Kedarnath Special */}
            <div className="bg-white rounded-md overflow-hidden shadow-ambient transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,31,63,0.15)] hover:-translate-y-2">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-midnight/50 font-semibold">
                    UK 03
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-midnight font-normal mb-2">
                  Kedarnath Special
                </h3>
                <p className="font-sans text-sm text-midnight/50 mb-6">4 Nights / 5 Days</p>
                
                <div className="mb-8">
                  <p className="font-serif text-4xl text-gold-dark font-normal mb-1">₹22,000</p>
                  <p className="font-sans text-xs text-midnight/40">per person · twin sharing</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "4 nights accommodation",
                    "Focus on Kedarnath Jyotirlinga",
                    "Trek/pony/helicopter options",
                    "Guptkashi · Sonprayag",
                    "Haridwar Ganga Aarti",
                    "All meals & transfers",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 font-sans text-sm text-midnight/70">
                      <span className="text-gold-dark mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/yatra/uttarakhand/uk-03"
                  className="block text-center font-sans text-xs tracking-[0.15em] uppercase font-semibold py-3.5 border border-gold-dark text-gold-dark hover:bg-gold-dark hover:text-white transition-colors duration-300 rounded-sm"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>

          <p className="font-sans text-xs text-midnight/40 text-center mt-12 leading-relaxed">
            All prices are per person on twin sharing basis. Single supplement charges apply. For Char Dham (all 4 shrines), see our dedicated <Link href="/yatra/char-dham" className="text-gold-dark hover:underline">Char Dham Yatra page</Link>.
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
            Six Sacred Sites of Uttarakhand
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

      {/* Best Time to Visit */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-4xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4 text-center">
            BEST TIME TO VISIT
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal text-center mb-14 leading-snug">
            When to Plan Your Uttarakhand Yatra
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                status: "Best Time",
                months: "May — June",
                description: "Shrines open, pleasant weather, clear mountain views. Peak pilgrimage season begins.",
                color: "bg-[#dcfce7] text-[#15803d]",
              },
              {
                status: "Good Time",
                months: "September — October",
                description: "Post-monsoon clarity, fewer crowds, stable weather before winter closure.",
                color: "bg-gold-muted text-gold-dark",
              },
              {
                status: "Closed",
                months: "November — April",
                description: "High-altitude shrines closed due to heavy snowfall. Only Haridwar-Rishikesh accessible.",
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
                q: "When do the Char Dham shrines open?",
                a: "The shrines typically open in late April/early May (around Akshaya Tritiya) and close in early November (around Diwali/Bhai Dooj) due to heavy Himalayan winter snowfall. Exact dates vary yearly.",
              },
              {
                q: "What's the difference between Do Dham and Char Dham?",
                a: "Do Dham covers two shrines (usually Kedarnath-Badrinath) in 6-7 days. Char Dham covers all four (Yamunotri, Gangotri, Kedarnath, Badrinath) in 10-13 days. Do Dham is ideal for those with time or fitness constraints.",
              },
              {
                q: "How difficult is the Kedarnath trek?",
                a: "Kedarnath requires a 16km trek from Gaurikund. It's moderately difficult with steep sections. Options: walk, hire pony (₹1500-2000), use palki/doli, or take helicopter from Phata/Sersi. Good fitness helps but not mandatory.",
              },
              {
                q: "Are helicopter services available?",
                a: "Yes, helicopter services operate from Phata, Sersi, and Guptkashi to Kedarnath (₹6000-8000 per person). We can arrange helicopter bookings with advance notice. Subject to weather conditions.",
              },
              {
                q: "What should I pack for Uttarakhand?",
                a: "Layered clothing (warm jackets even in summer), comfortable trekking shoes, raincoat, sunscreen, basic medicines, ID proof, flashlight. Temperatures drop significantly at high altitudes (0-15°C even in May-June).",
              },
              {
                q: "Can I customize the itinerary?",
                a: "Absolutely! We offer complete customization — skip Yamunotri/Gangotri for Do Dham only, add Haridwar-Rishikesh days, arrange helicopter for Kedarnath, or choose hotel categories. WhatsApp us: +91 72001 18411.",
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
              Ready for Your <span className="italic text-gold">Himalayan Journey</span>?
            </p>
            <p className="font-sans text-sm text-white/60">Packages starting from ₹15,000</p>
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
