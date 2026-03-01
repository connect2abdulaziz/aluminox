"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import PageHero from "@/components/shared/PageHero";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/Services/ServicesSection";
export default function ServicesPage() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <main>
        <PageHero
          image="/images/about-us-2.jpg"
          imageAlt="Aluminox services — facade and glazing solutions"
          title="Our Services"
          text="Comprehensive façade, glazing, and aluminium solutions for commercial and residential projects across the UAE."
        />
        {/* Add services content sections here */}
        <ServicesSection />
      </main>

      <Footer />
    </div>
  );
}
