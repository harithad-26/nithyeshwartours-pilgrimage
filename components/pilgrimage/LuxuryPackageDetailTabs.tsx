"use client";

import { useState, useEffect } from "react";
import LuxuryOverviewTab from "./tabs/LuxuryOverviewTab";
import LuxuryItineraryTab from "./tabs/LuxuryItineraryTab";
import LuxuryHotelsTab from "./tabs/LuxuryHotelsTab";
import LuxuryBookingTab from "./tabs/LuxuryBookingTab";
import LuxuryPreDepartureTab from "./tabs/LuxuryPreDepartureTab";

type TabId = "overview" | "itinerary" | "hotels" | "inclusions" | "booking" | "pre-departure" | "faq" | "terms";

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "itinerary", label: "Itinerary" },
  { id: "hotels", label: "Accommodation" },
  { id: "inclusions", label: "Inclusions" },
  { id: "booking", label: "Booking" },
  { id: "pre-departure", label: "Preparation" },
  { id: "faq", label: "FAQs" },
  { id: "terms", label: "Terms" },
];

interface LuxuryPackageDetailTabsProps {
  packageData: any;
}

export default function LuxuryPackageDetailTabs({ packageData }: LuxuryPackageDetailTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  // Scrollspy logic using IntersectionObserver or getBoundingClientRect
  useEffect(() => {
    const sections = TABS.map((tab) => tab.id);
    
    const handleScroll = () => {
      // Check if we are close to the bottom of the page
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
      if (isBottom) {
        setActiveTab("terms");
        return;
      }

      let currentSection = sections[0];
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // 160px is the height of main header (80px) + sub-nav (56px) + extra buffer
          if (rect.top <= 170) {
            currentSection = section;
          }
        }
      }
      
      setActiveTab(currentSection as TabId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabClick = (id: TabId) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      // Offset by 80px (main navbar) + 56px (tabs height) + 16px buffer = 152px
      const yOffset = -152;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-8">
      {/* Sticky Tab Navigation - Stacked perfectly below the 80px main navbar */}
      <div className="sticky top-[80px] z-40 bg-white border-b border-midnight/10 shadow-sm -mx-6 px-6 lg:mx-0 lg:px-0">
        <div className="max-w-7xl mx-auto overflow-x-auto scrollbar-hide">
          <div className="flex items-center min-w-max md:min-w-0 px-2 lg:px-8">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id as TabId)}
                className={`px-6 py-4 font-sans text-xs uppercase tracking-wider transition-all border-b-2 whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? "border-midnight text-midnight font-bold"
                    : "border-transparent text-midnight/60 hover:text-midnight/95"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sequential Sections */}
      <div className="space-y-8">
        {/* 1. Overview */}
        <section id="overview" className="bg-white border border-midnight/5 p-8 md:p-12 shadow-sm scroll-mt-[160px]">
          <div className="mb-8 border-b border-midnight/5 pb-6">
            <p className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-2">About the Journey</p>
            <h2 className="font-serif text-3xl text-midnight font-light">Overview</h2>
          </div>
          <LuxuryOverviewTab data={packageData} />
        </section>

        {/* 2. Itinerary */}
        <section id="itinerary" className="bg-white border border-midnight/5 p-8 md:p-12 shadow-sm scroll-mt-[160px]">
          <div className="mb-8 border-b border-midnight/5 pb-6">
            <p className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-2">Day-by-Day Path</p>
            <h2 className="font-serif text-3xl text-midnight font-light">Journey Itinerary</h2>
          </div>
          <LuxuryItineraryTab data={packageData} />
        </section>

        {/* 3. Accommodation */}
        <section id="hotels" className="bg-white border border-midnight/5 p-8 md:p-12 shadow-sm scroll-mt-[160px]">
          <div className="mb-8 border-b border-midnight/5 pb-6">
            <p className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-2">Where You'll Stay</p>
            <h2 className="font-serif text-3xl text-midnight font-light">Accommodation</h2>
          </div>
          <LuxuryHotelsTab hotels={packageData.hotels} />
        </section>

        {/* 4. Inclusions */}
        <section id="inclusions" className="bg-white border border-midnight/5 p-8 md:p-12 shadow-sm scroll-mt-[160px]">
          <div className="mb-8 border-b border-midnight/5 pb-6">
            <p className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-2">Package Cost Details</p>
            <h2 className="font-serif text-3xl text-midnight font-light">Inclusions & Exclusions</h2>
          </div>
          <IncludesTab data={packageData} />
        </section>

        {/* 5. Booking */}
        <section id="booking" className="bg-white border border-midnight/5 p-8 md:p-12 shadow-sm scroll-mt-[160px]">
          <div className="mb-8 border-b border-midnight/5 pb-6">
            <p className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-2">Reserving Your Spot</p>
            <h2 className="font-serif text-3xl text-midnight font-light">How to Book</h2>
          </div>
          <LuxuryBookingTab data={packageData.booking} />
        </section>

        {/* 6. Preparation */}
        <section id="pre-departure" className="bg-white border border-midnight/5 p-8 md:p-12 shadow-sm scroll-mt-[160px]">
          <div className="mb-8 border-b border-midnight/5 pb-6">
            <p className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-2">Expedition Readiness</p>
            <h2 className="font-serif text-3xl text-midnight font-light">Pre-Departure Guide</h2>
          </div>
          <LuxuryPreDepartureTab data={packageData.preDeparture} maxAltitude={packageData.maxAltitude} />
        </section>

        {/* 7. FAQs */}
        <section id="faq" className="bg-white border border-midnight/5 p-8 md:p-12 shadow-sm scroll-mt-[160px]">
          <div className="mb-8 border-b border-midnight/5 pb-6">
            <p className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-2">Common Questions</p>
            <h2 className="font-serif text-3xl text-midnight font-light">Frequently Asked Questions</h2>
          </div>
          <FAQTab data={packageData} />
        </section>

        {/* 8. Terms */}
        <section id="terms" className="bg-white border border-midnight/5 p-8 md:p-12 shadow-sm scroll-mt-[160px]">
          <div className="mb-8 border-b border-midnight/5 pb-6">
            <p className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-2">Policies & Conditions</p>
            <h2 className="font-serif text-3xl text-midnight font-light">Terms & Conditions</h2>
          </div>
          <TermsTab data={packageData} />
        </section>
      </div>
    </div>
  );
}

// Includes Tab
function IncludesTab({ data }: { data: any }) {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      {/* Included */}
      <div>
        <h3 className="font-sans text-xs text-midnight/65 uppercase tracking-wider mb-6 font-semibold">Included</h3>
        <ul className="space-y-3">
          {data.inclusions.map((item: string, index: number) => (
            <li key={index} className="flex items-start gap-3">
              <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-sans text-sm text-midnight/70 leading-relaxed font-light">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Not Included */}
      <div>
        <h3 className="font-sans text-xs text-midnight/65 uppercase tracking-wider mb-6 font-semibold">Not Included</h3>
        <ul className="space-y-3">
          {data.exclusions.map((item: string, index: number) => (
            <li key={index} className="flex items-start gap-3">
              <svg className="w-4 h-4 text-red-500/50 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="font-sans text-sm text-midnight/75 leading-relaxed font-light">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Terms Tab
function TermsTab({ data }: { data: any }) {
  return (
    <div className="space-y-10">
      {/* Cancellation Policy */}
      <div>
        <h3 className="font-sans text-xs text-midnight/65 uppercase tracking-wider mb-4 font-semibold">Cancellation Policy</h3>
        <div className="border border-midnight/10 bg-[#FAFAF9]">
          {data.terms.cancellationPolicy.map((policy: any, index: number) => (
            <div
              key={index}
              className={`grid grid-cols-2 gap-8 p-5 ${index > 0 ? 'border-t border-midnight/5' : ''}`}
            >
              <div className="font-sans text-sm text-midnight font-medium">{policy.timeBefore}</div>
              <div className="font-sans text-sm text-midnight/80 font-light">{policy.refund}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Other Terms */}
      <div className="space-y-6 pt-6 border-t border-midnight/5">
        {[
          { title: "Travel Insurance", content: data.terms.travelInsurance },
          { title: "Changes", content: data.terms.changes },
          { title: "Company Rights", content: data.terms.companyRights },
          { title: "Refund Policy", content: data.terms.refundPolicy },
          { title: "Age Restriction", content: data.terms.ageRestriction },
        ].map((item) => (
          <div key={item.title}>
            <h4 className="font-sans text-xs text-midnight/65 uppercase tracking-wider mb-2 font-semibold">{item.title}</h4>
            <p className="font-sans text-sm text-midnight/70 leading-relaxed font-light">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// FAQ Tab
function FAQTab({ data }: { data: any }) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {data.faq.map((item: any, index: number) => (
        <div key={index} className="border border-midnight/5 hover:border-midnight/10 transition-colors bg-white">
          <button
            onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#FAFAF9] transition-colors cursor-pointer"
          >
            <h3 className="font-serif text-lg text-midnight pr-6 font-light">{item.question}</h3>
            <svg
              className={`w-5 h-5 text-midnight/55 flex-shrink-0 transition-transform ${expandedFaq === index ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {expandedFaq === index && (
            <div className="px-6 pb-6 border-t border-midnight/5 bg-[#FAFAF9]">
              <p className="pt-6 font-sans text-sm text-midnight/70 leading-relaxed font-light">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
