import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PackageDetailTabs from "@/components/pilgrimage/PackageDetailTabs";

// Package data structure
const PACKAGES = {
  "kmy-01": {
    code: "KMY 01",
    name: "Kailash Yatra — 10 Nights & 11 Days",
    tagline: "The Ultimate Pilgrimage Journey",
    description: "Experience the sacred Mount Kailash Parikrama and holy dip in Mansarovar Lake via the Kathmandu-Simikot-Hilsa helicopter route.",
    heroImage: {
      src: "/images/pilgrimage/badrinath.jpg",
      alt: "Mount Kailash and Mansarovar Lake",
    },
    duration: {
      days: 11,
      nights: 10,
      display: "10N / 11D",
    },
    difficulty: "Challenging",
    maxAltitude: {
      meters: 5630,
      feet: 18470,
      display: "5,630m (18,470ft)",
    },
    startingPoint: "Kathmandu",
    bestSeason: ["May", "June", "July", "August", "September"],
    pricing: {
      startingFrom: 185000,
      currency: "INR",
      display: "₹1,85,000",
      notes: "Per person, based on group booking",
    },
    
    // Overview Tab
    overview: {
      route: "Kathmandu → Nepalgunj → Simikot → Hilsa (Helicopter) → Purang → Mansarovar → Darchen → Dirapuk → Dolma La Pass → Zutulpuk → Return",
      destinations: ["Kathmandu", "Nepalgunj", "Simikot", "Purang", "Mansarovar", "Dirapuk", "Zutulpuk"],
      highlights: [
        "Parikrama of Mount Kailash (52 km sacred circumambulation)",
        "Holy bath in Mansarovar Lake at 4,550m altitude",
        "Helicopter service from Simikot to Hilsa",
        "Cross Dolma La Pass at 5,630m — the highest point",
        "All meals on vegetarian basis",
        "Visit Pashupatinath Temple in Kathmandu",
        "Experience Tibetan culture and landscape",
        "Complete 3-day Kailash Parikrama trek"
      ],
      themes: ["Nature Lovers", "Spiritual Seekers", "Adventure Pilgrims"],
    },
    
    // Itinerary
    itinerary: [
      {
        day: 1,
        title: "Arrival Kathmandu (1300m)",
        activities: [
          "Arrival at Tribhuvan International Airport",
          "Transfer to hotel by our representative",
          "Evening briefing about Kailash Mansarovar Yatra",
          "Dinner at hotel"
        ],
        accommodation: "Hotel Le Himalaya or similar (3 Star)",
        meals: { breakfast: false, lunch: false, dinner: true },
      },
      {
        day: 2,
        title: "Kathmandu Sightseeing – Nepalgunj (Fly 150m)",
        activities: [
          "Full day Kathmandu sightseeing starting 9 AM",
          "Visit Pashupatinath Temple",
          "Visit Bouddhanath Stupa",
          "Visit Jalanarayan Temple (Sleeping Vishnu)",
          "Evening flight to Nepalgunj (1 hour)"
        ],
        accommodation: "Cygnet Krishna or similar (3 Star)",
        meals: { breakfast: true, lunch: true, dinner: true },
        travelDistance: "Flight 1 hour",
      },
      {
        day: 3,
        title: "Nepalgunj – Simikot (2800m)",
        activities: [
          "Morning flight to Simikot (50 minutes, 16-seater aircraft)",
          "Rest and acclimatization",
          "Evening visit to Shiva Temple"
        ],
        accommodation: "Humla Resort or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        altitude: "2,800m",
      },
      {
        day: 4,
        title: "Simikot – Hilsa – Purang (3700m)",
        activities: [
          "Helicopter flight to Hilsa (20 minutes, 6-seater, 20kg weight limit)",
          "Wait for group members (group visa requirement)",
          "Complete immigration & customs in Nepal and China",
          "Drive to Purang (30 km, 1 hour)",
          "Pass through 2 checkpoints"
        ],
        accommodation: "Hotel Himalayan or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        altitude: "3,700m",
        travelDistance: "30 km drive",
      },
      {
        day: 5,
        title: "Acclimatization - Rest Day (3900m)",
        activities: [
          "Full day for acclimatization",
          "Purchase jars to collect Kailash holy water",
          "Rest and prepare for high altitude"
        ],
        accommodation: "Hotel Himalayan or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        altitude: "3,900m",
      },
      {
        day: 6,
        title: "Purang – Manasarovar (4550m)",
        activities: [
          "Drive to Rakshas Tal (70 km, 1.5 hours)",
          "Pass through 1 checkpoint",
          "First view of Mt. Kailash south face",
          "See Gurla Mandhata Parvat",
          "Reach Mansarovar Lake",
          "Parikrama of Mansarovar by vehicle (102 km, 3 hours)",
          "Overnight at lake shore"
        ],
        accommodation: "Manasarovar Guest House or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        altitude: "4,550m",
        travelDistance: "70 km + 102 km parikrama",
      },
      {
        day: 7,
        title: "Manasarovar – Darchen – Dirapuk (4860m) - First Day of Kora",
        activities: [
          "Short drive to Tarboche (starting point of Kora)",
          "Visit Yama Dwar",
          "Trek to Dirapuk - 12 km (6-7 hours)",
          "Cross west face of Mt. Kailash",
          "Visit north face of Mt. Kailash",
          "Charan Sparsh (touching feet of Mt. Kailash)"
        ],
        accommodation: "Sisapangma Guest House or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        altitude: "4,860m",
        travelDistance: "12 km trek",
      },
      {
        day: 8,
        title: "Trek Dirapuk – Zutalpuk (4600m) via Dolma La Pass",
        activities: [
          "Trek to Dolma La Pass (5,630m) - highest point",
          "Descent to Gaurikund",
          "Continue trek to Zutulpuk following river",
          "Total trek: 22 km (9-10 hours)",
          "Most challenging day of the yatra"
        ],
        accommodation: "Sisapangma Guest House or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        altitude: "4,600m (via 5,630m pass)",
        travelDistance: "22 km trek",
        highlights: ["Most challenging day - cross Dolma La Pass at 5,630m"],
      },
      {
        day: 9,
        title: "Trek Zutalpuk – Drive to Hilsa (3700m)",
        activities: [
          "Short morning trek (8 km, 2 hours)",
          "Meet coach at trek end point",
          "Drive to Darchen",
          "Merge with members who didn't do parikrama",
          "Drive to Hilsa",
          "Helicopter to Simikot (situation dependent)"
        ],
        accommodation: "Hotel Snow Lion or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        altitude: "3,700m",
        travelDistance: "8 km trek + drive",
      },
      {
        day: 10,
        title: "Fly Hilsa – Simikot – Nepalgunj – Kathmandu",
        activities: [
          "Helicopter flight to Simikot (20 minutes)",
          "Flight from Simikot to Nepalgunj (50 minutes)",
          "Flight to Kathmandu",
          "Transfer to hotel"
        ],
        accommodation: "Hotel Le Himalayan or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
      },
      {
        day: 11,
        title: "Departure Transfer to Kathmandu Airport",
        activities: [
          "Receive Kailash Mansarovar Yatra certificate from Soham Treks",
          "Free time until departure",
          "Airport transfer for final departure"
        ],
        accommodation: "N/A",
        meals: { breakfast: true, lunch: false, dinner: false },
      },
    ],
    
    // Inclusions & Exclusions
    inclusions: [
      "3 nights accommodation at Kathmandu in 3 Star Hotel",
      "1 night accommodation at Nepalgunj",
      "2 nights accommodation at Simikot and Hilsa",
      "5 nights accommodation in Tibet (Guest House, sharing basis)",
      "Kathmandu-Nepalgunj-Kathmandu flight tickets (Yeti or Buddha Airlines)",
      "Nepalgunj-Simikot-Nepalgunj flight tickets (16-seater, Tara Air or Summit Air)",
      "Simikot-Hilsa-Simikot by Helicopter (5-6 person capacity)",
      "All necessary arrival/departure transfers in Nepalgunj",
      "Kathmandu sightseeing by AC vehicle",
      "Tibet Group Permit and Visa fees",
      "All meals on vegetarian basis (Breakfast, Lunch & Dinner)",
      "All transportation in Tibet by AC Luxury Coach",
      "English/Hindi speaking Tibetan and Nepali Guide",
      "Supporting truck to carry equipment",
      "All necessary trekking and travel permits",
      "Medical kit bag & oxygen cylinders for emergency",
      "Supporting staff (Cooks, Sherpas & Helpers)",
      "Kailash Mansarovar Yatra certificate",
      "Humla region restricted area permit and royalties",
      "One duffle bag and one backpack",
      "Down jacket (refundable)",
      "All applicable taxes & service charges"
    ],
    
    exclusions: [
      "International air tickets",
      "Travel insurance, rescue and evacuation services",
      "Nepal entry visa fees for NRI",
      "Horse and porter during Parikrama",
      "Tips for guide, porter, driver and personal expenses",
      "Extra hotel charges in Kathmandu if early return from Tibet",
      "Any additional cost due to natural calamities and unforeseen circumstances",
      "Extra accommodation charges if flight cancelled due to weather or permit delays",
      "Visa splitting charge and extra transportation if returning early",
      "5% GST (waived if deposited to Nepal bank account)"
    ],
    
    // Hotels
    hotels: [
      { location: "Kathmandu", hotelName: "Hotel Le Himalaya", category: "3-Star", nights: 3 },
      { location: "Nepalgunj", hotelName: "Cygnet Krishna", category: "3-Star", nights: 1 },
      { location: "Simikot", hotelName: "Humla Resort", category: "Standard", nights: 1 },
      { location: "Hilsa", hotelName: "Hotel Snow Lion", category: "Standard", nights: 1 },
      { location: "Purang", hotelName: "Hotel Himalayan", category: "Standard", nights: 2 },
      { location: "Manasarovar", hotelName: "Pramath Guest House", category: "Standard", nights: 1 },
      { location: "Dirapuk", hotelName: "Guest House", category: "Standard", nights: 1 },
      { location: "Zutulpuk", hotelName: "Guest House", category: "Standard", nights: 1 },
    ],
    
    // Basic Information
    basicInfo: {
      startPoint: "Kathmandu",
      endPoint: "Kathmandu",
      maxAltitude: "5,630m (Dolma La Pass)",
      kailashPeakAltitude: "6,714m",
      bestSeason: "May to September",
      temperature: "Max 20°C to Min -10°C",
      mansarovarAltitude: "4,550m",
      kailashParikrama: "52 km total (42 km on foot in 3 days)",
      distanceFromKathmandu: "1,050 km (one way)",
      mansarovarParikrama: "102 km (by vehicle)",
      climate: "Unpredictable",
    },
    
    // Booking & Payment
    booking: {
      requiredDocuments: [
        "Passport valid for at least 6 months",
        "Age requirement: 10-70 years old",
        "Scanned passport copy to reach office 30 days prior",
        "Original passport to reach Delhi office 10 days prior to yatra"
      ],
      paymentSchedule: [
        { stage: "Booking", amount: "25% of total cost", due: "At time of booking" },
        { stage: "Second Payment", amount: "50% of total cost", due: "15 days before departure" },
        { stage: "Final Payment", amount: "Full payment", due: "10 days before departure" }
      ],
      importantNotes: [
        "Carry at least INR 50,000 for extra expenses",
        "This is not a holiday tour - be prepared for hardships",
        "Any USD rate increase will be applicable",
        "Urgent visa processing will incur extra cost"
      ]
    },
    
    // Terms & Conditions
    terms: {
      cancellationPolicy: [
        { timeBefore: "30+ days", refund: "90% refund (10% deducted)" },
        { timeBefore: "15-29 days", refund: "75% refund (25% deducted)" },
        { timeBefore: "Less than 10 days", refund: "No refund" }
      ],
      travelInsurance: "Comprehensive travel insurance highly recommended covering medical, evacuation, personal accident and cancellation",
      changes: "Changes must be notified 30 days before tour. Extra charges borne by client.",
      companyRights: "Company may cancel due to border closure, permit issues, war, riots, natural disasters. Refund after deducting expenses.",
      refundPolicy: "No refund for incomplete yatra due to any reasons",
      ageRestriction: "Permit not issued for persons above 70 years old"
    },
    
    // Pre-Departure Information
    preDeparture: {
      clothing: [
        "Casual wear and comfortable walking shoes",
        "Warm clothing for cold nights and early mornings",
        "Gore-Tex material highly recommended",
        "Down jacket, raincoat or windbreakers",
        "Thermal underwear",
        "Warm trousers & woolen shirts",
        "Warm sweaters",
        "Woolen gloves",
        "Sun hat",
        "Comfortable shoes and light leather boots",
        "Woolen balaclava and scarf/dust mask",
        "NO SARIS for Indian pilgrims"
      ],
      essentials: [
        "Snacks: chocolates, dry fruits, toffees, glucose, namkeen",
        "Strong water bottle & purifying tablets",
        "Personal medical kit and Diamox tablets",
        "Sunglasses (UV protection)",
        "Sun block or sunscreen lotion",
        "Wet tissues",
        "Clothes-line/clips, needle & thread",
        "Body spray",
        "Toilet paper",
        "Torch & spare batteries",
        "Small daypack",
        "Camera & films",
        "Binoculars"
      ],
      health: [
        "Must be physically fit",
        "Medical examination recommended before booking",
        "Asthma and heart patients may have acclimatization issues",
        "Symptoms: headache, loss of appetite, nausea, exhaustion, breathlessness",
        "Drink plenty of water",
        "Do not drink alcohol or smoke",
        "Carry Diamox tablets",
        "Gamow bag provided for altitude sickness"
      ],
      currency: "Chinese Yuan (¥). USD 1 = ¥6.48 approx. Exchange at Bank of China or locals at Zhangmu."
    },
    
    // FAQ
    faq: [
      {
        question: "What is the best time to do Kailash Mansarovar Yatra?",
        answer: "The best time is from May to September when weather conditions are most favorable and passes are open."
      },
      {
        question: "Do I need to be very fit for this yatra?",
        answer: "Yes, this is one of the toughest high-altitude journeys. You must be physically fit as you'll trek at altitudes up to 5,630m. Medical examination is recommended before booking."
      },
      {
        question: "What is the maximum altitude we reach?",
        answer: "The maximum altitude is 5,630m at Dolma La Pass during the Kailash Parikrama. Mount Kailash peak itself stands at 6,714m."
      },
      {
        question: "Is helicopter service included?",
        answer: "Yes, helicopter service from Simikot to Hilsa and return is included in the package (5-6 person capacity)."
      },
      {
        question: "What if I cannot complete the Parikrama?",
        answer: "If you're not doing Parikrama, you can trek back to Darchen and wait there until the Parikrama group finishes."
      },
      {
        question: "Are meals vegetarian?",
        answer: "Yes, all meals are provided on vegetarian basis throughout the journey."
      },
      {
        question: "What documents do I need?",
        answer: "You need a passport valid for at least 6 months. Age must be between 10-70 years. Scanned copy needed 30 days prior, original passport 10 days prior."
      },
      {
        question: "What is the cancellation policy?",
        answer: "30+ days before: 10% deduction; 15-29 days: 25% deduction; Less than 10 days: No refund."
      },
      {
        question: "Is travel insurance mandatory?",
        answer: "While not mandatory, comprehensive travel insurance is highly recommended covering medical emergencies, evacuation, accidents, and trip cancellation."
      },
      {
        question: "What should I pack?",
        answer: "Warm clothing including down jacket, thermal wear, trekking shoes, sunglasses, sunscreen, personal medicines, water bottle, and snacks. Complete packing list provided in pre-departure section."
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
    title: `${pkg.name} | Kailash Mansarovar Yatra`,
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
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <Image
          src={pkg.heroImage.src}
          alt={pkg.heroImage.alt}
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/40 via-midnight/50 to-midnight/95" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 pt-32">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm">
            <Link href="/" className="text-white/70 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-white/40">/</span>
            <Link href="/yatra/kailash-mansarovar" className="text-white/70 hover:text-white transition-colors">
              Kailash Mansarovar
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-white">{pkg.code}</span>
          </nav>

          {/* Package Code Badge */}
          <div className="mb-4 inline-block">
            <span className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold bg-gold/10 backdrop-blur-sm px-4 py-2 rounded-full border border-gold/30">
              {pkg.code}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl md:text-6xl text-white font-light leading-tight mb-4">
            {pkg.name.split('—')[0]}<br />
            <span className="text-gold-light italic font-normal">{pkg.name.split('—')[1] || ''}</span>
          </h1>

          {/* Quick Info Bar */}
          <div className="flex flex-wrap items-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📅</span>
              <span className="font-sans text-sm">{pkg.duration.display}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⛰️</span>
              <span className="font-sans text-sm">{pkg.maxAltitude.display}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💪</span>
              <span className="font-sans text-sm">{pkg.difficulty}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">💰</span>
              <span className="font-sans text-lg font-semibold text-gold-light">{pkg.pricing.display}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`/inquiry?package=${pkg.code}`}
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold bg-gold text-midnight px-8 py-4 rounded-full hover:bg-gold-light hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <span>Book This Package</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="https://wa.me/917200118411"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium text-white border-2 border-white/40 backdrop-blur-sm px-8 py-4 rounded-full hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Inquiry
            </a>
          </div>
        </div>
      </section>

      {/* Tab Navigation Component */}
      <PackageDetailTabs packageData={pkg} />

      {/* Sticky Contact Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-midnight/95 backdrop-blur-md border-t border-gold/20 z-40 md:hidden">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <p className="font-sans text-xs text-white/60">Starting from</p>
            <p className="font-serif text-xl text-gold-light font-semibold">{pkg.pricing.display}</p>
          </div>
          <a
            href={`/inquiry?package=${pkg.code}`}
            className="font-sans text-sm font-semibold bg-gold text-midnight px-6 py-3 rounded-full hover:bg-gold-light transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>
    </>
  );
}
