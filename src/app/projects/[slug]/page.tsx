"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/fade-in";
import { ArrowLeft, ExternalLink, CheckCircle, Eye } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { notFound } from "next/navigation";
import Image from "next/image";
import { useViews } from "@/lib/use-views";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects.find((p) => p.slug === slug);
  const views = useViews(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  {project.title}
                </h1>
                <span
                  className={`text-xs px-2.5 py-1 rounded-full ${
                    project.status === "Completed"
                      ? "bg-foreground/10 text-foreground"
                      : "bg-foreground/5 text-muted"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <p className="text-xl text-muted">{project.year}</p>
              {views !== null && (
                <p className="mt-2 text-sm text-muted flex items-center gap-1.5">
                  <Eye className="w-4 h-4" />
                  {views} view{views !== 1 ? "s" : ""}
                </p>
              )}
            </header>
          </FadeIn>

          <article className="space-y-12">
            <FadeIn delay={0.2}>
              <section>
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <div className="space-y-3">
                  {project.overview.content.map((paragraph, i) => (
                    <p key={i} className="text-muted leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </section>
            </FadeIn>

            {project.challenge && (
              <FadeIn delay={0.3}>
                <section>
                  <h2 className="text-2xl font-semibold mb-4">{project.challenge.title}</h2>
                  <div className="space-y-3">
                    {project.challenge.content.map((paragraph, i) => (
                      <p key={i} className="text-muted leading-relaxed">{paragraph}</p>
                    ))}
                  </div>
                </section>
              </FadeIn>
            )}

            {project.journey && (
              <FadeIn delay={0.35}>
                <section>
                  <h2 className="text-2xl font-semibold mb-4">{project.journey.title}</h2>
                  <div className="space-y-3">
                    {project.journey.content.map((paragraph, i) => (
                      <p key={i} className="text-muted leading-relaxed">{paragraph}</p>
                    ))}
                  </div>
                </section>
              </FadeIn>
            )}

            <FadeIn delay={0.4}>
              <section>
                <h2 className="text-2xl font-semibold mb-4">{project.solution.title}</h2>
                <div className="space-y-3">
                  {project.solution.content.map((paragraph, i) => (
                    <p key={i} className="text-muted leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </section>
            </FadeIn>

            {project.architecture && (
              <FadeIn delay={0.45}>
                <section>
                  <h2 className="text-2xl font-semibold mb-4">{project.architecture.title}</h2>
                  <div className="space-y-3">
                    {project.architecture.content.map((paragraph, i) => (
                      <p key={i} className="text-muted leading-relaxed">{paragraph}</p>
                    ))}
                  </div>
                </section>
              </FadeIn>
            )}

            {project.screenshots && project.screenshots.length > 0 && (
              <FadeIn delay={0.5}>
                <section>
                  <h2 className="text-2xl font-semibold mb-6">Screenshots</h2>
                  <div className="space-y-6">
                    {project.screenshots.map((screenshot, index) => (
                      <div key={index} className="group">
                        <div className="overflow-hidden rounded-lg border border-border bg-card">
                          <Image
                            src={screenshot.src}
                            alt={screenshot.alt}
                            width={1200}
                            height={675}
                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                          />
                        </div>
                        {screenshot.caption && (
                          <p className="mt-3 text-sm text-muted text-center">
                            {screenshot.caption}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              </FadeIn>
            )}

            <FadeIn delay={0.6}>
              <section>
                <h2 className="text-2xl font-semibold mb-4">Features</h2>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted">
                      <CheckCircle className="w-5 h-5 text-foreground mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </FadeIn>

            <FadeIn delay={0.6}>
              <section>
                <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-foreground bg-card border border-border rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </FadeIn>

            <FadeIn delay={0.7}>
              <section>
                <h2 className="text-2xl font-semibold mb-4">Lessons Learned</h2>
                <ul className="space-y-3">
                  {project.lessonsLearned.map((lesson, index) => (
                    <li key={index} className="text-muted leading-relaxed pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-muted/50">
                      {lesson}
                    </li>
                  ))}
                </ul>
              </section>
            </FadeIn>

            <FadeIn delay={0.8}>
              <section>
                <h2 className="text-2xl font-semibold mb-4">Future Improvements</h2>
                <ul className="space-y-3">
                  {project.futureImprovements.map((improvement, index) => (
                    <li key={index} className="text-muted leading-relaxed pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-muted/50">
                      {improvement}
                    </li>
                  ))}
                </ul>
              </section>
            </FadeIn>

            <FadeIn delay={0.9}>
              <div className="flex flex-wrap items-center gap-4 pt-8 border-t border-border">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    View on GitHub
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-full text-sm font-medium text-foreground hover:bg-card-hover transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </FadeIn>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
