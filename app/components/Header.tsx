"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Skills", href: "#stack", id: "stack" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-[#494848]/85 backdrop-blur-md shadow-xl border-b border-white/10"
          : "bg-[#494848] border-b border-gray-600/50"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-[#D4D4D4] tracking-wide select-none">
          <span className="text-[#60a5fa]">P</span>ortfolio
        </div>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-200
                ${activeSection === link.id
                  ? "text-[#60a5fa]"
                  : "text-[#D4D4D4] hover:text-white"
                }`}
            >
              {link.label}
              <span
                className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-[#60a5fa] transition-all duration-300 ${
                  activeSection === link.id ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                }`}
              />
            </a>
          ))}
        </nav>

        <button
          className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-[#D4D4D4] origin-center transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#D4D4D4] transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-[#D4D4D4] origin-center transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="max-w-6xl mx-auto flex flex-col mt-3 gap-1 pb-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                activeSection === link.id
                  ? "text-[#60a5fa] bg-white/5"
                  : "text-[#D4D4D4] hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
