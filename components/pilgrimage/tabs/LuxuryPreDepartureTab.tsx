"use client";

interface LuxuryPreDepartureTabProps {
  data: any;
}

export default function LuxuryPreDepartureTab({ data }: LuxuryPreDepartureTabProps) {
  return (
    <div className="space-y-12">
      {/* Packing Categories */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Clothing Category */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-5.5 h-5.5 text-gold-dark flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4a2 2 0 012 2c0 .733-.393 1.373-1 1.732V8.5l6.732 3.366A1 1 0 0120 12.764V19a2 2 0 01-2 2H6a2 2 0 01-2-2v-6.236a1 1 0 01.268-.898L11 8.5V7.732c-.607-.359-1-1-1-1.732a2 2 0 012-2z" />
            </svg>
            <h3 className="font-sans text-xs text-midnight/65 uppercase tracking-wider font-semibold">Clothing Guide</h3>
          </div>
          <ul className="space-y-3">
            {data.clothing.map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-dark mt-2 flex-shrink-0" />
                <span className="font-sans text-sm text-midnight/70 leading-relaxed font-light">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Essentials Category */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <svg className="w-5.5 h-5.5 text-gold-dark flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12A2.25 2.25 0 0020.25 18V8.25A2.25 2.25 0 0018 6H6A2.25 2.25 0 003.75 8.25V18A2.25 2.25 0 006 20.25zm0-14.25v-1.5A1.5 1.5 0 017.5 3h9A1.5 1.5 0 0118 4.5v1.5m-9 9h6m-6 3h6" />
            </svg>
            <h3 className="font-sans text-xs text-midnight/65 uppercase tracking-wider font-semibold">Essential Packing Items</h3>
          </div>
          <ul className="space-y-3">
            {data.essentials.map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-dark mt-2 flex-shrink-0" />
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
        <div className="mb-8 p-6 bg-amber-50/45 border-l-2 border-gold-dark flex items-start gap-4">
          <svg className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
          <div className="space-y-1.5">
            <h4 className="font-serif text-sm font-medium text-amber-900">High Altitude Medical Advisory</h4>
            <p className="font-sans text-xs text-amber-900/70 leading-relaxed">
              Undertaking a trek at altitudes above 4,500m requires excellent cardiovascular fitness and medical clearance. Please consult your physician before reserving your path.
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
              <div key={index} className="p-6 bg-white border border-midnight/5 shadow-ambient hover:border-gold-dark/10 transition-all rounded">
                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-gold-dark/5 border border-gold-dark/15 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-gold-dark" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
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
        <div className="p-6 bg-blue-50/20 border border-blue-200/10 rounded">
          <h4 className="font-sans text-xs text-blue-900/60 uppercase tracking-wider mb-2 font-semibold">Currency Information</h4>
          <p className="font-sans text-sm text-blue-900/70 leading-relaxed font-light">{data.currency}</p>
        </div>
      )}
    </div>
  );
}
