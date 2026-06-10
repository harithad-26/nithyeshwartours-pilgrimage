import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LuxuryPackageDetailTabs from "@/components/pilgrimage/LuxuryPackageDetailTabs";
import LuxuryPricingSidebar from "@/components/pilgrimage/LuxuryPricingSidebar";

const PACKAGES = {
  "UP-01": {
    code: "UP-01",
    name: "Kashi Essentials — 3 Nights & 4 Days",
    tagline: "A Sacred Pilgrimage to the heart of Kashi",
    description: "A compact yet deeply enriching pilgrimage designed to cover the core sacred sites of Varanasi, including Kashi Vishwanath Darshan and Ganga Aarti.",
    heroImage: {
      src: "/images/pilgrimage/varanasi.jpg",
      alt: "Kashi Temple Varanasi",
    },
    duration: {
      days: 4,
      nights: 3,
      display: "3N / 4D",
    },
    difficulty: "Easy",
    maxAltitude: {
      meters: 80,
      feet: 262,
      display: "80m (262ft)",
    },
    startingPoint: "Varanasi",
    bestSeason: ["October", "November", "December", "January", "February", "March"],
    pricing: {
      startingFrom: 12500,
      currency: "INR",
      display: "₹12,500",
      notes: "Per person on twin sharing standard lodging",
    },
    overview: {
      route: "Varanasi Airport/Station → Kashi Vishwanath → Ganga Aarti → Local temples → Sarnath → Departure",
      destinations: ["Varanasi", "Sarnath"],
      highlights: [
        "Daily pure vegetarian meals and comfortable 3-star lodging",
        "Witness the breathtaking evening Ganga Aarti ceremony",
        "Direct VIP Darshan at Kashi Vishwanath Jyotirlinga Temple",
        "Visit Kal Bhairav and Sankat Mochan Hanuman Temple",
        "Ganga boat ride during the peaceful dawn sunrise",
        "Sarnath excursion to see ancient stupas and history"
      ],
      themes: ["Spiritual Devotion", "Temple Tour"],
    },
    itinerary: [
      {
        day: 1,
        title: "Varanasi Arrival & Evening Ganga Aarti",
        activities: [
          "Pick up from Varanasi Airport/Station and transfer to hotel",
          "Check-in, rest and freshen up",
          "Evening visit to Dashashwamedh Ghat to view Ganga Aarti from a boat",
          "Dinner at the hotel"
        ],
        accommodation: "Hotel Ganga Azure or similar",
        meals: { breakfast: false, lunch: false, dinner: true },
        travelDistance: "Local transfer",
      },
      {
        day: 2,
        title: "Kashi Vishwanath Darshan & Local Temples",
        activities: [
          "Early morning dawn boat ride on Ganga with holy water rituals",
          "VIP Darshan at Kashi Vishwanath Jyotirlinga, Annapurna, and Vishalakshi Temples",
          "Breakfast at hotel",
          "Afternoon visit to BHU, New Vishwanath Temple, Sankat Mochan, and Durga Mandir",
          "Dinner at the hotel"
        ],
        accommodation: "Hotel Ganga Azure or similar",
        meals: { breakfast: true, lunch: false, dinner: true },
        travelDistance: "Local sightseeing",
      },
      {
        day: 3,
        title: "Sarnath Excursion & Shopping Tour",
        activities: [
          "Breakfast at hotel, drive to Sarnath (sacred Buddhist site)",
          "Explore Dhamek Stupa, ruins of Dharmarajika, and local archeological museum",
          "Afternoon return to Varanasi for shopping (famed Banarasi silk fabrics & handicrafts)",
          "Evening free for personal prayers at the ghats; dinner at hotel"
        ],
        accommodation: "Hotel Ganga Azure or similar",
        meals: { breakfast: true, lunch: false, dinner: true },
        travelDistance: "30 km return drive",
      },
      {
        day: 4,
        title: "Departure from Varanasi",
        activities: [
          "Breakfast at hotel, checkout from hotel",
          "Transfer to Varanasi Airport/Station for final departure"
        ],
        accommodation: "End of Journey",
        meals: { breakfast: true, lunch: false, dinner: false },
        travelDistance: "Local transfer",
      }
    ],
    inclusions: [
      "Accommodation in clean, comfortable 3-star hotels (twin-sharing basis)",
      "Daily vegetarian breakfast & dinner at the hotel",
      "All transfers and local sightseeing in private AC sedan",
      "VIP queue tickets for Kashi Vishwanath Temple",
      "Shared boat ride for Ganga Aarti and morning sunrise",
      "Local expert guide throughout Varanasi visits",
      "Tolls, parking fees, and driver allowances"
    ],
    exclusions: [
      "Air or train fares to Varanasi",
      "Lunch meals & personal beverages",
      "Personal puja materials and priest donations",
      "Laundry, phone charges, tips",
      "Travel insurance"
    ],
    hotels: [
      { location: "Varanasi", hotelName: "Hotel Ganga Azure", category: "3-Star Standard", nights: 3 }
    ],
    booking: {
      requiredDocuments: [
        "Aadhar Card / Voter ID / Passport copy",
        "Passenger declaration form"
      ],
      paymentSchedule: [
        { stage: "Booking Advance", amount: "30% of total package cost", due: "At time of booking" },
        { stage: "Final Payment", amount: "Remaining 70% balance", due: "7 days prior to departure date" }
      ],
      importantNotes: [
        "Temples strictly enforce a modest dress code—no shorts or sleeveless tops",
        "Mobile phones are restricted inside the main Vishwanath temple and must be stored in lockers"
      ]
    },
    terms: {
      cancellationPolicy: [
        { timeBefore: "30+ days", refund: "90% refund" },
        { timeBefore: "15-29 days", refund: "50% refund" },
        { timeBefore: "Less than 15 days", refund: "No refund available" }
      ],
      travelInsurance: "Recommended.",
      changes: "Itinerary sequence can adapt due to local traffic and crowd constraints.",
      companyRights: "We reserve the right to swap accommodation for similar categories.",
      refundPolicy: "Unutilized items are non-refundable.",
      ageRestriction: "No age limits."
    },
    preDeparture: {
      clothing: [
        "Modest traditional attire",
        "Walking shoes/sandals for old city lanes"
      ],
      essentials: [
        "Personal medicines, sunscreen, sunglasses",
        "Sufficient physical cash"
      ],
      health: [
        "Drink mineral water only",
        "Avoid heavy street foods if not accustomed to spices"
      ],
      currency: "Indian Rupee (INR)."
    },
    faq: [
      {
        question: "How long does the VIP Darshan take?",
        answer: "With VIP passes, the darshan is completed in approximately 30-45 minutes compared to the general line which can take 2 to 3 hours."
      }
    ]
  },
  "UP-02": {
    code: "UP-02",
    name: "Varanasi-Ayodhya Circuit — 4 Nights & 5 Days",
    tagline: "Lord Shiva's Light & Lord Ram's Birthplace",
    description: "Experience the ultimate sacred combination of Kashi Vishwanath and the brand new grand Ram Janmabhoomi Temple in Ayodhya.",
    heroImage: {
      src: "/images/pilgrimage/varanasi.jpg",
      alt: "Ayodhya Temple Gates",
    },
    duration: {
      days: 5,
      nights: 4,
      display: "4N / 5D",
    },
    difficulty: "Easy",
    maxAltitude: {
      meters: 95,
      feet: 311,
      display: "95m (311ft)",
    },
    startingPoint: "Varanasi",
    bestSeason: ["October", "November", "December", "January", "February", "March"],
    pricing: {
      startingFrom: 18500,
      currency: "INR",
      display: "₹18,500",
      notes: "Per person, including AC sedan transport and standard hotels",
    },
    overview: {
      route: "Varanasi → Sarnath → Ayodhya (Ram Janmabhoomi) → Varanasi Departure",
      destinations: ["Varanasi", "Sarnath", "Ayodhya"],
      highlights: [
        "Complete Kashi Vishwanath and Ayodhya Ram Mandir Darshans",
        "Evening Saryu River Aarti in Ayodhya with private transfers",
        "Visit Hanuman Garhi and Kanak Bhawan in Ayodhya",
        "Local Banarasi handloom saree weavers tour",
        "All inter-city transfers in private AC Sedan",
        "Professional guides in both Varanasi and Ayodhya"
      ],
      themes: ["Ram Janmabhoomi", "Devotional Circuit"],
    },
    itinerary: [
      {
        day: 1,
        title: "Varanasi Arrival & Ganga Aarti",
        activities: [
          "Airport/Station pickup, check into Varanasi hotel",
          "Evening private boat transfer to witness Ganga Aarti at Dashashwamedh Ghat",
          "Dinner at Varanasi hotel"
        ],
        accommodation: "Hotel Ganga Azure or similar",
        meals: { breakfast: false, lunch: false, dinner: true },
        travelDistance: "Local transfer",
      },
      {
        day: 2,
        title: "VIP Kashi Vishwanath & Sarnath Excursion",
        activities: [
          "Morning Kashi Vishwanath VIP Darshan, Annapurna Temple",
          "Breakfast at hotel, drive to Sarnath Buddhist stupas and museum",
          "Return to Varanasi, afternoon visit to Kal Bhairav temple",
          "Dinner at hotel"
        ],
        accommodation: "Hotel Ganga Azure or similar",
        meals: { breakfast: true, lunch: false, dinner: true },
        travelDistance: "30 km sightseeing",
      },
      {
        day: 3,
        title: "Varanasi to Ayodhya & Saryu Aarti",
        activities: [
          "Breakfast, drive to Ayodhya (200 km, 4.5 hours)",
          "Check in at Ayodhya hotel and rest",
          "Evening visit to Hanuman Garhi and Kanak Bhawan temples",
          "Attend Saryu River Aarti ceremony at Ram Ki Paidi",
          "Dinner at hotel"
        ],
        accommodation: "Hotel Saket or similar",
        meals: { breakfast: true, lunch: false, dinner: true },
        travelDistance: "200 km drive",
      },
      {
        day: 4,
        title: "Ram Janmabhoomi Darshan & Return to Varanasi",
        activities: [
          "Morning VIP Darshan at the grand Ram Janmabhoomi Temple complex",
          "Visit Dashrath Mahal and local ghats",
          "Checkout and drive back to Varanasi (200 km)",
          "Check into hotel, evening free for souvenir shopping",
          "Dinner at hotel"
        ],
        accommodation: "Hotel Ganga Azure or similar",
        meals: { breakfast: true, lunch: false, dinner: true },
        travelDistance: "200 km drive",
      },
      {
        day: 5,
        title: "Departure",
        activities: [
          "Breakfast, checkout from hotel",
          "Drop off at Varanasi Airport or railway station for final departure"
        ],
        accommodation: "End of Journey",
        meals: { breakfast: true, lunch: false, dinner: false },
        travelDistance: "Local transfer",
      }
    ],
    inclusions: [
      "Accommodation: 3 nights in Varanasi, 1 night in Ayodhya in standard hotels",
      "Breakfast & dinner daily at hotels",
      "All inter-city & local travel in private AC Sedan",
      "VIP Darshan assistance passes for Kashi Vishwanath & Ram Janmabhoomi",
      "Private boat ride at Varanasi Ghats",
      "Dedicated guides in Varanasi and Ayodhya",
      "All highway tolls, driver fees, and allowances"
    ],
    exclusions: [
      "Travel flights/trains to Varanasi",
      "Lunch meals",
      "Personal puja rituals, offerings, or priest tips",
      "5% GST charges"
    ],
    hotels: [
      { location: "Varanasi", hotelName: "Hotel Ganga Azure", category: "3-Star Hotel", nights: 3 },
      { location: "Ayodhya", hotelName: "Hotel Saket", category: "3-Star Hotel", nights: 1 }
    ],
    booking: {
      requiredDocuments: [
        "Aadhar Card / Voter ID / Passport copy",
        "Photographs for entry checks"
      ],
      paymentSchedule: [
        { stage: "Booking Advance", amount: "30% of total package cost", due: "At time of booking" },
        { stage: "Final Payment", amount: "Remaining 70% balance", due: "7 days prior to departure date" }
      ],
      importantNotes: [
        "Security checks in Ayodhya Ram Mandir are very stringent. Mobiles, chargers, keys, and bags are prohibited inside."
      ]
    },
    terms: {
      cancellationPolicy: [
        { timeBefore: "30+ days", refund: "90% refund" },
        { timeBefore: "15-29 days", refund: "50% refund" },
        { timeBefore: "Less than 15 days", refund: "No refund available" }
      ],
      travelInsurance: "Recommended.",
      changes: "Subject to local traffic changes.",
      companyRights: "Right to change hotels reserved.",
      refundPolicy: "Unused items are non-refundable.",
      ageRestriction: "None."
    },
    preDeparture: {
      clothing: [
        "Modest traditional clothing",
        "Slip-on sandals"
      ],
      essentials: [
        "Medicines, sunscreen, cash"
      ],
      health: [
        "Drink bottled water"
      ],
      currency: "INR."
    },
    faq: [
      {
        question: "Can we depart from Lucknow instead of returning to Varanasi?",
        answer: "Yes! Ayodhya to Lucknow is only 130 km (2.5 hours). We can arrange your drop-off at Lucknow Airport (LKO) on Day 4 or 5 instead of Varanasi. Please request this during booking."
      }
    ]
  },
  "UP-03": {
    code: "UP-03",
    name: "Grand UP Yatra — 6 Nights & 7 Days",
    tagline: "Odyssey of Kashi, Prayagraj & Ayodhya",
    description: "A comprehensive journey through India's absolute most sacred lands: Varanasi, Ayodhya's Ram Mandir, and the Prayagraj Triveni Sangam.",
    heroImage: {
      src: "/images/india-states/varanasi-ghats.jpg",
      alt: "Sunrise over Ganga",
    },
    duration: {
      days: 7,
      nights: 6,
      display: "6N / 7D",
    },
    difficulty: "Easy to Moderate",
    maxAltitude: {
      meters: 100,
      feet: 328,
      display: "100m (328ft)",
    },
    startingPoint: "Varanasi",
    bestSeason: ["October", "November", "December", "January", "February", "March"],
    pricing: {
      startingFrom: 32000,
      currency: "INR",
      display: "₹32,000",
      notes: "Per person, includes premium hotels and private Crysta SUV transfers",
    },
    overview: {
      route: "Varanasi → Prayagraj (Sangam) → Ayodhya → Varanasi",
      destinations: ["Varanasi", "Prayagraj", "Ayodhya"],
      highlights: [
        "VIP Darshan at Kashi Vishwanath Jyotirlinga and Ram Janmabhoomi",
        "Private boat ride at Triveni Sangam confluence, Prayagraj",
        "Stay in premium hotels across the entire circuit",
        "Attend both Ganga Aarti (Varanasi) and Saryu Aarti (Ayodhya)",
        "Visit Hanuman Garhi, Anand Bhawan, and ancient Akshayavat",
        "Comfortable private Innova SUV for the entire loop"
      ],
      themes: ["Grand Loop", "Vedic Heritage", "Premium Tour"],
    },
    itinerary: [
      {
        day: 1,
        title: "Varanasi Arrival & Ganga Aarti",
        activities: [
          "Private pick-up from Varanasi Airport, check into premium hotel",
          "Evening transfer to ghats for private boat view of Ganga Aarti",
          "Dinner at hotel"
        ],
        accommodation: "Hotel Radisson or similar",
        meals: { breakfast: false, lunch: false, dinner: true },
        travelDistance: "Local transfer",
      },
      {
        day: 2,
        title: "VIP Kashi Vishwanath & Sarnath Excursion",
        activities: [
          "Morning VIP Darshan at Kashi Vishwanath Temple",
          "Breakfast at hotel, drive to Sarnath (Dhamek Stupa & ruins)",
          "Return to Varanasi, afternoon visit to Kal Bhairav temple",
          "Evening free, dinner at hotel"
        ],
        accommodation: "Hotel Radisson or similar",
        meals: { breakfast: true, lunch: false, dinner: true },
        travelDistance: "35 km travel",
      },
      {
        day: 3,
        title: "Varanasi to Prayagraj (Triveni Sangam)",
        activities: [
          "Breakfast, check out and drive to Prayagraj (125 km, 2.5 hours)",
          "Check in at hotel and freshen up",
          "Private boat ride to Triveni Sangam for holy dip and rituals",
          "Visit sleeping Hanuman Temple, Prayagraj Fort, and Akshayavat",
          "Dinner at Prayagraj hotel"
        ],
        accommodation: "Hotel Kanha Shyam or similar",
        meals: { breakfast: true, lunch: false, dinner: true },
        travelDistance: "125 km drive",
      },
      {
        day: 4,
        title: "Prayagraj to Ayodhya & Saryu Aarti",
        activities: [
          "Breakfast, checkout and drive to Ayodhya (170 km, 4 hours)",
          "Check into hotel in Ayodhya, afternoon rest",
          "Visit Hanuman Garhi temple and Kanak Bhawan",
          "Evening Saryu River Aarti attendance, dinner at hotel"
        ],
        accommodation: "Hotel Royal Heritage or similar",
        meals: { breakfast: true, lunch: false, dinner: true },
        travelDistance: "170 km drive",
      },
      {
        day: 5,
        title: "Ram Janmabhoomi & Drive back to Varanasi",
        activities: [
          "Morning VIP Darshan at Ram Janmabhoomi temple",
          "Visit Dashrath Mahal and Nageshwarnath temple",
          "Checkout and drive back to Varanasi (200 km)",
          "Check in at Varanasi hotel for relaxation, dinner at hotel"
        ],
        accommodation: "Hotel Radisson or similar",
        meals: { breakfast: true, lunch: false, dinner: true },
        travelDistance: "200 km drive",
      },
      {
        day: 6,
        title: "Kashi Cultural Day & Shopping",
        activities: [
          "Breakfast at hotel, visit BHU campus and Birla temple",
          "Shopping excursion for Banarasi sarees and local sweets/savories",
          "Evening leisure walks along the ghats, lamp floating ritual",
          "Grand farewell dinner at hotel"
        ],
        accommodation: "Hotel Radisson or similar",
        meals: { breakfast: true, lunch: false, dinner: true },
        travelDistance: "Local travel",
      },
      {
        day: 7,
        title: "Departure",
        activities: [
          "Breakfast, checkout from hotel",
          "Transfer drop off at Varanasi Airport or station for final return departure"
        ],
        accommodation: "End of Journey",
        meals: { breakfast: true, lunch: false, dinner: false },
        travelDistance: "Local transfer",
      }
    ],
    inclusions: [
      "Accommodation: 4 nights in Varanasi, 1 night in Prayagraj, 1 night in Ayodhya in 4-star properties",
      "Daily breakfast & dinner (vegetarian buffet style)",
      "All travel in private AC Innova Crysta SUV",
      "VIP temple darshan passes for Kashi Vishwanath & Ram Janmabhoomi",
      "Private boat hires at Varanasi and Prayagraj Triveni Sangam",
      "Local expert guides at Varanasi, Prayagraj, and Ayodhya",
      "All toll, parking, driver fees, and taxes"
    ],
    exclusions: [
      "Domestic airfare or train tickets to/from Varanasi",
      "Lunch meals",
      "Personal tips, puja expenses, or donations",
      "5% GST charges"
    ],
    hotels: [
      { location: "Varanasi", hotelName: "Hotel Radisson", category: "4-Star Hotel", nights: 4 },
      { location: "Prayagraj", hotelName: "Hotel Kanha Shyam", category: "Premium Hotel", nights: 1 },
      { location: "Ayodhya", hotelName: "Hotel Royal Heritage", category: "Premium Hotel", nights: 1 }
    ],
    booking: {
      requiredDocuments: [
        "Aadhar Card / Voter ID / Passport copy"
      ],
      paymentSchedule: [
        { stage: "Booking Advance", amount: "40% of total package cost", due: "At time of booking" },
        { stage: "Final Payment", amount: "Remaining 60% balance", due: "10 days prior to departure date" }
      ],
      importantNotes: [
        "Laptops, heavy luggage, and electronic cameras are not allowed inside the Ayodhya Ram Janmabhoomi security gates. Safe lockers are available."
      ]
    },
    terms: {
      cancellationPolicy: [
        { timeBefore: "30+ days", refund: "90% refund" },
        { timeBefore: "15-29 days", refund: "50% refund" },
        { timeBefore: "Less than 15 days", refund: "No refund available" }
      ],
      travelInsurance: "Recommended.",
      changes: "Itinerary changes can happen due to highway conditions.",
      companyRights: "We reserve right to swap hotels to equivalent standard.",
      refundPolicy: "Unused items are non-refundable.",
      ageRestriction: "None."
    },
    preDeparture: {
      clothing: [
        "Traditional modest attire",
        "Comfortable walking shoes"
      ],
      essentials: [
        "Medicines, sunscreen, physical cash"
      ],
      health: [
        "Drink bottled mineral water"
      ],
      currency: "INR."
    },
    faq: [
      {
        question: "Is taking a holy dip at Triveni Sangam safe?",
        answer: "Yes, our private boat drivers will take you to safe wooden platforms built at the confluence. Life jackets are provided on the boats for your safety."
      }
    ]
  }
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ packageCode: string }>;
}): Promise<Metadata> {
  const { packageCode } = await params;
  const pkg = PACKAGES[packageCode as keyof typeof PACKAGES];
  
  if (!pkg) {
    return {
      title: "Package Not Found",
    };
  }

  return {
    title: `${pkg.name} | Uttar Pradesh Yatra`,
    description: pkg.description,
  };
}

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ packageCode: string }>;
}) {
  const { packageCode } = await params;
  const pkg = PACKAGES[packageCode as keyof typeof PACKAGES];

  if (!pkg) {
    notFound();
  }

  return (
    <>
      {/* Luxury Hero Section */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <Image
          src={pkg.heroImage.src}
          alt={pkg.heroImage.alt}
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-transparent" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pb-20">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 font-sans text-xs text-white/50">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/yatra/uttar-pradesh" className="hover:text-white transition-colors">Uttar Pradesh Yatra</Link>
            <span>/</span>
            <span className="text-white">{pkg.code}</span>
          </nav>

          <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur border border-white/20 mb-6">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white">{pkg.code}</span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-[0.95] max-w-4xl font-light">
            {pkg.name.split('—')[0].trim()}
          </h1>

          <p className="font-serif text-xl md:text-2xl text-white/80 mb-12 max-w-2xl leading-relaxed font-light">
            {pkg.tagline}
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap items-center gap-6 mb-12 font-sans text-sm text-white/70">
            <div className="flex items-center gap-2">
              <span className="text-white/40">Duration</span>
              <span className="text-white font-medium">{pkg.duration.display}</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-white/40">Altitude</span>
              <span className="text-white font-medium">{pkg.maxAltitude.display.split('(')[0].trim()}</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-white/40">From</span>
              <span className="text-white font-medium">{pkg.pricing.display}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={`/inquiry?package=${pkg.code}`}
              className="inline-flex items-center gap-2 font-sans px-8 py-4 bg-white text-midnight text-sm font-semibold hover:bg-white/95 transition-all duration-300"
            >
              Book This Package
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l7 7-7 7" />
              </svg>
            </a>
            <a
              href="https://wa.me/917200118411"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans px-8 py-4 bg-white/10 backdrop-blur text-white text-sm font-medium border border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Main Page Layout Grid */}
      <div className="bg-[#F8F7F4] min-h-screen py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <LuxuryPackageDetailTabs packageData={pkg} />
            </div>

            <div className="lg:col-span-4 relative hidden lg:block">
              <div className="sticky top-[152px]">
                <LuxuryPricingSidebar pkg={pkg} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Pricing Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-midnight/5 z-50 lg:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <div className="font-sans text-[10px] font-semibold uppercase tracking-wider text-midnight/40 mb-1">From</div>
            <div className="font-serif text-2xl text-midnight font-light">{pkg.pricing.display}</div>
          </div>
          <div className="flex gap-3">
            <a
              href="https://wa.me/917200118411"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-3 border border-midnight/10 text-midnight rounded"
            >
              <svg className="w-5 h-5 fill-current text-green-600" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.208-3.79c1.661.986 3.292 1.503 4.794 1.504 5.518 0 10.005-4.486 10.008-10.004.002-2.673-1.03-5.184-2.905-7.062C16.287 2.766 13.784 1.72 11.11 1.72c-5.524 0-10.01 4.487-10.014 10.007-.001 1.905.511 3.766 1.481 5.392L1.582 21.03l3.961-1.028 1.439.845-.717-2.637zM17.38 15.65c-.297-.15-1.758-.867-2.03-.967-.273-.099-.471-.15-.669.15-.198.297-.768.967-.941 1.165-.173.199-.347.223-.644.074-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.15-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.075-.15-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            </svg>
          </a>
          <a
            href={`/inquiry?package=${pkg.code}`}
            className="font-sans px-6 py-3 bg-midnight text-white text-sm font-semibold hover:bg-midnight/90 transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>
      </div>
    </>
  );
}
