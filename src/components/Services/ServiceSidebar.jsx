"use client";

import Link from "next/link";
import { servicesData } from "@/data/servicesData";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function ServiceSidebar({ currentSlug }) {
  return (
    <div className="order-2 lg:order-1 lg:col-span-1">
      <div className="sticky top-32">

        {/* Yellow Container */}
        <div className="relative bg-[#003611] p-10">

          {/* Cut Corner */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-page 
  [clip-path:polygon(100%_0,0_0,100%_100%)]" />

          {/* Heading */}
          <h3 className="text-white text-2xl font-extrabold mb-10 tracking-wide">
            SERVICES CATEGORY
          </h3>

          {/* Service List */}
          <div className="space-y-2">
            {servicesData.map((service) => {
              const isActive = currentSlug === service.slug;

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="block"
                >
                  <div
                    className={`flex items-center justify-between px-6 py-2 border transition-all duration-300
                    ${
                      isActive
                        ? "bg-[#1E1D1D] text-white border-[#1E1D1D]"
                        : "border-[#1E1D1D]/20 text-white hover:border-[#1E1D1D]"
                    }`}
                  >
                    <span className="font-medium">
                      {service.title}
                    </span>

                    {isActive ? (
                      <ArrowRight size={20} />
                    ) : (
                      <ArrowUpRight size={20} />
                    )}
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}