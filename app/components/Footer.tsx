"use client";

import { FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="px-6 sm:px-10 lg:px-14 py-8"
      style={{ borderTop: "1px solid rgba(0,0,0,0.08)", background: "#F5F0E8" }}
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">

        {/* Brand */}
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-md flex items-center justify-center font-extrabold text-xs"
            style={{ background: "#1A1714", color: "#F5F0E8" }}
          >
            JF
          </div>
          <div>
            <p className="text-sm font-semibold" style={{ color: "#1A1714" }}>Jericho Fernin</p>
            <p className="text-[11px] font-mono" style={{ color: "#C4472A" }}>Full-Stack Developer</p>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-[11px] font-mono" style={{ color: "#7E7870" }}>
          © {new Date().getFullYear()} Jericho Ticar Fernin. All rights reserved.
        </p>

        {/* Socials */}
        <div className="flex gap-2">
          <a
            href="https://github.com/horror02"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-200 hover:-translate-y-0.5"
            style={{ border: "1px solid rgba(0,0,0,0.1)", color: "#3D3834" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#1A1714")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#3D3834")}
          >
            <FaGithub size={14} />
          </a>
          <a
            href="mailto:ferninjericho07@gmail.com"
            aria-label="Email"
            className="w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-200 hover:-translate-y-0.5"
            style={{ border: "1px solid rgba(0,0,0,0.1)", color: "#3D3834" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#1A1714")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#3D3834")}
          >
            <FaEnvelope size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
