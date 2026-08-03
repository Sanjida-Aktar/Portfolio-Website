const journey = [
  {
    year: "2024",
    title: "Started CSE Journey",
    text: "Started my undergraduate journey in Computer Science & Engineering.",
  },
  {
    year: "2025",
    title: "Started Web Development",
    text: "Started learning HTML, CSS, JavaScript, Tailwind CSS and React.",
  },
  {
    year: "2026",
    title: "Building Real Projects",
    text: "Working on real-world projects and improving my programming skills.",
  },
  {
    year: "Future",
    title: "Become a Software Engineer",
    text: "Continuously learning and preparing for a professional software engineering career.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="section">

      <div className="section-title">
        <span>My Journey</span>
        <h2>
          Education &{" "}
          <span className="gradient-text">
            Development
          </span>
        </h2>
      </div>

      <div className="mx-auto max-w-3xl space-y-6">

        {journey.map((item) => (
          <div
            key={item.year}
            className="glass-card flex gap-6 p-6"
          >
            <div className="text-xl font-bold text-cyan-400">
              {item.year}
            </div>

            <div>
              <h3 className="text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-2 leading-7 text-gray-400">
                {item.text}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}