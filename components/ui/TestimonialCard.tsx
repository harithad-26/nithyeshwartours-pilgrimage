import Image from "next/image";
import { getStrapiImageUrl } from "@/lib/strapi";
import type { Testimonial } from "@/lib/types";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <blockquote className="bg-surface-lowest p-8 rounded-md shadow-ambient flex flex-col gap-4">
      {/* Stars */}
      <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            width="14"
            height="14"
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

      <p className="font-sans text-sm leading-relaxed text-midnight/70 italic flex-1">
        &ldquo;{t.text}&rdquo;
      </p>

      <footer className="flex items-center gap-3 pt-2 border-t border-surface-low">
        {t.avatar && (
          <Image
            src={getStrapiImageUrl(t.avatar.url)}
            alt={t.name}
            width={36}
            height={36}
            className="rounded-full object-cover"
          />
        )}
        <div>
          <cite className="font-sans text-sm font-semibold text-navy not-italic">{t.name}</cite>
          <p className="font-sans text-xs text-midnight/40">{t.location}</p>
        </div>
      </footer>
    </blockquote>
  );
}
