"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Experience } from "@/data/experiences";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTranslation } from "@/i18n";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const { language } = useLanguage();
  const t = useTranslation(language);
  
  const content = experience.content;
  
  return (
    <motion.article
      whileHover={{ y: -3 }}
      className="h-full flex flex-col bg-cards border border-border rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-accent-blue opacity-50 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="font-heading font-bold text-xl text-foreground">
            {content.role[language]}
          </h3>
          <p className="text-foreground font-medium mt-1">
            {content.organization}
          </p>
        </div>
        <div className="flex items-center text-foreground-secondary text-sm font-mono bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-md border border-border self-start">
          <Calendar size={14} className="mr-2" aria-hidden="true" />
          <time>{content.period}</time>
        </div>
      </div>
      
      <p className="text-foreground-secondary text-sm mb-4">
        {content.context[language]}
      </p>
      
      <ul className="mb-6 space-y-2">
        {content.missions.map((mission, idx) => (
          <li key={idx} className="flex items-start">
            <span className="text-accent-green mr-2 mt-1" aria-hidden="true">•</span>
            <span className="text-sm text-foreground-secondary">{mission[language]}</span>
          </li>
        ))}
      </ul>
      
      <div className="pt-4 border-t border-border mt-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {content.tools.slice(0, 4).map((tool, i) => (
            <span 
              key={i} 
              className="px-2 py-1 bg-background border border-border rounded-md text-xs font-mono text-foreground-secondary"
            >
              {tool}
            </span>
          ))}
        </div>
        
        <Link 
          href={`/experiences/${experience.slug}`}
          className="inline-flex items-center text-accent-blue font-medium text-sm underline-offset-4 hover:underline focus-visible:underline"
        >
          {t.experiences.viewDetails}
          <span className="sr-only"> — {content.role[language]}, {content.organization}</span>
          <ArrowRight size={16} className="ml-1" aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  );
}
