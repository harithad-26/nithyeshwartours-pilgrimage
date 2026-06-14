import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import NepalDetailTabs from "@/components/nepal/NepalDetailTabs";
import NepalPackageItinerary from "@/components/nepal/NepalPackageItinerary";

type PackageDay = {
  day: number;
  title: string;
  highlights: string[];
  meals?: string;
  stay?: string;
};

type HotelData = {
  location: string;
  hotelName: string;
  category: string;
  nights: number;
};

type PaymentStage = {
  stage: string;
  amount: string;
  due: string;
};

type CancellationRule = {
  timeBefore: string;
  refund: string;
};

type PackageData = {
  code: string;
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  priceNote: string;
  difficulty: string;
  difficultyColor: string;
  altitude: string;
  altitudeWarning?: string;
  startPoint: string;
  heroImage: string;
  heroAlt: string;
  tagline: string;
  description: string;
  overview: string[];
  itinerary: PackageDay[];
  inclusions: string[];
  exclusions: string[];
  hotels: HotelData[];
  booking: {
    requiredDocuments: string[];
    paymentSchedule: PaymentStage[];
    importantNotes: string[];
  };
  knowBefore: {
    visa: string;
    id: string;
    altitude?: string;
    fitness: string;
    packing: string[];
    medical?: string;
  };
  faqs: { q: string; a: string }[];
  terms: {
    cancellationPolicy: CancellationRule[];
    travelInsurance: string;
    changes: string;
    companyRights: string;
    refundPolicy: string;
    ageRestriction: string;
  };
  idealFor: string;
};

