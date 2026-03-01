"use client";

const testimonials = [
  {
    quote:
      "Aluminox delivered our facade package on time with impeccable attention to detail. The glazing quality exceeded our expectations.",
    name: "Mohammed Al Farsi",
    role: "Project Director, Skyline Developments",
  },
  {
    quote:
      "From design coordination to site execution, their team was responsive, precise, and solution‑oriented throughout the entire build.",
    name: "Sarah Khan",
    role: "Lead Architect, Horizon Studio",
  },
  {
    quote:
      "Complex details, tight timelines, and high performance requirements were all handled professionally. We’re already planning the next project together.",
    name: "James Patel",
    role: "Construction Manager, Gulf Build LLC",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 px-6 lg:px-20  bg-linear-to-b from-[#3FA815]/20 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="uppercase tracking-widest font-semibold mb-4 text-[#3FA815] text-sm">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold md:font-bold tracking-tight mb-4 text-white">
            Trusted by Leading Builders
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-lg">
            Partners, architects, and contractors who rely on us for precise,
            performance‑driven facade and aluminium solutions.
          </p>
        </div>

        {/* Testimonial cards – dark theme */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={item.name}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="bg-zinc-800/90 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-zinc-700/80 p-7 flex flex-col h-full"
            >
              <div className="h-1 w-12 rounded-full bg-[#3FA815] mb-5" />
              <p className="text-sm md:text-base text-zinc-300 leading-relaxed mb-6">
                “{item.quote}”
              </p>
              <div className="mt-auto">
                <p className="text-sm font-semibold text-white">
                  {item.name}
                </p>
                <p className="text-xs text-zinc-500 mt-1">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

