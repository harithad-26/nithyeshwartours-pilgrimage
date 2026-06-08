import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Odisha Packages — The Soul of Odisha",
  description:
    "Experience the divine geometry of the Sun Temple and the living traditions of the Jagannath Temple through our curated spiritual itineraries.",
};

const PACKAGES = [
  {
    code: "OD 01",
    price: "₹8,700",
    title: "Puri Essentials",
    description:
      "A focused 3-day spiritual immersion in the holy city of Puri including private Darshan assistance.",
    features: ["Boutique Accommodation", "Sattvic Meals"],
    dark: false,
    cta: "EXPLORE",
    ctaGold: false,
  },
  {
    code: "OD 02",
    price: "₹12,500",
    title: "Golden Triangle",
    description:
      "Puri, Konark, and Bhubaneswar. A comprehensive 5-day journey through the heart of Odisha's heritage.",
    features: ["Private Chauffeur", "Expert Historian"],
    dark: true,
    cta: "BOOK NOW",
    ctaGold: true,
  },
  {
    code: "OD 04",
    price: "₹15,400",
    title: "The Artisan's Path",
    description:
      "Exclusive 6-day tour featuring Raghurajpur heritage village and the sacred temples of Bhubaneswar.",
    features: ["Art Workshops", "10+ Temples"],
    dark: false,
    cta: "EXPLORE",
    ctaGold: false,
  },
  {
    code: "OD 08",
    price: "₹27,500",
    title: "Imperial Odisha",
    description:
      "A luxury 8-day expedition including beach-front resorts, Chilika Lake cruise, and VIP temple access.",
    features: ["5-Star Luxury", "Private Yacht"],
    dark: false,
    cta: "EXPLORE",
    ctaGold: false,
  },
];

export default function OdishaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface pt-32 pb-24 px-12">
        <div className="max-w-7xl mx-auto flex items-end justify-between gap-12">
          <div className="max-w-2xl flex flex-col gap-4">
            <div className="self-start bg-gold px-3 py-1 rounded-sm">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-gold-dark">
                Spiritual Heritage
              </span>
            </div>
            <h1 className="font-serif text-[72px] text-midnight font-bold leading-none">
              The Soul of
              <br />
              Odisha
            </h1>
            <p className="font-sans text-lg text-[#1a1c1c] font-light leading-relaxed">
              Experience the divine geometry of the Sun Temple and the living
              traditions of the Jagannath Temple through our curated spiritual
              itineraries.
            </p>
          </div>
          <div className="shrink-0 flex flex-col items-end">
            <div className="w-24 h-px bg-gold-dark mb-4" aria-hidden="true" />
            <p className="font-serif text-xl text-gold-dark font-normal">
              4 Sacred Journeys
            </p>
          </div>
        </div>
      </section>

      {/* Featured Showcase */}
      <section className="bg-surface px-12 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8" style={{ gridTemplateRows: "508px" }}>
          {/* Jagannath Temple — large left tile */}
          <div className="col-span-12 md:col-span-7 relative rounded-sm overflow-hidden shadow-xl">
            <Image
              src="/images/destinations/odisha.jpg"
              alt="Jagannath Temple, Puri"
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent" aria-hidden="true" />
            <div className="absolute bottom-10 left-10 right-10">
              <h2 className="font-serif text-[30px] text-surface font-normal leading-tight mb-2">
                Jagannath Temple, Puri
              </h2>
              <p className="font-sans text-sm text-white/80 leading-relaxed max-w-md">
                Witness the Mahaprasad rituals and the ancient sanctity of the
                Neelachala Dham.
              </p>
            </div>
          </div>

          {/* Konark info card — right tile */}
          <div className="col-span-12 md:col-span-5 bg-surface-low border-l-2 border-gold-dark rounded-sm p-10 flex flex-col gap-4">
            <h3 className="font-serif text-2xl text-midnight font-normal leading-snug">
              Konark: The Solar Chariot
            </h3>
            <p className="font-sans text-base text-[#1a1c1c] leading-relaxed">
              A 13th-century masterpiece of Orissan temple architecture, designed
              as a colossal chariot with twelve pairs of stone wheels.
            </p>
            <div className="mt-auto relative h-48 rounded-sm overflow-hidden shadow-md">
              <Image
                src="/images/india-states/odisha.jpg"
                alt="Konark Sun Temple"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover grayscale"
                quality={85}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Package Cards */}
      <section className="bg-surface px-12 pt-12 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.code}
              className={`flex flex-col p-8 rounded-sm ${
                pkg.dark
                  ? "bg-midnight shadow-2xl"
                  : "bg-white shadow-ambient"
              }`}
            >
              {/* Header row */}
              <div className="flex items-start justify-between mb-12">
                <span
                  className={`font-sans text-[10px] font-bold tracking-[0.1em] ${
                    pkg.dark ? "text-white/50" : "text-[#1a1c1c]"
                  }`}
                >
                  CODE: {pkg.code}
                </span>
                <span className="bg-gold px-3 py-1 rounded-sm font-sans text-xs font-bold text-gold-dark">
                  {pkg.price}
                </span>
              </div>

              {/* Title */}
              <h3
                className={`font-serif text-2xl font-normal leading-snug mb-4 ${
                  pkg.dark ? "text-surface" : "text-midnight"
                }`}
              >
                {pkg.title}
              </h3>

              {/* Description */}
              <p
                className={`font-sans text-sm leading-relaxed mb-8 ${
                  pkg.dark ? "text-white/70" : "text-[#1a1c1c]"
                }`}
              >
                {pkg.description}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M1 5l3 3 7-7"
                        stroke={pkg.dark ? "rgba(254,214,91,0.7)" : "#735c00"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span
                      className={`font-sans text-xs ${
                        pkg.dark ? "text-white/70" : "text-[#1a1c1c]"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/inquiry"
                className={`mt-auto flex items-center justify-center py-3.5 font-sans text-sm font-bold tracking-[0.1em] uppercase transition-colors duration-300 min-h-11 ${
                  pkg.ctaGold
                    ? "bg-gold text-gold-dark hover:bg-yellow-300"
                    : "border border-gold-dark text-gold-dark hover:bg-gold-dark hover:text-white"
                }`}
              >
                {pkg.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
