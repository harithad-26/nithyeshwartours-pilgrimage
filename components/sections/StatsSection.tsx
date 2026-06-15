const STATS = [
  {
    number: "35+",
    label: "Years of Excellence",
    description: "Guiding spiritual journeys since 1992",
  },
  {
    number: "150,000+",
    label: "Happy Pilgrims",
    description: "Souls transformed through sacred travel",
  },
  {
    number: "300+",
    label: "Sacred Destinations",
    description: "Across India and international locations",
  },
  {
    number: "98%",
    label: "Satisfaction Rate",
    description: "Pilgrims who return for more journeys",
  },
];

export function StatsSection() {
  return (
    <section className="py-24 px-6 bg-midnight relative overflow-hidden">
      {/* Decorative gold gradient */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 bg-gold-muted/20 blur-3xl rounded-full"
        aria-hidden="true"
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold mb-4">
            Our Impact
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-surface font-normal leading-snug">
            Numbers That Speak of Trust
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gold/40 hover:bg-white/10 hover:-translate-y-2 active:scale-[0.98] transition-all duration-300 hover:shadow-[0_15px_30px_rgba(254,214,91,0.08)] cursor-pointer"
            >
              <div className="font-serif text-5xl md:text-6xl text-gold font-normal mb-3">
                {stat.number}
              </div>
              <div className="font-sans text-base font-bold text-surface mb-2 tracking-wide">
                {stat.label}
              </div>
              <p className="font-sans text-sm text-white/60 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
