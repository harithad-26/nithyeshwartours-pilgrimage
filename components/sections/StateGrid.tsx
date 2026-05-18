import Image from "next/image";
import Link from "next/link";

const STATES = [
  { slug: "uttar-pradesh", name: "Uttar Pradesh", description: "Varanasi, Mathura & Ayodhya", img: "/images/destinations/uttar-pradesh.jpg" },
  { slug: "madhya-pradesh", name: "Madhya Pradesh", description: "Omkareshwar & Ujjain", img: "/images/destinations/madhya-pradesh.jpg" },
  { slug: "odisha", name: "Odisha", description: "Jagannath & Konark", img: "/images/destinations/odisha.jpg" },
  { slug: "andaman", name: "Andaman", description: "Sacred shores & pilgrimage", img: "/images/destinations/andaman.jpg" },
  { slug: "tamil-nadu", name: "Tamil Nadu", description: "Dravidian temples & heritage", img: "/images/destinations/tamil-nadu.jpg" },
];

export function StateGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {STATES.map((state, i) => (
        <Link
          key={state.slug}
          href={`/packages/${state.slug}`}
          className="group relative h-80 rounded-md overflow-hidden focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
          aria-label={`Explore packages in ${state.name}`}
        >
          <div className="relative w-full h-full">
            <Image
              src={state.img}
              alt={state.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
              quality={85}
              priority={i < 2}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-navy/20 to-transparent" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h2 className="font-serif text-xl text-white font-semibold mb-1">{state.name}</h2>
              <p className="font-sans text-sm text-white/60">{state.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
