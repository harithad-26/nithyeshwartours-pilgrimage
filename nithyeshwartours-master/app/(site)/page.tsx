import type { Metadata } from "next";
import { getFeaturedPackages, getTestimonials } from "@/lib/strapi";
import {
  HeroSection,
  TopPackages,
  LuxuryEscapes,
  SacredPilgrimages,
  PilgrimStories,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover transformative pilgrimage and travel experiences across India and beyond with Nithyeshwar Tours.",
  openGraph: {
    title: "Nithyeshwar Tours — The Sacred Journey",
    description:
      "Curating pilgrimage and travel experiences across India and beyond.",
  },
};

export default async function HomePage() {
  const [packages, testimonials] = await Promise.all([
    getFeaturedPackages(),
    getTestimonials(),
  ]);

  return (
    <main className="flex-1">
      <HeroSection />
      <TopPackages packages={packages} />
      <LuxuryEscapes />
      <SacredPilgrimages packages={packages} />
      <PilgrimStories testimonials={testimonials} />
    </main>
  );
}
