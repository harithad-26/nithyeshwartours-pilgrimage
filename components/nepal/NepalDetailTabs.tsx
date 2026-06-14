"use client";

import { useState, useEffect } from "react";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "itinerary", label: "Day-by-Day" },
  { id: "hotels", label: "Accommodation" },
  { id: "inclusions", label: "Inclusions" },
  { id: "booking", label: "Booking" },
  { id: "know-before", label: "Know Before You Go" },
  { id: "faq", label: "FAQs" },
  { id: "terms", label: "Terms" },
];

export default function NepalDetailTabs() {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      if (isBottom) {
        setActiveTab(TABS[TABS.length - 1].id);
        return;
      }

      let current = TABS[0].id;
      for (const tab of TABS) {
        const el = document.getElementById(tab.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) current = tab.id;
        }
      }
      setActiveTab(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      className="sticky top-[80px] z-30 bg-white border-b border-midnight/8 shadow-sm"
      aria-label="Package sections navigation"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollTo(tab.id)}
              className={`font-sans text-[11px] font-bold tracking-[0.15em] uppercase py-4 px-5 md:px-6 border-b-2 transition-all duration-200 whitespace-nowrap shrink-0 ${
                activeTab === tab.id
                  ? "border-gold-dark text-gold-dark"
                  : "border-transparent text-midnight/40 hover:text-midnight hover:border-midnight/15"
              }`}
              aria-current={activeTab === tab.id ? "page" : undefined}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
