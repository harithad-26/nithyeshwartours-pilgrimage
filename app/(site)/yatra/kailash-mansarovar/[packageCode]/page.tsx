import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LuxuryPackageDetailTabs, { LuxuryPackageDetailNav } from "@/components/pilgrimage/LuxuryPackageDetailTabs";
import LuxuryPricingSidebar from "@/components/pilgrimage/LuxuryPricingSidebar";


// Package data structure
const PACKAGES = {
  "kmy-01": {
    code: "KMY 01",
    name: "Kailash Yatra — 10 Nights & 11 Days",
    tagline: "The Ultimate Pilgrimage Journey",
    description: "Experience the sacred Mount Kailash Parikrama and holy dip in Mansarovar Lake via the Kathmandu-Simikot-Hilsa helicopter route.",
    heroImage: {
      src: "/images/pilgrimage/hero-kailash.png",
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
  },
  "kmy-03": {
    code: "KMY 03",
    name: "Kailash Yatra via Overland Coach — 12 Nights & 13 Days",
    tagline: "Classic Himalayan Pilgrimage Path",
    description: "A sacred overland journey to Mount Kailash and Mansarovar Lake driving through beautiful Tibetan valleys and the Keyrong border.",
    heroImage: {
      src: "/images/pilgrimage/hero-kailash.png",
      alt: "Mount Kailash Overland Expedition",
    },
    duration: {
      days: 13,
      nights: 12,
      display: "12N / 13D",
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
      startingFrom: 145000,
      currency: "INR",
      display: "₹1,45,000",
      notes: "Per person, based on group booking",
    },
    
    // Overview Tab
    overview: {
      route: "Kathmandu → Syabrubesi → Keyrong → Saga → Mansarovar → Darchen → Dirapuk → Zutulpuk → Keyrong → Kathmandu",
      destinations: ["Kathmandu", "Syabrubesi", "Keyrong", "Saga", "Mansarovar", "Dirapuk", "Zutulpuk"],
      highlights: [
        "Parikrama of Mount Kailash (52 km sacred circumambulation)",
        "Holy bath in Mansarovar Lake at 4,550m altitude",
        "Gradual altitude ascent via Keyrong border",
        "Cross Dolma La Pass at 5,630m — the highest point",
        "All meals on vegetarian basis",
        "Visit Pashupatinath Temple in Kathmandu",
        "Travel in comfortable AC Luxury coach in Tibet",
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
        title: "Kathmandu Sightseeing – Preparation",
        activities: [
          "Full day Kathmandu sightseeing starting 9 AM",
          "Visit Pashupatinath Temple",
          "Visit Bouddhanath Stupa",
          "Visit Jalanarayan Temple (Sleeping Vishnu)",
          "Rest and final packing check"
        ],
        accommodation: "Hotel Le Himalaya or similar (3 Star)",
        meals: { breakfast: true, lunch: true, dinner: true },
      },
      {
        day: 3,
        title: "Kathmandu to Syabrubesi (1450m)",
        activities: [
          "Drive from Kathmandu to Syabrubesi (140 km, 7-8 hours)",
          "Enjoy beautiful views of mountains and Trisuli River",
          "Rest and overnight stay in lodge"
        ],
        accommodation: "Standard Lodge",
        meals: { breakfast: true, lunch: true, dinner: true },
        altitude: "1,450m",
        travelDistance: "140 km drive",
      },
      {
        day: 4,
        title: "Syabrubesi – Keyrong (3700m)",
        activities: [
          "Drive to Rasuwagadhi border checkpoint",
          "Complete immigration formalities at Nepal and China border",
          "Meet Tibetan guide and drive to Keyrong town (24 km)",
          "Check in at hotel and rest"
        ],
        accommodation: "Hotel Keyrong or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        altitude: "3,700m",
        travelDistance: "24 km drive",
      },
      {
        day: 5,
        title: "Keyrong Rest & Acclimatization Day",
        activities: [
          "Full day for rest and acclimatization in Keyrong town",
          "Short walks around the town to adapt to high altitude",
          "Health checkups and oximeter checks by guide"
        ],
        accommodation: "Hotel Keyrong or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        altitude: "3,700m",
      },
      {
        day: 6,
        title: "Keyrong to Saga (4450m)",
        activities: [
          "Drive to Saga crossing high mountain passes (Keyrong Pass, 4900m)",
          "First views of Brahmaputra River",
          "Arrive Saga, rest and prepare for the lake drive"
        ],
        accommodation: "Hotel Saga or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        altitude: "4,450m",
        travelDistance: "230 km drive",
      },
      {
        day: 7,
        title: "Saga to Manasarovar Lake (4550m)",
        activities: [
          "Drive through vast Tibetan plateau views to Mansarovar Lake",
          "Pass through Mayum La Pass (5200m)",
          "First view of Mt. Kailash and lake Mansarovar",
          "Parikrama of Mansarovar Lake by vehicle"
        ],
        accommodation: "Mansarovar Guest House or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        altitude: "4,550m",
        travelDistance: "485 km drive",
      },
      {
        day: 8,
        title: "Manasarovar to Darchen (4600m)",
        activities: [
          "Morning holy bath and private puja at the lake shore",
          "Drive to Darchen (35 km, 1 hour) at the foot of Mt. Kailash",
          "Rest and preparation for the 3-day Parikrama (Kora)"
        ],
        accommodation: "Hotel Himalaya or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        altitude: "4,600m",
        travelDistance: "35 km drive",
      },
      {
        day: 9,
        title: "Darchen – Tarboche – Dirapuk (4860m) - Day 1 of Kora",
        activities: [
          "Short drive to Yama Dwar/Tarboche",
          "Begin the circumambulation trek to Dirapuk (12 km, 6-7 hours)",
          "Marvel at the grand North Face of Mount Kailash"
        ],
        accommodation: "Local Guest House (Basic shared rooms)",
        meals: { breakfast: true, lunch: true, dinner: true },
        altitude: "4,860m",
        travelDistance: "12 km trek",
      },
      {
        day: 10,
        title: "Trek Dirapuk to Zutulpuk (4600m) via Dolma La Pass",
        activities: [
          "Challenging trek to Dolma La Pass (5,630m) - highest point",
          "Perform holy rituals and view Gaurikund lake",
          "Descent and walk along the river to Zutulpuk (22 km, 9-10 hours)"
        ],
        accommodation: "Local Guest House (Basic shared rooms)",
        meals: { breakfast: true, lunch: true, dinner: true },
        altitude: "4,600m (via 5,630m pass)",
        travelDistance: "22 km trek",
      },
      {
        day: 11,
        title: "Trek Zutulpuk – Drive back to Saga (4450m)",
        activities: [
          "Short morning trek (8 km, 2 hours) to meet vehicle",
          "Drive to Darchen, merge with other members",
          "Drive back to Saga town"
        ],
        accommodation: "Hotel Saga or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        altitude: "4,450m",
        travelDistance: "8 km trek + drive",
      },
      {
        day: 12,
        title: "Drive Saga to Keyrong",
        activities: [
          "Drive back to Keyrong town via scenic route",
          "Leisure evening to celebrate successful yatra completion"
        ],
        accommodation: "Hotel Keyrong or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        altitude: "3,700m",
        travelDistance: "230 km drive",
      },
      {
        day: 13,
        title: "Drive Keyrong to Kathmandu & Departure",
        activities: [
          "Drive to border, cross immigration back into Nepal",
          "Drive back to Kathmandu airport or hotel",
          "End of sacred pilgrimage services"
        ],
        accommodation: "End of Journey",
        meals: { breakfast: true, lunch: true, dinner: false },
        travelDistance: "160 km drive",
      }
    ],
    inclusions: [
      "2 nights accommodation at Kathmandu in 3 Star Hotel",
      "2 nights accommodation at Keyrong",
      "2 nights accommodation at Saga",
      "1 night accommodation at Darchen",
      "5 nights accommodation in Tibet (Guest House, sharing basis)",
      "Kathmandu-border-Kathmandu private AC coach transfers",
      "Tibet Group Permit and Visa fees",
      "All meals on vegetarian basis (Breakfast, Lunch & Dinner)",
      "All transportation in Tibet by AC Luxury Coach",
      "English/Hindi speaking Tibetan and Nepali Guide",
      "Supporting truck to carry equipment",
      "All necessary trekking and travel permits",
      "Medical kit bag & oxygen cylinders for emergency",
      "Supporting staff (Cooks, Sherpas & Helpers)",
      "Kailash Mansarovar Yatra certificate",
      "One duffle bag and one backpack",
      "Down jacket (refundable)",
      "All applicable taxes & service charges"
    ],
    exclusions: [
      "International air tickets to/from Kathmandu",
      "Travel insurance, rescue and evacuation services",
      "Nepal entry visa fees",
      "Horse and porter during Parikrama",
      "Tips for guide, porter, driver and personal expenses",
      "Extra hotel charges in Kathmandu if early return from Tibet",
      "Any additional cost due to natural calamities and unforeseen circumstances",
      "5% GST charges"
    ],
    hotels: [
      { location: "Kathmandu", hotelName: "Hotel Le Himalaya", category: "3-Star", nights: 2 },
      { location: "Keyrong", hotelName: "Hotel Keyrong", category: "Standard", nights: 3 },
      { location: "Saga", hotelName: "Hotel Saga", category: "Standard", nights: 2 },
      { location: "Darchen", hotelName: "Hotel Himalaya", category: "Standard", nights: 1 },
      { location: "Manasarovar", hotelName: "Guest House", category: "Standard", nights: 1 },
      { location: "Dirapuk", hotelName: "Guest House", category: "Standard", nights: 1 },
      { location: "Zutulpuk", hotelName: "Guest House", category: "Standard", nights: 1 },
    ],
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
        "Any USD rate increase will be applicable"
      ]
    },
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
        "Torch & spare batteries",
        "Small daypack"
      ],
      health: [
        "Must be physically fit",
        "Medical examination recommended before booking",
        "Asthma and heart patients may have acclimatization issues",
        "Drink plenty of water",
        "Do not drink alcohol or smoke",
        "Carry Diamox tablets"
      ],
      currency: "Chinese Yuan (¥). USD 1 = ¥6.48 approx. Exchange at Bank of China or locals at Zhangmu."
    },
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
        answer: "The maximum altitude is 5,630m at Dolma La Pass during the Kailash Parikrama."
      },
      {
        question: "What if I cannot complete the Parikrama?",
        answer: "If you're not doing Parikrama, you can trek back to Darchen and wait there until the Parikrama group finishes."
      },
      {
        question: "Are meals vegetarian?",
        answer: "Yes, all meals are provided on vegetarian basis throughout the journey."
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
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-10 sm:pb-16 md:pb-20">
          {/* Breadcrumb */}
          <nav className="mb-4 sm:mb-6 md:mb-8 flex items-center gap-2 font-sans text-xs text-white/50">
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
          <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur border border-white/20 mb-4 sm:mb-6">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white">{pkg.code}</span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-7xl text-white mb-4 sm:mb-6 leading-[0.95] max-w-4xl font-light line-clamp-2">
            {pkg.name}
          </h1>

          {/* Tagline */}
          <p className="font-serif text-base sm:text-xl md:text-2xl text-white/80 mb-6 sm:mb-8 md:mb-12 max-w-2xl leading-relaxed font-light">
            {pkg.tagline}
          </p>

          {/* Quick Stats - Inline Elegant */}
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

          {/* CTA Buttons */}
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

      {/* Floating Sticky Pricing Bar - Mobile & Tablet Only (lg:hidden) */}
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
