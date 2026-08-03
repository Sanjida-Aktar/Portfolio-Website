export default function About() {
  return (
    <section id="about" className="section">

      <div className="section-title">
        <span>About Me</span>
        <h2>
          Get To <span className="gradient-text">Know Me</span>
        </h2>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">

        <div>
          <h3 className="text-3xl font-bold">
            Hi, I'm Sanjida 👋
          </h3>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            I'm a Computer Science & Engineering student passionate about
            software development, web development and problem solving.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-400">
            I enjoy learning new technologies and turning ideas into
            useful digital solutions. Currently, I'm improving my skills
            in JavaScript, React, Next.js, C++, DSA and DBMS.
          </p>
        </div>

        <div className="glass-card p-8">

          <div className="grid gap-6 sm:grid-cols-2">

            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="mt-1 text-lg font-semibold">
                Sanjida Aktar
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">University</p>
              <p className="mt-1 text-lg font-semibold">
                EBAUB
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Department</p>
              <p className="mt-1 text-lg font-semibold">
                Computer Science & Engineering
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Goal</p>
              <p className="mt-1 text-lg font-semibold text-cyan-400">
                Software Engineer
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}