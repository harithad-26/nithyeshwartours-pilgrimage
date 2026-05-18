import type { ItineraryDay } from "@/lib/types";

export function ItinerarySection({ days }: { days: ItineraryDay[] }) {
  return (
    <section aria-labelledby="itinerary-heading" className="py-12">
      <h2
        id="itinerary-heading"
        className="font-serif text-2xl text-navy font-semibold mb-8"
      >
        Your Journey
      </h2>

      <ol className="space-y-6" role="list">
        {days.map((day) => (
          <li key={day.id} className="flex gap-6 group">
            {/* Day number */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full border-2 border-gold-dark flex items-center justify-center bg-surface">
                <span className="font-sans text-xs font-bold text-gold-dark tabular-nums">
                  {String(day.day).padStart(2, "0")}
                </span>
              </div>
              {/* Connector line */}
              <div className="flex-1 w-px bg-surface-low mt-2" aria-hidden="true" />
            </div>

            {/* Content */}
            <div className="flex-1 pb-6">
              <h3 className="font-serif text-lg text-navy font-semibold mb-2 leading-snug">
                Day {day.day}: {day.title}
              </h3>
              <p className="font-sans text-sm text-midnight/60 leading-relaxed">
                {day.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
