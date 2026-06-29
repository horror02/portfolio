"use client";

import { useEffect, useState } from "react";
import { FaDownload, FaGithub } from "react-icons/fa";

const TICKER_ITEMS = [
  "Full-Stack Dev",
  "MERN Stack",
  "Next.js",
  "NestJS",
  "TypeScript",
  "React",
  "Node.js",
  "PostgreSQL",
];

export default function About() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 80);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay: number): React.CSSProperties => ({
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0)" : "translateY(18px)",
    transition: `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  });

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 sm:px-10 lg:px-14 py-20 lg:py-0"
      style={{ background: "#F5F0E8" }}
    >
      {/* ── 2-column grid ── */}
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

        {/* Left: Text */}
        <div>
          {/* Label */}
          <p
            className="text-[11px] font-mono uppercase tracking-[0.22em] mb-6"
            style={{ ...fade(40), color: "#C4472A" }}
          >
            ✦ Full-Stack Developer · 2025
          </p>

          {/* Greeting */}
          <p
            className="text-xl font-medium mb-2"
            style={{ ...fade(100), color: "#7E7870" }}
          >
            Hi! I am
          </p>

          {/* Name */}
          <div style={fade(160)}>
            <h1
              className="font-serif leading-[1.0] tracking-tight"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
            >
              <span style={{ color: "#1A1714", fontWeight: 700 }}>Jericho</span>
              <br />
              <span style={{ color: "#C4472A", fontStyle: "italic", fontWeight: 700 }}>Fernin.</span>
            </h1>
          </div>

          {/* Divider */}
          <div
            className="mt-5 mb-6 w-10 h-px"
            style={{ ...fade(240), background: "#C4472A" }}
          />

          {/* Bio */}
          <p
            className="text-base sm:text-lg leading-relaxed max-w-lg"
            style={{ ...fade(300), color: "#3D3834" }}
          >
            Full-Stack Developer with 1+ year of experience building web
            applications. Specialized in{" "}
            <span style={{ color: "#1A1714", fontWeight: 600 }}>MERN stack</span>{" "}
            and microservices-based architectures with clean, maintainable code.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3" style={fade(380)}>
            <button
              onClick={() => window.open("https://github.com/horror02")}
              className="flex items-center gap-2.5 font-semibold py-3 px-6 rounded-lg text-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer"
              style={{ background: "#1A1714", color: "#F5F0E8" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "#2e2a27")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "#1A1714")
              }
            >
              <FaGithub size={15} />
              GitHub →
            </button>

            <a
              href="/Fernin_Resume.pdf"
              download="Fernin_Resume.pdf"
              className="flex items-center gap-2.5 font-semibold py-3 px-6 rounded-lg text-sm transition-all duration-200 hover:-translate-y-0.5"
              style={{ border: "1px solid rgba(0,0,0,0.18)", color: "#1A1714" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "#C4472A";
                el.style.color = "#C4472A";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "rgba(0,0,0,0.18)";
                el.style.color = "#1A1714";
              }}
            >
              <FaDownload size={13} />
              Resume ↓
            </a>
          </div>
        </div>

        {/* Right: Photo */}
        <div
          className="flex justify-center items-center"
          style={{
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1) 300ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) 300ms",
          }}
        >
          <div className="relative w-full" style={{ maxWidth: "480px" }}>
            {/* Corner brackets */}
            <div
              className="absolute -top-3 -left-3 w-10 h-10 z-10 pointer-events-none"
              style={{ borderTop: "2px solid #C4472A", borderLeft: "2px solid #C4472A" }}
            />
            <div
              className="absolute -bottom-3 -right-3 w-10 h-10 z-10 pointer-events-none"
              style={{ borderBottom: "2px solid #C4472A", borderRight: "2px solid #C4472A", opacity: 0.4 }}
            />

            {/* Photo */}
            <img
              src="/profile.jpg"
              alt="Jericho Fernin"
              className="w-full object-cover rounded-lg"
              style={{
                aspectRatio: "4/5",
                border: "1px solid rgba(0,0,0,0.08)",
              }}
            />

            {/* Role badge */}
            <div
              className="absolute -bottom-4 left-5 px-4 py-2 rounded-md text-[11px] font-mono font-semibold tracking-wider whitespace-nowrap"
              style={{
                background: "#1A1714",
                color: "#F5F0E8",
              }}
            >
              Full-Stack Developer
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ticker */}
      <div
        className="absolute bottom-0 left-0 right-0 overflow-hidden"
        style={{ borderTop: "1px solid rgba(0,0,0,0.06)", ...fade(550) }}
      >
        <div className="animate-ticker inline-flex whitespace-nowrap py-3">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-8 mx-6 font-mono text-[10px] uppercase tracking-[0.2em]"
              style={{ color: "rgba(0,0,0,0.3)" }}
            >
              {item}
              <span style={{ color: "#C4472A", opacity: 0.6 }}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
