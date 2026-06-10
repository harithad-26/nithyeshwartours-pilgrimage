"use client";

import { useState } from "react";

interface LuxuryItineraryTabProps {
  data: any;
}

export default function LuxuryItineraryTab({ data }: LuxuryItineraryTabProps) {
  const [expandedDay, setExpandedDay] = useState<number | null>(1);

  return (
    <div className="relative">
      {/* Connecting Timeline Line */}
      <div className="absolute left-6 top-4 bottom-4 w-px bg-midnight/10" aria-hidden="true" />

      <div className="space-y-6">
        {data.itinerary.map((day: any) => {
          const isExpanded = expandedDay === day.day;
          return (
            <div key={day.day} className="relative flex gap-6">
              {/* Timeline Day Circle Badge (Interactive Node) */}
              <button
                onClick={() => setExpandedDay(isExpanded ? null : day.day)}
                className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-white border border-midnight/10 hover:border-gold-dark/30 hover:bg-gold-dark/5 transition-all flex items-center justify-center cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-expanded={isExpanded}
                aria-label={`Toggle details for Day ${day.day}`}
              >
                <span className="font-sans text-xs text-midnight font-semibold group-hover:text-gold-dark transition-colors">
                  D{day.day}
                </span>
              </button>

              {/* Content Panel */}
              <div className="flex-1 pb-2">
                <div className="bg-white border border-midnight/5 rounded-lg hover:-translate-y-0.5 hover:shadow-md hover:border-gold-dark/20 transition-all duration-300">
                  {/* Accordion Toggle Header */}
                  <button
                    onClick={() => setExpandedDay(isExpanded ? null : day.day)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#FAFAF9] transition-colors cursor-pointer focus:outline-none"
                  >
                    <div>
                      {day.altitude && (
                        <span className="font-sans text-[10px] uppercase tracking-wider text-gold-dark font-semibold block mb-0.5">
                          Altitude: {day.altitude}
                        </span>
                      )}
                      <h3 className="font-serif text-lg text-midnight font-light">
                        {day.title.replace(/Day \d+:\s*/, "")}
                      </h3>
                    </div>
                    {/* Expand/Collapse Chevron Indicator */}
                    <svg
                      className={`w-5 h-5 text-midnight/40 flex-shrink-0 ml-4 transition-transform duration-300 ${
                        isExpanded ? "rotate-180 text-gold-dark" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Collapsible Content */}
                  {isExpanded && (
                    <div className="px-6 pb-6 border-t border-midnight/5 bg-[#FAFAF9] animate-[fadeIn_0.3s_ease-out]">
                      <div className="pt-6 space-y-6">
                        {/* Activities List */}
                        <div>
                          <h4 className="font-sans text-[10px] text-midnight/65 uppercase tracking-wider font-semibold mb-3">
                            Activities & Schedule
                          </h4>
                          <ul className="space-y-2.5">
                            {day.activities.map((activity: string, index: number) => (
                              <li key={index} className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-gold-dark mt-2 flex-shrink-0" />
                                <span className="font-sans text-sm text-midnight/70 leading-relaxed font-light">
                                  {activity}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Travel Parameters (Meals, Lodging, Distance) */}
                        <div className="grid md:grid-cols-3 gap-6 pt-5 border-t border-midnight/5">
                          {day.accommodation && (
                            <div>
                              <h5 className="font-sans text-[10px] text-midnight/65 uppercase tracking-wider font-semibold mb-1">
                                Stay
                              </h5>
                              <p className="font-sans text-sm text-midnight/70 leading-relaxed font-light">
                                {day.accommodation}
                              </p>
                            </div>
                          )}
                          {day.meals && (
                            <div>
                              <h5 className="font-sans text-[10px] text-midnight/65 uppercase tracking-wider font-semibold mb-1">
                                Meals
                              </h5>
                              <div className="flex flex-wrap gap-2 text-sm text-midnight/70 font-light">
                                {[
                                  day.meals.breakfast && "Breakfast",
                                  day.meals.lunch && "Lunch",
                                  day.meals.dinner && "Dinner",
                                ]
                                  .filter(Boolean)
                                  .join(" · ") || "None"}
                              </div>
                            </div>
                          )}
                          {day.travelDistance && (
                            <div>
                              <h5 className="font-sans text-[10px] text-midnight/65 uppercase tracking-wider font-semibold mb-1">
                                Distance
                              </h5>
                              <p className="font-sans text-sm text-midnight/70 leading-relaxed font-light">
                                {day.travelDistance}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
