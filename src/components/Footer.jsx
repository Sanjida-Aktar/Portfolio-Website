"use client";

import { useEffect, useState } from "react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-section">

      {/* Glow */}
      <div className="footer-glow"></div>

      <div className="footer-container">

        {/* ================= TOP ================= */}

        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              Sanjida<span>.</span>
            </a>

            <p>
              CSE Student &nbsp;•&nbsp; Aspiring Software Engineer
            </p>

            <p className="footer-description">
              Building modern web experiences, solving problems
              and continuously learning new technologies.
            </p>
          </div>


          {/* Navigation */}
          <div className="footer-navigation">

            <h4>Quick Links</h4>

            <div className="footer-links">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>

          </div>


          {/* Social */}
          <div className="footer-social">

            <h4>Connect With Me</h4>

            <div className="footer-social-links">

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

              <a
                href="mailto:mst.sanjida.aktar.cnj.bd@gmail.com"
              >
                Email ↗
              </a>

            </div>

          </div>

        </div>

        <div className="footer-divider">
          <span></span>
        </div>

        <div className="footer-bottom">

          <p>
            © 2026 <span>Sanjida Aktar</span>. All rights reserved.
          </p>

          <p className="footer-made">
            Designed & Built with <span>♥</span> using Next.js
          </p>

        </div>

      </div>

      <button
        type="button"
        onClick={goToTop}
        aria-label="Back to top"
        className={`back-to-top ${
          showTop ? "back-to-top-visible" : ""
        }`}
      >
        ↑
      </button>

    </footer>
  );
}