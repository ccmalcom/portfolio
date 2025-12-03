"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { socialLinks } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Name */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold">
              <span className="text-accent">c</span>
              <span className="text-foreground">m</span>
            </span>
            <span className="text-foreground-muted text-sm">
              Chase Malcom
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-accent transition-colors p-2"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted hover:text-accent transition-colors p-2"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={socialLinks.email}
              className="text-foreground-muted hover:text-accent transition-colors p-2"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-foreground-muted">
            <span>Built with</span>
            <Heart size={14} className="text-accent" fill="currentColor" />
            <span>© {currentYear}</span>
          </div>
        </div>

        {/* Tech stack credit */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-foreground-muted">
            Built with Next.js, TypeScript, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
