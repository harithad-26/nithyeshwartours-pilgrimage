"use client";

interface LuxuryBookingTabProps {
  data: any;
}

export default function LuxuryBookingTab({ data }: LuxuryBookingTabProps) {
  return (
    <div className="space-y-12">
      {/* Payment Timeline */}
      <div>
        <h3 className="font-sans text-xs text-midnight/50 uppercase tracking-wider mb-8 font-semibold">Payment Schedule</h3>
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-10 top-0 bottom-0 w-px bg-midnight/10" />

          <div className="space-y-6">
            {data.paymentSchedule.map((payment: any, index: number) => (
              <div key={index} className="relative flex gap-6 pb-6 last:pb-0">
                {/* Amount Circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-white border border-midnight/10 hover:border-gold-dark/30 hover:bg-gold-dark/5 flex flex-col items-center justify-center shadow-sm transition-all duration-300">
                    <div className="font-serif text-sm text-midnight font-semibold text-center px-1 leading-snug">
                      {payment.amount}
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 pt-3">
                  <h4 className="font-serif text-base text-midnight font-medium">{payment.stage}</h4>
                  <p className="font-sans text-xs text-midnight/65 font-light mt-1">{payment.due}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Required Documents */}
      <div className="pt-10 border-t border-midnight/5">
        <h3 className="font-sans text-xs text-midnight/55 uppercase tracking-wider mb-6 font-semibold">Required Documents</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {data.requiredDocuments.map((doc: string, index: number) => (
            <div 
              key={index} 
              className="flex items-start gap-4 p-5 bg-[#FAFAF9] border border-midnight/5 hover:border-gold-dark/20 hover:bg-[#F3F2EE] rounded-xl transition-all duration-300 group"
            >
              <div className="w-8 h-8 rounded-lg bg-gold-dark/5 border border-gold-dark/15 flex items-center justify-center text-gold-dark shrink-0 group-hover:scale-105 transition-transform">
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="font-sans text-sm text-midnight/70 leading-relaxed font-light pt-1">{doc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Important Notes */}
      {data.importantNotes && data.importantNotes.length > 0 && (
        <div className="p-6 bg-amber-50/50 border border-amber-200/30 rounded-xl relative overflow-hidden mt-8">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-gold-dark shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 111.063.852l-.708 2.836a.75.75 0 001.063.852l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
            </div>
            <div>
              <h4 className="font-serif text-base text-amber-900 mb-2 font-medium">Booking Guidelines</h4>
              <ul className="space-y-2.5">
                {data.importantNotes.map((note: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-900/40 mt-2 flex-shrink-0" />
                    <span className="font-sans text-sm text-amber-900/70 leading-relaxed font-light">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
