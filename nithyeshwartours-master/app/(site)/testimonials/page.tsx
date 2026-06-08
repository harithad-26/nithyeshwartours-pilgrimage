import type { Metadata } from "next";
import { getTestimonials } from "@/lib/strapi";
import { TestimonialsGrid } from "@/components/sections/TestimonialsGrid";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pilgrim Stories — Voices of Enlightenment",
  description:
    "Thousands of pilgrims have walked these sacred paths with Nithyeshwar Tours. Here are their stories, told in their own words.",
};

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <>
      {/* Page header */}
      <section className="pt-36 pb-16 px-6 bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4">
            Voices of Enlightenment
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-midnight font-normal leading-tight tracking-tight mb-5">
            Pilgrim Stories
          </h1>
          <p className="font-sans text-lg text-[#43474e] leading-relaxed font-light max-w-2xl mx-auto">
            Thousands of devotees have walked these sacred paths with us. Here
            are their stories, told in their own words.
          </p>
        </div>
      </section>

      {/* Testimonials grid */}
      <TestimonialsGrid testimonials={testimonials} />

      {/* CTA section */}
      <section className="py-32 px-6 bg-midnight">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold mb-5">
            Add Your Story
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white font-normal leading-snug mb-6">
            Share Your Sacred Experience
          </h2>
          <p className="font-sans text-base text-white/60 leading-relaxed mb-10 max-w-xl mx-auto">
            Your pilgrimage story can inspire thousands of fellow seekers.
            Reach out and let us share your transformative journey.
          </p>
          <Link
            href="/inquiry"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold bg-gold text-midnight px-8 py-4 rounded-md hover:bg-gold-dark hover:text-white transition-colors duration-300 min-h-11"
          >
            Plan Your Pilgrimage
          </Link>
        </div>
      </section>
    </>
  );
}
