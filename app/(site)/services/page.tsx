import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Services",
};

const services = [
  {
    title: "Spiritual Guided Tours",
    description:
      "Expert-led pilgrimages to sacred sites across India. Our knowledgeable guides illuminate the history, mythology, and spiritual significance of every temple and shrine you visit.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="var(--color-gold-dark)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Hands together / namaste */}
        <path d="M16 4 C16 4 10 10 10 16 L10 22 C10 24.2 11.8 26 14 26 L18 26 C20.2 26 22 24.2 22 22 L22 16 C22 10 16 4 16 4Z" />
        <path d="M10 18 L6 18 C4.9 18 4 18.9 4 20 L4 22 C4 24.2 5.8 26 8 26 L10 26" />
        <path d="M22 18 L26 18 C27.1 18 28 18.9 28 20 L28 22 C28 24.2 26.2 26 24 26 L22 26" />
        <line x1="16" y1="26" x2="16" y2="30" />
      </svg>
    ),
  },
  {
    title: "Heritage Accommodation",
    description:
      "Carefully selected stays that blend comfort with cultural immersion — from heritage havelis to tranquil ashram guesthouses, each property chosen for its character and location.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="var(--color-gold-dark)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Building */}
        <rect x="4" y="10" width="24" height="20" rx="1" />
        <path d="M4 10 L16 2 L28 10" />
        <rect x="12" y="20" width="8" height="10" />
        <rect x="7" y="14" width="4" height="4" />
        <rect x="21" y="14" width="4" height="4" />
      </svg>
    ),
  },
  {
    title: "Complete Travel Coordination",
    description:
      "From airport transfers to train bookings, puja arrangements to local sightseeing — we handle every logistical detail so you can focus entirely on your spiritual journey.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="var(--color-gold-dark)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Bus */}
        <rect x="3" y="8" width="26" height="16" rx="2" />
        <path d="M3 14 L29 14" />
        <circle cx="9" cy="26" r="2" />
        <circle cx="23" cy="26" r="2" />
        <path d="M7 24 L25 24" />
        <rect x="6" y="10" width="5" height="3" rx="0.5" />
        <rect x="13" y="10" width="5" height="3" rx="0.5" />
        <rect x="20" y="10" width="5" height="3" rx="0.5" />
        <path d="M29 12 L31 12 L31 16 L29 16" />
        <path d="M3 12 L1 12 L1 16 L3 16" />
      </svg>
    ),
  },
  {
    title: "Group Tour Packages",
    description:
      "Thoughtfully curated group experiences that foster community and shared devotion. Travel with fellow pilgrims and create bonds that last a lifetime, at rates that make sacred travel accessible.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="var(--color-gold-dark)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Group of people */}
        <circle cx="16" cy="7" r="4" />
        <path d="M8 28 C8 22 10 18 16 18 C22 18 24 22 24 28" />
        <circle cx="6" cy="10" r="3" />
        <path d="M0 28 C0 23 2 20 6 20" />
        <circle cx="26" cy="10" r="3" />
        <path d="M32 28 C32 23 30 20 26 20" />
      </svg>
    ),
  },
  {
    title: "International Pilgrimages",
    description:
      "Sacred journeys beyond India's borders — Kailash Mansarovar, Nepal's Pashupatinath, Sri Lanka's Kataragama, and other revered destinations across the world.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="var(--color-gold-dark)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Globe */}
        <circle cx="16" cy="16" r="13" />
        <path d="M3 16 L29 16" />
        <path d="M16 3 C12 8 10 12 10 16 C10 20 12 24 16 29" />
        <path d="M16 3 C20 8 22 12 22 16 C22 20 20 24 16 29" />
        <path d="M5 9 C8 11 11 12 16 12 C21 12 24 11 27 9" />
        <path d="M5 23 C8 21 11 20 16 20 C21 20 24 21 27 23" />
      </svg>
    ),
  },
  {
    title: "Honeymoon Packages",
    description:
      "Begin your journey together with a blessing. Our honeymoon packages weave romantic getaways with sacred experiences, creating a foundation of devotion for your life together.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        stroke="var(--color-gold-dark)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Two interlocking rings */}
        <circle cx="11" cy="16" r="7" />
        <circle cx="21" cy="16" r="7" />
        {/* Heart above */}
        <path d="M16 8 C16 6 14 4 12 5 C10 6 10 9 12 11 L16 14 L20 11 C22 9 22 6 20 5 C18 4 16 6 16 8Z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <main className="flex-1">
      <section className="py-24 px-4 bg-surface">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="What We Offer"
            title="Services Crafted with Devotion"
            subtitle="Every offering is designed with care and reverence, ensuring your sacred journey unfolds with grace, comfort, and meaning at every step."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="card-tonal p-8 border-l-2 border-gold-dark rounded-md flex flex-col gap-4"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gold-muted">
                  {service.icon}
                </div>
                <h2 className="font-serif text-xl font-semibold text-navy leading-snug">
                  {service.title}
                </h2>
                <p className="font-sans text-sm leading-relaxed text-midnight/70">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button href="/inquiry" variant="primary" size="lg">
              Plan Your Journey
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
