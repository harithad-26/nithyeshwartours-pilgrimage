import Image from "next/image";
import Link from "next/link";
import { getTestimonials } from "@/lib/strapi";
import { PilgrimStories } from "@/components/sections/PilgrimStories";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sacred Pilgrimages — Walking the Eternal Path",
  description:
    "Begin your spiritual journey with Nithyeshwar Tours. Curated pilgrimage routes across India's most revered sacred sites.",
};

const SPIRITUAL_PORTALS = [
  {
    name: "Varanasi",
    label: "The Eternal City of Shiva",
    img: "/images/india-states/varanasi-ghats.jpg",
    href: "/packages/uttar-pradesh",
    colSpan: "col-span-12 md:col-span-7",
    large: true,
  },
  {
    name: "Tirupati",
    label: "The Celestial Abode",
    img: "/images/pilgrimage/tirupati.jpg",
    href: "/packages/tamil-nadu",
    colSpan: "col-span-12 md:col-span-5",
    large: false,
  },
  {
    name: "Kedarnath",
    label: "The Himalayan Sanctuary",
    img: "/images/pilgrimage/badrinath.jpg",
    href: "/packages/uttar-pradesh",
    colSpan: "col-span-12 md:col-span-5",
    large: false,
  },
  {
    name: "Jagannath Puri",
    label: "The Abode of the Universe",
    img: "/images/india-states/odisha.jpg",
    href: "/packages/odisha",
    colSpan: "col-span-12 md:col-span-7",
    large: true,
  },
];

const CHAR_DHAM = [
  {
    num: "01",
    name: "Yamunotri",
    description:
      "The source of the sacred Yamuna river. Devotees take the first steps of the Char Dham circuit in this glacial Himalayan valley.",
    nodeClass: "bg-midnight",
  },
  {
    num: "02",
    name: "Gangotri",
    description:
      "The origin of the holy Ganges — the Goddess who descended from the heavens to cleanse the earth of its sins.",
    nodeClass: "bg-gold-dark",
  },
  {
    num: "03",
    name: "Kedarnath",
    description:
      "The divine abode of Lord Shiva. Set among snow-capped peaks at 3,583 metres, this is the most awe-inspiring shrine in the Himalayas.",
    nodeClass: "bg-midnight",
  },
  {
    num: "04",
    name: "Badrinath",
    description:
      "The holiest Vaishnava shrine — dedicated to Lord Badrinarayan, keeper of the cosmic order, nestled between the peaks of Nar and Narayana.",
    nodeClass: "bg-gold-dark",
  },
];

