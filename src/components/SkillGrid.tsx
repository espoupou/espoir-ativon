"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTranslation } from "@/i18n";
import { 
  Wrench, 
  LineChart, 
  Database, 
  Cpu, 
  Code, 
  Layers 
} from "lucide-react";

export default function SkillGrid() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const icons = [
    <Wrench key="wrench" className="text-accent-yellow" size={24} />,
    <LineChart key="linechart" className="text-accent-blue" size={24} />,
    <Database key="database" className="text-accent-green" size={24} />,
    <Cpu key="cpu" className="text-accent-grey" size={24} />,
    <Code key="code" className="text-accent-green" size={24} />,
    <Layers key="layers" className="text-accent-blue" size={24} />
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {t.skills.categories.map((category, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-cards border border-border p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="mb-4 bg-background-secondary w-12 h-12 rounded-lg flex items-center justify-center border border-border">
            {icons[index % icons.length]}
          </div>
          <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
            {category.name}
          </h3>
          <p className="text-foreground-secondary text-sm leading-relaxed">
            {category.items}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