const PACKAGES: Record<string, PackageData> = {
  "NPL-014": {
    code: "NPL 014",
    title: "Nepal Kathmandu & Pokhara Tour",
    subtitle: "5 Nights · 6 Days",
    duration: "5 Nights / 6 Days",
    price: "₹14,500",
    priceNote: "Per person, twin-sharing · GST extra",
    difficulty: "Easy",
    difficultyColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    altitude: "1,400m (Pokhara)",
    startPoint: "Kathmandu",
    heroImage: "/images/destinations/international.jpg",
    heroAlt: "Kathmandu Valley temples with Himalayan backdrop",
    tagline: "SACRED TEMPLES · HIMALAYAN PANORAMAS",
    description:
      "A perfect blend of spiritual heritage and Himalayan scenery. Kathmandu's ancient temples, the iconic Pashupatinath Ganga Aarti, Manakamana cable car, and the tranquil lake city of Pokhara with sunrise views over the Annapurna range.",
    overview: [
      "Pashupatinath Temple is one of the most sacred Shiva shrines in the world — the Ganga Aarti here rivals Varanasi in spiritual intensity and draws thousands of devotees at dusk.",
      "Boudhanath is the largest stupa in Asia and a UNESCO World Heritage Site. Walking the kora (circumambulation) at dawn alongside Buddhist monks is a profoundly peaceful experience.",
      "Manakamana Temple, perched at 1,302m, is believed to fulfill wishes. The 10-minute cable car ride offers sweeping views of the Trisuli River valley far below.",
      "Pokhara's Sarangkot viewpoint delivers one of the most spectacular mountain panoramas on earth — Dhaulagiri, Annapurna, and Machhapuchhre (Fishtail) lit by the rising sun.",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Kathmandu — The Ancient Capital",
        highlights: [
          "Airport pickup and hotel check-in",
          "Pashupatinath Temple evening darshan & Ganga Aarti (starts 5:30 PM)",
          "Orientation walk through Thamel market",
          "Welcome dinner at hotel",
        ],
        meals: "Dinner",
        stay: "Kathmandu",
      },
      {
        day: 2,
        title: "Kathmandu Pilgrimage Circuit",
        highlights: [
          "Boudhanath Stupa — morning kora walk alongside Buddhist monks",
          "Patan Durbar Square — finest Newar architecture in Nepal (UNESCO Heritage)",
          "Swayambhunath — the Monkey Temple, a hilltop Buddhist stupa overlooking the valley",
          "Bhaktapur Durbar Square — medieval capital with the 55-Window Palace",
        ],
        meals: "Breakfast, Dinner",
        stay: "Kathmandu",
      },
      {
        day: 3,
        title: "Kathmandu → Manakamana → Pokhara",
        highlights: [
          "Early drive to Manakamana (3 hrs from Kathmandu)",
          "Manakamana Temple cable car — wish-fulfilling Goddess shrine at 1,302m",
          "Continue drive to Pokhara (3 hrs through scenic Gandaki hills)",
          "Phewa Lake boat ride at sunset",
        ],
        meals: "Breakfast, Dinner",
        stay: "Pokhara (Lakeside)",
      },
      {
        day: 4,
        title: "Pokhara — Himalayan Sunrise & Sacred Sites",
        highlights: [
          "Sarangkot sunrise (4:30 AM departure) — Annapurna, Dhaulagiri, Machhapuchhre panorama",
          "David Falls (Patale Chhango) — waterfall that disappears underground",
          "Gupteshwar Mahadev Cave — natural Shiva lingam inside a sacred cave",
          "World Peace Pagoda — Japanese Buddhist stupa with panoramic valley views",
          "Bindhyabasini Temple — patroness Goddess of Pokhara city",
        ],
        meals: "Breakfast, Dinner",
        stay: "Pokhara",
      },
      {
        day: 5,
        title: "Pokhara → Sanga Shiva → Kathmandu",
        highlights: [
          "Leisure morning at Phewa Lake or Lakeside market",
          "Drive to Kathmandu (7 hrs via Prithvi Highway)",
          "Stop at Sanga — 143-foot Shiva statue, tallest in Nepal",
          "Kathmandu Durbar Square evening stroll (lit at night)",
        ],
        meals: "Breakfast, Dinner",
        stay: "Kathmandu",
      },
      {
        day: 6,
        title: "Departure from Kathmandu",
        highlights: [
          "Breakfast at hotel",
          "Last-minute shopping — Thamel (pashminas, thangka paintings, rudraksha)",
          "Tribhuvan International Airport drop (3 hours before flight)",
        ],
        meals: "Breakfast",
        stay: "—",
      },
    ],
    inclusions: [
      "5 nights accommodation — 2 nights Kathmandu (3-star) + 3 nights Pokhara (lakeside hotel), twin-sharing",
      "Daily breakfast + dinner throughout (vegetarian meals always available on request)",
      "Private air-conditioned vehicle for all transfers and sightseeing",
      "Manakamana Temple cable car tickets (return journey)",
      "Sarangkot sunrise jeep transfer (4:30 AM departure)",
      "Phewa Lake shared boat ride",
      "Boudhanath Stupa entry fee",
      "Patan Durbar Square entry fee",
      "English/Hindi-speaking guide for all days of sightseeing",
      "Nepal entry assistance — document checklist and border guidance",
      "All applicable government taxes and tourism levies",
      "24/7 support from Nithyeshwar Tours coordinator throughout the trip",
    ],
    exclusions: [
      "Airfare or train/bus fare to/from Kathmandu (can be arranged separately)",
      "Lunch throughout (approx. ₹200–400 per meal at local restaurants)",
      "Personal expenses — shopping, laundry, phone calls, tips",
      "Travel insurance (strongly recommended — from approx. ₹350/day)",
      "Bhaktapur Durbar Square entry fee (NPR 1,500 for Indian nationals)",
      "Swayambhunath entry fee (NPR 200)",
      "Optional pony/golf cart at temples",
      "Any services not explicitly listed under Inclusions",
    ],
    hotels: [
      { location: "Kathmandu", hotelName: "Hotel Tibet / Hotel Moonlight", category: "3-Star", nights: 3 },
      { location: "Pokhara", hotelName: "Lakeside Retreat / Hotel Landmark", category: "3-Star", nights: 2 }
    ],
    booking: {
      requiredDocuments: [
        "Valid Indian Passport OR original Voter ID card",
        "Children under 18 must carry original birth certificate & school ID",
        "For foreign nationals/NRIs: Valid Passport & Nepal Tourist Visa"
      ],
      paymentSchedule: [
        { stage: "Booking Deposit", amount: "20% of total cost", due: "At time of booking" },
        { stage: "Balance Payment", amount: "80% of total cost", due: "10 days before departure" }
      ],
      importantNotes: [
        "Indian currency notes of ₹100 and below are widely accepted in Nepal.",
        "Aadhaar Card, PAN Card, and Driving License are NOT accepted at immigration.",
        "Hotel check-in time is usually 2:00 PM and checkout is 12:00 PM."
      ]
    },
    knowBefore: {
      visa: "Indian citizens do NOT need a Nepal visa. Entry is completely visa-free with a valid Indian passport or original Voter ID. NRI or foreign nationals require a valid passport and Nepal tourist visa (obtainable at Kathmandu airport or Sonauli border, USD 25 for 15 days).",
      id: "Original valid Passport OR original Voter ID is mandatory at the Nepal border. Aadhaar card, PAN card, and driving licence are NOT accepted at any Nepal entry point. Students must carry original school ID + parent's ID. Children under 18 must carry original birth certificate.",
      fitness:
        "This is an Easy-level package. Normal walking fitness is sufficient. Sarangkot involves a short uphill walk (~20 min) — a seated jeep alternative is available. No altitude concerns at any point of this itinerary.",
      packing: [
        "1 small daypack + 1 main bag (keep your original ID in your daypack at all times)",
        "Comfortable walking shoes with grip — avoid slippers at temples",
        "Warm jacket for Sarangkot sunrise (temperature ~5°C at 4:30 AM year-round)",
        "Light rain jacket (April–September)",
        "Reusable water bottle (Nepal tap water is not potable — buy sealed bottles)",
        "Basic first aid (antiseptic, antacid, ORS sachets)",
        "Small denomination INR or some NPR cash for tips and small purchases",
        "Camera with extra memory card — Pokhara sunrise and Boudhanath are unmissable",
      ],
    },
    faqs: [
      {
        q: "Can I use Indian SIM cards in Nepal?",
        a: "Indian SIMs (Airtel/Jio/Vi) work in Nepal on international roaming, but charges are high and coverage may be limited outside Kathmandu and Pokhara. We recommend buying a local Nepal SIM at Kathmandu airport on arrival — NCell or Nepal Telecom costs approx. NPR 200 with 5 GB data and works excellently across both cities.",
      },
      {
        q: "Is the Manakamana cable car safe for senior citizens?",
        a: "Yes. Manakamana cable car is a standard enclosed gondola — similar to ski lifts at Indian hill stations (Gulmarg, Auli). It is very safe, runs year-round, and the ride takes about 10 minutes each way. Seniors with mobility issues can remain seated throughout. Those with severe acrophobia (fear of heights) may find the open valley views challenging.",
      },
      {
        q: "Can we fly Kathmandu–Pokhara instead of driving?",
        a: "Yes. The Kathmandu–Pokhara flight is only 25 minutes and costs approx. ₹4,000–5,500 per person (subject to availability). We can arrange this as an upgrade. Note: you will miss the Manakamana Temple stopover unless we restructure that day — our team can adjust the itinerary accordingly.",
      },
      {
        q: "Are vegetarian / satvik food options available throughout?",
        a: "Nepal is extremely vegetarian-friendly. All our included meals (breakfast + dinner) are 100% vegetarian. Most Kathmandu and Pokhara restaurants offer Indian thali and pure veg options. Satvik meals (no onion, no garlic) can be arranged with 24 hours' prior notice through our coordinator.",
      },
    ],
    terms: {
      cancellationPolicy: [
        { timeBefore: "30+ days", refund: "90% refund (10% deducted)" },
        { timeBefore: "15-29 days", refund: "50% refund (50% deducted)" },
        { timeBefore: "Less than 15 days", refund: "No refund" }
      ],
      travelInsurance: "Highly recommended for international travel to cover medical emergencies or trip delays.",
      changes: "Itinerary changes can be done up to 14 days prior to departure, subject to availability and flight rescheduling fees.",
      companyRights: "Nithyeshwar Tours reserves the right to modify the route or hotels due to weather anomalies, landslides, or political closures.",
      refundPolicy: "No refund for unused services (hotel nights, meals, sightseeing, transport) once the tour starts.",
      ageRestriction: "No strict age limits for this tour. Safe for toddlers and senior citizens."
    },
    idealFor: "Senior Citizens · Families · First-Time International Travelers",
  },

  "NPL-015": {
    code: "NPL 015",
    title: "Nepal Muktinath Pilgrimage Tour",
    subtitle: "5 Nights · 6 Days",
    duration: "5 Nights / 6 Days",
    price: "₹24,500",
    priceNote: "Includes Jomsom mountain flight · GST extra",
    difficulty: "Moderate",
    difficultyColor: "bg-amber-50 text-amber-700 border-amber-200",
    altitude: "3,710m (Muktinath)",
    altitudeWarning:
      "Muktinath Temple sits at 3,710m altitude. Travelers with heart disease, uncontrolled hypertension, asthma, sleep apnea, or major surgery within the last 3 months must obtain written medical clearance before booking. Children under 12 and travelers above 70 are advised to consult their physician.",
    startPoint: "Kathmandu",
    heroImage: "/images/pilgrimage/mount-kailash.jpg",
    heroAlt: "High-altitude Himalayan pilgrimage route to Muktinath Temple",
    tagline: "108 DIVYA DESAM · 3,710M ALTITUDE PILGRIMAGE",
    description:
      "A profoundly sacred high-altitude pilgrimage to Muktinath — one of the 108 Divya Desams and the only shrine where Vishnu, Shiva, and the Buddhist Bodhisattva are all worshipped together. Take a holy bath in the 108 brass water spouts and receive moksha — liberation from the cycle of rebirth. Includes the thrilling 18-minute Jomsom mountain flight.",
    overview: [
      "Muktinath is considered the most powerful moksha-kshetra (liberation site) in Hinduism — Lord Vishnu is said to appear here in his highest form. Bathing in all 108 brass water spouts is believed equal to bathing in all sacred rivers of India.",
      "The Jomsom mountain flight (18 minutes) soars through the Kali Gandaki gorge — the deepest valley on earth — flanked by Dhaulagiri (8,167m) and Annapurna (8,091m) on both sides.",
      "Jwala Mai Mandir inside the Muktinath complex features an eternal flame burning from a natural gas spring — fire and water co-existing in the same temple, symbolising cosmic unity.",
      "Ranipauwa village at the base of Muktinath offers rare high-altitude silence — prayer flags, yak herders, and a sky so clear the stars are visible before sunset.",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Kathmandu — Sacred Gateway",
        highlights: [
          "Airport pickup and hotel check-in",
          "Pashupatinath Temple evening darshan & Aarti",
          "Team briefing on Muktinath altitude protocol and preparation",
          "Early rest strongly recommended (acclimatisation begins at 1,400m)",
        ],
        meals: "Dinner",
        stay: "Kathmandu (1,400m)",
      },
      {
        day: 2,
        title: "Kathmandu → Manakamana → Pokhara",
        highlights: [
          "Manakamana Temple cable car darshan (en route to Pokhara)",
          "Arrive Pokhara (822m) — check-in at Lakeside hotel",
          "Altitude preparation briefing — hydration, medications, what to expect",
          "Phewa Lake evening stroll (rest day before high-altitude ascent)",
        ],
        meals: "Breakfast, Dinner",
        stay: "Pokhara (822m)",
      },
      {
        day: 3,
        title: "Pokhara → Jomsom (Mountain Flight) → Muktinath",
        highlights: [
          "Early morning Jomsom mountain flight — Tara Air / Sita Air (6:30 AM, 18 minutes)",
          "Flying through the Kali Gandaki Gorge — Dhaulagiri and Annapurna on both sides",
          "Jomsom to Ranipauwa by 4WD Jeep (90 min through the Mustang valley)",
          "Muktinath Temple darshan — Vishnu and Shakti combined shrine",
          "Sacred bath in all 108 brass water spouts (Muktidhara) — cold mountain spring water",
          "Jwala Mai Mandir — eternal flame from natural gas spring, alongside water",
          "Overnight at Ranipauwa guesthouse (mountain views, 3,720m)",
        ],
        meals: "Breakfast, Dinner",
        stay: "Ranipauwa (3,720m)",
      },
      {
        day: 4,
        title: "Muktinath Sunrise Darshan → Jomsom → Pokhara",
        highlights: [
          "Sunrise darshan at Muktinath Temple — golden light on Himalayan peaks at 5:30 AM",
          "Jeep back to Jomsom (90 min)",
          "Return mountain flight Jomsom → Pokhara",
          "Pokhara afternoon rest and Sarangkot sunset viewpoint",
        ],
        meals: "Breakfast, Dinner",
        stay: "Pokhara (822m)",
      },
      {
        day: 5,
        title: "Pokhara Sunrise → Kathmandu",
        highlights: [
          "Sarangkot sunrise (4:30 AM) — Annapurna, Dhaulagiri, and Machhapuchhre panorama",
          "Drive to Kathmandu (7 hrs via Prithvi Highway)",
          "Stop at Sanga — 143-ft Shiva statue",
          "Boudhanath Stupa evening kora walk",
        ],
        meals: "Breakfast, Dinner",
        stay: "Kathmandu (1,400m)",
      },
      {
        day: 6,
        title: "Departure from Kathmandu",
        highlights: [
          "Breakfast at hotel",
          "Thamel shopping — Muktinath prasad items, rudraksha, pashmina shawls",
          "Tribhuvan International Airport drop",
        ],
        meals: "Breakfast",
        stay: "—",
      },
    ],
    inclusions: [
      "5 nights accommodation — 1N Kathmandu + 1N Pokhara + 1N Ranipauwa guesthouse (3,720m) + 1N Pokhara + 1N Kathmandu",
      "Round-trip Jomsom mountain flight (Tara Air / Sita Air — fully booked and managed)",
      "4WD Jeep transfer Jomsom–Muktinath–Jomsom (shared jeep)",
      "Manakamana Temple cable car (return)",
      "All meals as per itinerary (vegetarian; satvik on request)",
      "ACAP permit (Annapurna Conservation Area Project — mandatory for Muktinath area)",
      "Oxygen cylinder on standby at Ranipauwa guesthouse (safety)",
      "Experienced high-altitude guide with Muktinath pilgrimage expertise",
      "Daily altitude health check by guide",
      "Nepal entry documentation assistance",
      "All applicable taxes",
    ],
    exclusions: [
      "Airfare or transport to/from Kathmandu",
      "Kathmandu–Pokhara flight upgrade (optional, ₹4,000–5,500 per person — add-on available)",
      "Diamox (acetazolamide) altitude medication — consult your doctor before travel",
      "Travel insurance (strongly recommended for all high-altitude trips)",
      "Pony rides at Muktinath (optional, approx. NPR 1,500 one-way)",
      "Personal expenses and tips",
      "Lunch throughout (available at local restaurants, NPR 350–700)",
      "Additional hotel nights due to weather-related Jomsom flight delays",
    ],
    hotels: [
      { location: "Kathmandu", hotelName: "Hotel Tibet / Hotel Moonlight", category: "3-Star", nights: 2 },
      { location: "Pokhara", hotelName: "Lakeside Retreat / Hotel Landmark", category: "3-Star", nights: 2 },
      { location: "Ranipauwa (Muktinath)", hotelName: "Hotel Snowland / Guesthouse", category: "Standard", nights: 1 }
    ],
    booking: {
      requiredDocuments: [
        "Valid Indian Passport OR original Voter ID card",
        "ACAP Permit & TIMS Card details (handled by our team)",
        "Medical fitness checklist signed by traveler"
      ],
      paymentSchedule: [
        { stage: "Booking Deposit", amount: "30% of total cost", due: "At time of booking" },
        { stage: "Balance Payment", amount: "70% of total cost", due: "15 days before departure" }
      ],
      importantNotes: [
        "Jomsom flights are highly weather-dependent. In case of cancellations, road transfer via jeep may be arranged.",
        "Oxygen cylinder will be available at guesthouse in Ranipauwa in case of altitude sickness."
      ]
    },
    knowBefore: {
      visa: "Indian citizens do NOT need a Nepal visa. Original Passport or Voter ID is mandatory at all Nepal border crossings and the Jomsom checkpost. The ACAP permit (included in the package) is required for the Muktinath restricted area — we handle this entirely.",
      id: "Original valid Passport OR original Voter ID — no exceptions. You will be checked at the Nepal border, the Jomsom checkpost, and at the Muktinath temple registry. Do not bring only photocopies.",
      altitude:
        "At 3,710m, Muktinath can trigger Acute Mountain Sickness (AMS). Common symptoms: headache, nausea, fatigue, breathlessness. Golden rule: if you feel unwell, do NOT ascend further — descend immediately. Our guide carries an oxygen cylinder. Hydrate aggressively (4–5 litres/day at altitude). Avoid alcohol the night before and during ascent. Walk slowly — this is not a trek, but the altitude affects even fit travelers.",
      fitness:
        "Moderate fitness is required. You must walk 500–800 metres at 3,710m altitude (within the Muktinath temple complex). Pony rides are available for the uphill sections within Ranipauwa village. Travelers with heart disease, uncontrolled blood pressure, or asthma must obtain written medical clearance before booking.",
      medical:
        "Consult your physician before booking if you have: heart disease, hypertension, diabetes (altitude affects insulin sensitivity), asthma, sleep apnea, chronic lung disease, or major surgery within the past 3 months. If you take blood thinners or antihypertensives, inform our tour coordinator at the time of booking. Diamox (altitude sickness prevention) is available at Kathmandu pharmacies — ask your doctor if it is appropriate for you.",
      packing: [
        "Original ID (Passport or Voter ID) — the single most critical item on this trip",
        "Heavy warm jacket rated to at least -5°C — Ranipauwa at night is bitterly cold",
        "Thermal inner layer (top and bottom)",
        "Warm gloves and beanie — mandatory at 3,710m regardless of season",
        "Sturdy closed walking shoes with ankle support (no slippers)",
        "Sunscreen SPF 50+ and UV-blocking sunglasses — UV radiation is extreme at altitude",
        "ORS sachets (minimum 10) — rehydration is critical at altitude",
        "Personal medications + Diamox prescription from your physician",
        "Power bank — cold temperatures drain phone batteries rapidly at altitude",
        "Cash in INR or NPR — no ATMs at Jomsom or Muktinath",
      ],
    },
    faqs: [
      {
        q: "Are Jomsom mountain flights guaranteed? What if the flight is cancelled?",
        a: "Jomsom flights are operated by small Twin Otter/Dornier aircraft and are highly weather-dependent. The Kali Gandaki gorge generates strong afternoon winds — flights operate only in the morning window (6–10 AM). Cancellations are common during monsoon (June–Sep) and occasional in other seasons. If flights are cancelled, we wait for the next available slot (usually next morning), which may require an extra night in Pokhara. We cover additional accommodation costs during weather holds. Travel insurance covering trip disruption is strongly recommended.",
      },
      {
        q: "Can elderly devotees (age 65–75) do Muktinath?",
        a: "Many devotees aged 65–75 complete Muktinath successfully with our support. However, written medical clearance is mandatory for this age group, and pony rides (approximately 500m uphill within Ranipauwa) are strongly recommended to reduce exertion. Our guide maintains slower pace, checks on health frequently, and maintains oxygen on standby. We do not recommend Muktinath for travelers with uncontrolled blood pressure above 160/100 or cardiac stenting done within 6 months.",
      },
      {
        q: "How cold is it at Muktinath? What temperature should I expect?",
        a: "Ranipauwa (3,720m) daytime: 5–15°C in October–November; 0–10°C in March–May. Night-time: -5 to 2°C in October–November; -10 to -2°C in December–February. The 108 water spouts are ice-cold mountain spring water — the bath is brief but intense. Heavy warm clothing is non-negotiable regardless of season.",
      },
      {
        q: "Is the Jomsom flight included in the ₹24,500 price?",
        a: "Yes. The round-trip Jomsom mountain flight is fully included in the package price — it is what makes this package significantly higher than NPL-014. As an alternative, some travelers prefer the overland jeep route (Pokhara → Jomsom, approx. 8 hours through the Kali Gandaki valley) — this can be substituted on request at no extra charge and offers equally dramatic scenery at a slower pace.",
      },
    ],
    terms: {
      cancellationPolicy: [
        { timeBefore: "30+ days", refund: "85% refund (15% deducted due to flight bookings)" },
        { timeBefore: "15-29 days", refund: "50% refund" },
        { timeBefore: "Less than 10 days", refund: "No refund" }
      ],
      travelInsurance: "Mandatory for high-altitude trips covering helicopter evacuation.",
      changes: "Subject to flight rescheduling availability and charges. Upgrades to private jeep available.",
      companyRights: "Nithyeshwar Tours holds the right to alter flights/jeep slots in case of adverse mountain weather.",
      refundPolicy: "No refunds for weather-related flight delays or if the traveler chooses not to do the holy bath/trek.",
      ageRestriction: "Not recommended for travelers above 75 years or children under 10 years without strict medical checks."
    },
    idealFor: "Spiritual Seekers · Devotees · Couples · Pilgrimage Groups",
  },

  "NPL-016": {
    code: "NPL 016",
    title: "Kathmandu, Pokhara & Chitwan",
    subtitle: "7 Nights · 8 Days",
    duration: "7 Nights / 8 Days",
    price: "₹19,500",
    priceNote: "Per person, twin-sharing · GST extra",
    difficulty: "Easy–Moderate",
    difficultyColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    altitude: "1,400m (Pokhara/Kathmandu)",
    startPoint: "Kathmandu",
    heroImage: "/images/destinations/international.jpg",
    heroAlt: "Chitwan jungle safari and Himalayan peaks of Nepal",
    tagline: "TEMPLES · SAFARI · HIMALAYAN PANORAMAS",
    description:
      "The complete Nepal experience in one curated journey — ancient spiritual temples in Kathmandu, thrilling jungle safaris with elephants and rhinos in Chitwan National Park, and breathtaking Himalayan sunrise panoramas from Pokhara. Nepal's three iconic landscapes in one itinerary.",
    overview: [
      "Chitwan National Park is a UNESCO World Heritage Site and Nepal's premier wildlife reserve — home to Bengal tigers, one-horned rhinoceros, gharial crocodiles, and over 500 bird species.",
      "Tharu culture is one of Nepal's oldest indigenous traditions. The Tharu community has lived in the Chitwan plains for centuries, and their traditional stick dance (Deuda) is a spectacular evening performance.",
      "Bhaktapur is considered the best-preserved medieval city in Asia — the 55-Window Palace and Nyatapola Temple reflect extraordinary Malla dynasty craftsmanship from the 15th century.",
      "The 143-foot Shiva statue at Sanga village on the outskirts of Kathmandu is the tallest statue in Nepal — a deeply resonant landmark visible from the highway.",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Kathmandu",
        highlights: [
          "Airport pickup and hotel check-in",
          "Pashupatinath Temple evening darshan and Ganga Aarti",
          "Thamel orientation walk and welcome briefing",
          "Welcome dinner",
        ],
        meals: "Dinner",
        stay: "Kathmandu",
      },
      {
        day: 2,
        title: "Kathmandu Sacred Heritage Circuit",
        highlights: [
          "Boudhanath Stupa — morning kora walk with Buddhist monks",
          "Swayambhunath (Monkey Temple) — hilltop Buddhist stupa with city panorama",
          "Patan Durbar Square — finest Newar architecture in Nepal (UNESCO)",
          "Bhaktapur Durbar Square — 55-Window Palace, Nyatapola Temple",
        ],
        meals: "Breakfast, Dinner",
        stay: "Kathmandu",
      },
      {
        day: 3,
        title: "Kathmandu → Chitwan National Park",
        highlights: [
          "Morning drive to Chitwan (4–5 hrs via East–West Highway)",
          "Jungle resort check-in and wildlife orientation briefing",
          "Afternoon nature walk with naturalist guide",
          "Tharu cultural stick dance performance (evening)",
        ],
        meals: "Breakfast, Dinner",
        stay: "Chitwan (jungle resort)",
      },
      {
        day: 4,
        title: "Chitwan Full Jungle Safari Day",
        highlights: [
          "Sunrise elephant safari — rhino sightings nearly guaranteed at dawn",
          "OR Jeep safari through forest trails (covers more ground, better for photography)",
          "Canoe ride on Rapti River — gharial and mugger crocodile sightings",
          "Bird watching walk with naturalist (500+ species, including rare Bengal florican)",
          "Traditional Tharu community village walk",
        ],
        meals: "Breakfast, Dinner",
        stay: "Chitwan",
      },
      {
        day: 5,
        title: "Chitwan → Pokhara — The Lake City",
        highlights: [
          "Morning jungle walk before checkout",
          "Drive to Pokhara (4 hrs via scenic Prithvi Highway)",
          "Phewa Lake boat ride at sunset",
          "Lakeside Pokhara evening market stroll",
        ],
        meals: "Breakfast, Dinner",
        stay: "Pokhara (Lakeside hotel)",
      },
      {
        day: 6,
        title: "Pokhara — Mountains & Sacred Sites",
        highlights: [
          "Sarangkot sunrise (4:30 AM) — Annapurna, Dhaulagiri, Machhapuchhre at dawn",
          "David Falls — dramatic underground waterfall",
          "Gupteshwar Mahadev Cave — natural Shiva lingam",
          "World Peace Pagoda — Japanese Buddhist stupa with valley panorama",
          "Bindhyabasini Temple — patroness Goddess of Pokhara",
        ],
        meals: "Breakfast, Dinner",
        stay: "Pokhara",
      },
      {
        day: 7,
        title: "Pokhara → Sanga → Kathmandu",
        highlights: [
          "Leisure morning at Phewa Lake or Lakeside market",
          "Drive to Kathmandu (7 hrs via Prithvi Highway)",
          "Stop at Sanga — 143-ft Shiva statue, tallest in Nepal",
          "Kathmandu evening free for shopping in Thamel",
        ],
        meals: "Breakfast, Dinner",
        stay: "Kathmandu",
      },
      {
        day: 8,
        title: "Departure",
        highlights: [
          "Breakfast at hotel",
          "Thamel shopping — pashmina, handmade goods, thangka paintings",
          "Airport drop (Tribhuvan International Airport)",
        ],
        meals: "Breakfast",
        stay: "—",
      },
    ],
    inclusions: [
      "7 nights accommodation — 2N Kathmandu (3-star) + 2N Chitwan jungle resort (full board) + 3N Pokhara (lakeside hotel)",
      "Chitwan elephant safari OR jeep safari (1 activity of choice on arrival)",
      "Canoe ride on Rapti River (crocodile spotting)",
      "Tharu cultural stick dance performance (evening)",
      "Sarangkot sunrise jeep transfer (4:30 AM)",
      "Phewa Lake shared boat ride",
      "Daily breakfast + dinner (Chitwan resort on full board)",
      "Private AC vehicle for all road transfers and sightseeing",
      "English/Hindi-speaking guide throughout",
      "Chitwan National Park entry fees and conservation fee",
      "Nepal border documentation assistance",
      "All applicable taxes",
    ],
    exclusions: [
      "Airfare or transport to/from Kathmandu",
      "Kathmandu–Pokhara flight upgrade (optional, ₹4,000–5,500 per person — add-on available)",
      "Lunch throughout (₹200–500 per meal locally)",
      "Bhaktapur Durbar Square entry (NPR 1,500 for Indian nationals)",
      "Second wildlife activity at Chitwan (if you want both elephant AND jeep — available at extra cost)",
      "Personal expenses, shopping, tips",
      "Travel insurance (strongly recommended)",
      "Any optional activities not listed above",
    ],
    hotels: [
      { location: "Kathmandu", hotelName: "Hotel Tibet / Hotel Moonlight", category: "3-Star", nights: 3 },
      { location: "Chitwan National Park", hotelName: "Jungle Safari Lodge", category: "3-Star (Resort)", nights: 2 },
      { location: "Pokhara", hotelName: "Lakeside Retreat / Hotel Landmark", category: "3-Star", nights: 2 }
    ],
    booking: {
      requiredDocuments: [
        "Valid Indian Passport OR original Voter ID card",
        "Birth certificate or original School ID for children under 18"
      ],
      paymentSchedule: [
        { stage: "Booking Deposit", amount: "20% of total cost", due: "At time of booking" },
        { stage: "Balance Payment", amount: "80% of total cost", due: "10 days before departure" }
      ],
      importantNotes: [
        "Full board meals (Breakfast, Lunch, Dinner) are provided during your Chitwan stay.",
        "Wear earthy or muted colors during jungle safaris to avoid disturbing wildlife.",
        "Carry insect repellent for Chitwan jungle walks."
      ]
    },
    knowBefore: {
      visa: "Indian citizens do NOT need a Nepal visa. Entry is visa-free with original Passport or original Voter ID. Aadhaar card is NOT accepted at any Nepal entry point. NRI or foreign nationals require a valid passport and tourist visa.",
      id: "Original valid Passport OR original Voter ID — mandatory. Keep a photocopy in a separate bag as backup. Children under 18 must carry original birth certificate.",
      fitness:
        "Easy–Moderate. Elephant safari requires boarding an elephant from a platform (approximately 1.5–2m high) and riding bareback for 45 minutes — not ideal for those with severe back or hip conditions. Jeep safari is fully comfortable for all ages. Sarangkot involves a 20-minute uphill walk or available jeep alternative.",
      packing: [
        "Muted/earthy colours for Chitwan safari — avoid bright red, white, or fluorescent (disturbs wildlife)",
        "Insect repellent with DEET — essential for Chitwan evenings (dengue-active mosquitoes at dusk)",
        "Closed shoes or boots for jungle walks (never open sandals)",
        "Light waterproof jacket (April–September)",
        "Warm jacket for Sarangkot sunrise (5°C at 4:30 AM)",
        "Binoculars — dramatically improves bird watching and wildlife spotting",
        "Sunscreen SPF 50+",
        "Camera with zoom lens (wildlife photography at Chitwan)",
        "Personal medications and basic first aid",
      ],
    },
    faqs: [
      {
        q: "Are the elephants at Chitwan well-treated?",
        a: "We work exclusively with Chitwan operators who follow Nepal government captive elephant welfare guidelines. The elephants used for safaris also perform conservation patrol work year-round — they are working animals, not just tourist attractions. If you prefer not to ride elephants, we are happy to substitute the jeep safari at no extra cost. Both options provide excellent wildlife sighting opportunities.",
      },
      {
        q: "What wildlife is realistically likely at Chitwan?",
        a: "One-horned rhinoceros sightings are nearly guaranteed on the elephant safari — over 700 rhinos live in Chitwan. Bengal tiger sightings are possible but not guaranteed (roughly 25–30% chance on any given day). Gharial and mugger crocodiles on the canoe ride are common. Bird watchers regularly spot 50+ species in a single morning, including the rare Bengal florican and giant hornbill.",
      },
      {
        q: "Is Chitwan suitable for senior citizens?",
        a: "Yes. The jeep safari is very comfortable for seniors — it is a standard 4WD vehicle on forest tracks. The canoe ride is on calm river water. The Tharu cultural evening is a seated performance. The elephant safari requires climbing up to the elephant from an elevated platform — this can be challenging for those with knee or hip issues. Jeep safari is always available as an alternative.",
      },
      {
        q: "What is the best season for Chitwan?",
        a: "October–March is peak wildlife season — vegetation is sparse after monsoon, making wildlife easier to spot, and the weather is pleasant. April–May is also good with excellent sightings. June–August (monsoon): Chitwan officially remains open, but parts of the park flood, sightings are difficult, and safaris may be restricted or cancelled. We do not recommend choosing Chitwan during monsoon.",
      },
    ],
    terms: {
      cancellationPolicy: [
        { timeBefore: "30+ days", refund: "90% refund" },
        { timeBefore: "15-29 days", refund: "60% refund" },
        { timeBefore: "Less than 15 days", refund: "No refund" }
      ],
      travelInsurance: "Highly recommended covering flight delays, emergency medical expenses, or safari cancellations.",
      changes: "Permitted up to 14 days before start date, subject to hotel/safari guide slot updates.",
      companyRights: "Nithyeshwar Tours reserves the right to alter safari options (e.g. Jeep vs Elephant) based on Chitwan park authorities' seasonal guidelines.",
      refundPolicy: "No refunds for weather-related flight delays or if national park safari is suspended due to flooding.",
      ageRestriction: "Suitable for all ages. Young children should be carefully supervised on canoe and elephant safaris."
    },
    idealFor: "Families · Travel Vloggers · Newlyweds · Nature Lovers",
  },

  "UP-08": {
    code: "UP 08",
    title: "Varanasi & Nepal Cross-Border Yatra",
    subtitle: "7 Nights · 8 Days",
    duration: "7 Nights / 8 Days",
    price: "₹22,500",
    priceNote: "Includes border crossing & permits · GST extra",
    difficulty: "Easy",
    difficultyColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    altitude: "Flat (Max 1,400m Kathmandu)",
    startPoint: "Varanasi",
    heroImage: "/images/pilgrimage/varanasi.jpg",
    heroAlt: "Varanasi Ganga Aarti and Kathmandu Pashupatinath — cross-border pilgrimage",
    tagline: "KASHI TO KATHMANDU · SACRED CROSS-BORDER YATRA",
    description:
      "A grand spiritual cross-border pilgrimage connecting Kashi Vishwanath in Varanasi with Lord Buddha's birthplace in Lumbini and Lord Shiva's supreme Pashupatinath in Kathmandu. One journey across two nations, three of the world's most sacred sites in eight days.",
    overview: [
      "Kashi (Varanasi) is the world's oldest living city — Lord Shiva himself is said to have founded it. The Ganga Aarti at Dashashwamedh Ghat is the most spectacular religious ceremony in all of India.",
      "Lumbini is the exact birthplace of Siddhartha Gautama — the historical Buddha. The Mayadevi Temple marks the precise spot where he was born in 563 BCE. It is a UNESCO World Heritage Site and a convergence point of every tradition of Buddhism worldwide.",
      "Pashupatinath Temple in Kathmandu is the Jyotirlinga of Nepal — one of the most sacred Shiva temples on earth. The evening Aarti rivals Varanasi in grandeur. Only Hindus may enter the inner sanctum.",
      "The Sonauli/Sunauli border crossing is the most convenient overland India–Nepal crossing for pilgrims from UP and Bihar — a brief walk with full documentation assistance from our team.",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Varanasi — Kashi, The City of Shiva",
        highlights: [
          "Arrive Varanasi (train or flight pickup)",
          "Hotel check-in and freshen up",
          "Kashi Vishwanath Temple darshan (VIP queue assistance included)",
          "Kal Bhairav Temple — guardian deity of Kashi",
          "Dashashwamedh Ghat Ganga Aarti at sunset",
        ],
        meals: "Dinner",
        stay: "Varanasi",
      },
      {
        day: 2,
        title: "Varanasi — Sacred Ghats & Sarnath",
        highlights: [
          "Predawn Ganga Aarti boat ride — watch aarti from the river at 5:00 AM",
          "Sunrise boat ride on the Ganga (Manikarnika burning ghat, Assi Ghat)",
          "Sarnath — where Lord Buddha gave his first sermon (Dhamek Stupa, 500 BCE)",
          "Sarnath Archaeological Museum (original Ashoka Lion Capital)",
          "Sankat Mochan Hanuman Temple visit (evening)",
        ],
        meals: "Breakfast, Dinner",
        stay: "Varanasi",
      },
      {
        day: 3,
        title: "Varanasi → Gorakhpur → Sonauli Border → Lumbini",
        highlights: [
          "Morning drive Varanasi → Gorakhpur (3.5 hrs)",
          "Gorakhnath Temple darshan, Gorakhpur",
          "Drive Gorakhpur → Sonauli border (1.5 hrs)",
          "Sonauli/Sunauli border crossing with full documentation assistance",
          "Drive Sunauli → Lumbini, Nepal (30 min from border)",
          "Mayadevi Temple — the exact birthplace of Lord Buddha (UNESCO site)",
          "Sacred Garden — Ashoka Pillar (Emperor Ashoka's 3rd century BC stone inscription)",
        ],
        meals: "Breakfast, Dinner",
        stay: "Lumbini",
      },
      {
        day: 4,
        title: "Lumbini — Buddhist Monastery Circuit",
        highlights: [
          "World Peace Flame — eternal flame burning since 1986",
          "International monastery zone — Thai, Sri Lankan, Chinese, Tibetan, Korean, Myanmar temples",
          "Lumbini Museum (Buddhist relics and archaeological artifacts)",
          "Afternoon drive to Pokhara (3.5 hrs via Butwal and Prithvi Highway)",
          "Phewa Lake boat ride at sunset",
        ],
        meals: "Breakfast, Dinner",
        stay: "Pokhara",
      },
      {
        day: 5,
        title: "Pokhara Sunrise → Manakamana → Kathmandu",
        highlights: [
          "Sarangkot sunrise (4:30 AM) — Annapurna, Dhaulagiri, and Machhapuchhre panorama",
          "Drive toward Kathmandu",
          "Manakamana Temple cable car darshan",
          "Arrive Kathmandu — hotel check-in and evening at leisure",
        ],
        meals: "Breakfast, Dinner",
        stay: "Kathmandu",
      },
      {
        day: 6,
        title: "Kathmandu — Pashupatinath & Heritage Sites",
        highlights: [
          "Pashupatinath Temple — Shiva Jyotirlinga of Nepal (VIP special Aarti darshan)",
          "Boudhanath Stupa — largest stupa in Asia, UNESCO World Heritage Site",
          "Patan Durbar Square — medieval Newar architecture masterpieces",
          "Bhaktapur Durbar Square — 55-Window Palace and Nyatapola Temple",
          "Thamel evening — final shopping in Nepal",
        ],
        meals: "Breakfast, Dinner",
        stay: "Kathmandu",
      },
      {
        day: 7,
        title: "Kathmandu → Sonauli Border → Gorakhpur",
        highlights: [
          "Early morning departure Kathmandu → Sonauli (6–7 hrs drive)",
          "Nepal exit documentation at Sunauli border (full assistance)",
          "India re-entry at Sonauli immigration",
          "Gorakhpur — Gorakhnath Temple final darshan",
          "Gorakhpur hotel check-in",
        ],
        meals: "Breakfast, Dinner",
        stay: "Gorakhpur",
      },
      {
        day: 8,
        title: "Gorakhpur Departure",
        highlights: [
          "Breakfast at hotel",
          "Gorakhpur Railway Station or Airport drop",
          "Tour concludes — safe journey home",
        ],
        meals: "Breakfast",
        stay: "—",
      },
    ],
    inclusions: [
      "7 nights accommodation — 2N Varanasi + 1N Lumbini + 1N Pokhara + 2N Kathmandu + 1N Gorakhpur",
      "Varanasi Ganga Aarti boat ride (both predawn river darshan and evening)",
      "Kashi Vishwanath VIP queue assistance",
      "Sonauli/Sunauli border crossing — full documentation escort (both directions)",
      "Gorakhnath Temple, Gorakhpur darshan (both Day 3 and Day 7)",
      "Pashupatinath Special Aarti darshan, Kathmandu",
      "Manakamana Temple cable car (return)",
      "Sarangkot sunrise jeep transfer",
      "Sarnath archaeological site entry",
      "Lumbini UNESCO Heritage site guided tour",
      "All meals as per itinerary (breakfast + dinner; vegetarian throughout)",
      "Private AC vehicle for the entire journey — India and Nepal legs",
      "Nepal border permit processing and SAARC documentation",
      "All applicable taxes",
    ],
    exclusions: [
      "Train/flight to Varanasi and from Gorakhpur (can be arranged separately)",
      "Kashi Vishwanath VIP darshan ticket (₹300/person — payable directly at temple)",
      "Bhaktapur Durbar Square entry (NPR 1,500 for Indian nationals)",
      "Sarnath Museum entry (₹25 per person)",
      "Lunch throughout",
      "Personal expenses, shopping, tips",
      "Travel insurance (strongly recommended for cross-border travel)",
      "Nepal currency exchange (NPR) — can be exchanged at Sonauli border or Kathmandu",
    ],
    hotels: [
      { location: "Varanasi", hotelName: "Hotel Diamond / Hotel Palace On Steps", category: "3-Star", nights: 2 },
      { location: "Lumbini", hotelName: "Lumbini Garden Palace / Hotel Red Sun", category: "3-Star", nights: 1 },
      { location: "Pokhara", hotelName: "Lakeside Retreat / Hotel Landmark", category: "3-Star", nights: 1 },
      { location: "Kathmandu", hotelName: "Hotel Tibet / Hotel Moonlight", category: "3-Star", nights: 2 },
      { location: "Gorakhpur", hotelName: "Hotel Cygnet Krishna / Hotel Bobina", category: "3-Star", nights: 1 }
    ],
    booking: {
      requiredDocuments: [
        "Valid Indian Passport OR original Voter ID card (Mandatory for Sonauli border crossing)",
        "Aadhaar Card is NOT accepted at Sonauli immigration",
        "Children under 18 must carry original birth certificate & school ID"
      ],
      paymentSchedule: [
        { stage: "Booking Deposit", amount: "20% of total cost", due: "At time of booking" },
        { stage: "Balance Payment", amount: "80% of total cost", due: "10 days before departure" }
      ],
      importantNotes: [
        "Full assistance is provided at the Sonauli border for SAARC permits and vehicle transition.",
        "Varanasi boat ride safety guidelines apply; life jackets are available.",
        "Carry cash in INR ₹100 notes for easy transactions in Nepal border towns."
      ]
    },
    knowBefore: {
      visa: "Indian citizens do NOT need a Nepal visa. The Sonauli (India) / Sunauli (Nepal) border is a free crossing for Indian nationals. You will pass through immigration on both sides — the process typically takes 45–60 minutes total. Our escort guide accompanies you through every step of the crossing.",
      id: "Original valid Passport OR original Voter ID — mandatory at the Sonauli border on both entry and exit. Aadhaar card, PAN card, and driving licence are NOT accepted at Nepal immigration. Children must carry original birth certificate. NRIs and foreign nationals require a valid passport and Nepal tourist visa.",
      fitness:
        "This is an Easy package — no altitude concerns anywhere on the itinerary (Kathmandu is 1,400m, similar to Ooty). The longest single drive is Kathmandu to Sonauli (6–7 hrs on Day 7). The Varanasi Ganga boat ride involves boarding via stone ghat steps — sturdy footwear is important.",
      packing: [
        "Original ID document (Passport or Voter ID) — the single most critical item for border crossing",
        "Modest clothing — shoulders must be covered at Kashi Vishwanath and Pashupatinath temples",
        "Comfortable footwear with grip for Varanasi ghats (stone steps can be slippery when wet)",
        "Varanasi has active pickpockets near the ghats — use a money belt or keep valuables close",
        "Cash — INR is accepted in Nepal (NPR preferred for tips; 1 INR ≈ 1.6 NPR)",
        "Insect repellent for Lumbini evenings (the garden area has mosquitoes after dusk)",
        "Warm layer for Sarangkot sunrise (5°C at 4:30 AM even in October)",
        "Shawl or stole for temple entry (ladies must cover head at some Varanasi shrines)",
      ],
    },
    faqs: [
      {
        q: "How complicated is the Varanasi–Nepal border crossing?",
        a: "The Sonauli/Sunauli border is one of the most routine crossings in South Asia — millions of Indians cross here every year. For Indian citizens, it is simply showing your original ID, completing a short immigration form, and walking across. Our guide accompanies you from the Indian immigration exit post, across the short walking stretch, to the Nepal entry registration desk. Total time is typically 45–60 minutes depending on crowd levels. We manage all paperwork.",
      },
      {
        q: "Can non-Hindus enter Pashupatinath Temple?",
        a: "The inner sanctum (Garba Griha) of Pashupatinath is restricted to Hindus only — strictly enforced by temple authorities. Non-Hindu travelers can observe the temple complex from designated viewing areas across the Bagmati River, which actually provides an excellent perspective of the full temple architecture and the cremation ghats. The evening Aarti at Pashupatinath is open to all visitors regardless of religion.",
      },
      {
        q: "Is the predawn Ganga boat ride at Varanasi safe?",
        a: "Yes. The predawn boat ride (departing ~5:00 AM) is one of the most serene experiences in India. The river is calm at dawn, the city is quiet, and the Aarti priests are still completing the overnight vigil. We use licensed wooden rowboats operated by experienced Varanasi boatmen. Life jackets are available on request. In winter (December–February), predawn temperature in Varanasi is 8–12°C — carry a warm jacket.",
      },
      {
        q: "Can we add Ayodhya or Prayagraj to this itinerary?",
        a: "Absolutely. We offer customised extensions adding Ram Mandir Ayodhya and/or Triveni Sangam Prayagraj before the Varanasi leg or after the Gorakhpur return. This extends the trip to 9–11 days. Contact us to design a full cross-border UP pilgrimage circuit customised to your group.",
      },
    ],
    terms: {
      cancellationPolicy: [
        { timeBefore: "30+ days", refund: "90% refund" },
        { timeBefore: "15-29 days", refund: "60% refund" },
        { timeBefore: "Less than 15 days", refund: "No refund" }
      ],
      travelInsurance: "Highly recommended covering cross-border delays and health emergencies.",
      changes: "Itinerary upgrades (e.g. adding Ayodhya/Prayagraj extensions) should be requested at least 14 days before departure.",
      companyRights: "Nithyeshwar Tours holds the right to reroute transfers in case of national highway blocks or custom delays at Sonauli.",
      refundPolicy: "No refund for missed Ganga boat rides or missed VIP darshans due to personal delays.",
      ageRestriction: "Suitable for all age groups. Recommended for families and elderly pilgrims."
    },
    idealFor: "Spiritual Seekers · Senior Citizens · Families · Cross-Border Pilgrims",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ packageCode: string }>;
}): Promise<Metadata> {
  const { packageCode } = await params;
  const pkg = PACKAGES[packageCode];
  if (!pkg) return { title: "Package Not Found — Nithyeshwar Tours" };
  return {
    title: `${pkg.title} | ${pkg.subtitle} — Nithyeshwar Tours`,
    description: pkg.description,
  };
}

