'use client';

import { useState } from 'react';

export default function PremiumPreDepartureTab({ data }: { data: any }) {
  const [openSection, setOpenSection] = useState<string | null>('clothing');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="space-y-0">
      {/* Introduction */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-midnight mb-4">Prepare for Your Journey</h2>
          <p className="font-sans text-base text-midnight/60 leading-relaxed">
            Essential preparation guide for your Kailash Mansarovar Yatra. Review carefully before departure.
          </p>
        </div>
      </section>

      {/* Accordion Sections */}
      <section className="px-6 md:px-12 pb-12 bg-white">
        <div className="max-w-4xl mx-auto space-y-2">
          
          {/* Clothing */}
          <div className="border border-midnight/10 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('clothing')}
              className="w-full flex items-center justify-between p-6 bg-surface-low hover:bg-surface transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">👕</span>
                <h3 className="font-serif text-xl text-midnight">Clothing Checklist</h3>
              </div>
              <svg
                className={`w-5 h-5 text-midnight/50 transition-transform ${openSection === 'clothing' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openSection === 'clothing' && (
              <div className="p-6 bg-white border-t border-midnight/5">
                <div className="grid md:grid-cols-2 gap-3">
                  {data.clothing.map((item: string, index: number) => (
                    <div key={index} className="flex items-start gap-3 py-2">
                      <span className="text-gold-dark text-sm mt-0.5">✓</span>
                      <span className="font-sans text-sm text-midnight/80 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-orange-50 rounded-lg p-4 border border-orange-200">
                  <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                    <strong className="text-midnight">Important for Women:</strong> Indian pilgrims are strictly advised 
                    not to wear Sari during this yatra. Wear comfortable pants and warm clothing suitable for trekking.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Essential Items */}
          <div className="border border-midnight/10 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('essentials')}
              className="w-full flex items-center justify-between p-6 bg-surface-low hover:bg-surface transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎒</span>
                <h3 className="font-serif text-xl text-midnight">Essential Items</h3>
              </div>
              <svg
                className={`w-5 h-5 text-midnight/50 transition-transform ${openSection === 'essentials' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openSection === 'essentials' && (
              <div className="p-6 bg-white border-t border-midnight/5">
                <div className="grid md:grid-cols-2 gap-3">
                  {data.essentials.map((item: string, index: number) => (
                    <div key={index} className="flex items-start gap-3 py-2">
                      <span className="text-gold-dark text-sm mt-0.5">✓</span>
                      <span className="font-sans text-sm text-midnight/80 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Health & Medical */}
          <div className="border border-midnight/10 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('health')}
              className="w-full flex items-center justify-between p-6 bg-surface-low hover:bg-surface transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">❤️</span>
                <h3 className="font-serif text-xl text-midnight">Health & Medical</h3>
              </div>
              <svg
                className={`w-5 h-5 text-midnight/50 transition-transform ${openSection === 'health' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openSection === 'health' && (
              <div className="p-6 bg-white border-t border-midnight/5">
                <div className="space-y-4">
                  {data.health.map((item: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-red-600 text-xl mt-0.5">•</span>
                      <p className="font-sans text-sm text-midnight/80 leading-relaxed flex-1">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-red-50 rounded-lg p-4 border border-red-200">
                  <h4 className="font-sans text-sm font-semibold text-midnight mb-2">Medical Examination Mandatory</h4>
                  <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                    This is one of the toughest high-altitude journeys. You must be physically fit. Patients with asthma 
                    and heart problems often have acclimatization issues. Medical examination by your doctor is essential 
                    before booking.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Documents */}
          <div className="border border-midnight/10 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('documents')}
              className="w-full flex items-center justify-between p-6 bg-surface-low hover:bg-surface transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">📄</span>
                <h3 className="font-serif text-xl text-midnight">Documents & Currency</h3>
              </div>
              <svg
                className={`w-5 h-5 text-midnight/50 transition-transform ${openSection === 'documents' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openSection === 'documents' && (
              <div className="p-6 bg-white border-t border-midnight/5 space-y-4">
                <div>
                  <h4 className="font-sans text-sm font-semibold text-midnight mb-3">Required Documents</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <span className="text-gold-dark">✓</span>
                      <span className="font-sans text-sm text-midnight/80">Original Passport (valid 6 months)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-gold-dark">✓</span>
                      <span className="font-sans text-sm text-midnight/80">Passport size photos (4 copies)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-gold-dark">✓</span>
                      <span className="font-sans text-sm text-midnight/80">Travel insurance copy</span>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-midnight/5">
                  <h4 className="font-sans text-sm font-semibold text-midnight mb-2">Currency Information</h4>
                  <p className="font-sans text-sm text-midnight/70 leading-relaxed">{data.currency}</p>
                </div>
              </div>
            )}
          </div>

          {/* Altitude Sickness */}
          <div className="border border-midnight/10 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleSection('altitude')}
              className="w-full flex items-center justify-between p-6 bg-surface-low hover:bg-surface transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏔️</span>
                <h3 className="font-serif text-xl text-midnight">Altitude Sickness Guide</h3>
              </div>
              <svg
                className={`w-5 h-5 text-midnight/50 transition-transform ${openSection === 'altitude' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openSection === 'altitude' && (
              <div className="p-6 bg-white border-t border-midnight/5">
                <p className="font-sans text-sm text-midnight/70 leading-relaxed mb-6">
                  Altitude sickness symptoms are common and normal. Your body needs time to adjust to high terrain.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-midnight/60 mb-3">Symptoms</h4>
                    <ul className="space-y-2 text-sm text-midnight/70">
                      <li>• Headache</li>
                      <li>• Loss of appetite</li>
                      <li>• Nausea</li>
                      <li>• Exhaustion</li>
                      <li>• Sleeplessness</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-midnight/60 mb-3">Prevention</h4>
                    <ul className="space-y-2 text-sm text-midnight/70">
                      <li>• Drink plenty of water</li>
                      <li>• Stay calm, avoid exercise</li>
                      <li>• No alcohol or smoking</li>
                      <li>• Carry Diamox tablets</li>
                      <li>• Gradual acclimatization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-midnight/60 mb-3">We Provide</h4>
                    <ul className="space-y-2 text-sm text-midnight/70">
                      <li>• Gamow bag equipment</li>
                      <li>• Oxygen cylinders</li>
                      <li>• Medical kit</li>
                      <li>• Expert guide support</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Final Tips */}
      <section className="py-12 px-6 md:px-12 bg-midnight">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl text-white mb-8">Final Preparation Tips</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-light mb-4">Before You Leave</h4>
              <ul className="space-y-3 text-sm text-white/80 leading-relaxed">
                <li>• Complete medical check-up 2 weeks before</li>
                <li>• Start light cardio exercises 1 month prior</li>
                <li>• Avoid alcohol and smoking 2 weeks before</li>
                <li>• Keep documents ready and organized</li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold-light mb-4">Mental Preparation</h4>
              <ul className="space-y-3 text-sm text-white/80 leading-relaxed">
                <li>• This is a pilgrimage, not a vacation</li>
                <li>• Be prepared for hardships</li>
                <li>• Maintain positive attitude</li>
                <li>• Follow guide instructions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
