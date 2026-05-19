import Image from "next/image";
import Link from "next/link";

interface StateTile {
  name: string;
  label: string;
  img: string;
  slug: string | null;
  colSpan: string;
  mobileH: string;
  variant?: "feature" | "center";
  badge?: string;
  eyebrow?: string;
  priority?: boolean;
}

// Ordered row-by-row — CSS grid auto-placement handles the layout
const STATES: StateTile[] = [
  // Row 1 (500px): 8 + 4 = 12
  {
    name: "Tamil Nadu",
    label: "Land of Eternal Temples and Ancient Traditions.",
    img: "/images/india-states/tamil-nadu.jpg",
    slug: "tamil-nadu",
    colSpan: "md:col-span-8",
    mobileH: "h-[440px]",
    variant: "feature",
    badge: "Cultural Heart",
    priority: true,
  },
  {
    name: "Uttar Pradesh",
    label: "The Cradle of Spirituality.",
    img: "/images/india-states/varanasi-ghats.jpg",
    slug: "uttar-pradesh",
    colSpan: "md:col-span-4",
    mobileH: "h-80",
    priority: true,
  },
  // Row 2 (373px): 4 + 4 + 4 = 12
  {
    name: "Odisha",
    label: "Where Art Meets Devotion.",
    img: "/images/india-states/odisha.jpg",
    slug: "odisha",
    colSpan: "md:col-span-4",
    mobileH: "h-64",
  },
  {
    name: "Rajasthan",
    label: "Regal Echoes of the Past.",
    img: "/images/india-states/rajasthan.jpg",
    slug: null,
    colSpan: "md:col-span-4",
    mobileH: "h-64",
  },
  {
    name: "Gujarat",
    label: "Shoreline of the Gods.",
    img: "/images/india-states/somnath.jpg",
    slug: null,
    colSpan: "md:col-span-4",
    mobileH: "h-64",
  },
  // Row 3 (600px): 3 + 6 + 3 = 12  ← matches Figma exactly
  {
    name: "Himachal Pradesh",
    label: "Abode of Eternal Snow.",
    img: "/images/india-states/himachal.jpg",
    slug: null,
    colSpan: "md:col-span-3",
    mobileH: "h-80",
  },
  {
    name: "Kashmir",
    label: "The crown jewel of the Himalayas, where heaven meets earth.",
    img: "/images/india-states/kashmir.jpg",
    slug: null,
    colSpan: "md:col-span-6",
    mobileH: "h-80",
    variant: "center",
    eyebrow: "Paradise Found",
  },
  {
    name: "Madhya Pradesh",
    label: "Heart of the Heritage.",
    img: "/images/india-states/madhya-pradesh.jpg",
    slug: "madhya-pradesh",
    colSpan: "md:col-span-3",
    mobileH: "h-80",
  },
  // Row 4 (373px): 4 + 4 + 4 = 12
  {
    name: "Karnataka",
    label: "Empire of Ruins & Rituals.",
    img: "/images/india-states/hampi.jpg",
    slug: null,
    colSpan: "md:col-span-4",
    mobileH: "h-64",
  },
  {
    name: "Goa",
    label: "Spiritual Serenity by the Sea.",
    img: "/images/india-states/goa.jpg",
    slug: null,
    colSpan: "md:col-span-4",
    mobileH: "h-64",
  },
  {
    name: "Leh Ladakh",
    label: "The High Desert Sanctuary.",
    img: "/images/india-states/ladakh.jpg",
    slug: null,
    colSpan: "md:col-span-4",
    mobileH: "h-64",
  },
];

function TileContent({ tile }: { tile: StateTile }) {
  if (tile.variant === "feature") {
    return (
      <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-2 p-10">
        {/* Gold horizontal divider — matches Figma exactly */}
        <div className="bg-gold h-0.5 w-12 mb-1" aria-hidden="true" />
        <p className="font-serif text-4xl text-white font-normal leading-tight">
          {tile.name}
        </p>
        <p className="font-sans text-base text-white/80 leading-relaxed max-w-md mb-1">
          {tile.label}
        </p>
        {tile.badge && (
          <div className="self-start border border-gold/30 px-3.5 py-1.5">
            <span className="font-sans text-[10px] font-bold tracking-[0.12em] uppercase text-gold">
              {tile.badge}
            </span>
          </div>
        )}
      </div>
    );
  }

  if (tile.variant === "center") {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
        {tile.eyebrow && (
          <p className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase text-gold mb-4">
            {tile.eyebrow}
          </p>
        )}
        <p className="font-serif text-5xl text-white font-normal leading-tight mb-4">
          {tile.name}
        </p>
        <p className="font-sans text-base text-white/80 leading-relaxed max-w-xs">
          {tile.label}
        </p>
      </div>
    );
  }

  return (
    <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-1.5 p-8">
      <p className="font-serif text-2xl text-white font-normal leading-tight">
        {tile.name}
      </p>
      <p className="font-sans text-sm text-white/70 leading-relaxed">
        {tile.label}
      </p>
    </div>
  );
}

function TileInner({ tile }: { tile: StateTile }) {
  return (
    <>
      <Image
        src={tile.img}
        alt={tile.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={85}
        priority={tile.priority}
        className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-midnight/20" aria-hidden="true" />
      <TileContent tile={tile} />
    </>
  );
}

function StateTileCard({ tile }: { tile: StateTile }) {
  // Outer div = grid item — holds the explicit mobile height
  const outerClass = `col-span-1 ${tile.colSpan} ${tile.mobileH} md:h-auto`;
  // Inner container = always h-full to fill the outer (which fills the grid cell on desktop)
  const tileClass = "relative overflow-hidden rounded-sm h-full group";

  if (tile.slug) {
    return (
      <div className={outerClass}>
        <Link
          href={`/packages/${tile.slug}`}
          className={`block ${tileClass} focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2`}
          aria-label={`Explore ${tile.name} packages`}
        >
          <TileInner tile={tile} />
        </Link>
      </div>
    );
  }

  return (
    <div className={outerClass}>
      <div className={tileClass}>
        <TileInner tile={tile} />
      </div>
    </div>
  );
}

export function StateGrid() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-[500px_373px_600px_373px] gap-8"
      aria-label="India destinations grid"
    >
      {STATES.map((tile) => (
        <StateTileCard key={tile.name} tile={tile} />
      ))}
    </div>
  );
}
