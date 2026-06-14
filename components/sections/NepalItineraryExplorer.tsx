"use client";

import { useState } from "react";
import Link from "next/link";

interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
  accommodation?: string;
  meals?: { breakfast: boolean; lunch: boolean; dinner: boolean };
  travelDistance?: string;
  altitude?: string;
}

interface PackageDetails {
  code: string;
  name: string;
  duration: string;
  route: string;
  price: string;
  destinations: string[];
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
}

const NEPAL_PACKAGES: Record<string, PackageDetails> = {
  "NPL 014": {
    code: "NPL 014",
    name: "Nepal Kathmandu & Pokhara Tour",
    duration: "5 Nights / 6 Days",
    route: "Kathmandu → Pokhara → Kathmandu",
    price: "₹14,500+",
    destinations: ["Kathmandu", "Pokhara", "Manakamana Temple", "Sarangkot"],
    highlights: [
      "Darshan and evening Ganga Aarati at Pashupatinath Temple",
      "Scenic cable car ride to Manakamana Temple en route to Pokhara",
      "Early morning sunrise at Sarangkot over Annapurna & Dhaulagiri ranges",
      "Serene boating excursion on Phewa Lake in Pokhara",
      "Heritage walks through Patan Durbar Square & Swoyambhunath Stupa"
    ],
    inclusions: [
      "3 Nights accommodation in Kathmandu (3-star category)",
      "2 Nights accommodation in Pokhara (3-star category)",
      "Daily breakfast and dinner (Half Board basis)",
      "All transfers and sightseeing by private air-conditioned vehicle",
      "Cable car tickets for Manakamana Temple",
      "Boating at Phewa Lake in Pokhara",
      "All government taxes and service charges"
    ],
    exclusions: [
      "International flights or train fare to Kathmandu",
      "Lunch, mineral water, and personal expenses",
      "Entrance fees to sightseeing places, temples, and museums",
      "Travel insurance, emergency evacuation, or guide services",
      "Tips for driver, hotel staff, and porters"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival Kathmandu & Sacred Aarti",
        activities: [
          "Meet and assist at Tribhuvan International Airport",
          "Transfer to hotel and complete check-in formalities",
          "Visit the grand Boudhanath Stupa, one of the largest Buddhist shrines",
          "Attend the soul-stirring evening Bagmati Aarati at Pashupatinath Temple",
          "Overnight stay at the hotel in Kathmandu"
        ],
        accommodation: "Hotel Le Himalaya or similar (3-Star)",
        meals: { breakfast: false, lunch: false, dinner: true }
      },
      {
        day: 2,
        title: "Drive to Pokhara & Manakamana Cable Car",
        activities: [
          "Early breakfast at the hotel",
          "Scenic drive to Pokhara (approx. 210 km, 6–7 hours)",
          "En route stop for a thrilling cable car ride to Manakamana Temple (the Wish-Fulfilling Goddess)",
          "Arrive in Pokhara, check in at hotel and unwind",
          "Evening free for a relaxing boat ride on Phewa Lake and walking on Lake Side",
          "Overnight stay at the hotel in Pokhara"
        ],
        accommodation: "Hotel Lake Star or similar (3-Star)",
        meals: { breakfast: true, lunch: false, dinner: true },
        travelDistance: "210 km drive (6-7 hours)"
      },
      {
        day: 3,
        title: "Sarangkot Sunrise & Pokhara Sightseeing",
        activities: [
          "Early morning excursion (4:30 AM) to Sarangkot Hill for a breathtaking sunrise over Mount Annapurna, Dhaulagiri, and Machhapuchhre",
          "Return to hotel for breakfast",
          "Afternoon tour of Pokhara: Bindabasini Temple, Devi's Fall, Gupteshwor Mahadev Cave, and the Seti River Gorge",
          "Evening free for leisure, shopping, or local café visits",
          "Overnight stay at the hotel in Pokhara"
        ],
        accommodation: "Hotel Lake Star or similar (3-Star)",
        meals: { breakfast: true, lunch: false, dinner: true }
      },
      {
        day: 4,
        title: "Pokhara to Kathmandu & Shopping",
        activities: [
          "Breakfast at the hotel, check out",
          "Drive back to Kathmandu enjoying the Trishuli river views",
          "Arrive in Kathmandu and check in at hotel",
          "Evening free for shopping at Thamel or relaxing",
          "Overnight stay at the hotel in Kathmandu"
        ],
        accommodation: "Hotel Le Himalaya or similar (3-Star)",
        meals: { breakfast: true, lunch: false, dinner: true },
        travelDistance: "210 km drive (6-7 hours)"
      },
      {
        day: 5,
        title: "Kathmandu Valley Cultural Sightseeing",
        activities: [
          "Breakfast at the hotel",
          "Visit Jalanarayan Temple (Budhanilkantha) to see the sacred floating statue of Lord Vishnu",
          "Explore Swoyambhunath Stupa (Monkey Temple) overlooking Kathmandu Valley",
          "Visit the historic Patan Durbar Square, Krishna Temple, and the Golden Temple",
          "Evening at leisure or packing",
          "Overnight stay at the hotel in Kathmandu"
        ],
        accommodation: "Hotel Le Himalaya or similar (3-Star)",
        meals: { breakfast: true, lunch: false, dinner: true }
      },
      {
        day: 6,
        title: "Final Departure",
        activities: [
          "Breakfast at the hotel",
          "Free time for last-minute souvenir shopping",
          "Check out and transfer to Tribhuvan International Airport for your departure flight"
        ],
        meals: { breakfast: true, lunch: false, dinner: false }
      }
    ]
  },
  "NPL 015": {
    code: "NPL 015",
    name: "Nepal with Muktinath Pilgrimage Tour",
    duration: "5 Nights / 6 Days",
    route: "Kathmandu → Pokhara → Jomsom → Muktinath → Kathmandu",
    price: "₹24,500+",
    destinations: ["Kathmandu", "Pokhara", "Jomsom", "Muktinath Temple"],
    highlights: [
      "Sacred Darshan at Muktinath Temple (3,710m) — one of the 108 Divya Desams",
      "Holy bath in the 108 brass water spouts of Muktidhara",
      "Scenic flights between Pokhara and Jomsom over the Kali Gandaki gorge",
      "Cable car ride to Manakamana Temple en route to Pokhara",
      "Pashupatinath Temple Darshan and evening Bagmati Aarati"
    ],
    inclusions: [
      "3 Nights accommodation in Kathmandu (3-star category)",
      "2 Nights accommodation in Pokhara (3-star category)",
      "1 Night accommodation in Jomsom (Standard Guest House/Lodge)",
      "Pokhara – Jomsom – Pokhara roundtrip flight tickets",
      "Jomsom – Muktinath – Jomsom roundtrip Jeep transfers",
      "Daily breakfast and dinner (Half Board basis)",
      "All land transfers by private AC vehicle in Kathmandu/Pokhara",
      "Annapurna Conservation Area Project (ACAP) permit & TIMS card fees",
      "Manakamana Cable Car tickets"
    ],
    exclusions: [
      "International flights or train fare to Kathmandu",
      "Lunch, beverages, laundry, and personal expenses",
      "Trekker/Pony charges in Muktinath (if needed)",
      "Sightseeing entrance fees and temple donations",
      "Tips for guides, drivers, and pilots"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival Kathmandu & Sacred Aarti",
        activities: [
          "Arrive at Tribhuvan International Airport, warm welcome and transfer to hotel",
          "Visit the magnificent Boudhanath Stupa",
          "Evening Darshan and Aarati at the world-famous Pashupatinath Temple",
          "Overnight stay at the hotel in Kathmandu"
        ],
        accommodation: "Hotel Le Himalaya or similar (3-Star)",
        meals: { breakfast: false, lunch: false, dinner: true }
      },
      {
        day: 2,
        title: "Drive to Pokhara & Manakamana Temple",
        activities: [
          "Breakfast at the hotel",
          "Drive to the picturesque lake city of Pokhara",
          "En route, take the cable car to Manakamana Temple for blessings",
          "Arrive in Pokhara, check in to the hotel",
          "Leisure walk beside the serene Phewa Lake",
          "Overnight stay at the hotel in Pokhara"
        ],
        accommodation: "Hotel Lake Star or similar (3-Star)",
        meals: { breakfast: true, lunch: false, dinner: true },
        travelDistance: "210 km drive (6-7 hours)"
      },
      {
        day: 3,
        title: "Flight to Jomsom & Holy Muktinath Darshan",
        activities: [
          "Early morning transfer to Pokhara Airport for a scenic flight to Jomsom (20 mins, high altitude flight)",
          "Upon arrival in Jomsom, transfer to Jeep stand",
          "Drive by local sharing jeep to Ranipauwa (approx. 2 hours, off-road along the river bed)",
          "Walk or take a pony/motorbike (personal cost) to the sacred Muktinath Temple (3,710m)",
          "Take a holy dip in the 108 sacred water spouts (Muktidhara) and perform special prayers",
          "Return to Jomsom by Jeep for overnight stay",
          "Overnight stay at a cozy lodge/guest house in Jomsom"
        ],
        accommodation: "Hotel Majestic or similar in Jomsom",
        meals: { breakfast: true, lunch: false, dinner: true },
        altitude: "3,710m",
        travelDistance: "20 min flight + 2 hour Jeep drive"
      },
      {
        day: 4,
        title: "Fly to Pokhara & Valley Sightseeing",
        activities: [
          "Early morning flight back to Pokhara (subject to weather conditions)",
          "Transfer to hotel for breakfast and rest",
          "Afternoon sightseeing: Bindabasini Temple, Devi's Fall, and Gupteshwor Mahadev Cave",
          "Boating on Phewa Lake to visit the island-bound Taal Barahi Temple",
          "Overnight stay at the hotel in Pokhara"
        ],
        accommodation: "Hotel Lake Star or similar (3-Star)",
        meals: { breakfast: true, lunch: false, dinner: true }
      },
      {
        day: 5,
        title: "Sarangkot Sunrise & Return to Kathmandu",
        activities: [
          "Excursion to Sarangkot at dawn to capture the golden sunrise over the Himalayas",
          "Return to hotel for breakfast, check out",
          "Drive back to Kathmandu, enjoying beautiful highway valleys",
          "Check in at Kathmandu hotel, evening at leisure for shopping",
          "Overnight stay at the hotel in Kathmandu"
        ],
        accommodation: "Hotel Le Himalaya or similar (3-Star)",
        meals: { breakfast: true, lunch: false, dinner: true },
        travelDistance: "210 km drive"
      },
      {
        day: 6,
        title: "Sleeping Vishnu & Departure",
        activities: [
          "Breakfast at the hotel, check out",
          "Visit the Jalanarayan Temple (Sleeping Vishnu) in Budhanilkantha",
          "Transfer to Tribhuvan International Airport for your return flight home"
        ],
        meals: { breakfast: true, lunch: false, dinner: false }
      }
    ]
  },
  "NPL 016": {
    code: "NPL 016",
    name: "Nepal Kathmandu, Pokhara & Chitwan Tour",
    duration: "7 Nights / 8 Days",
    route: "Kathmandu → Chitwan → Pokhara → Kathmandu",
    price: "₹19,500+",
    destinations: ["Kathmandu", "Chitwan National Park", "Pokhara", "Sarangkot"],
    highlights: [
      "Exciting Elephant Safari & Canoe ride in Chitwan National Park",
      "Traditional Tharu cultural stick dance and village walk",
      "Sunrise views of snow-clad Himalayas from Sarangkot",
      "Cable car ride to Manakamana Temple",
      "Sightseeing at Kathmandu Durbar Square and world's tallest Shiva statue"
    ],
    inclusions: [
      "3 Nights accommodation in Kathmandu (3-star category)",
      "2 Nights accommodation in Pokhara (3-star category)",
      "2 Nights accommodation in Chitwan (Jungle Resort)",
      "All meals in Chitwan (Breakfast, Lunch, and Dinner)",
      "Breakfast & Dinner in Kathmandu and Pokhara",
      "All jungle activities in Chitwan (Elephant ride, canoeing, village walk, dance show)",
      "All transfers by private air-conditioned vehicle",
      "Manakamana Cable car ticket"
    ],
    exclusions: [
      "International flights or train fare",
      "Sightseeing entrance fees and park entry permits",
      "Personal expenses, tips, and mineral water",
      "Travel insurance or guides in Kathmandu/Pokhara"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival Kathmandu & Sacred Aarti",
        activities: [
          "Arrive Kathmandu, meet our representative, and transfer to hotel",
          "Visit Boudhanath Stupa in the afternoon",
          "Attend the divine evening Ganga Aarati at Pashupatinath Temple",
          "Overnight stay at the hotel in Kathmandu"
        ],
        accommodation: "Hotel Le Himalaya or similar (3-Star)",
        meals: { breakfast: false, lunch: false, dinner: true }
      },
      {
        day: 2,
        title: "Drive to Chitwan & Tharu Cultural Show",
        activities: [
          "Breakfast at hotel, check out",
          "Drive to Chitwan National Park (approx. 165 km, 5–6 hours)",
          "Check in at jungle resort, enjoy lunch",
          "Go for a guided Tharu Village walk to experience rural Nepalese life",
          "In the evening, watch a vibrant Tharu Stick Dance performance by local tribes",
          "Dinner and overnight stay at the resort in Chitwan"
        ],
        accommodation: "Jungle Safari Lodge or similar",
        meals: { breakfast: true, lunch: true, dinner: true },
        travelDistance: "165 km drive (5-6 hours)"
      },
      {
        day: 3,
        title: "Full Day Wildlife Activities in Chitwan",
        activities: [
          "Early morning bird watching walk, return for breakfast",
          "Take a scenic canoe ride on the Rapti River to see crocodiles and aquatic birds",
          "Guided jungle walk to explore Chitwan's unique flora and fauna",
          "Visit the Elephant Breeding Center",
          "Afternoon thrilling Elephant Back Safari or Jeep Safari inside the deep national park to spot one-horned rhinos, deer, and if lucky, the Royal Bengal Tiger",
          "Dinner and overnight stay at the resort in Chitwan"
        ],
        accommodation: "Jungle Safari Lodge or similar",
        meals: { breakfast: true, lunch: true, dinner: true }
      },
      {
        day: 4,
        title: "Drive Chitwan to Pokhara",
        activities: [
          "Breakfast at the resort, check out",
          "Scenic drive to Pokhara (approx. 150 km, 4–5 hours)",
          "Arrive Pokhara, check in at hotel",
          "Evening free to walk around Phewa lake side, shopping, and enjoy local music",
          "Overnight stay at the hotel in Pokhara"
        ],
        accommodation: "Hotel Lake Star or similar (3-Star)",
        meals: { breakfast: true, lunch: false, dinner: true },
        travelDistance: "150 km drive (4-5 hours)"
      },
      {
        day: 5,
        title: "Sarangkot Sunrise & Pokhara Sightseeing",
        activities: [
          "Excursion to Sarangkot at 4:30 AM for sunrise over the Himalayas",
          "Return to hotel for breakfast",
          "Sightseeing of Pokhara valley: Bindabasini Temple, Devi's Fall, Gupteshwor Cave, and Seti River Gorge",
          "Afternoon boating on Phewa Lake and visit Taal Barahi Temple in the center of the lake",
          "Overnight stay at the hotel in Pokhara"
        ],
        accommodation: "Hotel Lake Star or similar (3-Star)",
        meals: { breakfast: true, lunch: false, dinner: true }
      },
      {
        day: 6,
        title: "Drive to Kathmandu & Manakamana Temple",
        activities: [
          "Breakfast at the hotel, check out",
          "Drive back to Kathmandu (approx. 210 km, 6–7 hours)",
          "En route, take the cable car up to the sacred Manakamana Temple",
          "Arrive Kathmandu, check in to hotel",
          "Overnight stay at the hotel in Kathmandu"
        ],
        accommodation: "Hotel Le Himalaya or similar (3-Star)",
        meals: { breakfast: true, lunch: false, dinner: true },
        travelDistance: "210 km drive"
      },
      {
        day: 7,
        title: "Valleys & Giants Sightseeing",
        activities: [
          "Breakfast at the hotel",
          "Visit Jalanarayan Temple (Sleeping Vishnu) in Budhanilkantha",
          "Visit the historic Swayambhunath Stupa (Monkey Temple)",
          "Visit Bhaktapur Durbar Square (famed for its 55-window palace and ancient pottery)",
          "Visit the colossal Kailashnath Mahadev Temple (tallest Shiva statue, 143 ft) at Sanga",
          "Overnight stay at the hotel in Kathmandu"
        ],
        accommodation: "Hotel Le Himalaya or similar (3-Star)",
        meals: { breakfast: true, lunch: false, dinner: true }
      },
      {
        day: 8,
        title: "Departure",
        activities: [
          "Breakfast at hotel, check out",
          "Transfer to Tribhuvan International Airport for your final flight home"
        ],
        meals: { breakfast: true, lunch: false, dinner: false }
      }
    ]
  },
  "UP 08": {
    code: "UP 08",
    name: "Varanasi & Nepal Yatra",
    duration: "7 Nights / 8 Days",
    route: "Varanasi → Lumbini → Pokhara → Kathmandu → Gorakhpur/Varanasi",
    price: "₹22,500+",
    destinations: ["Varanasi", "Lumbini", "Pokhara", "Kathmandu"],
    highlights: [
      "Darshan of Kashi Vishwanath & Ganga Aarati in Varanasi",
      "Visit Lumbini, the sacred birthplace of Lord Buddha (Maya Devi Temple)",
      "Darshan of Pashupatinath Temple and Jalanarayan Temple in Nepal",
      "Sunrise views over Annapurna from Sarangkot, Pokhara",
      "Cross-border pilgrimage linking India's and Nepal's holy cities"
    ],
    inclusions: [
      "1 Night accommodation in Varanasi (3-star)",
      "1 Night accommodation in Lumbini (3-star)",
      "2 Nights accommodation in Pokhara (3-star)",
      "2 Nights accommodation in Kathmandu (3-star)",
      "1 Night accommodation in Gorakhpur or Varanasi (Return route)",
      "Daily breakfast and dinner (Sattvic/Vegetarian meals where possible)",
      "All transfers by private non-AC or AC vehicle (based on option chosen)",
      "Border crossing permits, custom clearance and road taxes",
      "Boat ride on Ganga river in Varanasi"
    ],
    exclusions: [
      "Train/Flight tickets to Varanasi / from Gorakhpur",
      "Nepal Entry Visa fees for NRI / Foreign nationals",
      "Lunch, mineral water, laundry, telephone calls",
      "Sightseeing entrance fees and local temple guides",
      "Pashupatinath Aarati special seating or pooja items"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival Varanasi & Holy Ganga Aarati",
        activities: [
          "Arrive at Varanasi Airport/Railway Station, meet our executive, and transfer to hotel",
          "In the evening, experience a spiritual boat ride on River Ganga",
          "Attend the world-renowned evening Ganga Aarati ritual at Dashashwamedh Ghat",
          "Overnight stay at the hotel in Varanasi"
        ],
        accommodation: "Hotel Temple on Ganges or similar",
        meals: { breakfast: false, lunch: false, dinner: true }
      },
      {
        day: 2,
        title: "Kashi Temple Darshan & Drive to Lumbini",
        activities: [
          "Early morning (5:00 AM) Darshan at Sri Kashi Vishwanath Temple, Annapurna Temple, and Vishalakshi Temple",
          "Return to hotel for breakfast, check out",
          "Drive to Lumbini, Nepal across the Sonauli border (approx. 320 km, 8–9 hours)",
          "Assist with border immigration formalities for entry into Nepal",
          "Arrive in Lumbini, check-in at hotel and rest",
          "Overnight stay at the hotel in Lumbini"
        ],
        accommodation: "Hotel Hokke or similar in Lumbini",
        meals: { breakfast: true, lunch: false, dinner: true },
        travelDistance: "320 km drive (8-9 hours)"
      },
      {
        day: 3,
        title: "Birthplace of Buddha & Drive to Pokhara",
        activities: [
          "Breakfast at the hotel, check out",
          "Visit the holy Maya Devi Temple, the exact birthplace of Lord Buddha, Ashoka Pillar, and the sacred pond",
          "Drive to Pokhara through scenic mountain terrains (approx. 200 km, 6–7 hours)",
          "Arrive Pokhara, check-in, and spend evening walking near Phewa Lake side",
          "Overnight stay at the hotel in Pokhara"
        ],
        accommodation: "Hotel Lake Star or similar (3-Star)",
        meals: { breakfast: true, lunch: false, dinner: true },
        travelDistance: "200 km drive (6-7 hours)"
      },
      {
        day: 4,
        title: "Pokhara Valley Exploration",
        activities: [
          "Dawn excursion to Sarangkot to witness the spectacular sunrise over the Annapurna Himalayan range",
          "Return for breakfast",
          "Explore Pokhara: Bindabasini Temple, Devi's Fall, Gupteshwor Cave, and Seti Gorge",
          "Enjoy a late afternoon boat ride on Phewa Lake to the Tal Barahi Temple",
          "Overnight stay at the hotel in Pokhara"
        ],
        accommodation: "Hotel Lake Star or similar (3-Star)",
        meals: { breakfast: true, lunch: false, dinner: true }
      },
      {
        day: 5,
        title: "Pokhara to Kathmandu & Manakamana",
        activities: [
          "Breakfast at hotel, check out",
          "Drive to Kathmandu (approx. 210 km, 6–7 hours)",
          "Stop en route for a cable car ride to Manakamana Temple",
          "Arrive Kathmandu, check in, and spend a relaxing evening",
          "Overnight stay at the hotel in Kathmandu"
        ],
        accommodation: "Hotel Le Himalaya or similar (3-Star)",
        meals: { breakfast: true, lunch: false, dinner: true },
        travelDistance: "210 km drive"
      },
      {
        day: 6,
        title: "Kathmandu Sacred Darshan",
        activities: [
          "Breakfast at the hotel",
          "Special Darshan of Lord Shiva at the sacred Pashupatinath Temple",
          "Visit the ancient Swoyambhunath Stupa (Monkey Temple)",
          "Visit the peaceful Jalanarayan Temple (Sleeping Vishnu) in Budhanilkantha",
          "Visit Boudhanath Stupa in the evening",
          "Overnight stay at the hotel in Kathmandu"
        ],
        accommodation: "Hotel Le Himalaya or similar (3-Star)",
        meals: { breakfast: true, lunch: false, dinner: true }
      },
      {
        day: 7,
        title: "Drive Kathmandu to Gorakhpur",
        activities: [
          "Breakfast at hotel, check out",
          "Drive to Gorakhpur, India via Sonauli border (approx. 340 km, 9–10 hours)",
          "Help with border crossing and customs clearance",
          "Arrive in Gorakhpur, check-in at hotel and relax",
          "Overnight stay at the hotel in Gorakhpur"
        ],
        accommodation: "Hotel Radisson or similar in Gorakhpur",
        meals: { breakfast: true, lunch: false, dinner: true },
        travelDistance: "340 km drive"
      },
      {
        day: 8,
        title: "Goraknath Temple & Departure",
        activities: [
          "Breakfast at hotel, check out",
          "Visit the famous Gorakhnath Temple in Gorakhpur",
          "Transfer to Gorakhpur Railway Station / Airport (or continue drive back to Varanasi) for departure flight/train"
        ],
        meals: { breakfast: true, lunch: false, dinner: false }
      }
    ]
  }
};

