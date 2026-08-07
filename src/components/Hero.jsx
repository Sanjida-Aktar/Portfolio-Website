"use client";

import { Mail, ArrowDown } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from "react";

export default function Hero() {
  const roles = [
    "Web Developer",
    "Problem Solver",
    "Aspiring Software Engineer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
const [text, setText] = useState("");
const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
  const currentRole = roles[roleIndex];

  let speed = isDeleting ? 50 : 80;

  const timer = setTimeout(() => {
    if (!isDeleting) {
      setText(currentRole.substring(0, text.length + 1));

      if (text === currentRole) {
        setTimeout(() => {
          setIsDeleting(true);
        }, 1500);
      }
    } else {
      setText(currentRole.substring(0, text.length - 1));

      if (text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
  }, speed);

  return () => clearTimeout(timer);
}, [text, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pt-28"
    >
      {/* Background Glow */}
      <div className="animated-glow glow-cyan left-[-100px] top-[180px]" />
      <div className="animated-glow glow-purple right-[-120px] top-[250px]" />

      <div className="mx-auto grid min-h-[82vh] max-w-7xl items-center gap-12 lg:grid-cols-2">

        <div className="hero-content order-2 lg:order-1">
          <p className="mb-5 text-lg font-medium text-cyan-400">
            Hello, It's Me
          </p>

          <h1 className="text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
            Sanjida <span className="gradient-text">Aktar</span>
          </h1>

         <h2 className="mt-7 whitespace-nowrap text-2xl font-bold leading-relaxed text-gray-200 sm:text-3xl">
  <span>CSE Student & </span>

  <span className="gradient-text">
    {text}
    <span className="typing-cursor">|</span>
  </span>
</h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            A passionate Computer Science & Engineering student focused on
            software development, web development and problem solving. I love
            turning ideas into real-world digital experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary text-base">
              View My Work →
            </a>

            <a href="#contact" className="btn-secondary text-base">
              Contact Me
            </a>
          </div>

          <div className="mt-9 flex items-center gap-6">
            <a
              href="https://github.com/Sanjida-Aktar"
              className="social-link text-lg font-semibold text-gray-400 hover:text-cyan-400"
            >
              <FaGithub className="text-4xl" />
            </a>

            <a
              href="https://www.linkedin.com/in/swe-sanjida-aktar/"
              className="social-link text-lg font-semibold text-gray-400 hover:text-cyan-400"
            >
              <IoLogoLinkedin className="text-4xl" />
            </a>

            <a
              href="mailto:mst.sanjida.aktar.cnj.bd@gmail.com"
              className="social-link text-gray-400 hover:text-cyan-400"
            >
              <MdEmail className="text-4xl" />
            </a>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="profile-wrapper">
            {/* Rotating Ring */}
            <div className="profile-ring"></div>

            {/* Profile Image */}
            <img
              src="/images/profile.png"
              alt="Sanjida Aktar"
              className="profile-image"
            />

            {/* Lighting */}
            <div className="profile-light"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="scroll-indicator absolute bottom-7 left-1/2 -translate-x-1/2 text-gray-500 hover:text-cyan-400"
      >
        <ArrowDown size={26} />
      </a>
    </section>
  );
}
