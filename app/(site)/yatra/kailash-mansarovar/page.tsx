import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PersonaHighlights, KailashFaq } from "@/components/sections";

export const metadata: Metadata = {
  title: "Kailash Mansarovar Yatra — The Ultimate Pilgrimage",
  description:
    "Complete Kailash Mansarovar Yatra packages. Experience the sacred parikrama of Mount Kailash and the holy bath in Mansarovar Lake. Helicopter and overland options with 24/7 medical support. Packages start from ₹1,65,000.",
};

const PACKAGE_HIGHLIGHTS = [
  { icon: "🚁", label: "Helicopter Transfer", detail: "Simikot ↔ Hilsa (chartered)" },
  { icon: "🏔️", label: "Kailash Parikrama", detail: "Full 52km outer circuit" },
  { icon: "🌊", label: "Mansarovar Lake", detail: "Holy bath & morning puja" },
  { icon: "🩺", label: "Medical Support", detail: "Oxygen, oximeters, 24/7" },
  { icon: "🍽️", label: "Satvik Meals", detail: "Fresh, vegetarian, all days" },
  { icon: "📋", label: "Permits & Visas", detail: "Tibet group visa managed" },
  { icon: "🏨", label: "Accommodation", detail: "All nights, twin-sharing" },
  { icon: "🧭", label: "Expert Guides", detail: "Sherpas & spiritual guides" },
];

const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    initials: "RK",
    location: "Mumbai",
    rating: 5,
    text: "A life-changing experience. The Nithyeshwar team handled everything perfectly—from military permits in Purang to high-altitude sherpa support. The spiritual journey was completely worry-free."
  },
  {
    name: "Priya & Amit Sharma",
    initials: "PA",
    location: "Delhi",
    rating: 5,
    text: "As a couple, we felt completely safe and supported. The guides were exceptionally knowledgeable about the history of Rakshas Tal and Mansarovar. The medical checks twice daily were very reassuring."
  },
  {
    name: "Dr. Venkatesh Iyer",
    initials: "VI",
    location: "Bangalore",
    rating: 5,
    text: "At 65, I was deeply concerned about crossing Dolma La Pass at 5,630m. The team's oxygen backup, slow-paced itinerary, and caring Sherpas made this dream possible. Exceptional service for seniors."
  },
];

const FAQS = [
  {
    q: "What is the best time to undertake the Kailash Mansarovar Yatra?",
    a: "The yatra operates from mid-May to September. June, July, and August offer the clearest weather, while September offers crisper views and fewer crowds before the winter freeze starts."
  },
  {
    q: "What physical fitness level is required?",
    a: "The yatra reaches a peak altitude of 5,630m at Dolma La Pass. You should be in good cardiovascular health. We recommend starting aerobic training, walking 5-6 km daily, and breathing exercises 2-3 months prior."
  },
  {
    q: "How does the helicopter route differ from the overland route?",
    a: "The helicopter route (KMY-01) flies from Simikot to Hilsa, skipping 3-4 days of rough driving on unpaved roads. The overland route (KMY-03) goes via the Keyrong border in Nepal by coach, which takes longer but offers a gradual altitude ascent."
  },
  {
    q: "What medical arrangements are provided for altitude safety?",
    a: "We provide comprehensive medical backup. Our support teams carry pressurized oxygen cylinders, oximeters to check blood oxygen levels twice daily, altitude sickness medication (Diamox), and emergency evacuation protocols."
  },
  {
    q: "What dietary options are available during the pilgrimage?",
    a: "Our private culinary team travels with the group. We serve 100% vegetarian Satvik meals—prepared fresh daily, mild in spices, and high in nutrition to assist with high-altitude digestion."
  }
];

