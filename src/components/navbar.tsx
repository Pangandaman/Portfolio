"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-80px 0px -50% 0px" }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-foreground font-semibold text-lg tracking-tight">
          AMR<span className="text-foreground">.</span>
        </a>
        <div className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm transition-colors duration-200",
                activeSection === link.href
                  ? "text-foreground font-medium"
                  : "text-muted hover:text-foreground"
              )}
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
