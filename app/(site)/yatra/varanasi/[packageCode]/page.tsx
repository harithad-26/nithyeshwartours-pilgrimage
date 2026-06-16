import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LuxuryPackageDetailTabs, { LuxuryPackageDetailNav } from "@/components/pilgrimage/LuxuryPackageDetailTabs";
import LuxuryPricingSidebar from "@/components/pilgrimage/LuxuryPricingSidebar";

const PACKAGES = {
  "VNS-01": {
    code: "VNS-01",
    name: "Kashi Essentials — 3 Nights & 4 Days",
    tagline: "Spiritual Gateway to the Eternal City",
    description: "Experience the vital highlights of Kashi, including the sacred Ganga Aarti, priority Kashi Vishwanath darshan, and a serene dawn boat ride.",
    heroImage: {
      src: "/images/pilgrimage/ganga_aarti_highlight.png",
      alt: "Varanasi Ghats Ganga Aarti",
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
      startingFrom: 18500,
      currency: "INR",
      display: "₹18,500",
      notes: "Per person, based on twin-sharing standard room",
    },
    overview: {
      route: "Varanasi Airport/Station → Heritage Ghats → Kashi Vishwanath Temple → Sarnath → Departure",
      destinations: ["Varanasi", "Sarnath"],
      highlights: [
        "Attend the grand evening Ganga Aarti at Dashashwamedh Ghat",
        "Priority queue entry for sacred Kashi Vishwanath Jyotirlinga Darshan",
        "Serene dawn wooden boat ride witnessing the ghats awakening",
        "Excursion to Sarnath where Lord Buddha delivered his first sermon",
        "Comfortable private AC sedan for all transfers and sightseeing",
        "Sattvic vegetarian dining highlighting authentic local Banarasi flavors"
      ],
      themes: ["Spiritual Devotion", "Ancient Heritage", "Vedic Rituals"],
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Varanasi & Evening Ganga Aarti",
        activities: [
          "Pick up from Varanasi Airport (VNS) or Lal Bahadur Shastri Station",
          "Transfer to hotel and check in, rest for some time",
          "Evening walk to Dashashwamedh Ghat to witness the grand Ganga Aarti from a shared boat",
          "Return to hotel for a delicious vegetarian dinner"
        ],
        accommodation: "Hotel Ganga Azure or similar",
        meals: { breakfast: false, lunch: false, dinner: true },
        travelDistance: "Local airport transfer",
      },
      {
        day: 2,
        title: "Sacred Darshan & Old Kashi Walks",
        activities: [
          "Pre-dawn boat ride on River Ganga to witness spiritual bathing and rituals",
          "Walk through the narrow heritage lanes of Kashi to Kashi Vishwanath Temple",
          "Special VIP Darshan at the main sanctum of Lord Shiva",
          "Visit the adjoining Annapurna Temple and Vishalakshi Shaktipeeth",
          "Return to hotel for breakfast; afternoon free for shopping (Banarasi Silk Sarees)",
          "Dinner at the hotel"
        ],
        accommodation: "Hotel Ganga Azure or similar",
        meals: { breakfast: true, lunch: false, dinner: true },
        travelDistance: "Local sightseeing",
      },
      {
        day: 3,
        title: "Sarnath Excursion & Historic Temples",
        activities: [
          "Breakfast at the hotel, then drive to Sarnath (12 km)",
          "Explore the Dhamek Stupa, Mulagandha Kuti Vihar, and the Sarnath Museum",
          "Afternoon return to Varanasi to visit Kal Bhairav Temple (the guardian deity of Kashi)",
          "Visit Sankat Mochan Hanuman Temple and Durga Mandir",
          "Dinner at the hotel"
        ],
        accommodation: "Hotel Ganga Azure or similar",
        meals: { breakfast: true, lunch: false, dinner: true },
        travelDistance: "30 km return drive",
      },
      {
        day: 4,
        title: "Departure from Varanasi",
        activities: [
          "Leisurely breakfast and checkout from the hotel",
          "Depending on departure timings, transfer to airport/station for onward journey",
          "End of sacred pilgrimage services"
        ],
        accommodation: "End of Journey",
        meals: { breakfast: true, lunch: false, dinner: false },
        travelDistance: "Local transfer",
      }
    ],
    inclusions: [
      "Accommodation in clean, comfortable 3-star standard hotels",
      "Pure vegetarian breakfast & dinner daily at the hotel",
      "Private AC Sedan vehicle for all airport transfers and sightseeing",
      "Shared boat ride at Varanasi Ghats for evening Ganga Aarti & dawn tour",
      "Special VIP Darshan passes at Kashi Vishwanath Temple",
      "Experienced local English/Hindi speaking tour guide",
      "Entrance tickets to Sarnath archaeological park and museum",
      "All applicable government taxes and toll/driver allowances"
    ],
    exclusions: [
      "Flight or train tickets to and from Varanasi",
      "Lunch meals during the trip",
      "Personal puja material expenses and priest dakshinas",
      "Laundry, phone bills, tips, and personal beverages",
      "Travel insurance"
    ],
    hotels: [
      { location: "Varanasi", hotelName: "Hotel Ganga Azure", category: "3-Star Standard", nights: 3 }
    ],
    booking: {
      requiredDocuments: [
        "Aadhar Card / Voter ID / Passport copy",
        "Passport size photograph for local permits",
        "Completed passenger declaration form"
      ],
      paymentSchedule: [
        { stage: "Booking Advance", amount: "30% of total package cost", due: "At time of reservation" },
        { stage: "Final Payment", amount: "Remaining 70% balance", due: "7 days prior to departure date" }
      ],
      importantNotes: [
        "Temples require modest dressing—shoulders and knees must be covered",
        "Leather items (wallets, belts) and mobile phones are restricted inside Kashi Vishwanath",
        "Shared boat rides are subject to water level clearances by local administration"
      ]
    },
    terms: {
      cancellationPolicy: [
        { timeBefore: "30+ days", refund: "90% refund (10% deducted)" },
        { timeBefore: "15-29 days", refund: "50% refund (50% deducted)" },
        { timeBefore: "Less than 15 days", refund: "No refund available" }
      ],
      travelInsurance: "We recommend purchasing comprehensive travel insurance.",
      changes: "Itinerary sequence may alter due to local administration VIP movement clearances or weather.",
      companyRights: "We reserve the right to reschedule transfers depending on local traffic rules in old city lanes.",
      refundPolicy: "No refunds will be given for unutilized services, meals, or hotel nights.",
      ageRestriction: "Suitable for all age groups."
    },
    preDeparture: {
      clothing: [
        "Light cotton clothes for summer months (April - September)",
        "Light woolens or jackets for winter months (October - March)",
        "Comfortable walking sandals/shoes since temple lanes require walking on foot",
        "A shawl or wrap to cover shoulders inside temple premises"
      ],
      essentials: [
        "Personal medicines and hand sanitizer",
        "Sunscreen, sunglasses, and a hat/umbrella",
        "Sufficient physical cash as small vendors in lanes do not accept cards"
      ],
      health: [
        "Drink bottled mineral water only",
        "Street food is delicious but eat at reputed hygienic places recommended by guide",
        "Varanasi lanes are busy; stay with your guide to avoid getting lost"
      ],
      currency: "Indian Rupee (INR)."
    },
    faq: [
      {
        question: "Is mobile phone allowed inside Kashi Vishwanath temple?",
        answer: "No, mobile phones, cameras, smartwatches, and leather items (belts, wallets) are strictly banned inside the temple. Safe lockers are available near the temple gate to store your belongings."
      },
      {
        question: "Can we book a private boat instead of a shared boat?",
        answer: "Yes! A private boat upgrade can be arranged for a small surcharge. Please notify our tour planner at the time of booking."
      }
    ]
  },
  "VNS-02": {
    code: "VNS-02",
    name: "Kashi Immersion — 5 Nights & 6 Days",
    tagline: "Heritage & Soul of Benares",
    description: "Delve deeper into the mysticism of Benares. Features heritage stays, specialized guided walks, temple visits, and excursions to Ramnagar Fort.",
    heroImage: {
      src: "/images/india-states/varanasi-ghats-photo.png",
      alt: "Varanasi Ghats and Ganga",
    },
    duration: {
      days: 6,
      nights: 5,
      display: "5N / 6D",
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
      startingFrom: 32000,
      currency: "INR",
      display: "₹32,000",
      notes: "Per person, based on premium heritage property twin-sharing stay",
    },
    overview: {
      route: "Varanasi → Sarnath → Ramnagar Fort → Assi Ghat → Heritage Lanes → Departure",
      destinations: ["Varanasi", "Sarnath", "Ramnagar"],
      highlights: [
        "Stay in a premium heritage Haveli style hotel near the sacred Ganga",
        "Special Maha-Puja arrangements at Kashi Vishwanath Temple",
        "Private boat excursion to the historic Ramnagar Fort across the river",
        "Attend Subah-e-Banaras morning music, yoga, & Vedic ritual at Assi Ghat",
        "Explore Sarnath's Dhamek Stupa with an expert historical guide",
        "Visit a Varanasi handloom center to witness silk saree weaving"
      ],
      themes: ["Spiritual Immersion", "Heritage Living", "Art & Music"],
    },
    itinerary: [
      {
        day: 1,
        title: "Welcome to Kashi & Evening Aarti",
        activities: [
          "Private pick-up from airport/station, check into the heritage hotel",
          "Relax and enjoy traditional welcome drinks",
          "Evening private boat ride to Dashashwamedh Ghat to witness the Ganga Aarti",
          "Return to hotel for a gourmet vegetarian dinner"
        ],
        accommodation: "BrijRama Palace or similar heritage hotel",
        meals: { breakfast: false, lunch: false, dinner: true },
        travelDistance: "Local transfer",
      },
      {
        day: 2,
        title: "Subah-e-Banaras & Jyotirlinga Darshan",
        activities: [
          "Pre-dawn visit to Assi Ghat for Subah-e-Banaras (classical music recital & yajna)",
          "Sunrise boat ride and guided walking tour through old lanes",
          "VIP Darshan at Kashi Vishwanath Temple and Annapurna Mandir",
          "Breakfast at the hotel, afternoon at leisure",
          "Evening guided walk through ancient heritage lanes exploring local life",
          "Dinner at the heritage hotel"
        ],
        accommodation: "BrijRama Palace or similar heritage hotel",
        meals: { breakfast: true, lunch: false, dinner: true },
        travelDistance: "Local walking and boat transfers",
      },
      {
        day: 3,
        title: "Sarnath & Handloom Silk Weavers",
        activities: [
          "Breakfast at hotel, drive to Sarnath (Buddhist heritage site)",
          "Visit Chaukhandi Stupa, Dhamek Stupa, and the Ashokan Lion Capital",
          "Visit a traditional weavers' village to see Banarasi silk weaving art",
          "Evening classical music concert session organized at a local ashram",
          "Dinner at the hotel"
        ],
        accommodation: "BrijRama Palace or similar heritage hotel",
        meals: { breakfast: true, lunch: false, dinner: true },
        travelDistance: "35 km return drive",
      },
      {
        day: 4,
        title: "Ramnagar Fort Excursion & Southern Ghats",
        activities: [
          "Breakfast at hotel, board private motor boat to Ramnagar Fort across Ganga",
          "Tour the 17th-century fort museum housing royal vintage cars & armaments",
          "Afternoon visit to BHU (Banaras Hindu University) and the New Vishwanath Temple",
          "Visit Sankat Mochan and Tridev Mandir",
          "Evening sunset view from Assi Ghat with Banarasi street food tasting",
          "Dinner at the hotel"
        ],
        accommodation: "BrijRama Palace or similar heritage hotel",
        meals: { breakfast: true, lunch: false, dinner: true },
        travelDistance: "Local sightseeing via boat & car",
      },
      {
        day: 5,
        title: "Devi Temples & Ghat Walk",
        activities: [
          "Breakfast at hotel, visit Lolark Kund (ancient sacred stepwell)",
          "Visit Durga Temple, Tulsi Manas Mandir, and Birla Temple",
          "Afternoon free for leisure shopping or personal spiritual reflection",
          "Special evening clay-lamp floating ritual on the Ganga",
          "Farewell dinner at the hotel"
        ],
        accommodation: "BrijRama Palace or similar heritage hotel",
        meals: { breakfast: true, lunch: false, dinner: true },
        travelDistance: "Local travel",
      },
      {
        day: 6,
        title: "Departure from Kashi",
        activities: [
          "Gourmet breakfast, checkout from heritage hotel",
          "Private luxury SUV drop off at Varanasi Airport or railway station for your onward journey"
        ],
        accommodation: "End of Journey",
        meals: { breakfast: true, lunch: false, dinner: false },
        travelDistance: "Local transfer",
      }
    ],
    inclusions: [
      "Accommodation in premium heritage properties/Haveli rooms",
      "Pure vegetarian buffet breakfast & dinner daily",
      "All transfers & sightseeing by private AC SUV (Innova/Crysta)",
      "Private motorboat hire for Ganga Aarti and Ramnagar Fort excursion",
      "Special VIP Darshan passes at Kashi Vishwanath Temple",
      "Special guide services with historical expert",
      "Subah-e-Banaras coordination & reserved seating",
      "Varanasi handloom center demonstration visit",
      "Banarasi street food tasting tour included"
    ],
    exclusions: [
      "Flight or train tickets",
      "Lunch meals during the trip",
      "Dakshina to temple priests or personal ritual expenses",
      "Any services not mentioned in inclusions"
    ],
    hotels: [
      { location: "Varanasi", hotelName: "BrijRama Palace or similar heritage", category: "Heritage Premium", nights: 5 }
    ],
    booking: {
      requiredDocuments: [
        "Aadhar Card / Voter ID / Passport copy",
        "Photographs for registration"
      ],
      paymentSchedule: [
        { stage: "Booking Advance", amount: "40% of total package cost", due: "At time of booking" },
        { stage: "Final Payment", amount: "Remaining 60% balance", due: "10 days prior to departure date" }
      ],
      importantNotes: [
        "Heritage hotels on the ghats may require a short walk (5-10 mins) as vehicles are restricted near the river",
        "Porters will be provided by the hotel to handle luggage from the vehicle drop point to the hotel check-in"
      ]
    },
    terms: {
      cancellationPolicy: [
        { timeBefore: "30+ days", refund: "85% refund (15% deducted)" },
        { timeBefore: "15-29 days", refund: "40% refund (60% deducted)" },
        { timeBefore: "Less than 15 days", refund: "No refund available" }
      ],
      travelInsurance: "Recommended.",
      changes: "Subject to local conditions.",
      companyRights: "We reserve the right to modify routes.",
      refundPolicy: "Unutilized services are non-refundable.",
      ageRestriction: "Suitable for all age groups."
    },
    preDeparture: {
      clothing: [
        "Modest traditional clothing",
        "Comfortable slip-on shoes for temple visits"
      ],
      essentials: [
        "Hand sanitizer, camera, sunscreen, personal medication",
        "Sufficient cash"
      ],
      health: [
        "Use bottled water exclusively",
        "Follow guide recommendations for local culinary trials"
      ],
      currency: "Indian Rupee (INR)."
    },
    faq: [
      {
        question: "How close is the heritage hotel to the ghats?",
        answer: "Our selected heritage hotels are situated directly on the banks of the Ganga or adjacent to major ghats, offering beautiful river views and instant access to the morning rituals."
      }
    ]
  },
  "VNS-03": {
    code: "VNS-03",
    name: "Kashi — Full Circuit — 7 Nights & 8 Days",
    tagline: "Sacred Triad: Kashi, Prayagraj & Gaya",
    description: "A comprehensive spiritual expedition covering Varanasi, the holy Triveni Sangam confluence at Prayagraj, and the ancestral liberation site of Gaya.",
    heroImage: {
      src: "/images/india-states/varanasi-ghats-photo.png",
      alt: "Sacred Triad Confluence",
    },
    duration: {
      days: 8,
      nights: 7,
      display: "7N / 8D",
    },
    difficulty: "Easy to Moderate",
    maxAltitude: {
      meters: 110,
      feet: 360,
      display: "110m (360ft)",
    },
    startingPoint: "Varanasi",
    bestSeason: ["October", "November", "December", "January", "February", "March"],
    pricing: {
      startingFrom: 55000,
      currency: "INR",
      display: "₹55,000",
      notes: "Per person, includes luxury accommodations and inter-city private transfers",
    },
    overview: {
      route: "Varanasi → Gaya (Bihar) → Prayagraj (Sangam) → Vindhyachal → Varanasi",
      destinations: ["Varanasi", "Gaya", "Prayagraj", "Vindhyachal"],
      highlights: [
        "Perform holy ancestral rites (Pind Daan) at Vishnu Pad Temple, Gaya",
        "Take a private boat dip at the Triveni Sangam confluence in Prayagraj",
        "Visit Maa Vindhyavasini Shaktipeeth Temple in Vindhyachal",
        "Luxury river-view and 5-star hotel accommodation in Varanasi",
        "All inter-city transfers in private luxury SUV Crysta/Fortuner",
        "Complete concierge service for all temple rituals and darshans"
      ],
      themes: ["Sacred Triad", "Ancestral Rites", "Luxury Pilgrimage"],
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival in Varanasi & Ganga Aarti",
        activities: [
          "Private pick-up from Varanasi Airport, check into 5-star hotel",
          "Rest and acclimatize to the spiritual energy of the city",
          "Evening transfer to ghats for private boat ride to witness Ganga Aarti",
          "Buffet vegetarian dinner at the hotel"
        ],
        accommodation: "Taj Ganges or Radisson Varanasi or similar",
        meals: { breakfast: false, lunch: false, dinner: true },
        travelDistance: "Local airport transfer",
      },
      {
        day: 2,
        title: "Kashi Vishwanath Darshan & Sarnath",
        activities: [
          "Sunrise boat ride and VIP Darshan at Kashi Vishwanath Jyotirlinga Temple",
          "Return to hotel for breakfast",
          "Drive to Sarnath for Buddhist heritage ruins exploration",
          "Visit the Sarnath Archeological museum and Dhamek Stupa",
          "Evening free for shopping or relaxation; dinner at hotel"
        ],
        accommodation: "Taj Ganges or Radisson Varanasi or similar",
        meals: { breakfast: true, lunch: false, dinner: true },
        travelDistance: "Local travel",
      },
      {
        day: 3,
        title: "Varanasi to Bodhgaya/Gaya",
        activities: [
          "Breakfast at hotel, drive to Bodhgaya (250 km, 5-6 hours)",
          "Check into Bodhgaya hotel and rest",
          "Visit the UNESCO Mahabodhi Temple where Buddha attained enlightenment",
          "Explore Bodhi tree, giant Buddha statue, and monasteries",
          "Dinner at hotel"
        ],
        accommodation: "Hyatt Place Bodhgaya or similar",
        meals: { breakfast: true, lunch: false, dinner: true },
        travelDistance: "250 km drive",
      },
      {
        day: 4,
        title: "Gaya Ancestral Rites (Pind Daan)",
        activities: [
          "Early morning drive to Vishnu Pad Temple on the banks of Falgu River, Gaya",
          "Coordinated Pind Daan rituals performed under guidance of expert priests",
          "Visit Akshay Vat (the immortal banyan tree) and Mangla Gauri Shaktipeeth",
          "Afternoon return to Bodhgaya hotel for rest",
          "Evening free, dinner at hotel"
        ],
        accommodation: "Hyatt Place Bodhgaya or similar",
        meals: { breakfast: true, lunch: false, dinner: true },
        travelDistance: "Local transfers between Bodhgaya and Gaya",
      },
      {
        day: 5,
        title: "Bodhgaya to Prayagraj (Confluence)",
        activities: [
          "After breakfast, drive to Prayagraj (Allahabad) (300 km, 6 hours)",
          "Check in to hotel, afternoon rest",
          "Private boat ride to Triveni Sangam (confluence of Ganga, Yamuna & Saraswati)",
          "Take holy dip/sprinkle holy water and perform puja rituals",
          "Visit Hanuman Temple (sleeping Hanuman) and Allahabad Fort",
          "Dinner at the hotel"
        ],
        accommodation: "Hotel Kanha Shyam or similar",
        meals: { breakfast: true, lunch: false, dinner: true },
        travelDistance: "300 km drive",
      },
      {
        day: 6,
        title: "Prayagraj to Vindhyachal to Varanasi",
        activities: [
          "Breakfast at hotel, checkout",
          "Drive to Vindhyachal Shaktipeeth (85 km, 2 hours)",
          "Worship at the ancient temple of Goddess Vindhyavasini",
          "Continue drive back to Varanasi (70 km, 1.5 hours)",
          "Check in at Varanasi hotel, evening free for personal exploration",
          "Dinner at hotel"
        ],
        accommodation: "Taj Ganges or Radisson Varanasi or similar",
        meals: { breakfast: true, lunch: false, dinner: true },
        travelDistance: "155 km drive",
      },
      {
        day: 7,
        title: "Varanasi Leisure & Shopping",
        activities: [
          "Breakfast at hotel, visit Kal Bhairav Temple",
          "Guided tour of BHU campus, New Vishwanath Temple, and Sankat Mochan",
          "Afternoon shopping tour (Banarasi Silks, handicraft centers)",
          "Grand farewell dinner at a premium river-view restaurant"
        ],
        accommodation: "Taj Ganges or Radisson Varanasi or similar",
        meals: { breakfast: true, lunch: false, dinner: true },
        travelDistance: "Local travel",
      },
      {
        day: 8,
        title: "Departure",
        activities: [
          "Breakfast at hotel, checkout",
          "Private transfer drop-off at Varanasi Airport or station for final return departure"
        ],
        accommodation: "End of Journey",
        meals: { breakfast: true, lunch: false, dinner: false },
        travelDistance: "Local transfer",
      }
    ],
    inclusions: [
      "Accommodation in premium 5-star hotels (Varanasi) and 4-star properties (Gaya & Prayagraj)",
      "Daily pure vegetarian buffet breakfast & dinner at hotels",
      "Private AC luxury SUV (Innova Crysta) throughout the entire circuit tour",
      "Private motorboats in Varanasi (Ganga Aarti) and Prayagraj (Triveni Sangam)",
      "VIP Darshan arrangements at Kashi Vishwanath, Vindhyachal, and Gaya temples",
      "Coordinated expert priest for Pind Daan rituals at Gaya (includes ritual items)",
      "Experienced local tour manager and guides in each destination",
      "All parking, highway tolls, driver allowances, and service taxes"
    ],
    exclusions: [
      "Domestic or international air tickets / train fares",
      "Lunch meals during the trip",
      "Personal tips, dakshina to temple priests, or charity donations",
      "Any extra activities, spa treatments, or laundry"
    ],
    hotels: [
      { location: "Varanasi", hotelName: "Taj Ganges / Radisson", category: "5-Star Luxury", nights: 4 },
      { location: "Bodhgaya", hotelName: "Hyatt Place", category: "Premium Hotel", nights: 2 },
      { location: "Prayagraj", hotelName: "Hotel Kanha Shyam", category: "Premium Hotel", nights: 1 }
    ],
    booking: {
      requiredDocuments: [
        "Aadhar Card / Passport copy",
        "Details of family members if performing Pind Daan rituals"
      ],
      paymentSchedule: [
        { stage: "Booking Advance", amount: "40% of total package cost", due: "At time of reservation" },
        { stage: "Final Payment", amount: "Remaining 60% balance", due: "15 days prior to departure date" }
      ],
      importantNotes: [
        "Gaya Pind Daan rituals require a quiet state of mind and take approximately 2-3 hours to complete",
        "Bring traditional Indian attire (dhoti/kurta for men, saree/salwar for women) as it is required for some rituals"
      ]
    },
    terms: {
      cancellationPolicy: [
        { timeBefore: "30+ days", refund: "90% refund (10% deducted)" },
        { timeBefore: "15-29 days", refund: "45% refund (55% deducted)" },
        { timeBefore: "Less than 15 days", refund: "No refund available" }
      ],
      travelInsurance: "Recommended.",
      changes: "Road travel times may vary depending on local national highway traffic.",
      companyRights: "We reserve the right to change hotels to similar status in case of overbooking.",
      refundPolicy: "Non-refundable for unused portions.",
      ageRestriction: "No age limits."
    },
    preDeparture: {
      clothing: [
        "Traditional Indian clothing (highly recommended for temples and rituals)",
        "Easy slip-on sandals",
        "Warm layers if travelling in December-January (mornings can be cold on the river)"
      ],
      essentials: [
        "Personal medications and sanitizers",
        "Sun protection"
      ],
      health: [
        "Consume only bottled water",
        "Stay hydrated during long road transits"
      ],
      currency: "Indian Rupee (INR)."
    },
    faq: [
      {
        question: "Can we perform Pind Daan for multiple ancestors?",
        answer: "Yes, the priests will help you chant mantras naming all ancestors you wish to pay respects to. The ritual covers both maternal and paternal sides."
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
    title: `${pkg.name} | Varanasi Yatra`,
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
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-10 sm:pb-16 md:pb-20">
          {/* Breadcrumb */}
          <nav className="mb-4 sm:mb-6 md:mb-8 flex items-center gap-2 font-sans text-xs text-white/50">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/yatra/varanasi" className="hover:text-white transition-colors">Varanasi Yatra</Link>
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
              className="btn-premium btn-premium-white"
            >
              <span>Book This Package</span>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="https://wa.me/917200118411"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium btn-premium-glass"
            >
              <span>Contact Us</span>
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
