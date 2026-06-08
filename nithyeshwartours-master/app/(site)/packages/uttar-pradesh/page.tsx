import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uttar Pradesh Packages — The Land of the Divine",
  description:
    "Varanasi, Mathura, Ayodhya, and the Ganga. Journey through the cradle of spirituality in northern India.",
};

const ITINERARIES = [
  {
    code: "UP 01",
    duration: "3 Nights / 4 Days",
    sentiment: "Ganga Aarti & Varanasi",
    price: "₹5,500",
  },
  {
    code: "UP 02",
    duration: "5 Nights / 6 Days",
    sentiment: "Ayodhya & Mathura",
    price: "₹9,200",
  },
  {
    code: "UP 03",
    duration: "7 Nights / 8 Days",
    sentiment: "Four Dhams of UP",
    price: "₹16,500",
  },
  {
    code: "UP 04",
    duration: "9 Nights / 10 Days",
    sentiment: "Complete Northern Circuit",
    price: "₹21,000",
  },
];

export default function UttarPradeshPage() {
  return (
    <>
      {/* Hero — dark bg, text left, lamp image right */}
      <section className="relative bg-midnight min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/destinations/uttar-pradesh.jpg"
            alt="Sacred Varanasi"
            fill
            sizes="100vw"
            className="object-cover opacity-30"
            quality={85}
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-32">
          {/* Text — col 1-5 */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold">
              The Eternal North
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-surface font-normal leading-tight">
              Uttar Pradesh
              <br />
              Packages
            </h1>
            <p className="font-sans text-base text-white/60 leading-relaxed">
              Journey through the heartland of faith, where the divine manifests
              in every ghat, every temple, and every lamp set afloat on the
              sacred Ganga.
            </p>
            <Link
              href="/inquiry"
              className="self-start inline-flex items-center gap-2 font-sans text-sm font-semibold bg-white text-midnight px-8 py-4 rounded-md hover:bg-gold transition-colors duration-300 min-h-11"
            >
              Plan Your Pilgrimage
            </Link>
          </div>

          {/* Image — col 8-12 */}
          <div className="lg:col-span-5 lg:col-start-8 relative h-96 lg:h-[500px] rounded-sm overflow-hidden">
            <Image
              src="/images/pilgrimage/varanasi.jpg"
              alt="Ganga Aarti, Varanasi"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
              quality={90}
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-midnight to-transparent" aria-hidden="true" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="font-serif text-xl text-surface font-normal">
                The Eternal City of Varanasi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Awakening of Ayodhya — split section */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative h-80 lg:h-[500px]">
            <Image
              src="/images/india-states/varanasi-ghats.jpg"
              alt="Ram Mandir, Ayodhya"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              quality={85}
            />
          </div>
          {/* Text */}
          <div className="flex flex-col justify-center px-12 py-16 bg-surface">
            <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-5">
              City of Faith
            </p>
            <h2 className="font-serif text-4xl text-midnight font-normal leading-snug mb-5">
              The Awakening of Ayodhya
            </h2>
            <p className="font-sans text-base text-midnight/60 leading-relaxed mb-6 max-w-sm">
              Experience the spiritual resurrection of the birthplace of Lord
              Rama. The Ram Mandir, a masterpiece of devotion, continues to
              inspire millions across the globe.
            </p>
            <div className="self-start bg-gold-dark/10 border border-gold-dark/20 px-4 py-2 rounded-sm">
              <span className="font-sans text-xs font-bold tracking-[0.12em] uppercase text-gold-dark">
                Part of the Holy to the Core of Dharma
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Sacred Itineraries — table */}
      <section className="bg-surface-low py-20 px-12">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-3">
            Pilgrimage Routes
          </p>
          <h2 className="font-serif text-4xl text-midnight font-normal mb-12 leading-snug">
            Sacred Itineraries
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
                    className="border-b border-midnight/5 hover:bg-surface transition-colors"
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
          <p className="font-sans text-xs text-midnight/30 mt-4 italic">
            * Pricing is indicative. Final quote based on group size, season, and
            accommodation tier.
          </p>
        </div>
      </section>

      {/* Traditional Wisdom + Ghats & Gallis — dual content blocks */}
      <section className="bg-surface py-24 px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Traditional Wisdom */}
          <div className="bg-surface-low rounded-md p-10">
            <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4">
              Ancient Knowledge
            </p>
            <h3 className="font-serif text-3xl text-midnight font-normal mb-4 leading-snug">
              Traditional Wisdom
            </h3>
            <p className="font-sans text-sm text-midnight/60 leading-relaxed mb-6">
              Our guides carry decades of initiation in the sacred traditions of
              the Ganga basin. They can walk you through the Vedic meaning of
              each ritual, each temple hour, each offering made to the river.
            </p>
            <Link
              href="/about"
              className="font-sans text-xs font-bold tracking-[0.12em] uppercase text-gold-dark hover:text-midnight transition-colors"
            >
              Meet Our Guides →
            </Link>
          </div>

          {/* Ghats & Gallis */}
          <div className="relative h-72 md:h-auto rounded-md overflow-hidden min-h-[280px]">
            <Image
              src="/images/india-states/varanasi-ghats.jpg"
              alt="Ghats of Varanasi"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 to-transparent" aria-hidden="true" />
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="font-serif text-2xl text-surface font-normal mb-2">
                Ghats &amp; Gallis
              </h3>
              <p className="font-sans text-sm text-white/70 leading-relaxed">
                Wander through the lanes of Kashi with a guide who has walked
                them every day since childhood.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
