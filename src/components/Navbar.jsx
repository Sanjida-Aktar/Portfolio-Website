"use client";

import ThemeToggle from "./ThemeToggle";
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
    <nav className="navbar fixed left-0 top-0 z-50 w-full border-b backdrop-blur-xl">
      
      {/* ================= NAVBAR CONTAINER ================= */}

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 sm:py-5">

        {/* ================= LOGO ================= */}

        <a
          href="#home"
          className="text-2xl font-bold gradient-text sm:text-3xl"
        >
          Sanjida<span className="text-cyan-400">.</span>
        </a>


        {/* ================= DESKTOP LINKS ================= */}

        <div className="hidden items-center gap-7 md:flex lg:gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                navbar-link
                text-sm
                font-medium
                transition-all
                duration-300
                lg:text-base
              "
            >
              {link.name}
            </a>
          ))}
        </div>


        {/* ================= RIGHT SIDE ================= */}

        <div className="flex items-center gap-3">

          {/* Theme Toggle */}

          <ThemeToggle />


          {/* Let's Talk */}

          <a
            href="#contact"
            className="
              btn-primary
              !hidden
              lg:!inline-flex
            "
          >
            Let's Talk
          </a>


          {/* Mobile Menu Button */}

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="
              navbar-menu-button
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              transition-all
              duration-300
              md:hidden
            "
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

        </div>
      </div>


      {/* ================= MOBILE MENU ================= */}

      {menuOpen && (
        <div className="navbar-mobile-menu border-t px-5 py-5 backdrop-blur-xl md:hidden">

          <div className="flex flex-col gap-1">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="
                  navbar-mobile-link
                  rounded-lg
                  px-3
                  py-3
                  text-base
                  font-medium
                  transition-all
                  duration-300
                "
              >
                {link.name}
              </a>
            ))}


            {/* Mobile Let's Talk */}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="
                btn-primary
                mt-3
                w-full
                justify-center
                !py-3
                lg:hidden
              "
            >
              Let's Talk
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}