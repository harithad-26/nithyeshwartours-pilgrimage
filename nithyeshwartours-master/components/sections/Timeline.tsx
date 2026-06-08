const MILESTONES = [
  {
    year: "1992",
    title: "The Humble Beginning",
    description:
      "Founded in the holy city of Varanasi, Nithyeshwar Tours was born from a singular mission: to make authentic pilgrimage accessible to every devotee.",
    nodeClass: "bg-midnight",
  },
  {
    year: "2005",
    title: "Expanding Horizons",
    description:
      "Launched international pilgrimage programmes to Nepal, Sri Lanka, and Southeast Asia, touching over 50,000 pilgrim souls.",
    nodeClass: "bg-gold-dark",
  },
  {
    year: "2018",
    title: "100,000 Souls",
    description:
      "Celebrated a milestone of guiding over 100,000 pilgrims across 200+ sacred destinations — becoming India's most trusted spiritual travel company.",
    nodeClass: "bg-midnight",
  },
];

export function Timeline() {
  return (
    <section aria-labelledby="timeline-heading" className="py-32 px-6 bg-surface-low">
      <div className="max-w-5xl mx-auto">
        <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4 text-center">
          Our Journey
        </p>
        <h2
          id="timeline-heading"
          className="font-serif text-3xl md:text-4xl text-midnight font-normal text-center mb-20 leading-snug"
        >
          Decades of Devotion
        </h2>

        <div className="relative">
          {/* Center vertical line — desktop only */}
          <div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-midnight/10 -translate-x-1/2"
            aria-hidden="true"
          />

          <ol className="space-y-0" role="list">
            {MILESTONES.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li key={m.year} className="relative">
                  {/* Desktop alternating layout */}
                  <div className="hidden lg:grid grid-cols-[1fr_80px_1fr] items-center pb-16">
                    <div className={`pr-12 ${isLeft ? "text-right" : ""}`}>
                      {isLeft && (
                        <>
                          <h3 className="font-serif text-xl text-midnight font-normal mb-3">
                            {m.title}
                          </h3>
                          <p className="font-sans text-sm text-midnight/60 leading-relaxed max-w-xs ml-auto">
                            {m.description}
                          </p>
                        </>
                      )}
                    </div>

                    <div className="flex justify-center relative z-10">
                      <div
                        className={`w-16 h-16 rounded-xl ${m.nodeClass} flex items-center justify-center`}
                      >
                        <span className="font-serif text-xs text-gold font-normal">
                          {m.year}
                        </span>
                      </div>
                    </div>

                    <div className="pl-12">
                      {!isLeft && (
                        <>
                          <h3 className="font-serif text-xl text-midnight font-normal mb-3">
                            {m.title}
                          </h3>
                          <p className="font-sans text-sm text-midnight/60 leading-relaxed max-w-xs">
                            {m.description}
                          </p>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Mobile vertical list */}
                  <div className="flex gap-6 lg:hidden pb-12">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-14 h-14 rounded-xl ${m.nodeClass} flex items-center justify-center shrink-0`}
                      >
                        <span className="font-serif text-xs text-gold font-normal">
                          {m.year}
                        </span>
                      </div>
                      {i < MILESTONES.length - 1 && (
                        <div
                          className="flex-1 w-px bg-midnight/10 mt-3"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <div className="pt-2">
                      <h3 className="font-serif text-xl text-midnight font-normal mb-2">
                        {m.title}
                      </h3>
                      <p className="font-sans text-sm text-midnight/60 leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
