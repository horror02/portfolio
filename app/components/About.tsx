"use client";

import { useEffect, useState } from "react";
import { FaDownload, FaGithub } from "react-icons/fa";

const ROLES = [
  "Full-Stack Developer",
  "React & Next.js Engineer",
  "Node.js & NestJS Builder",
];

const STATS = [
  { value: "1+", label: "Year Experience" },
  { value: "2", label: "Companies" },
  { value: "12+", label: "Technologies" },
];

export default function About() {
  const [show, setShow] = useState(false);
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const current = ROLES[roleIdx];

    if (!isDeleting && displayed === current) {
      const t = setTimeout(() => setIsDeleting(true), 2400);
      return () => clearTimeout(t);
    }

    if (isDeleting && displayed === "") {
      const t = setTimeout(() => {
        setIsDeleting(false);
        setRoleIdx((i) => (i + 1) % ROLES.length);
      }, 350);
      return () => clearTimeout(t);
    }

    const t = setTimeout(
      () =>
        setDisplayed(
          isDeleting
            ? current.slice(0, displayed.length - 1)
            : current.slice(0, displayed.length + 1),
        ),
      isDeleting ? 42 : 78,
    );

    return () => clearTimeout(t);
  }, [displayed, isDeleting, roleIdx]);

  const slide = (delay: number): React.CSSProperties => ({
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  });

  return (
    <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 py-24 lg:py-32 gap-16 overflow-hidden min-h-[calc(100vh-64px)]">

      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: [
            "linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)",
          ].join(","),
          backgroundSize: "48px 48px",
        }}
      />

      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-[-5%] w-[640px] h-[640px] rounded-full bg-[#3b82f6]/7 blur-[100px]" />
        <div className="absolute bottom-[-10%] -left-20 w-[480px] h-[480px] rounded-full bg-[#8b5cf6]/5 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#06b6d4]/3 blur-[80px]" />
      </div>

      <div className="w-full lg:w-1/2 relative z-10 space-y-7">
        <div style={slide(60)}>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/8 text-[11px] font-semibold text-emerald-400 font-mono tracking-wide">
            <span
              className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"
              style={{ animation: "statusPulse 2s ease-in-out infinite" }}
            />
            Open to new opportunities
          </span>
        </div>

        <div style={slide(160)}>
          <p className="text-[#64748b] font-mono text-xs tracking-[0.2em] uppercase mb-4">
            Hello, I&apos;m
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.04] tracking-tight">
            <span className="gradient-text">Jericho</span>
            <br />
            <span className="text-[#f1f5f9]">Fernin</span>
          </h1>
        </div>

        <div style={slide(280)}>
          <div className="flex items-center gap-2 text-lg sm:text-xl font-mono">
            <span className="text-[#3b82f6] select-none">&gt;</span>
            <span className="text-[#94a3b8]">{displayed}</span>
            <span
              className="w-[2px] h-5 bg-[#3b82f6] rounded-full inline-block"
              style={{ animation: "blink 1.1s step-end infinite" }}
            />
          </div>
        </div>

        <p
          className="text-sm sm:text-[0.9rem] leading-[1.8] text-[#64748b] max-w-[440px]"
          style={slide(380)}
        >
          Full-Stack Developer with 1+ year of experience building web applications using the
          MERN stack. Experienced in collaborating with development teams to design and develop
          applications from scratch and contributing to microservices-based architectures. Skilled
          in building scalable APIs, responsive user interfaces, and maintainable backend services.
        </p>

        <div className="flex flex-col sm:flex-row items-start gap-3" style={slide(480)}>
          <button
            onClick={() => window.open("https://github.com/horror02")}
            className="group flex items-center justify-center gap-2.5 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold py-3 px-6 rounded-xl text-sm transition-all duration-250 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#3b82f6]/30 active:scale-[0.98] w-full sm:w-auto cursor-pointer"
          >
            <FaGithub size={16} className="group-hover:rotate-12 transition-transform duration-300" />
            View GitHub
          </button>

          <a
            href="/Fernin_Resume.pdf"
            download="Fernin_Resume.pdf"
            className="group flex items-center justify-center gap-2.5 border border-white/10 hover:border-[#3b82f6]/40 text-[#94a3b8] hover:text-[#f1f5f9] font-semibold py-3 px-6 rounded-xl text-sm transition-all duration-250 hover:-translate-y-0.5 hover:bg-white/4 active:scale-[0.98] w-full sm:w-auto"
          >
            <FaDownload size={13} className="group-hover:translate-y-0.5 transition-transform duration-300" />
            Resume
          </a>
        </div>

        <div
          className="flex items-center gap-8 pt-6 border-t border-white/6"
          style={slide(560)}
        >
          {STATS.map(({ value, label }, i) => (
            <div key={label} className={i > 0 ? "pl-8 border-l border-white/6" : ""}>
              <p className="text-2xl font-bold text-[#f1f5f9] tabular-nums">{value}</p>
              <p className="text-[11px] text-[#475569] font-mono mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="w-full lg:w-1/2 flex justify-center items-center relative z-10"
        style={{
          opacity: show ? 1 : 0,
          transform: show ? "translateX(0)" : "translateX(28px)",
          transition: "opacity 1s cubic-bezier(0.16,1,0.3,1) 300ms, transform 1s cubic-bezier(0.16,1,0.3,1) 300ms",
        }}
      >
        <div className="relative animate-float">
          <div
            className="absolute -inset-12 rounded-full"
            style={{ animation: "orbit 22s linear infinite" }}
          >
            <div className="absolute inset-0 rounded-full border border-[#3b82f6]/15" />
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#3b82f6]"
              style={{ boxShadow: "0 0 10px 2px rgba(59,130,246,0.7)", marginTop: "-4px" }}
            />
          </div>

          <div
            className="absolute -inset-6 rounded-full"
            style={{ animation: "orbitReverse 16s linear infinite" }}
          >
            <div className="absolute inset-0 rounded-full border border-[#8b5cf6]/10" />
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#8b5cf6]/70"
              style={{ boxShadow: "0 0 8px 1px rgba(139,92,246,0.5)", marginBottom: "-3px" }}
            />
          </div>

          <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-[#3b82f6]/25 via-[#8b5cf6]/15 to-[#06b6d4]/15 blur-xl" />

          <img
            src="/profile.jpg"
            alt="Jericho Fernin"
            className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-cover rounded-full border border-white/8 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
