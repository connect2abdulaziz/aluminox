"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { servicesData } from "@/data/servicesData";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact-us", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled((window.scrollY || window.pageYOffset) > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 md:py-6 transition-all duration-300 ${
          scrolled
            ? "bg-page/15 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="flex items-center text-3xl font-semibold tracking-wide text-white hover:text-[#003611] transition-colors"
          onClick={handleLinkClick}
        >
          <img
            src="/images/logo-aluminox.png"
            alt="Aluminox"
            className="w-40 h-10 md:w-50 md:h-12 rounded-lg object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center gap-12 px-10 py-2 rounded-full bg-white/5 backdrop-blur-xs border border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base text-white font-medium hover:text-[#003611] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            {/* Services dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 text-base text-white font-medium hover:text-[#003611] transition-colors duration-200"
              >
                Services
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div
  className="
    dropdown-glass
  "
>
                
                  <Link
                    href="/services"
                    className="block px-4 py-1 text-sm text-white font-medium hover:bg-[#003611] hover:text-white transition-colors"
                  >
                    All Services
                  </Link>
                  <div className="h-px bg-white/20" />
                  {servicesData.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block px-4 py-2 text-sm text-zinc-300 hover:bg-[#003611] hover:text-white transition-colors"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base text-white font-medium hover:text-[#003611] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <Link
            href="/contact-us"
            className="inline-block transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
          >
            {/* <span className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold rounded-full bg-white/5 backdrop-blur-xs border border-white/30 hover:bg-[#003611]  text-white transition-colors duration-300">
              Get Quote
            </span> */}
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:text-[#003611] focus:outline-none focus:ring-2 focus:ring-[#003611] focus:ring-offset-2 focus:ring-offset-transparent"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile slide-in menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`h-full w-full bg-page shadow-[0_0_40px_rgba(0,0,0,0.8)] transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-6 pt-24 pb-8 flex flex-col gap-6">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-white hover:text-[#003611] transition-colors"
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}
            <div>
              <button
                type="button"
                className="flex items-center justify-between w-full text-base font-medium text-white hover:text-[#003611] transition-colors"
                onClick={() => setServicesOpen((o) => !o)}
              >
                Services
                <ChevronDown size={18} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="mt-2 pl-4 flex flex-col gap-1 border-l-2 border-white/10">
                  <Link
                    href="/services"
                    className="text-sm text-zinc-400 hover:text-[#003611] transition-colors py-1"
                    onClick={handleLinkClick}
                  >
                    All Services
                  </Link>
                  {servicesData.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="text-sm text-zinc-400 hover:text-[#003611] transition-colors py-1"
                      onClick={handleLinkClick}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-white hover:text-[#003611] transition-colors"
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}
            {/* <Link
              href="/contact-us"
              className="mt-4 inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-semibold bg-[#003611] text-white hover:bg-[#2a7e10] transition-colors"
              onClick={handleLinkClick}
            >
              Get Quote
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
