"use client";

import { Section, SectionTitle } from "./section";
import { FadeIn } from "./fade-in";

export function About() {
  return (
    <Section id="about">
      <FadeIn>
        <SectionTitle>About</SectionTitle>
      </FadeIn>

      <div className="flex flex-col md:flex-row gap-12 md:gap-16">
        <div className="flex-1 space-y-6 text-lg text-muted leading-relaxed">
          <FadeIn delay={0.1}>
            <p>
              Believe it or not, I didn&apos;t
              originally plan to become a software developer. I actually wanted to study
              Civil Engineering , but all the available slots were already full. IT wasn&apos;t my
              first choice—it became my opportunity. 
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p>
              Looking back, I&apos;m really glad things turned out that way. Once I started
              learning, I discovered that I genuinely enjoyed building things. I began with
              simple HTML, CSS, and JavaScript websites, then moved into PHP and
              CodeIgniter, where I built my first complete web applications.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p>
              Today, I&apos;m exploring modern technologies like
              React, Next.js, and AI-powered development tools that have completely
              changed the way I learn and create.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p>
              What excites me most is creating software that makes everyday life a little
              easier—whether that&apos;s helping small businesses in my community streamline
              their work or building applications that solve real problems for real people.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <p>
              My long-term goal is to be part of a team building products that impact
              thousands or even millions of users. I look forward to collaborating with
              talented developers, learning from experienced engineers, and contributing to
              projects that make a meaningful difference.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-foreground">
              Other than that, you'll probably find me 
              watching movies from wayback 2000s-2010s, falling into random YouTube 
              rabbit holes, or playing League. 
              I've been gaming since the PlayStation 2 era, 
              and I really miss those golden days.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} className="md:w-80 shrink-0">
          <div className="sticky top-28 overflow-hidden rounded-xl border border-border">
            <video
              src="/assets/img/hero-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              suppressHydrationWarning
              className="w-full h-auto"
            />
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
