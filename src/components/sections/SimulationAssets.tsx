"use client";
import { motion } from "motion/react";
import { Search, Grid, List, Plus, Filter, Image as ImageIcon, FileCode, Type, Box, MoreVertical, Download } from "lucide-react";

const ASSETS = [
  { id: "01", name: "Brand_Logos", type: "folder", items: 12 },
  { id: "02", name: "Main_Hero_V2", type: "component", status: "Ready" },
  { id: "03", name: "Pricing_Bento", type: "component", status: "Draft" },
  { id: "04", name: "User_Avatars", type: "image", count: 24 },
  { id: "05", name: "Global_Tokens", type: "code", format: "JSON" },
  { id: "06", name: "Typography_System", type: "style", family: "Geist" },
];

export function SimulationAssets() {
  return (
    <div className="w-full h-full min-h-[400px] flex flex-col bg-white overflow-hidden relative">
      <div className="px-6 py-5 border-b border-zinc-100 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h3 className="text-sm font-semibold text-zinc-950 uppercase tracking-widest">Asset_Manager</h3>
          <div className="h-4 w-[1px] bg-zinc-100" />
          <div className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-50 border border-zinc-100">
            <Search className="w-3.5 h-3.5 text-zinc-400" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent border-none text-[12px] font-medium text-zinc-600 focus:outline-none w-24"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex p-1 rounded-lg bg-zinc-50 border border-zinc-100">
              <div className="p-1.5 rounded-md bg-white border border-zinc-200">
              <Grid className="w-3.5 h-3.5 text-zinc-950" />
            </div>
            <div className="p-1.5 rounded-md hover:bg-white/50 transition-colors cursor-pointer">
              <List className="w-3.5 h-3.5 text-zinc-400" />
            </div>
          </div>
          <button className="h-9 px-4 rounded-xl bg-zinc-950 text-white text-[11px] font-semibold flex items-center gap-2 hover:bg-zinc-800 transition-colors">
            <Plus className="w-3.5 h-3.5" />
            Import
          </button>
        </div>
      </div>

      <div className="flex-1 p-6 grid grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto">
        {ASSETS.map((asset, i) => (
          <motion.div
            key={asset.id} initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="group relative flex flex-col p-4 rounded-2xl border border-zinc-100 bg-white hover:border-zinc-300 transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                asset.type === "folder" ? "bg-zinc-100 text-zinc-600" :
                asset.type === "component" ? "bg-zinc-950 text-white" :
                asset.type === "image" ? "bg-zinc-100 text-zinc-700" :
                "bg-zinc-50 text-zinc-400"
              }`}>
                {asset.type === "folder" && <Box className="w-5 h-5" />}
                {asset.type === "component" && <Grid className="w-5 h-5" />}
                {asset.type === "image" && <ImageIcon className="w-5 h-5" />}
                {asset.type === "code" && <FileCode className="w-5 h-5" />}
                {asset.type === "style" && <Type className="w-5 h-5" />}
              </div>
              <MoreVertical className="w-4 h-4 text-zinc-300 group-hover:text-zinc-400 transition-colors" />
            </div>
            
            <h4 className="text-[12px] font-semibold text-zinc-950 mb-1 truncate">{asset.name}</h4>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-medium text-zinc-400 uppercase tracking-tight">
                {asset.items || asset.status || asset.count || asset.format || "System"}
              </span>
              <Download className="w-3.5 h-3.5 text-zinc-300 opacity-0 group-hover:opacity-100 transition-all" />
            </div>

            {/* Hover Indicator */}
            <div className="absolute inset-x-0 bottom-0 h-1 bg-zinc-950 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-2xl" />
          </motion.div>
        ))}

        {/* Empty States / Skeleton */}
        {[1, 2, 3].map(i => (
          <div key={i} className="p-4 rounded-2xl border border-dashed border-zinc-100 flex items-center justify-center opacity-40">
            <Plus className="w-4 h-4 text-zinc-200" />
          </div>
        ))}
      </div>

      <div className="px-6 py-4 bg-zinc-50/50 border-t border-zinc-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
           <Filter className="w-3 h-3 text-zinc-400" />
           <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest">Filter: All_Assets</span>
        </div>
        <span className="text-[10px] font-semibold text-zinc-300">Last synced: 2m ago</span>
      </div>
    </div>
  );
}
