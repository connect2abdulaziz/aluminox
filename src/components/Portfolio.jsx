"use client";

import Image from "next/image";

const projects = [
  {
    title: "Skyline Glass Tower",
    category: "Commercial Facade",
    location: "Dubai, UAE",
    image: "/images/img1.jpg",
    description:
      "Full-height curtain wall glazing system engineered for performance, clarity, and long-span stability.",
  },
  {
    title: "Harbor View Residences",
    category: "Balconies & Railings",
    location: "Abu Dhabi, UAE",
    image: "/images/img2.jpg",
    description:
      "Custom aluminium and facade railings that maximise views while meeting strict safety and wind-load standards.",
  },
  {
    title: "Atrium Light Hub",
    category: "Skylights & Canopies",
    location: "Sharjah, UAE",
    image: "/images/img4.jpg",
    description:
      "Oversized skylight and canopy glazing bringing controlled natural light into high-traffic interior spaces.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 px-6 lg:px-20 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="uppercase tracking-widest font-semibold mb-4 text-[#31572C] text-sm">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold md:font-bold tracking-tight mb-4 text-white">
            Selected Projects
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-lg">
            A glimpse into the facades, interiors, and glazing systems we’ve delivered
            across the UAE.
          </p>
        </div>

        {/* Project cards – dark theme */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="group bg-zinc-800/90 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden border border-zinc-700/80"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-zinc-900/90 via-zinc-900/40 to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-[#31572C]/90 px-3 py-1 text-xs font-medium text-white">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-3">
                <p className="text-xs text-zinc-500">{project.location}</p>
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center" data-aos="fade-up">
          <button
            className="inline-flex items-center justify-center px-9 py-3 rounded-full text-sm md:text-base font-medium text-white shadow-[0_12px_30px_rgba(16,185,129,0.35)] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.97]"
            style={{
              background:
                "linear-gradient(90deg, #2E7D10 0%, #6EDB3A 40%, #31572C 55%, #2E7D10 70%, #31572C 100%)",
            }}
          >
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}

