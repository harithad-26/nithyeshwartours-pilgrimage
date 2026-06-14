import Image from "next/image";
import { Timeline } from "@/components/sections/Timeline";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { AwardsSection } from "@/components/sections/AwardsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
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
      {/* Hero — light desaturated treatment matching Figma */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        aria-label="About Nithyeshwar Tours"
      >
        {/* Desaturated image at reduced opacity */}
        <Image
          src="/images/about-hero.jpg"
          alt="Ancient temple architecture"
          fill
          sizes="100vw"
          className="object-cover opacity-40 grayscale"
          priority
          quality={90}
        />
        {/* Light gradient overlay — surface tone */}
        <div
          className="absolute inset-0 bg-linear-to-b from-surface/30 via-surface/50 to-surface/80"
          aria-hidden="true"
        />

        {/* Centered text content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center pt-24">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-5">
            Our Sacred Roots
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-midnight font-normal leading-tight tracking-tight mb-6">
            The Legacy of Spiritual Passage
          </h1>
          <p className="font-sans text-lg text-[#43474e] leading-relaxed font-light max-w-2xl mx-auto">
            For over three decades, Nithyeshwar Tours has been a bridge between
            the seeker and the sacred, curating pilgrimages that transcend
            physical travel to become soul-stirring journeys.
          </p>
        </div>
      </section>

      {/* Mission — image left, text right */}
      <section className="py-32 px-6 bg-surface">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: image with gold ambient blur */}
          <div className="relative">
            {/* Gold ambient blur behind image */}
            <div
              className="absolute -top-10 -left-10 w-64 h-64 bg-gold-muted blur-3xl rounded-full"
              aria-hidden="true"
            />
            <div className="relative rounded-md overflow-hidden aspect-4/5">
              <Image
                src="/images/about-hero.jpg"
                alt="Sacred mission — Nithyeshwar Tours"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: text */}
          <div className="pt-4">
            <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal mb-6 leading-snug">
              A Purpose Beyond Destination
            </h2>
            <p className="font-sans text-lg text-[#43474e] leading-relaxed mb-5">
              Founded in the philosophy of Dharma, Nithyeshwar Tours was born
              from a singular belief — that spiritual travel is not merely
              tourism, but transformation.
            </p>
            <p className="font-sans text-lg text-[#43474e] leading-relaxed mb-8">
              We believe that a pilgrimage is not merely a visit to a site; it
              is a transformative internal experience that reshapes the pilgrim
              from within, one sacred step at a time.
            </p>

            <blockquote className="border-l-2 border-gold-dark pl-5">
              <p className="font-serif text-xl text-midnight leading-relaxed">
                &ldquo;We do not just show you the temples; we invite you to
                experience the vibration of the sacred.&rdquo;
              </p>
              <footer className="mt-3 font-sans text-xs text-gold-dark uppercase tracking-widest">
                — Shri Nithyeshwar, Founder
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <Timeline />

      <StatsSection />

      <AwardsSection />

      <CertificationsSection />

      <TeamSection />

      {/* Testimonials */}
      <section className="py-32 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal text-center mb-12 leading-snug">
            Spoken from the Heart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {testimonials.slice(0, 3).map((t, i) => (
              <div
                key={t.id}
                className={i === 1 ? "-mt-4 ring-1 ring-gold-dark/20 rounded-md" : ""}
              >
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion />
    </>
  );
}
