import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sacred Pilgrimages — All Yatra Packages",
  description:
    "Explore our complete collection of pilgrimage packages across India, Nepal, and Tibet. Kailash Mansarovar, Char Dham, Varanasi, and more sacred journeys.",
};

const YATRAS = [
  {
    id: "kailash-mansarovar",
    name: "Kailash Mansarovar Yatra",
    subtitle: "The Ultimate Pilgrimage to Mount Kailash",
    region: "Tibet (via Nepal)",
    durationRange: "10N / 11D",
    priceRange: "₹1,85,000+",
    description: "Journey to Lord Shiva's eternal abode at 6,714m. Sacred parikrama of Mount Kailash and holy dip in Lake Mansarovar.",
    img: "/images/pilgrimage/kailash-card.png",
    badge: "ULTIMATE",
    href: "/yatra/kailash-mansarovar",
  },
  {
    id: "char-dham",
    name: "Char Dham Yatra",
    subtitle: "The Four Sacred Abodes of Uttarakhand",
    region: "Uttarakhand",
    durationRange: "10-14 Days",
    priceRange: "₹33,700+",
    description: "Yamunotri, Gangotri, Kedarnath, and Badrinath — the supreme Himalayan circuit.",
    img: "/images/pilgrimage/chardham-card.png",
    badge: "PREMIUM",
    href: "/yatra/char-dham",
  },
  {
    id: "varanasi",
    name: "Varanasi Yatra",
    subtitle: "The Eternal City of Kashi",
    region: "Uttar Pradesh",
    durationRange: "3-7 Days",
    priceRange: "₹18,500+",
    description: "Walk the ancient ghats, witness Ganga Aarti, and experience the spiritual heart of India.",
    img: "/images/pilgrimage/varanasi-card.png",
    badge: "ICONIC",
    href: "/yatra/varanasi",
  },
  {
    id: "uttarakhand",
    name: "Uttarakhand Yatra",
    subtitle: "Do Dham & Sacred Himalayan Circuits",
    region: "Uttarakhand",
    durationRange: "3-7 Days",
    priceRange: "₹15,000+",
    description: "Shorter pilgrimages — Haridwar-Rishikesh, Do Dham (Kedarnath-Badrinath), or Kedarnath-only packages.",
    img: "/images/pilgrimage/uttarakhand-card.png",
    badge: "FLEXIBLE",
    href: "/yatra/uttarakhand",
  },
  {
    id: "uttar-pradesh",
    name: "Uttar Pradesh Circuit",
    subtitle: "Varanasi, Ayodhya, Allahabad & Gaya",
    region: "Uttar Pradesh",
    durationRange: "5-8 Days",
    priceRange: "₹22,000+",
    description: "Complete spiritual circuit covering the holy cities of UP and Bihar — Kashi, Ram Janmabhoomi, Sangam, and Pitru Tarpan.",
    img: "/images/pilgrimage/uttarpradesh-card.png",
    badge: "EXTENDED",
    href: "/yatra/uttar-pradesh",
  },
];

export default function PilgrimagesPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-36 pb-16 px-6 bg-surface">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4">
            The Eternal Path
          </p>
          <h1 className="font-serif text-6xl md:text-7xl text-midnight font-normal leading-tight tracking-tight max-w-3xl mx-auto mb-5">
            Sacred Pilgrimages
          </h1>
          <p className="font-sans text-lg text-[#43474e] max-w-2xl mx-auto leading-relaxed">
            Explore our complete collection of pilgrimage journeys across India and beyond.
            From the Himalayan heights to the temple trails of the South.
          </p>
        </div>
      </section>

      {/* Yatra Cards Grid */}
      <section className="px-6 pb-24 bg-surface" aria-label="All pilgrimage packages">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {YATRAS.map((yatra) => (
              <Link
                key={yatra.id}
                href={yatra.href}
                className="group relative rounded-md overflow-hidden h-full flex flex-col bg-white premium-card-interactive"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={yatra.img}
                    alt={yatra.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                    className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-midnight/20" />
                  
                  {/* Badge */}
                  {yatra.badge && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="font-sans text-[10px] font-semibold tracking-[0.12em] uppercase bg-gold text-midnight px-3 py-1 rounded-full">
                        {yatra.badge}
                      </span>
                    </div>
                  )}

                  {/* Region tag */}
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="font-sans text-xs font-medium text-white/90 bg-midnight/60 backdrop-blur-sm px-3 py-1 rounded-full">
                      {yatra.region}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-4 flex-grow">
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-2xl text-midnight font-normal leading-tight">
                      {yatra.name}
                    </h3>
                    <p className="font-sans text-sm text-gold-dark font-medium">
                      {yatra.subtitle}
                    </p>
                  </div>

                  <p className="font-sans text-sm text-midnight/60 leading-relaxed line-clamp-2 flex-grow">
                    {yatra.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 mt-auto border-t border-surface-low">
                    <div className="flex items-center gap-6 md:gap-8">
                      <div>
                        <p className="font-sans text-[10px] uppercase tracking-wider text-midnight/40 mb-0.5">Duration</p>
                        <p className="font-sans text-sm text-midnight font-semibold">{yatra.durationRange}</p>
                      </div>
                      <div className="h-8 w-px bg-midnight/10 self-center" aria-hidden="true" />
                      <div>
                        <p className="font-sans text-[10px] uppercase tracking-wider text-midnight/40 mb-0.5">Starting from</p>
                        <p className="font-serif text-lg text-gold-dark font-semibold leading-none">{yatra.priceRange}</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full border border-gold-dark/20 flex items-center justify-center text-gold-dark group-hover:bg-gold-dark group-hover:border-gold-dark group-hover:text-white transition-all duration-300 shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 group-hover:translate-x-0.5">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust CTA */}
      <section className="py-24 px-6 bg-midnight">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold mb-5">
            Need Guidance?
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-white font-normal leading-snug mb-6">
            Speak with Our Pilgrimage Specialists
          </h2>
          <p className="font-sans text-base text-white/60 leading-relaxed mb-10 max-w-xl mx-auto">
            Every yatra is unique. Our team will help you choose the perfect sacred journey
            based on your spiritual goals, fitness level, and travel dates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917200118411?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20pilgrimage%20packages"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-sans text-sm font-semibold bg-[#25D366] text-white px-8 py-4 rounded-md hover:opacity-90 transition-opacity duration-300 min-h-11"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp Us
            </a>
            <Link
              href="tel:+917200118411"
              className="inline-flex items-center justify-center gap-2 font-sans text-sm font-semibold text-gold border border-gold/40 px-8 py-4 rounded-md transition-all duration-300 hover:bg-gold hover:text-midnight min-h-11"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call +91 72001 18411
            </Link>
            <a
              href="mailto:info@nithyeshwartours.com"
              className="inline-flex items-center justify-center gap-2 font-sans text-sm font-semibold text-white border border-white/20 px-8 py-4 rounded-md transition-all duration-300 hover:bg-white/10 min-h-11"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
