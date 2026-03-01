"use client";

const stats = [
  {
    value: "500+",
    label: "Completed Projects",
  },
  {
    value: "120+",
    label: "Skilled Workers",
  },
  {
    value: "20",
    label: "Years Experience",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
];

export default function AboutStats() {
  return (
    <section className="relative py-20 lg:py-28 bg-zinc-950 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="text-center"
            >
              <p
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                style={{ color: "#3FA815" }}
              >
                {stat.value}
              </p>
              <p className="mt-2 text-sm md:text-base text-zinc-400 font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
