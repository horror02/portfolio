"use client";

import { useInView } from "../hooks/useInView";

const experiences = [
  {
    role: "Full-Stack Developer",
    type: "Part-time",
    period: "January 2026 – Present",
    description:
      "Contributing as a part-time developer, building and maintaining features across the full stack using modern technologies. Collaborating with team members to deliver scalable, production-ready solutions.",
    tech: ["Next.js", "NestJS", "React", "TypeScript", "PostgreSQL", "Tailwind CSS"],
  },
  {
    role: "Full-Stack Developer",
    type: "Contract",
    period: "October 2024 – Present",
    description:
      "Engaged as a contractor to design and develop full-stack web applications end-to-end. Built RESTful APIs using Node.js, Express, and NestJS; created responsive UIs with React and Tailwind CSS; and managed data across MongoDB, MySQL, and PostgreSQL databases.",
    tech: ["React", "Node.js", "Express", "MongoDB", "MySQL", "Tailwind CSS", "SCSS"],
  },
];

export default function Experience() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      ref={ref}
      className="px-6 sm:px-10 lg:px-20 py-20"
    >
      <div className={`flex items-center gap-4 mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
        <h2 className="text-3xl font-bold whitespace-nowrap">Experience</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-[#494848] to-transparent" />
      </div>

      <div className="relative pl-8">
        <div
          className="absolute left-0 top-0 w-0.5 bg-gradient-to-b from-[#60a5fa] to-[#494848]/30 origin-top transition-transform duration-1000 ease-out"
          style={{
            height: "100%",
            transform: inView ? "scaleY(1)" : "scaleY(0)",
          }}
        />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div
              key={exp.type}
              className="relative transition-all duration-700 ease-out"
              style={{
                transitionDelay: inView ? `${200 + i * 200}ms` : "0ms",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0)" : "translateX(-24px)",
              }}
            >
              <span className="absolute -left-[2.1rem] top-1.5 flex items-center justify-center">
                <span className={`w-3 h-3 rounded-full bg-[#60a5fa] shadow-[0_0_8px_#60a5fa] ${inView ? "animate-pulse-dot" : ""}`} />
              </span>

              <div className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-white/5 backdrop-blur-sm p-6 hover:border-[#60a5fa]/40 hover:shadow-lg hover:shadow-[#60a5fa]/5 transition-all duration-300">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#494848] text-[#D4D4D4]">
                    {exp.type}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">{exp.period}</span>
                </div>

                <h3 className="text-lg font-bold mb-2 group-hover:text-[#60a5fa] transition-colors duration-200">
                  {exp.role}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700"
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
