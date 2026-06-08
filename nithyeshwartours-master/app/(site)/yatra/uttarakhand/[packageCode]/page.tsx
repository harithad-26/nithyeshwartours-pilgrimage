import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Package data
const PACKAGES = {
  "uk-01": {
    code: "UK 01",
    name: "Haridwar-Rishikesh Circuit",
    duration: "3N / 4D",
    price: "₹15,000",
    startingPoint: "Haridwar",
    description: "Gateway to Himalayas - spiritual retreat at Haridwar and Rishikesh",
  },
  "uk-02": {
    code: "UK 02",
    name: "Do Dham Yatra",
    duration: "6N / 7D",
    price: "₹28,000",
    startingPoint: "Haridwar",
    description: "Kedarnath-Badrinath pilgrimage circuit",
  },
  "uk-03": {
    code: "UK 03",
    name: "Kedarnath Special",
    duration: "4N / 5D",
    price: "₹22,000",
    startingPoint: "Haridwar",
    description: "Focus on Kedarnath Jyotirlinga darshan",
  },
};

export async function generateMetadata({ params }: { params: { packageCode: string } }): Promise<Metadata> {
  const pkg = PACKAGES[params.packageCode as keyof typeof PACKAGES];
  if (!pkg) {
    return {
      title: "Package Not Found",
    };
  }

  return {
    title: `${pkg.name} - ${pkg.code} | Nithyeshwar Tours`,
    description: `${pkg.description}. ${pkg.duration} package starting from ${pkg.price} per person.`,
  };
}

