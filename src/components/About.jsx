"use client";

import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section
      id="about"
      className="section relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="animated-glow glow-cyan right-[-200px] top-[100px]" />

      {/* ================= SECTION HEADING ================= */}
      <ScrollReveal>
        <div className="section-title">
          <span>About Me</span>

          <h2>
            Get To Know{" "}
            <span className="gradient-text">Me</span>
          </h2>
        </div>
      </ScrollReveal>

      {/* ================= CONTENT ================= */}
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">

        {/* ================= LEFT SIDE ================= */}
        <ScrollReveal delay={0.1}>
          <div>
            <p className="text-lg font-medium text-cyan-400">
              Who I Am
            </p>

            <h3 className="mt-3 text-3xl font-bold sm:text-4xl">
              Hi, I'm{" "}
              <span className="gradient-text">
                Sanjida Aktar
              </span>{" "}
              👋
            </h3>

            <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
              I'm a Computer Science & Engineering student with a
              strong interest in software development, web development
              and problem solving.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-400 sm:text-lg">
              I enjoy learning new technologies and building real-world
              projects that turn ideas into useful digital experiences.
              Currently, I'm focusing on JavaScript, React, Next.js,
              C++, DSA and database technologies.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-400 sm:text-lg">
              My goal is to continuously improve my technical skills
              and grow into a professional Software Engineer.
            </p>

            {/* Highlights */}
            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
                Web Development
              </span>

              <span className="rounded-full border border-purple-400/20 bg-purple-400/5 px-4 py-2 text-sm text-purple-300">
                Problem Solving
              </span>

              <span className="rounded-full border border-pink-400/20 bg-pink-400/5 px-4 py-2 text-sm text-pink-300">
                Software Engineering
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* ================= RIGHT SIDE ================= */}
        <div className="grid gap-5 sm:grid-cols-2">

          {/* Card 1 */}
          <ScrollReveal delay={0.2}>
            <div className="glass-card about-card p-6">
              <div className="mb-4 text-3xl">
                🎓
              </div>

              <p className="text-sm text-gray-500">
                Education
              </p>

              <h3 className="mt-2 text-lg font-bold">
                Computer Science & Engineering
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Exim Bank Agricultural University Bangladesh
              </p>
            </div>
          </ScrollReveal>

          {/* Card 2 */}
          <ScrollReveal delay={0.3}>
            <div className="glass-card about-card p-6">
              <div className="mb-4 text-3xl">
                💻
              </div>

              <p className="text-sm text-gray-500">
                Focus Area
              </p>

              <h3 className="mt-2 text-lg font-bold">
                Web Development
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Building modern and responsive web applications.
              </p>
            </div>
          </ScrollReveal>

          {/* Card 3 */}
          <ScrollReveal delay={0.4}>
            <div className="glass-card about-card p-6">
              <div className="mb-4 text-3xl">
                🧠
              </div>

              <p className="text-sm text-gray-500">
                Strength
              </p>

              <h3 className="mt-2 text-lg font-bold">
                Problem Solving
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Practicing C++, DSA and algorithmic thinking.
              </p>
            </div>
          </ScrollReveal>

          {/* Card 4 */}
          <ScrollReveal delay={0.5}>
            <div className="glass-card about-card p-6">
              <div className="mb-4 text-3xl">
                🚀
              </div>

              <p className="text-sm text-gray-500">
                Career Goal
              </p>

              <h3 className="mt-2 text-lg font-bold text-cyan-400">
                Software Engineer
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Growing my skills to build impactful software.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}