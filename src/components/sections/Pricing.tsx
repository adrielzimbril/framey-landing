"use client";

import { ArrowRight, Check, Code2, Layers3, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Launch",
    price: "$29",
    description:
      "For founders and creators turning ideas into polished first pages.",
    features: [
      "20 generations per month",
      "Next.js export",
      "Deploy previews",
      "Basic brand tokens",
    ],
  },
  {
    name: "Studio",
    price: "$89",
    description:
      "For teams that ship many landing pages and need reliable handoff.",
    features: [
      "Unlimited projects",
      "React and Remix export",
      "Shared components",
      "Team review links",
      "Priority generations",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-[#f8f8f8] px-4 py-10 md:px-6">
      <div className="mx-auto max-w-[1220px] rounded-[34px] border border-zinc-200 bg-white p-4 md:p-6">
        <div className="rounded-[28px] border border-zinc-200 bg-[#f8f8f8] p-5 md:p-8 lg:p-10">
          <div className="mb-8 grid gap-6 border-b border-zinc-200 pb-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="mb-5 w-fit rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
                Pricing
              </p>
              <h2 className="max-w-4xl text-[clamp(2.25rem,6vw,3rem)] font-medium leading-[0.98] tracking-normal text-zinc-950">
                Pay for launches, not for locked mockups.
              </h2>
            </div>
            <div className="rounded-[24px] border border-zinc-200 bg-white p-4">
              <div className="grid gap-3 md:grid-cols-3">
                {["Prompt", "Preview", "Export"].map((step, index) => (
                  <div
                    key={step}
                    className="rounded-2xl border border-zinc-200 bg-[#f8f8f8] p-4"
                  >
                    <div className="text-2xl font-medium text-zinc-950">
                      0{index + 1}
                    </div>
                    <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="rounded-[28px] border border-zinc-200 bg-white p-5 md:p-6">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-950 text-white">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-medium text-zinc-950">
                Included in every plan
              </h3>
              <p className="mt-3 text-sm font-medium leading-6 text-zinc-500">
                The same generation engine, the same export ownership, and the
                same launch checklist. Upgrade for volume and collaboration.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  "No vendor lock-in",
                  "Responsive states",
                  "SEO metadata",
                  "Reusable sections",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-[#f8f8f8] px-4 py-3"
                  >
                    <Check className="h-4 w-4 text-[#10a66a]" />
                    <span className="text-sm font-semibold text-zinc-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="mt-5 rounded-[22px] border border-zinc-200 p-4"
                style={{ backgroundColor: "var(--framey-accent-soft)" }}
              >
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-zinc-950">
                  <Code2 className="h-4 w-4" />
                  Export stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "React", "Remix", "Tailwind"].map((stack) => (
                    <span
                      key={stack}
                      className="rounded-full border border-zinc-300 bg-white px-3 py-1 text-[11px] font-semibold text-zinc-700"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {plans.map((plan, index) => {
                const featured = index === 1;

                return (
                  <div
                    key={plan.name}
                    className={`flex min-h-[520px] flex-col rounded-[28px] p-6 md:min-h-[620px] md:p-8 ${
                      featured
                        ? "border-zinc-950 bg-zinc-950 text-white"
                        : "border-zinc-200 bg-white text-zinc-950"
                    }`}
                  >
                    <div className="mb-8 flex items-center justify-between">
                      <span
                        className={`rounded-full border px-3 py-1 text-[11px] font-semibold ${
                          featured
                            ? "border-white/15 bg-white/10 text-zinc-200"
                            : "border-zinc-200 bg-[#f8f8f8] text-zinc-600"
                        }`}
                      >
                        {featured ? "Best for teams" : "Start simple"}
                      </span>
                      <Layers3
                        className={`h-5 w-5 ${featured ? "text-zinc-500" : "text-zinc-400"}`}
                      />
                    </div>

                    <h3 className="text-4xl font-medium tracking-normal">
                      {plan.name}
                    </h3>
                    <p
                      className={`mt-4 text-sm font-medium leading-6 ${featured ? "text-zinc-400" : "text-zinc-500"}`}
                    >
                      {plan.description}
                    </p>

                    <div className="my-10 flex items-end gap-2">
                      <span className="text-6xl font-medium tracking-normal">
                        {plan.price}
                      </span>
                      <span
                        className={`pb-2 text-sm font-medium ${featured ? "text-zinc-500" : "text-zinc-500"}`}
                      >
                        /month
                      </span>
                    </div>

                    <div className="space-y-3">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <span
                            className={`flex h-5 w-5 items-center justify-center rounded-full ${
                              featured
                                ? "bg-white text-zinc-950"
                                : "bg-zinc-950 text-white"
                            }`}
                          >
                            <Check className="h-3 w-3" />
                          </span>
                          <span
                            className={`text-sm font-medium ${featured ? "text-zinc-300" : "text-zinc-700"}`}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      className={`mt-auto inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold ${
                        featured ? "text-zinc-950" : "bg-zinc-950 text-white"
                      }`}
                      style={
                        featured
                          ? { backgroundColor: "var(--framey-accent)" }
                          : undefined
                      }
                    >
                      Choose {plan.name}
                      <ArrowRight className="h-4 w-4" />
                    </button>
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
