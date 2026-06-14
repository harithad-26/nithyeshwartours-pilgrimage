"use client";

// Enhanced Trip Builder Form - Production Ready
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const DESTINATIONS = ["Varanasi", "Rishikesh", "Amarnath", "Kedarnath", "Haridwar", "Ayodhya", "Bodh Gaya", "Puri"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DURATIONS = [
  { label: "3-5 Days", value: "short" },
  { label: "6-9 Days", value: "medium" },
  { label: "10-14 Days", value: "long" },
  { label: "15+ Days", value: "extended" },
];

const ACCOMMODATION_TYPES = [
  { label: "Standard", value: "standard", description: "Comfortable 3-star hotels" },
  { label: "Premium", value: "premium", description: "4-star hotels with amenities" },
  { label: "Luxury", value: "luxury", description: "5-star properties & resorts" },
];

const INTERESTS = [
  { label: "Temple Tours", value: "temples", icon: "🕉️" },
  { label: "River Rituals", value: "rivers", icon: "🌊" },
  { label: "Meditation", value: "meditation", icon: "🧘" },
  { label: "Yoga Sessions", value: "yoga", icon: "🙏" },
  { label: "Cultural Shows", value: "culture", icon: "🎭" },
  { label: "Local Cuisine", value: "cuisine", icon: "🍛" },
];

type GroupType = "solo" | "duo" | "family" | "group";

const GROUP_TYPES = [
  {
    id: "solo" as GroupType,
    label: "Solo Seeker",
    sub: "Private room & guide",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="7" r="4" stroke="#735c00" strokeWidth="1.5" />
        <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" stroke="#735c00" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "duo" as GroupType,
    label: "Duo Pilgrims",
    sub: "Shared sacred spaces",
    icon: (
      <svg width="33" height="24" viewBox="0 0 33 24" fill="none" aria-hidden="true">
        <circle cx="10" cy="7" r="4" stroke="#43474e" strokeWidth="1.5" />
        <path d="M2 21c0-4 3.6-7 8-7" stroke="#43474e" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="23" cy="7" r="4" stroke="#43474e" strokeWidth="1.5" />
        <path d="M31 21c0-4-3.6-7-8-7" stroke="#43474e" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 21c0-4 2.7-7 4.5-7s4.5 3 4.5 7" stroke="#43474e" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "family" as GroupType,
    label: "Family Circle",
    sub: "3-6 people guided",
    icon: (
      <svg width="31" height="30" viewBox="0 0 31 30" fill="none" aria-hidden="true">
        <circle cx="15.5" cy="5" r="4" stroke="#43474e" strokeWidth="1.5" />
        <path d="M7.5 18c0-4 3.6-6 8-6s8 2 8 6" stroke="#43474e" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="5" cy="12" r="3" stroke="#43474e" strokeWidth="1.5" />
        <path d="M0 25c0-3 2.4-5 5-5" stroke="#43474e" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="26" cy="12" r="3" stroke="#43474e" strokeWidth="1.5" />
        <path d="M31 25c0-3-2.4-5-5-5" stroke="#43474e" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "group" as GroupType,
    label: "Group Journey",
    sub: "7+ travelers together",
    icon: (
      <svg width="36" height="24" viewBox="0 0 36 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="7" r="4" stroke="#43474e" strokeWidth="1.5" />
        <circle cx="24" cy="7" r="4" stroke="#43474e" strokeWidth="1.5" />
        <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7M16 21c0-4 3.6-7 8-7s8 3 8 7" stroke="#43474e" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const LINE_ITEMS = [
  { label: "BASE JOURNEY", price: "₹1,05,000" },
  { label: "ACCOMMODATIONS", price: "₹62,000" },
  { label: "SPIRITUAL GUIDE", price: "₹29,000" },
];

type Step = 1 | 2 | 3 | 4 | 5;

export function TripBuilderForm() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [destination, setDestination] = useState("");
  const [activeDestTag, setActiveDestTag] = useState("Amarnath");
  const [activeMonth, setActiveMonth] = useState("Nov");
  const [duration, setDuration] = useState("medium");
  const [groupType, setGroupType] = useState<GroupType>("solo");
  const [accommodation, setAccommodation] = useState("premium");
  const [selectedInterests, setSelectedInterests] = useState<string[]>(["temples"]);
  const [isSaved, setIsSaved] = useState(false);

  function toggleInterest(value: string) {
    setSelectedInterests(prev =>
      prev.includes(value) ? prev.filter(i => i !== value) : [...prev, value]
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const dest = destination || activeDestTag;
    const params = new URLSearchParams({
      destination: dest,
      month: activeMonth,
      group: groupType,
      duration,
      accommodation,
      interests: selectedInterests.join(","),
    });
    window.location.href = `/inquiry?${params.toString()}`;
  }

  function handleSaveTrip() {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  }

  const STEPS = [
    { num: 1, label: "Destination" },
    { num: 2, label: "Dates" },
    { num: 3, label: "Group" },
    { num: 4, label: "Preferences" },
    { num: 5, label: "Review" },
  ];

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Progress Indicator */}
      <div className="mb-12">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          {STEPS.map((step, index) => (
            <div key={step.num} className="flex items-center flex-1">
              <button
                type="button"
                onClick={() => setCurrentStep(step.num as Step)}
                className={`flex flex-col items-center group ${
                  currentStep >= step.num ? "" : "opacity-40"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                    currentStep === step.num
                      ? "bg-gold-dark text-midnight ring-4 ring-gold/30"
                      : currentStep > step.num
                      ? "bg-gold text-midnight"
                      : "bg-white border-2 border-midnight/20 text-midnight/40"
                  }`}
                >
                  {currentStep > step.num ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M13.3 4L6 11.3 2.7 8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <span className="font-serif text-sm">{step.num}</span>
                  )}
                </div>
                <span className="font-sans text-xs text-midnight uppercase tracking-wider hidden md:block">
                  {step.label}
                </span>
              </button>
              {index < STEPS.length - 1 && (
                <div
                  className={`h-px flex-1 mx-2 transition-colors duration-300 ${
                    currentStep > step.num ? "bg-gold" : "bg-midnight/10"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left — steps */}
        <div className="lg:col-span-8 flex flex-col gap-16">

          {/* Step 1 - Destination */}
          {currentStep === 1 && (
            <section aria-labelledby="step1-heading">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl border border-gold-dark flex items-center justify-center shrink-0">
                  <span className="font-serif text-base text-gold-dark">01</span>
                </div>
                <h2 id="step1-heading" className="font-serif text-2xl text-midnight font-normal">
                  Where shall your soul wander?
                </h2>
              </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Destination input */}
              <div>
                <label htmlFor="destination" className="font-sans text-xs font-normal tracking-[0.1em] uppercase text-[#74777f] mb-2 block">
                  DESTINATION
                </label>
                <div className="flex items-center justify-between border-b-2 border-[#c4c6cf] pb-3 pt-3">
                  <input
                    id="destination"
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Select a sacred destination..."
                    className="flex-1 bg-transparent font-sans text-base text-[#43474e] placeholder:text-[#43474e] outline-none"
                    autoComplete="off"
                  />
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
                    <path d="M1 1L6 7L11 1" stroke="#43474e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Quick tags */}
              <div>
                <p className="font-sans text-xs tracking-[0.1em] uppercase text-[#74777f] mb-4 opacity-0 select-none" aria-hidden="true">
                  QUICK SELECT
                </p>
                <div className="flex flex-wrap gap-2">
                  {DESTINATIONS.map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => { setActiveDestTag(d); setDestination(""); }}
                      className={`font-sans text-sm px-4 py-2 rounded-xl border transition-colors duration-200 min-h-[38px] ${
                        activeDestTag === d && !destination
                          ? "bg-[rgba(115,92,0,0.05)] border-gold-dark text-gold-dark"
                          : "border-[#c4c6cf] text-[#1a1c1c] hover:border-gold-dark"
                      }`}
                      aria-pressed={activeDestTag === d && !destination}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Destination image preview */}
            <div className="relative h-[280px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/pilgrimage/varanasi.jpg"
                alt="The Eternal City of Kashi"
                fill
                sizes="(max-width: 1024px) 100vw, 67vw"
                className="object-cover"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent" />
              <div className="absolute bottom-6 left-8">
                <p className="font-serif text-xl text-surface font-normal">The Eternal City of Kashi</p>
                <p className="font-sans text-sm text-white/80 mt-1">Spiritual capital of India</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setCurrentStep(2)}
              className="mt-8 w-full bg-gold font-sans font-bold text-xs tracking-[0.1em] uppercase text-[#745c00] py-5 rounded transition-colors duration-300 hover:bg-yellow-300"
            >
              Continue to Dates
            </button>
          </section>
          )}

          {/* Step 2 - Dates */}
          {currentStep === 2 && (
            <section aria-labelledby="step2-heading">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl border border-gold-dark flex items-center justify-center shrink-0">
                  <span className="font-serif text-base text-gold-dark">02</span>
                </div>
                <h2 id="step2-heading" className="font-serif text-2xl text-midnight font-normal">
                  When will you depart?
                </h2>
              </div>

            <div className="bg-[#f4f3f2] rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Month picker */}
              <div>
                <p className="font-sans text-xs tracking-[0.1em] uppercase text-[#74777f] mb-4">SELECT MONTH</p>
                <div className="grid grid-cols-3 gap-2">
                  {MONTHS.map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setActiveMonth(m)}
                      className={`font-sans text-sm font-medium py-3 rounded transition-colors duration-200 min-h-[46px] ${
                        activeMonth === m
                          ? "bg-[rgba(115,92,0,0.05)] border border-gold-dark text-gold-dark"
                          : "border border-transparent text-[#1a1c1c] hover:border-[#c4c6cf]"
                      }`}
                      aria-pressed={activeMonth === m}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration */}
              <div className="flex flex-col gap-4">
                <div>
                  <p className="font-sans text-xs tracking-[0.1em] uppercase text-[#74777f] mb-3">DURATION</p>
                  <div className="flex items-center justify-between border-b border-[#c4c6cf] pb-3 pt-3">
                    <span className="font-sans text-base font-medium text-[#1a1c1c]">7 Sacred Days</span>
                  </div>
                </div>
                <p className="font-sans text-sm text-[#43474e] leading-relaxed">
                  Tip: November offers the most pleasant climate for spiritual contemplation in Northern India.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setCurrentStep(3)}
              className="mt-8 w-full bg-gold font-sans font-bold text-xs tracking-[0.1em] uppercase text-[#745c00] py-5 rounded transition-colors duration-300 hover:bg-yellow-300"
            >
              Continue to Group Selection
            </button>
          </section>
          )}

          {/* Step 3 - Group */}
          {currentStep === 3 && (
            <section aria-labelledby="step3-heading">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl border border-gold-dark flex items-center justify-center shrink-0">
                  <span className="font-serif text-base text-gold-dark">03</span>
                </div>
                <h2 id="step3-heading" className="font-serif text-2xl text-midnight font-normal">
                  Who shares this journey?
                </h2>
              </div>

            <div className="grid grid-cols-3 gap-6" role="radiogroup" aria-labelledby="step3-heading">
              {GROUP_TYPES.map((g) => (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setGroupType(g.id)}
                  role="radio"
                  aria-checked={groupType === g.id}
                  className={`flex flex-col items-center p-6 rounded-lg border transition-colors duration-200 min-h-[44px] ${
                    groupType === g.id
                      ? "bg-[rgba(115,92,0,0.05)] border-gold-dark"
                      : "border-[#c4c6cf] hover:border-gold-dark"
                  }`}
                >
                  <div className="mb-4 flex items-center justify-center h-8">{g.icon}</div>
                  <p className="font-serif text-lg text-[#1a1c1c] font-normal text-center">{g.label}</p>
                  <p className="font-sans text-xs text-[#43474e] text-center mt-2">{g.sub}</p>
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setCurrentStep(4)}
              className="mt-8 w-full bg-gold font-sans font-bold text-xs tracking-[0.1em] uppercase text-[#745c00] py-5 rounded transition-colors duration-300 hover:bg-yellow-300"
            >
              Continue to Preferences
            </button>
          </section>
          )}

          {/* Step 4 - Preferences */}
          {currentStep === 4 && (
            <section aria-labelledby="step4-heading">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl border border-gold-dark flex items-center justify-center shrink-0">
                  <span className="font-serif text-base text-gold-dark">04</span>
                </div>
                <h2 id="step4-heading" className="font-serif text-2xl text-midnight font-normal">
                  Customize Your Experience
                </h2>
              </div>

              {/* Accommodation Selection */}
              <div className="mb-10">
                <p className="font-sans text-sm font-bold tracking-[0.1em] uppercase text-[#74777f] mb-4">
                  Accommodation Type
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {ACCOMMODATION_TYPES.map((acc) => (
                    <button
                      key={acc.value}
                      type="button"
                      onClick={() => setAccommodation(acc.value)}
                      className={`p-6 rounded-lg border-2 transition-all duration-200 ${
                        accommodation === acc.value
                          ? "bg-[rgba(115,92,0,0.05)] border-gold-dark"
                          : "border-[#c4c6cf] hover:border-gold-dark"
                      }`}
                    >
                      <p className="font-serif text-lg text-midnight font-normal mb-2">{acc.label}</p>
                      <p className="font-sans text-xs text-midnight/60">{acc.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration Selection */}
              <div className="mb-10">
                <p className="font-sans text-sm font-bold tracking-[0.1em] uppercase text-[#74777f] mb-4">
                  Trip Duration
                </p>
                <div className="grid grid-cols-4 gap-3">
                  {DURATIONS.map((dur) => (
                    <button
                      key={dur.value}
                      type="button"
                      onClick={() => setDuration(dur.value)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        duration === dur.value
                          ? "bg-[rgba(115,92,0,0.05)] border-gold-dark text-gold-dark"
                          : "border-[#c4c6cf] text-midnight hover:border-gold-dark"
                      }`}
                    >
                      <p className="font-sans text-sm font-medium">{dur.label}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Interests Selection */}
              <div>
                <p className="font-sans text-sm font-bold tracking-[0.1em] uppercase text-[#74777f] mb-4">
                  Select Your Interests
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {INTERESTS.map((interest) => (
                    <button
                      key={interest.value}
                      type="button"
                      onClick={() => toggleInterest(interest.value)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 flex items-center gap-3 ${
                        selectedInterests.includes(interest.value)
                          ? "bg-[rgba(115,92,0,0.05)] border-gold-dark"
                          : "border-[#c4c6cf] hover:border-gold-dark"
                      }`}
                    >
                      <span className="text-2xl">{interest.icon}</span>
                      <span className="font-sans text-sm text-midnight">{interest.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setCurrentStep(5)}
                className="mt-8 w-full bg-gold font-sans font-bold text-xs tracking-[0.1em] uppercase text-[#745c00] py-5 rounded transition-colors duration-300 hover:bg-yellow-300"
              >
                Review Your Journey
              </button>
            </section>
          )}

          {/* Step 5 - Review */}
          {currentStep === 5 && (
            <section aria-labelledby="step5-heading">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl border border-gold-dark flex items-center justify-center shrink-0">
                  <span className="font-serif text-base text-gold-dark">05</span>
                </div>
                <h2 id="step5-heading" className="font-serif text-2xl text-midnight font-normal">
                  Review Your Sacred Journey
                </h2>
              </div>

              <div className="bg-white rounded-lg p-8 border border-midnight/10 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="font-sans text-xs uppercase tracking-wider text-midnight/50 mb-2">Destination</p>
                    <p className="font-serif text-lg text-midnight">{destination || activeDestTag}</p>
                  </div>
                  <div>
                    <p className="font-sans text-xs uppercase tracking-wider text-midnight/50 mb-2">Travel Month</p>
                    <p className="font-serif text-lg text-midnight">{activeMonth}</p>
                  </div>
                  <div>
                    <p className="font-sans text-xs uppercase tracking-wider text-midnight/50 mb-2">Group Type</p>
                    <p className="font-serif text-lg text-midnight capitalize">{groupType}</p>
                  </div>
                  <div>
                    <p className="font-sans text-xs uppercase tracking-wider text-midnight/50 mb-2">Duration</p>
                    <p className="font-serif text-lg text-midnight">{DURATIONS.find(d => d.value === duration)?.label}</p>
                  </div>
                  <div>
                    <p className="font-sans text-xs uppercase tracking-wider text-midnight/50 mb-2">Accommodation</p>
                    <p className="font-serif text-lg text-midnight capitalize">{accommodation}</p>
                  </div>
                  <div>
                    <p className="font-sans text-xs uppercase tracking-wider text-midnight/50 mb-2">Interests</p>
                    <p className="font-serif text-lg text-midnight">{selectedInterests.length} selected</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-midnight/10">
                  <p className="font-sans text-xs uppercase tracking-wider text-midnight/50 mb-2">Selected Interests</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedInterests.map(value => {
                      const interest = INTERESTS.find(i => i.value === value);
                      return (
                        <span key={value} className="px-3 py-1 bg-gold/10 rounded-full font-sans text-sm text-midnight">
                          {interest?.icon} {interest?.label}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  type="button"
                  onClick={handleSaveTrip}
                  className="flex-1 border-2 border-gold-dark font-sans font-bold text-xs tracking-[0.1em] uppercase text-gold-dark py-5 rounded transition-colors duration-300 hover:bg-gold-dark hover:text-midnight"
                >
                  {isSaved ? "✓ Saved!" : "Save Trip"}
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gold font-sans font-bold text-xs tracking-[0.1em] uppercase text-[#745c00] py-5 rounded transition-colors duration-300 hover:bg-yellow-300 shadow-lg"
                >
                  Submit Inquiry
                </button>
              </div>
            </section>
          )}

          {/* Navigation buttons for non-final steps */}
          {currentStep > 1 && currentStep < 5 && (
            <button
              type="button"
              onClick={() => setCurrentStep((currentStep - 1) as Step)}
              className="w-full border-2 border-midnight/20 font-sans font-bold text-xs tracking-[0.1em] uppercase text-midnight py-4 rounded transition-colors duration-300 hover:border-midnight/40"
            >
              ← Back
            </button>
          )}

          {currentStep === 1 && (
            <button
              type="button"
              onClick={() => window.location.href = "/inquiry"}
              className="w-full border-2 border-midnight/20 font-sans font-bold text-xs tracking-[0.1em] uppercase text-midnight py-4 rounded transition-colors duration-300 hover:border-midnight/40"
            >
              Skip and Contact Us Directly
            </button>
          )}
        </div>

        {/* Right — sidebar */}
        <aside className="lg:col-span-4 flex flex-col gap-8 lg:sticky lg:top-28 self-start">
          {/* Price card */}
          <div className="bg-midnight rounded-lg p-10 relative overflow-hidden shadow-2xl">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold-dark" aria-hidden="true" />
            <h3 className="font-serif text-2xl text-surface font-normal mb-8">Estimated Offering</h3>

            <div className="flex flex-col gap-6 pb-4">
              {LINE_ITEMS.map((item) => (
                <div key={item.label} className="flex items-end justify-between border-b border-white/10 pb-4">
                  <span className="font-sans text-xs tracking-[0.1em] uppercase text-white/60">{item.label}</span>
                  <span className="font-sans text-base font-medium text-surface">{item.price}</span>
                </div>
              ))}

              <div className="flex items-end justify-between pt-4">
                <div>
                  <p className="font-serif text-lg text-surface font-normal">Total Investment</p>
                </div>
                <div className="text-right">
                  <p className="font-serif text-3xl text-gold font-normal">₹1,96,000</p>
                  <p className="font-sans text-[10px] uppercase tracking-[0.1em] text-white/40 mt-1">INCLUSIVE OF ALL TAXES</p>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gold font-sans font-bold text-xs tracking-[0.1em] uppercase text-[#745c00] py-5 rounded mt-2 transition-colors duration-300 hover:bg-yellow-300 min-h-[44px]"
            >
              FINALIZE ITINERARY
            </button>

            <p className="font-sans text-xs text-white/50 text-center mt-6 leading-relaxed">
              Price may vary slightly based on final seasonal adjustments.
            </p>
          </div>

          {/* Bespoke protection */}
          <div className="bg-[#f4f3f2] rounded-lg p-6 flex items-center gap-4">
            <div className="shrink-0">
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none" aria-hidden="true">
                <path d="M8 1L1 4v6c0 4.4 3 8.5 7 9.5 4-1 7-5.1 7-9.5V4L8 1z" stroke="#735c00" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="font-sans text-sm font-bold text-[#1a1c1c]">Bespoke Protection</p>
              <p className="font-sans text-xs text-[#43474e] mt-1">Includes spiritual insurance and 24/7 concierge.</p>
            </div>
          </div>

          <Link
            href="/inquiry"
            className="block text-center font-sans text-xs font-bold tracking-[0.12em] uppercase text-gold-dark hover:text-midnight transition-colors"
          >
            Or speak with a specialist
          </Link>
        </aside>
      </div>
    </form>
  );
}
