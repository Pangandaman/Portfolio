"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { socialLinks } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center pt-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-muted text-lg"
            >
              Hello, I&apos;m
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none"
            >
              Mohammad Amr
              <br />
              <span className="text-muted">Pangandaman</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed"
          >
            I build web applications that solve real-world problems.
            Currently exploring modern technologies and crafting thoughtful software
            that makes everyday life a little easier.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-full text-sm font-medium text-foreground hover:bg-card-hover transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex items-center gap-5 pt-8"
          >
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className="text-muted hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <a href="#about" className="text-muted hover:text-foreground transition-colors">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
