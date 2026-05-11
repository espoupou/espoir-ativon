"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { experiences } from "@/data/experiences";
import DetailHero from "@/components/DetailHero";
import AnimatedSection from "@/components/AnimatedSection";
import { notFound } from "next/navigation";
import { use } from "react";

export default function GenericExperiencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { language } = useLanguage();
  const resolvedParams = use(params);
  const experience = experiences.find((e) => e.slug === resolvedParams.slug);

  if (!experience) {
    notFound();
  }
  
  const content = experience.content;

  return (
    <div className="pb-24 min-h-screen">
      <DetailHero
        title={content.role[language]}
        subtitle={content.organization}
        tags={content.tools}
        summary={content.context[language]}
        backLink="/experiences"
        backLabel={language === "fr" ? "Retour aux expériences" : "Back to experience"}
      />

      <div className="max-w-[800px] mx-auto px-5 md:px-8 mt-16">
        <AnimatedSection>
          <div className="bg-cards border border-border p-8 rounded-xl shadow-sm">
            <h3 className="font-heading font-bold text-xl text-foreground mb-4">
              {language === "fr" ? "Missions & Apports" : "Missions & Contributions"}
            </h3>
            
            <ul className="mb-8 space-y-3">
              {content.missions.map((mission, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-accent-blue mr-3 mt-1">•</span>
                  <span className="text-foreground-secondary leading-relaxed">{mission[language]}</span>
                </li>
              ))}
            </ul>
            
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
