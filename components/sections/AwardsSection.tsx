const AWARDS = [
  {
    year: "2023",
    title: "Best Spiritual Travel Company",
    organization: "Indian Tourism Awards",
    description: "Recognized for excellence in pilgrimage tourism and cultural preservation",
  },
  {
    year: "2022",
    title: "Excellence in Customer Service",
    organization: "Travel & Leisure India",
    description: "Awarded for outstanding pilgrim care and satisfaction",
  },
  {
    year: "2021",
    title: "Sustainable Tourism Award",
    organization: "Ministry of Tourism, Government of India",
    description: "For responsible and eco-friendly pilgrimage practices",
  },
  {
    year: "2020",
    title: "Heritage Tourism Leader",
    organization: "Asia Pacific Travel Association",
    description: "Leading heritage and cultural tourism experiences",
  },
];

export function AwardsSection() {
  return (
    <section className="py-32 px-6 bg-surface-low">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4">
            Recognition & Accolades
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal leading-snug mb-6">
            Honored by the Industry
          </h2>
          <p className="font-sans text-lg text-midnight/60 max-w-2xl mx-auto leading-relaxed">
            Our commitment to authentic spiritual experiences and exceptional service
            has earned us recognition from prestigious institutions across the industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {AWARDS.map((award, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 border border-transparent hover:border-gold-dark/30 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <div className="flex items-start gap-6">
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="text-gold-dark"
                    >
                      <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="font-serif text-2xl text-midnight font-normal">
                      {award.year}
                    </span>
                    <div className="h-px flex-1 bg-midnight/10" />
                  </div>
                  <h3 className="font-serif text-xl text-midnight font-normal mb-2">
                    {award.title}
                  </h3>
                  <p className="font-sans text-sm font-bold text-gold-dark mb-3 uppercase tracking-wider">
                    {award.organization}
                  </p>
                  <p className="font-sans text-sm text-midnight/60 leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
