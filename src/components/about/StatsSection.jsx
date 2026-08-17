"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { CalendarDays, Users, TrendingUp, BadgeCheck } from "lucide-react";

const stats = [
    {
        icon: CalendarDays,
        value: 5,
        suffix: "+",
        title: "Years Experience",
        description: "Serving healthcare providers with trusted revenue cycle solutions.",
    },
    {
        icon: Users,
        value: 30,
        suffix: "+",
        title: "Satisfied Clients",
        description: "Medical practices, hospitals and healthcare organizations.",
    },
    {
        icon: TrendingUp,
        value: 36,
        suffix: "%",
        title: "Reduced A/R Backlogs",
        description: "Helping practices improve cash flow and financial performance.",
    },
    {
        icon: BadgeCheck,
        value: 95,
        suffix: "%",
        title: "Clean Claim Ratio",
        description: "High first-pass acceptance for faster reimbursements.",
    },
];

export default function StatsSection() {
    return (
        <section className="relative -mt-24 z-20 pb-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                    {stats.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 50,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: [0, 5, 0],
                                    rotate: [0, 5, 0, -5, 0],
                                }}
                                transition={{
                                    opacity: {
                                        duration: 0.8,
                                        delay: index * 0.15,
                                    },
                                    y: {
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.3,
                                    },
                                    rotate: {
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.3,
                                    },
                                }}
                                className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl transition-all"
                            >
                                <div className="flex items-start gap-5">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg">
                                        <div className="animate-[spin_3s_linear_infinite]">
                                            <Icon size={20} />
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <h2 className="text-4xl font-black leading-none text-slate-900">
                                            <CountUp end={item.value} duration={2} enableScrollSpy />
                                            {item.suffix}
                                        </h2>

                                        <h3 className="text-sm font-semibold text-slate-800">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                                <p className="text-center text-xs leading-tight text-slate-600">
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
