"use client";

import Button from "@/components/ui/Button";
import { ArrowRight, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
    return (
        <section className="relative overflow-hidden py-24">
            {/* Background */}

            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-550 to-cyan-700" />

            {/* Decorative Blobs */}

            <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

            {/* Grid Pattern */}

            <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />

            <div className="relative mx-auto max-w-7xl">
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
                        duration: 0.7,
                    }}
                    className="mx-auto max-w-4xl text-center"
                >
                    <span className="rounded-full border-1 border-white/80 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
                        Ready to Improve Your Revenue Cycle?
                    </span>

                    <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-5xl">
                        Let's Grow Your
                        <span className="block">Medical Practice Together</span>
                    </h2>

                    <p className="mx-auto mt-3 max-w-3xl font-semibold text-md text-emerald-100">
                        Partner with OSOZ Medical Billing Services and let our experienced
                        team manage your medical billing, coding, denial management, and
                        revenue cycle while you focus on delivering exceptional patient
                        care.
                    </p>

                    {/* Buttons */}
                    <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
                        <Button
                            title="Contact Us"
                            href="/contact"
                            icon={ArrowRight}
                            variant="primary"
                            size="md"
                        />
                        {/* Mobile: Call */}
                        <div className="block md:hidden">
                            <Button
                                title="Call Now"
                                href="tel:+11234567890"
                                icon={PhoneCall}
                                variant="secondary"
                                size="md"
                            />
                        </div>

                        {/* Desktop: Contact Page */}
                        <div className="hidden md:block">
                            <Button
                                title="Call Now"
                                href="/contact"
                                icon={PhoneCall}
                                variant="secondary"
                                size="md"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
