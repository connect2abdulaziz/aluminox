"use client";

import { useEffect } from "react";
import AOS from "aos";

import PageHero from "@/components/shared/PageHero";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/projects/ProjectsSection";


export default function ProjectsPage() {
    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <div className="min-h-screen bg-black text-white">
            <main>
                <PageHero
                    image="/images/about-us-2.jpg"
                    imageAlt="Aluminox completed façade and glazing projects"
                    title="Our Projects"
                    text="Delivering innovative façade engineering and maintenance solutions across diverse sectors — from concept to successful handover across the UAE."
                />
              <ProjectsSection/>
            </main>

            <Footer />
        </div>
    );
}
