import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Travel Memories",
};

const captions = [
  "Varanasi Ganga Aarti",
  "Kedarnath Temple",
  "Jagannath Puri",
  "Tirupati Balaji",
  "Amarnath Yatra",
  "Kanchipuram Temples",
  "Mathura Vrindavan",
  "Shirdi Sai Baba",
  "Rameshwaram",
  "Dwarka",
  "Somnath",
  "Badrinath",
];

const gallery = Array.from({ length: 12 }, (_, i) => ({
  src: `/images/gallery/memory-${i + 1}.jpg`,
  caption: captions[i],
  height: i % 3 === 0 ? 800 : 500,
}));

export default function TravelMemoriesPage() {
  return (
    <main className="flex-1">
      <section className="py-24 px-4 bg-surface">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Gallery"
            title="Travel Memories"
            subtitle="Glimpses of the sacred — moments of devotion, beauty, and transformation captured along our pilgrim paths."
          />

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5 mt-4">
            {gallery.map((item, i) => (
              <figure
                key={i}
                className="break-inside-avoid rounded-md overflow-hidden relative img-overlay group"
              >
                <Image
                  src={item.src}
                  alt={item.caption}
                  width={600}
                  height={item.height}
                  quality={85}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-105"
                />
                <figcaption className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-navy/80 to-transparent font-sans text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 motion-safe:transition-opacity z-10">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
