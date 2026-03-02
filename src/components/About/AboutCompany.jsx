"use client";

import Image from "next/image";
import { ShieldCheck, HardHat } from "lucide-react";

export default function AboutCompany() {
  return (
    <section className="text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

        {/* LEFT COLUMN */}
        <div className="flex flex-col justify-between gap-12">
          
          {/* Top Content */}
          <div>
            <span className="text-md font-bold tracking-widest  uppercase text-[#003611]">
               About Company
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight">
              Building Dreams <br /> With Lasting Quality
            </h2>

            <p className="mt-6 text-gray-400 max-w-lg">
              Our construction company delivers high-quality, reliable services,
              creating durable, efficient, and innovative building solutions
              for long-term success.
            </p>

            {/* <button className="mt-8 inline-flex items-center gap-2 text-[#003611] font-semibold hover:gap-3 transition-all duration-300">
              Join Us Now →
            </button> */}
          </div>

          {/* Bottom Image */}
          <div className="relative w-full h-[420px] rounded-xl overflow-hidden">
            <Image
              src="/images/about-img-2.jpg"
              alt="Construction site"
              fill
              className="object-cover"
            />
          </div>
        </div>


        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-12">

          {/* Top Image */}
          <div className="relative w-full h-[360px] rounded-xl overflow-hidden">
            <Image
              src="/images/about-img-1.webp"
              alt="Engineer"
              fill
              className="object-cover"
            />
          </div>

          {/* Highlight Statement */}
          <div className="border-l-4 border-[#003611] pl-6 text-lg text-gray-300 leading-relaxed">
            We deliver reliable construction solutions through skilled teams,
            modern technology, and a strong commitment to long-lasting quality.
          </div>

          {/* Features */}
          <div className="space-y-8">

            <div className="flex gap-4 items-start border-t border-gray-800 pt-6">
              <ShieldCheck className="text-[#003611]" size={28} />
              <div>
                <h4 className="font-semibold text-white text-lg">
                  Quality Commitment
                </h4>
                <p className="text-gray-400 mt-2">
                  Delivering high-quality, reliable construction with precision,
                  excellence, and industry-leading standards.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start border-t border-gray-800 pt-6">
              <HardHat className="text-[#003611]" size={28} />
              <div>
                <h4 className="font-semibold text-white text-lg">
                  Trusted Expertise
                </h4>
                <p className="text-gray-400 mt-2">
                  Providing reliable guidance built on experience,
                  professionalism, and proven capability.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}