"use client";
import { motion } from "motion/react";
import { Terminal, Send, Sparkles, Command, Check } from "lucide-react";
import { useState, useEffect } from "react";

const MESSAGES = [
  { role: "user", content: "Create a launch page for an AI analytics product. Make it premium, bento-based and ready for Next.js." },
  { role: "ai", content: "Generated a conversion-focused hero, product proof, pricing and FAQ with responsive sections." },
  { role: "ai", content: "Created React components, Tailwind tokens, metadata and a deploy checklist." },
  { role: "user", content: "Add a stronger enterprise plan and make the CTA more direct." },
  { role: "ai", content: "Updated pricing, tightened the copy and synced the new layout to the canvas." }
];

export function SimulationChat() {
  const [visibleMessages, setVisibleMessages] = useState(0);

  useEffect(() => {
    if (visibleMessages < MESSAGES.length) {
      const timer = setTimeout(() => {
        setVisibleMessages(prev => prev + 1);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [visibleMessages]);

  return (
    <div className="w-full h-full min-h-[400px] flex flex-col bg-white overflow-hidden relative">
      <div className="px-6 py-4 border-b border-zinc-100 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-zinc-950 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-900 leading-none mb-1">Framey AI</h3>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-950 animate-pulse" />
              <span className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider">Ready to build</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-8 px-3 rounded-lg border border-zinc-100 flex items-center gap-2 text-[11px] font-semibold text-zinc-500 hover:bg-zinc-50 transition-colors cursor-pointer">
            <Command className="w-3 h-3" />
            History
          </div>
        </div>
      </div>

      <div className="flex-1 p-6 overflow-y-auto space-y-6 scroll-smooth">
        {MESSAGES.slice(0, visibleMessages).map((msg, i) => (
          <motion.div
            key={i} initial={false}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
          >
            <div className={`max-w-[85%] rounded-2xl p-4 text-[13px] leading-relaxed ${
              msg.role === "user" 
                ? "bg-zinc-950 text-white rounded-tr-none" 
                : "bg-zinc-50 text-zinc-600 border border-zinc-100 rounded-tl-none"
            }`}>
              {msg.content}
            </div>
            <div className="mt-2 flex items-center gap-2 px-1">
              <span className="text-[9px] font-semibold text-zinc-300 uppercase tracking-tighter">
                {msg.role === "user" ? "You" : "Framey AI"} • Just now
              </span>
              {msg.role === "ai" && (
                <div className="flex items-center gap-1">
                  <Check className="w-2.5 h-2.5 text-zinc-600" />
                  <span className="text-[9px] font-semibold text-zinc-600 uppercase tracking-tighter">Success</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
        
        {visibleMessages < MESSAGES.length && (
          <motion.div initial={false}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-zinc-400"
          >
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-200 animate-bounce [animation-delay:-0.3s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-200 animate-bounce [animation-delay:-0.15s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-200 animate-bounce" />
            </div>
            <span className="text-[11px] font-medium italic">AI is thinking...</span>
          </motion.div>
        )}
      </div>

      <div className="p-6 border-t border-zinc-100 bg-zinc-50/50">
        <div className="relative group">
          <input 
            type="text" 
            placeholder="Describe your design..."
            className="w-full bg-white border border-zinc-200 rounded-2xl py-4 pl-5 pr-14 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-950/5 focus:border-zinc-950 transition-all"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-xl bg-zinc-950 flex items-center justify-center text-white cursor-pointer hover:bg-zinc-800 transition-colors">
            <Send className="w-4 h-4" />
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-zinc-400">
             <Terminal className="w-3 h-3" />
             <span className="text-[10px] font-semibold uppercase tracking-widest">Natural_Language_Processing</span>
          </div>
        </div>
      </div>
    </div>
  );
}
