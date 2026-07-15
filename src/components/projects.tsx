"use client";

import Link from "next/link";
import { Section, SectionTitle } from "./section";
import { FadeIn, FadeInStagger, FadeInItem } from "./fade-in";
import { projects } from "@/data/projects";
import { ArrowUpRight, Eye } from "lucide-react";
import { useViews } from "@/lib/use-views";

function ProjectItem({ slug }: { slug: string }) {
  const project = projects.find((p) => p.slug === slug)!;
  const views = useViews(slug);

  return (
    <FadeInItem key={project.slug}>
      <Link
        href={`/projects/${project.slug}`}
        className="group block py-8 border-b border-border first:border-t"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-3 flex-1">
            <div className="flex items-center gap-3">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-muted transition-colors">
                {project.title}
              </h3>
              <ArrowUpRight className="w-5 h-5 text-muted opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <p className="text-muted leading-relaxed max-w-2xl">
              {project.description}
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {project.techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 bg-card border border-border rounded-md text-muted"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="text-xs text-muted">
                  +{project.techStack.length - 4} more
                </span>
              )}
            </div>
          </div>
          <div className="text-right shrink-0">
            <span className="text-sm text-muted">{project.year}</span>
            <div className="mt-1">
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  project.status === "Completed"
                    ? "bg-foreground/10 text-foreground"
                    : "bg-foreground/5 text-muted"
                }`}
              >
                {project.status}
              </span>
            </div>
            {views !== null && (
              <p className="mt-2 text-xs text-muted flex items-center justify-end gap-1">
                <Eye className="w-3 h-3" />
                {views}
              </p>
            )}
          </div>
        </div>
      </Link>
    </FadeInItem>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <FadeIn>
        <SectionTitle>Projects</SectionTitle>
      </FadeIn>

      <FadeInStagger className="space-y-0" staggerDelay={0.1}>
        {projects.map((project) => (
          <ProjectItem key={project.slug} slug={project.slug} />
        ))}
      </FadeInStagger>
    </Section>
  );
}
