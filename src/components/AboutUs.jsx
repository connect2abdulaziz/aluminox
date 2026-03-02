import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
    return (
        <section className=" relative subtle-grid-bg z-10 w-full py-20 px-6 lg:px-0 lg:py-25">
            <div className="max-w-6xl mx-auto  grid lg:grid-cols-2 gap-10 items-center">

                {/* LEFT IMAGE GRID */}
                <div className="relative">

                    <div className="grid grid-cols-2 gap-5">
                        {[
                            "/images/img1.jpg",
                            "/images/services/facade-design-engineering-service-2.png",
                            "/images/services/project-management-service.jpg",
                            "/images/img4.jpg",
                        ].map((src, i) => (

                            // 🔹 AOS controls this outer wrapper
                            <div
                                key={i}
                                data-aos="fade-up"
                                data-aos-delay={i * 150}
                                className="relative"
                            >

                                {/* 🔹 Hover transform happens here */}
                                <div className="relative h-64 rounded-md transition-all duration-300 ease-out hover:shadow-[0_0_50px_rgba(63,168,21,0.4)]">
                                    <div className="relative h-full w-full overflow-hidden rounded-md transition-transform duration-300 ease-out hover:scale-105">
                                        <Image
                                            src={src}
                                            alt="construction"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                    {/* CENTER BADGE */}
                    <div className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 bg-[#003611] rounded-full flex flex-col items-center hover:scale-105 transition-all duration-300 ease-out justify-center shadow-xl text-center p-4">
                        <span className="text-4xl font-bold" style={{ color: "#fff" }}>
                            20+
                        </span>
                        <p className="text-sm font-medium text-white">
                            Years of Experience
                        </p>
                    </div>

                </div>

                {/* RIGHT CONTENT */}
                <div data-aos="fade-left">
                    <p
                        className="uppercase bg-zinc-600/70 w-fit px-2 py-1 rounded-sm tracking-widest font-bold text-md mb-4"
                        style={{ color: "#003611" }}
                    >
                        Who We Are
                    </p>

                    <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                        Trusted Experts in Facade Systems
                    </h2>

                    <p className="text-zinc-400 text-justify mb-8 leading-relaxed">
                        Aluminox Technical Services is a dedicated team of façade professionals with
                        over 20 years of combined experience in the UAE’s construction industry. We provide
                        comprehensive façade solutions, covering inspection, design, engineering, cost consultancy,
                        risk management, and project oversight from concept to handover. Our focus is to ensure
                        structural integrity, thermal and acoustic performance, and optimized construction workflows
                        while delivering technically precise and economical solutions for our clients.
                    </p>

                    <Link href="/about"
                        className="px-8 py-3 text-white font-semibold rounded-full transition transform hover:scale-105"
                        style={{ backgroundColor: "#003611" }}
                    >
                        More Details
                    </Link>
                </div>
            </div>
        </section>
    );
}