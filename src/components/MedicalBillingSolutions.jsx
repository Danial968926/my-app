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
    <section className="py-10">
      <div className="mx-auto ">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Our Services
          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
            Complete Medical Billing Solutions <br className="hidden sm:inline" /> for Your Practice
          </h2>

          <p className="mt-3 text-md text-slate-600">
            We provide comprehensive revenue cycle management services that improve
            <br className="hidden sm:inline" /> billing accuracy, reduce claim denials, and maximize reimbursements.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="rounded-xl cursor-pointer border border-slate-200 bg-white p-8 shadow-lg hover:border-emerald-500 hover:shadow-2xl"
              >
                <div className="mb-5 inline-flex rounded-full bg-emerald-100 p-4 text-emerald-600">
                  <Icon size={25} />
                </div>

                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}