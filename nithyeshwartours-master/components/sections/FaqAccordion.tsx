"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "Which level of fitness is required for your trips?",
    a: "We design trips for devotees of all fitness levels. Detailed fitness requirements are listed on each package page. Our team assists pilgrims at every step.",
  },
  {
    q: "Do you provide personalized spiritual guidance?",
    a: "Yes. Every package includes an assigned spiritual guide with deep knowledge of the destination's history, rituals, and significance.",
  },
  {
    q: "What dietary options are available during the trip?",
    a: "We provide sattvic vegetarian meals throughout all pilgrimages. Special dietary requirements can be accommodated with advance notice.",
  },
  {
    q: "How do I book a custom pilgrimage package?",
    a: "Simply fill out our inquiry form with your destination preferences, travel dates, and group size. Our pilgrim concierge will craft a bespoke itinerary within 48 hours.",
  },
];

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section aria-labelledby="faq-heading" className="py-32 px-6 bg-surface">
      <div className="max-w-3xl mx-auto">
        <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4 text-center">
          Common Questions
        </p>
        <h2
          id="faq-heading"
          className="font-serif text-3xl md:text-4xl text-midnight font-normal text-center mb-4 leading-snug"
        >
          Seeking Clarity
        </h2>
        <p className="font-sans text-base text-midnight/50 text-center mb-14 max-w-xl mx-auto leading-relaxed">
          Everything you need to know before beginning your sacred journey.
        </p>

        <dl className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white rounded-md overflow-hidden">
              <dt>
                <button
                  className="w-full flex justify-between items-center px-7 py-5 text-left focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="font-serif text-base text-midnight font-normal pr-6 leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                      open === i ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                    >
                      <path
                        d="M1 1l6 6 6-6"
                        stroke="var(--color-gold-dark)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </dt>
              <dd
                id={`faq-answer-${i}`}
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-60" : "max-h-0"
                }`}
                aria-hidden={open !== i}
              >
                <p className="px-7 pb-6 font-sans text-sm text-midnight/60 leading-relaxed">
                  {faq.a}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
