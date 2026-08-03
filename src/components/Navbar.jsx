"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <a href="#home" className="text-3xl font-bold gradient-text">
          Sanjida<span className="text-cyan-400">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base text-gray-300 transition hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="btn-primary hidden md:inline-flex"
        >
          Let's Talk
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#050816] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg text-gray-300 hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}