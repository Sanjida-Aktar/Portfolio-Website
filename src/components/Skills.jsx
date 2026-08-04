"use client";

const technicalSkills = [
  {
    name: "HTML",
    level: 90,
  },
  {
    name: "CSS",
    level: 85,
  },
  {
    name: "JavaScript",
    level: 75,
  },
  {
    name: "React",
    level: 70,
  },
  {
    name: "Next.js",
    level: 65,
  },
  {
    name: "SQL",
    level: 60,
  },
  {
    name: "Python",
    level: 50,
  },
  {
    name: "C++",
    level: 95,
  },
  {
    name: "DSA",
    level: 65,
  },
];

const professionalSkills = [
  {
    name: "Problem Solving",
    level: 80,
  },
  {
    name: "Communication",
    level: 70,
  },
  {
    name: "Teamwork",
    level: 60,
  },
  {
    name: "Creativity",
    level: 78,
  },
  {
    name: "Time Management",
    level: 80,
  },
  {
    name: "Adaptability",
    level: 75,
  },
];

function TechnicalSkill({ name, level }) {
  return (
    <div className="technical-skill">
      <div className="technical-skill-info">
        <span>{name}</span>
        <span>{level}%</span>
      </div>

      <div className="technical-bar">
        <div
          className="technical-bar-fill"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

function ProfessionalSkill({ name, level }) {
  const circleStyle = {
    "--progress": `${level * 3.6}deg`,
  };

  return (
    <div className="professional-skill">
      <div
        className="professional-circle"
        style={circleStyle}
      >
        <div className="professional-circle-inner">
          <span>{level}%</span>
        </div>
      </div>

      <h4>{name}</h4>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="section skills-section"
    >
      {/* Section Heading */}
      <div className="section-title">
        <span>Technical and Professional</span>

        <h2>
          My <span className="gradient-text">Skills</span>
        </h2>
      </div>

      {/* Skills Content */}
      <div className="skills-container">

        {/* ================= TECHNICAL ================= */}
        <div className="technical-skills">
          <h3>Technical Skills</h3>

          <div className="technical-list">
            {technicalSkills.map((skill) => (
              <TechnicalSkill
                key={skill.name}
                name={skill.name}
                level={skill.level}
              />
            ))}
          </div>
        </div>

        {/* ================= PROFESSIONAL ================= */}
        <div className="professional-skills">
          <h3>Professional Skills</h3>

          <div className="professional-grid">
            {professionalSkills.map((skill) => (
              <ProfessionalSkill
                key={skill.name}
                name={skill.name}
                level={skill.level}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}