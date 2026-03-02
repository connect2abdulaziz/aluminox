"use client";
import { useEffect, useRef, useState } from "react";

const filters = [
    "All Projects",
    "Commercial",
    "Residential",
    "Hospitality",
    "Refurbishment",
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
    <div className="mb-8">
      <div className="relative mx-auto max-w-full overflow-x-auto">
        <div className="relative inline-flex bg-page/90 p-2 rounded-full min-w-max">
          {/* Sliding Indicator */}
          <span
            className="absolute top-2 bottom-2 left-0 bg-[#003611] rounded-full transition-all duration-300 ease-in-out"
            style={indicatorStyle}
          />

          {filters.map((filter, index) => (
            <button
              key={filter}
              ref={(el) => (buttonRefs.current[index] = el)}
              onClick={() => onChange(filter)}
              className={`relative z-10 px-4 sm:px-5 mx-1 sm:mx-2 py-2 text-xs sm:text-sm font-medium rounded-full whitespace-nowrap transition-colors duration-300
                ${
                  active === filter
                    ? "text-white"
                    : "text-white font-bold border border-[#003611] hover:bg-[#003611] hover:text-white"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}