"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative flex justify-center items-center overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-550 to-cyan-700 min-h-[60vh] sm:min-h-screen py-20 px-6">
            {/* Background */}
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />

            <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative mx-auto max-w-7xl text-center">

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
                >

                    <span className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
                        About OSOZ Medical Billing Services
                    </span>

                    <h1 className="mt-8 text-4xl font-black leading-tight text-white md:text-5xl">
                        Simplifying{" "}
                        <span className=" text-emerald-200">Medical Billing</span>
                    </h1>

                    <p className="mx-auto mt-2 max-w-3xl text-md text-emerald-50">
                        For more than a decade, OSOZ MBS has helped healthcare
                        providers improve reimbursements, reduce claim denials,
                        and streamline every step of the Revenue Cycle
                        Management process.
                    </p>

                </motion.div>

            </div>
        </section>
    );
}