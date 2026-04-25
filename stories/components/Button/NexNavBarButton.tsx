"use client";

import React, { forwardRef } from "react";

export interface NexNavBarButtonProps {
  /** Brand/logo element */
  brand?: React.ReactNode;
  /** Navigation links */
  links?: { label: string; href: string; icon?: React.ReactNode }[];
  /** Right-side actions/buttons */
  actions?: React.ReactNode[];
  /** Background color */
  color?: "primary" | "secondary" | "transparent";
  /** Sticky navbar */
  sticky?: boolean;
  /** Custom classes */
  className?: string;
}

export const NexNavBarButton = forwardRef<HTMLDivElement, NexNavBarButtonProps>(
  ({ brand, links = [], actions = [], color = "primary", sticky = false, className = "" }, ref) => {
    const bgColor = {
      primary: "bg-blue-600 text-white",
      secondary: "bg-purple-600 text-white",
      transparent: "bg-transparent text-black",
    };

    return (
      <div
        ref={ref}
        className={`w-full ${bgColor[color]} ${sticky ? "sticky top-0 z-50" : ""} ${className}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">{brand}</div>

            <div className="hidden md:flex space-x-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative inline-flex items-center px-4 py-2 font-semibold text-blue-500 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              {actions.map((action, idx) => (
                <span key={idx}>{action}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  },
);

NexNavBarButton.displayName = "NexNavBarButton";
