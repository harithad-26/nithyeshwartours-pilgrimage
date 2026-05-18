import { SectionHeader } from "@/components/ui/SectionHeader";
import { StateGrid } from "@/components/sections/StateGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "India Pilgrimage Destinations",
  description:
    "Explore sacred pilgrimage destinations across India — from the ghats of Varanasi to the temples of Tamil Nadu.",
};

export default function IndiaPage() {
  return (
    <div className="py-20 px-6 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Spiritual India"
          title="Explore Sacred Destinations"
          subtitle="Choose your state and discover curated pilgrimage packages across the subcontinent."
        />
        <StateGrid />
      </div>
    </div>
  );
}
