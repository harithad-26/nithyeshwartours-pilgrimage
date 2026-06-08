export default function PreDepartureTab({ data }: { data: any }) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-3xl text-midnight font-normal mb-4">Pre-Departure Information</h2>
        <p className="font-sans text-base text-midnight/60 leading-relaxed">
          Essential preparation guide for your Kailash Mansarovar Yatra. Review this carefully before departure.
        </p>
      </div>

      {/* Clothing Checklist */}
      <div className="bg-white rounded-xl p-8 border border-midnight/10">
        <h3 className="font-serif text-2xl text-midnight font-normal mb-6 flex items-center gap-3">
          <span className="text-3xl">👕</span>
          Clothing Checklist
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {data.clothing.map((item: string, index: number) => (
            <label
              key={index}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface-low transition-colors cursor-pointer group"
            >
              <input
                type="checkbox"
                className="mt-1 w-4 h-4 rounded border-midnight/30 text-gold-dark focus:ring-gold-dark"
              />
              <span className="font-sans text-sm text-midnight/70 leading-relaxed group-hover:text-midnight">
                {item}
              </span>
            </label>
          ))}
        </div>
        <div className="mt-6 bg-orange-50 rounded-lg p-4 border border-orange-200">
          <p className="font-sans text-sm text-midnight/70 leading-relaxed">
            <strong className="text-midnight">Important for Women:</strong> Indian pilgrims are strictly advised 
            not to wear Sari during this yatra. Wear comfortable pants and warm clothing suitable for trekking.
          </p>
        </div>
      </div>

      {/* Essential Items */}
      <div className="bg-gradient-to-br from-gold/5 to-transparent rounded-xl p-8 border border-gold/20">
        <h3 className="font-serif text-2xl text-midnight font-normal mb-6 flex items-center gap-3">
          <span className="text-3xl">🎒</span>
          Essential Items to Bring
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {data.essentials.map((item: string, index: number) => (
            <label
              key={index}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/60 transition-colors cursor-pointer group"
            >
              <input
                type="checkbox"
                className="mt-1 w-4 h-4 rounded border-midnight/30 text-gold-dark focus:ring-gold-dark"
              />
              <span className="font-sans text-sm text-midnight/70 leading-relaxed group-hover:text-midnight">
                {item}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Health & Fitness */}
      <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-8 border border-red-200">
        <h3 className="font-serif text-2xl text-midnight font-normal mb-6 flex items-center gap-3">
          <span className="text-3xl">❤️</span>
          Health & Fitness Requirements
        </h3>
        <div className="space-y-4">
          {data.health.map((item: string, index: number) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-white rounded-lg border border-red-100"
            >
              <span className="text-red-600 text-xl mt-0.5">•</span>
              <p className="font-sans text-base text-midnight/70 leading-relaxed flex-1">
                {item}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-6 bg-red-100 rounded-lg p-6 border border-red-300">
          <div className="flex items-start gap-4">
            <span className="text-3xl">⚠️</span>
            <div>
              <h4 className="font-sans text-base font-semibold text-midnight mb-2">
                Medical Examination Mandatory
              </h4>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                This is one of the toughest high-altitude journeys on earth. You <strong>must be physically fit</strong>. 
                Patients with asthma and heart problems often have acclimatization issues. Medical examination by your 
                doctor is essential before booking to assess your ability to handle extreme conditions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Currency Information */}
      <div className="bg-white rounded-xl p-6 border border-midnight/10">
        <h4 className="font-sans text-base font-semibold text-midnight mb-3 flex items-center gap-2">
          <span className="text-2xl">💱</span>
          Currency Information
        </h4>
        <p className="font-sans text-sm text-midnight/70 leading-relaxed">
          {data.currency}
        </p>
      </div>

      {/* Altitude Sickness Guide */}
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border border-blue-200">
        <h3 className="font-serif text-2xl text-midnight font-normal mb-4 flex items-center gap-3">
          <span className="text-3xl">🏔️</span>
          Altitude Sickness - What to Know
        </h3>
        <p className="font-sans text-base text-midnight/70 leading-relaxed mb-6">
          As you travel over high terrain, you're likely to experience altitude sickness symptoms. This is normal 
          and can take a few days for your body to adjust.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6">
            <h4 className="font-sans text-sm font-semibold text-midnight mb-3">Common Symptoms</h4>
            <ul className="space-y-2 text-sm text-midnight/70">
              <li>• Headache</li>
              <li>• Loss of appetite</li>
              <li>• Nausea</li>
              <li>• Exhaustion</li>
              <li>• Sleeplessness</li>
              <li>• Breathlessness</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h4 className="font-sans text-sm font-semibold text-midnight mb-3">Prevention</h4>
            <ul className="space-y-2 text-sm text-midnight/70">
              <li>• Drink plenty of water</li>
              <li>• Stay calm, don't exercise</li>
              <li>• No alcohol or smoking</li>
              <li>• Carry Diamox tablets</li>
              <li>• Gradual acclimatization</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h4 className="font-sans text-sm font-semibold text-midnight mb-3">We Provide</h4>
            <ul className="space-y-2 text-sm text-midnight/70">
              <li>• Gamow bag equipment</li>
              <li>• Oxygen cylinders</li>
              <li>• Medical kit</li>
              <li>• Expert guide support</li>
              <li>• 2 nights at Mansarovar</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Final Preparation Tips */}
      <div className="bg-midnight rounded-xl p-8 text-white">
        <h3 className="font-serif text-2xl font-light mb-6 flex items-center gap-3">
          <span className="text-3xl">✨</span>
          Final Preparation Tips
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-gold-light mb-3">
              Before You Leave
            </h4>
            <ul className="space-y-2 text-sm text-white/80 leading-relaxed">
              <li>• Complete medical check-up 2 weeks before departure</li>
              <li>• Start light cardio exercises 1 month prior</li>
              <li>• Avoid alcohol and smoking 2 weeks before</li>
              <li>• Keep passport and documents ready</li>
              <li>• Inform family about itinerary and contacts</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-gold-light mb-3">
              Mental Preparation
            </h4>
            <ul className="space-y-2 text-sm text-white/80 leading-relaxed">
              <li>• This is a pilgrimage, not a vacation tour</li>
              <li>• Be prepared for hardships and unpredictable situations</li>
              <li>• Maintain positive attitude and patience</li>
              <li>• Respect local customs and traditions</li>
              <li>• Stay with the group and follow guide instructions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact for Help */}
      <div className="bg-surface-low rounded-xl p-6 border border-midnight/10 text-center">
        <p className="font-sans text-base text-midnight/70 mb-4">
          Need help with preparation or have questions?
        </p>
        <a
          href="https://wa.me/917200118411"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-sans text-sm font-semibold bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp for Pre-Departure Help
        </a>
      </div>
    </div>
  );
}
