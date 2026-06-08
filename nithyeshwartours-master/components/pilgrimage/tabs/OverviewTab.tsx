export default function OverviewTab({ data }: { data: any }) {
  return (
    <div className="space-y-12">
      {/* Package Summary */}
      <section>
        <h2 className="font-serif text-3xl text-midnight font-normal mb-6">Package Overview</h2>
        <p className="font-sans text-lg text-midnight/70 leading-relaxed mb-6">
          {data.description}
        </p>
        <p className="font-sans text-base text-midnight/60 leading-relaxed">
          {data.tagline}
        </p>
      </section>

      {/* Route Information */}
      <section className="bg-white rounded-xl p-8 shadow-sm">
        <h3 className="font-serif text-2xl text-midnight font-normal mb-4 flex items-center gap-3">
          <span className="text-3xl">🛤️</span>
          Route
        </h3>
        <p className="font-sans text-base text-midnight/70 leading-relaxed">
          {data.overview.route}
        </p>
      </section>

      {/* Destinations */}
      <section>
        <h3 className="font-serif text-2xl text-midnight font-normal mb-6">Destinations Covered</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.overview.destinations.map((destination: string, index: number) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 border border-midnight/10 hover:border-gold-dark/30 hover:shadow-md transition-all"
            >
              <p className="font-sans text-sm font-medium text-midnight text-center">
                {destination}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Package Highlights */}
      <section className="bg-gradient-to-br from-gold/5 to-transparent rounded-xl p-8 border border-gold/20">
        <h3 className="font-serif text-2xl text-midnight font-normal mb-6 flex items-center gap-3">
          <span className="text-3xl">✨</span>
          Package Highlights
        </h3>
        <ul className="grid md:grid-cols-2 gap-4">
          {data.overview.highlights.map((highlight: string, index: number) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-gold-dark text-xl mt-1">✓</span>
              <span className="font-sans text-base text-midnight/80 leading-relaxed flex-1">
                {highlight}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Quick Facts */}
      <section>
        <h3 className="font-serif text-2xl text-midnight font-normal mb-6">Quick Facts</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 border border-midnight/10">
            <p className="font-sans text-xs uppercase tracking-wider text-midnight/50 mb-2">Duration</p>
            <p className="font-serif text-2xl text-midnight font-medium">{data.duration.display}</p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-midnight/10">
            <p className="font-sans text-xs uppercase tracking-wider text-midnight/50 mb-2">Max Altitude</p>
            <p className="font-serif text-2xl text-midnight font-medium">{data.maxAltitude.display}</p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-midnight/10">
            <p className="font-sans text-xs uppercase tracking-wider text-midnight/50 mb-2">Difficulty</p>
            <p className="font-serif text-2xl text-midnight font-medium">{data.difficulty}</p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-midnight/10">
            <p className="font-sans text-xs uppercase tracking-wider text-midnight/50 mb-2">Starting Point</p>
            <p className="font-serif text-2xl text-midnight font-medium">{data.startingPoint}</p>
          </div>
        </div>
      </section>

      {/* Themes */}
      <section>
        <h3 className="font-serif text-2xl text-midnight font-normal mb-6">Best For</h3>
        <div className="flex flex-wrap gap-3">
          {data.overview.themes.map((theme: string, index: number) => (
            <span
              key={index}
              className="inline-flex items-center gap-2 font-sans text-sm font-medium bg-gold/10 text-gold-dark px-6 py-3 rounded-full border border-gold/30"
            >
              {theme}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
