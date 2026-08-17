"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
    "Medical Billing & Coding",
    "Denial Management",
    "Revenue Cycle Optimization",
    "Fast Claim Processing",
];

export default function SolutionsSection() {
    return (
        <section className="relative overflow-hidden py-10 bg-white">
            {/* Background Blobs */}

            <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6">
                <div className="grid items-center gap-20 lg:grid-cols-2">
                    {/* Left Content */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -40,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7,
                        }}
                    >
                        <span className="rounded-full bg-emerald-100 border-2 border-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-700">
                            Revenue Cycle Experts
                        </span>

                        <h2 className="mt-5 text-3xl font-black leading-tight text-slate-900 lg:text-4xl">
                            Reliable Solutions For Your
                            <span className="block text-emerald-600">
                                Revenue Cycle Needs
                            </span>
                        </h2>

                        <p className="mt-4 text-base text-slate-600">
                            OSOZ MBS serves as a trusted partner in managing every aspect of
                            your revenue cycle. From medical billing and coding to denial
                            management and claim processing, our experienced team ensures
                            maximum reimbursements with minimum delays.
                        </p>

                        <div className="mt-5 grid gap-4 sm:grid-cols-2">
                            {features.map((feature) => (
                                <motion.div
                                    key={feature}
                                    whileHover={{
                                        x: 6,
                                    }}
                                    style={{ cursor: "pointer" }}
                                    className="flex items-center gap-3 border-2 border-emerald-100 rounded-xl shadow-md p-4 bg-white"
                                >
                                    <CheckCircle2 className="text-emerald-600" size={22} />

                                    <span className="font-medium text-slate-700">
                                        {feature}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Image */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 40,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7,
                        }}
                        className="relative"
                    >
                        {/* <div className="absolute -top-6 -left-6 h-100 w-100 bg-gradient-to-br from-emerald-500 to-teal-500 opacity-20 blur-xl" /> */}
                        <div className="relative overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-2xl">
                            <Image
                                src="/images/img1.jpg"
                                alt="Medical Billing"
                                width={700}
                                height={700}
                                className="h-full w-full object-cover transition duration-700 hover:scale-105"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
