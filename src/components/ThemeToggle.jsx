"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.documentElement.classList.add("light");
      setDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;

    if (html.classList.contains("light")) {
      html.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setDark(true);
    } else {
      html.classList.add("light");
      localStorage.setItem("theme", "light");
      setDark(false);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label="Toggle theme"
      className="theme-toggle"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}