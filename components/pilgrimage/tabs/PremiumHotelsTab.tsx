interface Hotel {
  location: string;
  hotelName: string;
  category: string;
  nights: number;
}

export default function PremiumHotelsTab({ hotels }: { hotels: Hotel[] }) {
  return (
    <div className="space-y-0">
      {/* Accommodation Timeline */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-midnight mb-4">Accommodation Journey</h2>
          <p className="font-sans text-base text-midnight/60 leading-relaxed mb-12">
            Your stay progression throughout the pilgrimage
          </p>
          
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-0 md:left-20 top-0 bottom-0 w-px bg-midnight/10" />
            
            <div className="space-y-0">
              {hotels.map((hotel, index) => (
                <div key={index} className="relative pb-12 last:pb-0">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-20 -ml-1.5 w-3 h-3 rounded-full bg-gold-dark border-2 border-white shadow-sm" />
                  
                  <div className="pl-8 md:pl-32">
                    <div className="bg-surface-low rounded-lg p-6 md:p-8 border border-midnight/5 hover:border-gold-dark/20 transition-colors duration-300">
                      {/* Location badge */}
                      <div className="inline-flex items-center gap-2 bg-midnight/5 px-3 py-1 rounded-full mb-4">
                        <span className="text-xs">📍</span>
                        <span className="font-sans text-xs font-semibold uppercase tracking-wider text-midnight/70">
                          {hotel.location}
                        </span>
                      </div>
                      
                      {/* Hotel name */}
                      <h3 className="font-serif text-2xl text-midnight mb-3">{hotel.hotelName}</h3>
                      
                      {/* Details */}
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-gold-dark">⭐</span>
                          <span className="font-sans text-midnight/60">{hotel.category}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-gold-dark">🌙</span>
                          <span className="font-sans text-midnight/60">
                            {hotel.nights} {hotel.nights === 1 ? 'night' : 'nights'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Standards */}
      <section className="py-12 px-6 md:px-12 bg-surface border-t border-midnight/5">
        <div className="max-w-5xl mx-auto">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-midnight/50 mb-6">Accommodation Standards</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-midnight/5">
              <h4 className="font-sans text-sm font-semibold text-midnight mb-3">Nepal Hotels</h4>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                3-4 star hotels in Kathmandu with modern amenities, comfortable rooms, and reliable services.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-midnight/5">
              <h4 className="font-sans text-sm font-semibold text-midnight mb-3">Tibet Guest Houses</h4>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                Basic but clean accommodation suitable for high-altitude environment. Facilities are limited in remote areas.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-midnight/5">
              <h4 className="font-sans text-sm font-semibold text-midnight mb-3">Room Sharing</h4>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                Twin/triple sharing basis in Tibet. Single occupancy may be available on request at additional cost.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-midnight/5">
              <h4 className="font-sans text-sm font-semibold text-midnight mb-3">Availability</h4>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed">
                Hotels mentioned are indicative. Similar category accommodation provided based on availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Season */}
      <section className="py-12 px-6 md:px-12 bg-blue-50 border-t border-blue-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-4">
            <div className="shrink-0 text-2xl">🌤️</div>
            <div className="flex-1">
              <h3 className="font-sans text-sm font-semibold text-midnight mb-2">Best Season to Visit</h3>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed mb-4">
                May to September offers the most favorable weather conditions with open mountain passes.
              </p>
              <div className="flex flex-wrap gap-2">
                {["May", "June", "July", "August", "September"].map((month) => (
                  <span
                    key={month}
                    className="font-sans text-xs font-medium bg-white text-midnight/70 px-3 py-1.5 rounded-full border border-midnight/10"
                  >
                    {month}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
