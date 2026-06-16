import type { FormData } from "../TripBuilderForm";

interface Step2Props {
  data: FormData;
  updateData: (field: Partial<FormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export function Step2Dates({ data, updateData, onNext, onBack }: Step2Props) {
  return (
    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 px-4">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-midnight font-normal mb-3 md:mb-4">
          When would you like to travel?
        </h2>
        <p className="font-sans text-sm md:text-base text-midnight/60">
          Select your preferred travel month and duration
        </p>
      </div>

      {/* Month Selection */}
      <div className="mb-12">
        <label className="font-sans text-sm font-medium text-midnight/80 mb-4 block">
          Select Month
        </label>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
          {MONTHS.map((month) => (
            <button
              key={month}
              type="button"
              onClick={() => updateData({ month })}
              className={`p-4 rounded-lg border-2 font-sans text-sm font-medium transition-all duration-300 ${
                data.month === month
                  ? "border-gold-dark bg-gold-dark/5 text-midnight"
                  : "border-midnight/10 bg-white text-midnight/70 hover:border-gold-dark/50"
              }`}
            >
              {month}
            </button>
          ))}
        </div>
      </div>

      {/* Duration Slider */}
      <div className="mb-12">
        <label className="font-sans text-sm font-medium text-midnight/80 mb-4 block">
          Duration: {data.duration} {data.duration === 1 ? "Day" : "Days"}
        </label>
        <div className="bg-white rounded-xl p-8 border border-midnight/10">
          <input
            type="range"
            min="1"
            max="30"
            value={data.duration}
            onChange={(e) => updateData({ duration: parseInt(e.target.value) })}
            className="w-full h-2 bg-midnight/10 rounded-lg appearance-none cursor-pointer accent-gold-dark"
          />
          <div className="flex justify-between mt-4 font-sans text-xs text-midnight/60">
            <span>1 Day</span>
            <span>15 Days</span>
            <span>30 Days</span>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
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
          disabled={!data.month}
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
