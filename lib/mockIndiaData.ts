import type { Package, StrapiImage, ItineraryDay, Testimonial, DestinationDetail } from "./types";

function makeImage(url: string, alt: string = ""): StrapiImage {
  return {
    url,
    alternativeText: alt || null,
    width: 1200,
    height: 800,
  };
}

export const mockTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Srinivasan Iyer",
    location: "Chennai",
    rating: 5,
    text: "Everything was perfectly coordinated. The VIP darshan passes saved us hours of standing in queue, which was a blessing for my elderly mother.",
    avatar: null,
  },
  {
    id: 2,
    name: "Dr. Ramesh & Savitha Patel",
    location: "Ahmedabad",
    rating: 5,
    text: "Superb organization. The local guide was very knowledgeable about the history of the temples and helped us perform archana rituals smoothly.",
    avatar: null,
  },
  {
    id: 3,
    name: "Anjali Mukherji",
    location: "Kolkata",
    rating: 5,
    text: "Excellent service. Nithyeshwar Tours took care of everything from hotel bookings near the shrines to special entry tickets. Highly recommend.",
    avatar: null,
  },
];

// ================= MOCK INDIA DESTINATIONS =================
export const MOCK_INDIA_DESTINATIONS: DestinationDetail[] = [
  {
    slug: "tamil-nadu",
    name: "Tamil Nadu",
    eyebrow: "The Dravidian Legacy",
    heroImage: "/images/destinations/tamil-nadu.jpg",
    title: "Tamil Nadu Sacred Sites",
    tagline: "Land of eternal temples and ancient spiritual traditions",
    description: "The State of Tamil Nadu has a hoary antiquity. Though early Sangam classics throw historical references, we pass to recorded history only from the Pallavas. The southern states of India were under the hegemony of the Cholas, the Cheras and the Pandyas for centuries. The Pallavas held supremacy from about the second quarter of the fourth century A.D. They were the originators of the famous Dravidian style of temple architecture. The last Pallava ruler was Aparajita, in whose reign the later Cholas under Vijayalaya and Aditya asserted themselves by about the 10th century. At the end of the 11th century, Tamil Nadu was ruled by several dynasties like the Chalukyas, Cholas and Pandyas. In the two centuries that followed, the imperial Cholas gained paramountcy over South India. Muslims gradually strengthened their position, which led to the establishment of the Bahamani Sultanate, by the middle of the 14th century. At the same time, the Vijayanagar Kingdom quickly consolidated itself and extended its sway over the whole of South India, and at the close of the century, Vijayanagar became the supreme power in South. However, it crumbled at the battle of Talikota in 1564 to the confederate forces of the Deccan Sultans. Even during the period of the tumultuous confusion that followed the battle of Talikota, European commercial interest had appeared as rivals in the area of South India. The Portuguese, the Dutch, the French and the English came in quick succession and established trading centres known as 'Factories'. East India Company, which had established its factory at Masulipatnam (now in Andhra Pradesh) in 1611, gradually annexed territories by encouraging enmity among the native rulers. Tamil Nadu was one of the first of British settlements in India. The State is the successor to the old Madras Presidency, which covered the bulk of the southern peninsula in 1901. The composite Madras State was later reorganised, and the present Tamil Nadu was formed.",
    planButtonText: "Plan Your Tamil Nadu Pilgrimage",
    testimonials: [
      {
        name: "Srinivasan Iyer",
        initials: "SI",
        location: "Chennai",
        rating: 5,
        text: "Our pilgrimage to Rameswaram and Madurai was perfectly coordinated. The VIP darshan passes saved us hours of standing in queue, which was a blessing for my elderly mother. The satvik meals were excellent."
      },
      {
        name: "Dr. Ramesh & Savitha Patel",
        initials: "RP",
        location: "Ahmedabad",
        rating: 5,
        text: "Superb organization. The local guide was very knowledgeable about the history of the Meenakshi Temple and helped us perform archana rituals smoothly. The vehicle and driver were extremely professional."
      },
      {
        name: "Anjali Mukherji",
        initials: "AM",
        location: "Kolkata",
        rating: 5,
        text: "Excellent service. Nithyeshwar Tours took care of everything from hotel bookings near the shrines to special entry tickets at Tirupati. Highly recommend them for family yatras."
      },
      {
        name: "Balasubramanian Swamy",
        initials: "BS",
        location: "Madurai",
        rating: 5,
        text: "Outstanding service. The vehicle was pristine and the driver was extremely polite and helpful during our entire temple run. We felt completely safe and cared for."
      },
      {
        name: "Meera Ranganathan",
        initials: "MR",
        location: "Bangalore",
        rating: 5,
        text: "The Rameswaram holy bath and Mani Darshan were conducted so smoothly. Highly recommend this for families traveling with senior citizens. The guides were very respectful."
      },
      {
        name: "Rajesh Sharma",
        initials: "RS",
        location: "Delhi",
        rating: 5,
        text: "A truly divine experience. The coordination at Tirupati Balaji was absolute perfection. Felt very peaceful and happy throughout the entire spiritual journey."
      },
      {
        name: "K. S. Pillai",
        initials: "KP",
        location: "Kochi",
        rating: 5,
        text: "Excellent hotels, tasty satvik meals, and very knowledgeable guides who explained the temple details beautifully. Made our family yatra unforgettable."
      }
    ],
    faqs: [
      {
        q: "What is the dress code for entering temples in Tamil Nadu?",
        a: "Most traditional temples in Tamil Nadu enforce a strict dress code. Men should wear dhotis or formal trousers (no shorts or lungis). Women must wear sarees, half-sarees, or salwar kameez with dupattas. Sleeveless tops and crop tops are not permitted."
      },
      {
        q: "How are Tirupati Special Entry Darshan tickets coordinated?",
        a: "We book the Rs. 300 Special Entry Darshan tickets in advance through the Tirumala Tirupati Devasthanams (TTD) portal. Since slots are highly limited, we coordinate booking schedules weeks before the yatra begins."
      },
      {
        q: "Is the yatra suitable for senior citizens who have difficulty walking?",
        a: "Yes. We arrange wheelchair support, accessible transport, and prioritize special entry queues at major shrines. Our drivers and guides assist seniors during boarding, check-ins, and ritual guides."
      },
      {
        q: "What is the best season to plan a Tamil Nadu temple pilgrimage?",
        a: "The winter months from November to February are ideal, as the weather is pleasant and comfortable for temple walking. Monsoon (October) can bring heavy rainfall, while summer (March to May) is very hot."
      },
      {
        q: "Can we customize the temples we want to visit in our yatra?",
        a: "Absolutely. All our South India pilgrimages can be customized to include specific temples or routes (like Pancha Bhuta Stalams or Nava Graha temples) according to your family's preferences."
      },
      {
        q: "Are satvik food options easily available during the tour?",
        a: "Yes. We select only premium, highly rated vegetarian restaurants that serve clean, hygienic satvik South Indian and North Indian food. Special diet requests can also be accommodated."
      },
      {
        q: "What are the rules regarding photography inside the temples?",
        a: "Photography is generally allowed in the outer corridors and temple courtyards. However, cameras, mobile phones, and recording devices are strictly prohibited inside the main sanctum (garbhagriha) of all traditional temples."
      },
      {
        q: "What kind of local transport is provided during the yatra?",
        a: "We provide private, high-end air-conditioned sedans (like Toyota Etios) or spacious SUVs (like Toyota Innova Crysta) depending on your group size, driven by professional, courteous local drivers."
      }
    ],
    attractions: [
      {
        name: "Meenakshi Amman Temple",
        location: "Madurai",
        description: "Centred in the ancient city of Madurai, the Meenakshi Sundareswarar Temple is a masterpiece of Dravidian architecture. Spanning over 14 acres, the temple complex features 14 towering gopurams (gateway towers), the tallest rising to 170 feet, all adorned with thousands of vibrant stone figures of deities and mythical beasts. Pilgrims gather to witness the daily night ceremony when the idol of Lord Shiva is carried to the shrine of Goddess Meenakshi. The halls, including the Hall of a Thousand Pillars, reflect a heritage of sculpture and spiritual devotion that has thrived for over two millennia.",
        img: "/images/india-states/meenakshi_amman_clean.png"
      },
      {
        name: "Ramanathaswamy Temple",
        location: "Rameswaram",
        description: "As a sacred corner of the Char Dham pilgrimage, the Ramanathaswamy Temple on Rameswaram Island holds immense spiritual significance for both Shaivites and Vaishnavites. It is renowned for its magnificent corridors adorned with over 4,000 intricately carved pillars, forming the longest temple corridor in the world. Devotees perform the sacred holy bathing ritual across the 22 holy water wells (theerthams) within the temple complex before seeking blessings from the main Shiva lingam, which according to legend, was sanctified by Lord Rama and Sita. The temple stands as a testament to deep devotion and ancient engineering.",
        img: "/images/destinations/ramanathaswamy-corridor.png"
      },
      {
        name: "Tirupati Balaji",
        location: "Tirupati (Andhra Border)",
        description: "Perched on the sacred Saptagiri (Seven Hills) of Tirumala, the Sri Venkateswara Temple is the most spiritually vibrant and visited place of worship on Earth. Dedicated to Lord Vishnu in his manifestation as Venkateswara (Balaji), the deity is believed to have appeared here to save mankind from the trials of Kali Yuga. Pilgrims wait in deep devotion to witness the brief, powerful moment of Darshan before the golden-garbed deity. The temple's daily rituals, the offering of tonsured hair as a sign of surrendering ego, and the distribution of the famous Tirupati Laddu prasadam make it a profound cornerstone of Hindu spiritual life.",
        img: "/images/india-states/tirupati-balaji.png"
      }
    ]
  },
  {
    slug: "andaman",
    name: "Andaman Islands",
    eyebrow: "Tropical Island Sanctuary",
    heroImage: "/images/destinations/andaman.jpg",
    title: "Andaman Islands Getaways",
    tagline: "Pristine coral reefs and crystalline waters await your discovery",
    description: "Explore the pristine coral reefs, historical echoes, and crystalline waters of India's most breathtaking tropical sanctuary.",
    planButtonText: "Begin Your Andaman Escape",
    testimonials: [
      {
        name: "Vikram Sen",
        initials: "VS",
        location: "Mumbai",
        rating: 5,
        text: "The island-hopping cruise transfers were completely seamless. Neil Island and Havelock beach cottages were beautiful. Snorkeling at Elephant Beach was a highlight!"
      },
      {
        name: "Pooja & Amit Sharma",
        initials: "PA",
        location: "Delhi",
        rating: 5,
        text: "Amazing honeymoon arrangement. Taj Exotica Havelock stay was gorgeous. The private speedboat tour of nearby beaches was perfect. Highly recommend Nithyeshwar Tours!"
      },
      {
        name: "Saurabh Mehta",
        initials: "SM",
        location: "Pune",
        rating: 5,
        text: "The logistics were handled very professionally. Our coordinator in Port Blair met us at the airport and guided us at every stage. We had a stress-free trip."
      },
      {
        name: "Dr. Nivedita Sen",
        initials: "NS",
        location: "Kolkata",
        rating: 5,
        text: "Radhanagar beach is a piece of heaven. Thanks to Nithyeshwar team for recommending Neil Island which was so quiet and peaceful. Stays were very clean."
      },
      {
        name: "David Harrison",
        initials: "DH",
        location: "London",
        rating: 5,
        text: "Outstanding scuba diving guide. As a beginner, I felt very safe and comfortable. The coral reefs are absolutely pristine. Exceptional service."
      },
      {
        name: "Karan Johar",
        initials: "KJ",
        location: "Mumbai",
        rating: 5,
        text: "Excellent private cruise transfers. No waiting in lines, everything was pre-booked. Hotels had excellent sea views and the local seafood was delicious."
      },
      {
        name: "Meenakshi Das",
        initials: "MD",
        location: "Guwahati",
        rating: 5,
        text: "Our family vacation was perfect. The kids loved the glass bottom boat ride at Elephant beach and the Light & Sound show at Cellular jail was very educational."
      }
    ],
    faqs: [
      {
        q: "How are inter-island transfers managed in the Andaman?",
        a: "We book premium classes on private high-speed catamarans like Makruzz or Nautika for all island routes (Port Blair to Havelock to Neil). Tickets are shared beforehand, and local coordinators facilitate boarding."
      },
      {
        q: "What water sports can be pre-booked in Havelock?",
        a: "We coordinate introductory scuba diving sessions, sea-walking, and snorkeling at Elephant Beach. All activities are guided by PADI-certified professionals."
      },
      {
        q: "Is mobile network coverage reliable in Havelock and Neil islands?",
        a: "Airtel and BSNL offer decent coverage, but internet speeds are limited. We suggest keeping emergency offline copies of documents, although our guides handle all ground logistics."
      },
      {
        q: "What is the best season to plan an Andaman vacation?",
        a: "The best time to visit is between October and May, when the weather is pleasant and water activities are open. Monsoon months (June to September) bring heavy rains and rough seas."
      },
      {
        q: "Do Indian tourists need a passport or permit to visit Andaman?",
        a: "No passport or visa is required for Indian nationals. However, certain tribal areas are strictly restricted, and permits for places like Red Skin or Jolly Buoy islands are arranged by us."
      },
      {
        q: "Is Andaman suitable for senior citizens?",
        a: "Yes. While water sports are optional, seniors can enjoy beach walks, historical tours, light cruises, and private vehicle sightseeing. We prioritize lower deck seating on ferries."
      },
      {
        q: "What are the rules regarding photography at the Cellular Jail?",
        a: "Photography is allowed in the jail premises. A minimal camera fee is applicable. Video recording inside the museum galleries is prohibited."
      },
      {
        q: "What dining options are available on the islands?",
        a: "Resorts serve multi-cuisine food including fresh seafood, North/South Indian, and continental dishes. Ponda and Port Blair have pure vegetarian restaurants too."
      }
    ],
    attractions: [
      {
        name: "Historical Cellular Jail",
        location: "Port Blair",
        description: "Standing as a solemn monument to India's freedom struggle, the Cellular Jail (Kala Pani) in Port Blair tells a story of unmatched courage and sacrifice. Built by the British in 1906, the multi-winged panopticon structure was designed to isolate political prisoners and subject them to extreme hardships. Today, visitors walk through the historic corridors, visit the cells of legendary revolutionaries like Veer Savarkar, and watch the moving evening Light and Sound show. The national memorial serves as a powerful reminder of the high price paid for the nation's independence.",
        img: "/images/destinations/cellular-jail-port-blair.png"
      },
      {
        name: "Radhanagar Beach",
        location: "Havelock Island",
        description: "Stretching along the coast of Havelock Island, Radhanagar Beach (Beach No. 7) is internationally recognized as one of the most beautiful beaches in Asia. The pristine crescent of powder-soft white sand is framed by a dense canopy of ancient tropical padauk trees and the sparkling, turquoise waters of the Andaman Sea. It is a perfect sanctuary for travelers seeking peace, offering gentle waves ideal for swimming, tranquil sunbathing spots, and dramatic, glowing tropical sunsets that paint the sky. The beach represents Havelock's raw, untouched natural beauty.",
        img: "/images/destinations/radhanagar-beach.png"
      },
      {
        name: "Natural Bridge",
        location: "Neil Island",
        description: "A striking geological monument on Neil Island (Shaheed Dweep), the Natural Bridge is a majestic archway carved by centuries of ocean waves from giant rock formations. Accessible only during low tide, the rocky shore leading to the bridge is a thriving ecosystem filled with shallow rock pools, living corals, sea anemones, starfish, and tiny colorful reef fish. Walk along the reef with a local guide to observe the marine life up close and stand under the massive natural arch. The bridge is a prime showcase of Andaman's dynamic geology and biological richness.",
        img: "/images/india-states/Natural-Bridge.png"
      }
    ]
  },
  {
    slug: "odisha",
    name: "Odisha",
    eyebrow: "Where Art Meets Devotion",
    heroImage: "/images/destinations/odisha.jpg",
    title: "Odisha Spiritual Heritage",
    tagline: "Ancient temples, classical dance, and sacred artistry by the Bay of Bengal",
    description: "Odisha is located in the eastern region of India. The state shares its borders with West Bengal on the north-east, Jharkhand on the north, Andhra Pradesh on the south, Chhattisgarh on the west, and the Bay of Bengal on the east. Odisha has emerged as a key state with regard to the mineral and metal-based industries. In 2019-20, Odisha contributed the largest share (29%) of mineral production (by value) in India. Value of minerals produced in the state reached Rs. 22.10 billion (US$ 305 million) in 2019-20. It is the first state in India to have undertaken reform and restructuring initiatives in the power sector. As of February 2021, Odisha accounted for a total installed power generation capacity of 8,594.47 megawatts (MW). Odisha has a well-developed social, physical, and industrial infrastructure, and the state government has undertaken several infrastructural projects to further promote overall development. The state's infrastructure includes well-connected road and rail networks, airports, ports, power, and telecom.",
    planButtonText: "Plan Your Odisha Pilgrimage",
    testimonials: [
      {
        name: "Devendra Mohapatra",
        initials: "DM",
        location: "Bhubaneswar",
        rating: 5,
        text: "Our Jagannath Darshan was organized beautifully. The local panda guide helped us walk inside without any hassle and arrange Mahaprasad dining."
      },
      {
        name: "Rajesh Kulkarni",
        initials: "RK",
        location: "Pune",
        rating: 5,
        text: "The Konark Sun Temple guide was outstanding, explaining every carved wheel detail. Accommodations in Puri near the sea were excellent."
      },
      {
        name: "Siddharth Patnaik",
        initials: "SP",
        location: "Cuttack",
        rating: 5,
        text: "We had a peaceful yatra. The Raghurajpur artist village visit was highly inspiring. The kids bought beautiful Pattachitra paintings."
      },
      {
        name: "Nirmala Mishra",
        initials: "NM",
        location: "Kolkata",
        rating: 5,
        text: "Very well coordinated. The vehicle was comfortable and the driver drove very carefully on the marine drive highway. Stays were clean."
      },
      {
        name: "Amitabh Sen",
        initials: "AS",
        location: "Ranchi",
        rating: 5,
        text: "Jagannath Temple Darshan was the highlight of my life. Nithyeshwar Tours team managed the VIP entry so smoothly. Grateful for the service."
      },
      {
        name: "Padmini Rout",
        initials: "PR",
        location: "Bhubaneswar",
        rating: 5,
        text: "Excellent satvik meals. The taste of Mahaprasad was divine. The hotels chosen were very close to the temple, which was convenient."
      },
      {
        name: "Dr. Vinay Goel",
        initials: "VG",
        location: "Delhi",
        rating: 5,
        text: "Outstanding guide at Konark temple. His knowledge of the astronomical alignments was very impressive. Professional service throughout."
      }
    ],
    faqs: [
      {
        q: "Are non-Hindus allowed inside the Jagannath Temple in Puri?",
        a: "Traditional rules restrict entry to the inner sanctum of the main temple to orthodox Hindus. However, our guides coordinate viewing of the temple from adjacent vantage points for international pilgrims."
      },
      {
        q: "What is the significance of Mahaprasad in Puri?",
        a: "The Mahaprasad is the sacred food offered to Lord Jagannath, cooked in earthen pots over firewood inside the temple kitchen (Ananda Bazar). We arrange authentic dining of this sacred offering."
      },
      {
        q: "What is the best time to visit Puri and Konark?",
        a: "The winter season from October to March is the best time to visit, as the weather is pleasant for sightseeing. The Rath Yatra during June/July is also highly popular but very crowded."
      },
      {
        q: "What is the temple dress code in Odisha?",
        a: "Conservative attire is recommended. Traditional clothing like dhoti/pyjama for men and saree/salwar suit for women is preferred. Avoid wearing shorts, lungis, or sleeveless shirts."
      },
      {
        q: "Can we see dolphins in Chilika Lake during the tour?",
        a: "Yes. Our tour packages include a private boat trip at Chilika Lake (Satapada) which is famous for spotting rare Irrawaddy dolphins and visiting the bird sanctuary."
      },
      {
        q: "Are photography devices allowed inside the Jagannath Temple?",
        a: "No. Mobile phones, cameras, leather items, and electronic gadgets are strictly prohibited inside the Jagannath Temple premises. Locker facilities are available outside."
      },
      {
        q: "Is local transport readily available during the tour?",
        a: "Yes. We provide dedicated private air-conditioned cars for the entire itinerary, ensuring smooth travel between Bhubaneswar, Puri, and Konark."
      },
      {
        q: "Is this tour package suitable for elderly travellers?",
        a: "Yes. We arrange special darshan assistance, comfortable ground transportation, and choose hotels with elevator access and accessible rooms."
      }
    ],
    attractions: [
      {
        name: "Jagannath Temple",
        location: "Puri",
        description: "Dating back to the 12th century, the Shree Jagannath Temple in Puri is one of the four cardinal Char Dham pilgrimage sites of India. Dedicated to Lord Jagannath (a manifestation of Lord Krishna) alongside his siblings Balabhadra and Subhadra, the temple is famous for its unique wooden deities, which are ritually replaced every twelve or nineteen years. The temple kitchen is the largest in the world, preparing holy Mahaprasad daily in clay pots stacked over wood fires. The annual Rath Yatra (Chariot Festival), where the giant chariots are pulled by millions of ecstatic devotees, represents a grand celebration of absolute spiritual surrender.",
        img: "/images/india-states/odisha-v3.png"
      },
      {
        name: "Konark Sun Temple",
        location: "Konark",
        description: "Conceived as a colossal stone chariot for Surya, the Sun God, the Konark Sun Temple is a UNESCO World Heritage site and a peak achievement of Kalinga architecture. Built in the 13th century, the temple features 24 beautifully carved stone wheels, serving as sundials that tell the time with precision down to minutes, pulled by seven running stone horses. The walls are adorned with rich reliefs depicting mythological scenes, dancers, musicians, animals, and courtly life. The geometric alignment of the temple captures the first rays of the morning sun, filling visitors with architectural and cosmic awe.",
        img: "/images/india-states/konark-sun-temple.png"
      },
      {
        name: "Lingaraj Temple",
        location: "Bhubaneswar",
        description: "Dominating the skyline of Bhubaneswar, the 11th-century Lingaraj Temple is a spectacular tribute to Kalinga architectural genius. Dedicated to Lord Shiva worshipped as Harihara (a combined form of Shiva and Vishnu), the temple features a towering 180-foot deula (spire) carved from sandstone. The sanctuary is surrounded by dozens of smaller shrines within a spacious stone-walled courtyard. The peaceful, spiritual vibrations of the temple are heightened during Maha Shivratri, when lakhs of oil lamps are lit by pilgrims, creating a sea of light and chanting that echoes through the night.",
        img: "/images/india-states/lingaraj.temple.jpg"
      }
    ]
  },
  {
    slug: "uttar-pradesh",
    name: "Uttar Pradesh",
    eyebrow: "The Cradle of Dharma",
    heroImage: "/images/destinations/uttar-pradesh.jpg",
    title: "Uttar Pradesh Pilgrimages",
    description: "Uttar Pradesh is a favored tourist destination in India with Taj Mahal, one of the eight Wonders of the World, located in Agra. In 2019, domestic tourist arrivals in the state reached 535.8 million. Foreign tourist arrivals crossed over 4.74 million. As of February 2020, Uttar Pradesh had 20 notified, 13 operational Special Economic Zone (SEZs) and 23 formally, approved SEZs. The state offers a wide range of subsidies, policy and fiscal incentives as well as assistance for businesses under the Industrial and Service Sector Investment Policy. The new Uttar Pradesh Civil Aviation Promotion Policy 2017 was brought to promote investment and trade in Uttar Pradesh and to promote tourism while increased road connectivity along with air connectivity will create more employment avenues.",
    planButtonText: "Begin Your UP Yatra",
    testimonials: [
      {
        name: "Harish Gupta",
        initials: "HG",
        location: "Delhi",
        rating: 5,
        text: "The new Kashi Vishwanath Corridor is magnificent. Having VIP entries saved hours. The Ganga Aarti private boat ride in Varanasi is an unforgettable memory."
      },
      {
        name: "Suman & Ved Prakash",
        initials: "SP",
        location: "Noida",
        rating: 5,
        text: "Perfect trip to Ayodhya Ram Mandir. Saryu Aarti and Hanuman Garhi were visited easily. Our guide was incredibly polite and knowledgeable."
      },
      {
        name: "Aarti Bajpai",
        initials: "AB",
        location: "Kanpur",
        rating: 5,
        text: "Vrindavan Prem Mandir light show was beautiful. The hotel accommodations were excellent and very close to the temples. Great planning."
      },
      {
        name: "Madan Mohan",
        initials: "MM",
        location: "Varanasi",
        rating: 5,
        text: "Subah-e-Banaras boat tour was very peaceful. The driver was highly professional and knew all the local routes and food spots. Highly recommended."
      },
      {
        name: "Sneha Saxena",
        initials: "SS",
        location: "Lucknow",
        rating: 5,
        text: "Outstanding service. Nithyeshwar Tours took care of our VIP pass at Ram Mandir. The guide explained the history beautifully."
      },
      {
        name: "Rajiv Malhotra",
        initials: "RM",
        location: "New York",
        rating: 5,
        text: "Highly recommended for NRI families. Safe transport, luxurious stays, clean satvik dining, and very respectful local guides. Simply perfect."
      },
      {
        name: "Gauri Shankar",
        initials: "GS",
        location: "Allahabad",
        rating: 5,
        text: "The Triveni Sangam holy bath arrangement was seamless. The private boat was clean and the priest guided the rituals with great detail."
      }
    ],
    faqs: [
      {
        q: "How is the Ganga Aarti viewed in Varanasi?",
        a: "We book private, comfortable motorboats that position directly in front of Dashashwamedh Ghat, allowing you to watch the elaborate lamps ritual from the river without crowds."
      },
      {
        q: "What is the registration process for Ayodhya Ram Mandir entry?",
        a: "While entry is open, VIP / Special pass slots are booked online. We collect ID proofs from pilgrims in advance to secure passes and minimize wait times."
      },
      {
        q: "What is the best time to plan a yatra in Uttar Pradesh?",
        a: "The cooler months from October to March are ideal for traveling across Varanasi, Ayodhya, and Mathura. Summer months (April to June) are very hot."
      },
      {
        q: "Are satvik dining facilities available in Varanasi and Vrindavan?",
        a: "Yes. Both cities are major vegetarian centers. We select premium restaurants that serve delicious, hygienic North Indian food prepared without onion or garlic."
      },
      {
        q: "What is the dress code for Kashi Vishwanath temple?",
        a: "Traditional Indian wear is recommended. Men should wear kurtas and pyjamas or dhotis. Women must wear sarees or salwar kameez. Western casuals like shorts are not allowed."
      },
      {
        q: "Is photography allowed at Varanasi Ghats and Ayodhya Mandir?",
        a: "Photography is allowed on the Varanasi Ghats. However, inside the Kashi Vishwanath sanctum and the Ram Janmabhoomi temple complex in Ayodhya, cameras and phones are strictly prohibited."
      },
      {
        q: "How are senior citizens accommodated during crowded temple runs?",
        a: "We organize VIP passes, minimize walking distances using golf carts (where available), and assign personal local guides to assist seniors during darshans."
      },
      {
        q: "What are the travel distances between Kashi, Ayodhya, and Prayagraj?",
        a: "Varanasi to Prayagraj is about 120 km (2.5 hours), and Prayagraj to Ayodhya is about 170 km (3.5 hours). We use high-speed national highways for comfort."
      }
    ],
    attractions: [
      {
        name: "Dashashwamedh Ghat",
        location: "Varanasi",
        description: "Dashashwamedh Ghat is the beating heart of Varanasi, the oldest living city in the world. According to Hindu mythology, Lord Brahma performed ten horse sacrifices (Dashashwamedh) here to welcome Lord Shiva. The ghat is most famous for the spectacular Ganga Aarti performed every evening, where young priests dressed in traditional attire swing large brass oil lamps in synchronized devotion to the sound of bells, conch shells, and Vedic chants. Watching this grand ritual from a private wooden boat on the river Ganges offers a deep, mystical glimpse into India's eternal spiritual heritage.",
        img: "/images/india-states/varanasi-ghats-photo.png"
      },
      {
        name: "Ram Janmabhoomi Mandir",
        location: "Ayodhya",
        description: "Standing on the banks of the sacred Saryu River in Ayodhya, the newly built Ram Janmabhoomi Mandir marks the birth site of Lord Rama, the ideal king. Constructed entirely of pink sandstone without the use of any iron or steel, the temple is an architectural wonder of the traditional North Indian Nagara style, featuring five pavilions and 392 beautifully carved pillars. Devotees travel from across the globe to offer prayers before the sacred child-deity, Ram Lalla. The atmosphere of Ayodhya is charged with bhajans, temple bells, and absolute spiritual joy, making it a pivotal pilgrimage destination.",
        img: "/images/india-states/ram-mandir-ayodhya.png"
      },
      {
        name: "Prem Mandir",
        location: "Vrindavan",
        description: "Dedicated to the divine love of Radha-Krishna and Ram-Sita, Vrindavan's Prem Mandir (Temple of Love) is a colossal monument constructed of pure white Italian Carrara marble. The temple walls are adorned with intricate, hand-carved panels showing major pastimes of Lord Krishna, such as the lifting of Govardhan Hill and the Jhulan Leela. As dusk falls, the temple is illuminated by a changing spectrum of colorful LED lights, creating a magical atmosphere. The musical fountain show, set to classical spiritual kirtans, draws thousands of devotees who sit together in peaceful contemplation.",
        img: "/images/india-states/prem-mandir-vrindavan.png"
      }
    ]
  },
  {
    slug: "madhya-pradesh",
    name: "Madhya Pradesh",
    eyebrow: "Heart of the Heritage",
    heroImage: "/images/destinations/madhya-pradesh.jpg",
    title: "Madhya Pradesh Holy Trails",
    description: "Madhya Pradesh is located in central India. The state is bound on the north by Uttar Pradesh, on the east by Chhattisgarh, on the south by Maharashtra, and on the west by Gujarat and Rajasthan. It is among the fastest-growing states in the country. Madhya Pradesh is rich in natural resources - fuel, minerals, agriculture, and biodiversity. It is also the only diamond-producing state in the country. Diamond production in the state stood at 38,437 carats in 2018-19. Madhya Pradesh offers distinctive monetary and strategy/policy incentives for organizations under the Industrial Promotion Policy-2014, and the State Government has selected TRIFAC for speedy approvals of clearances. The state has well-connected road and rail networks, airports, ports, power, and telecom.",
    planButtonText: "Begin Your MP Pilgrimage",
    testimonials: [
      {
        name: "Gopal Krishna",
        initials: "GK",
        location: "Indore",
        rating: 5,
        text: "Fabulous arrangements for Ujjain Bhasma Aarti. Being part of the early morning rituals was sublime. Omkareshwar boat ride was also beautiful."
      },
      {
        name: "Sanjay Agrawal",
        initials: "SA",
        location: "Bhopal",
        rating: 5,
        text: "The Mahakal Corridor is stunningly beautiful. Stays in Maheshwar overlooking the Narmada River were highly peaceful. Exceptional package."
      },
      {
        name: "Kalyani Joshi",
        initials: "KJ",
        location: "Pune",
        rating: 5,
        text: "Very well structured tour. The Ujjain guide was helpful and arranged our entry cards well in advance. Satvik food was delicious."
      },
      {
        name: "Dr. A. K. Dubey",
        initials: "AD",
        location: "Jabalpur",
        rating: 5,
        text: "Outstanding hospitality. The vehicle provided was clean and spacious, perfect for our family. The Maheshwari saree weaving tour was great."
      },
      {
        name: "Sunita Deshmukh",
        initials: "SD",
        location: "Nagpur",
        rating: 5,
        text: "The Omkareshwar temple parikrama was very spiritual. The boat trip was safe and clean. Highly recommend Nithyeshwar Tours for family trips."
      },
      {
        name: "Vikram Bundela",
        initials: "VB",
        location: "Gwalior",
        rating: 5,
        text: "The Orchha Ram Raja temple darshan was unique. Stays near the fort were beautiful and heritage-themed. Very good service."
      },
      {
        name: "Preeti Bhatnagar",
        initials: "PB",
        location: "Indore",
        rating: 5,
        text: "Excellent coordination. We had a wonderful Bhasma Aarti darshan at Ujjain without any queue issues. The local support was excellent."
      }
    ],
    faqs: [
      {
        q: "What are the rules for Ujjain Bhasma Aarti?",
        a: "Bhasma Aarti starts at 4:00 AM. Traditional dress is mandatory for entering the sanctum: dhotis for men and sarees for women. Slots must be booked weeks in advance."
      },
      {
        q: "How do we travel between Ujjain and Omkareshwar?",
        a: "We provide private air-conditioned vehicles (about 140 km, 3.5 hours) via Indore, ensuring comfortable highways travel."
      },
      {
        q: "What is the best season to plan a Madhya Pradesh yatra?",
        a: "The winter months from October to March are the best time to visit, as the weather is pleasant. Monsoon (July to September) is also scenic near the Narmada river."
      },
      {
        q: "Are satvik food options available near the Jyotirlingas?",
        a: "Yes. Ujjain and Omkareshwar have many pure vegetarian restaurants serving clean, traditional Malwa style satvik food."
      },
      {
        q: "Is photography permitted inside the Mahakaleshwar sanctum?",
        a: "No. Mobile phones, cameras, and leather items are strictly prohibited inside the inner sanctum of Mahakaleshwar and Omkareshwar temples."
      },
      {
        q: "How do we reach the Omkareshwar temple on the island?",
        a: "The temple can be reached by walking across the Mamleshwar suspension footbridge or by taking a short, scenic motorboat ride across the Narmada River."
      },
      {
        q: "What is the cultural significance of Maheshwar?",
        a: "Maheshwar is famous as the capital of the holiest queen, Ahilyabai Holkar. It is renowned for its handloom Maheshwari sarees and beautiful river ghats."
      },
      {
        q: "Is wheelchair support available at these temples?",
        a: "Yes. Wheelchairs and ramps are available at Ujjain Mahakaleshwar. At Omkareshwar, manual assistance is arranged for senior citizens."
      }
    ],
    attractions: [
      {
        name: "Mahakaleshwar Jyotirlinga",
        location: "Ujjain",
        description: "Located on the banks of the holy Shipra River in Ujjain, the Sri Mahakaleshwar Temple houses one of the twelve sacred Jyotirlingas of Lord Shiva. It is unique as a Dakshinamurthi shrine, with the deity facing south, representing the master of death and time (Mahakal). The temple is world-famous for its early morning Bhasma Aarti, where the deity is worshipped with sacred ash. The recently inaugurated Mahakal Lok Corridor features nearly 200 statues and murals illustrating tales from Shiva Purana, offering pilgrims an enriched, immersive walkthrough of ancient legends.",
        img: "/images/india-states/madhya-pradesh-photo.png"
      },
      {
        name: "Omkareshwar Mandir",
        location: "Narmada River",
        description: "Situated on Mandhata Island in the sacred Narmada River, the Omkareshwar Temple is dedicated to Lord Shiva as the Lord of Omkara. The island's geography naturally forms the sacred Hindu symbol 'Om'. Devotees cross the Narmada River via a modern suspension bridge or traditional wooden boats, experiencing beautiful views of river ghats and rocky cliffs. The temple is built in the traditional North Indian style with multi-tiered spires and beautifully carved pillars. Performing the parikrama around the island is considered highly auspicious, offering peace and scenic natural beauty.",
        img: "/images/india-states/Omkareshwar-Mandir.png"
      },
      {
        name: "Ahilya Fort",
        location: "Maheshwar",
        description: "Overlooking the tranquil waters of the Narmada River, the Ahilya Fort in Maheshwar is a monument to the legacy of the revered Queen Ahilyabai Holkar of the Maratha Empire. Built in the 18th century, the fort features elegant stone balconies, peaceful courtyards, and a grand flight of stone steps (ghats) leading down to the river. Visitors can observe local artisans weaving the famous Maheshwari silk-cotton sarees at the inside Rehwa Society. The fort's stone temples, chhatris (cenotaphs), and quiet riverfront offer a step back into a golden era of Maratha culture and spirituality.",
        img: "/images/india-states/maheshwar-ahilya-fort.png"
      }
    ]
  },
  {
    slug: "uttarakhand",
    name: "Uttarakhand",
    eyebrow: "Devbhoomi — Land of the Gods",
    heroImage: "/images/india-states/uttarakhand-hero.png",
    title: "Uttarakhand Himalayan Yatras",
    description: "Uttarakhand, formed on 9th November 2000 as the 27th State of India, is widely known as Devbhoomi (Land of the Gods). Nestled in the majestic Garhwal and Kumaon Himalayas, the state is naturally blessed with abundant glaciers, pristine rivers like the Ganga and Yamuna, and towering peaks. It is the sacred home of the ancient Chota Char Dham circuit comprising Yamunotri, Gangotri, Kedarnath, and Badrinath, attracting millions of spiritual seekers and nature lovers annually.",
    planButtonText: "Plan Your Himalayan Yatra",
    testimonials: [
      {
        name: "Aarti Devi",
        initials: "AD",
        location: "Dehradun",
        rating: 5,
        text: "The Char Dham helicopter route saved us days of trekking. The coordination at Kedarnath and Badrinath VIP darshans was seamless. Highly spiritual experience!"
      },
      {
        name: "Major Gen. S. P. Rawat",
        initials: "SR",
        location: "Dehradun",
        rating: 5,
        text: "Outstanding service. The helicopter arrangements were perfectly timed. The local guide supported my parents during the Kedarnath darshan beautifully."
      },
      {
        name: "Meenakshi Pant",
        initials: "MP",
        location: "Nainital",
        rating: 5,
        text: "Very professional yatra management. The hotels in Guptkashi and Badrinath were clean and comfortable. The satvik meals were fresh and delicious."
      },
      {
        name: "Rameshwar Prasad",
        initials: "RP",
        location: "Varanasi",
        rating: 5,
        text: "Grateful for the seamless organization. The driver was highly skilled in mountain driving, which gave us great peace of mind. Excellent trip."
      },
      {
        name: "Anuradha Sarin",
        initials: "AS",
        location: "Delhi",
        rating: 5,
        text: "A truly divine experience at Badrinath. The VIP entry passes saved us hours in the cold. Excellent service by Nithyeshwar Tours team."
      },
      {
        name: "Dr. K. C. Bhatt",
        initials: "KB",
        location: "Haridwar",
        rating: 5,
        text: "The Ganga Aarti VIP seats in Haridwar were arranged perfectly. The tour coordinator was always in touch. Highly recommend them."
      },
      {
        name: "Devendra Negi",
        initials: "DN",
        location: "Rishikesh",
        rating: 5,
        text: "Best travel agency for Char Dham. All registration and biometric processes were handled by them beforehand. Completely hassle-free."
      }
    ],
    faqs: [
      {
        q: "What registration is required for Char Dham Yatra?",
        a: "Biometric registration is mandatory for all pilgrims. We manage the official state portal registration for our guests beforehand."
      },
      {
        q: "How do we handle altitude acclimatization?",
        a: "We structure travel schedules with rest days at intermediate altitudes (like Guptkashi/Barkot) and keep oxygen cylinders in all our transport vehicles."
      },
      {
        q: "What is the best season for the Char Dham Yatra?",
        a: "The temples are open from May to October. May-June (pre-monsoon) and September-October (post-monsoon) are the ideal times. Monsoon months (July-August) should be avoided due to landslide risks."
      },
      {
        q: "Can we book helicopter services for Kedarnath?",
        a: "Yes. We coordinate helicopter bookings from Phata, Guptkashi, or Sirsi to Kedarnath. Since tickets are highly limited, they must be booked well in advance."
      },
      {
        q: "What clothing should we pack for the yatra?",
        a: "Heavy woollens, thermal wear, waterproof jackets, and sturdy walking shoes with good grip are essential, as temperatures in Kedarnath and Badrinath can drop to sub-zero."
      },
      {
        q: "Is the yatra suitable for children and senior citizens?",
        a: "Yes, but they must undergo a health checkup. For Kedarnath, seniors can use ponies, palkis (palanquins), or helicopter services to avoid the 16 km trek."
      },
      {
        q: "What are the photography rules at Kedarnath and Badrinath?",
        a: "Photography is permitted in the temple surrounding areas. However, carrying cameras, phones, and taking photos inside the sanctum is strictly prohibited."
      },
      {
        q: "What kind of food is served during the Himalayan yatra?",
        a: "We arrange fresh, warm, pure vegetarian satvik meals (North Indian and local dishes) at all stopover hotels, ensuring high hygiene standards."
      }
    ],
    attractions: [
      {
        name: "Kedarnath Temple",
        location: "Garhwal Himalayas",
        description: "Standing at an altitude of 3,583 metres against the backdrop of the towering, snow-clad Kedarnath peak, this 1,000-year-old temple is one of the most sacred shrines in Hinduism. Dedicated to Lord Shiva as the Lord of Kedar, it is a key site of the Chota Char Dham and the highest of the twelve Jyotirlingas. Built of massive grey stone slabs, the temple survived the devastating 2013 floods, which devotees believe was a miracle. The pilgrimage requires a scenic 16km trek from Gaurikund or a quick helicopter flight, rewarding pilgrims with unparalleled Himalayan beauty and spiritual energy.",
        img: "/images/india-states/kedarnath-temple.png"
      },
      {
        name: "Badrinath Temple",
        location: "Alaknanda Banks",
        description: "Nestled between the Nar and Narayana mountain ranges along the banks of the Alaknanda River, the Badrinath Temple is the sacred abode of Lord Vishnu. Worshipped here as Badrinarayan, the deity is carved from black Saligram stone and shown in a meditative posture. The temple features a brightly colored, Tibetan-influenced facade and hot sulfur springs (Tapt Kund) directly below, where pilgrims bathe before entry. As part of both the Chota and Bada Char Dham circuits, Badrinath stands as a peak of Himalayan devotion, open only six months a year due to winter snows.",
        img: "/images/india-states/badrinath-temple.png"
      },
      {
        name: "Har Ki Pauri",
        location: "Haridwar",
        description: "Har Ki Pauri (The Footsteps of the Lord) is a famous ghat on the banks of the Ganges in Haridwar, where the river leaves the mountains to enter the plains. According to Hindu mythology, this is where Lord Vishnu dropped a drop of nectar during the Samudra Manthan. The spot is marked by footprints carved on a stone wall. Every evening, the ghat comes alive with the Ganga Aarti, as priests wave large fire lamps and thousands of pilgrims float clay diyas down the fast-flowing river, creating a magical stream of light, music, and devotion.",
        img: "/images/india-states/har-ki-pauri.png"
      }
    ]
  },
  {
    slug: "gujarat",
    name: "Gujarat",
    eyebrow: "Shoreline of the Gods",
    heroImage: "/images/india-states/somnath-photo.png",
    title: "Gujarat Sacred Shrines",
    description: "Gujarat offers all that a national or international tourist looks for - a wide range of diverse destinations and attractions. In addition, strong logistic connectivity, excellent communication facilities, adequate health infrastructure, round the clock power supply even in the remotest area, safety and security and above all the hospitable nature of the people make Gujarat a prime destination in India. The varied landscape of Gujarat is a complete package in itself. Here, the White Desert of Kutch coexists with a long and beautiful coastline. The archaeological monuments from different eras go as far back as Harappan time in Dhola Veera and Lothal. Gujarat has ancient caves, stupas, monasteries, temples and monuments that exhibit the Indo-Sarcenic architectural style which blends elements of Islamic and Hindu architecture. The capital of Gujarat, Ahmedabad is India's first UNESCO accredited World Heritage City. Gujarat is also a delightful destination for the eco traveller. It is the abode of endangered wild life like the Asiatic Lion and Indian Wild Ass, not seen anywhere else in India. The state's living legacy is its rich heritage of handicraft skills that have thrived side by side with industrialisation. Embroidery, tie and dye, block printing, appliqué, beadwork, metalwork and many other tribal handicrafts are famous for their intricate design, colours and fine craftsmanship.",
    planButtonText: "Plan Your Gujarat Yatra",
    testimonials: [
      {
        name: "Manish Shah",
        initials: "MS",
        location: "Rajkot",
        rating: 5,
        text: "Our family had a wonderful darshan at Dwarkadhish and Somnath. The driver knew all the regional temples and custom lunch spots perfectly."
      },
      {
        name: "Jayesh Patel",
        initials: "JP",
        location: "Ahmedabad",
        rating: 5,
        text: "Excellent service. The Dwarka Bet Dwarka ferry coordination was very smooth. Stays near the coast were beautiful. Highly recommend."
      },
      {
        name: "Hansa Gada",
        initials: "HG",
        location: "Kutch",
        rating: 5,
        text: "The Modhera Sun Temple stepped well was a highlight. The guide explained the history beautifully. Hotels were clean and comfortable."
      },
      {
        name: "Ketan Mehta",
        initials: "KM",
        location: "Mumbai",
        rating: 5,
        text: "Outstanding pilgrimage. The VIP darshan passes saved us a lot of time. Nithyeshwar Tours team was highly professional throughout."
      },
      {
        name: "Sunita Shah",
        initials: "SS",
        location: "Baroda",
        rating: 5,
        text: "Pure satvik food was arranged everywhere. The vehicle and driver were professional. Dwarkadhish temple flag hosting was divine."
      },
      {
        name: "Narendra Vyas",
        initials: "NV",
        location: "Surat",
        rating: 5,
        text: "Very well managed. The Somnath Light & Sound show was spectacular. The hotels chosen had excellent sea views. Great experience."
      },
      {
        name: "Geeta Trivedi",
        initials: "GT",
        location: "Jamnagar",
        rating: 5,
        text: "A highly spiritual and comfortable trip. The Okha port ferry to Bet Dwarka was arranged safely. Will book with them again."
      }
    ],
    faqs: [
      {
        q: "What is the best way to travel from Dwarka to Somnath?",
        a: "The cities are connected by a scenic coastal highway (about 230 km, 4.5 hours drive). We arrange private AC cars for a smooth journey."
      },
      {
        q: "How do we reach Bet Dwarka?",
        a: "Bet Dwarka is an island 30km from Dwarka. We coordinate standard ferry rides or speedboats from Okha port for our guests."
      },
      {
        q: "What is the best season to visit Dwarka and Somnath?",
        a: "The winter months from October to March are the best time to visit, as the coastal climate is pleasant and ideal for temple tours."
      },
      {
        q: "What is the dress code for Gujarat temples?",
        a: "Devotees should wear traditional Indian clothes. Men kurtas/trousers and women sarees/salwar suit. Avoid shorts, western casuals, or tight clothes."
      },
      {
        q: "Are cameras allowed inside Dwarkadhish Temple?",
        a: "No. Cameras, mobile phones, and electronic gadgets are strictly prohibited inside the main Dwarkadhish temple. Lockers are available outside."
      },
      {
        q: "How are senior citizens supported during the yatra?",
        a: "We arrange VIP fast-track tickets, accessible transportation, and select hotels near the temple entrances to minimize walking distances."
      },
      {
        q: "What is the significance of the Dwarkadhish temple flag?",
        a: "The flag (dhwaja) is made of 52 yards of cloth representing the 52 gates of ancient Dwarka. It is hoisted five times daily and is a key ritual."
      },
      {
        q: "What dining options are available during the Gujarat tour?",
        a: "Gujarat is famous for vegetarian food. We select clean, premium Gujarati thali restaurants serving authentic, hygienic satvik vegetarian meals."
      }
    ],
    attractions: [
      {
        name: "Dwarkadhish Mandir",
        location: "Dwarka",
        description: "Standing on the banks of the Gomti River, the 2,500-year-old Dwarkadhish Temple (Jagat Mandir) is dedicated to Lord Krishna, worshipped here as the King of Dwarka. The five-storied limestone and sandstone structure is supported by 72 pillars, rising into a carved spire. A defining feature is the massive, 52-yard flag adorned with the sun and moon, which is replaced five times daily and visible from miles away. Entering through the Swarga Dwar (Gate of Heaven) and visiting the gold-adorned sanctum offers pilgrims a deep connection to the legends of Krishna's golden kingdom.",
        img: "/images/india-states/dwarkadhish-temple-v2.png"
      },
      {
        name: "Somnath Jyotirlinga",
        location: "Saurashtra",
        description: "Rising from the shores of the Arabian Sea in Saurashtra, the Somnath Temple is revered as the first among the twelve holy Jyotirlingas of Lord Shiva. Known as the 'Shrine Eternal', the temple has been destroyed and rebuilt seven times throughout history, standing today as a symbol of resilience. The current structure is built in the grand Chalukya style, featuring detailed stone carvings, a majestic spire, and a famous arrow pillar (Baana Stambha) pointing directly to the South Pole. The evening sound and light show set against the roaring waves of the sea offers a dramatic spiritual experience.",
        img: "/images/india-states/somnath-photo.png"
      },
      {
        name: "Sun Temple",
        location: "Modhera",
        description: "A masterpiece of the Solanki style of architecture, the 11th-century Sun Temple in Modhera is dedicated to the Sun God, Surya. Built near the Pushpavati River, the temple complex features three main parts: the assembly hall (Sabha Mandap), the inner sanctum (Garbhagriha), and the Surya Kund, a rectangular stepped water tank containing over a hundred small shrines. The temple was engineered so that during the equinoxes, the rising sun's rays would shine directly onto the gold image of the deity. The detailed stone carvings depicting deities, flora, fauna, and music make it a marvel of medieval craft.",
        img: "/images/india-states/modhera-sun-temple-v2.png"
      }
    ]
  },
  {
    slug: "rajasthan",
    name: "Rajasthan",
    eyebrow: "Regal Echoes & Holy Lakes",
    heroImage: "/images/india-states/rajasthan-photo.png",
    title: "Rajasthan Spiritual Splendor",
    description: "Rajasthan which is also known as the \"Land of Maharajas\" is the largest state of India, covering an area of about 342,239 sq. km. It comprises of 33 districts and its largest city is Jaipur, which is also its capital. The glory of the state is retained by its majestic palaces, forts and monuments. The vibrant culture and rich heritage of this princely state draw innumerable tourists from across the globe. Its major attractions include the ruins of Indus Valley Civilization, the oldest mountain range- Aravalli, a Jain pilgrimage site known as Dilwara Temples, Karni Mata Mandir, the only hill station of Rajasthan- Mount Abu, Keoladeo National Park, the Ranthambore National Park and the Sariska Tiger Reserve. Some of its major architectural wonders include Chittorgarh fort - the largest fort in Asia, Mehrangarh Fort at Jodhpur, Jaipur \"The Pink City\" houses a number of well known tourists spots which include Hawa Mahal (Palace of Winds), Lake Palace, City Palace, Amber Palace, Jantar Mantar, Umaid Bhawan in Jodhpur, Jaisalmer Fort in Jaisalmer and many more.",
    planButtonText: "Begin Your Royal Journey",
    testimonials: [
      {
        name: "Sharda Rathore",
        initials: "SR",
        location: "Jaipur",
        rating: 5,
        text: "The Dilwara temple guide was phenomenal. We loved the serene evenings at Pushkar Lake. A very well-structured tour."
      },
      {
        name: "Devendra Singh",
        initials: "DS",
        location: "Jodhpur",
        rating: 5,
        text: "The Nathdwara Shrinathji darshan was managed very well. Having private AC vehicles made the desert travel comfortable. Excellent hotels."
      },
      {
        name: "Meera Agarwal",
        initials: "MA",
        location: "Kota",
        rating: 5,
        text: "Excellent service. The Pushkar Brahma temple visit was peaceful and our guide helped us perform puja at the ghats properly. Clean hotels."
      },
      {
        name: "Rajesh Singhal",
        initials: "RS",
        location: "Delhi",
        rating: 5,
        text: "Dilwara temples are a marvel of art. The guide was knowledgeable and the Mount Abu resort was clean and comfortable. Outstanding trip."
      },
      {
        name: "Anjali Chouhan",
        initials: "AC",
        location: "Udaipur",
        rating: 5,
        text: "Highly professional coordination. The vehicle was clean and the driver drove very safely on mountain and desert roads. Top-notch service."
      },
      {
        name: "Harish Shekhawat",
        initials: "HS",
        location: "Bikaner",
        rating: 5,
        text: "Karni Mata Temple visit was a unique experience. All local guides were courteous. Stays were heritage and very comfortable."
      },
      {
        name: "Komal Vyas",
        initials: "KV",
        location: "Ajmer",
        rating: 5,
        text: "Our family yatra to Nathdwara and Pushkar was perfect. The satvik meals were highly hygienic. Thank you Nithyeshwar Tours team."
      }
    ],
    faqs: [
      {
        q: "What are the rules for visiting Dilwara Jain Temples?",
        a: "dilwara is a highly sacred Jain pilgrimage. Cameras, leather items, and mobile phones are strictly prohibited inside. Proper attire is required."
      },
      {
        q: "When is the Pushkar Camel Fair conducted?",
        a: "The Pushkar Mela happens in Kartik Month (usually November). We recommend booking 2-3 months in advance due to high demand."
      },
      {
        q: "What is the best time to visit Rajasthan?",
        a: "The winter months from October to March are the best time to visit, as the desert weather is pleasant and comfortable for sightseeing."
      },
      {
        q: "What is the dress code for traditional temples in Rajasthan?",
        a: "Decent, conservative clothing is required. Shirts and long trousers/dhotis for men, sarees or salwar suits for women. Avoid shorts and sleeveless tops."
      },
      {
        q: "Is photography allowed at Nathdwara Shrinathji Temple?",
        a: "No. Photography, video recording, and carrying electronic gadgets are strictly prohibited inside the main Nathdwara temple."
      },
      {
        q: "Are satvik food options available during the tour?",
        a: "Yes. Rajasthan has many pure vegetarian restaurants serving clean, hygienic Rajasthani and North Indian satvik food."
      },
      {
        q: "What local transportation is provided during the yatra?",
        a: "We provide private air-conditioned sedans or SUVs driven by experienced local drivers who know the regional routes perfectly."
      },
      {
        q: "Is this tour package suitable for senior citizens?",
        a: "Yes. We arrange VIP entries, accessible hotels, and personal guides to minimize walking distances and ensure seniors' safety."
      }
    ],
    attractions: [
      {
        name: "Brahma Mandir",
        location: "Pushkar",
        description: "Dating back to the 14th century, the Jagatpita Brahma Mandir in Pushkar is one of the very few temples in the world dedicated to Lord Brahma, the creator. The temple is built of stone blocks and marble, recognizable by its bright red spire and the symbol of a hamsa (goose) at the entrance. Located near the sacred Pushkar Lake, devotees take a holy dip in one of the lake's 52 bathing ghats before offering prayers at the temple. The sacred town of Pushkar is filled with the scent of incense, rose petals, and chanting, making it a peaceful oasis of desert devotion.",
        img: "/images/india-states/rajasthan-photo.png"
      },
      {
        name: "Dilwara Jain Temples",
        location: "Mount Abu",
        description: "Nestled in the lush hills of Mount Abu, the Dilwara Jain Temples are internationally renowned for their marble carvings. Built between the 11th and 13th centuries, the temple complex consists of five uniquely styled structures dedicated to Jain Tirthankaras. While the exteriors are simple, the interiors feature fine marble work, with ceilings, pillars, and arches carved like delicate lace and flower clusters. The quiet halls and cool marble corridors offer a serene environment for meditation, representing a peak of medieval Indian stone craftsmanship.",
        img: "/images/india-states/dilwara-jain-temple.png"
      },
      {
        name: "Karni Mata Temple",
        location: "Deshnok",
        description: "A unique spiritual landmark near Bikaner, the Karni Mata Temple is home to over 25,000 black rats, known as 'Kabbas', which are protected and worshipped. Devotees believe these rats are the reincarnated children of Karni Mata, a female Hindu warrior sage of the Charan caste. The temple features a marble facade and solid silver gates donated by Maharaja Ganga Singh. Spotting a white rat among the thousands of rats is considered highly auspicious, and pilgrims walk carefully barefoot through the temple corridors to offer milk and grains to the animals.",
        img: "/images/india-states/karni-mata-v2.png"
      }
    ]
  },
  {
    slug: "goa",
    name: "Goa",
    eyebrow: "Spiritual Serenity by the Sea",
    heroImage: "/images/india-states/goa-photo.png",
    title: "Goa Spiritual Heritage",
    description: "Goa, located on the western coast of India along the Arabian Sea, is renowned for its rich blend of traditional Indian culture and historic Portuguese heritage. Beyond its famous sun-kissed beaches, coastal fortresses like Aguada, and colonial-era churches, Goa offers a serene spiritual heritage, with ancient temples, lush spice plantations, and historic trading ports that date back to ancient and medieval dynasties.",
    planButtonText: "Plan Your Goa Pilgrimage",
    testimonials: [
      {
        name: "Shyam Sundar",
        initials: "SS",
        location: "Margao",
        rating: 5,
        text: "The Mangueshi temple and Shanta Durga temple tour was outstanding. The environment was peaceful, and Nithyeshwar Tours arranged it perfectly."
      },
      {
        name: "Lata Naik",
        initials: "LN",
        location: "Panaji",
        rating: 5,
        text: "Old Goa Basilica tour was highly educational and spiritual. The hotel near Ponda hills was very quiet and clean. Excellent."
      },
      {
        name: "Father Joseph D'Souza",
        initials: "JD",
        location: "Mumbai",
        rating: 5,
        text: "Very well coordinated tour of heritage churches. The local guide was very polite and shared excellent historical context. Highly recommend."
      },
      {
        name: "Ramesh Pai",
        initials: "RP",
        location: "Mangalore",
        rating: 5,
        text: "The satvik meals at the spice plantation were a unique experience. All temple entries were managed safely. Highly professional."
      },
      {
        name: "Sunil Shenoy",
        initials: "SS",
        location: "Bangalore",
        rating: 5,
        text: "Outstanding private car service. The driver was helpful and drove very carefully. Stays in South Goa beach cottages were very beautiful."
      },
      {
        name: "Asha Desai",
        initials: "AD",
        location: "Pune",
        rating: 5,
        text: "A highly peaceful temple yatra in Goa. The Mangueshi lamp lighting in the evening was a divine view. Thank you Nithyeshwar Tours."
      },
      {
        name: "Dr. Sandeep Prabhu",
        initials: "SP",
        location: "Kochi",
        rating: 5,
        text: "Very happy with the overall arrangements. Stays, food, guide, and vehicle were all top class. Perfect for family pilgrimages."
      }
    ],
    faqs: [
      {
        q: "What is the best way to travel around heritage sites in Goa?",
        a: "We arrange private air-conditioned vehicles for full-day tours covering both North Goa and South Goa temples/churches."
      },
      {
        q: "What is the best season to plan a Goa heritage pilgrimage?",
        a: "The winter months from November to February are ideal, as the weather is cool and pleasant for sightseeing. Monsoon (June to September) is also lush."
      },
      {
        q: "What is the dress code for Goa temples and churches?",
        a: "Modest attire is required. Sleeveless tops, shorts, beachwear, and short skirts are strictly prohibited. Shawls or dupattas are recommended."
      },
      {
        q: "Are pure vegetarian food options available in Goa?",
        a: "Yes. While coastal Goa is famous for seafood, the temple towns of Ponda and main cities have many pure vegetarian restaurants serving satvik food."
      },
      {
        q: "Is photography allowed inside the Basilica of Bom Jesus?",
        a: "Photography is allowed inside the main Basilica building, but visitors must maintain absolute silence. Flash photography and video recording are restricted."
      },
      {
        q: "How are senior citizens assisted during the heritage tour?",
        a: "We choose hotels with easy accessibility, schedule breaks, and guide seniors through flat walking paths at Old Goa and Ponda temples."
      },
      {
        q: "What is the historical significance of Mangueshi Temple?",
        a: "It is a 450-year-old temple dedicated to Lord Manguesh (Shiva), representing unique Goan temple architecture blending Hindu, Christian, and Muslim styles."
      },
      {
        q: "What local spice plantation tours are included?",
        a: "We include a guided tour of a historic organic spice plantation in Ponda, which includes traditional welcome rituals and an authentic satvik buffet lunch."
      }
    ],
    attractions: [
      {
        name: "Mangueshi Temple",
        location: "Priol",
        description: "One of the largest and most visited temples in Goa, dedicated to Lord Manguesh (Shiva). Features a unique blend of Hindu, Christian, and Muslim architectural influences, and a beautiful seven-story lamp tower.",
        img: "/images/india-states/mangueshi_temple_clean.png"
      },
      {
        name: "Basilica of Bom Jesus",
        location: "Old Goa",
        description: "A UNESCO World Heritage site housing the sacred relics of Saint Francis Xavier. Built in 1605, the basilica is an outstanding example of Baroque architecture and Christian devotion in India.",
        img: "/images/india-states/Basilica-of-Bom-Jesus.png"
      },
      {
        name: "Shanta Durga Temple",
        location: "Kavlem",
        description: "Dedicated to the Goddess of Peace who mediated between Vishnu and Shiva. The temple blends Indo-Portuguese style architecture with red pitched roofs and dome structures, set in lush hills.",
        img: "/images/india-states/Shanta-Durga-Temple.png"
      }
    ]
  },
  {
    slug: "karnataka",
    name: "Karnataka",
    eyebrow: "Empire of Ruins & Rituals",
    heroImage: "/images/india-states/hampi-photo.png",
    title: "Karnataka Sacred Kingdoms",
    description: "Karnataka, a South Indian State located along the Arabian Sea in its West, consists of Deccan Plateau and the Coastal Plains besides a few Islands. Its history dates back to pre-historic periods. In ancient period of history, it formed a part of vast Indian Empires of Nanda and Maurya. Later, native rulers ruled over in the region. Vast native Vijayanagar Empire with Hampi as its capital came up around 1550. Haider Ali and Tipu Sultan defeated kings of Mysore and shifted the capital to Srirangapatna. The British annexed the territory into its Empire till India got Independence in 1947. Karnataka locates archeological marvels at Hampi, Halebid, Gulbarga, Badami, Bidar, Bijapur, and Bangalore. Wildlife sanctuaries in Karnataka like Bandipur National Park are excellent. Famous Rivers of Karnataka of are Kalinadi, Gangavathi Bedti, Tadri, and the Sharavati with Jog Falls. Karnataka is known for 'Mysore silk' and its rich temple festivals.",
    planButtonText: "Plan Your Karnataka Journey",
    testimonials: [
      {
        name: "Kiran Kumar",
        initials: "KK",
        location: "Bangalore",
        rating: 5,
        text: "Our family trip to Hampi was highly spiritual and historically informative. The local guide was very experienced."
      },
      {
        name: "Shridhar Hegde",
        initials: "SH",
        location: "Sirsi",
        rating: 5,
        text: "Belur and Halebidu temple carvings are mind-blowing. The transport and hotels arranged were excellent. Great coordination."
      },
      {
        name: "Anasuya Dev",
        initials: "AD",
        location: "Mysore",
        rating: 5,
        text: "Perfect planning. The Shravanabelagola doli service was arranged on time for my parents. Very courteous staff."
      },
      {
        name: "Dr. Ramachandra Rao",
        initials: "RR",
        location: "Dharwad",
        rating: 5,
        text: "Outstanding thali meals. Hotels chosen near Hampi ruins had excellent heritage themes. Driver was highly skilled. A+ service."
      },
      {
        name: "Sowmya Murthy",
        initials: "SM",
        location: "Tumkur",
        rating: 5,
        text: "A truly divine experience at Virupaksha temple. The sunset view from Hemakuta hill was magical. Highly recommended."
      },
      {
        name: "Venkatraman Bhat",
        initials: "VB",
        location: "Udupi",
        rating: 5,
        text: "Nithyeshwar Tours provided excellent vegetarian food arrangements. Guide explained the Hoysala architecture beautifully."
      },
      {
        name: "Nikhil Gowda",
        initials: "NG",
        location: "Bangalore",
        rating: 5,
        text: "Best historical yatra. The vehicle provided was clean and spacious and the local guides were highly helpful. Highly recommend."
      }
    ],
    faqs: [
      {
        q: "Is walking support available at Shravanabelagola?",
        a: "Yes. Doli / palanquin services are available for senior citizens to reach the top of Vindhyagiri hill easily."
      },
      {
        q: "What is the best season to plan a Karnataka heritage tour?",
        a: "The cooler winter months from October to March are the best time to visit, especially for Hampi ruins where walking is required."
      },
      {
        q: "What is the dress code for temples in Karnataka?",
        a: "Modest traditional dress code is enforced. Men kurtas/dhoti and women sarees/salwar suit. Avoid shorts and sleeveless tops."
      },
      {
        q: "Are vegetarian dining facilities available during the Hampi tour?",
        a: "Yes. Hampi has excellent vegetarian local cafes. We coordinate clean and hygienic dining spots serving traditional South Indian food."
      },
      {
        q: "What is the distance between Bangalore, Belur, and Hampi?",
        a: "Bangalore to Hassan (Belur) is about 180 km (3.5 hours), and Hassan to Hampi is about 260 km (5.5 hours). We use comfortable private cabs."
      },
      {
        q: "Are cameras allowed inside the temples of Belur and Halebidu?",
        a: "Photography is allowed in the temple complex, but a minimal camera fee applies. Flash photography inside the inner sanctum is restricted."
      },
      {
        q: "Is Hampi suitable for elderly travellers?",
        a: "Yes, but it involves walking. We minimize walking using golf carts at the Vittala temple complex and hire local coordinators."
      },
      {
        q: "What is the significance of Virupaksha Temple?",
        a: "It is the oldest active Shiva temple in Hampi, which survived the destruction of the Vijayanagara Empire, featuring a grand gopuram."
      }
    ],
    attractions: [
      {
        name: "Virupaksha Temple",
        location: "Hampi",
        description: "The oldest active temple in Hampi, dedicated to Lord Shiva as Virupaksha. It features a grand 160-foot gateway tower and stands as the spiritual heart of the ruins of the Vijayanagara Empire.",
        img: "/images/india-states/Virupaksha-Temple.png"
      },
      {
        name: "Chennakeshava Temple",
        location: "Belur",
        description: "A 12th-century Hoysala temple renowned for its incredibly detailed stone carvings. Every square inch of the temple walls is adorned with sculptures of dancers, deities, and epic tales.",
        img: "/images/india-states/Chennakeshava-Temple.png"
      },
      {
        name: "Gommateshwara Statue",
        location: "Shravanabelagola",
        description: "A colossal 57-foot monolithic statue of Lord Bahubali, carved out of a single granite block in 981 AD. It is one of the most sacred Jain pilgrimage sites on Earth.",
        img: "/images/india-states/Gommateshwara-Statue-v1.png"
      }
    ]
  },
  {
    slug: "himachal-pradesh",
    name: "Himachal Pradesh",
    eyebrow: "Abode of Eternal Snow",
    heroImage: "/images/india-states/himachal-photo.png",
    title: "Himachal Valley of Gods",
    description: "Himachal Pradesh is located in the northern region of India. The state is surrounded by Jammu and Kashmir on the north, Punjab on the west and the south-west, Haryana on the south, Uttar Pradesh on the south-east, and China on the east. Himachal Pradesh has immense potential for hydropower as it is naturally blessed with abundant streams and rivers flowing down from towering mountains. Himachal Pradesh provides a stunning scenery of snow-capped peaks, verdant valleys, and ancient temples.",
    planButtonText: "Plan Your Himachal Yatra",
    testimonials: [
      {
        name: "Anoop Sharma",
        initials: "AS",
        location: "Shimla",
        rating: 5,
        text: "Hadimba Temple visit was so serene. Highly professional logistics by Nithyeshwar Tours team."
      },
      {
        name: "Ranjana Thakur",
        initials: "RT",
        location: "Manali",
        rating: 5,
        text: "Vashisht hot spring bath was highly refreshing. The hotel cottage had spectacular snow mountain views. Excellent planning."
      },
      {
        name: "Kunal Sen",
        initials: "KS",
        location: "Kolkata",
        rating: 5,
        text: "The Mcleodganj monastery tour was very peaceful. Stays, vehicle, food, and guide were all top class. Grateful for the service."
      },
      {
        name: "Dr. Sudeshna Roy",
        initials: "SR",
        location: "Chandigarh",
        rating: 5,
        text: "Outstanding private car service. The driver was highly skilled in mountain roads. The Jakhoo temple walk was great."
      },
      {
        name: "Devendra Sood",
        initials: "DS",
        location: "Shimla",
        rating: 5,
        text: "A highly spiritual and scenic trip. The Hadimba temple pagoda roof is a work of art. Stays were very clean and comfortable."
      },
      {
        name: "Anita Kapur",
        initials: "AK",
        location: "Delhi",
        rating: 5,
        text: "Very well coordinated. The Solang valley views and Mall Road walks were perfect. Thank you Nithyeshwar Tours."
      },
      {
        name: "Preeti Mahajan",
        initials: "PM",
        location: "Ludhiana",
        rating: 5,
        text: "Fabulous temple yatra in Himachal. Fresh, clean satvik meals were served daily. Our guide was very polite. Perfect."
      }
    ],
    faqs: [
      {
        q: "What is the best time to visit Dharamshala temples?",
        a: "March to June and September to November are highly recommended due to pleasant weather conditions."
      },
      {
        q: "What is the dress code for temples in Himachal?",
        a: "Modest clothing covering shoulders and knees is required. Woollens or jackets are needed due to the mountain climate."
      },
      {
        q: "Are natural hot springs in Vashisht safe for bathing?",
        a: "Yes. The springs are highly sacred and have separate, clean bathing areas for men and women. The sulfur water is believed to have skin healing properties."
      },
      {
        q: "How do we reach the Jakhoo Temple on the peak?",
        a: "Jakhoo temple is reachable by a short, steep 2 km walk from the Shimla Ridge, by local taxi, or by the popular ropeway cable car."
      },
      {
        q: "What photography rules apply at Hadimba Temple?",
        a: "Photography is allowed outside in the pine forest. Carrying phones and taking photos inside the wooden sanctum is restricted."
      },
      {
        q: "Are vegetarian meals easily available in Shimla and Manali?",
        a: "Yes. Both hill stations have many pure vegetarian restaurants serving fresh North Indian, local Himachali, and Gujarati food."
      },
      {
        q: "What local transport is provided for mountain travel?",
        a: "We provide private AC vehicles driven by professional hill-drivers who know the sharp mountain bends and local routes perfectly."
      },
      {
        q: "Is the yatra suitable for elderly travellers?",
        a: "Yes. While mountain altitude must be considered, we structure slow schedules, select hotels with heating, and prioritize ropeway/taxis."
      }
    ],
    attractions: [
      {
        name: "Hadimba Temple",
        location: "Manali",
        description: "An ancient wooden temple constructed in 1553, dedicated to Hadimba Devi, wife of Bhima. Surrounded by a dense cedar forest (Dhungri Van Vihar), it features a unique pagoda-style roof.",
        img: "/images/india-states/Hadimba-Temple.png"
      },
      {
        name: "Vashisht Hot Springs",
        location: "Vashisht Village",
        description: "Sacred natural sulfur hot springs believed to possess medicinal healing properties. Devotees visit the stone temple dedicated to Sage Vashisht before bathing.",
        img: "/images/india-states/vashisht_temple_clean.png"
      },
      {
        name: "Jakhoo Temple",
        location: "Shimla",
        description: "Situated on Shimla's highest peak at 2,455m, this ancient temple dedicated to Lord Hanuman features a colossal 108-foot orange statue visible from miles away.",
        img: "/images/india-states/jakhoo_temple_clean.png"
      }
    ]
  },
  {
    slug: "kashmir",
    name: "Kashmir",
    eyebrow: "Paradise on Earth",
    heroImage: "/images/india-states/kashmir-photo.png",
    title: "Kashmir Sacred Valleys",
    description: "The Union Territory of Jammu and Kashmir is a great tourist destination. Picturesque and enchanting, Kashmir is cradled high in the lofty green Himalayas and hailed all over the world for its incredible natural beauty. Surrounded by mountain peaks, lush green valleys, glistening lakes, temples and spectacular Mughal-era gardens, it has inspired poets through centuries. Kashmir is crisscrossed by chinar tree-lined roads and quaint wooden bridges; and is home to bustling bazaars, sufi shrines and forts. Add to this, the charms of flavourful Kashmiri cuisine and apples and walnuts from the lush orchards surrounding it.",
    planButtonText: "Plan Your Kashmir Pilgrimage",
    testimonials: [
      {
        name: "Shalini Dhar",
        initials: "SD",
        location: "Srinagar",
        rating: 5,
        text: "The Shankaracharya temple view of the valley was breath-taking. Perfect houseboat stay arrangements."
      },
      {
        name: "Rajendra Razdan",
        initials: "RR",
        location: "Jammu",
        rating: 5,
        text: "Outstanding Amarnath yatra coordination. Helicopter passes, registration, and medical checkups were managed so smoothly. Grateful."
      },
      {
        name: "Kavita Raina",
        initials: "KR",
        location: "Srinagar",
        rating: 5,
        text: "The Hazratbal shrine white marble architecture on Dal Lake was highly serene. Excellent hotel cottages in Pahalgam. Great."
      },
      {
        name: "Vijay Kaul",
        initials: "VK",
        location: "Delhi",
        rating: 5,
        text: "Highly recommended for families. Houseboat stay, shikara ride, saffron field tours were all handled perfectly by Nithyeshwar team."
      },
      {
        name: "Dr. Anil Tikoo",
        initials: "AT",
        location: "Pune",
        rating: 5,
        text: "Excellent private vehicle and driver. He knew the mountain routes well and took us to clean local vegetarian food spots. Great service."
      },
      {
        name: "Sunita Pandit",
        initials: "SP",
        location: "Bangalore",
        rating: 5,
        text: "Kashmir is truly paradise. Shankaracharya hill climb was peaceful and the sunset shikara ride was magical. Thank you."
      },
      {
        name: "Raman Kher",
        initials: "RK",
        location: "London",
        rating: 5,
        text: "Fabulous spiritual retreat. Professional guides, beautiful stays, and clean, delicious satvik dining. Highly satisfied."
      }
    ],
    faqs: [
      {
        q: "Is medical checkup needed for Shankaracharya temple hill climb?",
        a: "No, but visitors have to climb around 240 stone steps to reach the main sanctum. Handrails are provided."
      },
      {
        q: "What is the best season to plan a Kashmir pilgrimage?",
        a: "March to October is the best time for sightseeing and temple tours. Summer months are pleasant, while winter brings beautiful snow."
      },
      {
        q: "What is the dress code for Kashmir shrines and mosques?",
        a: "Conservative dress is required. Heads should be covered before entering Hazratbal Shrine. Avoid wearing shorts or sleeveless shirts."
      },
      {
        q: "How are helicopter tickets coordinated for Amarnath Cave?",
        a: "We pre-book helicopter seats from Baltal or Pahalgam to Panjtarni through the Shri Amarnathji Shrine Board (SASB) portal, handling all registrations."
      },
      {
        q: "Are vegetarian food options easily available in Srinagar?",
        a: "Yes. Srinagar has excellent pure vegetarian restaurants serving North Indian, Gujarati, and Jain meals. Houseboats serve custom satvik food."
      },
      {
        q: "What photography rules apply at Kashmir monuments?",
        a: "Photography is permitted in most tourist locations. Carrying electronic items and taking photos inside the Hazratbal inner sanctum is restricted."
      },
      {
        q: "Is the houseboat stay suitable for families?",
        a: "Yes. Our houseboats on Dal Lake are premium, luxurious, and family-friendly, containing carved wooden interiors and attached bathrooms."
      },
      {
        q: "What local transport is provided during the Kashmir tour?",
        a: "We provide private AC vehicles for road trips (Srinagar to Gulmarg/Pahalgam) and traditional wooden Shikara boats for lake transfers."
      }
    ],
    attractions: [
      {
        name: "Shankaracharya Temple",
        location: "Srinagar",
        description: "An ancient stone temple perched on Shankaracharya Hill at 1,000 feet, dedicated to Lord Shiva. It is believed to have been visited by Adi Shankara in the 9th century.",
        img: "/images/india-states/shankaracharya_temple_clean.png"
      },
      {
        name: "Hazratbal Shrine",
        location: "Srinagar",
        description: "A sacred white marble mosque holding a relic believed to be a hair of the Prophet Muhammad. Stands beautifully on the western shores of Dal Lake.",
        img: "/images/india-states/hazratbal_shrine_clean.png"
      },
      {
        name: "Amarnath Cave",
        location: "Pahalgam Valley",
        description: "A holy cave situated at 3,888m in the glacier valleys, where an ice Shiva lingam naturally forms every year. Visited by lakhs during summer.",
        img: "/images/india-states/amarnath_cave_clean.png"
      }
    ]
  }
];

