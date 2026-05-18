import Image from "next/image";
import { notFound } from "next/navigation";
import { getPackagesByDestination } from "@/lib/strapi";
import { PackageCard } from "@/components/ui/PackageCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Metadata } from "next";

const DESTINATION_META: Record<string, { title: string; subtitle: string; hero: string }> = {
  "madhya-pradesh": {
    title: "Madhya Pradesh",
    subtitle: "The Heart of India — Ancient temples, sacred rivers, and timeless devotion.",
    hero: "/images/destinations/madhya-pradesh.jpg",
  },
  "uttar-pradesh": {
    title: "Uttar Pradesh",
    subtitle: "The Land of the Divine — Varanasi, Mathura, Ayodhya, and the Ganga.",
    hero: "/images/destinations/uttar-pradesh.jpg",
  },
  odisha: {
    title: "Odisha",
    subtitle: "The Soul of Eastern India — Jagannath, Konark, and ancient sacred arts.",
    hero: "/images/destinations/odisha.jpg",
  },
  andaman: {
    title: "Andaman",
    subtitle: "Sacred shores and pristine waters — where pilgrimage meets paradise.",
    hero: "/images/destinations/andaman.jpg",
  },
  "tamil-nadu": {
    title: "Tamil Nadu Pilgrimage",
    subtitle: "The Dravidian Tradition — grand temples, ancient rituals, divine heritage.",
    hero: "/images/destinations/tamil-nadu.jpg",
  },
  international: {
    title: "International Packages",
    subtitle: "Sacred journeys beyond borders — Nepal, Sri Lanka, Cambodia, and beyond.",
    hero: "/images/destinations/international.jpg",
  },
  honeymoon: {
    title: "Honeymoon Packages",
    subtitle: "Begin your journey together — curated experiences for couples.",
    hero: "/images/destinations/honeymoon.jpg",
  },
};

interface Props {
  params: Promise<{ destination: string }>;
}

export function generateStaticParams() {
  return Object.keys(DESTINATION_META).map((d) => ({ destination: d }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { destination } = await params;
  const meta = DESTINATION_META[destination];
  if (!meta) return {};
  return { title: meta.title, description: meta.subtitle };
}

export default async function PackageListingPage({ params }: Props) {
  const { destination } = await params;
  const meta = DESTINATION_META[destination];
  if (!meta) notFound();

  const packages = await getPackagesByDestination(destination);

  return (
    <>
      {/* Destination hero */}
      <section className="relative h-72 md:h-96 img-overlay" aria-label={meta.title}>
        <Image
          src={meta.hero}
          alt={meta.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-navy/40 to-transparent" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 max-w-7xl mx-auto w-full">
          <h1 className="font-serif text-4xl md:text-5xl text-white font-semibold mb-3">
            {meta.title}
          </h1>
          <p className="font-sans text-base text-white/70 max-w-xl">{meta.subtitle}</p>
        </div>
      </section>

      {/* Package grid */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          {packages.length > 0 ? (
            <>
              <SectionHeader
                eyebrow={`${packages.length} Packages`}
                title={`Explore ${meta.title}`}
                align="left"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {packages.map((pkg, i) => (
                  <PackageCard key={pkg.id} pkg={pkg} priority={i < 3} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="font-serif text-2xl text-navy mb-4">
                Packages coming soon
              </p>
              <p className="font-sans text-sm text-midnight/50">
                We are curating sacred journeys for this destination. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
