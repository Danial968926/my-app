"use client";

import { motion } from "framer-motion";
import { CalendarDays, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function CMSCard({ article, index }) {
    return (
        <motion.article
            initial={{
                opacity: 0,
                y: 40,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.2,
            }}
            transition={{
                duration: 0.6,
                delay: index * 0.12,
            }}
            className="group flex h-full flex-col rounded-2xl border-2 border-emerald-600 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500 hover:shadow-2xl"
        >
            {/* Badge */}
            <div className="mb-5 inline-flex border-2 border-emerald-600 w-fit items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                <CalendarDays size={16} />
                CMS Update
            </div>

            {/* Title */}
            <h3 className="mb-4 text-2xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-emerald-600">
                {article.title}
            </h3>

            {/* Description */}
            <p className="flex-1 text-slate-600">
                {article.description}
            </p>

            {/* Button */}
            <Link
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-emerald-600 transition-all hover:gap-3"
            >
                Read Full Article
                <ArrowUpRight size={18} />
            </Link>
        </motion.article>
    );
}