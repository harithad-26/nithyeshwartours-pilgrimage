const CERTIFICATIONS = [
  {
    name: "IATA Certified",
    description: "International Air Transport Association accreditation",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeWidth="1.5" />
        <polyline points="7.5 4.21 12 6.81 16.5 4.21" strokeWidth="1.5" />
        <polyline points="7.5 19.79 7.5 14.6 3 12" strokeWidth="1.5" />
        <polyline points="21 12 16.5 14.6 16.5 19.79" strokeWidth="1.5" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" strokeWidth="1.5" />
        <line x1="12" y1="22.08" x2="12" y2="12" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Ministry of Tourism Approved",
    description: "Government of India recognized tour operator",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="1.5" />
        <polyline points="14 2 14 8 20 8" strokeWidth="1.5" />
        <line x1="16" y1="13" x2="8" y2="13" strokeWidth="1.5" />
        <line x1="16" y1="17" x2="8" y2="17" strokeWidth="1.5" />
        <polyline points="10 9 9 9 8 9" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "ISO 9001:2015",
    description: "Quality management system certified",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "ASTA Member",
    description: "American Society of Travel Advisors",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
        <path d="M12 6v6l4 2" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Safe Travel Certified",
    description: "WTTC Safe Travels stamp for COVID protocols",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="1.5" />
        <path d="M9 12l2 2 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "TAAI Member",
    description: "Travel Agents Association of India",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="1.5" />
        <circle cx="9" cy="7" r="4" strokeWidth="1.5" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeWidth="1.5" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export function CertificationsSection() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4">
            Trusted & Certified
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal leading-snug mb-6">
            Global Standards, Local Expertise
          </h2>
          <p className="font-sans text-lg text-midnight/60 max-w-2xl mx-auto leading-relaxed">
            Our certifications and affiliations ensure you travel with confidence,
            backed by internationally recognized standards and industry best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, index) => (
            <div
              key={index}
              className="group p-8 rounded-lg border-2 border-midnight/10 hover:border-gold-dark/50 transition-all duration-300 hover:shadow-lg bg-surface/30"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300 text-gold-dark">
                  {cert.icon}
                </div>
                <h3 className="font-serif text-lg text-midnight font-normal mb-3">
                  {cert.name}
                </h3>
                <p className="font-sans text-sm text-midnight/60 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust statement */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-surface rounded-lg p-10 border-l-4 border-gold-dark">
            <h3 className="font-serif text-2xl text-midnight font-normal mb-4">
              Our Commitment to You
            </h3>
            <p className="font-sans text-base text-midnight/70 leading-relaxed mb-4">
              Every journey with Nithyeshwar Tours is backed by comprehensive travel insurance,
              24/7 emergency support, and adherence to the highest safety and quality standards.
              Your spiritual journey should be transformative, not worrisome.
            </p>
            <div className="flex flex-wrap gap-6 mt-6">
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gold-dark">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="22 4 12 14.01 9 11.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-sans text-sm text-midnight font-medium">100% Financial Protection</span>
              </div>
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gold-dark">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="22 4 12 14.01 9 11.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-sans text-sm text-midnight font-medium">24/7 Emergency Assistance</span>
              </div>
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gold-dark">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="22 4 12 14.01 9 11.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-sans text-sm text-midnight font-medium">Transparent Pricing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
