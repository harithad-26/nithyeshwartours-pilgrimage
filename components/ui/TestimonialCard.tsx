import Image from "next/image";
import { getStrapiImageUrl } from "@/lib/strapi";
import type { Testimonial } from "@/lib/types";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <blockquote className="bg-white p-8 rounded-2xl border border-midnight/5 shadow-ambient flex flex-col gap-6 h-full transition-shadow duration-300 hover:shadow-card">
      {/* Avatar + identity */}
      <div className="flex items-start gap-4">
        {t.avatar ? (
          <Image
            src={getStrapiImageUrl(t.avatar.url)}
            alt={t.name}
            width={56}
            height={56}
            className="rounded-2xl object-cover grayscale shrink-0 border border-midnight/5"
          />
        ) : (
          <div className="w-14 h-14 rounded-2xl bg-surface-low shrink-0 flex items-center justify-center border border-midnight/5">
            <span className="font-serif text-xl font-bold text-gold-dark/60">
              {t.name.charAt(0)}
            </span>
          </div>
        )}
        <div className="pt-0.5">
          <cite className="font-serif text-base font-semibold text-midnight not-italic block">
            {t.name}
          </cite>
          <p className="font-sans text-xs font-medium text-midnight/40 mt-0.5">{t.location}</p>
          <div
            className="flex gap-0.5 mt-2"
            aria-label={`${t.rating} out of 5 stars`}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill={i < t.rating ? "var(--color-gold)" : "none"}
                stroke="var(--color-gold)"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Quote */}
      <p className="font-sans text-sm leading-relaxed text-midnight/70 flex-1 italic">
        &ldquo;{t.text}&rdquo;
      </p>

      {/* Verified Badge */}
      <footer className="pt-4 border-t border-surface-low flex items-center gap-1.5">
        <svg className="text-gold-dark/80 shrink-0" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 11 11 13 15 9" />
        </svg>
        <span className="font-sans text-[9px] font-bold tracking-[0.15em] uppercase text-gold-dark/80 select-none">
          Verified Pilgrimage
        </span>
      </footer>
    </blockquote>
  );
}
