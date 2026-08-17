"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, ArrowRight } from "lucide-react";

import { navLinks, services } from "./navData";
import Button from "../ui/Button";

export default function MobileNav({ pathname, setMenuOpen }) {
    const [serviceOpen, setServiceOpen] = useState(false);

    return (
        <div className="w-full">
            {/* SCROLLABLE CONTENT */}
            <div className="mobile-nav-scroll max-h-[calc(100vh-140px)] overflow-y-auto overscroll-contain px-5 py-5">
                <div className="space-y-2">
                    {navLinks.map((item) => {
                        const active = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                className={`group flex items-center justify-between rounded px-4 py-4 transition-all duration-300 ${active ? "bg-emerald-600 text-white shadow-lg" : "text-slate-700 hover:bg-emerald-100 hover:text-emerald-700"}`}
                            >
                                <span className={`font-semibold transition-all ${active ? "text-white" : ""}`}>
                                    {item.name}
                                </span>

                                <ChevronRight
                                    size={20}
                                    className={`transition-transform duration-300 group-hover:translate-x-1 ${active ? "text-white" : "text-emerald-600"}`}
                                />
                            </Link>
                        );
                    })}
                </div>

                {/* Services */}
                <div className="my-4 border-t border-slate-200 pt-4 ">
                    <button
                        onClick={() => setServiceOpen((prev) => !prev)}
                        className={`flex w-full items-center justify-between rounded px-4 py-4 transition-all duration-300 ${serviceOpen ? "bg-emerald-600 text-white" : "text-slate-600 hover:bg-emerald-100 hover:text-emerald-700"}`}
                    >
                        <span className="font-semibold">Services</span>

                        <ChevronDown
                            size={20}
                            className={`transition-transform duration-300 ${serviceOpen ? "rotate-180" : ""}`}
                        />
                    </button>

                    <AnimatePresence initial={false}>
                        {serviceOpen && (
                            <motion.div
                                initial={{
                                    height: 0,
                                    opacity: 0,
                                }}
                                animate={{
                                    height: "auto",
                                    opacity: 1,
                                }}
                                exit={{
                                    height: 0,
                                    opacity: 0,
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: [0.4, 0, 0.2, 1],
                                }}
                                className="overflow-hidden"
                            >
                                <div className="mt-3 space-y-2 mx-auto w-220">
                                    {services.map((service) => {
                                        const Icon = service.icon;
                                        return (
                                            <Link
                                                key={service.href}
                                                href={service.href}
                                                onClick={() => setMenuOpen(false)}
                                                className="group flex items-center gap-4 rounded p-3 transition-all duration-300 hover:bg-emerald-100 hover:text-emerald-700"
                                            >
                                                <div className="flex items-center justify-center text-emerald-600 transition-transform duration-300 group-hover:scale-110">
                                                    <Icon size={20} />
                                                </div>

                                                <span className="flex-1 text-md font-semibold transition-all group-hover:text-emerald-700">
                                                    {service.title}
                                                </span>

                                                <ArrowRight size={16} className="text-emerald-700 transition-transform duration-300 group-hover:translate-x-1" />
                                            </Link>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Contact */}
                <div className="flex justify-center pb-2">
                    <Button
                        href="/contact"
                        onClick={() => setMenuOpen(false)}
                        title="Contact Us"
                        size="md"
                        variant="primary"
                        icon={ArrowRight}
                        className="w-full rounded-xl border-transparent"
                    />
                </div>
            </div>
        </div>
    );
}