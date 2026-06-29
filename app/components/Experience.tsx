"use client";

import { useInView } from "../hooks/useInView";

type Experience = {
  role: string;
  company: string;
  type: string;
  year: string;
  period: string;
  bullets: string[];
  tech: string[];
};

const experiences: Experience[] = [
  {
    role: "Full-Stack Developer",
    company: "Aevora System",
    type: "Part-time",
    year: "2026",
    period: "Jan 2026 – Present",
    bullets: [
      "Developing a POS system supporting multiple business types including retail, general stores, and restaurants.",
      "Implemented scheduled background jobs using BullMQ to automatically delete branches on a specified date, improving data lifecycle management.",
      "Collaborating with cross-functional teams to implement inventory management, reporting, and AP/AR features with seamless system integration.",
    ],
    tech: ["Next.js", "NestJS", "React", "TypeScript", "PostgreSQL", "Tailwind CSS"],
  },
  {
    role: "Full-Stack Developer",
    company: "Nerve Technologies Inc.",
    type: "Contract",
    year: "2024",
    period: "Oct 2024 – Present",
    bullets: [
      "Collaborated with a development team to design and build multiple full-stack applications from scratch using the MERN stack.",
      "Implemented role-based access control (RBAC) to manage permissions across multiple user roles; contributed to a microservices architecture rewrite.",
      "Developed and maintained a messaging API microservice for email delivery, leveraging BullMQ and Redis for background job processing.",
      "Built a booking platform with PayPal integration; assisted in integrating AI features using Gemini and Claude for automation.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "MySQL", "Tailwind CSS", "SCSS"],
  },
];

export default function Experience() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="experience" ref={ref} className="px-6 sm:px-10 lg:px-14 py-24" style={{ background: "#F5F0E8" }}>

      {/* Section header */}
      <div
        className="flex items-center gap-4 mb-16 transition-all duration-700"
        style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(16px)" }}
      >
        <span className="font-mono text-[0.65rem] tracking-[0.18em] uppercase" style={{ color: "#C4472A" }}>
          01.
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold" style={{ color: "#1A1714" }}>
          Work
        </h2>
        <div className="h-px flex-1" style={{ background: "rgba(0,0,0,0.1)" }} />
      </div>

      <div className="space-y-0">
        {experiences.map((exp, i) => (
          <div
            key={exp.company}
            className="transition-all duration-700"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(24px)",
              transitionDelay: inView ? `${200 + i * 150}ms` : "0ms",
            }}
          >
            {i > 0 && (
              <div className="h-px my-12" style={{ background: "rgba(0,0,0,0.08)" }} />
            )}

            <div className="grid grid-cols-1 lg:grid-cols-[200px_1px_1fr] gap-0 lg:gap-10">

              {/* Left: year + badge */}
              <div className="mb-6 lg:mb-0">
                <p
                  className="font-serif font-bold leading-none mb-1"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: "rgba(0,0,0,0.08)" }}
                >
                  {exp.year}
                </p>
                <p className="text-sm mb-3" style={{ color: "#B8B2AA" }}>
                  – Present
                </p>
                <span
                  className="text-[10px] font-mono tracking-wider px-3 py-1 rounded-full"
                  style={{ border: "1px solid rgba(0,0,0,0.15)", color: "#6B6560" }}
                >
                  {exp.type}
                </span>
              </div>

              {/* Vertical divider */}
              <div className="hidden lg:block" style={{ background: "rgba(0,0,0,0.08)" }} />

              {/* Right: content */}
              <div className="lg:pl-2">
                <h3
                  className="font-serif font-bold mb-1"
                  style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", color: "#1A1714" }}
                >
                  {exp.role}
                </h3>
                <p className="text-sm font-mono mb-5" style={{ color: "#C4472A" }}>
                  {exp.company}
                </p>

                <ul className="space-y-3 mb-6">
                  {exp.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm leading-relaxed"
                      style={{ color: "#6B6560" }}
                    >
                      <span className="mt-[6px] shrink-0 font-mono text-xs" style={{ color: "#B8B2AA" }}>—</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="tech-chip">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
