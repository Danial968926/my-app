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
    <section className="overflow-hidden bg-slate-50 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Why Choose OSOZMBS
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-slate-900 md:text-4xl">
            Reliable Solutions for Your Revenue Cycle Needs
          </h2>

          <p className="mt-5 text-md text-slate-600">
            OSOZMBS is your trusted partner for managing the entire revenue
            cycle. We provide comprehensive medical billing, coding, and denial
            management services that improve operational efficiency, accelerate
            reimbursements, and allow healthcare providers to focus on
            delivering exceptional patient care.
          </p>

          <div className="mt-5 space-y-2">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <CircleCheck className="mt-1 h-6 w-6 text-emerald-500" />

                <p className="text-slate-700">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/images/img1.jpg"
              alt="Reliable Medical Billing Solutions"
              width={700}
              height={500}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}