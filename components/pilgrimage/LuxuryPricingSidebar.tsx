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
      <div className="bg-[#000613] text-white border border-white/10 p-8 shadow-card relative overflow-hidden">
        {/* Subtle Decorative Gradient */}
        <div className="absolute -right-24 -top-24 w-48 h-48 bg-gold-dark/10 rounded-full blur-3xl pointer-events-none" />
        
        <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-gold uppercase mb-3 block">
          {pkg.code}
        </span>
        <h3 className="font-serif text-2xl text-white font-light leading-snug mb-6">
          Book Your Yatra
        </h3>

        {/* Pricing Block */}
        <div className="mb-8 pb-8 border-b border-white/10">
          <p className="font-sans text-xs font-medium text-white/70 tracking-wider mb-1">
            Starting from
          </p>
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-5xl font-light text-gold leading-none">
              {pkg.pricing.display}
            </span>
            <span className="font-sans text-xs text-white/65">per person</span>
          </div>
          <p className="font-sans text-[11px] text-white/60 mt-2 italic">
            {pkg.pricing.notes}
          </p>
        </div>

        {/* Key Journey Facts */}
        <dl className="space-y-4 mb-8">
          {[
            { label: "Duration", value: pkg.duration.display },
            { label: "Difficulty", value: pkg.difficulty },
            { label: "Altitude", value: pkg.maxAltitude.display },
            { label: "Starts Point", value: pkg.startingPoint },
          ].map(({ label, value }) => (
            <div key={label} className="flex justify-between items-center py-1">
              <dt className="font-sans text-xs text-white/65 uppercase tracking-wider">
                {label}
              </dt>
              <dd className="font-sans text-sm text-white/95 font-medium">
                {value}
              </dd>
            </div>
          ))}
        </dl>

        {/* Calls to Action */}
        <div className="space-y-4">
          <Link
            href={`/inquiry?package=${pkg.code}`}
            className="flex items-center justify-center font-sans text-sm font-semibold bg-white text-[#000613] w-full py-4 transition-all duration-300 hover:bg-gold hover:text-[#000613] min-h-[48px] tracking-wider uppercase"
          >
            Submit Inquiry
          </Link>
          
          <a
            href="https://wa.me/917200118411"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 font-sans text-sm font-medium text-white border border-white/20 w-full py-4 transition-all duration-300 hover:bg-white/10 min-h-[48px] tracking-wider"
          >
            <svg className="w-5 h-5 fill-current text-green-500" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.208-3.79c1.661.986 3.292 1.503 4.794 1.504 5.518 0 10.005-4.486 10.008-10.004.002-2.673-1.03-5.184-2.905-7.062C16.287 2.766 13.784 1.72 11.11 1.72c-5.524 0-10.01 4.487-10.014 10.007-.001 1.905.511 3.766 1.481 5.392L1.582 21.03l3.961-1.028 1.439.845-.717-2.637zM17.38 15.65c-.297-.15-1.758-.867-2.03-.967-.273-.099-.471-.15-.669.15-.198.297-.768.967-.941 1.165-.173.199-.347.223-.644.074-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.15-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.075-.15-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            </svg>
            Contact via WhatsApp
          </a>
        </div>

        {/* Small Trust Signals inside card */}
        <div className="mt-8 pt-8 border-t border-white/10 space-y-3">
          {[
            "100% Satvik Vegetarian Meals",
            "Double-Daily Medical Oxygen Checks",
            "Tibet Group Visa & Permits Managed",
            "Soham Treks Official Partner",
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-xs text-white/70">
              <svg className="w-3.5 h-3.5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Unified Safety & Trust block inside the dark card */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <h4 className="font-serif text-base text-gold font-light mb-2">Sacred Devotion, Professional Safety</h4>
          <p className="font-sans text-xs text-white/60 leading-relaxed font-light">
            Over 30 years of experience, emergency wilderness medicine support, altitude adaptation stops, and full logistics handling.
          </p>
        </div>
      </div>
    </aside>
  );
}
