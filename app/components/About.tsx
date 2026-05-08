"use client";

import { useEffect, useState } from "react";
import { FaDownload, FaGithub } from "react-icons/fa";

export default function About() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 80);
    return () => clearTimeout(t);
  }, []);

  const fadeClass = `transition-all duration-700 ease-out ${
    show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`;

  return (
    <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 py-20 lg:py-28 gap-12 overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 right-1/4 w-96 h-96 rounded-full bg-[#60a5fa]/8 blur-3xl" />
      </div>

      <div className="w-full lg:w-1/2 relative z-10">
        <p
          className={`text-[#60a5fa] font-mono text-sm tracking-widest mb-3 ${fadeClass}`}
          style={{ transitionDelay: "100ms" }}
        >
          Hello, I'm
        </p>

        <h1
          className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-3 leading-tight ${fadeClass}`}
          style={{ transitionDelay: "200ms" }}
        >
          Jericho Fernin
        </h1>

        <h2
          className={`text-xl sm:text-2xl font-semibold mb-6 gradient-text ${fadeClass}`}
          style={{ transitionDelay: "300ms" }}
        >
          Software Engineer
        </h2>

        <p
          className={`text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400 max-w-md ${fadeClass}`}
          style={{ transitionDelay: "400ms" }}
        >
          Full-Stack Developer with professional experience since October&nbsp;2024,
          working as a contractor and part-time contributor. Skilled in building
          scalable APIs with Node.js, Express, and NestJS; responsive UIs with
          React and Next.js; and managing SQL and NoSQL databases including
          PostgreSQL, MySQL, and MongoDB.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center lg:items-start mt-8 gap-3 ${fadeClass}`}
          style={{ transitionDelay: "500ms" }}
        >
          <button
            onClick={() => window.open("https://github.com/horror02")}
            className="group flex items-center justify-center gap-2 bg-[#494848] hover:bg-[#60a5fa] text-white font-semibold py-3 px-6 rounded-xl w-full sm:w-auto transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#60a5fa]/25"
          >
            <FaGithub size={18} className="group-hover:rotate-12 transition-transform duration-300" />
            GitHub
          </button>

          <a
            href="/Fernin_Resume.pdf"
            download="Fernin_Resume.pdf"
            className="group flex items-center justify-center gap-2 border border-[#494848] hover:border-[#60a5fa] text-gray-700 dark:text-gray-300 hover:text-[#60a5fa] font-semibold py-3 px-6 rounded-xl w-full sm:w-auto transition-all duration-300 hover:-translate-y-0.5"
          >
            <FaDownload size={15} className="group-hover:translate-y-0.5 transition-transform duration-300" />
            Resume
          </a>
        </div>
      </div>

      <div
        className={`w-full lg:w-1/2 flex justify-center relative z-10 transition-all duration-1000 ease-out ${
          show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
        }`}
        style={{ transitionDelay: "300ms" }}
      >
        <div className="relative animate-float">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#60a5fa] via-[#494848] to-[#60a5fa]/30 blur-md opacity-70" />
          <div className="absolute -inset-3 rounded-full border border-[#60a5fa]/20" />
          <img
            src="/profile.jpg"
            alt="Profile Picture"
            className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-cover rounded-full border-4 border-[#494848] shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
