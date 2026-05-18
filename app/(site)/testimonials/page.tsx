import type { Metadata } from "next";
import { getTestimonials } from "@/lib/strapi";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

export const metadata: Metadata = {
  title: "Pilgrim Stories",
};

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <main className="flex-1">
      <section className="py-24 px-4 bg-surface">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Pilgrim Stories"
            title="Voices of the Devoted"
            subtitle="Thousands of pilgrims have walked these sacred paths with us. Here are their stories, told in their own words."
          />

          {testimonials.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-sans text-base text-midnight/50">
                No testimonials yet. Be the first to share your sacred journey
                with us.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
              {testimonials.map((t) => (
                <TestimonialCard key={t.id} t={t} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
