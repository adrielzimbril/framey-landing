"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  Bot,
  Check,
  Code2,
  FileCode2,
  LayoutTemplate,
  MousePointer2,
  Play,
  Search,
  Sparkles,
} from "lucide-react";

const techTags = [
  {
    name: "Next.js",
    style: {
      backgroundColor: "var(--framey-accent)",
      borderColor: "var(--framey-accent)",
    },
  },
  {
    name: "React",
    style: { backgroundColor: "#E8FCFF", borderColor: "#B9F3FF" },
  },
  {
    name: "Remix",
    style: { backgroundColor: "#FFF3D1", borderColor: "#F3C84F" },
  },
  {
    name: "Tailwind",
    style: { backgroundColor: "#F3EEFF", borderColor: "#D8C7FF" },
  },
  {
    name: "TypeScript",
    style: { backgroundColor: "#FFF0F8", borderColor: "#FFD1EC" },
  },
];

const layers = [
  "Landing page",
  "Hero",
  "Navbar",
  "Content",
  "Image",
  "Pricing",
  "Testimonials",
  "Footer",
];
const inspectorRows = [
  ["Width", "1220", "Fixed"],
  ["Height", "Auto", "Hug"],
  ["Device", "Web", "Live"],
];

function BuilderDashboardMockup() {
  return (
    <div className="relative mx-auto w-full overflow-hidden rounded-[22px] bg-white sm:rounded-[28px]">
      <div className="flex h-10 items-center justify-between gap-3 bg-white px-3 sm:px-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#f3c64e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#52c46b]" />
        </div>
        <div className="hidden items-center gap-2 rounded-full border border-zinc-200 bg-[#f8f8f8] px-4 py-1 text-[11px] font-medium text-zinc-500 md:flex">
          <Search className="h-3.5 w-3.5" />
          framey.ai/builder/preview
        </div>
        <button
          className="rounded-full px-3 py-1 text-[11px] font-semibold text-zinc-950 max-[360px]:hidden"
          style={{ backgroundColor: "var(--framey-accent)" }}
        >
          Publish
        </button>
      </div>

      <div className="grid min-h-[460px] grid-cols-[70px_200px_1fr_210px] bg-[#f5f6f2] sm:min-h-[520px] max-xl:grid-cols-[64px_190px_1fr] max-lg:grid-cols-1">
        <aside className="flex flex-col items-center gap-4 border-r border-zinc-200 bg-white px-3 py-5 max-lg:hidden">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-zinc-950 text-white">
            <Sparkles className="h-4 w-4" />
          </div>
          {[LayoutTemplate, Code2, FileCode2, Bot].map((Icon, index) => (
            <button
              key={index}
              className="flex h-10 w-10 items-center justify-center rounded-2xl border border-zinc-200 bg-[#f8f8f8] text-zinc-600 transition-colors hover:border-zinc-950 hover:text-zinc-950"
            >
              <Icon className="h-4 w-4" />
            </button>
          ))}
        </aside>

        <aside className="border-r border-zinc-200 bg-white/72 p-3 backdrop-blur-xl max-lg:hidden">
          <div className="mb-4 grid grid-cols-2 rounded-2xl border border-zinc-200 bg-[#f8f8f8] p-1 text-center text-[11px] font-semibold">
            <button className="rounded-xl bg-white py-2 text-zinc-950">
              Pages
            </button>
            <button className="rounded-xl py-2 text-zinc-500">Layers</button>
          </div>
          <div className="space-y-2">
            {layers.map((layer, index) => (
              <motion.div
                key={layer}
                animate={
                  index === 0
                    ? {
                        backgroundColor: [
                          "var(--framey-accent-soft)",
                          "var(--framey-accent)",
                          "var(--framey-accent-soft)",
                        ],
                      }
                    : undefined
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex items-center gap-2 rounded-xl border border-zinc-200 px-3 py-2 text-[12px] font-semibold text-zinc-700"
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${index < 5 ? "bg-zinc-950" : "bg-zinc-300"}`}
                />
                {layer}
              </motion.div>
            ))}
          </div>
        </aside>

        <div className="relative min-w-0 overflow-hidden p-3 sm:p-4 md:p-6">
          <div
            className="absolute left-12 top-10 h-24 w-44 rotate-[-10deg] rounded-full opacity-80 blur-xl"
            style={{ backgroundColor: "var(--framey-accent)" }}
          />
          <div
            className="absolute bottom-10 right-16 h-28 w-28 rounded-full opacity-70 blur-xl"
            style={{ backgroundColor: "var(--framey-accent-second)" }}
          />

          <div className="relative z-10 mx-auto mb-5 flex max-w-xl items-center gap-2 rounded-2xl bg-white/78 p-2 backdrop-blur-xl sm:mb-6">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950 text-white">
              <Bot className="h-4 w-4" />
            </div>
            <p className="min-w-0 flex-1 truncate text-[12px] font-medium text-zinc-500">
              Design a premium website builder landing page
            </p>
            <button
              className="rounded-xl px-3 py-2 text-[12px] font-semibold text-zinc-950 sm:px-4"
              style={{ backgroundColor: "var(--framey-accent)" }}
            >
              Generate
            </button>
          </div>

          <div
            className="relative mx-auto w-full max-w-[440px] overflow-hidden rounded-[18px] bg-white sm:rounded-[22px]"
            style={{ borderColor: "var(--framey-accent)" }}
          >
            <div className="px-4 py-4 sm:px-5">
              <div className="flex items-center justify-between gap-2 text-[9px] font-semibold uppercase tracking-widest text-zinc-500 sm:text-[10px]">
                <span>Logipsum</span>
                <span>Portfolio</span>
                <span>Pricing</span>
                <span className="rounded-full bg-zinc-950 px-3 py-1 text-white">
                  Book
                </span>
              </div>
            </div>
            <div className="px-4 py-7 text-center sm:px-5">
              <h3 className="text-[clamp(1.9rem,10vw,2.5rem)] font-medium leading-[0.95] tracking-normal text-zinc-950">
                Design your lovely experience
              </h3>
              <p className="mx-auto mt-4 max-w-xs text-[12px] font-medium leading-5 text-zinc-500">
                A generated page with copy, responsive sections and clean
                exported components.
              </p>
              <button className="mt-5 rounded-full border border-zinc-300 bg-white px-4 py-2 text-[11px] font-semibold">
                Discover more
              </button>
            </div>
            <div
              className="h-28 border-t border-zinc-200"
              style={{ backgroundColor: "var(--framey-accent-soft)" }}
            >
              <div className="mx-auto flex h-full max-w-sm items-end justify-center gap-4">
                <div className="h-24 w-24 rounded-t-full bg-zinc-950/90" />
                <div className="mb-6 h-20 w-28 rounded-[28px] bg-white/80 backdrop-blur-xl" />
                <div
                  className="h-28 w-24 rounded-t-full"
                  style={{ backgroundColor: "var(--framey-accent)" }}
                />
              </div>
            </div>
          </div>

          <motion.div
            animate={{ x: [0, 120, 58, 0], y: [0, -30, 36, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-12 z-20 hidden items-center gap-2 rounded-2xl border border-zinc-200 bg-white/82 px-4 py-3 text-sm font-semibold text-zinc-950 backdrop-blur-xl md:flex"
          >
            <MousePointer2 className="h-4 w-4" />
            Editing hero image
          </motion.div>
        </div>

        <aside className="border-l border-zinc-200 bg-white/78 p-4 backdrop-blur-xl max-xl:hidden">
          <div className="mb-6 grid grid-cols-2 rounded-2xl border border-zinc-200 bg-[#f8f8f8] p-1 text-center text-[11px] font-semibold">
            <button className="rounded-xl bg-white py-2 text-zinc-950">
              Design
            </button>
            <button className="rounded-xl py-2 text-zinc-500">Interact</button>
          </div>
          <div className="space-y-6">
            <InspectorBlock
              title="Align"
              items={["Left", "Center", "Right", "Top", "Middle"]}
            />
            <div>
              <p className="mb-3 text-[11px] font-semibold text-zinc-950">
                Layout
              </p>
              <div className="space-y-2">
                {inspectorRows.map(([label, value, mode]) => (
                  <div
                    key={label}
                    className="grid grid-cols-[1fr_58px_58px] gap-2 text-[11px] font-semibold"
                  >
                    <span className="py-2 text-zinc-500">{label}</span>
                    <span className="rounded-xl bg-[#f8f8f8] py-2 text-center text-zinc-950">
                      {value}
                    </span>
                    <span className="rounded-xl bg-[#f8f8f8] py-2 text-center text-zinc-500">
                      {mode}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-3 text-[11px] font-semibold text-zinc-950">
                Palette
              </p>
              <div className="flex gap-2 rounded-2xl border border-zinc-200 bg-[#f8f8f8] p-2">
                {[
                  "#111111",
                  "var(--framey-accent)",
                  "var(--framey-accent-soft)",
                  "var(--framey-accent-second)",
                  "#ffffff",
                ].map((color) => (
                  <span
                    key={color}
                    className="h-8 flex-1 rounded-xl border border-zinc-200"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
            <button className="flex w-full items-center justify-center gap-2 rounded-2xl border border-zinc-300 bg-white py-3 text-[12px] font-semibold text-zinc-950">
              <Check className="h-4 w-4" />
              Ready to export
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}

function InspectorBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="mb-3 text-[11px] font-semibold text-zinc-950">{title}</p>
      <div className="grid grid-cols-5 gap-2">
        {items.map((item) => (
          <button
            key={item}
            aria-label={item}
            className="h-10 rounded-xl border border-zinc-200 bg-[#f8f8f8] text-[10px] font-semibold text-zinc-500"
          >
            {item[0]}
          </button>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative bg-white px-4 pb-12 pt-24 font-inter md:px-6 md:pt-28 lg:pb-20">
      <div className="mx-auto max-w-[1220px] rounded-[34px] bg-[#f7f7f7] p-4 md:p-6">
        <div className="flex flex-col overflow-hidden rounded-[28px] bg-white ">
          <div className="bg-white p-5 sm:p-6 md:p-8 lg:p-10">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-[#f8f8f8] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600">
                <Bot className="h-3.5 w-3.5" />
                AI website builder
              </div>

              <h1 className="max-w-3xl text-[clamp(2.35rem,8vw,3rem)] font-medium leading-[0.98] tracking-normal text-zinc-950">
                Build production websites from one prompt.
              </h1>

              <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-zinc-600 md:text-lg md:leading-8">
                Framey generates editable landing pages, source code and deploy
                previews for teams shipping Next.js, React and Remix sites.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {techTags.map((item) => (
                  <span
                    key={item.name}
                    className="rounded-full border px-3.5 py-1.5 text-xs font-semibold text-zinc-950"
                    style={item.style}
                  >
                    {item.name}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-col items-start gap-4">
                <div className="w-full max-w-2xl rounded-[22px] bg-[#f8f8f8] p-4 text-left transition-all md:p-5">
                  <div className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    <FileCode2 className="h-4 w-4" />
                    Input Prompt
                  </div>
                  <p className="text-sm font-medium leading-relaxed text-zinc-800">
                    Create a high-converting SaaS landing page. Generate the
                    page, code components, SEO metadata and launch checklist.
                  </p>
                </div>

                <div className="grid w-full gap-3 sm:flex sm:w-auto sm:flex-row">
                  <button
                    className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-zinc-950 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    style={{ backgroundColor: "var(--framey-accent)" }}
                  >
                    <Play className="h-4 w-4 fill-zinc-950" />
                    Generate a site free
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-[#f8f8f8] px-7 py-3 text-sm font-semibold text-zinc-950 transition-all hover:bg-zinc-50 active:scale-[0.98]">
                    Watch builder flow
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-[#f8f8f8] p-2 sm:p-3 md:p-5 lg:p-6">
            <div className="relative w-full">
              <div className="absolute left-4 top-4 z-10 hidden rounded-2xl bg-white/78 p-4 backdrop-blur-xl xl:block">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-zinc-950">
                  <Code2 className="h-4 w-4" />
                  Code output
                </div>
                <div className="space-y-2 text-[11px] font-medium text-zinc-500">
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-zinc-400" />
                    app/page.tsx
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-zinc-400" />
                    components/pricing.tsx
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-zinc-400" />
                    routes/remix-ready.ts
                  </div>
                </div>
              </div>

              <BuilderDashboardMockup />

              <div className="absolute bottom-4 right-4 z-10 hidden rounded-2xl bg-white/78 p-4 backdrop-blur-xl xl:block">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-zinc-950">
                  <Check className="h-4 w-4" />
                  Build checks
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {["SEO", "A11y", "Perf"].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl bg-[#f8f8f8] px-3.5 py-2 text-[11px] font-semibold text-zinc-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
