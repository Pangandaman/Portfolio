"use client";

import { useState, FormEvent } from "react";
import { Section, SectionTitle } from "./section";
import { FadeIn } from "./fade-in";
import { socialLinks } from "@/data/profile";
import { Mail, Send, Loader2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contact">
      <div className="max-w-2xl">
        <FadeIn>
          <SectionTitle>Get in Touch</SectionTitle>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-lg text-muted leading-relaxed mb-8">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Whether you have a question
            or just want to say hi, feel free to reach out.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-5 mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:border-foreground transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:border-foreground transition-colors"
              />
            </div>
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:border-foreground transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors disabled:opacity-50"
            >
              {status === "sending" ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : status === "sent" ? (
                <Send className="w-4 h-4" />
              ) : (
                <Mail className="w-4 h-4" />
              )}
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                  ? "Sent!"
                  : "Send Message"}
            </button>
            {status === "error" && (
              <p className="text-sm text-red-500">
                Something went wrong. Try again or email me directly at{" "}
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="underline hover:text-red-400"
                >
                  {socialLinks.email}
                </a>
              </p>
            )}
          </form>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href={`mailto:${socialLinks.email}`}
              className="inline-flex items-center gap-3 px-6 py-3 border border-border rounded-full text-sm font-medium text-foreground hover:bg-card-hover transition-colors"
            >
              <Mail className="w-4 h-4" />
              {socialLinks.email}
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 border border-border rounded-full text-sm font-medium text-foreground hover:bg-card-hover transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 border border-border rounded-full text-sm font-medium text-foreground hover:bg-card-hover transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
