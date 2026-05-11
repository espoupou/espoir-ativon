"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { projects } from "@/data/projects";
import DetailHero from "@/components/DetailHero";
import AnimatedSection from "@/components/AnimatedSection";
import { GithubIcon } from "@/components/icons";
import { notFound } from "next/navigation";
import { use } from "react";

export default function GenericProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { language } = useLanguage();
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
        backLabel={language === "fr" ? "Retour aux projets" : "Back to projects"}
        buttons={
          project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-background border border-border rounded-md text-foreground hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm font-medium"
            >
              <GithubIcon size={18} className="mr-2" />
              {language === "fr" ? "Voir le dépôt GitHub" : "View GitHub Repository"}
            </a>
          )
        }
      />

      <div className="max-w-[800px] mx-auto px-5 md:px-8 mt-16">
        <AnimatedSection>
          <div className="bg-cards border border-border p-8 rounded-xl shadow-sm">
            <h3 className="font-heading font-bold text-xl text-foreground mb-4">
              {language === "fr" ? "Aperçu du projet" : "Project Overview"}
            </h3>
            <p className="text-foreground-secondary mb-6 leading-relaxed">
              <strong>{language === "fr" ? "Problème : " : "Problem: "}</strong>
              {content.problem[language]}
            </p>
            <p className="text-foreground-secondary mb-6 leading-relaxed">
              <strong>{language === "fr" ? "Rôle : " : "Role: "}</strong>
              {content.role[language]}
            </p>
            <p className="text-foreground-secondary leading-relaxed border-l-4 border-l-accent-green pl-4">
              <strong>{language === "fr" ? "Apport : " : "Contribution: "}</strong>
              {content.contribution[language]}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
