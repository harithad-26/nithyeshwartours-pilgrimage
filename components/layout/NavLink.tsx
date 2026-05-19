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
        font-serif text-base font-normal tracking-tight transition-colors duration-300 pb-1
        ${isActive
          ? "text-gold-dark border-b-2 border-gold-dark"
          : "text-midnight/70 hover:text-midnight"
        }
      `}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
