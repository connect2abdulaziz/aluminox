"use client";

const milestones = [
  {
    date: "January 2019",
    title: "Company Founded",
    location: "Dubai",
    description:
      "Aluminox Technical Services was established to provide specialized façade consultancy and engineering services in the UAE.",
  },
  {
    date: "June 2019",
    title: "First Façade Project",
    location: "Abu Dhabi",
    description:
      "Completed the first façade inspection and design project, ensuring structural integrity and thermal performance for a commercial building.",
  },
  {
    date: "March 2020",
    title: "Service Expansion",
    location: "Dubai",
    description:
      "Expanded service offerings to include risk management, procurement advisory, and project management for complex façade systems.",
  },
  {
    date: "August 2021",
    title: "Major Consultancy Project",
    location: "Sharjah",
    description:
      "Delivered detailed façade consultancy for a high-profile mixed-use development, including design optimization and cost planning.",
  },
];

export default function AboutTimeline() {
  return (
    <section className="py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-24">
          <p className="text-[#3FA815] uppercase tracking-widest text-base font-semibold">
            Company Story
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mt-4 leading-tight">
            Our Journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-card-border -translate-x-1/2" />

          <div className="space-y-32">
            {milestones.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="grid grid-cols-[1fr_auto_1fr] items-center"
                >
                  {/* LEFT CONTENT */}
                  <div
                    className={`${isLeft ? "block" : "invisible"}`}
                    data-aos={isLeft ? "fade-right" : "fade-left"}
                    data-aos-delay={index * 250}
                  >
                    <TimelineCard item={item} align="right" />
                  </div>

                  {/* CENTER DOT + DATE */}
                  <div className="relative flex flex-col items-center">
                    {/* date pill */}
                    <div
                      className="mb-3 px-5 py-2 text-base rounded-full bg-[#3FA815] text-white shadow-lg font-semibold"
                      data-aos="zoom-in"
                      data-aos-delay={index * 250 + 100}
                    >
                      {item.date}
                    </div>

                    {/* dot */}
                    <div
                      className="w-5 h-5 rounded-full bg-[#3FA815] border-2 border-card shadow-md"
                      data-aos="zoom-in"
                      data-aos-delay={index * 250 + 150}
                    />
                  </div>

                  {/* RIGHT CONTENT */}
                  <div
                    className={`${!isLeft ? "block" : "invisible"}`}
                    data-aos={isLeft ? "fade-right" : "fade-left"}
                    data-aos-delay={index * 250}
                  >
                    <TimelineCard item={item} align="left" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ item, align }) {
  return (
    <div
      className={`bg-card p-8 rounded-xl shadow-lg max-w-md
      ${align === "right" ? " mr-8 text-left" : "ml-8 text-left"}`}
    >
      <h3 className="text-white font-semibold text-xl md:text-2xl">
        {item.title}
        <span className="text-[#3FA815] text-sm md:text-base ml-2">
          ({item.location})
        </span>
      </h3>

      <p className="text-zinc-300 mt-4 text-base md:text-md leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}