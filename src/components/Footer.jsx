"use client";

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-15 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
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
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#31572C]">
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
              <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#3FA815] mb-2">
                Contact
              </h4>
              <p className="text-gray-400 text-xs mb-1">Mobile</p>
              <a
                href="https://wa.me/971564258458"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#31572C] transition-colors"
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
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Aluminox Technical Services LLC. All
            rights reserved.
          </p>
          <p className="text-gray-500">
            Designed for premium facade & aluminium experiences.
          </p>
        </div>
      </div>
    </footer>
  );
}

