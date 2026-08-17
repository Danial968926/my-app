"use client";

import { useEffect, useState } from "react";
import Logo from "../ui/Logo.jsx";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import DesktopNav from "../navigation/DesktopNav";
import MobileNav from "../navigation/MobileNav";
import Button from "../ui/Button";

const navbarVariants = {
    hidden: {
        opacity: 0,
        y: -70,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            ease: "easeOut",
        },
    },
};

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <motion.header
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
            className="fixed inset-x-0 top-3 sm:top-4 z-[100]"
        >
            <div className="mx-auto w-full max-w-7xl px-3 sm:px-5">
                <motion.div
                    layout
                    transition={{
                        layout: {
                            duration: 0.35,
                            ease: [0.4, 0, 0.2, 1],
                        },
                    }}
                    className={` border border-emerald-600 bg-white backdrop-blur-2xl shadow-2xl transition-all duration-300 ${menuOpen ? "rounded-3xl" : "rounded-full"}`}
                >
                    <div className={`flex h-16 sm:h-[72px] items-center justify-between px-4 sm:px-6 ${menuOpen ? "border-b border-emerald-100" : ""}`}>
                        <Logo />
                        <DesktopNav pathname={pathname} />

                        <AnimatePresence initial={false}>
                            {menuOpen && (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: -15,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        x: -15,
                                    }}
                                    transition={{
                                        duration: 0.25,
                                        ease: "easeOut",
                                    }}
                                    className="flex flex-col justify-center items-center lg:hidden"
                                >
                                    <h3 className="text-lg sm:text-xl font-black uppercase text-emerald-600">
                                        Navigation
                                    </h3>

                                    <p className="text-[11px] sm:text-xs font-semibold text-slate-400">
                                        Browse our medical billing services.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="flex items-center gap-3">
                            {/* Desktop Contact */}
                            <Button
                                href="/contact"
                                onClick={() => setMenuOpen(false)}
                                title="Contact Us"
                                size="sm"
                                variant="outline"
                                className="hidden lg:flex items-center"
                            />

                            {/* Mobile Menu Button */}
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setMenuOpen((prev) => !prev)}
                                className="flex lg:hidden h-11 w-11 items-center justify-center rounded-full border-2 border-emerald-600 bg-white text-emerald-600 shadow-sm transition hover:bg-emerald-50"
                            >
                                <AnimatePresence mode="wait" initial={false}>
                                    {menuOpen ? (
                                        <motion.div
                                            key="close"
                                            initial={{
                                                opacity: 0,
                                                rotate: -90,
                                                scale: 0.7,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                rotate: 0,
                                                scale: 1,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                rotate: 90,
                                                scale: 0.7,
                                            }}
                                            transition={{
                                                duration: 0.2,
                                            }}
                                        >
                                            <X size={22} />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="menu"
                                            initial={{
                                                opacity: 0,
                                                rotate: 90,
                                                scale: 0.7,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                rotate: 0,
                                                scale: 1,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                rotate: -90,
                                                scale: 0.7,
                                            }}
                                            transition={{
                                                duration: 0.2,
                                            }}
                                        >
                                            <Menu size={22} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        </div>
                    </div>

                    {/* MOBILE MENU — SAME CONTAINER */}
                    <AnimatePresence initial={false}>
                        {menuOpen && (
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
                                    duration: 0.35,
                                    ease: [0.4, 0, 0.2, 1],
                                }}
                                className="lg:hidden overflow-hidden"
                            >
                                <MobileNav pathname={pathname} setMenuOpen={setMenuOpen} />
                            </motion.div>
                        )}
                    </AnimatePresence>

                </motion.div>
            </div>
        </motion.header>
    );
}