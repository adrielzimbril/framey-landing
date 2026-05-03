"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div className={cn("grid grid-cols-12 gap-4", className)}>
      {children}
    </div>
  );
}

interface BentoItemProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function BentoItem({ children, className, delay = 0 }: BentoItemProps) {
  return (
    <motion.div initial={false}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={cn("industrial-card p-6 flex flex-col justify-between group cursor-default", className)}
    >
      {children}
    </motion.div>
  );
}
