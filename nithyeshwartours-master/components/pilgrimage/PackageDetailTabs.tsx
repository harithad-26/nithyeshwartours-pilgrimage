"use client";

import { useState } from "react";
import ItineraryTab from "./tabs/ItineraryTab";
import OverviewTab from "./tabs/OverviewTab";
import IncludesTab from "./tabs/IncludesTab";
import DatesHotelsTab from "./tabs/DatesHotelsTab";
import BasicInfoTab from "./tabs/BasicInfoTab";
import BookingTab from "./tabs/BookingTab";
import TermsTab from "./tabs/TermsTab";
import PreDepartureTab from "./tabs/PreDepartureTab";
import FAQTab from "./tabs/FAQTab";

type TabId = "overview" | "itinerary" | "includes" | "dates" | "info" | "booking" | "terms" | "pre-departure" | "faq";

interface PackageDetailTabsProps {
  packageData: any;
}

const TABS = [
  { id: "overview", label: "Overview", icon: "📋" },
  { id: "itinerary", label: "Itinerary", icon: "🗺️" },
  { id: "includes", label: "Includes & Excludes", icon: "✓" },
  { id: "dates", label: "Hotels", icon: "🏨" },
  { id: "info", label: "Basic Info", icon: "ℹ️" },
  { id: "booking", label: "Booking", icon: "💳" },
  { id: "terms", label: "Terms", icon: "📄" },
  { id: "pre-departure", label: "Pre-Departure", icon: "🎒" },
  { id: "faq", label: "FAQ", icon: "❓" },
];

export default function PackageDetailTabs({ packageData }: PackageDetailTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  return (
    <>
      {/* Sticky Tab Navigation */}
      <div className="sticky top-0 z-30 bg-white border-b border-midnight/10 shadow-sm">
        <div className="max-w-7xl mx-auto overflow-x-auto scrollbar-hide">
          <div className="flex items-center min-w-max md:min-w-0 md:justify-center px-4">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabId)}
                className={`
                  relative flex items-center gap-2 px-4 md:px-6 py-4 font-sans text-sm font-medium transition-all whitespace-nowrap
                  ${
                    activeTab === tab.id
                      ? "text-midnight border-b-2 border-gold-dark"
                      : "text-midnight/60 hover:text-midnight hover:bg-surface-low"
                  }
                `}
                aria-selected={activeTab === tab.id}
                role="tab"
              >
                <span className="text-lg">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-surface py-12 md:py-20" role="tabpanel">
        <div className="max-w-5xl mx-auto px-6">
          {activeTab === "overview" && <OverviewTab data={packageData} />}
          {activeTab === "itinerary" && <ItineraryTab data={packageData.itinerary} />}
          {activeTab === "includes" && (
            <IncludesTab
              inclusions={packageData.inclusions}
              exclusions={packageData.exclusions}
            />
          )}
          {activeTab === "dates" && <DatesHotelsTab hotels={packageData.hotels} />}
          {activeTab === "info" && <BasicInfoTab data={packageData.basicInfo} />}
          {activeTab === "booking" && <BookingTab data={packageData.booking} />}
          {activeTab === "terms" && <TermsTab data={packageData.terms} />}
          {activeTab === "pre-departure" && <PreDepartureTab data={packageData.preDeparture} />}
          {activeTab === "faq" && <FAQTab data={packageData.faq} />}
        </div>
      </div>
    </>
  );
}
