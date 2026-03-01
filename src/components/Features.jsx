"use client";

import {
  Wrench,
  UserCog,
  ClipboardCheck,
  BadgeCheck,
  Cpu,
  TrendingUp,
} from "lucide-react";

const features = [
  { icon: UserCog, title: "Qualified Engineers" },
  { icon: Wrench, title: "Modern Tools & Equipments" },
  { icon: ClipboardCheck, title: "Accurate Evaluations" },
  { icon: BadgeCheck, title: "Experienced Professionals" },
  { icon: Cpu, title: "AI Powered Systems" },
  { icon: TrendingUp, title: "Performance Tracking" },
];

// Octagonal clip-path: rectangle with steep cut corners (block-like)
const cardClipPath =
  "polygon(12% 0%, 88% 0%, 100% 15%, 100% 85%, 88% 100%, 12% 100%, 0% 85%, 0% 15%)";

export default function FeatureGrid() {
  return (
    <section className="relative py-24 px-6 lg:px-20 overflow-hidden bg-zinc-950">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="uppercase tracking-widest font-semibold mb-4 text-[#3FA815] text-sm">
            Our Strengths
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold md:font-bold tracking-tight mb-4 text-white">
            Our Edge
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Six core pillars that keep every project precise, on-schedule, and
            engineered to a higher standard.
          </p>
        </div>

        {/* Feature cards – octagonal, dark theme */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                data-aos="fade-up"
data-aos-delay={index * 150}
data-aos-duration="900"
data-aos-once="true"
                className="relative flex justify-center"
              >
                {/* Card body – dark grey, octagonal */}
                <div
                  className="relative w-full max-w-xs bg-zinc-900 px-7 py-14 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  style={{ clipPath: cardClipPath }}
                >
                  {/* Content: title only */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <h3 className="text-base md:text-lg font-semibold text-white tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Top badge – outer ring + green inner + icon (replaces number) */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex justify-center">
  {/* Radial glow layer */}
  <div className="absolute w-28 h-28 rounded-full bg-zinc-700/70 blur-2xl"></div>

  {/* Outer ring */}
  <div className="relative w-16 h-16 rounded-full bg-zinc-900 border-2 border-zinc-700 flex items-center justify-center">
    <div className="w-12 h-12 rounded-full bg-[#3FA815] flex items-center justify-center">
      <Icon
        size={22}
        className="text-white"
        strokeWidth={1.75}
      />
    </div>
  </div>
</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
