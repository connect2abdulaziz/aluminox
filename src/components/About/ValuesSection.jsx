"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Target, Eye, Shield, CheckSquare, Clock, Zap, ArrowUpRight } from "lucide-react";

const philosophy = [
  {
    title: "Mission",
    icon: Target,
  },
  {
    title: "Vision",
    icon: Eye,
  },
  {
    title: "Safety First",
    icon: Shield,
  },
  {
    title: "Structural Integrity",
    icon: CheckSquare,
  },
  {
    title: "On-Time Delivery",
    icon: Clock,
  },
  {
    title: "Innovation",
    icon: Zap,
  },
];
const images = [
  {
    name: "Project One",
    src: "/images/policies/Environment-Policy.jpg", // replace with your actual path
  },
  {
    name: "Project Two",
    src: "/images/policies/Health-&-Safety-Policy.jpg",
  },
  {
    name: "Project Three",
    src: "/images/policies/Quality-Policy.jpg",
  },
];

export default function ValuesSection() {
  const [activeImage, setActiveImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => {
      if (typeof window === "undefined") return;
      setIsMobile(window.innerWidth < 768);
    };

    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);

    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

  return (
    <section className="subtle-grid-bg py-28 px-6 lg:px-20 min-h-[600px]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">

        {/* LEFT SIDE - sticky */}
        <div
          className="md:sticky top-28 self-start"
          data-aos="fade-right"
          data-aos-duration="800"
        >

          {/* badge */}
          <p
            className="glass-section border border-[#06511e] px-4 py-2 rounded-full inline-block"

          >
            <span className="relative z-10 text-white">OUR VALUES</span>
          </p>

          {/* heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Built On <br /> Trust & Precision
          </h2>

          {/* description */}
          <p className="text-zinc-400 mt-6 max-w-lg">
            With more than 20 years of experience in facade lighting and
            architectural construction solutions, we focus on delivering
            projects that combine safety, innovation, and structural
            excellence.
          </p>

          {/* CTA */}
          {/* <button className="mt-8 flex items-center gap-2 text-white font-semibold hover:text-[#003611] transition">
            Learn More
            <ArrowUpRight size={18} />
          </button> */}

        </div>

        {/* RIGHT SIDE - STACKED IMAGES */}
        <div className="flex flex-col gap-10">
          {images.map(({ name, src }, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 120}
              data-aos-duration="600"
              data-aos-once="true"
            >
              {/* Mobile: image uses intrinsic aspect, border hugs certificate */}
              <div
                className="relative border bg-page shadow-sm border-zinc-800 overflow-hidden group hover:border-[#003611] transition duration-300 cursor-pointer md:hidden"
                onClick={() => setActiveImage({ name, src })}
              >
                <Image
                  src={src}
                  alt={name}
                  width={900}
                  height={1200}
                  className="w-full h-auto object-contain group-hover:scale-105 transition duration-500"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAwJyBoZWlnaHQ9JzEwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMTAwJyBoZWlnaHQ9JzEwMCcgZmlsbD0nI2IyYjJiMicgLz48L3N2Zz4="
                />
              </div>

              {/* Desktop: keep previous fixed-height cover behavior */}
              <div className="relative border bg-page shadow-sm border-zinc-800 overflow-hidden group hover:border-[#003611] transition duration-300 h-[400px] hidden md:block">
                <Image
                  src={src}
                  alt={name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAwJyBoZWlnaHQ9JzEwMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMTAwJyBoZWlnaHQ9JzEwMCcgZmlsbD0nI2IyYjJiMicgLz48L3N2Zz4="
                />
              </div>
            </div>
          ))}
        </div>

        {isMobile && activeImage && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
            <button
              type="button"
              className="absolute top-6 right-6 text-white text-3xl"
              aria-label="Close certificate"
              onClick={() => setActiveImage(null)}
            >
              ×
            </button>
            <div className="relative w-full max-w-md h-[80vh]">
              <Image
                src={activeImage.src}
                alt={activeImage.name}
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}