"use client"

import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function Hero1() {
  return (
    <section className="relative flex justify-center items-center overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-550 to-cyan-700 min-h-screen py-20 px-6">
      {/* Background */}

      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="mx-auto max-w-7xl mt-10">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border-2 border-white bg-white/10 px-4 py-2 text-sm font-semibold text-white">
            Trusted Medical Billing Partner
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-5xl">
            Outstanding Medical {" "}
            <span className="text-emerald-200">Billing Services</span>
          </h2>

          <p className="mt-5 text-md text-white">
            At OSOZMBS, we strive to be the most dependable and efficient
            medical billing service that healthcare providers can confidently
            trust. We go beyond reducing administrative burdens by ensuring
            clean claim submissions within 24 hours, improving collections,
            resolving revenue cycle inconsistencies, and maintaining a 99%
            coding and billing accuracy rate to minimize denials and maximize
            reimbursement.
          </p>

          <div className="mt-10 flex justify-center">
            <Button
              title="Learn More"
              href="/aboutUs"
              variant="secondary"
              icon={ArrowRight}
              size="md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}