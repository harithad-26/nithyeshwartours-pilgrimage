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
    <>
      {/* Page header */}
      <section className="pt-36 pb-20 px-6 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Form side — 2/3 width on lg */}
          <div className="lg:col-span-2">
            <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4">
              Begin Your Pilgrimage
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-midnight font-normal leading-tight mb-3">
              Inquire with
              <br />
              <span className="text-gold-dark">Reverence.</span>
            </h1>
            <p className="font-sans text-base text-[#43474e] leading-relaxed mb-12 max-w-lg">
              Our spiritual guides are ready to assist you in tailoring a journey
              that resonates with your soul&apos;s deepest intentions.
            </p>

            {/* Form card */}
            <div className="bg-white rounded-md p-8 shadow-ambient">
              <InquiryForm />
            </div>
          </div>

          {/* Presence sidebar */}
          <aside aria-labelledby="presence-heading" className="lg:pt-30">
            <h2
              id="presence-heading"
              className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-6"
            >
              Our Presence
            </h2>

            <div className="space-y-4">
              {OFFICES.map((o) => (
                <div
                  key={o.city}
                  className="p-6 bg-midnight rounded-md"
                >
                  <h3 className="font-sans text-xs font-bold tracking-[0.15em] uppercase text-gold mb-3">
                    {o.city}
                  </h3>
                  <address className="not-italic">
                    <p className="font-sans text-sm text-white/60 leading-relaxed mb-3">
                      {o.address}
                    </p>
                    <a
                      href={`tel:${o.phone.replace(/[\s()]/g, "")}`}
                      className="font-sans text-sm text-gold hover:text-gold-dark transition-colors duration-300 block mb-1"
                    >
                      {o.phone}
                    </a>
                    <a
                      href={`mailto:${o.email}`}
                      className="font-sans text-sm text-gold hover:text-gold-dark transition-colors duration-300 block"
                    >
                      {o.email}
                    </a>
                  </address>
                </div>
              ))}
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/915422334455"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-3 font-sans text-sm font-semibold text-midnight bg-[#25D366] px-5 py-3.5 rounded-md hover:opacity-90 transition-opacity duration-300 min-h-11"
              aria-label="Chat on WhatsApp"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chat on WhatsApp
            </a>

            {/* Newsletter */}
            <div className="mt-6 p-6 bg-surface-low rounded-md">
              <h3 className="font-serif text-lg text-midnight font-normal mb-2">
                Receive Spiritual Insights
              </h3>
              <p className="font-sans text-xs text-midnight/50 leading-relaxed mb-4">
                Subscribe to our sacred journal — stories, guides, and
                pilgrimage wisdom.
              </p>
              <form aria-label="Newsletter signup" className="space-y-3">
                <label htmlFor="newsletter-email" className="sr-only">
                  Your email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-white text-midnight placeholder:text-midnight/30 font-sans text-sm px-4 py-3 rounded-md border border-midnight/10 outline-none focus:ring-1 focus:ring-gold-dark"
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  className="w-full bg-midnight text-white font-sans text-sm font-semibold px-4 py-3 rounded-md hover:bg-navy transition-colors duration-300 min-h-11"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
