"use client";

import { motion } from "framer-motion";

interface MetricCardProps {
  title: string;
  value?: string | number;
  description: string;
  delay?: number;
}

export default function MetricCard({ title, value, description, delay = 0 }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-cards border border-border p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-accent-green/5 rounded-full -mr-8 -mt-8 blur-xl group-hover:bg-accent-green/10 transition-colors"></div>
      
      <h4 className="font-heading font-semibold text-lg text-foreground mb-1">{title}</h4>
      
      {value && (
        <div className="font-mono font-bold text-3xl text-accent-green mb-3">
          {value}
        </div>
      )}
      
      <p className="text-sm text-foreground-secondary leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
