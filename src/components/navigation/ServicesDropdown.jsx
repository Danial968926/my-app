"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, ListChecks } from "lucide-react";
import { services } from "./navData";

export default function ServicesDropdown({ pathname }) {
    const [open, setOpen] = useState(false);
    const isActive = pathname.startsWith("/services");

    return (
        <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <button className="relative">
                {isActive && (
                    <motion.div
                        layoutId="navbar-pill"
                        transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                        }}
                        className="absolute inset-0 rounded-full bg-emerald-600 shadow-lg"
                    />
                )}

                <span
                    className={`relative z-10 flex items-center gap-1 px-5 py-2.5 text-[14px] font-medium transition-all duration-300 ${isActive
                        ? "text-white"
                        : "text-slate-700 hover:text-emerald-600"
                        }`}
                >
                    Services
                    <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                    />
                </span>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 15,
                            scale: 0.97,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            y: 15,
                            scale: 0.97,
                        }}
                        transition={{
                            duration: 0.25,
                        }}
                        className="absolute left-1/2 top-12 -translate-x-1/2 w-[750px] overflow-hidden rounded-t-2xl border-2 border-emerald-600 bg-white/95 shadow-[0_30px_60px_rgba(0,0,0,0.12)] backdrop-blur-2xl"
                    >
                        {/* Header */}
                        <div className="bg-emerald-600 px-4 py-2 text-white rounded-t-xl">
                            <h3 className="text-lg font-bold">Medical Billing Services</h3>

                            <p className="text-sm text-emerald-100">
                                Professional revenue cycle management solutions to improve
                                efficiency and maximize reimbursements.
                            </p>
                        </div>

                        {/* Services */}
                        <div className="grid grid-cols-2 gap-4 p-2 max-h-[400px] overflow-y-auto scrollbar">
                            {services.map((service) => {
                                const Icon = service.icon;
                                const active = pathname === service.href;

                                return (
                                    <Link
                                        key={service.href}
                                        href={service.href}
                                        className={`group flex items-center gap-2 rounded p-3 transition-all duration-300 ${active ? "bg-emerald-600 text-white shadow-lg" : "hover:bg-emerald-200/90"}`}
                                    >
                                        <div className={`flex items-center justify-center rounded-full transition-all ${active ? "text-white" : "text-emerald-600"}`}>
                                            <Icon size={25} />
                                        </div>

                                        <div className="flex-1">
                                            <h4 className={`font-semibold ${active ? "text-white" : "text-emerald-600"}`}>
                                                {service.title}
                                            </h4>

                                            <p className={`text-xs ${active ? "text-white" : "text-slate-500"}`}>
                                                Learn more
                                            </p>
                                        </div>

                                        <ArrowRight size={16} className={`transition-all group-hover:translate-x-1 ${active ? "text-white" : "text-emerald-600"}`} />
                                    </Link>
                                );
                            })}
                        </div>
                        {/* </div> */}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
