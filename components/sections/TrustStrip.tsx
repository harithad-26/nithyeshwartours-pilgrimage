const STATS = [
  {
    number: "30+",
    label: "Years of Excellence",
    description: "Serving travellers since 1994",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    number: "10,000+",
    label: "Happy Travellers",
    description: "Journeys crafted with care",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    number: "500+",
    label: "Successful Tours",
    description: "Departures completed safely",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    number: "50+",
    label: "Destinations",
    description: "Across India & beyond",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    number: "4.8★",
    label: "Customer Rating",
    description: "Rated by verified travellers",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

export function TrustStrip() {
  return (
    <section className="relative pt-36 md:pt-44 pb-16 md:pb-24 bg-gradient-to-b from-white via-surface-low to-white" aria-label="Why travellers trust us">
      {/* Decorative background accent */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-muted/5 blur-[100px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <p className="font-sans text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-gold mb-3 md:mb-4">
            Why Travellers Trust Us
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-midnight font-normal leading-tight mb-4 md:mb-6">
            Trusted by Travellers Across Generations
          </h2>
          <p className="font-sans text-sm md:text-base text-midnight/60 leading-relaxed max-w-2xl mx-auto">
            For over three decades, we&apos;ve been crafting unforgettable journeys that connect you with the beauty of India and the world. Our commitment to excellence has earned the trust of thousands of families.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-white border border-midnight/8 hover:border-gold/30 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              {/* Icon */}
              <div className="mb-4 text-gold-dark/70 group-hover:text-gold-dark group-hover:scale-110 transition-all duration-300">
                {stat.icon}
              </div>
              
              {/* Number */}
              <div className="font-serif text-4xl md:text-5xl lg:text-6xl text-midnight font-normal leading-none mb-3 group-hover:text-gold-dark transition-colors duration-300">
                {stat.number}
              </div>
              
              {/* Label */}
              <div className="font-sans text-xs md:text-sm text-midnight font-semibold uppercase tracking-wider leading-tight mb-2">
                {stat.label}
              </div>
              
              {/* Description */}
              <div className="font-sans text-[10px] md:text-xs text-midnight/50 leading-relaxed">
                {stat.description}
              </div>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent group-hover:w-3/4 transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>

        {/* Bottom accent text */}
        <div className="text-center mt-12 md:mt-16">
          <p className="font-sans text-xs md:text-sm text-midnight/40 italic">
            Join thousands of satisfied travellers who have made memories with us
          </p>
        </div>
      </div>
    </section>
  );
}
