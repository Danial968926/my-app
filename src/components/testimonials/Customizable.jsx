"use client";

import { motion } from "framer-motion";
import { DollarSign, ArrowRight, ContactIcon } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Customizable() {
    return (
        <section className="relative overflow-hidden py-15">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-550 to-cyan-700" />

            <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

            <div className="relative mx-auto max-w-6xl">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="rounded-3xl border border-white/20 bg-white/10 p-10 text-center backdrop-blur-xl md:p-16"
                >
                    {/* Icon */}

                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white text-emerald-600 shadow-xl">
                        <DollarSign size={38} />
                    </div>

                    {/* Heading */}

                    <h2 className="mt-8 text-3xl font-extrabold text-white md:text-5xl">
                        Customizable Pricing Plans
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-emerald-50">
                        Whether you're an individual provider, a clinic, or a
                        multi-specialty healthcare organization, we offer flexible pricing
                        plans tailored to maximize your revenue while minimizing operational
                        costs.
                    </p>

                    {/* Buttons */}

                    <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
                        <Button
                            title="About Us"
                            href="/about"
                            variant="primary"
                            icon={ArrowRight}
                            size="md"
                        />

                        <Button
                            title="Contact Us"
                            href="/contact"
                            variant="secondary"
                            size="md"
                            icon={ContactIcon}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}