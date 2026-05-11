"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { useTranslation } from "@/i18n";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

export default function ProjectsPage() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const industrialProjects = projects.filter(p => p.type === "industrial");
  const dataProjects = projects.filter(p => p.type === "data");
  const softwareProjects = projects.filter(p => p.type === "software");

  return (
    <div className="pt-32 pb-24 max-w-[1200px] mx-auto px-5 md:px-8">
      <SectionHeading 
        title={t.projects.title} 
        subtitle="Découvrez mes travaux à l'interface entre l'ingénierie industrielle et le développement logiciel."
      />

      <div className="mt-16 mb-20">
        <h3 className="font-heading font-bold text-2xl text-foreground mb-8 border-b border-border pb-4">
          {t.projects.industrialTitle}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industrialProjects.map((project, idx) => (
            <AnimatedSection key={project.id} delay={idx * 0.1}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div className="mb-20">
        <h3 className="font-heading font-bold text-2xl text-foreground mb-8 border-b border-border pb-4">
          {t.projects.dataTitle}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataProjects.map((project, idx) => (
            <AnimatedSection key={project.id} delay={idx * 0.1}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-heading font-bold text-2xl text-foreground mb-8 border-b border-border pb-4">
          {t.projects.softwareTitle}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {softwareProjects.map((project, idx) => (
            <AnimatedSection key={project.id} delay={idx * 0.1}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
