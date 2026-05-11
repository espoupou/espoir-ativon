"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Project } from "@/data/projects";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTranslation } from "@/i18n";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { language } = useLanguage();
  const t = useTranslation(language);
  
  const content = project.content;
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-cards border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative h-48 w-full bg-gray-100 dark:bg-gray-800 border-b border-border flex items-center justify-center overflow-hidden">
        {project.image ? (
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Using a placeholder text if image fails to load or isn't there */}
            <div className="text-foreground-secondary opacity-50 flex flex-col items-center">
              <span className="mb-2">📷</span>
              <span className="text-xs">Image coming soon</span>
            </div>
            {/* Add Next Image here when assets are real. Using standard img for placeholder logic if needed, but per prompt avoiding broken images. */}
            <img 
              src={project.image} 
              alt={content.title[language]} 
              className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        ) : (
          <div className="text-foreground-secondary opacity-50 flex flex-col items-center">
            <span className="mb-2">📷</span>
            <span className="text-xs">Image à ajouter</span>
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-heading font-bold text-xl text-foreground mb-1">
          {content.title[language]}
        </h3>
        <p className="text-accent-blue text-sm font-medium mb-3">
          {content.subtitle[language]}
        </p>
        
        <p className="text-foreground-secondary text-sm mb-4 line-clamp-3">
          {content.summary[language]}
        </p>
        
        <div className="mt-auto pt-4 flex flex-wrap gap-2 mb-6">
          {content.tools.slice(0, 4).map((tool, i) => (
            <span 
              key={i} 
              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 border border-border rounded-md text-xs font-mono text-foreground-secondary"
            >
              {tool}
            </span>
          ))}
          {content.tools.length > 4 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 border border-border rounded-md text-xs font-mono text-foreground-secondary">
              +{content.tools.length - 4}
            </span>
          )}
        </div>
        
        <Link 
          href={`/projects/${project.slug}`}
          className="inline-flex items-center text-accent-green hover:text-emerald-700 font-medium text-sm transition-colors group"
        >
          {t.projects.viewCaseStudy}
          <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}
