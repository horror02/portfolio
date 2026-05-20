"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#about", id: "about"      },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Skills",href: "#stack", id: "stack" },
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
    const sections = NAV_LINKS
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050b18]/80 backdrop-blur-2xl shadow-[0_1px_0_rgba(255,255,255,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 py-4 flex justify-between items-center">

        <a href="#about" className="flex items-center gap-2 group select-none">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] flex items-center justify-center text-white text-sm font-extrabold shadow-lg shadow-[#3b82f6]/20 group-hover:scale-105 transition-transform duration-200">
            J
          </span>
          <span className="text-[#f1f5f9] font-semibold text-sm hidden sm:block">
            Jericho <span className="text-[#475569]">Fernin</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeSection === link.id
                  ? "text-[#f1f5f9]"
                  : "text-[#64748b] hover:text-[#94a3b8] hover:bg-white/4"
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute inset-x-4 bottom-0 h-px rounded-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6]" />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/8 text-[11px] font-medium text-emerald-400 font-mono">
            <span
              className="w-1.5 h-1.5 rounded-full bg-emerald-400"
              style={{ animation: "statusPulse 2s ease-in-out infinite" }}
            />
            Available
          </span>

          <button
            className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-[#94a3b8] origin-center transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
            <span className={`block w-5 h-px bg-[#94a3b8] transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-5 h-px bg-[#94a3b8] origin-center transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 sm:px-10 flex flex-col gap-1 pb-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                activeSection === link.id
                  ? "text-[#f1f5f9] bg-white/5"
                  : "text-[#64748b] hover:bg-white/4 hover:text-[#94a3b8]"
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
