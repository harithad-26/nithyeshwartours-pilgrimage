"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// ── Destination data ──────────────────────────────────────────────────────────

type DestinationType = "Domestic" | "International" | "Spiritual";

const QUICK_TAGS: Record<DestinationType, string[]> = {
  Domestic: ["Varanasi", "Rishikesh", "Amarnath", "Kedarnath"],
  International: ["Bali", "Jerusalem", "Mecca", "Lhasa"],
  Spiritual: ["Char Dham", "Kailash", "Tirupati", "Vrindavan"],
};

const DESTINATION_IMAGES: Record<string, { src: string; title: string; subtitle: string }> = {
  Varanasi: {
    src: "/images/destinations/uttar-pradesh.jpg",
    title: "The Eternal City of Kashi",
    subtitle: "Spiritual capital of India",
  },
  Rishikesh: {
    src: "/images/india-states/odisha.jpg",
    title: "The Yoga Capital of the World",
    subtitle: "Where the Ganges flows pure",
  },
  Amarnath: {
    src: "/images/destinations/andaman.jpg",
    title: "The Sacred Ice Lingam",
    subtitle: "A high-altitude divine pilgrimage",
  },
  default: {
    src: "/images/destinations/andaman.jpg",
    title: "The Eternal City of Kashi",
    subtitle: "Spiritual capital of India",
  },
};

// ── Month / duration data ─────────────────────────────────────────────────────

const MONTHS = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"] as const;
type Month = (typeof MONTHS)[number];

const DURATION_TIPS: Record<Month, string> = {
  Oct: "October brings mild temperatures — ideal for outdoor pilgrimages.",
  Nov: "November offers the most pleasant climate for spiritual contemplation in Northern India.",
  Dec: "December is serene and cool — perfect for mountain shrines.",
  Jan: "January's crisp air enriches meditation and inner silence.",
  Feb: "February brings the first warmth — rivers and forests feel alive.",
  Mar: "March heralds Holi — a joyful time to visit colourful sacred sites.",
};

// ── Traveller group data ──────────────────────────────────────────────────────

type GroupType = "solo" | "duo" | "family";

