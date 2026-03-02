"use client";

import { useRef, useState } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectFilters from "./ProjectFilters";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const sectionRef = useRef(null);
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);

    // Scroll to top of section smoothly
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  
  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section ref={sectionRef} className="container max-w-6xl mx-auto px-4 py-20">
        <div   className="sticky top-24 z-40 bg-page  border-white/10">
      <ProjectFilters
        active={activeFilter}
        onChange={handleFilterChange}
      />
      </div>

      <div className="space-y-20">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}