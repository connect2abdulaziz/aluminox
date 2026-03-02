"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY || window.pageYOffset || 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative z-0 w-full min-h-screen  text-white">
      {/* ===== Background Video (Parallax) – overflow only here so sticky nav works ===== */}
      <div
        className="absolute inset-0 overflow-hidden will-change-transform"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-bg-2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-overlay/40" />
      </div>

      {/* ===== Content Wrapper ===== */}
      <div className="relative z-20 flex flex-col min-h-screen">
        {/* ===== Hero Content (subtle counter-parallax) ===== */}
        <div className="flex-1 flex items-center justify-center text-center px-6">
          <div
            className="max-w-4xl will-change-transform"
            style={{
              transform: `translateY(${scrollY * -0.05}px)`,
            }}
          >

            {/* Pill Badge */}
            <div
              data-aos="fade-up"
              className="inline-block mb-6 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-green-500/20 text-sm tracking-wide">
              Build The Future, Today
            </div>

            {/* Main Heading */}
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-3xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6">
              {/* ONE STOP SOLUTION FOR ALL YOUR <span className="text-[#31572C] font-bold">GLAZING</span>  REQUIREMENTS */}
              YOUR RELIABLE FACADE EXPERTS
            </h1>


            {/* Sub Paragraph */}
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Delivering precision Facade Inspection & Engineering
              services across the UAE with over 20 years of expertise.
            </p>

            {/* CTA Button */}
           
            <div
  data-aos="zoom-in"
  data-aos-delay="600"
  className="inline-block"
>
  <div className="transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]">
    <button
      className="relative px-10 py-4 rounded-full text-lg font-medium text-white shadow-[0_10px_30px_rgba(16,185,129,0.35)] bg-[#31572C]"
     
    >
      Request a Consultation →
    </button>
  </div>
</div>

          </div>
        </div>

      </div>
    </div>
  );
}