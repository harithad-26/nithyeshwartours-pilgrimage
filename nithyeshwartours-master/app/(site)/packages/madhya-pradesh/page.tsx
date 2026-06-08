import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Madhya Pradesh Packages — Heart of the Heritage",
  description:
    "Discover the ancient temples, sacred rivers, and timeless devotion of Madhya Pradesh through our curated spiritual itineraries.",
};

const ITINERARIES = [
  {
    code: "MP 01",
    duration: "3 Nights / 4 Days",
    sentiment: "Spiritual Awakening",
    price: "₹5,500",
  },
  {
    code: "MP 02",
    duration: "5 Nights / 6 Days",
    sentiment: "Heritage & Devotion",
    price: "₹9,200",
  },
  {
    code: "MP 03",
    duration: "7 Nights / 8 Days",
    sentiment: "Temple Odyssey",
    price: "₹16,500",
  },
  {
    code: "MP 04",
    duration: "9 Nights / 10 Days",
    sentiment: "Complete Pilgrimage",
    price: "₹21,000",
  },
];

const SIGNIFICANCE_STATS = [
  { stat: "30+", label: "Sacred Sites" },
  { stat: "1000+", label: "Years of History" },
];

export default function MadhyaPradeshPage() {
  return (
    <>
      {/* Hero — light bg, text left, image right */}
      <section className="bg-surface pt-28 min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pb-16">
          {/* Text */}
          <div className="flex flex-col gap-6">
            <div className="self-start bg-gold px-4 py-1 rounded-xl">
              <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-gold-dark">
                Nithyeshwar Tours
              </span>
            </div>
            <h1 className="font-serif text-6xl md:text-7xl text-midnight font-bold leading-none">
              Madhya
              <br />
              Pradesh
            </h1>
            <p className="font-sans text-lg text-midnight/60 leading-relaxed max-w-md">
              The Heart of India — ancient temples, sacred rivers, and timeless
              devotion. Home to the UNESCO World Heritage temples of Khajuraho
              and the sacred ghats of Ujjain.
            </p>
            <Link
              href="/inquiry"
              className="self-start inline-flex items-center gap-2 font-sans text-sm font-semibold bg-midnight text-white px-8 py-4 rounded-md hover:bg-navy transition-colors duration-300 min-h-11"
            >
              Plan Your Journey
            </Link>
          </div>

          {/* Image */}
          <div className="relative h-[480px] rounded-sm overflow-hidden shadow-2xl">
            <Image
              src="/images/destinations/madhya-pradesh.jpg"
              alt="Khajuraho Temples, Madhya Pradesh"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              quality={90}
              priority
            />
          </div>
        </div>
      </section>

      {/* Curated Sacred Itineraries — table */}
      <section className="bg-surface py-20 px-12">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-3">
            Sacred Paths
          </p>
          <h2 className="font-serif text-4xl text-midnight font-normal mb-12 leading-snug">
            Curated Sacred Itineraries
          </h2>

          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-midnight/10">
                  <th className="text-left font-sans text-[10px] font-bold tracking-[0.15em] uppercase text-midnight/40 pb-4 pr-8">
                    Package Code
                  </th>
                  <th className="text-left font-sans text-[10px] font-bold tracking-[0.15em] uppercase text-midnight/40 pb-4 pr-8">
                    Duration
                  </th>
                  <th className="text-left font-sans text-[10px] font-bold tracking-[0.15em] uppercase text-midnight/40 pb-4 pr-8">
                    Pilgrimage Sentiment
                  </th>
                  <th className="text-right font-sans text-[10px] font-bold tracking-[0.15em] uppercase text-midnight/40 pb-4">
                    Price
                  </th>
                  <th className="text-right font-sans text-[10px] font-bold tracking-[0.15em] uppercase text-midnight/40 pb-4 pl-8">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {ITINERARIES.map((row) => (
                  <tr
                    key={row.code}
                    className="border-b border-midnight/5 hover:bg-surface-low transition-colors"
                  >
                    <td className="py-5 pr-8">
                      <span className="font-sans text-sm font-bold text-midnight/60 tracking-[0.08em]">
                        {row.code}
                      </span>
                    </td>
                    <td className="py-5 pr-8">
                      <span className="font-sans text-sm text-midnight/70">
                        {row.duration}
                      </span>
                    </td>
                    <td className="py-5 pr-8">
                      <span className="font-serif text-base text-midnight font-normal">
                        {row.sentiment}
                      </span>
                    </td>
                    <td className="py-5 text-right">
                      <span className="font-sans text-base font-bold text-gold-dark">
                        {row.price}
                      </span>
                    </td>
                    <td className="py-5 pl-8 text-right">
                      <Link
                        href="/inquiry"
                        className="font-sans text-xs font-bold tracking-[0.12em] uppercase text-midnight/50 hover:text-gold-dark transition-colors"
                      >
                        Explore →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* The Spiritual Significance — dark section */}
      <section className="bg-midnight py-24 px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold mb-5">
              Sacred Significance
            </p>
            <h2 className="font-serif text-4xl text-surface font-normal leading-snug mb-6">
              The Spiritual Significance of Madhya Pradesh
            </h2>
            <p className="font-sans text-base text-white/60 leading-relaxed mb-10">
              Madhya Pradesh is the keeper of India&apos;s most ancient spiritual
              traditions. From the erotic and divine carvings of Khajuraho
              — where desire and devotion meet — to the 12 Jyotirlingas spread
              across its landscape, every corner breathes sacred energy.
            </p>
            <div className="flex gap-12">
              {SIGNIFICANCE_STATS.map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-4xl text-gold font-normal mb-1">
                    {s.stat}
                  </p>
                  <p className="font-sans text-xs text-white/50 uppercase tracking-widest leading-relaxed">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-80 lg:h-[420px] rounded-sm overflow-hidden">
            <Image
              src="/images/india-states/madhya-pradesh.jpg"
              alt="Madhya Pradesh heritage site"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              quality={85}
            />
            <div className="absolute inset-0 bg-midnight/30" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-20 px-12 text-center">
        <h2 className="font-serif text-4xl text-midnight font-normal mb-4 leading-snug">
          Begin Your Sacred Journey
        </h2>
        <p className="font-sans text-base text-midnight/50 mb-8 max-w-md mx-auto leading-relaxed">
          Let our spiritual travel experts craft a bespoke Madhya Pradesh
          pilgrimage for you.
        </p>
        <Link
          href="/inquiry"
          className="inline-flex items-center gap-2 font-sans text-sm font-semibold bg-midnight text-white px-8 py-4 rounded-md hover:bg-navy transition-colors duration-300 min-h-11"
        >
          Plan with Our Experts
        </Link>
      </section>
    </>
  );
}
