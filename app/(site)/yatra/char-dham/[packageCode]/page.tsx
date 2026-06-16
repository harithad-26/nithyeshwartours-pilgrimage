import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LuxuryPackageDetailTabs, { LuxuryPackageDetailNav } from "@/components/pilgrimage/LuxuryPackageDetailTabs";
import LuxuryPricingSidebar from "@/components/pilgrimage/LuxuryPricingSidebar";

const PACKAGES = {
  "CD-STD-10D": {
    code: "CD-STD-10D",
    name: "Char Dham Standard — 9 Nights & 10 Days",
    tagline: "Sacred Himalayan Devotion",
    description: "Our classic standard overland pilgrimage covering the entire Char Dham circuit—Yamunotri, Gangotri, Kedarnath, and Badrinath—with comfortable 3-star lodging and experienced local guides.",
    heroImage: {
      src: "/images/pilgrimage/badrinath.jpg",
      alt: "Badrinath Temple Shrine",
    },
    duration: {
      days: 10,
      nights: 9,
      display: "9N / 10D",
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
      startingFrom: 33700,
      currency: "INR",
      display: "₹33,700",
      notes: "Per person, based on twin-sharing room accommodation",
    },
    overview: {
      route: "Haridwar → Barkot → Yamunotri → Uttarkashi → Gangotri → Guptkashi → Kedarnath → Badrinath → Rudraprayag → Haridwar",
      destinations: ["Haridwar", "Barkot", "Yamunotri", "Uttarkashi", "Gangotri", "Guptkashi", "Kedarnath", "Badrinath", "Rudraprayag"],
      highlights: [
        "Complete Darshan of Badrinath, Kedarnath, Gangotri, and Yamunotri",
        "Ganga Aarti ceremony attendance at Har Ki Pauri, Haridwar",
        "Visit to Kempty Falls in Mussoorie and Mana Village (Indo-Tibetan border)",
        "Daily pure vegetarian Satvik meals for high-altitude health",
        "AC transport transfers throughout the entire Himalayan highway circuit",
        "Dedicated spiritual tour guide with profound local knowledge"
      ],
      themes: ["Spiritual Devotion", "Himalayan Nature", "Cultural Heritage"],
    },
    itinerary: [
      {
        day: 1,
        title: "Haridwar to Barkot",
        activities: [
          "Pick up from Haridwar and drive to Barkot (220 km, 7-8 hours)",
          "Sightseeing stop at scenic Kempty Falls in Mussoorie",
          "Check in at Barkot hotel, evening rest for acclimatization",
          "Hot vegetarian dinner at the hotel"
        ],
        accommodation: "Hotel Himalayan Nature Resort or similar",
        meals: { breakfast: false, lunch: false, dinner: true },
        travelDistance: "220 km drive",
      },
      {
        day: 2,
        title: "Barkot – Yamunotri – Barkot",
        activities: [
          "Early morning drive to Janki Chatti (45 km, 1.5 hours)",
          "Start 6 km trek to Yamunotri Temple (options: walk, pony, or doli)",
          "Take holy dip in Surya Kund hot springs and offer prayers to Goddess Yamuna",
          "Trek back to Janki Chatti and drive back to Barkot hotel for dinner"
        ],
        accommodation: "Hotel Himalayan Nature Resort or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        travelDistance: "45 km drive + 12 km trek",
      },
      {
        day: 3,
        title: "Barkot to Uttarkashi",
        activities: [
          "Breakfast at hotel and checkout",
          "Drive to Uttarkashi on the banks of River Bhagirathi (100 km, 4-5 hours)",
          "Visit the ancient Vishwanath Temple dedicated to Lord Shiva",
          "Evening walks around the sacred town, dinner at hotel"
        ],
        accommodation: "Hotel Shiv Murti or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        travelDistance: "100 km drive",
      },
      {
        day: 4,
        title: "Uttarkashi – Gangotri – Uttarkashi",
        activities: [
          "Early drive to Gangotri Temple at 3,100m altitude",
          "Prayers at the white granite shrine marking the descent of River Ganga",
          "Visit Bhagirath Shila and holy caves along the river",
          "Drive back to Uttarkashi hotel for dinner"
        ],
        accommodation: "Hotel Shiv Murti or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        travelDistance: "200 km return drive",
      },
      {
        day: 5,
        title: "Uttarkashi to Guptkashi",
        activities: [
          "Long scenic drive to Guptkashi along the Mandakini river (220 km, 8-9 hours)",
          "Stopover views of the massive Tehri Dam",
          "Check in to hotel and prepare for the Kedarnath high altitude trek",
          "Acclimatization rest and dinner"
        ],
        accommodation: "Hotel Mandakini or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        travelDistance: "220 km drive",
      },
      {
        day: 6,
        title: "Guptkashi – Gaurikund – Kedarnath Trek",
        activities: [
          "Drive to Sonprayag/Gaurikund basecamp early morning",
          "Begin the challenging 18 km trek up to Kedarnath Temple",
          "Arrive at the mountain plateau facing the majestic peaks",
          "Witness the powerful evening aarti ceremony at Kedarnath",
          "Overnight stay in simple guest houses near the temple"
        ],
        accommodation: "Local Guest House (Basic sharing basis)",
        meals: { breakfast: true, lunch: true, dinner: true },
        altitude: "3,583m",
        travelDistance: "18 km trek",
      },
      {
        day: 7,
        title: "Kedarnath to Guptkashi",
        activities: [
          "Morning Abhishek puja prayers at the sanctum sanctorum of Kedarnath Temple",
          "Trek back down 18 km to Gaurikund basecamp",
          "Re-join private coaches and transfer back to Guptkashi hotel",
          "Rest day after the trek, delicious hot dinner"
        ],
        accommodation: "Hotel Mandakini or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        travelDistance: "18 km trek + local drive",
      },
      {
        day: 8,
        title: "Guptkashi to Badrinath",
        activities: [
          "Drive to Badrinath via Joshimath mountain pass (190 km, 8-9 hours)",
          "En route visit Narsingh Temple at Joshimath (winter seat of Badrinath)",
          "Arrive Badrinath, take holy dip in Tapt Kund natural hot water pool",
          "Receive Darshan at the grand Badrinath Temple dedicated to Lord Vishnu"
        ],
        accommodation: "Hotel Narayan Palace or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        travelDistance: "190 km drive",
      },
      {
        day: 9,
        title: "Badrinath – Joshimath – Rudraprayag",
        activities: [
          "Morning sightseeing at Mana Village, Vyas Gufa, and Bhim Pul",
          "Checkout and drive to Rudraprayag confluence point (160 km, 7 hours)",
          "Arrive Rudraprayag (confluence of Alaknanda & Mandakini rivers)",
          "Check in and dinner at hotel"
        ],
        accommodation: "Hotel Tulip or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        travelDistance: "160 km drive",
      },
      {
        day: 10,
        title: "Rudraprayag to Haridwar",
        activities: [
          "Breakfast and check out from hotel",
          "Drive back to Haridwar (160 km, 6 hours)",
          "Visit Devprayag (confluence of Alaknanda & Bhagirathi forming Ganga)",
          "Arrive Haridwar by evening, drop at railway station / airport"
        ],
        accommodation: "End of Journey",
        meals: { breakfast: true, lunch: true, dinner: false },
        travelDistance: "160 km drive",
      }
    ],
    inclusions: [
      "Accommodation in standard 3-star hotels on twin-sharing basis",
      "Pure vegetarian Satvik meals (daily breakfast & dinner)",
      "All transfers by comfortable AC coaches (Haridwar to Haridwar)",
      "Dedicated, initiated spiritual tour guide throughout the circuit",
      "All necessary forest permits, inner line entry cards, and tolls",
      "Wilderness medical safety kit and oxygen cylinders in coach",
      "All applicable government taxes and service charges"
    ],
    exclusions: [
      "International or domestic airfare/train tickets to Haridwar",
      "Pony, doli, porter, or helicopter tickets for Kedarnath/Yamunotri treks",
      "Lunch meals during transit days (unless packed/included in daily activities)",
      "VIP temple entry tickets or personal puja expenses",
      "Personal items: laundry, tips, telephone calls, cold drinks",
      "Travel or medical emergency insurance",
      "5% GST charges (applicable on final billing)"
    ],
    hotels: [
      { location: "Barkot", hotelName: "Hotel Himalayan Nature Resort", category: "3-Star Hotel", nights: 2 },
      { location: "Uttarkashi", hotelName: "Hotel Shiv Murti", category: "3-Star Hotel", nights: 2 },
      { location: "Guptkashi", hotelName: "Hotel Mandakini", category: "3-Star Hotel", nights: 3 },
      { location: "Kedarnath", hotelName: "Local Guest House", category: "Basic Guesthouse", nights: 1 },
      { location: "Badrinath", hotelName: "Hotel Narayan Palace", category: "3-Star Hotel", nights: 1 },
      { location: "Rudraprayag", hotelName: "Hotel Tulip", category: "3-Star Hotel", nights: 1 },
    ],
    booking: {
      requiredDocuments: [
        "Aadhar Card / Voter ID / Passport copy",
        "Photographs for biometric yatra card registration",
        "Biometric registration completed online or at Haridwar counter",
        "Medical fitness self-declaration form"
      ],
      paymentSchedule: [
        { stage: "Booking Advance", amount: "30% of total package cost", due: "At time of reservation" },
        { stage: "Final Payment", amount: "Remaining 70% balance", due: "7 days prior to departure date" }
      ],
      importantNotes: [
        "Temperatures can drop to 0°C at Kedarnath/Badrinath—bring heavy thermals",
        "Kedarnath trek is physically demanding, start physical prep 30 days prior",
        "Helicopter slots are highly limited and must be requested at booking time"
      ]
    },
    terms: {
      cancellationPolicy: [
        { timeBefore: "30+ days", refund: "90% refund (10% deducted)" },
        { timeBefore: "15-29 days", refund: "50% refund (50% deducted)" },
        { timeBefore: "Less than 15 days", refund: "No refund available" }
      ],
      travelInsurance: "We recommend purchasing comprehensive high-altitude mountain medical insurance.",
      changes: "Itinerary changes due to landslides or roadblocks will be accommodated on best effort basis. Any extra lodging cost is to be paid directly.",
      companyRights: "We reserve the right to modify itinerary sequences depending on local administration guides or weather constraints.",
      refundPolicy: "No refunds will be provided for unutilized hotel nights or meals if the yatra is cut short due to personal health reasons.",
      ageRestriction: "Recommended for age groups between 8 and 70 years old due to high elevation."
    },
    preDeparture: {
      clothing: [
        "Warm jacket (down feather recommended) & fleece sweaters",
        "Thermal innerwear (top & bottom layers)",
        "Waterproof windbreaker or high-quality raincoat/umbrella",
        "Sturdy, broken-in trekking shoes with good grip",
        "Woolen gloves, woolen cap, and trekking socks",
        "Saris are not recommended for the 18km Kedarnath trek; opt for salwars or track pants"
      ],
      essentials: [
        "Personal medical kit with general altitude medicines",
        "High UV protection sunglasses and sunscreen lotion",
        "Refillable water bottle with purification tablets",
        "Dry fruits, energy bars, glucose powder, and oral rehydration salts",
        "Biometric Yatra Registration Card printout",
        "Power bank for mobile charging due to remote locations"
      ],
      health: [
        "Must be physically active and do regular cardio walks pre-trip",
        "Get a clinical checkup if you have heart or high blood pressure concerns",
        "Ascent should be slow; communicate any breathlessness immediately to the guide",
        "Stay fully hydrated, drink at least 3-4 liters of water daily",
        "Avoid smoking or consumption of alcohol during the yatra"
      ],
      currency: "Indian Rupee (INR). Carry sufficient physical cash since ATMs at Kedarnath/Badrinath are often out of cash or service."
    },
    faq: [
      {
        question: "Is biometric registration mandatory for Char Dham?",
        answer: "Yes, the Government of Uttarakhand has made biometric registration mandatory for all Char Dham pilgrims. We will handle the registration process for you; you just need to provide your ID and photo."
      },
      {
        question: "Can I hire a pony or porter for the treks?",
        answer: "Yes, ponies, dolis (palkis), and local porters are readily available at both Janki Chatti (for Yamunotri) and Gaurikund (for Kedarnath). Our tour guide will help you coordinate and book them at official local government rates."
      },
      {
        question: "Is helicopter booking available for Kedarnath?",
        answer: "Yes, helicopter services operate from Phata, Sersi, and Guptkashi. Since slots are regulated by the state aviation authority, bookings fill up months in advance. Please request a helicopter upgrade immediately upon booking."
      }
    ]
  },
  "CD-DLX-11D": {
    code: "CD-DLX-11D",
    name: "Char Dham Deluxe — 10 Nights & 11 Days",
    tagline: "Premium Spiritual Experience",
    description: "Upgrade to deluxe lodging, premium AC SUV travel, pre-arranged VIP Darshan lines, and a dedicated day in the yoga capital Rishikesh.",
    heroImage: {
      src: "/images/pilgrimage/chardham-card.png",
      alt: "Char Dham Sacred Circuit — Four Himalayan Shrines",
    },
    duration: {
      days: 11,
      nights: 10,
      display: "10N / 11D",
    },
    difficulty: "Moderate",
    maxAltitude: {
      meters: 3583,
      feet: 11755,
      display: "3,583m (11,755ft)",
    },
    startingPoint: "Haridwar",
    bestSeason: ["May", "June", "September", "October"],
    pricing: {
      startingFrom: 48500,
      currency: "INR",
      display: "₹48,500",
      notes: "Per person, includes premium hotels and VIP Darshan priority",
    },
    overview: {
      route: "Haridwar → Barkot → Yamunotri → Uttarkashi → Gangotri → Guptkashi → Kedarnath → Badrinath → Rudraprayag → Rishikesh → Haridwar",
      destinations: ["Haridwar", "Barkot", "Yamunotri", "Uttarkashi", "Gangotri", "Guptkashi", "Kedarnath", "Badrinath", "Rudraprayag", "Rishikesh"],
      highlights: [
        "Complete Char Dham circuit with upgraded premium hotels",
        "Pre-arranged VIP Darshan passes at Kedarnath & Badrinath",
        "Dedicated sightseeing day in Rishikesh (Parmarth Niketan, Ram Jhula)",
        "Travel in premium AC SUVs (Innova/Crysta) for maximum comfort",
        "Helicopter assistance options fully coordinated",
        "Satvik vegetarian buffet dining at premium hotels"
      ],
      themes: ["Spiritual Devotion", "Premium Comfort", "Rishikesh Retreat"],
    },
    itinerary: [
      {
        day: 1,
        title: "Haridwar to Barkot",
        activities: [
          "Pick up from Haridwar in premium AC SUV and drive to Barkot (220 km)",
          "Stop at Mussoorie Lake and Kempty Falls for scenic tea break",
          "Check in at premium Barkot resort, evening rest",
          "Buffet vegetarian dinner at resort"
        ],
        accommodation: "Hotel Himalayan Nature Resort (Deluxe room) or similar",
        meals: { breakfast: false, lunch: false, dinner: true },
        travelDistance: "220 km drive",
      },
      {
        day: 2,
        title: "Barkot – Yamunotri – Barkot",
        activities: [
          "Morning drive to Janki Chatti basecamp (45 km)",
          "Ascend to Yamunotri Temple via pre-arranged pony/doli for comfortable journey",
          "VIP line Darshan at Goddess Yamuna shrine, collect holy prasad",
          "Return to Barkot for evening buffet dinner at resort"
        ],
        accommodation: "Hotel Himalayan Nature Resort (Deluxe room) or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        travelDistance: "45 km drive + 12 km trek",
      },
      {
        day: 3,
        title: "Barkot to Uttarkashi",
        activities: [
          "Leisure breakfast and check out",
          "Drive to Uttarkashi (100 km, 4 hours)",
          "VIP guided tour of ancient Kashi Vishwanath temple in Uttarkashi",
          "Attend evening Ganga Aarti, dinner at deluxe hotel"
        ],
        accommodation: "Hotel Shiv Murti (Deluxe) or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        travelDistance: "100 km drive",
      },
      {
        day: 4,
        title: "Uttarkashi – Gangotri – Uttarkashi",
        activities: [
          "Early drive to Gangotri Temple through Harsil valley (100 km)",
          "Worship at the origin shrine of River Ganga with special VIP access",
          "Perform family puja rituals by the bank, hot packed lunch served",
          "Return to Uttarkashi resort for evening dinner"
        ],
        accommodation: "Hotel Shiv Murti (Deluxe) or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        travelDistance: "200 km return drive",
      },
      {
        day: 5,
        title: "Uttarkashi to Guptkashi",
        activities: [
          "Comfortable drive to Guptkashi in AC SUV (220 km)",
          "Stopover photoshoot at Tehri Dam reservoir view",
          "Arrive Guptkashi, medical briefing and vital oxygen level check by guide",
          "Premium resort check-in, rest and preparation"
        ],
        accommodation: "Hotel Mandakini (Deluxe) or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        travelDistance: "220 km drive",
      },
      {
        day: 6,
        title: "Guptkashi – Gaurikund – Kedarnath Trek",
        activities: [
          "Drive to Sonprayag, transfer to Gaurikund basecamp",
          "Ascend to Kedarnath Temple (18 km trek or optional helicopter/pony)",
          "Arrive Kedarnath, VIP entry Darshan during evening Aarti ceremony",
          "Special family puja arrangement, stay in comfortable guest houses"
        ],
        accommodation: "Local Guest House (Premium room option)",
        meals: { breakfast: true, lunch: true, dinner: true },
        altitude: "3,583m",
        travelDistance: "18 km trek",
      },
      {
        day: 7,
        title: "Kedarnath to Guptkashi",
        activities: [
          "Attend early morning Bhasma Aarti at Kedarnath Temple",
          "Trek back down to Gaurikund basecamp",
          "Drive back to Guptkashi in private AC SUV",
          "Full evening rest, spa session (if available), buffet dinner"
        ],
        accommodation: "Hotel Mandakini (Deluxe) or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        travelDistance: "18 km trek + local drive",
      },
      {
        day: 8,
        title: "Guptkashi to Badrinath",
        activities: [
          "Drive to Badrinath via Joshimath (190 km, 8 hours)",
          "Sightseeing stop at Narsingh Temple at Joshimath",
          "Arrive Badrinath, take holy dip in Tapt Kund natural hot springs",
          "Special evening Aarti inside Badrinath Temple with reserved seating"
        ],
        accommodation: "Hotel Narayan Palace (Deluxe) or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        travelDistance: "190 km drive",
      },
      {
        day: 9,
        title: "Badrinath – Mana Village – Rudraprayag",
        activities: [
          "Visit Mana Village, Vyas Gufa, and Saraswati River Origin point",
          "Checkout and drive to Rudraprayag confluence (160 km)",
          "Check in to river view deluxe hotel in Rudraprayag",
          "Dinner and relaxing evening walks"
        ],
        accommodation: "Hotel Tulip (Deluxe) or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        travelDistance: "160 km drive",
      },
      {
        day: 10,
        title: "Rudraprayag to Rishikesh",
        activities: [
          "Drive to Rishikesh (140 km, 5 hours)",
          "Check in to premium ganga-view hotel in Rishikesh",
          "Sightseeing: Laxman Jhula, Ram Jhula, and Beatles Ashram",
          "Attend the world-famous Parmarth Niketan evening Ganga Aarti"
        ],
        accommodation: "Hotel Divine Resorts or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        travelDistance: "140 km drive",
      },
      {
        day: 11,
        title: "Rishikesh to Haridwar",
        activities: [
          "Morning yoga session at the resort (optional)",
          "Breakfast and drive to Haridwar (30 km)",
          "Transfer to railway station / Dehradun airport for final departure"
        ],
        accommodation: "End of Journey",
        meals: { breakfast: true, lunch: false, dinner: false },
        travelDistance: "30 km drive",
      }
    ],
    inclusions: [
      "Accommodation in deluxe 3-star resorts and premium properties",
      "Pure vegetarian buffet breakfast and dinner (Satvik style)",
      "All transfers by private AC SUV (Innova/Crysta) for maximum comfort",
      "Pre-arranged VIP Darshan passes at Kedarnath & Badrinath temples",
      "Rishikesh sightseeing & Parmarth Niketan Aarti coordination",
      "Experienced spiritual tour leader and local guides",
      "Oxygen cylinder and basic medical vital checks",
      "All parking, tolls, driver allowance, and taxes"
    ],
    exclusions: [
      "International or domestic flight tickets to Haridwar/Dehradun",
      "Pony/Porter/Doli charges for treks (unless requested and pre-paid)",
      "Personal meals during transit (lunches)",
      "Personal expenses: laundry, tipping, telephone charges",
      "Emergency medical evacuation or medical insurance",
      "5% GST charges (applicable on final billing)"
    ],
    hotels: [
      { location: "Barkot", hotelName: "Hotel Himalayan Nature Resort", category: "Deluxe Resort", nights: 2 },
      { location: "Uttarkashi", hotelName: "Hotel Shiv Murti", category: "Deluxe Resort", nights: 2 },
      { location: "Guptkashi", hotelName: "Hotel Mandakini", category: "Deluxe Resort", nights: 3 },
      { location: "Kedarnath", hotelName: "Local Guest House", category: "Comfort Room", nights: 1 },
      { location: "Badrinath", hotelName: "Hotel Narayan Palace", category: "Deluxe Property", nights: 1 },
      { location: "Rudraprayag", hotelName: "Hotel Tulip", category: "Deluxe Hotel", nights: 1 },
      { location: "Rishikesh", hotelName: "Hotel Divine Resorts", category: "Ganga-View Deluxe", nights: 1 }
    ],
    booking: {
      requiredDocuments: [
        "Aadhar Card / Voter ID / Passport copy",
        "Photographs for biometric registration",
        "Online biometric card (will be managed by our visa/permit desk)",
        "High-altitude medical self-declaration"
      ],
      paymentSchedule: [
        { stage: "Booking Advance", amount: "30% of total package cost", due: "At time of booking" },
        { stage: "Second Payment", amount: "40% of total package cost", due: "15 days before departure" },
        { stage: "Final Payment", amount: "Remaining 30% balance", due: "7 days prior to departure date" }
      ],
      importantNotes: [
        "Bring warm thermal layers—temperatures drop significantly in the evenings",
        "Porters/ponies should be reserved at booking time for guaranteed availability",
        "Helicopter services are subject to weather conditions"
      ]
    },
    terms: {
      cancellationPolicy: [
        { timeBefore: "30+ days", refund: "90% refund (10% deducted)" },
        { timeBefore: "15-29 days", refund: "50% refund (50% deducted)" },
        { timeBefore: "Less than 15 days", refund: "No refund available" }
      ],
      travelInsurance: "We recommend purchasing comprehensive high-altitude mountain medical insurance.",
      changes: "Itinerary changes due to landslides or roadblocks will be accommodated on best effort basis. Any extra lodging cost is to be paid directly.",
      companyRights: "We reserve the right to modify itinerary sequences depending on local administration guides or weather constraints.",
      refundPolicy: "No refunds will be provided for unutilized hotel nights or meals if the yatra is cut short due to personal health reasons.",
      ageRestriction: "Recommended for age groups between 8 and 70 years old due to high elevation."
    },
    preDeparture: {
      clothing: [
        "Warm jacket (down feather recommended) & fleece sweaters",
        "Thermal innerwear (top & bottom layers)",
        "Waterproof windbreaker or high-quality raincoat/umbrella",
        "Sturdy, broken-in trekking shoes with good grip",
        "Woolen gloves, woolen cap, and trekking socks",
        "Saris are not recommended for the 18km Kedarnath trek; opt for salwars or track pants"
      ],
      essentials: [
        "Personal medical kit with general altitude medicines",
        "High UV protection sunglasses and sunscreen lotion",
        "Refillable water bottle with purification tablets",
        "Dry fruits, energy bars, glucose powder, and oral rehydration salts",
        "Biometric Yatra Registration Card printout",
        "Power bank for mobile charging due to remote locations"
      ],
      health: [
        "Must be physically active and do regular cardio walks pre-trip",
        "Get a clinical checkup if you have heart or high blood pressure concerns",
        "Ascent should be slow; communicate any breathlessness immediately to the guide",
        "Stay fully hydrated, drink at least 3-4 liters of water daily",
        "Avoid smoking or consumption of alcohol during the yatra"
      ],
      currency: "Indian Rupee (INR). Carry sufficient physical cash since ATMs at Kedarnath/Badrinath are often out of cash or service."
    },
    faq: [
      {
        question: "Is biometric registration mandatory for Char Dham?",
        answer: "Yes, the Government of Uttarakhand has made biometric registration mandatory for all Char Dham pilgrims. We will handle the registration process for you; you just need to provide your ID and photo."
      },
      {
        question: "Can I hire a pony or porter for the treks?",
        answer: "Yes, ponies, dolis (palkis), and local porters are readily available at both Janki Chatti (for Yamunotri) and Gaurikund (for Kedarnath). Our tour guide will help you coordinate and book them at official local government rates."
      },
      {
        question: "Is helicopter booking available for Kedarnath?",
        answer: "Yes, helicopter services operate from Phata, Sersi, and Guptkashi. Since slots are regulated by the state aviation authority, bookings fill up months in advance. Please request a helicopter upgrade immediately upon booking."
      }
    ]
  },
  "CD-LUX-12D": {
    code: "CD-LUX-12D",
    name: "Char Dham Luxury — 11 Nights & 12 Days",
    tagline: "Ultimate Himalayan Comfort",
    description: "The gold-standard Char Dham expedition. Fly to the shrines via chartered helicopter services bypassing the long drives, stay in the finest resorts, and receive VIP temple services.",
    heroImage: {
      src: "/images/pilgrimage/gallery_helicopter.png",
      alt: "Chartered Helicopter over the Himalayan Peaks",
    },
    duration: {
      days: 12,
      nights: 11,
      display: "11N / 12D",
    },
    difficulty: "Easy to Moderate",
    maxAltitude: {
      meters: 3583,
      feet: 11755,
      display: "3,583m (11,755ft)",
    },
    startingPoint: "Dehradun / Haridwar",
    bestSeason: ["May", "June", "September", "October"],
    pricing: {
      startingFrom: 145000,
      currency: "INR",
      display: "₹1,45,000",
      notes: "Per person, fully inclusive of chartered helicopter transfers and premium retreats",
    },
    overview: {
      route: "Dehradun → Yamunotri (Heli) → Gangotri (Heli) → Kedarnath (Heli) → Badrinath (Heli) → Rishikesh → Dehradun",
      destinations: ["Dehradun", "Kharsali (Yamunotri)", "Harsil (Gangotri)", "Guptkashi", "Kedarnath", "Badrinath", "Rishikesh"],
      highlights: [
        "Chartered Helicopter flights to all four Dhams from Dehradun",
        "Complete bypass of over 800 km of stressful mountain road driving",
        "Stay in 5-star and the finest available luxury resorts/camps",
        "VIP Darshan arrangements with priority queues at all shrines",
        "Personal travel concierge, guide, and porter service",
        "Premium multi-cuisine buffet meals throughout the trip"
      ],
      themes: ["Luxury Heli-Expedition", "Exclusive Comfort", "Spiritual Priority"],
    },
    itinerary: [
      {
        day: 1,
        title: "Arrival Dehradun",
        activities: [
          "Arrive at Dehradun (Jolly Grant Airport)",
          "Transfer via luxury Mercedes/Audi vehicle to hotel",
          "Pre-flight briefing and weight checks by aviation team",
          "Gourmet dinner at Dehradun premium hotel"
        ],
        accommodation: "Hyatt Regency Dehradun or similar (5 Star)",
        meals: { breakfast: false, lunch: false, dinner: true },
        travelDistance: "Local transfer",
      },
      {
        day: 2,
        title: "Dehradun to Yamunotri (Heli)",
        activities: [
          "Early morning departure from Sahastradhara Helipad, Dehradun",
          "Land at Kharsali Helipad (Yamunotri base) in 45 minutes",
          "Ascend to Yamunotri Temple via VIP pre-booked pony/palki (6 km)",
          "Exclusive Puja and Darshan at Yamunotri Temple",
          "Stay in luxury cottage resort, fresh hot meals served"
        ],
        accommodation: "Yamunotri Cottages or similar (Luxury)",
        meals: { breakfast: true, lunch: true, dinner: true },
        travelDistance: "Heli flight 45 mins + local pony trek",
      },
      {
        day: 3,
        title: "Yamunotri to Gangotri (Heli)",
        activities: [
          "Board helicopter at Kharsali Helipad, fly to Harsil (Gangotri base)",
          "Land at beautiful Harsil valley (known as the Switzerland of India)",
          "Drive to Gangotri Temple (25 km in private luxury vehicle)",
          "Exclusive VIP Darshan and Ganga Aarti at the temple",
          "Overnight in Harsil valley luxury riverside resort"
        ],
        accommodation: "Harsil Retreat or similar (Luxury)",
        meals: { breakfast: true, lunch: true, dinner: true },
        travelDistance: "Heli flight 30 mins + 25 km private drive",
      },
      {
        day: 4,
        title: "Harsil (Gangotri) to Guptkashi (Heli)",
        activities: [
          "Fly from Harsil Helipad to Guptkashi/Phata Helipad",
          "Arrive Guptkashi, transfer to premium mountain villa",
          "Rest day for acclimatization and leisure walk in the resort gardens",
          "Health checkups and oximeter checks by trip doctor",
          "Gourmet buffet dinner"
        ],
        accommodation: "The Himalayan Resort Guptkashi or similar (Luxury)",
        meals: { breakfast: true, lunch: true, dinner: true },
        travelDistance: "Heli flight 35 mins",
      },
      {
        day: 5,
        title: "Guptkashi to Kedarnath (Heli Darshan)",
        activities: [
          "Board shuttle flight from Guptkashi to Kedarnath Helipad (15 mins)",
          "Land near Kedarnath Temple, receive immediate priority VIP entry",
          "Perform special Maha-Abhishek Puja inside the inner temple",
          "Lunch at Kedarnath base, explore scenic peaks",
          "Fly back to Guptkashi helipad, return to luxury resort for dinner"
        ],
        accommodation: "The Himalayan Resort Guptkashi or similar (Luxury)",
        meals: { breakfast: true, lunch: true, dinner: true },
        altitude: "3,583m",
        travelDistance: "Heli flight 15 mins (each way)",
      },
      {
        day: 6,
        title: "Guptkashi to Badrinath (Heli)",
        activities: [
          "Morning helicopter transfer from Guptkashi to Badrinath Helipad",
          "Arrive Badrinath, check into luxury hotel",
          "VIP line entry at Badrinath Temple for special Darshan",
          "Attend evening Swarna Aarti with reserved front-row seating",
          "Overnight stay in Badrinath deluxe property"
        ],
        accommodation: "Sarovar Portico Badrinath or similar (Luxury)",
        meals: { breakfast: true, lunch: true, dinner: true },
        travelDistance: "Heli flight 30 mins",
      },
      {
        day: 7,
        title: "Badrinath to Dehradun (Heli) & Rishikesh",
        activities: [
          "Morning sightseeing to Mana Village, Vyas Gufa, and Saraswati River",
          "Fly from Badrinath Helipad back to Dehradun (Sahastradhara)",
          "Transfer via private luxury SUV to Rishikesh (1.5 hours)",
          "Check in at premium wellness river resort, spa treatment included"
        ],
        accommodation: "Ananda in the Himalayas or Taj Rishikesh (5 Star Luxury)",
        meals: { breakfast: true, lunch: true, dinner: true },
        travelDistance: "Heli flight 45 mins + 60 km drive",
      },
      {
        day: 8,
        title: "Rishikesh Wellness & Spiritual Tour",
        activities: [
          "Private yoga and meditation session led by Vedic masters",
          "Ganga Aarti ceremony at private ghat with exclusive guides",
          "Organic vegetarian dining at the resort",
          "Evening relax and wellness therapies"
        ],
        accommodation: "Taj Rishikesh Resort & Spa (5 Star Luxury)",
        meals: { breakfast: true, lunch: true, dinner: true },
        travelDistance: "Local sightseeing",
      },
      {
        day: 9,
        title: "Departure",
        activities: [
          "Gourmet breakfast at Taj resort",
          "Leisure checks, checkout",
          "Private transfer drop-off at Dehradun (DED) airport for departure"
        ],
        accommodation: "End of Journey",
        meals: { breakfast: true, lunch: false, dinner: false },
        travelDistance: "Local drive",
      }
    ],
    inclusions: [
      "Chartered helicopter tickets (Dehradun ↔ Yamunotri ↔ Gangotri ↔ Kedarnath ↔ Badrinath)",
      "Premium 5-star and luxury resort/cottage accommodation",
      "Gourmet Satvik multi-cuisine breakfast and dinner buffet",
      "Private luxury AC SUVs for all local transfers and sightseeing",
      "Exclusive VIP Darshan passes at all four Dham temples",
      "Personal travel concierge, porter services, and spiritual guide",
      "Biometric registration and local helipad taxes managed",
      "All currently applicable taxes & service charges"
    ],
    exclusions: [
      "International or domestic flight tickets to Dehradun",
      "Any optional spa treatments, personal telephone bills, laundry",
      "Personal puja fees or donation fees inside the temples",
      "Tips for helicopter crew, pilots, and guides",
      "Emergency medical rescue or travel insurance",
      "5% GST charges"
    ],
    hotels: [
      { location: "Dehradun", hotelName: "Hyatt Regency", category: "5-Star Hotel", nights: 1 },
      { location: "Kharsali", hotelName: "Yamunotri Cottages", category: "Luxury Resort", nights: 1 },
      { location: "Harsil", hotelName: "Harsil Retreat", category: "Luxury Resort", nights: 1 },
      { location: "Guptkashi", hotelName: "The Himalayan Resort", category: "Luxury Resort", nights: 2 },
      { location: "Badrinath", hotelName: "Sarovar Portico", category: "Luxury Hotel", nights: 1 },
      { location: "Rishikesh", hotelName: "Taj Rishikesh Resort", category: "5-Star Luxury", nights: 2 }
    ],
    booking: {
      requiredDocuments: [
        "Aadhar Card / Voter ID / Passport copy",
        "Weight declaration for helicopter balancing (strictly monitored)",
        "Biometric registration cards (pre-registered by our team)",
        "Fit-to-fly medical clearance certificate"
      ],
      paymentSchedule: [
        { stage: "Booking Advance", amount: "50% of total package cost", due: "At time of booking" },
        { stage: "Final Payment", amount: "Remaining 50% balance", due: "15 days before departure" }
      ],
      importantNotes: [
        "Helicopter weight limit is strictly 75kg per passenger; extra weight incurs surcharges",
        "Helicopter flights are subject to aviation clearances and weather conditions",
        "Bring warm thermals and layers—temperatures at high elevation are unpredictable"
      ]
    },
    terms: {
      cancellationPolicy: [
        { timeBefore: "30+ days", refund: "80% refund (20% deducted)" },
        { timeBefore: "15-29 days", refund: "40% refund (60% deducted)" },
        { timeBefore: "Less than 15 days", refund: "No refund available" }
      ],
      travelInsurance: "Comprehensive high-altitude and helicopter emergency evacuation insurance is mandatory.",
      changes: "Weather-related delays or changes are subject to aviation authority policies. In case of flight cancellations, backup land transport will be coordinated.",
      companyRights: "We reserve the right to swap heli schedules based on technical clearance or safety norms.",
      refundPolicy: "Pro-rata refunds will be provided for helicopter segments if cancellation happens due to permanent weather closures.",
      ageRestriction: "Recommended for age groups between 5 and 75 years old."
    },
    preDeparture: {
      clothing: [
        "Warm jacket (down feather recommended) & fleece sweaters",
        "Thermal innerwear (top & bottom layers)",
        "Waterproof windbreaker or high-quality raincoat/umbrella",
        "Sturdy, broken-in trekking shoes with good grip",
        "Woolen gloves, woolen cap, and trekking socks",
        "Saris are not recommended for the 18km Kedarnath trek; opt for salwars or track pants"
      ],
      essentials: [
        "Personal medical kit with general altitude medicines",
        "High UV protection sunglasses and sunscreen lotion",
        "Refillable water bottle with purification tablets",
        "Dry fruits, energy bars, glucose powder, and oral rehydration salts",
        "Biometric Yatra Registration Card printout",
        "Power bank for mobile charging due to remote locations"
      ],
      health: [
        "Must be physically active and do regular cardio walks pre-trip",
        "Get a clinical checkup if you have heart or high blood pressure concerns",
        "Ascent should be slow; communicate any breathlessness immediately to the guide",
        "Stay fully hydrated, drink at least 3-4 liters of water daily",
        "Avoid smoking or consumption of alcohol during the yatra"
      ],
      currency: "Indian Rupee (INR). Carry sufficient physical cash since ATMs at Kedarnath/Badrinath are often out of cash or service."
    },
    faq: [
      {
        question: "Is biometric registration mandatory for Char Dham?",
        answer: "Yes, the Government of Uttarakhand has made biometric registration mandatory for all Char Dham pilgrims. We will handle the registration process for you; you just need to provide your ID and photo."
      },
      {
        question: "Can I hire a pony or porter for the treks?",
        answer: "Yes, ponies, dolis (palkis), and local porters are readily available at both Janki Chatti (for Yamunotri) and Gaurikund (for Kedarnath). Our tour guide will help you coordinate and book them at official local government rates."
      },
      {
        question: "Is helicopter booking available for Kedarnath?",
        answer: "Yes, helicopter services operate from Phata, Sersi, and Guptkashi. Since slots are regulated by the state aviation authority, bookings fill up months in advance. Please request a helicopter upgrade immediately upon booking."
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
    title: `${pkg.name} | Char Dham Yatra`,
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
            <Link href="/yatra/char-dham" className="hover:text-white transition-colors">Char Dham Yatra</Link>
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
