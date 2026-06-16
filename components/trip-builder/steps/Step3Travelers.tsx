import type { FormData } from "../TripBuilderForm";

interface Step3Props {
  data: FormData;
  updateData: (field: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const GROUP_TYPES = [
  {
    id: "solo" as const,
    label: "Solo Traveler",
    description: "Traveling alone",
    icon: "🧘",
  },
  {
    id: "couple" as const,
    label: "Couple",
    description: "Two travelers",
    icon: "💑",
  },
  {
    id: "family" as const,
    label: "Family",
    description: "3-6 travelers",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    id: "group" as const,
    label: "Group",
    description: "7+ travelers",
    icon: "👥",
  },
];

export function Step3Travelers({ data, updateData, onNext, onBack }: Step3Props) {
  return (
    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 px-4">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-midnight font-normal mb-3 md:mb-4">
          Who&apos;s traveling?
        </h2>
        <p className="font-sans text-sm md:text-base text-midnight/60">
          Tell us about your travel group
        </p>
      </div>

      {/* Group Type Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {GROUP_TYPES.map((type) => (
          <button
            key={type.id}
            type="button"
            onClick={() => updateData({ groupType: type.id })}
            className={`p-8 rounded-xl border-2 text-center transition-all duration-300 hover:shadow-lg ${
              data.groupType === type.id
                ? "border-gold-dark bg-gold-dark/5 shadow-lg"
                : "border-midnight/10 bg-white hover:border-gold-dark/50"
            }`}
          >
            <div className="text-4xl mb-4">{type.icon}</div>
            <h3 className="font-serif text-xl text-midnight mb-2">{type.label}</h3>
            <p className="font-sans text-sm text-midnight/60">{type.description}</p>
          </button>
        ))}
      </div>

      {/* Number of Travelers */}
      <div className="mb-12">
        <label className="font-sans text-sm font-medium text-midnight/80 mb-4 block">
          Number of Travelers
        </label>
        <div className="bg-white rounded-xl p-8 border border-midnight/10 flex items-center justify-center gap-8">
          <button
            type="button"
            onClick={() => updateData({ travelers: Math.max(1, data.travelers - 1) })}
            className="w-12 h-12 rounded-full border-2 border-midnight/20 flex items-center justify-center text-midnight hover:border-gold-dark hover:text-gold-dark transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>
          <span className="font-serif text-4xl text-midnight min-w-[60px] text-center">
            {data.travelers}
          </span>
          <button
            type="button"
            onClick={() => updateData({ travelers: Math.min(50, data.travelers + 1) })}
            className="w-12 h-12 rounded-full border-2 border-midnight/20 flex items-center justify-center text-midnight hover:border-gold-dark hover:text-gold-dark transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-4">
        <button
          type="button"
          onClick={onBack}
          className="btn-premium btn-premium-secondary w-full sm:w-auto"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 rotate-180">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span>Back</span>
        </button>
        <button
          type="button"
          onClick={onNext}
          className="btn-premium btn-premium-primary w-full sm:w-auto"
        >
          <span>Continue</span>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
