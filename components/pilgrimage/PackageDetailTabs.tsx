"use client";

import { useState } from "react";

type TabId = "overview" | "itinerary" | "includes" | "hotels" | "info" | "booking" | "terms" | "pre-departure" | "faq";

interface PackageDetailTabsProps {
  packageData: any;
}

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "itinerary", label: "Itinerary" },
  { id: "includes", label: "Includes" },
  { id: "hotels", label: "Hotels" },
  { id: "info", label: "Information" },
  { id: "booking", label: "Booking" },
  { id: "terms", label: "Terms" },
  { id: "pre-departure", label: "Pre-Departure" },
  { id: "faq", label: "FAQ" },
];

export default function PackageDetailTabs({ packageData }: PackageDetailTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  return (
    <>
      {/* Sticky Navigation */}
      <div className="sticky top-0 z-40 bg-white border-b border-midnight/10">
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <div className="flex items-center min-w-max md:min-w-0">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabId)}
                className={`px-6 py-4 text-sm font-medium transition-all border-b-2 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-midnight text-midnight"
                    : "border-transparent text-midnight/50 hover:text-midnight"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          {activeTab === "overview" && <OverviewTab data={packageData} />}
          {activeTab === "itinerary" && <ItineraryTab data={packageData} />}
          {activeTab === "includes" && <IncludesTab data={packageData} />}
          {activeTab === "hotels" && <HotelsTab data={packageData} />}
          {activeTab === "info" && <InfoTab data={packageData} />}
          {activeTab === "booking" && <BookingTab data={packageData} />}
          {activeTab === "terms" && <TermsTab data={packageData} />}
          {activeTab === "pre-departure" && <PreDepartureTab data={packageData} />}
          {activeTab === "faq" && <FAQTab data={packageData} />}
        </div>
      </div>
    </>
  );
}

// Overview Tab
function OverviewTab({ data }: { data: any }) {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-light text-midnight mb-6">Package Overview</h2>
        <p className="text-lg text-midnight/70 leading-relaxed mb-8">{data.description}</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <div className="text-sm text-midnight/50 mb-1">Route</div>
              <div className="text-base text-midnight">{data.overview.route}</div>
            </div>
            <div>
              <div className="text-sm text-midnight/50 mb-1">Duration</div>
              <div className="text-base text-midnight">{data.duration.display}</div>
            </div>
            <div>
              <div className="text-sm text-midnight/50 mb-1">Maximum Altitude</div>
              <div className="text-base text-midnight">{data.maxAltitude.display}</div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <div className="text-sm text-midnight/50 mb-1">Difficulty</div>
              <div className="text-base text-midnight">{data.difficulty}</div>
            </div>
            <div>
              <div className="text-sm text-midnight/50 mb-1">Best Season</div>
              <div className="text-base text-midnight">{data.bestSeason.join(", ")}</div>
            </div>
            <div>
              <div className="text-sm text-midnight/50 mb-1">Starting Point</div>
              <div className="text-base text-midnight">{data.startingPoint}</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-light text-midnight mb-6">Highlights</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {data.overview.highlights.map((highlight: string, index: number) => (
            <div key={index} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-midnight/70">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Itinerary Tab
function ItineraryTab({ data }: { data: any }) {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-light text-midnight mb-2">Day by Day Itinerary</h2>
        <p className="text-base text-midnight/60 mb-8">{data.duration.days} days journey through sacred landscapes</p>
      </div>

      <div className="space-y-2">
        {data.itinerary.map((day: any) => (
          <div
            key={day.day}
            className="border border-midnight/10 rounded-xl overflow-hidden hover:border-midnight/20 transition-colors"
          >
            <button
              onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface-low transition-colors"
            >
              <div className="flex items-center gap-6 flex-1">
                <div className="text-sm text-midnight/40 font-medium w-16">Day {day.day}</div>
                <div className="flex-1">
                  <h3 className="text-base font-medium text-midnight mb-1">{day.title}</h3>
                  {day.altitude && (
                    <div className="text-sm text-midnight/50">Altitude: {day.altitude}</div>
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
              <div className="px-6 pb-6 border-t border-midnight/10">
                <div className="pt-4 space-y-4">
                  <div>
                    <div className="text-sm text-midnight/50 mb-2">Activities</div>
                    <ul className="space-y-2">
                      {day.activities.map((activity: string, index: number) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-midnight/70">
                          <span className="text-gold mt-1">•</span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {day.accommodation && (
                    <div>
                      <div className="text-sm text-midnight/50 mb-1">Accommodation</div>
                      <div className="text-sm text-midnight/70">{day.accommodation}</div>
                    </div>
                  )}
                  {day.meals && (
                    <div>
                      <div className="text-sm text-midnight/50 mb-1">Meals</div>
                      <div className="flex gap-3 text-sm">
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
  );
}

// Includes Tab
function IncludesTab({ data }: { data: any }) {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-light text-midnight mb-8">What's Included</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-green-50/50 rounded-2xl p-8 border border-green-200/50">
          <div className="flex items-center gap-2 mb-6">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h3 className="text-lg font-medium text-midnight">Included</h3>
          </div>
          <ul className="space-y-3">
            {data.inclusions.map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-3 text-sm text-midnight/70">
                <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-red-50/50 rounded-2xl p-8 border border-red-200/50">
          <div className="flex items-center gap-2 mb-6">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <h3 className="text-lg font-medium text-midnight">Not Included</h3>
          </div>
          <ul className="space-y-3">
            {data.exclusions.map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-3 text-sm text-midnight/70">
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
  );
}

// Hotels Tab
function HotelsTab({ data }: { data: any }) {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-light text-midnight mb-2">Accommodation</h2>
        <p className="text-base text-midnight/60 mb-8">Hotels and guest houses throughout your journey</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.hotels.map((hotel: any, index: number) => (
          <div key={index} className="bg-surface-low rounded-xl p-6 border border-midnight/10">
            <div className="text-xs text-gold-dark font-medium mb-3 uppercase tracking-wider">{hotel.location}</div>
            <h3 className="text-lg font-medium text-midnight mb-2">{hotel.hotelName}</h3>
            <div className="text-sm text-midnight/60">{hotel.category}</div>
            {hotel.nights && (
              <div className="text-sm text-midnight/50 mt-2">{hotel.nights} {hotel.nights === 1 ? 'night' : 'nights'}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Info Tab
function InfoTab({ data }: { data: any }) {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-light text-midnight mb-8">Essential Information</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(data.basicInfo).map(([key, value]) => (
          <div key={key} className="bg-surface-low rounded-xl p-6 border border-midnight/10">
            <div className="text-sm text-midnight/50 mb-2 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
            <div className="text-base text-midnight">{value as string}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Booking Tab
function BookingTab({ data }: { data: any }) {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-light text-midnight mb-8">Booking Process</h2>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-light text-midnight mb-4">Required Documents</h3>
          <div className="space-y-3">
            {data.booking.requiredDocuments.map((doc: string, index: number) => (
              <div key={index} className="flex items-start gap-3 text-sm text-midnight/70">
                <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {doc}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-light text-midnight mb-4">Payment Schedule</h3>
          <div className="space-y-4">
            {data.booking.paymentSchedule.map((payment: any, index: number) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-surface-low rounded-xl">
                <div className="text-3xl font-light text-gold">{payment.amount}</div>
                <div className="flex-1">
                  <div className="text-base font-medium text-midnight mb-1">{payment.stage}</div>
                  <div className="text-sm text-midnight/60">{payment.due}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Terms Tab
function TermsTab({ data }: { data: any }) {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-light text-midnight mb-8">Terms & Conditions</h2>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium text-midnight mb-4">Cancellation Policy</h3>
          <div className="space-y-3">
            {data.terms.cancellationPolicy.map((policy: any, index: number) => (
              <div key={index} className="flex items-center justify-between p-4 bg-surface-low rounded-xl">
                <div className="text-sm font-medium text-midnight">{policy.timeBefore}</div>
                <div className="text-sm text-midnight/70">{policy.refund}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {[
            { title: "Travel Insurance", content: data.terms.travelInsurance },
            { title: "Changes", content: data.terms.changes },
            { title: "Company Rights", content: data.terms.companyRights },
            { title: "Refund Policy", content: data.terms.refundPolicy },
            { title: "Age Restriction", content: data.terms.ageRestriction },
          ].map((item) => (
            <div key={item.title} className="p-6 bg-surface-low rounded-xl">
              <h4 className="text-base font-medium text-midnight mb-2">{item.title}</h4>
              <p className="text-sm text-midnight/70">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// PreDeparture Tab
function PreDepartureTab({ data }: { data: any }) {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-light text-midnight mb-8">Pre-Departure Guide</h2>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium text-midnight mb-4">Clothing & Packing</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {data.preDeparture.clothing.map((item: string, index: number) => (
              <div key={index} className="flex items-start gap-3 text-sm text-midnight/70">
                <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-midnight mb-4">Essential Items</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {data.preDeparture.essentials.map((item: string, index: number) => (
              <div key={index} className="flex items-start gap-3 text-sm text-midnight/70">
                <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-midnight mb-4">Health Guidance</h3>
          <div className="space-y-3">
            {data.preDeparture.health.map((item: string, index: number) => (
              <div key={index} className="p-4 bg-surface-low rounded-xl text-sm text-midnight/70">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// FAQ Tab
function FAQTab({ data }: { data: any }) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-light text-midnight mb-2">Frequently Asked Questions</h2>
        <p className="text-base text-midnight/60 mb-8">Common questions about the Kailash Mansarovar Yatra</p>
      </div>

      <div className="space-y-2">
        {data.faq.map((item: any, index: number) => (
          <div key={index} className="border border-midnight/10 rounded-xl overflow-hidden">
            <button
              onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface-low transition-colors"
            >
              <h3 className="text-base font-medium text-midnight pr-4">{item.question}</h3>
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
              <div className="px-6 pb-6 border-t border-midnight/10">
                <p className="pt-4 text-sm text-midnight/70 leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
