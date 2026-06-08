export default function TermsTab({ data }: { data: any }) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-3xl text-midnight font-normal mb-4">Terms & Conditions</h2>
        <p className="font-sans text-base text-midnight/60 leading-relaxed">
          Please read these terms carefully before booking. By proceeding with the booking, you agree to these conditions.
        </p>
      </div>

      {/* Cancellation Policy */}
      <div className="bg-white rounded-xl p-8 border border-midnight/10">
        <h3 className="font-serif text-2xl text-midnight font-normal mb-6 flex items-center gap-3">
          <span className="text-3xl">🔄</span>
          Cancellation & Refund Policy
        </h3>
        <div className="space-y-4">
          {data.cancellationPolicy.map((policy: any, index: number) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-surface-low rounded-lg border border-midnight/10"
            >
              <div className="flex-1">
                <p className="font-sans text-base font-semibold text-midnight mb-1">
                  {policy.timeBefore}
                </p>
                <p className="font-sans text-sm text-midnight/60">
                  before departure
                </p>
              </div>
              <div className="shrink-0">
                <span className={`inline-flex items-center font-sans text-sm font-semibold px-4 py-2 rounded-full ${
                  policy.refund.includes('No refund')
                    ? 'bg-red-100 text-red-700 border border-red-200'
                    : policy.refund.includes('75%')
                    ? 'bg-orange-100 text-orange-700 border border-orange-200'
                    : 'bg-green-100 text-green-700 border border-green-200'
                }`}>
                  {policy.refund}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 bg-orange-50 rounded-lg p-4 border border-orange-200">
          <p className="font-sans text-sm text-midnight/70 leading-relaxed">
            <strong className="text-midnight">Important:</strong> All cancellation notices must be sent in writing to our office. 
            Verbal cancellations will not be entertained. No refund will be made for incomplete yatra due to any reason.
          </p>
        </div>
      </div>

      {/* Travel Insurance */}
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border border-blue-200">
        <h3 className="font-serif text-2xl text-midnight font-normal mb-4 flex items-center gap-3">
          <span className="text-3xl">🛡️</span>
          Travel Insurance
        </h3>
        <p className="font-sans text-base text-midnight/70 leading-relaxed">
          {data.travelInsurance}
        </p>
        <div className="mt-4 grid md:grid-cols-2 gap-3">
          <div className="flex items-center gap-2 text-sm text-midnight/70">
            <span className="text-blue-600">✓</span>
            <span>Medical emergencies</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-midnight/70">
            <span className="text-blue-600">✓</span>
            <span>Helicopter evacuation</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-midnight/70">
            <span className="text-blue-600">✓</span>
            <span>Trip cancellation</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-midnight/70">
            <span className="text-blue-600">✓</span>
            <span>Personal accidents</span>
          </div>
        </div>
      </div>

      {/* Changes by Client */}
      <div className="bg-white rounded-xl p-6 border border-midnight/10">
        <h4 className="font-sans text-base font-semibold text-midnight mb-3 flex items-center gap-2">
          <span className="text-xl">📝</span>
          Changes by You
        </h4>
        <p className="font-sans text-sm text-midnight/70 leading-relaxed">
          {data.changes}
        </p>
      </div>

      {/* Company Cancellation Rights */}
      <div className="bg-white rounded-xl p-6 border border-midnight/10">
        <h4 className="font-sans text-base font-semibold text-midnight mb-3 flex items-center gap-2">
          <span className="text-xl">🏢</span>
          Company Rights
        </h4>
        <p className="font-sans text-sm text-midnight/70 leading-relaxed">
          {data.companyRights}
        </p>
      </div>

      {/* Refund Policy */}
      <div className="bg-white rounded-xl p-6 border border-midnight/10">
        <h4 className="font-sans text-base font-semibold text-midnight mb-3 flex items-center gap-2">
          <span className="text-xl">💰</span>
          Refund Policy
        </h4>
        <p className="font-sans text-sm text-midnight/70 leading-relaxed">
          {data.refundPolicy}
        </p>
      </div>

      {/* Age Restriction */}
      <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
        <div className="flex items-start gap-4">
          <span className="text-3xl">⚠️</span>
          <div>
            <h4 className="font-sans text-base font-semibold text-midnight mb-2">Age Restriction</h4>
            <p className="font-sans text-sm text-midnight/70 leading-relaxed">
              {data.ageRestriction}
            </p>
          </div>
        </div>
      </div>

      {/* Important Legal Points */}
      <div className="bg-surface-low rounded-xl p-6 border border-midnight/10">
        <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-midnight/70 mb-4">
          Important Legal Points
        </h4>
        <ul className="space-y-3 font-sans text-sm text-midnight/70 leading-relaxed">
          <li className="flex items-start gap-3">
            <span className="text-midnight mt-1">•</span>
            <span>
              These terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of courts in India.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-midnight mt-1">•</span>
            <span>
              The company reserves the right to modify these terms and conditions at any time without prior notice.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-midnight mt-1">•</span>
            <span>
              By booking this tour, you acknowledge that you have read, understood, and agreed to all terms and conditions.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-midnight mt-1">•</span>
            <span>
              In case of any clarification or dispute, the company's decision shall be final and binding.
            </span>
          </li>
        </ul>
      </div>

      {/* Contact for Queries */}
      <div className="bg-gradient-to-r from-midnight to-midnight/95 rounded-xl p-8 text-center">
        <h3 className="font-serif text-2xl text-white font-light mb-4">Questions About Our Terms?</h3>
        <p className="font-sans text-base text-white/70 mb-6 max-w-2xl mx-auto">
          If you have any questions or need clarification on any of these terms, please contact us before booking.
        </p>
        <a
          href="tel:+917200118411"
          className="inline-flex items-center gap-2 font-sans text-sm font-semibold bg-gold text-midnight px-8 py-4 rounded-full hover:bg-gold-light transition-colors"
        >
          <span>📞</span>
          Call: +91 72001 18411
        </a>
      </div>
    </div>
  );
}
