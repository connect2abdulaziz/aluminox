"use client";

import Image from "next/image";
import {
  ClipboardCheck,
  Search,
  Calculator,
  ShieldAlert,
  Briefcase,
  DraftingCompass,
  Building,
  ShoppingCart,
  ArrowUpRight,
} from "lucide-react";

const services = [
    {
      title: "Cost Consultancy",
      description:
        "Expert financial planning and cost control to ensure construction projects stay within budget.",
      icon: Calculator,
      image: "/images/services/service-1.jpg",
    },
    {
      title: "Façade Inspection",
      description:
        "Comprehensive façade inspections to ensure safety, compliance, and long-term structural performance.",
      icon: Search,
      image: "/images/services/service-2.jpg",
    },
    {
      title: "Quantity Survey",
      description:
        "Accurate material estimation and financial forecasting for efficient project execution.",
      icon: ClipboardCheck,
      image: "/images/services/service-3.jpg",
    },
    {
      title: "Risk Assessment",
      description:
        "Identifying potential risks in projects and implementing preventive strategies.",
      icon: ShieldAlert,
      image: "/images/services/service-4.jpg",
    },
    {
      title: "Risk Management",
      description:
        "Strategic planning and monitoring to minimize project risks and maximize safety.",
      icon: Briefcase,
      image: "/images/services/service-5.jpg",
    },
    {
      title: "Procurement Advise",
      description:
        "Guidance on efficient procurement processes to ensure timely acquisition of quality materials.",
      icon: ShoppingCart,
      image: "/images/services/service-6.jpg",
    },
    {
      title: "Design & Engineering",
      description:
        "Innovative architectural and engineering solutions for modern construction challenges.",
      icon: DraftingCompass,
      image: "/images/services/service-7.jpg",
    },
    {
      title: "Project Management",
      description:
        "Professional project coordination ensuring timely delivery and quality results.",
      icon: Building,
      image: "/images/services/service-8.jpg",
    },
  ];

export default function ServicesSection() {
  return (
    <section className="bg-black py-28 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Badge */}
        <span className="inline-block text-[#3FA815] text-xs font-semibold uppercase tracking-widest mb-6">
          Explore Our Services
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight mb-16">
          Quality Construction Solutions Provided
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map(({ title, description, icon: Icon, image }, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 border border-zinc-800 overflow-hidden group hover:border-zinc-700 transition duration-300"
            >

              {/* Top content */}
              <div className="p-8">

                <h3 className="text-xl font-bold text-white mb-4">
                  {title}
                </h3>

                <div className="w-full h-px bg-[#3FA815]/30 mb-5" />

                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {description}
                </p>

                <button className="flex items-center gap-2 text-[#3FA815] text-sm font-semibold hover:gap-3 transition-all">
                  Learn more
                  <ArrowUpRight size={16} />
                </button>
              </div>

              {/* Image section */}
              <div className="relative">

                <Image
                  src={image}
                  alt={title}
                  width={500}
                  height={300}
                  className="w-full h-52 object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />

                {/* Floating icon */}
                <div
                  className="absolute -top-6 right-6 p-4 shadow-lg"
                  style={{ backgroundColor: "#3FA815" }}
                >
                  <Icon size={24} className="text-white" />
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}