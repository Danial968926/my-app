"use client";

import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";

import CMSCard from "./CMSCard";
import { cmsUpdates } from "@/data/cmsUpdates";

export default function CMSUpdatesSection() {
    return (
        <section className="relative overflow-hidden bg-white">
            {/* Background Decorations */}
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl" />

            <div className="relative mx-auto">

                <div className="relative flex justify-center items-center overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-550 to-cyan-700 min-h-[100vh] py-20 px-6">
                    {/* Section Heading */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="mx-auto mb-16 max-w-3xl text-center"
                    >
                        <div className="mb-5 inline-flex border-2 border-white items-center gap-2 rounded-full bg-teal-600 px-4 py-1 text-md text-white">
                            <Newspaper size={18} />
                            Latest Healthcare News
                        </div>

                        <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
                            Stay Informed with
                            <span className="text-emerald-200"> CMS Updates</span>
                        </h2>

                        <p className="mt-5 text-md leading-relaxed text-white">
                            Keep up with the latest Medicare, Medicaid, healthcare
                            regulations, policy changes, reimbursement updates,
                            and industry news that impact healthcare providers and
                            medical billing practices.
                        </p>
                    </motion.div>
                </div>

                {/* Cards */}
                <div className="grid gap-8 lg:grid-cols-2 max-w-7xl mx-auto my-20">
                    {cmsUpdates.map((article, index) => (
                        <CMSCard
                            key={article.id}
                            article={article}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}