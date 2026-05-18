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
        {/* Gradient overlay: navy to midnight */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-navy/80 via-midnight/60 to-midnight/90"
          aria-hidden="true"
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto pt-24 pb-12">
        {/* Gold eyebrow */}
        <p className="font-sans text-xs font-semibold tracking-[0.14em] uppercase text-gold mb-5">
          Nithyeshwar Tours
        </p>

        {/* Main heading */}
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight tracking-tight mb-6">
          The Sacred Journey
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-base md:text-lg text-white/70 leading-relaxed max-w-xl mb-10">
          Curating transformative pilgrimage and travel experiences across India
          and beyond — where every path leads to purpose.
        </p>

        {/* Glass search bar */}
        <div className="glass border border-white/10 rounded-md p-4 md:p-6 w-full max-w-2xl">
          <form
            className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-end"
            aria-label="Search packages"
          >
            {/* Destination select */}
            <div className="flex-1 flex flex-col gap-1.5">
              <label
                htmlFor="hero-destination"
                className="font-sans text-[10px] font-semibold tracking-[0.1em] uppercase text-white/50"
              >
                Destination
              </label>
              <select
                id="hero-destination"
                className="bg-white/10 border border-white/20 rounded text-white font-sans text-sm px-3 py-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold appearance-none cursor-pointer transition-colors duration-300 hover:bg-white/15"
                defaultValue=""
              >
                <option value="" disabled className="text-midnight">
                  Select destination
                </option>
                <option value="madhya-pradesh" className="text-midnight">
                  Madhya Pradesh
                </option>
                <option value="rajasthan" className="text-midnight">
                  Rajasthan
                </option>
                <option value="kerala" className="text-midnight">
                  Kerala
                </option>
                <option value="himachal-pradesh" className="text-midnight">
                  Himachal Pradesh
                </option>
                <option value="uttarakhand" className="text-midnight">
                  Uttarakhand
                </option>
              </select>
            </div>

            {/* Group Size select */}
            <div className="flex-1 flex flex-col gap-1.5">
              <label
                htmlFor="hero-group-size"
                className="font-sans text-[10px] font-semibold tracking-[0.1em] uppercase text-white/50"
              >
                Group Size
              </label>
              <select
                id="hero-group-size"
                className="bg-white/10 border border-white/20 rounded text-white font-sans text-sm px-3 py-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold appearance-none cursor-pointer transition-colors duration-300 hover:bg-white/15"
                defaultValue=""
              >
                <option value="" disabled className="text-midnight">
                  Select group size
                </option>
                <option value="1-2" className="text-midnight">
                  1–2 people
                </option>
                <option value="3-8" className="text-midnight">
                  3–8 people
                </option>
                <option value="9-20" className="text-midnight">
                  9–20 people
                </option>
                <option value="21+" className="text-midnight">
                  21+ people
                </option>
              </select>
            </div>

            {/* Explore button */}
            <Link
              href="/packages/madhya-pradesh"
              className="inline-flex items-center justify-center bg-gold text-midnight font-sans text-sm font-semibold px-6 py-2.5 rounded transition-all duration-300 hover:bg-gold-dark hover:text-white focus-visible:outline-2 focus-visible:outline-gold whitespace-nowrap min-h-[44px]"
              aria-label="Explore Madhya Pradesh packages"
            >
              Explore
            </Link>
          </form>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 motion-safe:animate-bounce"
        aria-hidden="true"
      >
        <span className="font-sans text-[10px] tracking-[0.12em] uppercase text-white/40">
          Scroll
        </span>
        {/* Thin vertical line */}
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
