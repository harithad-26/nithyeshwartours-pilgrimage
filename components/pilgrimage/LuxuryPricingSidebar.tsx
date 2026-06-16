"use client";

import Link from "next/link";

interface LuxuryPricingSidebarProps {
  pkg: {
    code: string;
    name: string;
    duration: {
      display: string;
    };
    difficulty: string;
    maxAltitude: {
      display: string;
    };
    startingPoint: string;
    pricing: {
      startingFrom: number;
      display: string;
      notes: string;
    };
  };
}

export default function LuxuryPricingSidebar({ pkg }: LuxuryPricingSidebarProps) {
  return (
    <aside className="w-full" aria-label="Package booking and quick facts">
      {/* Premium Booking Card */}
      <div className="bg-[#000613] text-white border border-white/10 hover:border-gold-dark/30 transition-all duration-300 p-5 shadow-card relative overflow-hidden">
        {/* Subtle Decorative Gradient */}
        <div className="absolute -right-24 -top-24 w-48 h-48 bg-gold-dark/10 rounded-full blur-3xl pointer-events-none" />
        
        <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-gold uppercase mb-1.5 block">
          {pkg.code}
        </span>
        <h3 className="font-serif text-lg text-white font-light leading-snug mb-3">
          {pkg.name}
        </h3>

        {/* Pricing Block */}
        <div className="mb-4 pb-4 border-b border-white/10">
          <p className="font-sans text-[10px] font-medium text-white/70 tracking-wider mb-0.5">
            Starting from
          </p>
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif text-4xl font-light text-gold leading-none">
              {pkg.pricing.display}
            </span>
            <span className="font-sans text-[11px] text-white/65">per person</span>
          </div>
          <p className="font-sans text-[10px] text-white/50 mt-1 italic">
            {pkg.pricing.notes}
          </p>
        </div>

        {/* Key Journey Facts - 2x2 Grid */}
        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
          {[
            { label: "Duration", value: pkg.duration.display },
            { label: "Difficulty", value: pkg.difficulty },
            { label: "Altitude", value: pkg.maxAltitude.display.split(" ")[0] },
            { label: "Starts Point", value: pkg.startingPoint },
          ].map(({ label, value }) => (
            <div key={label} className="space-y-0.5">
              <dt className="font-sans text-[9px] text-white/60 uppercase tracking-wider">
                {label}
              </dt>
              <dd className="font-sans text-xs text-white/95 font-medium truncate">
                {value}
              </dd>
            </div>
          ))}
        </dl>

        {/* Call to Action */}
        <div>
          <Link
            href={`/inquiry?package=${pkg.code}`}
            className="btn-premium btn-premium-white w-full text-center"
          >
            <span>Book This Package</span>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Small Trust Signals inside card - 2x2 Grid */}
        <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-x-4 gap-y-2.5">
          {[
            "100% Satvik Meals",
            "Oxygen Backup",
            "Visa & Permits",
            "Official Partner",
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-1.5 text-[11px] text-white/70">
              <svg className="w-3 h-3 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="leading-tight">{item}</span>
            </div>
          ))}
        </div>

        {/* Unified Safety & Trust block inside the dark card */}
        <div className="mt-4 pt-4 border-t border-white/10 text-center">
          <p className="font-sans text-[10px] text-gold/80 font-medium tracking-wider uppercase">
            30+ Years of Sacred Service
          </p>
        </div>
      </div>
    </aside>
  );
}