const GROUPS: {
  id: GroupType;
  label: string;
  subtext: string;
  multiplier: number;
  icon: React.ReactNode;
}[] = [
  {
    id: "solo",
    label: "Solo Seeker",
    subtext: "Private room & guide",
    multiplier: 1,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M4 21c0-4.418 3.582-8 8-8s8 3.582 8 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "duo",
    label: "Duo Pilgrims",
    subtext: "Shared sacred spaces",
    multiplier: 1.6,
    icon: (
      <svg width="33" height="24" viewBox="0 0 33 24" fill="none" aria-hidden="true">
        <circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M2 21c0-4.418 3.582-8 8-8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="23" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M31 21c0-4.418-3.582-8-8-8s-8 3.582-8 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "family",
    label: "Family Circle",
    subtext: "3+ Guided experience",
    multiplier: 2.4,
    icon: (
      <svg width="31" height="30" viewBox="0 0 31 30" fill="none" aria-hidden="true">
        <circle cx="15.5" cy="5" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M7 20c0-4.418 3.806-8 8.5-8s8.5 3.582 8.5 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="5" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M0 26c0-3.314 2.239-6 5-6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="26" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M31 26c0-3.314-2.239-6-5-6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

// ── Base pricing ──────────────────────────────────────────────────────────────

const BASE_COSTS = {
  baseJourney: 1450,
  accommodations: 850,
  spiritualGuide: 400,
};

// ── Step indicator ────────────────────────────────────────────────────────────

function StepBadge({
  number,
  active,
}: {
  number: string;
  active: boolean;
}) {
  return (
    <div
      className={`shrink-0 size-10 rounded-xl flex items-center justify-center border ${
        active
          ? "border-gold-dark text-gold-dark"
          : "border-[#c4c6cf] text-[#c4c6cf]"
      } transition-colors duration-300`}
      aria-hidden="true"
    >
      <span className="font-serif text-base">{number}</span>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────

export function TripBuilderForm() {
  // Step 1 — Destination
  const [destType, setDestType] = useState<DestinationType>("Spiritual");
  const [selectedTag, setSelectedTag] = useState<string>("Amarnath");
  const [customDest, setCustomDest] = useState("");

  // Step 2 — Dates
  const [selectedMonth, setSelectedMonth] = useState<Month>("Nov");
  const [duration, setDuration] = useState(7);

  // Step 3 — Group
  const [groupType, setGroupType] = useState<GroupType>("solo");

  // Derived pricing
  const group = GROUPS.find((g) => g.id === groupType)!;
  const costs = {
    baseJourney: Math.round(BASE_COSTS.baseJourney * group.multiplier),
    accommodations: Math.round(BASE_COSTS.accommodations * group.multiplier),
    spiritualGuide: BASE_COSTS.spiritualGuide,
  };
  const total = costs.baseJourney + costs.accommodations + costs.spiritualGuide;

  // Destination image
  const destImg =
    DESTINATION_IMAGES[selectedTag] ?? DESTINATION_IMAGES.default;

  // Active step logic (steps become active when previous is interacted with)
  const step2Active = Boolean(selectedTag || customDest);
  const step3Active = step2Active && Boolean(selectedMonth);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12">
      {/* ── LEFT: Steps ── */}
      <div className="lg:col-span-8 flex flex-col gap-16">

        {/* ──── Step 1: Destination ──── */}
        <section aria-labelledby="step1-heading" className="flex flex-col gap-8">
          {/* Step header */}
          <div className="flex items-center gap-4">
            <StepBadge number="01" active />
            <h2
              id="step1-heading"
              className="font-serif text-2xl text-midnight font-normal"
            >
              Where shall your soul wander?
            </h2>
          </div>

          {/* Input + quick tags grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Destination input */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="destination-input"
                className="font-sans text-xs font-normal tracking-[0.1em] uppercase text-[#74777f]"
              >
                Destination
              </label>
              <div className="relative border-b-2 border-[#c4c6cf] focus-within:border-gold-dark transition-colors duration-300 pb-3 pt-3">
                <input
                  id="destination-input"
                  type="text"
                  placeholder="Select a sacred destination…"
                  value={customDest}
                  onChange={(e) => {
                    setCustomDest(e.target.value);
                    setSelectedTag("");
                  }}
                  className="w-full bg-transparent font-sans text-base text-midnight placeholder:text-[#43474e]/60 outline-none pr-8"
                  aria-label="Type or select a destination"
                />
                {/* Chevron */}
                <svg
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-[#43474e]/50 pointer-events-none"
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 1.5l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Destination type tabs */}
              <div
                className="flex gap-2 mt-3"
                role="group"
                aria-label="Destination type"
              >
                {(["Domestic", "International", "Spiritual"] as DestinationType[]).map(
                  (type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => {
                        setDestType(type);
                        setSelectedTag("");
                        setCustomDest("");
                      }}
                      aria-pressed={destType === type}
                      className={`font-sans text-xs font-medium px-3 py-1.5 rounded-md border transition-all duration-300 min-h-8 ${
                        destType === type
                          ? "bg-gold-dark/5 border-gold-dark text-gold-dark"
                          : "border-[#c4c6cf] text-[#1a1c1c] hover:border-gold-dark/40"
                      }`}
                    >
                      {type}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Quick-select tags */}
            <div className="flex flex-col gap-2">
              <p className="font-sans text-xs font-normal tracking-[0.1em] uppercase text-[#74777f]">
                Quick Select
              </p>
              <div className="flex flex-wrap gap-2 pt-3">
                {QUICK_TAGS[destType].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => {
                      setSelectedTag(tag);
                      setCustomDest("");
                    }}
                    aria-pressed={selectedTag === tag}
                    className={`font-sans text-sm font-medium px-4 py-2 rounded-xl border transition-all duration-300 min-h-9 ${
                      selectedTag === tag
                        ? "bg-gold-dark/5 border-gold-dark text-gold-dark"
                        : "border-[#c4c6cf] text-[#1a1c1c] hover:border-gold-dark/40"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Destination image preview */}
          <div className="relative h-72 rounded-lg overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
            <Image
              src={destImg.src}
              alt={destImg.title}
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover transition-all duration-700"
              quality={85}
            />
            {/* Gradient overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-midnight/60 to-transparent"
              aria-hidden="true"
            />
            {/* Caption */}
            <div className="absolute bottom-6 left-8">
              <p className="font-serif text-xl text-surface font-normal">
                {customDest
                  ? customDest
                  : selectedTag
                  ? DESTINATION_IMAGES[selectedTag]?.title ?? destImg.title
                  : destImg.title}
              </p>
              <p className="font-sans text-sm text-surface/80">{destImg.subtitle}</p>
            </div>
          </div>
        </section>

        {/* ──── Step 2: Dates ──── */}
        <section aria-labelledby="step2-heading" className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <StepBadge number="02" active={step2Active} />
            <h2
              id="step2-heading"
              className="font-serif text-2xl text-midnight font-normal"
            >
              When will you depart?
            </h2>
          </div>

          <div className="bg-surface-low rounded-lg p-8 grid grid-cols-1 sm:grid-cols-2 gap-12">
            {/* Month picker */}
            <div className="flex flex-col gap-4">
              <p className="font-sans text-xs tracking-[0.1em] uppercase text-[#74777f]">
                Select Month
              </p>
              <div
                className="grid grid-cols-3 gap-2"
                role="group"
                aria-label="Select departure month"
              >
                {MONTHS.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setSelectedMonth(m)}
                    aria-pressed={selectedMonth === m}
                    className={`font-sans text-sm font-medium py-3 rounded border transition-all duration-300 min-h-11 ${
                      selectedMonth === m
                        ? "bg-gold-dark/5 border-gold-dark text-gold-dark"
                        : "border-transparent text-[#1a1c1c] hover:border-gold-dark/30"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Duration + tip */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="duration-input"
                  className="font-sans text-xs tracking-[0.1em] uppercase text-[#74777f]"
                >
                  Duration (days)
                </label>
                <div className="flex items-center gap-4 border-b border-[#c4c6cf] pb-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setDuration((d) => Math.max(1, d - 1))}
                    aria-label="Decrease duration"
                    className="size-8 flex items-center justify-center rounded border border-[#c4c6cf] text-midnight hover:border-gold-dark hover:text-gold-dark transition-all duration-300 font-sans text-lg leading-none"
                  >
                    −
                  </button>
                  <span
                    id="duration-input"
                    className="font-sans text-base font-medium text-midnight flex-1 text-center"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    {duration} Sacred {duration === 1 ? "Day" : "Days"}
                  </span>
                  <button
                    type="button"
                    onClick={() => setDuration((d) => Math.min(30, d + 1))}
                    aria-label="Increase duration"
                    className="size-8 flex items-center justify-center rounded border border-[#c4c6cf] text-midnight hover:border-gold-dark hover:text-gold-dark transition-all duration-300 font-sans text-lg leading-none"
                  >
                    +
                  </button>
                </div>
              </div>

              <p className="font-sans text-sm text-[#43474e] leading-relaxed">
                {DURATION_TIPS[selectedMonth]}
              </p>
            </div>
          </div>
        </section>

        {/* ──── Step 3: Group ──── */}
        <section aria-labelledby="step3-heading" className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <StepBadge number="03" active={step3Active} />
            <h2
              id="step3-heading"
              className="font-serif text-2xl text-midnight font-normal"
            >
              Who shares this journey?
            </h2>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            role="group"
            aria-label="Select group type"
          >
            {GROUPS.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setGroupType(g.id)}
                aria-pressed={groupType === g.id}
                className={`flex flex-col items-center gap-4 p-6 rounded-lg border transition-all duration-300 min-h-[11rem] ${
                  groupType === g.id
                    ? "bg-gold-dark/5 border-gold-dark text-midnight"
                    : "border-[#c4c6cf] text-midnight hover:border-gold-dark/40"
                }`}
              >
                <span
                  className={`transition-colors duration-300 ${
                    groupType === g.id ? "text-gold-dark" : "text-[#43474e]"
                  }`}
                >
                  {g.icon}
                </span>
                <span className="font-serif text-lg font-normal text-center">
                  {g.label}
                </span>
                <span className="font-sans text-xs text-[#43474e] text-center">
                  {g.subtext}
                </span>
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* ── RIGHT: Sidebar ── */}
      <aside
        className="lg:col-span-4 flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start"
        aria-label="Estimated journey cost"
      >
        {/* Pricing card */}
        <div className="relative bg-midnight rounded-lg p-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden">
          {/* Gold left accent */}
          <div
            className="absolute top-0 bottom-0 left-0 w-1 bg-gold-dark"
            aria-hidden="true"
          />

          <h2 className="font-serif text-2xl text-surface font-normal mb-8">
            Estimated Offering
          </h2>

          {/* Line items */}
          <dl className="flex flex-col gap-6 pb-4">
            {[
              { label: "BASE JOURNEY", value: costs.baseJourney },
              { label: "ACCOMMODATIONS", value: costs.accommodations },
              { label: "SPIRITUAL GUIDE", value: costs.spiritualGuide },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex items-end justify-between border-b border-surface/10 pb-4"
              >
                <dt className="font-sans text-xs tracking-[0.1em] uppercase text-surface/60">
                  {label}
                </dt>
                <dd
                  className="font-sans text-base font-medium text-surface tabular-nums"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  ${value.toLocaleString("en-US")}
                </dd>
              </div>
            ))}

            {/* Total */}
            <div className="flex items-end justify-between pt-4">
              <dt className="font-serif text-lg text-surface font-normal">
                Total Investment
              </dt>
              <dd className="flex flex-col items-end gap-1">
                <span
                  className="font-serif text-[1.875rem] leading-9 text-gold font-normal tabular-nums"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  ${total.toLocaleString("en-US")}
                </span>
                <span className="font-sans text-[10px] tracking-tight uppercase text-surface/40">
                  Inclusive of all taxes
                </span>
              </dd>
            </div>
          </dl>

          {/* CTA */}
          <Link
            href="/inquiry"
            className="mt-8 flex items-center justify-center w-full py-5 bg-gold rounded font-sans text-xs font-bold tracking-[0.1em] uppercase text-gold-dark hover:bg-gold-dark hover:text-white transition-colors duration-300 min-h-11 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]"
          >
            Finalize Itinerary
          </Link>

          <p className="mt-6 font-sans text-xs text-surface/50 text-center leading-relaxed">
            Price may vary slightly based on final seasonal adjustments.
          </p>
        </div>

        {/* Bespoke Protection card */}
        <div className="bg-surface-low rounded-lg p-6 flex items-center gap-4">
          {/* Shield icon */}
          <div className="shrink-0 text-gold-dark" aria-hidden="true">
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
              <path
                d="M8 1L1 4v5c0 4.418 2.955 8.562 7 10 4.045-1.438 7-5.582 7-10V4L8 1z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <p className="font-sans text-sm font-bold text-[#1a1c1c]">
              Bespoke Protection
            </p>
            <p className="font-sans text-xs text-[#43474e] leading-relaxed">
              Includes spiritual insurance and 24/7 concierge.
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
