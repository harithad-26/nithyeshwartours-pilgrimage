export default function PremiumOverviewTab({ data }: { data: any }) {
  return (
    <div className="space-y-0">
      {/* Journey Summary Strip */}
      <section className="bg-gradient-to-br from-midnight via-navy to-midnight text-white -mx-6 md:-mx-12 px-6 md:px-12 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            <div className="text-center md:text-left">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-gold mb-2">Duration</p>
              <p className="font-serif text-2xl md:text-3xl text-white">{data.duration.display}</p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-gold mb-2">Max Altitude</p>
              <p className="font-serif text-2xl md:text-3xl text-white">{data.maxAltitude.display}</p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-gold mb-2">Difficulty</p>
              <p className="font-serif text-2xl md:text-3xl text-white">{data.difficulty}</p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-gold mb-2">Best Season</p>
              <p className="font-serif text-2xl md:text-3xl text-white">{data.overview.bestSeason || 'May-Sep'}</p>
            </div>
            <div className="col-span-2 md:col-span-1 text-center md:text-left">
              <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-gold mb-2">Start Point</p>
              <p className="font-serif text-2xl md:text-3xl text-white">{data.startingPoint}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Description */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="font-serif text-xl md:text-2xl text-midnight/80 leading-relaxed mb-6">
            {data.description}
          </p>
          {data.tagline && (
            <p className="font-sans text-base text-midnight/60 leading-relaxed border-l-2 border-gold-dark pl-6">
              {data.tagline}
            </p>
          )}
        </div>
      </section>

      {/* Route Timeline */}
      <section className="py-16 px-6 md:px-12 bg-surface">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-midnight mb-12">Sacred Route</h2>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gold/30" />
            
            <div className="space-y-8">
              {data.overview.route.split('→').map((location: string, index: number, arr: string[]) => (
                <div key={index} className="relative pl-14">
                  <div className="absolute left-0 w-10 h-10 rounded-full bg-gold flex items-center justify-center z-10">
                    <span className="font-sans text-sm font-bold text-midnight">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-midnight mb-1">{location.trim()}</h3>
                    {index < arr.length - 1 && (
                      <p className="font-sans text-sm text-midnight/50">Continue journey →</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Premium Highlights */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-midnight mb-12">Experience Highlights</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {data.overview.highlights.map((highlight: string, index: number) => (
              <div key={index} className="flex gap-4 group">
                <div className="shrink-0">
                  <div className="w-1.5 h-full bg-gold-dark/20 group-hover:bg-gold-dark transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <p className="font-sans text-base text-midnight/80 leading-relaxed">
                    {highlight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Themes / Best For */}
      {data.overview.themes && data.overview.themes.length > 0 && (
        <section className="py-12 px-6 md:px-12 bg-surface-low border-t border-midnight/5">
          <div className="max-w-5xl mx-auto">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-midnight/50 mb-4">Best For</p>
            <div className="flex flex-wrap gap-3">
              {data.overview.themes.map((theme: string, index: number) => (
                <span
                  key={index}
                  className="font-sans text-sm text-midnight/70 bg-white px-4 py-2 rounded-full border border-midnight/10"
                >
                  {theme}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
