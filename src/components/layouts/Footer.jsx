"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "../ui/Logo.jsx";
import { ChevronUp } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaThreads, } from "react-icons/fa6";

const quickLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Specialties",
    href: "/specialties",
  },
  {
    title: "Testimonials",
    href: "/testimonials",
  },
  {
    title: "News & Updates",
    href: "/updates",
  },
];

const services = [
  "Medical Coding",
  "Claim Creation",
  "EOB Posting",
  "Denial Management",
  "Patient Calls",
  "Collection Reports",
];

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <footer className="relative py-10 overflow-hidden border-t border-slate-200 bg-slate-50">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-emerald-500/10 blur-[140px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
            {/* Company */}
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
            >
              <Logo />
              <p className="mt-5 max-w-md text-sm leading-6 text-slate-600">
                OSOZ Medical Billing Services provides comprehensive medical
                billing solutions that improve cash flow, reduce denials, and
                maximize reimbursements while allowing healthcare providers to
                focus on patient care.
              </p>
            </motion.div>

            {/* Quick Links */}
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
                delay: 0.1,
              }}
            >
              <h3 className="mb-8 text-xl font-bold text-slate-800">
                Quick Links
              </h3>

              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-3 text-slate-600 transition-all hover:text-emerald-600"
                    >
                      <span className="h-2 w-2 rounded-full bg-emerald-500 transition-all group-hover:w-4" />

                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
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
                delay: 0.2,
              }}
            >
              <h3 className="mb-8 text-xl font-bold text-slate-800">
                Our Services
              </h3>

              <ul className="space-y-2">
                {services.map((service) => (
                  <li
                    key={service}
                    className="group flex cursor-pointer items-center gap-3 text-slate-600 transition-all hover:text-cyan-500"
                  >
                    <span className="h-2 w-2 rounded-full bg-cyan-500 transition-all group-hover:w-4" />

                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
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
                delay: 0.3,
              }}
            >
              <h3 className="mb-8 text-xl font-bold text-slate-800">
                Contact Us
              </h3>

              <div className="space-y-2">
                <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                    Address
                  </p>

                  <p className="text-sm text-slate-600">
                    5900 Balcones Dr #16621
                    <br />
                    Austin, Texas 78731
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                    Phone
                  </p>

                  <a
                    href="tel:+17373106057"
                    className="text-slate-600 text-sm hover:text-emerald-600"
                  >
                    +1 (737) 310-6057
                  </a>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                    Email
                  </p>

                  <a
                    href="mailto:info@osozmbs.com"
                    className="text-slate-600 text-sm hover:text-emerald-600"
                  >
                    info@osozmbs.com
                  </a>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                    Office Hours
                  </p>

                  <p className="text-slate-600 text-sm">
                    Monday - Friday
                    <br />
                    09:00 AM - 05:00 PM
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="mt-10 border-t border-emerald-200" />

          {/* Bottom */}
          <div className="flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm text-slate-500">
                © {new Date().getFullYear()} OSOZ Medical Billing Services. All
                Rights Reserved.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <motion.a
                whileHover={{
                  y: -4,
                  scale: 1.1,
                }}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 text-blue-600 border-blue-600 bg-white shadow-sm transition hover:bg-blue-600 hover:text-white"
              >
                <FaFacebookF />
              </motion.a>

              <motion.a
                whileHover={{
                  y: -4,
                  scale: 1.1,
                }}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 text-pink-600 border-pink-600 bg-white shadow-sm transition hover:bg-pink-600 hover:text-white"
              >
                <FaInstagram />
              </motion.a>

              <motion.a
                whileHover={{
                  y: -4,
                  scale: 1.1,
                }}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 text-blue-600 border-blue-600 bg-white shadow-sm transition hover:bg-blue-600 hover:text-white"
              >
                <FaLinkedinIn />
              </motion.a>

              <motion.a
                whileHover={{
                  y: -4,
                  scale: 1.1,
                }}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 text-black border-black bg-white shadow-sm transition hover:bg-black hover:text-white"
              >
                <FaThreads />
              </motion.a>
            </div>
          </div>
        </div>
      </footer>

      <motion.button
        whileHover={{
          scale: 1.1,
          y: -3,
        }}
        whileTap={{
          scale: 0.9,
        }}
        onClick={scrollTop}
        className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600/60 border-2 border-emerald-800 text-emerald-100 shadow-2xl"
      >
        <ChevronUp size={24} />
      </motion.button>
    </>
  );
}