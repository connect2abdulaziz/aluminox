"use client";

import Image from "next/image";
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

export default function ValuesSection() {
  return (
    <section className="bg-black py-28 px-6 lg:px-20 min-h-[600px]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">

        {/* LEFT SIDE - sticky */}
        <div
          className="sticky top-28 self-start"
          data-aos="fade-right"
          data-aos-duration="800"
        >

          {/* badge */}
          <span className="inline-block border border-[#3FA815] text-[#3FA815] text-xs font-semibold px-4 py-2 mb-6">
            OUR VALUES
          </span>

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
          {/* <button className="mt-8 flex items-center gap-2 text-white font-semibold hover:text-[#3FA815] transition">
            Learn More
            <ArrowUpRight size={18} />
          </button> */}

        </div>

        {/* RIGHT SIDE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {philosophy.map(({ title, icon: Icon }, idx) => (
            <div
              key={idx}
              className="border border-zinc-800 p-10 relative group hover:border-[#3FA815] transition duration-300"
              data-aos="fade-up"
              data-aos-delay={idx * 120}
              data-aos-duration="600"
              data-aos-once="true"
            >
              <Icon
                size={40}
                className="text-white mb-10 opacity-90 group-hover:text-[#3FA815] transition"
              />

              <h3 className="text-white font-semibold text-lg leading-snug">
                {title}
              </h3>

              {/* subtle hover arrow */}
              {/* <ArrowUpRight
                size={18}
                className="absolute top-6 right-6 text-zinc-500 group-hover:text-[#3FA815] transition"
              /> */}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}