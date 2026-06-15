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

// 1. Navigation Bar Export (Sticky under main header, full-width breakout centered on max-w-7xl)
export function LuxuryPackageDetailNav({ packageData }: LuxuryPackageDetailTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  // Scrollspy logic
  useEffect(() => {
    const sections = TABS.map((tab) => tab.id);
    
    const handleScroll = () => {
      // Check if we are close to the bottom of the page
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120;
      if (isBottom) {
        setActiveTab("terms");
        return;
      }

      let currentSection = sections[0];
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Height of header (80px) + sub-nav (64px) + margin/padding buffer (24px) = 168px
          if (rect.top <= 170) {
            currentSection = section;
          }
        }
      }
      
      setActiveTab(currentSection as TabId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabClick = (id: TabId) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      // Offset by 80px (main navbar) + 64px (sub-nav height) + 16px buffer = 160px
      const yOffset = -160;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-[80px] z-40 bg-white/95 backdrop-blur-md border-b border-midnight/10 shadow-[0_2px_10px_rgba(0,0,0,0.02)] w-screen ml-[calc(-50vw+50%)] mr-[calc(-50vw+50%)]">
      <div className="px-6 lg:px-12">
        <div className="max-w-7xl mx-auto h-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 h-full">
            {/* Scrollable Tabs */}
            <div className="lg:col-span-8 flex items-center overflow-x-auto scrollbar-hide h-full">
              <div className="flex items-center gap-6 md:gap-8 h-full">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id as TabId)}
                    className={`h-full font-sans text-[11px] font-bold tracking-[0.15em] uppercase transition-all border-b-2 whitespace-nowrap cursor-pointer flex items-center ${
                      activeTab === tab.id
                        ? "border-gold-dark text-gold-dark font-extrabold"
                        : "border-transparent text-midnight/45 hover:text-midnight hover:border-gold-dark/20"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. Sections Content Layout Export (Stateless, rendered in lg:col-span-8 column)
export default function LuxuryPackageDetailTabs({ packageData }: LuxuryPackageDetailTabsProps) {
  return (
    <div className="space-y-12">
      {/* 1. Overview */}
      <section id="overview" className="bg-white border border-midnight/5 p-8 md:p-12 shadow-sm rounded-2xl border-t-gold-dark/40 border-t-2 relative overflow-hidden scroll-mt-[160px]">
        <div className="mb-8 border-b border-midnight/5 pb-6">
          <p className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-2">About the Journey</p>
          <h2 className="font-serif text-3xl text-midnight font-light">Overview</h2>
        </div>
        <LuxuryOverviewTab data={packageData} />
      </section>

      {/* 2. Itinerary */}
      <section id="itinerary" className="bg-gradient-to-b from-[#FCFBF9] to-[#FAF9F5] border border-midnight/5 p-8 md:p-12 shadow-sm rounded-2xl border-t-gold-dark/25 border-t-2 scroll-mt-[160px]">
        <div className="mb-8 border-b border-midnight/5 pb-6">
          <p className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-2">Day-by-Day Path</p>
          <h2 className="font-serif text-3xl text-midnight font-light">Journey Itinerary</h2>
        </div>
        <LuxuryItineraryTab data={packageData} />
      </section>

      {/* 3. Accommodation */}
      <section id="hotels" className="bg-white border border-midnight/5 p-8 md:p-12 shadow-sm rounded-2xl border-t-gold-dark/30 border-t-2 scroll-mt-[160px]">
        <div className="mb-8 border-b border-midnight/5 pb-6">
          <p className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-2">Where You'll Stay</p>
          <h2 className="font-serif text-3xl text-midnight font-light">Accommodation</h2>
        </div>
        <LuxuryHotelsTab hotels={packageData.hotels} />
      </section>

      {/* 4. Inclusions */}
      <section id="inclusions" className="bg-[#FAF9F6] border border-midnight/5 p-8 md:p-12 shadow-sm rounded-2xl border-t-gold-dark/20 border-t-2 scroll-mt-[160px]">
        <div className="mb-8 border-b border-midnight/5 pb-6">
          <p className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-2">Package Cost Details</p>
          <h2 className="font-serif text-3xl text-midnight font-light">Inclusions & Exclusions</h2>
        </div>
        <IncludesTab data={packageData} />
      </section>

      {/* 5. Booking */}
      <section id="booking" className="bg-white border border-midnight/5 p-8 md:p-12 shadow-sm rounded-2xl border-t-gold-dark/30 border-t-2 scroll-mt-[160px]">
        <div className="mb-8 border-b border-midnight/5 pb-6">
          <p className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-2">Reserving Your Spot</p>
          <h2 className="font-serif text-3xl text-midnight font-light">How to Book</h2>
        </div>
        <LuxuryBookingTab data={packageData.booking} />
      </section>

      {/* 6. Preparation */}
      <section id="pre-departure" className="bg-white border border-midnight/5 p-8 md:p-12 shadow-sm rounded-2xl border-t-gold-dark/35 border-t-2 scroll-mt-[160px]">
        <div className="mb-8 border-b border-midnight/5 pb-6">
          <p className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-2">Expedition Readiness</p>
          <h2 className="font-serif text-3xl text-midnight font-light">Pre-Departure Guide</h2>
        </div>
        <LuxuryPreDepartureTab data={packageData.preDeparture} maxAltitude={packageData.maxAltitude} />
      </section>

      {/* 7. FAQs */}
      <section id="faq" className="bg-gradient-to-b from-[#F2F4F7] to-[#ECF0F4] border border-[#DEE3EC] p-8 md:p-12 shadow-sm rounded-2xl scroll-mt-[160px]">
        <div className="mb-8 border-b border-midnight/10 pb-6">
          <p className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-2">Common Questions</p>
          <h2 className="font-serif text-3xl text-midnight font-light">Frequently Asked Questions</h2>
        </div>
        <FAQTab data={packageData} />
      </section>

      {/* 8. Terms */}
      <section id="terms" className="bg-white border border-midnight/5 p-8 md:p-12 shadow-sm rounded-2xl border-t-gold-dark/20 border-t-2 scroll-mt-[160px]">
        <div className="mb-8 border-b border-midnight/5 pb-6">
          <p className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-2">Policies & Conditions</p>
          <h2 className="font-serif text-3xl text-midnight font-light">Terms & Conditions</h2>
        </div>
        <TermsTab data={packageData} />
      </section>
    </div>
  );
}

// Local Helper Components

function IncludesTab({ data }: { data: any }) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Included */}
      <div className="bg-white border border-midnight/5 border-l-4 border-l-emerald-500 shadow-sm p-6 rounded-xl hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3.5 mb-6 pb-3 border-b border-midnight/5">
          <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 className="font-serif text-lg text-midnight font-medium">Cost Includes</h3>
            <p className="font-sans text-[9px] text-emerald-600 uppercase tracking-wider font-semibold">Covered items</p>
          </div>
        </div>
        <ul className="space-y-3.5">
          {data.inclusions.map((item: string, index: number) => (
            <li key={index} className="flex items-start gap-3">
              <svg className="w-4.5 h-4.5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-sans text-sm text-midnight/70 leading-relaxed font-light">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Not Included */}
      <div className="bg-white border border-midnight/5 border-l-4 border-l-red-500 shadow-sm p-6 rounded-xl hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3.5 mb-6 pb-3 border-b border-midnight/5">
          <div className="w-9 h-9 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-red-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div>
            <h3 className="font-serif text-lg text-midnight font-medium">Cost Excludes</h3>
            <p className="font-sans text-[9px] text-red-600 uppercase tracking-wider font-semibold">Out-of-pocket items</p>
          </div>
        </div>
        <ul className="space-y-3.5">
          {data.exclusions.map((item: string, index: number) => (
            <li key={index} className="flex items-start gap-3">
              <svg className="w-4.5 h-4.5 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="font-sans text-sm text-midnight/70 leading-relaxed font-light">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}



function TermsTab({ data }: { data: any }) {
  return (
    <div className="space-y-10">
      {/* Cancellation Policy */}
      <div>
        <h3 className="font-sans text-xs text-midnight/65 uppercase tracking-wider mb-4 font-semibold">Cancellation Policy</h3>
        <div className="border border-midnight/10 bg-[#FAFAF9] rounded-xl overflow-hidden shadow-sm">
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

function FAQTab({ data }: { data: any }) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {data.faq.map((item: any, index: number) => {
        const isExpanded = expandedFaq === index;
        return (
          <div key={index} className="border border-[#DEE3EC] hover:border-gold-dark/20 transition-all bg-white rounded-xl overflow-hidden shadow-sm">
            <button
              onClick={() => setExpandedFaq(isExpanded ? null : index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#FAFAF9] transition-colors cursor-pointer focus:outline-none"
              aria-expanded={isExpanded}
            >
              <h3 className={`font-serif text-lg pr-6 transition-colors duration-350 ${isExpanded ? "text-gold-dark font-medium" : "text-midnight font-light"}`}>
                {item.question}
              </h3>
              <svg
                className={`w-5 h-5 flex-shrink-0 transition-transform duration-350 ${isExpanded ? "rotate-180 text-gold-dark" : "text-midnight/45"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Smooth CSS Grid accordion transition */}
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-350 ease-in-out ${
                isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden min-h-0">
                <div className="px-6 pb-6 border-t border-midnight/5 bg-[#FAFAF9]">
                  <p className="pt-6 font-sans text-sm text-midnight/70 leading-relaxed font-light">{item.answer}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
