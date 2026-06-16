import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      className="relative min-h-dvh flex flex-col items-center justify-center overflow-visible"
      aria-label="Hero — Discover India & Beyond"
    >
      {/* Background image with slow zoom-out effect */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-bg.jpg"
          alt="Sacred landscape of India"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover animate-zoom-out"
        />
        <div
          className="absolute inset-0 bg-linear-to-b from-midnight/40 via-midnight/60 to-midnight/90"
          aria-hidden="true"
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-6 max-w-5xl mx-auto pt-24 md:pt-32 pb-32 md:pb-40 w-full">
        {/* 30+ Years Trust Badge */}
        <div className="mb-4 md:mb-6 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/30 text-gold font-sans text-[10px] md:text-xs tracking-widest uppercase font-semibold shadow-inner">
          Trusted Travel Partner for 30+ Years
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[76px] font-normal leading-tight tracking-tight mb-4 md:mb-6 text-transparent bg-clip-text bg-linear-to-b from-white via-white to-white/95 drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)] max-w-4xl mx-auto">
          Discover India & Beyond
        </h1>

        <p className="font-sans text-sm md:text-base lg:text-lg text-white/95 leading-relaxed max-w-2xl mb-6 md:mb-8 font-light drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)] px-2">
          Curated Journeys for Every Traveller — Pilgrimages, India Tours, International Destinations, and Custom Travel Experiences.
          <br />
          <span className="font-normal text-gold">Your Journey, Perfectly Crafted.</span>
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md px-4">
          <Link
            href="/packages"
            className="btn-premium btn-premium-gold w-full sm:w-auto text-center"
          >
            <span>Explore Packages</span>
          </Link>
          <Link
            href="/trip-builder"
            className="btn-premium btn-premium-glass w-full sm:w-auto text-center"
          >
            <span>Plan Your Journey</span>
          </Link>
        </div>
      </div>

      {/* Trip planner bar - Overlapping at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-50 px-4 md:px-6 transform translate-y-1/2">
        <div
          className="bg-white backdrop-blur-xl border border-white/30 rounded-xl md:rounded-2xl shadow-[0_32px_80px_rgba(0,6,19,0.5)] w-full max-w-4xl mx-auto p-2 md:p-3 hover:border-white/40 transition-all duration-500"
          role="search"
          aria-label="Plan your journey"
        >
          <div className="flex flex-col md:flex-row items-stretch gap-2 md:gap-0">
            {/* Destination */}
            <SearchField
              id="hero-destination"
              label="Destination"
              placeholder="Bali, Kerala, Char Dham…"
              icon={
                <svg className="text-gold-dark/60 shrink-0 mt-0.5 group-hover:text-gold-dark transition-colors duration-300" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              }
              divider
            />

            {/* Travel Dates */}
            <SearchField
              id="hero-dates"
              label="Travel Dates"
              placeholder="Pick dates"
              icon={
                <svg className="text-gold-dark/60 shrink-0 mt-0.5 group-hover:text-gold-dark transition-colors duration-300" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              }
              divider
            />

            {/* Travelers */}
            <SearchField
              id="hero-travelers"
              label="Travelers"
              placeholder="2 Travelers"
              icon={
                <svg className="text-gold-dark/60 shrink-0 mt-0.5 group-hover:text-gold-dark transition-colors duration-300" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              }
            />

            {/* CTA button */}
            <div className="flex items-center shrink-0 p-1 md:pl-2">
              <Link
                href="/inquiry"
                className="group flex items-center justify-center gap-2 bg-navy text-gold font-sans text-xs md:text-sm font-bold px-6 md:px-8 py-2.5 md:py-3.5 rounded-xl transition-all duration-300 hover:bg-midnight hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-gold-muted/20 whitespace-nowrap min-h-[40px] md:min-h-11 w-full md:w-auto focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 cursor-pointer"
                aria-label="Plan your journey with AI"
              >
                Plan with AI
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
  icon?: React.ReactNode;
  divider?: boolean;
}

function SearchField({ id, label, placeholder, icon, divider }: SearchFieldProps) {
  return (
    <label
      htmlFor={id}
      className={[
        "group flex-1 min-w-0 flex flex-col gap-0.5 md:gap-1 px-4 md:px-6 py-2 md:py-3 cursor-text hover:bg-black/[0.015] transition-colors duration-200",
        "border-t border-midnight/5 md:border-t-0",
        "first:border-t-0",
        divider ? "md:border-r md:border-r-midnight/10" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="font-sans text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-midnight/40 select-none leading-none">
        {label}
      </span>
      <div className="flex items-center gap-2 md:gap-2.5 w-full">
        {icon && <div className="hidden sm:block">{icon}</div>}
        <input
          id={id}
          type="text"
          placeholder={placeholder}
          autoComplete="off"
          className="font-sans text-xs md:text-sm font-medium text-midnight placeholder:text-midnight/35 bg-transparent w-full min-h-6 focus:outline-none focus-visible:outline-none"
          aria-label={label}
        />
      </div>
    </label>
  );
}
