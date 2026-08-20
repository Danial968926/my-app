"use client";

import { motion } from "framer-motion";
import {
  Building2,
  HeartPulse,
  Bandage,
  Stethoscope,
  HousePlus,
  UserRound,
  Microscope,
  Ambulance,
} from "lucide-react";

const specializations = [
  {
    title: "Hospital Billing",
    description:
      "Comprehensive billing and coding solutions for hospitals, ensuring accurate claims and faster reimbursements from insurance providers, Medicare, and Medicaid.",
    icon: Building2,
  },
  {
    title: "Healthcare Group Billing",
    description:
      "Efficient revenue cycle management for multi-provider healthcare practices with accurate claim submissions and streamlined billing workflows.",
    icon: HeartPulse,
  },
  {
    title: "Wound Care Billing",
    description:
      "Specialized billing services for wound care providers, improving claim accuracy and reducing payment delays.",
    icon: Bandage,
  },
  {
    title: "Family Medicine Billing",
    description:
      "Reliable billing solutions for family medicine practices with compliant coding and efficient reimbursement processes.",
    icon: Stethoscope,
  },
  {
    title: "Nursing Home Billing",
    description:
      "End-to-end billing and coding services for nursing homes and long-term care facilities with improved revenue management.",
    icon: HousePlus,
  },
  {
    title: "Individual Practice Billing",
    description:
      "Professional billing support for solo practitioners, allowing healthcare providers to focus more on patient care.",
    icon: UserRound,
  },
  {
    title: "Medical Laboratory Billing",
    description:
      "Accurate laboratory billing services that simplify insurance claims and accelerate reimbursements.",
    icon: Microscope,
  },
  {
    title: "Emergency Care Billing",
    description:
      "Specialized emergency room billing solutions designed to reduce denials and optimize revenue collection.",
    icon: Ambulance,
  },
];

export default function Specialization() {
  return (
    <section className="bg-white py-10 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-emerald-100 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-emerald-700">
            Industries We Serve
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Specialized Medical Billing Solutions
          </h2>

          <p className="mt-3 text-xs sm:text-sm md:text-base leading-relaxed text-slate-600">
            We provide tailored medical billing solutions for hospitals,
            healthcare groups, laboratories, nursing homes, emergency care,
            family medicine, and many other healthcare specialties.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 gap-5 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {specializations.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.4,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm hover:border-emerald-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-emerald-50 p-3 sm:p-3.5 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>

                <h3 className="mb-2 text-lg sm:text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}