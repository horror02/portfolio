import { FaGithub, FaEnvelope } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      className="px-6 sm:px-10 lg:px-20 py-10"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">

          <div>
            <a href="#about" className="flex items-center gap-2 group w-fit">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] flex items-center justify-center text-white text-xs font-extrabold shadow-md shadow-[#3b82f6]/15 group-hover:scale-105 transition-transform duration-200">
                J
              </span>
              <span className="text-sm font-semibold text-[#94a3b8]">
                Jericho Fernin
              </span>
            </a>
            <p className="text-[11px] text-[#475569] font-mono mt-2 ml-9">
              Full-Stack Developer
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs text-[#475569] hover:text-[#94a3b8] transition-colors duration-200 font-mono"
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
              className="w-9 h-9 flex items-center justify-center rounded-lg text-[#475569] hover:text-[#f1f5f9] transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <FaGithub size={15} />
            </a>
            <a
              href="mailto:ferninjericho07@gmail.com"
              aria-label="Email"
              className="w-9 h-9 flex items-center justify-center rounded-lg text-[#475569] hover:text-[#f1f5f9] transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <FaEnvelope size={14} />
            </a>
          </div>
        </div>

        <div
          className="mt-8 pt-6 text-center text-[11px] text-[#334155] font-mono"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          © {new Date().getFullYear()} Jericho Ticar Fernin. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
