"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import PageHero from "@/components/shared/PageHero";
import Footer from "@/components/Footer";
import AboutCompany from "@/components/About/AboutCompany";
import AboutStats from "@/components/About/AboutStats";
import AboutTimeline from "@/components/About/AboutTimeline";
import ScrollingText from "@/components/About/ScrollingText";
import ValuesSection from "@/components/About/ValuesSection";
import CallToAction from "@/components/CallToAction";

export default function AboutPage() {
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
          imageAlt="Aluminox team — precision facade and glazing expertise"
          title="Precision Façade Solutions"
          text="End-to-end façade consultancy and engineering services with over 20 years of experience in the UAE."
        />
        <AboutCompany />
        <ScrollingText />
        <AboutTimeline />
        <AboutStats />
        <ValuesSection />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
}
