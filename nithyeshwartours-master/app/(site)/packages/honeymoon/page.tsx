import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Honeymoon Packages — Sacred Beginnings in Sanctuary",
  description:
    "Begin your journey together. Curated honeymoon experiences blending romance, spirituality, and luxury for couples.",
};

const SPOTS = [
  {
    name: "Udaipur",
    subtitle: "The Venice of the East. Heritage palaces and lake-side serenity.",
    img: "/images/destinations/honeymoon.jpg",
  },
  {
    name: "Ubud, Bali",
    subtitle: "Sacred forests, temple rituals and infinite tranquillity.",
    img: "/images/luxury-escapes.jpg",
  },
  {
    name: "Positano",
    subtitle: "Pastel-colored cliffs tumbling into the turquoise Tyrrhenian Sea.",
    img: "/images/destinations/international.jpg",
  },
];

const RESORTS = [
  {
    name: "The Royal Sanctuary",
    description:
      "A heritage palace retreat where every suite overlooks a shimmering lake. Private boat transfers and in-room puja ceremonies are included.",
    price: "From ₹32,000 / night",
    img: "/images/destinations/honeymoon.jpg",
  },
  {
    name: "Zen Garden Estates",
    description:
      "Nestled among terraced rice fields, this adults-only resort offers yoga pavilions, forest bathing walks, and bespoke couples' spa journeys.",
    price: "From $280 / night",
    img: "/images/luxury-escapes.jpg",
  },
];

const EXPERIENCES = [
  { label: "Sacred Dinner Dining", img: "/images/hero-bg.jpg" },
  { label: "Spiritual Vows", img: "/images/pilgrimage/badrinath.jpg" },
  { label: "Hot Air Balloon", img: "/images/about-hero.jpg" },
  { label: "Mountain Spa", img: "/images/destinations/honeymoon.jpg" },
];

export default function HoneymoonPage() {
  return (
    <>
      {/* Hero — split layout */}
      <section className="bg-surface-low pt-28 pb-20 px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-5">
              For Two Souls
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-midnight font-normal leading-tight mb-6">
              Sacred Beginnings
              <br />
              in Sanctuary
            </h1>
            <p className="font-sans text-base text-midnight/60 leading-relaxed mb-8 max-w-md">
              Begin your marriage as you mean to continue it — in beauty, in
              stillness, in wonder. We craft honeymoon journeys that honour your
              love and your shared hunger for meaning.
            </p>
            <Link
              href="/inquiry"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-gold-dark border-b border-gold-dark pb-0.5 hover:text-midnight hover:border-midnight transition-colors"
            >
              Explore Destinations →
            </Link>
          </div>

          {/* Image side */}
          <div className="relative h-[500px] lg:h-[560px] rounded-md overflow-hidden shadow-2xl">
            <Image
              src="/images/destinations/honeymoon.jpg"
              alt="Romantic honeymoon retreat"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              quality={90}
              priority
            />
          </div>
        </div>
      </section>

      {/* Popular Honeymoon Spots */}
      <section className="bg-surface py-28 px-12">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4 text-center">
            Where Love Blooms
          </p>
          <h2 className="font-serif text-4xl text-midnight font-normal text-center mb-4 leading-snug">
            Popular Honeymoon Spots
          </h2>
          <p className="font-sans text-sm text-midnight/50 text-center mb-14 max-w-lg mx-auto leading-relaxed">
            Each destination chosen for its romance, its depth, and the memories
            it will leave in your hearts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SPOTS.map((spot) => (
              <div key={spot.name} className="group cursor-pointer">
                <div className="relative h-80 rounded-sm overflow-hidden mb-5">
                  <Image
                    src={spot.img}
                    alt={spot.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-midnight/20" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-2xl text-midnight font-normal mb-2">
                  {spot.name}
                </h3>
                <p className="font-sans text-sm text-midnight/60 leading-relaxed">
                  {spot.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resort Collections */}
      <section className="bg-surface-low py-28 px-12">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4 text-center">
            Stay in Splendour
          </p>
          <h2 className="font-serif text-4xl text-midnight font-normal text-center mb-14 leading-snug">
            Resort Collections
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {RESORTS.map((resort) => (
              <div key={resort.name} className="bg-white rounded-md overflow-hidden shadow-ambient">
                <div className="relative h-56">
                  <Image
                    src={resort.img}
                    alt={resort.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    quality={80}
                  />
                  <div className="absolute inset-0 bg-midnight/20" aria-hidden="true" />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl text-midnight font-normal mb-3">
                    {resort.name}
                  </h3>
                  <p className="font-sans text-sm text-midnight/60 leading-relaxed mb-4">
                    {resort.description}
                  </p>
                  <p className="font-sans text-sm font-semibold text-gold-dark">
                    {resort.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Experiences */}
      <section className="bg-midnight py-28 px-12">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold mb-4 text-center">
            Once in a Lifetime
          </p>
          <h2 className="font-serif text-4xl text-surface font-normal text-center mb-14 leading-snug">
            Special Experiences
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {EXPERIENCES.map((exp) => (
              <div key={exp.label} className="group relative h-64 rounded-sm overflow-hidden">
                <Image
                  src={exp.img}
                  alt={exp.label}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
                  quality={80}
                />
                <div className="absolute inset-0 bg-midnight/40" aria-hidden="true" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-sans text-xs font-bold tracking-[0.12em] uppercase text-gold">
                    {exp.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-low py-20 px-12 text-center">
        <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4">
          Your Love Story
        </p>
        <h2 className="font-serif text-4xl text-midnight font-normal mb-6 leading-snug">
          Begin Your Sacred Journey Together
        </h2>
        <p className="font-sans text-base text-midnight/50 max-w-xl mx-auto mb-10 leading-relaxed">
          Let us craft the honeymoon you have always imagined. Tell us your
          vision and we will weave it into reality.
        </p>
        <Link
          href="/inquiry"
          className="inline-flex items-center gap-2 font-sans text-sm font-semibold bg-midnight text-white px-8 py-4 rounded-md hover:bg-navy transition-colors duration-300 min-h-11"
        >
          Plan Our Honeymoon
        </Link>
      </section>
    </>
  );
}
