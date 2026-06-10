"use client";

interface LuxuryOverviewTabProps {
  data: any;
}

export default function LuxuryOverviewTab({ data }: LuxuryOverviewTabProps) {
  return (
    <div className="space-y-12">
      {/* Editorial Hero */}
      <div>
        <p className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-gold-dark mb-4">The Sacred Calling</p>
        <h3 className="font-serif text-2xl md:text-3xl text-midnight font-light leading-snug">
          {data.description}
        </h3>
      </div>

      {/* Key Details Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-10 border-t border-midnight/10">
        {[
          { label: "Route", value: data.overview.route },
          { label: "Duration", value: data.duration.display },
          { label: "Difficulty", value: data.difficulty },
          { label: "Maximum Altitude", value: data.maxAltitude.display },
          { label: "Best Season", value: data.bestSeason.join(", ") },
          { label: "Starting Point", value: data.startingPoint },
        ].map((item) => (
          <div key={item.label} className="space-y-1.5">
            <span className="font-sans text-[10px] text-midnight/65 uppercase tracking-wider block">
              {item.label}
            </span>
            <span className="font-sans text-sm text-midnight font-medium leading-relaxed block">
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* Experience Highlights */}
      <div className="bg-[#faf9f8] p-8 border border-midnight/5">
        <p className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-midnight mb-6">
          Experience Highlights
        </p>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
          {data.overview.highlights.map((highlight: string, index: number) => (
            <div key={index} className="flex items-start gap-3.5">
              <svg className="w-4 h-4 text-gold-dark mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-sans text-sm text-midnight/70 leading-relaxed font-light">
                {highlight}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

