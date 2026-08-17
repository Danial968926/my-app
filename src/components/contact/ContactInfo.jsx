"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    MapPin,
    Phone,
    Mail,
    Clock3,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa6";

const contactInfo = [
    {
        icon: MapPin,
        title: "Office Address",
        text: "5900 Balcones Dr #16621, Austin, TX 78731, United States",
    },
    {
        icon: Phone,
        title: "Phone Number",
        text: "+1 (123) 456-7890",
        href: "tel:+11234567890",
    },
    {
        icon: Mail,
        title: "Email Address",
        text: "info@osozmbs.com",
        href: "mailto:info@osozmbs.com",
    },
    {
        icon: Clock3,
        title: "Working Hours",
        text: "Mon - Fri : 9:00 AM - 6:00 PM",
    },
];

const socials = [
    {
        icon: FaFacebookF,
        href: "#",
    },
    {
        icon: FaInstagram,
        href: "#",
    },
    {
        icon: FaLinkedinIn,
        href: "#",
    },
];

export default function ContactInfo() {
    return (
        <section className="py-20">
            <div className="mx-auto max-w-7xl px-6">
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
                    className="mb-12 text-center"
                >
                    <span className="rounded-full bg-emerald-100 border-2 border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-700">
                        Contact Information
                    </span>

                    <h2 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">
                        We're Always <span className="text-emerald-600">Here To</span> Help
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                        Reach us through phone, email, or visit our office. Our team is
                        ready to answer your questions regarding medical billing and revenue
                        cycle management.
                    </p>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Left Side */}

                    <div className="space-y-5 flex flex-col justify-center items-center">
                        {contactInfo.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{
                                        opacity: 0,
                                        x: -40,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    className="flex items-center w-full gap-5 rounded-2xl border-2 border-emerald-600 bg-white p-3 shadow-md transition hover:shadow-xl hover:bg-emerald-200 cursor-pointer"
                                >
                                    <div className="flex h-12 w-12 shrink-0 border-2 border-emerald-600 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 ">
                                        <Icon size={22} />
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-black text-emerald-700">
                                            {item.title}
                                        </h3>

                                        {item.href ? (
                                            <Link
                                                href={item.href}
                                                className="block text-slate-600 text-sm transition hover:text-emerald-600"
                                            >
                                                {item.text}
                                            </Link>
                                        ) : (
                                            <p className="text-sm text-slate-600">
                                                {item.text}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Right Side */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 40,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="rounded-2xl border-2 border-emerald-400 bg-emerald-600 p-8 text-white shadow-xl"
                    >
                        <h3 className="text-3xl font-black">
                            Let's Build Something Great Together
                        </h3>

                        <p className="mt-5 leading-8 text-emerald-100">
                            We specialize in Medical Billing, Coding, Credentialing, Revenue
                            Cycle Management, Denial Management and much more. Contact our
                            experts today for a free consultation.
                        </p>

                        <div className="mt-10 flex gap-4">
                            {socials.map((social, index) => {
                                const Icon = social.icon;

                                return (
                                    <Link
                                        key={index}
                                        href={social.href}
                                        className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-white hover:text-emerald-600"
                                    >
                                        <Icon size={20} />
                                    </Link>
                                );
                            })}
                        </div>

                        <div className="mt-10 rounded-2xl bg-white/10 p-6 backdrop-blur">
                            <h4 className="text-xl font-bold">Free Consultation</h4>

                            <p className="mt-2 text-emerald-100">
                                Schedule a free consultation and discover how we can improve
                                your practice's financial performance.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}