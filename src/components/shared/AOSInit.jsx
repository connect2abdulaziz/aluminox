"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * Initializes AOS once when the app loads (used in root layout).
 * Pages should call AOS.refresh() on mount so new content animates
 * without re-initializing (which would reset layout elements like the navbar).
 */
export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return null;
}
