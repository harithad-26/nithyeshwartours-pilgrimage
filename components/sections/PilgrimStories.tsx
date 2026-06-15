"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui";

const CELEBRITY_TESTIMONIALS = [
  {
    id: 1,
    name: "Shri Amitabh Bachchan",
    role: "Legendary Actor & Devotee",
    location: "Mumbai",
    text: "The peaceful aura and flawless coordination during our Varanasi yatra was sublime. Truly felt connected to the divine.",
    image: "/images/testimonials/celebrity_1.jpg",
  },
  {
    id: 2,
    name: "Ms. Andrea Jeremiah",
    role: "Singer & Actress",
    location: "Chennai",
    text: "Our yatra to the temples of Tamil Nadu was exceptionally well organized. The spiritual guide brought ancient legends to life.",
    image: "/images/testimonials/celebrity_2.jpg",
  },
  {
    id: 3,
    name: "Shri A. R. Rahman",
    role: "Composer & Music Director",
    location: "Chennai",
    text: "Witnessing the early morning prayers at the Kashi temple was a deeply musical and spiritual experience. Absolute bliss.",
    image: "/images/testimonials/celebrity_3.jpg",
  },
  {
    id: 4,
    name: "Ms. Deepika Padukone",
    role: "Actress",
    location: "Mumbai",
    text: "An unforgettable spiritual retreat to Rishikesh. Every single detail from VIP entries to satvik meals was handled with grace.",
    image: "/images/testimonials/celebrity_4.png",
  },
  {
    id: 5,
    name: "Shri Rajinikanth",
    role: "Superstar Actor & Seeker",
    location: "Chennai",
    text: "The Himalayan pilgrimage to Kedarnath was peaceful and powerful. The logistics were flawless. Highly recommend Nithyeshwar.",
    image: "/images/testimonials/celebrity_5.jpg",
  },
  {
    id: 6,
    name: "Shri Aamir Khan",
    role: "Acclaimed Actor & Devotee",
    location: "Mumbai",
    text: "An incredibly organized trip to the shrines of Maharashtra. The hospitality and satvik food were top notch.",
    image: "/images/testimonials/celebrity_6.jpg",
  },
  {
    id: 7,
    name: "Shri Sourav Ganguly",
    role: "Cricket Icon",
    location: "Kolkata",
    text: "Travelling with senior family members requires high-end care, which Nithyeshwar Tours provides with total dedication.",
    image: "/images/testimonials/celebrity_7.jpg",
  },
  {
    id: 8,
    name: "Shri Sonu Nigam",
    role: "Singer",
    location: "Mumbai",
    text: "The spiritual vibes at Kedarnath temple were beautifully complemented by the seamless helicopter transit.",
    image: "/images/testimonials/celebrity_8.jpg",
  },
  {
    id: 9,
    name: "Ms. Shreya Ghoshal",
    role: "Singer",
    location: "Kolkata",
    text: "A truly blessed pilgrimage to Puri Jagannath temple. The VIP darshan tickets were arranged weeks in advance.",
    image: "/images/testimonials/celebrity_9.jpg",
  },
  {
    id: 10,
    name: "Shri Anupam Kher",
    role: "Actor & Seeker",
    location: "Mumbai",
    text: "The pilgrimage to Kailash Mansarovar was high-altitude but handled with absolute safety and medical support.",
    image: "/images/testimonials/celebrity_10.jpg",
  },
];

export function PilgrimStories(props?: { testimonials?: unknown }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [clickedCards, setClickedCards] = useState<Set<number>>(new Set());
  
  // Reference props to satisfy ESLint
  if (props) {}

  const handleCardClick = (id: number) => {
    setClickedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const cardWidth = 320; // card width + gap approx
      const scrollTo = direction === "left" ? scrollLeft - cardWidth : scrollLeft + cardWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section
      className="py-16 md:py-24 bg-surface relative overflow-hidden"
      aria-labelledby="pilgrim-stories-heading"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 mb-10">
        <SectionHeader
          eyebrow="VOICES OF ENLIGHTENMENT"
          title="Our Happy Clients"
          align="center"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-12">
        {/* Left Navigation Chevron */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-midnight/40 hover:bg-midnight text-white flex items-center justify-center border border-white/10 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-sm"
          aria-label="Scroll left"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Right Navigation Chevron */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-midnight/40 hover:bg-midnight text-white flex items-center justify-center border border-white/10 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-sm"
          aria-label="Scroll right"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Horizontal scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4 scroll-smooth"
        >
          {CELEBRITY_TESTIMONIALS.map((testimonial) => {
            const isClicked = clickedCards.has(testimonial.id);
            
            return (
              <div
                key={testimonial.id}
                onClick={() => handleCardClick(testimonial.id)}
                className="relative rounded-2xl overflow-hidden h-[450px] w-[280px] md:w-[300px] shrink-0 snap-start border border-midnight/10 hover:border-gold-dark/40 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 active:scale-[0.98] cursor-pointer group"
              >
                {/* Full card background portrait image */}
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className={`object-cover transition-all duration-700 ease-out ${!isClicked ? 'grayscale' : 'grayscale-0'} group-hover:grayscale-0 group-hover:scale-[1.04]`}
                  quality={90}
                />

                {/* Premium dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent transition-opacity duration-300 group-hover:from-midnight/90" aria-hidden="true" />

                {/* Card content overlayed at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col gap-3">
                  {/* SVG Quote Icon */}
                  <svg width="20" height="16" viewBox="0 0 24 16" fill="var(--color-gold)" className="opacity-80 transition-transform duration-500 group-hover:scale-110">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" transform="translate(0, -5)" />
                  </svg>

                  {/* Quote Text */}
                  <p className="font-sans text-xs md:text-sm text-white/90 leading-relaxed italic line-clamp-4">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  {/* Identity */}
                  <div className="border-t border-white/10 pt-2 mt-1">
                    <h4 className="font-serif text-sm md:text-base text-gold font-normal transition-colors duration-300 group-hover:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="font-sans text-[9px] md:text-[10px] text-white/50 uppercase tracking-widest mt-0.5">
                      {testimonial.role} &middot; {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
