const STATS = [
  {
    number: "30+",
    suffix: " Years",
    label: "In Service",
    description: "Decades of guiding pilgrims safely.",
  },
  {
    number: "10,000+",
    suffix: "",
    label: "Pilgrims Served",
    description: "Devotees who traveled with us.",
  },
  {
    number: "500+",
    suffix: "",
    label: "Successful Departures",
    description: "Completed sacred yatra groups.",
  },
  {
    number: "50+",
    suffix: "",
    label: "Sacred Destinations",
    description: "Holy places and temple circuits.",
  },
  {
    number: "4.8★",
    suffix: "",
    label: "Average Satisfaction",
    description: "Rated highly by families and seniors.",
  },
];

export function LegacyTrust() {
  return (
    <section className="py-20 md:py-24 bg-midnight relative overflow-hidden">
      {/* Soft decorative background gold glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold-muted/10 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold mb-3">
            A Legacy of Devotion
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white font-normal leading-snug">
            Numbers That Speak of Trust
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className={[
                "text-center p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/40 hover:bg-white/10 hover:-translate-y-2 active:scale-[0.98] transition-all duration-300 hover:shadow-[0_15px_30px_rgba(254,214,91,0.08)] cursor-pointer",
                index === 4 ? "col-span-2 lg:col-span-1" : ""
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className="font-serif text-4xl md:text-5xl text-gold font-normal mb-2 whitespace-nowrap">
                {stat.number}
                {stat.suffix && <span className="text-xl md:text-2xl">{stat.suffix}</span>}
              </div>
              <div className="font-sans text-xs md:text-sm font-bold text-white mb-2 uppercase tracking-wider">
                {stat.label}
              </div>
              <p className="font-sans text-[11px] md:text-xs text-white/50 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
