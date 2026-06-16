import { SectionHeader } from "@/components/ui";

const PILLARS = [
  {
    title: "30+ Years of Experience",
    description: "Decades of expertise in pilgrimage, temple tours, and cultural travel circuits across India.",
  },
  {
    title: "Spiritual Travel Specialists",
    description: "Dedicated focus on authentic temple circuits, yatras, rituals, and sacred destinations.",
  },
  {
    title: "End-to-End Arrangements",
    description: "All-inclusive support from VIP darshan tickets and satvik meals to safe transport and permits.",
  },
  {
    title: "Trusted by Families",
    description: "Thousands of successful multi-generational journeys designed with safety and comfort in mind.",
  },
  {
    title: "Handpicked Hotels",
    description: "Comfortable, clean, and premium stays selected near sacred sights for easy accessibility.",
  },
  {
    title: "Dedicated Support",
    description: "Personal 24/7 assistance on the ground before, during, and after your travel.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="pt-36 pb-20 md:py-28 bg-surface-low relative overflow-hidden" aria-labelledby="why-choose-us-heading">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <SectionHeader
          eyebrow="A Legacy of Trust"
          title="Why Travellers Choose Nithyeshwar"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-20">
          {PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="group bg-white p-8 md:p-10 border border-midnight/15 hover:border-midnight/80 transition-all duration-300 cursor-pointer flex flex-col hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,6,19,0.02)]"
            >
              {/* Luxury divider line */}
              <div className="w-12 h-[1px] bg-midnight/10 group-hover:bg-midnight/60 mb-6 group-hover:w-20 transition-all duration-300" />
              
              {/* Title */}
              <h3 className="font-serif text-xl md:text-2xl text-midnight font-normal mb-4 leading-tight">
                {pillar.title}
              </h3>
              
              {/* Description */}
              <p className="font-sans text-sm md:text-base text-midnight/60 leading-relaxed group-hover:text-midnight/80 transition-colors duration-300">
                {pillar.description}
              </p>

              {/* Bottom accent line on hover */}
              <div className="mt-auto pt-6">
                <div className="w-0 h-px bg-midnight/20 group-hover:w-full transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
