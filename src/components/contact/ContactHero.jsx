"use client";

import { motion } from "framer-motion";
import { Mail, PhoneCall, MapPin } from "lucide-react";

export default function ContactHero() {
    return (
        <section className="relative flex pt-20 items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-550 to-cyan-700 h-[100vh]">
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
                    transition={{ duration: 0.7 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="rounded-full border-2 border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur">
                        Contact OSOZ Medical Billing Services
                    </span>

                    <h1 className="mt-5 text-4xl font-black text-white md:text-5xl">
                        Let's Talk About Your
                        <span className="block text-emerald-100">Revenue Cycle</span>
                    </h1>

                    <p className="mt-3 text-md text-emerald-50">
                        Whether you're a solo physician, clinic, laboratory, or hospital,
                        our billing specialists are ready to help maximize reimbursements
                        and streamline your revenue cycle.
                    </p>
                </motion.div>

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 50,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.2,
                        duration: 0.7,
                    }}
                    className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3"
                >
                    <div className="rounded-2xl border border-white/20 bg-white/10 h-fit py-3 text-center backdrop-blur">
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-emerald-600">
                            <PhoneCall />
                        </div>

                        <h3 className="font-bold text-lg text-emerald-300 uppercase">Call</h3>

                        <p className="mt-2 text-sm text-emerald-100">+1 (123) 456-7890</p>
                    </div>

                    <div className="rounded-2xl border border-white/20 bg-white/10 h-fit py-3 text-center backdrop-blur">
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-emerald-600">
                            <Mail />
                        </div>

                        <h3 className="font-bold text-lg text-emerald-300 uppercase">Email</h3>

                        <p className="mt-2 text-sm text-emerald-100">info@osozmbs.com</p>
                    </div>

                    <div className="rounded-2xl border border-white/20 bg-white/10 h-fit py-3 text-center backdrop-blur">
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-emerald-600">
                            <MapPin />
                        </div>

                        <h3 className="font-bold text-lg text-emerald-300 uppercase">Office</h3>

                        <p className="mt-2 text-sm text-emerald-100">Texas, United States</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}