export default function NepalItineraryExplorer() {
  const [selectedPkg, setSelectedPkg] = useState("NPL 014");
  const [activeDay, setActiveDay] = useState(1);

  const pkg = NEPAL_PACKAGES[selectedPkg];

  const handlePackageChange = (code: string) => {
    setSelectedPkg(code);
    setActiveDay(1);
  };

  return (
    <div className="bg-white rounded-xl shadow-ambient border border-midnight/5 overflow-hidden">
      {/* Selector Tabs */}
      <div className="bg-midnight/95 p-3 flex flex-wrap gap-2 justify-center items-center border-b border-white/10">
        {Object.keys(NEPAL_PACKAGES).map((code) => {
          const isSelected = selectedPkg === code;
          return (
            <button
              key={code}
              onClick={() => handlePackageChange(code)}
              className={`flex-1 min-w-[220px] py-4 px-5 rounded-lg focus:outline-none transition-all duration-300 text-center ${
                isSelected
                  ? "bg-gold text-midnight shadow-[0_4px_12px_rgba(218,165,32,0.2)] font-sans text-xs font-bold tracking-wider uppercase"
                  : "text-white/60 hover:text-white hover:bg-white/5 font-sans text-xs font-semibold tracking-wider uppercase"
              }`}
            >
              <span className="block text-[9px] opacity-60 tracking-[0.15em] mb-0.5">
                {code}
              </span>
              <span className="text-xs font-bold tracking-wide">
                {NEPAL_PACKAGES[code].name.replace(" Tour", "").replace(" Pilgrimage", "")}
              </span>
            </button>
          );
        })}
      </div>

      {/* Explorer Content */}
      <div className="p-8 md:p-12">
        {/* Quick Summary Row */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 pb-10 border-b border-midnight/10 mb-10">
          <div>
            <span className="font-sans text-[10px] font-bold tracking-[0.15em] uppercase text-gold border border-gold/30 px-3 py-1 rounded bg-gold/5 inline-block">
              Code: {pkg.code}
            </span>
            <h3 className="font-serif text-3xl md:text-4xl text-midnight font-normal mt-4 mb-4 leading-tight tracking-tight">
              {pkg.name}
            </h3>
            <p className="font-sans text-base text-midnight/70 leading-relaxed mb-6">
              An extraordinary <strong className="text-midnight font-semibold">{pkg.duration}</strong> journey traversing the route:{" "}
              <span className="italic font-medium text-gold-dark">{pkg.route}</span>.
            </p>

            <div className="mb-6">
              <h4 className="font-sans text-xs font-bold tracking-[0.1em] text-midnight/45 uppercase mb-3">
                Key Destinations Covered
              </h4>
              <div className="flex flex-wrap gap-2">
                {pkg.destinations.map((dest) => (
                  <span
                    key={dest}
                    className="font-sans text-xs bg-gold-dark/5 text-gold-dark border border-gold-dark/15 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 uppercase font-medium tracking-wider"
                  >
                    <svg className="w-3.5 h-3.5 text-gold-dark shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    {dest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-midnight text-white rounded-xl p-8 flex flex-col justify-between border border-gold-dark/20 shadow-ambient relative overflow-hidden">
            <div className="absolute top-[-3rem] right-[-3rem] w-32 h-32 bg-gold/5 rounded-full blur-2xl" aria-hidden="true" />
            
            <div className="relative z-10">
              <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-white/40 mb-1">
                Duration
              </p>
              <p className="font-sans text-xl font-bold text-white mb-6 tracking-wide">
                {pkg.duration}
              </p>

              <p className="font-sans text-[9px] uppercase tracking-[0.2em] text-white/40 mb-1">
                Pricing Starts From
              </p>
              <p className="font-serif text-4xl text-gold font-normal mb-2 tracking-tight">
                {pkg.price}
              </p>
              <p className="font-sans text-[10px] text-white/50 leading-relaxed">
                Per person (twin-sharing). Includes premium hotels, AC vehicle transport &amp; guides.
              </p>
            </div>

            <Link
              href={`/inquiry?package=${pkg.code.replace(" ", "-")}`}
              className="mt-8 block text-center py-4 font-sans text-xs font-bold tracking-[0.15em] uppercase bg-gold text-midnight rounded hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-gold/20 active:scale-95"
            >
              INQUIRE ABOUT THIS TOUR
            </Link>
          </div>
        </div>

        {/* Dynamic Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
          {/* Days Navigation Sidebar */}
          <div>
            <h4 className="font-sans text-xs font-bold tracking-[0.1em] text-midnight/45 uppercase mb-6">
              Days Timeline
            </h4>
            <div className="flex lg:flex-col gap-2.5 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-hide">
              {pkg.itinerary.map((d) => {
                const isActive = activeDay === d.day;
                return (
                  <button
                    key={d.day}
                    onClick={() => setActiveDay(d.day)}
                    className={`flex items-center gap-4 py-3.5 px-5 rounded-lg font-sans text-xs font-bold tracking-wider uppercase transition-all duration-300 text-left border shrink-0 ${
                      isActive
                        ? "bg-midnight text-gold border-gold/30 shadow-md transform lg:translate-x-2"
                        : "bg-surface-low text-midnight/70 border-midnight/5 hover:border-gold-dark/20 hover:bg-white"
                    }`}
                  >
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      isActive ? "bg-gold text-midnight shadow-sm" : "bg-midnight/5 text-midnight/50"
                    }`}>
                      {d.day}
                    </span>
                    <span className="truncate max-w-[200px] lg:max-w-none">{d.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Day Details */}
          <div className="bg-white rounded-xl border border-midnight/5 p-8 md:p-10 shadow-ambient relative">
            {pkg.itinerary.map((d) => {
              if (d.day !== activeDay) return null;
              return (
                <div key={d.day} className="flex flex-col gap-6 animate-in fade-in slide-in-from-top-2">
                  <div className="flex items-center justify-between border-b border-midnight/10 pb-4">
                    <span className="font-serif text-gold-dark font-normal text-2xl tracking-tight">
                      DAY {d.day} of {pkg.itinerary.length}
                    </span>
                    <div className="flex gap-2">
                      {d.travelDistance && (
                        <span className="font-sans text-[10px] uppercase font-bold tracking-wider bg-gold-dark/5 text-gold-dark px-3 py-1.5 rounded-full border border-gold-dark/15 flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 text-gold-dark shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                          </svg>
                          {d.travelDistance}
                        </span>
                      )}
                      {d.altitude && (
                        <span className="font-sans text-[10px] uppercase font-bold tracking-wider bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full border border-emerald-100 flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 text-emerald-700 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12L9 4.5 15.75 12M9 4.5v15M15.75 12l4.5 4.5" />
                          </svg>
                          Altitude: {d.altitude}
                        </span>
                      )}
                    </div>
                  </div>

                  <h4 className="font-serif text-2xl text-midnight font-normal leading-snug">
                    {d.title}
                  </h4>

                  {/* Day Activities (Timeline Dotted Connector) */}
                  <div className="space-y-4">
                    <p className="font-sans text-sm font-bold tracking-[0.1em] text-midnight/45 uppercase">
                      Scheduled Itinerary Activities
                    </p>
                    <ul className="relative pl-6 space-y-6 border-l border-dashed border-midnight/10 ml-3">
                      {d.activities.map((act, i) => (
                        <li key={i} className="relative">
                          <span className="absolute left-[-29px] top-1.5 w-2.5 h-2.5 rounded-full bg-gold border-2 border-white ring-4 ring-gold/15" />
                          <span className="font-sans text-sm text-midnight/80 leading-relaxed">
                            {act}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Accommodation & Meals */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-midnight/10 mt-6">
                    {d.accommodation && (
                      <div>
                        <p className="font-sans text-sm font-bold tracking-[0.1em] text-midnight/45 uppercase mb-2.5">
                          Night Stay
                        </p>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-gold-dark shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m16.5-18v18m-13.5-18h10.5A2.25 2.25 0 0 1 20.25 5.25v13.5A2.25 2.25 0 0 1 18 21H6a2.25 2.25 0 0 1-2.25-2.25V5.25A2.25 2.25 0 0 1 6 3Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h.008v.008H9V9Zm0 3h.008v.008H9V12Zm0 3h.008v.008H9V15Zm6-6h.008v.008H15V9Zm0 3h.008v.008H15V12Zm0 3h.008v.008H15V15Z" />
                          </svg>
                          <span className="font-sans text-sm font-semibold text-midnight">
                            {d.accommodation}
                          </span>
                        </div>
                      </div>
                    )}

                    {d.meals && (
                      <div>
                        <p className="font-sans text-sm font-bold tracking-[0.1em] text-midnight/45 uppercase mb-2.5">
                          Meals Included
                        </p>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`font-sans text-[10px] font-bold px-3 py-1 rounded border uppercase tracking-wider ${
                            d.meals.breakfast ? "bg-emerald-50 text-emerald-700 border-emerald-100" : "bg-neutral-100 text-neutral-400 border-neutral-200 line-through"
                          }`}>
                            Breakfast
                          </span>
                          <span className={`font-sans text-[10px] font-bold px-3 py-1 rounded border uppercase tracking-wider ${
                            d.meals.lunch ? "bg-emerald-50 text-emerald-700 border-emerald-100" : "bg-neutral-100 text-neutral-400 border-neutral-200 line-through"
                          }`}>
                            Lunch
                          </span>
                          <span className={`font-sans text-[10px] font-bold px-3 py-1 rounded border uppercase tracking-wider ${
                            d.meals.dinner ? "bg-emerald-50 text-emerald-700 border-emerald-100" : "bg-neutral-100 text-neutral-400 border-neutral-200 line-through"
                          }`}>
                            Dinner
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Highlights, Inclusions & Exclusions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-12 border-t border-midnight/10 mt-12">
          {/* Highlights */}
          <div className="bg-white rounded-xl p-8 border border-midnight/5 shadow-ambient flex flex-col gap-6">
            <h4 className="font-serif text-xl text-midnight font-normal mb-1 flex items-center gap-2.5 border-b border-midnight/10 pb-4">
              <svg className="w-5 h-5 text-gold-dark shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              Journey Highlights
            </h4>
            <ul className="space-y-4">
              {pkg.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span className="font-sans text-sm text-midnight/80 leading-relaxed">
                    {h}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Inclusions & Exclusions */}
          <div className="bg-white rounded-xl p-8 border border-midnight/5 shadow-ambient flex flex-col gap-6">
            <h4 className="font-serif text-xl text-midnight font-normal mb-1 flex items-center gap-2.5 border-b border-midnight/10 pb-4">
              <svg className="w-5 h-5 text-gold-dark shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.03 0 1.9.693 2.166 1.638m-7.377 0A49.793 49.793 0 0112 4.11m0 12.89c-.832 0-1.615-.353-2.17-.966L6.5 12.5M12 17v-7.25m0 0a.75.75 0 111.5 0" />
              </svg>
              Terms &amp; Specifications
            </h4>
            
            <div className="space-y-6">
              <div>
                <h5 className="font-sans text-sm font-bold tracking-[0.1em] text-emerald-700 uppercase mb-3 flex items-center gap-2">
                  Included in Package
                </h5>
                <ul className="space-y-2.5">
                  {pkg.inclusions.slice(0, 4).map((inc, i) => (
                    <li key={i} className="flex items-start gap-2.5 font-sans text-sm text-midnight/70 leading-normal">
                      <svg className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {inc}
                    </li>
                  ))}
                  {pkg.inclusions.length > 4 && (
                    <li className="font-sans text-sm text-gold-dark italic pl-6 pt-1">
                      + {pkg.inclusions.length - 4} more inclusions (view full details upon inquiry)
                    </li>
                  )}
                </ul>
              </div>

              <div>
                <h5 className="font-sans text-sm font-bold tracking-[0.1em] text-rose-700 uppercase mb-3 flex items-center gap-2">
                  Excluded from Package
                </h5>
                <ul className="space-y-2.5">
                  {pkg.exclusions.slice(0, 3).map((exc, i) => (
                    <li key={i} className="flex items-start gap-2.5 font-sans text-sm text-midnight/70 leading-normal">
                      <svg className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {exc}
                    </li>
                  ))}
                  {pkg.exclusions.length > 3 && (
                    <li className="font-sans text-sm text-rose-500/60 italic pl-6 pt-1">
                      + {pkg.exclusions.length - 3} more exclusions
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Travel ID Requirements & Guidelines */}
        <div className="bg-gold/5 border border-gold/20 rounded-xl p-6 mt-10 flex flex-col md:flex-row gap-4 items-start">
          <svg className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 111.086.77L10.5 15.75m.75-5.25h.008v.008H11.25V10.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 0 1 .75 0zM12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" />
          </svg>
          <div>
            <h4 className="font-sans text-sm font-semibold text-midnight mb-1.5">
              Important Entry &amp; Visa Guidelines for Nepal
            </h4>
            <p className="font-sans text-sm text-midnight/70 leading-relaxed mb-3">
              Indian citizens do not require a visa to enter Nepal but **MUST carry an original valid Passport or original Voter ID card** for border crossing and hotel registrations. NRI or other foreign nationals must possess a valid Passport and secure a Nepal entry visa (arrangeable en route or at Sonauli/Kathmandu airport).
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="font-sans text-[10px] bg-white border border-gold/30 text-gold-dark px-3 py-1 rounded font-semibold uppercase tracking-wider">
                Passport Required
              </span>
              <span className="font-sans text-[10px] bg-white border border-gold/30 text-gold-dark px-3 py-1 rounded font-semibold uppercase tracking-wider">
                Voter ID Allowed for Indians
              </span>
              <span className="font-sans text-[10px] bg-white border border-gold/30 text-gold-dark px-3 py-1 rounded font-semibold uppercase tracking-wider">
                Aadhar Card NOT Valid ID
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
