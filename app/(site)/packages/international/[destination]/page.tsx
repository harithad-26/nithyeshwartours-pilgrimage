import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MOCK_DESTINATIONS } from "@/lib/mockInternationalData";
import InternationalPackagesClient from "@/components/nepal/InternationalPackagesClient";

interface PageProps {
  params: Promise<{ destination: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { destination } = await params;
  const destKey = destination.toLowerCase();
  const dest = MOCK_DESTINATIONS[destKey];
  
  if (!dest) {
    return {
      title: "Destination Not Found — Nithyeshwar Tours",
    };
  }

  return {
    title: `${dest.name} Tour Packages — Luxury Escapes & Curated Travels`,
    description: dest.description,
  };
}

export default async function DynamicDestinationPage({ params }: PageProps) {
  const { destination } = await params;
  const destKey = destination.toLowerCase();
  
  if (!MOCK_DESTINATIONS[destKey]) {
    notFound();
  }

  return <InternationalPackagesClient destinationKey={destKey} />;
}
