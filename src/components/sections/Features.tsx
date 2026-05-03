"use client";

import { motion } from "motion/react";
import {
  Bot,
  CheckCircle2,
  Code2,
  FileCode2,
  LayoutTemplate,
  MousePointer2,
  Palette,
  Rocket,
  Settings2,
} from "lucide-react";

const messages = [
  [
    "You",
    "Build a landing page for an AI analytics tool. Make it premium, light, bento, and exportable.",
  ],
  [
    "Framey",
    "Generated a conversion-focused structure with 9 sections, 37 components, SEO metadata and a deploy checklist.",
  ],
  [
    "You",
    "Make the hero more product-led and add a realistic dashboard mockup.",
  ],
];

const sections = [
  "Hero",
  "Proof",
  "Features",
  "How it works",
  "Pricing",
  "FAQ",
  "CTA",
  "Footer",
];
// const files = ["app/page.tsx", "components/hero.tsx", "components/pricing.tsx", "lib/content.ts", "routes/remix.ts"];
const files = ["app/page.tsx", "components/hero.tsx", "routes/remix.ts"];

export function Features() {
  return (
    <section id="features" className="bg-[#f8f8f8] px-4 py-10 md:px-6">
      <div className="mx-auto max-w-[1220px] rounded-[34px] border border-zinc-200 bg-white p-4 md:p-6">
        <div className="rounded-[28px] border border-zinc-200 bg-[#f8f8f8] p-5 md:p-8 lg:p-10">
          <div className="mb-8 grid gap-6 border-b border-zinc-200 pb-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="mb-5 w-fit rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
                Creation engine
              </p>
              <h2 className="max-w-4xl text-[clamp(2.25rem,6vw,3rem)] font-medium leading-[0.98] tracking-normal text-zinc-950">
                A builder that thinks in pages, files and launch states.
              </h2>
            </div>
            <p className="max-w-xl text-base font-medium leading-7 text-zinc-600 lg:justify-self-end">
              Framey is not a static mockup generator. It keeps the prompt,
              canvas, code structure, brand tokens and deploy checks in one
              product workflow.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-12">
            <div className="rounded-[28px] border border-zinc-200 bg-white p-5 md:p-6 lg:col-span-5">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-950 text-white">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-zinc-950">
                      Prompt workspace
                    </h3>
                    <p className="text-sm font-medium text-zinc-500">
                      Iteration memory included
                    </p>
                  </div>
                </div>
                <span
                  className="rounded-full px-3 py-1 text-[11px] font-semibold text-zinc-950"
                  style={{ backgroundColor: "var(--framey-accent)" }}
                >
                  Live
                </span>
              </div>

              <div className="space-y-3">
                {messages.map(([speaker, text], index) => (
                  <motion.div
                    key={`${speaker}-${index}`}
                    animate={index === 1 ? { y: [0, -4, 0] } : undefined}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`rounded-2xl border p-4 ${speaker === "Framey" ? "border-zinc-950 bg-zinc-950 text-white" : "border-zinc-200 bg-[#f8f8f8] text-zinc-800"}`}
                  >
                    <p
                      className={`mb-2 text-[10px] font-semibold uppercase tracking-widest ${speaker === "Framey" ? "text-zinc-400" : "text-zinc-500"}`}
                    >
                      {speaker}
                    </p>
                    <p className="text-sm font-medium leading-6">{text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-[#f8f8f8] p-5 md:p-6 lg:col-span-7">
              <div
                className="absolute right-8 top-8 h-28 w-28 rounded-full opacity-75 blur-xl"
                style={{ backgroundColor: "var(--framey-accent)" }}
              />
              <div className="relative z-10 mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-200 bg-white">
                    <LayoutTemplate className="h-5 w-5 text-zinc-950" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-zinc-950">
                      Generated page map
                    </h3>
                    <p className="text-sm font-medium text-zinc-500">
                      Every section is editable and exportable
                    </p>
                  </div>
                </div>
                <button className="w-fit rounded-full bg-white px-4 py-2 text-xs font-semibold text-zinc-950">
                  Regenerate layout
                </button>
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-3 md:grid-cols-4">
                {sections.map((section, index) => (
                  <div
                    key={section}
                    className="rounded-[20px] border border-zinc-200 bg-white p-4"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <span className="h-2 w-10 rounded-full bg-zinc-950" />
                      <CheckCircle2
                        className={`h-4 w-4 ${index < 6 ? "text-[#10a66a]" : "text-zinc-300"}`}
                      />
                    </div>
                    <p className="text-sm font-semibold text-zinc-950">
                      {section}
                    </p>
                    <p className="mt-1 text-[11px] font-medium text-zinc-500">
                      {index < 6 ? "Ready" : "Draft"}
                    </p>
                  </div>
                ))}
              </div>

              <div className="relative z-10 mt-4 grid gap-4 md:grid-cols-[0.92fr_1.08fr]">
                <div className="rounded-[22px] border border-zinc-200 bg-white p-4">
                  <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-zinc-950">
                    <Palette className="h-4 w-4" />
                    Brand tokens
                  </div>
                  <div className="flex gap-2">
                    {[
                      "#111111",
                      "var(--framey-accent)",
                      "var(--framey-accent-soft)",
                      "var(--framey-accent-second)",
                      "#ffffff",
                    ].map((color) => (
                      <span
                        key={color}
                        className="h-12 flex-1 rounded-2xl border border-zinc-200"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                <div className="rounded-[22px] border border-zinc-200 bg-white p-4">
                  <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-zinc-950">
                    <Settings2 className="h-4 w-4" />
                    Responsive states
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {["Desktop", "Tablet", "Mobile"].map((device) => (
                      <div
                        key={device}
                        className="rounded-2xl bg-[#f8f8f8] px-3 py-3 text-center text-[11px] font-semibold text-zinc-600"
                      >
                        {device}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ x: [0, 86, 22, 0], y: [0, -22, 18, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-5 right-6 z-20 hidden items-center gap-2 rounded-2xl border border-zinc-200 bg-white/80 px-4 py-3 text-sm font-semibold text-zinc-950 backdrop-blur-xl md:flex"
              >
                <MousePointer2 className="h-4 w-4" />
                Editing section order
              </motion.div>
            </div>

            <div className="rounded-[28px] border border-zinc-200 bg-zinc-950 p-5 text-white md:p-6 lg:col-span-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-medium">Code package</h3>
                  <p className="mt-1 text-sm font-medium text-zinc-400">
                    Generated source, not locked output
                  </p>
                </div>
                <Code2 className="h-5 w-5 text-zinc-400" />
              </div>
              <div className="space-y-2">
                {files.map((file) => (
                  <div
                    key={file}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
                  >
                    <span className="font-mono text-[12px] text-zinc-300">
                      {file}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#86efac]">
                      ready
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 lg:col-span-7 lg:grid-cols-3">
              {[
                [
                  Rocket,
                  "Deploy preview",
                  "Generate a preview URL with SEO, metadata and checks.",
                ],
                [
                  FileCode2,
                  "Framework export",
                  "Next.js first, React and Remix-ready structure.",
                ],
                [
                  CheckCircle2,
                  "QA handoff",
                  "Accessibility, responsive states and copy checks included.",
                ],
              ].map(([Icon, title, body]) => {
                const LucideIcon = Icon as typeof Rocket;

                return (
                  <div
                    key={title as string}
                    className="rounded-[28px] bg-white p-5"
                  >
                    <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200 bg-[#f8f8f8]">
                      <LucideIcon className="h-5 w-5 text-zinc-950" />
                    </div>
                    <h3 className="text-xl font-medium text-zinc-950">
                      {title as string}
                    </h3>
                    <p className="mt-3 text-sm font-medium leading-6 text-zinc-500">
                      {body as string}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
