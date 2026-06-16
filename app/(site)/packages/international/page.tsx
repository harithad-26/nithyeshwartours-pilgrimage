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
    img: "/images/destinations/switzerland.png",
    link: "/packages/international/switzerland",
  },
  {
    title: "Dubai Opulence",
    subtitle: "The future of tradition",
    price: "$2,100",
    duration: "5 Days / 4 Nights",
    img: "/images/destinations/dubai.png",
    link: "/packages/international/dubai",
  },
  {
    title: "Sacred Nepal",
    subtitle: "Pashupatinath & Muktinath",
    price: "₹14,500+",
    duration: "Yatras & Tours",
    img: "/images/destinations/nepal.png",
    link: "/packages/international/nepal",
  },
];

export default function InternationalPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="bg-surface pt-24 sm:pt-32 pb-0 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-10 md:mb-16 lg:mb-20">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4">
            Beyond Boundaries
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[72px] text-midnight font-normal leading-none mb-5">
            Worldly Wonders &amp;
            <br />
            Sacred Sanctuaries
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#43474e] leading-relaxed max-w-2xl">
            Experience a higher plane of travel. From the turquoise horizons of
            the Maldives to the spiritual echoes of Bali, our international
            voyages are crafted for the soul.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="max-w-7xl mx-auto">
          {/* Row 1 */}
          <div className="grid grid-cols-12 gap-8 mb-8 international-bento-grid">
            {/* Maldives — large */}
            <div className="col-span-12 lg:col-span-8 bg-white rounded-lg overflow-hidden shadow-card flex flex-col">
              {/* Image portion */}
              <Link href="/packages/international/maldives" className="relative flex-1 block overflow-hidden group min-h-[280px]">
                <Image
                  src="/images/destinations/international.jpg"
                  alt="Maldives: The Azure Sanctuary"
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={90}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-midnight/80" aria-hidden="true" />
                <div className="absolute top-6 left-6 bg-gold px-4 py-1 rounded-full z-10">
                  <span className="font-sans text-xs font-bold tracking-[0.12em] uppercase text-gold-dark">
                    Premium Retreat
                  </span>
                </div>
              </Link>
              {/* Info bar */}
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between p-6 sm:p-8 gap-4">
                <div>
                  <h2 className="font-serif text-2xl sm:text-[30px] text-midnight font-normal leading-tight mb-3 line-clamp-2">
                    <Link href="/packages/international/maldives" className="hover:text-gold-dark transition-colors">
                      Maldives: The Azure Sanctuary
                    </Link>
                  </h2>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-sans text-sm text-[#43474e]">
                    <span>Overwater Villas</span>
                    <span>Holistic Wellness</span>
                    <span>Private Island Dining</span>
                  </div>
                </div>
                <div className="flex flex-col items-start sm:items-end shrink-0 sm:ml-8">
                  <div>
                    <p className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.12em] text-[#43474e] mb-1">
                      Starting From
                    </p>
                    <p className="font-serif text-2xl sm:text-[30px] text-gold-dark font-normal leading-none">
                      $3,499
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bali — tall */}
            <div className="col-span-12 lg:col-span-4 bg-white rounded-lg overflow-hidden shadow-card flex flex-col">
              <Link href="/packages/international/bali" className="relative flex-1 block overflow-hidden group min-h-[240px]">
                <Image
                  src="/images/destinations/bali.png"
                  alt="Bali Spirit"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-midnight/80" aria-hidden="true" />
              </Link>
              <div className="p-6 sm:p-8">
                <h3 className="font-serif text-2xl text-midnight font-normal mb-3 line-clamp-2">
                  <Link href="/packages/international/bali" className="hover:text-gold-dark transition-colors">
                    Bali Spirit
                  </Link>
                </h3>
                <p className="font-sans text-sm text-[#43474e] leading-relaxed mb-4">
                  A journey through Ubud&apos;s sacred forests and coastal rituals.
                </p>
                <div className="flex items-center justify-between border-t border-midnight/10 pt-4">
                  <p className="font-serif text-xl text-gold-dark font-normal">$1,850</p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-12 md:pb-16 lg:pb-20">
            {SMALL_CARDS.map((card) => {
              const cardContent = (
                <>
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
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="font-serif text-xl sm:text-2xl text-surface font-normal leading-tight line-clamp-2">
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
                </>
              );

              if (card.link) {
                return (
                  <Link
                    key={card.title}
                    href={card.link}
                    className="bg-white rounded-lg overflow-hidden shadow-card block hover:shadow-lg transition-shadow duration-300 animate-in fade-in"
                  >
                    {cardContent}
                  </Link>
                );
              }

              return (
                <div key={card.title} className="bg-white rounded-lg overflow-hidden shadow-card">
                  {cardContent}
                </div>
              );
            })}
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
