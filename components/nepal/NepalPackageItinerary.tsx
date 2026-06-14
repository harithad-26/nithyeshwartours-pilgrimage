"use client";

import { useState } from "react";

interface ItineraryDay {
  day: number;
  title: string;
  highlights: string[];
  meals?: string;
  stay?: string;
}

interface NepalPackageItineraryProps {
  itinerary: ItineraryDay[];
}

export default function NepalPackageItinerary({ itinerary }: NepalPackageItineraryProps) {
  const [activeDay, setActiveDay] = useState(1);

  const activeDayData = itinerary.find((d) => d.day === activeDay) || itinerary[0];

  return (
    <div className="bg-white rounded-xl shadow-ambient border border-midnight/5 overflow-hidden">
      {/* Interactive Itinerary grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] min-h-[500px]">
        
        {/* Left Sidebar (Days Selector) */}
        <div className="bg-midnight/95 border-b lg:border-b-0 lg:border-r border-white/10 p-5 lg:p-6">
          <p className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-gold/60 mb-4 hidden lg:block">
            Days Timeline
          </p>
          
          {/* Horizontal scroll on mobile, vertical list on desktop */}
          <div className="flex lg:flex-col gap-2.5 overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 scrollbar-hide">
            {itinerary.map((d) => {
              const isActive = activeDay === d.day;
              return (
                <button
                  key={d.day}
                  onClick={() => setActiveDay(d.day)}
                  className={`flex items-center gap-3.5 py-3 px-4 rounded-lg font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-300 text-left border shrink-0 w-auto lg:w-full ${
                    isActive
                      ? "bg-gold text-midnight border-gold shadow-[0_4px_12px_rgba(218,165,32,0.15)] transform lg:translate-x-1"
                      : "bg-white/5 text-white/70 border-white/5 hover:border-gold/30 hover:text-white"
                  }`}
                >
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                      isActive ? "bg-midnight text-gold shadow-sm" : "bg-white/10 text-white/80"
                    }`}
                  >
                    {d.day}
                  </span>
                  <span className="truncate max-w-[150px] lg:max-w-none text-sm font-medium">
                    Day {d.day}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Content Panel (Active Day details) */}
        <div className="p-8 md:p-10 flex flex-col justify-between">
          <div className="animate-in fade-in slide-in-from-top-2 duration-300">
            {/* Header info */}
            <div className="flex items-center justify-between border-b border-midnight/10 pb-4 mb-6">
              <span className="font-sans text-xs font-bold tracking-[0.2em] text-gold-dark uppercase">
                DAY {activeDayData.day} OF {itinerary.length}
              </span>
              
              {activeDayData.stay && activeDayData.stay !== "—" && (
                <span className="font-sans text-[10px] uppercase font-bold tracking-wider bg-gold-dark/5 text-gold-dark px-3 py-1 rounded-full border border-gold-dark/15">
                  Overnight: {activeDayData.stay}
                </span>
              )}
            </div>

            {/* Day Title */}
            <h3 className="font-serif text-2xl md:text-3xl text-midnight font-normal leading-snug mb-8">
              {activeDayData.title}
            </h3>

            {/* Dotted Vertical Timeline for Highlights */}
            <div className="space-y-4 mb-8">
              <p className="font-sans text-xs font-bold tracking-[0.15em] text-midnight/45 uppercase mb-6">
                Day Activities &amp; Highlights
              </p>
              
              <ul className="relative pl-7 space-y-6 border-l border-dashed border-midnight/15 ml-3.5">
                {activeDayData.highlights.map((highlight, index) => (
                  <li key={index} className="relative">
                    {/* Ringed dot indicator */}
                    <span className="absolute left-[-35px] top-1.5 w-3 h-3 rounded-full bg-gold border-2 border-white ring-4 ring-gold/15" />
                    <p className="font-sans text-sm md:text-base text-midnight/80 leading-relaxed">
                      {highlight}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stay and Meals Badges Footer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-6 border-t border-midnight/10 mt-6 bg-surface-low/30 -mx-8 -mb-8 p-8 md:-mx-10 md:-mb-10">
            {/* Night Stay */}
            {activeDayData.stay && activeDayData.stay !== "—" ? (
              <div className="flex flex-col gap-1.5">
                <span className="font-sans text-[10px] font-bold tracking-[0.1em] text-midnight/40 uppercase">
                  Night Stay Location
                </span>
                <div className="flex items-center gap-2 text-midnight">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.25"
                    className="text-gold-dark shrink-0"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span className="font-sans text-sm font-semibold">
                    {activeDayData.stay}
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-1.5">
                <span className="font-sans text-[10px] font-bold tracking-[0.1em] text-midnight/40 uppercase">
                  Night Stay Location
                </span>
                <div className="flex items-center gap-2 text-midnight/40">
                  <span className="font-sans text-sm italic">
                    Departure / Transit Day
                  </span>
                </div>
              </div>
            )}

            {/* Meals Included */}
            {activeDayData.meals && (
              <div className="flex flex-col gap-1.5">
                <span className="font-sans text-[10px] font-bold tracking-[0.1em] text-midnight/40 uppercase">
                  Meals Included
                </span>
                <div className="flex items-center gap-2 text-midnight">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.25"
                    className="text-gold-dark shrink-0"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2M7 2v20M21 15V2l-5 5-5-5v13a3 3 0 006 0z"
                    />
                  </svg>
                  <span className="font-sans text-sm font-semibold">
                    {activeDayData.meals}
                  </span>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
