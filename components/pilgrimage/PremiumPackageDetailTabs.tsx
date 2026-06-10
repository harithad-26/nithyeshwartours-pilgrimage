"use client";

import { useState } from "react";
import PremiumOverviewTab from "./tabs/PremiumOverviewTab";
import PremiumInfoTab from "./tabs/PremiumInfoTab";
import PremiumHotelsTab from "./tabs/PremiumHotelsTab";
import PremiumBookingTab from "./tabs/PremiumBookingTab";
import PremiumPreDepartureTab from "./tabs/PremiumPreDepartureTab";

type TabId = "overview" | "itinerary" | "includes" | "hotels" | "information" | "booking" | "terms" | "pre-departure" | "faq";

interface PremiumPackageDetailTabsProps {
  packageData: any;
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "itinerary", label: "Itinerary" },
  { id: "includes", label: "Includes" },
  { id: "hotels", label: "Hotels" },
  { id: "information", label: "Information" },
  { id: "booking", label: "Booking" },
  { id: "terms", label: "Terms" },
  { id: "pre-departure", label: "Pre-Departure" },
  { id: "faq", label: "FAQ" },
];

export default function PremiumPackageDetailTabs({ packageData }: PremiumPackageDetailTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  return (
    <>
      {/* Premium Tab Navigation */}
      <div className="sticky top-0 z-40 bg-white border-b border-midnight/5 shadow-sm">
        <div className="max-w-7xl mx-auto overflow-x-auto scrollbar-hide">
          <div className="flex items-center min-w-max md:min-w-0">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabId)}
                className={`px-6 py-4 font-sans text-sm font-medium transition-all border-b-2 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-midnight text-midnight bg-surface-low/30"
                    : "border-transparent text-midnight/50 hover:text-midnight hover:bg-surface-low/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content - No background padding wrapper */}
      <div className="bg-surface">
        {activeTab === "overview" && <PremiumOverviewTab data={packageData} />}
        {activeTab === "itinerary" && <ItineraryTab data={packageData} />}
        {activeTab === "includes" && <IncludesTab data={packageData} />}
        {activeTab === "hotels" && <PremiumHotelsTab hotels={packageData.hotels} />}
        {activeTab === "information" && <PremiumInfoTab data={packageData.basicInfo} />}
        {activeTab === "booking" && <PremiumBookingTab data={packageData.booking} />}
        {activeTab === "terms" && <TermsTab data={packageData} />}
        {activeTab === "pre-departure" && <PremiumPreDepartureTab data={packageData.preDeparture} />}
        {activeTab === "faq" && <FAQTab data={packageData} />}
      </div>
    </>
  );
}

// Itinerary Tab
function ItineraryTab({ data }: { data: any }) {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  return (
    <div className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-midnight mb-4">Day by Day Itinerary</h2>
        <p className="font-sans text-base text-midnight/60 mb-12 leading-relaxed">
          {data.duration.days} days journey through sacred landscapes
        </p>

        <div className="space-y-2">
          {data.itinerary.map((day: any) => (
            <div
              key={day.day}
              className="border border-midnight/10 rounded-lg overflow-hidden hover:border-midnight/20 transition-colors"
            >
              <button
                onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface-low transition-colors"
              >
                <div className="flex items-center gap-6 flex-1">
                  <div className="font-sans text-sm text-midnight/40 font-medium w-16">Day {day.day}</div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg text-midnight mb-1">{day.title}</h3>
                    {day.altitude && (
                      <div className="font-sans text-sm text-midnight/50">Altitude: {day.altitude}</div>
                    )}
                  </div>
                </div>
                <svg
                  className={`w-5 h-5 text-midnight/40 transition-transform ${expandedDay === day.day ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {expandedDay === day.day && (
                <div className="px-6 pb-6 border-t border-midnight/10 bg-white">
                  <div className="pt-6 space-y-4">
                    <div>
                      <div className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-midnight/50 mb-3">Activities</div>
                      <ul className="space-y-2">
                        {day.activities.map((activity: string, index: number) => (
                          <li key={index} className="flex items-start gap-3 font-sans text-sm text-midnight/70 leading-relaxed">
                            <span className="text-gold-dark mt-1">•</span>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {day.accommodation && (
                      <div className="pt-2">
                        <div className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-midnight/50 mb-2">Accommodation</div>
                        <div className="font-sans text-sm text-midnight/70">{day.accommodation}</div>
                      </div>
                    )}
                    {day.meals && (
                      <div className="pt-2">
                        <div className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-midnight/50 mb-2">Meals</div>
                        <div className="flex gap-4 font-sans text-sm">
                          {day.meals.breakfast && <span className="text-midnight/70">🍳 Breakfast</span>}
                          {day.meals.lunch && <span className="text-midnight/70">🍽️ Lunch</span>}
                          {day.meals.dinner && <span className="text-midnight/70">🌙 Dinner</span>}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Includes Tab
function IncludesTab({ data }: { data: any }) {
  return (
    <div className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-midnight mb-12">What's Included</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-green-50/50 rounded-lg p-8 border border-green-200/50">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="font-serif text-xl text-midnight">Included</h3>
            </div>
            <ul className="space-y-3">
              {data.inclusions.map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-3 font-sans text-sm text-midnight/70 leading-relaxed">
                  <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50/50 rounded-lg p-8 border border-red-200/50">
            <div className="flex items-center gap-2 mb-6">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <h3 className="font-serif text-xl text-midnight">Not Included</h3>
            </div>
            <ul className="space-y-3">
              {data.exclusions.map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-3 font-sans text-sm text-midnight/70 leading-relaxed">
                  <svg className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Terms Tab
function TermsTab({ data }: { data: any }) {
  return (
    <div className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto space-y-12">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl text-midnight mb-12">Terms & Conditions</h2>
        </div>

        <div>
          <h3 className="font-serif text-2xl text-midnight mb-6">Cancellation Policy</h3>
          <div className="bg-surface-low rounded-lg border border-midnight/5 overflow-hidden">
            {data.terms.cancellationPolicy.map((policy: any, index: number) => (
              <div
                key={index}
                className={`grid grid-cols-2 gap-4 p-4 ${index > 0 ? 'border-t border-midnight/5' : ''}`}
              >
                <div className="font-sans text-sm font-medium text-midnight">{policy.timeBefore}</div>
                <div className="font-sans text-sm text-midnight/70">{policy.refund}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {[
            { title: "Travel Insurance", content: data.terms.travelInsurance },
            { title: "Changes", content: data.terms.changes },
            { title: "Company Rights", content: data.terms.companyRights },
            { title: "Refund Policy", content: data.terms.refundPolicy },
            { title: "Age Restriction", content: data.terms.ageRestriction },
          ].map((item) => (
            <div key={item.title} className="p-6 bg-surface-low rounded-lg border border-midnight/5">
              <h4 className="font-serif text-lg text-midnight mb-3">{item.title}</h4>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// FAQ Tab
function FAQTab({ data }: { data: any }) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-midnight mb-4">Frequently Asked Questions</h2>
        <p className="font-sans text-base text-midnight/60 mb-12 leading-relaxed">
          Common questions about the Kailash Mansarovar Yatra
        </p>

        <div className="space-y-2">
          {data.faq.map((item: any, index: number) => (
            <div key={index} className="border border-midnight/10 rounded-lg overflow-hidden">
              <button
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface-low transition-colors"
              >
                <h3 className="font-serif text-lg text-midnight pr-4">{item.question}</h3>
                <svg
                  className={`w-5 h-5 text-midnight/40 flex-shrink-0 transition-transform ${expandedFaq === index ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedFaq === index && (
                <div className="px-6 pb-6 border-t border-midnight/10 bg-white">
                  <p className="pt-4 font-sans text-sm text-midnight/70 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
