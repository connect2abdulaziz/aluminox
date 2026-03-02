"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact-us", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled((window.scrollY || window.pageYOffset) > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      data-aos="fade-down"
      data-aos-delay="400"
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6 transition-all duration-300 ${
        scrolled
          ? "bg-black/15 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <Link
        href="/"
        className="text-3xl font-semibold tracking-wide text-white hover:text-[#3FA815] transition-colors"
      >
        ALUMINOX
      </Link>

      <div className="hidden md:flex items-center">
        <div className="flex items-center gap-12 px-10 py-3 rounded-full bg-white/5 backdrop-blur-xs border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base text-white font-medium hover:text-[#3FA815] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div data-aos="fade-up" className="hidden md:block">
        <Link
          href="/#contact"
          className="inline-block transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
        >
          <span className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold rounded-full bg-white/5 backdrop-blur-xs border border-white/30 hover:bg-[#3FA815] hover:text-black text-white transition-colors duration-300">
            Get Quote
          </span>
        </Link>
      </div>
    </nav>
  );
}
