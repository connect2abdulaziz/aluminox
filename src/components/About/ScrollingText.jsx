"use client";

import { Sparkles } from "lucide-react";

export default function ScrollingText() {
  return (
    <div className="relative overflow-hidden bg-black py-12 group">

      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-black to-transparent z-10" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-black to-transparent z-10" />

      {/* Marquee Track */}
      <div className="flex w-max animate-marquee">

        {/* FIRST SET */}
        <div className="flex items-center">
          <ScrollingItem />
        </div>

        {/* DUPLICATE SET (for seamless loop) */}
        <div className="flex items-center">
          <ScrollingItem />
        </div>

      </div>
    </div>
  );
}

function ScrollingItem() {
  return (
    <div className="flex items-center whitespace-nowrap">
      <span className="text-[120px] font-extrabold uppercase tracking-tight text-transparent stroke-text transition-colors duration-500 group-hover:text-[#3FA815] mr-12">
        Building Excellence
      </span>

      <Sparkles
  size={80}
  className="mx-12 text-[#3FA815] opacity-40"
  stroke="none"
  fill="currentColor"
/>
    </div>
  );
}