"use client";

import { useState } from "react";
import { NexNavBarButton } from "@/stories/components/Button";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "#" },
    { label: "Experience", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact Me", href: "#" },
  ];

  return (
    <header className="border-b bg-[#494848] border-gray-200 px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold text-[#D4D4D4]">Jericho</div>

        <nav className="hidden lg:flex space-x-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative inline-flex items-center px-4 py-2 font-semibold text-[#D4D4D4]
                         after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0
                         after:bg-[#D4D4D4] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="lg:hidden flex flex-col space-y-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-[#D4D4D4]"></span>
          <span className="block w-6 h-0.5 bg-[#D4D4D4]"></span>
          <span className="block w-6 h-0.5 bg-[#D4D4D4]"></span>
        </button>
      </div>

      {menuOpen && (
        <nav className="flex flex-col mt-4 space-y-2 lg:hidden">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="px-4 py-2 font-semibold text-[#D4D4D4]">
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
