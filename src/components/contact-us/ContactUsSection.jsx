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
                    href: "tel:+971564258458", // Click to call
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
        <section className="text-white py-5 md:py-20  subtle-grid-bg">
            <div className="container max-w-7xl mx-auto  grid lg:grid-cols-2 gap-5 md:gap-20 items-start">
                {/* Left column: map + contact info + socials (second on mobile) */}
                <div className="md:mt-15 mt-10 px-5 space-y-10 order-2 lg:order-1">
                  

                    <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                        GET IN TOUCH FOR <br /> PROJECT GUIDANCE
                    </h2>

                    <p className="text-gray-300 max-w-xl">
                        Contact our team today for reliable support, clear communication,
                        and professional assistance with your construction needs.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-10 mt-10">
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
                    <div className="flex gap-4 mt-10">
                        <a
                            href="https://www.facebook.com/people/Aluminox/100091958412975/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#003611] text-white hover:bg-[#254622] transition-colors duration-300"
                        >
                            <Facebook size={20} />
                        </a>

                        <a
                            href="https://x.com/aluminoxuae"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#003611] text-white hover:bg-[#254622] transition-colors duration-300"
                        >
                            <Twitter size={20} />
                        </a>

                        <a
                            href="https://www.linkedin.com/company/aluminox-ae"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-11 w-11 items-center justify-center rounded-full  bg-[#003611] text-white hover:bg-[#254622] transition-colors duration-300"
                        >
                            <Linkedin size={20} />
                        </a>

                        <a
                            href="https://www.instagram.com/aluminoxuae/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#003611] text-white hover:bg-[#254622] transition-colors duration-300"
                        >
                            <Instagram size={20} />
                        </a>
                    </div>
                    <div className="h-64 lg:h-[360px] rounded-lg overflow-hidden border border-gray-700">
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

                {/* Right column: sticky form (first on mobile) */}
                <div className="rounded-lg my-5 mx-2 order-1 lg:order-2 lg:sticky lg:top-32">
                    <div className="bg-card border border-card-border rounded-lg p-6 lg:p-8 shadow-[0_18px_60px_rgba(0,0,0,0.6)]">
                        <h3 className="text-2xl font-semibold mb-4">
                            Send Us a Message
                        </h3>
                        <p className="text-sm text-gray-300 mb-6">
                            Share your project details and our team will get back to you shortly.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your name*"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 bg-page text-white rounded-md border border-gray-700 focus:border-[#31572C] outline-none"
                            />

                            <input
                                type="email"
                                placeholder="Email address*"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 bg-page text-white rounded-md border border-gray-700 focus:border-[#31572C] outline-none"
                            />

                            <input
                                type="tel"
                                placeholder="Your phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full px-4 py-3 bg-page text-white rounded-md border border-gray-700 focus:border-[#31572C] outline-none"
                            />

                            <input
                                type="text"
                                placeholder="Subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="w-full px-4 py-3 bg-page text-white rounded-md border border-gray-700 focus:border-[#31572C] outline-none"
                            />

                            <textarea
                                placeholder="Message*"
                                rows={4}
                                required
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full px-4 py-3 bg-page text-white border rounded-md border-gray-700 focus:border-[#31572C] outline-none resize-none"
                            />

                            {statusMessage && (
                                <p
                                    className={`text-sm ${status === "success" ? "text-green-400" : "text-red-400"
                                        }`}
                                >
                                    {statusMessage}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="inline-flex items-center gap-3 bg-[#31572C] text-white px-8 py-3 font-medium hover:bg-[#254622] transition rounded-md disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-page">
                                    <Send size={20} />
                                </span>
                                {status === "sending" ? "SENDING…" : "SEND A MESSAGE"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}