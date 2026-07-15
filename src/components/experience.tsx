"use client";

import { Section, SectionTitle } from "./section";
import { FadeIn, FadeInStagger, FadeInItem } from "./fade-in";
import { experience } from "@/data/profile";

export function Experience() {
  return (
    <Section id="experience">
      <FadeIn>
        <SectionTitle>Experience</SectionTitle>
      </FadeIn>

      <FadeInStagger className="space-y-0" staggerDelay={0.1}>
        {experience.map((exp, index) => (
          <FadeInItem key={index}>
            <div className="py-8 border-b border-border last:border-b-0">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-muted">{exp.company}</p>
                </div>
                <span className="text-sm text-muted shrink-0">{exp.date}</span>
              </div>
              <p className="mt-4 text-muted leading-relaxed">
                {exp.description}
              </p>
            </div>
          </FadeInItem>
        ))}
      </FadeInStagger>
    </Section>
  );
}

