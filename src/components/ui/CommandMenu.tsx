"use client";

import { motion } from "motion/react";
import { Terminal, Sparkles, Layers, Search, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const steps = [
  { label: "Initializing Canvas", icon: Layers, progress: "100%" },
  { label: "AI Layout Engine", icon: Sparkles, progress: "85%" },
  { label: "Compiling Styles", icon: Zap, progress: "Pending" },
];

export function CommandMenu() {
  const [text, setText] = useState("");
  const fullText = "Build a minimalist portfolio for a product designer with a dark theme, bento grid features, and smooth layout transitions...";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div initial={false}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
      className="max-w-4xl mx-auto rounded-2xl border border-zinc-200 bg-white overflow-hidden group"
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-200 bg-zinc-50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-zinc-200" />
          <div className="w-3 h-3 rounded-full bg-zinc-200" />
          <div className="w-3 h-3 rounded-full bg-zinc-200" />
        </div>
        <div className="flex items-center gap-2 ml-4 px-3 py-1 rounded bg-white border border-zinc-200">
          <Terminal className="w-3 h-3 text-zinc-500" />
          <span className="text-xs text-zinc-500 font-mono">Framey AI Terminal</span>
        </div>
        <div className="ml-auto text-[10px] text-zinc-400 font-mono flex items-center gap-2">
          <Search className="w-3 h-3" />
          CMD + K
        </div>
      </div>
      
      <div className="p-8 text-left font-mono">
        <div className="flex items-start gap-4 mb-8 min-h-[3rem]">
          <span className="text-zinc-400 italic">@prompt:</span>
          <span className="text-zinc-900 leading-relaxed">
            {text}
            <span className="animate-pulse">|</span>
          </span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-zinc-200">
          {steps.map((item, i) => (
            <div key={i} className="p-4 rounded-xl border border-zinc-200 bg-zinc-50 transition-all duration-500 hover:bg-white">
              <item.icon className="w-5 h-5 text-zinc-600 mb-3" />
              <div className="text-[10px] text-zinc-400 uppercase tracking-widest mb-1">{item.label}</div>
              <div className="text-sm font-semibold text-zinc-800">{item.progress}</div>
              <div className="mt-2 h-1 w-full bg-zinc-200 rounded-full overflow-hidden">
                <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: item.progress === "Pending" ? "0%" : item.progress }}
                   transition={{ duration: 1.5, delay: 1 + (i * 0.5) }}
                   className="h-full bg-zinc-950"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
