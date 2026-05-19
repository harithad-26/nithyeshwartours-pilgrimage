import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Andaman Packages — Tropical Sanctuary",
  description:
    "Sacred shores and pristine waters — where pilgrimage meets paradise in the Andaman Islands.",
};

const FEATURED_PACKAGES = [
  {
    code: "AN 01",
    title: "The Coastal Essence",
    description:
      "A curated 5-day journey through Andaman's most sacred and serene coastal sites, including Radhanagar Beach and the Cellular Jail Light & Sound show.",
    price: "₹10,300",
    priceLabel: "Start From",
    features: ["Boutique Beach Resort", "Snorkelling Experience", "Cellular Jail Tour"],
    dark: true,
  },
  {
    code: "AN 02",
    title: "Azure Island Hopping",
    description:
      "An island-hopping 7-day odyssey across Neil Island, Havelock Island, and the pristine waters of Baratang — a journey through paradise.",
    price: "₹12,500",
    priceLabel: "Start From",
    features: ["Private Speed Boat", "Coral Reef Diving", "Jungle Trek"],
    dark: false,
  },
];

const SMALLER_PACKAGES = [
  {
    code: "AN 03",
    title: "The Sanctuary Retreat",
    price: "₹8,900",
    img: "/images/destinations/andaman.jpg",
  },
  {
    code: "AN 04",
    title: "The Superior Voyage",
    price: "₹18,000",
    img: "/images/luxury-escapes.jpg",
  },
];

const MOMENTS = [
  {
    heading: "Historical Echoes at Port Blair",
    body: "The Cellular Jail, an icon of Indian resilience, rises over Port Blair like a cathedral of sacrifice. Our guided evening tour brings its history alive through the celebrated Light & Sound show — a must for every visiting soul.",
    img: "/images/about-hero.jpg",
    imgAlt: "Cellular Jail, Port Blair",
  },
  {
    heading: "The Silent Blue Ritual",
    body: "Descend into the crystalline waters surrounding Havelock Island. Dive alongside schools of brilliant fish as living corals sway in the current below — a meditation like no other, conducted in perfect silence.",
    img: "/images/destinations/andaman.jpg",
    imgAlt: "Underwater diving, Andaman",
  },
];

