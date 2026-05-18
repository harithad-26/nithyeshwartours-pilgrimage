import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: Variant;
  href?: string;
  size?: "sm" | "md" | "lg";
}

const styles: Record<Variant, string> = {
  primary:
    "bg-navy text-gold border-transparent hover:bg-midnight",
  secondary:
    "bg-transparent text-gold-dark border border-gold-dark hover:bg-gold hover:text-midnight",
  ghost:
    "bg-transparent text-midnight border-transparent hover:bg-surface-low",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const base = `
    inline-flex items-center justify-center gap-2
    font-sans font-semibold rounded-md
    transition-all duration-300
    focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${styles[variant]} ${sizes[size]} ${className}
  `;

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button className={base} {...props}>
      {children}
    </button>
  );
}
