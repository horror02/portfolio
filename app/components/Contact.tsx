"use client";

import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaArrowRight, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { useInView } from "../hooks/useInView";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

const links = [
  {
    Icon: FaEnvelope,
    label: "Email",
    value: "ferninjericho07@gmail.com",
    href: "mailto:ferninjericho07@gmail.com",
    color: "#60a5fa",
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

const inputClass =
  "w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-200 placeholder:text-gray-400 focus:outline-none focus:border-[#60a5fa] transition-colors duration-200";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const { ref, inView } = useInView(0.1);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

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

  return (
    <section ref={ref} className="px-6 sm:px-10 lg:px-20 py-20 pb-28">
      <div
        className={`flex items-center gap-4 mb-4 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-3xl font-bold whitespace-nowrap">Contact</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-[#494848] to-transparent" />
      </div>

      <p
        className={`text-sm text-gray-500 dark:text-gray-400 mb-8 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: "100ms" }}
      >
        Open to new opportunities — feel free to reach out.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        {links.map(({ Icon, label, value, href, color, external }, i) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group flex items-center gap-3 flex-1 px-5 py-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-white/5 hover:border-[#60a5fa]/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#60a5fa]/10"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(16px)",
              transitionDelay: inView ? `${150 + i * 100}ms` : "0ms",
            }}
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#494848] shrink-0 group-hover:scale-110 transition-transform duration-200">
              <Icon size={15} color={color} />
            </span>
            <div className="min-w-0">
              <p className="text-xs text-gray-400 font-mono">{label}</p>
              <p className="text-xs font-semibold truncate text-gray-700 dark:text-gray-200 group-hover:text-[#60a5fa] transition-colors duration-200">
                {value}
              </p>
            </div>
            <FaArrowRight
              size={11}
              className="ml-auto shrink-0 text-gray-400 group-hover:text-[#60a5fa] group-hover:translate-x-1 transition-all duration-200"
            />
          </a>
        ))}
      </div>

      <div
        className={`rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-white/5 p-6 sm:p-8 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: "300ms" }}
      >
        {status === "sent" ? (
          <div className="flex flex-col items-center justify-center py-12 gap-3 text-center">
            <div className="w-14 h-14 rounded-full bg-[#60a5fa]/15 flex items-center justify-center">
              <FaCheckCircle size={26} color="#60a5fa" />
            </div>
            <p className="font-semibold text-gray-700 dark:text-gray-200">Message sent!</p>
            <p className="text-sm text-gray-400">Thanks for reaching out — I'll get back to you soon.</p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-2 text-xs text-[#60a5fa] underline underline-offset-2 hover:opacity-80"
            >
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1.5">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={set("email")}
                  placeholder="your@email.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-gray-400 mb-1.5">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={set("message")}
                placeholder="What's on your mind?"
                className={`${inputClass} resize-none`}
              />
            </div>

            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-red-500">
                <FaExclamationCircle size={14} />
                Something went wrong — please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="group flex items-center gap-2 bg-[#494848] hover:bg-[#60a5fa] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#60a5fa]/25"
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
