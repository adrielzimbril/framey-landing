"use client";

import { Bot, Code2, MousePointer2, Rocket } from "lucide-react";

const steps = [
  {
    title: "Prompt the product",
    description: "Describe the business, audience, offer and preferred stack.",
    icon: Bot,
    color: "bg-[#f5d0fe]",
  },
  {
    title: "Review generated pages",
    description: "Framey creates sections, copy, tokens and responsive states.",
    icon: MousePointer2,
    color: "bg-[#ffe15c]",
  },
  {
    title: "Export real code",
    description: "Ship Next.js, React or Remix components without lock-in.",
    icon: Code2,
    color: "bg-[#dbeafe]",
  },
  {
    title: "Publish and iterate",
    description: "Deploy previews, measure performance and keep editing visually.",
    icon: Rocket,
    color: "bg-[#dcfce7]",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-[#f8f8f8] px-4 py-10 md:px-6">
      <div className="mx-auto max-w-[1220px] rounded-[34px] border border-zinc-200 bg-[#f1f1ef] p-5 md:p-8">
        <div className="mb-8 flex flex-col gap-5 border-b border-zinc-200 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
              How it works
            </p>
            <h2 className="mt-4 max-w-3xl text-[clamp(2.25rem,6vw,3rem)] font-semibold leading-[0.98] tracking-tight text-zinc-950">
              A workflow designed for engineers.
            </h2>
          </div>
          <p className="max-w-md text-base font-medium leading-relaxed text-zinc-600">
            The workflow is built for founders and teams who need the site, the
            source code and the launch system in the same place.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-[28px] border border-zinc-200 bg-zinc-200 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="bg-white p-6 md:p-8">
              <div className="mb-12 flex items-center justify-between">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${step.color}`}>
                  <step.icon className="h-6 w-6 text-zinc-950" />
                </div>
                <span className="text-sm font-semibold text-zinc-400">0{index + 1}</span>
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-zinc-950">
                {step.title}
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-zinc-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
