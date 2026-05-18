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
];

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section aria-labelledby="faq-heading" className="py-20 px-6 bg-surface-low">
      <div className="max-w-3xl mx-auto">
        <h2 id="faq-heading" className="font-serif text-3xl text-navy font-semibold text-center mb-12">
          Seeking Clarity
        </h2>

        <dl className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-surface-lowest rounded-md overflow-hidden shadow-ambient">
              <dt>
                <button
                  className="w-full flex justify-between items-center px-6 py-5 text-left focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span className="font-sans text-sm font-semibold text-navy pr-4">
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-5 h-5 rounded-full border border-gold-dark flex items-center justify-center transition-transform duration-300 ${
                      open === i ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 1v8M1 5h8" stroke="var(--color-gold-dark)" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                </button>
              </dt>
              <dd
                id={`faq-answer-${i}`}
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-48" : "max-h-0"
                }`}
                aria-hidden={open !== i}
              >
                <p className="px-6 pb-5 font-sans text-sm text-midnight/60 leading-relaxed">
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
