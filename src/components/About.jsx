"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = aboutRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className={`section relative overflow-hidden ${
        isVisible ? "about-show" : ""
      }`}
    >
      {/* Background Glow */}
      <div className="animated-glow glow-cyan right-[-200px] top-[100px]" />

      {/* Section Heading */}
      <div className="section-title about-fade">
        <span>About Me</span>

        <h2>
          Get To Know{" "}
          <span className="gradient-text">Me</span>
        </h2>
      </div>

      {/* About Content */}
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        {/* ================= LEFT SIDE ================= */}
        <div className="about-fade">
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

        {/* ================= RIGHT SIDE ================= */}
        <div className="grid gap-5 sm:grid-cols-2">
          {/* Card 1 */}
          <div className="glass-card about-card about-fade p-6">
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

          {/* Card 2 */}
          <div className="glass-card about-card about-fade p-6">
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

          {/* Card 3 */}
          <div className="glass-card about-card about-fade p-6">
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

          {/* Card 4 */}
          <div className="glass-card about-card about-fade p-6">
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
        </div>
      </div>
    </section>
  );
}