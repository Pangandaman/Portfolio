"use client";

import { Section, SectionTitle } from "./section";
import { FadeIn, FadeInStagger, FadeInItem } from "./fade-in";
import { skills } from "@/data/profile";

export function TechStack() {
  return (
    <Section id="skills">
      <FadeIn>
        <SectionTitle>Tech Stack</SectionTitle>
      </FadeIn>

      <FadeInStagger className="flex flex-wrap gap-3" staggerDelay={0.05}>
        {skills.map((skill) => (
          <FadeInItem key={skill}>
            <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-foreground bg-card border border-border rounded-full hover:bg-card-hover transition-colors cursor-default">
              {skill}
            </span>
          </FadeInItem>
        ))}
      </FadeInStagger>
    </Section>
  );
}
