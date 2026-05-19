import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { FlightSearchForm } from "@/components/forms/FlightSearchForm";

export const metadata: Metadata = {
  title: "Sacred Concierge Services — Nithyeshwar Tours",
  description:
    "Beyond the pilgrimage — global flight connectivity, curated spiritual stays, visa guidance, spiritual guides and pilgrim insurance. Your sacred journey, seamlessly arranged.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero Section ─────────────────────────────────────────────── */}
      <section
        className="pt-32 pb-0 bg-surface"
        aria-label="Sacred Concierge Services"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[500px]">
            {/* Left: copy */}
            <div className="flex flex-col gap-8 self-center">
              <p className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-gold-dark">
                BEYOND THE PILGRIMAGE
              </p>

              <h1 className="font-serif text-[60px] leading-[1.25] text-midnight font-normal">
                Sacred Concierge
                <br />
                Services
              </h1>

              <p className="font-sans text-lg text-[#43474e] leading-[1.625] max-w-[512px] font-normal">
                Our devotion extends beyond the path. We provide a seamless
                sanctuary of services including global flight connectivity,
                curated spiritual stays, and expert visa guidance to ensure your
                focus remains entirely on the divine.
              </p>
            </div>

            {/* Right: hero image */}
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] self-center">
              <Image
                src="/images/about-hero.jpg"
                alt="Nithyeshwar Tours luxury concierge specialist"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
                quality={90}
              />
              {/* subtle dark overlay */}
              <div
                className="absolute inset-0 bg-midnight/20 mix-blend-multiply"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Flight & Hotel Section ────────────────────────────────────── */}
      <section
        className="bg-surface-low px-12 py-24"
        aria-label="Flight reservations and curated stays"
      >
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Flight Booking card — 7 columns */}
          <div className="col-span-12 lg:col-span-7 bg-white border-l-2 border-gold-dark rounded-lg p-10 shadow-[0px_10px_15px_rgba(0,31,63,0.06)]">
            {/* Card header */}
            <div className="flex items-center gap-4 mb-8">
              {/* Plane icon */}
              <svg
                width="25"
                height="22"
                viewBox="0 0 25 22"
                fill="none"
                aria-hidden="true"
                className="shrink-0"
              >
                <path
                  d="M22.5 9.5L14 6V2C14 0.9 13.1 0 12 0C10.9 0 10 0.9 10 2V6L1.5 9.5C0.6 9.9 0 10.8 0 11.8V13L10 11V15L7 16.5V18L12 17L17 18V16.5L14 15V11L24 13V11.8C24 10.8 23.4 9.9 22.5 9.5Z"
                  fill="#735c00"
                />
              </svg>
              <h2 className="font-serif text-2xl text-midnight leading-8">
                Flight Reservations
              </h2>
            </div>

            <FlightSearchForm />
          </div>

          {/* Curated Stays card — 5 columns */}
          <div className="col-span-12 lg:col-span-5 bg-navy rounded-lg p-10 flex flex-col justify-between min-h-[438px]">
            <div className="flex flex-col gap-8">
              {/* Header */}
              <div className="flex items-center gap-4">
                {/* Hotel/bed icon */}
                <svg
                  width="27"
                  height="18"
                  viewBox="0 0 27 18"
                  fill="none"
                  aria-hidden="true"
                  className="shrink-0"
                >
                  <path
                    d="M0 18V6L13.5 0L27 6V18H23V12H4V18H0ZM4 10H23V7L13.5 2.5L4 7V10Z"
                    fill="#fed65b"
                  />
                </svg>
                <h2 className="font-serif text-2xl text-white leading-8">
                  Curated Stays
                </h2>
              </div>

              {/* Description */}
              <p className="font-sans text-base text-[#6f88ad] leading-[1.625]">
                We partner with luxury ashrams and heritage hotels that respect
                the sanctity of your journey.
              </p>

              {/* Stay options */}
              <div className="flex flex-col gap-4">
                {/* Wellness Retreats */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-[2px] bg-white/10 flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 2C9 2 7 5 7 8C7 11 9 13 12 14C15 13 17 11 17 8C17 5 15 2 12 2Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                      <path
                        d="M4 20C4 16 7.6 13 12 13C16.4 13 20 16 20 20H4Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                    </svg>
                  </div>
                  <span className="font-sans font-medium text-base text-white">
                    Wellness Retreats
                  </span>
                </div>

                {/* Heritage Palaces */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-[2px] bg-white/10 flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M3 21V7L12 2L21 7V21H15V14H9V21H3ZM5 19H7V12H17V19H19V8.1L12 4.5L5 8.1V19ZM9 10H11V8H9V10ZM13 10H15V8H13V10Z"
                        fill="white"
                        fillOpacity="0.8"
                      />
                    </svg>
                  </div>
                  <span className="font-sans font-medium text-base text-white">
                    Heritage Palaces
                  </span>
                </div>
              </div>
            </div>

            {/* CTA button */}
            <div className="pt-12">
              <Link
                href="/packages"
                className="inline-flex items-center justify-center border border-gold-dark px-8 py-[13px] rounded-[2px] font-sans font-bold text-sm text-gold tracking-[0.1em] uppercase transition-colors duration-300 hover:bg-gold-dark hover:text-white min-h-[44px]"
              >
                EXPLORE LODGINGS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Spiritual & Administrative Support ───────────────────────── */}
      <section
        className="py-24 bg-surface"
        aria-label="Spiritual and administrative support services"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Section heading */}
          <div className="flex flex-col items-center gap-4 mb-16">
            <h2 className="font-serif text-[36px] leading-[40px] text-midnight font-bold text-center">
              Spiritual &amp; Administrative Support
            </h2>
            <div className="w-24 h-[2px] bg-gold-dark" aria-hidden="true" />
          </div>

          {/* 3-column cards — middle one is "featured" (offset up, dark bg) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Card 1: Visa Assistance */}
            <article className="bg-[#eeeeed] rounded-lg p-8 flex flex-col gap-[14px]">
              {/* Shield icon */}
              <div aria-hidden="true">
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 7C13.1 7 14 7.9 14 9C14 10.1 13.1 11 12 11C10.9 11 10 10.1 10 9C10 7.9 10.9 7 12 7ZM17 17H7V16C7 14.33 10.33 13.5 12 13.5C13.67 13.5 17 14.33 17 16V17Z"
                    fill="#735c00"
                  />
                </svg>
              </div>

              <h3 className="font-serif text-xl text-midnight font-bold leading-7 mt-[9px]">
                Visa Assistance
              </h3>

              <p className="font-sans text-sm text-[#43474e] leading-[22.75px]">
                Expert navigation through complex international travel
                documentation for pilgrims worldwide.
              </p>

              <div className="mt-[9px]">
                <Link
                  href="/inquiry"
                  className="inline-flex items-center gap-2 font-sans font-bold text-xs text-gold-dark tracking-[0.1em] uppercase hover:opacity-70 transition-opacity duration-300 min-h-[44px]"
                  aria-label="Learn more about visa assistance"
                >
                  LEARN MORE
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 10 10"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 9L9 1M9 1H3M9 1V7"
                      stroke="#735c00"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </article>

            {/* Card 2: Spiritual Guides — featured, offset up, dark bg */}
            <article className="bg-navy rounded-lg p-8 flex flex-col gap-[14px] md:-mt-8">
              {/* Guide/star icon */}
              <div aria-hidden="true">
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                    fill="#fed65b"
                  />
                </svg>
              </div>

              <h3 className="font-serif text-xl text-white font-bold leading-7 mt-[9px]">
                Spiritual Guides
              </h3>

              <p className="font-sans text-sm text-[#6f88ad] leading-[22.75px]">
                Deeply knowledgeable guides who bring the scriptures and history
                of sacred sites to life during your journey.
              </p>

              <div className="mt-[9px]">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-sans font-bold text-xs text-gold tracking-[0.1em] uppercase hover:opacity-70 transition-opacity duration-300 min-h-[44px]"
                  aria-label="Meet our spiritual guides"
                >
                  OUR GUIDES
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 10 10"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 9L9 1M9 1H3M9 1V7"
                      stroke="#fed65b"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </article>

            {/* Card 3: Pilgrim Insurance */}
            <article className="bg-[#eeeeed] rounded-lg p-8 flex flex-col gap-[14px]">
              {/* Umbrella icon */}
              <div aria-hidden="true">
                <svg
                  width="38"
                  height="37"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M13 16V19C13 20.1 12.1 21 11 21C9.9 21 9 20.1 9 19H7C7 21.21 8.79 23 11 23C13.21 23 15 21.21 15 19V16H13ZM12 2C6.48 2 2 6.48 2 12H4C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12H22C22 6.48 17.52 2 12 2ZM2 12C2 9 5 7 8.5 7C9.82 7 11 7.78 12 9C13 7.78 14.18 7 15.5 7C19 7 22 9 22 12H2Z"
                    fill="#735c00"
                  />
                </svg>
              </div>

              <h3 className="font-serif text-xl text-midnight font-bold leading-7 mt-[9px]">
                Pilgrim Insurance
              </h3>

              <p className="font-sans text-sm text-[#43474e] leading-[22.75px]">
                Comprehensive travel insurance tailored specifically for the
                unique needs and locations of spiritual travel.
              </p>

              <div className="mt-[9px]">
                <Link
                  href="/inquiry"
                  className="inline-flex items-center gap-2 font-sans font-bold text-xs text-gold-dark tracking-[0.1em] uppercase hover:opacity-70 transition-opacity duration-300 min-h-[44px]"
                  aria-label="Get a quote for pilgrim insurance"
                >
                  GET QUOTE
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 10 10"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 9L9 1M9 1H3M9 1V7"
                      stroke="#735c00"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── CTA Teaser — Planning a Private Sanctuary? ────────────────── */}
      <section
        className="py-24 bg-surface"
        aria-label="Begin your private pilgrimage inquiry"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 flex justify-center">
          <div className="relative bg-surface-low rounded-lg px-16 pt-20 pb-16 w-full max-w-[928px] overflow-hidden">
            {/* Decorative gold-tint circle — top right */}
            <div
              className="absolute top-[-112px] right-[-128px] w-64 h-64 rounded-xl bg-gold-dark/5"
              aria-hidden="true"
            />

            <div className="relative flex flex-col items-center gap-6">
              <h2 className="font-serif text-[30px] leading-9 text-midnight font-bold text-center">
                Planning a Private Sanctuary?
              </h2>

              <p className="font-sans text-base text-[#43474e] text-center leading-6 max-w-[576px]">
                Connect with our personal pilgrimage curators for bespoke
                flight, stay, and guide arrangements tailored to your spiritual
                timeline.
              </p>

              {/* Email + CTA row */}
              <div className="flex items-stretch gap-4 pt-4">
                <input
                  type="email"
                  name="cta-email"
                  placeholder="Email Address"
                  aria-label="Enter your email address"
                  className="w-80 bg-white shadow-sm rounded-[2px] px-6 py-[17px] font-sans text-base text-midnight placeholder:text-[#6b7280] outline-none focus:ring-2 focus:ring-gold-dark/30 transition-shadow duration-300"
                />
                <Link
                  href="/inquiry"
                  className="inline-flex items-center justify-center bg-gold-dark text-white font-sans font-bold text-xs tracking-[0.1em] uppercase px-10 py-5 rounded-[2px] transition-colors duration-300 hover:bg-midnight min-h-[44px]"
                >
                  BEGIN INQUIRY
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
