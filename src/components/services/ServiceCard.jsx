"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileText, ClipboardCheck, SearchCheck, Send, Microscope, Receipt, ShieldAlert, Building2, FileStack, PhoneCall, BarChart3, } from "lucide-react";

const iconMap = { ShieldCheck, FileText, ClipboardCheck, SearchCheck, Send, Microscope, Receipt, ShieldAlert, Building2, FileStack, PhoneCall, BarChart3, };

export default function ServiceCard({
    icon,
    title,
    para,
    p,
    paragraph,
}) {
    const Icon = iconMap[icon] || ShieldCheck;
    return (
        <section className="relative overflow-hidden bg-white py-32">
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid items-center gap-16 lg:grid-cols-2"
                >
                    <div className="flex justify-center">
                        <div className="flex h-72 w-72 items-center justify-center rounded-[2rem] bg-emerald-600 shadow-2xl">
                            <Icon className="h-32 w-32 text-white" />
                        </div>
                    </div>

                    <div>
                        <span className="rounded-full bg-emerald-100 border-2 border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-700">
                            Medical Billing Service
                        </span>

                        <h1 className="mt-6 text-5xl font-extrabold text-slate-900">
                            {title}
                        </h1>

                        <p className="mt-8 text-lg leading-8 text-slate-600">
                            {para}
                        </p>
                    </div>
                </motion.div>

                <div className="mt-20 space-y-8">
                    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                        <h2 className="mb-4 text-2xl font-bold">
                            Overview
                        </h2>

                        <p className="leading-8 text-slate-600">
                            {p}
                        </p>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                        <h2 className="mb-4 text-2xl font-bold">
                            Why Choose Our Service?
                        </h2>

                        <p className="leading-8 text-slate-600">
                            {paragraph}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}