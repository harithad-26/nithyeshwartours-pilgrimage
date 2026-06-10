"use client";

import { useState } from "react";

// Icon Components replacing system emojis
const SeniorsIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
  </svg>
);

const VloggersIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const FamiliesIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);

const CouplesIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

const SeekersIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M5.03 5.03l1.59 1.59m10.76 10.76l1.59 1.59M3 12h2.25m13.5 0H21M5.03 18.97l1.59-1.59m10.76-10.76l1.59-1.59M12 9a3 3 0 100 6 3 3 0 000-6z" />
  </svg>
);

const FirstTimersIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9l-4 1.5L9.5 14.5l4-1.5L15 9z" />
  </svg>
);

const PERSONA_ICONS: Record<string, (props: { className?: string }) => React.JSX.Element> = {
  seniors: SeniorsIcon,
  vloggers: VloggersIcon,
  families: FamiliesIcon,
  couples: CouplesIcon,
  seekers: SeekersIcon,
  firsttimers: FirstTimersIcon,
};

const PERSONAS = [
  {
    id: "seniors",
    label: "Senior Citizens",
    title: "Safe & Reassuring Sacred Yatra for Seniors",
    description: "Your safety and comfort are our highest priorities. We ensure senior pilgrims can focus entirely on devotion while our experienced team handles every medical and physical detail.",
    highlights: [
      {
        title: "Daily Oximeter & Medical Checks",
        detail: "Twice-daily vital and blood oxygen level monitoring by our on-trip certified medical staff."
      },
      {
        title: "Portable Oxygen Backup",
        detail: "Continuous supply of pressurized oxygen cylinders and personal canisters carried alongside you."
      },
      {
        title: "Pre-Booked Pony & Porter Services",
        detail: "Guaranteed physical assistance and riding ponies reserved in advance for the 52km Parikrama trek."
      },
      {
        title: "Slow-Paced Adaptable Itinerary",
        detail: "Designed with extra rest hours and gradual altitude ascent to minimize altitude sickness."
      }
    ]
  },
  {
    id: "vloggers",
    label: "Travel Vloggers",
    title: "Seamless Tech & Gear Support for Creators",
    description: "Capture the ultimate spiritual journey without worrying about battery drain or local permits. We provide creators with the critical logistical backbone required for high-altitude filmmaking.",
    highlights: [
      {
        title: "Solar Charging Stations",
        detail: "Access to high-capacity solar chargers and power hubs at remote basecamps."
      },
      {
        title: "Permit & Drone Regulations Guidance",
        detail: "Comprehensive hand-holding through military checkpoints, regional filming rules, and local guidelines."
      },
      {
        title: "High-Altitude Gear Protection",
        detail: "Expert pre-trip briefings on battery thermal isolation, camera condensation, and cold-weather operation."
      },
      {
        title: "Curated Scenic Spots & Timings",
        detail: "Trek leaders guide you to the best vantage points for sunrise, sunset, and golden-hour shots."
      }
    ]
  },
  {
    id: "families",
    label: "Families",
    title: "Safe, Comfortable, & Bond-Building Family Journeys",
    description: "Embark on a multi-generational pilgrimage. We carefully organize meals, private transport, and lodging details to ensure children and elders feel completely at home.",
    highlights: [
      {
        title: "Custom Satvik Kid-Friendly Meals",
        detail: "Freshly prepared, non-spicy, nutritious vegetarian meals tailored to suit younger palates."
      },
      {
        title: "Private Vehicle Upgrades",
        detail: "Travel in spacious, air-conditioned coaches and SUVs reserved exclusively for family comfort."
      },
      {
        title: "Adjacent Room Bookings",
        detail: "Guaranteed side-by-side or family room allocations at all basecamps and hotels."
      },
      {
        title: "Dedicated Family Guide",
        detail: "An extra assigned crew member to help watch over children or assist grandparents during walks."
      }
    ]
  },
  {
    id: "couples",
    label: "Newlyweds & Couples",
    title: "Sacred Blessings & Premium Couple Comfort",
    description: "Begin your new life chapter with the divine blessings of Shiva and Shakti. Enjoy thoughtful upgrades that balance sacred rituals with premium privacy.",
    highlights: [
      {
        title: "Twin-Sharing Room Upgrades",
        detail: "Guaranteed private twin-sharing accommodation in Kathmandu and key transit stops."
      },
      {
        title: "Private Puja Arrangements",
        detail: "Exclusive family rituals and guided morning prayer sessions on the banks of Lake Mansarovar."
      },
      {
        title: "Mansarovar Double Tents",
        detail: "Premium double-occupancy tents equipped with cold-weather thermal sleeping bags."
      },
      {
        title: "Shiva-Shakti Blessing Gift",
        detail: "A sanctified Rudraksha and a decorative copper pot containing holy Mansarovar water."
      }
    ]
  },
  {
    id: "seekers",
    label: "Spiritual Seekers",
    title: "Deep Inner Exploration & Vedic Wisdom",
    description: "For pilgrims seeking more than a travel route. Connect with the ancient mystical energy of Mount Kailash through meditation, yoga, and authentic spiritual commentary.",
    highlights: [
      {
        title: "Guided Morning Meditation",
        detail: "Sunrise meditation sessions and gentle yogic breathing exercises at the foothills of Kailash."
      },
      {
        title: "Vedic History Commentary",
        detail: "In-depth insights into the Puranas, Upanishads, and Shiva lore shared by our learned spiritual guides."
      },
      {
        title: "Mauna (Silence) Trek Intervals",
        detail: "Optional designated hours of silence during the hike to absorb the natural energy."
      },
      {
        title: "Holy Bath & Havan Rituals",
        detail: "Fully assisted sacred dips and Vedic fire ceremonies arranged at Mansarovar."
      }
    ]
  },
  {
    id: "firsttimers",
    label: "First-Time Travelers",
    title: "Complete Hand-Holding for First-Time Pilgrims",
    description: "Trekking at high altitudes can feel daunting. We take care of all training, packing guidance, and visa logistics so you can step onto the path with absolute confidence.",
    highlights: [
      {
        title: "Pre-Departure Fitness Coaching",
        detail: "Detailed guidelines on breathing exercises (Pranayama), cardio training, and walking targets."
      },
      {
        title: "Detailed Gear & Packing Audits",
        detail: "Personalized reviews of your cold-weather layers, footwear, and trekking gear before departure."
      },
      {
        title: "Seamless Visa & Checkpoint Logistics",
        detail: "Our visa desk manages Tibet entry permits and coordinates your crossing step-by-step."
      },
      {
        title: "24/7 Helpline Support",
        detail: "Immediate access to our operations and emergency response cell throughout the entire journey."
      }
    ]
  }
];

