import { Button } from "@/components/ui/Button";
import type { Package } from "@/lib/types";

export function PricingSidebar({ pkg }: { pkg: Package }) {
  return (
    <aside
      className="sticky top-24 bg-surface-lowest rounded-md shadow-card p-8 border-l-2 border-gold-dark"
      aria-label="Package pricing and booking"
    >
      {/* Price */}
      <div className="mb-6">
        <p className="font-sans text-xs text-midnight/40 uppercase tracking-widest mb-1">
          Starting from
        </p>
        <p className="font-serif text-4xl text-navy font-semibold tabular-nums">
          ₹{pkg.price.toLocaleString("en-IN")}
        </p>
        <p className="font-sans text-xs text-midnight/40 mt-1">per person</p>
      </div>

      {/* Details */}
      <dl className="space-y-3 mb-8 border-t border-surface-low pt-6">
        {[
          { label: "Duration", value: pkg.duration },
          { label: "Group Size", value: pkg.groupSize },
          { label: "Availability", value: pkg.availability },
        ].map(({ label, value }) => (
          <div key={label} className="flex justify-between items-center">
            <dt className="font-sans text-xs text-midnight/50 uppercase tracking-wide">
              {label}
            </dt>
            <dd className="font-sans text-sm font-medium text-midnight">
              {value}
            </dd>
          </div>
        ))}
      </dl>

      {/* CTAs */}
      <div className="space-y-3">
        <Button href="/inquiry" variant="primary" className="w-full justify-center">
          Book Now
        </Button>
        <Button href="/inquiry" variant="secondary" className="w-full justify-center">
          Send Inquiry
        </Button>
      </div>

      {/* Trust signal */}
      <p className="font-sans text-xs text-midnight/40 text-center mt-6 leading-relaxed">
        Free cancellation within 48 hours. No hidden fees.
      </p>
    </aside>
  );
}
