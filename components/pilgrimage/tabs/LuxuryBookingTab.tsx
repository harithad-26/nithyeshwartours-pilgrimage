"use client";

interface LuxuryBookingTabProps {
  data: any;
}

export default function LuxuryBookingTab({ data }: LuxuryBookingTabProps) {
  return (
    <div className="space-y-12">
      {/* Payment Timeline */}
      <div>
        <h3 className="font-sans text-xs text-midnight/65 uppercase tracking-wider mb-8">Payment Schedule</h3>
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-10 top-0 bottom-0 w-px bg-midnight/10" />

          <div className="space-y-4">
            {data.paymentSchedule.map((payment: any, index: number) => (
              <div key={index} className="relative flex gap-6 pb-6 last:pb-0">
                {/* Amount Circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-white border border-midnight/10 flex flex-col items-center justify-center">
                    <div className="font-serif text-sm text-midnight font-medium text-center px-1">{payment.amount}</div>
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 pt-4">
                  <h4 className="font-serif text-base text-midnight mb-1 font-medium">{payment.stage}</h4>
                  <p className="font-sans text-xs text-midnight/70 font-light">{payment.due}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Required Documents */}
      <div className="pt-8 border-t border-midnight/5">
        <h3 className="font-sans text-xs text-midnight/65 uppercase tracking-wider mb-6">Required Documents</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {data.requiredDocuments.map((doc: string, index: number) => (
            <div key={index} className="flex items-start gap-3.5 p-5 bg-[#FAFAF9] border border-midnight/5">
              <svg className="w-4 h-4 text-gold-dark mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="font-sans text-sm text-midnight/70 leading-relaxed font-light">{doc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Important Notes */}
      {data.importantNotes && data.importantNotes.length > 0 && (
        <div className="p-6 bg-amber-50/50 border border-amber-200/30">
          <h4 className="font-sans text-xs text-amber-900/60 uppercase tracking-wider mb-3">Important Notes</h4>
          <ul className="space-y-2.5">
            {data.importantNotes.map((note: string, index: number) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-900/40 mt-2 flex-shrink-0" />
                <span className="font-sans text-sm text-amber-900/70 leading-relaxed font-light">{note}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
