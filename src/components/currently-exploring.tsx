"use client";

import { Section, SectionTitle } from "./section";
import { FadeIn, FadeInStagger, FadeInItem } from "./fade-in";
import { currentlyExploring } from "@/data/profile";

export function CurrentlyExploring() {
  return (
    <Section>
      <FadeIn>
        <SectionTitle>Currently Exploring</SectionTitle>
      </FadeIn>

      <FadeInStagger className="flex flex-wrap gap-3" staggerDelay={0.05}>
        {currentlyExploring.map((item) => (
          <FadeInItem key={item}>
            <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-foreground border border-foreground rounded-full hover:bg-foreground hover:text-background transition-colors cursor-default">
              {item}
            </span>
          </FadeInItem>
        ))}
      </FadeInStagger>
    </Section>
  );
}
