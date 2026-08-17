"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ServicesDropdown from "./ServicesDropdown";
import { navLinks } from "./navData";

export default function DesktopNav({ pathname }) {
    return (
        <nav className="hidden lg:flex items-center rounded-full border-2 border-emerald-500 bg-white/70 p-1.5 shadow-sm backdrop-blur-xl">
            {navLinks.map((link) => {
                const active = pathname === link.href;

                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="relative"
                    >
                        {active && (
                            <motion.div
                                layoutId="navbar-pill"
                                transition={{
                                    type: "spring",
                                    stiffness: 380,
                                    damping: 30,
                                }}
                                className="absolute inset-0 rounded-full bg-emerald-500 shadow-lg"
                            />
                        )}

                        <span className={`relative z-10 flex items-center rounded-full px-4 xl:px-5 py-2.5 text-[14px] font-medium transition-all duration-300 ${active ? "text-white" : "text-slate-700 hover:text-emerald-600"}`}>
                            {link.name}
                        </span>
                    </Link>
                );
            })}
            <ServicesDropdown pathname={pathname} />
        </nav>
    );
}