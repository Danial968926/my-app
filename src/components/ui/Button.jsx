"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function Button({
  title,
  href,
  onClick,
  icon: Icon,
  className = "",
  variant = "primary",
  size = "lg",
}) {
  const baseStyles = "flex items-center justify-center gap-3 rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-4";
  const variants = {
    primary: "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-300 border-2 border-emerald-700",
    secondary: "border-2 border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20",
    outline: "border-2 border-emerald-600 text-emerald-600 text-[0.9rem] font-black hover:bg-emerald-600 hover:text-white",
  };

  const sizes = {
    sm: "px-5 py-3 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const styles = clsx(baseStyles, variants[variant], sizes[size], className);

  const content = (
    <>
      {title}
      {Icon && <Icon size={20} />}
    </>
  );

  if (href) {
    const isExternal =
      href.startsWith("http://") || href.startsWith("https://");

    const buttonContent = (
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        {isExternal ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles}
          >
            {content}
          </a>
        ) : (
          <Link href={href} className={styles}>
            {content}
          </Link>
        )}
      </motion.div>
    );
    return buttonContent;
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={styles}
    >
      {content}
    </motion.button>
  );
}
