"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "left",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={align === "center" ? "text-center" : "text-left"}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-glow">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold text-white sm:text-4xl">
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-slate-400 ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}