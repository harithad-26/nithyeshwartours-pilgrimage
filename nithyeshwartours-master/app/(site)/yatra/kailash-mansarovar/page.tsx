import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kailash Mansarovar Yatra — The Ultimate Pilgrimage",
  description:
    "Complete Kailash Mansarovar Yatra packages via Kathmandu. Experience the sacred parikrama and Mansarovar Lake. Road and helicopter options available. Starting from ₹1,85,000.",
};

const EXPERIENCES = [
  {
    icon: "🏔️",
    title: "Mt. Kailash Parikrama",
    description: "Complete the 52 km sacred circumambulation at 5,630m altitude — a journey that absolves sins of a lifetime.",
  },
  {
    icon: "💧",
    title: "Mansarovar Lake",
    description: "Experience the pristine turquoise waters at 4,550m — the highest freshwater lake, created by Lord Brahma.",
  },
  {
    icon: "🚁",
    title: "Helicopter Route",
    description: "Fly from Simikot to Hilsa, avoiding difficult terrain and reducing journey time significantly.",
  },
  {
    icon: "🙏",
    title: "Spiritual Transformation",
    description: "Walk in the footsteps of ancient sages through the most sacred landscape in Hindu, Buddhist, Jain, and Bon traditions.",
  },
];

const PACKAGES = [
  {
    code: "KMY 01",
    name: "Kailash Yatra — 10 Nights & 11 Days",
    duration: "10N / 11D",
    cities: "Kathmandu, Nepalgunj, Simikot, Purang, Manasarovar, Dirapuk, Zutalpuk",
    themes: "Nature Lovers",
    highlights: [
      "Parikrama of Mount Kailash (52 km)",
      "Holy bath in Mansarovar Lake",
      "Helicopter service Simikot to Hilsa",
      "All meals vegetarian basis"
    ],
    services: ["Flight", "Meal", "Hotel", "Private"],
    bgColor: "bg-[#e8f5e9]", // Light green
    borderColor: "border-[#81c784]",
    textColor: "text-[#2e7d32]"
  },
  {
    code: "KMY 02",
    name: "Kailash Mansarovar — Luxury Route",
    duration: "12N / 13D",
    cities: "Kathmandu, Nepalgunj, Simikot, Purang, Manasarovar, Darchen",
    themes: "Spiritual Seekers",
    highlights: [
      "Extended stay at Mansarovar (2 nights)",
      "Premium helicopter transfers",
      "Luxury accommodation where available",
      "Expert spiritual guide"
    ],
    services: ["Flight", "Meal", "Hotel", "Private"],
    bgColor: "bg-[#e1e3f3]", // Light purple
    borderColor: "border-[#9fa8da]",
    textColor: "text-[#3f51b5]"
  },
  {
    code: "KMY 03",
    name: "Kailash Parikrama Special",
    duration: "11N / 12D",
    cities: "Kathmandu, Simikot, Hilsa, Purang, Manasarovar, Kailash Circuit",
    themes: "Adventure & Spirituality",
    highlights: [
      "Focus on Parikrama experience",
      "Expert Sherpa support team",
      "Medical support with oxygen",
      "Acclimatization at strategic points"
    ],
    services: ["Flight", "Meal", "Hotel", "Guided"],
    bgColor: "bg-[#fff9c4]", // Light yellow
    borderColor: "border-[#fdd835]",
    textColor: "text-[#f57f17]"
  },
  {
    code: "KMY 04",
    name: "Kailash Express — Quick Route",
    duration: "9N / 10D",
    cities: "Kathmandu, Simikot, Hilsa, Manasarovar, Kailash",
    themes: "Time-Conscious Pilgrims",
    highlights: [
      "Faster itinerary with helicopter support",
      "Single night at Mansarovar",
      "Parikrama in 3 days",
      "Ideal for limited time availability"
    ],
    services: ["Flight", "Meal", "Hotel", "Express"],
    bgColor: "bg-[#e8f5e9]", // Light green
    borderColor: "border-[#81c784]",
    textColor: "text-[#2e7d32]"
  },
  {
    code: "KMY 05",
    name: "Kailash Mansarovar — Road Journey",
    duration: "13N / 14D",
    cities: "Kathmandu, Kerung, Saga, Paryang, Mansarovar, Darchen",
    themes: "Traditional Route Lovers",
    highlights: [
      "Complete road journey from Kathmandu",
      "Gradual acclimatization",
      "Experience Tibetan countryside",
      "Panoramic mountain views"
    ],
    services: ["Bus", "Meal", "Hotel", "Group"],
    bgColor: "bg-[#e1e3f3]", // Light purple
    borderColor: "border-[#9fa8da]",
    textColor: "text-[#3f51b5]"
  },
  {
    code: "KMY 06",
    name: "Kailash Yatra — VIP Package",
    duration: "11N / 12D",
    cities: "Kathmandu, Nepalgunj, Simikot, Hilsa, Manasarovar, Kailash",
    themes: "Premium Experience",
    highlights: [
      "Best available accommodation",
      "Priority helicopter bookings",
      "Personal guide and porter support",
      "Premium meal arrangements"
    ],
    services: ["Flight", "Premium Meal", "Best Hotel", "Private"],
    bgColor: "bg-[#fff9c4]", // Light yellow
    borderColor: "border-[#fdd835]",
    textColor: "text-[#f57f17]"
  },
  {
    code: "KMY 07",
    name: "Kailash Mansarovar — Group Yatra",
    duration: "10N / 11D",
    cities: "Kathmandu, Nepalgunj, Simikot, Purang, Manasarovar, Kailash",
    themes: "Group Travelers",
    highlights: [
      "Cost-effective group package",
      "Shared accommodation",
      "Group spiritual activities",
      "Fellowship with fellow pilgrims"
    ],
    services: ["Flight", "Meal", "Shared Hotel", "Group"],
    bgColor: "bg-[#e8f5e9]", // Light green
    borderColor: "border-[#81c784]",
    textColor: "text-[#2e7d32]"
  },
];

