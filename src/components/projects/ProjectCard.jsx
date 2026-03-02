"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="grid lg:grid-cols-2 bg-black/10 gap-10 items-center rounded-xl border border-white/20 overflow-hidden">

      {/* Left Content */}
      <div className="p-8">
      <span className="inline-block mb-3 py-1 px-4 rounded-full text-xs font-semibold text-white border border-[#003611] transition-all duration-300 hover:bg-[#003611]">
  {project.category}
</span>

        <h2 className="text-3xl font-bold mb-6 tracking-wide">
          {project.title}
        </h2>

        <ul className="space-y-2 text-sm mb-6 list-disc pl-5 marker:text-[#003611] text-zinc-300">
          <li>
            <span className="font-semibold text-white">Client:</span> {project.client}
          </li>
          <li>
            <span className="font-semibold text-white">Location:</span> {project.location}
          </li>
          <li>
            <span className="font-semibold text-white">Brand:</span> {project.brand}
          </li>
        </ul>

        {/* Optional Systems Preview */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.systems?.slice(0, 3).map((system, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-white/10 rounded-md text-zinc-300"
            >
              {system}
            </span>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="relative w-full h-[350px] lg:h-[450px]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={false}
        />
      </div>
    </div>
  );
}