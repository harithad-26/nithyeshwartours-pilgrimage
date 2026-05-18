import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { PackageCard } from "@/components/ui/PackageCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { getFeaturedPackages, getTestimonials } from "@/lib/strapi";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sacred Pilgrimages",
  description:
    "Begin your spiritual journey with Nithyeshwar Tours. Curated pilgrimage routes across India's most revered sites.",
};

const FEATURED_PILGRIMAGES = [
  {
    name: "Kashi — The Eternal City",
    description:
      "Walk the ancient ghats of Varanasi, witness Ganga Aarti at dawn, and seek blessings at the Kashi Vishwanath temple.",
    img: "/images/kashi.jpg",
    slug: "kashi-eternal-city",
  },
  {
    name: "The Shambhavi Trail",
    description:
      "A meditative pilgrimage through the mystical paths of the Himalayas, connecting ashrams and sacred peaks.",
    img: "/images/shambhavi.jpg",
    slug: "shambhavi-trail",
  },
  {
    name: "Chardham Yatra",
    description:
      "The four holy abodes — Yamunotri, Gangotri, Kedarnath, Badrinath. The complete Hindu pilgrimage circuit.",
    img: "/images/chardham.jpg",
    slug: "chardham-yatra",
  },
];

export default async function PilgrimagePage() {
  const [packages, testimonials] = await Promise.all([
    getFeaturedPackages(),
    getTestimonials(),
  ]);

  const pilgrimPackages = packages.filter((p) => p.category === "pilgrimage");

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center" aria-label="Sacred Pilgrimages">
        <Image
          src="/images/hero-pilgrimage.jpg"
          alt="Sacred pilgrimage landscape"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-midnight/80" aria-hidden="true" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-gold mb-6">
            Spiritual Journeys
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-white font-semibold leading-tight mb-6">
            Sacred Pilgrimages
          </h1>
          <p className="font-sans text-base text-white/70 leading-relaxed max-w-lg mx-auto mb-10">
            More than travel. A transformation. We walk with you on paths that have guided devotees for centuries.
          </p>
          <Button href="/inquiry" variant="secondary">Plan Your Pilgrimage</Button>
        </div>
      </section>

      {/* Featured routes */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Featured Routes"
            title="Choose Your Sacred Path"
            subtitle="Each pilgrimage is an encounter with the divine. Choose the one that calls to your soul."
          />

          <div className="space-y-16">
            {FEATURED_PILGRIMAGES.map((item, i) => (
              <div
                key={item.slug}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Image — staggered offset border */}
                <div
                  className={`relative h-80 ${
                    i % 2 !== 0 ? "lg:col-start-2 lg:row-start-1" : ""
                  }`}
                >
                  <div
                    className={`absolute inset-0 border border-gold/20 rounded-md ${
                      i % 2 !== 0 ? "-translate-x-4 translate-y-4" : "translate-x-4 translate-y-4"
                    }`}
                    aria-hidden="true"
                  />
                  <div className="relative h-full rounded-md overflow-hidden img-overlay">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      quality={85}
                    />
                  </div>
                </div>

                {/* Text */}
                <div
                  className={
                    i % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""
                  }
                >
                  <h2 className="font-serif text-3xl text-navy font-semibold mb-4 leading-snug">
                    {item.name}
                  </h2>
                  <p className="font-sans text-base text-midnight/60 leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <Button href={`/packages/${item.slug}`} variant="secondary">
                    Explore This Route
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package cards */}
      {pilgrimPackages.length > 0 && (
        <section className="py-20 px-6 bg-surface-low">
          <div className="max-w-7xl mx-auto">
            <SectionHeader eyebrow="Book a Package" title="Pilgrimage Packages" align="left" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pilgrimPackages.map((p, i) => (
                <PackageCard key={p.id} pkg={p} priority={i < 3} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="py-20 px-6 bg-navy">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Pilgrim Stories"
            title="Voices of the Devoted"
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.id} t={t} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
