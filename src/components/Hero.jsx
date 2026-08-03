import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pt-32"
    >
      <div className="glow-bg left-0 top-20" />

      <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* Left */}
        <div className="fade-up">
          <p className="mb-4 text-lg font-medium text-cyan-400">
            Hello, It's Me 👋
          </p>

          <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
            Sanjida
            <br />
            <span className="gradient-text">Aktar</span>
          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-gray-200 sm:text-3xl">
            CSE Student &{" "}
            <span className="text-cyan-400">
              Aspiring Software Engineer
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            A passionate Computer Science & Engineering student focused on
            software development, web development and problem solving.
            I love turning ideas into real-world digital experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View My Work →
            </a>

            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex gap-5">
            <a
              href="#"
              className="text-gray-400 transition hover:text-cyan-400"
            >
              <Github size={24} />
            </a>

            <a
              href="#"
              className="text-gray-400 transition hover:text-cyan-400"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="#contact"
              className="text-gray-400 transition hover:text-cyan-400"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Right - Profile */}
        <div className="flex justify-center">
          <div className="profile-wrapper">

            <div className="profile-ring"></div>

            <img
              src="/images/profile.png"
              alt="Sanjida Aktar"
              className="profile-image"
            />

            <div className="profile-light"></div>

          </div>
        </div>
      </div>

      {/* Scroll */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 transition hover:text-cyan-400"
      >
        <ArrowDown className="animate-bounce" />
      </a>
    </section>
  );
}