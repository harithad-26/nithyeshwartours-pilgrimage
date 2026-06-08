"use client";

import { useState } from "react";

interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
  accommodation: string;
  meals: {
    breakfast: boolean;
    lunch: boolean;
    dinner: boolean;
  };
  travelDistance?: string;
  altitude?: string;
  highlights?: string[];
}

export default function ItineraryTab({ data }: { data: ItineraryDay[] }) {
  const [expandedDay, setExpandedDay] = useState<number | null>(1);

  const toggleDay = (day: number) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const getMealsIcons = (meals: ItineraryDay['meals']) => {
    const icons = [];
    if (meals.breakfast) icons.push({ icon: "🍳", label: "Breakfast" });
    if (meals.lunch) icons.push({ icon: "🍱", label: "Lunch" });
    if (meals.dinner) icons.push({ icon: "🍽️", label: "Dinner" });
    return icons;
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-3xl text-midnight font-normal mb-4">Day-by-Day Itinerary</h2>
        <p className="font-sans text-base text-midnight/60 leading-relaxed">
          Detailed breakdown of your journey. Click each day to expand and see full details.
        </p>
      </div>

      <div className="space-y-3">
        {data.map((dayData) => {
          const isExpanded = expandedDay === dayData.day;
          const mealsIcons = getMealsIcons(dayData.meals);

          return (
            <div
              key={dayData.day}
              className="bg-white rounded-lg overflow-hidden border border-midnight/10 hover:border-gold-dark/30 transition-all shadow-sm"
            >
              {/* Accordion Trigger */}
              <button
                onClick={() => toggleDay(dayData.day)}
                className="w-full px-6 md:px-8 py-6 text-left hover:bg-surface-low transition-colors"
                aria-expanded={isExpanded}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 md:gap-6 flex-1">
                    {/* Day Number */}
                    <div className="shrink-0">
                      <span className="font-sans text-xs tracking-[0.2em] uppercase text-gold-dark font-bold">
                        DAY {dayData.day.toString().padStart(2, '0')}
                      </span>
                    </div>

                    {/* Day Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-serif text-xl md:text-2xl text-midnight font-normal mb-2 leading-tight">
                        {dayData.title}
                      </h3>
                      
                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-midnight/60">
                        {dayData.altitude && (
                          <span className="flex items-center gap-1.5">
                            <span>⛰️</span>
                            <span className="font-sans">{dayData.altitude}</span>
                          </span>
                        )}
                        {dayData.travelDistance && (
                          <span className="flex items-center gap-1.5">
                            <span>📏</span>
                            <span className="font-sans">{dayData.travelDistance}</span>
                          </span>
                        )}
                        {mealsIcons.length > 0 && (
                          <span className="flex items-center gap-1.5">
                            {mealsIcons.map((m, i) => (
                              <span key={i} title={m.label}>{m.icon}</span>
                            ))}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Chevron Icon */}
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

              {/* Accordion Content */}
              {isExpanded && (
                <div className="px-6 md:px-8 pb-6 pt-2 border-t border-midnight/5 animate-in fade-in slide-in-from-top-2 duration-200">
                  {/* Activities */}
                  <div className="mb-6">
                    <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-midnight/70 mb-3">
                      Activities
                    </h4>
                    <ul className="space-y-2">
                      {dayData.activities.map((activity, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-gold-dark text-sm mt-1">•</span>
                          <span className="font-sans text-base text-midnight/70 leading-relaxed flex-1">
                            {activity}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlights */}
                  {dayData.highlights && dayData.highlights.length > 0 && (
                    <div className="mb-6 bg-gold/5 rounded-lg p-4 border border-gold/20">
                      <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-gold-dark mb-3 flex items-center gap-2">
                        <span>✨</span>
                        Highlights
                      </h4>
                      <ul className="space-y-2">
                        {dayData.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="text-gold-dark text-sm mt-1">★</span>
                            <span className="font-sans text-sm text-midnight/80 leading-relaxed flex-1">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Accommodation */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-surface-low rounded-lg p-4">
                      <p className="font-sans text-xs uppercase tracking-wider text-midnight/50 mb-2">
                        Accommodation
                      </p>
                      <p className="font-sans text-sm text-midnight/80 font-medium">
                        {dayData.accommodation}
                      </p>
                    </div>
                    <div className="bg-surface-low rounded-lg p-4">
                      <p className="font-sans text-xs uppercase tracking-wider text-midnight/50 mb-2">
                        Meals Included
                      </p>
                      <div className="flex gap-2">
                        {mealsIcons.map((meal, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center gap-1.5 text-xs font-medium bg-white px-3 py-1.5 rounded-full border border-midnight/10"
                            title={meal.label}
                          >
                            <span>{meal.icon}</span>
                            <span className="text-midnight/70">{meal.label}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
