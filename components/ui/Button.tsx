import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: Variant;
  href?: string;
  size?: "sm" | "md" | "lg";
}

const styles: Record<Variant, string> = {
  primary: "btn-premium-primary",
  secondary: "btn-premium-secondary",
  ghost: "btn-premium-glass text-midnight border-midnight/20 hover:bg-midnight/5 hover:text-midnight",
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
    btn-premium
    ${styles[variant]}
    focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${className}
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

