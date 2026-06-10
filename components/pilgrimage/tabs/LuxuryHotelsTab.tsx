"use client";

import { useState } from "react";

interface LuxuryHotelsTabProps {
  hotels: any[];
}

const LOCATION_DESCRIPTIONS: Record<string, string> = {
  Kathmandu: "Altitude: 1,300m. The starting point of your pilgrimage. Includes check-in at Hotel Le Himalaya, detailed safety briefings, and early morning visits to Pashupatinath Temple for sacred blessings.",
  Nepalgunj: "Altitude: 150m. Key transit hub in southern Nepal. Used for overnight rest and alignment before the high-altitude flights into the Humla mountain range.",
  Simikot: "Altitude: 2,800m. Beautiful mountain valley settlement. A critical acclimatization rest stop where pilgrims undertake light walking to adjust to thin mountain air.",
  Hilsa: "Altitude: 3,700m. The border crossing point between Nepal and Tibet, accessed via helicopter. Connects the river valley to the Tibetan highway.",
  Purang: "Altitude: 3,700m. Border checkpoint town in Tibet. Features modern administrative guesthouses, custom clearing centers, and rest days for altitude transition.",
  Manasarovar: "Altitude: 4,550m. The holy freshwater lake. Offers breathtaking mirror views of the South Face of Kailash. Features sunrise baths and Vedic fireside puja rituals.",
  Dirapuk: "Altitude: 4,860m. The first basecamp of the 52km Parikrama. Sits directly opposite the colossal North Face of Mt. Kailash, offering pristine close-up darshan.",
  Zutulpuk: "Altitude: 4,600m. The final basecamp after descending from Dolma La Pass (5,630m). Home to the sacred cave temple of Milarepa and tranquil riverside meadows.",
};

export default function LuxuryHotelsTab({ hotels }: LuxuryHotelsTabProps) {
  const [expandedHotel, setExpandedHotel] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {hotels.map((hotel, index) => {
        const isExpanded = expandedHotel === index;
        const description = LOCATION_DESCRIPTIONS[hotel.location] || "Acclimatization stop and comfortable group guesthouse stay.";
        
        return (
          <div
            key={index}
            className="border border-midnight/5 hover:border-midnight/10 bg-white transition-colors overflow-hidden"
          >
            {/* Header Accordion Toggle */}
            <button
              onClick={() => setExpandedHotel(isExpanded ? null : index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#FAFAF9] transition-colors cursor-pointer focus:outline-none"
              aria-expanded={isExpanded}
              aria-label={`Toggle details for ${hotel.hotelName} at ${hotel.location}`}
            >
              <div className="flex-1 pr-4">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-sans text-[10px] text-gold-dark uppercase tracking-wider font-semibold">
                    {hotel.location}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-midnight/15" />
                  <span className="font-sans text-xs text-midnight/65">
                    {hotel.category}
                  </span>
                </div>
                <h3 className="font-serif text-lg text-midnight font-light">
                  {hotel.hotelName}
                </h3>
              </div>

              {/* Nights indicator & chevron */}
              <div className="flex items-center gap-6">
                {hotel.nights && (
                  <div className="text-right hidden sm:block">
                    <div className="font-serif text-xl text-midnight font-light leading-none">
                      {hotel.nights}
                    </div>
                    <div className="font-sans text-[9px] text-midnight/65 uppercase tracking-wider font-semibold">
                      {hotel.nights === 1 ? 'Night' : 'Nights'}
                    </div>
                  </div>
                )}
                
                {/* Chevron */}
                <svg
                  className={`w-5 h-5 text-midnight/40 flex-shrink-0 transition-transform duration-300 ${
                    isExpanded ? "rotate-180 text-gold-dark" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {/* Collapsible Details */}
            {isExpanded && (
              <div className="px-6 pb-6 border-t border-midnight/5 bg-[#FAFAF9] animate-[fadeIn_0.3s_ease-out]">
                <div className="pt-6 space-y-4">
                  <div>
                    <h4 className="font-sans text-[10px] text-midnight/65 uppercase tracking-wider font-semibold mb-2">
                      About this Basecamp Stop
                    </h4>
                    <p className="font-sans text-sm text-midnight/70 leading-relaxed font-light">
                      {description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-x-8 gap-y-2 pt-2 text-xs text-midnight/60 font-light border-t border-midnight/5">
                    <div>
                      <span className="font-semibold text-midnight">Type:</span> {hotel.category} Accommodation
                    </div>
                    {hotel.nights && (
                      <div>
                        <span className="font-semibold text-midnight">Duration:</span> {hotel.nights} {hotel.nights === 1 ? 'Night' : 'Nights'} stay
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
