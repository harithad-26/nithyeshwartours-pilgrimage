import Link from "next/link";
import type { FormData } from "../TripBuilderForm";

interface Step5Props {
  data: FormData;
  onBack: () => void;
}

const BASE_PRICES = {
  budget: 20000,
  standard: 45000,
  luxury: 75000,
};

const INCLUSION_PRICES = {
  meals: 5000,
  guide: 3000,
  transport: 7000,
  activities: 4000,
};

export function Step5Summary({ data, onBack }: Step5Props) {
  // Calculate pricing
  const basePrice = BASE_PRICES[data.accommodation] || BASE_PRICES.standard;
  const durationMultiplier = data.duration / 7;
  const travelerMultiplier = data.travelers;
  
  const inclusionCost = data.inclusions.reduce(
    (sum, inc) => sum + (INCLUSION_PRICES[inc as keyof typeof INCLUSION_PRICES] || 0),
    0
  );

  const subtotal = Math.round((basePrice * durationMultiplier + inclusionCost) * travelerMultiplier);
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + tax;

  return (
    <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 px-4">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-midnight font-normal mb-3 md:mb-4">
          Your Journey Summary
        </h2>
        <p className="font-sans text-sm md:text-base text-midnight/60">
          Review your customized pilgrimage package
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Left: Trip Details */}
        <div className="lg:col-span-2 space-y-4 md:space-y-6 order-2 lg:order-1">
          {/* Destination */}
          <div className="bg-white rounded-xl p-4 md:p-6 border border-midnight/10">
            <h3 className="font-sans text-xs uppercase tracking-wider text-midnight/60 mb-2 md:mb-3">
              Destination
            </h3>
            <p className="font-serif text-xl md:text-2xl text-midnight">{data.destination}</p>
            <p className="font-sans text-sm text-midnight/60 mt-1">
              {data.destinationType} Journey
            </p>
          </div>

          {/* Travel Details */}
          <div className="bg-white rounded-xl p-4 md:p-6 border border-midnight/10">
            <h3 className="font-sans text-xs uppercase tracking-wider text-midnight/60 mb-3 md:mb-4">
              Travel Details
            </h3>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div>
                <p className="font-sans text-xs md:text-sm text-midnight/60 mb-1">Travel Month</p>
                <p className="font-sans text-sm md:text-base font-medium text-midnight">{data.month}</p>
              </div>
              <div>
                <p className="font-sans text-xs md:text-sm text-midnight/60 mb-1">Duration</p>
                <p className="font-sans text-sm md:text-base font-medium text-midnight">
                  {data.duration} Days
                </p>
              </div>
              <div>
                <p className="font-sans text-xs md:text-sm text-midnight/60 mb-1">Travelers</p>
                <p className="font-sans text-sm md:text-base font-medium text-midnight">
                  {data.travelers} {data.travelers === 1 ? "Person" : "People"}
                </p>
              </div>
              <div>
                <p className="font-sans text-xs md:text-sm text-midnight/60 mb-1">Group Type</p>
                <p className="font-sans text-sm md:text-base font-medium text-midnight capitalize">
                  {data.groupType}
                </p>
              </div>
            </div>
          </div>

          {/* Accommodation & Preferences */}
          <div className="bg-white rounded-xl p-4 md:p-6 border border-midnight/10">
            <h3 className="font-sans text-xs uppercase tracking-wider text-midnight/60 mb-3 md:mb-4">
              Accommodation & Preferences
            </h3>
            <div className="space-y-3">
              <div>
                <p className="font-sans text-xs md:text-sm text-midnight/60 mb-1">Accommodation</p>
                <p className="font-sans text-sm md:text-base font-medium text-midnight capitalize">
                  {data.accommodation} Class
                </p>
              </div>
              {data.inclusions.length > 0 && (
                <div>
                  <p className="font-sans text-xs md:text-sm text-midnight/60 mb-2">Inclusions</p>
                  <div className="flex flex-wrap gap-2">
                    {data.inclusions.map((inc) => (
                      <span
                        key={inc}
                        className="px-2.5 md:px-3 py-1 bg-gold-dark/10 text-gold-dark rounded-full font-sans text-xs font-medium capitalize"
                      >
                        {inc}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: Pricing Summary */}
        <div className="lg:col-span-1 order-1 lg:order-2">
          <div className="bg-midnight rounded-xl p-6 md:p-8 text-white lg:sticky lg:top-32">
            <h3 className="font-serif text-xl md:text-2xl mb-4 md:mb-6">Price Breakdown</h3>
            
            <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
              <div className="flex justify-between py-2 md:py-3 border-b border-white/10">
                <span className="font-sans text-xs md:text-sm text-white/70">Base Package</span>
                <span className="font-sans text-xs md:text-sm font-medium">
                  ₹{Math.round(basePrice * durationMultiplier).toLocaleString("en-IN")}
                </span>
              </div>
              
              {data.inclusions.length > 0 && (
                <div className="flex justify-between py-2 md:py-3 border-b border-white/10">
                  <span className="font-sans text-xs md:text-sm text-white/70">Inclusions</span>
                  <span className="font-sans text-xs md:text-sm font-medium">
                    ₹{inclusionCost.toLocaleString("en-IN")}
                  </span>
                </div>
              )}
              
              <div className="flex justify-between py-2 md:py-3 border-b border-white/10">
                <span className="font-sans text-xs md:text-sm text-white/70">
                  × {data.travelers} Traveler{data.travelers > 1 ? "s" : ""}
                </span>
                <span className="font-sans text-xs md:text-sm font-medium">
                  ₹{subtotal.toLocaleString("en-IN")}
                </span>
              </div>
              
              <div className="flex justify-between py-2 md:py-3 border-b border-white/10">
                <span className="font-sans text-xs md:text-sm text-white/70">Taxes & Fees (5%)</span>
                <span className="font-sans text-xs md:text-sm font-medium">
                  ₹{tax.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            <div className="pt-4 md:pt-6 border-t-2 border-gold-dark">
              <div className="flex justify-between items-baseline mb-4 md:mb-6">
                <span className="font-sans text-xs md:text-sm uppercase tracking-wider text-white/70">
                  Total
                </span>
                <span className="font-serif text-3xl md:text-4xl text-gold">
                  ₹{total.toLocaleString("en-IN")}
                </span>
              </div>

              <Link
                href={`/inquiry?destination=${encodeURIComponent(data.destination)}&travelers=${data.travelers}&duration=${data.duration}`}
                className="w-full text-center bg-gold hover:bg-gold-light text-midnight font-sans text-xs font-bold uppercase tracking-wider py-2.5 px-4 rounded-md transition-all duration-300 min-h-[40px] flex items-center justify-center cursor-pointer active:scale-[0.98]"
              >
                <span>Proceed to Book</span>
              </Link>

              <p className="mt-3 md:mt-4 font-sans text-xs text-white/50 text-center">
                Final price may vary based on availability and season
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-6 md:mt-8">
        <button
          type="button"
          onClick={onBack}
          className="group bg-white hover:bg-slate-50 text-midnight border border-midnight/20 font-sans text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-md transition-all duration-300 min-h-[42px] flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] w-full sm:w-auto"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 rotate-180 transition-transform duration-300 group-hover:-translate-x-1">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span>Modify Preferences</span>
        </button>
      </div>
    </div>
  );
}
