"use client";

import React, { useState } from "react";
import {
  FaEnvelope, FaGithub, FaArrowRight,
  FaPaperPlane, FaCheckCircle, FaExclamationCircle,
} from "react-icons/fa";
import { useInView } from "../hooks/useInView";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

const LINKS = [
  {
    Icon: FaEnvelope,
    label: "Email",
    value: "ferninjericho07@gmail.com",
    href: "mailto:ferninjericho07@gmail.com",
    color: "#3b82f6",
  },
  {
    Icon: FaGithub,
    label: "GitHub",
    value: "github.com/horror02",
    href: "https://github.com/horror02",
    color: "#e2e8f0",
    external: true,
  },
];

type Status = "idle" | "sending" | "sent" | "error";

const inputBase =
  "w-full px-4 py-3 rounded-xl text-sm text-[#f1f5f9] placeholder:text-[#475569] focus:outline-none transition-all duration-200 font-mono";

const inputStyle = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
};

export default function Contact() {
  const { ref, inView } = useInView(0.1);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
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

  const fieldStyle = (name: string) => ({
    ...inputStyle,
    borderColor: focused === name ? "rgba(59,130,246,0.5)" : "rgba(255,255,255,0.08)",
    boxShadow: focused === name ? "0 0 0 3px rgba(59,130,246,0.08)" : "none",
  });

  return (
    <section ref={ref} className="px-6 sm:px-10 lg:px-20 py-24 pb-32">

      <div
        className="flex items-center gap-4 mb-6 transition-all duration-700"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <span className="section-number">03.</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-[#f1f5f9] whitespace-nowrap">
          Contact
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-[#3b82f6]/30 to-transparent" />
      </div>

      <p
        className="text-sm text-[#64748b] mb-10 font-mono transition-all duration-700"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(12px)",
          transitionDelay: inView ? "100ms" : "0ms",
        }}
      >
        Open to new opportunities — feel free to reach out.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        {LINKS.map(({ Icon, label, value, href, color, external }, i) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group flex items-center gap-4 flex-1 px-5 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(255,255,255,0.07)",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(16px)",
              transitionDelay: inView ? `${200 + i * 100}ms` : "0ms",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = `${color}30`;
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 0 24px ${color}0a`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.07)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
          >
            <span
              className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0 transition-transform duration-200 group-hover:scale-105"
              style={{ background: `${color}12`, border: `1px solid ${color}20` }}
            >
              <Icon size={16} color={color} />
            </span>
            <div className="min-w-0">
              <p className="text-[10px] text-[#475569] font-mono uppercase tracking-widest">{label}</p>
              <p className="text-xs font-semibold truncate text-[#94a3b8] group-hover:text-[#f1f5f9] transition-colors duration-200 mt-0.5">
                {value}
              </p>
            </div>
            <FaArrowRight
              size={11}
              className="ml-auto shrink-0 text-[#475569] group-hover:text-[#94a3b8] group-hover:translate-x-1 transition-all duration-200"
            />
          </a>
        ))}
      </div>

      <div
        className="rounded-2xl p-6 sm:p-8 transition-all duration-700"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.07)",
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(24px)",
          transitionDelay: inView ? "380ms" : "0ms",
        }}
      >
        {status === "sent" ? (
          <div className="flex flex-col items-center justify-center py-14 gap-4 text-center">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" }}
            >
              <FaCheckCircle size={28} color="#3b82f6" />
            </div>
            <div>
              <p className="font-semibold text-[#f1f5f9] mb-1">Message sent!</p>
              <p className="text-sm text-[#64748b]">Thanks for reaching out — I&apos;ll get back to you soon.</p>
            </div>
            <button
              onClick={() => setStatus("idle")}
              className="mt-1 text-xs text-[#3b82f6] font-mono underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="block text-[11px] font-mono text-[#475569] uppercase tracking-widest">
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
                  className={inputBase}
                  style={fieldStyle("name")}
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[11px] font-mono text-[#475569] uppercase tracking-widest">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={set("email")}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  placeholder="your@email.com"
                  className={inputBase}
                  style={fieldStyle("email")}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-[11px] font-mono text-[#475569] uppercase tracking-widest">
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
                className={`${inputBase} resize-none`}
                style={fieldStyle("message")}
              />
            </div>

            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-red-400 font-mono">
                <FaExclamationCircle size={14} />
                Something went wrong — please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="group flex items-center gap-2.5 bg-[#3b82f6] hover:bg-[#2563eb] disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl text-sm transition-all duration-250 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#3b82f6]/25 active:scale-[0.98] cursor-pointer"
            >
              <FaPaperPlane
                size={13}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