export default function PersonaHighlights() {
  const [activeTab, setActiveTab] = useState(PERSONAS[0].id);
  const activePersona = PERSONAS.find((p) => p.id === activeTab) || PERSONAS[0];
  const ActiveIcon = PERSONA_ICONS[activePersona.id];

  return (
    <section className="py-24 px-6 bg-white border-b border-midnight/5" aria-labelledby="persona-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase text-gold-dark mb-3 block">
            Tailored Experiences
          </span>
          <h2 id="persona-heading" className="font-serif text-4xl text-midnight font-normal leading-tight">
            How We Curate the Yatra for You
          </h2>
          <p className="font-sans text-sm text-midnight/70 mt-4 max-w-md mx-auto">
            Select your profile below to see how we customize comfort, safety, and activities to make your pilgrimage perfect.
          </p>
        </div>

        {/* Tab Headers */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-midnight/5 pb-6">
          {PERSONAS.map((p) => {
            const isActive = p.id === activeTab;
            const Icon = PERSONA_ICONS[p.id];
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg font-sans text-sm font-semibold tracking-wide transition-all duration-300 border focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  isActive
                    ? "bg-midnight text-gold border-midnight shadow-md scale-102"
                    : "bg-surface text-midnight/75 border-midnight/5 hover:bg-gold-dark/5 hover:text-midnight"
                }`}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${p.id}`}
                id={`tab-${p.id}`}
              >
                {Icon && <Icon className="w-[18px] h-[18px] shrink-0" />}
                <span>{p.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Panel */}
        <div
          id={`panel-${activePersona.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activePersona.id}`}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start animate-[fadeIn_0.5s_ease-out]"
        >
          {/* Text block */}
          <div className="lg:col-span-2 space-y-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold-dark/10 border border-gold-dark/20 text-gold-dark">
              {ActiveIcon && <ActiveIcon className="w-7 h-7" />}
            </div>
            <h3 className="font-serif text-3xl text-midnight font-normal leading-tight">
              {activePersona.title}
            </h3>
            <p className="font-sans text-base text-midnight/75 leading-relaxed font-light">
              {activePersona.description}
            </p>
            <div className="pt-4">
              <a
                href="/inquiry"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gold text-midnight font-sans text-xs font-bold tracking-widest uppercase rounded hover:bg-gold/90 transition-all duration-300 min-h-11 shadow-sm"
              >
                Customize My Yatra
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {activePersona.highlights.map((h, idx) => (
              <div
                key={idx}
                className="p-6 bg-surface border border-midnight/5 rounded-lg shadow-ambient hover:shadow-card hover:-translate-y-1 hover:border-gold-dark/20 transition-all duration-300"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-gold-dark/10 border border-gold-dark/20 flex items-center justify-center shrink-0 mt-1">
                    <svg className="w-3 h-3 text-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-base text-midnight font-medium leading-snug">
                      {h.title}
                    </h4>
                    <p className="font-sans text-xs text-midnight/75 leading-relaxed font-light">
                      {h.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
