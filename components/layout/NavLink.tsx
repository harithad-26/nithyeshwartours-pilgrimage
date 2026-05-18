"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={`
        font-sans text-sm font-medium tracking-wide transition-colors duration-300
        ${isActive
          ? "text-gold"
          : "text-white/80 hover:text-white"
        }
      `}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
