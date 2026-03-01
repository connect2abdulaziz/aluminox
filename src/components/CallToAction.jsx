"use client";

import Link from "next/link";

export default function CallToAction() {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 lg:px-20"
      aria-labelledby="cta-heading"
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Glassmorphism panel */}
        <div
          className="mx-auto max-w-6xl rounded-3xl bg-white/10 border border-white/30 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-md px-6 py-8 md:px-10 md:py-10 text-center"
          data-aos="zoom-in"
          style={{
            background:
              "linear-gradient(135deg, #2E7D10 0%, #6EDB3A 35%, #3FA815 50%, #1B4D0A 80%)",
          }}
        >
          <p className="uppercase tracking-widest font-semibold text-xs md:text-sm text-white/70 mb-3">
            Ready to Start Your Project?
          </p>

          <h2
            id="cta-heading"
            className="text-2xl md:text-3xl lg:text-4xl font-semibold md:font-bold tracking-tight text-white mb-4"
          >
            Let’s Engineer Your Next Facade & Aluminium Landmark
          </h2>

          <p className="text-sm md:text-base text-white/80 max-w-xl mx-auto mb-8">
            Share your drawings, timelines, or ideas and our engineering team
            will respond with a tailored proposal and execution roadmap.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              className="inline-flex bg-[#3FA815] items-center justify-center px-9 py-3 rounded-full text-sm md:text-base font-medium text-white shadow-[0_12px_30px_rgba(16,185,129,0.45)] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.97]"
              
            >
              Request a Consultation
            </button>

            <Link
              href="/#services"
              className="text-sm md:text-base font-medium text-white/80 hover:text-white underline-offset-4 hover:underline"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