export default async function NepalPackageDetailPage({
  params,
}: {
  params: Promise<{ packageCode: string }>;
}) {
  const { packageCode } = await params;
  const pkg = PACKAGES[packageCode];
  if (!pkg) notFound();

  return (
    <div className="bg-surface min-h-screen">

      {/* 1. Hero */}
      <section className="relative h-[85vh] min-h-[580px] flex items-end overflow-hidden">
        <Image
          src={pkg.heroImage}
          alt={pkg.heroAlt}
          fill
          sizes="100vw"
          className="object-cover"
          priority
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/65 to-midnight/15" aria-hidden="true" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pb-16">
          <div className="max-w-3xl">
            <span className="font-sans text-[10px] font-bold tracking-[0.35em] uppercase text-gold mb-3 block">
              {pkg.tagline}
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-3 leading-[0.95] font-light">
              {pkg.title}
            </h1>
            <p className="font-sans text-sm text-white/50 mb-6">{pkg.code} · {pkg.subtitle}</p>
            <div className="flex flex-wrap items-center gap-4">
              <span className={`px-3 py-1.5 rounded-full border text-[10px] font-bold uppercase tracking-wider ${pkg.difficultyColor}`}>
                {pkg.difficulty}
              </span>
              {pkg.altitude && (
                <span className="font-sans text-xs text-white/65 flex items-center gap-1.5">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" aria-hidden="true">
                    <path d="M3 21l9-18 9 18H3z" />
                  </svg>
                  {pkg.altitude}
                </span>
              )}
              <span className="font-sans text-xs text-white/65 flex items-center gap-1.5">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                {pkg.duration}
              </span>
              <span className="font-sans text-xs text-gold font-semibold">From {pkg.price}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Altitude Warning Banner */}
      {pkg.altitudeWarning && (
        <div className="bg-amber-50 border-b border-amber-200 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-start gap-3">
            <svg className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            </svg>
            <p className="font-sans text-sm text-amber-800 leading-relaxed">
              <strong>Altitude Advisory:</strong> {pkg.altitudeWarning}
            </p>
          </div>
        </div>
      )}

      {/* 2. Sticky Tab Nav */}
      <NepalDetailTabs />

      {/* 3. Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Content Column */}
          <div className="lg:col-span-8 space-y-20">

            {/* ── Overview ── */}
            <section id="overview" aria-labelledby="overview-heading" className="scroll-mt-24">
              <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
                PACKAGE OVERVIEW
              </span>
              <h2 id="overview-heading" className="font-serif text-3xl md:text-4xl text-midnight font-normal leading-tight mb-6">
                {pkg.title}
              </h2>
              <p className="font-sans text-base text-midnight/70 leading-relaxed mb-10">
                {pkg.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                {pkg.overview.map((point, i) => (
                  <div key={i} className="bg-white rounded-xl border border-midnight/8 p-6 hover:border-gold-dark/20 hover:shadow-ambient transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                        <span className="font-serif text-sm text-gold-dark">{i + 1}</span>
                      </div>
                      <p className="font-sans text-sm text-midnight/70 leading-relaxed">{point}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-white rounded-xl border border-midnight/8">
                <p className="font-sans text-xs text-midnight/55 leading-relaxed">
                  <span className="font-bold text-midnight/70">Ideal for: </span>{pkg.idealFor}
                </p>
              </div>
            </section>

            {/* ── Itinerary ── */}
            <section id="itinerary" aria-labelledby="itinerary-heading" className="scroll-mt-24">
              <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
                DETAILED ITINERARY
              </span>
              <h2 id="itinerary-heading" className="font-serif text-3xl md:text-4xl text-midnight font-normal leading-tight mb-8">
                Day-by-Day Journey
              </h2>

              <NepalPackageItinerary itinerary={pkg.itinerary} />
            </section>

            {/* ── Accommodation ── */}
            <section id="hotels" className="scroll-mt-24">
              <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
                ACCOMMODATION
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal leading-tight mb-8">
                Where You&apos;ll Stay
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {pkg.hotels.map((hotel, index) => (
                  <div key={index} className="bg-white rounded-xl border border-midnight/8 p-6 hover:border-gold-dark/20 hover:shadow-ambient transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-sans text-[10px] text-gold-dark uppercase tracking-wider font-semibold">
                            {hotel.location}
                          </span>
                          <div className="w-1.5 h-1.5 rounded-full bg-midnight/15" />
                          <span className="font-sans text-xs text-midnight/65">
                            {hotel.category}
                          </span>
                        </div>
                        <h3 className="font-serif text-lg text-midnight font-light">
                          {hotel.hotelName}
                        </h3>
                      </div>
                      {hotel.nights && (
                        <div className="shrink-0 bg-surface border border-midnight/5 px-4 py-2 rounded-lg text-center min-w-[70px]">
                          <span className="font-serif text-lg text-midnight font-normal block">{hotel.nights}</span>
                          <span className="font-sans text-[9px] text-midnight/50 uppercase tracking-wider block">
                            {hotel.nights === 1 ? 'Night' : 'Nights'}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ── Inclusions ── */}
            <section id="inclusions" aria-labelledby="inclusions-heading" className="scroll-mt-24">
              <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
                WHAT&apos;S COVERED
              </span>
              <h2 id="inclusions-heading" className="font-serif text-3xl md:text-4xl text-midnight font-normal leading-tight mb-8">
                Inclusions & Exclusions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-emerald-50 rounded-xl border border-emerald-100 p-6">
                  <div className="flex items-center gap-2.5 mb-5">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="font-sans text-xs font-bold text-emerald-800 uppercase tracking-widest">Included</h3>
                  </div>
                  <ul className="space-y-3">
                    {pkg.inclusions.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                        <span className="font-sans text-sm text-midnight/75 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50 rounded-xl border border-red-100 p-6">
                  <div className="flex items-center gap-2.5 mb-5">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="font-sans text-xs font-bold text-red-700 uppercase tracking-widest">Not Included</h3>
                  </div>
                  <ul className="space-y-3">
                    {pkg.exclusions.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="font-sans text-sm text-midnight/70 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* ── Booking Details ── */}
            <section id="booking" className="scroll-mt-24">
              <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
                RESERVING YOUR SPOT
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal leading-tight mb-8">
                How to Book
              </h2>
              <div className="space-y-6">
                <div className="bg-white rounded-xl border border-midnight/8 p-6">
                  <h3 className="font-sans text-xs font-bold text-midnight uppercase tracking-wider mb-4">Required Documents</h3>
                  <ul className="space-y-3">
                    {pkg.booking.requiredDocuments.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold-dark mt-2 shrink-0" />
                        <span className="font-sans text-sm text-midnight/70 leading-relaxed">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-xl border border-midnight/8 p-6">
                  <h3 className="font-sans text-xs font-bold text-midnight uppercase tracking-wider mb-4">Payment Schedule</h3>
                  <div className="border border-midnight/8 rounded-lg overflow-hidden bg-surface">
                    {pkg.booking.paymentSchedule.map((stage, idx) => (
                      <div key={idx} className={`grid grid-cols-2 p-4 ${idx > 0 ? 'border-t border-midnight/8' : ''}`}>
                        <div className="font-sans text-sm text-midnight font-semibold">{stage.stage}</div>
                        <div className="font-sans text-sm text-midnight/70">{stage.amount} ({stage.due})</div>
                      </div>
                    ))}
                  </div>
                </div>
                {pkg.booking.importantNotes && (
                  <div className="bg-amber-50/50 rounded-xl border border-amber-200/50 p-6">
                    <h3 className="font-sans text-xs font-bold text-amber-800 uppercase tracking-wider mb-4">Important Notes</h3>
                    <ul className="space-y-3">
                      {pkg.booking.importantNotes.map((note, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                          <span className="font-sans text-sm text-amber-800/80 leading-relaxed">{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>

            {/* ── Know Before You Go ── */}
            <section id="know-before" aria-labelledby="know-before-heading" className="scroll-mt-24">
              <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
                TRAVEL ESSENTIALS
              </span>
              <h2 id="know-before-heading" className="font-serif text-3xl md:text-4xl text-midnight font-normal leading-tight mb-8">
                Know Before You Go
              </h2>

              <div className="space-y-5">
                <div className="bg-white rounded-xl border border-midnight/8 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2" />
                        <path d="M3 10h18" strokeWidth="2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-sans text-sm font-bold text-midnight mb-2">Visa & Entry</h3>
                      <p className="font-sans text-sm text-midnight/70 leading-relaxed">{pkg.knowBefore.visa}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-xl border border-amber-200 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-sans text-sm font-bold text-amber-800 mb-2">ID Documents (Critical)</h3>
                      <p className="font-sans text-sm text-amber-800/80 leading-relaxed">{pkg.knowBefore.id}</p>
                    </div>
                  </div>
                </div>

                {pkg.knowBefore.altitude && (
                  <div className="bg-red-50 rounded-xl border border-red-200 p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-sans text-sm font-bold text-red-700 mb-2">Altitude Health Advisory</h3>
                        <p className="font-sans text-sm text-red-700/80 leading-relaxed">{pkg.knowBefore.altitude}</p>
                      </div>
                    </div>
                  </div>
                )}

                {pkg.knowBefore.medical && (
                  <div className="bg-purple-50 rounded-xl border border-purple-200 p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-sans text-sm font-bold text-purple-800 mb-2">Medical Clearance Required</h3>
                        <p className="font-sans text-sm text-purple-800/80 leading-relaxed">{pkg.knowBefore.medical}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="bg-white rounded-xl border border-midnight/8 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-sans text-sm font-bold text-midnight mb-2">Fitness Level</h3>
                      <p className="font-sans text-sm text-midnight/70 leading-relaxed">{pkg.knowBefore.fitness}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-midnight/8 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-midnight/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-sans text-sm font-bold text-midnight mb-4">What to Pack</h3>
                      <ul className="space-y-2.5">
                        {pkg.knowBefore.packing.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <svg className="w-3.5 h-3.5 text-gold-dark shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="font-sans text-sm text-midnight/70 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ── FAQ ── */}
            <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-24">
              <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
                QUESTIONS &amp; CLARITY
              </span>
              <h2 id="faq-heading" className="font-serif text-3xl md:text-4xl text-midnight font-normal leading-tight mb-8">
                Frequently Asked Questions
              </h2>

              <div className="space-y-3">
                {pkg.faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group bg-white rounded-xl border border-midnight/8 overflow-hidden hover:border-gold-dark/20 transition-colors duration-300"
                  >
                    <summary className="flex items-center justify-between cursor-pointer px-6 py-5 hover:bg-surface transition-colors list-none">
                      <h3 className="font-serif text-lg text-midnight font-normal pr-4 leading-snug">{faq.q}</h3>
                      <svg
                        width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        className="shrink-0 transition-transform duration-300 group-open:rotate-180 text-midnight/35"
                        aria-hidden="true"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6 pt-1 border-t border-midnight/5">
                      <p className="font-sans text-sm text-midnight/70 leading-relaxed">{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>

            </section>

            {/* ── Terms ── */}
            <section id="terms" className="scroll-mt-24">
              <span className="font-sans text-[10px] font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
                POLICIES &amp; CONDITIONS
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal leading-tight mb-8">
                Terms &amp; Conditions
              </h2>
              <div className="space-y-6">
                <div className="bg-white rounded-xl border border-midnight/8 p-6">
                  <h3 className="font-sans text-xs font-bold text-midnight uppercase tracking-wider mb-4">Cancellation Policy</h3>
                  <div className="border border-midnight/8 rounded-lg overflow-hidden bg-surface">
                    {pkg.terms.cancellationPolicy.map((policy, idx) => (
                      <div key={idx} className={`grid grid-cols-2 p-4 ${idx > 0 ? 'border-t border-midnight/8' : ''}`}>
                        <div className="font-sans text-sm text-midnight font-semibold">{policy.timeBefore}</div>
                        <div className="font-sans text-sm text-midnight/70">{policy.refund}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-xl border border-midnight/8 p-6 space-y-6">
                  {[
                    { title: "Travel Insurance", content: pkg.terms.travelInsurance },
                    { title: "Changes & Amendments", content: pkg.terms.changes },
                    { title: "Company Rights", content: pkg.terms.companyRights },
                    { title: "Refund Policy", content: pkg.terms.refundPolicy },
                    { title: "Age Restriction", content: pkg.terms.ageRestriction }
                  ].map((item, idx) => (
                    <div key={idx} className={idx > 0 ? "pt-5 border-t border-midnight/8" : ""}>
                      <h4 className="font-sans text-xs font-bold text-midnight uppercase tracking-wider mb-2">{item.title}</h4>
                      <p className="font-sans text-sm text-midnight/70 leading-relaxed">{item.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

          </div>

          {/* ── Sticky Sidebar ── */}
          <aside className="lg:col-span-4 relative hidden lg:block">
            <div className="sticky top-[152px]">
              {/* Premium Booking Card */}
              <div className="bg-[#000613] text-white border border-white/10 hover:border-gold-dark/30 transition-all duration-300 p-5 shadow-card relative overflow-hidden">
                {/* Subtle Decorative Gradient */}
                <div className="absolute -right-24 -top-24 w-48 h-48 bg-gold-dark/10 rounded-full blur-3xl pointer-events-none" />
                
                <span className="font-sans text-[10px] font-bold tracking-[0.25em] text-gold uppercase mb-1.5 block">
                  {pkg.code}
                </span>
                <h3 className="font-serif text-lg text-white font-light leading-snug mb-3">
                  {pkg.title}
                </h3>

                {/* Pricing Block */}
                <div className="mb-4 pb-4 border-b border-white/10">
                  <p className="font-sans text-[10px] font-medium text-white/70 tracking-wider mb-0.5">
                    Starting from
                  </p>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif text-4xl font-light text-gold leading-none">
                      {pkg.price}
                    </span>
                    <span className="font-sans text-[11px] text-white/65">per person</span>
                  </div>
                  <p className="font-sans text-[10px] text-white/50 mt-1 italic">
                    {pkg.priceNote}
                  </p>
                </div>

                {/* Key Journey Facts - 2x2 Grid */}
                <dl className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
                  {[
                    { label: "Duration", value: pkg.duration },
                    { label: "Difficulty", value: pkg.difficulty },
                    { label: "Altitude", value: pkg.altitude.split(" ")[0] },
                    { label: "Starts Point", value: pkg.startPoint },
                  ].map(({ label, value }) => (
                    <div key={label} className="space-y-0.5">
                      <dt className="font-sans text-[9px] text-white/60 uppercase tracking-wider">
                        {label}
                      </dt>
                      <dd className="font-sans text-xs text-white/95 font-medium truncate">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>

                {/* Call to Action */}
                <div>
                  <Link
                    href={`/inquiry?package=${packageCode}`}
                    className="flex items-center justify-center font-sans text-xs font-semibold bg-white text-[#000613] w-full py-3 transition-all duration-300 hover:bg-gold hover:text-[#000613] min-h-[44px] tracking-wider uppercase"
                  >
                    Book This Package
                  </Link>
                </div>

                {/* Small Trust Signals inside card - 2x2 Grid */}
                <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {[
                    "100% Satvik Meals",
                    "Oxygen Backup",
                    "Visa & Permits",
                    "Official Partner",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-1.5 text-[11px] text-white/70">
                      <svg className="w-3 h-3 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Unified Safety & Trust block inside the dark card */}
                <div className="mt-4 pt-4 border-t border-white/10 text-center">
                  <p className="font-sans text-[10px] text-gold/80 font-medium tracking-wider uppercase">
                    30+ Years of Sacred Service
                  </p>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>

      {/* Mobile Booking Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-midnight/10 shadow-2xl px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="font-sans text-[10px] text-midnight/45 uppercase tracking-wider">Starting from</p>
            <p className="font-serif text-2xl text-midnight font-normal leading-none">{pkg.price}</p>
          </div>
          <Link
            href={`/inquiry?package=${packageCode}`}
            className="flex items-center gap-2 px-6 py-3.5 bg-gold text-midnight font-sans text-xs font-bold tracking-[0.1em] uppercase hover:bg-yellow-300 transition-all duration-300 min-h-11 shrink-0"
          >
            Book This Package
          </Link>
        </div>
      </div>
      <div className="lg:hidden h-20" aria-hidden="true" />

    </div>
  );
}
