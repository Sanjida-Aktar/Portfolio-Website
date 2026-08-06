"use client";

import { useEffect, useState } from "react";

const journeyData = [
  {
    year: "2024",
    title: "Started My CSE Journey",
    type: "Education",
    description:
      "Started my Computer Science & Engineering journey and began building a strong foundation in programming and computer science.",
    tags: ["C", "C++", "Programming"],
  },

  {
    year: "2025",
    title: "Exploring Web Development",
    type: "Learning",
    description:
      "Started learning web development and explored HTML, CSS, JavaScript and modern frontend development.",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS"]
  },

  {
    year: "2026",
    title: "Building Real Projects",
    type: "Development",
    description:
      "Started building practical projects to improve my development skills and understand how real-world applications work.",
  
    tags: ["Next.js", "React", "DSA", "C++"],
  },

  {
    year: "At present",
    title: "Growing as a Software Engineer",
    type: "Current Focus",
    description:
      "Currently focusing on improving my technical skills, learning new technologies, and growing as a professional Software Engineer.",
    tags: ["JavaScript", "React", "Next.js", "DSA", "Database"],
  },
];

export default function Journey() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("journey");

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
    <section id="journey" className="section journey-section">

      <div className="section-title">
        <span>My Journey</span>

        <h2>
          Learning &{" "}
          <span className="gradient-text">
            Growth
          </span>
        </h2>

        <p className="journey-subtitle">
          A timeline of my journey as a Computer Science
          student and aspiring Software Engineer.
        </p>
      </div>

      <div
        className={`journey-timeline ${
          visible ? "journey-visible" : ""
        }`}
      >
        <div className="journey-line"></div>

        {journeyData.map((item, index) => (
          <div
            key={item.year}
            className={`journey-item ${
              index % 2 === 0
                ? "journey-left"
                : "journey-right"
            }`}
            style={{
              "--delay": `${index * 120}ms`,
            }}
          >
            {/* Card */}
            <div className="journey-card">

              <div className="journey-card-top">
                <span className="journey-year">
                  {item.year}
                </span>

                <span className="journey-type">
                  {item.type}
                </span>
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              {/* Tags */}
              <div className="journey-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="journey-dot">
              <span></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}