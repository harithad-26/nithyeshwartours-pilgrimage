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
  Pokhara: "Altitude: 822m. The scenic lake city at the foothills of the Annapurna range. Features tranquil Phewa Lake boat rides, spectacular Sarangkot Himalayan sunrises, and visits to the Gupteshwar Mahadev cave shrine.",
  "Ranipauwa (Muktinath)": "Altitude: 3,720m. High-altitude village situated at the base of the sacred Muktinath Temple in the Mustang region. Surrounded by stunning, cold winds and panoramic Himalayan landscapes.",
  "Chitwan National Park": "Altitude: 150m. World-renowned UNESCO wildlife sanctuary in the southern plains. Known for its rich sal forests, canoeing on the Rapti river, Tharu cultural shows, and elephant/jeep safaris.",
  Varanasi: "Altitude: 80m. Kashi, the world's oldest living city. Home to the sacred Kashi Vishwanath temple, predawn and evening Ganga Aarti ceremonies, and peaceful boat rides on the Ganges River.",
  Gorakhpur: "Altitude: 100m. Historic city in eastern Uttar Pradesh. Features check-in and final darshan visits at the legendary Gorakhnath Temple, acting as our cross-border transit gateway.",
  Lumbini: "Altitude: 150m. The sacred birthplace of Lord Buddha and a UNESCO World Heritage site. Home to the Maya Devi Temple, the Ashoka Pillar, and beautiful monasteries from across the world.",
  Barkot: "Altitude: 1,220m. A peaceful town on the banks of the Yamuna River, serving as our gateway before embarking on the trek to Yamunotri.",
  Uttarkashi: "Altitude: 1,158m. A holy city on the banks of the Bhagirathi River. Home to the historic Kashi Vishwanath Temple.",
  Guptkashi: "Altitude: 1,319m. Located in the Mandakini river valley on the road to Kedarnath, home to the ancient Vishwanath temple.",
  Kedarnath: "Altitude: 3,583m. The sacred basecamp right opposite the Kedarnath temple. Features clean, simple pilgrim shelter stays surrounded by snowy peaks.",
  Badrinath: "Altitude: 3,133m. Nestled in a scenic valley between Nar and Narayana mountain ranges, featuring thermal springs and majestic temple views.",
  Rudraprayag: "Altitude: 895m. The sacred confluence of the Alaknanda and Mandakini rivers, providing a serene rest stop during the return leg.",
  Rishikesh: "Altitude: 340m. The world yoga capital, featuring relaxing river walks, Parmarth Niketan evening Ganga Aarti, and wellness retreats.",
  Dehradun: "Altitude: 450m. The scenic capital city of Uttarakhand and our flight launching point. Offers premium hospitality before boarding heli flights.",
  Kharsali: "Altitude: 2,675m. The helicopter landing site for Yamunotri, featuring beautiful views and comfortable cottage camps.",
  Harsil: "Altitude: 2,620m. A gorgeous mountain valley filled with dense deodar forests and apple orchards, serving as our base for Gangotri.",
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
            className="border border-midnight/5 rounded-lg hover:-translate-y-0.5 hover:shadow-md hover:border-gold-dark/20 bg-white transition-all duration-300 overflow-hidden"
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

            {/* Collapsible Details — CSS grid height animation */}
            <div
              className={`grid transition-[grid-template-rows] duration-350 ease-in-out ${
                isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden min-h-0">
                <div className="px-6 pb-6 border-t border-midnight/5 bg-[#FAFAF9]">
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
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
