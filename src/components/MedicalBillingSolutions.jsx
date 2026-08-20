"use client";

import {
  Laptop,
  FileText,
  FileWarning,
  PhoneCall,
  ShieldCheck,
  Hospital,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Laptop,
    title: "Medical Coding",
    description:
      "Accurate medical coding services that convert healthcare diagnoses, treatments, and procedures into standardized billing codes.",
  },
  {
    icon: FileText,
    title: "EOB Posting",
    description:
      "Timely verification and posting of Explanation of Benefits (EOBs) to ensure every claim receives the correct payment.",
  },
  {
    icon: FileWarning,
    title: "Claim Creation",
    description:
      "Professional claim creation with complete patient information, helping reduce errors and accelerate reimbursements.",
  },
  {
    icon: PhoneCall,
    title: "Patient Calls",
    description:
      "Dedicated representatives assist patients with billing inquiries and provide prompt, professional support.",
  },
  {
    icon: ShieldCheck,
    title: "Denial Management",
    description:
      "We proactively manage claim denials and rejections to maximize collections and improve cash flow.",
  },
  {
    icon: Hospital,
    title: "Patient Eligibility",
    description:
      "Insurance eligibility verification before appointments to minimize claim denials and payment delays.",
  },
];

export default function MedicalBillingSolutions() {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block rounded-full bg-emerald-100 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-emerald-700">
          Our Services
        </span>

        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-snug tracking-tight">
          Complete Medical Billing Solutions <br className="hidden sm:inline" /> for Your Practice
        </h2>

        <p className="mt-3 text-xs sm:text-sm md:text-base leading-relaxed text-slate-600">
          We provide comprehensive revenue cycle management services that improve{" "}
          <br className="hidden sm:inline" /> billing accuracy, reduce claim denials, and maximize reimbursements.
        </p>
      </div>

      {/* Services Grid */}
      <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 gap-5 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm hover:border-emerald-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div>
                <div className="mb-4 inline-flex rounded-2xl bg-emerald-50 p-3 sm:p-3.5 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>

                <h3 className="mb-2 text-lg sm:text-xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}