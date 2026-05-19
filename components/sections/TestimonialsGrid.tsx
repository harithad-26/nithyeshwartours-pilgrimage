"use client";
import { useState } from "react";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import type { Testimonial } from "@/lib/types";

const FILTER_TABS = [
  { label: "All Journeys", min: 1 },
  { label: "5 Stars", min: 5 },
  { label: "4+ Stars", min: 4 },
];

interface TestimonialsGridProps {
  testimonials: Testimonial[];
}

export function TestimonialsGrid({ testimonials }: TestimonialsGridProps) {
  const [activeTab, setActiveTab] = useState(0);

  const filtered =
    activeTab === 0
      ? testimonials
      : testimonials.filter((t) => t.rating >= FILTER_TABS[activeTab].min);

  return (
    <section className="py-16 px-6 bg-surface" aria-label="Testimonials">
      <div className="max-w-7xl mx-auto">
        {/* Filter tabs */}
        <div
          className="flex gap-3 mb-14 justify-center flex-wrap"
          role="tablist"
          aria-label="Filter testimonials"
        >
          {FILTER_TABS.map((tab, i) => (
            <button
              key={tab.label}
              role="tab"
              aria-selected={activeTab === i}
              onClick={() => setActiveTab(i)}
              className={`font-sans text-sm px-5 py-2.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 ${
                activeTab === i
                  ? "bg-midnight text-white"
                  : "bg-white text-midnight/60 hover:text-midnight border border-midnight/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="font-sans text-base text-midnight/50 text-center py-20">
            No testimonials found. Be the first to share your sacred journey.
          </p>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {filtered.map((t) => (
              <div key={t.id} className="break-inside-avoid">
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
