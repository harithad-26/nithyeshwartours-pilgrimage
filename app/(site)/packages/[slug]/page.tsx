import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getPackageBySlug,
  getAllPackageSlugs,
  getPackagesByDestination,
} from "@/lib/strapi";
import { MOCK_INDIA_DESTINATIONS } from "@/lib/mockIndiaData";
import { IndiaDestinationTemplate, IndiaPackageDetailTemplate } from "@/components/sections";

export const dynamicParams = true;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const packageSlugs = await getAllPackageSlugs();
  const destinationSlugs = MOCK_INDIA_DESTINATIONS.map((d) => d.slug);
  const allSlugs = Array.from(new Set([...packageSlugs, ...destinationSlugs]));
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  // Check if it is a destination
  const dest = MOCK_INDIA_DESTINATIONS.find((d) => d.slug === slug);
  if (dest) {
    return {
      title: `${dest.title} — ${dest.eyebrow} | Nithyeshwar Tours`,
      description: dest.description,
    };
  }

  // Otherwise check if it is a package
  const pkg = await getPackageBySlug(slug);
  if (pkg) {
    return {
      title: `${pkg.title} | ${pkg.state || "India Packages"} | Nithyeshwar Tours`,
      description: pkg.subtitle,
    };
  }

  return {};
}

export default async function PackagesSlugPage({ params }: Props) {
  const { slug } = await params;

  // 1. Resolve Destination Landing Page
  const destinationDetail = MOCK_INDIA_DESTINATIONS.find((d) => d.slug === slug);
  if (destinationDetail) {
    const destinationPackages = await getPackagesByDestination(slug);
    return (
      <IndiaDestinationTemplate
        destination={destinationDetail}
        packages={destinationPackages}
      />
    );
  }

  // 2. Resolve Package Detail Page
  const pkg = await getPackageBySlug(slug);
  if (pkg) {
    return <IndiaPackageDetailTemplate pkg={pkg} />;
  }

  // 3. Fallback
  notFound();
}
