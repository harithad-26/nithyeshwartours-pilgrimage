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
    duration: "9N / 10D",
    cities: "Haridwar, Barkot, Uttarkashi, Guptkashi, Badrinath",
    theme: "Budget Friendly",
    highlights: [
      "All four sacred dhams covered",
      "Comfortable 3-star hotels",
      "Vegetarian meals included",
      "Experienced tour guide"
    ],
    services: ["Bus", "Meal", "Hotel", "Guided"],
    bgColor: "bg-[#e8f5e9]",
    borderColor: "border-[#81c784]",
    textColor: "text-[#2e7d32]"
  },
  {
    code: "CD-DLX-11D",
    name: "Char Dham Deluxe",
    duration: "10N / 11D",
    cities: "Haridwar, Barkot, Uttarkashi, Guptkashi, Badrinath, Rishikesh",
    theme: "Premium Experience",
    highlights: [
      "Premium accommodation",
      "Helicopter option for Kedarnath",
      "Extra day for Rishikesh sightseeing",
      "Smaller group size"
    ],
    services: ["Bus", "Helicopter", "Premium Meal", "Best Hotel", "Private"],
    bgColor: "bg-[#e1e3f3]",
    borderColor: "border-[#9fa8da]",
    textColor: "text-[#3f51b5]"
  },
  {
    code: "CD-LUX-12D",
    name: "Char Dham Luxury",
    duration: "11N / 12D",
    cities: "Haridwar, Barkot, Uttarkashi, Guptkashi, Badrinath, Rishikesh",
    theme: "Ultimate Comfort",
    highlights: [
      "5-star where available",
      "Helicopter for Kedarnath & Badrinath",
      "Personal guide and porter",
      "VIP darshan arrangements"
    ],
    services: ["Car", "Helicopter", "Premium Meal", "Luxury Hotel", "Private"],
    bgColor: "bg-[#fff9c4]",
    borderColor: "border-[#fdd835]",
    textColor: "text-[#f57f17]"
  },
];

