import type { Metadata } from "next";
import { getFeaturedPackages, getTestimonials } from "@/lib/strapi";
import {
  HeroSection,
  WhyChooseUs,
  TopPackages,
  LegacyTrust,
  UpcomingYatras,
  LuxuryEscapes,
  SacredPilgrimages,
  FounderStory,
  PhotoGallery,
  PilgrimStories,
  FaqAccordion,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover transformative travel experiences across India and beyond with Nithyeshwar Tours. Pilgrimages, India Tours, International Destinations, Honeymoons, and Custom Travel.",
  openGraph: {
    title: "Nithyeshwar Tours — Discover India & Beyond",
    description:
      "Curated journeys for every traveller. 30+ years of trusted travel expertise.",
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
      <WhyChooseUs />
      <TopPackages packages={packages} />
      <LegacyTrust />
      <UpcomingYatras />
      <LuxuryEscapes />
      <SacredPilgrimages packages={packages} />
      <FounderStory />
      <PhotoGallery />
      <PilgrimStories testimonials={testimonials} />
      <FaqAccordion />
    </main>
  );
}
