import Link from "next/link";
import type { Package } from "@/lib/types";

export function PricingSidebar({ pkg }: { pkg: Package }) {
  return (
    <aside
      className="sticky top-24"
      aria-label="Package pricing and booking"
    >
      {/* Price card */}
      <div className="bg-midnight rounded-md p-8 mb-4">
        <p className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-gold/70 mb-1">
          Starting from
        </p>
        <p className="font-serif text-5xl text-white font-normal tabular-nums mb-1">
          ₹{pkg.price.toLocaleString("en-IN")}
        </p>
        <p className="font-sans text-xs text-white/40">per person</p>

        {/* Details */}
        <dl className="space-y-3 mt-8 border-t border-white/10 pt-6">
          {[
            { label: "Duration", value: pkg.duration },
            { label: "Group Size", value: pkg.groupSize },
            { label: "Availability", value: pkg.availability },
          ].map(({ label, value }) => (
            <div key={label} className="flex justify-between items-center">
              <dt className="font-sans text-xs text-white/40 uppercase tracking-wide">
                {label}
              </dt>
              <dd className="font-sans text-sm text-white/80 font-medium">
                {value}
              </dd>
            </div>
          ))}
        </dl>

        {/* CTAs */}
        <div className="space-y-3 mt-8">
          <Link
            href="/inquiry"
            className="flex items-center justify-center font-sans text-sm font-semibold bg-gold text-midnight w-full py-3.5 rounded-md hover:bg-gold-dark hover:text-white transition-colors duration-300 min-h-11"
          >
            Book Now
          </Link>
          <Link
            href="/inquiry"
            className="flex items-center justify-center font-sans text-sm font-semibold text-white border border-white/20 w-full py-3.5 rounded-md hover:border-gold/50 hover:text-gold transition-colors duration-300 min-h-11"
          >
            Send Inquiry
          </Link>
        </div>
      </div>

      {/* Trust signal */}
      <p className="font-sans text-xs text-midnight/40 text-center leading-relaxed">
        Free cancellation within 48 hours. No hidden fees.
      </p>
    </aside>
  );
}
