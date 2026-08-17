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
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Industries We Serve
          </span>

          <h2 className="mt-5 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Specialized Medical Billing Solutions
          </h2>

          <p className="mt-5 text-md text-slate-600">
            We provide tailored medical billing solutions for hospitals,
            healthcare groups, laboratories, nursing homes, emergency care,
            family medicine, and many other healthcare specialties.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {specializations.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group rounded-xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:border-emerald-500 hover:shadow-2xl"
              >
                <div className="mb-5 inline-flex rounded-full bg-emerald-100 p-4 text-emerald-600 transition group-hover:bg-emerald-500 group-hover:text-white">
                  <Icon size={25} />
                </div>

                <h3 className="mb-4 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600">
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