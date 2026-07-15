"use client";

import { socialLinks } from "@/data/profile";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} Mohammad Amr. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className="text-muted hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
          <p className="text-xs text-muted">
            Built with Next.js &middot; Hosted on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
