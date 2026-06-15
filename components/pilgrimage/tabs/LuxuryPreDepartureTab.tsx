"use client";

interface LuxuryPreDepartureTabProps {
  data: any;
  maxAltitude?: {
    display: string;
  };
}

export default function LuxuryPreDepartureTab({ data, maxAltitude }: LuxuryPreDepartureTabProps) {
  return (
    <div className="space-y-12">
      {/* Packing Categories */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Clothing Category Card */}
        <div className="bg-gradient-to-br from-stone-50 via-[#FAF9F6] to-white border border-midnight/5 border-t-gold-dark/30 border-t-2 rounded-xl p-6 md:p-8 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
          <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-midnight/5">
            <div className="w-10 h-10 rounded-full bg-gold-dark/10 border border-gold-dark/20 flex items-center justify-center text-gold-dark shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4a2 2 0 012 2c0 .733-.393 1.373-1 1.732V8.5l6.732 3.366A1 1 0 0120 12.764V19a2 2 0 01-2 2H6a2 2 0 01-2-2v-6.236a1 1 0 01.268-.898L11 8.5V7.732c-.607-.359-1-1-1-1.732a2 2 0 012-2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-serif text-lg text-midnight font-medium">Clothing Guide</h3>
              <p className="font-sans text-[10px] text-midnight/50 uppercase tracking-wider">What to wear & pack</p>
            </div>
          </div>
          <ul className="space-y-3.5">
            {data.clothing.map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-3 group">
                <div className="w-5 h-5 rounded-full bg-gold-dark/5 border border-gold-dark/15 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-gold-dark/10 group-hover:border-gold-dark/30 transition-all duration-300">
                  <svg className="w-2.5 h-2.5 text-gold-dark" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className="font-sans text-sm text-midnight/70 leading-relaxed font-light">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Essentials Category Card */}
        <div className="bg-gradient-to-br from-stone-50 via-[#FAF9F6] to-white border border-midnight/5 border-t-gold-dark/30 border-t-2 rounded-xl p-6 md:p-8 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
          <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-midnight/5">
            <div className="w-10 h-10 rounded-full bg-gold-dark/10 border border-gold-dark/20 flex items-center justify-center text-gold-dark shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12A2.25 2.25 0 0020.25 18V8.25A2.25 2.25 0 0018 6H6A2.25 2.25 0 003.75 8.25V18A2.25 2.25 0 006 20.25zm0-14.25v-1.5A1.5 1.5 0 017.5 3h9A1.5 1.5 0 0118 4.5v1.5m-9 9h6m-6 3h6" />
              </svg>
            </div>
            <div>
              <h3 className="font-serif text-lg text-midnight font-medium">Essential Gear</h3>
              <p className="font-sans text-[10px] text-midnight/50 uppercase tracking-wider">Required equipment</p>
            </div>
          </div>
          <ul className="space-y-3.5">
            {data.essentials.map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-3 group">
                <div className="w-5 h-5 rounded-full bg-gold-dark/5 border border-gold-dark/15 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-gold-dark/10 group-hover:border-gold-dark/30 transition-all duration-300">
                  <svg className="w-2.5 h-2.5 text-gold-dark" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className="font-sans text-sm text-midnight/70 leading-relaxed font-light">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Health Guidance */}
      <div className="pt-10 border-t border-midnight/5">
        <div className="flex items-center gap-3 mb-6">
          <svg className="w-5.5 h-5.5 text-gold-dark flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
          </svg>
          <h3 className="font-sans text-xs text-midnight/65 uppercase tracking-wider font-semibold">Health & Fitness Advisory</h3>
        </div>

        {/* Professional Disclaimer Banner */}
        <div className="mb-8 p-6 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border-l-4 border-gold-dark rounded-r-lg flex items-start gap-4 shadow-sm">
          <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 text-gold-dark">
            <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
          </div>
          <div className="space-y-1">
            <h4 className="font-serif text-base font-medium text-amber-900 leading-tight">High Altitude Medical Advisory</h4>
            <p className="font-sans text-xs text-amber-900/80 leading-relaxed font-light">
              Undertaking a trek at altitudes above {maxAltitude?.display || "3,500m"} requires excellent cardiovascular fitness and medical clearance. Please consult your physician before reserving your path.
            </p>
          </div>
        </div>

        {/* Health Advisory Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {data.health.map((item: string, index: number) => {
            // Find key phrases to highlight as bold prefixes
            let boldPrefix = "";
            let remainingText = item;
            
            if (item.toLowerCase().startsWith("symptoms:")) {
              boldPrefix = "Altitude Symptoms:";
              remainingText = item.substring(9).trim();
            } else if (item.toLowerCase().includes("medical examination")) {
              boldPrefix = "Medical Checkup:";
              remainingText = item;
            } else if (item.toLowerCase().includes("physically fit")) {
              boldPrefix = "Physical Fitness:";
              remainingText = item;
            } else if (item.toLowerCase().includes("asthma and heart")) {
              boldPrefix = "Cardiac & Respiratory:";
              remainingText = item;
            } else if (item.toLowerCase().includes("drink plenty")) {
              boldPrefix = "Hydration:";
              remainingText = item;
            } else if (item.toLowerCase().includes("do not drink")) {
              boldPrefix = "Acclimatization Care:";
              remainingText = item;
            } else if (item.toLowerCase().includes("carry diamox")) {
              boldPrefix = "Medication:";
              remainingText = item;
            } else if (item.toLowerCase().includes("gamow bag")) {
              boldPrefix = "Emergency Gear:";
              remainingText = item;
            }

            return (
              <div key={index} className="p-6 bg-[#FAF9F7] border border-midnight/5 border-l-2 border-l-gold-dark/60 shadow-ambient hover:shadow-card hover:-translate-y-0.5 hover:border-gold-dark/20 hover:border-l-gold-dark transition-all duration-300 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-gold-dark/5 border border-gold-dark/15 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-gold-dark" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    {boldPrefix && (
                      <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-gold-dark block mb-1">
                        {boldPrefix}
                      </span>
                    )}
                    <p className="font-sans text-sm text-midnight/70 leading-relaxed font-light">{remainingText}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Currency Information */}
      {data.currency && (
        <div className="p-8 bg-gradient-to-br from-[#FAF9F7] via-[#FAF9F7]/95 to-[#F5F4F0] border border-gold-dark/15 rounded-xl shadow-sm relative overflow-hidden text-midnight mt-8">
          {/* Subtle gold background graphics */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-gold-dark/5 blur-3xl pointer-events-none" />
          
          <div className="flex items-start gap-4 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-gold-dark/5 border border-gold-dark/15 flex items-center justify-center shrink-0 text-gold-dark">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.22.029a9.07 9.07 0 003.48-.1h.02a2.3 2.3 0 001.637-2.906l-.1-.402a2.3 2.3 0 00-2.907-1.638l-.78-.195a2.3 2.3 0 01-1.638-2.907l.1-.401a2.3 2.3 0 012.907-1.639l.784.196a9.079 9.079 0 013.483.087l.215.029m-3-1.62V3.75m0 16.5V20.25" />
              </svg>
            </div>
            <div>
              <h4 className="font-serif text-base text-midnight font-medium mb-1.5">Currency & Financial Guidelines</h4>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed font-light">{data.currency}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