export default async function PilgrimagePage() {
  const testimonials = await getTestimonials();

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        aria-label="Sacred Pilgrimages"
      >
        <Image
          src="/images/hero-pilgrimage.jpg"
          alt="Sacred pilgrimage landscape"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={90}
        />
        <div
          className="absolute inset-0 bg-linear-to-b from-midnight/50 via-midnight/55 to-midnight/80"
          aria-hidden="true"
        />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-24">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold mb-5">
            The Eternal Path
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white font-normal leading-tight tracking-tight mb-6">
            Walking the Sacred Way
          </h1>
          <p className="font-sans text-lg text-white/70 leading-relaxed font-light max-w-2xl mx-auto mb-10">
            More than travel. A transformation. We walk with you on paths that
            have guided devotees for centuries.
          </p>
          <Link
            href="/inquiry"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold bg-white text-midnight px-8 py-4 rounded-md hover:bg-gold transition-colors duration-300 min-h-11"
          >
            Plan Your Pilgrimage
          </Link>
        </div>
      </section>

      {/* Spiritual Portals — bento grid */}
      <section className="py-32 px-6 bg-surface" aria-labelledby="portals-heading">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4 text-center">
            Sacred Sites
          </p>
          <h2
            id="portals-heading"
            className="font-serif text-3xl md:text-4xl text-midnight font-normal text-center mb-14 leading-snug"
          >
            Spiritual Portals
          </h2>

          <div className="grid grid-cols-12 grid-rows-[360px_360px] gap-6">
            {SPIRITUAL_PORTALS.map((portal) => (
              <Link
                key={portal.name}
                href={portal.href}
                className={`${portal.colSpan} relative group rounded-md overflow-hidden focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2`}
                aria-label={`Explore ${portal.name} pilgrimages`}
              >
                <Image
                  src={portal.img}
                  alt={portal.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  quality={85}
                  className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-midnight/25" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p
                    className={`font-serif text-white font-normal leading-tight ${
                      portal.large ? "text-3xl md:text-4xl" : "text-2xl"
                    }`}
                  >
                    {portal.name}
                  </p>
                  <p className="font-sans text-sm text-white/70 mt-1.5">
                    {portal.label}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sacred Geometry — dark section */}
      <section
        className="py-32 px-6 bg-midnight"
        aria-labelledby="geometry-heading"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold mb-5">
              Sacred Geometry
            </p>
            <h2
              id="geometry-heading"
              className="font-serif text-3xl md:text-4xl text-white font-normal leading-snug mb-6"
            >
              The Ancient Science of Sacred Travel
            </h2>
            <p className="font-sans text-base text-white/60 leading-relaxed mb-8">
              Every pilgrimage circuit is designed on ancient Vedic principles —
              the geography of divinity, the alignment of temples, the timing of
              festivals. We honour this science in every journey we curate.
            </p>
            <Link
              href="/inquiry"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-gold border border-gold/40 px-6 py-3 rounded-md transition-all duration-300 hover:bg-gold hover:text-midnight min-h-11"
            >
              Begin Your Journey
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { stat: "30+", label: "Years of Sacred Service" },
              { stat: "200+", label: "Destinations Covered" },
              { stat: "1L+", label: "Pilgrim Souls Guided" },
              { stat: "98%", label: "Satisfaction Rate" },
            ].map((item) => (
              <div
                key={item.label}
                className="text-center p-8 border border-white/10 rounded-md"
              >
                <p className="font-serif text-4xl text-gold font-normal mb-2">
                  {item.stat}
                </p>
                <p className="font-sans text-xs text-white/50 tracking-wider uppercase leading-relaxed">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Char Dham Circuit */}
      <section
        className="py-32 px-6 bg-surface-low"
        aria-labelledby="chardham-heading"
      >
        <div className="max-w-4xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4 text-center">
            The Supreme Circuit
          </p>
          <h2
            id="chardham-heading"
            className="font-serif text-3xl md:text-4xl text-midnight font-normal text-center mb-4 leading-snug"
          >
            Char Dham Yatra
          </h2>
          <p className="font-sans text-base text-midnight/50 text-center mb-16 max-w-xl mx-auto leading-relaxed">
            The four sacred abodes — a journey that completes the soul&apos;s
            map of the Himalayas.
          </p>

          <div className="relative">
            <div
              className="absolute left-8 top-8 bottom-8 w-px bg-midnight/10"
              aria-hidden="true"
            />
            <ol className="space-y-0" role="list">
              {CHAR_DHAM.map((stop) => (
                <li key={stop.name} className="flex gap-8 pb-14 relative">
                  <div className="flex flex-col items-center z-10">
                    <div
                      className={`w-16 h-16 rounded-xl ${stop.nodeClass} flex items-center justify-center shrink-0`}
                    >
                      <span className="font-serif text-sm text-gold font-normal">
                        {stop.num}
                      </span>
                    </div>
                  </div>
                  <div className="pt-3">
                    <h3 className="font-serif text-xl text-midnight font-normal mb-2">
                      {stop.name}
                    </h3>
                    <p className="font-sans text-sm text-midnight/60 leading-relaxed max-w-lg">
                      {stop.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-4 text-center">
            <Link
              href="/inquiry"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold bg-midnight text-white px-8 py-4 rounded-md hover:bg-navy transition-colors duration-300 min-h-11"
            >
              Book Char Dham Yatra
            </Link>
          </div>
        </div>
      </section>

      {/* Pilgrim Stories */}
      <PilgrimStories testimonials={testimonials} />
    </>
  );
}
