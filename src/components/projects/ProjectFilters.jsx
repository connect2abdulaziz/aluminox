"use client";
import { useEffect, useRef, useState } from "react";

const filters = [
  "All Projects",
  "Commercial",
  "Design & Build",
  "New Build",
  "Renovation",
  "Residential",
];

export default function ProjectFilters({ active, onChange }) {
  const buttonRefs = useRef([]);
  const [indicatorStyle, setIndicatorStyle] = useState({});

  useEffect(() => {
    const activeIndex = filters.indexOf(active);
    const activeButton = buttonRefs.current[activeIndex];

    if (activeButton) {
      setIndicatorStyle({
        width: activeButton.offsetWidth,
        transform: `translateX(${activeButton.offsetLeft}px)`,
      });
    }
  }, [active]);

  return (
    <div className="flex justify-center mb-10">
      <div className="relative flex bg-page/90 p-2 rounded-full">
        
        {/* Sliding Indicator */}
        <span
          className="absolute top-2 bottom-2 left-0 bg-[#31572C] rounded-full transition-all duration-300 ease-in-out"
          style={indicatorStyle}
        />

        {filters.map((filter, index) => (
          <button
            key={filter}
            ref={(el) => (buttonRefs.current[index] = el)}
            onClick={() => onChange(filter)}
            className={`relative z-10 px-5 mx-2 py-2 text-sm font-medium rounded-full transition-colors duration-300
              ${
                active === filter
                  ? "text-white"
                  : "text-[#31572C] font-bold border border-[#31572C] hover:bg-[#31572C] hover:text-white"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}