export default function AndamanPage() {
  return (
    <>
      {/* Full-bleed dark hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <Image
          src="/images/destinations/andaman.jpg"
          alt="Andaman Islands"
          fill
          sizes="100vw"
          className="object-cover"
          quality={90}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/60 via-midnight/60 to-midnight/80" aria-hidden="true" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold mb-5">
            Tropical Sanctuary
          </p>
          <h1 className="font-serif text-6xl md:text-7xl text-surface font-normal leading-tight mb-6">
            Andaman Islands
          </h1>
          <p className="font-sans text-lg text-white/70 leading-relaxed max-w-xl mx-auto mb-10">
            Explore the pristine coral reefs, sacred shores, and crystalline
            waters of India&apos;s most breathtaking island sanctuary.
          </p>
          <Link
            href="/inquiry"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold bg-gold text-midnight px-8 py-4 rounded-md hover:bg-yellow-300 transition-colors duration-300 min-h-11"
          >
            Begin Your Escape
          </Link>
        </div>
      </section>

      {/* Featured Packages — 2 large dark cards */}
      <section className="bg-surface py-20 px-12">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-3">
            Featured Packages
          </p>
          <h2 className="font-serif text-4xl text-midnight font-normal mb-12 leading-snug">
            Our Most Beloved Journeys
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {FEATURED_PACKAGES.map((pkg) => (
              <div
                key={pkg.code}
                className={`rounded-md p-10 flex flex-col gap-6 ${
                  pkg.dark ? "bg-midnight" : "bg-surface-low border border-midnight/10"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className={`font-sans text-[10px] font-bold tracking-[0.1em] uppercase ${pkg.dark ? "text-white/40" : "text-midnight/40"}`}>
                    {pkg.code}
                  </span>
                  <div className="text-right">
                    <p className={`font-sans text-[10px] uppercase tracking-[0.1em] mb-0.5 ${pkg.dark ? "text-white/40" : "text-midnight/40"}`}>
                      {pkg.priceLabel}
                    </p>
                    <p className={`font-sans text-xl font-bold ${pkg.dark ? "text-gold" : "text-gold-dark"}`}>
                      {pkg.price}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className={`font-serif text-2xl font-normal mb-3 leading-snug ${pkg.dark ? "text-surface" : "text-midnight"}`}>
                    {pkg.title}
                  </h3>
                  <p className={`font-sans text-sm leading-relaxed ${pkg.dark ? "text-white/60" : "text-midnight/60"}`}>
                    {pkg.description}
                  </p>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden="true">
                        <path d="M1 5l3 3 7-7" stroke={pkg.dark ? "rgba(254,214,91,0.7)" : "#735c00"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className={`font-sans text-xs ${pkg.dark ? "text-white/60" : "text-midnight/70"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/inquiry"
                  className={`mt-auto flex items-center justify-center py-3.5 font-sans text-sm font-bold tracking-[0.1em] uppercase rounded-sm transition-colors duration-300 min-h-11 ${
                    pkg.dark
                      ? "bg-gold text-gold-dark hover:bg-yellow-300"
                      : "bg-midnight text-white hover:bg-navy"
                  }`}
                >
                  Book Now
                </Link>
              </div>
            ))}
          </div>

          {/* Smaller package thumbnails */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SMALLER_PACKAGES.map((pkg) => (
              <div key={pkg.code} className="relative h-48 rounded-sm overflow-hidden group">
                <Image
                  src={pkg.img}
                  alt={pkg.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
                  quality={80}
                />
                <div className="absolute inset-0 bg-midnight/50" aria-hidden="true" />
                <div className="absolute inset-0 flex items-end justify-between p-6">
                  <div>
                    <p className="font-sans text-[10px] font-bold tracking-[0.1em] uppercase text-white/50 mb-1">
                      {pkg.code}
                    </p>
                    <p className="font-serif text-xl text-surface font-normal">{pkg.title}</p>
                  </div>
                  <p className="font-sans text-base font-bold text-gold">{pkg.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unforgettable Moments */}
      <section className="bg-midnight py-24 px-12">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold mb-5 text-center">
            Stories of the Sea
          </p>
          <h2 className="font-serif text-4xl text-surface font-normal text-center mb-16 leading-snug">
            Unforgettable Moments
          </h2>

          <div className="flex flex-col gap-20">
            {MOMENTS.map((m, i) => (
              <div
                key={m.heading}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <h3 className="font-serif text-3xl text-surface font-normal mb-5 leading-snug">
                    {m.heading}
                  </h3>
                  <p className="font-sans text-base text-white/60 leading-relaxed mb-6">
                    {m.body}
                  </p>
                  <Link
                    href="/inquiry"
                    className="font-sans text-xs font-bold tracking-[0.12em] uppercase text-gold hover:text-white transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
                <div className={`relative h-72 lg:h-80 rounded-sm overflow-hidden ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Image
                    src={m.img}
                    alt={m.imgAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    quality={85}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Your Sacred Escape — CTA */}
      <section className="bg-navy py-20 px-12 text-center">
        <h2 className="font-serif text-4xl text-surface font-normal mb-4 leading-snug">
          Plan Your Sacred Escape
        </h2>
        <p className="font-sans text-base text-white/60 max-w-md mx-auto mb-10 leading-relaxed">
          Let us design your perfect Andaman retreat — tailored to your soul,
          your budget, and your sense of wonder.
        </p>
        <Link
          href="/inquiry"
          className="inline-flex items-center gap-2 font-sans text-sm font-semibold bg-gold text-midnight px-8 py-4 rounded-md hover:bg-yellow-300 transition-colors duration-300 min-h-11"
        >
          Begin Planning
        </Link>
      </section>
    </>
  );
}
