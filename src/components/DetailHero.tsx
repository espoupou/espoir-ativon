"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface DetailHeroProps {
  title: string;
  subtitle: string;
  tags: string[];
  summary: string;
  backLink: string;
  backLabel: string;
  buttons?: React.ReactNode;
}

export default function DetailHero({ title, subtitle, tags, summary, backLink, backLabel, buttons }: DetailHeroProps) {
  return (
    <section className="pt-32 pb-16 border-b border-border bg-background-secondary">
      <div className="max-w-[800px] mx-auto px-5 md:px-8">
        <Link href={backLink} className="inline-flex items-center text-foreground-secondary hover:text-foreground mb-8 text-sm font-medium transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          {backLabel}
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 bg-background border border-border rounded-full text-xs font-mono text-foreground-secondary">
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
            {title}
          </h1>
          
          <p className="text-xl text-accent-blue font-medium mb-6">
            {subtitle}
          </p>
          
          <div className="bg-cards border border-border p-6 rounded-xl mb-8 shadow-sm">
            <p className="text-foreground-secondary text-lg leading-relaxed">
              {summary}
            </p>
          </div>
          
          {buttons && (
            <div className="flex flex-wrap gap-4">
              {buttons}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
