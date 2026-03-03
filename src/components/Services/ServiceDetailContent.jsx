import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function ServiceDetailContent({ service }) {
  return (
    <div className="order-1 lg:order-2 lg:col-span-2 space-y-16">

      {/* Header Section */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-white my-6">
          {service.title}
        </h1>

        <p className="text-lg text-zinc-300 leading-relaxed mb-6">
          {service.intro}
        </p>

        <p className="text-zinc-400 text-justify leading-relaxed">
          {service.overview}
        </p>
      </div>

      {/* Image */}
      <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Sub Services Section */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-8">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {service.subServices.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-card border border-card-border p-5 hover:border-[#003611] transition"
            >
              <CheckCircle
                size={20}
                className="text-[#003611] mt-1"
              />
              <span className="text-zinc-300">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}