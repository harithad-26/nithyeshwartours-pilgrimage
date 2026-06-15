"use client";

import { useState, useEffect, useRef } from "react";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeDay, setActiveDay] = useState<number>(1);
  const [collapsedDays, setCollapsedDays] = useState<Record<number, boolean>>({});

  const activeDayRef = useRef<number>(1);

  // Keep ref in sync for the scroll listener
  useEffect(() => {
    activeDayRef.current = activeDay;
  }, [activeDay]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress of the connecting line
      const triggerY = windowHeight * 0.5;
      let currentProgress = 0;
      if (rect.top > triggerY) {
        currentProgress = 0;
      } else if (rect.top + rect.height < triggerY) {
        currentProgress = 100;
      } else {
        currentProgress = ((triggerY - rect.top) / rect.height) * 100;
      }
      setProgress(currentProgress);

      // Find which day is active based on scroll focus (45% of viewport height)
      const dayElements = containerRef.current.querySelectorAll("[data-itinerary-day]");
      const targetFocusY = windowHeight * 0.45;
      
      let activeDayNum: number | null = null;
      let closestDayNum: number | null = null;
      let minDistance = Infinity;

      dayElements.forEach((el) => {
        const dayNum = parseInt(el.getAttribute("data-itinerary-day") || "0", 10);
        const elRect = el.getBoundingClientRect();
        
        const elementCenter = elRect.top + elRect.height / 2;
        const distance = Math.abs(elementCenter - targetFocusY);
        
        if (distance < minDistance) {
          minDistance = distance;
          closestDayNum = dayNum;
        }
        
        if (elRect.top <= targetFocusY && elRect.bottom >= targetFocusY) {
          activeDayNum = dayNum;
        }
      });

      const finalActiveDay = activeDayNum !== null ? activeDayNum : closestDayNum;
      if (finalActiveDay !== null && finalActiveDay !== activeDayRef.current) {
        setActiveDay(finalActiveDay);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Collapse / Expand entire section based on viewport position to keep page height tidy
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const windowHeight = window.innerHeight;
        
        if (entry.isIntersecting) {
          // When visible, expand all days for smooth reading
          setCollapsedDays({});
        } else if (entry.boundingClientRect.top > windowHeight) {
          // Only collapse days when Itinerary container is entirely BELOW the viewport
          // This avoids layout/scroll jumps when scrolling down past the section
          const collapsed: Record<number, boolean> = {};
          itinerary.forEach((day) => {
            collapsed[day.day] = true;
          });
          setCollapsedDays(collapsed);
        }
      },
      {
        threshold: 0,
        rootMargin: "100px 0px 100px 0px", // 100px buffer to prevent flashing at edges
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [itinerary]);

  const handleToggle = (dayNum: number) => {
    setCollapsedDays((prev) => ({
      ...prev,
      [dayNum]: !prev[dayNum],
    }));
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Connecting Timeline Line */}
      <div className="absolute left-6 -translate-x-[1px] top-4 bottom-4 w-[2px] bg-midnight/10" aria-hidden="true">
        {/* Animated Gold Progress Line */}
        <div 
          className="absolute top-0 left-0 w-full bg-gold-dark transition-all duration-150 origin-top"
          style={{ height: `${progress}%` }}
        >
          {/* Glowing Active Tip */}
          {progress > 0 && progress < 100 && (
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5">
              <div className="absolute inset-0 rounded-full bg-gold-dark" />
              <div className="absolute inset-0 rounded-full bg-gold animate-ping opacity-75" />
            </div>
          )}
        </div>
      </div>

      <div className="space-y-6">
        {itinerary.map((day, index) => {
          const isCollapsed = !!collapsedDays[day.day];
          const isExpanded = !isCollapsed;
          const isActive = activeDay === day.day;

          return (
            <ItineraryDayItem
              key={day.day}
              day={day}
              index={index}
              isExpanded={isExpanded}
              isActive={isActive}
              onToggle={() => handleToggle(day.day)}
            />
          );
        })}
      </div>
    </div>
  );
}

