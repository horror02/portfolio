"use client";

import { useState } from "react";
import {
  SiMongodb, SiMysql, SiPostgresql, SiExpress, SiNextdotjs,
  SiNestjs, SiTailwindcss, SiCss, SiSass, SiTypescript, SiJavascript,
} from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { useInView } from "../hooks/useInView";

type Category = "All" | "Frontend" | "Backend" | "Database";

type StackItem = {
  Icon: React.ComponentType<{ size?: number; color?: string; className?: string }>;
  name: string;
  color: string;
  category: Exclude<Category, "All">;
};

const stack: StackItem[] = [
  { Icon: SiNextdotjs, name: "Next.js", color: "#e2e8f0", category: "Frontend" },
  { Icon: FaReact, name: "React", color: "#61DAFB", category: "Frontend" },
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6", category: "Frontend" },
  { Icon: SiTailwindcss, name: "Tailwind", color: "#38BDF8", category: "Frontend" },
  { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E", category: "Frontend" },
  { Icon: SiCss, name: "CSS", color: "#1572B6", category: "Frontend" },
  { Icon: SiSass, name: "SCSS", color: "#CC6699", category: "Frontend" },
  { Icon: FaNodeJs, name: "Node.js", color: "#339933", category: "Backend"  },
  { Icon: SiExpress, name: "Express", color: "#aaaaaa", category: "Backend"  },
  { Icon: SiNestjs, name: "NestJS", color: "#E0234E", category: "Backend"  },
  { Icon: SiMongodb, name: "MongoDB", color: "#47A248", category: "Database" },
  { Icon: SiMysql, name: "MySQL", color: "#4479A1", category: "Database" },
  { Icon: SiPostgresql, name: "PostgreSQL", color: "#336791", category: "Database" },
];

const TABS: Category[] = ["All", "Frontend", "Backend", "Database"];

export default function Stack() {
  const { ref, inView } = useInView(0.1);
  const [activeTab, setActiveTab] = useState<Category>("All");
  const [hovered, setHovered] = useState<string | null>(null);

  const filtered = activeTab === "All" ? stack : stack.filter((s) => s.category === activeTab);

  return (
    <section ref={ref} className="px-6 sm:px-10 lg:px-20 py-24">
      <div
        className="flex items-center gap-4 mb-10 transition-all duration-700"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <span className="section-number">02.</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#f1f5f9] whitespace-nowrap">
          Skills
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-[#3b82f6]/30 to-transparent" />
      </div>

      <div
        className="flex flex-wrap gap-2 mb-10 transition-all duration-700"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(16px)",
          transitionDelay: inView ? "100ms" : "0ms",
        }}
      >
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all duration-200 cursor-pointer ${
              activeTab === tab
                ? "bg-[#3b82f6] text-white shadow-lg shadow-[#3b82f6]/20"
                : "text-[#64748b] border border-white/7 hover:border-white/15 hover:text-[#94a3b8] bg-white/3"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
        {filtered.map(({ Icon, name, color }, idx) => {
          const isHovered = hovered === name;
          return (
            <div
              key={name}
              onMouseEnter={() => setHovered(name)}
              onMouseLeave={() => setHovered(null)}
              className="flex flex-col items-center gap-3 p-4 rounded-2xl cursor-default transition-all duration-300"
              style={{
                background: isHovered ? `${color}08` : "rgba(255,255,255,0.025)",
                border: `1px solid ${isHovered ? color + "30" : "rgba(255,255,255,0.07)"}`,
                opacity: inView ? 1 : 0,
                transform: inView
                  ? isHovered
                    ? "translateY(-5px) scale(1.04)"
                    : "translateY(0) scale(1)"
                  : "translateY(24px) scale(0.9)",
                transitionDelay: inView ? `${idx * 45}ms` : "0ms",
                boxShadow: isHovered
                  ? `0 8px 28px ${color}18, 0 0 0 1px ${color}20`
                  : "none",
              }}
            >
              <Icon size={30} color={isHovered ? color : "#475569"} />
              <span
                className="text-[11px] font-medium text-center font-mono transition-colors duration-200"
                style={{ color: isHovered ? color : "#64748b" }}
              >
                {name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
