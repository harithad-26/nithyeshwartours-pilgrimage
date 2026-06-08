import Image from "next/image";
import { getStrapiImageUrl } from "@/lib/strapi";
import type { Testimonial } from "@/lib/types";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <blockquote className="bg-white p-8 rounded-md shadow-ambient flex flex-col gap-5">
      {/* Avatar + identity */}
      <div className="flex items-start gap-4">
        {t.avatar ? (
          <Image
            src={getStrapiImageUrl(t.avatar.url)}
            alt={t.name}
            width={56}
            height={56}
            className="rounded-xl object-cover grayscale shrink-0"
          />
        ) : (
          <div className="w-14 h-14 rounded-xl bg-surface-low shrink-0 flex items-center justify-center">
            <span className="font-serif text-xl text-midnight/30">
              {t.name.charAt(0)}
            </span>
          </div>
        )}
        <div className="pt-1">
          <cite className="font-sans text-sm font-semibold text-midnight not-italic block">
            {t.name}
          </cite>
          <p className="font-sans text-xs text-midnight/40 mt-0.5">{t.location}</p>
          <div
            className="flex gap-0.5 mt-2"
            aria-label={`${t.rating} out of 5 stars`}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill={i < t.rating ? "var(--color-gold)" : "none"}
                stroke="var(--color-gold)"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Quote */}
      <p className="font-sans text-sm leading-relaxed text-midnight/70 flex-1">
        &ldquo;{t.text}&rdquo;
      </p>

      {/* Badge */}
      <footer className="pt-4 border-t border-surface-low">
        <span className="font-sans text-[10px] font-semibold tracking-[0.12em] uppercase text-gold-dark">
          Verified Traveler
        </span>
      </footer>
    </blockquote>
  );
}
