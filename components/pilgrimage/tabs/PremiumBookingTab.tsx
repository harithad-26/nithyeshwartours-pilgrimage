export default function PremiumBookingTab({ data }: { data: any }) {
  return (
    <div className="space-y-0">
      {/* Booking Process Flow */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-midnight mb-4">Booking Process</h2>
          <p className="font-sans text-base text-midnight/60 leading-relaxed mb-12">
            Simple five-step journey from inquiry to departure
          </p>
          
          {/* Process Flow */}
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute left-5 top-0 bottom-0 w-px bg-midnight/10" />
            
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-midnight text-white flex items-center justify-center font-sans text-sm font-bold z-10 relative">
                    1
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-serif text-xl text-midnight mb-2">Booking Request</h3>
                    <p className="font-sans text-sm text-midnight/70 leading-relaxed mb-3">
                      Submit your inquiry with travel dates and group size. We'll confirm availability and share detailed itinerary.
                    </p>
                    <div className="inline-flex items-center gap-2 bg-surface px-3 py-1.5 rounded-full">
                      <span className="font-sans text-xs text-midnight/60">Timeline: Day 1</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-midnight text-white flex items-center justify-center font-sans text-sm font-bold z-10 relative">
                    2
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-serif text-xl text-midnight mb-2">Document Submission</h3>
                    <p className="font-sans text-sm text-midnight/70 leading-relaxed mb-3">
                      Send scanned passport copy. Passport must be valid for 6 months. Age requirement: 10-70 years.
                    </p>
                    <div className="inline-flex items-center gap-2 bg-surface px-3 py-1.5 rounded-full">
                      <span className="font-sans text-xs text-midnight/60">Timeline: 30 days before departure</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-midnight text-white flex items-center justify-center font-sans text-sm font-bold z-10 relative">
                    3
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-serif text-xl text-midnight mb-2">Initial Payment</h3>
                    <p className="font-sans text-sm text-midnight/70 leading-relaxed mb-3">
                      Pay 25% of total cost to confirm your booking. We begin permit processing and hotel reservations.
                    </p>
                    <div className="inline-flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full border border-gold/30">
                      <span className="font-sans text-sm font-semibold text-gold-dark">25% Payment</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-midnight text-white flex items-center justify-center font-sans text-sm font-bold z-10 relative">
                    4
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-serif text-xl text-midnight mb-2">Second Payment</h3>
                    <p className="font-sans text-sm text-midnight/70 leading-relaxed mb-3">
                      Transfer 50% of total cost. Original passport must reach our Delhi office by this time.
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="inline-flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full border border-gold/30">
                        <span className="font-sans text-sm font-semibold text-gold-dark">50% Payment</span>
                      </div>
                      <div className="inline-flex items-center gap-2 bg-surface px-3 py-1.5 rounded-full">
                        <span className="font-sans text-xs text-midnight/60">15 days before departure</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="relative">
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-sans text-lg font-bold z-10 relative">
                    ✓
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-serif text-xl text-midnight mb-2">Final Payment & Departure</h3>
                    <p className="font-sans text-sm text-midnight/70 leading-relaxed mb-3">
                      Complete remaining 25% payment. Receive final instructions and pre-departure briefing. You're ready to begin your pilgrimage.
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="inline-flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full border border-gold/30">
                        <span className="font-sans text-sm font-semibold text-gold-dark">25% Payment</span>
                      </div>
                      <div className="inline-flex items-center gap-2 bg-surface px-3 py-1.5 rounded-full">
                        <span className="font-sans text-xs text-midnight/60">10 days before departure</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-12 px-6 md:px-12 bg-surface border-t border-midnight/5">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-midnight/50 mb-6">Required Documents</h3>
          <div className="bg-white rounded-lg border border-midnight/5 divide-y divide-midnight/5">
            {data.requiredDocuments.map((doc: string, index: number) => (
              <div key={index} className="py-4 px-6 flex items-start gap-3">
                <span className="text-gold-dark mt-0.5">✓</span>
                <span className="font-sans text-sm text-midnight/80 leading-relaxed flex-1">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      {data.importantNotes && data.importantNotes.length > 0 && (
        <section className="py-12 px-6 md:px-12 bg-blue-50 border-t border-blue-100">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="shrink-0 text-2xl">💡</div>
              <div className="flex-1">
                <h3 className="font-sans text-sm font-semibold text-midnight mb-4">Important Notes</h3>
                <div className="space-y-3">
                  {data.importantNotes.map((note: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-midnight/30 text-sm mt-1">•</span>
                      <p className="font-sans text-sm text-midnight/70 leading-relaxed flex-1">{note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 px-6 md:px-12 bg-midnight">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-serif text-3xl text-white mb-4">Ready to Book Your Pilgrimage?</h3>
          <p className="font-sans text-base text-white/70 mb-8 max-w-2xl mx-auto">
            Contact us for booking assistance and any questions about the payment process.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/inquiry"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold bg-gold text-midnight px-8 py-4 rounded-md hover:bg-gold-light transition-colors"
            >
              Submit Inquiry
            </a>
            <a
              href="https://wa.me/917200118411"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium text-white border border-white/40 px-8 py-4 rounded-md hover:bg-white/10 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
