import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LuxuryPackageDetailTabs, { LuxuryPackageDetailNav } from "@/components/pilgrimage/LuxuryPackageDetailTabs";
import LuxuryPricingSidebar from "@/components/pilgrimage/LuxuryPricingSidebar";

const PACKAGES = {
  "uk-01": {
    code: "UK-01",
    name: "Haridwar-Rishikesh Circuit — 3 Nights & 4 Days",
    tagline: "Gateway to the Himalayas",
    description: "Explore the holy twins of Haridwar and Rishikesh. Witness the Ganga Aarti, visit ancient temples, and relax in the yoga capital.",
    heroImage: {
      src: "/images/india-states/har-ki-pauri.png",
      alt: "Haridwar Har Ki Pauri Sacred Ghat on the Ganges",
    },
    duration: {
      days: 4,
      nights: 3,
      display: "3N / 4D",
    },
    difficulty: "Easy",
    maxAltitude: {
      meters: 340,
      feet: 1115,
      display: "340m (1,115ft)",
    },
    startingPoint: "Haridwar",
    bestSeason: ["Year-round", "October to March recommended"],
    pricing: {
      startingFrom: 15000,
      currency: "INR",
      display: "₹15,000",
      notes: "Per person, based on twin-sharing standard room",
    },
    overview: {
      route: "Haridwar → Rishikesh → Haridwar",
      destinations: ["Haridwar", "Rishikesh"],
      highlights: [
        "Attend the sacred Ganga Aarti at Har Ki Pauri, Haridwar",
        "Visit historic Laxman Jhula, Ram Jhula, and Beatles Ashram in Rishikesh",
        "Guided temple tour of Mansa Devi and Chandi Devi with cable car rides",
        "Spend time in peaceful ashrams along the river banks",
        "All transfers and tours in comfortable AC private vehicle",
        "Satvik vegetarian dining showcasing local Himalayan food styles"
      ],
      themes: ["Spiritual Retreat", "Ganges Heritage", "Yoga Capital"],
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Haridwar & Ganga Aarti",
        activities: [
          "Pick up from Haridwar railway station or Dehradun Airport (DED)",
          "Transfer to hotel, check in and rest",
          "Evening visit to Har Ki Pauri to witness the divine Ganga Aarti from VIP seating areas",
          "Hot vegetarian dinner at the hotel"
        ],
        accommodation: "Hotel Ganga Azure or similar",
        meals: { breakfast: false, lunch: false, dinner: true },
        travelDistance: "Local transfer",
      },
      {
        day: 2,
        title: "Haridwar Temples & Transfer to Rishikesh",
        activities: [
          "Breakfast at the hotel, visit the hilltop Mansa Devi and Chandi Devi Temples via cable car (Udan Khatola)",
          "Visit Daksh Mahadev Temple and Maya Devi Temple",
          "Afternoon drive to Rishikesh (30 km, 1 hour)",
          "Check in at Rishikesh hotel, attend evening Ganga Aarti at Parmarth Niketan Ashram",
          "Dinner at Rishikesh hotel"
        ],
        accommodation: "Hotel Divine Resorts or similar",
        meals: { breakfast: true, lunch: false, dinner: true },
        travelDistance: "35 km drive",
      },
      {
        day: 3,
        title: "Rishikesh Exploration & Yoga Ashram Walk",
        activities: [
          "Morning yoga and meditation session led by ashram masters (optional)",
          "Breakfast at hotel, then visit Ram Jhula and Laxman Jhula suspension bridges",
          "Explore the historic Beatles Ashram (Chaurasi Kutia) and Swarg Ashram",
          "Evening free for personal exploration or sitting by the ghats",
          "Dinner at the hotel"
        ],
        accommodation: "Hotel Divine Resorts or similar",
        meals: { breakfast: true, lunch: false, dinner: true },
        travelDistance: "Local sightseeing",
      },
      {
        day: 4,
        title: "Departure from Haridwar / Rishikesh",
        activities: [
          "Breakfast at Rishikesh hotel, checkout",
          "Depending on departure timings, transfer back to Haridwar station or Dehradun Airport",
          "End of sacred pilgrimage services"
        ],
        accommodation: "End of Journey",
        meals: { breakfast: true, lunch: false, dinner: false },
        travelDistance: "Local transfer",
      }
    ],
    inclusions: [
      "Accommodation in standard 3-star comfort properties (twin-sharing basis)",
      "Daily pure vegetarian breakfast & dinner at hotels",
      "Private AC Sedan/SUV for all transfers and tours (Haridwar to Haridwar)",
      "Mansa Devi & Chandi Devi cable car tickets included",
      "Parmarth Niketan evening Aarti coordination",
      "Dedicated local tour guide for sightseeing",
      "All toll taxes, parking fees, and driver allowances"
    ],
    exclusions: [
      "Flight or train fares to Haridwar/Dehradun",
      "Lunch meals during the tour",
      "Personal tips, laundry, telephone charges",
      "Travel insurance"
    ],
    hotels: [
      { location: "Haridwar", hotelName: "Hotel Ganga Azure", category: "3-Star Hotel", nights: 1 },
      { location: "Rishikesh", hotelName: "Hotel Divine Resorts", category: "River-View Comfort", nights: 2 }
    ],
    booking: {
      requiredDocuments: [
        "Aadhar Card / Voter ID / Passport copy",
        "Completed registration details"
      ],
      paymentSchedule: [
        { stage: "Booking Advance", amount: "30% of total package cost", due: "At time of booking" },
        { stage: "Final Payment", amount: "Remaining 70% balance", due: "7 days prior to departure date" }
      ],
      importantNotes: [
        "Temples require modest dressing—shoulders and knees must be covered",
        "Non-vegetarian food and alcohol are strictly prohibited in both Haridwar and Rishikesh municipal zones"
      ]
    },
    terms: {
      cancellationPolicy: [
        { timeBefore: "30+ days", refund: "95% refund" },
        { timeBefore: "15-29 days", refund: "50% refund" },
        { timeBefore: "Less than 15 days", refund: "No refund available" }
      ],
      travelInsurance: "Recommended.",
      changes: "Itinerary sequence may alter due to local administration VIP movements or festivals.",
      companyRights: "We reserve the right to modify routes to avoid seasonal traffic congestion.",
      refundPolicy: "Unused meals or services are non-refundable.",
      ageRestriction: "Suitable for all age groups."
    },
    preDeparture: {
      clothing: [
        "Light cotton clothes for summer",
        "Light shawl or pullover for evening Aarti sessions",
        "Comfortable walking shoes"
      ],
      essentials: [
        "Personal medicines, sunscreen",
        "Sufficient cash"
      ],
      health: [
        "Drink bottled water"
      ],
      currency: "INR."
    },
    faq: [
      {
        question: "Is rafting included in the Rishikesh package?",
        answer: "Rafting is not included by default to cater to all age groups, but our tour manager can help you book safe river rafting sessions with certified operators during your free time on Day 3."
      }
    ]
  },
  "uk-02": {
    code: "UK-02",
    name: "Do Dham Yatra — 6 Nights & 7 Days",
    tagline: "Divine Peaks of Kedarnath & Badrinath",
    description: "A sacred Himalayan pilgrimage covering the two most powerful shrines: Kedarnath Jyotirlinga and Badrinath Temple.",
    heroImage: {
      src: "/images/pilgrimage/badrinath.jpg",
      alt: "Badrinath Temple Shrine",
    },
    duration: {
      days: 7,
      nights: 6,
      display: "6N / 7D",
    },
    difficulty: "Moderate to Challenging",
    maxAltitude: {
      meters: 3583,
      feet: 11755,
      display: "3,583m (11,755ft)",
    },
    startingPoint: "Haridwar",
    bestSeason: ["May", "June", "September", "October"],
    pricing: {
      startingFrom: 28000,
      currency: "INR",
      display: "₹28,000",
      notes: "Per person, twin sharing. Includes basic Kedarnath and comfort Badrinath lodging",
    },
    overview: {
      route: "Haridwar → Guptkashi → Kedarnath → Badrinath → Rudraprayag → Haridwar",
      destinations: ["Haridwar", "Guptkashi", "Kedarnath", "Badrinath", "Rudraprayag"],
      highlights: [
        "Darshan at holy Kedarnath Jyotirlinga and Badrinath Temple",
        "Trek through the gorgeous Mandakini and Alaknanda valleys",
        "Visit Mana Village, the last Indian village at the Tibetan border",
        "Attend confluences at Rudraprayag and Devprayag",
        "Professional spiritual guide throughout the Himalayan loop",
        "Coordinated priority queue passes for Darshan"
      ],
      themes: ["High-Altitude Pilgrimage", "Spiritual devotion"],
    },
    itinerary: [
      {
        day: 1,
        title: "Haridwar to Guptkashi",
        activities: [
          "Early morning pick up from Haridwar, drive to Guptkashi (220 km, 8 hours) along Ganges & Mandakini confluences",
          "En route views of Devprayag and Rudraprayag confluences",
          "Check in at hotel in Guptkashi, rest and acclimatize",
          "Dinner at the hotel"
        ],
        accommodation: "Hotel Mandakini or similar",
        meals: { breakfast: false, lunch: false, dinner: true },
        travelDistance: "220 km drive",
      },
      {
        day: 2,
        title: "Guptkashi – Gaurikund – Kedarnath Trek",
        activities: [
          "Early morning drive to Sonprayag/Gaurikund basecamp",
          "Begin the challenging 18 km trek to Kedarnath Temple (options: walk, pony, palki or pre-booked helicopter shuttle)",
          "Arrive Kedarnath plateau by evening, check into guest houses",
          "Attend the powerful evening Aarti ceremony at the ancient stone temple",
          "Dinner and overnight stay in Kedarnath"
        ],
        accommodation: "Local Guest House (Basic comfort room sharing)",
        meals: { breakfast: true, lunch: true, dinner: true },
        altitude: "3,583m",
        travelDistance: "18 km trek",
      },
      {
        day: 3,
        title: "Kedarnath to Guptkashi",
        activities: [
          "Early morning Bhasma Abhishek puja at the sanctum sanctorum of Kedarnath Temple",
          "Trek back down 18 km to Gaurikund basecamp",
          "Drive back to Guptkashi hotel in private vehicle",
          "Full evening rest, delicious hot dinner at resort"
        ],
        accommodation: "Hotel Mandakini or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        travelDistance: "18 km trek + local drive",
      },
      {
        day: 4,
        title: "Guptkashi to Badrinath",
        activities: [
          "Scenic drive to Badrinath via Joshimath pass (190 km, 8 hours)",
          "En route visit the ancient Narsingh Temple at Joshimath",
          "Arrive Badrinath, take holy dip in Tapt Kund natural hot springs",
          "Special evening Aarti inside the Badrinath Temple shrine",
          "Dinner and stay at Badrinath"
        ],
        accommodation: "Hotel Narayan Palace or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        travelDistance: "190 km drive",
      },
      {
        day: 5,
        title: "Badrinath – Mana Village – Rudraprayag",
        activities: [
          "Explore Mana Village (Vyas Gufa, Ganesh Gufa, Bhim Pul over Saraswati River)",
          "Checkout and drive to Rudraprayag confluence (160 km, 6 hours)",
          "Check in at river-view hotel in Rudraprayag, evening rest",
          "Dinner at the hotel"
        ],
        accommodation: "Hotel Tulip or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        travelDistance: "160 km drive",
      },
      {
        day: 6,
        title: "Rudraprayag to Haridwar via Rishikesh",
        activities: [
          "Breakfast, drive back to Haridwar (160 km, 6 hours)",
          "Stopover in Rishikesh to visit Laxman Jhula and Ram Jhula",
          "Arrive Haridwar hotel, check in, evening free for personal shopping",
          "Dinner at hotel"
        ],
        accommodation: "Hotel Ganga Azure or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        travelDistance: "160 km drive",
      },
      {
        day: 7,
        title: "Departure",
        activities: [
          "Breakfast at hotel, checkout",
          "Transfer drop off at Haridwar railway station or Dehradun Airport for final return journey"
        ],
        accommodation: "End of Journey",
        meals: { breakfast: true, lunch: false, dinner: false },
        travelDistance: "Local transfer",
      }
    ],
    inclusions: [
      "Accommodation: 2 nights in Guptkashi, 1 night in Kedarnath, 1 night in Badrinath, 1 night in Rudraprayag, 1 night in Haridwar",
      "Pure vegetarian Satvik meals (daily breakfast & dinner, packed lunches on trek)",
      "All transfers by comfortable AC SUV (Haridwar to Haridwar)",
      "Spiritual tour guide assisting throughout the Himalayan loop",
      "Forest permits, biometric registration card fees, and local tolls",
      "Medical first-aid oxygen cylinder backup in the transfer vehicle"
    ],
    exclusions: [
      "Flight or train fares to Haridwar",
      "Pony, doli, porter, or helicopter tickets for Kedarnath/Yamunotri treks",
      "VIP temple entry tickets or personal puja expenses",
      "Personal items: laundry, tips, phone calls",
      "Travel insurance"
    ],
    hotels: [
      { location: "Guptkashi", hotelName: "Hotel Mandakini", category: "3-Star Hotel", nights: 2 },
      { location: "Kedarnath", hotelName: "Local Guest House", category: "Basic Guesthouse", nights: 1 },
      { location: "Badrinath", hotelName: "Hotel Narayan Palace", category: "3-Star Hotel", nights: 1 },
      { location: "Rudraprayag", hotelName: "Hotel Tulip", category: "3-Star Hotel", nights: 1 },
      { location: "Haridwar", hotelName: "Hotel Ganga Azure", category: "3-Star Hotel", nights: 1 }
    ],
    booking: {
      requiredDocuments: [
        "Aadhar Card / Voter ID / Passport copy",
        "Biometric registration registration details (managed by our team)",
        "Self-declaration medical fitness form"
      ],
      paymentSchedule: [
        { stage: "Booking Advance", amount: "30% of total package cost", due: "At time of booking" },
        { stage: "Second Payment", amount: "40% of total package cost", due: "15 days before departure" },
        { stage: "Final Payment", amount: "Remaining 30% balance", due: "7 days prior to departure date" }
      ],
      importantNotes: [
        "Bring thermal innerwear and heavy jackets—temperatures at Kedarnath can drop below 5°C even in summer",
        "Kedarnath trek is physically demanding, start physical walk preparation 30 days prior"
      ]
    },
    terms: {
      cancellationPolicy: [
        { timeBefore: "30+ days", refund: "90% refund" },
        { timeBefore: "15-29 days", refund: "50% refund" },
        { timeBefore: "Less than 15 days", refund: "No refund available" }
      ],
      travelInsurance: "Comprehensive high-altitude medical travel insurance is highly recommended.",
      changes: "Road closures due to landslides or weather may alter the itinerary sequences.",
      companyRights: "We reserve the right to swap accommodation depending on road availability.",
      refundPolicy: "Unused items are non-refundable.",
      ageRestriction: "Recommended for age groups between 8 and 70 years old."
    },
    preDeparture: {
      clothing: [
        "Heavy woolen jacket & fleece sweaters",
        "Thermal innerwear",
        "Raincoat or umbrella (essential for sudden mountain rains)",
        "Sturdy hiking shoes with good rubber grip"
      ],
      essentials: [
        "Personal altitude medicines, sunscreen, sunglasses",
        "Power bank for mobile charging due to remote locations"
      ],
      health: [
        "Perform cardio prep walks prior to the trip",
        "Avoid smoking/alcohol during the yatra"
      ],
      currency: "INR. Carry cash as internet signal is poor at Kedarnath/Badrinath, making UPI and ATMs unreliable."
    },
    faq: [
      {
        question: "How do we book the helicopter for Kedarnath?",
        answer: "Helicopter services are managed by the state aviation department and bookings open months in advance. Please select the helicopter upgrade option at booking time so our helpdesk can secure slots for you."
      }
    ]
  },
  "uk-03": {
    code: "UK-03",
    name: "Kedarnath Special — 4 Nights & 5 Days",
    tagline: "Pilgrimage to Lord Shiva's Abode",
    description: "A focused package dedicated entirely to the sacred Kedarnath Temple. Ideal for pilgrims seeking a shorter trip with direct trekking focus.",
    heroImage: {
      src: "/images/india-states/kedarnath-temple.png",
      alt: "Kedarnath Temple and peaks",
    },
    duration: {
      days: 5,
      nights: 4,
      display: "4N / 5D",
    },
    difficulty: "Moderate to Challenging",
    maxAltitude: {
      meters: 3583,
      feet: 11755,
      display: "3,583m (11,755ft)",
    },
    startingPoint: "Haridwar",
    bestSeason: ["May", "June", "September", "October"],
    pricing: {
      startingFrom: 22000,
      currency: "INR",
      display: "₹22,000",
      notes: "Per person on twin sharing standard lodging",
    },
    overview: {
      route: "Haridwar → Guptkashi → Kedarnath → Guptkashi → Haridwar",
      destinations: ["Haridwar", "Guptkashi", "Kedarnath"],
      highlights: [
        "Dedicated focus on Kedarnath Temple Darshan and Aarti",
        "18 km trek from Gaurikund basecamp to Kedarnath plateau",
        "Bypasses other Dhams for a shorter, focused itinerary",
        "AC transport from Haridwar to Guptkashi and back",
        "Experienced guides for safety in high elevation",
        "All permits and biometric cards coordinated"
      ],
      themes: ["Shiva Devotion", "Mountain Trekking"],
    },
    itinerary: [
      {
        day: 1,
        title: "Haridwar to Guptkashi",
        activities: [
          "Early morning pick up from Haridwar, drive to Guptkashi (220 km, 8 hours)",
          "Scenic mountain drive alongside Alaknanda & Mandakini rivers",
          "Check in at hotel in Guptkashi, evening rest and briefing",
          "Dinner at the hotel"
        ],
        accommodation: "Hotel Mandakini or similar",
        meals: { breakfast: false, lunch: false, dinner: true },
        travelDistance: "220 km drive",
      },
      {
        day: 2,
        title: "Guptkashi – Gaurikund – Kedarnath Trek",
        activities: [
          "Drive to Sonprayag/Gaurikund basecamp early morning",
          "Begin the 18 km trek up to Kedarnath Temple (walk, pony, palki or helicopter)",
          "Arrive Kedarnath mountain plateau, check in at guesthouses",
          "Attend the glorious evening Aarti at Kedarnath Temple",
          "Dinner and overnight stay in Kedarnath guesthouses"
        ],
        accommodation: "Local Guest House (Basic shared rooms)",
        meals: { breakfast: true, lunch: true, dinner: true },
        altitude: "3,583m",
        travelDistance: "18 km trek",
      },
      {
        day: 3,
        title: "Kedarnath to Guptkashi",
        activities: [
          "Early morning Abhishek puja at the temple",
          "Trek back down 18 km to Gaurikund basecamp",
          "Re-join transfer vehicles and drive back to Guptkashi hotel",
          "Rest day after the trek, hot dinner at the hotel"
        ],
        accommodation: "Hotel Mandakini or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        travelDistance: "18 km trek + local drive",
      },
      {
        day: 4,
        title: "Guptkashi to Haridwar",
        activities: [
          "Breakfast, check out and drive back to Haridwar (220 km, 8 hours)",
          "Arrive Haridwar hotel, check in",
          "Attend evening Ganga Aarti at Har Ki Pauri ghat",
          "Dinner at the hotel"
        ],
        accommodation: "Hotel Ganga Azure or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        travelDistance: "220 km drive",
      },
      {
        day: 5,
        title: "Departure",
        activities: [
          "Breakfast, checkout from hotel",
          "Transfer drop off at Haridwar railway station or Dehradun Airport"
        ],
        accommodation: "End of Journey",
        meals: { breakfast: true, lunch: false, dinner: false },
        travelDistance: "Local transfer",
      }
    ],
    inclusions: [
      "Accommodation: 2 nights in Guptkashi, 1 night in Kedarnath, 1 night in Haridwar",
      "Pure vegetarian breakfast & dinner daily",
      "All transfers by comfortable AC SUV (Haridwar to Haridwar)",
      "Local guide assisting during the Gaurikund to Kedarnath trek",
      "Forest permits, tolls, parking, and biometric registration managed"
    ],
    exclusions: [
      "Flight or train fares to Haridwar",
      "Pony, porter, or helicopter ride charges",
      "VIP temple passes or personal puja fees",
      "Personal items, laundry, tips",
      "5% GST charges"
    ],
    hotels: [
      { location: "Guptkashi", hotelName: "Hotel Mandakini", category: "3-Star Hotel", nights: 2 },
      { location: "Kedarnath", hotelName: "Local Guest House", category: "Basic Guesthouse", nights: 1 },
      { location: "Haridwar", hotelName: "Hotel Ganga Azure", category: "3-Star Hotel", nights: 1 }
    ],
    booking: {
      requiredDocuments: [
        "Aadhar Card / Voter ID copy",
        "Medical self-declaration form"
      ],
      paymentSchedule: [
        { stage: "Booking Advance", amount: "30% of total package cost", due: "At time of booking" },
        { stage: "Final Payment", amount: "Remaining 70% balance", due: "7 days prior to departure date" }
      ],
      importantNotes: [
        "Temperatures at Kedarnath can drop to freezing point—ensure heavy warm layers are packed",
        "Helicopter slot booking requests must be made immediately upon trip booking"
      ]
    },
    terms: {
      cancellationPolicy: [
        { timeBefore: "30+ days", refund: "90% refund" },
        { timeBefore: "15-29 days", refund: "50% refund" },
        { timeBefore: "Less than 15 days", refund: "No refund available" }
      ],
      travelInsurance: "Recommended.",
      changes: "Subject to weather and landslide clearances.",
      companyRights: "We reserve the right to swap hotel selections depending on road closures.",
      refundPolicy: "Unused items are non-refundable.",
      ageRestriction: "Recommended for 8 to 70 years."
    },
    preDeparture: {
      clothing: [
        "Heavy warm jackets & thermals",
        "Raincoat/poncho (very important)",
        "Comfortable hiking footwear"
      ],
      essentials: [
        "Personal medicines, sunscreen, physical cash",
        "Mobile power banks"
      ],
      health: [
        "Walk at least 5-6 km daily for 3 weeks prior to departure to prepare for the trek"
      ],
      currency: "INR."
    },
    faq: [
      {
        question: "Can children do the Kedarnath trek?",
        answer: "Children above 8 years old can do the trek. For younger children, hiring a pony or palki/doli is highly recommended."
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
  const pkg = PACKAGES[packageCode.toLowerCase() as keyof typeof PACKAGES];
  
  if (!pkg) {
    return {
      title: "Package Not Found",
    };
  }

  return {
    title: `${pkg.name} | Uttarakhand Yatra`,
    description: pkg.description,
  };
}

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ packageCode: string }>;
}) {
  const { packageCode } = await params;
  const pkg = PACKAGES[packageCode.toLowerCase() as keyof typeof PACKAGES];

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
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-10 sm:pb-16 md:pb-20">
          {/* Breadcrumb */}
          <nav className="mb-4 sm:mb-6 md:mb-8 flex items-center gap-2 font-sans text-xs text-white/50">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/yatra/uttarakhand" className="hover:text-white transition-colors">Uttarakhand Yatra</Link>
            <span>/</span>
            <span className="text-white">{pkg.code}</span>
          </nav>

          <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur border border-white/20 mb-4 sm:mb-6">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white">{pkg.code}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-7xl text-white mb-4 sm:mb-6 leading-[0.95] max-w-4xl font-light line-clamp-2">
            {pkg.name.split('—')[0].trim()}
          </h1>

          <p className="font-serif text-base sm:text-xl md:text-2xl text-white/80 mb-6 sm:mb-8 md:mb-12 max-w-2xl leading-relaxed font-light">
            {pkg.tagline}
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-6 sm:mb-8 md:mb-12 font-sans text-sm text-white/70">
            <div className="flex items-center gap-2">
              <span className="text-white/40">Duration</span>
              <span className="text-white font-medium">{pkg.duration.display}</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-white/40">Altitude</span>
              <span className="text-white font-medium">{pkg.maxAltitude.display.split('(')[0].trim()}</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
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

      {/* Sub-Navigation Bar */}
      <LuxuryPackageDetailNav packageData={pkg} />

      {/* Main Page Layout Grid */}
      <div className="bg-[#F8F7F4] min-h-screen pt-8 pb-16 px-6 lg:px-12">
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

      {/* Floating Sticky Pricing Bar */}
      <div className="mobile-sticky-bar fixed bottom-6 left-4 right-4 bg-white/95 backdrop-blur-md border border-midnight/5 z-50 lg:hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)] rounded-2xl">
        <div className="flex items-center justify-between px-5 py-3.5">
          <div>
            <div className="font-sans text-[10px] font-semibold uppercase tracking-wider text-midnight/40 mb-0.5">From</div>
            <div className="font-serif text-xl text-midnight font-medium">{pkg.pricing.display}</div>
          </div>
          <div className="flex gap-3">
            <a
              href={`/inquiry?package=${pkg.code}`}
              className="font-sans px-5 py-2.5 bg-midnight text-white text-xs font-bold uppercase tracking-wider hover:bg-midnight/90 transition-all duration-300 rounded-xl"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
