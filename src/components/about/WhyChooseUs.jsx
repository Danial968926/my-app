"use client";

import { motion } from "framer-motion";
import {
    BadgeCheck,
    ShieldCheck,
    TrendingUp,
    FileCheck2,
    Clock3,
    Users,
    BarChart3,
    Headset,
} from "lucide-react";

const reasons = [
    {
        icon: BadgeCheck,
        title: "12+ Years of Experience",
        description:
            "Over a decade of expertise in medical billing and revenue cycle management.",
    },
    {
        icon: FileCheck2,
        title: "98% First Pass Claim Rate",
        description:
            "Accurate coding and billing that minimizes claim denials and delays.",
    },
    {
        icon: TrendingUp,
        title: "Increase Revenue",
        description:
            "Helping healthcare providers improve reimbursements and financial performance.",
    },
    {
        icon: Clock3,
        title: "Fast Claim Processing",
        description:
            "Claims submitted quickly for faster insurance reimbursements.",
    },
    {
        icon: ShieldCheck,
        title: "99% Billing Accuracy",
        description:
            "Quality assurance processes ensure accurate coding and claim submission.",
    },
    {
        icon: BarChart3,
        title: "Detailed Reports",
        description:
            "Daily, weekly, and monthly reports for complete financial visibility.",
    },
    {
        icon: Users,
        title: "Dedicated Account Manager",
        description:
            "A personal specialist to handle your complete revenue cycle workflow.",
    },
    {
        icon: Headset,
        title: "365 Days Support",
        description:
            "Our support team is available throughout the year whenever you need us.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-15">
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-20 max-w-3xl text-center"
                >
                    <span className="rounded-full bg-emerald-100 border-2 border-emerald-600 px-4 py-2 text-xs font-semibold text-emerald-700">
                        Why Healthcare Providers Trust Us
                    </span>

                    <h2 className="mt-5 text-3xl font-black text-slate-900 lg:text-4xl">
                        Why Choose
                        <span className="text-emerald-600"> OSOZ MBS?</span>
                    </h2>

                    <p className="mt-4 text-base text-slate-600">
                        We combine technology, industry expertise, and dedicated support to
                        help healthcare providers maximize reimbursements while reducing
                        administrative workload.
                    </p>
                </motion.div>

                <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                    {reasons.map((item, index) => {
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
                                    duration: 0.5,
                                }}
                                style={{ cursor: "pointer" }}
                                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-2xl"
                            >
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                                    <Icon size={23} />
                                </div>

                                <h3 className="text-lg font-semibold text-slate-900">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-md text-slate-600">
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
