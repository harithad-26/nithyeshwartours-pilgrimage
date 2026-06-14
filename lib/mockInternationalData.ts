export type PackageDay = {
  day: number;
  title: string;
  highlights: string[];
  meals?: string;
  stay?: string;
};

export type HotelData = {
  location: string;
  hotelName: string;
  category: string;
  nights: number;
};

export type PaymentStage = {
  stage: string;
  amount: string;
  due: string;
};

export type CancellationRule = {
  timeBefore: string;
  refund: string;
};

export type PackageData = {
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

export type StorytellingItem = {
  title: string;
  description: string;
  image: string;
};

export type StandardItem = {
  title: string;
  description: string;
  iconType: "security" | "dining" | "service";
};

export type TestimonialItem = {
  rating: number;
  comment: string;
  author: string;
  location: string;
};

export type DestinationData = {
  name: string;
  title: string;
  tagline: string;
  heroImage: string;
  description: string;
  packages: Record<string, PackageData>;
  faqs: { q: string; a: string }[];
  storytelling: {
    title: string;
    subtitle: string;
    description: string;
    items: StorytellingItem[];
  };
  standards: {
    title: string;
    subtitle: string;
    description: string;
    items: StandardItem[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: TestimonialItem[];
  };
};

export const MOCK_DESTINATIONS: Record<string, DestinationData> = {
  maldives: {
    name: "Maldives",
    title: "Maldives Luxury Overwater Retreats",
    tagline: "THE AZURE SANCTUARY",
    heroImage: "/images/destinations/international.jpg",
    description: "Experience pure tropical bliss in private overwater villas, featuring azure lagoons, private infinity pools, and world-class spa retreats.",
    packages: {
      "MLD-01": {
        code: "MLD-01",
        title: "Maldives Luxury Overwater Escape",
        subtitle: "5 Nights · 6 Days",
        duration: "5 Nights / 6 Days",
        price: "$3,499",
        priceNote: "Per person, double occupancy · Taxes included",
        difficulty: "Leisurely",
        difficultyColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
        altitude: "Sea Level",
        startPoint: "Male (MLE)",
        heroImage: "/images/destinations/international.jpg",
        heroAlt: "Overwater villas extending into crystal-clear turquoise waters",
        tagline: "OVERWATER VILLAS · HOLISTIC WELLNESS",
        description: "Unwind in premium overwater villas, experience world-class holistic spa therapies, and enjoy private island dining under the stars.",
        overview: [
          "Private overwater villa stay with direct slide or step access to the lagoon.",
          "Daily gourmet dining featuring international and traditional Maldivian cuisines.",
          "Complimentary water sports including guided house-reef snorkeling and kayaking.",
          "Premium sunset cruise on a luxury catamaran with champagne toasts."
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrive Male — Speedboat Transfer to Resort",
            highlights: [
              "Airport meet-and-assist by resort host",
              "Scenic speedboat transfer to the island resort",
              "Check-in at overwater villa & welcome cocktail",
              "Sunset beach walk and private buffet dinner"
            ],
            meals: "Dinner",
            stay: "Private Island Resort"
          },
          {
            day: 2,
            title: "Lagoon Exploration & Snorkeling",
            highlights: [
              "Breakfast overlooking the ocean",
              "Guided snorkeling safari on the house reef",
              "Afternoon free for paddleboarding or windsurfing",
              "Private candlelight seafood dinner"
            ],
            meals: "Breakfast, Dinner",
            stay: "Private Island Resort"
          },
          {
            day: 3,
            title: "Holistic Wellness & Catamaran Cruise",
            highlights: [
              "Sunrise yoga on the beach",
              "60-minute therapeutic massage at the overwater spa",
              "Sunset catamaran cruise with dolphin spotting",
              "Beach barbecue under the stars"
            ],
            meals: "Breakfast, Dinner",
            stay: "Private Island Resort"
          },
          {
            day: 4,
            title: "Private Sandbank Picnic & Relaxation",
            highlights: [
              "Excursion to a secluded sandbank for private lunch",
              "Time for relaxation and swimming in pristine shallow waters",
              "Return to resort for evening cocktails",
              "Gourmet fine dining experience"
            ],
            meals: "Breakfast, Dinner",
            stay: "Private Island Resort"
          },
          {
            day: 5,
            title: "Leisure Day & Water Activities",
            highlights: [
              "Breakfast in villa (floating breakfast option)",
              "Day at leisure or optional scuba diving excursion",
              "Farewell cocktail reception on the sunset deck",
              "Signature multi-course dinner"
            ],
            meals: "Breakfast, Dinner",
            stay: "Private Island Resort"
          },
          {
            day: 6,
            title: "Departure Maldivian Shore",
            highlights: [
              "Breakfast at resort",
              "Checkout and speedboat transfer back to Male Airport",
              "Flight home"
            ],
            meals: "Breakfast",
            stay: "—"
          }
        ],
        inclusions: [
          "5 Nights stay in Premium Overwater Villa with private deck",
          "Daily breakfast and dinner (Half Board) at resort restaurants",
          "Round-trip speedboat transfers from Male International Airport",
          "Catamaran sunset cruise & house reef snorkeling gear rental",
          "60-minute spa massage per adult",
          "All Maldivian tourist taxes and green fees"
        ],
        exclusions: [
          "International airfare to/from Male",
          "Lunch and premium alcoholic beverages",
          "Optional motorized water sports (jet ski, parasailing)",
          "Travel insurance"
        ],
        hotels: [
          { location: "Private Island", hotelName: "Anantara Veli / Centara Grand", category: "5-Star Resort", nights: 5 }
        ],
        booking: {
          requiredDocuments: [
            "Valid Passport with at least 6 months validity",
            "Confirmed return flight ticket",
            "Completed IMUGA traveler declaration (online submission 96h before)"
          ],
          paymentSchedule: [
            { stage: "Booking Deposit", amount: "30% of total cost", due: "At time of booking" },
            { stage: "Balance Payment", amount: "70% of total cost", due: "21 days before arrival" }
          ],
          importantNotes: [
            "Speedboat transfers operate only during daylight hours.",
            "Free tourist visa is granted on arrival to all passport holders."
          ]
        },
        knowBefore: {
          visa: "Maldives offers a free 30-day visa on arrival for all nationalities, provided you have a valid passport, return tickets, and hotel confirmation.",
          id: "Passport is mandatory. Ensure it is valid for at least 6 months from your date of entry.",
          fitness: "This is a relaxed leisure package requiring no special physical preparation. Perfect for families, couples, and seniors.",
          packing: [
            "Light swimwear and UV protection shirts",
            "Biodegradable reef-safe sunscreen (SPF 50+)",
            "Waterproof pouch for phones",
            "Elegant resort-casual attire for dinners"
          ]
        },
        faqs: [
          { q: "Is Maldives vegetarian-friendly?", a: "Yes, our selected resorts provide a wide range of vegetarian and vegan options in their buffets and à la carte menus." },
          { q: "What are the baggage limits for seaplanes and speedboats?", a: "Standard seaplane baggage allowance is 20 kg checked luggage and 5 kg hand luggage per person. Excess baggage is subject to charges by the operator. Speedboat transfers do not have strict limits but reasonable luggage sizes are advised." },
          { q: "What are the tipping guidelines in the Maldives?", a: "Tipping is not mandatory as a 10% service charge is added to almost everything. However, rewarding exceptional service by villa hosts, spa therapists, or boat crew with $5-$10 per day is highly appreciated." },
          { q: "Can we upgrade our package to an All-Inclusive dining plan?", a: "Yes. Our standard package is Half Board (breakfast and dinner). You can upgrade to Full Board (adds lunch) or All-Inclusive (adds lunch and selected alcoholic/non-alcoholic beverages) at the time of booking." },
          { q: "How do we book excursions or water sports at the resort?", a: "Resort excursions (like diving, jet ski, or parasailing) can be booked directly through your dedicated villa host or the resort's water sports center upon arrival." },
          { q: "Are medical facilities and clinics available on the resort islands?", a: "All luxury resorts have an on-site first aid clinic and a resident doctor for basic consultations. For major emergencies, transfers are coordinated to the main hospitals in Male." }
        ],
        terms: {
          cancellationPolicy: [
            { timeBefore: "30+ days", refund: "90% refund" },
            { timeBefore: "15-29 days", refund: "50% refund" },
            { timeBefore: "Less than 15 days", refund: "No refund" }
          ],
          travelInsurance: "Recommended for flight delays or tropical storm disruptions.",
          changes: "Allowed up to 14 days before arrival, subject to resort availability.",
          companyRights: "We reserve the right to upgrade resort choices if designated hotels are fully booked.",
          refundPolicy: "No refund once speedboats or resort stays have commenced.",
          ageRestriction: "No restrictions. Children under 12 may stay free in parent's room depending on resort terms."
        },
        idealFor: "Honeymooners · Luxury Seekers · Families"
      }
    },
    faqs: [
      { q: "Do I need a visa for the Maldives?", a: "No, a 30-day visa is granted on arrival for all tourists with valid passports." },
      { q: "What is the best time to visit?", a: "The best weather is from November to April, during the dry northeast monsoon season." },
      { q: "Are pure vegetarian and Jain food options available at the resorts?", a: "Yes. All our selected luxury resorts feature world-class international chefs and dedicated dining areas providing fresh, high-quality vegetarian, vegan, and Satvik/Jain food options." },
      { q: "How do we travel from Male Airport to the resort island?", a: "Depending on your resort location, transit is arranged via private luxury speedboat (20–45 mins) or a scenic seaplane flight. All transfers are fully coordinated and escorted by our airport hosts." },
      { q: "What clothing is recommended for resort stays and public places?", a: "Standard light summer wear and elegant resort-casual attire are perfect for the private island resorts. When visiting local inhabited islands or Male city, we advise dressing modestly covering shoulders and knees out of respect." }
    ],
    storytelling: {
      title: "The Azure Sanctuary of Maldives",
      subtitle: "Sacred Portals",
      description: "Maldives stands as a pristine paradise where coral horizons meet high-end comfort.",
      items: [
        {
          title: "Overwater Bungalows",
          description: "Sleep above the gentle lapping of ocean waves, with glass floors revealing vibrant reef fish below and steps leading directly into the lagoon.",
          image: "/images/destinations/international.jpg"
        },
        {
          title: "Holistic Beachfront Spas",
          description: "Restore inner balance with therapies utilizing coconut oils and ocean minerals, conducted in open-air treatment villas by the water's edge.",
          image: "/images/destinations/bali.png"
        },
        {
          title: "Private Sandbank Dining",
          description: "Cruise to a secluded, tide-sculpted sandbank for a private lunch or sunset dinner prepared by a personal chef in total seclusion.",
          image: "/images/destinations/switzerland.png"
        }
      ]
    },
    standards: {
      title: "Elite Comfort Hand in Hand",
      subtitle: "Devotion & Care",
      description: "We bring seamless airport coordination, speedboats, and curated wellness to your tropical escape.",
      items: [
        {
          title: "Yacht & Speedboat Escorts",
          description: "Step straight from the terminal onto our private speedboats, avoiding custom delays and airport lines with fully assisted transit.",
          iconType: "security"
        },
        {
          title: "Gourmet Vegetarian Menus",
          description: "All our selected island resorts feature dedicated international chefs specializing in clean, fresh vegetarian and vegan cuisines.",
          iconType: "dining"
        },
        {
          title: "24/7 Island Coordinator",
          description: "Enjoy dedicated local support throughout your stay, on-call to arrange excursions, private charters, or spa updates.",
          iconType: "service"
        }
      ]
    },
    testimonials: {
      title: "Traveler Experiences",
      subtitle: "Voices of Grace",
      items: [
        {
          rating: 5,
          comment: "The overwater villa stay and Sandbank dinner were otherworldly. Nithyeshwar Tours coordinated our transfers seamlessly. A dream honeymoon.",
          author: "Ananya & Rohan Sen",
          location: "Mumbai, India"
        },
        {
          rating: 5,
          comment: "Perfect family retreat. The kids loved the snorkeling safari, and the resort's vegetarian options were fantastic. Highly recommended.",
          author: "Meera & Vikrant Kapoor",
          location: "Bangalore, India"
        },
        {
          rating: 5,
          comment: "Extremely relaxing and luxurious. The spa treatments and catamaran cruises were absolute highlights. Top-tier service.",
          author: "Dr. Sandeep Mehta",
          location: "New Delhi, India"
        }
      ]
    }
  },
  bali: {
    name: "Bali Spirit",
    title: "Bali Temple & Beach Escapes",
    tagline: "SACRED TEMPLES · TROPICAL SHORES",
    heroImage: "/images/destinations/bali.png",
    description: "A soulful journey through Ubud's sacred temples and artistic heart, combined with pristine beach relaxation and sunset ocean views.",
    packages: {
      "BALI-01": {
        code: "BALI-01",
        title: "Bali Spirit: Ubud & Nusa Dua Tour",
        subtitle: "6 Nights · 7 Days",
        duration: "6 Nights / 7 Days",
        price: "$1,850",
        priceNote: "Per person, twin-sharing · GST extra",
        difficulty: "Easy",
        difficultyColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
        altitude: "Ubud (200m)",
        startPoint: "Denpasar (DPS)",
        heroImage: "/images/destinations/bali.png",
        heroAlt: "Uluwatu Temple perched on a steep cliff overlooking the Indian Ocean",
        tagline: "TEMPLES · RICE TERRACES · OCEAN SUNSETS",
        description: "A perfect blend of spiritual immersion in Ubud's lush jungles and beachfront luxury in Nusa Dua.",
        overview: [
          "Visit the iconic Uluwatu Temple perched on high ocean cliffs.",
          "Stroll through Tegallalang Rice Terraces and swing over the valleys.",
          "Holy water purification ritual at the Tirta Empul Temple.",
          "Fabulous sunset seafood dinner at Jimbaran Bay."
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrive Bali — Transfer to Ubud Jungle Resort",
            highlights: [
              "Airport pickup and scenic transfer to Ubud",
              "Check-in at forest resort",
              "Evening walk through Ubud market",
              "Welcome dinner at resort"
            ],
            meals: "Dinner",
            stay: "Ubud"
          },
          {
            day: 2,
            title: "Ubud Culture & Sacred Monkey Forest",
            highlights: [
              "Visit Ubud Royal Palace and Monkey Forest",
              "Explore local art workshops in Celuk and Mas",
              "Sunset at Tegallalang Rice Terraces",
              "Organic dinner overlooking river gorge"
            ],
            meals: "Breakfast, Dinner",
            stay: "Ubud"
          },
          {
            day: 3,
            title: "Holy Spring Purification & Volcano View",
            highlights: [
              "Holy water purification at Tirta Empul Temple",
              "Scenic lunch in Kintamani overlooking Mount Batur",
              "Visit Coffee Plantation for Luwak tasting",
              "Free evening in Ubud"
            ],
            meals: "Breakfast, Dinner",
            stay: "Ubud"
          },
          {
            day: 4,
            title: "Ubud → Tanah Lot Temple → Nusa Dua",
            highlights: [
              "Check out and drive to Tanah Lot sea temple",
              "Explore the temple base at low tide",
              "Drive to Nusa Dua beach resort and check in",
              "Relaxing beachfront evening"
            ],
            meals: "Breakfast, Dinner",
            stay: "Nusa Dua"
          },
          {
            day: 5,
            title: "Nusa Dua Beach & Uluwatu Sunset",
            highlights: [
              "Water sports at Tanjung Benoa (banana boat included)",
              "Visit Uluwatu Temple on the cliffside",
              "Watch traditional Kecak Fire Dance at sunset",
              "Jimbaran Bay seafood dinner on the sand"
            ],
            meals: "Breakfast, Dinner",
            stay: "Nusa Dua"
          },
          {
            day: 6,
            title: "Beach Day & Spa Treatment",
            highlights: [
              "Full day at leisure in Nusa Dua beach",
              "90-minute traditional Balinese spa package",
              "Farewell dinner at resort"
            ],
            meals: "Breakfast, Dinner",
            stay: "Nusa Dua"
          },
          {
            day: 7,
            title: "Departure Bali",
            highlights: [
              "Breakfast and souvenir shopping",
              "Transfer to Denpasar Airport for departure"
            ],
            meals: "Breakfast",
            stay: "—"
          }
        ],
        inclusions: [
          "3 Nights in Ubud Jungle Resort + 3 Nights in Nusa Dua Beach Resort",
          "Daily breakfast and dinner throughout",
          "Private AC vehicle transfers and sightseeing with English-speaking guide",
          "Kecak Dance performance tickets",
          "90-minute Balinese spa treatment",
          "Water sports activity voucher at Tanjung Benoa"
        ],
        exclusions: [
          "International flights to Denpasar",
          "Lunch and personal expenditures",
          "Tipping and optional excursions",
          "Bali tourist tax (approx. USD 10, paid online or on arrival)"
        ],
        hotels: [
          { location: "Ubud", hotelName: "Alila Ubud / Ubud Hanging Gardens", category: "5-Star Resort", nights: 3 },
          { location: "Nusa Dua", hotelName: "Grand Hyatt / Melia Bali", category: "5-Star Beach Resort", nights: 3 }
        ],
        booking: {
          requiredDocuments: [
            "Passport with at least 6 months validity",
            "Return flight ticket",
            "Bali Tourist Levy receipt (paid online)"
          ],
          paymentSchedule: [
            { stage: "Booking Deposit", amount: "20% of total cost", due: "At time of booking" },
            { stage: "Balance Payment", amount: "80% of total cost", due: "14 days before departure" }
          ],
          importantNotes: [
            "Temple visits require wearing a sarong (provided at entrance).",
            "Respect local ceremonies and silence signs during temple walks."
          ]
        },
        knowBefore: {
          visa: "Visa on Arrival (VoA) is available for citizens of 90+ countries, including India. Costs IDR 500,000 (approx. USD 35) and is valid for 30 days.",
          id: "Original Passport is mandatory. Ensure you have the electronic Customs declaration barcode ready on your phone on arrival.",
          fitness: "Easy-level package suitable for all ages. Involves some stair climbing at Uluwatu and Tirta Empul.",
          packing: [
            "Light breathable cotton clothing",
            "Comfortable sandals for temples",
            "Swimwear & high SPF sunscreen",
            "Small daypack for excursions"
          ]
        },
        faqs: [
          { q: "Can we drink tap water in Bali?", a: "No, tap water is not potable. Bottled water is widely available and provided daily at all resorts." },
          { q: "What is the dress code for visiting Balinese temples?", a: "Both men and women must cover their knees and shoulders. A traditional sarong and waist sash are required, which are usually provided or can be rented at the temple entrances." },
          { q: "Are the famous Bali jungle swings safe to ride?", a: "Yes, all swings we recommend and include in our itinerary are fully certified and equipped with safety harnesses and experienced guides who manage the equipment." },
          { q: "How do we safely exchange currency or withdraw cash in Bali?", a: "Use authorized money changers with prominent physical offices (avoid small street booths promising zero commission) or withdraw local Rupiah (IDR) from ATMs inside bank branches." },
          { q: "What electric socket types are used in Bali?", a: "Bali uses European standard two-round-pin plugs (Type C and F). The standard voltage is 230V. We recommend carrying a universal travel adapter." },
          { q: "Will our private guide and driver speak English?", a: "Yes, all our local guides and drivers speak clear, conversational English to help you navigate and learn about Balinese culture." }
        ],
        terms: {
          cancellationPolicy: [
            { timeBefore: "30+ days", refund: "95% refund" },
            { timeBefore: "15-29 days", refund: "50% refund" },
            { timeBefore: "Less than 15 days", refund: "No refund" }
          ],
          travelInsurance: "Highly recommended.",
          changes: "Allowed up to 14 days prior, subject to guide/resort slots.",
          companyRights: "We reserve the right to alter schedules during local Hindu holidays (like Nyepi) if sites close.",
          refundPolicy: "No refund for unused bookings or activities once the tour begins.",
          ageRestriction: "Perfect for all ages."
        },
        idealFor: "Couples · Families · Wellness Seekers"
      }
    },
    faqs: [
      { q: "Do Indians get visa on arrival in Bali?", a: "Yes, a 30-day Visa on Arrival is available at Denpasar Airport for IDR 500,000." },
      { q: "What is the best time to visit?", a: "The dry season from April to October is the most pleasant time to visit Bali." },
      { q: "Is pure vegetarian/Indian food easily available in Bali?", a: "Yes, very easily. Ubud and Seminyak have numerous Indian restaurants, and all selected resort properties offer extensive vegetarian and vegan items on their menus." },
      { q: "Can we customize the sightseeing itinerary or hire a private guide?", a: "Absolutely. All our Bali packages include a private air-conditioned vehicle with a dedicated local driver-guide. You can adjust the timing or add specific temple/beach visits on the go." },
      { q: "What currency is used, and should we carry cash?", a: "The local currency is the Indonesian Rupiah (IDR). Credit cards are accepted in resorts and larger restaurants, but we recommend carrying cash in IDR for local entry fees, markets, and small purchases." }
    ],
    storytelling: {
      title: "The Spiritual Sanctuary of Bali",
      subtitle: "Sacred Portals",
      description: "Bali stands as a majestic island where tropical beauty meets ancient Hindu rituals.",
      items: [
        {
          title: "Ubud Sacred Forests",
          description: "Wander through deep jungle ravines filled with historic stone temples, active macaque monkeys, and peaceful flowing streams.",
          image: "/images/destinations/bali.png"
        },
        {
          title: "Tirta Empul Holy Springs",
          description: "Perform the Melukat ritual (water purification) alongside devotees under the mountain-spring spouts of Bali's most sacred temple.",
          image: "/images/pilgrimage/muktinath.png"
        },
        {
          title: "Uluwatu Cliffside Temple",
          description: "Perched 70 meters above the roaring Indian Ocean, Uluwatu offers unmatched sunset ocean views and historic stone gateways.",
          image: "/images/destinations/international.jpg"
        }
      ]
    },
    standards: {
      title: "Guided Comfort & Care",
      subtitle: "Devotion & Care",
      description: "We bring professional drivers, local experts, and satvik-friendly dining to your Bali exploration.",
      items: [
        {
          title: "Private Chauffeurs",
          description: "Enjoy fully private transfers in clean, air-conditioned luxury SUVs, with custom drop-offs at every destination.",
          iconType: "security"
        },
        {
          title: "Pure Vegetarian Standard",
          description: "We arrange dedicated lunches and dinners featuring high-quality vegetarian meals at Balinese and Indian restaurants.",
          iconType: "dining"
        },
        {
          title: "Accredited Local Guides",
          description: "Learn the deep spiritual, artistic, and historical context of Balinese temples from our government-certified local guides.",
          iconType: "service"
        }
      ]
    },
    testimonials: {
      title: "Devotee & Traveler Journeys",
      subtitle: "Voices of Grace",
      items: [
        {
          rating: 5,
          comment: "Bathing at Tirta Empul was an incredibly peaceful experience. The logistics were flawless, and our guide in Ubud was wonderful.",
          author: "Geeta & Suresh Patel",
          location: "Ahmedabad, India"
        },
        {
          rating: 5,
          comment: "A beautiful balance of jungle serenity and Nusa Dua beach luxury. Excellent planning and highly professional guides.",
          author: "Amit & Priya Sharma",
          location: "Delhi, India"
        },
        {
          rating: 5,
          comment: "Absolutely seamless from airport pickup to our departure. The traditional spa packages and Uluwatu sunsets were unforgettable.",
          author: "Rajesh Iyer",
          location: "Chennai, India"
        }
      ]
    }
  },
  switzerland: {
    name: "Switzerland",
    title: "Swiss Alpine Soul Voyages",
    tagline: "NATURE'S PUREST SILENCE",
    heroImage: "/images/destinations/switzerland.png",
    description: "Soak in the pure mountain silence of the Swiss Alps, journeying through Zermatt, St. Moritz, and riding the world-famous Glacier Express.",
    packages: {
      "SUI-01": {
        code: "SUI-01",
        title: "Swiss Alpine Soul & Scenic Trains",
        subtitle: "6 Nights · 7 Days",
        duration: "6 Nights / 7 Days",
        price: "$4,200",
        priceNote: "Per person, twin-sharing · Includes 1st class rail pass",
        difficulty: "Easy",
        difficultyColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
        altitude: "Zermatt (1,600m)",
        startPoint: "Zurich (ZRH)",
        heroImage: "/images/destinations/switzerland.png",
        heroAlt: "Traditional wooden chalets in Zermatt with the snowy peak of Matterhorn in the background",
        tagline: "MATTERHORN VIEW · GLACIER EXPRESS · ALPS",
        description: "Experience the ultimate Swiss Alpine journey. Ride the panoramic Glacier Express, admire the Matterhorn, and rest in Zermatt's car-free village.",
        overview: [
          "First-class tickets for the legendary Glacier Express train ride.",
          "Two nights in car-free Zermatt with dramatic Matterhorn views.",
          "Scenic gondola excursion to Matterhorn Glacier Paradise.",
          "Explore the alpine lakes and luxury of St. Moritz."
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrive Zurich — Scenic Rail to St. Moritz",
            highlights: [
              "Airport greeting and Swiss Travel Pass activation",
              "Panoramic rail journey to alpine resort St. Moritz",
              "Check-in at luxury hotel",
              "Gourmet dinner at hotel restaurant"
            ],
            meals: "Dinner",
            stay: "St. Moritz"
          },
          {
            day: 2,
            title: "St. Moritz Alpine Valleys",
            highlights: [
              "Morning stroll along Lake St. Moritz",
              "Funicular ride to Muottas Muragl for valley views",
              "Afternoon free to explore luxury boutiques",
              "Welcome alpine dinner"
            ],
            meals: "Breakfast, Dinner",
            stay: "St. Moritz"
          },
          {
            day: 3,
            title: "Glacier Express to Zermatt",
            highlights: [
              "Board the Glacier Express in 1st class panoramic car",
              "8-hour journey crossing 291 bridges & 91 tunnels",
              "Arrive in car-free Zermatt, horse-carriage transfer to hotel",
              "Dinner overlooking Matterhorn (subject to weather)"
            ],
            meals: "Breakfast, Dinner",
            stay: "Zermatt"
          },
          {
            day: 4,
            title: "Matterhorn Glacier Paradise",
            highlights: [
              "Scenic cable car to Europe's highest station (3,883m)",
              "Explore Glacier Palace carved deep inside the ice",
              "Enjoy panoramic snow platform view of Matterhorn",
              "Return to Zermatt for Swiss fondue dinner"
            ],
            meals: "Breakfast, Dinner",
            stay: "Zermatt"
          },
          {
            day: 5,
            title: "Zermatt → Interlaken",
            highlights: [
              "Morning departure rail journey to Interlaken",
              "Check in at lakeview resort",
              "Evening lake cruise on Lake Thun or Lake Brienz",
              "Gourmet international dinner"
            ],
            meals: "Breakfast, Dinner",
            stay: "Interlaken"
          },
          {
            day: 6,
            title: "Jungfraujoch — Top of Europe",
            highlights: [
              "Cognitive rail transit to Jungfraujoch (3,454m)",
              "Visit Sphinx Observatory and Ice Palace",
              "Enjoy snowy glacier walks on the mountain top",
              "Farewell dinner at Interlaken"
            ],
            meals: "Breakfast, Dinner",
            stay: "Interlaken"
          },
          {
            day: 7,
            title: "Interlaken → Zurich Departure",
            highlights: [
              "Breakfast and morning lakeside walk",
              "Train back to Zurich Airport for departure flight"
            ],
            meals: "Breakfast",
            stay: "—"
          }
        ],
        inclusions: [
          "6 Nights accommodation in handpicked 4-star boutique hotels",
          "Swiss Travel Pass (1st Class, 8 days) covering all local trains, buses & lake boats",
          "Reserved seat on the Glacier Express (1st Class)",
          "Jungfraujoch and Matterhorn Glacier Paradise cable car tickets",
          "Daily gourmet breakfast + fine dining dinner throughout",
          "Baggage transfer service between hotels"
        ],
        exclusions: [
          "International flights to/from Switzerland",
          "Lunch and specialty alcoholic beverages",
          "Personal expenses & ski activities",
          "Schengen visa processing fees"
        ],
        hotels: [
          { location: "St. Moritz", hotelName: "Hotel Schweizerhof / Crystal Hotel", category: "4-Star Superior", nights: 2 },
          { location: "Zermatt", hotelName: "Hotel Bella Vista / Julen", category: "4-Star Boutique", nights: 2 },
          { location: "Interlaken", hotelName: "Metropole Swiss Quality / Du Lac", category: "4-Star Resort", nights: 2 }
        ],
        booking: {
          requiredDocuments: [
            "Valid Passport with valid Schengen Visa",
            "Confirmed flight itineraries",
            "Travel medical insurance covering minimum EUR 30,000"
          ],
          paymentSchedule: [
            { stage: "Booking Deposit", amount: "40% of total cost", due: "At time of booking (non-refundable for rail pass bookings)" },
            { stage: "Balance Payment", amount: "60% of total cost", due: "30 days before departure" }
          ],
          importantNotes: [
            "Schengen Visa appointment slots should be booked at least 2-3 months prior.",
            "Winter clothing is essential at Jungfraujoch and Matterhorn year-round."
          ]
        },
        knowBefore: {
          visa: "Switzerland is part of the Schengen zone. A valid Schengen visa is mandatory for Indian travelers and must be acquired before flight departure.",
          id: "Original Passport with Schengen Visa page is mandatory for check-in and rail inspections.",
          fitness: "Easy-to-moderate. High altitude platforms (3,800m) can cause minor lightheadedness. Involves gentle walking on paved surfaces and boarding trains.",
          packing: [
            "Heavy thermal jacket & snow boots",
            "Thermal inner layers (wool or high-performance synthetic)",
            "Sunglasses with UV protection (extreme snow reflection)",
            "Universal travel adapter (Swiss type-J socket compatible)"
          ]
        },
        faqs: [
          { q: "Is water tap safe to drink?", a: "Yes, Swiss tap water is of exceptional quality and tastes better than bottled mineral water." },
          { q: "How do luggage transfers work between hotels on the train package?", a: "We arrange a premium luggage forwarding service. Your bags are picked up from your hotel lobby in the morning and delivered directly to your next hotel by evening, allowing you to travel empty-handed on the trains." },
          { q: "What happens if a mountain railway or cable car closes due to bad weather?", a: "If high winds or heavy snow close summits like Jungfraujoch or Matterhorn Glacier Paradise, we will coordinate alternative regional scenic routes, train rides, or city tours, and process refunds for unused cable car tickets." },
          { q: "Can we get a Swiss Family Card for children traveling with us?", a: "Yes. With the Swiss Travel System, children under 16 travel for free when accompanied by at least one parent holding a valid Swiss Travel Pass, and we will issue the Swiss Family Card at no extra cost." },
          { q: "Do you provide assistance with the Schengen visa application?", a: "Yes, we provide official flight itineraries, hotel confirmation vouchers, and insurance coverage letters required for your Schengen visa appointment, and assist with document checklists." },
          { q: "Can we rent heavy winter clothing in Zermatt or Grindelwald?", a: "Yes, there are several sports shops in alpine villages like Zermatt and Interlaken where you can rent premium winter jackets, ski pants, and snow boots on a daily basis." }
        ],
        terms: {
          cancellationPolicy: [
            { timeBefore: "45+ days", refund: "80% refund" },
            { timeBefore: "30-44 days", refund: "40% refund" },
            { timeBefore: "Less than 30 days", refund: "No refund" }
          ],
          travelInsurance: "Mandatory for Schengen entry.",
          changes: "Allowed up to 21 days before, subject to seat reservation fees.",
          companyRights: "We reserve the right to route via alternative regional trains if Glacier Express tracks undergo seasonal maintenance.",
          refundPolicy: "No refund once Swiss Travel Pass is activated and first hotel night starts.",
          ageRestriction: "No limits. Swiss trains are toddler and elderly friendly."
        },
        idealFor: "Scenic Lovers · Honeymooners · Luxury Railway Devotees"
      }
    },
    faqs: [
      { q: "Do Indians need a visa for Switzerland?", a: "Yes, you need a valid Schengen Visa to enter Switzerland." },
      { q: "What is the currency used?", a: "The Swiss Franc (CHF) is the local currency. Credit cards are widely accepted everywhere." },
      { q: "Are Swiss trains easy to navigate for senior citizens?", a: "Yes, exceptionally easy. Swiss rail networks are fully accessible, clean, and perfectly on time. Our packages provide first-class Swiss Travel Passes and automated luggage transfers between hotels, allowing you to travel empty-handed." },
      { q: "Is vegetarian and Indian food available during the alpine tour?", a: "Yes. We pre-arrange premium vegetarian and local alpine cheese dinners (such as Swiss fondue) at each overnight stop. Major tourist sites and cities also feature high-quality Indian restaurants." },
      { q: "What clothing should we pack for high-altitude peaks like Jungfraujoch?", a: "Temperatures on the glaciers are near freezing year-round. You must pack thermal innerwear, a heavy windproof/down jacket, gloves, a warm cap, and sturdy walking shoes with good grip." }
    ],
    storytelling: {
      title: "The Alpine Sanctuary of Switzerland",
      subtitle: "Sacred Portals",
      description: "Switzerland offers pure mountain silence and majestic glacier peaks that calm the soul.",
      items: [
        {
          title: "Matterhorn Glacier Paradise",
          description: "Stand at 3,883m altitude amidst pristine alpine snowfields, gazing at the iconic, pyramid-shaped peak of the Matterhorn.",
          image: "/images/destinations/switzerland.png"
        },
        {
          title: "Glacier Express Scenic Rail",
          description: "Travel in comfort through the high mountain passes and deep gorges of the Swiss Alps on the world's most scenic panoramic train.",
          image: "/images/destinations/international.jpg"
        },
        {
          title: "Interlaken Lake Cruises",
          description: "Glide on the emerald-blue waters of Lake Brienz and Lake Thun, surrounded by steep pine forests and snowy summits.",
          image: "/images/destinations/bali.png"
        }
      ]
    },
    standards: {
      title: "Alpine Hospitality & Safety",
      subtitle: "Devotion & Care",
      description: "We handle rail reservations, boutique hotel bookings, and safety guidance for high-altitude ascents.",
      items: [
        {
          title: "1st Class Swiss Rail Pass",
          description: "All rail and boat transits are fully covered and reserved in first class, avoiding lines and ticket restrictions.",
          iconType: "security"
        },
        {
          title: "Warm Dining Options",
          description: "We pre-arrange premium vegetarian and local cheese specialty dinners (like Swiss fondue) at each overnight stop.",
          iconType: "dining"
        },
        {
          title: "High-Altitude Advisory",
          description: "Guides monitor altitude transition timelines for platforms above 3,500m to ensure senior citizens adjust smoothly.",
          iconType: "service"
        }
      ]
    },
    testimonials: {
      title: "Voices of Alpine Grace",
      subtitle: "Voices of Grace",
      items: [
        {
          rating: 5,
          comment: "Riding the Glacier Express in first class was a bucket-list experience. The hotels in Zermatt and St. Moritz were absolutely beautiful.",
          author: "Mr. & Mrs. Singhania",
          location: "Kolkata, India"
        },
        {
          rating: 5,
          comment: "Very well-planned tour. Zermatt's car-free streets were extremely peaceful, and the Jungfraujoch summit views were breathtaking.",
          author: "Dr. Alok Ranjan",
          location: "Patna, India"
        },
        {
          rating: 5,
          comment: "Perfect logistics. Our luggage was transferred automatically between hotels, letting us travel light on the scenic trains.",
          author: "Karan Johar",
          location: "Mumbai, India"
        }
      ]
    }
  },
  dubai: {
    name: "Dubai",
    title: "Dubai Opulence Expeditions",
    tagline: "THE FUTURE OF TRADITION",
    heroImage: "/images/destinations/dubai.png",
    description: "A dazzling escape showcasing the future of luxury — scaling the Burj Khalifa, dining on desert dunes, and cruising on private yachts.",
    packages: {
      "DXB-01": {
        code: "DXB-01",
        title: "Dubai Opulence & Desert Wonders",
        subtitle: "4 Nights · 5 Days",
        duration: "4 Nights / 5 Days",
        price: "$2,100",
        priceNote: "Per person, twin-sharing · Includes Burj Khalifa access",
        difficulty: "Easy",
        difficultyColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
        altitude: "Flat (Sea Level)",
        startPoint: "Dubai (DXB)",
        heroImage: "/images/destinations/dubai.png",
        heroAlt: "Dazzling skyscrapers of Dubai Marina lit up at dusk with luxury yachts docked",
        tagline: "BURJ KHALIFA · LUXURY SAFARI · MARINA CRUISE",
        description: "Experience the ultimate modern luxury escape in Dubai. Dine on gold-dusted cappuccinos, scale the Burj Khalifa, and ride in luxury 4x4 vehicles over golden desert dunes.",
        overview: [
          "VIP access to Burj Khalifa's Sky Lounge (148th floor).",
          "Private luxury desert dune bashing with gourmet Arabian BBQ buffet.",
          "Exclusive private yacht cruise along Dubai Marina and Palm Jumeirah.",
          "Visit the dazzling Museum of the Future."
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrive Dubai — Private Chauffeur to Luxury Hotel",
            highlights: [
              "Airport meet-and-greet and private Tesla transfer",
              "Check-in at premium downtown hotel",
              "Evening walk at Dubai Mall and fountain show",
              "Welcome dinner at Michelin-starred restaurant"
            ],
            meals: "Dinner",
            stay: "Dubai Downtown"
          },
          {
            day: 2,
            title: "Future Museum & Burj Khalifa VIP Access",
            highlights: [
              "Guided tour of the Museum of the Future",
              "High-tea at Armani Hotel in Burj Khalifa",
              "Observation deck at level 148 (At The Top Sky)",
              "Private dining overlooking fountain lights"
            ],
            meals: "Breakfast, Dinner",
            stay: "Dubai Downtown"
          },
          {
            day: 3,
            title: "Old Dubai Heritage & Private Marina Yacht",
            highlights: [
              "Guided souk walking tour (Gold and Spice Souk)",
              "Abra water taxi ride across Dubai Creek",
              "Afternoon private yacht cruise with chef lunch on board",
              "Free evening in Dubai Marina"
            ],
            meals: "Breakfast, Dinner",
            stay: "Dubai Marina"
          },
          {
            day: 4,
            title: "Luxury Desert Safari & Arabian BBQ",
            highlights: [
              "Morning at leisure (optional beach visit)",
              "Afternoon desert dune bashing in Land Cruiser (private)",
              "Camel riding & sandboarding at sunset",
              "Gourmet barbecue dinner with traditional live dance performances"
            ],
            meals: "Breakfast, Dinner",
            stay: "Dubai Downtown"
          },
          {
            day: 5,
            title: "Departure Dubai",
            highlights: [
              "Breakfast and morning shopping",
              "Airport drop-off for flight home"
            ],
            meals: "Breakfast",
            stay: "—"
          }
        ],
        inclusions: [
          "4 Nights accommodation in 5-star premium hotels",
          "Daily gourmet breakfast + fine dining dinner throughout",
          "Private luxury AC vehicle for all transfers & airport drops",
          "VIP Tickets for Museum of the Future & Burj Khalifa (148th Floor)",
          "2-hour private yacht cruise in Dubai Marina",
          "Private Land Cruiser Desert Safari with VIP seating & dinner"
        ],
        exclusions: [
          "International flights to Dubai",
          "Lunch (except chef lunch on yacht)",
          "Tourism Dirham fee (approx. AED 20 per room/night paid at check-in)",
          "UAE Tourist Visa fees (can be processed by our team)"
        ],
        hotels: [
          { location: "Dubai Downtown", hotelName: "Address Downtown / Sofitel Obelisk", category: "5-Star Luxury", nights: 3 },
          { location: "Dubai Marina", hotelName: "Grosvenor House / InterContinental", category: "5-Star Premium", nights: 1 }
        ],
        booking: {
          requiredDocuments: [
            "Valid Passport with at least 6 months validity",
            "Copy of UAE Tourist Visa",
            "Confirmed return flight tickets"
          ],
          paymentSchedule: [
            { stage: "Booking Deposit", amount: "25% of total cost", due: "At time of booking" },
            { stage: "Balance Payment", amount: "75% of total cost", due: "10 days before departure" }
          ],
          importantNotes: [
            "UAE entry visas can be processed in 3-4 working days.",
            "Appropriate conservative attire is required when visiting historic souks and mosque areas."
          ]
        },
        knowBefore: {
          visa: "Most tourists need a pre-arranged tourist visa for the UAE, which can be easily obtained online. GCC nationals and certain passport holders get visa-free entry.",
          id: "Original Passport is mandatory at check-in and border immigration checks.",
          fitness: "Easy-level package suitable for families, corporate retreats, and senior citizens.",
          packing: [
            "Light cotton clothes (very hot temperatures during day)",
            "Sunglasses, sun hat & sunscreen",
            "Light sweater for air-conditioned mall interiors",
            "Smart-casual or formal dinner wear"
          ]
        },
        faqs: [
          { q: "What is the local currency?", a: "The United Arab Emirates Dirham (AED). Card payments are accepted in virtually every shop and taxi." },
          { q: "What is the dress code for fine-dining restaurants and luxury bars in Dubai?", a: "Premium venues follow a smart-casual or formal dress code. Men should wear collared shirts, trousers, and closed shoes. Swimwear, athletic wear, and open sandals are not permitted." },
          { q: "How long does it take to process the UAE Tourist Visa?", a: "The electronic tourist visa (eVisa) is typically processed within 3-4 working days once we submit your passport copy and passport-sized photographs." },
          { q: "What are the timings for the Dubai Mall fountain show?", a: "The Dubai Fountain shows run daily every 30 minutes from 6:00 PM to 11:00 PM. Each show lasts for about 3-5 minutes with different musical choreographies." },
          { q: "Are child car seats mandatory in private transfers and taxis in Dubai?", a: "Yes, UAE law mandates that children under 4 years of age must travel in a suitable child safety seat. We can pre-arrange child seats in our private luxury vehicles upon request." },
          { q: "Where can we purchase a tourist SIM card upon arrival?", a: "You can purchase a tourist SIM card from local telecom providers like Du, Etisalat, or Virgin Mobile at the Dubai International Airport arrivals hall. A free temporary tourist SIM with limited data is also often handed out at immigration." }
        ],
        terms: {
          cancellationPolicy: [
            { timeBefore: "30+ days", refund: "95% refund" },
            { timeBefore: "10-29 days", refund: "50% refund" },
            { timeBefore: "Less than 10 days", refund: "No refund" }
          ],
          travelInsurance: "Highly recommended.",
          changes: "Allowed up to 7 days prior, subject to booking ticket rescheduling rules.",
          companyRights: "We reserve the right to modify yacht schedules if Dubai Coast Guard issues weather advisories.",
          refundPolicy: "No refund once hotel check-in or safaris have commenced.",
          ageRestriction: "Suitable for all age groups."
        },
        idealFor: "Families · Luxury Seekers · Shoppers"
      }
    },
    faqs: [
      { q: "How can I apply for a Dubai visa?", a: "We can process your 30-day single-entry tourist visa within 3-4 working days on receipt of your passport scan and photo." },
      { q: "What is the best month to visit?", a: "Winter months from November to March are ideal for outdoor dining, cruises, and desert safaris." },
      { q: "Are the desert safari and dune bashing safe for senior citizens and children?", a: "Yes. For senior citizens or families with young infants, we arrange private, gentle desert drives bypassing high-speed dune bashing, leading directly to the luxury desert camp for dining and cultural activities." },
      { q: "Is pure vegetarian and Indian food available in Dubai?", a: "Yes, Dubai is a global culinary hub with thousands of pure vegetarian and authentic Indian restaurants. All package hotel buffets feature extensive Indian and vegetarian selections." },
      { q: "What clothing should we pack for the trip?", a: "Light, loose cotton clothing is best for the warm daytime temperatures. However, malls and indoor sites are heavily air-conditioned, so we recommend carrying a light sweater. Smart-casual attire is required for premium dinners." }
    ],
    storytelling: {
      title: "The Modern Oasis of Dubai",
      subtitle: "Sacred Portals",
      description: "Dubai showcases a futuristic fusion of luxury, architecture, and desert heritage.",
      items: [
        {
          title: "Burj Khalifa Observation",
          description: "Stand at the Sky Lounge on level 148, looking down on a skyline of skyscrapers and desert borders from 555 meters high.",
          image: "/images/destinations/dubai.png"
        },
        {
          title: "Gourmet Desert Dining",
          description: "Take a luxury 4x4 dune drive to our private safari camp, enjoying traditional Arabian grills and camel riding under the stars.",
          image: "/images/destinations/international.jpg"
        },
        {
          title: "Museum of the Future",
          description: "Step into the year 2071 inside a architectural ring covered in Arabic calligraphy, exploring the next frontiers of science and tech.",
          image: "/images/destinations/bali.png"
        }
      ]
    },
    standards: {
      title: "Premium Luxury Standards",
      subtitle: "Devotion & Care",
      description: "We handle VIP entries, private yacht coordinates, and luxury chauffeur transits.",
      items: [
        {
          title: "Luxury Chauffeur Transits",
          description: "Travel in private high-end vehicles with professional drivers, complete with onboard hydration and custom routing.",
          iconType: "security"
        },
        {
          title: "VIP Skip-The-Line Access",
          description: "We pre-arrange VIP lounge entries for Burj Khalifa and private guides to skip the crowds at the Museum of the Future.",
          iconType: "dining"
        },
        {
          title: "Exclusive Private Yachts",
          description: "Enjoy fully catered, private charters sailing past Dubai Marina and the Palm Jumeirah with dedicated onboard service.",
          iconType: "service"
        }
      ]
    },
    testimonials: {
      title: "Guest Experiences in Dubai",
      subtitle: "Voices of Grace",
      items: [
        {
          rating: 5,
          comment: "Scaling the Burj Khalifa and the private yacht cruise were highlights. Outstanding coordination from the Nithyeshwar team.",
          author: "Sanjay & Neha Goel",
          location: "Delhi, India"
        },
        {
          rating: 5,
          comment: "The VIP desert safari is a must-try. Incredibly comfortable, private, and the food was delicious. Highly recommend this package.",
          author: "Rajiv & Divya Bajaj",
          location: "Bangalore, India"
        },
        {
          rating: 5,
          comment: "Perfect corporate incentive trip. Every detail was pre-planned, allowing our team to relax and enjoy the future-oriented exhibits.",
          author: "Anil Mittal",
          location: "Gurugram, India"
        }
      ]
    }
  }
};
