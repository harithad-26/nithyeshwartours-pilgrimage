export default function BookingTab({ data }: { data: any }) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-3xl text-midnight font-normal mb-4">Booking & Payment</h2>
        <p className="font-sans text-base text-midnight/60 leading-relaxed">
          Everything you need to know about booking your pilgrimage and payment procedures.
        </p>
      </div>

      {/* Required Documents */}
      <div className="bg-white rounded-xl p-8 border border-midnight/10">
        <h3 className="font-serif text-2xl text-midnight font-normal mb-6 flex items-center gap-3">
          <span className="text-3xl">📄</span>
          Required Documents
        </h3>
        <ul className="space-y-3">
          {data.requiredDocuments.map((doc: string, index: number) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-gold-dark text-lg mt-1">✓</span>
              <span className="font-sans text-base text-midnight/70 leading-relaxed flex-1">
                {doc}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Payment Schedule */}
      <div className="bg-gradient-to-br from-gold/5 to-transparent rounded-xl p-8 border border-gold/20">
        <h3 className="font-serif text-2xl text-midnight font-normal mb-6 flex items-center gap-3">
          <span className="text-3xl">💳</span>
          Payment Schedule
        </h3>
        <div className="space-y-4">
          {data.paymentSchedule.map((payment: any, index: number) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-gold/10 hover:border-gold-dark/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-sans text-base font-semibold text-midnight mb-1">
                    {payment.stage}
                  </h4>
                  <p className="font-sans text-sm text-midnight/60">
                    {payment.due}
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="inline-flex items-center font-serif text-xl font-medium text-gold-dark bg-gold/10 px-6 py-2 rounded-full border border-gold/30">
                    {payment.amount}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Important Notes */}
      {data.importantNotes && data.importantNotes.length > 0 && (
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
          <div className="flex items-start gap-4">
            <span className="text-3xl">💡</span>
            <div className="flex-1">
              <h4 className="font-sans text-sm font-semibold text-midnight mb-4">Important Notes</h4>
              <ul className="space-y-3">
                {data.importantNotes.map((note: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-600 text-sm mt-1">•</span>
                    <span className="font-sans text-sm text-midnight/70 leading-relaxed flex-1">
                      {note}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* How to Book - Step by Step */}
      <div className="bg-white rounded-xl p-8 border border-midnight/10">
        <h3 className="font-serif text-2xl text-midnight font-normal mb-6">How to Book</h3>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 rounded-full bg-gold text-midnight flex items-center justify-center font-sans text-lg font-bold">
              1
            </div>
            <div>
              <h4 className="font-sans text-base font-semibold text-midnight mb-2">
                Submit Documents
              </h4>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                Send scanned passport copy to our office at least 30 days before departure. Ensure passport 
                is valid for minimum 6 months and participant age is between 10-70 years.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 rounded-full bg-gold text-midnight flex items-center justify-center font-sans text-lg font-bold">
              2
            </div>
            <div>
              <h4 className="font-sans text-base font-semibold text-midnight mb-2">
                Make Booking Payment
              </h4>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                Pay 25% of total cost to confirm your booking. We'll start processing your permits and arrangements.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 rounded-full bg-gold text-midnight flex items-center justify-center font-sans text-lg font-bold">
              3
            </div>
            <div>
              <h4 className="font-sans text-base font-semibold text-midnight mb-2">
                Second Payment
              </h4>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                Transfer 50% of total cost 15 days before departure along with original passport to Delhi office.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 rounded-full bg-gold text-midnight flex items-center justify-center font-sans text-lg font-bold">
              4
            </div>
            <div>
              <h4 className="font-sans text-base font-semibold text-midnight mb-2">
                Final Payment
              </h4>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                Complete full payment 10 days before departure. Original passport must reach Delhi office by this time.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-sans text-lg font-bold">
              ✓
            </div>
            <div>
              <h4 className="font-sans text-base font-semibold text-midnight mb-2">
                Ready to Go!
              </h4>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                Your booking is confirmed. You'll receive all pre-departure information and final instructions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-midnight to-midnight/95 rounded-xl p-8 text-center">
        <h3 className="font-serif text-2xl text-white font-light mb-4">Ready to Book Your Pilgrimage?</h3>
        <p className="font-sans text-base text-white/70 mb-6 max-w-2xl mx-auto">
          Contact us today for booking assistance and any questions about the payment process.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="/inquiry"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold bg-gold text-midnight px-8 py-4 rounded-full hover:bg-gold-light transition-colors"
          >
            Book Now
          </a>
          <a
            href="https://wa.me/917200118411"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-white border-2 border-white/40 px-8 py-4 rounded-full hover:bg-white/10 hover:border-white transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
}
