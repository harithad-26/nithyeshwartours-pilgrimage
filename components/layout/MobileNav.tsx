"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function MobileNavToggle() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const btn = document.querySelector('[aria-controls="mobile-nav"]') as HTMLButtonElement | null;
    const menu = document.getElementById("mobile-nav");
    if (!btn || !menu) return;

    btn.setAttribute("aria-expanded", String(open));
    menu.classList.toggle("hidden", !open);
  }, [open]);

  return (
    <button
      className="md:hidden text-white p-2 rounded-md focus-visible:outline-gold"
      aria-label={open ? "Close navigation menu" : "Open navigation menu"}
      onClick={() => setOpen((v) => !v)}
    >
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        {open
          ? <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
          : <path d="M3 5h16M3 11h16M3 17h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
        }
      </svg>
    </button>
  );
}
