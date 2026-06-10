"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

export default function KailashFaq({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="bg-white rounded border border-midnight/5 shadow-ambient overflow-hidden transition-all duration-300"
          >
            <h3>
              <button
                type="button"
                className="w-full flex justify-between items-center p-6 text-left font-serif text-base text-midnight hover:bg-surface-low transition-colors select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${i}`}
              >
                <span>{faq.q}</span>
                <span
                  className={`text-gold-dark transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                >
                  ▼
                </span>
              </button>
            </h3>
            <div
              id={`faq-answer-${i}`}
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[300px] border-t border-midnight/5" : "max-h-0"
              }`}
              aria-hidden={!isOpen}
            >
              <div className="p-6 bg-surface-low/35 font-sans text-sm text-midnight/70 leading-relaxed">
                {faq.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
