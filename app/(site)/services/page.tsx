import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services — Sacred Travel, Beautifully Arranged",
  description:
    "From visa assistance to private spiritual guides — every service at Nithyeshwar Tours is crafted with devotion.",
};

const SERVICES = [
  {
    id: "visa",
    eyebrow: "DOCUMENTATION",
    title: "Visa & Documentation Assistance",
    description:
      "Navigating international pilgrimage paperwork can be complex. Our dedicated documentation team handles all visa applications, NOC letters, and permit processing for Kailash Mansarovar, Nepal, Sri Lanka, and beyond — so you can focus entirely on your spiritual preparation.",
    highlights: [
      "End-to-end visa processing",
      "NOC and permit letters",
      "Emergency documentation support",
    ],
    img: "/images/india-states/kashmir.jpg",
    imgAlt: "Serene mountain landscape",
  },
  {
    id: "guides",
    eyebrow: "SPIRITUAL EXPERTISE",
    title: "Certified Spiritual Guides",
    description:
      "Each pilgrimage is accompanied by a deeply knowledgeable guide — scholars versed in Sanskrit texts, temple rituals, and the mythology of every sacred site. They don't just narrate; they illuminate, transforming each visit into a living darshan.",
    highlights: [
      "Sanskrit-trained temple scholars",
      "Ritual and puja facilitation",
      "24/7 on-ground support",
    ],
    img: "/images/pilgrimage/badrinath.jpg",
    imgAlt: "Badrinath temple in Himalayas",
  },
  {
    id: "insurance",
    eyebrow: "PEACE OF MIND",
    title: "Pilgrim Travel Insurance",
    description:
      "Sacred journeys sometimes traverse challenging terrain and remote regions. Our comprehensive pilgrim insurance covers medical emergencies, trip disruptions, and high-altitude evacuations — ensuring your peace of mind never wavers.",
    highlights: [
      "High-altitude medical coverage",
      "Emergency evacuation",
      "Trip cancellation protection",
    ],
    img: "/images/india-states/himachal.jpg",
    imgAlt: "Himalayan mountain path",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden"
        aria-label="Our Services"
      >
        <Image
          src="/images/india-states/varanasi-ghats.jpg"
          alt="Sacred services — Nithyeshwar Tours"
          fill
          sizes="100vw"
          className="object-cover opacity-50 grayscale"
          priority
          quality={90}
        />
        <div
          className="absolute inset-0 bg-linear-to-b from-surface/20 via-surface/50 to-surface/85"
          aria-hidden="true"
        />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pt-24">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-5">
            What We Offer
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-midnight font-normal leading-tight tracking-tight mb-6">
            Services Crafted with Devotion
          </h1>
          <p className="font-sans text-lg text-[#43474e] leading-relaxed font-light max-w-2xl mx-auto">
            Every offering is designed with care and reverence, ensuring your
            sacred journey unfolds with grace, comfort, and meaning at every
            step.
          </p>
        </div>
      </section>

      {/* Three core services — alternating layout */}
      <section className="py-32 px-6 bg-surface" aria-label="Core services">
        <div className="max-w-6xl mx-auto space-y-32">
          {SERVICES.map((service, i) => {
            const isEven = i % 2 === 0;
            return (
              <article
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              >
                {/* Image */}
                <div
                  className={`relative rounded-md overflow-hidden aspect-4/5 ${
                    !isEven ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={service.img}
                    alt={service.imgAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={85}
                    className="object-cover"
                  />
                  {/* Gold ambient blur */}
                  <div
                    className="absolute -bottom-8 -right-8 w-48 h-48 bg-gold-muted blur-3xl rounded-full opacity-60"
                    aria-hidden="true"
                  />
                </div>

                {/* Text */}
                <div className={!isEven ? "lg:order-1" : ""}>
                  <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4">
                    {service.eyebrow}
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal mb-5 leading-snug">
                    {service.title}
                  </h2>
                  <p className="font-sans text-base text-[#43474e] leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-10">
                    {service.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="w-4 h-4 rounded-full bg-gold-dark/20 flex items-center justify-center shrink-0">
                          <svg
                            width="8"
                            height="6"
                            viewBox="0 0 8 6"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M1 3l2 2 4-4"
                              stroke="var(--color-gold-dark)"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span className="font-sans text-sm text-midnight/70">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/inquiry"
                    className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-midnight border border-midnight/20 px-6 py-3 rounded-md transition-all duration-300 hover:bg-midnight hover:text-white min-h-11"
                  >
                    Inquire About This Service
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA teaser — dark */}
      <section className="py-32 px-6 bg-midnight" aria-label="Plan your journey">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold mb-5">
            Begin Here
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-white font-normal leading-snug mb-6">
            Ready to Walk the Sacred Path?
          </h2>
          <p className="font-sans text-base text-white/60 leading-relaxed mb-10 max-w-xl mx-auto">
            Our spiritual travel consultants are ready to craft a personalised
            journey that resonates with your soul&apos;s deepest calling.
          </p>
          <Link
            href="/inquiry"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold bg-gold text-midnight px-8 py-4 rounded-md hover:bg-gold-dark hover:text-white transition-colors duration-300 min-h-11"
          >
            Begin Your Journey
          </Link>
        </div>
      </section>
    </>
  );
}
