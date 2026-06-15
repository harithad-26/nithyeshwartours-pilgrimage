import type { FormData } from "../TripBuilderForm";

interface Step4Props {
  data: FormData;
  updateData: (field: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const BUDGET_RANGES = [
  { id: "budget", label: "Budget", range: "₹15,000 - ₹30,000", icon: "💰" },
  { id: "standard", label: "Standard", range: "₹30,000 - ₹60,000", icon: "⭐" },
  { id: "luxury", label: "Luxury", range: "₹60,000+", icon: "✨" },
];

const ACCOMMODATIONS = [
  { id: "budget" as const, label: "Budget Hotels", desc: "Clean & comfortable" },
  { id: "standard" as const, label: "3-4 Star Hotels", desc: "Premium comfort" },
  { id: "luxury" as const, label: "Luxury Resorts", desc: "Ultimate experience" },
];

const INCLUSIONS = [
  { id: "meals", label: "All Meals", desc: "Breakfast, lunch & dinner" },
  { id: "guide", label: "Tour Guide", desc: "Expert local guide" },
  { id: "transport", label: "Private Transport", desc: "AC vehicle throughout" },
  { id: "activities", label: "Activities", desc: "Sightseeing & experiences" },
];

export function Step4Budget({ data, updateData, onNext, onBack }: Step4Props) {
  const toggleInclusion = (id: string) => {
    const inclusions = data.inclusions.includes(id)
      ? data.inclusions.filter((i) => i !== id)
      : [...data.inclusions, id];
    updateData({ inclusions });
  };

  return (
    <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 px-4">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-midnight font-normal mb-3 md:mb-4">
          Budget & Preferences
        </h2>
        <p className="font-sans text-sm md:text-base text-midnight/60">
          Customize your journey to match your preferences
        </p>
      </div>

      {/* Budget Range */}
      <div className="mb-12">
        <label className="font-sans text-sm font-medium text-midnight/80 mb-4 block">
          Select Your Budget Range
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {BUDGET_RANGES.map((budget) => (
            <button
              key={budget.id}
              type="button"
              onClick={() => updateData({ budget: budget.id })}
              className={`p-6 rounded-xl border-2 text-center transition-all duration-300 ${
                data.budget === budget.id
                  ? "border-gold-dark bg-gold-dark/5 shadow-lg"
                  : "border-midnight/10 bg-white hover:border-gold-dark/50"
              }`}
            >
              <div className="text-3xl mb-3">{budget.icon}</div>
              <h3 className="font-serif text-lg text-midnight mb-2">{budget.label}</h3>
              <p className="font-sans text-sm text-midnight/60">{budget.range}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Accommodation Type */}
      <div className="mb-12">
        <label className="font-sans text-sm font-medium text-midnight/80 mb-4 block">
          Accommodation Preference
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ACCOMMODATIONS.map((acc) => (
            <button
              key={acc.id}
              type="button"
              onClick={() => updateData({ accommodation: acc.id })}
              className={`p-6 rounded-xl border-2 text-left transition-all duration-300 ${
                data.accommodation === acc.id
                  ? "border-gold-dark bg-gold-dark/5 shadow-lg"
                  : "border-midnight/10 bg-white hover:border-gold-dark/50"
              }`}
            >
              <h3 className="font-serif text-lg text-midnight mb-2">{acc.label}</h3>
              <p className="font-sans text-sm text-midnight/60">{acc.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Inclusions */}
      <div className="mb-12">
        <label className="font-sans text-sm font-medium text-midnight/80 mb-4 block">
          What would you like to include?
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {INCLUSIONS.map((inc) => (
            <button
              key={inc.id}
              type="button"
              onClick={() => toggleInclusion(inc.id)}
              className={`p-6 rounded-xl border-2 text-left transition-all duration-300 flex items-start gap-4 ${
                data.inclusions.includes(inc.id)
                  ? "border-gold-dark bg-gold-dark/5"
                  : "border-midnight/10 bg-white hover:border-gold-dark/50"
              }`}
            >
              <div
                className={`w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                  data.inclusions.includes(inc.id)
                    ? "border-gold-dark bg-gold-dark"
                    : "border-midnight/30"
                }`}
              >
                {data.inclusions.includes(inc.id) && (
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <div>
                <h3 className="font-sans text-base font-medium text-midnight mb-1">{inc.label}</h3>
                <p className="font-sans text-sm text-midnight/60">{inc.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4">
        <button
          type="button"
          onClick={onBack}
          className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white border border-midnight/20 text-midnight rounded-lg font-sans text-sm font-semibold hover:bg-surface transition-all duration-300 flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!data.budget}
          className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-midnight text-white rounded-lg font-sans text-sm font-semibold hover:bg-midnight/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          Review Summary
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
