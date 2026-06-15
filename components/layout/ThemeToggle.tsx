"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [edges, setEdges] = useState<"sharp" | "rounded">("sharp");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Determine initial state from html attribute set by the blocking head script
    const current = document.documentElement.getAttribute("data-theme-edges") as "sharp" | "rounded" | null;
    if (current) {
      setEdges(current);
    }
    setMounted(true);
  }, []);

  const handleToggle = (value: "sharp" | "rounded") => {
    setEdges(value);
    document.documentElement.setAttribute("data-theme-edges", value);
    localStorage.setItem("theme-edges", value);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="theme-toggle fixed bottom-6 left-6 z-50 flex items-center bg-navy/90 backdrop-blur-md border border-white/10 p-1 rounded-full shadow-2xl transition-all duration-300 hover:border-gold/30">
      <div className="flex items-center gap-1">
        {/* Sharp variant toggle */}
        <button
          onClick={() => handleToggle("sharp")}
          className={`theme-toggle px-3.5 py-1.5 rounded-full text-[10px] font-sans font-extrabold uppercase tracking-widest transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
            edges === "sharp"
              ? "bg-gold text-midnight shadow-md font-black"
              : "text-white/70 hover:text-white hover:bg-white/5"
          }`}
          aria-label="Set border style to sharp corners"
        >
          {/* Square outline icon */}
          <span className="w-2.5 h-2.5 border border-current block shrink-0" />
          <span>Sharp</span>
        </button>

        {/* Subtle rounded variant toggle */}
        <button
          onClick={() => handleToggle("rounded")}
          className={`theme-toggle px-3.5 py-1.5 rounded-full text-[10px] font-sans font-extrabold uppercase tracking-widest transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
            edges === "rounded"
              ? "bg-gold text-midnight shadow-md font-black"
              : "text-white/70 hover:text-white hover:bg-white/5"
          }`}
          aria-label="Set border style to subtle rounded corners"
        >
          {/* Rounded outline icon */}
          <span className="w-2.5 h-2.5 border border-current rounded-[3px] block shrink-0" />
          <span>Rounded</span>
        </button>
      </div>
    </div>
  );
}
