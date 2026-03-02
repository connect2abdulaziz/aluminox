"use client";

import { useState } from "react";
import {
    Phone,
    Mail,
    Clock,
    MapPin,
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    Send,
} from "lucide-react";

export default function ContactUsSection() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("idle"); // idle | sending | success | error
    const [statusMessage, setStatusMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        setStatusMessage("");

        // Create structured payload
        const payload = {
            name,
            email,
            phone,
            subject,
            message,
            submittedAt: new Date().toISOString(),
        };

        // 👇 For now just log it (as per team lead instruction)
        console.log("Contact Form Payload:", payload);

        // TODO: Integrate with backend API once submission flow is finalized

        // Simulate small delay for better UX
        setTimeout(() => {
            setStatus("success");
            setStatusMessage("Thank you! Your message has been recorded.");

            // Clear form
            setName("");
            setEmail("");
            setPhone("");
            setSubject("");
            setMessage("");
        }, 600);
    };

    const infoItems = [
        {
            icon: Phone,
            title: "CONTACT US",
            lines: [
                {
                    label: "Phone 01: +971 56 425 8458",
                    href: "https://wa.me/971564258458", // WhatsApp link
                },
                {
                    label: "Phone 02: +971 50 425 8463",
                    href: "tel:+971504258463", // Click to call
                },
            ],
        },
        {
            icon: Mail,
            title: "EMAIL ADDRESS",
            lines: [
                {
                    label: "info@aluminox.ae",
                    href: "mailto:info@aluminox.ae",
                },
            ],
        },
        {
            icon: Clock,
            title: "OPENING HOURS",
            lines: [{ label: "Mon – Sat: 8:00 am – 5:00 pm" }],
        },
        {
            icon: MapPin,
            title: "OUR OFFICE",
            lines: [
                { label: "PO Box: 2520" },
                { label: "703 - Sheikah Noora Tower" },
                { label: "Barsha Heights" },
                { label: "Dubai, UAE" },
            ],
        },
    ];

    return (
        <section className="text-white py-24">
            <div className="container max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-start">

                {/* Left Content */}
                <div className="mt-20">
                    <h2 className="text-4xl font-bold leading-tight mb-6">
                        GET IN TOUCH FOR <br /> PROJECT GUIDANCE
                    </h2>

                    <p className="text-gray-300 max-w-xl mb-12">
                        Contact our team today for reliable support, clear communication,
                        and professional assistance with your construction needs.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-10">
                        {infoItems.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#003611] text-white">
                                        <Icon size={20} />
                                    </div>

                                    <div>
                                        <h4 className="font-semibold mb-2">{item.title}</h4>
                                        <div className="text-sm text-gray-300 space-y-1">
                                            {item.lines.map((line, i) => (
                                                <p key={i}>
                                                    {line.href ? (
                                                        <a
                                                            href={line.href}
                                                            target={line.href.startsWith("http") ? "_blank" : "_self"}
                                                            rel="noopener noreferrer"
                                                            className="hover:text-[#003611] transition-colors duration-300"
                                                        >
                                                            {line.label}
                                                        </a>
                                                    ) : (
                                                        line.label
                                                    )}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>


                    {/* Social Media Links */}
                    <div className="flex gap-5 mt-10">
                        <a
                            href="https://www.facebook.com/people/Aluminox/100091958412975/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#003611] hover:text-[#254622] transition"
                        >
                            <Facebook size={24} />
                        </a>

                        <a
                            href="https://x.com/aluminoxuae"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#003611] hover:text-[#254622] transition"
                        >
                            <Twitter size={24} />
                        </a>

                        <a
                            href="https://www.linkedin.com/company/aluminox-ae"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#003611] hover:text-[#254622] transition"
                        >
                            <Linkedin size={24} />
                        </a>

                        <a
                            href="https://www.instagram.com/aluminoxuae/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#003611] hover:text-[#254622] transition"
                        >
                            <Instagram size={24} />
                        </a>
                    </div>
                </div>

                {/* Right Form */}
                <div className="rounded-lg">
                    <div className="my-10 h-[500px] rounded-lg overflow-hidden border border-gray-700">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.1012625348703!2d55.1762352!3d25.0984333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6baa1c1bb797%3A0x96d68f848e7ec18a!2saluminox!5e0!3m2!1sen!2s!4v1772474299106!5m2!1sen!2s" 
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}