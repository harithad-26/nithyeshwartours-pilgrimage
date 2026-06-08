import type { Metadata } from "next";
import { TripBuilderForm } from "@/components/trip-builder/TripBuilderForm";

export const metadata: Metadata = {
  title: "Trip Builder — Design Your Sacred Journey",
  description:
    "Personalize your pilgrimage. Choose your destination, dates, and group type to receive a bespoke sacred itinerary from Nithyeshwar Tours.",
};

export default function TripBuilderPage() {
  return (
    <div className="bg-surface min-h-screen">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 pt-32 pb-24">
        {/* Header */}
        <div className="mb-16">
          <p className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-gold-dark mb-4">
            Personalized Pilgrimage
          </p>
          <h1 className="font-serif text-6xl md:text-[72px] text-midnight font-normal leading-[1] max-w-[768px]">
            Design Your Sacred
            <br />
            Journey
          </h1>
        </div>

        <TripBuilderForm />
      </div>
    </div>
  );
}
