import { FaGithub, FaEnvelope } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#494848] text-[#D4D4D4] px-6 sm:px-10 lg:px-20 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
          <div>
            <p className="text-xl font-bold mb-1">
              <span className="text-[#60a5fa]">J</span>ericho Fernin
            </p>
            <p className="text-xs text-gray-400">Full-Stack Developer</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-gray-400 hover:text-[#60a5fa] transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-2">
            <a
              href="https://github.com/horror02"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-[#60a5fa] transition-colors duration-200"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="mailto:ferninjericho07@gmail.com"
              aria-label="Email"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-[#60a5fa] transition-colors duration-200"
            >
              <FaEnvelope size={15} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Jericho Ticar Fernin. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
