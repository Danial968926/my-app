"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Vision",
    description:
      "At OSOZMBS, our vision is to become the leading choice for medical billing services by providing precise, efficient, and reliable solutions. We empower healthcare practices to optimize revenue, reduce administrative burdens, and focus on exceptional patient care through innovation and excellence.",
  },
  {
    title: "Mission",
    description:
      "Our mission is to simplify the medical billing process by delivering accurate, timely, and compliant revenue management solutions. We combine advanced technology, industry expertise, and personalized support to maximize financial outcomes while maintaining integrity, transparency, and professionalism.",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 via-white to-slate-50 py-10 sm:py-16 md:py-20">
      {/* Dynamic Background Glow Effect */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-64 w-64 sm:h-96 sm:w-96 rounded-full bg-emerald-400/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 sm:h-96 sm:w-96 rounded-full bg-teal-400/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/90 p-5 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-md"
            >
              {/* Card Accent Top Bar */}
              {/* <div className="absolute inset-x-0 top-0 w-50 h-1 rounded-t-2xl sm:rounded-t-3xl bg-gradient-to-r from-emerald-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}

              <h2 className="mb-2 sm:mb-4 text-xl sm:text-2xl md:text-3xl font-extrabold text-emerald-600 tracking-tight">
                {card.title}
              </h2>

              <p className="text-xs sm:text-sm md:text-base leading-relaxed sm:leading-7 text-slate-600 font-normal">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}