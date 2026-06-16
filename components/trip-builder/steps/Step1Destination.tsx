import { useState } from "react";
import type { FormData } from "../TripBuilderForm";

interface Step1Props {
  data: FormData;
  updateData: (field: Partial<FormData>) => void;
  onNext: () => void;
}

const DESTINATIONS = {
  Spiritual: ["Varanasi", "Kailash Mansarovar", "Char Dham", "Tirupati", "Rishikesh", "Kedarnath"],
  Domestic: ["Kashmir", "Rajasthan", "Kerala", "Goa", "Himachal", "Andaman"],
  International: ["Nepal", "Bali", "Dubai", "Maldives", "Switzerland", "Thailand"],
};

export function Step1Destination({ data, updateData, onNext }: Step1Props) {
  const [searchTerm, setSearchTerm] = useState(data.destination);

  const currentDestinations = DESTINATIONS[data.destinationType];

  const handleDestinationSelect = (dest: string) => {
    updateData({ destination: dest });
    setSearchTerm(dest);
  };

  const handleNext = () => {
    if (data.destination || searchTerm) {
      if (searchTerm && !data.destination) {
        updateData({ destination: searchTerm });
      }
      onNext();
    }
  };

  return (
    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-8 md:mb-12 px-4">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-midnight font-normal mb-3 md:mb-4">
          Where would you like to go?
        </h2>
        <p className="font-sans text-sm md:text-base text-midnight/60">
          Choose your sacred destination or explore our curated pilgrimage sites
        </p>
      </div>

      {/* Destination Type Toggle */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10 px-4">
        {(Object.keys(DESTINATIONS) as Array<keyof typeof DESTINATIONS>).map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => {
              updateData({ destinationType: type, destination: "" });
              setSearchTerm("");
            }}
            className={`px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-sans text-xs md:text-sm font-medium transition-all duration-300 ${
              data.destinationType === type
                ? "bg-gold-dark text-white shadow-lg"
                : "bg-white text-midnight border border-midnight/10 hover:border-gold-dark"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div className="mb-6 md:mb-8 px-4">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search or type your destination..."
            className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl border-2 border-midnight/10 focus:border-gold-dark outline-none font-sans text-sm md:text-base transition-all duration-300"
          />
          <svg
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 text-midnight/40 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Destination Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-12 px-4">
        {currentDestinations.map((dest) => (
          <button
            key={dest}
            type="button"
            onClick={() => handleDestinationSelect(dest)}
            className={`p-4 md:p-6 rounded-xl border-2 text-left transition-all duration-300 hover:shadow-lg min-h-[100px] md:min-h-[120px] flex flex-col ${
              data.destination === dest
                ? "border-gold-dark bg-gold-dark/5 shadow-lg"
                : "border-midnight/10 bg-white hover:border-gold-dark/50"
            }`}
          >
            <div className="flex items-start justify-between mb-2 gap-2">
              <span className="font-serif text-base md:text-xl text-midnight leading-tight">{dest}</span>
              {data.destination === dest && (
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gold-dark flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <p className="font-sans text-xs md:text-sm text-midnight/60 mt-auto">Sacred Journey</p>
          </button>
        ))}
      </div>

      {/* Next Button */}
      <div className="flex justify-center md:justify-end px-4">
        <button
          type="button"
          onClick={handleNext}
          disabled={!data.destination && !searchTerm}
          className="btn-premium btn-premium-primary w-full md:w-auto"
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
