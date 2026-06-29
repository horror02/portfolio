"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home",    href: "#about",      id: "about"      },
  { label: "Work",    href: "#experience", id: "experience" },
  { label: "Skills",  href: "#stack",      id: "stack"      },
  { label: "Contact", href: "#contact",    id: "contact"    },
] as const;

export default function Header() {
  const [activeSection, setActive] = useState("about");
  const [scrolled, setScrolled]    = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-45% 0px -45% 0px" },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(245,240,232,0.92)" : "#F5F0E8",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.07)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
      }}
    >
      <div className="relative flex items-center justify-between px-6 sm:px-10 lg:px-14 py-5">

        {/* Logo */}
        <a href="#about" className="text-sm font-bold tracking-widest" style={{ color: "#1A1714" }}>
          JF
        </a>

        {/* Desktop nav — centered */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-sm transition-colors duration-200"
              style={{
                color: activeSection === link.id ? "#1A1714" : "#7E7870",
                fontWeight: activeSection === link.id ? 500 : 400,
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Available badge */}
        <span
          className="hidden sm:flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs"
          style={{ borderColor: "rgba(0,0,0,0.12)", color: "#3D3834" }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: "#22C55E", animation: "statusPulse 2s ease-in-out infinite" }}
          />
          Available
        </span>
      </div>
    </header>
  );
}
