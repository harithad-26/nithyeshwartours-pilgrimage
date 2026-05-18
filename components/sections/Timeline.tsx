const MILESTONES = [
  {
    year: "1992",
    title: "The Humble Beginning",
    description:
      "Founded in the holy city of Varanasi, Nithyeshwar Tours was born from a singular mission: to make authentic pilgrimage accessible to every devotee.",
  },
  {
    year: "2005",
    title: "Expanding Horizons",
    description:
      "Launched international pilgrimage programmes to Nepal, Sri Lanka, and Southeast Asia, touching over 50,000 pilgrim souls.",
  },
  {
    year: "2018",
    title: "100,000 Souls",
    description:
      "Celebrated a milestone of guiding over 100,000 pilgrims across 200+ sacred destinations — becoming India's most trusted spiritual travel company.",
  },
];

export function Timeline() {
  return (
    <section aria-labelledby="timeline-heading" className="py-20 px-6 bg-surface">
      <div className="max-w-4xl mx-auto">
        <h2 id="timeline-heading" className="font-serif text-3xl text-navy font-semibold text-center mb-16">
          Decades of Devotion
        </h2>

        <ol className="relative space-y-12" role="list">
          {MILESTONES.map((m, i) => (
            <li key={m.year} className="flex gap-8 group">
              {/* Year badge + connector */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center shadow-ambient">
                  <span className="font-serif text-xs text-gold font-semibold">{m.year}</span>
                </div>
                {i < MILESTONES.length - 1 && (
                  <div className="flex-1 w-px bg-navy/20 mt-3" aria-hidden="true" />
                )}
              </div>

              {/* Content */}
              <div className="pb-12">
                <h3 className="font-serif text-xl text-navy font-semibold mb-2">
                  {m.title}
                </h3>
                <p className="font-sans text-sm text-midnight/60 leading-relaxed max-w-lg">
                  {m.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
