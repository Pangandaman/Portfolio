"use client";

import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-28", className)}
    >
      <div className="max-w-4xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
}

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-12",
        className
      )}
    >
      {children}
    </h2>
  );
}
