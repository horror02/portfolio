"use client";

import { useInView } from "../hooks/useInView";

const SKILLS = {
  Frontend: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "SCSS"],
  Backend:  ["Node.js", "NestJS", "Express", "BullMQ", "REST APIs", "Microservices"],
  Database: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
} as const;

export default function Stack() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="stack"
      ref={ref}
      className="px-6 sm:px-10 lg:px-14 py-24"
      style={{ background: "#141210" }}
    >
      {/* Section header */}
      <div
        className="flex items-center gap-4 mb-14 transition-all duration-700"
        style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(16px)" }}
      >
        <span className="font-mono text-[0.65rem] tracking-[0.18em] uppercase" style={{ color: "#C4472A" }}>
          02.
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold" style={{ color: "#F5F0E8" }}>
          Skills
        </h2>
        <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
      </div>

      {/* Skills columns */}
      <div
        className="grid grid-cols-1 sm:grid-cols-3 transition-all duration-700"
        style={{
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "2px",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
          transitionDelay: inView ? "150ms" : "0ms",
        }}
      >
        {(Object.entries(SKILLS) as [keyof typeof SKILLS, readonly string[]][]).map(([category, items], colIdx) => (
          <div
            key={category}
            className="p-8"
            style={{
              borderRight: colIdx < 2 ? "1px solid rgba(255,255,255,0.08)" : "none",
            }}
          >
            <p
              className="font-mono text-[10px] uppercase tracking-[0.2em] mb-8"
              style={{ color: "#C4472A" }}
            >
              {category}
            </p>
            <ul>
              {items.map((skill, idx) => (
                <li key={skill}>
                  <div
                    className="py-4 text-lg font-serif transition-colors duration-200 cursor-default"
                    style={{ color: "#ECEAE2" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLDivElement).style.color = "#C4472A")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLDivElement).style.color = "#ECEAE2")
                    }
                  >
                    {skill}
                  </div>
                  {idx < items.length - 1 && (
                    <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
