import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tamil Nadu Sacred Sites — The Dravidian Legacy",
  description:
    "The grand temples, ancient rituals, and divine heritage of Tamil Nadu. Walk the pilgrimage trails of the Dravidian tradition.",
};

const HOLY_TRINITY = [
  {
    name: "Meenakshi Amman Temple",
    location: "Madurai",
    description:
      "One of the greatest temples of the ancient world. Fourteen soaring gopurams covered in thousands of sculpted figures guard the abode of the Goddess Meenakshi.",
    img: "/images/india-states/tamil-nadu.jpg",
  },
  {
    name: "Ramanathaswamy Temple",
    location: "Rameswaram",
    description:
      "The southernmost of the Char Dham shrines — a majestic corridor stretching 1,212 metres, the longest in the world, connecting the mortal to the divine.",
    img: "/images/destinations/tamil-nadu.jpg",
  },
  {
    name: "Tirupati Balaji",
    location: "Tirupati (Andhra Border)",
    description:
      "The most-visited place of worship on Earth. Pilgrims arrive from every corner of India to behold the Lord Venkateswara in his celestial abode.",
    img: "/images/pilgrimage/tirupati.jpg",
  },
];

const PILGRIMAGE_STEPS = [
  {
    num: "01",
    title: "Choose Your Circuit",
    body: "We offer three curated circuits — the Temple Triangle, the Pancha Bhuta Stalams, and the Grand South India Tour. Each is designed for a specific depth of spiritual immersion.",
  },
  {
    num: "02",
    title: "Sacred Logistics",
    body: "All darshan arrangements, VIP queue passes, temple protocols, and accommodation near the shrines are handled entirely by our team.",
  },
  {
    num: "03",
    title: "Begin the Journey",
    body: "Travel with a knowledgeable guide who speaks both the local language and the language of devotion. Every ritual is explained, every blessing witnessed.",
  },
];

export default function TamilNaduPage() {
  return (
    <>
      {/* Dark Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <Image
          src="/images/destinations/tamil-nadu.jpg"
          alt="Tamil Nadu Sacred Sites"
          fill
          sizes="100vw"
          className="object-cover"
          quality={90}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/60 via-midnight/55 to-midnight/85" aria-hidden="true" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-24">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold mb-5">
            The Dravidian Legacy
          </p>
          <h1 className="font-serif text-6xl md:text-7xl text-surface font-normal leading-tight mb-6">
            Tamil Nadu
            <br />
            Sacred Sites
          </h1>
          <p className="font-sans text-lg text-white/70 leading-relaxed max-w-xl mx-auto mb-10">
            Step into a living civilisation. Tamil Nadu&apos;s temples are not
            monuments to the past — they are living, breathing centres of
            devotion visited by millions each year.
          </p>
          <Link
            href="/inquiry"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold bg-white text-midnight px-8 py-4 rounded-md hover:bg-gold transition-colors duration-300 min-h-11"
          >
            Begin Your Pilgrimage
          </Link>
        </div>
      </section>

      {/* The Holy Trinity of the South */}
      <section className="bg-surface py-28 px-12">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4 text-center">
            Sacred Triad
          </p>
          <h2 className="font-serif text-4xl text-midnight font-normal text-center mb-4 leading-snug">
            The Holy Trinity of the South
          </h2>
          <p className="font-sans text-base text-midnight/50 text-center mb-16 max-w-xl mx-auto leading-relaxed">
            Three temples that define Dravidian civilisation and have drawn
            pilgrims for over two thousand years.
          </p>

          <div className="flex flex-col gap-20">
            {HOLY_TRINITY.map((site, i) => (
              <div
                key={site.name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <p className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-3">
                    {site.location}
                  </p>
                  <h3 className="font-serif text-3xl text-midnight font-normal leading-snug mb-5">
                    {site.name}
                  </h3>
                  <p className="font-sans text-base text-midnight/60 leading-relaxed mb-6">
                    {site.description}
                  </p>
                  <Link
                    href="/inquiry"
                    className="font-sans text-xs font-bold tracking-[0.12em] uppercase text-gold-dark hover:text-midnight transition-colors"
                  >
                    Plan This Visit →
                  </Link>
                </div>
                <div className={`relative h-80 lg:h-96 rounded-sm overflow-hidden shadow-xl ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Image
                    src={site.img}
                    alt={site.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-midnight/15" aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Your Pilgrimage */}
      <section className="bg-surface-low py-28 px-12">
        <div className="max-w-4xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4 text-center">
            How It Works
          </p>
          <h2 className="font-serif text-4xl text-midnight font-normal text-center mb-16 leading-snug">
            Planning Your Pilgrimage
          </h2>

          <div className="relative">
            <div className="absolute left-8 top-8 bottom-8 w-px bg-midnight/10" aria-hidden="true" />
            <ol className="space-y-0" role="list">
              {PILGRIMAGE_STEPS.map((step) => (
                <li key={step.num} className="flex gap-8 pb-14 relative">
                  <div className="flex flex-col items-center z-10">
                    <div className="w-16 h-16 rounded-xl bg-midnight flex items-center justify-center shrink-0">
                      <span className="font-serif text-sm text-gold font-normal">
                        {step.num}
                      </span>
                    </div>
                  </div>
                  <div className="pt-3">
                    <h3 className="font-serif text-xl text-midnight font-normal mb-2">
                      {step.title}
                    </h3>
                    <p className="font-sans text-sm text-midnight/60 leading-relaxed max-w-lg">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Begin Your Divine Journey — CTA */}
      <section className="bg-midnight py-24 px-12 text-center">
        <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold mb-5">
          The Path Awaits
        </p>
        <h2 className="font-serif text-4xl text-surface font-normal mb-6 leading-snug">
          Begin Your Divine Journey Today
        </h2>
        <p className="font-sans text-base text-white/60 max-w-md mx-auto mb-10 leading-relaxed">
          Our Tamil Nadu pilgrimage specialists will design a journey matching
          your faith, your schedule, and your depth of devotion.
        </p>
        <Link
          href="/inquiry"
          className="inline-flex items-center gap-2 font-sans text-sm font-semibold bg-gold text-midnight px-8 py-4 rounded-md hover:bg-yellow-300 transition-colors duration-300 min-h-11"
        >
          Plan Your Tamil Nadu Pilgrimage
        </Link>
      </section>
    </>
  );
}
