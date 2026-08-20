"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "../ui/Logo.jsx";
import { ChevronUp } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaThreads,
} from "react-icons/fa6";

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Contact", href: "/contact" },
  { title: "Specialties", href: "/specialties" },
  { title: "Testimonials", href: "/testimonials" },
  { title: "News & Updates", href: "/updates" },
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
  };

  return (
    <>
      <footer className="relative py-10 sm:py-14 md:py-16 overflow-hidden border-t border-slate-200 bg-slate-50">
        {/* Background Glows */}
        <div className="absolute -left-40 top-20 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-emerald-500/10 blur-[100px] sm:blur-[140px] pointer-events-none" />
        <div className="absolute -right-40 bottom-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-cyan-500/10 blur-[100px] sm:blur-[140px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main Grid Layout */}
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.5fr_2fr_1fr] lg:gap-12">
            
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5 }}
            >
              <Logo />
              <p className="mt-4 sm:mt-5 max-w-md text-xs sm:text-sm leading-relaxed text-slate-600">
                OSOZ Medical Billing Services provides comprehensive medical
                billing solutions that improve cash flow, reduce denials, and
                maximize reimbursements while allowing healthcare providers to
                focus on patient care.
              </p>
            </motion.div>

            {/* Quick Links & Services Container (Mobile par side-by-side side 2 columns) */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="mb-4 sm:mb-6 text-base sm:text-lg font-bold text-slate-800">
                  Quick Links
                </h3>
                <ul className="space-y-2 sm:space-y-2.5">
                  {quickLinks.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-2 text-xs sm:text-sm text-slate-600 transition-all hover:text-emerald-600"
                      >
                        <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500 transition-all group-hover:w-3.5" />
                        <span className="truncate">{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Our Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="mb-4 sm:mb-6 text-base sm:text-lg font-bold text-slate-800">
                  Our Services
                </h3>
                <ul className="space-y-2 sm:space-y-2.5">
                  {services.map((service) => (
                    <li
                      key={service}
                      className="group flex cursor-pointer items-center gap-2 text-xs sm:text-sm text-slate-600 transition-all hover:text-cyan-600"
                    >
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-500 transition-all group-hover:w-3.5" />
                      <span className="truncate">{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="mb-4 sm:mb-6 text-base sm:text-lg font-bold text-slate-800">
                Contact Us
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-3">
                <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                  <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-emerald-600">
                    Address
                  </p>
                  <p className="mt-0.5 text-xs sm:text-sm text-slate-600 leading-snug">
                    5900 Balcones Dr #16621
                    <br />
                    Austin, Texas 78731
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                  <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-emerald-600">
                    Phone
                  </p>
                  <a
                    href="tel:+17373106057"
                    className="mt-0.5 block text-xs sm:text-sm text-slate-600 hover:text-emerald-600"
                  >
                    +1 (737) 310-6057
                  </a>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                  <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-emerald-600">
                    Email
                  </p>
                  <a
                    href="mailto:info@osozmbs.com"
                    className="mt-0.5 block text-xs sm:text-sm text-slate-600 hover:text-emerald-600 break-all"
                  >
                    info@osozmbs.com
                  </a>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                  <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-emerald-600">
                    Office Hours
                  </p>
                  <p className="mt-0.5 text-xs sm:text-sm text-slate-600 leading-snug">
                    Mon - Fri: 09:00 AM - 05:00 PM
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="mt-8 sm:mt-12 border-t border-emerald-200" />

          {/* Bottom Bar */}
          <div className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-center sm:text-left text-xs sm:text-sm text-slate-500">
              © {new Date().getFullYear()} OSOZ Medical Billing Services. All
              Rights Reserved.
            </p>

            <div className="flex items-center justify-center gap-3 sm:gap-4">
              <motion.a
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-blue-600 shadow-sm transition hover:bg-blue-600 hover:text-white"
              >
                <FaFacebookF className="h-4 w-4" />
              </motion.a>

              <motion.a
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-pink-600 bg-white text-pink-600 shadow-sm transition hover:bg-pink-600 hover:text-white"
              >
                <FaInstagram className="h-4 w-4" />
              </motion.a>

              <motion.a
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-blue-600 shadow-sm transition hover:bg-blue-600 hover:text-white"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </motion.a>

              <motion.a
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                aria-label="Threads"
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-black bg-white text-black shadow-sm transition hover:bg-black hover:text-white"
              >
                <FaThreads className="h-4 w-4" />
              </motion.a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollTop}
        aria-label="Scroll to top"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-emerald-600/90 border border-emerald-500 text-white shadow-xl backdrop-blur-md transition hover:bg-emerald-600"
      >
        <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6" />
      </motion.button>
    </>
  );
}