// ================= MOCK INDIA PACKAGES =================
export const MOCK_INDIA_PACKAGES: Package[] = [
  // ================= TAMIL NADU =================
  {
    id: 101,
    documentId: "tn-01",
    slug: "dravidian-temple-triangle",
    code: "TN 01",
    title: "Dravidian Temple Triangle",
    subtitle: "Sacred immersion through Chennai, Kanchipuram, and Mahabalipuram.",
    destination: "tamil-nadu",
    category: "pilgrimage",
    state: "Tamil Nadu",
    price: 18500,
    currency: "INR",
    duration: "4 Nights / 5 Days",
    groupSize: "2-8 Persons",
    availability: "Every Week",
    coverImage: makeImage("/images/india-states/brihadeeswarar_temple.png", "Dravidian Temples"),
    galleryImages: [
      makeImage("/images/destinations/tamil-nadu.jpg", "Rameswaram Temple"),
      makeImage("/images/pilgrimage/tirupati.jpg", "Tirupati Balaji"),
    ],
    description: "Journey through the cradle of Dravidian temple architecture. This carefully curated tour brings you to the sacred shore temples of Mahabalipuram, the silk city of Kanchipuram housing thousands of historic shrines, and the vibrant temples of Chennai.",
    highlights: [
      "VIP Entry at Ekambareswarar Temple in Kanchipuram",
      "Witness sunset over the Shore Temple at Mahabalipuram",
      "Guided tour of the ancient Kailasanathar Temple",
      "Traditional satvik dining at renowned heritage spots",
    ],
    itinerary: [
      { id: 1, day: 1, title: "Arrival in Chennai & Temple Tour", description: "Arrive in Chennai. Check into your hotel. In the afternoon, visit the historic Kapaleeshwarar Temple in Mylapore and Parthasarathy Temple in Triplicane." },
      { id: 2, day: 2, title: "Chennai to Kanchipuram", description: "Drive to Kanchipuram, the City of Thousand Temples. Visit Ekambareswarar, Varadharaja Perumal, and Kamakshi Amman temples. Overnight in Kanchipuram." },
      { id: 3, day: 3, title: "Kanchipuram to Mahabalipuram", description: "Travel to Mahabalipuram. Explore the Five Rathas, Arjuna's Penance, and Shore Temple. Enjoy the ocean breeze and heritage walk." },
      { id: 4, day: 4, title: "Mahabalipuram to Chennai via Kovalam", description: "Visit the scenic spots en route back to Chennai. Attend an evening spiritual session or explore local handloom silk centers." },
      { id: 5, day: 5, title: "Departure from Chennai", description: "Free time for shopping. Transfer to the Chennai Airport or Railway station for your onward journey." },
    ],
    testimonials: mockTestimonials,
    isFeatured: true,
    publishedAt: new Date().toISOString(),
  },
  {
    id: 102,
    documentId: "tn-02",
    slug: "southernmost-grace",
    code: "TN 02",
    title: "Southernmost Grace",
    subtitle: "Madurai, Rameswaram, and Kanyakumari spiritual circuit.",
    destination: "tamil-nadu",
    category: "pilgrimage",
    state: "Tamil Nadu",
    price: 14800,
    currency: "INR",
    duration: "6 Nights / 7 Days",
    groupSize: "4-12 Persons",
    availability: "Bi-Weekly",
    coverImage: makeImage("/images/destinations/ramanathaswamy-corridor.png", "Rameswaram Corridor"),
    galleryImages: [
      makeImage("/images/india-states/brihadeeswarar_temple.png", "Madurai Gopuram"),
      makeImage("/images/pilgrimage/tirupati.jpg", "Tirupati Balaji"),
    ],
    description: "Travel to the absolute southern tip of the Indian peninsula. Seek blessings from Goddess Meenakshi in Madurai, perform the sacred bathing rituals at Rameswaram, and stand at the confluence of three oceans in Kanyakumari.",
    highlights: [
      "Special Entry passes for Madurai Meenakshi Amman Temple",
      "Mani Darshan and 22 Wells Holy Bathing ritual in Rameswaram",
      "Visit Vivekananda Rock Memorial via ferry in Kanyakumari",
      "Private AC transport and dedicated spiritual guides",
    ],
    itinerary: [
      { id: 1, day: 1, title: "Arrival in Madurai", description: "Arrive in Madurai. Check in to your hotel and prepare for the evening tour of Meenakshi Amman Temple and Thirumalai Nayakkar Palace." },
      { id: 2, day: 2, title: "Madurai to Rameswaram", description: "Drive to the holy island of Rameswaram crossing the scenic Pamban Bridge. Check in and attend the evening temple rituals." },
      { id: 3, day: 3, title: "Spiritual Rameswaram & Dhanushkodi", description: "Perform the early morning Spatika Linga Darshan and bathe in the 22 Kundas. Afternoon trip to Dhanushkodi, the ghost town where Rama built the Rama Setu." },
      { id: 4, day: 4, title: "Rameswaram to Kanyakumari", description: "Drive to Kanyakumari. Check in to the hotel and witness the spectacular sunset over the Triveni Sangam." },
      { id: 5, day: 5, title: "Kanyakumari Sightseeing", description: "Visit Vivekananda Rock Memorial, Thiruvalluvar Statue, and Kumari Amman Temple. Watch sunset and sunrise from the terrace." },
      { id: 6, day: 6, title: "Kanyakumari to Madurai Return", description: "Drive back to Madurai. Optional visit to the Alagar Kovil temple nestled in the hills." },
      { id: 7, day: 7, title: "Departure from Madurai", description: "Transfer to airport/railway station for departure." },
    ],
    testimonials: mockTestimonials,
    isFeatured: true,
    publishedAt: new Date().toISOString(),
  },
  {
    id: 103,
    documentId: "tn-03",
    slug: "pancha-bhuta-stalams",
    code: "TN 03",
    title: "Pancha Bhuta Stalams",
    subtitle: "The Five Sacred Shiva Temples representing the Elements of Nature.",
    destination: "tamil-nadu",
    category: "pilgrimage",
    state: "Tamil Nadu",
    price: 22000,
    currency: "INR",
    duration: "8 Nights / 9 Days",
    groupSize: "2-6 Persons",
    availability: "Monthly",
    coverImage: makeImage("/images/destinations/tamil-nadu.jpg", "Shiva Temples"),
    galleryImages: [
      makeImage("/images/destinations/tamil-nadu.jpg", "Rameswaram"),
    ],
    description: "A profound spiritual journey covering the five temples dedicated to Lord Shiva, each representing one of the five elements: Earth (Kanchipuram), Water (Trichy), Fire (Tiruvannamalai), Air (Kalahasti), and Ether (Chidambaram).",
    highlights: [
      "Special Abhishekam tickets at Chidambaram Natarajar Temple",
      "Pradosham puja attendance at Tiruvannamalai",
      "Rahu Ketu Puja arrangement at Sri Kalahasti",
      "Certified Vedic guides detailing spiritual and astronomical history",
    ],
    itinerary: [
      { id: 1, day: 1, title: "Arrival in Chennai & Drive to Sri Kalahasti", description: "Arrive in Chennai. Drive to Sri Kalahasti (Air Stalam). Complete Rahu Ketu pujas. Overnight in Kalahasti." },
      { id: 2, day: 2, title: "Kalahasti to Kanchipuram", description: "Drive to Kanchipuram (Earth Stalam) and visit Ekambareswarar Temple. Overnight in Kanchi." },
      { id: 3, day: 3, title: "Kanchipuram to Tiruvannamalai", description: "Drive to Tiruvannamalai (Fire Stalam). Visit Arunachaleswarar Temple at the foot of Annamalai Hill." },
      { id: 4, day: 4, title: "Giri Pradakshina at Tiruvannamalai", description: "Perform the early morning Giri Pradakshina walk around the sacred hill. Meditation at Ramana Ashram." },
      { id: 5, day: 5, title: "Tiruvannamalai to Chidambaram", description: "Drive to Chidambaram (Ether/Space Stalam). Worship Lord Nataraja in the ancient golden-roofed sanctum." },
      { id: 6, day: 6, title: "Chidambaram to Trichy", description: "Drive to Trichy and visit Jambukeswarar Temple in Thiruvanaikaval (Water Stalam). Overnight in Trichy." },
      { id: 7, day: 7, title: "Srirangam Temple Visit", description: "Explore Srirangam Ranganathaswamy Temple, the largest active Hindu temple complex. Overnight in Trichy." },
      { id: 8, day: 8, title: "Trichy to Chennai Return", description: "Drive back to Chennai. Rest and relax at the hotel." },
      { id: 9, day: 9, title: "Departure", description: "Airport/railway station drop-off." },
    ],
    testimonials: mockTestimonials,
    isFeatured: false,
    publishedAt: new Date().toISOString(),
  },
  {
    id: 104,
    documentId: "tn-04",
    slug: "grand-southern-circuit",
    code: "TN 04",
    title: "Grand Southern Circuit",
    subtitle: "Complete South Indian odyssey from Tirupati to Madurai.",
    destination: "tamil-nadu",
    category: "pilgrimage",
    state: "Tamil Nadu",
    price: 32500,
    currency: "INR",
    duration: "11 Nights / 12 Days",
    groupSize: "2-10 Persons",
    availability: "Bi-Weekly",
    coverImage: makeImage("/images/pilgrimage/tirupati.jpg", "Tirupati Balaji Temple"),
    galleryImages: [
      makeImage("/images/india-states/tamil-nadu-v4.png", "Brihadeeswarar Temple"),
      makeImage("/images/destinations/tamil-nadu.jpg", "Rameswaram"),
    ],
    description: "The ultimate South India temple experience. Begins with the celestial darshan of Lord Venkateswara at Tirupati, continuing through the Chola temples of Tanjore, the sacred waters of Rameswaram, and the grand gopurams of Madurai.",
    highlights: [
      "Confirmed Rs. 300 Special Entry tickets for Tirupati Balaji",
      "UNESCO World Heritage walk at Tanjore Brihadeeswarar Temple",
      "Stay in premium 4-star/heritage accommodations",
      "Comprehensive airport/station transfers and premium vehicle",
    ],
    itinerary: [
      { id: 1, day: 1, title: "Arrival in Chennai & Transfer to Tirupati", description: "Arrive in Chennai and transfer directly to Tirumala hills / Tirupati. Overnight in Tirupati." },
      { id: 2, day: 2, title: "Tirupati Balaji Darshan", description: "VIP Special Entry Darshan of Lord Balaji. Visit Padmavathi Temple in the afternoon. Return to Tirupati." },
      { id: 3, day: 3, title: "Tirupati to Pondicherry", description: "Drive to the French quarter of Pondicherry. Visit Sri Aurobindo Ashram and Manakula Vinayagar Temple." },
      { id: 4, day: 4, title: "Pondicherry to Tanjore via Chidambaram", description: "Visit Chidambaram Nataraja Temple en route to Tanjore. Overnight in Tanjore." },
      { id: 5, day: 5, title: "Brihadeeswarar Temple & Tanjore Palace", description: "Marvel at the Big Temple in Tanjore. Explore palace museum and traditional brass workshops." },
      { id: 6, day: 6, title: "Tanjore to Trichy & Srirangam", description: "Drive to Trichy. Visit Srirangam Ranganathaswamy Temple and Rockfort Temple. Overnight in Trichy." },
      { id: 7, day: 7, title: "Trichy to Rameswaram", description: "Travel across Pamban Bridge to Rameswaram. Overnight in Rameswaram." },
      { id: 8, day: 8, title: "Rameswaram Rituals & Dhanushkodi", description: "Early morning holy bath in 22 wells and Spatika Linga Darshan. Afternoon visit to Dhanushkodi ruins." },
      { id: 9, day: 9, title: "Rameswaram to Kanyakumari", description: "Drive to Kanyakumari. Rest and watch sunset. Overnight in Kanyakumari." },
      { id: 10, day: 10, title: "Vivekananda Rock & Kanyakumari Sightseeing", description: "Ferry ride to Vivekananda Rock Memorial. Explore Suchindram Temple. Overnight in Kanyakumari." },
      { id: 11, day: 11, title: "Kanyakumari to Madurai", description: "Drive to Madurai. Evening Darshan at Meenakshi Amman Temple. Farewell dinner." },
      { id: 12, day: 12, title: "Departure from Madurai", description: "Drop-off at Madurai Airport/station." },
    ],
    testimonials: mockTestimonials,
    isFeatured: false,
    publishedAt: new Date().toISOString(),
  },

  // ================= ANDAMAN =================
  {
    id: 201,
    documentId: "an-01",
    slug: "coastal-essence",
    code: "AN 01",
    title: "The Coastal Essence",
    subtitle: "A curated journey through Andaman's most sacred and serene shores.",
    destination: "andaman",
    category: "adventure",
    state: "Andaman",
    price: 10300,
    currency: "INR",
    duration: "4 Nights / 5 Days",
    groupSize: "2-10 Persons",
    availability: "Every Week",
    coverImage: makeImage("/images/destinations/radhanagar-beach.png", "Radhanagar Beach"),
    galleryImages: [
      makeImage("/images/destinations/andaman.jpg", "Andaman Beach"),
    ],
    description: "Unveil the raw beauty of Andaman. Includes a historical tour of Cellular Jail in Port Blair, the stunning sunset at Radhanagar Beach, and a tranquil cruise to Havelock Island.",
    highlights: [
      "Cellular Jail Light & Sound show tickets included",
      "Cruise transfer from Port Blair to Havelock Island",
      "Stay in boutique beach resorts",
      "Guided snorkeling session at Elephant Beach",
    ],
    itinerary: [
      { id: 1, day: 1, title: "Arrival in Port Blair & Cellular Jail Tour", description: "Arrive at Port Blair airport. Transfer to hotel. Afternoon visit to Cellular Jail and the evening Light & Sound show." },
      { id: 2, day: 2, title: "Port Blair to Havelock Island", description: "Board the morning cruise to Havelock Island. Check into beach resort. Relax at Radhanagar Beach (Beach No. 7) during sunset." },
      { id: 3, day: 3, title: "Elephant Beach Boat Ride", description: "Travel by boat to Elephant Beach for water activities, snorkeling, and pristine coral viewing." },
      { id: 4, day: 4, title: "Havelock Island to Port Blair Return", description: "Morning free for leisure. Afternoon cruise back to Port Blair. Shopping for sea shells and local handicrafts." },
      { id: 5, day: 5, title: "Departure", description: "Transfer to Port Blair airport for your flight back home." },
    ],
    testimonials: mockTestimonials,
    isFeatured: true,
    publishedAt: new Date().toISOString(),
  },
  {
    id: 202,
    documentId: "an-02",
    slug: "azure-island-hopping",
    code: "AN 02",
    title: "Azure Island Hopping",
    subtitle: "Complete island-hopping experience across Havelock, Neil, and Baratang.",
    destination: "andaman",
    category: "adventure",
    state: "Andaman",
    price: 12500,
    currency: "INR",
    duration: "6 Nights / 7 Days",
    groupSize: "4-12 Persons",
    availability: "Every Week",
    coverImage: makeImage("/images/destinations/andaman.jpg", "Andaman Palms"),
    galleryImages: [
      makeImage("/images/destinations/andaman.jpg", "Neil Island"),
    ],
    description: "Explore the different facets of the archipelago. Walk through the limestone caves of Baratang, dive in the clear waters of Havelock, and relax on the sleepy beaches of Neil Island.",
    highlights: [
      "Limestone caves and mangrove boat ride at Baratang",
      "Inter-island cruise transfers in private ferry",
      "Scuba diving session with certified instructors",
      "Explore Natural Bridge in Neil Island",
    ],
    itinerary: [
      { id: 1, day: 1, title: "Arrival in Port Blair", description: "Transfer to hotel. Visit Carbyn's Cove Beach and local museums." },
      { id: 2, day: 2, title: "Port Blair to Baratang Expedition", description: "Early morning drive through the Jarawa tribe reserve to Baratang Island. Mangrove boat ride and limestone cave walk." },
      { id: 3, day: 3, title: "Baratang to Havelock Island", description: "Direct ferry connection to Havelock Island. Check in and explore Kalapathar Beach." },
      { id: 4, day: 4, title: "Havelock Scuba & Marine Life", description: "Discover underwater life with an introductory scuba dive. Afternoon free for relaxing at beach cafes." },
      { id: 5, day: 5, title: "Havelock to Neil Island", description: "Ferry to Neil Island. Visit Bharatpur Beach and Laxmanpur Beach for sunset view." },
      { id: 6, day: 6, title: "Neil Island to Port Blair Return", description: "Visit the Natural Rock Bridge. Take afternoon ferry back to Port Blair." },
      { id: 7, day: 7, title: "Departure", description: "Drop-off at airport." },
    ],
    testimonials: mockTestimonials,
    isFeatured: true,
    publishedAt: new Date().toISOString(),
  },
  {
    id: 203,
    documentId: "an-03",
    slug: "sanctuary-retreat",
    code: "AN 03",
    title: "The Sanctuary Retreat",
    subtitle: "A short, rejuvenating escape to Havelock Beach Resort.",
    destination: "andaman",
    category: "honeymoon",
    state: "Andaman",
    price: 8900,
    currency: "INR",
    duration: "3 Nights / 4 Days",
    groupSize: "2-6 Persons",
    availability: "Bi-Weekly",
    coverImage: makeImage("/images/destinations/andaman.jpg", "Sunset Beach"),
    galleryImages: [
      makeImage("/images/destinations/andaman.jpg", "Andaman Resort"),
    ],
    description: "Designed for couples and families seeking peace. Spend 3 nights at a beach-front resort in Havelock, waking up to the sound of waves and walking on white sand.",
    highlights: [
      "3 Nights in a beach-front cottage",
      "Candlelit dinner on the beach",
      "Private car for local tours",
      "Kayaking in the mangroves at night",
    ],
    itinerary: [
      { id: 1, day: 1, title: "Arrival & Cruise to Havelock", description: "Arrive in Port Blair, transfer directly to Havelock Island via cruise. Welcome drinks and leisure at the beach." },
      { id: 2, day: 2, title: "Radhanagar Beach Sunset Walk", description: "Morning free. Afternoon visit to the famous Radhanagar beach for a sunset walking tour." },
      { id: 3, day: 3, title: "Elephant Beach & Water Sports", description: "Morning boat trip to Elephant Beach. Optional snorkeling or glass-bottom boat ride." },
      { id: 4, day: 4, title: "Departure via Port Blair", description: "Return cruise to Port Blair and flight back home." },
    ],
    testimonials: mockTestimonials,
    isFeatured: false,
    publishedAt: new Date().toISOString(),
  },
  {
    id: 204,
    documentId: "an-04",
    slug: "superior-voyage",
    code: "AN 04",
    title: "The Superior Voyage",
    subtitle: "Ultra-luxury Andaman cruise and resort experience.",
    destination: "andaman",
    category: "honeymoon",
    state: "Andaman",
    price: 18000,
    currency: "INR",
    duration: "5 Nights / 6 Days",
    groupSize: "2-4 Persons",
    availability: "Every Week",
    coverImage: makeImage("/images/destinations/andaman.jpg", "Luxury Yacht"),
    galleryImages: [
      makeImage("/images/destinations/radhanagar-beach.png", "Radhanagar"),
    ],
    description: "Experience the Andaman Islands in absolute luxury. Premium cruise seats, private yacht excursions, stays in 5-star beachfront resorts, and fine dining under the stars.",
    highlights: [
      "Premium class ferry tickets (Makruzz Gold)",
      "Private speedboat charter for island tours",
      "Stays at the Taj Exotica Havelock / Barefoot Resort",
      "Private helicopter transfers (subject to availability)",
    ],
    itinerary: [
      { id: 1, day: 1, title: "Arrival in Port Blair - Luxury welcome", description: "Private luxury transfer to hotel. Evening historic tour of Cellular jail with VIP seating." },
      { id: 2, day: 2, title: "Makruzz to Havelock Taj Exotica", description: "Luxury ferry to Havelock. Check in to Taj Exotica Resort at Radhanagar Beach. Premium spa session." },
      { id: 3, day: 3, title: "Private Yacht Charter", description: "Explore isolated beaches and dive spots on a private yacht. Custom chef-prepared lunch onboard." },
      { id: 4, day: 4, title: "Havelock to Neil Island Luxury Resort", description: "Transfer to Neil Island. Check in to Sea Shell resort. Candlelit dining on the private pier." },
      { id: 5, day: 5, title: "Neil to Port Blair Return", description: "Return cruise. Stay at premium hotel in Port Blair. Farewell seafood dinner." },
      { id: 6, day: 6, title: "Departure", description: "Private airport transfer." },
    ],
    testimonials: mockTestimonials,
    isFeatured: false,
    publishedAt: new Date().toISOString(),
  },

  // ================= ODISHA =================
  {
    id: 301,
    documentId: "od-01",
    slug: "puri-essentials",
    code: "OD 011",
    title: "Puri & Bhubaneswar Tour",
    subtitle: "A focused spiritual immersion in the holy city of Puri.",
    destination: "odisha",
    category: "pilgrimage",
    state: "Odisha",
    price: 8700,
    currency: "INR",
    duration: "3 Nights / 4 Days",
    groupSize: "2-8 Persons",
    availability: "Every Week",
    coverImage: makeImage("/images/destinations/odisha.jpg", "Jagannath Temple"),
    galleryImages: [
      makeImage("/images/destinations/odisha.jpg", "Puri Beach"),
    ],
    description: "Perfect for a weekend pilgrimage. Visit the world-famous Jagannath Temple in Puri, witness the Mahaprasad rituals, and relax at the golden Puri beach.",
    highlights: [
      "Guided Jagannath Temple darshan with local panda",
      "Experience Mahaprasad dining at temple complex",
      "Evening walk at Puri beach",
      "Air-conditioned private cab for all visits",
    ],
    itinerary: [
      { id: 1, day: 1, title: "Arrival in Bhubaneswar & Transfer to Puri", description: "Arrive at Bhubaneswar airport/station. Drive to Puri. Check in and visit Jagannath Temple in the evening." },
      { id: 2, day: 2, title: "Puri Temple Rituals & Konark", description: "Morning darshan and Mahaprasad. Afternoon drive to Konark Sun Temple via Marine Drive." },
      { id: 3, day: 3, title: "Bhubaneswar Temples & Departure", description: "Drive back to Bhubaneswar. Visit Lingaraj Temple and Mukteswar Temple. Drop-off at airport." },
    ],
    testimonials: mockTestimonials,
    isFeatured: true,
    publishedAt: new Date().toISOString(),
  },
  {
    id: 302,
    documentId: "od-02",
    slug: "golden-triangle",
    code: "OD 02",
    title: "Golden Triangle",
    subtitle: "Spiritual and architectural wonders of Puri, Konark, and Bhubaneswar.",
    destination: "odisha",
    category: "pilgrimage",
    state: "Odisha",
    price: 12500,
    currency: "INR",
    duration: "4 Nights / 5 Days",
    groupSize: "4-10 Persons",
    availability: "Every Week",
    coverImage: makeImage("/images/india-states/konark-sun-temple.png", "Konark Wheel"),
    galleryImages: [
      makeImage("/images/destinations/odisha.jpg", "Bhubaneswar Temple"),
    ],
    description: "Explore the cultural and spiritual core of Odisha. Combines the heritage of the capital Bhubaneswar (Lingaraj, Mukteswar, Udayagiri Caves), the stone wheels of Konark, and the deep devotion of Puri.",
    highlights: [
      "Expert historian guide for Konark Sun Temple",
      "Visit Khandagiri & Udayagiri rock-cut caves",
      "Attend the Sand Art session at Puri beach",
      "Premium hotel stays near the temple zones",
    ],
    itinerary: [
      { id: 1, day: 1, title: "Arrival in Bhubaneswar", description: "Check in. Afternoon tour of Raja Rani and Mukteswar temples. Overnight in Bhubaneswar." },
      { id: 2, day: 2, title: "Bhubaneswar Heritage & Udayagiri", description: "Visit Lingaraj temple (for Hindus) and Khandagiri/Udayagiri ancient Jain caves. Overnight in Bhubaneswar." },
      { id: 3, day: 3, title: "Bhubaneswar to Puri via Konark", description: "Drive to Konark. Detailed tour of the Sun Temple. Drive to Puri and watch sunset on the beach." },
      { id: 4, day: 4, title: "Jagannath Temple & Chilika Lake", description: "Morning Jagannath darshan. Afternoon trip to Chilika Lake (Satapada) to spot Irrawaddy dolphins." },
      { id: 5, day: 5, title: "Puri to Bhubaneswar Departure", description: "Visit Pipli applique village en route to airport for departure flight." },
    ],
    testimonials: mockTestimonials,
    isFeatured: true,
    publishedAt: new Date().toISOString(),
  },
  {
    id: 303,
    documentId: "od-04",
    slug: "artisans-path",
    code: "OD 04",
    title: "The Artisan's Path",
    subtitle: "Cultural odyssey visiting craft villages and historic temples.",
    destination: "odisha",
    category: "adventure",
    state: "Odisha",
    price: 15400,
    currency: "INR",
    duration: "5 Nights / 6 Days",
    groupSize: "2-6 Persons",
    availability: "Bi-Weekly",
    coverImage: makeImage("/images/destinations/odisha.jpg", "Pattachitra painting"),
    galleryImages: [
      makeImage("/images/destinations/odisha.jpg", "Heritage Village"),
    ],
    description: "Dive deep into Odisha's craft traditions. Visit Raghurajpur heritage village (famous for Pattachitra paintings), watch Gotipua dance performances, and explore the ancient weaving centers.",
    highlights: [
      "Hands-on Pattachitra painting workshop in Raghurajpur",
      "Private Gotipua traditional dance recital",
      "Visit Pipli craft village and interact with local weavers",
      "Guided historical tours of Bhubaneswar's temples",
    ],
    itinerary: [
      { id: 1, day: 1, title: "Bhubaneswar Arrival", description: "Welcome tour and visit to State Tribal Museum. Overnight in Bhubaneswar." },
      { id: 2, day: 2, title: "Temples of Bhubaneswar", description: "Detailed guide of Kedar Gouri, Parasurameswar, and Mukteswar temples. Overnight in Bhubaneswar." },
      { id: 3, day: 3, title: "Bhubaneswar to Puri via Raghurajpur", description: "Drive to Raghurajpur heritage village. Meet award-winning artists. Watch Gotipua dance. Drive to Puri." },
      { id: 4, day: 4, title: "Puri Beach & Crafts", description: "Visit local handloom cooperatives. Relax at the beach. Overnight in Puri." },
      { id: 5, day: 5, title: "Konark Sun Temple & Pipli", description: "Visit Konark Sun temple. Stop at Pipli applique market. Return to Bhubaneswar." },
      { id: 6, day: 6, title: "Departure", description: "Drop-off at airport." },
    ],
    testimonials: mockTestimonials,
    isFeatured: false,
    publishedAt: new Date().toISOString(),
  },
  {
    id: 304,
    documentId: "od-08",
    slug: "imperial-odisha",
    code: "OD 08",
    title: "Imperial Odisha",
    subtitle: "Ultra-luxury tour featuring Chilika Lake and premium beach stays.",
    destination: "odisha",
    category: "honeymoon",
    state: "Odisha",
    price: 27500,
    currency: "INR",
    duration: "7 Nights / 8 Days",
    groupSize: "2-4 Persons",
    availability: "Every Month",
    coverImage: makeImage("/images/destinations/odisha.jpg", "Luxury Resort Odisha"),
    galleryImages: [
      makeImage("/images/india-states/odisha-v3.png", "Puri beach resort"),
    ],
    description: "Odisha in absolute comfort. Luxury boutique stays, private yacht cruise at Chilika Lake, expert-guided VIP temple darshans, and traditional spa treatments.",
    highlights: [
      "Private luxury yacht charter at Chilika Lake",
      "Stay in oceanfront suites at Mayfair Waves Puri",
      "VIP fast-track passes at Jagannath Temple",
      "All meals curated by private chef",
    ],
    itinerary: [
      { id: 1, day: 1, title: "Arrival in Bhubaneswar", description: "VIP pickup and transfer to premium luxury hotel. Overnight in Bhubaneswar." },
      { id: 2, day: 2, title: "Bhubaneswar Caves & Fine Dining", description: "Tour of Udayagiri caves with senior archeologist. Evening fine dining experience." },
      { id: 3, day: 3, title: "Bhubaneswar to Puri Mayfair Resort", description: "Drive to Puri. Check in to Mayfair Waves oceanfront resort. Private beach massage." },
      { id: 4, day: 4, title: "VIP Jagannath Temple & Heritage Walk", description: "Special VIP darshan passes. Private guide explaining history of temple mathas." },
      { id: 5, day: 5, title: "Private Yacht on Chilika Lake", description: "Drive to Chilika. Private yacht cruise, gourmet lunch onboard, spotting dolphins and bird sanctuary." },
      { id: 6, day: 6, title: "Konark Sun Temple Sunset", description: "Afternoon drive to Konark. VIP entry and sunset views of Sun Temple." },
      { id: 7, day: 7, title: "Puri Beach Leisure & Craft", description: "Free day at the resort spa. Evening private beach dinner." },
      { id: 8, day: 8, title: "Departure", description: "Transfer to Bhubaneswar airport." },
    ],
    testimonials: mockTestimonials,
    isFeatured: false,
    publishedAt: new Date().toISOString(),
  },

  // ================= UTTAR PRADESH =================
  {
    id: 401,
    documentId: "up-01",
    slug: "ganga-aarti-varanasi",
    code: "UP 02",
    title: "Varanasi Yatra",
    subtitle: "Meditation and divine rituals on the holy ghats of Kashi.",
    destination: "uttar-pradesh",
    category: "pilgrimage",
    state: "Uttar Pradesh",
    price: 5500,
    currency: "INR",
    duration: "2 Nights / 3 Days",
    groupSize: "2-12 Persons",
    availability: "Every Week",
    coverImage: makeImage("/images/india-states/varanasi-ghats-photo.png", "Varanasi Ganga Aarti"),
    galleryImages: [
      makeImage("/images/destinations/uttar-pradesh.jpg", "Varanasi Ghats"),
    ],
    description: "Feel the spiritual pull of the oldest living city. Experience the morning Subah-e-Banaras, the magnificent evening Ganga Aarti from a private boat, and seek blessings at Kashi Vishwanath Temple.",
    highlights: [
      "Private boat ride for evening Ganga Aarti",
      "Kashi Vishwanath Corridor VIP entry ticket",
      "Guided walk through the narrow alleyways of old Kashi",
      "Excursion to Sarnath, where Buddha gave his first sermon",
    ],
    itinerary: [
      { id: 1, day: 1, title: "Arrival in Varanasi & Evening Aarti", description: "Arrive in Varanasi. Check in. Afternoon visit to local temples and a private boat ride to watch the evening Ganga Aarti." },
      { id: 2, day: 2, title: "Kashi Vishwanath Darshan & City Walk", description: "Morning darshan at the new Vishwanath Corridor. Walking tour of the old city lanes, visiting Sankat Mochan temple." },
      { id: 3, day: 3, title: "Sarnath Excursion", description: "Morning visit to Sarnath. Explore Dhamek Stupa, Ashoka Pillar, and the Archaeological Museum. Overnight in Varanasi." },
      { id: 4, day: 4, title: "Departure from Varanasi", description: "Early morning boat ride to witness sunrise over the ghats. Check out and drop-off at airport." },
    ],
    testimonials: mockTestimonials,
    isFeatured: true,
    publishedAt: new Date().toISOString(),
  },
  {
    id: 402,
    documentId: "up-02",
    slug: "ayodhya-mathura",
    code: "UP 03",
    title: "Varanasi & Allahabad Yatra",
    subtitle: "A divine trail linking the sacred birthplaces of Rama and Krishna.",
    destination: "uttar-pradesh",
    category: "pilgrimage",
    state: "Uttar Pradesh",
    price: 6500,
    currency: "INR",
    duration: "3 Nights / 4 Days",
    groupSize: "4-10 Persons",
    availability: "Every Week",
    coverImage: makeImage("/images/destinations/uttar-pradesh.jpg", "Ram Janmabhoomi Ayodhya"),
    galleryImages: [
      makeImage("/images/india-states/varanasi-ghats-photo.png", "Varanasi"),
    ],
    description: "Visit the two columns of Hindu epic history. Seek blessings at the newly constructed Ram Mandir in Ayodhya and experience the divine chanting on the Yamuna ghats in Mathura and Vrindavan.",
    highlights: [
      "VIP entry passes at Ram Janmabhoomi Mandir in Ayodhya",
      "Visit Prem Mandir and Banke Bihari Temple in Vrindavan",
      "Chanting and Aarti session at Keshi Ghat in Mathura",
      "All ground logistics and local guide assistance",
    ],
    itinerary: [
      { id: 1, day: 1, title: "Arrival in Lucknow & Drive to Ayodhya", description: "Arrive in Lucknow. Drive to Ayodhya. Check into hotel and attend evening Saryu River Aarti." },
      { id: 2, day: 2, title: "Ayodhya Ram Mandir Darshan", description: "Complete darshan of Ram Lalla at Ram Janmabhoomi. Visit Hanumangarhi and Kanak Bhawan temples." },
      { id: 3, day: 3, title: "Ayodhya to Lucknow Return & Train to Mathura", description: "Drive to Lucknow. Travel by train/private vehicle to Mathura. Overnight in Mathura." },
      { id: 4, day: 4, title: "Mathura & Vrindavan Shrines", description: "Visit Krishna Janmabhoomi in Mathura. Afternoon visit to Banke Bihari and Prem Mandir in Vrindavan." },
      { id: 5, day: 5, title: "Govardhan Parikrama (by car/walk)", description: "Visit Govardhan hill, Radha Kund, and Shyam Kund. Attend evening bhajan session." },
      { id: 6, day: 6, title: "Mathura to Delhi/Lucknow Departure", description: "Check out and drop-off at station/airport for departure." },
    ],
    testimonials: mockTestimonials,
    isFeatured: true,
    publishedAt: new Date().toISOString(),
  },
  {
    id: 403,
    documentId: "up-03",
    slug: "four-dhams-up",
    code: "UP 04",
    title: "Varanasi, Gaya, Ayodhya Yatra",
    subtitle: "Varanasi, Prayagraj, Ayodhya, and Naimisharanya.",
    destination: "uttar-pradesh",
    category: "pilgrimage",
    state: "Uttar Pradesh",
    price: 16500,
    currency: "INR",
    duration: "5 Nights / 6 Days",
    groupSize: "2-8 Persons",
    availability: "Bi-Weekly",
    coverImage: makeImage("/images/pilgrimage/varanasi.jpg", "Triveni Sangam Prayagraj"),
    galleryImages: [
      makeImage("/images/destinations/uttar-pradesh.jpg", "Kashi"),
    ],
    description: "The complete Uttar Pradesh pilgrimage. Bathe at the Triveni Sangam in Prayagraj, walk the ghats of Varanasi, visit the Ram Mandir in Ayodhya, and meditate in the ancient forests of Naimisharanya.",
    highlights: [
      "Holy dip boat trip at Triveni Sangam, Prayagraj",
      "Special prayers at Lalita Devi Temple in Naimisharanya",
      "Comfortable air-conditioned transfers between cities",
      "Guided spiritual narratives in Sanskrit and Hindi",
    ],
    itinerary: [
      { id: 1, day: 1, title: "Varanasi Arrival", description: "Transfer to hotel. Evening Ganga Aarti boat ride. Overnight in Varanasi." },
      { id: 2, day: 2, title: "Kashi Temple & Sarnath Tour", description: "Vishwanath Corridor and Sarnath Buddhist ruins. Overnight in Varanasi." },
      { id: 3, day: 3, title: "Varanasi to Prayagraj", description: "Drive to Prayagraj. Visit Anand Bhawan, Hanuman Temple, and perform Triveni Sangam bathing ritual. Overnight in Prayagraj." },
      { id: 4, day: 4, title: "Prayagraj to Ayodhya", description: "Drive to Ayodhya. Check in and witness Saryu River Aarti. Overnight in Ayodhya." },
      { id: 5, day: 5, title: "Ayodhya Ram Mandir Tour", description: "Explore Hanuman Garhi, Ram Lalla temple, and Dashrath Mahal. Overnight in Ayodhya." },
      { id: 6, day: 6, title: "Ayodhya to Naimisharanya to Lucknow", description: "Drive to Naimisharanya forest. Visit Chakra Teerth and Lalita Devi. Drive to Lucknow for overnight." },
      { id: 7, day: 7, title: "Lucknow Sightseeing", description: "Explore Bara Imambara and British Residency. Enjoy Avadhi dinner." },
      { id: 8, day: 8, title: "Departure", description: "Drop-off at Lucknow Airport." },
    ],
    testimonials: mockTestimonials,
    isFeatured: false,
    publishedAt: new Date().toISOString(),
  },
  {
    id: 404,
    documentId: "up-04",
    slug: "complete-northern-circuit",
    code: "UP 05",
    title: "Varanasi, Gaya, Bodhgaya, Ayodhya & Allahabad",
    subtitle: "Complete 10-day tour covering major heritage and pilgrimage spots.",
    destination: "uttar-pradesh",
    category: "pilgrimage",
    state: "Uttar Pradesh",
    price: 20150,
    currency: "INR",
    duration: "7 Nights / 8 Days",
    groupSize: "2-6 Persons",
    availability: "Monthly",
    coverImage: makeImage("/images/destinations/uttar-pradesh.jpg", "Taj Mahal Agra"),
    galleryImages: [
      makeImage("/images/india-states/varanasi-ghats-photo.png", "Varanasi Ghats"),
    ],
    description: "An grand tour of North India's heritage. Includes Varanasi (Kashi), Prayagraj, Ayodhya, Lucknow, Mathura/Vrindavan, and Agra (Taj Mahal & Agra Fort).",
    highlights: [
      "Visit the Taj Mahal and Agra Fort",
      "VIP Darshans at Kashi, Ayodhya, and Vrindavan",
      "Private boat trips at Varanasi and Prayagraj",
      "Stay in high-end comfort hotels",
    ],
    itinerary: [
      { id: 1, day: 1, title: "Varanasi Arrival", description: "VIP arrival. Boat ride for evening Ganga Aarti. Overnight in Varanasi." },
      { id: 2, day: 2, title: "Varanasi Heritage", description: "Darshan of Kashi Vishwanath. Visit local handloom weaving units. Overnight in Varanasi." },
      { id: 3, day: 3, title: "Varanasi to Prayagraj", description: "Drive to Prayagraj. Dip at Sangam. Overnight in Prayagraj." },
      { id: 4, day: 4, title: "Prayagraj to Ayodhya", description: "Drive to Ayodhya. Saryu river tour. Overnight in Ayodhya." },
      { id: 5, day: 5, title: "Ayodhya Ram Mandir", description: "Detailed temple tours. Overnight in Ayodhya." },
      { id: 6, day: 6, title: "Ayodhya to Lucknow", description: "Drive to Lucknow. Explore local monuments and Avadhi culture." },
      { id: 7, day: 7, title: "Lucknow to Agra", description: "Drive to Agra via Express Highway. Sunset view of Taj Mahal. Overnight in Agra." },
      { id: 8, day: 8, title: "Agra to Mathura/Vrindavan", description: "Explore Taj Mahal at sunrise. Drive to Vrindavan. Overnight in Vrindavan." },
      { id: 9, day: 9, title: "Mathura Pilgrimage", description: "Temple tours in Mathura and Vrindavan. Overnight in Vrindavan." },
      { id: 10, day: 10, title: "Mathura to Delhi Departure", description: "Drive to Delhi airport for flight back home." },
    ],
    testimonials: mockTestimonials,
    isFeatured: false,
    publishedAt: new Date().toISOString(),
  },

  // ================= MADHYA PRADESH =================
  {
    id: 501,
    documentId: "mp-01",
    slug: "spiritual-awakening",
    code: "MP 011",
    title: "MP Jyotirlinga Quick Trip",
    subtitle: "Ujjain Mahakal & Omkareshwar Jyotirlinga pilgrimage.",
    destination: "madhya-pradesh",
    category: "pilgrimage",
    state: "Madhya Pradesh",
    price: 7900,
    currency: "INR",
    duration: "2 Nights / 3 Days",
    groupSize: "2-12 Persons",
    availability: "Every Week",
    coverImage: makeImage("/images/destinations/madhya-pradesh.jpg", "Ujjain Mahakal Gopuram"),
    galleryImages: [
      makeImage("/images/destinations/madhya-pradesh.jpg", "Omkareshwar Island"),
    ],
    description: "Seek blessings at two of the twelve sacred Jyotirlingas. Visit the newly constructed Mahakal Lok Corridor in Ujjain and the island shrine of Omkareshwar on the Narmada River.",
    highlights: [
      "Confirmed Bhasma Aarti entry tickets at Mahakal Temple, Ujjain",
      "Boat ride around the Om-shaped island of Omkareshwar",
      "Visit Harsiddhi Temple (one of the 51 Shaktipeeths)",
      "Ground transfers in comfortable private AC vehicles",
    ],
    itinerary: [
      { id: 1, day: 1, title: "Arrival in Indore & Transfer to Ujjain", description: "Arrive at Indore Airport. Transfer to Ujjain. Check in and visit Mahakal Lok Corridor in the evening." },
      { id: 2, day: 2, title: "Mahakal Bhasma Aarti & Temple Tour", description: "Attend the 4:00 AM Bhasma Aarti. Afternoon visit to Kal Bhairav, Harsiddhi, and Sandipani Ashram." },
      { id: 3, day: 3, title: "Ujjain to Omkareshwar", description: "Drive to Omkareshwar. Check in. Boat ride on Narmada River to visit the Jyotirlinga temple and Mamleshwar temple." },
      { id: 4, day: 4, title: "Omkareshwar to Indore Departure", description: "Drive to Indore. Visit Lal Bagh Palace and Khajrana Ganesh temple. Transfer to airport for departure." },
    ],
    testimonials: mockTestimonials,
    isFeatured: true,
    publishedAt: new Date().toISOString(),
  },
  {
    id: 502,
    documentId: "mp-02",
    slug: "heritage-devotion",
    code: "MP 012",
    title: "MP Jyotirlinga & Heritage",
    subtitle: "Discover Orchha, Khajuraho temples, and Ujjain.",
    destination: "madhya-pradesh",
    category: "pilgrimage",
    state: "Madhya Pradesh",
    price: 12900,
    currency: "INR",
    duration: "4 Nights / 5 Days",
    groupSize: "4-10 Persons",
    availability: "Every Week",
    coverImage: makeImage("/images/destinations/madhya-pradesh.jpg", "Khajuraho Temple Carvings"),
    galleryImages: [
      makeImage("/images/india-states/maheshwar-ahilya-fort.png", "Orchha Betwa River"),
    ],
    description: "Explore where history meets spirituality. Journey through the palaces and temples of Orchha (where Rama is worshipped as a King) and the famous UNESCO World Heritage carvings of Khajuraho.",
    highlights: [
      "Guided tour of the Eastern & Western group of Khajuraho temples",
      "Attend the Ram Raja Temple evening guard of honor in Orchha",
      "Watch the Light & Sound show at Khajuraho",
      "Stay in comfortable 3-star heritage hotels",
    ],
    itinerary: [
      { id: 1, day: 1, title: "Arrival in Jhansi & Transfer to Orchha", description: "Pick up from Jhansi. Drive to Orchha. Check in. Visit Ram Raja Temple and Chaturbhuj Temple." },
      { id: 2, day: 2, title: "Orchha Fort & Cenotaphs", description: "Explore Jahangir Mahal and Raja Mahal. Afternoon walk along the Betwa River cenotaphs." },
      { id: 3, day: 3, title: "Orchha to Khajuraho", description: "Drive to Khajuraho. Check in and watch the evening Light & Sound show." },
      { id: 4, day: 4, title: "Khajuraho Temple Tour", description: "Detailed guided tour of the Western and Eastern group of temples (Kandariya Mahadeva, Lakshmana temples)." },
      { id: 5, day: 5, title: "Khajuraho to Panna National Park", description: "Morning jungle safari at Panna Tiger Reserve. Evening boat ride on Ken River." },
      { id: 6, day: 6, title: "Transfer to Jhansi / Khajuraho Departure", description: "Drop-off at station/airport for departure." },
    ],
    testimonials: mockTestimonials,
    isFeatured: true,
    publishedAt: new Date().toISOString(),
  },
  {
    id: 503,
    documentId: "mp-03",
    slug: "temple-odyssey",
    code: "MP 013",
    title: "MP Temple & Heritage Tour",
    subtitle: "A comprehensive temple tour covering Maheshwar and Mandu.",
    destination: "madhya-pradesh",
    category: "pilgrimage",
    state: "Madhya Pradesh",
    price: 19500,
    currency: "INR",
    duration: "6 Nights / 7 Days",
    groupSize: "2-8 Persons",
    availability: "Bi-Weekly",
    coverImage: makeImage("/images/india-states/maheshwar-ahilya-fort.png", "Maheshwar Ahilya Fort"),
    galleryImages: [
      makeImage("/images/destinations/madhya-pradesh.jpg", "Mandu Ruins"),
    ],
    description: "Explore the scenic and historical sites along the Narmada River. Visit the fortress of Mandu, the heritage town of Maheshwar (renowned for its handloom sarees and ghats), and the Jyotirlinga of Omkareshwar.",
    highlights: [
      "Stay inside the Ahilya Fort heritage zone in Maheshwar",
      "Interact with local Maheshwari saree weavers at Rehwa Society",
      "Explore the Jahaz Mahal and Rani Roopmati Pavilion in Mandu",
      "Sunset boat ride on the Narmada River",
    ],
    itinerary: [
      { id: 1, day: 1, title: "Arrival in Indore & Transfer to Mandu", description: "Arrive in Indore. Transfer to the fortress town of Mandu. Overnight in Mandu." },
      { id: 2, day: 2, title: "Explore Mandu", description: "Explore Jahaz Mahal, Hindola Mahal, and Roopmati's Pavilion. Hear stories of Baz Bahadur." },
      { id: 3, day: 3, title: "Mandu to Maheshwar", description: "Drive to Maheshwar. Check in. Visit Maheshwar Palace and temple complex on the river bank." },
      { id: 4, day: 4, title: "Rehwa Weaving & Narmada Sunset", description: "Visit the Rehwa Society. Evening boat ride to Sahastradhara on the Narmada River." },
      { id: 5, day: 5, title: "Maheshwar to Omkareshwar", description: "Drive to Omkareshwar. Visit the Jyotirlinga and Mamleshwar temples. Overnight in Omkareshwar." },
      { id: 6, day: 6, title: "Omkareshwar to Indore", description: "Drive to Indore. Visit Sarafa Bazar (street food) and Rajwada Palace. Overnight in Indore." },
      { id: 7, day: 7, title: "Indore Local Shrines", description: "Visit Kanch Mandir and Khajrana Ganesh. Leisure afternoon for shopping." },
      { id: 8, day: 8, title: "Departure", description: "Airport transfer." },
    ],
    testimonials: mockTestimonials,
    isFeatured: false,
    publishedAt: new Date().toISOString(),
  },
  {
    id: 504,
    documentId: "mp-04",
    slug: "complete-pilgrimage",
    code: "MP 014",
    title: "Grand MP Tour",
    subtitle: "Complete 10-day tour linking all key shrines of Madhya Pradesh.",
    destination: "madhya-pradesh",
    category: "pilgrimage",
    state: "Madhya Pradesh",
    price: 24500,
    currency: "INR",
    duration: "8 Nights / 9 Days",
    groupSize: "2-6 Persons",
    availability: "Monthly",
    coverImage: makeImage("/images/destinations/madhya-pradesh.jpg", "Amarkantak Temple Narmada"),
    galleryImages: [
      makeImage("/images/destinations/madhya-pradesh.jpg", "Mahakaleshwar Ujjain"),
    ],
    description: "The ultimate spiritual tour of Madhya Pradesh. Connects Ujjain, Omkareshwar, Maheshwar, Mandu, Sanchi Stupa (Buddhist shrine), and Amarkantak (the source of the Narmada River).",
    highlights: [
      "Visit the UNESCO monument Sanchi Stupa",
      "Explore Amarkantak, the holy meeting point of Vindhya and Satpura ranges",
      "Attend special pujas at Mahakal (Ujjain) and Omkareshwar",
      "Full board premium travel logistics",
    ],
    itinerary: [
      { id: 1, day: 1, title: "Indore Arrival & Drive to Ujjain", description: "Transfer to Ujjain. Visit Mahakal Corridor. Overnight in Ujjain." },
      { id: 2, day: 2, title: "Ujjain Shrines & Bhasma Aarti", description: "Attend early morning Aarti. Visit local shrines. Overnight in Ujjain." },
      { id: 3, day: 3, title: "Ujjain to Bhopal via Sanchi", description: "Drive to Sanchi Stupa. Explore the ancient Buddhist monuments. Overnight in Bhopal." },
      { id: 4, day: 4, title: "Bhopal to Jabalpur via Bhimbetka", description: "Visit Bhimbetka rock shelters. Drive to Jabalpur. Overnight in Jabalpur." },
      { id: 5, day: 5, title: "Marble Rocks & Bhedaghat", description: "Enjoy boat ride along marble rocks of Narmada river in Bhedaghat. Overnight in Jabalpur." },
      { id: 6, day: 6, title: "Jabalpur to Amarkantak", description: "Drive to the holy town of Amarkantak. Visit Narmada Kund. Overnight in Amarkantak." },
      { id: 7, day: 7, title: "Amarkantak Temples", description: "Explore Ancient Temples of Kalachuri period. Overnight in Amarkantak." },
      { id: 8, day: 8, title: "Amarkantak to Omkareshwar", description: "Long drive to Omkareshwar. Rest and relax. Overnight in Omkareshwar." },
      { id: 9, day: 9, title: "Omkareshwar & Maheshwar Tour", description: "Jyotirlinga darshan and afternoon drive to Maheshwar. Farewell dinner on Narmada banks." },
      { id: 10, day: 10, title: "Indore Departure", description: "Drive to Indore and transfer to airport." },
    ],
    testimonials: mockTestimonials,
    isFeatured: false,
    publishedAt: new Date().toISOString(),
  },

  // ================= UTTARAKHAND =================
  {
    id: 601,
    documentId: "uk-01",
    slug: "char-dham-yatra",
    code: "CDY 31",
    title: "Char Dham Yatra (Road)",
    subtitle: "Complete Himalayan pilgrimage to Yamunotri, Gangotri, Kedarnath, and Badrinath.",
    destination: "uttarakhand",
    category: "pilgrimage",
    state: "Uttarakhand",
    price: 41550,
    currency: "INR",
    duration: "11 Nights / 12 Days",
    groupSize: "2-8 Persons",
    availability: "Bi-Weekly",
    coverImage: makeImage("/images/pilgrimage/badrinath.jpg", "Kedarnath Peak"),
    galleryImages: [
      makeImage("/images/india-states/kedarnath-temple.png", "Badrinath Shrine"),
    ],
    description: "The ultimate journey to the four sacred abodes of the gods in Uttarakhand's high Himalayas. Perform puja, experience pristine glacial rivers, and find inner peace.",
    highlights: [
      "Guided visits to Yamunotri, Gangotri, Kedarnath, and Badrinath",
      "Acclimatization halts and premium lodge stays",
      "VIP Fast-track passes for Kedarnath and Badrinath darshans",
      "Delicious satvik meals prepared daily by our support staff",
    ],
    itinerary: [
      { id: 1, day: 1, title: "Arrival in Haridwar", description: "Arrive in Haridwar. Check in. Attend the magnificent Ganga Aarti at Har Ki Pauri." },
      { id: 2, day: 2, title: "Haridwar to Barkot (Yamunotri base)", description: "Drive to Barkot via Dehradun. Rest and prepare for the Yamunotri trek." },
      { id: 3, day: 3, title: "Yamunotri Darshan", description: "Trek 6 km to Yamunotri. Bathe in hot springs, offer prayers, and return to Barkot." },
      { id: 4, day: 4, title: "Barkot to Uttarkashi (Gangotri base)", description: "Drive to Uttarkashi along the Bhagirathi River. Visit Vishwanath Temple." },
      { id: 5, day: 5, title: "Gangotri Darshan", description: "Drive to Gangotri. Take a holy dip, perform rituals at the Ganga temple, and return to Uttarkashi." },
      { id: 6, day: 6, title: "Uttarkashi to Guptkashi", description: "Drive to Guptkashi. Acclimatize and prepare for the Kedarnath trek." },
      { id: 7, day: 7, title: "Guptkashi to Kedarnath", description: "Transfer to Sonprayag. Trek 16 km or take helicopter service to Kedarnath. Attend evening prayers." },
      { id: 8, day: 8, title: "Kedarnath to Guptkashi Return", description: "Morning darshan at Kedarnath. Return trek/helicopter. Rest in Guptkashi." },
      { id: 9, day: 9, title: "Guptkashi to Badrinath", description: "Drive to Badrinath through scenic mountain roads. Attend evening shringar aarti." },
      { id: 10, day: 10, title: "Badrinath to Rudraprayag", description: "Holy dip at Tapt Kund. Morning darshan. Drive to Rudraprayag, the confluence of Mandakini and Alaknanda." },
      { id: 11, day: 11, title: "Rudraprayag to Haridwar via Rishikesh", description: "Drive to Haridwar. Stop at Rishikesh to visit Laxman Jhula and Ram Jhula." },
      { id: 12, day: 12, title: "Departure", description: "Drop-off at Haridwar station or Dehradun airport." },
    ],
    testimonials: mockTestimonials,
    isFeatured: true,
    publishedAt: new Date().toISOString(),
  },
  {
    id: 602,
    documentId: "uk-02",
    slug: "kedarnath-badrinath-quick",
    code: "DDY 11",
    title: "Do Dham Yatra (Kedar & Badri)",
    subtitle: "A shorter, focused 6-day pilgrimage to Kedarnath and Badrinath.",
    destination: "uttarakhand",
    category: "pilgrimage",
    state: "Uttarakhand",
    price: 19500,
    currency: "INR",
    duration: "4 Nights / 5 Days",
    groupSize: "4-10 Persons",
    availability: "Every Week",
    coverImage: makeImage("/images/india-states/kedarnath-temple.png", "Kedarnath Temple"),
    galleryImages: [
      makeImage("/images/india-states/badrinath-temple.png", "Badrinath temple"),
    ],
    description: "Designed for devotees with limited schedules. This focused itinerary covers the two main Himalayan shrines: Kedarnath Jyotirlinga and Badrinath Vishnu temple, with optional helicopter bookings.",
    highlights: [
      "VIP entry passes for Kedarnath and Badrinath",
      "Stay in clean, comfortable hotels/guesthouses near temple routes",
      "Private AC transport and expert local coordinator support",
    ],
    itinerary: [
      { id: 1, day: 1, title: "Dehradun to Guptkashi", description: "Pick up from Dehradun. Drive to Guptkashi along the Ganga and Alaknanda rivers. Overnight in Guptkashi." },
      { id: 2, day: 2, title: "Guptkashi to Kedarnath", description: "Travel to Sonprayag. Trek to Kedarnath temple or take helicopter. Overnight at Kedarnath." },
      { id: 3, day: 3, title: "Kedarnath to Guptkashi Return", description: "Morning prayers. Return to Guptkashi. Relax and acclimatize." },
      { id: 4, day: 4, title: "Guptkashi to Badrinath", description: "Scenic drive to Badrinath. Check in and visit the temple for evening Aarti." },
      { id: 5, day: 5, title: "Badrinath to Rudraprayag", description: "Perform morning rituals. Drive to Rudraprayag visiting Mana Village (last village of India) en route." },
      { id: 6, day: 6, title: "Rudraprayag to Dehradun Departure", description: "Drive back to Dehradun via Rishikesh. Transfer to airport/station." },
    ],
    testimonials: mockTestimonials,
    isFeatured: false,
    publishedAt: new Date().toISOString(),
  },

  // ================= GUJARAT =================
  {
    id: 701,
    documentId: "gj-01",
    slug: "dwarka-somnath-circuit",
    code: "GJ 011",
    title: "Dwarka & Somnath Jyotirlinga",
    subtitle: "Sacred yatra linking the kingdom of Dwarka and Somnath Shore temple.",
    destination: "gujarat",
    category: "pilgrimage",
    state: "Gujarat",
    price: 19800,
    currency: "INR",
    duration: "5 Nights / 6 Days",
    groupSize: "2-8 Persons",
    availability: "Every Week",
    coverImage: makeImage("/images/india-states/somnath-photo.png", "Somnath Temple"),
    galleryImages: [
      makeImage("/images/india-states/dwarkadhish-temple.png", "Dwarkadhish temple"),
    ],
    description: "Journey to the holy land of Dwarka, Krishna's capital, and the magnificent Somnath Shore temple, representing light and resilience as the first Jyotirlinga.",
    highlights: [
      "VIP Entry at Dwarkadhish and Somnath temples",
      "Boat ride to the holy Bet Dwarka island",
      "Visit Nageshwar Jyotirlinga and Gopi Talav",
      "Watch the spectacular Light & Sound show at Somnath",
    ],
    itinerary: [
      { id: 1, day: 1, title: "Arrival in Rajkot & Drive to Dwarka", description: "Arrive in Rajkot. Drive to Dwarka (230 km, 4.5 hours). Check into hotel and attend evening Dwarkadhish Aarti." },
      { id: 2, day: 2, title: "Bet Dwarka & Nageshwar Tour", description: "Morning ferry to Bet Dwarka. Visit Nageshwar Jyotirlinga, Rukmini Devi temple, and Gopi Talav." },
      { id: 3, day: 3, title: "Dwarka to Somnath via Porbandar", description: "Drive to Somnath. En route visit Kirti Mandir (Mahatma Gandhi birthplace) in Porbandar. Attend evening Somnath Aarti and Light Show." },
      { id: 4, day: 4, title: "Somnath Sightseeing & Bhalka Teerth", description: "Detailed Somnath temple darshan. Visit Bhalka Teerth, the spot where Krishna left his mortal frame. Overnight in Somnath." },
      { id: 5, day: 5, title: "Somnath to Rajkot Departure", description: "Drive back to Rajkot. Drop-off at station/airport." },
    ],
    testimonials: mockTestimonials,
    isFeatured: true,
    publishedAt: new Date().toISOString(),
  },
  {
    id: 702,
    documentId: "gj-02",
    slug: "gujarat-heritage-divinity",
    code: "GJ 012",
    title: "Gujarat Heritage & Divinity",
    subtitle: "A comprehensive tour including Dwarka, Somnath, and Modhera.",
    destination: "gujarat",
    category: "pilgrimage",
    state: "Gujarat",
    price: 21900,
    currency: "INR",
    duration: "6 Nights / 7 Days",
    groupSize: "2-6 Persons",
    availability: "Every Week",
    coverImage: makeImage("/images/india-states/somnath-photo.png", "Modhera Sun Temple Stepwell"),
    galleryImages: [
      makeImage("/images/india-states/somnath-photo.png", "Somnath Temple"),
    ],
    description: "Combine the sacred vibes of Dwarka and Somnath with the historical marvels of Modhera Sun Temple and Patan's stepwell.",
    highlights: [
      "Explore the 11th-century Sun Temple in Modhera",
      "Visit Rani Ki Vav in Patan, a UNESCO World Heritage site",
      "Stays in premium heritage hotels",
    ],
    itinerary: [
      { id: 1, day: 1, title: "Arrival in Ahmedabad", description: "Check in. Afternoon tour of Sabarmati Ashram and Adalaj Stepwell. Overnight in Ahmedabad." },
      { id: 2, day: 2, title: "Ahmedabad to Patan & Modhera to Rajkot", description: "Visit Modhera Sun Temple and Rani Ki Vav. Drive to Rajkot for overnight stay." },
      { id: 3, day: 3, title: "Rajkot to Dwarka", description: "Drive to Dwarka. Attend evening Aarti at Dwarkadhish temple." },
      { id: 4, day: 4, title: "Dwarka Local Sightseeing", description: "Ferry to Bet Dwarka, visit Nageshwar Jyotirlinga, and sunset walk near Dwarka lighthouse." },
      { id: 5, day: 5, title: "Dwarka to Somnath", description: "Drive to Somnath. Attend evening Somnath Temple Light & Sound show." },
      { id: 6, day: 6, title: "Somnath Tour & Drive to Rajkot", description: "Visit Bhalka Teerth, Triveni Sangam, and return to Rajkot." },
      { id: 7, day: 7, title: "Departure", description: "Drop-off at Rajkot airport." },
    ],
    testimonials: mockTestimonials,
    isFeatured: false,
    publishedAt: new Date().toISOString(),
  },

  // ================= RAJASTHAN =================
  {
    id: 801,
    documentId: "rj-01",
    slug: "royal-rajasthan-shrines",
    code: "RJ 011",
    title: "Royal Rajasthan Shrines",
    subtitle: "A spiritual trail visiting Jaipur, Ajmer, Pushkar, and Nathdwara.",
    destination: "rajasthan",
    category: "pilgrimage",
    state: "Rajasthan",
    price: 14800,
    currency: "INR",
    duration: "5 Nights / 6 Days",
    groupSize: "4-12 Persons",
    availability: "Every Week",
    coverImage: makeImage("/images/india-states/rajasthan-photo.png", "Pushkar Lake Ghats"),
    galleryImages: [
      makeImage("/images/india-states/rajasthan-photo.png", "Jaipur Palace"),
    ],
    description: "Explore the sacred side of Rajasthan. Seek blessings at Pushkar Brahma temple, pay respects at Ajmer Dargah, and attend the Shrinathji darshan at Nathdwara.",
    highlights: [
      "VIP Entry at Shrinathji temple in Nathdwara",
      "Attend the evening Aarti at Pushkar Lake Ghats",
      "Visit the famous Govind Devji Temple in Jaipur",
      "Private air-conditioned transport throughout the tour",
    ],
    itinerary: [
      { id: 1, day: 1, title: "Arrival in Jaipur", description: "Arrive in Jaipur. Check in. Visit Govind Devji Temple and Birla Mandir. Overnight in Jaipur." },
      { id: 2, day: 2, title: "Jaipur Sightseeing", description: "Explore Amber Fort, Hawa Mahal, and City Palace. Evening free for local shopping." },
      { id: 3, day: 3, title: "Jaipur to Pushkar via Ajmer", description: "Drive to Ajmer. Visit Dargah Sharif. Drive to Pushkar, visit Brahma temple, and watch sunset at the lake." },
      { id: 4, day: 4, title: "Pushkar to Nathdwara", description: "Drive to Nathdwara (220 km). Check in and prepare for the evening Shrinathji Temple Darshan." },
      { id: 5, day: 5, title: "Nathdwara to Udaipur", description: "Drive to Udaipur. Visit Eklingji Temple (dedicated to Lord Shiva) and City Palace." },
      { id: 6, day: 6, title: "Departure from Udaipur", description: "Transfer to Udaipur airport/station." },
    ],
    testimonials: mockTestimonials,
    isFeatured: true,
    publishedAt: new Date().toISOString(),
  },
  {
    id: 802,
    documentId: "rj-02",
    slug: "pushkar-dilwara-retreat",
    code: "RJ 012",
    title: "Pushkar & Dilwara Temple Tour",
    subtitle: "A peaceful retreat covering Mount Abu and Pushkar Lake.",
    destination: "rajasthan",
    category: "pilgrimage",
    state: "Rajasthan",
    price: 10800,
    currency: "INR",
    duration: "4 Nights / 5 Days",
    groupSize: "2-6 Persons",
    availability: "Bi-Weekly",
    coverImage: makeImage("/images/india-states/rajasthan-photo.png", "Dilwara Temples Mount Abu"),
    galleryImages: [
      makeImage("/images/india-states/rajasthan-photo.png", "Pushkar Lake"),
    ],
    description: "Seek serenity in the hills of Mount Abu, visiting the Dilwara Jain Temples, and experience the ancient desert vibes of Pushkar.",
    highlights: [
      "Guided walk of the world-famous Dilwara Jain Temples",
      "Boat ride on Nakki Lake in Mount Abu",
      "Stays in comfortable hill-station resort accommodations",
    ],
    itinerary: [
      { id: 1, day: 1, title: "Arrival in Udaipur & Transfer to Mount Abu", description: "Pick up from Udaipur. Drive to Mount Abu (160 km). Check in and enjoy sunset at Nakki Lake." },
      { id: 2, day: 2, title: "Dilwara Temples & Gurushikhar", description: "Visit the exquisite Dilwara Temples. Afternoon drive to Gurushikhar, the highest peak in Rajasthan." },
      { id: 3, day: 3, title: "Mount Abu to Pushkar", description: "Drive to Pushkar. Visit Pushkar lake and attend evening prayers. Overnight in Pushkar." },
      { id: 4, day: 4, title: "Pushkar Sightseeing & Ajmer Dargah", description: "Visit the Brahma Temple, Savitri Temple, and Ajmer Dargah. Overnight in Pushkar." },
      { id: 5, day: 5, title: "Pushkar to Udaipur Departure", description: "Drive back to Udaipur. Transfer to airport." },
    ],
    testimonials: mockTestimonials,
    isFeatured: false,
    publishedAt: new Date().toISOString(),
  },
  // ================= GOA =================
  {
    id: 901,
    documentId: "goa-01",
    slug: "goa-spiritual-heritage",
    code: "GA 011",
    title: "Weekend Goa Trip",
    subtitle: "Discover the ancient temples, historic churches, and quiet spice plantations.",
    destination: "goa",
    category: "pilgrimage",
    state: "Goa",
    price: 8500,
    currency: "INR",
    duration: "2 Nights / 3 Days",
    groupSize: "2-8 Persons",
    availability: "Every Week",
    coverImage: makeImage("/images/india-states/goa-photo.png", "Mangueshi Temple"),
    galleryImages: [
      makeImage("/images/india-states/goa.jpg", "Goa Beach"),
    ],
    description: "Explore the lesser-known spiritual heritage of Goa. Visit the historic temples of Ponda, the grand churches of Old Goa, and experience peaceful organic farm dining.",
    highlights: [
      "Guided tour of Mangueshi and Shanta Durga Temples",
      "VIP visit to Basilica of Bom Jesus",
      "Traditional Goan lunch at a spice plantation",
      "Sunset cruise on the Mandovi River",
    ],
    itinerary: [
      { id: 1, day: 1, title: "Arrival in Goa & Beach Walk", description: "Arrive at Goa Airport. Transfer to your resort near Ponda. Enjoy a relaxing evening walk on the beach." },
      { id: 2, day: 2, title: "Ponda Temples Tour", description: "Explore the famous Mangueshi and Shanta Durga temples. Witness the evening lamp lighting ritual." },
      { id: 3, day: 3, title: "Old Goa Churches", description: "Visit Basilica of Bom Jesus and Se Cathedral. Learn about the rich Portuguese-Indian heritage." },
      { id: 4, day: 4, title: "Spice Plantation & Mandovi Cruise", description: "Take a guided tour of a spice farm with a traditional lunch. Enjoy a sunset cruise on Mandovi River." },
      { id: 5, day: 5, title: "Departure", description: "Transfer to airport for your flight back home." },
    ],
    testimonials: mockTestimonials,
    isFeatured: true,
    publishedAt: new Date().toISOString(),
  },
  // ================= KARNATAKA =================
  {
    id: 1001,
    documentId: "kar-01",
    slug: "karnataka-heritage-trail",
    code: "KA 011",
    title: "Bangalore, Mysore & Coorg",
    subtitle: "A historical pilgrimage linking Hampi, Belur, Halebidu, and Mysore.",
    destination: "karnataka",
    category: "pilgrimage",
    state: "Karnataka",
    price: 11999,
    currency: "INR",
    duration: "3 Nights / 4 Days",
    groupSize: "2-8 Persons",
    availability: "Every Week",
    coverImage: makeImage("/images/india-states/hampi-photo.png", "Hampi Virupaksha"),
    galleryImages: [
      makeImage("/images/india-states/hampi.jpg", "Hampi Stone Chariot"),
    ],
    description: "Embark on an epic journey through Karnataka's spiritual history. Explore the detailed stone-carved temples of Belur and Halebidu, and wander through the ruins of Hampi.",
    highlights: [
      "Guided historical tour of Hampi ruins",
      "Explore Belur and Halebidu temples",
      "Visit Mysore Palace and Chamundi Hills",
      "AC private car transfers throughout the tour",
    ],
    itinerary: [
      { id: 1, day: 1, title: "Arrival in Bangalore & Drive to Hassan", description: "Pick up from Bangalore. Drive to Hassan. Visit the Shravanabelagola giant statue en route." },
      { id: 2, day: 2, title: "Belur & Halebidu Hoysala Temples", description: "Explore the detailed stone carvings of Chennakeshava Temple in Belur and Hoysaleswara Temple in Halebidu." },
      { id: 3, day: 3, title: "Hassan to Hampi", description: "Drive to Hampi. Check in and witness sunset from Hemakuta Hill overlooking the ruins." },
      { id: 4, day: 4, title: "Hampi Ruins Exploration", description: "Guided tour of Virupaksha Temple, Stone Chariot, Vittala Temple, and Royal Enclosure." },
      { id: 5, day: 5, title: "Hampi to Bangalore Return", description: "Drive back to Bangalore. Evening free for shopping or leisure." },
      { id: 6, day: 6, title: "Departure", description: "Transfer to Bangalore Airport or Railway station for departure." },
    ],
    testimonials: mockTestimonials,
    isFeatured: true,
    publishedAt: new Date().toISOString(),
  },
  // ================= HIMACHAL PRADESH =================
  {
    id: 1101,
    documentId: "hp-01",
    slug: "himachal-valley-gods",
    code: "HP 012",
    title: "Shimla & Manali Tour",
    subtitle: "A refreshing spiritual escape through Shimla, Manali, and Dharamshala.",
    destination: "himachal-pradesh",
    category: "pilgrimage",
    state: "Himachal Pradesh",
    price: 14500,
    currency: "INR",
    duration: "4 Nights / 5 Days",
    groupSize: "2-8 Persons",
    availability: "Every Week",
    coverImage: makeImage("/images/india-states/Hadimba-Temple.png", "Hadimba Temple"),
    galleryImages: [
      makeImage("/images/india-states/himachal.jpg", "Himachal Landscape"),
    ],
    description: "Experience the peaceful spiritual vibrations of Himachal Pradesh. Visit the pagoda Hadimba Temple, bathe in Vashisht hot springs, and explore the Tibetan temples of Mcleodganj.",
    highlights: [
      "Guided visit to Hadimba and Jakhoo Temples",
      "Explore Dalai Lama Temple in Dharamshala",
      "Scenic drive through Solang Valley",
      "Stay in beautiful hill-station resorts",
    ],
    itinerary: [
      { id: 1, day: 1, title: "Arrival in Chandigarh & Drive to Shimla", description: "Pick up from Chandigarh. Drive to Shimla. Check into your hotel and enjoy the Mall Road walk." },
      { id: 2, day: 2, title: "Shimla Sightseeing & Jakhoo Temple", description: "Visit the Jakhoo Temple, Christ Church, and Kufri hills. Witness panoramic mountain views." },
      { id: 3, day: 3, title: "Shimla to Manali", description: "Scenic drive along Beas River to Manali. Visit local shawl weaving units en route." },
      { id: 4, day: 4, title: "Hadimba Temple & Vashisht Springs", description: "Visit Hadimba Temple, Vashisht hot springs, and Mall road in Manali." },
      { id: 5, day: 5, title: "Manali to Chandigarh Return", description: "Drive back to Chandigarh. Overnight in Chandigarh." },
      { id: 6, day: 6, title: "Departure", description: "Transfer to Chandigarh airport/station." },
    ],
    testimonials: mockTestimonials,
    isFeatured: true,
    publishedAt: new Date().toISOString(),
  },
  // ================= KASHMIR =================
  {
    id: 1201,
    documentId: "kash-01",
    slug: "kashmir-heavenly-vistas",
    code: "KS 012",
    title: "Kashmir Heavenly Vistas",
    subtitle: "A scenic and spiritual tour of Srinagar, Gulmarg, and Pahalgam.",
    destination: "kashmir",
    category: "adventure",
    state: "Kashmir",
    price: 15800,
    currency: "INR",
    duration: "5 Nights / 6 Days",
    groupSize: "2-8 Persons",
    availability: "Every Week",
    coverImage: makeImage("/images/india-states/kashmir.jpg", "Dal Lake"),
    galleryImages: [
      makeImage("/images/india-states/kashmir.jpg", "Kashmir Valley"),
    ],
    description: "Experience the serene beauty and spirituality of Kashmir. Stay in a traditional houseboat, visit the ancient Shankaracharya temple, and wander through Mughal gardens.",
    highlights: [
      "Stay in a premium houseboat on Dal Lake",
      "Shikara boat ride during sunset",
      "Visit Shankaracharya Temple and Hazratbal Shrine",
      "Guided day-trip to Gulmarg meadows",
    ],
    itinerary: [
      { id: 1, day: 1, title: "Arrival in Srinagar & Houseboat Stay", description: "Arrive at Srinagar Airport. Transfer to a luxury houseboat. Enjoy a 1-hour sunset Shikara ride." },
      { id: 2, day: 2, title: "Srinagar Local Shrines & Gardens", description: "Visit Shankaracharya Temple, Shalimar Bagh, Nishat Bagh, and Hazratbal Shrine." },
      { id: 3, day: 3, title: "Srinagar to Gulmarg", description: "Drive to Gulmarg. Ride the Gondola cable car to Kongdori peak. Overnight in Gulmarg." },
      { id: 4, day: 4, title: "Gulmarg to Pahalgam", description: "Drive to Pahalgam. Visit saffron fields en route. Enjoy walk along the Lidder River." },
      { id: 5, day: 5, title: "Pahalgam to Srinagar Return", description: "Drive back to Srinagar. Rest and shop for dry fruits, shawls, and spices." },
      { id: 6, day: 6, title: "Departure", description: "Transfer to Srinagar Airport for departure." },
    ],
    testimonials: mockTestimonials,
    isFeatured: true,
    publishedAt: new Date().toISOString(),
  }
];

