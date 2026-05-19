import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden"
      aria-label="Hero — The Sacred Journey"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.jpg"
          alt="Sacred landscape of India"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-linear-to-b from-midnight/40 to-midnight/80"
          aria-hidden="true"
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto pt-28 pb-16 w-full">
        <h1 className="font-serif text-7xl md:text-8xl lg:text-[96px] font-bold text-white leading-none tracking-tight mb-6">
          The Sacred Journey
        </h1>

        <p className="font-sans text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mb-12 font-light">
          Experience transcendence through meticulously curated spiritual
          pilgrimages and luxury escapes.
        </p>

        {/* Trip planner bar */}
        <div
          className="bg-white rounded-xl shadow-[0_24px_64px_rgba(0,6,19,0.4)] w-full max-w-3xl p-2"
          role="search"
          aria-label="Plan your sacred journey"
        >
          <div className="flex flex-col sm:flex-row items-stretch">
            {/* Destination */}
            <SearchField
              id="hero-destination"
              label="Destination"
              placeholder="Varanasi, Tirupati…"
              divider
            />

            {/* Sacred Dates */}
            <SearchField
              id="hero-dates"
              label="Sacred Dates"
              placeholder="Pick dates"
              divider
            />

            {/* Travelers */}
            <SearchField
              id="hero-travelers"
              label="Travelers"
              placeholder="2 Pilgrims"
            />

            {/* CTA button — contained inside the bar with p-1 clearance */}
            <div className="flex items-center shrink-0 p-1 mt-1 sm:mt-0">
              <Link
                href="/inquiry"
                className="flex items-center justify-center gap-2 bg-midnight text-white font-sans text-sm font-semibold px-6 py-3.5 rounded-lg transition-all duration-300 hover:bg-navy whitespace-nowrap min-h-11 w-full sm:w-auto focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 cursor-pointer"
                aria-label="Plan your sacred journey with AI"
              >
                Plan with AI
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface SearchFieldProps {
  id: string;
  label: string;
  placeholder: string;
  divider?: boolean;
}

function SearchField({ id, label, placeholder, divider }: SearchFieldProps) {
  return (
    <label
      htmlFor={id}
      className={[
        "group flex-1 min-w-0 flex flex-col gap-1.5 px-5 py-4 cursor-text",
        "border-t border-midnight/10 sm:border-t-0",
        "first:border-t-0",
        divider ? "sm:border-r sm:border-r-midnight/10" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="font-sans text-[9px] font-bold tracking-widest uppercase text-midnight/40 select-none leading-none">
        {label}
      </span>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        autoComplete="off"
        className="font-sans text-sm text-midnight placeholder:text-midnight/25 bg-transparent w-full min-h-7 focus:outline-none focus-visible:outline-none"
        aria-label={label}
      />
    </label>
  );
}
