export default function PremiumInfoTab({ data }: { data: any }) {
  return (
    <div className="space-y-0">
      {/* Travel Information Table */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-midnight mb-12">Travel Information</h2>
          
          {/* Journey Facts */}
          <div className="mb-12">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-midnight/50 mb-4">Journey Facts</h3>
            <div className="bg-surface-low rounded-lg overflow-hidden border border-midnight/5">
              <div className="divide-y divide-midnight/5">
                <div className="grid grid-cols-3 py-4 px-6">
                  <span className="font-sans text-sm font-medium text-midnight/60">Start Point</span>
                  <span className="col-span-2 font-sans text-sm text-midnight">{data.startPoint}</span>
                </div>
                <div className="grid grid-cols-3 py-4 px-6 bg-white/50">
                  <span className="font-sans text-sm font-medium text-midnight/60">End Point</span>
                  <span className="col-span-2 font-sans text-sm text-midnight">{data.endPoint}</span>
                </div>
                <div className="grid grid-cols-3 py-4 px-6">
                  <span className="font-sans text-sm font-medium text-midnight/60">Distance from Kathmandu</span>
                  <span className="col-span-2 font-sans text-sm text-midnight">{data.distanceFromKathmandu}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Altitude Details */}
          <div className="mb-12">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-midnight/50 mb-4">Altitude Details</h3>
            <div className="bg-surface-low rounded-lg overflow-hidden border border-midnight/5">
              <div className="divide-y divide-midnight/5">
                <div className="grid grid-cols-3 py-4 px-6">
                  <span className="font-sans text-sm font-medium text-midnight/60">Maximum Altitude</span>
                  <span className="col-span-2 font-sans text-sm text-midnight">{data.maxAltitude}</span>
                </div>
                <div className="grid grid-cols-3 py-4 px-6 bg-white/50">
                  <span className="font-sans text-sm font-medium text-midnight/60">Kailash Peak</span>
                  <span className="col-span-2 font-sans text-sm text-midnight">{data.kailashPeakAltitude}</span>
                </div>
                <div className="grid grid-cols-3 py-4 px-6">
                  <span className="font-sans text-sm font-medium text-midnight/60">Mansarovar Lake</span>
                  <span className="col-span-2 font-sans text-sm text-midnight">{data.mansarovarAltitude}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Climate & Season */}
          <div className="mb-12">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-midnight/50 mb-4">Climate & Season</h3>
            <div className="bg-surface-low rounded-lg overflow-hidden border border-midnight/5">
              <div className="divide-y divide-midnight/5">
                <div className="grid grid-cols-3 py-4 px-6">
                  <span className="font-sans text-sm font-medium text-midnight/60">Climate</span>
                  <span className="col-span-2 font-sans text-sm text-midnight">{data.climate}</span>
                </div>
                <div className="grid grid-cols-3 py-4 px-6 bg-white/50">
                  <span className="font-sans text-sm font-medium text-midnight/60">Temperature Range</span>
                  <span className="col-span-2 font-sans text-sm text-midnight">{data.temperature}</span>
                </div>
                <div className="grid grid-cols-3 py-4 px-6">
                  <span className="font-sans text-sm font-medium text-midnight/60">Best Season</span>
                  <span className="col-span-2 font-sans text-sm text-midnight">{data.bestSeason}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Parikrama Information */}
          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-midnight/50 mb-4">Parikrama Information</h3>
            <div className="bg-surface-low rounded-lg overflow-hidden border border-midnight/5">
              <div className="divide-y divide-midnight/5">
                <div className="grid grid-cols-3 py-4 px-6">
                  <span className="font-sans text-sm font-medium text-midnight/60">Kailash Parikrama</span>
                  <span className="col-span-2 font-sans text-sm text-midnight">{data.kailashParikrama}</span>
                </div>
                <div className="grid grid-cols-3 py-4 px-6 bg-white/50">
                  <span className="font-sans text-sm font-medium text-midnight/60">Mansarovar Parikrama</span>
                  <span className="col-span-2 font-sans text-sm text-midnight">{data.mansarovarParikrama}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 px-6 md:px-12 bg-orange-50 border-t border-orange-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-4">
            <div className="shrink-0 text-2xl">⚠️</div>
            <div>
              <h3 className="font-sans text-sm font-semibold text-midnight mb-2">High Altitude Journey</h3>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                This pilgrimage involves extreme high-altitude conditions. Weather can change rapidly with sudden temperature drops, 
                high winds, rain, or snow. Proper acclimatization and physical fitness are essential. Consult your physician before booking.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