export default function PackageDetailPage({ params }: { params: { packageCode: string } }) {
  const pkg = PACKAGES[params.packageCode as keyof typeof PACKAGES];

  if (!pkg) {
    notFound();
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-surface-low border-b border-midnight/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-midnight/50 hover:text-midnight transition-colors">Home</Link>
            <span className="text-midnight/30">/</span>
            <Link href="/yatra/uttarakhand" className="text-midnight/50 hover:text-midnight transition-colors">Uttarakhand Yatra</Link>
            <span className="text-midnight/30">/</span>
            <span className="text-midnight font-medium">{pkg.code}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/pilgrimage/badrinath.jpg"
          alt={pkg.name}
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/50 via-midnight/40 to-midnight/80" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold mb-5">
            {pkg.code} · Uttarakhand Yatra
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-white font-normal leading-tight tracking-tight mb-6">
            {pkg.name}
          </h1>
          <p className="font-sans text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
            {pkg.description}
          </p>
          <div className="flex items-center justify-center gap-6">
            <Link
              href="/inquiry"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold bg-gold text-midnight px-8 py-4 rounded-md hover:bg-gold-dark hover:text-white transition-colors duration-300 min-h-11"
            >
              Book Now
            </Link>
            <a
              href="#itinerary"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-white border border-white/30 px-8 py-4 rounded-md hover:bg-white/10 transition-colors duration-300 min-h-11"
            >
              View Itinerary
            </a>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="border-y border-midnight/10 bg-surface-low">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { label: "Duration", value: pkg.duration },
              { label: "Starting Point", value: pkg.startingPoint },
              { label: "Price", value: pkg.price },
              { label: "Type", value: "Private Tour" },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`px-6 py-8 text-center ${
                  i < 3 ? "border-r border-midnight/10" : ""
                } ${i >= 2 ? "border-t md:border-t-0 border-midnight/10" : ""}`}
              >
                <p className="font-sans text-[9px] text-gold-dark uppercase tracking-[0.3em] mb-2 font-semibold">
                  {item.label}
                </p>
                <p className="font-serif text-base text-midnight font-normal">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Navigation Tabs */}
      <div className="sticky top-0 z-30 bg-white border-b border-midnight/10 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <nav className="flex overflow-x-auto">
            {[
              { label: "Overview", href: "#overview" },
              { label: "Itinerary", href: "#itinerary" },
              { label: "What's Included", href: "#included" },
              { label: "Hotels", href: "#hotels" },
              { label: "Book Now", href: "#booking" },
            ].map((tab) => (
              <a
                key={tab.label}
                href={tab.href}
                className="font-sans text-sm font-medium text-midnight/60 hover:text-midnight hover:bg-surface-low px-6 py-4 border-b-2 border-transparent hover:border-gold-dark transition-all whitespace-nowrap"
              >
                {tab.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Package Overview - Compact */}
      <section className="py-16 px-6 bg-surface" id="overview">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Key Highlights */}
            <div>
              <h2 className="font-serif text-2xl text-midnight font-normal mb-6">Package Highlights</h2>
              <ul className="space-y-3">
                {(pkg.code === "UK 01" ? [
                  "3 nights stay in Haridwar & Rishikesh",
                  "Evening Ganga Aarti at Har Ki Pauri",
                  "Visit to Laxman Jhula & Ram Jhula",
                  "Temple & ashram tours with guide",
                  "All meals & AC vehicle transfers",
                ] : pkg.code === "UK 02" ? [
                  "6 nights accommodation across circuit",
                  "Kedarnath temple darshan (trek/pony)",
                  "Badrinath temple & Mana Village",
                  "Haridwar-Rishikesh sightseeing",
                  "Experienced guide throughout journey",
                  "All meals & comfortable hotels",
                ] : [
                  "4 nights focused on Kedarnath Jyotirlinga",
                  "Trek/pony/helicopter options available",
                  "Guptkashi & Sonprayag visits",
                  "Haridwar Ganga Aarti ceremony",
                  "All meals & transfers included",
                ]).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 font-sans text-sm text-midnight/70">
                    <span className="text-gold-dark mt-0.5 text-lg">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Quick Info Cards */}
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-midnight/5">
                <h3 className="font-sans text-xs font-bold tracking-wider uppercase text-gold-dark mb-4">Best Time to Visit</h3>
                <p className="font-sans text-sm text-midnight/70">May-June & September-October. Shrines remain closed during winter (Nov-Apr).</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-midnight/5">
                <h3 className="font-sans text-xs font-bold tracking-wider uppercase text-gold-dark mb-4">Fitness Level</h3>
                <p className="font-sans text-sm text-midnight/70">
                  {pkg.code === "UK 01" ? "Easy - No trekking required. Suitable for all ages." : 
                   pkg.code === "UK 02" ? "Moderate - Kedarnath requires 16km trek (pony available)." :
                   "Moderate - Includes mountain trekking. Good fitness recommended."}
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-midnight/5">
                <h3 className="font-sans text-xs font-bold tracking-wider uppercase text-gold-dark mb-4">Group Size</h3>
                <p className="font-sans text-sm text-midnight/70">Minimum 2 persons. Private tours available for families & groups.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary Section - Compact Timeline */}
      <section className="py-16 px-6 bg-white" id="itinerary">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl text-midnight font-normal mb-8 text-center">Day-by-Day Itinerary</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gold/20"></div>

            <div className="space-y-6">
              {[
                { day: "01", title: "Arrival in Haridwar", desc: "Transfer to hotel. Evening Ganga Aarti at Har Ki Pauri." },
                { day: "02", title: "Haridwar to Rishikesh", desc: "Visit Laxman Jhula, Ram Jhula, temples. Evening Aarti at Parmarth Niketan." },
                { day: "03", title: "Rishikesh Exploration", desc: "Ashram visits, river rafting (optional). Yoga & meditation sessions." },
                { day: "04", title: "Departure", desc: "Morning leisure. Drop to Haridwar station/Dehradun airport." },
              ].slice(0, pkg.code === "UK 01" ? 4 : pkg.code === "UK 02" ? 7 : 5).map((item) => (
                <div key={item.day} className="relative flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center z-10">
                    <span className="font-serif text-lg font-medium text-gold-dark">{item.day}</span>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="font-serif text-lg text-midnight font-medium mb-1">{item.title}</h3>
                    <p className="font-sans text-sm text-midnight/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="font-sans text-sm text-gold-dark hover:text-midnight border-b border-gold-dark hover:border-midnight transition-colors">
              Download Complete Itinerary PDF →
            </button>
          </div>
        </div>
      </section>

      {/* Inclusions & Exclusions - Side by Side */}
      <section className="py-16 px-6 bg-surface" id="included">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl text-midnight font-normal mb-10 text-center">What's Included & Excluded</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Included */}
            <div className="bg-white rounded-lg p-6 border border-[#15803d]/20">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#15803d] text-xl">✓</span>
                <h3 className="font-sans text-sm font-bold tracking-wider uppercase text-[#15803d]">Included</h3>
              </div>
              <ul className="space-y-2">
                {[
                  "Accommodation as per itinerary",
                  "Daily breakfast & dinner (veg)",
                  "All transfers by AC vehicle",
                  "Experienced driver cum guide",
                  "Temple entrance fees",
                  "All applicable taxes",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-midnight/70 font-sans text-sm">
                    <span className="text-[#15803d] mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Excluded */}
            <div className="bg-white rounded-lg p-6 border border-[#991b1b]/20">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#991b1b] text-xl">✗</span>
                <h3 className="font-sans text-sm font-bold tracking-wider uppercase text-[#991b1b]">Not Included</h3>
              </div>
              <ul className="space-y-2">
                {[
                  "Airfare / Train tickets",
                  "Lunch and beverages",
                  "Personal expenses & tips",
                  "Pony/palki charges",
                  "Travel insurance",
                  "Items not in inclusions",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-midnight/50 font-sans text-sm">
                    <span className="text-[#991b1b] mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hotels - Compact Grid */}
      <section className="py-16 px-6 bg-white" id="hotels">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-2xl text-midnight font-normal mb-8 text-center">Accommodation</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { location: "Haridwar", hotel: "Hotel Ganga Azure", category: "3 Star" },
              { location: "Rishikesh", hotel: "Zostel Rishikesh", category: "Comfort" },
              { location: "Guptkashi", hotel: "Hotel Snow View", category: "Standard" },
            ].slice(0, pkg.code === "UK 01" ? 2 : 3).map((item) => (
              <div key={item.location} className="bg-surface rounded-lg p-4 border border-midnight/5">
                <p className="font-sans text-xs font-bold tracking-wider uppercase text-gold-dark mb-1">
                  {item.location}
                </p>
                <h3 className="font-serif text-base text-midnight font-medium mb-1">{item.hotel}</h3>
                <p className="font-sans text-xs text-midnight/50">{item.category} · Similar hotels</p>
              </div>
            ))}
          </div>

          <p className="font-sans text-xs text-midnight/50 text-center mt-6">
            Hotels subject to availability. Upgrades available on request.
          </p>
        </div>
      </section>

      {/* Booking Section - Compact CTA */}
      <section className="py-16 px-6 bg-midnight" id="booking">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-white font-normal mb-4">Ready to Book {pkg.name}?</h2>
          <p className="font-sans text-base text-white/60 mb-8 max-w-2xl mx-auto">
            Contact us for customization, detailed itinerary, and special group rates.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8 max-w-md mx-auto">
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="font-serif text-5xl text-gold-light font-medium">{pkg.price}</span>
              <span className="font-sans text-sm text-white/60">per person</span>
            </div>
            <p className="font-sans text-xs text-white/50 mb-6">Twin sharing · Taxes included</p>
            
            <div className="space-y-3">
              <Link
                href="/inquiry"
                className="block font-sans text-sm font-semibold bg-gold text-midnight px-8 py-4 rounded-md hover:bg-gold-light transition-colors"
              >
                Submit Inquiry Form
              </Link>
              <a
                href="https://wa.me/917200118411"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-sans text-sm font-semibold border border-white/30 text-white px-8 py-4 rounded-md hover:bg-white/10 transition-colors"
              >
                WhatsApp: +91 72001 18411
              </a>
            </div>
          </div>

          {/* Policies Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="font-sans text-xs font-bold tracking-wider uppercase text-gold-light mb-2">Payment</h4>
              <p className="font-sans text-sm text-white/70">30% advance, balance 7 days before departure</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="font-sans text-xs font-bold tracking-wider uppercase text-gold-light mb-2">Cancellation</h4>
              <p className="font-sans text-sm text-white/70">Full refund if cancelled 30+ days before</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="font-sans text-xs font-bold tracking-wider uppercase text-gold-light mb-2">Customization</h4>
              <p className="font-sans text-sm text-white/70">Flexible dates, hotels & itinerary available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Packages */}
      <div className="border-t border-midnight/10 bg-surface-low">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <Link
            href="/yatra/uttarakhand"
            className="inline-flex items-center gap-2 font-sans text-sm text-midnight/60 hover:text-midnight transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to All Uttarakhand Packages
          </Link>
        </div>
      </div>
    </>
  );
}
