"use client";

import { Section, SectionTitle } from "./section";
import { FadeIn, FadeInStagger, FadeInItem } from "./fade-in";
import { certificates } from "@/data/profile";
import { ExternalLink } from "lucide-react";

export function Certificates() {
  return (
    <Section id="certificates">
      <FadeIn>
        <SectionTitle>Certificates</SectionTitle>
      </FadeIn>

      <FadeInStagger className="space-y-0" staggerDelay={0.1}>
        {certificates.map((cert, index) => (
          <FadeInItem key={index}>
            <div className="py-8 border-b border-border last:border-b-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {cert.title}
                  </h3>
                  <p className="text-muted">{cert.issuer}</p>
                </div>
                <span className="text-sm text-muted shrink-0">{cert.date}</span>
              </div>
              <a
                href={cert.file}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                View Certificate
              </a>
            </div>
          </FadeInItem>
        ))}
      </FadeInStagger>
    </Section>
  );
}