interface ItineraryDayItemProps {
  day: ItineraryDay;
  index: number;
  isExpanded: boolean;
  isActive: boolean;
  onToggle: () => void;
}

function ItineraryDayItem({ day, index, isExpanded, isActive, onToggle }: ItineraryDayItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      data-itinerary-day={day.day}
      className={`relative flex gap-6 transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Timeline Day Circle Badge (Interactive Node) */}
      <button
        onClick={onToggle}
        className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold transition-all duration-500 ${
          isActive 
            ? "bg-gold-dark border-gold-dark text-white scale-110 shadow-lg shadow-gold/20" 
            : "bg-white border border-midnight/10 text-midnight hover:border-gold-dark/30 hover:bg-gold-dark/5"
        }`}
        aria-expanded={isExpanded}
        aria-label={`Toggle details for Day ${day.day}`}
      >
        <span className={`font-sans text-xs font-semibold transition-colors duration-500 ${
          isActive ? "text-white" : "text-midnight group-hover:text-gold-dark"
        }`}>
          D{day.day}
        </span>
      </button>

      {/* Content Panel */}
      <div className="flex-1 pb-2">
        <div className={`bg-white border rounded-lg transition-all duration-500 ${
          isActive 
            ? "border-gold-dark/40 shadow-md translate-x-1" 
            : "border-midnight/5 hover:border-gold-dark/20"
        }`}>
          {/* Accordion Toggle Header */}
          <button
            onClick={onToggle}
            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#FAFAF9] transition-colors cursor-pointer focus:outline-none"
          >
            <div>
              <span className={`font-sans text-[10px] uppercase tracking-wider font-semibold block mb-0.5 transition-colors duration-500 ${
                isActive ? "text-gold-dark font-bold" : "text-gold-dark"
              }`}>
                Day {day.day} Highlights
              </span>
              <h3 className={`font-serif text-lg font-light transition-colors duration-500 ${
                isActive ? "text-midnight font-normal" : "text-midnight"
              }`}>
                {day.title}
              </h3>
            </div>
            {/* Expand/Collapse Chevron Indicator */}
            <svg
              className={`w-5 h-5 flex-shrink-0 ml-4 transition-transform duration-500 ${
                isExpanded ? "rotate-180 text-gold-dark" : "text-midnight/40"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Collapsible Content wrapper using smooth CSS Grid transitions */}
          <div 
            className={`grid transition-all duration-500 ease-in-out ${
              isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-6 pb-6 border-t border-midnight/5 bg-[#FAFAF9]">
                <div className="pt-6 space-y-6">
                  {/* Activities List */}
                  <div>
                    <h4 className="font-sans text-[10px] text-midnight/65 uppercase tracking-wider font-semibold mb-3">
                      Activities & Schedule
                    </h4>
                    <ul className="space-y-3">
                      {day.highlights.map((activity: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold-dark mt-2.5 flex-shrink-0" />
                          <span className="font-sans text-sm text-midnight/80 leading-relaxed font-light">
                            {activity}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Travel Parameters (Meals, Lodging) */}
                  {(day.stay || day.meals) && (
                    <div className="grid md:grid-cols-2 gap-6 pt-5 border-t border-midnight/5">
                      {day.stay && day.stay !== "—" && (
                        <div>
                          <h5 className="font-sans text-[10px] text-midnight/65 uppercase tracking-wider font-semibold mb-1">
                            Stay
                          </h5>
                          <p className="font-sans text-sm text-midnight/70 leading-relaxed font-light">
                            {day.stay}
                          </p>
                        </div>
                      )}
                      {day.meals && (
                        <div>
                          <h5 className="font-sans text-[10px] text-midnight/65 uppercase tracking-wider font-semibold mb-1">
                            Meals
                          </h5>
                          <p className="font-sans text-sm text-midnight/70 leading-relaxed font-light">
                            {day.meals}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
