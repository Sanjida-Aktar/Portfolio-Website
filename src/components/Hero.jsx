"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/profile";
import SocialLinks from "./Sociallinks";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Background glow orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-cyan-glow/20 blur-[110px]" />
        <div className="absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-purple-glow/20 blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-glow/10 blur-[100px]" />

        {/* subtle floating particles */}
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-cyan-glow/60"
            style={{ top: p.top, left: p.left }}
            animate={{ y: [0, -18, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="section-container relative grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left column */}
        <div className="order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-glow"
          >
            Hello, It&apos;s Me
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-xl font-medium text-slate-300 sm:text-2xl"
          >
            I&apos;m a {profile.role.split(" & ")[0]} &amp;{" "}
            <span className="gradient-text font-semibold">
              Aspiring Software Engineer
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            A passionate Computer Science &amp; Engineering student focused on
            software development, web development and problem solving. I
            love turning ideas into real-world digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="btn-primary">
              View My Work
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Connect With Me
            </p>
            <SocialLinks></SocialLinks>
          </motion.div>
        </div>

        {/* Right column - profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="relative">
            {/* pulsing glow ring behind image */}
            <div className="absolute inset-0 -z-10 animate-pulse-glow rounded-full bg-gradient-to-tr from-cyan-glow via-blue-glow to-purple-glow opacity-40 blur-2xl" />

            {/* rotating gradient ring */}
            <div className="absolute -inset-3 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,theme(colors.cyan.glow),theme(colors.purple.glow),theme(colors.magenta.glow),theme(colors.cyan.glow))] opacity-70 [mask:radial-gradient(farthest-side,transparent_calc(100%-3px),black_calc(100%-2px))]" />

            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-white/10 bg-base-900 shadow-glow-soft sm:h-80 sm:w-80 lg:h-96 lg:w-96"
            >
              <Image
                src="/images/profile.png"
                alt={`Portrait of ${profile.name}`}
                fill
                sizes="(max-width: 768px) 256px, 384px"
                className="object-cover"
                priority
              />
            </motion.div>

            {/* soft reflection underneath */}
            <div className="absolute -bottom-6 left-1/2 h-8 w-48 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-glow/40 via-purple-glow/40 to-magenta-glow/30 blur-2xl" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition-colors hover:text-cyan-glow"
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.2em]">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.a>
    </section>
  );
}

const particles = [
  { top: "15%", left: "10%", duration: 4.5, delay: 0 },
  { top: "30%", left: "85%", duration: 5, delay: 0.5 },
  { top: "65%", left: "20%", duration: 4, delay: 1 },
  { top: "75%", left: "75%", duration: 5.5, delay: 1.5 },
  { top: "45%", left: "50%", duration: 4.8, delay: 0.8 },
];