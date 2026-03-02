"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Shared page hero: image background + title + text.
 * Used by About, Services, and other inner pages.
 *
 * @param {string} image - Image path (e.g. "/images/about-us-2.jpg")
 * @param {string} imageAlt - Alt text for the image
 * @param {string} title - Main heading
 * @param {string} text - Subtitle / description
 */
export default function PageHero({ image, imageAlt, title, text }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY || window.pageYOffset || 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-[55vh] flex flex-col">
      {/* Parallax background – overflow only here so sticky nav works */}
      <div
        className="absolute inset-0 overflow-hidden will-change-transform"
        style={{
          transform: `translateY(${scrollY * 0.25}px)`,
        }}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay – fits dark theme, keeps subject readable */}
        <div className="absolute inset-0 bg-overlay/40" />
        {/* Subtle green accent in gradient */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(63,168,21,0.12) 100%)",
          }}
        />
      </div>

      {/* Content – slight counter-parallax, centered (nav is fixed in layout) */}
      <div
        className="relative z-10 flex-1 flex items-center justify-center text-center px-6 will-change-transform"
        style={{
          transform: `translateY(${scrollY * -0.06}px)`,
        }}
      >
        <div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-zinc-300 text-lg max-w-2xl mx-auto">{text}</p>
        </div>
      </div>
    </section>
  );
}