export default function KailashMansarovarPage() {
  return (
    <>
      {/* Hero - More Dramatic */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/pilgrimage/badrinath.jpg"
          alt="Mount Kailash and Mansarovar Lake"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/60 via-midnight/30 to-midnight/90" />
        
        {/* Floating elements for depth */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold/30 rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-gold/40 rounded-full"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
          <div className="mb-8 inline-block">
            <span className="font-sans text-xs font-bold tracking-[0.4em] uppercase text-gold bg-gold/10 backdrop-blur-sm px-6 py-2 rounded-full border border-gold/30">
              The Ultimate Pilgrimage
            </span>
          </div>
          
          <h1 className="font-serif text-6xl md:text-8xl text-white font-light leading-[0.95] tracking-tight mb-8 drop-shadow-2xl">
            Kailash<br/>
            <span className="text-gold-light font-normal italic">Mansarovar</span>
          </h1>
          
          <p className="font-sans text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-4 font-light">
            Where the earth touches heaven
          </p>
          <p className="font-sans text-base text-white/70 leading-relaxed max-w-2xl mx-auto mb-12">
            The sacred abode of Lord Shiva at 6,714m — a journey that transforms body, mind, and soul
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#package"
              className="group inline-flex items-center gap-3 font-sans text-sm font-semibold bg-gold text-midnight px-10 py-5 rounded-full hover:bg-gold-light hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <span>Explore the Journey</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="https://wa.me/917200118411"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium text-white border-2 border-white/40 backdrop-blur-sm px-10 py-5 rounded-full hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Quick Inquiry
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts - Visual Cards Instead of Table */}
      <section className="py-16 px-6 bg-midnight -mt-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: "Duration", value: "11 Days", icon: "📅" },
              { label: "Start", value: "Kathmandu", icon: "📍" },
              { label: "Season", value: "May-Sep", icon: "🌤️" },
              { label: "Altitude", value: "5,630m", icon: "⛰️" },
              { label: "Trek", value: "52 km", icon: "🥾" },
              { label: "Level", value: "Challenging", icon: "💪" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10 hover:bg-white/10 hover:border-gold/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="font-sans text-xs text-gold uppercase tracking-wider mb-1.5 font-medium">
                  {item.label}
                </p>
                <p className="font-serif text-lg text-white font-medium leading-tight">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Yatra - Storytelling Format */}
      <section className="py-24 px-6 bg-gradient-to-b from-surface to-white" id="story">
        <div className="max-w-6xl mx-auto">
          {/* Opening Hook */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-midnight font-light leading-tight mb-6">
              A Journey Beyond <span className="italic text-gold-dark font-normal">Time & Space</span>
            </h2>
            <p className="font-sans text-xl text-midnight/60 leading-relaxed">
              This is not a trek. This is not a tour. This is a pilgrimage that has drawn seekers for over a thousand years.
            </p>
          </div>

          {/* Visual Story Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gold/5 to-transparent p-8 border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500">🏔️</div>
              <h3 className="font-serif text-2xl text-midnight font-medium mb-3">Mount Kailash</h3>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed mb-4">
                Standing at 6,714 meters, Kailash is revered as the spiritual axis of the universe — the eternal throne of Lord Shiva.
              </p>
              <div className="text-gold-dark font-medium text-sm">Four religions. One sacred mountain.</div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent p-8 border border-blue-500/10 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500">💧</div>
              <h3 className="font-serif text-2xl text-midnight font-medium mb-3">Lake Mansarovar</h3>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed mb-4">
                At 4,550m, the world's highest freshwater lake — created from Brahma's mind. A dip here cleanses lifetimes of karma.
              </p>
              <div className="text-blue-600 font-medium text-sm">Pure. Sacred. Transformative.</div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent p-8 border border-orange-500/10 hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500">🙏</div>
              <h3 className="font-serif text-2xl text-midnight font-medium mb-3">The Parikrama</h3>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed mb-4">
                52 km of circumambulation at extreme altitude. Complete it once, and the sins of a lifetime are absolved.
              </p>
              <div className="text-orange-600 font-medium text-sm">3 days. 5,630m altitude. Eternal blessings.</div>
            </div>
          </div>

          {/* Journey Stats - Visual */}
          <div className="bg-gradient-to-r from-midnight to-midnight/95 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="font-serif text-3xl font-light mb-8 text-center">What Awaits You</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: "11", label: "Days of Sacred Journey", icon: "📅" },
                  { number: "52km", label: "Parikrama Distance", icon: "🥾" },
                  { number: "5,630m", label: "Highest Point (Dolma La)", icon: "⛰️" },
                  { number: "∞", label: "Spiritual Transformation", icon: "✨" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-4xl mb-3">{stat.icon}</div>
                    <div className="font-serif text-4xl font-light text-gold-light mb-2">{stat.number}</div>
                    <div className="font-sans text-xs text-white/70 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
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
            The Kailash Experience
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

      {/* Package Cards */}
      <section className="py-20 px-6 bg-surface" id="packages">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4 text-center">
            OUR PACKAGES
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal text-center mb-4 leading-snug">
            Kailash Mansarovar Yatra Options
          </h2>
          <p className="font-sans text-base text-midnight/50 text-center mb-14 max-w-2xl mx-auto leading-relaxed">
            Choose from our carefully curated packages designed for different preferences and requirements
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.code}
                className={`${pkg.bgColor} rounded-2xl overflow-hidden border-2 ${pkg.borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Header Section with Image */}
                <div className="relative h-48 bg-gradient-to-br from-midnight/80 to-midnight/60 overflow-hidden">
                  <Image
                    src="/images/pilgrimage/badrinath.jpg"
                    alt={pkg.name}
                    fill
                    className="object-cover mix-blend-overlay"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="font-serif text-2xl text-white font-medium mb-2 leading-tight">
                      {pkg.name.split('—')[0]}
                    </h3>
                    <p className="font-sans text-sm text-white/80">
                      {pkg.name.split('—')[1] || pkg.name.split('—')[0]}
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Package Code and Duration */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-sans text-xs tracking-[0.2em] uppercase ${pkg.textColor} font-bold`}>
                      {pkg.code}
                    </span>
                    <span className="font-sans text-sm text-midnight/60 font-medium">
                      {pkg.duration}
                    </span>
                  </div>

                  {/* Cities */}
                  <div className="mb-4">
                    <p className="font-sans text-xs text-midnight/50 mb-1">Cities:</p>
                    <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                      {pkg.cities}
                    </p>
                  </div>

                  {/* Themes */}
                  <div className="mb-4">
                    <p className="font-sans text-xs text-midnight/50 mb-1">Themes:</p>
                    <p className={`font-sans text-sm ${pkg.textColor} font-medium`}>
                      {pkg.themes}
                    </p>
                  </div>

                  {/* Package Highlights */}
                  <div className="mb-4">
                    <p className="font-sans text-xs font-bold uppercase text-midnight/70 mb-2 tracking-wide">
                      Package Highlights
                    </p>
                    <ul className="space-y-2">
                      {pkg.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className={`${pkg.textColor} text-xs mt-0.5`}>✓</span>
                          <span className="font-sans text-xs text-midnight/70 leading-relaxed">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Services Icons */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {pkg.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 font-sans text-[10px] font-medium px-3 py-1.5 rounded-full bg-white/60 text-midnight/70 border border-midnight/10"
                      >
                        {service === "Flight" && "✈️"}
                        {service === "Bus" && "🚌"}
                        {service === "Meal" && "🍽️"}
                        {service === "Premium Meal" && "🍽️"}
                        {service === "Hotel" && "🏨"}
                        {service === "Best Hotel" && "🏨"}
                        {service === "Shared Hotel" && "🏨"}
                        {service === "Private" && "🚗"}
                        {service === "Group" && "👥"}
                        {service === "Guided" && "🗺️"}
                        {service === "Express" && "⚡"}
                        <span>{service}</span>
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={`/yatra/kailash-mansarovar/${pkg.code.toLowerCase().replace(' ', '-')}`}
                    className={`block text-center font-sans text-sm tracking-wide font-semibold py-3 px-4 ${pkg.textColor} bg-white/80 hover:bg-white border-2 ${pkg.borderColor} rounded-lg transition-all duration-300 hover:scale-105`}
                  >
                    VIEW DETAILS
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Detailed Itinerary */}
      <section className="py-20 px-6 bg-[#f5f5f0]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-midnight font-normal text-center mb-16 leading-tight">
            10 Nights & 11 Days Journey
          </h2>

          <div className="space-y-3">
            {[
              {
                day: "01",
                city: "Kathmandu",
                title: "Arrival in Kathmandu",
                desc: "Arrive at Tribhuvan International Airport. Transfer to hotel. Evening briefing about the yatra. Overnight at Kathmandu.",
              },
              {
                day: "02",
                city: "Kathmandu",
                title: "Kathmandu Sightseeing",
                desc: "Full day Kathmandu sightseeing by AC vehicle. Visit Pashupatinath Temple, Swayambhunath Stupa, and other heritage sites. Permit processing. Overnight at Kathmandu.",
              },
              {
                day: "03",
                city: "Nepalgunj",
                title: "Kathmandu to Nepalgunj",
                desc: "Morning flight from Kathmandu to Nepalgunj (1 hour). Check-in at hotel. Rest and acclimatization. Overnight at Nepalgunj.",
              },
              {
                day: "04",
                city: "Simikot",
                title: "Nepalgunj to Simikot",
                desc: "Morning flight to Simikot (16-seater aircraft, weather dependent). Altitude 2,950m. Rest and acclimatization. Overnight at Simikot.",
              },
              {
                day: "05",
                city: "Hilsa",
                title: "Simikot to Hilsa by Helicopter",
                desc: "Helicopter transfer from Simikot to Hilsa (5-6 persons capacity). Cross Nepal-Tibet border. Drive to Purang. Immigration formalities. Overnight at Purang.",
              },
              {
                day: "06",
                city: "Mansarovar",
                title: "Purang to Mansarovar",
                desc: "Drive to sacred Lake Mansarovar (4,550m). Puja and parikrama of the lake. Holy dip if weather permits. Experience the divine energy. Overnight at Mansarovar.",
              },
              {
                day: "07",
                city: "Mansarovar",
                title: "Mansarovar Rest Day",
                desc: "Second day at Mansarovar for complete parikrama and spiritual practices. Rest and acclimatization for Kailash parikrama. Overnight at Mansarovar.",
              },
              {
                day: "08",
                city: "Dirapuk",
                title: "Mansarovar to Darchen to Dirapuk",
                desc: "Drive to Darchen. Begin Kailash parikrama. Trek 12 km to Dirapuk (4,890m). Close views of Mount Kailash north face. Overnight at Dirapuk guest house.",
              },
              {
                day: "09",
                city: "Zutulpuk",
                title: "Dirapuk to Zutulpuk via Dolma La Pass",
                desc: "Most challenging day — trek to Dolma La Pass (5,630m), the highest point. Descent to Zutulpuk (4,790m). Total 18-20 km. Overnight at Zutulpuk guest house.",
              },
              {
                day: "10",
                city: "Hilsa",
                title: "Zutulpuk to Darchen to Hilsa",
                desc: "Complete parikrama — trek 12 km back to Darchen. Drive to Hilsa. Cross border back to Nepal. Helicopter to Simikot. Overnight at Simikot.",
              },
              {
                day: "11",
                city: "Kathmandu",
                title: "Return to Kathmandu & Departure",
                desc: "Flight from Simikot to Nepalgunj, then to Kathmandu. Transfer to airport for international departure. End of the sacred journey.",
              },
            ].map((day) => (
              <details
                key={day.day}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <summary className="flex items-center justify-between cursor-pointer px-8 py-6 hover:bg-gray-50 transition-colors list-none">
                  <div className="flex items-center gap-6 flex-1">
                    <span className="font-sans text-xs tracking-[0.2em] uppercase text-[#8B7355] font-semibold shrink-0">
                      DAY {day.day}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl text-midnight font-normal mb-1">{day.title}</h3>
                      <p className="font-sans text-sm text-[#B8860B]">{day.city}</p>
                    </div>
                  </div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="shrink-0 transition-transform group-open:rotate-180 text-midnight/40"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="px-8 pb-6 pt-2">
                  <p className="font-sans text-base text-midnight/60 leading-relaxed">
                    {day.desc}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Your Pilgrimage */}
      <section className="py-20 px-6 bg-[#f5f5f0]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-midnight font-normal text-center mb-20 leading-tight">
            Planning Your Pilgrimage
          </h2>

          <div className="space-y-16">
            <div className="flex items-start gap-8">
              <div className="shrink-0 w-20 h-20 bg-midnight rounded-2xl flex items-center justify-center">
                <span className="font-serif text-2xl text-white">01</span>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="font-serif text-2xl text-midnight font-normal mb-4">Choose Your Circuit</h3>
                <p className="font-sans text-base text-midnight/60 leading-relaxed">
                  The Kailash Mansarovar Yatra via Kathmandu-Simikot-Hilsa route is designed for pilgrims seeking
                  the most reliable and well-supported journey. This route combines flights, helicopter service, and
                  road travel to provide optimal acclimatization while minimizing physical strain.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="shrink-0 w-20 h-20 bg-midnight rounded-2xl flex items-center justify-center">
                <span className="font-serif text-2xl text-white">02</span>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="font-serif text-2xl text-midnight font-normal mb-4">Sacred Logistics</h3>
                <p className="font-sans text-base text-midnight/60 leading-relaxed">
                  All permit arrangements, Tibet visa processing, helicopter bookings, and accommodation are handled
                  entirely by our team. We provide experienced guides, medical support, oxygen cylinders, and all
                  necessary equipment for high-altitude trekking to ensure your safety and comfort.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="shrink-0 w-20 h-20 bg-midnight rounded-2xl flex items-center justify-center">
                <span className="font-serif text-2xl text-white">03</span>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="font-serif text-2xl text-midnight font-normal mb-4">Begin the Journey</h3>
                <p className="font-sans text-base text-midnight/60 leading-relaxed">
                  Travel with a knowledgeable guide who speaks both English/Hindi and understands the spiritual
                  significance of every location. Every ritual is explained, every blessing witnessed. We ensure
                  proper acclimatization with strategic rest days at Mansarovar before the challenging Kailash parikrama.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotels Information */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4 text-center">
            ACCOMMODATION
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal text-center mb-14 leading-snug">
            Hotels & Guest Houses
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { location: "Kathmandu", hotel: "Hotel Le Himalaya", category: "3 Star Hotel" },
              { location: "Nepalgunj", hotel: "Cygnett Krishna", category: "3 Star Hotel" },
              { location: "Simikot", hotel: "Humla Resort", category: "Mountain Lodge" },
              { location: "Hilsa", hotel: "Hotel Snow Lion", category: "Guest House" },
              { location: "Purang", hotel: "Hotel Himalayan", category: "Guest House" },
              { location: "Mansarovar", hotel: "Pramath Guest House", category: "Sharing Basis" },
              { location: "Darchen", hotel: "Hotel Himalaya", category: "Guest House" },
              { location: "Dirapuk", hotel: "Mountain Guest House", category: "Sharing Basis" },
              { location: "Zutulpuk", hotel: "Mountain Guest House", category: "Sharing Basis" },
            ].map((item) => (
              <div key={item.location} className="bg-white rounded-md overflow-hidden shadow-ambient p-5">
                <p className="font-sans text-xs font-bold tracking-[0.15em] uppercase text-gold-dark mb-2">
                  {item.location}
                </p>
                <h3 className="font-serif text-lg text-midnight font-normal mb-1">{item.hotel}</h3>
                <p className="font-sans text-sm text-midnight/50">{item.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions & Exclusions */}
      <section className="py-20 px-6 bg-surface-low">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4 text-center">
            WHAT&apos;S COVERED
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal text-center mb-14 leading-snug">
            Cost Includes & Excludes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Inclusions */}
            <div className="bg-white rounded-md overflow-hidden shadow-ambient p-8">
              <h3 className="font-sans text-sm font-bold tracking-[0.2em] uppercase text-[#15803d] mb-6">
                ✓ Cost Includes
              </h3>
              <ul className="space-y-3">
                {[
                  "3 Nights accommodation at Kathmandu (3 Star Hotel)",
                  "1 Night accommodation at Nepalgunj",
                  "2 Nights accommodation at Simikot and Hilsa",
                  "5 Nights accommodation in Tibet (Sharing basis at Guest House)",
                  "Kathmandu-Nepalgunj-Kathmandu flight ticket (Yeti or Buddha Airline)",
                  "Nepalgunj-Simikot-Nepalgunj flight ticket (16 seater, Tara Air or Summit Air)",
                  "Simikot-Hilsa-Simikot by Helicopter (5-6 persons capacity)",
                  "All necessary arrival/departure transfers in Nepalgunj",
                  "Kathmandu sightseeing by AC Vehicle",
                  "Tibet Group Permit and Visa fees",
                  "All meals vegetarian basis (Breakfast, Lunch & Dinner)",
                  "All transportation in Tibet by AC Luxury Coach",
                  "English/Hindi speaking Tibetan and Nepali Guide",
                  "Supporting truck to carry equipment",
                  "All necessary trekking and travel permits",
                  "Medical kit bag & Oxygen cylinders for emergency",
                  "Supporting staff (Cooks, Sherpas & Helpers)",
                  "Kailash Mansarovar Yatra certificate",
                  "Humla region restricted area permit and royalties",
                  "One Duffle bag, One Backpack",
                  "Down Jacket (refundable)",
                  "All applicable taxes & service charges",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-midnight/70 font-sans text-sm leading-relaxed">
                    <span className="text-[#15803d] text-sm mt-1 shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="bg-white rounded-md overflow-hidden shadow-ambient p-8">
              <h3 className="font-sans text-sm font-bold tracking-[0.2em] uppercase text-[#991b1b] mb-6">
                ✗ Cost Excludes
              </h3>
              <ul className="space-y-3">
                {[
                  "International air tickets",
                  "Travel insurance, Rescue and evacuation services",
                  "Nepal Entry Visa fees for NRI",
                  "Horse and Porter during Parikrama",
                  "Tips for Guide, Porter, driver and personal expenses",
                  "Extra hotel charges in Kathmandu if early return from Tibet",
                  "Any additional cost due to natural calamities and unforeseen circumstances",
                  "Extra accommodation charge in Kathmandu, Nepalgunj, Simikot and Hilsa if flight is cancelled due to bad weather or delay in permit/Visa from Tibet",
                  "Visa splitting charge and extra transportation cost, if returning early from Yatra",
                  "5% GST (If you deposit in our Nepal bank, no GST Charge)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-midnight/50 font-sans text-sm leading-relaxed">
                    <span className="text-[#991b1b] text-sm mt-1 shrink-0">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Basic Information */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4 text-center">
            ESSENTIAL INFORMATION
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal text-center mb-14 leading-snug">
            Basic Information About Kailash Yatra
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: "Start Point", value: "Kathmandu" },
              { label: "End Point", value: "Kathmandu" },
              { label: "Max Altitude", value: "5,630 m" },
              { label: "Altitude of Kailash Peak", value: "6,714 m" },
              { label: "Best Time to Visit", value: "May to September" },
              { label: "Temperature", value: "Max 20°C to Min -10°C" },
              { label: "Altitude of Mansarovar", value: "4,550 m" },
              { label: "Parikrama of Kailash", value: "52 km" },
              { label: "Parikrama by Walk", value: "42 km in 3 days" },
              { label: "Distance from Kathmandu", value: "1,050 km (one way)" },
              { label: "Parikrama of Mansarovar", value: "102 km" },
              { label: "Climate", value: "Unpredictable" },
            ].map((info) => (
              <div key={info.label} className="bg-white rounded-md overflow-hidden shadow-ambient p-6">
                <p className="font-sans text-xs text-gold-dark font-semibold mb-2 tracking-wide">
                  {info.label}
                </p>
                <p className="font-serif text-xl text-midnight font-normal">{info.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gold-muted rounded-md p-8">
            <h3 className="font-sans text-sm font-bold tracking-[0.15em] uppercase text-gold-dark mb-4">
              Important Note
            </h3>
            <p className="font-sans text-sm text-midnight/70 leading-relaxed">
              Please carry at least INR 50,000 for extra expenses such as extra nights stay at hotel/guest house due to any reasons.
              Any extra cost incurred thereof shall be borne by the clients on the spot. Please keep in mind that Mt. Kailash Yatra
              is not like an enjoyable holiday tour, therefore you need to be prepared to face hardship & unpredictable situations.
            </p>
          </div>
        </div>
      </section>


      {/* Required Documents */}
      <section className="py-20 px-6 bg-surface-low">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4 text-center">
            BOOKING REQUIREMENTS
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal text-center mb-14 leading-snug">
            Required Documents & Payment
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Required Documents */}
            <div className="bg-white rounded-md overflow-hidden shadow-ambient p-8">
              <h3 className="font-sans text-sm font-bold tracking-[0.2em] uppercase text-midnight mb-6">
                Required Documents for Booking
              </h3>
              <ul className="space-y-4">
                {[
                  { title: "Passport", desc: "Valid for at least 6 months from travel date" },
                  { title: "Age Bar", desc: "10-70 years old" },
                  { title: "Scanned Passport Copy", desc: "Should reach our office 30 days prior to Yatra" },
                  { title: "Original Passport", desc: "Should reach Delhi office 10 days prior to Yatra" },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <span className="text-gold-dark mt-1">•</span>
                    <div>
                      <p className="font-sans text-sm font-semibold text-midnight">{item.title}</p>
                      <p className="font-sans text-sm text-midnight/60 mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mode of Payments */}
            <div className="bg-white rounded-md overflow-hidden shadow-ambient p-8">
              <h3 className="font-sans text-sm font-bold tracking-[0.2em] uppercase text-midnight mb-6">
                Mode of Payments
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <span className="font-serif text-2xl text-gold-dark">25%</span>
                  <div>
                    <p className="font-sans text-sm font-semibold text-midnight mb-1">Booking Amount</p>
                    <p className="font-sans text-sm text-midnight/60">Should be paid for booking the yatra</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-serif text-2xl text-gold-dark">50%</span>
                  <div>
                    <p className="font-sans text-sm font-semibold text-midnight mb-1">Advance Payment</p>
                    <p className="font-sans text-sm text-midnight/60">Should reach 15 days before departure by telex transfer with passport copy</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-serif text-2xl text-gold-dark">100%</span>
                  <div>
                    <p className="font-sans text-sm font-semibold text-midnight mb-1">Full Payment</p>
                    <p className="font-sans text-sm text-midnight/60">Should be made 10 days before departure date</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-4xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4 text-center">
            CANCELLATION POLICY
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal text-center mb-14 leading-snug">
            Tour Cancellation Policy
          </h2>

          <div className="bg-white rounded-md overflow-hidden shadow-ambient p-8">
            <div className="space-y-6">
              <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                All notice of cancellation must be sent to our office in written. Verbal cancellations will not be entertained.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 pb-4 border-b border-midnight/10">
                  <span className="font-sans text-xs font-bold tracking-wider uppercase text-gold-dark shrink-0 mt-1">
                    30 Days Before
                  </span>
                  <p className="font-sans text-sm text-midnight/70">
                    10% of total yatra cost will be deducted
                  </p>
                </div>

                <div className="flex items-start gap-4 pb-4 border-b border-midnight/10">
                  <span className="font-sans text-xs font-bold tracking-wider uppercase text-gold-dark shrink-0 mt-1">
                    15 Days Before
                  </span>
                  <p className="font-sans text-sm text-midnight/70">
                    25% of total trip cost will be deducted
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span className="font-sans text-xs font-bold tracking-wider uppercase text-[#991b1b] shrink-0 mt-1">
                    Less than 10 Days
                  </span>
                  <p className="font-sans text-sm text-midnight/70">
                    There will be no refund at all if you cancel the yatra less than 10 days before the departure date
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Departure Information */}
      <section className="py-20 px-6 bg-surface-low">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4 text-center">
            PRE-DEPARTURE INFORMATION
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal text-center mb-14 leading-snug">
            Important Pre-Departure Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Clothing */}
            <div className="bg-white rounded-md overflow-hidden shadow-ambient p-8">
              <h3 className="font-sans text-sm font-bold tracking-[0.2em] uppercase text-midnight mb-6">
                What to Wear & Pack
              </h3>
              <div className="space-y-4 font-sans text-sm text-midnight/70 leading-relaxed">
                <p>
                  Casual wear and comfortable walking shoes are essential. Bring warm clothing as nights and early mornings
                  can be quite chilly to cold. <strong>Indian Pilgrims are advised strictly not to wear Sari during this yatra.</strong>
                </p>
                <p>
                  <strong>Winter Wear:</strong> Gore-Tex material is highly recommended. Down jacket, raincoat or windbreakers,
                  thermal underwear, warm trousers & woolen shirts, warm sweaters, woolen gloves, sun hat, comfortable shoes,
                  light leather boots for snow, woolen balaclava (monkey cap) & scarf/dust mask.
                </p>
                <p>
                  Bring all film, medicine, cosmetics, personal toilet items from home as these are difficult to obtain on the way.
                  A small first aid kit and route map are also useful.
                </p>
              </div>
            </div>

            {/* What to Bring */}
            <div className="bg-white rounded-md overflow-hidden shadow-ambient p-8">
              <h3 className="font-sans text-sm font-bold tracking-[0.2em] uppercase text-midnight mb-6">
                Essential Items to Bring
              </h3>
              <ul className="space-y-3">
                {[
                  "Snacks for the journey (chocolates, dry fruits, toffees, glucose, namkeen)",
                  "Strong water bottle & water purifying tablets",
                  "Personal medical kit and Diamox tablets (for high altitude)",
                  "Sunglasses (UV protection, essential at high altitudes)",
                  "Sunblock or sunscreen lotion",
                  "Wet tissues (excellent for dust)",
                  "Clothes-line/clips, needle & thread",
                  "Body spray (for boots/feet and toilet tent)",
                  "Toilet paper",
                  "Torch & spare batteries",
                  "Daypack (small shoulder bag)",
                  "Camera & films",
                  "Binoculars",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-midnight/70 font-sans text-sm">
                    <span className="text-gold-dark mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Health */}
            <div className="bg-white rounded-md overflow-hidden shadow-ambient p-8">
              <h3 className="font-sans text-sm font-bold tracking-[0.2em] uppercase text-midnight mb-6">
                Health & Fitness Requirements
              </h3>
              <div className="space-y-4 font-sans text-sm text-midnight/70 leading-relaxed">
                <p>
                  This is one of the toughest high altitude road journeys on earth. <strong>You must be physically fit</strong> — no two ways about that.
                </p>
                <p>
                  Generally, patients with asthma & heart problems have difficulty acclimatizing to high altitudes.
                  In your interests, it is essential you should be examined by your doctor to know about your health condition
                  and ability to cope with high altitude travel, extreme cold, dust, trekking to 19,500 ft during Parikrama, etc.
                </p>
              </div>
            </div>

            {/* Altitude Sickness */}
            <div className="bg-white rounded-md overflow-hidden shadow-ambient p-8">
              <h3 className="font-sans text-sm font-bold tracking-[0.2em] uppercase text-midnight mb-6">
                Altitude Sickness Prevention
              </h3>
              <div className="space-y-4 font-sans text-sm text-midnight/70 leading-relaxed">
                <p>
                  As you travel over high terrain, you are likely to experience symptoms of altitude sickness (headache, loss of appetite,
                  nausea, exhaustion, sleeplessness, breathlessness) until your body adjusts. This can take a couple of days or more.
                </p>
                <p>
                  <strong>For this reason, we have made it mandatory to stay 2 nights at Mansarovar (4,550m)</strong> before moving to higher altitudes.
                </p>
                <p>
                  <strong>Precautions:</strong> Drink plenty of water, stay calm, do not exercise. Do not drink alcohol or smoke prior to and during the tour.
                  We recommend carrying Diamox tablets. We provide a Gamow bag (special equipment to prevent altitude sickness).
                </p>
              </div>
            </div>

            {/* Currency */}
            <div className="bg-white rounded-md overflow-hidden shadow-ambient p-8">
              <h3 className="font-sans text-sm font-bold tracking-[0.2em] uppercase text-midnight mb-6">
                Currency Information
              </h3>
              <div className="space-y-4 font-sans text-sm text-midnight/70 leading-relaxed">
                <p>
                  The unit of Chinese currency is Yuan (CNY). Exchange rates: USD 1 = 6.48 Yuan & 1 Yuan = INR 10.28 (approx., subject to change).
                </p>
                <p>
                  Money can be exchanged at Bank of China at Zhangmu or from locals at Zhangmu or Kodari.
                  Exchange all remaining Yuan at the end of the trip at Zhangmu before re-entering Nepal.
                </p>
              </div>
            </div>

            {/* Risks & Liability */}
            <div className="bg-white rounded-md overflow-hidden shadow-ambient p-8">
              <h3 className="font-sans text-sm font-bold tracking-[0.2em] uppercase text-midnight mb-6">
                Risks & Liability
              </h3>
              <div className="space-y-4 font-sans text-sm text-midnight/70 leading-relaxed">
                <p>
                  Soham Journeys Pvt. Ltd. and its associates will put every effort to make your journey smooth and pleasant.
                  However, all tours in Tibet are conducted strictly under the rules & regulations of Tibet Tourism Bureau (TTB).
                </p>
                <p>
                  Therefore, we shall not be responsible for any change and alteration in the program due to unavoidable circumstances
                  such as landslide, road blockage, flood, snow, political unrest, cancellation of flight, delay arrival, sickness, or accidents.
                </p>
                <p className="font-semibold text-midnight">
                  Any extra cost incurred thereof shall be borne by the clients on the spot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4 text-center">
            TERMS & CONDITIONS
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal text-center mb-14 leading-snug">
            Important Terms & Conditions
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Travel Insurance",
                content: "We advise you to purchase comprehensive travel insurance against medical issues, natural calamities, helicopter evacuation, personal accidents, and cancellations. We do not sell insurance policies, but they are available from India-based insurance companies.",
              },
              {
                title: "Changes By You",
                content: "If you wish to change your tour, you must inform our staff at least 30 days before the tour. Any extra charge or loss incurred due to such change will be borne by you.",
              },
              {
                title: "Cancellation By The Company",
                content: "We may be obliged to cancel your trip due to border closure, permit not issued or cancelled by government, war, riots, civil disturbances, strikes, natural disasters, terrorist activities, or airport closures. We will advise you as soon as possible and offer an alternative trip or refund after deducting expenses. However, we can be under no other liability.",
              },
              {
                title: "Refund",
                content: "No refund will be made to any tour member in case of incomplete Yatra due to whatsoever reasons.",
              },
              {
                title: "Age Factor",
                content: "Please note that Kailash permit will not be issued for persons above 70 years old.",
              },
              {
                title: "Privacy",
                content: "Soham Treks & Expedition Pvt. Ltd. is committed to protecting the privacy and confidentiality of personal information.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-md overflow-hidden shadow-ambient p-8">
                <h3 className="font-sans text-sm font-bold tracking-[0.15em] uppercase text-midnight mb-4">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-gold-muted rounded-md p-8">
            <p className="font-sans text-sm text-midnight/70 leading-relaxed">
              <strong>Important:</strong> Please do not start your journey until you get confirmation of permit.
              Sometimes Chinese government personnel will refuse entry even if you have a permit if they think you are not eligible based on their criteria.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-surface-low">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal mb-6 leading-snug">
            Ready to Begin Your Sacred Journey?
          </h2>
          <p className="font-sans text-base text-midnight/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            Contact us for detailed information, customized itineraries, and booking assistance for Kailash Mansarovar Yatra.
          </p>
          <Link
            href="/inquiry"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold bg-gold text-midnight px-10 py-4 rounded-md hover:bg-gold-dark hover:text-white transition-colors duration-300"
          >
            Submit Inquiry
          </Link>
        </div>
      </section>
    </>
  );
}
