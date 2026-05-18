interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <p
          className={`font-sans text-xs font-semibold tracking-[0.12em] uppercase mb-3 ${
            light ? "text-gold" : "text-gold-dark"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-3xl md:text-4xl font-semibold leading-tight tracking-tight ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 font-sans text-base leading-relaxed max-w-xl ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-midnight/60"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
