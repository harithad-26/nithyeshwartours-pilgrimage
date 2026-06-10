"use client";

interface LuxuryInfoTabProps {
  data: any;
}

export default function LuxuryInfoTab({ data }: LuxuryInfoTabProps) {
  const infoCategories = {
    "Trip Facts": {
      "Starting Point": data.startPoint,
      "Ending Point": data.endPoint,
      "Maximum Altitude": data.maxAltitude,
      "Best Season": data.bestSeason,
    },
    "Altitude Details": {
      "Kailash Peak": data.kailashPeakAltitude,
      "Mansarovar Lake": data.mansarovarAltitude,
      "Dolma La Pass": data.maxAltitude,
    },
    "Distance & Duration": {
      "Kailash Parikrama": data.kailashParikrama,
      "Mansarovar Parikrama": data.mansarovarParikrama,
      "From Kathmandu": data.distanceFromKathmandu,
    },
    "Climate": {
      "Temperature Range": data.temperature,
      "Climate Pattern": data.climate,
    },
  };

  return (
    <div className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-8">
        <div className="mb-16">
          <p className="font-sans text-sm text-midnight/40 uppercase tracking-wider mb-4">Essential Details</p>
          <h2 className="font-serif text-4xl md:text-5xl text-midnight font-light">Trip Information</h2>
        </div>

        <div className="space-y-16">
          {Object.entries(infoCategories).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-sans text-xs text-midnight/40 uppercase tracking-wider mb-6">{category}</h3>
              <div className="space-y-4">
                {Object.entries(items).map(([key, value]) => (
                  <div
                    key={key}
                    className="grid grid-cols-[200px_1fr] gap-8 py-4 border-b border-midnight/5 last:border-0"
                  >
                    <div className="font-sans text-sm text-midnight/50">{key}</div>
                    <div className="font-sans text-sm text-midnight">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
