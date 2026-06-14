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
    </>
  );
}
