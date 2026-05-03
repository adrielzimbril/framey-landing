"use client";

import {
  ArrowRight,
  CheckCircle2,
  Code2,
  FileCode2,
  Send,
  Sparkles,
} from "lucide-react";

export function CTA() {
  return (
    <section className="bg-[#f8f8f8] px-4 py-10 md:px-6">
      <div className="mx-auto max-w-[1220px] rounded-[34px] border border-zinc-200 bg-white p-4 md:p-6">
        <div className="grid overflow-hidden rounded-[28px] border border-zinc-200 bg-[#f8f8f8] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-6 md:p-10">
            <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
              <Sparkles className="h-3.5 w-3.5" />
              Start from the brief
            </div>
            <h2 className="max-w-4xl text-[clamp(2.25rem,6vw,3rem)] font-medium leading-[0.98] tracking-normal text-zinc-950">
              Give Framey the idea. Get the page and the project.
            </h2>
            <p className="mt-6 max-w-xl text-base font-medium leading-7 text-zinc-600">
              Describe the offer, audience and tone. Framey builds the landing
              page, the responsive sections, the copy system and the export
              package.
            </p>

            <div className="mt-8 grid gap-3 sm:flex sm:flex-row">
              <button
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-zinc-950"
                style={{ backgroundColor: "var(--framey-accent)" }}
              >
                Generate a website
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950">
                View export sample
              </button>
            </div>
          </div>

          <div className="grid gap-px bg-zinc-200 md:grid-cols-2 lg:grid-cols-1">
            <div className="bg-white p-5 md:p-7">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-950 text-white">
                    <Send className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-zinc-950">
                      Brief inbox
                    </h3>
                    <p className="text-sm font-medium text-zinc-500">
                      Ready for generation
                    </p>
                  </div>
                </div>
                <span className="rounded-full border border-zinc-200 bg-[#f8f8f8] px-3 py-1 text-[11px] font-semibold text-zinc-500">
                  01
                </span>
              </div>
              <div className="rounded-[22px] border border-zinc-200 bg-[#f8f8f8] p-4">
                <p className="text-sm font-medium leading-6 text-zinc-700">
                  Build a premium website builder landing page for teams
                  shipping AI-generated Next.js and Remix sites.
                </p>
              </div>
            </div>

            <div className="bg-zinc-950 p-5 text-white md:p-7">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                  <Code2 className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Export summary</h3>
                  <p className="text-sm font-medium text-zinc-400">
                    Production package
                  </p>
                </div>
              </div>
              <div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4 font-mono text-[12px] leading-6 text-zinc-300">
                <div>routes: 6</div>
                <div>components: 42</div>
                <div>framework: next</div>
                <div className="text-[#86efac]">status: build passed</div>
              </div>
            </div>

            <div className="bg-white hidden p-5 md:p-7">
              <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-zinc-950">
                <FileCode2 className="h-4 w-4" />
                Launch checklist
              </div>
              <div className="grid gap-3">
                {[
                  "SEO metadata",
                  "Responsive states",
                  "Clean components",
                  "Preview URL",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-[#f8f8f8] px-4 py-3"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#10a66a]" />
                    <span className="text-sm font-semibold text-zinc-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
