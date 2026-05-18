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
      className="py-[var(--spacing-section)] bg-surface"
      aria-labelledby="pilgrim-stories-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          eyebrow="Pilgrim Stories"
          title="What Our Travellers Say"
          subtitle="Real experiences from the people who've journeyed with us. Their stories are our greatest achievement."
          align="center"
        />

        {displayTestimonials.length === 0 ? (
          <p className="font-sans text-midnight/50 text-center py-12">
            Testimonials coming soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} t={testimonial} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
