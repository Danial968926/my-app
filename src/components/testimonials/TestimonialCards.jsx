"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialCards() {
    return (
        <section className="relative overflow-hidden py-15">
            {/* Background Blur */}
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6">
                {/* Heading */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >
                    <span className="rounded-full border-2 border-emerald-6s00 bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                        Testimonials
                    </span>

                    <h2 className="mt-5 text-3xl font-extrabold text-slate-900 lg:text-4xl">
                        What Our Clients Say
                    </h2>

                    <p className="mt-5 text-md leading-6 text-slate-600">
                        Trusted by healthcare providers across the country for reliable
                        medical billing and revenue cycle management services.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.id}
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
                                delay: index * 0.12,
                                duration: 0.5,
                            }}
                            whileHover={{
                                y: -8,
                            }}
                            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-lg transition-all hover:shadow-2xl"
                        >
                            {/* Quote Icon */}

                            <div className="absolute right-6 top-6 text-emerald-500/50 transition group-hover:scale-110">
                                <Quote size={55} />
                            </div>

                            {/* Image */}

                            <div className="flex items-center gap-4">
                                <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-emerald-500">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <h3 className="text-md font-bold text-slate-900">
                                        {item.name}
                                    </h3>

                                    <p className="text-xs text-slate-500">
                                        {item.role}
                                    </p>
                                </div>
                            </div>

                            {/* Stars */}

                            <div className="mt-3 flex gap-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        className={`${i < item.rating
                                            ? "fill-yellow-400 text-yellow-400"
                                            : "text-slate-300 "
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                "{item.quote}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}