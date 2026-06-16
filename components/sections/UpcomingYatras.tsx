import Link from "next/link";
import { SectionHeader } from "@/components/ui";

const DEPARTURES = [
  {
    destination: "Kailash Mansarovar Yatra",
    date: "June 20, 2026",
    duration: "14 Days",
    status: "Filling Fast",
    price: "₹1,85,000",
    inquiryParam: "kailash-mansarovar",
  },
  {
    destination: "Char Dham Yatra (Kedarnath, Badrinath, Gangotri, Yamunotri)",
    date: "July 02, 2026",
    duration: "12 Days",
    status: "Limited Seats",
    price: "₹85,000",
    inquiryParam: "char-dham",
  },
  {
    destination: "Varanasi & Kashi Vishwanath Yatra",
    date: "July 12, 2026",
    duration: "5 Days",
    status: "Guaranteed Departure",
    price: "₹38,000",
    inquiryParam: "varanasi",
  },
  {
    destination: "Tirupati Balaji & Southern Temples",
    date: "July 18, 2026",
    duration: "4 Days",
    status: "Filling Fast",
    price: "₹24,000",
    inquiryParam: "tirupati",
  },
];

export function UpcomingYatras() {
  return (
    <section className="py-12 md:py-20 lg:py-28 bg-surface relative" aria-labelledby="upcoming-departures-heading">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <SectionHeader
          eyebrow="Faith In Motion"
          title="Upcoming Departures"
          align="center"
        />

        <div className="mt-12 md:mt-16 overflow-hidden">
          {/* Desktop Table View */}
          <div className="hidden md:block border border-midnight/5 rounded-2xl bg-white shadow-xl overflow-hidden">
            <div className="grid grid-cols-12 bg-midnight text-white px-8 py-5 font-sans text-xs font-bold uppercase tracking-wider">
              <div className="col-span-4">Destination Yatra</div>
              <div className="col-span-2">Departure Date</div>
              <div className="col-span-2">Duration</div>
              <div className="col-span-2">Availability</div>
              <div className="col-span-2 text-right">Action</div>
            </div>
            <div className="divide-y divide-midnight/5">
              {DEPARTURES.map((yatra, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-12 items-center px-8 py-6 hover:bg-surface-low transition-colors duration-200 group"
                >
                  <div className="col-span-4">
                    <h4 className="font-serif text-base text-midnight font-normal group-hover:text-gold-dark transition-colors duration-200 line-clamp-2">
                      {yatra.destination}
                    </h4>
                  </div>
                  <div className="col-span-2 font-sans text-sm text-midnight/80 font-medium">
                    {yatra.date}
                  </div>
                  <div className="col-span-2 font-sans text-sm text-midnight/60">
                    {yatra.duration}
                  </div>
                  <div className="col-span-2">
                    <span
                      className={[
                        "inline-block font-sans text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full",
                        yatra.status === "Filling Fast" ? "bg-red-50 text-red-600 border border-red-100" :
                        yatra.status === "Limited Seats" ? "bg-amber-50 text-amber-600 border border-amber-100" :
                        "bg-green-50 text-green-600 border border-green-100"
                      ].join(" ")}
                    >
                      {yatra.status}
                    </span>
                  </div>
                  <div className="col-span-2 text-right">
                    <Link
                      href={`/inquiry?package=${yatra.inquiryParam}`}
                      className="btn-premium btn-premium-gold text-xs px-4 py-2.5 min-h-[38px]"
                    >
                      <span>Book Now</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden flex flex-col gap-6">
            {DEPARTURES.map((yatra, idx) => (
              <div
                key={idx}
                className="bg-white border border-midnight/5 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <span
                    className={[
                      "inline-block font-sans text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full",
                      yatra.status === "Filling Fast" ? "bg-red-50 text-red-600 border border-red-100" :
                      yatra.status === "Limited Seats" ? "bg-amber-50 text-amber-600 border border-amber-100" :
                      "bg-green-50 text-green-600 border border-green-100"
                    ].join(" ")}
                  >
                    {yatra.status}
                  </span>
                  <span className="font-sans text-xs text-midnight/50 font-medium">{yatra.duration}</span>
                </div>
                <h4 className="font-serif text-base text-midnight font-normal mb-4 line-clamp-2 min-h-12">
                  {yatra.destination}
                </h4>
                <div className="border-t border-midnight/5 pt-4 flex items-center justify-between">
                  <div>
                    <p className="font-sans text-[10px] text-midnight/40 uppercase tracking-wider">Departure Date</p>
                    <p className="font-sans text-sm text-midnight/80 font-semibold mt-0.5">{yatra.date}</p>
                  </div>
                  <Link
                    href={`/inquiry?package=${yatra.inquiryParam}`}
                    className="btn-premium btn-premium-gold text-xs px-4 py-2.5 min-h-[38px]"
                  >
                    <span>Book Now</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
