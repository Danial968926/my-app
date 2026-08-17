"use client";

import { motion } from "framer-motion";
import { Building2, MapPin, Phone, Mail, Clock3, Navigation } from "lucide-react";
import Button from "../ui/Button";

export default function ShopLocation() {
  return (
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
      className="rounded-2xl border-3 border-emerald-500 bg-white p-5 shadow-xl"
    >
      <div className="mb-8 flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
          <Building2 size={30} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-emerald-700">
            OSOZ Medical Billing Services
          </h2>

          <p className="text-sm text-slate-500">
            Revenue Cycle Management Experts
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex gap-4">
          <MapPin className="mt-1 text-emerald-600" />

          <div>
            <h4 className="font-black text-lg text-slate-900">
              Office Address
            </h4>

            <p className="text-sm text-slate-600">
              5900 Balcones Dr #16621 Austin, TX 78731
              <br />
              United States
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Phone className="mt-1 text-emerald-600" />

          <div>
            <h4 className="font-black text-lg text-slate-900">
              Phone
            </h4>

            <a
              href="tel:+11234567890"
              className="text-slate-600 text-sm hover:text-emerald-600"
            >
              +1 (123) 456-7890
            </a>
          </div>
        </div>

        <div className="flex gap-4">
          <Mail className="mt-1 text-emerald-600" />

          <div>
            <h4 className="font-black text-lg text-slate-900">
              Email
            </h4>

            <a
              href="mailto:info@osozmbs.com"
              className="text-slate-600 text-sm hover:text-emerald-600"
            >
              info@osozmbs.com
            </a>
          </div>
        </div>

        <div className="flex gap-4">
          <Clock3 className="mt-1 text-emerald-600" />

          <div>
            <h4 className="font-black text-lg text-slate-900">
              Business Hours
            </h4>

            <p className="text-slate-600 text-sm">
              Monday - Friday
              <br />
              9:00 AM – 6:00 PM
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex justify-center items-center">
        <Button
          title="Get Directions"
          href="https://maps.google.com/?q=5900+Balcones+Dr,+Austin,+TX+78731"
          icon={Navigation}
          variant="primary"
          size="md"
        />
      </div>
    </motion.div>
  );
}