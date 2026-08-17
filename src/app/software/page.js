"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const softwareLogos = [
    "software_logo_12.jpg",
    "software_logo_22.jpg",
    "software_logo_14.jpg",
    "software_logo_15.jpg",
    "software_logo_16.jpg",
    "software_logo_20.jpg",
    "software_logo_21.jpg",
    "software_logo_22.jpg",
    "software_logo_23.jpg",
    "software_logo_24.jpg",
    "software_logo_25.jpg",
    "software_logo_26.jpg",
    "software_logo_27.jpg",
    "software_logo_28.jpg",
    "software_logo_29.jpg",
    "software_logo_30.jpg",
    "software_logo_31.jpg",
    "software_logo_32.jpg",
    "software_logo_33.jpg",
    "software_logo_34.jpg",
];

export default function SoftwarePage() {
    return (
        <>
            <section className="relative flex justify-center items-center overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-550 to-cyan-700 h-[100vh]">
                {/* Background */}

                <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

                <div className="relative mx-auto max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl text-center"
                    >
                        <span className="mb-3 inline-block rounded-full border-2 border-white bg-white/10 px-3 py-1 text-sm text-white">
                            Software Integration
                        </span>

                        <h2 className="mt-4 text-4xl font-black leading-tight text-white md:text-5xl">
                            Supporting All Major {""}
                            <span className="text-emerald-200">Software Platforms</span>
                        </h2>

                        <p className="mt-6 text-md text-white/80">
                            Our medical billing experts work seamlessly with the industry's
                            leading EHR, EMR, Practice Management, and Revenue Cycle software
                            platforms.
                        </p>
                    </motion.div>
                </div>
            </section>
            <section className="py-10 ">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {softwareLogos.map((logo, index) => (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: 30,
                                    scale: 0.9,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.05,
                                }}
                                whileHover={{
                                    y: -8,
                                    scale: 1.05,
                                }}
                                className="flex items-center justify-center"
                                style={{ cursor: "pointer" }}
                            >
                                <Image
                                    src={`/images/software/${logo}`}
                                    alt={logo}
                                    width={220}
                                    height={130}
                                    className="h-28 w-auto object-contain"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}