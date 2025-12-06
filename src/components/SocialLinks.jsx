import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/harish00078",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:you@example.com",
    icon: Mail,
  },
];

export function SocialLinks({ className = "" }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {links.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-brand-400 transition"
        >
          <item.icon className="w-4 h-4" />
          <span>{item.label}</span>
        </a>
      ))}
    </div>
  );
}