export default function KailashMansarovarPage() {
  return (
    <div className="bg-surface min-h-screen">
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden" aria-label="Hero — Mount Kailash Expedition">
        <Image
          src="/images/pilgrimage/hero-kailash.png"
          alt="Mount Kailash peak rising majestically against a dark sky"
          fill
          sizes="100vw"
          className="object-cover animate-[fadeIn_1.2s_ease-out]"
          priority
          quality={95}
        />
        {/* Navy-Tinted Luxury Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/80 to-midnight/15" aria-hidden="true" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <span className="font-sans text-xs font-bold tracking-[0.35em] uppercase text-gold mb-4 block">
              THE ULTIMATE SPIRITUAL FRONTIER
            </span>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-[0.95] font-light">
              Kailash
              <br />
              Mansarovar
            </h1>
            <p className="font-serif text-xl md:text-2xl text-white/95 mb-6 font-light leading-tight">
              A journey beyond the physical realm, into the dwelling place of Shiva.
            </p>
            <p className="font-sans text-sm md:text-base text-white/70 mb-10 leading-relaxed max-w-xl">
              Circumambulate Mount Kailash (6,714m) and cleanse your spirit in the holy waters of Lake Mansarovar. Experience a meticulously curated pilgrimage balancing deep devotion with modern expedition safety.
            </p>

            {/* Micro Stats Row */}
            <div className="flex flex-wrap items-center gap-6 mb-10 font-sans text-xs md:text-sm text-white/80">
              <div className="flex items-center gap-2">
                <span className="text-white/40">Peak Altitude:</span>
                <span className="font-semibold text-gold">5,630m (Dolma La)</span>
              </div>
              <div className="w-px h-4 bg-white/20" aria-hidden="true" />
              <div className="flex items-center gap-2">
                <span className="text-white/40">Duration:</span>
                <span className="font-semibold text-gold">11–13 Days</span>
              </div>
              <div className="w-px h-4 bg-white/20" aria-hidden="true" />
              <div className="flex items-center gap-2">
                <span className="text-white/40">Difficulty:</span>
                <span className="font-semibold text-gold">Challenging</span>
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
                href="/inquiry?package=KMY-General"
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

      {/* 2. Why Choose Us — GT Holidays Style Trust Section */}
      <section className="py-20 px-6 bg-white border-b border-midnight/5" aria-label="Why choose Nithyeshwar Tours">
        <div className="max-w-7xl mx-auto">

          {/* 4-column card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-midnight/8 rounded-xl overflow-hidden">

            {/* Card 1 — Pilgrims */}
            <div className="flex flex-col items-center text-center p-10 border-r border-midnight/8 last:border-r-0 bg-white hover:bg-surface-low hover:-translate-y-1 hover:shadow-ambient transition-all duration-300">
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
              <p className="font-sans text-xs text-midnight/50 leading-relaxed">For over three decades, we have safely guided over one lakh devotees on high-altitude pilgrimage journeys.</p>
            </div>

            {/* Card 2 — Completion */}
            <div className="flex flex-col items-center text-center p-10 border-r border-midnight/8 last:border-r-0 bg-white hover:bg-surface-low hover:-translate-y-1 hover:shadow-ambient transition-all duration-300">
              <div className="w-16 h-16 mb-6 flex items-center justify-center">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="#9a7c2e" strokeWidth="1.4" aria-hidden="true">
                  <path d="M26 6L32 18l13 2-9.5 9.2 2.2 13L26 36l-11.7 6.2 2.2-13L7 20l13-2z" />
                  <path d="M18 34l-5 10M34 34l5 10" strokeDasharray="2 2" />
                </svg>
              </div>
              <p className="font-serif text-4xl text-midnight font-normal leading-none mb-1">98%</p>
              <p className="font-serif text-base text-midnight/80 font-normal mb-3">Yatra Completion Rate</p>
              <p className="font-sans text-xs text-midnight/50 leading-relaxed">Our meticulous acclimatisation planning and medical support ensures almost every pilgrim completes the Parikrama.</p>
            </div>

            {/* Card 3 — Medical */}
            <div className="flex flex-col items-center text-center p-10 border-r border-midnight/8 last:border-r-0 bg-white hover:bg-surface-low hover:-translate-y-1 hover:shadow-ambient transition-all duration-300">
              <div className="w-16 h-16 mb-6 flex items-center justify-center">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="#9a7c2e" strokeWidth="1.4" aria-hidden="true">
                  <rect x="10" y="10" width="32" height="32" rx="6" />
                  <path d="M26 18v16M18 26h16" />
                  <circle cx="26" cy="26" r="18" strokeDasharray="2 3" />
                </svg>
              </div>
              <p className="font-serif text-4xl text-midnight font-normal leading-none mb-1">24/7</p>
              <p className="font-serif text-base text-midnight/80 font-normal mb-3">Medical Concierge</p>
              <p className="font-sans text-xs text-midnight/50 leading-relaxed">Oxygen cylinders, pulse oximeters, altitude sickness protocol, and emergency evacuation on every single group.</p>
            </div>

            {/* Card 4 — Experience */}
            <div className="flex flex-col items-center text-center p-10 bg-white hover:bg-surface-low hover:-translate-y-1 hover:shadow-ambient transition-all duration-300">
              <div className="w-16 h-16 mb-6 flex items-center justify-center">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="#9a7c2e" strokeWidth="1.4" aria-hidden="true">
                  <path d="M26 6v5M26 41v5M6 26h5M41 26h5" />
                  <circle cx="26" cy="26" r="14" />
                  <path d="M26 18v8l5 3" />
                </svg>
              </div>
              <p className="font-serif text-4xl text-midnight font-normal leading-none mb-1">30+</p>
              <p className="font-serif text-base text-midnight/80 font-normal mb-3">Years of Sacred Service</p>
              <p className="font-sans text-xs text-midnight/50 leading-relaxed">Nithyeshwar Tours has been the most trusted name in Kailash Mansarovar Yatra organisation since 1993.</p>
            </div>

          </div>

        </div>
      </section>


      {/* 3. Sacred Trinity: Storytelling & Inspiration (With Premium Images) */}
      <section className="py-28 px-6 bg-surface" aria-labelledby="trinity-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
              SACRED TEXTS & MYSTERY
            </span>
            <h2 id="trinity-heading" className="font-serif text-4xl md:text-5xl text-midnight font-normal leading-tight">
              The Sacred Trinity of Kailash
            </h2>
            <div className="w-12 h-0.5 bg-gold-dark mx-auto mt-6" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Card 1: Mount Kailash */}
            <article className="flex flex-col bg-white shadow-ambient rounded-md overflow-hidden border border-midnight/5 transition-all duration-300 hover:shadow-card hover:-translate-y-1 hover:border-midnight group">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/images/pilgrimage/kailash_trinity_mount.png"
                  alt="Mount Kailash peak rising in pristine symmetry"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-midnight/10" aria-hidden="true" />
              </div>
              <div className="p-8 flex-1 flex flex-col gap-3">
                <h3 className="font-serif text-2xl text-midnight font-normal leading-snug">
                  The Cosmic Pillar (Mount Kailash)
                </h3>
                <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                  Known as Mt. Meru in Vedic cosmology, the black rock peak of Kailash is the crown chakra of the earth. Unconquered by human feet, it represents pure consciousness, where circumambulation (Parikrama) burns away a lifetime of karma.
                </p>
              </div>
            </article>

            {/* Card 2: Lake Mansarovar */}
            <article className="flex flex-col bg-white shadow-ambient rounded-md overflow-hidden border border-midnight/5 transition-all duration-300 hover:shadow-card hover:-translate-y-1 hover:border-midnight group">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/images/pilgrimage/kailash_trinity_lake.png"
                  alt="Lake Mansarovar blue waters mirroring sky"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-midnight/10" aria-hidden="true" />
              </div>
              <div className="p-8 flex-1 flex flex-col gap-3">
                <h3 className="font-serif text-2xl text-midnight font-normal leading-snug">
                  The Water of Creation (Lake Mansarovar)
                </h3>
                <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                  Created in the mind of Lord Brahma, Mansarovar is the highest freshwater lake on earth. Its pristine turquoise waters mirror the light of the stars at dawn, and a holy dip is said to offer spiritual rebirth.
                </p>
              </div>
            </article>

            {/* Card 3: Parikrama Pilgrims */}
            <article className="flex flex-col bg-white shadow-ambient rounded-md overflow-hidden border border-midnight/5 transition-all duration-300 hover:shadow-card hover:-translate-y-1 hover:border-midnight group">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src="/images/pilgrimage/kailash_trinity_pilgrims.png"
                  alt="Pilgrims walking along the rocky parikrama trail"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-midnight/10" aria-hidden="true" />
              </div>
              <div className="p-8 flex-1 flex flex-col gap-3">
                <h3 className="font-serif text-2xl text-midnight font-normal leading-snug">
                  The Sacred Circuit (Kailash Parikrama)
                </h3>
                <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                  The 52km outer circumambulation of Mount Kailash is the most sacred act a pilgrim can undertake. Crossing Dolma La Pass at 5,630m, devotees walk in the footsteps of countless sages, each step dissolving lifetimes of karmic debt.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Interactive Persona Highlights */}
      <PersonaHighlights />

      {/* 4. Journey Timeline Section */}
      <section className="py-28 px-6 bg-surface-low border-y border-midnight/5" aria-labelledby="timeline-heading">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
              THE PHYSICAL PATHWAY
            </span>
            <h2 id="timeline-heading" className="font-serif text-4xl text-midnight font-normal leading-tight">
              Route to the Abode of Shiva
            </h2>
            <p className="font-sans text-sm text-midnight/50 mt-4 max-w-md mx-auto">
              A carefully structured altitude adaptation path designed to ensure maximum health and safety.
            </p>
          </div>

          <div className="relative pl-0">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gold-dark/20 -translate-x-1/2" aria-hidden="true" />

            <ol className="space-y-16" role="list">
              {/* Step 1 */}
              <li className="relative grid grid-cols-[48px_1fr] md:grid-cols-[1fr_80px_1fr] items-start md:items-center gap-4 md:gap-0">
                <div className="order-2 md:order-1 md:text-right md:pr-12">
                  <h3 className="font-serif text-xl text-midnight font-normal mb-2">Kathmandu Arrival & Briefing</h3>
                  <p className="font-sans text-sm text-midnight/60 leading-relaxed max-w-sm md:ml-auto">
                    Arrive at Kathmandu (1,300m). Attend a detailed safety briefing and visit the holy Pashupatinath Temple for early blessings.
                  </p>
                </div>
                <div className="order-1 md:order-2 flex justify-center relative z-10">
                  <div className="w-10 h-10 rounded-full bg-midnight border-2 border-gold flex items-center justify-center font-serif text-xs text-gold">1</div>
                </div>
                <div className="hidden md:block md:order-3" />
              </li>

              {/* Step 2 */}
              <li className="relative grid grid-cols-[48px_1fr] md:grid-cols-[1fr_80px_1fr] items-start md:items-center gap-4 md:gap-0">
                <div className="hidden md:block md:order-1" />
                <div className="order-1 md:order-2 flex justify-center relative z-10">
                  <div className="w-10 h-10 rounded-full bg-midnight border-2 border-gold flex items-center justify-center font-serif text-xs text-gold">2</div>
                </div>
                <div className="order-2 md:order-3 md:pl-12">
                  <h3 className="font-serif text-xl text-midnight font-normal mb-2">Acclimatization at Simikot</h3>
                  <p className="font-sans text-sm text-midnight/60 leading-relaxed max-w-sm">
                    Fly to Nepalgunj and onwards to Simikot (2,800m). Spend 24 hours adjusting to the mountain climate in comfortable lodges.
                  </p>
                </div>
              </li>

              {/* Step 3 */}
              <li className="relative grid grid-cols-[48px_1fr] md:grid-cols-[1fr_80px_1fr] items-start md:items-center gap-4 md:gap-0">
                <div className="order-2 md:order-1 md:text-right md:pr-12">
                  <h3 className="font-serif text-xl text-midnight font-normal mb-2">Helicopter to Hilsa Border</h3>
                  <p className="font-sans text-sm text-midnight/60 leading-relaxed max-w-sm md:ml-auto">
                    Board chartered helicopters to Hilsa, bypassing days of strenuous mountain driving. Complete customs and cross into Tibet.
                  </p>
                </div>
                <div className="order-1 md:order-2 flex justify-center relative z-10">
                  <div className="w-10 h-10 rounded-full bg-midnight border-2 border-gold flex items-center justify-center font-serif text-xs text-gold">3</div>
                </div>
                <div className="hidden md:block md:order-3" />
              </li>

              {/* Step 4 */}
              <li className="relative grid grid-cols-[48px_1fr] md:grid-cols-[1fr_80px_1fr] items-start md:items-center gap-4 md:gap-0">
                <div className="hidden md:block md:order-1" />
                <div className="order-1 md:order-2 flex justify-center relative z-10">
                  <div className="w-10 h-10 rounded-full bg-midnight border-2 border-gold flex items-center justify-center font-serif text-xs text-gold">4</div>
                </div>
                <div className="order-2 md:order-3 md:pl-12">
                  <h3 className="font-serif text-xl text-midnight font-normal mb-2">First View of Shiva's Peak</h3>
                  <p className="font-sans text-sm text-midnight/60 leading-relaxed max-w-sm">
                    Drive to Purang and Lake Mansarovar (4,550m). Perform holy rituals and look up to see the breathtaking South Face of Kailash.
                  </p>
                </div>
              </li>

              {/* Step 5 */}
              <li className="relative grid grid-cols-[48px_1fr] md:grid-cols-[1fr_80px_1fr] items-start md:items-center gap-4 md:gap-0">
                <div className="order-2 md:order-1 md:text-right md:pr-12">
                  <h3 className="font-serif text-xl text-midnight font-normal mb-2">The 3-Day Outer Parikrama</h3>
                  <p className="font-sans text-sm text-midnight/60 leading-relaxed max-w-sm md:ml-auto">
                    Trek 52km over 3 days via Yama Dwar, Dirapuk, and cross the challenging Dolma La Pass (5,630m) before returning to Kathmandu.
                  </p>
                </div>
                <div className="order-1 md:order-2 flex justify-center relative z-10">
                  <div className="w-10 h-10 rounded-full bg-midnight border-2 border-gold flex items-center justify-center font-serif text-xs text-gold">5</div>
                </div>
                <div className="hidden md:block md:order-3" />
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* 5. Premium Package Cards */}
      <section className="py-28 px-6 bg-surface" id="packages" aria-labelledby="packages-heading">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
              THE PILGRIMAGE PACKAGES
            </span>
            <h2 id="packages-heading" className="font-serif text-4xl md:text-5xl text-midnight font-normal leading-tight">
              Kailash Mansarovar Yatra Paths
            </h2>
            <p className="font-sans text-sm text-midnight/50 mt-4">
              Select your definitive path to the Abode of Shiva — inclusive of all transfers, permits, meals, and medical support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Package 1: Helicopter Route */}
            <article className="flex flex-col bg-white rounded-md border border-midnight/5 shadow-card hover:-translate-y-1.5 hover:shadow-ambient hover:border-midnight transition-all duration-300">
              {/* Header */}
              <div className="p-8 border-b border-midnight/5 bg-surface-low/30">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-gold-dark uppercase bg-gold-muted/40 px-3 py-1 rounded-full">
                    🚀 HELICOPTER ROUTE
                  </span>
                  <span className="font-sans text-xs font-medium text-midnight/50 tracking-wide">
                    10 Nights / 11 Days
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-midnight font-normal leading-snug mb-2">
                  Premium Helicopter Expedition
                </h3>
                <p className="font-sans text-[11px] text-midnight/50 tracking-[0.2em] uppercase mb-6 font-medium">
                  Kathmandu · Simikot · Hilsa · Mansarovar · Kailash
                </p>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-sans text-xs text-midnight/50 font-light">From</span>
                  <span className="font-serif text-3xl font-normal text-gold-dark leading-none">
                    ₹1,85,000
                  </span>
                  <span className="font-sans text-xs text-midnight/45 ml-1 font-light">per pilgrim</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 flex-1 flex flex-col justify-between gap-7">
                <p className="font-sans text-sm text-midnight/60 leading-relaxed font-light">
                  Our fastest and most convenient route. Bypass days of strenuous mountain driving with chartered helicopter transfers, ideal for senior citizens and families seeking maximum safety.
                </p>

                <div>
                  <p className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-5">
                    Package Highlights
                  </p>
                  <ul className="space-y-3.5">
                    {[
                      "Helicopter Transfer — Simikot ↔ Hilsa (chartered)",
                      "Full 52km Kailash Outer Parikrama",
                      "Holy Bath & Morning Puja at Lake Mansarovar",
                      "24/7 Medical Support — Oxygen & Evacuation Coordinates",
                      "Premium Accommodation & Fresh Satvik Meals",
                      "Tibet Group Visa & Military Permit Management",
                    ].map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-gold-dark flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-sans text-sm text-midnight/75 font-light leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="font-sans text-xs text-midnight/40 leading-relaxed border-t border-midnight/5 pt-5 font-light italic">
                  Best for: Seniors, Families, and Travelers with time constraints.
                </p>
              </div>

              {/* Footer */}
              <div className="p-8 border-t border-midnight/5 bg-surface-low/30">
                <Link
                  href="/yatra/kailash-mansarovar/kmy-01"
                  className="block w-full text-center bg-midnight text-white font-sans text-sm font-semibold py-4 rounded hover:bg-navy transition-all duration-300 min-h-11 tracking-widest uppercase"
                >
                  View Details
                </Link>
              </div>
            </article>

            {/* Package 2: Overland Coach Route */}
            <article className="flex flex-col bg-white rounded-md border border-midnight/5 shadow-card hover:-translate-y-1.5 hover:shadow-ambient hover:border-midnight transition-all duration-300">
              {/* Header */}
              <div className="p-8 border-b border-midnight/5 bg-surface-low/30">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-gold-dark uppercase bg-gold-muted/40 px-3 py-1 rounded-full">
                    🚌 OVERLAND ROUTE
                  </span>
                  <span className="font-sans text-xs font-medium text-midnight/50 tracking-wide">
                    12 Nights / 13 Days
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-midnight font-normal leading-snug mb-2">
                  Classic Overland Coach Yatra
                </h3>
                <p className="font-sans text-[11px] text-midnight/50 tracking-[0.2em] uppercase mb-6 font-medium">
                  Kathmandu · Keyrong · Saga · Mansarovar · Kailash
                </p>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-sans text-xs text-midnight/50 font-light">From</span>
                  <span className="font-serif text-3xl font-normal text-gold-dark leading-none">
                    ₹1,45,000
                  </span>
                  <span className="font-sans text-xs text-midnight/45 ml-1 font-light">per pilgrim</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 flex-1 flex flex-col justify-between gap-7">
                <p className="font-sans text-sm text-midnight/60 leading-relaxed font-light">
                  A gradual altitude adaptation pathway driving through beautiful Tibetan plateaus. A cost-effective, budget-conscious option perfect for vloggers, spiritual seekers, and seasoned hikers.
                </p>

                <div>
                  <p className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-5">
                    Package Highlights
                  </p>
                  <ul className="space-y-3.5">
                    {[
                      "Gradual Ascent via Keyrong Border by Coach",
                      "Full 52km Kailash Outer Parikrama",
                      "Holy Bath & Morning Puja at Lake Mansarovar",
                      "Standard Medical Backup & Oxygen cylinders",
                      "Comfortable Guesthouses & Fresh Satvik Meals",
                      "Tibet Group Visa & Military Permit Management",
                    ].map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <svg className="w-4 h-4 text-gold-dark flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-sans text-sm text-midnight/75 font-light leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="font-sans text-xs text-midnight/40 leading-relaxed border-t border-midnight/5 pt-5 font-light italic">
                  Best for: Budget-conscious travelers, Vloggers, and Avid trekkers.
                </p>
              </div>

              {/* Footer */}
              <div className="p-8 border-t border-midnight/5 bg-surface-low/30">
                <Link
                  href="/yatra/kailash-mansarovar/kmy-03"
                  className="block w-full text-center bg-midnight text-white font-sans text-sm font-semibold py-4 rounded hover:bg-navy transition-all duration-300 min-h-11 tracking-widest uppercase"
                >
                  View Details
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 6. Expedition Standards (Support - Changed from Dark Navy to Light Premium Gold Accented Card) */}
      <section className="py-28 px-6 bg-surface-low border-y border-midnight/5" aria-labelledby="standards-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
              THE NITHYESHWAR STANDARD
            </span>
            <h2 id="standards-heading" className="font-serif text-4xl md:text-5xl text-midnight font-normal leading-tight">
              Safety & Devotion Hand in Hand
            </h2>
            <p className="font-sans text-sm text-midnight/55 mt-4">
              High-altitude pilgrimages require extreme preparation. We bring medical security and home comfort to the roof of the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Standard 1 */}
            <article className="flex flex-col gap-5 p-8 bg-white border border-gold-dark/10 rounded shadow-ambient hover:shadow-card hover:-translate-y-1 hover:border-gold-dark/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gold-dark/5 flex items-center justify-center border border-gold-dark/15">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#735c00" strokeWidth="1.75" aria-hidden="true">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-midnight font-medium">Wilderness Medical Support</h3>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                Oxygen cylinders, daily blood oxygen checks, emergency medicine kits, and on-call air evacuation coordinates accompany every single group.
              </p>
            </article>

            {/* Standard 2 */}
            <article className="flex flex-col gap-5 p-8 bg-white border border-gold-dark/10 rounded shadow-ambient hover:shadow-card hover:-translate-y-1 hover:border-gold-dark/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gold-dark/5 flex items-center justify-center border border-gold-dark/15">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#735c00" strokeWidth="1.75" aria-hidden="true">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-midnight font-medium">Fresh Satvik Vegetarian Meals</h3>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                Our own culinary crew travels with you, serving hot, nutritious, non-spicy vegetarian meals that aid digestion at 4,500m+ altitudes.
              </p>
            </article>

            {/* Standard 3 */}
            <article className="flex flex-col gap-5 p-8 bg-white border border-gold-dark/10 rounded shadow-ambient hover:shadow-card hover:-translate-y-1 hover:border-gold-dark/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gold-dark/5 flex items-center justify-center border border-gold-dark/15">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#735c00" strokeWidth="1.75" aria-hidden="true">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-midnight font-medium">Permit & Visa Management</h3>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                We handle the complex military permit documentation, border checkpoints, and Tibet Group visa requirements seamlessly.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 7. Image Gallery Section (Real dedicated pictures used) */}
      <section className="py-28 px-6 bg-white" aria-labelledby="gallery-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
              VISUAL REVERENCE
            </span>
            <h2 id="gallery-heading" className="font-serif text-4xl text-midnight font-normal leading-tight">
              Glances of the Sacred Heights
            </h2>
            <div className="w-12 h-0.5 bg-gold-dark mx-auto mt-6" aria-hidden="true" />
          </div>

          {/* Bento-Style Gallery Grid with Real Dedicated Photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[720px] md:h-[520px]">
            {/* Left wide card - Mountain Kailash Wide */}
            <div className="relative col-span-1 md:col-span-2 h-full overflow-hidden rounded shadow-ambient group">
              <Image
                src="/images/pilgrimage/gallery_kailash_wide.png"
                alt="Panoramic wide shot of the snow-clad Mount Kailash peak under blue sky"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-midnight/80 to-transparent p-6 text-white">
                <p className="font-serif text-xl">The Eternal Pinnacle</p>
                <p className="font-sans text-xs text-white/70">Mount Kailash Peak (6,714m)</p>
              </div>
            </div>

            {/* Right stacked cards */}
            <div className="grid grid-rows-2 gap-6 h-full">
              {/* Lake Mansarovar */}
              <div className="relative h-full overflow-hidden rounded shadow-ambient group">
                <Image
                  src="/images/pilgrimage/gallery_mansarovar.png"
                  alt="Holy waters of Lake Mansarovar mirroring light"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-midnight/80 to-transparent p-4 text-white">
                  <p className="font-serif text-base">Lake Mansarovar</p>
                </div>
              </div>
              
              {/* Helicopter */}
              <div className="relative h-full overflow-hidden rounded shadow-ambient group">
                <Image
                  src="/images/pilgrimage/gallery_helicopter.png"
                  alt="Chartered helicopter for Simikot-Hilsa transit"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-midnight/80 to-transparent p-4 text-white">
                  <p className="font-serif text-base">Heli-Transit Route</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lower gallery grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Pilgrims */}
            <div className="relative h-64 overflow-hidden rounded shadow-ambient group">
              <Image
                src="/images/pilgrimage/gallery_pilgrims.png"
                alt="Devotees hiking on the Parikrama route"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-midnight/80 to-transparent p-4 text-white">
                <p className="font-serif text-base">The Parikrama Path</p>
              </div>
            </div>

            {/* Prayers */}
            <div className="relative h-64 overflow-hidden rounded shadow-ambient group">
              <Image
                src="/images/pilgrimage/gallery_prayer.png"
                alt="Colorful Buddhist prayer flags flutter against mountain background"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-midnight/80 to-transparent p-4 text-white">
                <p className="font-serif text-base">Tibetan Prayers</p>
              </div>
            </div>

            {/* Accommodation */}
            <div className="relative h-64 overflow-hidden rounded shadow-ambient group">
              <Image
                src="/images/pilgrimage/gallery_accommodation.png"
                alt="Inside a premium guest house basecamp"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-midnight/80 to-transparent p-4 text-white">
                <p className="font-serif text-base">Basecamp Shelters</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Pilgrim Stories Section (Polished with profile initials badges) */}
      <section className="py-28 px-6 bg-surface-low border-t border-midnight/5" aria-labelledby="stories-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
              VOICES OF GRACE
            </span>
            <h2 id="stories-heading" className="font-serif text-4xl text-midnight font-normal leading-tight">
              Testimonials from the Path
            </h2>
            <div className="w-12 h-0.5 bg-gold-dark mx-auto mt-6" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <article
                key={i}
                className="bg-white p-8 rounded border border-midnight/5 shadow-ambient hover:-translate-y-1 hover:shadow-card hover:border-midnight transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-5" aria-label={`Rating: ${t.rating} stars`}>
                    {[...Array(t.rating)].map((_, idx) => (
                      <span key={idx} className="text-gold text-lg">★</span>
                    ))}
                  </div>
                  <p className="font-sans text-sm text-[#43474e] leading-relaxed italic mb-8">
                    "{t.text}"
                  </p>
                </div>
                <div className="border-t border-midnight/5 pt-5 flex items-center gap-4">
                  {/* Circle initials badge for social proof */}
                  <div className="w-10 h-10 rounded-full bg-gold-dark/15 border border-gold-dark/30 flex items-center justify-center font-sans text-xs font-bold text-gold-dark">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-midnight">{t.name}</p>
                    <p className="font-sans text-xs text-midnight/50 mt-0.5">{t.location}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ Section (Ends cleanly, goes FAQ -> Footer) */}
      <section className="py-28 px-6 bg-surface border-t border-midnight/5 pb-36" aria-labelledby="faq-title">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
              QUESTIONS & CLARITY
            </span>
            <h2 id="faq-title" className="font-serif text-4xl text-midnight font-normal leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Interactive Custom Accordion List */}
          <KailashFaq faqs={FAQS} />
        </div>
      </section>
    </div>
  );
}
