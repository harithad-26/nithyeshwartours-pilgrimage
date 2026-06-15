import Image from "next/image";

const TEAM_MEMBERS = [
  {
    name: "Shri Nithyeshwar",
    role: "Founder & Spiritual Guide",
    image: "/images/team/founder.png",
    description: "With over 35 years of pilgrimage experience, Shri Nithyeshwar combines deep spiritual knowledge with a passion for authentic cultural experiences.",
  },
  {
    name: "Anand Kumar",
    role: "Managing Director",
    image: "/images/team/md.png",
    description: "Leading operations with 20+ years in tourism, ensuring every journey meets our exacting standards of quality and care.",
  },
  {
    name: "Priya Sharma",
    role: "Head of Customer Experience",
    image: "/images/team/customer.png",
    description: "Dedicated to ensuring every pilgrim feels supported throughout their sacred journey, from inquiry to return.",
  },
  {
    name: "Dr. Ramesh Iyer",
    role: "Cultural & Heritage Advisor",
    image: "/images/team/advisor.png",
    description: "PhD in Indology, providing authentic insights into temple traditions, rituals, and spiritual significance of destinations.",
  },
];

export function TeamSection() {
  return (
    <section className="py-32 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold-dark mb-4">
            The People Behind Your Journey
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-midnight font-normal leading-snug mb-6">
            Meet Our Team
          </h2>
          <p className="font-sans text-lg text-midnight/60 max-w-2xl mx-auto leading-relaxed">
            Passionate experts dedicated to curating transformative spiritual experiences
            that honor tradition while embracing modern comfort and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={index}
              className="group text-center active:scale-[0.98] transition-transform duration-150 cursor-pointer"
            >
              <div className="relative aspect-square mb-6 rounded-2xl overflow-hidden bg-surface-low border border-midnight/5 shadow-ambient transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:border-gold-dark/30">
                {/* Placeholder with gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-muted/20 to-midnight/10 flex items-center justify-center">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-midnight/20">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeWidth="1.5" />
                    <circle cx="12" cy="7" r="4" strokeWidth="1.5" />
                  </svg>
                </div>
                {/* Team member avatar */}
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-midnight/0 group-hover:bg-midnight/5 transition-all duration-300" />
              </div>
              <h3 className="font-serif text-xl text-midnight font-normal mb-2">
                {member.name}
              </h3>
              <p className="font-sans text-sm font-bold text-gold-dark mb-4 uppercase tracking-wider">
                {member.role}
              </p>
              <p className="font-sans text-sm text-midnight/60 leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        {/* Join Our Team CTA */}
        <div className="mt-20 text-center">
          <div className="max-w-2xl mx-auto bg-white rounded-lg p-10 border border-midnight/10">
            <h3 className="font-serif text-2xl text-midnight font-normal mb-4">
              Join Our Sacred Mission
            </h3>
            <p className="font-sans text-base text-midnight/60 leading-relaxed mb-6">
              We&apos;re always looking for passionate individuals who share our vision
              of creating meaningful spiritual journeys. If you have expertise in
              travel, spirituality, or customer care, we&apos;d love to hear from you.
            </p>
            <a
              href="/inquiry"
              className="inline-block font-sans font-bold text-xs tracking-[0.12em] uppercase text-gold-dark hover:text-midnight transition-colors border-b border-gold-dark hover:border-midnight pb-1"
            >
              Explore Opportunities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
