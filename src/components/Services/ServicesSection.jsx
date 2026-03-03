"use client";

import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/data/servicesData";

export default function ServicesSection() {
  return (
    <section className=" subtle-grid-bg py-28 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Badge */}
        <p className="glass-section border border-[#06511e] px-4 py-2 rounded-full inline-block mb-6">
          <span className="relative z-10 text-white">Explore Our Services</span>
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight mb-16">
          Quality Construction Solutions Provided
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
  {servicesData.map((service) => {
    const Icon = service.icon;

    return (
      <Link
        key={service.slug}
        href={`/services/${service.slug}`}
        className="group block"
      >
        <div className="bg-card border border-card-border overflow-hidden transition-all duration-300 hover:border-[#003611]">

          {/* Top Content */}
          <div className="p-8">
            <h3 className="text-xl font-bold text-white mb-4">
              {service.title}
            </h3>

            {/* Divider */}
            <div className="w-full h-px bg-[#003611]/30 mb-5" />

            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              {service.shortDescription}
            </p>
          </div>

          {/* Image Section */}
          <div className="relative">
            <Image
              src={service.image}
              alt={service.title}
              width={500}
              height={300}
              className="w-full h-52 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            />

            {/* Floating Icon */}
            {Icon && (
              <div className="absolute -top-6 right-6 p-4 shadow-lg bg-[#003611]">
                <Icon size={24} className="text-white" />
              </div>
            )}
          </div>
        </div>
      </Link>
    );
  })}
        </div>
      </div>
    </section>
  );
}