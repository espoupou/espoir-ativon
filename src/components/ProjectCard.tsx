"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTranslation } from "@/i18n";
import ProjectArtwork from "@/components/ProjectArtwork";

export default function ProjectCard({ project }: { project: Project }) {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const content = project.content;

  return (
    <article className="h-full">
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`${t.projects.viewCaseStudy} : ${content.title[language]}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-cards transition duration-300 hover:-translate-y-1 hover:border-accent-green/40 hover:shadow-lg focus-visible:outline-offset-4"
      >
        <ProjectArtwork projectId={project.id} language={language} />
        <div className="flex flex-1 flex-col p-6">
          <p className="mb-3 text-[11px] font-mono uppercase tracking-[0.12em] text-accent-green">{project.caseStudy.kind[language]}</p>
          <h3 className="mb-3 min-h-14 font-heading text-xl font-bold leading-snug tracking-tight text-foreground">{content.title[language]}</h3>
          <p className="mb-6 text-sm leading-relaxed text-foreground-secondary">{content.summary[language]}</p>
          <div className="mt-auto flex flex-wrap gap-2 pb-5">
            {content.tools.slice(0, 3).map(tool => (
              <span key={tool} className="rounded-md border border-border bg-background px-2 py-1 text-[11px] font-mono text-foreground-secondary">{tool}</span>
            ))}
          </div>
          <div className="flex items-center justify-between border-t border-border pt-4 text-sm font-semibold text-accent-green">
            <span>{t.projects.viewCaseStudy}</span>
            <ArrowUpRight aria-hidden="true" size={19} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </div>
      </Link>
    </article>
  );
}