export default function CharDhamPage() {
  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/pilgrimage/badrinath.jpg"
          alt="Char Dham - Four Sacred Shrines"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-midnight/40 to-midnight/90" />
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto pt-16">
          <div className="mb-6 inline-block">
            <span className="font-sans text-xs font-bold tracking-[0.4em] uppercase text-gold bg-gold/10 backdrop-blur-sm px-6 py-2 rounded-full border border-gold/30">
              The Sacred Circuit of Uttarakhand
            </span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl text-white font-light leading-[0.95] tracking-tight mb-6 drop-shadow-2xl">
            Char Dham<br/>
            <span className="text-gold-light font-normal italic">Yatra</span>
          </h1>
          
          <p className="font-sans text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-4 font-light">
            Badrinath • Kedarnath • Gangotri • Yamunotri
          </p>
          <p className="font-sans text-base text-white/70 leading-relaxed max-w-2xl mx-auto mb-10">
            Journey to the four sacred abodes in the Himalayas — the ultimate pilgrimage that absolves sins and opens the gates to moksha
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="#packages"
              className="group inline-flex items-center gap-3 font-sans text-sm font-semibold bg-gold text-midnight px-10 py-4 rounded-full hover:bg-gold-light hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <span>View Packages</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="https://wa.me/917200118411?text=I'm%20interested%20in%20Char%20Dham%20Yatra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium text-white border-2 border-white/40 backdrop-blur-sm px-10 py-4 rounded-full hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Inquiry
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
            {[
              { label: "Duration", value: "10 Days", icon: "📅" },
              { label: "Start Point", value: "Haridwar", icon: "📍" },
              { label: "Best Season", value: "Apr-Nov", icon: "🌤️" },
              { label: "Max Altitude", value: "3,133m", icon: "⛰️" },
              { label: "Difficulty", value: "Moderate", icon: "💪" },
              { label: "Price From", value: "₹35,000", icon: "💰" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <p className="font-sans text-xs text-gold uppercase tracking-wider mb-1 font-medium">
                  {stat.label}
                </p>
                <p className="font-serif text-base text-white font-medium leading-tight">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY THIS YATRA */}
      <section className="py-20 px-6 bg-gradient-to-b from-surface to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-midnight font-light leading-tight mb-6">
              The Most Sacred <span className="italic text-gold-dark font-normal">Pilgrimage</span>
            </h2>
            <p className="font-sans text-lg text-midnight/70 leading-relaxed">
              The Char Dham Yatra is considered the ultimate spiritual journey in Hinduism. Visiting these four sacred shrines — Yamunotri, Gangotri, Kedarnath, and Badrinath — is believed to wash away sins and pave the path to moksha (liberation). Nestled in the majestic Himalayas of Uttarakhand, each dham represents a unique aspect of divine energy and offers profound spiritual transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🕉️",
                title: "Four Sacred Dhams",
                desc: "Yamunotri (Goddess Yamuna), Gangotri (Goddess Ganga), Kedarnath (Lord Shiva), Badrinath (Lord Vishnu) — the holiest circuit."
              },
              {
                icon: "✨",
                title: "Spiritual Liberation",
                desc: "Complete the yatra to cleanse your soul, absolve sins, and attain moksha. A journey that transforms lives."
              },
              {
                icon: "🏔️",
                title: "Himalayan Majesty",
                desc: "Experience breathtaking landscapes, pristine rivers, snow-capped peaks, and the raw power of nature."
              },
              {
                icon: "🙏",
                title: "Ancient Traditions",
                desc: "Participate in sacred rituals, witness evening aartis, and connect with centuries-old spiritual practices."
              },
            ].map((exp) => (
              <div
                key={exp.title}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gold/10"
              >
                <div className="text-4xl mb-4">{exp.icon}</div>
                <h3 className="font-serif text-xl text-midnight font-medium mb-3">{exp.title}</h3>
                <p className="font-sans text-sm text-midnight/60 leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: PACKAGES */}
      <section className="py-20 px-6 bg-surface" id="packages">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4 text-center">
            CHOOSE YOUR JOURNEY
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal text-center mb-4 leading-snug">
            Char Dham Yatra Packages
          </h2>
          <p className="font-sans text-base text-midnight/50 text-center mb-14 max-w-2xl mx-auto leading-relaxed">
            Select from our thoughtfully designed packages based on your comfort preferences and budget
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.code}
                className={`${pkg.bgColor} rounded-2xl overflow-hidden border-2 ${pkg.borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="relative h-48 bg-gradient-to-br from-midnight/80 to-midnight/60 overflow-hidden">
                  <Image
                    src="/images/pilgrimage/badrinath.jpg"
                    alt={pkg.name}
                    fill
                    className="object-cover mix-blend-overlay"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <h3 className="font-serif text-2xl text-white font-medium mb-2 leading-tight">
                      {pkg.name}
                    </h3>
                    <p className={`font-sans text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${pkg.bgColor} ${pkg.textColor}`}>
                      {pkg.theme}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-sans text-xs tracking-[0.2em] uppercase ${pkg.textColor} font-bold`}>
                      {pkg.code}
                    </span>
                    <span className="font-sans text-sm text-midnight/60 font-medium">
                      {pkg.duration}
                    </span>
                  </div>

                  <div className="mb-4">
                    <p className="font-sans text-xs text-midnight/50 mb-1">Destinations:</p>
                    <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                      {pkg.cities}
                    </p>
                  </div>

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

                  <div className="flex flex-wrap gap-2 mb-6">
                    {pkg.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 font-sans text-[10px] font-medium px-3 py-1.5 rounded-full bg-white/60 text-midnight/70 border border-midnight/10"
                      >
                        {service === "Flight" && "✈️"}
                        {service === "Bus" && "🚌"}
                        {service === "Car" && "🚗"}
                        {service === "Helicopter" && "🚁"}
                        {service === "Meal" && "🍽️"}
                        {service === "Premium Meal" && "🍽️"}
                        {service === "Hotel" && "🏨"}
                        {service === "Best Hotel" && "🏨"}
                        {service === "Luxury Hotel" && "🏨"}
                        {service === "Private" && "🔒"}
                        {service === "Guided" && "🗺️"}
                        <span>{service}</span>
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/yatra/char-dham/${pkg.code}`}
                    className={`block text-center font-sans text-sm tracking-wide font-semibold py-3 px-4 ${pkg.textColor} bg-white/80 hover:bg-white border-2 ${pkg.borderColor} rounded-lg transition-all duration-300 hover:scale-105`}
                  >
                    VIEW DETAILS & BOOK
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: DETAILED ITINERARY */}
      <section className="py-20 px-6 bg-[#f5f5f0]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-midnight font-normal text-center mb-16 leading-tight">
            Day-by-Day Itinerary
          </h2>

          <div className="space-y-3">
            {[
              {
                day: "01",
                city: "Haridwar → Barkot",
                title: "Journey to Yamunotri Base",
                desc: "Arrive in Haridwar, the gateway to the Char Dham Yatra. Our representative will greet you and transfer you to Barkot (220 km, 7-8 hours). En route, visit Kempty Falls in Mussoorie. Check into hotel in Barkot. Evening at leisure for acclimatization.",
                meals: "Dinner",
                stay: "Hotel in Barkot"
              },
              {
                day: "02",
                city: "Barkot → Yamunotri → Barkot",
                title: "Yamunotri Darshan",
                desc: "Early morning drive to Janki Chatti (45 km, 1.5 hours). Trek or take a pony/doli to Yamunotri Temple (6 km). Take a holy dip in Surya Kund and offer prayers to Goddess Yamuna. Visit Divya Shila. Return trek to Janki Chatti and drive back to Barkot.",
                meals: "Breakfast, Packed Lunch, Dinner",
                stay: "Hotel in Barkot"
              },
              {
                day: "03",
                city: "Barkot → Uttarkashi",
                title: "Transfer to Uttarkashi",
                desc: "After breakfast, drive to Uttarkashi (100 km, 4-5 hours), a holy town on the banks of River Bhagirathi. Visit Vishwanath Temple dedicated to Lord Shiva. Evening Ganga Aarti on the riverbank. Overnight stay in Uttarkashi.",
                meals: "Breakfast, Lunch, Dinner",
                stay: "Hotel in Uttarkashi"
              },
              {
                day: "04",
                city: "Uttarkashi → Gangotri → Uttarkashi",
                title: "Gangotri Darshan",
                desc: "Early morning drive to Gangotri (100 km, 3-4 hours) through scenic mountain roads. Visit Gangotri Temple, the origin of the sacred River Ganga. Take holy dip in the icy waters (optional). Visit Bhagirath Shila and Pandava Gufa. Return to Uttarkashi for overnight stay.",
                meals: "Breakfast, Packed Lunch, Dinner",
                stay: "Hotel in Uttarkashi"
              },
              {
                day: "05",
                city: "Uttarkashi → Guptkashi",
                title: "Journey to Kedarnath Base",
                desc: "Drive to Guptkashi (220 km, 8-9 hours) via Tehri Dam (optional stop for photo). Guptkashi is the base for Kedarnath darshan. Visit Ardh Nareshwar Temple. Check into hotel and rest for tomorrow's trek.",
                meals: "Breakfast, Lunch, Dinner",
                stay: "Hotel in Guptkashi"
              },
              {
                day: "06",
                city: "Guptkashi → Kedarnath",
                title: "Kedarnath Darshan",
                desc: "Early morning drive to Sonprayag/Gaurikund. Trek 18 km to Kedarnath (or take helicopter, pony, doli). Visit Kedarnath Temple, one of the 12 Jyotirlingas. Witness evening aarti. Overnight stay in Kedarnath (simple accommodation).",
                meals: "Breakfast, Packed Lunch, Dinner",
                stay: "Guest House in Kedarnath"
              },
              {
                day: "07",
                city: "Kedarnath → Guptkashi",
                title: "Morning Darshan & Return",
                desc: "Early morning darshan at Kedarnath Temple. After prayers and rituals, trek back to Gaurikund. Drive to Guptkashi for overnight stay. Rest and recuperate after the challenging trek.",
                meals: "Breakfast, Lunch, Dinner",
                stay: "Hotel in Guptkashi"
              },
              {
                day: "08",
                city: "Guptkashi → Badrinath",
                title: "Journey to Badrinath",
                desc: "Drive to Badrinath (190 km, 8-9 hours) via Joshimath. En route, visit Narsingh Temple in Joshimath. Reach Badrinath by evening. Visit Tapt Kund for holy bath. Attend evening aarti at Badrinath Temple. Overnight in Badrinath.",
                meals: "Breakfast, Lunch, Dinner",
                stay: "Hotel in Badrinath"
              },
              {
                day: "09",
                city: "Badrinath → Rudraprayag",
                title: "Badrinath Darshan & Departure",
                desc: "Early morning darshan at Badrinath Temple. Visit Mana Village (last village before Tibet border), Vyas Gufa, Ganesh Gufa, and Bhim Pul. After lunch, drive to Rudraprayag (160 km, 7 hours). Overnight stay.",
                meals: "Breakfast, Lunch, Dinner",
                stay: "Hotel in Rudraprayag"
              },
              {
                day: "10",
                city: "Rudraprayag → Haridwar",
                title: "Return Journey",
                desc: "After breakfast, drive back to Haridwar (160 km, 6-7 hours). Visit Devprayag (confluence of Alaknanda and Bhagirathi) en route. Reach Haridwar by evening. Transfer to railway station/airport. Yatra concludes with divine blessings.",
                meals: "Breakfast, Lunch",
                stay: "End of Yatra"
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
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="px-8 pb-6 pt-2">
                  <p className="font-sans text-base text-midnight/70 leading-relaxed mb-4">
                    {day.desc}
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-sans text-xs font-semibold text-midnight/50 uppercase tracking-wide">Meals:</span>
                      <p className="font-sans text-midnight/70">{day.meals}</p>
                    </div>
                    <div>
                      <span className="font-sans text-xs font-semibold text-midnight/50 uppercase tracking-wide">Stay:</span>
                      <p className="font-sans text-midnight/70">{day.stay}</p>
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: INCLUSIONS & EXCLUSIONS */}
      <section className="py-20 px-6 bg-surface-low">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4 text-center">
            WHAT'S COVERED
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal text-center mb-14 leading-snug">
            Package Inclusions & Exclusions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg p-8">
              <h3 className="font-sans text-sm font-bold tracking-[0.2em] uppercase text-[#15803d] mb-6 flex items-center gap-2">
                <span className="text-xl">✓</span> INCLUDED IN PACKAGE
              </h3>
              <ul className="space-y-3">
                {[
                  "Accommodation on twin sharing basis in hotels/guest houses",
                  "All meals (breakfast, lunch, dinner) - Pure vegetarian",
                  "Transportation by AC tempo traveler/bus (Haridwar to Haridwar)",
                  "Professional tour guide throughout the journey",
                  "All permit fees and entrance charges",
                  "Parking fees, toll taxes, driver allowance",
                  "First aid medical kit and oxygen cylinder",
                  "All currently applicable taxes",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-midnight/70 font-sans text-sm leading-relaxed">
                    <span className="text-[#15803d] text-sm mt-1 shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg p-8">
              <h3 className="font-sans text-sm font-bold tracking-[0.2em] uppercase text-[#991b1b] mb-6 flex items-center gap-2">
                <span className="text-xl">✗</span> NOT INCLUDED
              </h3>
              <ul className="space-y-3">
                {[
                  "Airfare/train fare to and from Haridwar",
                  "Personal expenses (laundry, telephone, tips, etc.)",
                  "Helicopter tickets for Kedarnath/Badrinath",
                  "Pony/doli/porter charges for Yamunotri and Kedarnath trek",
                  "Any adventure activities or optional tours",
                  "Travel insurance and medical expenses",
                  "Any meals not mentioned in inclusions",
                  "Monument entrance fees at sightseeing places",
                  "Costs arising from natural calamities, roadblocks, or flight/train delays",
                  "GST 5% (applicable on total package cost)",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-midnight/50 font-sans text-sm leading-relaxed">
                    <span className="text-[#991b1b] text-sm mt-1 shrink-0">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: ACCOMMODATION */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4 text-center">
            WHERE YOU'LL STAY
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal text-center mb-14 leading-snug">
            Accommodation Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { location: "Barkot", hotel: "Hotel Himalayan Nature Resort / Similar", category: "3 Star Hotel" },
              { location: "Uttarkashi", hotel: "Hotel Shiv Murti / Similar", category: "3 Star Hotel" },
              { location: "Guptkashi", hotel: "Hotel Mandakini / Similar", category: "3 Star Hotel" },
              { location: "Kedarnath", hotel: "Govt/Private Guest House", category: "Basic Accommodation" },
              { location: "Badrinath", hotel: "Hotel Narayan Palace / Similar", category: "3 Star Hotel" },
              { location: "Rudraprayag", hotel: "Hotel Tulip / Similar", category: "3 Star Hotel" },
            ].map((item) => (
              <div key={item.location} className="bg-white rounded-xl overflow-hidden shadow-lg p-6 hover:-translate-y-1 transition-all duration-300">
                <p className="font-sans text-xs font-bold tracking-[0.15em] uppercase text-gold-dark mb-2">
                  🏨 {item.location}
                </p>
                <h3 className="font-serif text-lg text-midnight font-medium mb-1">{item.hotel}</h3>
                <p className="font-sans text-sm text-midnight/50">{item.category}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-gold-muted rounded-xl p-6 text-center">
            <p className="font-sans text-sm text-midnight/70 leading-relaxed">
              <strong>Note:</strong> Accommodation in Kedarnath is basic due to high altitude and limited infrastructure. All other locations feature comfortable 3-star hotels with modern amenities.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: IMPORTANT INFORMATION */}
      <section className="py-20 px-6 bg-[#f5f5f0]">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4 text-center">
            ESSENTIAL DETAILS
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal text-center mb-14 leading-snug">
            Important Yatra Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { label: "Start & End Point", value: "Haridwar", icon: "📍" },
              { label: "Total Duration", value: "9 Nights / 10 Days", icon: "📅" },
              { label: "Max Altitude", value: "3,133m (Kedarnath)", icon: "⛰️" },
              { label: "Best Time", value: "April to November", icon: "🌤️" },
              { label: "Temperature Range", value: "5°C to 25°C", icon: "🌡️" },
              { label: "Trek Distance", value: "18 km (Kedarnath)", icon: "🥾" },
              { label: "Difficulty Level", value: "Moderate", icon: "💪" },
              { label: "Group Size", value: "10-20 people", icon: "👥" },
              { label: "Meal Type", value: "Pure Vegetarian", icon: "🍽️" },
            ].map((info) => (
              <div key={info.label} className="bg-white rounded-xl overflow-hidden shadow-md p-6">
                <div className="text-3xl mb-3">{info.icon}</div>
                <p className="font-sans text-xs text-gold-dark font-semibold mb-2 tracking-wide uppercase">
                  {info.label}
                </p>
                <p className="font-serif text-lg text-midnight font-medium">{info.value}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8">
              <h3 className="font-sans text-sm font-bold tracking-[0.2em] uppercase text-midnight mb-6">
                🏥 Health & Fitness
              </h3>
              <ul className="space-y-3 font-sans text-sm text-midnight/70 leading-relaxed">
                <li>• Moderate fitness level required</li>
                <li>• Ability to trek 18 km at altitude</li>
                <li>• Not recommended for serious heart/lung conditions</li>
                <li>• Consult doctor before booking if you have health concerns</li>
                <li>• Carry personal medications</li>
                <li>• We provide oxygen cylinder and first aid</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8">
              <h3 className="font-sans text-sm font-bold tracking-[0.2em] uppercase text-midnight mb-6">
                🎒 What to Pack
              </h3>
              <ul className="space-y-3 font-sans text-sm text-midnight/70 leading-relaxed">
                <li>• Warm clothing (jacket, sweater, thermals)</li>
                <li>• Comfortable trekking shoes</li>
                <li>• Rain gear and umbrella</li>
                <li>• Personal toiletries and medications</li>
                <li>• Sunglasses, sunscreen, cap</li>
                <li>• Valid ID proof and photographs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
