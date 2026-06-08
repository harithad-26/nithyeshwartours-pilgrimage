export default function IncludesTab({
  inclusions,
  exclusions,
}: {
  inclusions: string[];
  exclusions: string[];
}) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-3xl text-midnight font-normal mb-4">What's Included & Excluded</h2>
        <p className="font-sans text-base text-midnight/60 leading-relaxed">
          Clear breakdown of what's covered in your package price and what requires additional payment.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Inclusions */}
        <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 border border-green-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-midnight font-normal">Cost Includes</h3>
          </div>
          
          <ul className="space-y-3">
            {inclusions.map((item, index) => (
              <li key={index} className="flex items-start gap-3 group">
                <span className="text-green-600 text-lg mt-0.5 group-hover:scale-110 transition-transform">✓</span>
                <span className="font-sans text-sm text-midnight/80 leading-relaxed flex-1">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Exclusions */}
        <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-8 border border-orange-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-midnight font-normal">Cost Excludes</h3>
          </div>
          
          <ul className="space-y-3">
            {exclusions.map((item, index) => (
              <li key={index} className="flex items-start gap-3 group">
                <span className="text-orange-600 text-lg mt-0.5 group-hover:scale-110 transition-transform">✗</span>
                <span className="font-sans text-sm text-midnight/80 leading-relaxed flex-1">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Important Note */}
      <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h4 className="font-sans text-sm font-semibold text-midnight mb-2">Important Note</h4>
            <p className="font-sans text-sm text-midnight/70 leading-relaxed">
              Please review both inclusions and exclusions carefully. Budget for additional expenses not covered 
              in the package. We recommend carrying at least INR 50,000 for contingencies and personal expenses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
