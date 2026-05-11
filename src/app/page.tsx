"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { useTranslation } from "@/i18n";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experiences";
import { motion } from "framer-motion";
import { ArrowRight, Factory, Code, Database, Gauge, GitBranch } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import SkillGrid from "@/components/SkillGrid";
import Link from "next/link";

export default function Home() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const highlightedProjects = projects.slice(0, 5);
  const mainExperiences = experiences.slice(0, 3);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-5 md:px-8 max-w-[1200px] mx-auto w-full">
        <motion.div 
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="inline-block bg-accent-green/10 text-accent-green px-3 py-1 rounded-full text-sm font-semibold tracking-wide mb-6 border border-accent-green/20">
            {t.hero.subtitle}
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-accent-blue font-medium mb-6">
            {t.hero.tags}
          </p>
          <p className="text-lg md:text-xl text-foreground-secondary mb-10 leading-relaxed max-w-3xl text-balance">
            {t.hero.description}
          </p>

          {/* 
          <div className="bg-cards border border-border p-6 rounded-xl mb-10 max-w-2xl shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-accent-yellow"></div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{t.hero.availabilityTitle}</h3>
            <p className="text-foreground-secondary text-sm whitespace-pre-line mb-4">
              {t.hero.availabilityText}
            </p>
            <h3 className="font-heading font-semibold text-foreground mb-2 mt-4">{t.hero.targetFieldsTitle}</h3>
            <p className="text-foreground-secondary text-sm">
              {t.hero.targetFieldsText}
            </p>
          </div>
          */}

          <div className="flex flex-wrap gap-2 mb-10">
            {t.badges.map((badge, idx) => (
              <span key={idx} className="px-3 py-1.5 bg-background-secondary border border-border rounded-md text-sm font-mono text-foreground font-medium shadow-sm">
                {badge}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`/cv/cv-${language}.pdf`} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-accent-green text-white font-medium rounded-md shadow-md hover:bg-emerald-600 transition-colors text-center inline-flex justify-center items-center">
              {t.nav.downloadCV}
            </a>
            <Link href="/projects" className="px-6 py-3 bg-background border border-border text-foreground font-medium rounded-md shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-center">
              {t.hero.ctaProjects}
            </Link>
            <Link href="#contact" className="px-6 py-3 bg-background border border-border text-foreground font-medium rounded-md shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-center">
              {t.hero.ctaContact}
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. WHAT I CAN BRING */}
      <section className="py-20 bg-background-secondary border-y border-border">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <SectionHeading title={t.whatIcanBring.title} align="center" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.whatIcanBring.cards.map((card, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1} className="bg-cards border border-border p-6 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-accent-blue/10 flex items-center justify-center mb-4 border border-accent-blue/20">
                  <span className="text-accent-blue font-bold text-lg">{idx + 1}</span>
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">{card.title}</h3>
                <p className="text-foreground-secondary text-sm leading-relaxed">{card.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FACTORY <-> CODE */}
      <section className="py-24 max-w-[1200px] mx-auto px-5 md:px-8 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 z-0 pointer-events-none"></div>
        <SectionHeading 
          title={t.factoryCode.title} 
          subtitle={t.factoryCode.subtitle}
          align="center"
        />
        
        <AnimatedSection className="mt-16 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4 relative z-10">
          
          {/* Left Column - Factory */}
          <div className="w-full lg:w-1/3 bg-cards border border-border p-8 rounded-2xl shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-grey/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
            <div className="flex items-center mb-6 border-b border-border pb-4">
              <Factory className="text-accent-grey mr-3" size={28} />
              <h3 className="font-heading font-bold text-2xl text-foreground">{t.factoryCode.factory}</h3>
            </div>
            <ul className="space-y-3">
              {t.factoryCode.factoryList.map((item, idx) => (
                <li key={idx} className="flex items-center text-foreground-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-grey mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Center Connection */}
          <div className="w-full lg:w-1/4 flex flex-col items-center justify-center py-8">
            <div className="flex gap-2 text-accent-green mb-6 items-center">
              <Gauge size={20} />
              <ArrowRight size={16} className="text-foreground-secondary/40" />
              <Database size={20} />
              <ArrowRight size={16} className="text-foreground-secondary/40" />
              <GitBranch size={20} />
            </div>
            <p className="font-mono text-sm text-accent-green text-center font-semibold tracking-tight border border-accent-green/20 bg-accent-green/5 px-4 py-2 rounded-lg">
              {t.factoryCode.interface}
            </p>
            <p className="text-center text-sm text-foreground-secondary mt-6 max-w-xs leading-relaxed text-balance">
              {t.factoryCode.interfaceDesc}
            </p>
          </div>

          {/* Right Column - Code */}
          <div className="w-full lg:w-1/3 bg-cards border border-border p-8 rounded-2xl shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
            <div className="flex items-center mb-6 border-b border-border pb-4">
              <Code className="text-accent-blue mr-3" size={28} />
              <h3 className="font-heading font-bold text-2xl text-foreground">{t.factoryCode.code}</h3>
            </div>
            <ul className="space-y-3">
              {t.factoryCode.codeList.map((item, idx) => (
                <li key={idx} className="flex items-center text-foreground-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </AnimatedSection>
      </section>

      {/* 4. CURRENT SEARCH - TEMPORARILY HIDDEN 
      <section className="py-20 bg-accent-blue/5 border-y border-accent-blue/10">
        <div className="max-w-[800px] mx-auto px-5 md:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-3xl text-foreground mb-6">{t.currentSearch.title}</h2>
            <p className="text-foreground-secondary mb-6 text-lg">{t.currentSearch.description1}</p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {t.currentSearch.list.map((item, idx) => (
                <span key={idx} className="px-4 py-2 bg-cards border border-border rounded-full text-sm font-medium text-foreground shadow-sm">
                  {item.replace(";", "")}
                </span>
              ))}
            </div>
            <p className="text-foreground-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              {t.currentSearch.description2}
            </p>
          </AnimatedSection>
        </div>
      </section>
      */}

      {/* 5. PROJECTS PREVIEW */}
      <section className="py-24 max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="flex justify-between items-end mb-12">
          <SectionHeading title={t.projects.industrialTitle} />
          <Link href="/projects" className="hidden md:inline-flex items-center text-accent-green font-medium hover:underline mb-12">
            Voir tous les projets <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlightedProjects.map((project, idx) => (
            <AnimatedSection key={project.id} delay={idx * 0.1}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
        <div className="mt-10 text-center md:hidden">
          <Link href="/projects" className="inline-flex items-center text-accent-green font-medium hover:underline px-6 py-3 border border-accent-green rounded-md">
            Voir tous les projets <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>

      {/* 6. EXPERIENCES PREVIEW */}
      <section className="py-24 bg-background-secondary border-y border-border">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <SectionHeading title={t.experiences.title} />
            <Link href="/experiences" className="hidden md:inline-flex items-center text-accent-blue font-medium hover:underline mb-12">
              Voir tout <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainExperiences.map((exp, idx) => (
              <AnimatedSection key={exp.id} delay={idx * 0.1}>
                <ExperienceCard experience={exp} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SKILLS */}
      <section className="py-24 max-w-[1200px] mx-auto px-5 md:px-8">
        <SectionHeading title={t.skills.title} />
        <SkillGrid />
      </section>

      {/* 8. EDUCATION */}
      <section className="py-20 bg-background-secondary border-y border-border">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <SectionHeading title={t.education.title} />
          
          <div className="max-w-4xl mx-auto">
            {t.education.intro && (
              <p className="text-foreground-secondary text-center text-lg mb-16 max-w-3xl mx-auto leading-relaxed">
                {t.education.intro}
              </p>
            )}

            <div className="relative border-l-2 border-border/50 ml-3 md:ml-6 space-y-12">
              {t.education.items.map((item: any, idx: number) => (
                <AnimatedSection key={idx} delay={idx * 0.1} className="relative pl-6 md:pl-10">
                  {/* Timeline Dot */}
                  <div className="absolute w-4 h-4 bg-accent-yellow rounded-full -left-[9px] top-1.5 ring-4 ring-background-secondary"></div>
                  
                  <div className="bg-cards border border-border p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                      <h3 className="font-heading font-bold text-lg md:text-xl text-foreground leading-tight">
                        {item.degree}
                      </h3>
                      {item.period && (
                        <span className="shrink-0 inline-block px-3 py-1 bg-accent-yellow/10 text-accent-yellow text-xs font-bold uppercase tracking-wider rounded-full border border-accent-yellow/20">
                          {item.period}
                        </span>
                      )}
                    </div>
                    <p className="text-foreground-secondary text-sm md:text-base leading-relaxed mb-5">
                      {item.description}
                    </p>
                    {item.tags && (
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag: string, tagIdx: number) => (
                          <span key={tagIdx} className="px-3 py-1 bg-background border border-border rounded-md text-xs font-medium text-foreground-secondary shadow-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 10. CONTACT */}
      <section id="contact" className="py-24 max-w-[800px] mx-auto px-5 md:px-8 text-center">
        <AnimatedSection>
          <SectionHeading title={t.contact.title} align="center" subtitle={t.contact.description} />
          
          <div className="bg-cards border border-border p-8 rounded-2xl shadow-sm mb-10 text-left md:text-center">
            <p className="text-foreground font-medium mb-2">{t.contact.location}</p>
            <p className="text-foreground font-medium mb-2">
              {t.contact.phoneLabel} <a href="https://wa.me/33689905823" target="_blank" rel="noopener noreferrer" className="text-accent-green hover:underline">+33 6 89 90 58 23</a>
            </p>
            {/* <p className="text-foreground-secondary text-sm">{t.contact.availability}</p> */}
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="mailto:espoir.ativon@example.com" className="w-full sm:w-auto px-8 py-3 bg-accent-green text-white font-medium rounded-md shadow-md hover:bg-emerald-600 transition-colors">
              {t.contact.sendEmail}
            </a>
            <a href={`/cv/cv-${language}.pdf`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3 bg-background border border-border text-foreground font-medium rounded-md shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              {t.nav.downloadCV}
            </a>
          </div>
        </AnimatedSection>
      </section>

    </div>
  );
}
