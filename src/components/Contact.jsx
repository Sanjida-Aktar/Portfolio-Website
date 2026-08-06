"use client";

import { useEffect, useState } from "react";
import { FaLinkedin, FaLocationArrow } from "react-icons/fa6";

export default function Contact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("contact");

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
    <section id="contact" className="section contact-section">

      {/* Heading */}
      <div className="section-title">
        <span>Get In Touch</span>

        <h2>
          Let's Work{" "}
          <span className="gradient-text">
            Together
          </span>
        </h2>

        <p className="contact-subtitle">
          Have a project idea, opportunity or just want to
          say hello? Feel free to reach out.
        </p>
      </div>

      {/* Contact Content */}
      <div
        className={`contact-container ${
          visible ? "contact-visible" : ""
        }`}
      >
        <div className="contact-info">

          <h3>Let's build something amazing.</h3>

          <p>
            I'm always interested in learning, building
            meaningful projects and connecting with people
            who share similar interests in technology.
          </p>

          <a
            href="mailto:mst.sanjida.aktar.cnj.bd@gmail.com"
            className="contact-info-item"
          >
            <div className="contact-icon">
              ✉
            </div>

            <div>
              <span>Email</span>
              <strong>
                mst.sanjida.aktar.cnj.bd@gmail.com
              </strong>
            </div>
          </a>

          {/* Location */}
          <div className="contact-info-item">
            <div className="contact-icon">
              <FaLocationArrow />
            </div>

            <div>
              <span>Location</span>
              <strong>
                Bangladesh
              </strong>
            </div>
          </div>

          <div className="contact-socials">

            <a
              href="https://github.com/Sanjida-Aktar"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/swe-sanjida-aktar/"
              target="_blank"
              rel="noopener noreferrer"
            >

              LinkedIn ↗
            </a>

          </div>

        </div>

       <form
  action="https://formspree.io/f/xbgrlolg"
  method="POST"
  className="contact-form"
>
  <div className="contact-input-row">

    <div className="contact-field">
      <label>Name</label>

      <input
        type="text"
        name="name"
        placeholder="Your name"
        required
      />
    </div>

    <div className="contact-field">
      <label>Email</label>

      <input
        type="email"
        name="email"
        placeholder="your@email.com"
        required
      />
    </div>

  </div>

  <div className="contact-field">
    <label>Subject</label>

    <input
      type="text"
      name="subject"
      placeholder="Project / Opportunity"
      required
    />
  </div>

  <div className="contact-field">
    <label>Message</label>

    <textarea
      name="message"
      rows="6"
      placeholder="Tell me about your idea..."
      required
    ></textarea>
  </div>

  <button
    type="submit"
    className="contact-submit"
  >
    Send Message
    <span>↗</span>
  </button>
</form>

      </div>
    </section>
  );
}