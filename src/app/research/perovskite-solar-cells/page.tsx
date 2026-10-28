"use client";

import AnimatedSection from "@/components/AnimatedSection";
import DetailHero from "@/components/DetailHero";
import ProcessTimeline from "@/components/ProcessTimeline";
import { researchWorks } from "@/data/research";
import { useTranslation } from "@/i18n";
import { useLanguage } from "@/i18n/LanguageContext";

export default function PerovskiteResearchPage() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const work = researchWorks[0];

  return (
    <div className="min-h-screen pb-24">
      <DetailHero
        title={work.title}
        subtitle={work.status[language]}
        tags={work.topics.map((topic) => topic[language])}
        summary={work.summary[language]}
        backLink="/"
        backLabel={t.research.back}
      />

      <div className="mx-auto mt-16 max-w-[900px] px-5 md:px-8">
        <AnimatedSection>
          <div className="rounded-2xl border border-border bg-cards p-7 shadow-sm sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent-blue">
              {t.research.authors}
            </p>
            <p className="mt-3 font-heading text-xl font-semibold text-foreground">
              {work.authors.join(", ")}
            </p>
            <p className="mt-7 text-xs font-bold uppercase tracking-[0.14em] text-accent-blue">
              {t.research.topics}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {work.topics.map((topic) => (
                <span key={topic.fr} className="rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground-secondary">
                  {topic[language]}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-20">
          <h2 className="mb-10 text-center font-heading text-3xl font-bold text-foreground">
            {t.research.content}
          </h2>
          <ProcessTimeline
            items={work.sections.map((section, index) => ({
              number: index + 1,
              title: section.title[language],
              description: section.description[language],
            }))}
          />
        </AnimatedSection>

        <AnimatedSection className="mt-16">
          <div className="rounded-2xl border border-accent-yellow/30 bg-accent-yellow/5 p-7 sm:p-9">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              {t.research.transparency}
            </h2>
            <p className="mt-4 leading-relaxed text-foreground-secondary">
              {work.scope[language]}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
