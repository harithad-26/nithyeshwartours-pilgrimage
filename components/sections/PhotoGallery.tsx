import Image from "next/image";
import { SectionHeader } from "@/components/ui";

const GALLERY_ITEMS = [
  {
    name: "Kailash",
    subtitle: "Tibet, Himalayas",
    image: "/images/gallery/kailash.jpg",
  },
  {
    name: "Kedarnath",
    subtitle: "Uttarakhand, Himalayas",
    image: "/images/gallery/kedarnath.jpg",
  },
  {
    name: "Varanasi",
    subtitle: "Uttar Pradesh",
    image: "/images/gallery/varanasi.jpg",
  },
  {
    name: "Rameswaram",
    subtitle: "Tamil Nadu",
    image: "/images/gallery/rameswaram.jpg",
  },
  {
    name: "Tirupati",
    subtitle: "Andhra Pradesh",
    image: "/images/gallery/tirupati.jpg",
  },
  {
    name: "Badrinath",
    subtitle: "Uttarakhand, Himalayas",
    image: "/images/gallery/badrinath.jpg",
  },
];

export function PhotoGallery() {
  return (
    <section className="py-20 md:py-28 bg-surface relative" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <SectionHeader
          eyebrow="Visual Pilgrimage"
          title="Moments From Sacred Journeys"
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-lg border border-midnight/5 premium-card-static group cursor-pointer"
            >
              {/* Image with zoom transition */}
              <Image
                src={item.image}
                alt={item.name + " " + item.subtitle}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                className="object-cover transition-all duration-750 ease-out group-hover:scale-105"
              />

              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/35 to-transparent transition-opacity duration-300 group-hover:from-midnight/90" />

              {/* Content text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h4 className="font-serif text-lg md:text-xl text-white font-normal mb-1 transition-colors duration-300 group-hover:text-gold">
                  {item.name}
                </h4>
                <p className="font-sans text-[10px] text-white/60 uppercase tracking-widest font-semibold">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