// ================= DYNAMIC PACKAGE FIELDS ENRICHER (FALLBACK) =================
export function populatePackageDetails(pkg: Package): Package {
  // Return the package directly if it already has rich fields defined (like Kailash Mansarovar has)
  if (pkg.hotels && pkg.booking && pkg.terms) {
    return pkg;
  }

  const destinationSlug = pkg.destination || "tamil-nadu";
  const state = pkg.state || "Tamil Nadu";
  const isAdventure = pkg.category === "adventure" || pkg.category === "honeymoon" || destinationSlug === "andaman";

  // 1. Tagline
  const tagline = pkg.tagline || (isAdventure ? "A Journey of Discovery and Serenity" : "A Divine Spiritual Pilgrimage Journey");

  // 2. Difficulty
  const difficulty = pkg.difficulty || (destinationSlug === "uttarakhand" ? "Challenging" : "Easy to Moderate");

  // 3. Max Altitude
  const maxAltitude = pkg.maxAltitude || (
    destinationSlug === "uttarakhand" ? { meters: 3583, feet: 11755, display: "3,583m (11,755ft)" } :
      destinationSlug === "madhya-pradesh" ? "650m (2,130ft)" : "Normal"
  );

  // 4. Starting Point
  const startingPoint = pkg.startingPoint || (
    pkg.itinerary && pkg.itinerary.length > 0
      ? pkg.itinerary[0].title.split("in ")[1]?.split(" &")[0]?.split(" -")[0]?.trim() || "Local Hub"
      : "Local Airport"
  );

  // 5. Best Season
  const bestSeason = pkg.bestSeason || (
    destinationSlug === "uttarakhand" ? ["May", "June", "September", "October"] :
      destinationSlug === "andaman" ? ["October", "November", "December", "January", "February", "March", "April"] :
        ["October", "November", "December", "January", "February", "March"]
  );

  // 6. Pricing Details
  const pricing = pkg.pricing || {
    startingFrom: pkg.price,
    currency: pkg.currency,
    display: `₹${pkg.price.toLocaleString("en-IN")}`,
    notes: "Per person, inclusive of stay, transport, and entry tickets",
  };

  // 7. Overview Tab
  const overviewRoute = pkg.itinerary.map((d) => d.title.split(" to ")[0].split(" - ")[0].split(" Arrival")[0].trim()).filter(Boolean).join(" → ") + " → Departure";
  const overviewDestinations = Array.from(new Set(
    pkg.itinerary
      .map((d) => d.title.split(" to ")[1]?.split(" &")[0]?.split(" -")[0]?.trim())
      .filter(Boolean)
  )).slice(0, 5) as string[];

  const overview = pkg.overview || {
    route: overviewRoute,
    destinations: overviewDestinations.length > 0 ? overviewDestinations : [startingPoint, state],
    highlights: pkg.highlights,
    themes: isAdventure ? ["Nature Lovers", "Beach & Sun", "Leisure Seekers"] : ["Spiritual Seekers", "Temple Architecture", "Vedic Heritage"],
  };

  // 8. Inclusions & Exclusions
  const inclusions = pkg.inclusions || [
    `AC accommodation on twin-sharing basis (${pkg.duration.split(" / ")[0]})`,
    "AC private cab for all transfers, sightseeing, and inter-city travel",
    isAdventure ? "Cruise ferry transfers (Makruzz/Nautika) premium class seats" : "Pre-booked VIP Entry/Special Entry Darshan passes at major shrines",
    "Pure vegetarian satvik breakfast and dinner at hotels",
    "Dedicated local driver cum tour representative",
    "All toll taxes, parking fees, fuel charges, and state permits",
  ];

  const exclusions = pkg.exclusions || [
    "Airfare or train tickets to/from starting point",
    "Lunch and extra snacks/beverages not mentioned in inclusions",
    "Personal expenses such as laundry, telephone calls, tips",
    "Camera fees or optional activities (like boat rides, scuba diving)",
    "5% Goods and Services Tax (GST) applicable over final invoice",
  ];

  // 9. Accommodations (Hotels list)
  const itineraryCities = Array.from(new Set(
    pkg.itinerary.map((day) => {
      const title = day.title;
      if (title.includes("Chennai")) return "Chennai";
      if (title.includes("Kanchipuram")) return "Kanchipuram";
      if (title.includes("Mahabalipuram")) return "Mahabalipuram";
      if (title.includes("Madurai")) return "Madurai";
      if (title.includes("Rameswaram")) return "Rameswaram";
      if (title.includes("Kanyakumari")) return "Kanyakumari";
      if (title.includes("Puri")) return "Puri";
      if (title.includes("Bhubaneswar")) return "Bhubaneswar";
      if (title.includes("Port Blair")) return "Port Blair";
      if (title.includes("Havelock")) return "Havelock Island";
      if (title.includes("Neil")) return "Neil Island";
      if (title.includes("Varanasi")) return "Varanasi";
      if (title.includes("Ayodhya")) return "Ayodhya";
      if (title.includes("Mathura") || title.includes("Vrindavan")) return "Mathura";
      if (title.includes("Ujjain")) return "Ujjain";
      if (title.includes("Omkareshwar")) return "Omkareshwar";
      if (title.includes("Indore")) return "Indore";
      if (title.includes("Haridwar")) return "Haridwar";
      if (title.includes("Kedarnath")) return "Kedarnath";
      if (title.includes("Badrinath")) return "Badrinath";
      if (title.includes("Dwarka")) return "Dwarka";
      if (title.includes("Somnath")) return "Somnath";
      if (title.includes("Pushkar")) return "Pushkar";
      if (title.includes("Mount Abu")) return "Mount Abu";
      if (title.includes("Goa")) return "Goa";
      if (title.includes("Hampi")) return "Hampi";
      if (title.includes("Hassan")) return "Hassan";
      if (title.includes("Bangalore")) return "Bangalore";
      if (title.includes("Shimla")) return "Shimla";
      if (title.includes("Manali")) return "Manali";
      if (title.includes("Srinagar")) return "Srinagar";
      if (title.includes("Gulmarg")) return "Gulmarg";
      if (title.includes("Pahalgam")) return "Pahalgam";
      return null;
    }).filter(Boolean)
  )) as string[];

  const hotels = pkg.hotels || itineraryCities.map((city) => {
    let hotelName = "Hotel Grand Residency or similar (3 Star)";
    let category = "3-Star";

    if (city === "Chennai") hotelName = "Hotel Le Royal Meridien or similar";
    else if (city === "Kanchipuram") hotelName = "Hotel GRT Regency or similar";
    else if (city === "Mahabalipuram") hotelName = "Grande Bay Resort or similar";
    else if (city === "Madurai") hotelName = "Hotel Heritage Madurai or similar";
    else if (city === "Rameswaram") hotelName = "Hotel Daiwik Rameswaram or similar";
    else if (city === "Kanyakumari") hotelName = "Hotel Sparsa Kanyakumari or similar";
    else if (city === "Puri") hotelName = "Mayfair Waves Puri or similar (4 Star)";
    else if (city === "Bhubaneswar") hotelName = "Trident Hotel Bhubaneswar or similar";
    else if (city === "Port Blair") hotelName = "Hotel Sinclairs Bayview or similar";
    else if (city === "Havelock Island") hotelName = "Symphony Palms Beach Resort or similar";
    else if (city === "Varanasi") hotelName = "Hotel Temple on Ganges or similar";
    else if (city === "Ayodhya") hotelName = "Hotel Rama Palace or similar";
    else if (city === "Ujjain") hotelName = "Hotel Mahakal Palace or similar";
    else if (city === "Omkareshwar") hotelName = "Hotel Narmada Hills or similar";
    else if (city === "Kedarnath") { hotelName = "GMVN Tourist Bungalow / Local Tents"; category = "Basic"; }
    else if (city === "Badrinath") hotelName = "Hotel Sarovar Portico or similar";
    else if (city === "Dwarka") hotelName = "Hotel Dwarkadhish Lords Eco Inn or similar";
    else if (city === "Somnath") hotelName = "Hotel Somnath Lords Inn or similar";
    else if (city === "Pushkar") hotelName = "Hotel Pushkar Palace or similar";
    else if (city === "Mount Abu") hotelName = "Hotel Hillock Mount Abu or similar";
    else if (city === "Goa") hotelName = "Heritage Village Resort Goa or similar";
    else if (city === "Hampi") hotelName = "Evolve Back Kamalapura Palace or similar";
    else if (city === "Hassan") hotelName = "The Hoysala Village Resort or similar";
    else if (city === "Bangalore") hotelName = "The Leela Palace Bangalore or similar";
    else if (city === "Shimla") hotelName = "The Oberoi Cecil Shimla or similar";
    else if (city === "Manali") hotelName = "Span Resort & Spa Manali or similar";
    else if (city === "Srinagar") hotelName = "Khyber Himalayan Resort / Luxury Houseboat";
    else if (city === "Gulmarg") hotelName = "The Khyber Himalayan Resort or similar";
    else if (city === "Pahalgam") hotelName = "Grand Mumtaz Pahalgam or similar";

    return {
      location: city,
      hotelName,
      category,
      nights: 1,
    };
  });

  // Ensure total nights match duration if possible, otherwise keep it simple
  if (hotels.length === 1 && hotels[0]) {
    const daysStr = pkg.duration.split(" / ")[0];
    const nights = parseInt(daysStr) || 2;
    hotels[0].nights = nights;
  }

  // 10. Booking Details
  const booking = pkg.booking || {
    requiredDocuments: [
      "Aadhaar card copy (Voter ID / Driving License also accepted)",
      "For helicopter bookings: Medical Fitness Certificate (Kedarnath)",
      "Scanned copy of ID must reach our office 10 days before yatra",
    ],
    paymentSchedule: [
      { stage: "Booking Deposit", amount: "25% of package value", due: "At the time of registration" },
      { stage: "Second Milestone", amount: "50% of package value", due: "15 days prior to yatra date" },
      { stage: "Final Settlement", amount: "Remaining 25% balance", due: "10 days prior to yatra date" },
    ],
    importantNotes: [
      "Darshan timings are subject to temple authorities schedules",
      "Bring original physical copies of the registered ID cards on the trip",
    ],
  };

  // 11. Terms & Conditions
  const terms = pkg.terms || {
    cancellationPolicy: [
      { timeBefore: "30+ days before departure", refund: "90% of total package amount refunded" },
      { timeBefore: "15 to 29 days before", refund: "50% of total package amount refunded" },
      { timeBefore: "Less than 10 days before", refund: "No refund available" },
    ],
    travelInsurance: "Comprehensive travel insurance is highly recommended covering cancellations, baggage loss, and medical emergencies.",
    changes: "Any changes to itineraries or hotel selections must be requested at least 15 days before departure and are subject to availability and cost additions.",
    companyRights: "We reserve the right to modify routes or cancel bookings in case of natural disasters, border closures, road blockages, or temple curfew.",
    refundPolicy: "No refund will be provided for unutilized services (hotels, cabs, meals, entries) during the trip under any circumstances.",
    ageRestriction: "For high-altitude yatras, medical authorization is required for senior citizens above 65 years.",
  };

  // 12. Pre-Departure Guide
  const preDeparture = pkg.preDeparture || {
    clothing: isAdventure
      ? ["Light casual summer clothes", "Swimming suits and sunglasses", "Comfortable walking shoes", "Sun hats"]
      : ["Traditional dress code for temples (Dhoti/formal trousers for men, Saree/Kurta for women)", "Sleeveless and shorts are strictly prohibited in temples", "Socks for walking on hot temple stones", "Light jacket for AC cars"],
    essentials: [
      "Personal medical kit (painkillers, digestives, band-aids)",
      "High SPF Sunscreen and insect repellent lotion",
      "Re-usable water bottle for active walking sessions",
      "Snacks like dry fruits, energy bars, and chocolates",
    ],
    health: isAdventure
      ? ["Consult your doctor for sea sickness medications if cruising", "Ensure basic physical fitness for walks and water activities"]
      : ["Must be physically fit for standing in temple queues and climbing stairs", "Walk at least 2km daily to prepare for the trip", "Hydrate frequently during temple walks"],
    currency: "Indian Rupees (INR) is accepted throughout all stops. ATMs are widely available in cities.",
  };

  // 13. FAQs
  const faq = pkg.faq || [
    {
      question: "Is this package suitable for senior citizens?",
      value: "Yes, we coordinate comfortable AC transport, locate hotels close to temples, and arrange wheelchair/escort support at major shrines.",
    },
    {
      question: "Can we customize the dates and hotels of this tour?",
      value: "Absolutely. All our domestic packages can be customized. Feel free to contact our travel desk at any time.",
    },
    {
      question: "What standards of dining are included?",
      value: "We include fresh, clean, hygienic vegetarian breakfast and dinner at the hotels or designated clean satvik restaurants along the route.",
    },
  ].map((item) => ({ question: item.question, answer: item.value }));

  // Update itinerary days to have activities, meals, etc.
  const populatedItinerary = pkg.itinerary.map((d) => ({
    ...d,
    activities: d.activities || [d.description || ""],
    accommodation: d.accommodation || (hotels[0] ? hotels[0].hotelName : "Standard Hotel"),
    meals: d.meals || { breakfast: true, lunch: false, dinner: true },
    altitude: d.altitude || "Normal",
    travelDistance: d.travelDistance || "As per schedule",
  }));

  // Return extended package properties merged with base
  return {
    ...pkg,
    tagline,
    difficulty,
    maxAltitude,
    startingPoint,
    bestSeason,
    pricing,
    overview,
    inclusions,
    exclusions,
    hotels,
    booking,
    terms,
    preDeparture,
    faq,
    itinerary: populatedItinerary,
  };
}
