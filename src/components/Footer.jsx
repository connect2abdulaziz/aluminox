"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" subtle-grid-bg  relative bg-page/70 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 bg-page lg:px-1  py-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] lg:gap-x-12">
          {/* Brand + summary */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-wide text-white">
              ALUMINOX TECHNICAL SERVICES LLC
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Precision aluminium, facade and glazing solutions for facades,
              interiors and custom architectural elements across the UAE.
            </p>
          </div>

          {/* Address */}
          <div className="space-y-3 text-sm">
            <h4 className="uppercase bg-zinc-600/70 w-fit px-2 py-1 rounded-sm tracking-widest font-bold text-md mb-4">
              Office
            </h4>
            <p>Aluminox Technical Services LLC</p>
            <p>PO Box: 2520</p>
            <p>703 - Sheikah Noora Tower</p>
            <p>Barsha Heights</p>
            <p>Dubai, UAE</p>
          </div>

          {/* Contact */}
          <div className="space-y-4 text-sm">
            <div>
              <h4 className ="uppercase bg-zinc-600/70 w-fit px-2 py-1 rounded-sm tracking-widest font-bold text-md mb-4">
                Contact
              </h4>
              <p className="text-gray-400 text-xs mb-1">Mobile</p>
              <a
                href="tel:+971564258458"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#003611] transition-colors"
              >
                +971 56 425 8458
              </a>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-1">Phone</p>
              <a
                href="tel:+971504258463"
                className="block hover:text-white transition-colors"
              >
                +971 50 425 8463
              </a>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-1">Email</p>
              <a
                href="mailto:info@aluminox.ae"
                className="block hover:text-white transition-colors"
              >
                info@aluminox.ae
              </a>
            </div>
          </div>

          {/* WhatsApp – click to connect (column shrinks to content) */}
          <div className="flex flex-col items-center justify-center lg:items-end text-center lg:text-right w-fit lg:ml-auto">
            <a
              href="https://wa.me/971564258458"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex flex-col items-center gap-2 hover:opacity-90 transition-opacity"
              aria-label="Chat on WhatsApp"
            >
              <Image
                src="/images/whatsapp-logo.png"
                alt="WhatsApp"
                width={64}
                height={64}
                className="w-14 h-14 md:w-16 md:h-16 object-contain"
              />
              <span className="text-sm font-medium text-[#003611] group-hover:text-[#4caf50] transition-colors">
                Click to connect
              </span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Aluminox Technical Services LLC. All
            rights reserved.
          </p>
          {/* <p className="text-gray-500">
            Designed for premium facade & aluminium experiences.
          </p> */}
        </div>
      </div>
    </footer>
  );
}

