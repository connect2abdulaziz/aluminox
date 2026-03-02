"use client";

const stats = [
  {
    value: "100+",
    label: "Completed Projects",
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
    <section className="relative py-20 lg:py-28 bg-card border-y border-card-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="text-center"
            >
              <p
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                style={{ color: "#31572C" }}
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
