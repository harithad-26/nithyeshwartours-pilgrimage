import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LuxuryPackageDetailTabs from "@/components/pilgrimage/LuxuryPackageDetailTabs";
import LuxuryPricingSidebar from "@/components/pilgrimage/LuxuryPricingSidebar";


// Package data structure
const PACKAGES = {
  "kmy-01": {
    code: "KMY 01",
    name: "Kailash Yatra — 10 Nights & 11 Days",
    tagline: "The Ultimate Pilgrimage Journey",
    description: "Experience the sacred Mount Kailash Parikrama and holy dip in Mansarovar Lake via the Kathmandu-Simikot-Hilsa helicopter route.",
    heroImage: {
      src: "/images/pilgrimage/kmy_01_hero.png",
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
      {/* Luxury Hero Section - Full Height Cinematic */}
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
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-transparent" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pb-20">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 font-sans text-xs text-white/50">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/yatra/kailash-mansarovar" className="hover:text-white transition-colors">
              Kailash Mansarovar
            </Link>
            <span>/</span>
            <span className="text-white">{pkg.code}</span>
          </nav>

          {/* Package Code Badge */}
          <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur border border-white/20 mb-6">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white">{pkg.code}</span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-[0.95] max-w-4xl font-light">
            {pkg.name.split('—')[0].trim()}
          </h1>

          {/* Tagline */}
          <p className="font-serif text-xl md:text-2xl text-white/80 mb-12 max-w-2xl leading-relaxed font-light">
            {pkg.tagline}
          </p>

          {/* Quick Stats - Inline Elegant */}
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

          {/* CTA Buttons */}
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
            {/* Left Column: All details scrolling sequentially with Scrollspy */}
            <div className="lg:col-span-8">
              <LuxuryPackageDetailTabs packageData={pkg} />
            </div>

            {/* Right Column: Sticky Booking Sidebar */}
            <div className="lg:col-span-4 relative hidden lg:block">
              <div className="sticky top-[152px]">
                <LuxuryPricingSidebar pkg={pkg} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Pricing Bar - Mobile & Tablet Only (lg:hidden) */}
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
