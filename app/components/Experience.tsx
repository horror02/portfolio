"use client";

import { FiExternalLink } from "react-icons/fi";
import { useInView } from "../hooks/useInView";

type Experience = {
  role: string;
  company: string;
  type: string;
  period: string;
  description?: string;
  bullets?: string[];
  tech: string[];
  accentColor: string;
  badgeColor: string;
};

const experiences: Experience[] = [
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    type: "Part-time",
    period: "Jan 2026 – Present",
    bullets: [
      "Developing a POS system supporting multiple business types, including retail, general stores, and restaurants.",
      "Implemented scheduled background jobs using BullMQ to automatically delete branches on a specified date, improving data lifecycle management and system automation.",
    ],
    tech: ["Next.js", "NestJS", "React", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    accentColor: "#10b981",
    badgeColor: "text-emerald-400 border-emerald-500/25 bg-emerald-500/8",
  },
  {
    role: "Full-Stack Developer",
    company: "Nerve Technologies Inc.",
    type: "Contract",
    period: "Oct 2024 – Present",
    bullets: [
      "Collaborated with a development team to design and build multiple full-stack applications from scratch using the MERN stack.",
      "Implemented role-based access control (RBAC) to manage permissions across multiple user roles.",
      "Coordinated with design and QA teams to refine application features and ensure usability.",
      "Contributed to the implementation of a microservices architecture to improve system scalability and maintainability.",
      "Developed and maintained a messaging API microservice for email delivery (with and without templates), leveraging BullMQ and Redis for background job processing and implementing idempotency keys to prevent duplicate email sends.",
      "Participated in code reviews to maintain code quality and enforce best practices.",
      "Developed and managed two landing pages, including a booking platform with PayPal integration.",
      "Assisted in integrating third-party applications such as Neos.",
      "Developed a project management web application with features including issue tracking, sprint planning, and team collaboration.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "MySQL", "Tailwind CSS", "SCSS"],
    accentColor: "#3b82f6",
    badgeColor: "text-blue-400 border-blue-500/25 bg-blue-500/8",
  },
];

export default function Experience() {
  const { ref, inView } = useInView(0.1);

  return (
    <section ref={ref} className="px-6 sm:px-10 lg:px-20 py-24">
      <div
        className="flex items-center gap-4 mb-16 transition-all duration-700"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <span className="section-number">01.</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#f1f5f9] whitespace-nowrap">
          Experience
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-[#3b82f6]/30 to-transparent" />
      </div>

      <div className="relative pl-6 sm:pl-8">
        <div
          className="absolute left-0 top-0 w-px bg-gradient-to-b from-[#3b82f6] via-[#8b5cf6] to-transparent origin-top transition-transform duration-1000 ease-out"
          style={{
            height: "100%",
            transform: inView ? "scaleY(1)" : "scaleY(0)",
          }}
        />

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div
              key={exp.type}
              className="relative"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0)" : "translateX(-20px)",
                transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${300 + i * 180}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${300 + i * 180}ms`,
              }}
            >
              {/* Timeline dot */}
              <span className="absolute -left-6 sm:-left-8 top-6 -translate-x-1/2 flex items-center justify-center">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${inView ? "animate-pulse-dot" : ""}`}
                  style={{
                    backgroundColor: exp.accentColor,
                    boxShadow: `0 0 12px ${exp.accentColor}99`,
                  }}
                />
              </span>

              <div
                className="group rounded-2xl p-6 sm:p-7 transition-all duration-300 cursor-default"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: `1px solid rgba(255,255,255,0.07)`,
                  borderLeft: `3px solid ${exp.accentColor}40`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `${exp.accentColor}50`;
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 32px ${exp.accentColor}0a, 0 8px 32px rgba(0,0,0,0.25)`;
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.borderLeft = `3px solid ${exp.accentColor}40`;
                }}
              >
                {/* Badge + period */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border font-mono ${exp.badgeColor}`}>
                    {exp.type}
                  </span>
                  <span className="text-[11px] text-[#475569] font-mono">{exp.period}</span>
                </div>

                {/* Role */}
                <h3 className="text-base sm:text-lg font-bold text-[#f1f5f9] mb-1 group-hover:text-[#3b82f6] transition-colors duration-200">
                  {exp.role}
                </h3>

                {/* Company */}
                <div className="flex items-center gap-1.5 mb-4">
                  <FiExternalLink size={11} className="text-[#475569] shrink-0" />
                  <span className="text-sm text-[#64748b] font-medium">{exp.company}</span>
                </div>

                {/* Description: paragraph or bullet list */}
                {exp.description && (
                  <p className="text-sm text-[#64748b] leading-relaxed mb-5">
                    {exp.description}
                  </p>
                )}

                {exp.bullets && (
                  <ul className="mb-5 space-y-2">
                    {exp.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-[#64748b] leading-relaxed">
                        <span
                          className="mt-[7px] w-1 h-1 rounded-full shrink-0"
                          style={{ backgroundColor: exp.accentColor }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech chips */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2.5 py-0.5 rounded-md font-mono"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "#64748b",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
