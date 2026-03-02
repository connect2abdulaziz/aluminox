"use client";

import Image from "next/image";

const projects = [
  {
    title: "AL HAMRA MALL REFURB",
    category: "Skylight System",
    location: "Ras Al Khaimah, UAE",
    image: "/images/projects/al-hamra-mall.jpg",
    description:
      "A refined skylight solution engineered to enhance natural illumination while maintaining structural integrity and weather performance for the mall refurbishment. Delivered in collaboration with Glass Room.",
  },
  {
    title: "ALDAR HQ",
    category: "Unitized Façade & ACP Cladding",
    location: "Abu Dhabi, UAE",
    image: "/images/projects/aldar-hq.png",
    description:
      "Provided detailed quantity take-off, cost planning, and strategic consultancy for the iconic Aldar HQ façade package, covering unitized systems and ACP cladding works for Swift Access.",
  },
  {
    title: "NIKE SHOWROOM @ DDF",
    category: "Frameless Partition",
    location: "Dubai Airport, UAE",
    image: "/images/projects/nike-showroom.jpg",
    description:
      "Engineered frameless partition systems tailored for a high-traffic retail environment, ensuring clean aesthetics, durability, and precision installation at Dubai Airport.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 px-6 lg:px-20">
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
              className="group bg-card rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden border border-card-border"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card/90 via-card/40 to-transparent" />
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
                "linear-gradient(90deg, #2E7D10 0%, #2E7D10 70%, #31572C 100%)",
            }}
          >
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}

