interface Hotel {
  location: string;
  hotelName: string;
  category: string;
  nights: number;
}

export default function DatesHotelsTab({ hotels }: { hotels: Hotel[] }) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-3xl text-midnight font-normal mb-4">Accommodation Details</h2>
        <p className="font-sans text-base text-midnight/60 leading-relaxed">
          Carefully selected hotels and guest houses along your pilgrimage route. Accommodation standards 
          vary based on availability in remote Himalayan regions.
        </p>
      </div>

      <div className="grid gap-6">
        {hotels.map((hotel, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 border border-midnight/10 hover:border-gold-dark/30 hover:shadow-lg transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              {/* Hotel Info */}
              <div className="flex-1">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                    <span className="text-2xl">🏨</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl text-midnight font-medium mb-2">
                      {hotel.hotelName}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span className="flex items-center gap-2 text-midnight/60">
                        <span>📍</span>
                        <span className="font-sans font-medium">{hotel.location}</span>
                      </span>
                      <span className="flex items-center gap-2 text-midnight/60">
                        <span>⭐</span>
                        <span className="font-sans">{hotel.category}</span>
                      </span>
                      <span className="flex items-center gap-2 text-midnight/60">
                        <span>🌙</span>
                        <span className="font-sans">
                          {hotel.nights} {hotel.nights === 1 ? 'Night' : 'Nights'}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Night Badge */}
              <div className="shrink-0">
                <div className="inline-flex items-center gap-2 bg-gold/10 text-gold-dark px-4 py-2 rounded-full border border-gold/30">
                  <span className="font-sans text-sm font-semibold">
                    {hotel.nights} {hotel.nights === 1 ? 'Night' : 'Nights'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hotel Notes */}
      <div className="bg-surface-low rounded-xl p-6 border border-midnight/10">
        <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-midnight/70 mb-4">
          Accommodation Notes
        </h4>
        <ul className="space-y-3 font-sans text-sm text-midnight/70 leading-relaxed">
          <li className="flex items-start gap-3">
            <span className="text-gold-dark mt-1">•</span>
            <span>Hotels mentioned are indicative. Similar category hotels may be provided based on availability.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gold-dark mt-1">•</span>
            <span>Guest houses in Tibet offer basic facilities suitable for the high-altitude environment.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gold-dark mt-1">•</span>
            <span>Accommodation is on sharing basis in Tibet. Single occupancy may be available on request at extra cost.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gold-dark mt-1">•</span>
            <span>Hot water and electricity availability may be limited in remote locations.</span>
          </li>
        </ul>
      </div>

      {/* Best Season */}
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-200">
        <div className="flex items-start gap-4">
          <span className="text-3xl">🌤️</span>
          <div>
            <h4 className="font-sans text-sm font-semibold text-midnight mb-2">Best Season to Visit</h4>
            <p className="font-sans text-sm text-midnight/70 leading-relaxed mb-3">
              The ideal time for Kailash Mansarovar Yatra is from May to September when weather conditions 
              are most favorable and mountain passes remain open.
            </p>
            <div className="flex flex-wrap gap-2">
              {["May", "June", "July", "August", "September"].map((month) => (
                <span
                  key={month}
                  className="inline-flex items-center font-sans text-xs font-medium bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full"
                >
                  {month}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
