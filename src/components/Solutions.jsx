"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";

const features = [
  "Accurate medical billing and coding services",
  "Faster claim processing and reimbursements",
  "Reduced claim denials and payment delays",
  "Dedicated revenue cycle management experts",
];

export default function Solutions() {
  return (
    <section className="overflow-hidden bg-slate-50 py-10 sm:py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 px-4 sm:px-6 lg:px-8">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <span className="inline-block rounded-full bg-emerald-100 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-emerald-700">
            Why Choose OSOZMBS
          </span>

          {/* Heading */}
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-slate-900 tracking-tight">
            Reliable Solutions for Your Revenue Cycle Needs
          </h2>

          {/* Description */}
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-slate-600">
            OSOZMBS is your trusted partner for managing the entire revenue
            cycle. We provide comprehensive medical billing, coding, and denial
            management services that improve operational efficiency, accelerate
            reimbursements, and allow healthcare providers to focus on
            delivering exceptional patient care.
          </p>

          {/* Features List */}
          <div className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3.5">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-2.5 sm:gap-3">
                <CircleCheck className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-emerald-500" />
                <p className="text-xs sm:text-sm md:text-base font-medium text-slate-700 leading-snug">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mt-2 lg:mt-0"
        >
          {/* Background Glows */}
          <div className="absolute -left-4 -top-4 sm:-left-6 sm:-top-6 h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-emerald-500/10 blur-2xl sm:blur-3xl pointer-events-none" />
          <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-cyan-500/10 blur-2xl sm:blur-3xl pointer-events-none" />

          {/* Image Wrapper */}
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl">
            <Image
              src="/images/img1.jpg"
              alt="Reliable Medical Billing Solutions"
              width={700}
              height={500}
              className="h-auto w-full object-cover transition duration-500 hover:scale-105"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}