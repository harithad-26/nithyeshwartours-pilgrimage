import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "International Packages — Worldly Wonders & Sacred Sanctuaries",
  description:
    "Experience a higher plane of travel. From the turquoise horizons of the Maldives to the spiritual echoes of Bali, our international voyages are crafted for the soul.",
};

const SMALL_CARDS = [
  {
    title: "Swiss Alpine Soul",
    subtitle: "Nature's purest silence",
    price: "$4,200",
    duration: "7 Days / 6 Nights",
    img: "/images/luxury-escapes.jpg",
  },
  {
    title: "Dubai Opulence",
    subtitle: "The future of tradition",
    price: "$2,100",
    duration: "5 Days / 4 Nights",
    img: "/images/hero-bg.jpg",
  },
  {
    title: "Thai Serenity",
    subtitle: "Temples & Tropical Bliss",
    price: "$1,450",
    duration: "8 Days / 7 Nights",
    img: "/images/destinations/international.jpg",
  },
];

export default function InternationalPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="bg-surface pt-32 pb-0 px-12">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-20">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4">
            Beyond Boundaries
          </p>
          <h1 className="font-serif text-[72px] text-midnight font-normal leading-none mb-5">
            Worldly Wonders &amp;
            <br />
            Sacred Sanctuaries
          </h1>
          <p className="font-sans text-lg text-[#43474e] leading-relaxed max-w-2xl">
            Experience a higher plane of travel. From the turquoise horizons of
            the Maldives to the spiritual echoes of Bali, our international
            voyages are crafted for the soul.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="max-w-7xl mx-auto">
          {/* Row 1 */}
          <div className="grid grid-cols-12 gap-8 mb-8" style={{ gridTemplateRows: "592px" }}>
            {/* Maldives — large */}
            <div className="col-span-12 lg:col-span-8 bg-white rounded-lg overflow-hidden shadow-card flex flex-col">
              {/* Image portion */}
              <div className="relative flex-1">
                <Image
                  src="/images/destinations/international.jpg"
                  alt="Maldives: The Azure Sanctuary"
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                  quality={90}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-midnight/80" aria-hidden="true" />
                <div className="absolute top-6 left-6 bg-gold px-4 py-1 rounded-full">
                  <span className="font-sans text-xs font-bold tracking-[0.12em] uppercase text-gold-dark">
                    Premium Retreat
                  </span>
                </div>
              </div>
              {/* Info bar */}
              <div className="flex items-end justify-between p-8">
                <div>
                  <h2 className="font-serif text-[30px] text-midnight font-normal leading-tight mb-3">
                    Maldives: The Azure Sanctuary
                  </h2>
                  <div className="flex items-center gap-6 font-sans text-sm text-[#43474e]">
                    <span>Overwater Villas</span>
                    <span>Holistic Wellness</span>
                    <span>Private Island Dining</span>
                  </div>
                </div>
                <div className="text-right shrink-0 ml-8">
                  <p className="font-sans text-xs uppercase tracking-[0.12em] text-[#43474e] mb-1">
                    Starting From
                  </p>
                  <p className="font-serif text-[30px] text-gold-dark font-normal">
                    $3,499
                  </p>
                </div>
              </div>
            </div>

            {/* Bali — tall */}
            <div className="col-span-12 lg:col-span-4 bg-white rounded-lg overflow-hidden shadow-card flex flex-col">
              <div className="relative flex-1">
                <Image
                  src="/images/luxury-escapes.jpg"
                  alt="Bali Spirit"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-midnight/80" aria-hidden="true" />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl text-midnight font-normal mb-3">
                  Bali Spirit
                </h3>
                <p className="font-sans text-sm text-[#43474e] leading-relaxed mb-4">
                  A journey through Ubud&apos;s sacred forests and coastal rituals.
                </p>
                <div className="flex items-center justify-between border-t border-midnight/10 pt-4">
                  <p className="font-serif text-xl text-gold-dark font-normal">$1,850</p>
                  <Link
                    href="/inquiry"
                    className="font-sans text-xs font-bold tracking-[0.12em] uppercase text-midnight hover:text-gold-dark transition-colors"
                  >
                    EXPLORE →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-20">
            {SMALL_CARDS.map((card) => (
              <div key={card.title} className="bg-white rounded-lg overflow-hidden shadow-card">
                <div className="relative h-72">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover"
                    quality={80}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-midnight/80" aria-hidden="true" />
                  <div className="absolute bottom-6 left-6">
                    <p className="font-serif text-2xl text-surface font-normal leading-tight">
                      {card.title}
                    </p>
                    <p className="font-sans text-sm text-white/80">{card.subtitle}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-6">
                  <p className="font-sans text-base font-bold text-gold-dark">{card.price}</p>
                  <p className="font-sans text-xs text-[#43474e] uppercase tracking-[0.12em]">
                    {card.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy py-24 px-12 relative overflow-hidden">
        <div className="absolute top-[-12rem] right-[-12rem] w-96 h-96 bg-gold-dark rounded-xl opacity-5 blur-[32px]" aria-hidden="true" />
        <div className="absolute bottom-[-8rem] left-[-8rem] w-64 h-64 bg-gold-dark rounded-xl opacity-5 blur-[20px]" aria-hidden="true" />
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-8 relative z-10">
          <h2 className="font-serif text-4xl text-surface font-normal leading-snug">
            Begin Your Transcendent Journey
          </h2>
          <p className="font-sans text-lg text-white/80 leading-relaxed">
            Subscribe for exclusive early access to our seasonal international
            retreats and spiritual guide insights.
          </p>
          <div className="flex gap-4 w-full max-w-md">
            <input
              type="email"
              placeholder="Your Sanctuary Email"
              className="flex-1 min-w-0 bg-white/10 border border-white/30 px-4 py-3.5 font-sans text-base text-white placeholder:text-white/50 focus:outline-none focus-visible:outline-none focus:border-gold"
              aria-label="Email address"
            />
            <button
              type="button"
              className="bg-gold text-gold-dark font-sans text-xs font-bold tracking-[0.12em] uppercase px-8 py-3.5 rounded-sm hover:bg-yellow-300 transition-colors min-h-11"
            >
              Join Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
