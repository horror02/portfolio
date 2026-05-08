"use client";

import { useState } from "react";
import {
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiExpress,
  SiNextdotjs,
  SiNestjs,
  SiTailwindcss,
  SiCss,
  SiSass,
} from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { useInView } from "../hooks/useInView";

type StackItem = {
  Icon: React.ComponentType<{ size?: number; color?: string }>;
  name: string;
  color: string;
};

const stack: StackItem[] = [
  { Icon: SiNextdotjs, name: "Next.js", color: "#000000" },
  { Icon: FaReact, name: "React", color: "#61DAFB" },
  { Icon: SiNestjs, name: "NestJS", color: "#E0234E" },
  { Icon: FaNodeJs, name: "Node.js", color: "#339933" },
  { Icon: SiExpress, name: "Express", color: "#aaaaaa" },
  { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { Icon: SiMysql, name: "MySQL", color: "#4479A1" },
  { Icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
  { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#38BDF8" },
  { Icon: SiCss, name: "CSS", color: "#1572B6" },
  { Icon: SiSass, name: "SCSS", color: "#CC6699" },
];

export default function Stack() {
  const { ref, inView } = useInView(0.1);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section ref={ref} className="px-6 sm:px-10 lg:px-20 py-20">
      <div
        className={`flex items-center gap-4 mb-12 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-3xl font-bold whitespace-nowrap">Skills</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-[#494848] to-transparent" />
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        {stack.map(({ Icon, name, color }, i) => {
          const isHovered = hovered === i;
          return (
            <div
              key={name}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="flex flex-col items-center gap-2.5 p-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-white/5 cursor-default transition-all duration-300"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0) scale(1)" : "translateY(20px) scale(0.9)",
                transitionDelay: inView ? `${i * 60}ms` : "0ms",
                boxShadow: isHovered ? `0 0 20px ${color}33, 0 4px 16px rgba(0,0,0,0.1)` : "",
                borderColor: isHovered ? `${color}55` : "",
              }}
            >
              <Icon
                size={36}
                color={isHovered ? color : undefined}
              />
              <span
                className="text-xs font-medium text-center text-gray-600 dark:text-gray-400 transition-colors duration-300"
                style={{ color: isHovered ? color : undefined }}
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
