"use client";

import { motion } from "framer-motion";
import { MapPinned } from "lucide-react";

export default function ContactMap() {
    return (
        <section>
            <div className="mx-auto max-w-7xl">
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
                    transition={{ duration: 0.6 }}
                    className="mb-5 text-center"
                >
                    <span className="rounded-full bg-emerald-100 border-2 border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-700">
                        Find Us
                    </span>

                    <h2 className="mt-5 text-4xl font-black text-emerald-500">
                        Visit Our Office
                    </h2>

                    <p className="mx-auto mt-3 text-md max-w-2xl text-slate-600">
                        We'd love to meet you. Visit our office during business hours or
                        schedule a consultation with our billing experts.
                    </p>
                </motion.div>

                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.95,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="overflow-hidden rounded-2xl border-3 border-emerald-500 bg-white shadow-2xl"
                >
                    {/* Header */}

                    <div className="flex items-center gap-4 border-b border-slate-200 bg-emerald-600 px-7 py-4 text-white">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-emerald-600">
                            <MapPinned size={22} />
                        </div>

                        <div>
                            <h3 className="text-xl font-bold">Our Office Location</h3>

                            <p className="text-sm text-emerald-100">Austin, Texas, United States</p>
                        </div>
                    </div>

                    {/* Google Map */}

                    <div className="h-[300px] w-full">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps?q=5900+Balcones+Dr,+Austin,+TX+78731&output=embed"
                            width="100%"
                            height="100%"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            className="border-0"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}