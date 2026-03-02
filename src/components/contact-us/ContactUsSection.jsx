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

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, phone, subject, message }),
            });
            const data = await res.json();

            if (!res.ok) {
                setStatus("error");
                setStatusMessage(data.error || "Something went wrong.");
                return;
            }

            setStatus("success");
            setStatusMessage("Message sent. We'll get back to you soon.");
            setName("");
            setEmail("");
            setPhone("");
            setSubject("");
            setMessage("");
        } catch {
            setStatus("error");
            setStatusMessage("Failed to send. Please try again.");
        }
    };

    const infoItems = [
        {
            icon: Phone,
            title: "CONTACT US",
            lines: ["Phone 01: +971 56 425 8458", "Phone 02: +971 50 425 8463"],
        },
        {
            icon: Mail,
            title: "EMAIL ADDRESS",
            lines: ["info@aluminox.ae"],
        },
        {
            icon: Clock,
            title: "OPENING HOURS",
            lines: ["Mon – Sat: 8:00 am – 5:00 pm"],
        },
        {
            icon: MapPin,
            title: "OUR OFFICE",
            lines: [
              "PO Box: 2520",
              "703 - Sheikah Noora Tower",
              "Barsha Heights",
              "Dubai, UAE",
            ],
          },
    ];

    return (
        <section className="bg-black text-white py-24">
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
                                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#31572C] text-white">
                                        <Icon size={20} />
                                    </div>

                                    <div>
                                        <h4 className="font-semibold mb-2">{item.title}</h4>
                                        <div className="text-sm text-gray-300 space-y-1">
                                            {item.lines.map((line, i) => (
                                                <p key={i}>{line}</p>
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
                            className="text-[#31572C] hover:text-[#254622] transition"
                        >
                            <Facebook size={24} />
                        </a>

                        <a
                            href="https://x.com/aluminoxuae"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#31572C] hover:text-[#254622] transition"
                        >
                            <Twitter size={24} />
                        </a>

                        <a
                            href="https://www.linkedin.com/company/aluminox-ae"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#31572C] hover:text-[#254622] transition"
                        >
                            <Linkedin size={24} />
                        </a>

                        <a
                            href="https://www.instagram.com/aluminoxuae/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#31572C] hover:text-[#254622] transition"
                        >
                            <Instagram size={24} />
                        </a>
                    </div>
                </div>

                {/* Right Form */}
                <div className="bg-[#0F1F14] p-10 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-2 text-center">
                        LET’S CONTACT TODAY
                    </h3>

                    <p className="text-sm text-gray-300 text-center mb-8">
                        Send your details for quick and reliable assistance.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your name*"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 bg-black text-white rounded-md border border-gray-700 focus:border-[#31572C] outline-none"
                        />

                        <input
                            type="email"
                            placeholder="Email address*"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 bg-black text-white rounded-md border border-gray-700 focus:border-[#31572C] outline-none"
                        />

                        <input
                            type="tel"
                            placeholder="Your phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-4 py-3 bg-black text-white rounded-md border border-gray-700 focus:border-[#31572C] outline-none"
                        />

                        <input
                            type="text"
                            placeholder="Subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="w-full px-4 py-3 bg-black text-white rounded-md border border-gray-700 focus:border-[#31572C] outline-none"
                        />

                        <textarea
                            placeholder="Message*"
                            rows={4}
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full px-4 py-3 bg-black text-white border rounded-md border-gray-700 focus:border-[#31572C] outline-none resize-none"
                        />

                        {statusMessage && (
                            <p
                                className={`text-sm ${
                                    status === "success" ? "text-green-400" : "text-red-400"
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
                            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-black">
                                <Send size={20} />
                            </span>
                            {status === "sending" ? "SENDING…" : "SEND A MESSAGE"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}