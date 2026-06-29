"use client";

import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaArrowRight } from "react-icons/fa";
import { useInView } from "../hooks/useInView";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

const LINKS = [
  {
    Icon: FaEnvelope,
    label: "Email",
    value: "ferninjericho07@gmail.com",
    href: "mailto:ferninjericho07@gmail.com",
  },
  {
    Icon: FaGithub,
    label: "GitHub",
    value: "github.com/horror02",
    href: "https://github.com/horror02",
    external: true,
  },
];

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const { ref, inView } = useInView(0.1);
  const [form, setForm]       = useState({ name: "", email: "", message: "" });
  const [status, setStatus]   = useState<Status>("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const set =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const fieldStyle = (name: string): React.CSSProperties => ({
    background: "rgba(0,0,0,0.03)",
    border: `1px solid ${focused === name ? "rgba(196,71,42,0.5)" : "rgba(0,0,0,0.12)"}`,
    boxShadow: focused === name ? "0 0 0 3px rgba(196,71,42,0.06)" : "none",
    color: "#1A1714",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    borderRadius: "6px",
  });

  const inputClass = "w-full px-4 py-3 text-sm placeholder:text-[#B8B2AA] focus:outline-none";

  return (
    <section
      id="contact"
      ref={ref}
      className="px-6 sm:px-10 lg:px-14 py-24 pb-32"
      style={{ background: "#F5F0E8" }}
    >
      {/* Section header */}
      <div
        className="flex items-center gap-4 mb-14 transition-all duration-700"
        style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(16px)" }}
      >
        <span className="font-mono text-[0.65rem] tracking-[0.18em] uppercase" style={{ color: "#C4472A" }}>
          03.
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold" style={{ color: "#1A1714" }}>
          Contact
        </h2>
        <div className="h-px flex-1" style={{ background: "rgba(0,0,0,0.1)" }} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">

        {/* Left */}
        <div
          className="transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transitionDelay: inView ? "100ms" : "0ms",
          }}
        >
          <p
            className="font-serif leading-snug mb-10"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", color: "#1A1714", fontStyle: "italic" }}
          >
            Open to new opportunities — feel free to reach out.
          </p>

          <div className="space-y-3">
            {LINKS.map(({ Icon, label, value, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-center gap-4 p-4 rounded-lg transition-all duration-200 group"
                style={{ border: "1px solid rgba(0,0,0,0.1)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(196,71,42,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0,0,0,0.1)";
                }}
              >
                <span
                  className="flex items-center justify-center w-9 h-9 rounded-md shrink-0"
                  style={{ background: "rgba(0,0,0,0.05)" }}
                >
                  <Icon size={14} style={{ color: "#6B6560" }} />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono uppercase tracking-widest mb-0.5" style={{ color: "#B8B2AA" }}>
                    {label}
                  </p>
                  <p className="text-sm truncate" style={{ color: "#1A1714" }}>
                    {value}
                  </p>
                </div>
                <FaArrowRight
                  size={11}
                  className="ml-auto shrink-0 transition-all duration-200 group-hover:translate-x-1"
                  style={{ color: "#C4472A" }}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div
          className="transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transitionDelay: inView ? "220ms" : "0ms",
          }}
        >
          {status === "sent" ? (
            <div className="flex flex-col items-center justify-center py-16 gap-3 text-center">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-xl"
                style={{ background: "#1A1714", color: "#F5F0E8" }}
              >
                ✓
              </div>
              <p className="font-serif text-xl font-bold" style={{ color: "#1A1714" }}>Message sent!</p>
              <p className="text-sm" style={{ color: "#6B6560" }}>
                Thanks for reaching out — I'll get back to you soon.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 text-xs font-mono underline underline-offset-4 hover:opacity-60 transition-opacity"
                style={{ color: "#C4472A" }}
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-mono uppercase tracking-widest" style={{ color: "#B8B2AA" }}>
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={set("name")}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    placeholder="Your name"
                    className={inputClass}
                    style={fieldStyle("name")}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-mono uppercase tracking-widest" style={{ color: "#B8B2AA" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={set("email")}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    placeholder="you@email.com"
                    className={inputClass}
                    style={fieldStyle("email")}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[10px] font-mono uppercase tracking-widest" style={{ color: "#B8B2AA" }}>
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={set("message")}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  placeholder="What's on your mind?"
                  className={`${inputClass} resize-none`}
                  style={fieldStyle("message")}
                />
              </div>

              {status === "error" && (
                <p className="text-sm font-mono" style={{ color: "#C4472A" }}>
                  Something went wrong — please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center gap-2 font-semibold py-3 px-6 rounded-lg text-sm transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-40 cursor-pointer"
                style={{ background: "#1A1714", color: "#F5F0E8" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.background = "#2e2a27")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.background = "#1A1714")
                }
              >
                {status === "sending" ? "Sending…" : "Send Message →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
