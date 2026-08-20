"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center">
      <motion.div
        whileHover={{
          scale: 1.03,
          rotate: -1,
        }}
        whileTap={{
          scale: 0.97,
        }}
        className="relative"
      >
        <Image
          src="/images/osozMBS.png"
          alt="OSOZ Medical Billing Services"
          width={180}
          height={60}
          priority
          className="h-10 sm:h-12 md:h-14 w-auto object-contain"
        />
      </motion.div>
    </Link>
  );
}