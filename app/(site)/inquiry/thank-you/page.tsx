import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You - Inquiry Submitted | Nithyeshwar Tours",
  description: "Your inquiry has been received. Our travel experts will contact you within 24 hours.",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-surface via-white to-gold/5 flex items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-midnight/5">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path
                d="M33 10L15 28L7 20"
                stroke="#735c00"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-3xl md:text-5xl text-midnight mb-4">
            Thank You!
          </h1>
          <p className="font-sans text-lg text-midnight/70 mb-8">
            Your inquiry has been successfully submitted
          </p>

          {/* Details */}
          <div className="bg-surface rounded-2xl p-6 md:p-8 mb-8 text-left">
            <h2 className="font-serif text-xl text-midnight mb-4">What happens next?</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="font-serif text-sm text-gold-dark">1</span>
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-midnight mb-1">Immediate Confirmation</p>
                  <p className="font-sans text-sm text-midnight/60">You'll receive an email confirmation shortly</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="font-serif text-sm text-gold-dark">2</span>
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-midnight mb-1">Expert Review</p>
                  <p className="font-sans text-sm text-midnight/60">Our travel specialists will review your requirements</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="font-serif text-sm text-gold-dark">3</span>
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-midnight mb-1">Personal Consultation</p>
                  <p className="font-sans text-sm text-midnight/60">We'll contact you within 24 hours with a customized itinerary</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-midnight rounded-2xl p-6 md:p-8 mb-8">
            <p className="font-sans text-sm text-white/80 mb-4">Need immediate assistance?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+917200118411"
                className="inline-flex items-center justify-center gap-2 bg-gold text-midnight font-sans text-sm font-bold px-6 py-3 rounded-xl hover:bg-gold-dark transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M14.5 11.3v2.2c0 .6-.5 1-1 1-1.2 0-2.4-.2-3.5-.6-1-.4-2-.9-2.8-1.6-.8-.7-1.6-1.6-2.2-2.5-.6-1-1-2-1.3-3.1C3.5 5.5 3.5 4.3 3.5 3.1c0-.6.4-1 1-1h2.2c.5 0 1 .4 1 .9 0 .7.1 1.4.3 2 .1.3 0 .7-.2.9l-1 1c.8 1.4 2 2.6 3.4 3.4l1-1c.2-.2.6-.3.9-.2.6.2 1.3.3 2 .3.5.1.9.5.9 1z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Call Us Now
              </a>
              <a
                href="https://wa.me/917200118411"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-sans text-sm font-bold px-6 py-3 rounded-xl hover:border-white/40 transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M13.5 2.5c-1.8-1.8-4.2-2.8-6.7-2.5-4.2.4-7.5 3.9-7.8 8.1-.1 1.4.2 2.8.9 4L-.5 16.5l4.5-1.2c1.2.6 2.5 1 3.8 1h.1c4.6 0 8.4-3.7 8.5-8.3.1-2.2-.8-4.3-2.4-5.9zm-5.7 12.8h-.1c-1.2 0-2.4-.3-3.4-.9l-.2-.2-2.5.7.7-2.4-.2-.3c-.6-1.1-1-2.3-.9-3.6.2-3.5 3.1-6.3 6.7-6.3 1.8 0 3.5.7 4.7 2 1.3 1.2 2 2.9 2 4.7-.1 3.6-3.1 6.5-6.8 6.5zm3.7-5c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1-.1.2-.5.7-.7.8-.1.1-.3.2-.5.1-.2-.1-.9-.3-1.7-1-.6-.6-1-1.3-1.1-1.5-.1-.2 0-.3.1-.4.1-.1.2-.3.4-.4.1-.1.2-.2.2-.4.1-.1 0-.3 0-.4-.1-.1-.5-1.2-.7-1.6-.2-.4-.4-.3-.5-.3h-.4c-.1 0-.4.1-.6.3-.2.2-.7.7-.7 1.7s.7 2 .8 2.1c.1.1 1.4 2.2 3.4 3 .5.2.8.3 1.1.4.5.1.9.1 1.2.1.4 0 1.1-.2 1.3-.7.2-.5.2-.9.1-1-.1-.1-.2-.1-.4-.2z"
                    fill="currentColor"
                  />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-block bg-gold text-midnight font-sans text-sm font-bold px-8 py-4 rounded-2xl hover:bg-gold-dark transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              Back to Home
            </Link>
            <Link
              href="/packages"
              className="inline-block border-2 border-midnight/10 text-midnight font-sans text-sm font-bold px-8 py-4 rounded-2xl hover:border-gold-dark hover:text-gold-dark transition-all duration-300"
            >
              Explore More Packages
            </Link>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="font-serif text-2xl text-gold-dark mb-1">1000+</p>
            <p className="font-sans text-xs text-midnight/60 uppercase tracking-wider">Happy Travelers</p>
          </div>
          <div>
            <p className="font-serif text-2xl text-gold-dark mb-1">24/7</p>
            <p className="font-sans text-xs text-midnight/60 uppercase tracking-wider">Support Available</p>
          </div>
          <div>
            <p className="font-serif text-2xl text-gold-dark mb-1">15+</p>
            <p className="font-sans text-xs text-midnight/60 uppercase tracking-wider">Years Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
}
