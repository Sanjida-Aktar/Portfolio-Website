import { Mail, MapPin} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="contact" className="section">

      <div className="section-title">
        <span>Contact Me</span>
        <h2>
          Let's Build Something{" "}
          <span className="gradient-text">
            Together
          </span>
        </h2>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">

        <div>
          <p className="text-lg leading-8 text-gray-400">
            I'm always open to discussing new opportunities,
            collaborations, projects or just having a chat.
          </p>

          <div className="mt-6 space-y-5">

            <div className="flex items-center gap-4">
              <Mail className="text-cyan-400" />
              <span className="text-gray-300">
                <a href="mailto:mst.sanjida.aktar.cnj.bd@gmail.com" className="hover:text-cyan-400">
                  mst.sanjida.aktar.cnj.bd@gmail.com
                </a>
              </span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-cyan-400" />
              <span className="text-gray-300">
                Bangladesh
              </span>
            </div>

            <div className="flex gap-5 pt-4">
              <FaGithub className="text-gray-400 text-3xl hover:text-cyan-400" />
              <FaLinkedin className="text-gray-400 text-3xl hover:text-cyan-400" />
            </div>

          </div>
        </div>

        <form className="glass-card space-y-5 p-7">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-4 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-4 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400"
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-4 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-4 text-white outline-none placeholder:text-gray-500 focus:border-cyan-400"
          />

          <button type="submit" className="btn-primary w-full">
            Send Message →
          </button>

        </form>

      </div>
    </section>
  );
}