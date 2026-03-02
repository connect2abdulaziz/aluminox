"use client";

import { useEffect } from "react";
import AOS from "aos";

import PageHero from "@/components/shared/PageHero";
import Footer from "@/components/Footer";
import ContactUsSection from "@/components/contact-us/ContactUsSection";


export default function ContactUsPage() {
    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <div className="min-h-screen text-white">
            <main>
                <PageHero
                    image="/images/about-us-2.jpg"
                    imageAlt="Aluminox contact us"
                    title="Contact Us"
                    text="Get in touch with us to discuss your project requirements."
                />
              <ContactUsSection/>
            </main>

            <Footer />
        </div>
    );
}
