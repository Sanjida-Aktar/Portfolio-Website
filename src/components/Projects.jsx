
"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio website built to showcase my skills, projects, learning journey and experience as a CSE student.",
    image: "/images/portfolio.png",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    live: "#",
    github: "https://github.com/Sanjida-Aktar/Portfolio-Website",
  },
  {
    title: "Book Library",
    description:
      "A modern book library web application where users can explore, manage and organize books through a clean and responsive interface.",
    image: "/images/booklibrary.png",
    technologies: ["Next.js","MongoDB", "React", "Tailwind CSS"],
    live: "https://online-book-borowing.vercel.app/",
    github: "https://github.com/Sanjida-Aktar/Online-Book-Borrow",
  },

  {
    title: "AI Model Hub",
    description:
      "A platform for discovering and exploring various AI models, with features for filtering, searching, and viewing model details.",
    image: "/images/ai-hub.png",
    technologies: ["React","JavaScript", "Tailwind CSS"],
    live: "https://modelhub-ai.netlify.app/",
    github: "https://github.com/Sanjida-Aktar/AI-Model-Hub",
  },
   
  {
    title: "GitHub Issues Tracker",
    description:
      "An API-based GitHub issues tracker that displays issues dynamically and helps users explore open and closed issues. (Password:admin, Username: admin123)",
    image: "/images/github-issues.png",
    technologies: ["JavaScript", "API", "Tailwind CSS"],
    live: "https://github-issues-web.netlify.app/",
    github: "https://github.com/Sanjida-Aktar/Github-Issue-Traker",
  },

  
];

export default function Projects() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("projects");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="section projects-section">
      
      <div className="section-title">
        <span>My Recent Work</span>

        <h2>
          Featured <span className="gradient-text">Projects</span>
        </h2>
      </div>

      <div
        className={`projects-grid ${
          visible ? "projects-visible" : ""
        }`}
      >
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={project.title}
            style={{
              "--delay": `${index * 80}ms`,
            }}
          >
            {/* Image */}
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="project-image-overlay">
                <span>View Project</span>
              </div>
            </div>

            {/* Content */}
            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              {/* Technologies */}
              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              {/* Buttons */}
              <div className="project-buttons">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-live"
                >
                  Live link ↗
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-github"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}