import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Travel Memories — Sacred Journeys in Frame",
  description:
    "Glimpses of sacred journeys — moments of devotion, beauty, and transformation captured along our pilgrim paths.",
};

const GALLERY_ROW_1 = [
  {
    src: "/images/india-states/varanasi-ghats-v3.png",
    caption: "Varanasi Ghats",
    colSpan: "col-span-12 md:col-span-8",
    height: "h-[480px]",
  },
  {
    src: "/images/india-states/himachal-photo.png",
    caption: "Himalayan Paths",
    colSpan: "col-span-12 md:col-span-4",
    height: "h-[480px]",
  },
];

const GALLERY_ROW_2 = [
  {
    src: "/images/india-states/tamil-nadu-v4.png",
    caption: "Tamil Nadu Temples",
    colSpan: "col-span-12 md:col-span-4",
    height: "h-72",
  },
  {
    src: "/images/india-states/odisha-v3.png",
    caption: "Jagannath Puri",
    colSpan: "col-span-12 md:col-span-4",
    height: "h-72",
  },
  {
    src: "/images/india-states/rajasthan-photo.png",
    caption: "Rajasthan Palaces",
    colSpan: "col-span-12 md:col-span-4",
    height: "h-72",
  },
];

const GALLERY_ROW_3 = [
  {
    src: "/images/pilgrimage/badrinath.jpg",
    caption: "Badrinath Shrine",
    colSpan: "col-span-12 md:col-span-4",
    height: "h-[420px]",
  },
  {
    src: "/images/india-states/kashmir-photo.png",
    caption: "Kashmir Valley",
    colSpan: "col-span-12 md:col-span-8",
    height: "h-[420px]",
  },
];

const GALLERY_ROW_4 = [
  {
    src: "/images/pilgrimage/tirupati.jpg",
    caption: "Tirupati Balaji",
    colSpan: "col-span-12 md:col-span-5",
    height: "h-80",
  },
  {
    src: "/images/india-states/goa-photo.png",
    caption: "Sacred Goa",
    colSpan: "col-span-12 md:col-span-3",
    height: "h-80",
  },
  {
    src: "/images/india-states/hampi-photo.png",
    caption: "Hampi Ruins",
    colSpan: "col-span-12 md:col-span-4",
    height: "h-80",
  },
];

interface GalleryItem {
  src: string;
  caption: string;
  colSpan: string;
  height: string;
}

function GalleryCard({ item, priority = false }: { item: GalleryItem; priority?: boolean }) {
  return (
    <figure
      className={`${item.colSpan} relative group rounded-md overflow-hidden ${item.height}`}
    >
      <Image
        src={item.src}
        alt={item.caption}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={85}
        priority={priority}
        className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-midnight/15 group-hover:bg-midnight/30 transition-colors duration-300" />
      <figcaption className="absolute bottom-0 left-0 right-0 px-6 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <span className="font-sans text-sm text-white font-medium">{item.caption}</span>
      </figcaption>
    </figure>
  );
}

export default function TravelMemoriesPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-24 sm:pt-36 pb-10 sm:pb-16 px-4 sm:px-6 md:px-8 lg:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4">
            Captured Moments
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-7xl text-midnight font-normal leading-tight tracking-tight max-w-2xl mb-5">
            Travel Memories
          </h1>
          <p className="font-sans text-base sm:text-lg text-[#43474e] max-w-xl leading-relaxed">
            Glimpses of the sacred — moments of devotion, beauty, and
            transformation captured along our pilgrim paths.
          </p>
        </div>
      </section>

      {/* Asymmetric gallery grid */}
      <section className="px-4 sm:px-6 md:px-8 lg:px-12 pb-0 bg-surface" aria-label="Travel memories gallery">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Row 1: 8+4 */}
          <div className="grid grid-cols-12 gap-6">
            {GALLERY_ROW_1.map((item, i) => (
              <GalleryCard key={item.caption} item={item} priority={i === 0} />
            ))}
          </div>

          {/* Row 2: 4+4+4 */}
          <div className="grid grid-cols-12 gap-6">
            {GALLERY_ROW_2.map((item) => (
              <GalleryCard key={item.caption} item={item} />
            ))}
          </div>

          {/* Row 3: 4+8 */}
          <div className="grid grid-cols-12 gap-6">
            {GALLERY_ROW_3.map((item) => (
              <GalleryCard key={item.caption} item={item} />
            ))}
          </div>

          {/* Row 4: 5+3+4 */}
          <div className="grid grid-cols-12 gap-6">
            {GALLERY_ROW_4.map((item) => (
              <GalleryCard key={item.caption} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Navy quote band */}
      <section className="py-12 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-midnight mt-12 md:mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-normal leading-snug mb-4">
            &ldquo;Every photograph is a prayer answered, a moment of grace
            made visible.&rdquo;
          </p>
          <p className="font-sans text-xs text-gold tracking-[0.2em] uppercase font-semibold">
            — Nithyeshwar Tours
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-surface-low">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal leading-snug mb-4">
            Create Your Own Memories
          </h2>
          <p className="font-sans text-base text-midnight/50 leading-relaxed mb-10 max-w-xl mx-auto">
            Let us craft a sacred journey worthy of remembrance for you and
            those you love.
          </p>
          <Link
            href="/inquiry"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold bg-midnight text-white px-8 py-4 rounded-md hover:bg-navy transition-colors duration-300 min-h-11"
          >
            Plan Your Journey
          </Link>
        </div>
      </section>
    </>
  );
}
