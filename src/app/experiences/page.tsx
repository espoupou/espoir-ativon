"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { useTranslation } from "@/i18n";
import { experiences } from "@/data/experiences";
import ExperienceCard from "@/components/ExperienceCard";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

export default function ExperiencesPage() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <div className="pt-32 pb-24 max-w-[800px] mx-auto px-5 md:px-8">
      <SectionHeading 
        title={t.experiences.title} 
        subtitle="Mon parcours professionnel à la croisée de l'industrie et du numérique."
      />

      <div className="mt-16 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
        {experiences.map((experience, idx) => (
          <AnimatedSection key={experience.id} delay={idx * 0.1} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-accent-blue shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4">
              <ExperienceCard experience={experience} />
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
