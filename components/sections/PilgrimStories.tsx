import { TestimonialCard } from "@/components/ui";
import { SectionHeader } from "@/components/ui";
import type { Testimonial } from "@/lib/types";

interface PilgrimStoriesProps {
  testimonials: Testimonial[];
}

export function PilgrimStories({ testimonials }: PilgrimStoriesProps) {
  const displayTestimonials = testimonials.slice(0, 3);

  return (
    <section
      className="py-24 bg-surface"
      aria-labelledby="pilgrim-stories-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          eyebrow="VOICES OF ENLIGHTENMENT"
          title="Pilgrim Stories"
          align="center"
        />

        {displayTestimonials.length === 0 ? (
          <p className="font-sans text-midnight/50 text-center py-12">
            Testimonials coming soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch pt-6">
            {displayTestimonials.map((testimonial, i) => (
              <div
                key={testimonial.id}
                className={
                  /* Middle card gets a subtle lift and gold ring */
                  i === 1
                    ? "lg:-mt-6 lg:scale-[1.03] ring-2 ring-gold rounded-2xl shadow-2xl relative z-10 transition-all duration-500"
                    : "transition-all duration-500 hover:scale-[1.01]"
                }
              >
                <TestimonialCard t={testimonial} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
