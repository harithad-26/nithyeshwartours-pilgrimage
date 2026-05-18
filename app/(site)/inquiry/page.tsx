import { InquiryForm } from "@/components/forms/InquiryForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inquire — Plan Your Sacred Journey",
  description:
    "Reach out to Nithyeshwar Tours to plan your personalized pilgrimage. Our spiritual guides are ready to assist.",
};

const OFFICES = [
  {
    city: "Varanasi Headquarters",
    address: "Shiv Ghat, Sacred Circle, Varanasi, UP 221001",
    phone: "+91 (542) 233-4455",
    email: "support@nithyeshwartours.com",
  },
  {
    city: "Rishikesh Office",
    address: "Spiritual Heights, Tapovan, Rishikesh, UK 249192",
    phone: "+91 (542) 233-4455",
    email: "support@nithyeshwartours.com",
  },
];

export default function InquiryPage() {
  return (
    <div className="py-20 px-6 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Form side — 2/3 width on lg */}
        <div className="lg:col-span-2">
          <p className="font-sans text-xs font-semibold tracking-[0.12em] uppercase text-gold-dark mb-4">
            Begin Your Pilgrimage
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-navy font-semibold leading-tight mb-3">
            Inquire with
            <br />
            <span className="text-gold-dark">Reverence.</span>
          </h1>
          <p className="font-sans text-base text-midnight/50 leading-relaxed mb-12 max-w-lg">
            Our spiritual guides are ready to assist you in tailoring a journey
            that resonates with your soul&apos;s deepest intentions.
          </p>

          <InquiryForm />
        </div>

        {/* Presence sidebar — 1/3 width on lg */}
        <aside aria-labelledby="presence-heading">
          <h2
            id="presence-heading"
            className="font-sans text-xs font-semibold tracking-[0.12em] uppercase text-gold-dark mb-6"
          >
            Our Presence
          </h2>

          <div className="space-y-6">
            {OFFICES.map((o) => (
              <div
                key={o.city}
                className="p-5 bg-surface-lowest rounded-md shadow-ambient border-l-2 border-gold-dark"
              >
                <h3 className="font-sans text-sm font-semibold text-navy mb-1">
                  {o.city}
                </h3>
                <address className="not-italic">
                  <p className="font-sans text-xs text-midnight/60 leading-relaxed mb-2">
                    {o.address}
                  </p>
                  <a
                    href={`tel:${o.phone.replace(/[\s()]/g, "")}`}
                    className="font-sans text-xs text-gold-dark hover:underline block mb-1"
                  >
                    {o.phone}
                  </a>
                  <a
                    href={`mailto:${o.email}`}
                    className="font-sans text-xs text-gold-dark hover:underline block"
                  >
                    {o.email}
                  </a>
                </address>
              </div>
            ))}
          </div>

          {/* Newsletter signup — UI only, no submit handler */}
          <div className="mt-10 p-6 bg-navy rounded-md">
            <h3 className="font-serif text-lg text-white font-medium mb-2">
              Receive Spiritual Insights
            </h3>
            <p className="font-sans text-xs text-white/60 leading-relaxed mb-4">
              Subscribe to our sacred journal — stories, guides, and pilgrimage
              wisdom.
            </p>
            <form aria-label="Newsletter signup" className="flex gap-3">
              <label htmlFor="newsletter-email" className="sr-only">
                Your email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/10 text-white placeholder:text-white/30 font-sans text-xs px-3 py-2.5 rounded-md outline-none focus:ring-1 focus:ring-gold"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="bg-gold text-midnight font-sans text-xs font-semibold px-4 py-2.5 rounded-md hover:bg-gold-dark hover:text-white transition-colors duration-300"
              >
                Join
              </button>
            </form>
          </div>
        </aside>
      </div>
    </div>
  );
}
