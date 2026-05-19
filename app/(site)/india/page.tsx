import { StateGrid } from "@/components/sections/StateGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "India — Divine Journeys Across Bharat",
  description:
    "From the mist-covered peaks of Kashmir to the golden shores of Tamil Nadu — explore sacred pilgrimage destinations across India with Nithyeshwar Tours.",
};

export default function IndiaPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-36 pb-16 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4">
            The Sacred States
          </p>
          <h1 className="font-serif text-6xl md:text-7xl text-midnight font-normal leading-tight max-w-2xl mb-5 tracking-tight">
            Divine Journeys Across Bharat
          </h1>
          <p className="font-sans text-lg text-[#43474e] max-w-xl leading-relaxed">
            From the mist-covered peaks of Kashmir to the golden shores of Tamil
            Nadu, embark on a soul-stirring exploration of India&apos;s most
            profound spiritual landscapes.
          </p>
        </div>
      </section>

      {/* Photo mosaic */}
      <section className="px-6 pb-12 bg-surface" aria-label="India destinations">
        <div className="max-w-7xl mx-auto">
          <StateGrid />
        </div>
      </section>

      {/* Closing quote — light surface-low section matching Figma */}
      <section className="py-20 px-6 bg-surface-low">
        <div className="max-w-3xl mx-auto text-center">
          {/* Decorative lotus/om icon */}
          <div className="flex justify-center mb-6" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-gold-dark opacity-60">
              <path d="M16 4C16 4 8 10 8 18C8 22.4 11.6 26 16 26C20.4 26 24 22.4 24 18C24 10 16 4 16 4Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <path d="M16 26C16 26 10 22 6 18C10 16 13 17 16 20C19 17 22 16 26 18C22 22 16 26 16 26Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <circle cx="16" cy="16" r="2" fill="currentColor"/>
            </svg>
          </div>
          <p className="font-serif text-4xl md:text-5xl text-midnight font-normal leading-snug">
            &ldquo;A Sacred Journey Awaits&rdquo;
          </p>
          <p className="font-sans text-xs text-gold-dark mt-6 tracking-[0.2em] uppercase font-semibold">
            A Sacred Journey Awaits
          </p>
        </div>
      </section>
    </>
  );
}
