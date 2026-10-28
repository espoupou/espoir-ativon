"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { useTranslation } from "@/i18n";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experiences";
import { certifications } from "@/data/certifications";
import { researchWorks } from "@/data/research";
import { motion } from "framer-motion";
import { ArrowRight, Award, BookOpen, CalendarDays, Factory, Code, Database, ExternalLink, Gauge, GitBranch, MapPin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import SkillGrid from "@/components/SkillGrid";
import ContactActions from "@/components/ContactActions";
import Link from "next/link";

export default function Home() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const highlightedProjects = projects.slice(0, 5);
  const mainExperiences = experiences.slice(0, 3);
  const featuredResearch = researchWorks[0];

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
            <a href="#contact" className="px-6 py-3 bg-background border border-border text-foreground font-medium rounded-md shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-center">
              {t.hero.ctaContact}
            </a>
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
            {t.projects.viewAll} <ArrowRight size={16} className="ml-1" />
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
            {t.projects.viewAll} <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>

      {/* 6. RESEARCH AND TECHNICAL WRITING */}
      <section className="border-y border-border bg-background-secondary py-24">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <SectionHeading title={t.research.title} subtitle={t.research.intro} />
          <AnimatedSection className="mt-12">
            <Link
              href={`/research/${featuredResearch.slug}`}
              className="group grid overflow-hidden rounded-3xl border border-border bg-cards shadow-sm transition hover:-translate-y-1 hover:border-accent-blue/35 hover:shadow-lg lg:grid-cols-[0.8fr_1.2fr]"
            >
              <div className="relative flex min-h-64 flex-col justify-between overflow-hidden bg-[#123c33] p-7 text-[#f3f0df] sm:p-10">
                <div className="absolute -right-16 -top-20 size-64 rounded-full border border-[#c7d888]/20" />
                <div className="absolute -bottom-24 -left-16 size-72 rounded-full border border-[#c7d888]/15" />
                <div className="relative flex items-center gap-3 text-xs font-mono uppercase tracking-[0.16em] text-[#c7d888]">
                  <BookOpen size={18} aria-hidden="true" />
                  {featuredResearch.status[language]}
                </div>
                <div className="relative mt-14">
                  <div className="mb-5 grid grid-cols-4 gap-2" aria-hidden="true">
                    {["ABX3", "n-i-p", "p-i-n", "R2R"].map((label) => (
                      <span key={label} className="rounded-md border border-white/15 bg-white/5 px-2 py-3 text-center font-mono text-xs">
                        {label}
                      </span>
                    ))}
                  </div>
                  <p className="font-mono text-xs leading-relaxed text-[#dce4c6]">
                    {featuredResearch.topics.map((topic) => topic[language]).join(" / ")}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-accent-blue">
                  {t.research.authors}: {featuredResearch.authors.join(", ")}
                </p>
                <h3 className="font-heading text-2xl font-bold leading-tight text-foreground sm:text-3xl">
                  {featuredResearch.title}
                </h3>
                <p className="mt-5 max-w-2xl leading-relaxed text-foreground-secondary">
                  {featuredResearch.summary[language]}
                </p>
                <span className="mt-8 inline-flex items-center font-semibold text-accent-green">
                  {t.research.viewDetails}
                  <ArrowRight size={17} className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* 7. EXPERIENCES PREVIEW */}
      <section className="py-24 bg-background-secondary border-y border-border">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <SectionHeading title={t.experiences.title} />
            <Link href="/experiences" className="hidden md:inline-flex items-center text-accent-blue font-medium hover:underline mb-12">
              {t.experiences.viewAll} <ArrowRight size={16} className="ml-1" />
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

      {/* 8. SKILLS */}
      <section id="skills" className="w-full min-w-0 scroll-mt-24 py-24 max-w-[1200px] mx-auto px-5 md:px-8">
        <SectionHeading title={t.skills.title} />
        <SkillGrid />
      </section>

      {/* 9. EDUCATION */}
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
              {t.education.items.map((item, idx) => (
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
                        {item.tags.map((tag, tagIdx) => (
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

      {/* 10. CERTIFICATIONS AND DISTINCTIONS */}
      <section id="certifications" className="scroll-mt-24 py-24">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <SectionHeading title={t.certifications.title} subtitle={t.certifications.intro} />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certification, index) => (
              <AnimatedSection key={certification.id} delay={index * 0.08} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border border-border bg-cards p-6 shadow-sm transition hover:border-accent-yellow/35 hover:shadow-md">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent-yellow/10 text-accent-yellow">
                      <Award size={22} aria-hidden="true" />
                    </span>
                    <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-bold uppercase tracking-wider text-foreground-secondary">
                      {certification.kind[language]}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold leading-snug text-foreground">
                    {certification.title[language]}
                  </h3>
                  <p className="mt-3 text-sm font-semibold text-accent-blue">
                    {certification.issuer[language]} - {certification.year}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-foreground-secondary">
                    {certification.description[language]}
                  </p>
                  {certification.credentialUrl && (
                    <a
                      href={certification.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center pt-6 text-sm font-semibold text-accent-green hover:underline"
                    >
                      {t.certifications.verify}
                      <ExternalLink size={15} className="ml-2" aria-hidden="true" />
                    </a>
                  )}
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CONTACT */}
      <section id="contact" className="scroll-mt-24 border-y border-border bg-background-secondary py-24 lg:flex lg:min-h-[calc(100vh-5rem)] lg:items-center">
        <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-cards shadow-lg shadow-black/5">
              <div className="pointer-events-none absolute -left-20 -top-24 size-64 rounded-full bg-accent-green/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-28 -right-20 size-72 rounded-full bg-accent-blue/10 blur-3xl" />

              <div className="relative grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                  <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-accent-green/25 bg-accent-green/10 px-4 py-2 text-sm font-semibold text-accent-green">
                    <CalendarDays size={17} aria-hidden="true" />
                    {t.contact.availability}
                  </div>
                  <h2 className="mb-5 font-heading text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                    {t.contact.title}
                  </h2>
                  <p className="max-w-xl text-base leading-relaxed text-foreground-secondary sm:text-lg">
                    {t.contact.description}
                  </p>
                  <div className="mt-8 flex items-center gap-3 text-sm font-medium text-foreground sm:text-base">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-accent-blue/10 text-accent-blue">
                      <MapPin size={19} aria-hidden="true" />
                    </span>
                    {t.contact.location}
                  </div>
                </div>

                <div className="border-t border-border bg-background/65 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
                  <h3 className="font-heading text-xl font-bold text-foreground sm:text-2xl">
                    {t.contact.contactOptions}
                  </h3>
                  <p className="mb-6 mt-2 text-sm leading-relaxed text-foreground-secondary">
                    {t.contact.contactHint}
                  </p>
                  <ContactActions
                    sendEmail={t.contact.sendEmail}
                    openGmail={t.contact.openGmail}
                    copyEmail={t.contact.copyEmail}
                    copiedEmail={t.contact.copiedEmail}
                    copyError={t.contact.copyError}
                    emailLabel={t.contact.emailLabel}
                    downloadCV={t.nav.downloadCV}
                    cvHref={`/cv/cv-${language}.pdf`}
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
