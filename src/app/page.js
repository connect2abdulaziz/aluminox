"use client";
import { useEffect } from "react";
import AOS from "aos";

import HomePage from "@/components/HomePage";
import AboutUs from "@/components/AboutUs";
import FeatureGrid from "@/components/Features";
import WhatWeDo from "@/components/WhatWeDo";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <>
      <HomePage />
      <div className="relative z-10 overflow-x-hidden">
        <AboutUs />
        <FeatureGrid />
        <WhatWeDo />
        <Portfolio />
        {/* <Testimonials /> */}
        <CallToAction />
        <Footer />
      </div>
    </>
  );
}