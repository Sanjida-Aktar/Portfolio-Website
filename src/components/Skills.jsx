const skills = [
  "C",
  "C++",
  "Python",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "React",
  "Next.js",
  "SQL",
  "Git",
  "GitHub",
];

export default function Skills() {
  return (
    <section id="skills" className="section">

      <div className="section-title">
        <span>My Skills</span>
        <h2>
          Technical <span className="gradient-text">Skills</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">

        {skills.map((skill) => (
          <div
            key={skill}
            className="glass-card p-6 text-center"
          >
            <h3 className="text-lg font-semibold">
              {skill}
            </h3>
          </div>
        ))}

      </div>
    </section>
  );
}