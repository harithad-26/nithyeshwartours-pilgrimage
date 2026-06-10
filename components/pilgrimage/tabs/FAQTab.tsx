"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQTab({ data }: { data: FAQ[] }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-3xl text-midnight font-normal mb-4">Frequently Asked Questions</h2>
        <p className="font-sans text-base text-midnight/60 leading-relaxed">
          Find answers to common questions about the Kailash Mansarovar Yatra. Click each question to expand.
        </p>
      </div>

      <div className="space-y-3">
        {data.map((faq, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden border border-midnight/10 hover:border-gold-dark/30 transition-all shadow-sm"
            >
              {/* Question - Accordion Trigger */}
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 md:px-8 py-6 text-left hover:bg-surface-low transition-colors"
                aria-expanded={isExpanded}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <span className="shrink-0 text-2xl mt-1">❓</span>
                    <h3 className="font-sans text-base md:text-lg font-semibold text-midnight leading-tight">
                      {faq.question}
                    </h3>
                  </div>
                  <svg
                    className={`w-6 h-6 shrink-0 text-midnight/40 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Answer - Accordion Content */}
              {isExpanded && (
                <div className="px-6 md:px-8 pb-6 pt-2 border-t border-midnight/5 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="pl-10">
                    <p className="font-sans text-base text-midnight/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still Have Questions CTA */}
      <div className="bg-gradient-to-r from-midnight to-midnight/95 rounded-xl p-8 text-center">
        <h3 className="font-serif text-2xl text-white font-light mb-4">Still Have Questions?</h3>
        <p className="font-sans text-base text-white/70 mb-6 max-w-2xl mx-auto">
          Our team is here to help. Contact us for personalized assistance with your pilgrimage planning.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="tel:+917200118411"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold bg-gold text-midnight px-8 py-4 rounded-full hover:bg-gold-light transition-colors"
          >
            <span>📞</span>
            Call: +91 72001 18411
          </a>
          <a
            href="https://wa.me/917200118411"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-white border-2 border-white/40 px-8 py-4 rounded-full hover:bg-white/10 hover:border-white transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp Us
          </a>
          <a
            href="/inquiry"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-white border-2 border-white/40 px-8 py-4 rounded-full hover:bg-white/10 hover:border-white transition-all"
          >
            Send Inquiry
          </a>
        </div>
      </div>

      {/* Search Help */}
      <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
        <div className="flex items-start gap-4">
          <span className="text-3xl">💡</span>
          <div>
            <h4 className="font-sans text-sm font-semibold text-midnight mb-2">Can't find your question?</h4>
            <p className="font-sans text-sm text-midnight/70 leading-relaxed">
              Try using Ctrl+F (or Cmd+F on Mac) to search this page for keywords related to your question. 
              You can also check other tabs like "Booking", "Terms", or "Pre-Departure" for specific information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
