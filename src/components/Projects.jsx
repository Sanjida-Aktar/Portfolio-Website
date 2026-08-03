const projects = [
  {
    title: "GitHub Issues Tracker",
    description:
      "A web application that fetches and displays GitHub issues using an API.",
    tech: "JavaScript • Tailwind CSS • REST API",
  },
  {
    title: "Job Tracker Website",
    description:
      "A responsive application for organizing and managing job applications.",
    tech: "HTML • Tailwind CSS • JavaScript",
  },
  {
    title: "Hotel Management System",
    description:
      "A C++ based hotel management system built using OOP concepts.",
    tech: "C++ • OOP",
  },
  {
    title: "ModelHub AI",
    description:
      "A React-based platform for exploring AI-related models and tools.",
    tech: "React • JavaScript • Tailwind CSS",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">

      <div className="section-title">
        <span>My Work</span>
        <h2>
          Things I've <span className="gradient-text">Built</span>
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {projects.map((project) => (
          <div
            key={project.title}
            className="glass-card p-7"
          >
            <div className="mb-6 flex h-48 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
              <span className="text-5xl">💻</span>
            </div>

            <h3 className="text-2xl font-bold">
              {project.title}
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              {project.description}
            </p>

            <p className="mt-5 text-sm text-cyan-400">
              {project.tech}
            </p>

            <div className="mt-6 flex gap-3">
              <button className="btn-primary">
                Live Demo
              </button>

              <button className="btn-secondary">
                GitHub
              </button>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}