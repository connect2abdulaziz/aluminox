"use client";

import { useEffect } from "react";
import AOS from "aos";

import PageHero from "@/components/shared/PageHero";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/services/ServicesSection";

export default function ServicesPage() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen text-white">
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
