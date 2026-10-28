"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { useTranslation } from "@/i18n";
import { projects } from "@/data/projects";
import DetailHero from "@/components/DetailHero";
import AnimatedSection from "@/components/AnimatedSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import MetricCard from "@/components/MetricCard";
import { GithubIcon } from "@/components/icons";
import { notFound } from "next/navigation";
import { use } from "react";

export default function GenericProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const resolvedParams = use(params);
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }
  
  const content = project.content;

  return (
    <div className="pb-24 min-h-screen">
      <DetailHero
        title={content.title[language]}
        subtitle={content.subtitle[language]}
        tags={content.tools}
        summary={content.summary[language]}
        backLink="/projects"
        backLabel={t.projects.back}
        buttons={
          project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-background border border-border rounded-md text-foreground hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm font-medium"
            >
              <GithubIcon size={18} className="mr-2" />
              {t.projects.githubRepository}
            </a>
          )
        }
      />

      <div className="max-w-[900px] mx-auto px-5 md:px-8 mt-16">
        <AnimatedSection>
          <div className="bg-cards border border-border p-8 rounded-xl shadow-sm">
            <h3 className="font-heading font-bold text-xl text-foreground mb-4">
              {t.projects.overview}
            </h3>
            <p className="text-foreground-secondary mb-6 leading-relaxed">
              <strong>{t.projects.problem} </strong>
              {content.problem[language]}
            </p>
            <p className="text-foreground-secondary mb-6 leading-relaxed">
              <strong>{t.projects.role} </strong>
              {content.role[language]}
            </p>
            <p className="text-foreground-secondary leading-relaxed border-l-4 border-l-accent-green pl-4">
              <strong>{t.projects.contribution} </strong>
              {content.contribution[language]}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-20">
          <h2 className="mb-10 text-center font-heading text-3xl font-bold text-foreground">
            {t.projects.approach}
          </h2>
          <ProcessTimeline
            items={project.caseStudy.steps.map((step, index) => ({
              number: index + 1,
              title: step.title[language],
              description: step.description[language],
            }))}
          />
        </AnimatedSection>

        <AnimatedSection className="mt-20">
          <h2 className="mb-8 font-heading text-3xl font-bold text-foreground">
            {t.projects.findings}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {project.caseStudy.findings.map((finding, index) => (
              <MetricCard
                key={finding.title.fr}
                title={finding.title[language]}
                description={finding.description[language]}
                delay={index * 0.1}
              />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-12">
          <div className="rounded-xl border border-accent-yellow/25 bg-accent-yellow/5 p-6">
            <h2 className="mb-2 font-heading text-lg font-bold text-foreground">
              {t.projects.scope}
            </h2>
            <p className="leading-relaxed text-foreground-secondary">
              {project.caseStudy.scope[language]}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
