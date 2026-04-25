"use client";

import { FaDownload, FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <section className="flex justify-between px-20">
      <div className="w-1/2 px-6 py-16">
        <h1 className="md:text-8xl font-bold mb-4">SOFTWARE ENGINEER</h1>
        <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
          Full-Stack Developer with 2 years of experience building applications using the MERN
          stack. Experienced in collaborating with development teams to design and develop
          applications from scratch and contributing to microservices-based architectures. Skilled
          in building scalable APIs, responsive user interfaces, and maintainable backend services.
        </p>

        <div className="flex mt-5 gap-2">
          <button
            className="flex items-center gap-2 cursor-pointer bg-[#494848] hover:bg-[#494848] text-white font-bold py-2 px-4 rounded"
            onClick={() => window.open("https://github.com/horror02")}
          >
            <FaGithub size={18} />
            Github
          </button>

          <a
            href="/Fernin_Resume.pdf"
            download="Fernin_Resume.pdf"
            className="flex items-center gap-2 cursor-pointer bg-[#909090] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            <FaDownload size={18} />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
