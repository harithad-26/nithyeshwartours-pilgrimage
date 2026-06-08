export default function BasicInfoTab({ data }: { data: any }) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-3xl text-midnight font-normal mb-4">Essential Information</h2>
        <p className="font-sans text-base text-midnight/60 leading-relaxed">
          Important facts about the journey to help you prepare better.
        </p>
      </div>

      {/* Key Facts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 border border-midnight/10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">📍</span>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-midnight/70">
              Start Point
            </h3>
          </div>
          <p className="font-serif text-xl text-midnight font-medium">{data.startPoint}</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-midnight/10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🏁</span>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-midnight/70">
              End Point
            </h3>
          </div>
          <p className="font-serif text-xl text-midnight font-medium">{data.endPoint}</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-midnight/10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">⛰️</span>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-midnight/70">
              Max Altitude
            </h3>
          </div>
          <p className="font-serif text-xl text-midnight font-medium">{data.maxAltitude}</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-midnight/10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🏔️</span>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-midnight/70">
              Kailash Peak
            </h3>
          </div>
          <p className="font-serif text-xl text-midnight font-medium">{data.kailashPeakAltitude}</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-midnight/10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🌤️</span>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-midnight/70">
              Best Season
            </h3>
          </div>
          <p className="font-serif text-xl text-midnight font-medium">{data.bestSeason}</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-midnight/10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🌡️</span>
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-midnight/70">
              Temperature
            </h3>
          </div>
          <p className="font-serif text-xl text-midnight font-medium">{data.temperature}</p>
        </div>
      </div>

      {/* Parikrama Information */}
      <div className="bg-gradient-to-br from-gold/5 to-transparent rounded-xl p-8 border border-gold/20">
        <h3 className="font-serif text-2xl text-midnight font-normal mb-6 flex items-center gap-3">
          <span className="text-3xl">🙏</span>
          Parikrama Details
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6">
            <p className="font-sans text-xs uppercase tracking-wider text-midnight/50 mb-2">
              Kailash Parikrama
            </p>
            <p className="font-serif text-2xl text-midnight font-medium mb-2">
              {data.kailashParikrama.split('(')[0]}
            </p>
            <p className="font-sans text-sm text-midnight/60">
              {data.kailashParikrama.includes('(') && `(${data.kailashParikrama.split('(')[1]}`}
            </p>
          </div>

          <div className="bg-white rounded-lg p-6">
            <p className="font-sans text-xs uppercase tracking-wider text-midnight/50 mb-2">
              Mansarovar Parikrama
            </p>
            <p className="font-serif text-2xl text-midnight font-medium mb-2">
              {data.mansarovarParikrama.split('(')[0]}
            </p>
            <p className="font-sans text-sm text-midnight/60">
              (by vehicle)
            </p>
          </div>
        </div>
      </div>

      {/* Lake Information */}
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border border-blue-200">
        <h3 className="font-serif text-2xl text-midnight font-normal mb-4 flex items-center gap-3">
          <span className="text-3xl">💧</span>
          Lake Mansarovar
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="font-sans text-sm font-semibold text-midnight mb-2">Altitude</p>
            <p className="font-serif text-xl text-midnight/80">{data.mansarovarAltitude}</p>
          </div>
          <div>
            <p className="font-sans text-sm font-semibold text-midnight mb-2">Significance</p>
            <p className="font-sans text-sm text-midnight/70 leading-relaxed">
              World's highest freshwater lake, created from Lord Brahma's mind according to Hindu scriptures.
            </p>
          </div>
        </div>
      </div>

      {/* Distance Information */}
      <div className="bg-white rounded-xl p-6 border border-midnight/10">
        <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-midnight/70 mb-4">
          Distance From Kathmandu
        </h4>
        <p className="font-serif text-3xl text-midnight font-medium">{data.distanceFromKathmandu}</p>
      </div>

      {/* Climate Warning */}
      <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
        <div className="flex items-start gap-4">
          <span className="text-3xl">⚠️</span>
          <div>
            <h4 className="font-sans text-sm font-semibold text-midnight mb-2">Climate Condition</h4>
            <p className="font-sans text-sm text-midnight/70 leading-relaxed">
              <strong className="text-midnight">Climate: {data.climate}</strong>
              <br />
              Weather in the Himalayas can change rapidly. Be prepared for sudden temperature drops, 
              high winds, rain, or snow even during the best season. Always carry appropriate clothing 
              and gear for all weather conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
