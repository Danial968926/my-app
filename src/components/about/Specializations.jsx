"use client";

import { motion } from "framer-motion";
import {
    Building2,
    HeartPulse,
    Syringe,
    Stethoscope,
    House,
    UserRound,
    Microscope,
    Ambulance,
} from "lucide-react";

const specializations = [
    {
        icon: Building2,
        title: "Hospital Billing",
        description:
            "Complete billing and coding services for hospitals with accurate claims submission and faster reimbursements.",
    },
    {
        icon: HeartPulse,
        title: "Healthcare Groups",
        description:
            "Revenue cycle management for multi-provider practices to maximize collections and reduce administrative burden.",
    },
    {
        icon: Syringe,
        title: "Wound Care",
        description:
            "Specialized coding and billing solutions designed specifically for wound care providers.",
    },
    {
        icon: Stethoscope,
        title: "Family Medicine",
        description:
            "Efficient claim management for family medicine practices with accurate coding and faster payments.",
    },
    {
        icon: House,
        title: "Nursing Home",
        description:
            "Professional billing services for long-term care facilities ensuring compliance and maximum reimbursement.",
    },
    {
        icon: UserRound,
        title: "Individual Practice",
        description:
            "Medical billing solutions tailored for solo physicians and independent healthcare providers.",
    },
    {
        icon: Microscope,
        title: "Medical Laboratory",
        description:
            "End-to-end laboratory billing services with precise coding and insurance claim management.",
    },
    {
        icon: Ambulance,
        title: "Emergency Care",
        description:
            "Comprehensive billing solutions for emergency departments with rapid claim submission.",
    },
];

export default function Specializations() {
    return (
        <section className="relative overflow-hidden bg-white py-15">
            {/* Background */}

            <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

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
                    className="mx-auto mb-20 max-w-3xl text-center"
                >
                    <span className="rounded-full border-2 border-emerald-600 bg-emerald-100 px-4 py-2 text-xs font-semibold text-emerald-700">
                        Healthcare Expertise
                    </span>

                    <h2 className="mt-5 text-3xl font-black text-slate-900 lg:text-4xl">
                        Specialized
                        <span className="text-emerald-600"> Medical Billing Solutions</span>
                    </h2>

                    <p className="mt-3 max-w-2xl mx-auto text-md text-slate-600">
                        We proudly provide customized medical billing services for
                        healthcare providers across multiple specialties, ensuring accurate
                        claims, faster reimbursements, and better revenue cycle management.
                    </p>
                </motion.div>

                {/* Cards */}

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {specializations.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
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
                                    delay: index * 0.08,
                                }}
                                whileHover={{
                                    y: -10,
                                }}
                                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-2xl"
                            >
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg transition duration-300 group-hover:scale-110 group-hover:rotate-6">
                                    <Icon size={22} />
                                </div>

                                <h3 className="text-xl font-bold text-slate-900">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm text-slate-600">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
