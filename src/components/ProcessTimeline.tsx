"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  title: string;
  description: string;
  number?: string | number;
}

interface ProcessTimelineProps {
  items: TimelineItem[];
  orientation?: "horizontal" | "vertical";
}

export default function ProcessTimeline({ items, orientation = "vertical" }: ProcessTimelineProps) {
  if (orientation === "horizontal") {
    return (
      <div className="w-full overflow-x-auto pb-6 custom-scrollbar">
        <div className="flex min-w-max items-start gap-4">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center w-40 relative group"
            >
              <div className="w-full h-1 bg-border absolute top-4 -z-10 group-first:w-1/2 group-first:right-0 group-last:w-1/2 group-last:left-0"></div>
              <div className="w-8 h-8 rounded-full bg-cards border-2 border-accent-blue text-accent-blue flex items-center justify-center font-bold text-sm mb-4 bg-background">
                {item.number || idx + 1}
              </div>
              <div className="text-center">
                <h4 className="font-heading font-semibold text-sm text-foreground mb-1">{item.title}</h4>
                {item.description && <p className="text-xs text-foreground-secondary">{item.description}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
      {items.map((item, idx) => (
        <motion.div 
          key={idx} 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-cards text-accent-blue font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            {item.number || idx + 1}
          </div>
          
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-cards border border-border p-5 rounded-xl shadow-sm">
            <h4 className="font-heading font-bold text-foreground mb-2">{item.title}</h4>
            <p className="text-sm text-foreground-secondary leading-relaxed">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
