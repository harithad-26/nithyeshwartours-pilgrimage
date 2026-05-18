import Image from "next/image";
import { Timeline } from "@/components/sections/Timeline";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getTestimonials } from "@/lib/strapi";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — The Legacy of Spiritual Passage",
  description:
    "For over three decades, Nithyeshwar Tours has been the bridge between the seeker and the sacred. Our story, mission, and the team that guides you.",
};

export default async function AboutPage() {
  const testimonials = await getTestimonials();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end pb-16" aria-label="About Nithyeshwar Tours">
        <Image
          src="/images/about-hero.jpg"
          alt="Ancient temple architecture"
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-navy/50 to-transparent" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-gold mb-4">
            Our Story
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-white font-semibold leading-tight max-w-2xl">
            The Legacy of Spiritual Passage
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-serif text-3xl text-navy font-semibold mb-6 leading-snug">
              A Purpose Beyond Destination
            </h2>
            <p className="font-sans text-base text-midnight/70 leading-relaxed mb-4">
              Founded in the philosophy of Dharma, Nithyeshwar Tours was born from a singular belief — that spiritual travel is not merely tourism, but transformation.
            </p>
            <p className="font-sans text-base text-midnight/70 leading-relaxed">
              Our team of dedicated guides, scholars, and spiritual companions have walked these sacred paths themselves. We do not merely plan itineraries — we walk with you on your pilgrimage.
            </p>
          </div>
          <blockquote className="gold-accent-left">
            <p className="font-serif text-xl text-navy italic leading-relaxed">
              &ldquo;We do not plan journeys for the feet. We plan journeys for the soul.&rdquo;
            </p>
            <footer className="mt-4 font-sans text-sm text-midnight/50">
              — Founder, Nithyeshwar Tours
            </footer>
          </blockquote>
        </div>
      </section>

      <Timeline />

      {/* Testimonials */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="Pilgrim Stories" title="Spoken from the Heart" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t) => (
              <TestimonialCard key={t.id} t={t} />
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion />
    </>
  );
}
