import Image from "next/image";
import { SectionHeader } from "@/components/ui";

export function FounderStory() {
  return (
    <section className="py-20 md:py-28 bg-surface-low relative overflow-hidden" aria-labelledby="founder-story-heading">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[400px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-midnight/5 group">
              <Image
                src="/images/team/founder.png"
                alt="Shri Nithyeshwar, Founder of Nithyeshwar Tours"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover transition-transform duration-750 ease-out group-hover:scale-105"
              />
              {/* Subtle gold gradient accent on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="text-left">
              <SectionHeader
                eyebrow="Founder's Vision"
                title="A Legacy of Devotion"
                align="left"
              />
            </div>

            <div className="font-sans text-base text-midnight/80 leading-relaxed flex flex-col gap-4 mt-2">
              <p className="italic text-lg font-serif text-gold-dark leading-relaxed">
                &ldquo;Founded with a vision to make sacred travel accessible, comfortable, and meaningful, 
                Nithyeshwar Tours has spent decades guiding pilgrims across India and beyond.&rdquo;
              </p>
              <p>
                Our journey began with a simple observation: spiritual journeys should not be burdened by logistical anxieties. 
                For senior citizens, families, and devotees, a pilgrimage is a moment of deep, personal connection with the divine. 
                Our mission has always been to shoulder every detail—from comfortable accommodation to safe transit and expert local guides—so you can travel with a quiet mind.
              </p>
              <p>
                Over the past 30 years, we have had the honor of walking alongside thousands of families, serving senior pilgrims with the utmost devotion and care, and preserving the sanctity of these ancient routes.
              </p>
            </div>

            <div className="border-t border-midnight/10 pt-6 mt-2 flex flex-col gap-1">
              <h4 className="font-serif text-lg text-midnight font-normal">Shri Nithyeshwar</h4>
              <p className="font-sans text-[10px] text-midnight/45 uppercase tracking-widest font-semibold">
                Founder & Spiritual Director &middot; Nithyeshwar Tours
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
