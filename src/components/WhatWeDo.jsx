"use client";

import Image from "next/image";

const services = [
  {
    title: "Facade Inspection",
    description:
      "Thorough facade inspections to assess structural integrity, material performance, and safety compliance. We identify risks early to ensure durability and long-term building performance.",
    image: "/images/img1.jpg",
  },
  {
    title: "Facade Design & Engineering",
    description:
      "Integrated facade design and engineering solutions that combine structural precision with architectural intent. We deliver efficient, buildable systems optimized for performance and longevity.",
    image: "/images/img2.jpg",
  },
  {
    title: "Facade Consultancy Services",
    description:
      "End-to-end facade consultancy from concept development to execution support. We provide technical expertise to ensure compliant, cost-effective, and high-performing facade systems.",
    image: "/images/img4.jpg",
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="services"
      className="relative py-24 px-6 lg:px-20 bg-fixed bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/images/img3.webp')",
      }}
    >
      {/* Dark overlay to match hero vibe */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/40 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-14 text-center" data-aos="fade-up">
          <p className="uppercase tracking-widest font-semibold mb-4 text-[#31572C] text-sm">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold md:font-bold tracking-tight mb-4">
            Precision facade & Aluminium Services
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-lg">
            From facades to interiors, we design, engineer and provide consultation for
            glazing systems that are built to perform and designed to impress.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="group bg-white/5 border border-white/15 rounded-2xl overflow-hidden shadow-[0_22px_60px_rgba(0,0,0,0.65)] backdrop-blur-sm"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-lg font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-justify text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center" data-aos="zoom-in">
          <button
            className="relative inline-flex items-center justify-center px-9 py-3 rounded-full text-sm md:text-base font-medium text-white shadow-[0_12px_30px_rgba(16,185,129,0.35)] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.97]"
            style={{
              background:
                "linear-gradient(90deg,s #2E7D10 0%, #2E7D10 70%, #31572C 100%)",
            }}
          >
            Explore More Services
          </button>
        </div>
      </div>
    </section>
  );
}

