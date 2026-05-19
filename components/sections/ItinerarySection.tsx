import type { ItineraryDay } from "@/lib/types";

export function ItinerarySection({ days }: { days: ItineraryDay[] }) {
  return (
    <section aria-labelledby="itinerary-heading" className="py-12">
      <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-3">
        Day by Day
      </p>
      <h2
        id="itinerary-heading"
        className="font-serif text-2xl md:text-3xl text-midnight font-normal mb-10 leading-snug"
      >
        Your Sacred Journey
      </h2>

      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-8 top-8 bottom-8 w-px bg-midnight/10"
          aria-hidden="true"
        />

        <ol className="space-y-0" role="list">
          {days.map((day, i) => (
            <li key={day.id} className="flex gap-8 pb-10 relative">
              {/* Day node */}
              <div className="flex flex-col items-center z-10 shrink-0">
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                    i % 2 === 0 ? "bg-midnight" : "bg-gold-dark"
                  }`}
                >
                  <span className="font-serif text-sm text-gold font-normal tabular-nums">
                    {String(day.day).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-3">
                <h3 className="font-serif text-lg text-midnight font-normal mb-2 leading-snug">
                  Day {day.day}: {day.title}
                </h3>
                <p className="font-sans text-sm text-midnight/60 leading-relaxed">
                  {day.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
